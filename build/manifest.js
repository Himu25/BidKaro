export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-07804481.js","js":["start-07804481.js","chunks/vendor-c278652d.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/8.js'),
			() => import('./server/nodes/9.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: () => import('./server/entries/endpoints/index.ts.js'),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/items\/?$/,
				params: null,
				path: "/dashboard/items",
				shadow: () => import('./server/entries/endpoints/dashboard/items/index.ts.js'),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/items\/new\/?$/,
				params: null,
				path: "/dashboard/items/new",
				shadow: () => import('./server/entries/endpoints/dashboard/items/new.ts.js'),
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/sessions\/?$/,
				params: null,
				load: () => import('./server/entries/endpoints/sessions/index.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/items\/?$/,
				params: null,
				path: "/items",
				shadow: () => import('./server/entries/endpoints/items/index.ts.js'),
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/items\/search\/?$/,
				params: null,
				load: () => import('./server/entries/endpoints/items/search.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/items\/([^/]+?)\/likes\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => import('./server/entries/endpoints/items/_id_/likes.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/items\/([^/]+?)\/bids\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => import('./server/entries/endpoints/items/_id_/bids.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/items\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: () => import('./server/entries/endpoints/items/_id_.ts.js'),
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: () => import('./server/entries/endpoints/users/_id_.ts.js'),
				a: [0,7],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/signout\/?$/,
				params: null,
				load: () => import('./server/entries/endpoints/auth/signout.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/auth\/signin\/?$/,
				params: null,
				path: "/auth/signin",
				shadow: () => import('./server/entries/endpoints/auth/signin.ts.js'),
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/auth\/signup\/?$/,
				params: null,
				path: "/auth/signup",
				shadow: () => import('./server/entries/endpoints/auth/signup.ts.js'),
				a: [0,9],
				b: [1]
			}
		]
	}
};
