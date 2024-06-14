import { randomBytes } from "crypto";
import { client } from "./client";
export const withLock = async (key: string, cb: (signal: any) => any) => {
	const retryDelayMs = 100;
	let retries = 20;
	const token = randomBytes(6).toString('hex');
	const lockKey = `lock:${key}`;
	while (retries <= 20) {
		retries--;
		const acquire = client.set(lockKey, token, {
			NX: true,
			PX: 2000
		})
		if (!acquire) {
			await pause(retryDelayMs);
			continue;
		}
		try {
			const signal = { expired: false }
			setTimeout(() => {
			signal.expired = true	
			},2000)
			const result = await cb(signal)
			return result;
		} finally{
			await client.unlock(lockKey,token)
		}
	}

};

const buildClientProxy = () => {};

export const pause = (duration: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};
