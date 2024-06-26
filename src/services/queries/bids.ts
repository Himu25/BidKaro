import { bidHistoryKey, itemByPriceKey, itemsKey } from '$services/keys';
import { client, pause, withLock } from '$services/redis';
import type { CreateBidAttrs, Bid } from '$services/types';
import { DateTime } from 'luxon';
import { getItem } from './items';

export const createBid = async (attrs: CreateBidAttrs) => {
	await withLock(attrs.itemId, async (signal: any) => {
		const item = await getItem(attrs.itemId)
	if (!item) {
		throw new Error("Item doesn't exists");	
	}
	if (item.price >= attrs.amount) {
		throw new Error("Bid amount is less than previous bid");	
	}
	if (item.endingAt.toMillis() <= Date.now()) {
		throw new Error("Bidding is no longer open");
	}
		if (signal.expired) {
			throw new Error("Lock Expired");
			
		}
		await Promise.all([
		client.rPush(bidHistoryKey(attrs.itemId), serializeBidHistory(attrs.amount, attrs.createdAt.toMillis())),
		client.hSet(itemsKey(attrs.itemId), {
			price: attrs.amount,
			bids: item.bids + 1,
			highestBidUserId: attrs.userId
		}),
		client.zAdd(itemByPriceKey(), {
		value: item.id,
		score: attrs.amount,
		})
		])
	})
};

export const getBidHistory = async (itemId: string, offset = 0, count = 10): Promise<Bid[]> => {
	const bids = await client.lRange(bidHistoryKey(itemId), -1*offset -count, -1*offset-1)
	const bids_ = bids.map((bid) => {
		return deserializeBidHistory(bid)
	})
	return bids_;
};

const serializeBidHistory = (amount: number, createdAt: number) => {
	return `${amount}:${createdAt}`;
}

const deserializeBidHistory = (bid: string) => {
	const [amount, createdAt] = bid.split(":");
	return {
		amount: parseFloat(amount),
		createdAt: DateTime.fromMillis(parseInt(createdAt))
	}
}