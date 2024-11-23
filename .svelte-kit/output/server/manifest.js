export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-f063010d.js","js":["start-f063010d.js","chunks/vendor-041ace6d.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: () => import('./entries/endpoints/index.ts.js'),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/items\/?$/,
				params: null,
				path: "/dashboard/items",
				shadow: () => import('./entries/endpoints/dashboard/items/index.ts.js'),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dashboard\/items\/new\/?$/,
				params: null,
				path: "/dashboard/items/new",
				shadow: () => import('./entries/endpoints/dashboard/items/new.ts.js'),
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/subscribe\/?$/,
				params: null,
				load: () => import('./entries/endpoints/subscribe.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/sessions\/?$/,
				params: null,
				load: () => import('./entries/endpoints/sessions/index.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/privacy\/?$/,
				params: null,
				path: "/privacy",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/items\/?$/,
				params: null,
				path: "/items",
				shadow: () => import('./entries/endpoints/items/index.ts.js'),
				a: [0,7],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/items\/search\/?$/,
				params: null,
				load: () => import('./entries/endpoints/items/search.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/items\/([^/]+?)\/likes\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => import('./entries/endpoints/items/_id_/likes.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/items\/([^/]+?)\/bids\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => import('./entries/endpoints/items/_id_/bids.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/items\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: () => import('./entries/endpoints/items/_id_.ts.js'),
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: () => import('./entries/endpoints/users/_id_.ts.js'),
				a: [0,9],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/signout\/?$/,
				params: null,
				load: () => import('./entries/endpoints/auth/signout.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/auth\/signin\/?$/,
				params: null,
				path: "/auth/signin",
				shadow: () => import('./entries/endpoints/auth/signin.ts.js'),
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/auth\/signup\/?$/,
				params: null,
				path: "/auth/signup",
				shadow: () => import('./entries/endpoints/auth/signup.ts.js'),
				a: [0,11],
				b: [1]
			}
		]
	}
};
