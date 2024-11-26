var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  a: () => itemByPriceKey,
  b: () => itemByEndingTimeKey,
  c: () => client,
  d: () => itemsKey,
  e: () => itemIndexKey,
  f: () => bidHistoryKey,
  g: () => usersKey,
  h: () => usernamesKey,
  i: () => itemByViewKey,
  j: () => usernamesUniqueKey,
  p: () => pageCacheKey,
  s: () => sessionsKey,
  u: () => userLikesKey
});
var import_redis = __toModule(require("redis"));
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
      type: import_redis.SchemaFieldTypes.TEXT,
      SORTABLE: true
    },
    description: {
      type: import_redis.SchemaFieldTypes.TEXT
    },
    ownerId: {
      type: import_redis.SchemaFieldTypes.TAG
    },
    endingAt: {
      type: import_redis.SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    bids: {
      type: import_redis.SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    views: {
      type: import_redis.SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    price: {
      type: import_redis.SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    },
    likes: {
      type: import_redis.SchemaFieldTypes.NUMERIC,
      SORTABLE: true
    }
  }, {
    ON: "HASH",
    PREFIX: itemsKey("")
  });
};
const client = (0, import_redis.createClient)({
  socket: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT)
  },
  password: process.env.REDIS_PW,
  scripts: {
    incrementView: (0, import_redis.defineScript)({
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
    unlock: (0, import_redis.defineScript)({
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
