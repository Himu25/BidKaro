import {
  S as Z,
  i as q,
  s as A,
  e as p,
  F as I,
  k as D,
  t as H,
  c as u,
  a as c,
  G as S,
  d as i,
  m as j,
  h as B,
  b as l,
  g as P,
  H as r,
  j as F,
  l as L,
  I as M,
} from "./vendor-c278652d.js";
function N(n) {
  let t, e, s, a, g, v, d, m, w, E, h, _;
  return {
    c() {
      (t = p("div")),
        (e = p("div")),
        (s = I("svg")),
        (a = I("path")),
        (g = D()),
        (v = p("div")),
        (d = p("div")),
        (m = p("span")),
        (w = H("Error")),
        (E = D()),
        (h = p("p")),
        (_ = H(n[0])),
        this.h();
    },
    l(f) {
      t = u(f, "DIV", { class: !0 });
      var o = c(t);
      e = u(o, "DIV", { class: !0 });
      var b = c(e);
      s = S(b, "svg", { class: !0, viewBox: !0, xmlns: !0 });
      var y = c(s);
      (a = S(y, "path", { d: !0 })),
        c(a).forEach(i),
        y.forEach(i),
        b.forEach(i),
        (g = j(o)),
        (v = u(o, "DIV", { class: !0 }));
      var k = c(v);
      d = u(k, "DIV", { class: !0 });
      var x = c(d);
      m = u(x, "SPAN", { class: !0 });
      var V = c(m);
      (w = B(V, "Error")),
        V.forEach(i),
        (E = j(x)),
        (h = u(x, "P", { class: !0 }));
      var C = c(h);
      (_ = B(C, n[0])),
        C.forEach(i),
        x.forEach(i),
        k.forEach(i),
        o.forEach(i),
        this.h();
    },
    h() {
      l(
        a,
        "d",
        "M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
      ),
        l(s, "class", "w-6 h-6 text-white fill-current"),
        l(s, "viewBox", "0 0 40 40"),
        l(s, "xmlns", "http://www.w3.org/2000/svg"),
        l(e, "class", "flex items-center justify-center w-12 bg-red-500"),
        l(m, "class", "font-semibold text-red-500 dark:text-red-400"),
        l(h, "class", "text-sm text-gray-600 dark:text-gray-200"),
        l(d, "class", "mx-3"),
        l(v, "class", "px-4 py-2 -mx-3"),
        l(
          t,
          "class",
          "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
        );
    },
    m(f, o) {
      P(f, t, o),
        r(t, e),
        r(e, s),
        r(s, a),
        r(t, g),
        r(t, v),
        r(v, d),
        r(d, m),
        r(m, w),
        r(d, E),
        r(d, h),
        r(h, _);
    },
    p(f, o) {
      o & 1 && F(_, f[0]);
    },
    d(f) {
      f && i(t);
    },
  };
}
function G(n) {
  let t,
    e = n[0] && N(n);
  return {
    c() {
      e && e.c(), (t = L());
    },
    l(s) {
      e && e.l(s), (t = L());
    },
    m(s, a) {
      e && e.m(s, a), P(s, t, a);
    },
    p(s, [a]) {
      s[0]
        ? e
          ? e.p(s, a)
          : ((e = N(s)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: M,
    o: M,
    d(s) {
      e && e.d(s), s && i(t);
    },
  };
}
function z(n, t, e) {
  let { err: s = "" } = t;
  return (
    (n.$$set = (a) => {
      "err" in a && e(0, (s = a.err));
    }),
    [s]
  );
}
class K extends Z {
  constructor(t) {
    super();
    q(this, t, z, G, A, { err: 0 });
  }
}
export { K as E };
