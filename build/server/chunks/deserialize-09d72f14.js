import { DateTime } from "luxon";
const deserialize = (id, item) => {
  return {
    id,
    name: item.name,
    description: item.description,
    imageUrl: item.imageUrl,
    highestBidUserId: item.highestBidUserId,
    ownerId: item.ownerId,
    createdAt: DateTime.fromMillis(parseInt(item.createdAt)),
    endingAt: DateTime.fromMillis(parseInt(item.endingAt)),
    views: parseInt(item.views),
    likes: parseInt(item.likes),
    bids: parseInt(item.bids),
    price: parseFloat(item.price)
  };
};
export { deserialize as d };
