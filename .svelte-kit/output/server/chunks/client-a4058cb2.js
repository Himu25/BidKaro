import { SchemaFieldTypes, createClient, defineScript } from "redis";
const pageCacheKey = (id) => `pagecache#${id}`;
const usersKey = (userId) => `users#${userId}`;
const sessionsKey = (sessionId) => `sessions#${sessionId}`;
const itemsKey = (itemId) => `items#${itemId}`;
const usernamesUniqueKey = () => "usernames:unique";
const userLikesKey = (userId) => `users:likes#${userId}`;
const usernamesKey = () => "usernames";
const itemByViewKey = () => "items:views";
const itemByEndingTimeKey = () => "items:endingTime";
const itemViewskey = (itemId) => `items:views#${itemId}`;
const itemByPriceKey = () => "items:price";
const bidHistoryKey = (itemId) => `bid:history#${itemId}`;
const itemIndexKey = () => "idx:items";
const createIndexes = async () => {
  const indexes = await client.ft._list();
  const exists = indexes.find((index) => {
    return index === itemIndexKey();
  });
  if (exists) {
    return;
  }
  await client.ft.create(itemIndexKey(), {
    name: {
      type: SchemaFieldTypes.TEXT,
      SORTABLE: true
    },
    description: {
      type: SchemaFieldTypes.TEXT
    },
    ownerId: {
      type: SchemaFieldTypes.TAG
    },
    endingAt: {
      type: SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    bids: {
      type: SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    views: {
      type: SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    price: {
      type: SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    likes: {
      type: SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    }
  }, {
    ON: "HASH",
    PREFIX: itemsKey("")
  });
};
const client = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT)
  },
  password: process.env.REDIS_PW,
  scripts: {
    incrementView: defineScript({
      NUMBER_OF_KEYS: 3,
      SCRIPT: `
			local itemViewsKey = KEYS[1]
            local itemsKey = KEYS[2]
			local itemByViewKey = KEYS[3]
			local itemId = ARGV[1]
			local userId = ARGV[2]
            local inserted = redis.call("PFADD",itemViewsKey,userId)
			if inserted == 1 then
			 redis.call("HINCRBY",itemsKey,"views",1)
			 redis.call("ZINCRBY",itemByViewKey,1,itemId)
			end
			`,
      transformArguments(itemId, userId) {
        return [
          itemViewskey(itemId),
          itemsKey(itemId),
          itemByViewKey(),
          itemId,
          userId
        ];
      },
      transformReply() {
      }
    }),
    unlock: defineScript({
      NUMBER_OF_KEYS: 1,
      transformArguments(key, token) {
        return [key, token];
      },
      transformReply(reply) {
        return reply;
      },
      SCRIPT: `
				if redis.call('GET', KEYS[1]) == ARGV[1] then
					return redis.call('DEL', KEYS[1])
				end
			`
    })
  }
});
client.on("error", (err) => console.error(err));
client.connect();
client.on("connect", async () => {
  try {
    await createIndexes();
  } catch (error) {
    console.error(error);
  }
});
export { itemByPriceKey as a, itemByEndingTimeKey as b, client as c, itemsKey as d, itemIndexKey as e, bidHistoryKey as f, usersKey as g, usernamesKey as h, itemByViewKey as i, usernamesUniqueKey as j, pageCacheKey as p, sessionsKey as s, userLikesKey as u };
