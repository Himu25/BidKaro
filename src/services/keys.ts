export const pageCacheKey = (id: string) => `pagecache#${id}`;
export const usersKey = (userId: string) => `users#${userId}`;
export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;
export const itemsKey = (itemId: string) => `items#${itemId}`;
export const usernamesUniqueKey = () => 'usernames:unique';
export const userLikesKey = (userId: string) => `users:likes#${userId}`;
export const usernamesKey = () => 'usernames';
export const itemByViewKey = () => 'items:views';
export const itemByEndingTimeKey = () => "items:endingTime"
export const itemViewskey = (itemId: string) => `items:views#${itemId}`
export const itemByPriceKey = ()=> "items:price"

export const bidHistoryKey = (itemId: string)=> `bid:history#${itemId}`