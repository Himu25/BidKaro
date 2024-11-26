var tc = Object.defineProperty,
  ec = Object.defineProperties;
var ic = Object.getOwnPropertyDescriptors;
var Si = Object.getOwnPropertySymbols;
var Ys = Object.prototype.hasOwnProperty,
  qs = Object.prototype.propertyIsEnumerable;
var vn = (i, t, e) =>
    t in i
      ? tc(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (i[t] = e),
  D = (i, t) => {
    for (var e in t || (t = {})) Ys.call(t, e) && vn(i, e, t[e]);
    if (Si) for (var e of Si(t)) qs.call(t, e) && vn(i, e, t[e]);
    return i;
  },
  dt = (i, t) => ec(i, ic(t));
var Sn = (i, t) => {
  var e = {};
  for (var n in i) Ys.call(i, n) && t.indexOf(n) < 0 && (e[n] = i[n]);
  if (i != null && Si)
    for (var n of Si(i)) t.indexOf(n) < 0 && qs.call(i, n) && (e[n] = i[n]);
  return e;
};
var v = (i, t, e) => (vn(i, typeof t != "symbol" ? t + "" : t, e), e);
function he() {}
const nc = (i) => i;
function Qn(i, t) {
  for (const e in t) i[e] = t[e];
  return i;
}
function Gr(i) {
  return i();
}
function Zs() {
  return Object.create(null);
}
function mi(i) {
  i.forEach(Gr);
}
function sc(i) {
  return typeof i == "function";
}
function oc(i, t) {
  return i != i
    ? t == t
    : i !== t || (i && typeof i == "object") || typeof i == "function";
}
let Mi;
function bp(i, t) {
  return Mi || (Mi = document.createElement("a")), (Mi.href = t), i === Mi.href;
}
function rc(i) {
  return Object.keys(i).length === 0;
}
function ac(i, ...t) {
  if (i == null) return he;
  const e = i.subscribe(...t);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function yp(i, t, e) {
  i.$$.on_destroy.push(ac(t, e));
}
function xp(i, t, e, n) {
  if (i) {
    const s = Kr(i, t, e, n);
    return i[0](s);
  }
}
function Kr(i, t, e, n) {
  return i[1] && n ? Qn(e.ctx.slice(), i[1](n(t))) : e.ctx;
}
function _p(i, t, e, n) {
  if (i[2] && n) {
    const s = i[2](n(e));
    if (t.dirty === void 0) return s;
    if (typeof s == "object") {
      const o = [],
        r = Math.max(t.dirty.length, s.length);
      for (let a = 0; a < r; a += 1) o[a] = t.dirty[a] | s[a];
      return o;
    }
    return t.dirty | s;
  }
  return t.dirty;
}
function wp(i, t, e, n, s, o) {
  if (s) {
    const r = Kr(t, e, n, o);
    i.p(r, s);
  }
}
function vp(i) {
  if (i.ctx.length > 32) {
    const t = [],
      e = i.ctx.length / 32;
    for (let n = 0; n < e; n++) t[n] = -1;
    return t;
  }
  return -1;
}
const Jr = typeof window != "undefined";
let lc = Jr ? () => window.performance.now() : () => Date.now(),
  Qr = Jr ? (i) => requestAnimationFrame(i) : he;
const Oe = new Set();
function ta(i) {
  Oe.forEach((t) => {
    t.c(i) || (Oe.delete(t), t.f());
  }),
    Oe.size !== 0 && Qr(ta);
}
function cc(i) {
  let t;
  return (
    Oe.size === 0 && Qr(ta),
    {
      promise: new Promise((e) => {
        Oe.add((t = { c: i, f: e }));
      }),
      abort() {
        Oe.delete(t);
      },
    }
  );
}
let fn = !1;
function hc() {
  fn = !0;
}
function uc() {
  fn = !1;
}
function dc(i, t, e, n) {
  for (; i < t; ) {
    const s = i + ((t - i) >> 1);
    e(s) <= n ? (i = s + 1) : (t = s);
  }
  return i;
}
function fc(i) {
  if (i.hydrate_init) return;
  i.hydrate_init = !0;
  let t = i.childNodes;
  if (i.nodeName === "HEAD") {
    const l = [];
    for (let c = 0; c < t.length; c++) {
      const h = t[c];
      h.claim_order !== void 0 && l.push(h);
    }
    t = l;
  }
  const e = new Int32Array(t.length + 1),
    n = new Int32Array(t.length);
  e[0] = -1;
  let s = 0;
  for (let l = 0; l < t.length; l++) {
    const c = t[l].claim_order,
      h =
        (s > 0 && t[e[s]].claim_order <= c
          ? s + 1
          : dc(1, s, (d) => t[e[d]].claim_order, c)) - 1;
    n[l] = e[h] + 1;
    const u = h + 1;
    (e[u] = l), (s = Math.max(u, s));
  }
  const o = [],
    r = [];
  let a = t.length - 1;
  for (let l = e[s] + 1; l != 0; l = n[l - 1]) {
    for (o.push(t[l - 1]); a >= l; a--) r.push(t[a]);
    a--;
  }
  for (; a >= 0; a--) r.push(t[a]);
  o.reverse(), r.sort((l, c) => l.claim_order - c.claim_order);
  for (let l = 0, c = 0; l < r.length; l++) {
    for (; c < o.length && r[l].claim_order >= o[c].claim_order; ) c++;
    const h = c < o.length ? o[c] : null;
    i.insertBefore(r[l], h);
  }
}
function gc(i, t) {
  if (fn) {
    for (
      fc(i),
        (i.actual_end_child === void 0 ||
          (i.actual_end_child !== null &&
            i.actual_end_child.parentElement !== i)) &&
          (i.actual_end_child = i.firstChild);
      i.actual_end_child !== null && i.actual_end_child.claim_order === void 0;

    )
      i.actual_end_child = i.actual_end_child.nextSibling;
    t !== i.actual_end_child
      ? (t.claim_order !== void 0 || t.parentNode !== i) &&
        i.insertBefore(t, i.actual_end_child)
      : (i.actual_end_child = t.nextSibling);
  } else (t.parentNode !== i || t.nextSibling !== null) && i.appendChild(t);
}
function Sp(i, t, e) {
  fn && !e
    ? gc(i, t)
    : (t.parentNode !== i || t.nextSibling != e) &&
      i.insertBefore(t, e || null);
}
function mc(i) {
  i.parentNode.removeChild(i);
}
function Mp(i, t) {
  for (let e = 0; e < i.length; e += 1) i[e] && i[e].d(t);
}
function pc(i) {
  return document.createElement(i);
}
function bc(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function _s(i) {
  return document.createTextNode(i);
}
function kp() {
  return _s(" ");
}
function Op() {
  return _s("");
}
function Tp(i, t, e, n) {
  return i.addEventListener(t, e, n), () => i.removeEventListener(t, e, n);
}
function Dp(i) {
  return function (t) {
    return t.preventDefault(), i.call(this, t);
  };
}
function Ep(i) {
  return function (t) {
    return t.stopPropagation(), i.call(this, t);
  };
}
function Cp(i, t, e) {
  e == null
    ? i.removeAttribute(t)
    : i.getAttribute(t) !== e && i.setAttribute(t, e);
}
function yc(i) {
  return Array.from(i.childNodes);
}
function xc(i) {
  i.claim_info === void 0 &&
    (i.claim_info = { last_index: 0, total_claimed: 0 });
}
function ea(i, t, e, n, s = !1) {
  xc(i);
  const o = (() => {
    for (let r = i.claim_info.last_index; r < i.length; r++) {
      const a = i[r];
      if (t(a)) {
        const l = e(a);
        return (
          l === void 0 ? i.splice(r, 1) : (i[r] = l),
          s || (i.claim_info.last_index = r),
          a
        );
      }
    }
    for (let r = i.claim_info.last_index - 1; r >= 0; r--) {
      const a = i[r];
      if (t(a)) {
        const l = e(a);
        return (
          l === void 0 ? i.splice(r, 1) : (i[r] = l),
          s
            ? l === void 0 && i.claim_info.last_index--
            : (i.claim_info.last_index = r),
          a
        );
      }
    }
    return n();
  })();
  return (
    (o.claim_order = i.claim_info.total_claimed),
    (i.claim_info.total_claimed += 1),
    o
  );
}
function ia(i, t, e, n) {
  return ea(
    i,
    (s) => s.nodeName === t,
    (s) => {
      const o = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const a = s.attributes[r];
        e[a.name] || o.push(a.name);
      }
      o.forEach((r) => s.removeAttribute(r));
    },
    () => n(t)
  );
}
function Pp(i, t, e) {
  return ia(i, t, e, pc);
}
function Ap(i, t, e) {
  return ia(i, t, e, bc);
}
function _c(i, t) {
  return ea(
    i,
    (e) => e.nodeType === 3,
    (e) => {
      const n = "" + t;
      if (e.data.startsWith(n)) {
        if (e.data.length !== n.length) return e.splitText(n.length);
      } else e.data = n;
    },
    () => _s(t),
    !0
  );
}
function Ip(i) {
  return _c(i, " ");
}
function Lp(i, t) {
  (t = "" + t), i.wholeText !== t && (i.data = t);
}
function Fp(i, t) {
  i.value = t == null ? "" : t;
}
function Rp(i, t, e, n) {
  e === null
    ? i.style.removeProperty(t)
    : i.style.setProperty(t, e, n ? "important" : "");
}
function Np(i, t) {
  for (let e = 0; e < i.options.length; e += 1) {
    const n = i.options[e];
    if (n.__value === t) {
      n.selected = !0;
      return;
    }
  }
  i.selectedIndex = -1;
}
function zp(i) {
  const t = i.querySelector(":checked") || i.options[0];
  return t && t.__value;
}
function Vp(i, t, e) {
  i.classList[e ? "add" : "remove"](t);
}
function wc(i, t, e = !1) {
  const n = document.createEvent("CustomEvent");
  return n.initCustomEvent(i, e, !1, t), n;
}
let ai;
function ei(i) {
  ai = i;
}
function pi() {
  if (!ai) throw new Error("Function called outside component initialization");
  return ai;
}
function Wp(i) {
  pi().$$.on_mount.push(i);
}
function Bp(i) {
  pi().$$.after_update.push(i);
}
function Hp() {
  const i = pi();
  return (t, e) => {
    const n = i.$$.callbacks[t];
    if (n) {
      const s = wc(t, e);
      n.slice().forEach((o) => {
        o.call(i, s);
      });
    }
  };
}
function $p(i, t) {
  pi().$$.context.set(i, t);
}
function jp(i) {
  return pi().$$.context.get(i);
}
function Up(i, t) {
  const e = i.$$.callbacks[t.type];
  e && e.slice().forEach((n) => n.call(this, t));
}
const qe = [],
  Xs = [],
  qi = [],
  Gs = [],
  na = Promise.resolve();
let ts = !1;
function sa() {
  ts || ((ts = !0), na.then(oa));
}
function Yp() {
  return sa(), na;
}
function es(i) {
  qi.push(i);
}
const Mn = new Set();
let ki = 0;
function oa() {
  const i = ai;
  do {
    for (; ki < qe.length; ) {
      const t = qe[ki];
      ki++, ei(t), vc(t.$$);
    }
    for (ei(null), qe.length = 0, ki = 0; Xs.length; ) Xs.pop()();
    for (let t = 0; t < qi.length; t += 1) {
      const e = qi[t];
      Mn.has(e) || (Mn.add(e), e());
    }
    qi.length = 0;
  } while (qe.length);
  for (; Gs.length; ) Gs.pop()();
  (ts = !1), Mn.clear(), ei(i);
}
function vc(i) {
  if (i.fragment !== null) {
    i.update(), mi(i.before_update);
    const t = i.dirty;
    (i.dirty = [-1]),
      i.fragment && i.fragment.p(i.ctx, t),
      i.after_update.forEach(es);
  }
}
const Zi = new Set();
let le;
function qp() {
  le = { r: 0, c: [], p: le };
}
function Zp() {
  le.r || mi(le.c), (le = le.p);
}
function Sc(i, t) {
  i && i.i && (Zi.delete(i), i.i(t));
}
function Xp(i, t, e, n) {
  if (i && i.o) {
    if (Zi.has(i)) return;
    Zi.add(i),
      le.c.push(() => {
        Zi.delete(i), n && (e && i.d(1), n());
      }),
      i.o(t);
  }
}
function Gp(i, t) {
  const e = {},
    n = {},
    s = { $$scope: 1 };
  let o = i.length;
  for (; o--; ) {
    const r = i[o],
      a = t[o];
    if (a) {
      for (const l in r) l in a || (n[l] = 1);
      for (const l in a) s[l] || ((e[l] = a[l]), (s[l] = 1));
      i[o] = a;
    } else for (const l in r) s[l] = 1;
  }
  for (const r in n) r in e || (e[r] = void 0);
  return e;
}
function Kp(i) {
  return typeof i == "object" && i !== null ? i : {};
}
function Jp(i) {
  i && i.c();
}
function Qp(i, t) {
  i && i.l(t);
}
function Mc(i, t, e, n) {
  const { fragment: s, on_mount: o, on_destroy: r, after_update: a } = i.$$;
  s && s.m(t, e),
    n ||
      es(() => {
        const l = o.map(Gr).filter(sc);
        r ? r.push(...l) : mi(l), (i.$$.on_mount = []);
      }),
    a.forEach(es);
}
function kc(i, t) {
  const e = i.$$;
  e.fragment !== null &&
    (mi(e.on_destroy),
    e.fragment && e.fragment.d(t),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function Oc(i, t) {
  i.$$.dirty[0] === -1 && (qe.push(i), sa(), i.$$.dirty.fill(0)),
    (i.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function tb(i, t, e, n, s, o, r, a = [-1]) {
  const l = ai;
  ei(i);
  const c = (i.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: he,
    not_equal: s,
    bound: Zs(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    callbacks: Zs(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root,
  });
  r && r(c.root);
  let h = !1;
  if (
    ((c.ctx = e
      ? e(i, t.props || {}, (u, d, ...f) => {
          const g = f.length ? f[0] : d;
          return (
            c.ctx &&
              s(c.ctx[u], (c.ctx[u] = g)) &&
              (!c.skip_bound && c.bound[u] && c.bound[u](g), h && Oc(i, u)),
            d
          );
        })
      : []),
    c.update(),
    (h = !0),
    mi(c.before_update),
    (c.fragment = n ? n(c.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      hc();
      const u = yc(t.target);
      c.fragment && c.fragment.l(u), u.forEach(mc);
    } else c.fragment && c.fragment.c();
    t.intro && Sc(i.$$.fragment),
      Mc(i, t.target, t.anchor, t.customElement),
      uc(),
      oa();
  }
  ei(l);
}
class eb {
  $destroy() {
    kc(this, 1), (this.$destroy = he);
  }
  $on(t, e) {
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      n.push(e),
      () => {
        const s = n.indexOf(e);
        s !== -1 && n.splice(s, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !rc(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const ve = [];
function Tc(i, t = he) {
  let e;
  const n = new Set();
  function s(a) {
    if (oc(i, a) && ((i = a), e)) {
      const l = !ve.length;
      for (const c of n) c[1](), ve.push(c, i);
      if (l) {
        for (let c = 0; c < ve.length; c += 2) ve[c][0](ve[c + 1]);
        ve.length = 0;
      }
    }
  }
  function o(a) {
    s(a(i));
  }
  function r(a, l = he) {
    const c = [a, l];
    return (
      n.add(c),
      n.size === 1 && (e = t(s) || he),
      a(i),
      () => {
        n.delete(c), n.size === 0 && (e(), (e = null));
      }
    );
  }
  return { set: s, update: o, subscribe: r };
}
var ra = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (i) {
  (function () {
    var t = {}.hasOwnProperty;
    function e() {
      for (var n = [], s = 0; s < arguments.length; s++) {
        var o = arguments[s];
        if (!!o) {
          var r = typeof o;
          if (r === "string" || r === "number") n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var a = e.apply(null, o);
              a && n.push(a);
            }
          } else if (r === "object")
            if (o.toString === Object.prototype.toString)
              for (var l in o) t.call(o, l) && o[l] && n.push(l);
            else n.push(o.toString());
        }
      }
      return n.join(" ");
    }
    i.exports ? ((e.default = e), (i.exports = e)) : (window.classNames = e);
  })();
})(ra);
var ib = ra.exports;
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function bi(i) {
  return (i + 0.5) | 0;
}
const $t = (i, t, e) => Math.max(Math.min(i, e), t);
function Ze(i) {
  return $t(bi(i * 2.55), 0, 255);
}
function Yt(i) {
  return $t(bi(i * 255), 0, 255);
}
function Ft(i) {
  return $t(bi(i / 2.55) / 100, 0, 1);
}
function Ks(i) {
  return $t(bi(i * 100), 0, 100);
}
const pt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  is = [..."0123456789ABCDEF"],
  Dc = (i) => is[i & 15],
  Ec = (i) => is[(i & 240) >> 4] + is[i & 15],
  Oi = (i) => (i & 240) >> 4 === (i & 15),
  Cc = (i) => Oi(i.r) && Oi(i.g) && Oi(i.b) && Oi(i.a);
function Pc(i) {
  var t = i.length,
    e;
  return (
    i[0] === "#" &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (pt[i[1]] * 17),
            g: 255 & (pt[i[2]] * 17),
            b: 255 & (pt[i[3]] * 17),
            a: t === 5 ? pt[i[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (pt[i[1]] << 4) | pt[i[2]],
            g: (pt[i[3]] << 4) | pt[i[4]],
            b: (pt[i[5]] << 4) | pt[i[6]],
            a: t === 9 ? (pt[i[7]] << 4) | pt[i[8]] : 255,
          })),
    e
  );
}
const Ac = (i, t) => (i < 255 ? t(i) : "");
function Ic(i) {
  var t = Cc(i) ? Dc : Ec;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Ac(i.a, t) : void 0;
}
const Lc =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function aa(i, t, e) {
  const n = t * Math.min(e, 1 - e),
    s = (o, r = (o + i / 30) % 12) =>
      e - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Fc(i, t, e) {
  const n = (s, o = (s + i / 60) % 6) =>
    e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Rc(i, t, e) {
  const n = aa(i, 1, 0.5);
  let s;
  for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
    (n[s] *= 1 - t - e), (n[s] += t);
  return n;
}
function Nc(i, t, e, n, s) {
  return i === s
    ? (t - e) / n + (t < e ? 6 : 0)
    : t === s
    ? (e - i) / n + 2
    : (i - t) / n + 4;
}
function ws(i) {
  const e = i.r / 255,
    n = i.g / 255,
    s = i.b / 255,
    o = Math.max(e, n, s),
    r = Math.min(e, n, s),
    a = (o + r) / 2;
  let l, c, h;
  return (
    o !== r &&
      ((h = o - r),
      (c = a > 0.5 ? h / (2 - o - r) : h / (o + r)),
      (l = Nc(e, n, s, h, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function vs(i, t, e, n) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(Yt);
}
function Ss(i, t, e) {
  return vs(aa, i, t, e);
}
function zc(i, t, e) {
  return vs(Rc, i, t, e);
}
function Vc(i, t, e) {
  return vs(Fc, i, t, e);
}
function la(i) {
  return ((i % 360) + 360) % 360;
}
function Wc(i) {
  const t = Lc.exec(i);
  let e = 255,
    n;
  if (!t) return;
  t[5] !== n && (e = t[6] ? Ze(+t[5]) : Yt(+t[5]));
  const s = la(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (n = zc(s, o, r))
      : t[1] === "hsv"
      ? (n = Vc(s, o, r))
      : (n = Ss(s, o, r)),
    { r: n[0], g: n[1], b: n[2], a: e }
  );
}
function Bc(i, t) {
  var e = ws(i);
  (e[0] = la(e[0] + t)), (e = Ss(e)), (i.r = e[0]), (i.g = e[1]), (i.b = e[2]);
}
function Hc(i) {
  if (!i) return;
  const t = ws(i),
    e = t[0],
    n = Ks(t[1]),
    s = Ks(t[2]);
  return i.a < 255
    ? `hsla(${e}, ${n}%, ${s}%, ${Ft(i.a)})`
    : `hsl(${e}, ${n}%, ${s}%)`;
}
const Js = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Qs = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function $c() {
  const i = {},
    t = Object.keys(Qs),
    e = Object.keys(Js);
  let n, s, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], s = 0; s < e.length; s++)
      (o = e[s]), (a = a.replace(o, Js[o]));
    (o = parseInt(Qs[r], 16)),
      (i[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return i;
}
let Ti;
function jc(i) {
  Ti || ((Ti = $c()), (Ti.transparent = [0, 0, 0, 0]));
  const t = Ti[i.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const Uc =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Yc(i) {
  const t = Uc.exec(i);
  let e = 255,
    n,
    s,
    o;
  if (!!t) {
    if (t[7] !== n) {
      const r = +t[7];
      e = t[8] ? Ze(r) : $t(r * 255, 0, 255);
    }
    return (
      (n = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (n = 255 & (t[2] ? Ze(n) : $t(n, 0, 255))),
      (s = 255 & (t[4] ? Ze(s) : $t(s, 0, 255))),
      (o = 255 & (t[6] ? Ze(o) : $t(o, 0, 255))),
      { r: n, g: s, b: o, a: e }
    );
  }
}
function qc(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Ft(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const kn = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  Se = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function Zc(i, t, e) {
  const n = Se(Ft(i.r)),
    s = Se(Ft(i.g)),
    o = Se(Ft(i.b));
  return {
    r: Yt(kn(n + e * (Se(Ft(t.r)) - n))),
    g: Yt(kn(s + e * (Se(Ft(t.g)) - s))),
    b: Yt(kn(o + e * (Se(Ft(t.b)) - o))),
    a: i.a + e * (t.a - i.a),
  };
}
function Di(i, t, e) {
  if (i) {
    let n = ws(i);
    (n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1))),
      (n = Ss(n)),
      (i.r = n[0]),
      (i.g = n[1]),
      (i.b = n[2]);
  }
}
function ca(i, t) {
  return i && Object.assign(t || {}, i);
}
function to(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((t = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (t.a = Yt(i[3])))
      : ((t = ca(i, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Yt(t.a))),
    t
  );
}
function Xc(i) {
  return i.charAt(0) === "r" ? Yc(i) : Wc(i);
}
class li {
  constructor(t) {
    if (t instanceof li) return t;
    const e = typeof t;
    let n;
    e === "object"
      ? (n = to(t))
      : e === "string" && (n = Pc(t) || jc(t) || Xc(t)),
      (this._rgb = n),
      (this._valid = !!n);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ca(this._rgb);
    return t && (t.a = Ft(t.a)), t;
  }
  set rgb(t) {
    this._rgb = to(t);
  }
  rgbString() {
    return this._valid ? qc(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Ic(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Hc(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb,
        s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e,
        a = 2 * r - 1,
        l = n.a - s.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - c),
        (n.r = 255 & (c * n.r + o * s.r + 0.5)),
        (n.g = 255 & (c * n.g + o * s.g + 0.5)),
        (n.b = 255 & (c * n.b + o * s.b + 0.5)),
        (n.a = r * n.a + (1 - r) * s.a),
        (this.rgb = n);
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = Zc(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new li(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Yt(t)), this;
  }
  clearer(t) {
    const e = this._rgb;
    return (e.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = bi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    const e = this._rgb;
    return (e.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Di(this._rgb, 2, t), this;
  }
  darken(t) {
    return Di(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Di(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Di(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Bc(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function At() {}
const Gc = (() => {
  let i = 0;
  return () => i++;
})();
function N(i) {
  return i === null || typeof i == "undefined";
}
function H(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function I(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function Z(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function ft(i, t) {
  return Z(i) ? i : t;
}
function C(i, t) {
  return typeof i == "undefined" ? t : i;
}
const Kc = (i, t) =>
    typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t,
  ha = (i, t) =>
    typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * t : +i;
function B(i, t, e) {
  if (i && typeof i.call == "function") return i.apply(e, t);
}
function V(i, t, e, n) {
  let s, o, r;
  if (H(i))
    if (((o = i.length), n)) for (s = o - 1; s >= 0; s--) t.call(e, i[s], s);
    else for (s = 0; s < o; s++) t.call(e, i[s], s);
  else if (I(i))
    for (r = Object.keys(i), o = r.length, s = 0; s < o; s++)
      t.call(e, i[r[s]], r[s]);
}
function Qi(i, t) {
  let e, n, s, o;
  if (!i || !t || i.length !== t.length) return !1;
  for (e = 0, n = i.length; e < n; ++e)
    if (
      ((s = i[e]),
      (o = t[e]),
      s.datasetIndex !== o.datasetIndex || s.index !== o.index)
    )
      return !1;
  return !0;
}
function tn(i) {
  if (H(i)) return i.map(tn);
  if (I(i)) {
    const t = Object.create(null),
      e = Object.keys(i),
      n = e.length;
    let s = 0;
    for (; s < n; ++s) t[e[s]] = tn(i[e[s]]);
    return t;
  }
  return i;
}
function ua(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function Jc(i, t, e, n) {
  if (!ua(i)) return;
  const s = t[i],
    o = e[i];
  I(s) && I(o) ? ci(s, o, n) : (t[i] = tn(o));
}
function ci(i, t, e) {
  const n = H(t) ? t : [t],
    s = n.length;
  if (!I(i)) return i;
  e = e || {};
  const o = e.merger || Jc;
  let r;
  for (let a = 0; a < s; ++a) {
    if (((r = n[a]), !I(r))) continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c) o(l[c], i, r, e);
  }
  return i;
}
function ii(i, t) {
  return ci(i, t, { merger: Qc });
}
function Qc(i, t, e) {
  if (!ua(i)) return;
  const n = t[i],
    s = e[i];
  I(n) && I(s)
    ? ii(n, s)
    : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = tn(s));
}
const eo = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function th(i) {
  const t = i.split("."),
    e = [];
  let n = "";
  for (const s of t)
    (n += s),
      n.endsWith("\\") ? (n = n.slice(0, -1) + ".") : (e.push(n), (n = ""));
  return e;
}
function eh(i) {
  const t = th(i);
  return (e) => {
    for (const n of t) {
      if (n === "") break;
      e = e && e[n];
    }
    return e;
  };
}
function qt(i, t) {
  return (eo[t] || (eo[t] = eh(t)))(i);
}
function Ms(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const hi = (i) => typeof i != "undefined",
  Zt = (i) => typeof i == "function",
  io = (i, t) => {
    if (i.size !== t.size) return !1;
    for (const e of i) if (!t.has(e)) return !1;
    return !0;
  };
function ih(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const j = Math.PI,
  $ = 2 * j,
  nh = $ + j,
  en = Number.POSITIVE_INFINITY,
  sh = j / 180,
  K = j / 2,
  Jt = j / 4,
  no = (j * 2) / 3,
  jt = Math.log10,
  Pt = Math.sign;
function ni(i, t, e) {
  return Math.abs(i - t) < e;
}
function so(i) {
  const t = Math.round(i);
  i = ni(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(jt(i))),
    n = i / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function oh(i) {
  const t = [],
    e = Math.sqrt(i);
  let n;
  for (n = 1; n < e; n++) i % n === 0 && (t.push(n), t.push(i / n));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function Ee(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function rh(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function da(i, t, e) {
  let n, s, o;
  for (n = 0, s = i.length; n < s; n++)
    (o = i[n][e]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function St(i) {
  return i * (j / 180);
}
function ks(i) {
  return i * (180 / j);
}
function oo(i) {
  if (!Z(i)) return;
  let t = 1,
    e = 0;
  for (; Math.round(i * t) / t !== i; ) (t *= 10), e++;
  return e;
}
function fa(i, t) {
  const e = t.x - i.x,
    n = t.y - i.y,
    s = Math.sqrt(e * e + n * n);
  let o = Math.atan2(n, e);
  return o < -0.5 * j && (o += $), { angle: o, distance: s };
}
function ns(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function ah(i, t) {
  return ((i - t + nh) % $) - j;
}
function gt(i) {
  return ((i % $) + $) % $;
}
function ui(i, t, e, n) {
  const s = gt(i),
    o = gt(t),
    r = gt(e),
    a = gt(o - s),
    l = gt(r - s),
    c = gt(s - o),
    h = gt(s - r);
  return s === o || s === r || (n && o === r) || (a > l && c < h);
}
function et(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function lh(i) {
  return et(i, -32768, 32767);
}
function Rt(i, t, e, n = 1e-6) {
  return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
}
function Os(i, t, e) {
  e = e || ((r) => i[r] < t);
  let n = i.length - 1,
    s = 0,
    o;
  for (; n - s > 1; ) (o = (s + n) >> 1), e(o) ? (s = o) : (n = o);
  return { lo: s, hi: n };
}
const Nt = (i, t, e, n) =>
    Os(
      i,
      e,
      n
        ? (s) => {
            const o = i[s][t];
            return o < e || (o === e && i[s + 1][t] === e);
          }
        : (s) => i[s][t] < e
    ),
  ch = (i, t, e) => Os(i, e, (n) => i[n][t] >= e);
function hh(i, t, e) {
  let n = 0,
    s = i.length;
  for (; n < s && i[n] < t; ) n++;
  for (; s > n && i[s - 1] > e; ) s--;
  return n > 0 || s < i.length ? i.slice(n, s) : i;
}
const ga = ["push", "pop", "shift", "splice", "unshift"];
function uh(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    ga.forEach((e) => {
      const n = "_onData" + Ms(e),
        s = i[e];
      Object.defineProperty(i, e, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = s.apply(this, o);
          return (
            i._chartjs.listeners.forEach((a) => {
              typeof a[n] == "function" && a[n](...o);
            }),
            r
          );
        },
      });
    });
}
function ro(i, t) {
  const e = i._chartjs;
  if (!e) return;
  const n = e.listeners,
    s = n.indexOf(t);
  s !== -1 && n.splice(s, 1),
    !(n.length > 0) &&
      (ga.forEach((o) => {
        delete i[o];
      }),
      delete i._chartjs);
}
function ma(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const pa = (function () {
  return typeof window == "undefined"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function ba(i, t) {
  let e = [],
    n = !1;
  return function (...s) {
    (e = s),
      n ||
        ((n = !0),
        pa.call(window, () => {
          (n = !1), i.apply(t, e);
        }));
  };
}
function dh(i, t) {
  let e;
  return function (...n) {
    return (
      t ? (clearTimeout(e), (e = setTimeout(i, t, n))) : i.apply(this, n), t
    );
  };
}
const Ts = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  st = (i, t, e) => (i === "start" ? t : i === "end" ? e : (t + e) / 2),
  fh = (i, t, e, n) =>
    i === (n ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function ya(i, t, e) {
  const n = t.length;
  let s = 0,
    o = n;
  if (i._sorted) {
    const { iScale: r, _parsed: a } = i,
      l = r.axis,
      { min: c, max: h, minDefined: u, maxDefined: d } = r.getUserBounds();
    u &&
      (s = et(
        Math.min(Nt(a, l, c).lo, e ? n : Nt(t, l, r.getPixelForValue(c)).lo),
        0,
        n - 1
      )),
      d
        ? (o =
            et(
              Math.max(
                Nt(a, r.axis, h, !0).hi + 1,
                e ? 0 : Nt(t, l, r.getPixelForValue(h), !0).hi + 1
              ),
              s,
              n
            ) - s)
        : (o = n - s);
  }
  return { start: s, count: o };
}
function xa(i) {
  const { xScale: t, yScale: e, _scaleRanges: n } = i,
    s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!n) return (i._scaleRanges = s), !0;
  const o =
    n.xmin !== t.min ||
    n.xmax !== t.max ||
    n.ymin !== e.min ||
    n.ymax !== e.max;
  return Object.assign(n, s), o;
}
const Ei = (i) => i === 0 || i === 1,
  ao = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * $) / e)),
  lo = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * $) / e) + 1,
  si = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * K) + 1,
    easeOutSine: (i) => Math.sin(i * K),
    easeInOutSine: (i) => -0.5 * (Math.cos(j * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      Ei(i)
        ? i
        : i < 0.5
        ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (Ei(i) ? i : ao(i, 0.075, 0.3)),
    easeOutElastic: (i) => (Ei(i) ? i : lo(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return Ei(i)
        ? i
        : i < 0.5
        ? 0.5 * ao(i * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * lo(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let t = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t))
        : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
    },
    easeInBounce: (i) => 1 - si.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
        ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
        : i < 2.5 / 2.75
        ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
        : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? si.easeInBounce(i * 2) * 0.5
        : si.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function Ds(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function co(i) {
  return Ds(i) ? i : new li(i);
}
function On(i) {
  return Ds(i) ? i : new li(i).saturate(0.5).darken(0.1).hexString();
}
const gh = ["x", "y", "borderWidth", "radius", "tension"],
  mh = ["color", "borderColor", "backgroundColor"];
function ph(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    i.set("animations", {
      colors: { type: "color", properties: mh },
      numbers: { type: "number", properties: gh },
    }),
    i.describe("animations", { _fallback: "animation" }),
    i.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function bh(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const ho = new Map();
function yh(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let n = ho.get(e);
  return n || ((n = new Intl.NumberFormat(i, t)), ho.set(e, n)), n;
}
function yi(i, t, e) {
  return yh(t, e).format(i);
}
const _a = {
  values(i) {
    return H(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0) return "0";
    const n = this.chart.options.locale;
    let s,
      o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), (o = xh(i, e));
    }
    const r = jt(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), yi(i, n, l);
  },
  logarithmic(i, t, e) {
    if (i === 0) return "0";
    const n = e[t].significand || i / Math.pow(10, Math.floor(jt(i)));
    return [1, 2, 3, 5, 10, 15].includes(n) || t > 0.8 * e.length
      ? _a.numeric.call(this, i, t, e)
      : "";
  },
};
function xh(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var gn = { formatters: _a };
function _h(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: gn.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    i.route("scale.ticks", "color", "", "color"),
    i.route("scale.grid", "color", "", "borderColor"),
    i.route("scale.border", "color", "", "borderColor"),
    i.route("scale.title", "color", "", "color"),
    i.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    i.describe("scales", { _fallback: "scale" }),
    i.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const ge = Object.create(null),
  ss = Object.create(null);
function oi(i, t) {
  if (!t) return i;
  const e = t.split(".");
  for (let n = 0, s = e.length; n < s; ++n) {
    const o = e[n];
    i = i[o] || (i[o] = Object.create(null));
  }
  return i;
}
function Tn(i, t, e) {
  return typeof t == "string" ? ci(oi(i, t), e) : ci(oi(i, ""), t);
}
class wh {
  constructor(t, e) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, s) => On(s.backgroundColor)),
      (this.hoverBorderColor = (n, s) => On(s.borderColor)),
      (this.hoverColor = (n, s) => On(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e);
  }
  set(t, e) {
    return Tn(this, t, e);
  }
  get(t) {
    return oi(this, t);
  }
  describe(t, e) {
    return Tn(ss, t, e);
  }
  override(t, e) {
    return Tn(ge, t, e);
  }
  route(t, e, n, s) {
    const o = oi(this, t),
      r = oi(this, n),
      a = "_" + e;
    Object.defineProperties(o, {
      [a]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = r[s];
          return I(l) ? Object.assign({}, c, l) : C(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var X = new wh(
  {
    _scriptable: (i) => !i.startsWith("on"),
    _indexable: (i) => i !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [ph, bh, _h]
);
function vh(i) {
  return !i || N(i.size) || N(i.family)
    ? null
    : (i.style ? i.style + " " : "") +
        (i.weight ? i.weight + " " : "") +
        i.size +
        "px " +
        i.family;
}
function nn(i, t, e, n, s) {
  let o = t[s];
  return (
    o || ((o = t[s] = i.measureText(s).width), e.push(s)), o > n && (n = o), n
  );
}
function Sh(i, t, e, n) {
  n = n || {};
  let s = (n.data = n.data || {}),
    o = (n.garbageCollect = n.garbageCollect || []);
  n.font !== t &&
    ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = t)),
    i.save(),
    (i.font = t);
  let r = 0;
  const a = e.length;
  let l, c, h, u, d;
  for (l = 0; l < a; l++)
    if (((u = e[l]), u != null && !H(u))) r = nn(i, s, o, r, u);
    else if (H(u))
      for (c = 0, h = u.length; c < h; c++)
        (d = u[c]), d != null && !H(d) && (r = nn(i, s, o, r, d));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++) delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function Qt(i, t, e) {
  const n = i.currentDevicePixelRatio,
    s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function uo(i, t) {
  (!t && !i) ||
    ((t = t || i.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, i.width, i.height),
    t.restore());
}
function os(i, t, e, n) {
  wa(i, t, e, n, null);
}
function wa(i, t, e, n, s) {
  let o, r, a, l, c, h, u, d;
  const f = t.pointStyle,
    g = t.rotation,
    m = t.radius;
  let p = (g || 0) * sh;
  if (
    f &&
    typeof f == "object" &&
    ((o = f.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    i.save(),
      i.translate(e, n),
      i.rotate(p),
      i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
      i.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch ((i.beginPath(), f)) {
      default:
        s ? i.ellipse(e, n, s / 2, m, 0, 0, $) : i.arc(e, n, m, 0, $),
          i.closePath();
        break;
      case "triangle":
        (h = s ? s / 2 : m),
          i.moveTo(e + Math.sin(p) * h, n - Math.cos(p) * m),
          (p += no),
          i.lineTo(e + Math.sin(p) * h, n - Math.cos(p) * m),
          (p += no),
          i.lineTo(e + Math.sin(p) * h, n - Math.cos(p) * m),
          i.closePath();
        break;
      case "rectRounded":
        (c = m * 0.516),
          (l = m - c),
          (r = Math.cos(p + Jt) * l),
          (u = Math.cos(p + Jt) * (s ? s / 2 - c : l)),
          (a = Math.sin(p + Jt) * l),
          (d = Math.sin(p + Jt) * (s ? s / 2 - c : l)),
          i.arc(e - u, n - a, c, p - j, p - K),
          i.arc(e + d, n - r, c, p - K, p),
          i.arc(e + u, n + a, c, p, p + K),
          i.arc(e - d, n + r, c, p + K, p + j),
          i.closePath();
        break;
      case "rect":
        if (!g) {
          (l = Math.SQRT1_2 * m),
            (h = s ? s / 2 : l),
            i.rect(e - h, n - l, 2 * h, 2 * l);
          break;
        }
        p += Jt;
      case "rectRot":
        (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          i.moveTo(e - u, n - a),
          i.lineTo(e + d, n - r),
          i.lineTo(e + u, n + a),
          i.lineTo(e - d, n + r),
          i.closePath();
        break;
      case "crossRot":
        p += Jt;
      case "cross":
        (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          i.moveTo(e - u, n - a),
          i.lineTo(e + u, n + a),
          i.moveTo(e + d, n - r),
          i.lineTo(e - d, n + r);
        break;
      case "star":
        (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          i.moveTo(e - u, n - a),
          i.lineTo(e + u, n + a),
          i.moveTo(e + d, n - r),
          i.lineTo(e - d, n + r),
          (p += Jt),
          (u = Math.cos(p) * (s ? s / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (d = Math.sin(p) * (s ? s / 2 : m)),
          i.moveTo(e - u, n - a),
          i.lineTo(e + u, n + a),
          i.moveTo(e + d, n - r),
          i.lineTo(e - d, n + r);
        break;
      case "line":
        (r = s ? s / 2 : Math.cos(p) * m),
          (a = Math.sin(p) * m),
          i.moveTo(e - r, n - a),
          i.lineTo(e + r, n + a);
        break;
      case "dash":
        i.moveTo(e, n),
          i.lineTo(e + Math.cos(p) * (s ? s / 2 : m), n + Math.sin(p) * m);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function zt(i, t, e) {
  return (
    (e = e || 0.5),
    !t ||
      (i &&
        i.x > t.left - e &&
        i.x < t.right + e &&
        i.y > t.top - e &&
        i.y < t.bottom + e)
  );
}
function mn(i, t) {
  i.save(),
    i.beginPath(),
    i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    i.clip();
}
function pn(i) {
  i.restore();
}
function Mh(i, t, e, n, s) {
  if (!t) return i.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else (s === "after") != !!n ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function kh(i, t, e, n) {
  if (!t) return i.lineTo(e.x, e.y);
  i.bezierCurveTo(
    n ? t.cp1x : t.cp2x,
    n ? t.cp1y : t.cp2y,
    n ? e.cp2x : e.cp1x,
    n ? e.cp2y : e.cp1y,
    e.x,
    e.y
  );
}
function Oh(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]),
    N(t.rotation) || i.rotate(t.rotation),
    t.color && (i.fillStyle = t.color),
    t.textAlign && (i.textAlign = t.textAlign),
    t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Th(i, t, e, n, s) {
  if (s.strikethrough || s.underline) {
    const o = i.measureText(n),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = e - o.actualBoundingBoxAscent,
      c = e + o.actualBoundingBoxDescent,
      h = s.strikethrough ? (l + c) / 2 : c;
    (i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = s.decorationWidth || 2),
      i.moveTo(r, h),
      i.lineTo(a, h),
      i.stroke();
  }
}
function Dh(i, t) {
  const e = i.fillStyle;
  (i.fillStyle = t.color),
    i.fillRect(t.left, t.top, t.width, t.height),
    (i.fillStyle = e);
}
function me(i, t, e, n, s, o = {}) {
  const r = H(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = s.string, Oh(i, o), l = 0; l < r.length; ++l)
    (c = r[l]),
      o.backdrop && Dh(i, o.backdrop),
      a &&
        (o.strokeColor && (i.strokeStyle = o.strokeColor),
        N(o.strokeWidth) || (i.lineWidth = o.strokeWidth),
        i.strokeText(c, e, n, o.maxWidth)),
      i.fillText(c, e, n, o.maxWidth),
      Th(i, e, n, c, o),
      (n += Number(s.lineHeight));
  i.restore();
}
function di(i, t) {
  const { x: e, y: n, w: s, h: o, radius: r } = t;
  i.arc(e + r.topLeft, n + r.topLeft, r.topLeft, 1.5 * j, j, !0),
    i.lineTo(e, n + o - r.bottomLeft),
    i.arc(e + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, j, K, !0),
    i.lineTo(e + s - r.bottomRight, n + o),
    i.arc(
      e + s - r.bottomRight,
      n + o - r.bottomRight,
      r.bottomRight,
      K,
      0,
      !0
    ),
    i.lineTo(e + s, n + r.topRight),
    i.arc(e + s - r.topRight, n + r.topRight, r.topRight, 0, -K, !0),
    i.lineTo(e + r.topLeft, n);
}
const Eh = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Ch = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Ph(i, t) {
  const e = ("" + i).match(Eh);
  if (!e || e[1] === "normal") return t * 1.2;
  switch (((i = +e[2]), e[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const Ah = (i) => +i || 0;
function Es(i, t) {
  const e = {},
    n = I(t),
    s = n ? Object.keys(t) : t,
    o = I(i) ? (n ? (r) => C(i[r], i[t[r]]) : (r) => i[r]) : () => i;
  for (const r of s) e[r] = Ah(o(r));
  return e;
}
function va(i) {
  return Es(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function ue(i) {
  return Es(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function rt(i) {
  const t = va(i);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function tt(i, t) {
  (i = i || {}), (t = t || X.font);
  let e = C(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let n = C(i.style, t.style);
  n &&
    !("" + n).match(Ch) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0));
  const s = {
    family: C(i.family, t.family),
    lineHeight: Ph(C(i.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: C(i.weight, t.weight),
    string: "",
  };
  return (s.string = vh(s)), s;
}
function Xe(i, t, e, n) {
  let s = !0,
    o,
    r,
    a;
  for (o = 0, r = i.length; o < r; ++o)
    if (
      ((a = i[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == "function" && ((a = a(t)), (s = !1)),
        e !== void 0 && H(a) && ((a = a[e % a.length]), (s = !1)),
        a !== void 0))
    )
      return n && !s && (n.cacheable = !1), a;
}
function Ih(i, t, e) {
  const { min: n, max: s } = i,
    o = ha(t, (s - n) / 2),
    r = (a, l) => (e && a === 0 ? 0 : a + l);
  return { min: r(n, -Math.abs(o)), max: r(s, o) };
}
function Xt(i, t) {
  return Object.assign(Object.create(i), t);
}
function Cs(i, t = [""], e, n, s = () => i[0]) {
  const o = e || i;
  typeof n == "undefined" && (n = Oa("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (a) => Cs([a, ...i], t, o, n),
  };
  return new Proxy(r, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    get(a, l) {
      return Ma(a, l, () => Bh(l, t, i, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(a, l) {
      return go(a).includes(l);
    },
    ownKeys(a) {
      return go(a);
    },
    set(a, l, c) {
      const h = a._storage || (a._storage = s());
      return (a[l] = h[l] = c), delete a._keys, !0;
    },
  });
}
function Ce(i, t, e, n) {
  const s = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: Sa(i, n),
    setContext: (o) => Ce(i, o, e, n),
    override: (o) => Ce(i.override(o), t, e, n),
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    get(o, r, a) {
      return Ma(o, r, () => Fh(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(i, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(o, r) {
      return Reflect.has(i, r);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(o, r, a) {
      return (i[r] = a), delete o[r], !0;
    },
  });
}
function Sa(i, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: n = t.indexable,
    _allKeys: s = t.allKeys,
  } = i;
  return {
    allKeys: s,
    scriptable: e,
    indexable: n,
    isScriptable: Zt(e) ? e : () => e,
    isIndexable: Zt(n) ? n : () => n,
  };
}
const Lh = (i, t) => (i ? i + Ms(t) : t),
  Ps = (i, t) =>
    I(t) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Ma(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const n = e();
  return (i[t] = n), n;
}
function Fh(i, t, e) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = i;
  let a = n[t];
  return (
    Zt(a) && r.isScriptable(t) && (a = Rh(t, a, i, e)),
    H(a) && a.length && (a = Nh(t, a, i, r.isIndexable)),
    Ps(t, a) && (a = Ce(a, s, o && o[t], r)),
    a
  );
}
function Rh(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + i
    );
  a.add(i);
  let l = t(o, r || n);
  return a.delete(i), Ps(i, l) && (l = As(s._scopes, s, i, l)), l;
}
function Nh(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index != "undefined" && n(i)) return t[o.index % t.length];
  if (I(t[0])) {
    const l = t,
      c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const u = As(c, s, i, h);
      t.push(Ce(u, o, r && r[i], a));
    }
  }
  return t;
}
function ka(i, t, e) {
  return Zt(i) ? i(t, e) : i;
}
const zh = (i, t) => (i === !0 ? t : typeof i == "string" ? qt(t, i) : void 0);
function Vh(i, t, e, n, s) {
  for (const o of t) {
    const r = zh(e, o);
    if (r) {
      i.add(r);
      const a = ka(r._fallback, e, s);
      if (typeof a != "undefined" && a !== e && a !== n) return a;
    } else if (r === !1 && typeof n != "undefined" && e !== n) return null;
  }
  return !1;
}
function As(i, t, e, n) {
  const s = t._rootScopes,
    o = ka(t._fallback, e, n),
    r = [...i, ...s],
    a = new Set();
  a.add(n);
  let l = fo(a, r, e, o || e, n);
  return l === null ||
    (typeof o != "undefined" &&
      o !== e &&
      ((l = fo(a, r, o, l, n)), l === null))
    ? !1
    : Cs(Array.from(a), [""], s, o, () => Wh(t, e, n));
}
function fo(i, t, e, n, s) {
  for (; e; ) e = Vh(i, t, e, n, s);
  return e;
}
function Wh(i, t, e) {
  const n = i._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return H(s) && I(e) ? e : s || {};
}
function Bh(i, t, e, n) {
  let s;
  for (const o of t)
    if (((s = Oa(Lh(o, i), e)), typeof s != "undefined"))
      return Ps(i, s) ? As(e, n, i, s) : s;
}
function Oa(i, t) {
  for (const e of t) {
    if (!e) continue;
    const n = e[i];
    if (typeof n != "undefined") return n;
  }
}
function go(i) {
  let t = i._keys;
  return t || (t = i._keys = Hh(i._scopes)), t;
}
function Hh(i) {
  const t = new Set();
  for (const e of i)
    for (const n of Object.keys(e).filter((s) => !s.startsWith("_"))) t.add(n);
  return Array.from(t);
}
function Ta(i, t, e, n) {
  const { iScale: s } = i,
    { key: o = "r" } = this._parsing,
    r = new Array(n);
  let a, l, c, h;
  for (a = 0, l = n; a < l; ++a)
    (c = a + e), (h = t[c]), (r[a] = { r: s.parse(qt(h, o), c) });
  return r;
}
const $h = Number.EPSILON || 1e-14,
  Pe = (i, t) => t < i.length && !i[t].skip && i[t],
  Da = (i) => (i === "x" ? "y" : "x");
function jh(i, t, e, n) {
  const s = i.skip ? t : i,
    o = t,
    r = e.skip ? t : e,
    a = ns(o, s),
    l = ns(r, o);
  let c = a / (a + l),
    h = l / (a + l);
  (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
  const u = n * c,
    d = n * h;
  return {
    previous: { x: o.x - u * (r.x - s.x), y: o.y - u * (r.y - s.y) },
    next: { x: o.x + d * (r.x - s.x), y: o.y + d * (r.y - s.y) },
  };
}
function Uh(i, t, e) {
  const n = i.length;
  let s,
    o,
    r,
    a,
    l,
    c = Pe(i, 0);
  for (let h = 0; h < n - 1; ++h)
    if (((l = c), (c = Pe(i, h + 1)), !(!l || !c))) {
      if (ni(t[h], 0, $h)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      (s = e[h] / t[h]),
        (o = e[h + 1] / t[h]),
        (a = Math.pow(s, 2) + Math.pow(o, 2)),
        !(a <= 9) &&
          ((r = 3 / Math.sqrt(a)),
          (e[h] = s * r * t[h]),
          (e[h + 1] = o * r * t[h]));
    }
}
function Yh(i, t, e = "x") {
  const n = Da(e),
    s = i.length;
  let o,
    r,
    a,
    l = Pe(i, 0);
  for (let c = 0; c < s; ++c) {
    if (((r = a), (a = l), (l = Pe(i, c + 1)), !a)) continue;
    const h = a[e],
      u = a[n];
    r &&
      ((o = (h - r[e]) / 3),
      (a[`cp1${e}`] = h - o),
      (a[`cp1${n}`] = u - o * t[c])),
      l &&
        ((o = (l[e] - h) / 3),
        (a[`cp2${e}`] = h + o),
        (a[`cp2${n}`] = u + o * t[c]));
  }
}
function qh(i, t = "x") {
  const e = Da(t),
    n = i.length,
    s = Array(n).fill(0),
    o = Array(n);
  let r,
    a,
    l,
    c = Pe(i, 0);
  for (r = 0; r < n; ++r)
    if (((a = l), (l = c), (c = Pe(i, r + 1)), !!l)) {
      if (c) {
        const h = c[t] - l[t];
        s[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a
        ? c
          ? Pt(s[r - 1]) !== Pt(s[r])
            ? 0
            : (s[r - 1] + s[r]) / 2
          : s[r - 1]
        : s[r];
    }
  Uh(i, s, o), Yh(i, o, t);
}
function Ci(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function Zh(i, t) {
  let e,
    n,
    s,
    o,
    r,
    a = zt(i[0], t);
  for (e = 0, n = i.length; e < n; ++e)
    (r = o),
      (o = a),
      (a = e < n - 1 && zt(i[e + 1], t)),
      !!o &&
        ((s = i[e]),
        r &&
          ((s.cp1x = Ci(s.cp1x, t.left, t.right)),
          (s.cp1y = Ci(s.cp1y, t.top, t.bottom))),
        a &&
          ((s.cp2x = Ci(s.cp2x, t.left, t.right)),
          (s.cp2y = Ci(s.cp2y, t.top, t.bottom))));
}
function Xh(i, t, e, n, s) {
  let o, r, a, l;
  if (
    (t.spanGaps && (i = i.filter((c) => !c.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    qh(i, s);
  else {
    let c = n ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      (a = i[o]),
        (l = jh(c, a, i[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints && Zh(i, e);
}
function Is() {
  return typeof window != "undefined" && typeof document != "undefined";
}
function Ls(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function sn(i, t, e) {
  let n;
  return (
    typeof i == "string"
      ? ((n = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (n = (n / 100) * t.parentNode[e]))
      : (n = i),
    n
  );
}
const bn = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Gh(i, t) {
  return bn(i).getPropertyValue(t);
}
const Kh = ["top", "right", "bottom", "left"];
function de(i, t, e) {
  const n = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = Kh[s];
    n[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
}
const Jh = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Qh(i, t) {
  const e = i.touches,
    n = e && e.length ? e[0] : i,
    { offsetX: s, offsetY: o } = n;
  let r = !1,
    a,
    l;
  if (Jh(s, o, i.target)) (a = s), (l = o);
  else {
    const c = t.getBoundingClientRect();
    (a = n.clientX - c.left), (l = n.clientY - c.top), (r = !0);
  }
  return { x: a, y: l, box: r };
}
function se(i, t) {
  if ("native" in i) return i;
  const { canvas: e, currentDevicePixelRatio: n } = t,
    s = bn(e),
    o = s.boxSizing === "border-box",
    r = de(s, "padding"),
    a = de(s, "border", "width"),
    { x: l, y: c, box: h } = Qh(i, e),
    u = r.left + (h && a.left),
    d = r.top + (h && a.top);
  let { width: f, height: g } = t;
  return (
    o && ((f -= r.width + a.width), (g -= r.height + a.height)),
    {
      x: Math.round((((l - u) / f) * e.width) / n),
      y: Math.round((((c - d) / g) * e.height) / n),
    }
  );
}
function tu(i, t, e) {
  let n, s;
  if (t === void 0 || e === void 0) {
    const o = i && Ls(i);
    if (!o) (t = i.clientWidth), (e = i.clientHeight);
    else {
      const r = o.getBoundingClientRect(),
        a = bn(o),
        l = de(a, "border", "width"),
        c = de(a, "padding");
      (t = r.width - c.width - l.width),
        (e = r.height - c.height - l.height),
        (n = sn(a.maxWidth, o, "clientWidth")),
        (s = sn(a.maxHeight, o, "clientHeight"));
    }
  }
  return { width: t, height: e, maxWidth: n || en, maxHeight: s || en };
}
const Pi = (i) => Math.round(i * 10) / 10;
function eu(i, t, e, n) {
  const s = bn(i),
    o = de(s, "margin"),
    r = sn(s.maxWidth, i, "clientWidth") || en,
    a = sn(s.maxHeight, i, "clientHeight") || en,
    l = tu(i, t, e);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const d = de(s, "border", "width"),
      f = de(s, "padding");
    (c -= f.width + d.width), (h -= f.height + d.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (h = Math.max(0, n ? c / n : h - o.height)),
    (c = Pi(Math.min(c, r, l.maxWidth))),
    (h = Pi(Math.min(h, a, l.maxHeight))),
    c && !h && (h = Pi(c / 2)),
    (t !== void 0 || e !== void 0) &&
      n &&
      l.height &&
      h > l.height &&
      ((h = l.height), (c = Pi(Math.floor(h * n)))),
    { width: c, height: h }
  );
}
function mo(i, t, e) {
  const n = t || 1,
    s = Math.floor(i.height * n),
    o = Math.floor(i.width * n);
  (i.height = Math.floor(i.height)), (i.width = Math.floor(i.width));
  const r = i.canvas;
  return (
    r.style &&
      (e || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${i.height}px`), (r.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== n || r.height !== s || r.width !== o
      ? ((i.currentDevicePixelRatio = n),
        (r.height = s),
        (r.width = o),
        i.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
      : !1
  );
}
const iu = (function () {
  let i = !1;
  try {
    const t = {
      get passive() {
        return (i = !0), !1;
      },
    };
    Is() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return i;
})();
function po(i, t) {
  const e = Gh(i, t),
    n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function oe(i, t, e, n) {
  return { x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) };
}
function nu(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y:
      n === "middle"
        ? e < 0.5
          ? i.y
          : t.y
        : n === "after"
        ? e < 1
          ? i.y
          : t.y
        : e > 0
        ? t.y
        : i.y,
  };
}
function su(i, t, e, n) {
  const s = { x: i.cp2x, y: i.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    r = oe(i, s, e),
    a = oe(s, o, e),
    l = oe(o, t, e),
    c = oe(r, a, e),
    h = oe(a, l, e);
  return oe(c, h, e);
}
const ou = function (i, t) {
    return {
      x(e) {
        return i + i + t - e;
      },
      setWidth(e) {
        t = e;
      },
      textAlign(e) {
        return e === "center" ? e : e === "right" ? "left" : "right";
      },
      xPlus(e, n) {
        return e - n;
      },
      leftForLtr(e, n) {
        return e - n;
      },
    };
  },
  ru = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, t) {
        return i + t;
      },
      leftForLtr(i, t) {
        return i;
      },
    };
  };
function Te(i, t, e) {
  return i ? ou(t, e) : ru();
}
function Ea(i, t) {
  let e, n;
  (t === "ltr" || t === "rtl") &&
    ((e = i.canvas.style),
    (n = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")]),
    e.setProperty("direction", t, "important"),
    (i.prevTextDirection = n));
}
function Ca(i, t) {
  t !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Pa(i) {
  return i === "angle"
    ? { between: ui, compare: ah, normalize: gt }
    : { between: Rt, compare: (t, e) => t - e, normalize: (t) => t };
}
function bo({ start: i, end: t, count: e, loop: n, style: s }) {
  return {
    start: i % e,
    end: t % e,
    loop: n && (t - i + 1) % e === 0,
    style: s,
  };
}
function au(i, t, e) {
  const { property: n, start: s, end: o } = e,
    { between: r, normalize: a } = Pa(n),
    l = t.length;
  let { start: c, end: h, loop: u } = i,
    d,
    f;
  if (u) {
    for (c += l, h += l, d = 0, f = l; d < f && r(a(t[c % l][n]), s, o); ++d)
      c--, h--;
    (c %= l), (h %= l);
  }
  return h < c && (h += l), { start: c, end: h, loop: u, style: i.style };
}
function Aa(i, t, e) {
  if (!e) return [i];
  const { property: n, start: s, end: o } = e,
    r = t.length,
    { compare: a, between: l, normalize: c } = Pa(n),
    { start: h, end: u, loop: d, style: f } = au(i, t, e),
    g = [];
  let m = !1,
    p = null,
    b,
    y,
    _;
  const w = () => l(s, _, b) && a(s, _) !== 0,
    x = () => a(o, b) === 0 || l(o, _, b),
    k = () => m || w(),
    S = () => !m || x();
  for (let M = h, T = h; M <= u; ++M)
    (y = t[M % r]),
      !y.skip &&
        ((b = c(y[n])),
        b !== _ &&
          ((m = l(b, s, o)),
          p === null && k() && (p = a(b, s) === 0 ? M : T),
          p !== null &&
            S() &&
            (g.push(bo({ start: p, end: M, loop: d, count: r, style: f })),
            (p = null)),
          (T = M),
          (_ = b)));
  return (
    p !== null && g.push(bo({ start: p, end: u, loop: d, count: r, style: f })),
    g
  );
}
function Ia(i, t) {
  const e = [],
    n = i.segments;
  for (let s = 0; s < n.length; s++) {
    const o = Aa(n[s], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function lu(i, t, e, n) {
  let s = 0,
    o = t - 1;
  if (e && !n) for (; s < t && !i[s].skip; ) s++;
  for (; s < t && i[s].skip; ) s++;
  for (s %= t, e && (o += s); o > s && i[o % t].skip; ) o--;
  return (o %= t), { start: s, end: o };
}
function cu(i, t, e, n) {
  const s = i.length,
    o = [];
  let r = t,
    a = i[t],
    l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % s];
    c.skip || c.stop
      ? a.skip ||
        ((n = !1),
        o.push({ start: t % s, end: (l - 1) % s, loop: n }),
        (t = r = c.stop ? l : null))
      : ((r = l), a.skip && (t = l)),
      (a = c);
  }
  return r !== null && o.push({ start: t % s, end: r % s, loop: n }), o;
}
function hu(i, t) {
  const e = i.points,
    n = i.options.spanGaps,
    s = e.length;
  if (!s) return [];
  const o = !!i._loop,
    { start: r, end: a } = lu(e, s, o, n);
  if (n === !0) return yo(i, [{ start: r, end: a, loop: o }], e, t);
  const l = a < r ? a + s : a,
    c = !!i._fullLoop && r === 0 && a === s - 1;
  return yo(i, cu(e, r, l, c), e, t);
}
function yo(i, t, e, n) {
  return !n || !n.setContext || !e ? t : uu(i, t, e, n);
}
function uu(i, t, e, n) {
  const s = i._chart.getContext(),
    o = xo(i.options),
    {
      _datasetIndex: r,
      options: { spanGaps: a },
    } = i,
    l = e.length,
    c = [];
  let h = o,
    u = t[0].start,
    d = u;
  function f(g, m, p, b) {
    const y = a ? -1 : 1;
    if (g !== m) {
      for (g += l; e[g % l].skip; ) g -= y;
      for (; e[m % l].skip; ) m += y;
      g % l !== m % l &&
        (c.push({ start: g % l, end: m % l, loop: p, style: b }),
        (h = b),
        (u = m % l));
    }
  }
  for (const g of t) {
    u = a ? u : g.start;
    let m = e[u % l],
      p;
    for (d = u + 1; d <= g.end; d++) {
      const b = e[d % l];
      (p = xo(
        n.setContext(
          Xt(s, {
            type: "segment",
            p0: m,
            p1: b,
            p0DataIndex: (d - 1) % l,
            p1DataIndex: d % l,
            datasetIndex: r,
          })
        )
      )),
        du(p, h) && f(u, d - 1, g.loop, h),
        (m = b),
        (h = p);
    }
    u < d - 1 && f(u, d - 1, g.loop, h);
  }
  return c;
}
function xo(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function du(i, t) {
  if (!t) return !1;
  const e = [],
    n = function (s, o) {
      return Ds(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
    };
  return JSON.stringify(i, n) !== JSON.stringify(t, n);
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class fu {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, n, s) {
    const o = e.listeners[s],
      r = e.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: e.initial,
        numSteps: r,
        currentStep: Math.min(n - e.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = pa.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) return;
      const o = n.items;
      let r = o.length - 1,
        a = !1,
        l;
      for (; r >= 0; --r)
        (l = o[r]),
          l._active
            ? (l._total > n.duration && (n.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop());
      a && (s.draw(), this._notify(s, n, t, "progress")),
        o.length ||
          ((n.running = !1),
          this._notify(s, n, t, "complete"),
          (n.initial = !1)),
        (e += o.length);
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return (
      n ||
        ((n = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        e.set(t, n)),
      n
    );
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    !e ||
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((n, s) => Math.max(n, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const n = e.items;
    let s = n.length - 1;
    for (; s >= 0; --s) n[s].cancel();
    (e.items = []), this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var It = new fu();
const _o = "transparent",
  gu = {
    boolean(i, t, e) {
      return e > 0.5 ? t : i;
    },
    color(i, t, e) {
      const n = co(i || _o),
        s = n.valid && co(t || _o);
      return s && s.valid ? s.mix(n, e).hexString() : t;
    },
    number(i, t, e) {
      return i + (t - i) * e;
    },
  };
class mu {
  constructor(t, e, n, s) {
    const o = e[n];
    s = Xe([t.to, s, o, t.from]);
    const r = Xe([t.from, o, s]);
    (this._active = !0),
      (this._fn = t.fn || gu[t.type || typeof r]),
      (this._easing = si[t.easing] || si.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = n),
      (this._from = r),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = n - this._start,
        r = this._duration - o;
      (this._start = n),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = Xe([t.to, e, s, t.from])),
        (this._from = Xe([t.from, s, e]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      n = this._duration,
      s = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (r || e < n)), !this._active)) {
      (this._target[s] = a), this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    (l = (e / n) % 2),
      (l = r && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[s] = this._fn(o, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({ res: e, rej: n });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej",
      n = this._promises || [];
    for (let s = 0; s < n.length; s++) n[s][e]();
  }
}
class La {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!I(t)) return;
    const e = Object.keys(X.animation),
      n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!I(o)) return;
      const r = {};
      for (const a of e) r[a] = o[a];
      ((H(o.properties) && o.properties) || [s]).forEach((a) => {
        (a === s || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options,
      s = bu(t, n);
    if (!s) return [];
    const o = this._createAnimations(s, n);
    return (
      n.$shared &&
        pu(t.options.$animations, n).then(
          () => {
            t.options = n;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const n = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(e),
      a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let u = o[c];
      const d = n.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, h, a);
          continue;
        } else u.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      (o[c] = u = new mu(d, t, c, h)), s.push(u);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const n = this._createAnimations(t, e);
    if (n.length) return It.add(this._chart, n), !0;
  }
}
function pu(i, t) {
  const e = [],
    n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = i[n[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function bu(i, t) {
  if (!t) return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return (
    e.$shared &&
      (i.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })),
    e
  );
}
function wo(i, t) {
  const e = (i && i.options) || {},
    n = e.reverse,
    s = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0;
  return { start: n ? o : s, end: n ? s : o };
}
function yu(i, t, e) {
  if (e === !1) return !1;
  const n = wo(i, e),
    s = wo(t, e);
  return { top: s.end, right: n.end, bottom: s.start, left: n.start };
}
function xu(i) {
  let t, e, n, s;
  return (
    I(i)
      ? ((t = i.top), (e = i.right), (n = i.bottom), (s = i.left))
      : (t = e = n = s = i),
    { top: t, right: e, bottom: n, left: s, disabled: i === !1 }
  );
}
function Fa(i, t) {
  const e = [],
    n = i._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s) e.push(n[s].index);
  return e;
}
function vo(i, t, e, n = {}) {
  const s = i.keys,
    o = n.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (((l = +s[r]), l === e)) {
        if (n.all) continue;
        break;
      }
      (c = i.values[l]), Z(c) && (o || t === 0 || Pt(t) === Pt(c)) && (t += c);
    }
    return t;
  }
}
function _u(i, t) {
  const { iScale: e, vScale: n } = t,
    s = e.axis === "x" ? "x" : "y",
    o = n.axis === "x" ? "x" : "y",
    r = Object.keys(i),
    a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    (h = r[l]), (a[l] = { [s]: h, [o]: i[h] });
  return a;
}
function So(i, t) {
  const e = i && i.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function wu(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function vu(i) {
  const { min: t, max: e, minDefined: n, maxDefined: s } = i.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY,
  };
}
function Su(i, t, e) {
  const n = i[t] || (i[t] = {});
  return n[e] || (n[e] = {});
}
function Mo(i, t, e, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = i[s.index];
    if ((e && o > 0) || (!e && o < 0)) return s.index;
  }
  return null;
}
function ko(i, t) {
  const { chart: e, _cachedMeta: n } = i,
    s = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: r, index: a } = n,
    l = o.axis,
    c = r.axis,
    h = wu(o, r, n),
    u = t.length;
  let d;
  for (let f = 0; f < u; ++f) {
    const g = t[f],
      { [l]: m, [c]: p } = g,
      b = g._stacks || (g._stacks = {});
    (d = b[c] = Su(s, h, m)),
      (d[a] = p),
      (d._top = Mo(d, r, !0, n.type)),
      (d._bottom = Mo(d, r, !1, n.type));
    const y = d._visualValues || (d._visualValues = {});
    y[a] = p;
  }
}
function Dn(i, t) {
  const e = i.scales;
  return Object.keys(e)
    .filter((n) => e[n].axis === t)
    .shift();
}
function Mu(i, t) {
  return Xt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function ku(i, t, e) {
  return Xt(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data",
  });
}
function ze(i, t) {
  const e = i.controller.index,
    n = i.vScale && i.vScale.axis;
  if (!!n) {
    t = t || i._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][e] === void 0) return;
      delete o[n][e],
        o[n]._visualValues !== void 0 &&
          o[n]._visualValues[e] !== void 0 &&
          delete o[n]._visualValues[e];
    }
  }
}
const En = (i) => i === "reset" || i === "none",
  Oo = (i, t) => (t ? i : Object.assign({}, i)),
  Ou = (i, t, e) =>
    i && !t.hidden && t._stacked && { keys: Fa(e, !0), values: null };
class kt {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = So(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && ze(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      n = this.getDataset(),
      s = (u, d, f, g) => (u === "x" ? d : u === "r" ? g : f),
      o = (e.xAxisID = C(n.xAxisID, Dn(t, "x"))),
      r = (e.yAxisID = C(n.yAxisID, Dn(t, "y"))),
      a = (e.rAxisID = C(n.rAxisID, Dn(t, "r"))),
      l = e.indexAxis,
      c = (e.iAxisID = s(l, o, r, a)),
      h = (e.vAxisID = s(l, r, o, a));
    (e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(r)),
      (e.rScale = this.getScaleForId(a)),
      (e.iScale = this.getScaleForId(c)),
      (e.vScale = this.getScaleForId(h));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ro(this._data, this), t._stacked && ze(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      n = this._data;
    if (I(e)) {
      const s = this._cachedMeta;
      this._data = _u(e, s);
    } else if (n !== e) {
      if (n) {
        ro(n, this);
        const s = this._cachedMeta;
        ze(s), (s._parsed = []);
      }
      e && Object.isExtensible(e) && uh(e, this),
        (this._syncList = []),
        (this._data = e);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    (e._stacked = So(e.vScale, e)),
      e.stack !== n.stack && ((s = !0), ze(e), (e.stack = n.stack)),
      this._resyncElements(t),
      (s || o !== e._stacked) && ko(this, e._parsed);
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      n = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(n, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: s } = this,
      { iScale: o, _stacked: r } = n,
      a = o.axis;
    let l = t === 0 && e === s.length ? !0 : n._sorted,
      c = t > 0 && n._parsed[t - 1],
      h,
      u,
      d;
    if (this._parsing === !1) (n._parsed = s), (n._sorted = !0), (d = s);
    else {
      H(s[t])
        ? (d = this.parseArrayData(n, s, t, e))
        : I(s[t])
        ? (d = this.parseObjectData(n, s, t, e))
        : (d = this.parsePrimitiveData(n, s, t, e));
      const f = () => u[a] === null || (c && u[a] < c[a]);
      for (h = 0; h < e; ++h)
        (n._parsed[h + t] = u = d[h]), l && (f() && (l = !1), (c = u));
      n._sorted = l;
    }
    r && ko(this, d);
  }
  parsePrimitiveData(t, e, n, s) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      c = o.getLabels(),
      h = o === r,
      u = new Array(s);
    let d, f, g;
    for (d = 0, f = s; d < f; ++d)
      (g = d + n),
        (u[d] = { [a]: h || o.parse(c[g], g), [l]: r.parse(e[g], g) });
    return u;
  }
  parseArrayData(t, e, n, s) {
    const { xScale: o, yScale: r } = t,
      a = new Array(s);
    let l, c, h, u;
    for (l = 0, c = s; l < c; ++l)
      (h = l + n),
        (u = e[h]),
        (a[l] = { x: o.parse(u[0], h), y: r.parse(u[1], h) });
    return a;
  }
  parseObjectData(t, e, n, s) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(s);
    let h, u, d, f;
    for (h = 0, u = s; h < u; ++h)
      (d = h + n),
        (f = e[d]),
        (c[h] = { x: o.parse(qt(f, a), d), y: r.parse(qt(f, l), d) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const s = this.chart,
      o = this._cachedMeta,
      r = e[t.axis],
      a = { keys: Fa(s, !0), values: e._stacks[t.axis]._visualValues };
    return vo(a, r, o.index, { mode: n });
  }
  updateRangeFromParsed(t, e, n, s) {
    const o = n[e.axis];
    let r = o === null ? NaN : o;
    const a = s && n._stacks[e.axis];
    s && a && ((s.values = a), (r = vo(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, e) {
    const n = this._cachedMeta,
      s = n._parsed,
      o = n._sorted && t === n.iScale,
      r = s.length,
      a = this._getOtherScale(t),
      l = Ou(e, n, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: h, max: u } = vu(a);
    let d, f;
    function g() {
      f = s[d];
      const m = f[a.axis];
      return !Z(f[t.axis]) || h > m || u < m;
    }
    for (
      d = 0;
      d < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o));
      ++d
    );
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      n = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s) (r = e[s][t.axis]), Z(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = e.iScale,
      s = e.vScale,
      o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : "",
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"),
      (e._clip = xu(
        C(this.options.clip, yu(e.xScale, e.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      n = this._cachedMeta,
      s = n.data || [],
      o = e.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || s.length - a,
      c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const u = s[h];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
    }
    for (h = 0; h < r.length; ++h) r[h].draw(t, o);
  }
  getStyle(t, e) {
    const n = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(n)
      : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o = r.$context || (r.$context = ku(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = Mu(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!e), (o.mode = n), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", n) {
    const s = e === "active",
      o = this._cachedDataOpts,
      r = t + "-" + e,
      a = o[r],
      l = this.enableOptionSharing && hi(n);
    if (a) return Oo(a, l);
    const c = this.chart.config,
      h = c.datasetElementScopeKeys(this._type, t),
      u = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      d = c.getOptionScopes(this.getDataset(), h),
      f = Object.keys(X.elements[t]),
      g = () => this.getContext(n, s, e),
      m = c.resolveNamedOptions(d, f, g, u);
    return m.$shared && ((m.$shared = l), (o[r] = Object.freeze(Oo(m, l)))), m;
  }
  _resolveAnimations(t, e, n) {
    const s = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${e}`,
      a = o[r];
    if (a) return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config,
        u = h.datasetAnimationScopeKeys(this._type, e),
        d = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(d, this.getContext(t, n, e));
    }
    const c = new La(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (!!t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || En(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      o = this.getSharedOptions(n),
      r = this.includeOptions(e, o) || o !== s;
    return (
      this.updateSharedOptions(o, e, n), { sharedOptions: o, includeOptions: r }
    );
  }
  updateElement(t, e, n, s) {
    En(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !En(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, n, s).update(t, {
      options: (!s && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data,
      n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const s = n.length,
      o = e.length,
      r = Math.min(o, s);
    r && this.parse(0, r),
      o > s
        ? this._insertElements(s, o - s, t)
        : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, n = !0) {
    const s = this._cachedMeta,
      o = s.data,
      r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--) c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
    this._parsing && l(s._parsed),
      this.parse(t, e),
      n && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, n, s) {}
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, e);
      n._stacked && ze(n, s);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, n, s] = t;
      this[e](n, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(["_removeElements", t, e]);
    const n = arguments.length - 2;
    n && this._sync(["_insertElements", t, n]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
v(kt, "defaults", {}),
  v(kt, "datasetElementType", null),
  v(kt, "dataElementType", null);
function Tu(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let n = [];
    for (let s = 0, o = e.length; s < o; s++)
      n = n.concat(e[s].controller.getAllParsedValues(i));
    i._cache.$bar = ma(n.sort((s, o) => s - o));
  }
  return i._cache.$bar;
}
function Du(i) {
  const t = i.iScale,
    e = Tu(t, i.type);
  let n = t._length,
    s,
    o,
    r,
    a;
  const l = () => {
    r === 32767 ||
      r === -32768 ||
      (hi(a) && (n = Math.min(n, Math.abs(r - a) || n)), (a = r));
  };
  for (s = 0, o = e.length; s < o; ++s) (r = t.getPixelForValue(e[s])), l();
  for (a = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    (r = t.getPixelForTick(s)), l();
  return n;
}
function Eu(i, t, e, n) {
  const s = e.barThickness;
  let o, r;
  return (
    N(s)
      ? ((o = t.min * e.categoryPercentage), (r = e.barPercentage))
      : ((o = s * n), (r = 1)),
    { chunk: o / n, ratio: r, start: t.pixels[i] - o / 2 }
  );
}
function Cu(i, t, e, n) {
  const s = t.pixels,
    o = s[i];
  let r = i > 0 ? s[i - 1] : null,
    a = i < s.length - 1 ? s[i + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)),
    a === null && (a = o + o - r);
  const c = o - ((o - Math.min(r, a)) / 2) * l;
  return {
    chunk: ((Math.abs(a - r) / 2) * l) / n,
    ratio: e.barPercentage,
    start: c,
  };
}
function Pu(i, t, e, n) {
  const s = e.parse(i[0], n),
    o = e.parse(i[1], n),
    r = Math.min(s, o),
    a = Math.max(s, o);
  let l = r,
    c = a;
  Math.abs(r) > Math.abs(a) && ((l = a), (c = r)),
    (t[e.axis] = c),
    (t._custom = { barStart: l, barEnd: c, start: s, end: o, min: r, max: a });
}
function Ra(i, t, e, n) {
  return H(i) ? Pu(i, t, e, n) : (t[e.axis] = e.parse(i, n)), t;
}
function To(i, t, e, n) {
  const s = i.iScale,
    o = i.vScale,
    r = s.getLabels(),
    a = s === o,
    l = [];
  let c, h, u, d;
  for (c = e, h = e + n; c < h; ++c)
    (d = t[c]),
      (u = {}),
      (u[s.axis] = a || s.parse(r[c], c)),
      l.push(Ra(d, u, o, c));
  return l;
}
function Cn(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function Au(i, t, e) {
  return i !== 0 ? Pt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Iu(i) {
  let t, e, n, s, o;
  return (
    i.horizontal
      ? ((t = i.base > i.x), (e = "left"), (n = "right"))
      : ((t = i.base < i.y), (e = "bottom"), (n = "top")),
    t ? ((s = "end"), (o = "start")) : ((s = "start"), (o = "end")),
    { start: e, end: n, reverse: t, top: s, bottom: o }
  );
}
function Lu(i, t, e, n) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    i.borderSkipped = o;
    return;
  }
  if (s === !0) {
    i.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: h } = Iu(i);
  s === "middle" &&
    e &&
    ((i.enableBorderRadius = !0),
    (e._top || 0) === n
      ? (s = c)
      : (e._bottom || 0) === n
      ? (s = h)
      : ((o[Do(h, r, a, l)] = !0), (s = c))),
    (o[Do(s, r, a, l)] = !0),
    (i.borderSkipped = o);
}
function Do(i, t, e, n) {
  return n ? ((i = Fu(i, t, e)), (i = Eo(i, e, t))) : (i = Eo(i, t, e)), i;
}
function Fu(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Eo(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function Ru(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? (e === 1 ? 0.33 : 0) : t;
}
class Pn extends kt {
  parsePrimitiveData(t, e, n, s) {
    return To(t, e, n, s);
  }
  parseArrayData(t, e, n, s) {
    return To(t, e, n, s);
  }
  parseObjectData(t, e, n, s) {
    const { iScale: o, vScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = o.axis === "x" ? a : l,
      h = r.axis === "x" ? a : l,
      u = [];
    let d, f, g, m;
    for (d = n, f = n + s; d < f; ++d)
      (m = e[d]),
        (g = {}),
        (g[o.axis] = o.parse(qt(m, c), d)),
        u.push(Ra(qt(m, h), g, r, d));
    return u;
  }
  updateRangeFromParsed(t, e, n, s) {
    super.updateRangeFromParsed(t, e, n, s);
    const o = n._custom;
    o &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: n, vScale: s } = e,
      o = this.getParsed(t),
      r = o._custom,
      a = Cn(r)
        ? "[" + r.start + ", " + r.end + "]"
        : "" + s.getLabelForValue(o[s.axis]);
    return { label: "" + n.getLabelForValue(o[n.axis]), value: a };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      {
        index: r,
        _cachedMeta: { vScale: a },
      } = this,
      l = a.getBasePixel(),
      c = a.isHorizontal(),
      h = this._getRuler(),
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, s);
    for (let f = e; f < e + n; f++) {
      const g = this.getParsed(f),
        m =
          o || N(g[a.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(f),
        p = this._calculateBarIndexPixels(f, h),
        b = (g._stacks || {})[a.axis],
        y = {
          horizontal: c,
          base: m.base,
          enableBorderRadius:
            !b || Cn(g._custom) || r === b._top || r === b._bottom,
          x: c ? m.head : p.center,
          y: c ? p.center : m.head,
          height: c ? p.size : Math.abs(m.size),
          width: c ? Math.abs(m.size) : p.size,
        };
      d &&
        (y.options =
          u || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const _ = y.options || t[f].options;
      Lu(y, _, b, r), Ru(y, _, h.ratio), this.updateElement(t[f], f, y, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: n } = this._cachedMeta,
      s = n
        .getMatchingVisibleMetas(this._type)
        .filter((l) => l.controller.options.grouped),
      o = n.options.stacked,
      r = [],
      a = (l) => {
        const c = l.controller.getParsed(e),
          h = c && c[l.vScale.axis];
        if (N(h) || isNaN(h)) return !0;
      };
    for (const l of s)
      if (
        !(e !== void 0 && a(l)) &&
        ((o === !1 ||
          r.indexOf(l.stack) === -1 ||
          (o === void 0 && l.stack === void 0)) &&
          r.push(l.stack),
        l.index === t)
      )
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, n) {
    const s = this._getStacks(t, n),
      o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      n = e.iScale,
      s = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      s.push(n.getPixelForValue(this.getParsed(o)[n.axis], o));
    const a = t.barThickness;
    return {
      min: a || Du(e),
      pixels: s,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: this._getStackCount(),
      scale: n,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: n, index: s },
        options: { base: o, minBarLength: r },
      } = this,
      a = o || 0,
      l = this.getParsed(t),
      c = l._custom,
      h = Cn(c);
    let u = l[e.axis],
      d = 0,
      f = n ? this.applyStack(e, l, n) : u,
      g,
      m;
    f !== u && ((d = f - u), (f = u)),
      h &&
        ((u = c.barStart),
        (f = c.barEnd - c.barStart),
        u !== 0 && Pt(u) !== Pt(c.barEnd) && (d = 0),
        (d += u));
    const p = !N(o) && !h ? o : d;
    let b = e.getPixelForValue(p);
    if (
      (this.chart.getDataVisibility(t)
        ? (g = e.getPixelForValue(d + f))
        : (g = b),
      (m = g - b),
      Math.abs(m) < r)
    ) {
      (m = Au(m, e, a) * r), u === a && (b -= m / 2);
      const y = e.getPixelForDecimal(0),
        _ = e.getPixelForDecimal(1),
        w = Math.min(y, _),
        x = Math.max(y, _);
      (b = Math.max(Math.min(b, x), w)),
        (g = b + m),
        n &&
          !h &&
          (l._stacks[e.axis]._visualValues[s] =
            e.getValueForPixel(g) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(a)) {
      const y = (Pt(m) * e.getLineWidthForValue(a)) / 2;
      (b += y), (m -= y);
    }
    return { size: m, base: b, head: g, center: g + m / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const n = e.scale,
      s = this.options,
      o = s.skipNull,
      r = C(s.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount,
        h = s.barThickness === "flex" ? Cu(t, e, s, c) : Eu(t, e, s, c),
        u = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          o ? t : void 0
        );
      (a = h.start + h.chunk * u + h.chunk / 2),
        (l = Math.min(r, h.chunk * h.ratio));
    } else
      (a = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
        (l = Math.min(r, e.min * e.ratio));
    return { base: a - l / 2, head: a + l / 2, center: a, size: l };
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      n = t.data,
      s = n.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[e.axis] !== null &&
        !n[o].hidden &&
        n[o].draw(this._ctx);
  }
}
v(Pn, "id", "bar"),
  v(Pn, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  v(Pn, "overrides", {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
class An extends kt {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parsePrimitiveData(t, e, n, s) {
    const o = super.parsePrimitiveData(t, e, n, s);
    for (let r = 0; r < o.length; r++)
      o[r]._custom = this.resolveDataElementOptions(r + n).radius;
    return o;
  }
  parseArrayData(t, e, n, s) {
    const o = super.parseArrayData(t, e, n, s);
    for (let r = 0; r < o.length; r++) {
      const a = e[n + r];
      o[r]._custom = C(a[2], this.resolveDataElementOptions(r + n).radius);
    }
    return o;
  }
  parseObjectData(t, e, n, s) {
    const o = super.parseObjectData(t, e, n, s);
    for (let r = 0; r < o.length; r++) {
      const a = e[n + r];
      o[r]._custom = C(
        a && a.r && +a.r,
        this.resolveDataElementOptions(r + n).radius
      );
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let n = t.length - 1; n >= 0; --n)
      e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      r = this.getParsed(t),
      a = s.getLabelForValue(r.x),
      l = o.getLabelForValue(r.y),
      c = r._custom;
    return {
      label: n[t] || "",
      value: "(" + a + ", " + l + (c ? ", " + c : "") + ")",
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      { iScale: r, vScale: a } = this._cachedMeta,
      { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s),
      h = r.axis,
      u = a.axis;
    for (let d = e; d < e + n; d++) {
      const f = t[d],
        g = !o && this.getParsed(d),
        m = {},
        p = (m[h] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(g[h])),
        b = (m[u] = o ? a.getBasePixel() : a.getPixelForValue(g[u]));
      (m.skip = isNaN(p) || isNaN(b)),
        c &&
          ((m.options =
            l || this.resolveDataElementOptions(d, f.active ? "active" : s)),
          o && (m.options.radius = 0)),
        this.updateElement(f, d, m, s);
    }
  }
  resolveDataElementOptions(t, e) {
    const n = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, e);
    s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
    const o = s.radius;
    return (
      e !== "active" && (s.radius = 0), (s.radius += C(n && n._custom, o)), s
    );
  }
}
v(An, "id", "bubble"),
  v(An, "defaults", {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius"],
      },
    },
  }),
  v(An, "overrides", {
    scales: { x: { type: "linear" }, y: { type: "linear" } },
  });
function Nu(i, t, e) {
  let n = 1,
    s = 1,
    o = 0,
    r = 0;
  if (t < $) {
    const a = i,
      l = a + t,
      c = Math.cos(a),
      h = Math.sin(a),
      u = Math.cos(l),
      d = Math.sin(l),
      f = (_, w, x) => (ui(_, a, l, !0) ? 1 : Math.max(w, w * e, x, x * e)),
      g = (_, w, x) => (ui(_, a, l, !0) ? -1 : Math.min(w, w * e, x, x * e)),
      m = f(0, c, u),
      p = f(K, h, d),
      b = g(j, c, u),
      y = g(j + K, h, d);
    (n = (m - b) / 2),
      (s = (p - y) / 2),
      (o = -(m + b) / 2),
      (r = -(p + y) / 2);
  }
  return { ratioX: n, ratioY: s, offsetX: o, offsetY: r };
}
class Ge extends kt {
  constructor(t, e) {
    super(t, e);
    (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, e) {
    const n = this.getDataset().data,
      s = this._cachedMeta;
    if (this._parsing === !1) s._parsed = n;
    else {
      let o = (l) => +n[l];
      if (I(n[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +qt(n[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r) s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return St(this.options.rotation - 90);
  }
  _getCircumference() {
    return St(this.options.circumference);
  }
  _getRotationExtents() {
    let t = $,
      e = -$;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (
        this.chart.isDatasetVisible(n) &&
        this.chart.getDatasetMeta(n).type === this._type
      ) {
        const s = this.chart.getDatasetMeta(n).controller,
          o = s._getRotation(),
          r = s._getCircumference();
        (t = Math.min(t, o)), (e = Math.max(e, o + r));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this.chart,
      { chartArea: n } = e,
      s = this._cachedMeta,
      o = s.data,
      r =
        this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      a = Math.max((Math.min(n.width, n.height) - r) / 2, 0),
      l = Math.min(Kc(this.options.cutout, a), 1),
      c = this._getRingWeight(this.index),
      { circumference: h, rotation: u } = this._getRotationExtents(),
      { ratioX: d, ratioY: f, offsetX: g, offsetY: m } = Nu(u, h, l),
      p = (n.width - r) / d,
      b = (n.height - r) / f,
      y = Math.max(Math.min(p, b) / 2, 0),
      _ = ha(this.options.radius, y),
      w = Math.max(_ * l, 0),
      x = (_ - w) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = g * _),
      (this.offsetY = m * _),
      (s.total = this.calculateTotal()),
      (this.outerRadius = _ - x * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - x * c, 0)),
      this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const n = this.options,
      s = this._cachedMeta,
      o = this._getCircumference();
    return (e && n.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      s._parsed[t] === null ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * o) / $);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      r = this.chart,
      a = r.chartArea,
      c = r.options.animation,
      h = (a.left + a.right) / 2,
      u = (a.top + a.bottom) / 2,
      d = o && c.animateScale,
      f = d ? 0 : this.innerRadius,
      g = d ? 0 : this.outerRadius,
      { sharedOptions: m, includeOptions: p } = this._getSharedOptions(e, s);
    let b = this._getRotation(),
      y;
    for (y = 0; y < e; ++y) b += this._circumference(y, o);
    for (y = e; y < e + n; ++y) {
      const _ = this._circumference(y, o),
        w = t[y],
        x = {
          x: h + this.offsetX,
          y: u + this.offsetY,
          startAngle: b,
          endAngle: b + _,
          circumference: _,
          outerRadius: g,
          innerRadius: f,
        };
      p &&
        (x.options =
          m || this.resolveDataElementOptions(y, w.active ? "active" : s)),
        (b += _),
        this.updateElement(w, y, x, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let n = 0,
      s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(s) &&
        !e[s].hidden &&
        (n += Math.abs(o));
    }
    return n;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? $ * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = yi(e._parsed[t], n.options.locale);
    return { label: s[t] || "", value: o };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const n = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = n.data.datasets.length; s < o; ++s)
        if (n.isDatasetVisible(s)) {
          (r = n.getDatasetMeta(s)), (t = r.data), (a = r.controller);
          break;
        }
    }
    if (!t) return 0;
    for (s = 0, o = t.length; s < o; ++s)
      (l = a.resolveDataElementOptions(s)),
        l.borderAlign !== "inner" &&
          (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let n = 0, s = t.length; n < s; ++n) {
      const o = this.resolveDataElementOptions(n);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let n = 0; n < t; ++n)
      this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(C(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
v(Ge, "id", "doughnut"),
  v(Ge, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  v(Ge, "descriptors", {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) =>
      t !== "spacing" &&
      !t.startsWith("borderDash") &&
      !t.startsWith("hoverBorderDash"),
  }),
  v(Ge, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: n, color: s },
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(r),
                  index: r,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, n) {
          n.chart.toggleDataVisibility(e.index), n.chart.update();
        },
      },
    },
  });
class In extends kt {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: n, data: s = [], _dataset: o } = e,
      r = this.chart._animationsDisabled;
    let { start: a, count: l } = ya(e, s, r);
    (this._drawStart = a),
      (this._drawCount = l),
      xa(e) && ((a = 0), (l = s.length)),
      (n._chart = this.chart),
      (n._datasetIndex = this.index),
      (n._decimated = !!o._decimated),
      (n.points = s);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(n, void 0, { animated: !r, options: c }, t),
      this.updateElements(s, a, l, t);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, s),
      d = r.axis,
      f = a.axis,
      { spanGaps: g, segment: m } = this.options,
      p = Ee(g) ? g : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || o || s === "none",
      y = e + n,
      _ = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let x = 0; x < _; ++x) {
      const k = t[x],
        S = b ? k : {};
      if (x < e || x >= y) {
        S.skip = !0;
        continue;
      }
      const M = this.getParsed(x),
        T = N(M[f]),
        P = (S[d] = r.getPixelForValue(M[d], x)),
        A = (S[f] =
          o || T
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[f], x));
      (S.skip = isNaN(P) || isNaN(A) || T),
        (S.stop = x > 0 && Math.abs(M[d] - w[d]) > p),
        m && ((S.parsed = M), (S.raw = c.data[x])),
        u &&
          (S.options =
            h || this.resolveDataElementOptions(x, k.active ? "active" : s)),
        b || this.updateElement(k, x, S, s),
        (w = M);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      n = (e.options && e.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return n;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
v(In, "id", "line"),
  v(In, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  v(In, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
class Ln extends kt {
  constructor(t, e) {
    super(t, e);
    (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = yi(e._parsed[t].r, n.options.locale);
    return { label: s[t] || "", value: o };
  }
  parseObjectData(t, e, n, s) {
    return Ta.bind(this)(t, e, n, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((n, s) => {
        const o = this.getParsed(s).r;
        !isNaN(o) &&
          this.chart.getDataVisibility(s) &&
          (o < e.min && (e.min = o), o > e.max && (e.max = o));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      n = t.options,
      s = Math.min(e.right - e.left, e.bottom - e.top),
      o = Math.max(s / 2, 0),
      r = Math.max(n.cutoutPercentage ? (o / 100) * n.cutoutPercentage : 1, 0),
      a = (o - r) / t.getVisibleDatasetCount();
    (this.outerRadius = o - a * this.index),
      (this.innerRadius = this.outerRadius - a);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      r = this.chart,
      l = r.options.animation,
      c = this._cachedMeta.rScale,
      h = c.xCenter,
      u = c.yCenter,
      d = c.getIndexAngle(0) - 0.5 * j;
    let f = d,
      g;
    const m = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g) f += this._computeAngle(g, s, m);
    for (g = e; g < e + n; g++) {
      const p = t[g];
      let b = f,
        y = f + this._computeAngle(g, s, m),
        _ = r.getDataVisibility(g)
          ? c.getDistanceFromCenterForValue(this.getParsed(g).r)
          : 0;
      (f = y), o && (l.animateScale && (_ = 0), l.animateRotate && (b = y = d));
      const w = {
        x: h,
        y: u,
        innerRadius: 0,
        outerRadius: _,
        startAngle: b,
        endAngle: y,
        options: this.resolveDataElementOptions(g, p.active ? "active" : s),
      };
      this.updateElement(p, g, w, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((n, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, n) {
    return this.chart.getDataVisibility(t)
      ? St(this.resolveDataElementOptions(t, e).angle || n)
      : 0;
  }
}
v(Ln, "id", "polarArea"),
  v(Ln, "defaults", {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
        ],
      },
    },
    indexAxis: "r",
    startAngle: 0,
  }),
  v(Ln, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: n, color: s },
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(r),
                  index: r,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, n) {
          n.chart.toggleDataVisibility(e.index), n.chart.update();
        },
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
class Co extends Ge {}
v(Co, "id", "pie"),
  v(Co, "defaults", {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%",
  });
class Fn extends kt {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      n = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(n[e.axis]),
    };
  }
  parseObjectData(t, e, n, s) {
    return Ta.bind(this)(t, e, n, s);
  }
  update(t) {
    const e = this._cachedMeta,
      n = e.dataset,
      s = e.data || [],
      o = e.iScale.getLabels();
    if (((n.points = s), t !== "resize")) {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = { _loop: !0, _fullLoop: o.length === s.length, options: r };
      this.updateElement(n, void 0, a, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, e, n, s) {
    const o = this._cachedMeta.rScale,
      r = s === "reset";
    for (let a = e; a < e + n; a++) {
      const l = t[a],
        c = this.resolveDataElementOptions(a, l.active ? "active" : s),
        h = o.getPointPositionForValue(a, this.getParsed(a).r),
        u = r ? o.xCenter : h.x,
        d = r ? o.yCenter : h.y,
        f = {
          x: u,
          y: d,
          angle: h.angle,
          skip: isNaN(u) || isNaN(d),
          options: c,
        };
      this.updateElement(l, a, f, s);
    }
  }
}
v(Fn, "id", "radar"),
  v(Fn, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: { line: { fill: "start" } },
  }),
  v(Fn, "overrides", {
    aspectRatio: 1,
    scales: { r: { type: "radialLinear" } },
  });
class Rn extends kt {
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      r = this.getParsed(t),
      a = s.getLabelForValue(r.x),
      l = o.getLabelForValue(r.y);
    return { label: n[t] || "", value: "(" + a + ", " + l + ")" };
  }
  update(t) {
    const e = this._cachedMeta,
      { data: n = [] } = e,
      s = this.chart._animationsDisabled;
    let { start: o, count: r } = ya(e, n, s);
    if (
      ((this._drawStart = o),
      (this._drawCount = r),
      xa(e) && ((o = 0), (r = n.length)),
      this.options.showLine)
    ) {
      this.datasetElementType || this.addElements();
      const { dataset: a, _dataset: l } = e;
      (a._chart = this.chart),
        (a._datasetIndex = this.index),
        (a._decimated = !!l._decimated),
        (a.points = n);
      const c = this.resolveDatasetElementOptions(t);
      (c.segment = this.options.segment),
        this.updateElement(a, void 0, { animated: !s, options: c }, t);
    } else
      this.datasetElementType &&
        (delete e.dataset, (this.datasetElementType = !1));
    this.updateElements(n, o, r, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType &&
      t &&
      (this.datasetElementType = this.chart.registry.getElement("line")),
      super.addElements();
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      h = this.resolveDataElementOptions(e, s),
      u = this.getSharedOptions(h),
      d = this.includeOptions(s, u),
      f = r.axis,
      g = a.axis,
      { spanGaps: m, segment: p } = this.options,
      b = Ee(m) ? m : Number.POSITIVE_INFINITY,
      y = this.chart._animationsDisabled || o || s === "none";
    let _ = e > 0 && this.getParsed(e - 1);
    for (let w = e; w < e + n; ++w) {
      const x = t[w],
        k = this.getParsed(w),
        S = y ? x : {},
        M = N(k[g]),
        T = (S[f] = r.getPixelForValue(k[f], w)),
        P = (S[g] =
          o || M
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[g], w));
      (S.skip = isNaN(T) || isNaN(P) || M),
        (S.stop = w > 0 && Math.abs(k[f] - _[f]) > b),
        p && ((S.parsed = k), (S.raw = c.data[w])),
        d &&
          (S.options =
            u || this.resolveDataElementOptions(w, x.active ? "active" : s)),
        y || this.updateElement(x, w, S, s),
        (_ = k);
    }
    this.updateSharedOptions(u, s, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = e.length - 1; l >= 0; --l)
        a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const n = t.dataset,
      s = (n.options && n.options.borderWidth) || 0;
    if (!e.length) return s;
    const o = e[0].size(this.resolveDataElementOptions(0)),
      r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(s, o, r) / 2;
  }
}
v(Rn, "id", "scatter"),
  v(Rn, "defaults", {
    datasetElementType: !1,
    dataElementType: "point",
    showLine: !1,
    fill: !1,
  }),
  v(Rn, "overrides", {
    interaction: { mode: "point" },
    scales: { x: { type: "linear" }, y: { type: "linear" } },
  });
function te() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class Fs {
  constructor(t) {
    v(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Fs.prototype, t);
  }
  init() {}
  formats() {
    return te();
  }
  parse() {
    return te();
  }
  format() {
    return te();
  }
  add() {
    return te();
  }
  diff() {
    return te();
  }
  startOf() {
    return te();
  }
  endOf() {
    return te();
  }
}
var Na = { _date: Fs };
function zu(i, t, e, n) {
  const { controller: s, data: o, _sorted: r } = i,
    a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? ch : Nt;
    if (n) {
      if (s._sharedOptions) {
        const c = o[0],
          h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const u = l(o, t, e - h),
            d = l(o, t, e + h);
          return { lo: u.lo, hi: d.hi };
        }
      }
    } else return l(o, t, e);
  }
  return { lo: 0, hi: o.length - 1 };
}
function xi(i, t, e, n, s) {
  const o = i.getSortedVisibleDatasetMetas(),
    r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a],
      { lo: u, hi: d } = zu(o[a], t, r, s);
    for (let f = u; f <= d; ++f) {
      const g = h[f];
      g.skip || n(g, c, f);
    }
  }
}
function Vu(i) {
  const t = i.indexOf("x") !== -1,
    e = i.indexOf("y") !== -1;
  return function (n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0,
      r = e ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Nn(i, t, e, n, s) {
  const o = [];
  return (
    (!s && !i.isPointInArea(t)) ||
      xi(
        i,
        e,
        t,
        function (a, l, c) {
          (!s && !zt(a, i.chartArea, 0)) ||
            (a.inRange(t.x, t.y, n) &&
              o.push({ element: a, datasetIndex: l, index: c }));
        },
        !0
      ),
    o
  );
}
function Wu(i, t, e, n) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps(
        ["startAngle", "endAngle"],
        n
      ),
      { angle: u } = fa(r, { x: t.x, y: t.y });
    ui(u, c, h) && s.push({ element: r, datasetIndex: a, index: l });
  }
  return xi(i, e, t, o), s;
}
function Bu(i, t, e, n, s, o) {
  let r = [];
  const a = Vu(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, d) {
    const f = h.inRange(t.x, t.y, s);
    if (n && !f) return;
    const g = h.getCenterPoint(s);
    if (!(!!o || i.isPointInArea(g)) && !f) return;
    const p = a(t, g);
    p < l
      ? ((r = [{ element: h, datasetIndex: u, index: d }]), (l = p))
      : p === l && r.push({ element: h, datasetIndex: u, index: d });
  }
  return xi(i, e, t, c), r;
}
function zn(i, t, e, n, s, o) {
  return !o && !i.isPointInArea(t)
    ? []
    : e === "r" && !n
    ? Wu(i, t, e, s)
    : Bu(i, t, e, n, s, o);
}
function Po(i, t, e, n, s) {
  const o = [],
    r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    xi(i, e, t, (l, c, h) => {
      l[r](t[e], s) &&
        (o.push({ element: l, datasetIndex: c, index: h }),
        (a = a || l.inRange(t.x, t.y, s)));
    }),
    n && !a ? [] : o
  );
}
var Hu = {
  evaluateInteractionItems: xi,
  modes: {
    index(i, t, e, n) {
      const s = se(t, i),
        o = e.axis || "x",
        r = e.includeInvisible || !1,
        a = e.intersect ? Nn(i, s, o, n, r) : zn(i, s, o, !1, n, r),
        l = [];
      return a.length
        ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
            const h = a[0].index,
              u = c.data[h];
            u &&
              !u.skip &&
              l.push({ element: u, datasetIndex: c.index, index: h });
          }),
          l)
        : [];
    },
    dataset(i, t, e, n) {
      const s = se(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      let a = e.intersect ? Nn(i, s, o, n, r) : zn(i, s, o, !1, n, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({ element: c[h], datasetIndex: l, index: h });
      }
      return a;
    },
    point(i, t, e, n) {
      const s = se(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      return Nn(i, s, o, n, r);
    },
    nearest(i, t, e, n) {
      const s = se(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      return zn(i, s, o, e.intersect, n, r);
    },
    x(i, t, e, n) {
      const s = se(t, i);
      return Po(i, s, "x", e.intersect, n);
    },
    y(i, t, e, n) {
      const s = se(t, i);
      return Po(i, s, "y", e.intersect, n);
    },
  },
};
const za = ["left", "top", "right", "bottom"];
function Ve(i, t) {
  return i.filter((e) => e.pos === t);
}
function Ao(i, t) {
  return i.filter((e) => za.indexOf(e.pos) === -1 && e.box.axis === t);
}
function We(i, t) {
  return i.sort((e, n) => {
    const s = t ? n : e,
      o = t ? e : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function $u(i) {
  const t = [];
  let e, n, s, o, r, a;
  for (e = 0, n = (i || []).length; e < n; ++e)
    (s = i[e]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 },
      } = s),
      t.push({
        index: e,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: r && o + r,
        stackWeight: a,
      });
  return t;
}
function ju(i) {
  const t = {};
  for (const e of i) {
    const { stack: n, pos: s, stackWeight: o } = e;
    if (!n || !za.includes(s)) continue;
    const r = t[n] || (t[n] = { count: 0, placed: 0, weight: 0, size: 0 });
    r.count++, (r.weight += o);
  }
  return t;
}
function Uu(i, t) {
  const e = ju(i),
    { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box,
      c = e[a.stack],
      h = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = h ? h * n : l && t.availableWidth), (a.height = s))
      : ((a.width = n), (a.height = h ? h * s : l && t.availableHeight));
  }
  return e;
}
function Yu(i) {
  const t = $u(i),
    e = We(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    n = We(Ve(t, "left"), !0),
    s = We(Ve(t, "right")),
    o = We(Ve(t, "top"), !0),
    r = We(Ve(t, "bottom")),
    a = Ao(t, "x"),
    l = Ao(t, "y");
  return {
    fullSize: e,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: Ve(t, "chartArea"),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(r).concat(a),
  };
}
function Io(i, t, e, n) {
  return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
}
function Va(i, t) {
  (i.top = Math.max(i.top, t.top)),
    (i.left = Math.max(i.left, t.left)),
    (i.bottom = Math.max(i.bottom, t.bottom)),
    (i.right = Math.max(i.right, t.right));
}
function qu(i, t, e, n) {
  const { pos: s, box: o } = e,
    r = i.maxPadding;
  if (!I(s)) {
    e.size && (i[s] -= e.size);
    const u = n[e.stack] || { size: 0, count: 1 };
    (u.size = Math.max(u.size, e.horizontal ? o.height : o.width)),
      (e.size = u.size / u.count),
      (i[s] += e.size);
  }
  o.getPadding && Va(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Io(r, i, "left", "right")),
    l = Math.max(0, t.outerHeight - Io(r, i, "top", "bottom")),
    c = a !== i.w,
    h = l !== i.h;
  return (
    (i.w = a),
    (i.h = l),
    e.horizontal ? { same: c, other: h } : { same: h, other: c }
  );
}
function Zu(i) {
  const t = i.maxPadding;
  function e(n) {
    const s = Math.max(t[n] - i[n], 0);
    return (i[n] += s), s;
  }
  (i.y += e("top")), (i.x += e("left")), e("right"), e("bottom");
}
function Xu(i, t) {
  const e = t.maxPadding;
  function n(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((r) => {
        o[r] = Math.max(t[r], e[r]);
      }),
      o
    );
  }
  return n(i ? ["left", "right"] : ["top", "bottom"]);
}
function Ke(i, t, e, n) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    (a = i[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, Xu(a.horizontal, t));
    const { same: u, other: d } = qu(t, e, a, n);
    (c |= u && s.length), (h = h || d), l.fullSize || s.push(a);
  }
  return (c && Ke(s, t, e, n)) || h;
}
function Ai(i, t, e, n, s) {
  (i.top = e),
    (i.left = t),
    (i.right = t + n),
    (i.bottom = e + s),
    (i.width = n),
    (i.height = s);
}
function Lo(i, t, e, n) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box,
      c = n[a.stack] || { count: 1, placed: 0, weight: 1 },
      h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * h,
        d = c.size || l.height;
      hi(c.start) && (r = c.start),
        l.fullSize
          ? Ai(l, s.left, r, e.outerWidth - s.right - s.left, d)
          : Ai(l, t.left + c.placed, r, u, d),
        (c.start = r),
        (c.placed += u),
        (r = l.bottom);
    } else {
      const u = t.h * h,
        d = c.size || l.width;
      hi(c.start) && (o = c.start),
        l.fullSize
          ? Ai(l, o, s.top, d, e.outerHeight - s.bottom - s.top)
          : Ai(l, o, t.top + c.placed, d, u),
        (c.start = o),
        (c.placed += u),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = r);
}
var ot = {
  addBox(i, t) {
    i.boxes || (i.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
  },
  update(i, t, e, n) {
    if (!i) return;
    const s = rt(i.options.layout.padding),
      o = Math.max(t - s.width, 0),
      r = Math.max(e - s.height, 0),
      a = Yu(i.boxes),
      l = a.vertical,
      c = a.horizontal;
    V(i.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const h =
        l.reduce(
          (m, p) => (p.box.options && p.box.options.display === !1 ? m : m + 1),
          0
        ) || 1,
      u = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: s,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / h,
        hBoxMaxHeight: r / 2,
      }),
      d = Object.assign({}, s);
    Va(d, rt(n));
    const f = Object.assign(
        { maxPadding: d, w: o, h: r, x: s.left, y: s.top },
        s
      ),
      g = Uu(l.concat(c), u);
    Ke(a.fullSize, f, u, g),
      Ke(l, f, u, g),
      Ke(c, f, u, g) && Ke(l, f, u, g),
      Zu(f),
      Lo(a.leftAndTop, f, u, g),
      (f.x += f.w),
      (f.y += f.h),
      Lo(a.rightAndBottom, f, u, g),
      (i.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      V(a.chartArea, (m) => {
        const p = m.box;
        Object.assign(p, i.chartArea),
          p.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Wa {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {}
  removeEventListener(t, e, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (n = n || t.height),
      { width: e, height: Math.max(0, s ? Math.floor(e / s) : n) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Gu extends Wa {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Xi = "$chartjs",
  Ku = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Fo = (i) => i === null || i === "";
function Ju(i, t) {
  const e = i.style,
    n = i.getAttribute("height"),
    s = i.getAttribute("width");
  if (
    ((i[Xi] = {
      initial: {
        height: n,
        width: s,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || "block"),
    (e.boxSizing = e.boxSizing || "border-box"),
    Fo(s))
  ) {
    const o = po(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Fo(n))
    if (i.style.height === "") i.height = i.width / (t || 2);
    else {
      const o = po(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Ba = iu ? { passive: !0 } : !1;
function Qu(i, t, e) {
  i && i.addEventListener(t, e, Ba);
}
function td(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Ba);
}
function ed(i, t) {
  const e = Ku[i.type] || i.type,
    { x: n, y: s } = se(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null,
  };
}
function on(i, t) {
  for (const e of i) if (e === t || e.contains(t)) return !0;
}
function id(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || on(a.addedNodes, n)), (r = r && !on(a.removedNodes, n));
      r && e();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function nd(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || on(a.removedNodes, n)), (r = r && !on(a.addedNodes, n));
      r && e();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const fi = new Map();
let Ro = 0;
function Ha() {
  const i = window.devicePixelRatio;
  i !== Ro &&
    ((Ro = i),
    fi.forEach((t, e) => {
      e.currentDevicePixelRatio !== i && t();
    }));
}
function sd(i, t) {
  fi.size || window.addEventListener("resize", Ha), fi.set(i, t);
}
function od(i) {
  fi.delete(i), fi.size || window.removeEventListener("resize", Ha);
}
function rd(i, t, e) {
  const n = i.canvas,
    s = n && Ls(n);
  if (!s) return;
  const o = ba((a, l) => {
      const c = s.clientWidth;
      e(a, l), c < s.clientWidth && e();
    }, window),
    r = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        h = l.contentRect.height;
      (c === 0 && h === 0) || o(c, h);
    });
  return r.observe(s), sd(i, o), r;
}
function Vn(i, t, e) {
  e && e.disconnect(), t === "resize" && od(i);
}
function ad(i, t, e) {
  const n = i.canvas,
    s = ba((o) => {
      i.ctx !== null && e(ed(o, i));
    }, i);
  return Qu(n, t, s), s;
}
class ld extends Wa {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (Ju(t, e), n) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Xi]) return !1;
    const n = e[Xi].initial;
    ["height", "width"].forEach((o) => {
      const r = n[o];
      N(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = n.style || {};
    return (
      Object.keys(s).forEach((o) => {
        e.style[o] = s[o];
      }),
      (e.width = e.width),
      delete e[Xi],
      !0
    );
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      r = { attach: id, detach: nd, resize: rd }[e] || ad;
    s[e] = r(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}),
      s = n[e];
    if (!s) return;
    (({ attach: Vn, detach: Vn, resize: Vn }[e] || td)(t, e, s),
      (n[e] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, s) {
    return eu(t, e, n, s);
  }
  isAttached(t) {
    const e = t && Ls(t);
    return !!(e && e.isConnected);
  }
}
function cd(i) {
  return !Is() ||
    (typeof OffscreenCanvas != "undefined" && i instanceof OffscreenCanvas)
    ? Gu
    : ld;
}
class Ot {
  constructor() {
    v(this, "x");
    v(this, "y");
    v(this, "active", !1);
    v(this, "options");
    v(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps(["x", "y"], t);
    return { x: e, y: n };
  }
  hasValue() {
    return Ee(this.x) && Ee(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n) return this;
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
      }),
      s
    );
  }
}
v(Ot, "defaults", {}), v(Ot, "defaultRoutes");
function hd(i, t) {
  const e = i.options.ticks,
    n = ud(i),
    s = Math.min(e.maxTicksLimit || n, n),
    o = e.major.enabled ? fd(t) : [],
    r = o.length,
    a = o[0],
    l = o[r - 1],
    c = [];
  if (r > s) return gd(t, c, o, r / s), c;
  const h = dd(o, t, s);
  if (r > 0) {
    let u, d;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Ii(t, c, h, N(f) ? 0 : a - f, a), u = 0, d = r - 1; u < d; u++)
      Ii(t, c, h, o[u], o[u + 1]);
    return Ii(t, c, h, l, N(f) ? t.length : l + f), c;
  }
  return Ii(t, c, h), c;
}
function ud(i) {
  const t = i.options.offset,
    e = i._tickSize(),
    n = i._length / e + (t ? 0 : 1),
    s = i._maxLength / e;
  return Math.floor(Math.min(n, s));
}
function dd(i, t, e) {
  const n = md(i),
    s = t.length / e;
  if (!n) return Math.max(s, 1);
  const o = oh(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s) return l;
  }
  return Math.max(s, 1);
}
function fd(i) {
  const t = [];
  let e, n;
  for (e = 0, n = i.length; e < n; e++) i[e].major && t.push(e);
  return t;
}
function gd(i, t, e, n) {
  let s = 0,
    o = e[0],
    r;
  for (n = Math.ceil(n), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), s++, (o = e[s * n]));
}
function Ii(i, t, e, n, s) {
  const o = C(n, 0),
    r = Math.min(C(s, i.length), i.length);
  let a = 0,
    l,
    c,
    h;
  for (
    e = Math.ceil(e), s && ((l = s - n), (e = l / Math.floor(l / e))), h = o;
    h < 0;

  )
    a++, (h = Math.round(o + a * e));
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, (h = Math.round(o + a * e)));
}
function md(i) {
  const t = i.length;
  let e, n;
  if (t < 2) return !1;
  for (n = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== n) return !1;
  return n;
}
const pd = (i) => (i === "left" ? "right" : i === "right" ? "left" : i),
  No = (i, t, e) => (t === "top" || t === "left" ? i[t] + e : i[t] - e),
  zo = (i, t) => Math.min(t || i, i);
function Vo(i, t) {
  const e = [],
    n = i.length / t,
    s = i.length;
  let o = 0;
  for (; o < s; o += n) e.push(i[Math.floor(o)]);
  return e;
}
function bd(i, t, e) {
  const n = i.ticks.length,
    s = Math.min(t, n - 1),
    o = i._startPixel,
    r = i._endPixel,
    a = 1e-6;
  let l = i.getPixelForTick(s),
    c;
  if (
    !(
      e &&
      (n === 1
        ? (c = Math.max(l - o, r - l))
        : t === 0
        ? (c = (i.getPixelForTick(1) - l) / 2)
        : (c = (l - i.getPixelForTick(s - 1)) / 2),
      (l += s < t ? c : -c),
      l < o - a || l > r + a)
    )
  )
    return l;
}
function yd(i, t) {
  V(i, (e) => {
    const n = e.gc,
      s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete e.data[n[o]];
      n.splice(0, s);
    }
  });
}
function Be(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Wo(i, t) {
  if (!i.display) return 0;
  const e = tt(i.font, t),
    n = rt(i.padding);
  return (H(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
}
function xd(i, t) {
  return Xt(i, { scale: t, type: "scale" });
}
function _d(i, t, e) {
  return Xt(i, { tick: e, index: t, type: "tick" });
}
function wd(i, t, e) {
  let n = Ts(i);
  return ((e && t !== "right") || (!e && t === "right")) && (n = pd(n)), n;
}
function vd(i, t, e, n) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = i,
    { chartArea: c, scales: h } = l;
  let u = 0,
    d,
    f,
    g;
  const m = r - s,
    p = a - o;
  if (i.isHorizontal()) {
    if (((f = st(n, o, a)), I(e))) {
      const b = Object.keys(e)[0],
        y = e[b];
      g = h[b].getPixelForValue(y) + m - t;
    } else
      e === "center" ? (g = (c.bottom + c.top) / 2 + m - t) : (g = No(i, e, t));
    d = a - o;
  } else {
    if (I(e)) {
      const b = Object.keys(e)[0],
        y = e[b];
      f = h[b].getPixelForValue(y) - p + t;
    } else
      e === "center" ? (f = (c.left + c.right) / 2 - p + t) : (f = No(i, e, t));
    (g = st(n, r, s)), (u = e === "left" ? -K : K);
  }
  return { titleX: f, titleY: g, maxWidth: d, rotation: u };
}
class pe extends Ot {
  constructor(t) {
    super();
    (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: s } = this;
    return (
      (t = ft(t, Number.POSITIVE_INFINITY)),
      (e = ft(e, Number.NEGATIVE_INFINITY)),
      (n = ft(n, Number.POSITIVE_INFINITY)),
      (s = ft(s, Number.NEGATIVE_INFINITY)),
      { min: ft(t, n), max: ft(e, s), minDefined: Z(t), maxDefined: Z(e) }
    );
  }
  getMinMax(t) {
    let { min: e, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(),
      r;
    if (s && o) return { min: e, max: n };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (r = a[l].controller.getMinMax(this, t)),
        s || (e = Math.min(e, r.min)),
        o || (n = Math.max(n, r.max));
    return (
      (e = o && e > n ? n : e),
      (n = s && e > n ? e : n),
      { min: ft(e, ft(n, e)), max: ft(n, ft(e, n)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    B(this.options.beforeUpdate, [this]);
  }
  update(t, e, n) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options,
      a = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + n.left + n.right
        : this.height + n.top + n.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Ih(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Vo(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === "auto") &&
        ((this.ticks = hd(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      e,
      n;
    this.isHorizontal()
      ? ((e = this.left), (n = this.right))
      : ((e = this.top), (n = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = n),
      (this._reversePixels = t),
      (this._length = n - e),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    B(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    B(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    B(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), B(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    B(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      (o = t[n]), (o.label = B(e.callback, [o.value, n, t], this));
  }
  afterTickToLabelConversion() {
    B(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    B(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      n = zo(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      o = e.maxRotation;
    let r = s,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !e.display ||
      s >= o ||
      n <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(),
      u = h.widest.width,
      d = h.highest.height,
      f = et(this.chart.width - u, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / n : f / (n - 1)),
      u + 6 > a &&
        ((a = f / (n - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Be(t.grid) -
          e.padding -
          Wo(t.title, this.chart.options.font)),
        (c = Math.sqrt(u * u + d * d)),
        (r = ks(
          Math.min(
            Math.asin(et((h.highest.height + 6) / a, -1, 1)),
            Math.asin(et(l / c, -1, 1)) - Math.asin(et(d / c, -1, 1))
          )
        )),
        (r = Math.max(s, Math.min(o, r)))),
      (this.labelRotation = r);
  }
  afterCalculateLabelRotation() {
    B(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    B(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: n, title: s, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal();
    if (r) {
      const l = Wo(s, e.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = Be(o) + l))
          : ((t.height = this.maxHeight), (t.width = Be(o) + l)),
        n.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: h,
            widest: u,
            highest: d,
          } = this._getLabelSizes(),
          f = n.padding * 2,
          g = St(this.labelRotation),
          m = Math.cos(g),
          p = Math.sin(g);
        if (a) {
          const b = n.mirror ? 0 : p * u.width + m * d.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = n.mirror ? 0 : m * u.width + p * d.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, p, m);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, n, s) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left,
        u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0,
        f = 0;
      l
        ? c
          ? ((d = s * t.width), (f = n * e.height))
          : ((d = n * t.height), (f = s * e.width))
        : o === "start"
        ? (f = e.width)
        : o === "end"
        ? (d = t.width)
        : o !== "inner" && ((d = t.width / 2), (f = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((d - h + r) * this.width) / (this.width - h),
          0
        )),
        (this.paddingRight = Math.max(
          ((f - u + r) * this.width) / (this.width - u),
          0
        ));
    } else {
      let h = e.height / 2,
        u = t.height / 2;
      o === "start"
        ? ((h = 0), (u = t.height))
        : o === "end" && ((h = e.height), (u = 0)),
        (this.paddingTop = h + r),
        (this.paddingBottom = u + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    B(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, n;
    for (e = 0, n = t.length; e < n; e++)
      N(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      e < n.length && (n = Vo(n, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            n,
            n.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, e, n) {
    const { ctx: s, _longestTextCache: o } = this,
      r = [],
      a = [],
      l = Math.floor(e / zo(e, n));
    let c = 0,
      h = 0,
      u,
      d,
      f,
      g,
      m,
      p,
      b,
      y,
      _,
      w,
      x;
    for (u = 0; u < e; u += l) {
      if (
        ((g = t[u].label),
        (m = this._resolveTickFontOptions(u)),
        (s.font = p = m.string),
        (b = o[p] = o[p] || { data: {}, gc: [] }),
        (y = m.lineHeight),
        (_ = w = 0),
        !N(g) && !H(g))
      )
        (_ = nn(s, b.data, b.gc, _, g)), (w = y);
      else if (H(g))
        for (d = 0, f = g.length; d < f; ++d)
          (x = g[d]),
            !N(x) && !H(x) && ((_ = nn(s, b.data, b.gc, _, x)), (w += y));
      r.push(_), a.push(w), (c = Math.max(_, c)), (h = Math.max(w, h));
    }
    yd(o, e);
    const k = r.indexOf(c),
      S = a.indexOf(h),
      M = (T) => ({ width: r[T] || 0, height: a[T] || 0 });
    return {
      first: M(0),
      last: M(e - 1),
      widest: M(k),
      highest: M(S),
      widths: r,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return lh(this._alignToPixels ? Qt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return n.$context || (n.$context = _d(this.getContext(), t, n));
    }
    return this.$context || (this.$context = xd(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = St(this.labelRotation),
      n = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0;
    return this.isHorizontal()
      ? l * n > a * s
        ? a / n
        : l / s
      : l * s < a * n
      ? l / n
      : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      n = this.chart,
      s = this.options,
      { grid: o, position: r, border: a } = s,
      l = o.offset,
      c = this.isHorizontal(),
      u = this.ticks.length + (l ? 1 : 0),
      d = Be(o),
      f = [],
      g = a.setContext(this.getContext()),
      m = g.display ? g.width : 0,
      p = m / 2,
      b = function (U) {
        return Qt(n, U, m);
      };
    let y, _, w, x, k, S, M, T, P, A, L, it;
    if (r === "top")
      (y = b(this.bottom)),
        (S = this.bottom - d),
        (T = y - p),
        (A = b(t.top) + p),
        (it = t.bottom);
    else if (r === "bottom")
      (y = b(this.top)),
        (A = t.top),
        (it = b(t.bottom) - p),
        (S = y + p),
        (T = this.top + d);
    else if (r === "left")
      (y = b(this.right)),
        (k = this.right - d),
        (M = y - p),
        (P = b(t.left) + p),
        (L = t.right);
    else if (r === "right")
      (y = b(this.left)),
        (P = t.left),
        (L = b(t.right) - p),
        (k = y + p),
        (M = this.left + d);
    else if (e === "x") {
      if (r === "center") y = b((t.top + t.bottom) / 2 + 0.5);
      else if (I(r)) {
        const U = Object.keys(r)[0],
          G = r[U];
        y = b(this.chart.scales[U].getPixelForValue(G));
      }
      (A = t.top), (it = t.bottom), (S = y + p), (T = S + d);
    } else if (e === "y") {
      if (r === "center") y = b((t.left + t.right) / 2);
      else if (I(r)) {
        const U = Object.keys(r)[0],
          G = r[U];
        y = b(this.chart.scales[U].getPixelForValue(G));
      }
      (k = y - p), (M = k - d), (P = t.left), (L = t.right);
    }
    const ut = C(s.ticks.maxTicksLimit, u),
      W = Math.max(1, Math.ceil(u / ut));
    for (_ = 0; _ < u; _ += W) {
      const U = this.getContext(_),
        G = o.setContext(U),
        _t = a.setContext(U),
        nt = G.lineWidth,
        _e = G.color,
        vi = _t.dash || [],
        we = _t.dashOffset,
        Re = G.tickWidth,
        Gt = G.tickColor,
        Ne = G.tickBorderDash || [],
        Kt = G.tickBorderDashOffset;
      (w = bd(this, _, l)),
        w !== void 0 &&
          ((x = Qt(n, w, nt)),
          c ? (k = M = P = L = x) : (S = T = A = it = x),
          f.push({
            tx1: k,
            ty1: S,
            tx2: M,
            ty2: T,
            x1: P,
            y1: A,
            x2: L,
            y2: it,
            width: nt,
            color: _e,
            borderDash: vi,
            borderDashOffset: we,
            tickWidth: Re,
            tickColor: Gt,
            tickBorderDash: Ne,
            tickBorderDashOffset: Kt,
          }));
    }
    return (this._ticksLength = u), (this._borderValue = y), f;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      n = this.options,
      { position: s, ticks: o } = n,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: h, mirror: u } = o,
      d = Be(n.grid),
      f = d + h,
      g = u ? -h : f,
      m = -St(this.labelRotation),
      p = [];
    let b,
      y,
      _,
      w,
      x,
      k,
      S,
      M,
      T,
      P,
      A,
      L,
      it = "middle";
    if (s === "top")
      (k = this.bottom - g), (S = this._getXAxisLabelAlignment());
    else if (s === "bottom")
      (k = this.top + g), (S = this._getXAxisLabelAlignment());
    else if (s === "left") {
      const W = this._getYAxisLabelAlignment(d);
      (S = W.textAlign), (x = W.x);
    } else if (s === "right") {
      const W = this._getYAxisLabelAlignment(d);
      (S = W.textAlign), (x = W.x);
    } else if (e === "x") {
      if (s === "center") k = (t.top + t.bottom) / 2 + f;
      else if (I(s)) {
        const W = Object.keys(s)[0],
          U = s[W];
        k = this.chart.scales[W].getPixelForValue(U) + f;
      }
      S = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center") x = (t.left + t.right) / 2 - f;
      else if (I(s)) {
        const W = Object.keys(s)[0],
          U = s[W];
        x = this.chart.scales[W].getPixelForValue(U);
      }
      S = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === "y" &&
      (l === "start" ? (it = "top") : l === "end" && (it = "bottom"));
    const ut = this._getLabelSizes();
    for (b = 0, y = a.length; b < y; ++b) {
      (_ = a[b]), (w = _.label);
      const W = o.setContext(this.getContext(b));
      (M = this.getPixelForTick(b) + o.labelOffset),
        (T = this._resolveTickFontOptions(b)),
        (P = T.lineHeight),
        (A = H(w) ? w.length : 1);
      const U = A / 2,
        G = W.color,
        _t = W.textStrokeColor,
        nt = W.textStrokeWidth;
      let _e = S;
      r
        ? ((x = M),
          S === "inner" &&
            (b === y - 1
              ? (_e = this.options.reverse ? "left" : "right")
              : b === 0
              ? (_e = this.options.reverse ? "right" : "left")
              : (_e = "center")),
          s === "top"
            ? c === "near" || m !== 0
              ? (L = -A * P + P / 2)
              : c === "center"
              ? (L = -ut.highest.height / 2 - U * P + P)
              : (L = -ut.highest.height + P / 2)
            : c === "near" || m !== 0
            ? (L = P / 2)
            : c === "center"
            ? (L = ut.highest.height / 2 - U * P)
            : (L = ut.highest.height - A * P),
          u && (L *= -1),
          m !== 0 && !W.showLabelBackdrop && (x += (P / 2) * Math.sin(m)))
        : ((k = M), (L = ((1 - A) * P) / 2));
      let vi;
      if (W.showLabelBackdrop) {
        const we = rt(W.backdropPadding),
          Re = ut.heights[b],
          Gt = ut.widths[b];
        let Ne = L - we.top,
          Kt = 0 - we.left;
        switch (it) {
          case "middle":
            Ne -= Re / 2;
            break;
          case "bottom":
            Ne -= Re;
            break;
        }
        switch (S) {
          case "center":
            Kt -= Gt / 2;
            break;
          case "right":
            Kt -= Gt;
            break;
          case "inner":
            b === y - 1 ? (Kt -= Gt) : b > 0 && (Kt -= Gt / 2);
            break;
        }
        vi = {
          left: Kt,
          top: Ne,
          width: Gt + we.width,
          height: Re + we.height,
          color: W.backdropColor,
        };
      }
      p.push({
        label: w,
        font: T,
        textOffset: L,
        options: {
          rotation: m,
          color: G,
          strokeColor: _t,
          strokeWidth: nt,
          textAlign: _e,
          textBaseline: it,
          translation: [x, k],
          backdrop: vi,
        },
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-St(this.labelRotation)) return t === "top" ? "left" : "right";
    let s = "center";
    return (
      e.align === "start"
        ? (s = "left")
        : e.align === "end"
        ? (s = "right")
        : e.align === "inner" && (s = "inner"),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: n, mirror: s, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      l = r.widest.width;
    let c, h;
    return (
      e === "left"
        ? s
          ? ((h = this.right + o),
            n === "near"
              ? (c = "left")
              : n === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h += l)))
          : ((h = this.right - a),
            n === "near"
              ? (c = "right")
              : n === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h = this.left)))
        : e === "right"
        ? s
          ? ((h = this.left + o),
            n === "near"
              ? (c = "right")
              : n === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h -= l)))
          : ((h = this.left + a),
            n === "near"
              ? (c = "left")
              : n === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h = this.right)))
        : (c = "right"),
      { textAlign: c, x: h }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    if (e === "left" || e === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (e === "top" || e === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: n,
      top: s,
      width: o,
      height: r,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(n, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      n = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width ||
        !h.color ||
        (n.save(),
        (n.lineWidth = h.width),
        (n.strokeStyle = h.color),
        n.setLineDash(h.borderDash || []),
        (n.lineDashOffset = h.borderDashOffset),
        n.beginPath(),
        n.moveTo(l.x, l.y),
        n.lineTo(c.x, c.y),
        n.stroke(),
        n.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        e.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          e.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: n, grid: s },
      } = this,
      o = n.setContext(this.getContext()),
      r = n.display ? o.width : 0;
    if (!r) return;
    const a = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, h, u, d;
    this.isHorizontal()
      ? ((c = Qt(t, this.left, r) - r / 2),
        (h = Qt(t, this.right, a) + a / 2),
        (u = d = l))
      : ((u = Qt(t, this.top, r) - r / 2),
        (d = Qt(t, this.bottom, a) + a / 2),
        (c = h = l)),
      e.save(),
      (e.lineWidth = o.width),
      (e.strokeStyle = o.color),
      e.beginPath(),
      e.moveTo(c, u),
      e.lineTo(h, d),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const n = this.ctx,
      s = this._computeLabelArea();
    s && mn(n, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options,
        l = r.font,
        c = r.label,
        h = r.textOffset;
      me(n, c, 0, h, l, a);
    }
    s && pn(n);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: n, reverse: s },
    } = this;
    if (!n.display) return;
    const o = tt(n.font),
      r = rt(n.padding),
      a = n.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || I(e)
      ? ((l += r.bottom),
        H(n.text) && (l += o.lineHeight * (n.text.length - 1)))
      : (l += r.top);
    const {
      titleX: c,
      titleY: h,
      maxWidth: u,
      rotation: d,
    } = vd(this, l, e, a);
    me(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: u,
      rotation: d,
      textAlign: wd(a, e, s),
      textBaseline: "middle",
      translation: [c, h],
    });
  }
  draw(t) {
    !this._isVisible() ||
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      n = C(t.grid && t.grid.z, -1),
      s = C(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== pe.prototype.draw
      ? [
          {
            z: e,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: n,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      n = this.axis + "AxisID",
      s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[n] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return tt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Li {
  constructor(t, e, n) {
    (this.type = t),
      (this.scope = e),
      (this.override = n),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    kd(e) && (n = this.register(e));
    const s = this.items,
      o = t.id,
      r = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in s ||
        ((s[o] = t),
        Sd(t, r, n),
        this.override && X.override(t.id, t.overrides)),
      r
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      n = t.id,
      s = this.scope;
    n in e && delete e[n],
      s && n in X[s] && (delete X[s][n], this.override && delete ge[n]);
  }
}
function Sd(i, t, e) {
  const n = ci(Object.create(null), [e ? X.get(e) : {}, X.get(t), i.defaults]);
  X.set(t, n),
    i.defaultRoutes && Md(t, i.defaultRoutes),
    i.descriptors && X.describe(t, i.descriptors);
}
function Md(i, t) {
  Object.keys(t).forEach((e) => {
    const n = e.split("."),
      s = n.pop(),
      o = [i].concat(n).join("."),
      r = t[e].split("."),
      a = r.pop(),
      l = r.join(".");
    X.route(o, s, l, a);
  });
}
function kd(i) {
  return "id" in i && "defaults" in i;
}
class Od {
  constructor() {
    (this.controllers = new Li(kt, "datasets", !0)),
      (this.elements = new Li(Ot, "elements")),
      (this.plugins = new Li(Object, "plugins")),
      (this.scales = new Li(pe, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, n) {
    [...e].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : V(s, (r) => {
            const a = n || this._getRegistryForType(r);
            this._exec(t, a, r);
          });
    });
  }
  _exec(t, e, n) {
    const s = Ms(t);
    B(n["before" + s], [], n), e[t](n), B(n["after" + s], [], n);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t)) return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var Ct = new Od();
class Td {
  constructor() {
    this._init = [];
  }
  notify(t, e, n, s) {
    e === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      r = this._notify(o, t, e, n);
    return (
      e === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      r
    );
  }
  _notify(t, e, n, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin,
        a = r[n],
        l = [e, s, o.options];
      if (B(a, l, r) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    N(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const n = t && t.config,
      s = C(n.options && n.options.plugins, {}),
      o = Dd(n);
    return s === !1 && !e ? [] : Cd(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      n = this._cache,
      s = (o, r) =>
        o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, n), t, "stop"), this._notify(s(n, e), t, "start");
  }
}
function Dd(i) {
  const t = {},
    e = [],
    n = Object.keys(Ct.plugins.items);
  for (let o = 0; o < n.length; o++) e.push(Ct.getPlugin(n[o]));
  const s = i.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    e.indexOf(r) === -1 && (e.push(r), (t[r.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function Ed(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Cd(i, { plugins: t, localIds: e }, n, s) {
  const o = [],
    r = i.getContext();
  for (const a of t) {
    const l = a.id,
      c = Ed(n[l], s);
    c !== null &&
      o.push({
        plugin: a,
        options: Pd(i.config, { plugin: a, local: e[l] }, c, r),
      });
  }
  return o;
}
function Pd(i, { plugin: t, local: e }, n, s) {
  const o = i.pluginScopeKeys(t),
    r = i.getOptionScopes(n, o);
  return (
    e && t.defaults && r.push(t.defaults),
    i.createResolver(r, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function rs(i, t) {
  const e = X.datasets[i] || {};
  return (
    ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
  );
}
function Ad(i, t) {
  let e = i;
  return (
    i === "_index_" ? (e = t) : i === "_value_" && (e = t === "x" ? "y" : "x"),
    e
  );
}
function Id(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Bo(i) {
  if (i === "x" || i === "y" || i === "r") return i;
}
function Ld(i) {
  if (i === "top" || i === "bottom") return "x";
  if (i === "left" || i === "right") return "y";
}
function as(i, ...t) {
  if (Bo(i)) return i;
  for (const e of t) {
    const n =
      e.axis || Ld(e.position) || (i.length > 1 && Bo(i[0].toLowerCase()));
    if (n) return n;
  }
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`
  );
}
function Ho(i, t, e) {
  if (e[t + "AxisID"] === i) return { axis: t };
}
function Fd(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((n) => n.xAxisID === i || n.yAxisID === i);
    if (e.length) return Ho(i, "x", e[0]) || Ho(i, "y", e[0]);
  }
  return {};
}
function Rd(i, t) {
  const e = ge[i.type] || { scales: {} },
    n = t.scales || {},
    s = rs(i.type, t),
    o = Object.create(null);
  return (
    Object.keys(n).forEach((r) => {
      const a = n[r];
      if (!I(a))
        return console.error(`Invalid scale configuration for scale: ${r}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${r}`
        );
      const l = as(r, a, Fd(r, i), X.scales[a.type]),
        c = Id(l, s),
        h = e.scales || {};
      o[r] = ii(Object.create(null), [{ axis: l }, a, h[l], h[c]]);
    }),
    i.data.datasets.forEach((r) => {
      const a = r.type || i.type,
        l = r.indexAxis || rs(a, t),
        h = (ge[a] || {}).scales || {};
      Object.keys(h).forEach((u) => {
        const d = Ad(u, l),
          f = r[d + "AxisID"] || d;
        (o[f] = o[f] || Object.create(null)),
          ii(o[f], [{ axis: d }, n[f], h[u]]);
      });
    }),
    Object.keys(o).forEach((r) => {
      const a = o[r];
      ii(a, [X.scales[a.type], X.scale]);
    }),
    o
  );
}
function $a(i) {
  const t = i.options || (i.options = {});
  (t.plugins = C(t.plugins, {})), (t.scales = Rd(i, t));
}
function ja(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function Nd(i) {
  return (i = i || {}), (i.data = ja(i.data)), $a(i), i;
}
const $o = new Map(),
  Ua = new Set();
function Fi(i, t) {
  let e = $o.get(i);
  return e || ((e = t()), $o.set(i, e), Ua.add(e)), e;
}
const He = (i, t, e) => {
  const n = qt(t, e);
  n !== void 0 && i.add(n);
};
class zd {
  constructor(t) {
    (this._config = Nd(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = ja(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), $a(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Fi(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Fi(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Fi(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      n = this.type;
    return Fi(`${n}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (!s || e) && ((s = new Map()), n.set(t, s)), s;
  }
  getOptionScopes(t, e, n) {
    const { options: s, type: o } = this,
      r = this._cachedScopes(t, n),
      a = r.get(e);
    if (a) return a;
    const l = new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((u) => He(l, t, u))),
        h.forEach((u) => He(l, s, u)),
        h.forEach((u) => He(l, ge[o] || {}, u)),
        h.forEach((u) => He(l, X, u)),
        h.forEach((u) => He(l, ss, u));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), Ua.has(e) && r.set(e, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, ge[e] || {}, X.datasets[e] || {}, { type: e }, X, ss];
  }
  resolveNamedOptions(t, e, n, s = [""]) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = jo(this._resolverCache, t, s);
    let l = r;
    if (Wd(r, e)) {
      (o.$shared = !1), (n = Zt(n) ? n() : n);
      const c = this.createResolver(t, n, a);
      l = Ce(r, n, c);
    }
    for (const c of e) o[c] = l[c];
    return o;
  }
  createResolver(t, e, n = [""], s) {
    const { resolver: o } = jo(this._resolverCache, t, n);
    return I(e) ? Ce(o, e, void 0, s) : o;
  }
}
function jo(i, t, e) {
  let n = i.get(t);
  n || ((n = new Map()), i.set(t, n));
  const s = e.join();
  let o = n.get(s);
  return (
    o ||
      ((o = {
        resolver: Cs(t, e),
        subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      n.set(s, o)),
    o
  );
}
const Vd = (i) => I(i) && Object.getOwnPropertyNames(i).some((t) => Zt(i[t]));
function Wd(i, t) {
  const { isScriptable: e, isIndexable: n } = Sa(i);
  for (const s of t) {
    const o = e(s),
      r = n(s),
      a = (r || o) && i[s];
    if ((o && (Zt(a) || Vd(a))) || (r && H(a))) return !0;
  }
  return !1;
}
var Bd = "4.4.3";
const Hd = ["top", "bottom", "left", "right", "chartArea"];
function Uo(i, t) {
  return i === "top" || i === "bottom" || (Hd.indexOf(i) === -1 && t === "x");
}
function Yo(i, t) {
  return function (e, n) {
    return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
  };
}
function qo(i) {
  const t = i.chart,
    e = t.options.animation;
  t.notifyPlugins("afterRender"), B(e && e.onComplete, [i], t);
}
function $d(i) {
  const t = i.chart,
    e = t.options.animation;
  B(e && e.onProgress, [i], t);
}
function Ya(i) {
  return (
    Is() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Gi = {},
  Zo = (i) => {
    const t = Ya(i);
    return Object.values(Gi)
      .filter((e) => e.canvas === t)
      .pop();
  };
function jd(i, t, e) {
  const n = Object.keys(i);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const r = i[s];
      delete i[s], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Ud(i, t, e, n) {
  return !e || i.type === "mouseout" ? null : n ? t : i;
}
function Ri(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Yd(i, t) {
  const { xScale: e, yScale: n } = i;
  return e && n
    ? {
        left: Ri(e, t, "left"),
        right: Ri(e, t, "right"),
        top: Ri(n, t, "top"),
        bottom: Ri(n, t, "bottom"),
      }
    : t;
}
class re {
  static register(...t) {
    Ct.add(...t), Xo();
  }
  static unregister(...t) {
    Ct.remove(...t), Xo();
  }
  constructor(t, e) {
    const n = (this.config = new zd(e)),
      s = Ya(t),
      o = Zo(s);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas with ID '" +
          o.canvas.id +
          "' can be reused."
      );
    const r = n.createResolver(n.chartOptionScopes(), this.getContext());
    (this.platform = new (n.platform || cd(s))()),
      this.platform.updateConfig(n);
    const a = this.platform.acquireContext(s, r.aspectRatio),
      l = a && a.canvas,
      c = l && l.height,
      h = l && l.width;
    if (
      ((this.id = Gc()),
      (this.ctx = a),
      (this.canvas = l),
      (this.width = h),
      (this.height = c),
      (this._options = r),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new Td()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = dh((u) => this.update(u), r.resizeDelay || 0)),
      (this._dataChanges = []),
      (Gi[this.id] = this),
      !a || !l)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    It.listen(this, "complete", qo),
      It.listen(this, "progress", $d),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: n,
      height: s,
      _aspectRatio: o,
    } = this;
    return N(t) ? (e && o ? o : s ? n / s : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Ct;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : mo(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return uo(this.canvas, this.ctx), this;
  }
  stop() {
    return It.stop(this), this;
  }
  resize(t, e) {
    It.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: e })
      : this._resize(t, e);
  }
  _resize(t, e) {
    const n = this.options,
      s = this.canvas,
      o = n.maintainAspectRatio && this.aspectRatio,
      r = this.platform.getMaximumSize(s, t, e, o),
      a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? "resize" : "attach";
    (this.width = r.width),
      (this.height = r.height),
      (this._aspectRatio = this.aspectRatio),
      !!mo(this, a, !0) &&
        (this.notifyPlugins("resize", { size: r }),
        B(n.onResize, [this, r], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    V(e, (n, s) => {
      n.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      n = this.scales,
      s = Object.keys(n).reduce((r, a) => ((r[a] = !1), r), {});
    let o = [];
    e &&
      (o = o.concat(
        Object.keys(e).map((r) => {
          const a = e[r],
            l = as(r, a),
            c = l === "r",
            h = l === "x";
          return {
            options: a,
            dposition: c ? "chartArea" : h ? "bottom" : "left",
            dtype: c ? "radialLinear" : h ? "category" : "linear",
          };
        })
      )),
      V(o, (r) => {
        const a = r.options,
          l = a.id,
          c = as(l, a),
          h = C(a.type, r.dtype);
        (a.position === void 0 || Uo(a.position, c) !== Uo(r.dposition)) &&
          (a.position = r.dposition),
          (s[l] = !0);
        let u = null;
        if (l in n && n[l].type === h) u = n[l];
        else {
          const d = Ct.getScale(h);
          (u = new d({ id: l, type: h, ctx: this.ctx, chart: this })),
            (n[u.id] = u);
        }
        u.init(a, t);
      }),
      V(s, (r, a) => {
        r || delete n[a];
      }),
      V(n, (r) => {
        ot.configure(this, r, r.options), ot.addBox(this, r);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      n = t.length;
    if ((t.sort((s, o) => s.index - o.index), n > e)) {
      for (let s = e; s < n; ++s) this._destroyDatasetMeta(s);
      t.splice(e, n - e);
    }
    this._sortedMetasets = t.slice(0).sort(Yo("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: e },
    } = this;
    t.length > e.length && delete this._stacks,
      t.forEach((n, s) => {
        e.filter((o) => o === n._dataset).length === 0 &&
          this._destroyDatasetMeta(s);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets;
    let n, s;
    for (this._removeUnreferencedMetasets(), n = 0, s = e.length; n < s; n++) {
      const o = e[n];
      let r = this.getDatasetMeta(n);
      const a = o.type || this.config.type;
      if (
        (r.type &&
          r.type !== a &&
          (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
        (r.type = a),
        (r.indexAxis = o.indexAxis || rs(a, this.options)),
        (r.order = o.order || 0),
        (r.index = n),
        (r.label = "" + o.label),
        (r.visible = this.isDatasetVisible(n)),
        r.controller)
      )
        r.controller.updateIndex(n), r.controller.linkScales();
      else {
        const l = Ct.getController(a),
          { datasetElementType: c, dataElementType: h } = X.datasets[a];
        Object.assign(l, {
          dataElementType: Ct.getElement(h),
          datasetElementType: c && Ct.getElement(c),
        }),
          (r.controller = new l(this, n)),
          t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    V(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const n = (this._options = e.createResolver(
        e.chartOptionScopes(),
        this.getContext()
      )),
      s = (this._animationsDisabled = !n.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: u } = this.getDatasetMeta(c),
        d = !s && o.indexOf(u) === -1;
      u.buildOrUpdateElements(d), (r = Math.max(+u.getMaxOverflow(), r));
    }
    (r = this._minPadding = n.layout.autoPadding ? r : 0),
      this._updateLayout(r),
      s ||
        V(o, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(Yo("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : a.length && this._updateHoverStyles(a, a, !0),
      this.render();
  }
  _updateScales() {
    V(this.scales, (t) => {
      ot.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      n = new Set(t.events);
    (!io(e, n) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || [];
    for (const { method: n, start: s, count: o } of e) {
      const r = n === "_removeElements" ? -o : o;
      jd(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const e = this.data.datasets.length,
      n = (o) =>
        new Set(
          t
            .filter((r) => r[0] === o)
            .map((r, a) => a + "," + r.splice(1).join(","))
        ),
      s = n(0);
    for (let o = 1; o < e; o++) if (!io(s, n(o))) return;
    return Array.from(s)
      .map((o) => o.split(","))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    ot.update(this, this.width, this.height, t);
    const e = this.chartArea,
      n = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      V(
        this.boxes,
        (s) => {
          (n && s.position === "chartArea") ||
            (s.configure && s.configure(), this._layers.push(...s._layers()));
        },
        this
      ),
      this._layers.forEach((s, o) => {
        s._idx = o;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this._updateDataset(e, Zt(t) ? t({ datasetIndex: e }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, e) {
    const n = this.getDatasetMeta(t),
      s = { meta: n, index: t, mode: e, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
      (n.controller._update(e),
      (s.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (It.has(this)
        ? this.attached && !It.running(this) && It.start(this)
        : (this.draw(), qo({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: s } = this._resizeBeforeDraw;
      this._resize(n, s), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      n = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const r = e[s];
      (!t || r.visible) && n.push(r);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx,
      n = t._clip,
      s = !n.disabled,
      o = Yd(t, this.chartArea),
      r = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 &&
      (s &&
        mn(e, {
          left: n.left === !1 ? 0 : o.left - n.left,
          right: n.right === !1 ? this.width : o.right + n.right,
          top: n.top === !1 ? 0 : o.top - n.top,
          bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom,
        }),
      t.controller.draw(),
      s && pn(e),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return zt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, n, s) {
    const o = Hu.modes[e];
    return typeof o == "function" ? o(this, t, n, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      n = this._metasets;
    let s = n.filter((o) => o && o._dataset === e).pop();
    return (
      s ||
        ((s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        n.push(s)),
      s
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Xt(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const n = this.getDatasetMeta(t);
    n.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, n) {
    const s = n ? "show" : "hide",
      o = this.getDatasetMeta(t),
      r = o.controller._resolveAnimations(void 0, s);
    hi(e)
      ? ((o.data[e].hidden = !n), this.update())
      : (this.setDatasetVisibility(t, n),
        r.update(o, { visible: n }),
        this.update((a) => (a.datasetIndex === t ? s : void 0)));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (
      this.stop(), It.remove(this), t = 0, e = this.data.datasets.length;
      t < e;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        uo(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      delete Gi[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      n = (o, r) => {
        e.addEventListener(this, o, r), (t[o] = r);
      },
      s = (o, r, a) => {
        (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
      };
    V(this.options.events, (o) => n(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      e = this.platform,
      n = (l, c) => {
        e.addEventListener(this, l, c), (t[l] = c);
      },
      s = (l, c) => {
        t[l] && (e.removeEventListener(this, l, c), delete t[l]);
      },
      o = (l, c) => {
        this.canvas && this.resize(l, c);
      };
    let r;
    const a = () => {
      s("attach", a),
        (this.attached = !0),
        this.resize(),
        n("resize", o),
        n("detach", r);
    };
    (r = () => {
      (this.attached = !1),
        s("resize", o),
        this._stop(),
        this._resize(0, 0),
        n("attach", a);
    }),
      e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    V(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      V(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, e, n) {
    const s = n ? "set" : "remove";
    let o, r, a, l;
    for (
      e === "dataset" &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller["_" + s + "DatasetHoverStyle"]()),
        a = 0,
        l = t.length;
      a < l;
      ++a
    ) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [],
      n = t.map(({ datasetIndex: o, index: r }) => {
        const a = this.getDatasetMeta(o);
        if (!a) throw new Error("No dataset found at index " + o);
        return { datasetIndex: o, element: a.data[r], index: r };
      });
    !Qi(n, e) &&
      ((this._active = n),
      (this._lastEvent = null),
      this._updateHoverStyles(n, e));
  }
  notifyPlugins(t, e, n) {
    return this._plugins.notify(this, t, e, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, n) {
    const s = this.options.hover,
      o = (l, c) =>
        l.filter(
          (h) =>
            !c.some(
              (u) => h.datasetIndex === u.datasetIndex && h.index === u.index
            )
        ),
      r = o(e, t),
      a = n ? t : o(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1),
      a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, e) {
    const n = {
        event: t,
        replay: e,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      s = (r) =>
        (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, s) === !1) return;
    const o = this._handleEvent(t, e, n.inChartArea);
    return (
      (n.cancelable = !1),
      this.notifyPlugins("afterEvent", n, s),
      (o || n.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, e, n) {
    const { _active: s = [], options: o } = this,
      r = e,
      a = this._getActiveElements(t, s, n, r),
      l = ih(t),
      c = Ud(t, this._lastEvent, n, l);
    n &&
      ((this._lastEvent = null),
      B(o.onHover, [t, a, this], this),
      l && B(o.onClick, [t, a, this], this));
    const h = !Qi(a, s);
    return (
      (h || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
      (this._lastEvent = c),
      h
    );
  }
  _getActiveElements(t, e, n, s) {
    if (t.type === "mouseout") return [];
    if (!n) return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
v(re, "defaults", X),
  v(re, "instances", Gi),
  v(re, "overrides", ge),
  v(re, "registry", Ct),
  v(re, "version", Bd),
  v(re, "getChart", Zo);
function Xo() {
  return V(re.instances, (i) => i._plugins.invalidate());
}
function qd(i, t, e) {
  const {
    startAngle: n,
    pixelMargin: s,
    x: o,
    y: r,
    outerRadius: a,
    innerRadius: l,
  } = t;
  let c = s / a;
  i.beginPath(),
    i.arc(o, r, a, n - c, e + c),
    l > s
      ? ((c = s / l), i.arc(o, r, l, e + c, n - c, !0))
      : i.arc(o, r, s, e + K, n - K),
    i.closePath(),
    i.clip();
}
function Zd(i) {
  return Es(i, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Xd(i, t, e, n) {
  const s = Zd(i.options.borderRadius),
    o = (e - t) / 2,
    r = Math.min(o, (n * t) / 2),
    a = (l) => {
      const c = ((e - Math.min(o, l)) * n) / 2;
      return et(l, 0, Math.min(o, c));
    };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: et(s.innerStart, 0, r),
    innerEnd: et(s.innerEnd, 0, r),
  };
}
function Me(i, t, e, n) {
  return { x: e + i * Math.cos(t), y: n + i * Math.sin(t) };
}
function rn(i, t, e, n, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t,
    u = Math.max(t.outerRadius + n + e - c, 0),
    d = h > 0 ? h + n + e + c : 0;
  let f = 0;
  const g = s - l;
  if (n) {
    const W = h > 0 ? h - n : 0,
      U = u > 0 ? u - n : 0,
      G = (W + U) / 2,
      _t = G !== 0 ? (g * G) / (G + n) : g;
    f = (g - _t) / 2;
  }
  const m = Math.max(0.001, g * u - e / j) / u,
    p = (g - m) / 2,
    b = l + p + f,
    y = s - p - f,
    {
      outerStart: _,
      outerEnd: w,
      innerStart: x,
      innerEnd: k,
    } = Xd(t, d, u, y - b),
    S = u - _,
    M = u - w,
    T = b + _ / S,
    P = y - w / M,
    A = d + x,
    L = d + k,
    it = b + x / A,
    ut = y - k / L;
  if ((i.beginPath(), o)) {
    const W = (T + P) / 2;
    if ((i.arc(r, a, u, T, W), i.arc(r, a, u, W, P), w > 0)) {
      const nt = Me(M, P, r, a);
      i.arc(nt.x, nt.y, w, P, y + K);
    }
    const U = Me(L, y, r, a);
    if ((i.lineTo(U.x, U.y), k > 0)) {
      const nt = Me(L, ut, r, a);
      i.arc(nt.x, nt.y, k, y + K, ut + Math.PI);
    }
    const G = (y - k / d + (b + x / d)) / 2;
    if (
      (i.arc(r, a, d, y - k / d, G, !0),
      i.arc(r, a, d, G, b + x / d, !0),
      x > 0)
    ) {
      const nt = Me(A, it, r, a);
      i.arc(nt.x, nt.y, x, it + Math.PI, b - K);
    }
    const _t = Me(S, b, r, a);
    if ((i.lineTo(_t.x, _t.y), _ > 0)) {
      const nt = Me(S, T, r, a);
      i.arc(nt.x, nt.y, _, b - K, T);
    }
  } else {
    i.moveTo(r, a);
    const W = Math.cos(T) * u + r,
      U = Math.sin(T) * u + a;
    i.lineTo(W, U);
    const G = Math.cos(P) * u + r,
      _t = Math.sin(P) * u + a;
    i.lineTo(G, _t);
  }
  i.closePath();
}
function Gd(i, t, e, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    rn(i, t, e, n, l, s);
    for (let c = 0; c < o; ++c) i.fill();
    isNaN(a) || (l = r + (a % $ || $));
  }
  return rn(i, t, e, n, l, s), i.fill(), l;
}
function Kd(i, t, e, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t,
    {
      borderWidth: c,
      borderJoinStyle: h,
      borderDash: u,
      borderDashOffset: d,
    } = l,
    f = l.borderAlign === "inner";
  if (!c) return;
  i.setLineDash(u || []),
    (i.lineDashOffset = d),
    f
      ? ((i.lineWidth = c * 2), (i.lineJoin = h || "round"))
      : ((i.lineWidth = c), (i.lineJoin = h || "bevel"));
  let g = t.endAngle;
  if (o) {
    rn(i, t, e, n, g, s);
    for (let m = 0; m < o; ++m) i.stroke();
    isNaN(a) || (g = r + (a % $ || $));
  }
  f && qd(i, t, g), o || (rn(i, t, e, n, g, s), i.stroke());
}
class Ni extends Ot {
  constructor(t) {
    super();
    v(this, "circumference");
    v(this, "endAngle");
    v(this, "fullCircles");
    v(this, "innerRadius");
    v(this, "outerRadius");
    v(this, "pixelMargin");
    v(this, "startAngle");
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, n) {
    const s = this.getProps(["x", "y"], n),
      { angle: o, distance: r } = fa(s, { x: t, y: e }),
      {
        startAngle: a,
        endAngle: l,
        innerRadius: c,
        outerRadius: h,
        circumference: u,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        n
      ),
      d = (this.options.spacing + this.options.borderWidth) / 2,
      g = C(u, l - a) >= $ || ui(o, a, l),
      m = Rt(r, c + d, h + d);
    return g && m;
  }
  getCenterPoint(t) {
    const {
        x: e,
        y: n,
        startAngle: s,
        endAngle: o,
        innerRadius: r,
        outerRadius: a,
      } = this.getProps(
        ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
        t
      ),
      { offset: l, spacing: c } = this.options,
      h = (s + o) / 2,
      u = (r + a + c + l) / 2;
    return { x: e + Math.cos(h) * u, y: n + Math.sin(h) * u };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: n } = this,
      s = (e.offset || 0) / 4,
      o = (e.spacing || 0) / 2,
      r = e.circular;
    if (
      ((this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = n > $ ? Math.floor(n / $) : 0),
      n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(j, n || 0)),
      c = s * l;
    (t.fillStyle = e.backgroundColor),
      (t.strokeStyle = e.borderColor),
      Gd(t, this, c, o, r),
      Kd(t, this, c, o, r),
      t.restore();
  }
}
v(Ni, "id", "arc"),
  v(Ni, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  v(Ni, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  v(Ni, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash",
  });
function qa(i, t, e = t) {
  (i.lineCap = C(e.borderCapStyle, t.borderCapStyle)),
    i.setLineDash(C(e.borderDash, t.borderDash)),
    (i.lineDashOffset = C(e.borderDashOffset, t.borderDashOffset)),
    (i.lineJoin = C(e.borderJoinStyle, t.borderJoinStyle)),
    (i.lineWidth = C(e.borderWidth, t.borderWidth)),
    (i.strokeStyle = C(e.borderColor, t.borderColor));
}
function Jd(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Qd(i) {
  return i.stepped
    ? Mh
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? kh
    : Jd;
}
function Za(i, t, e = {}) {
  const n = i.length,
    { start: s = 0, end: o = n - 1 } = e,
    { start: r, end: a } = t,
    l = Math.max(s, r),
    c = Math.min(o, a),
    h = (s < r && o < r) || (s > a && o > a);
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? n + c - l : c - l,
  };
}
function tf(i, t, e, n) {
  const { points: s, options: o } = t,
    { count: r, start: a, loop: l, ilen: c } = Za(s, e, n),
    h = Qd(o);
  let { move: u = !0, reverse: d } = n || {},
    f,
    g,
    m;
  for (f = 0; f <= c; ++f)
    (g = s[(a + (d ? c - f : f)) % r]),
      !g.skip &&
        (u ? (i.moveTo(g.x, g.y), (u = !1)) : h(i, m, g, d, o.stepped),
        (m = g));
  return l && ((g = s[(a + (d ? c : 0)) % r]), h(i, m, g, d, o.stepped)), !!l;
}
function ef(i, t, e, n) {
  const s = t.points,
    { count: o, start: r, ilen: a } = Za(s, e, n),
    { move: l = !0, reverse: c } = n || {};
  let h = 0,
    u = 0,
    d,
    f,
    g,
    m,
    p,
    b;
  const y = (w) => (r + (c ? a - w : w)) % o,
    _ = () => {
      m !== p && (i.lineTo(h, p), i.lineTo(h, m), i.lineTo(h, b));
    };
  for (l && ((f = s[y(0)]), i.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
    if (((f = s[y(d)]), f.skip)) continue;
    const w = f.x,
      x = f.y,
      k = w | 0;
    k === g
      ? (x < m ? (m = x) : x > p && (p = x), (h = (u * h + w) / ++u))
      : (_(), i.lineTo(w, x), (g = k), (u = 0), (m = p = x)),
      (b = x);
  }
  _();
}
function ls(i) {
  const t = i.options,
    e = t.borderDash && t.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !e
    ? ef
    : tf;
}
function nf(i) {
  return i.stepped
    ? nu
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? su
    : oe;
}
function sf(i, t, e, n) {
  let s = t._path;
  s || ((s = t._path = new Path2D()), t.path(s, e, n) && s.closePath()),
    qa(i, t.options),
    i.stroke(s);
}
function of(i, t, e, n) {
  const { segments: s, options: o } = t,
    r = ls(t);
  for (const a of s)
    qa(i, o, a.style),
      i.beginPath(),
      r(i, t, a, { start: e, end: e + n - 1 }) && i.closePath(),
      i.stroke();
}
const rf = typeof Path2D == "function";
function af(i, t, e, n) {
  rf && !t.options.segment ? sf(i, t, e, n) : of(i, t, e, n);
}
class ce extends Ot {
  constructor(t) {
    super();
    (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const n = this.options;
    if (
      (n.tension || n.cubicInterpolationMode === "monotone") &&
      !n.stepped &&
      !this._pointsUpdated
    ) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      Xh(this._points, n, t, s, e), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = hu(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      n = t.length;
    return n && e[t[n - 1].end];
  }
  interpolate(t, e) {
    const n = this.options,
      s = t[e],
      o = this.points,
      r = Ia(this, { property: e, start: s, end: s });
    if (!r.length) return;
    const a = [],
      l = nf(n);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: u, end: d } = r[c],
        f = o[u],
        g = o[d];
      if (f === g) {
        a.push(f);
        continue;
      }
      const m = Math.abs((s - f[e]) / (g[e] - f[e])),
        p = l(f, g, m, n.stepped);
      (p[e] = t[e]), a.push(p);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, n) {
    return ls(this)(t, this, e, n);
  }
  path(t, e, n) {
    const s = this.segments,
      o = ls(this);
    let r = this._loop;
    (e = e || 0), (n = n || this.points.length - e);
    for (const a of s) r &= o(t, this, a, { start: e, end: e + n - 1 });
    return !!r;
  }
  draw(t, e, n, s) {
    const o = this.options || {};
    (this.points || []).length &&
      o.borderWidth &&
      (t.save(), af(t, this, n, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
v(ce, "id", "line"),
  v(ce, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  v(ce, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  v(ce, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  });
function Go(i, t, e, n) {
  const s = i.options,
    { [e]: o } = i.getProps([e], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Wn extends Ot {
  constructor(t) {
    super();
    v(this, "parsed");
    v(this, "skip");
    v(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, n) {
    const s = this.options,
      { x: o, y: r } = this.getProps(["x", "y"], n);
    return (
      Math.pow(t - o, 2) + Math.pow(e - r, 2) <
      Math.pow(s.hitRadius + s.radius, 2)
    );
  }
  inXRange(t, e) {
    return Go(this, t, "x", e);
  }
  inYRange(t, e) {
    return Go(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: n } = this.getProps(["x", "y"], t);
    return { x: e, y: n };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, (e && t.hoverRadius) || 0);
    const n = (e && t.borderWidth) || 0;
    return (e + n) * 2;
  }
  draw(t, e) {
    const n = this.options;
    this.skip ||
      n.radius < 0.1 ||
      !zt(this, e, this.size(n) / 2) ||
      ((t.strokeStyle = n.borderColor),
      (t.lineWidth = n.borderWidth),
      (t.fillStyle = n.backgroundColor),
      os(t, n, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
v(Wn, "id", "point"),
  v(Wn, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  v(Wn, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
function Xa(i, t) {
  const {
    x: e,
    y: n,
    base: s,
    width: o,
    height: r,
  } = i.getProps(["x", "y", "base", "width", "height"], t);
  let a, l, c, h, u;
  return (
    i.horizontal
      ? ((u = r / 2),
        (a = Math.min(e, s)),
        (l = Math.max(e, s)),
        (c = n - u),
        (h = n + u))
      : ((u = o / 2),
        (a = e - u),
        (l = e + u),
        (c = Math.min(n, s)),
        (h = Math.max(n, s))),
    { left: a, top: c, right: l, bottom: h }
  );
}
function Ut(i, t, e, n) {
  return i ? 0 : et(t, e, n);
}
function lf(i, t, e) {
  const n = i.options.borderWidth,
    s = i.borderSkipped,
    o = va(n);
  return {
    t: Ut(s.top, o.top, 0, e),
    r: Ut(s.right, o.right, 0, t),
    b: Ut(s.bottom, o.bottom, 0, e),
    l: Ut(s.left, o.left, 0, t),
  };
}
function cf(i, t, e) {
  const { enableBorderRadius: n } = i.getProps(["enableBorderRadius"]),
    s = i.options.borderRadius,
    o = ue(s),
    r = Math.min(t, e),
    a = i.borderSkipped,
    l = n || I(s);
  return {
    topLeft: Ut(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Ut(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Ut(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Ut(!l || a.bottom || a.right, o.bottomRight, 0, r),
  };
}
function hf(i) {
  const t = Xa(i),
    e = t.right - t.left,
    n = t.bottom - t.top,
    s = lf(i, e / 2, n / 2),
    o = cf(i, e / 2, n / 2);
  return {
    outer: { x: t.left, y: t.top, w: e, h: n, radius: o },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: n - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
      },
    },
  };
}
function Bn(i, t, e, n) {
  const s = t === null,
    o = e === null,
    a = i && !(s && o) && Xa(i, n);
  return a && (s || Rt(t, a.left, a.right)) && (o || Rt(e, a.top, a.bottom));
}
function uf(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function df(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function Hn(i, t, e = {}) {
  const n = i.x !== e.x ? -t : 0,
    s = i.y !== e.y ? -t : 0,
    o = (i.x + i.w !== e.x + e.w ? t : 0) - n,
    r = (i.y + i.h !== e.y + e.h ? t : 0) - s;
  return { x: i.x + n, y: i.y + s, w: i.w + o, h: i.h + r, radius: i.radius };
}
class $n extends Ot {
  constructor(t) {
    super();
    (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: n, backgroundColor: s },
      } = this,
      { inner: o, outer: r } = hf(this),
      a = uf(r.radius) ? di : df;
    t.save(),
      (r.w !== o.w || r.h !== o.h) &&
        (t.beginPath(),
        a(t, Hn(r, e, o)),
        t.clip(),
        a(t, Hn(o, -e, r)),
        (t.fillStyle = n),
        t.fill("evenodd")),
      t.beginPath(),
      a(t, Hn(o, e)),
      (t.fillStyle = s),
      t.fill(),
      t.restore();
  }
  inRange(t, e, n) {
    return Bn(this, t, e, n);
  }
  inXRange(t, e) {
    return Bn(this, t, null, e);
  }
  inYRange(t, e) {
    return Bn(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: n,
      base: s,
      horizontal: o,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: o ? (e + s) / 2 : e, y: o ? n : (n + s) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
v($n, "id", "bar"),
  v($n, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  v($n, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
function ff(i, t, e, n, s) {
  const o = s.samples || n;
  if (o >= e) return i.slice(t, t + e);
  const r = [],
    a = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t,
    u,
    d,
    f,
    g,
    m;
  for (r[l++] = i[h], u = 0; u < o - 2; u++) {
    let p = 0,
      b = 0,
      y;
    const _ = Math.floor((u + 1) * a) + 1 + t,
      w = Math.min(Math.floor((u + 2) * a) + 1, e) + t,
      x = w - _;
    for (y = _; y < w; y++) (p += i[y].x), (b += i[y].y);
    (p /= x), (b /= x);
    const k = Math.floor(u * a) + 1 + t,
      S = Math.min(Math.floor((u + 1) * a) + 1, e) + t,
      { x: M, y: T } = i[h];
    for (f = g = -1, y = k; y < S; y++)
      (g = 0.5 * Math.abs((M - p) * (i[y].y - T) - (M - i[y].x) * (b - T))),
        g > f && ((f = g), (d = i[y]), (m = y));
    (r[l++] = d), (h = m);
  }
  return (r[l++] = i[c]), r;
}
function gf(i, t, e, n) {
  let s = 0,
    o = 0,
    r,
    a,
    l,
    c,
    h,
    u,
    d,
    f,
    g,
    m;
  const p = [],
    b = t + e - 1,
    y = i[t].x,
    w = i[b].x - y;
  for (r = t; r < t + e; ++r) {
    (a = i[r]), (l = ((a.x - y) / w) * n), (c = a.y);
    const x = l | 0;
    if (x === h)
      c < g ? ((g = c), (u = r)) : c > m && ((m = c), (d = r)),
        (s = (o * s + a.x) / ++o);
    else {
      const k = r - 1;
      if (!N(u) && !N(d)) {
        const S = Math.min(u, d),
          M = Math.max(u, d);
        S !== f && S !== k && p.push(dt(D({}, i[S]), { x: s })),
          M !== f && M !== k && p.push(dt(D({}, i[M]), { x: s }));
      }
      r > 0 && k !== f && p.push(i[k]),
        p.push(a),
        (h = x),
        (o = 0),
        (g = m = c),
        (u = d = f = r);
    }
  }
  return p;
}
function Ga(i) {
  if (i._decimated) {
    const t = i._data;
    delete i._decimated,
      delete i._data,
      Object.defineProperty(i, "data", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: t,
      });
  }
}
function Ko(i) {
  i.data.datasets.forEach((t) => {
    Ga(t);
  });
}
function mf(i, t) {
  const e = t.length;
  let n = 0,
    s;
  const { iScale: o } = i,
    { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return (
    l && (n = et(Nt(t, o.axis, r).lo, 0, e - 1)),
    c ? (s = et(Nt(t, o.axis, a).hi + 1, n, e) - n) : (s = e - n),
    { start: n, count: s }
  );
}
var nb = {
  id: "decimation",
  defaults: { algorithm: "min-max", enabled: !1 },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      Ko(i);
      return;
    }
    const n = i.width;
    i.data.datasets.forEach((s, o) => {
      const { _data: r, indexAxis: a } = s,
        l = i.getDatasetMeta(o),
        c = r || s.data;
      if (
        Xe([a, i.options.indexAxis]) === "y" ||
        !l.controller.supportsDecimation
      )
        return;
      const h = i.scales[l.xAxisID];
      if ((h.type !== "linear" && h.type !== "time") || i.options.parsing)
        return;
      let { start: u, count: d } = mf(l, c);
      const f = e.threshold || 4 * n;
      if (d <= f) {
        Ga(s);
        return;
      }
      N(r) &&
        ((s._data = c),
        delete s.data,
        Object.defineProperty(s, "data", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (m) {
            this._data = m;
          },
        }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = ff(c, u, d, n, e);
          break;
        case "min-max":
          g = gf(c, u, d, n);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = g;
    });
  },
  destroy(i) {
    Ko(i);
  },
};
function pf(i, t, e) {
  const n = i.segments,
    s = i.points,
    o = t.points,
    r = [];
  for (const a of n) {
    let { start: l, end: c } = a;
    c = Rs(l, c, s);
    const h = cs(e, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({ source: a, target: h, start: s[l], end: s[c] });
      continue;
    }
    const u = Ia(t, h);
    for (const d of u) {
      const f = cs(e, o[d.start], o[d.end], d.loop),
        g = Aa(a, s, f);
      for (const m of g)
        r.push({
          source: m,
          target: d,
          start: { [e]: Jo(h, f, "start", Math.max) },
          end: { [e]: Jo(h, f, "end", Math.min) },
        });
    }
  }
  return r;
}
function cs(i, t, e, n) {
  if (n) return;
  let s = t[i],
    o = e[i];
  return (
    i === "angle" && ((s = gt(s)), (o = gt(o))),
    { property: i, start: s, end: o }
  );
}
function bf(i, t) {
  const { x: e = null, y: n = null } = i || {},
    s = t.points,
    o = [];
  return (
    t.segments.forEach(({ start: r, end: a }) => {
      a = Rs(r, a, s);
      const l = s[r],
        c = s[a];
      n !== null
        ? (o.push({ x: l.x, y: n }), o.push({ x: c.x, y: n }))
        : e !== null && (o.push({ x: e, y: l.y }), o.push({ x: e, y: c.y }));
    }),
    o
  );
}
function Rs(i, t, e) {
  for (; t > i; t--) {
    const n = e[t];
    if (!isNaN(n.x) && !isNaN(n.y)) break;
  }
  return t;
}
function Jo(i, t, e, n) {
  return i && t ? n(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Ka(i, t) {
  let e = [],
    n = !1;
  return (
    H(i) ? ((n = !0), (e = i)) : (e = bf(i, t)),
    e.length
      ? new ce({ points: e, options: { tension: 0 }, _loop: n, _fullLoop: n })
      : null
  );
}
function Qo(i) {
  return i && i.fill !== !1;
}
function yf(i, t, e) {
  let s = i[t].fill;
  const o = [t];
  let r;
  if (!e) return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!Z(s)) return s;
    if (((r = i[s]), !r)) return !1;
    if (r.visible) return s;
    o.push(s), (s = r.fill);
  }
  return !1;
}
function xf(i, t, e) {
  const n = Sf(i);
  if (I(n)) return isNaN(n.value) ? !1 : n;
  let s = parseFloat(n);
  return Z(s) && Math.floor(s) === s
    ? _f(n[0], t, s, e)
    : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
}
function _f(i, t, e, n) {
  return (
    (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= n ? !1 : e
  );
}
function wf(i, t) {
  let e = null;
  return (
    i === "start"
      ? (e = t.bottom)
      : i === "end"
      ? (e = t.top)
      : I(i)
      ? (e = t.getPixelForValue(i.value))
      : t.getBasePixel && (e = t.getBasePixel()),
    e
  );
}
function vf(i, t, e) {
  let n;
  return (
    i === "start"
      ? (n = e)
      : i === "end"
      ? (n = t.options.reverse ? t.min : t.max)
      : I(i)
      ? (n = i.value)
      : (n = t.getBaseValue()),
    n
  );
}
function Sf(i) {
  const t = i.options,
    e = t.fill;
  let n = C(e && e.target, e);
  return (
    n === void 0 && (n = !!t.backgroundColor),
    n === !1 || n === null ? !1 : n === !0 ? "origin" : n
  );
}
function Mf(i) {
  const { scale: t, index: e, line: n } = i,
    s = [],
    o = n.segments,
    r = n.points,
    a = kf(t, e);
  a.push(Ka({ x: null, y: t.bottom }, n));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++) Of(s, r[h], a);
  }
  return new ce({ points: s, options: {} });
}
function kf(i, t) {
  const e = [],
    n = i.getMatchingVisibleMetas("line");
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (o.index === t) break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function Of(i, t, e) {
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s],
      { first: r, last: a, point: l } = Tf(o, t, "x");
    if (!(!l || (r && a))) {
      if (r) n.unshift(l);
      else if ((i.push(l), !a)) break;
    }
  }
  i.push(...n);
}
function Tf(i, t, e) {
  const n = i.interpolate(t, e);
  if (!n) return {};
  const s = n[e],
    o = i.segments,
    r = i.points;
  let a = !1,
    l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c],
      u = r[h.start][e],
      d = r[h.end][e];
    if (Rt(s, u, d)) {
      (a = s === u), (l = s === d);
      break;
    }
  }
  return { first: a, last: l, point: n };
}
class Ja {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, n) {
    const { x: s, y: o, radius: r } = this;
    return (
      (e = e || { start: 0, end: $ }),
      t.arc(s, o, r, e.end, e.start, !0),
      !n.bounds
    );
  }
  interpolate(t) {
    const { x: e, y: n, radius: s } = this,
      o = t.angle;
    return { x: e + Math.cos(o) * s, y: n + Math.sin(o) * s, angle: o };
  }
}
function Df(i) {
  const { chart: t, fill: e, line: n } = i;
  if (Z(e)) return Ef(t, e);
  if (e === "stack") return Mf(i);
  if (e === "shape") return !0;
  const s = Cf(i);
  return s instanceof Ja ? s : Ka(s, n);
}
function Ef(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function Cf(i) {
  return (i.scale || {}).getPointPositionForValue ? Af(i) : Pf(i);
}
function Pf(i) {
  const { scale: t = {}, fill: e } = i,
    n = wf(e, t);
  if (Z(n)) {
    const s = t.isHorizontal();
    return { x: s ? n : null, y: s ? null : n };
  }
  return null;
}
function Af(i) {
  const { scale: t, fill: e } = i,
    n = t.options,
    s = t.getLabels().length,
    o = n.reverse ? t.max : t.min,
    r = vf(e, t, o),
    a = [];
  if (n.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Ja({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r),
    });
  }
  for (let l = 0; l < s; ++l) a.push(t.getPointPositionForValue(l, r));
  return a;
}
function jn(i, t, e) {
  const n = Df(t),
    { line: s, scale: o, axis: r } = t,
    a = s.options,
    l = a.fill,
    c = a.backgroundColor,
    { above: h = c, below: u = c } = l || {};
  n &&
    s.points.length &&
    (mn(i, e),
    If(i, {
      line: s,
      target: n,
      above: h,
      below: u,
      area: e,
      scale: o,
      axis: r,
    }),
    pn(i));
}
function If(i, t) {
  const { line: e, target: n, above: s, below: o, area: r, scale: a } = t,
    l = e._loop ? "angle" : t.axis;
  i.save(),
    l === "x" &&
      o !== s &&
      (tr(i, n, r.top),
      er(i, { line: e, target: n, color: s, scale: a, property: l }),
      i.restore(),
      i.save(),
      tr(i, n, r.bottom)),
    er(i, { line: e, target: n, color: o, scale: a, property: l }),
    i.restore();
}
function tr(i, t, e) {
  const { segments: n, points: s } = t;
  let o = !0,
    r = !1;
  i.beginPath();
  for (const a of n) {
    const { start: l, end: c } = a,
      h = s[l],
      u = s[Rs(l, c, s)];
    o ? (i.moveTo(h.x, h.y), (o = !1)) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)),
      (r = !!t.pathSegment(i, a, { move: r })),
      r ? i.closePath() : i.lineTo(u.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function er(i, t) {
  const { line: e, target: n, property: s, color: o, scale: r } = t,
    a = pf(e, n, s);
  for (const { source: l, target: c, start: h, end: u } of a) {
    const { style: { backgroundColor: d = o } = {} } = l,
      f = n !== !0;
    i.save(), (i.fillStyle = d), Lf(i, r, f && cs(s, h, u)), i.beginPath();
    const g = !!e.pathSegment(i, l);
    let m;
    if (f) {
      g ? i.closePath() : ir(i, n, u, s);
      const p = !!n.pathSegment(i, c, { move: g, reverse: !0 });
      (m = g && p), m || ir(i, n, h, s);
    }
    i.closePath(), i.fill(m ? "evenodd" : "nonzero"), i.restore();
  }
}
function Lf(i, t, e) {
  const { top: n, bottom: s } = t.chart.chartArea,
    { property: o, start: r, end: a } = e || {};
  o === "x" && (i.beginPath(), i.rect(r, n, a - r, s - n), i.clip());
}
function ir(i, t, e, n) {
  const s = t.interpolate(e, n);
  s && i.lineTo(s.x, s.y);
}
var sb = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const n = (i.data.datasets || []).length,
      s = [];
    let o, r, a, l;
    for (r = 0; r < n; ++r)
      (o = i.getDatasetMeta(r)),
        (a = o.dataset),
        (l = null),
        a &&
          a.options &&
          a instanceof ce &&
          (l = {
            visible: i.isDatasetVisible(r),
            index: r,
            fill: xf(a, r, n),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: a,
          }),
        (o.$filler = l),
        s.push(l);
    for (r = 0; r < n; ++r)
      (l = s[r]), !(!l || l.fill === !1) && (l.fill = yf(s, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const n = e.drawTime === "beforeDraw",
      s = i.getSortedVisibleDatasetMetas(),
      o = i.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      !a ||
        (a.line.updateControlPoints(o, a.axis), n && a.fill && jn(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw") return;
    const n = i.getSortedVisibleDatasetMetas();
    for (let s = n.length - 1; s >= 0; --s) {
      const o = n[s].$filler;
      Qo(o) && jn(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const n = t.meta.$filler;
    !Qo(n) || e.drawTime !== "beforeDatasetDraw" || jn(i.ctx, n, i.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const nr = (i, t) => {
    let { boxHeight: e = t, boxWidth: n = t } = i;
    return (
      i.usePointStyle &&
        ((e = Math.min(e, t)), (n = i.pointStyleWidth || Math.min(n, t))),
      { boxWidth: n, boxHeight: e, itemHeight: Math.max(t, e) }
    );
  },
  Ff = (i, t) =>
    i !== null &&
    t !== null &&
    i.datasetIndex === t.datasetIndex &&
    i.index === t.index;
class sr extends Ot {
  constructor(t) {
    super();
    (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e, n) {
    (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = B(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((n) => t.filter(n, this.chart.data))),
      t.sort && (e = e.sort((n, s) => t.sort(n, s, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e);
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels,
      s = tt(n.font),
      o = s.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = nr(n, o);
    let c, h;
    (e.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (h = this._fitRows(r, o, a, l) + 10))
        : ((h = this.maxHeight), (c = this._fitCols(r, s, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(h, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, e, n, s) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      h = s + a;
    let u = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let d = -1,
      f = -h;
    return (
      this.legendItems.forEach((g, m) => {
        const p = n + e / 2 + o.measureText(g.text).width;
        (m === 0 || c[c.length - 1] + p + 2 * a > r) &&
          ((u += h), (c[c.length - (m > 0 ? 0 : 1)] = 0), (f += h), d++),
          (l[m] = { left: 0, top: f, row: d, width: p, height: s }),
          (c[c.length - 1] += p + a);
      }),
      u
    );
  }
  _fitCols(t, e, n, s) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      h = r - t;
    let u = a,
      d = 0,
      f = 0,
      g = 0,
      m = 0;
    return (
      this.legendItems.forEach((p, b) => {
        const { itemWidth: y, itemHeight: _ } = Rf(n, e, o, p, s);
        b > 0 &&
          f + _ + 2 * a > h &&
          ((u += d + a),
          c.push({ width: d, height: f }),
          (g += d + a),
          m++,
          (d = f = 0)),
          (l[b] = { left: g, top: f, col: m, width: y, height: _ }),
          (d = Math.max(d, y)),
          (f += _ + a);
      }),
      (u += d),
      c.push({ width: d, height: f }),
      u
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: n,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      r = Te(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = st(n, this.left + s, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row &&
          ((a = c.row),
          (l = st(n, this.left + s, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + s),
          (c.left = r.leftForLtr(r.x(l), c.width)),
          (l += c.width + s);
    } else {
      let a = 0,
        l = st(n, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a &&
          ((a = c.col),
          (l = st(
            n,
            this.top + t + s,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + s),
          (c.left = r.leftForLtr(r.x(c.left), c.width)),
          (l += c.height + s);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      mn(t, this), this._draw(), pn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: n, ctx: s } = this,
      { align: o, labels: r } = t,
      a = X.color,
      l = Te(t.rtl, this.left, this.width),
      c = tt(r.font),
      { padding: h } = r,
      u = c.size,
      d = u / 2;
    let f;
    this.drawTitle(),
      (s.textAlign = l.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = c.string);
    const { boxWidth: g, boxHeight: m, itemHeight: p } = nr(r, u),
      b = function (k, S, M) {
        if (isNaN(g) || g <= 0 || isNaN(m) || m < 0) return;
        s.save();
        const T = C(M.lineWidth, 1);
        if (
          ((s.fillStyle = C(M.fillStyle, a)),
          (s.lineCap = C(M.lineCap, "butt")),
          (s.lineDashOffset = C(M.lineDashOffset, 0)),
          (s.lineJoin = C(M.lineJoin, "miter")),
          (s.lineWidth = T),
          (s.strokeStyle = C(M.strokeStyle, a)),
          s.setLineDash(C(M.lineDash, [])),
          r.usePointStyle)
        ) {
          const P = {
              radius: (m * Math.SQRT2) / 2,
              pointStyle: M.pointStyle,
              rotation: M.rotation,
              borderWidth: T,
            },
            A = l.xPlus(k, g / 2),
            L = S + d;
          wa(s, P, A, L, r.pointStyleWidth && g);
        } else {
          const P = S + Math.max((u - m) / 2, 0),
            A = l.leftForLtr(k, g),
            L = ue(M.borderRadius);
          s.beginPath(),
            Object.values(L).some((it) => it !== 0)
              ? di(s, { x: A, y: P, w: g, h: m, radius: L })
              : s.rect(A, P, g, m),
            s.fill(),
            T !== 0 && s.stroke();
        }
        s.restore();
      },
      y = function (k, S, M) {
        me(s, M.text, k, S + p / 2, c, {
          strikethrough: M.hidden,
          textAlign: l.textAlign(M.textAlign),
        });
      },
      _ = this.isHorizontal(),
      w = this._computeTitleHeight();
    _
      ? (f = {
          x: st(o, this.left + h, this.right - n[0]),
          y: this.top + h + w,
          line: 0,
        })
      : (f = {
          x: this.left + h,
          y: st(o, this.top + w + h, this.bottom - e[0].height),
          line: 0,
        }),
      Ea(this.ctx, t.textDirection);
    const x = p + h;
    this.legendItems.forEach((k, S) => {
      (s.strokeStyle = k.fontColor), (s.fillStyle = k.fontColor);
      const M = s.measureText(k.text).width,
        T = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)),
        P = g + d + M;
      let A = f.x,
        L = f.y;
      l.setWidth(this.width),
        _
          ? S > 0 &&
            A + P + h > this.right &&
            ((L = f.y += x),
            f.line++,
            (A = f.x = st(o, this.left + h, this.right - n[f.line])))
          : S > 0 &&
            L + x > this.bottom &&
            ((A = f.x = A + e[f.line].width + h),
            f.line++,
            (L = f.y =
              st(o, this.top + w + h, this.bottom - e[f.line].height)));
      const it = l.x(A);
      if (
        (b(it, L, k),
        (A = fh(T, A + g + d, _ ? A + P : this.right, t.rtl)),
        y(l.x(A), L, k),
        _)
      )
        f.x += P + h;
      else if (typeof k.text != "string") {
        const ut = c.lineHeight;
        f.y += Qa(k, ut) + h;
      } else f.y += x;
    }),
      Ca(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      n = tt(e.font),
      s = rt(e.padding);
    if (!e.display) return;
    const o = Te(t.rtl, this.left, this.width),
      r = this.ctx,
      a = e.position,
      l = n.size / 2,
      c = s.top + l;
    let h,
      u = this.left,
      d = this.width;
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)),
        (h = this.top + c),
        (u = st(t.align, u, this.right - d));
    else {
      const g = this.columnSizes.reduce((m, p) => Math.max(m, p.height), 0);
      h =
        c +
        st(
          t.align,
          this.top,
          this.bottom - g - t.labels.padding - this._computeTitleHeight()
        );
    }
    const f = st(a, u, u + d);
    (r.textAlign = o.textAlign(Ts(a))),
      (r.textBaseline = "middle"),
      (r.strokeStyle = e.color),
      (r.fillStyle = e.color),
      (r.font = n.string),
      me(r, e.text, f, h, n);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = tt(t.font),
      n = rt(t.padding);
    return t.display ? e.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, e) {
    let n, s, o;
    if (Rt(t, this.left, this.right) && Rt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (
          ((s = o[n]),
          Rt(t, s.left, s.left + s.width) && Rt(e, s.top, s.top + s.height))
        )
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Vf(t.type, e)) return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem,
        o = Ff(s, n);
      s && !o && B(e.onLeave, [t, s, this], this),
        (this._hoveredItem = n),
        n && !o && B(e.onHover, [t, n, this], this);
    } else n && B(e.onClick, [t, n, this], this);
  }
}
function Rf(i, t, e, n, s) {
  const o = Nf(n, i, t, e),
    r = zf(s, n, t.lineHeight);
  return { itemWidth: o, itemHeight: r };
}
function Nf(i, t, e, n) {
  let s = i.text;
  return (
    s &&
      typeof s != "string" &&
      (s = s.reduce((o, r) => (o.length > r.length ? o : r))),
    t + e.size / 2 + n.measureText(s).width
  );
}
function zf(i, t, e) {
  let n = i;
  return typeof t.text != "string" && (n = Qa(t, e)), n;
}
function Qa(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function Vf(i, t) {
  return !!(
    ((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (i === "click" || i === "mouseup"))
  );
}
var ob = {
  id: "legend",
  _element: sr,
  start(i, t, e) {
    const n = (i.legend = new sr({ ctx: i.ctx, options: e, chart: i }));
    ot.configure(i, n, e), ot.addBox(i, n);
  },
  stop(i) {
    ot.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const n = i.legend;
    ot.configure(i, n, e), (n.options = e);
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const n = t.datasetIndex,
        s = e.chart;
      s.isDatasetVisible(n)
        ? (s.hide(n), (t.hidden = !0))
        : (s.show(n), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets,
          {
            labels: {
              usePointStyle: e,
              pointStyle: n,
              textAlign: s,
              color: o,
              useBorderRadius: r,
              borderRadius: a,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0),
            h = rt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
class Ns extends Ot {
  constructor(t) {
    super();
    (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const n = this.options;
    if (((this.left = 0), (this.top = 0), !n.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = e);
    const s = H(n.text) ? n.text.length : 1;
    this._padding = rt(n.padding);
    const o = s * tt(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: n, bottom: s, right: o, options: r } = this,
      a = r.align;
    let l = 0,
      c,
      h,
      u;
    return (
      this.isHorizontal()
        ? ((h = st(a, n, o)), (u = e + t), (c = o - n))
        : (r.position === "left"
            ? ((h = n + t), (u = st(a, s, e)), (l = j * -0.5))
            : ((h = o - t), (u = st(a, e, s)), (l = j * 0.5)),
          (c = s - e)),
      { titleX: h, titleY: u, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const n = tt(e.font),
      o = n.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    me(t, e.text, 0, 0, n, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ts(e.align),
      textBaseline: "middle",
      translation: [r, a],
    });
  }
}
function Wf(i, t) {
  const e = new Ns({ ctx: i.ctx, options: t, chart: i });
  ot.configure(i, e, t), ot.addBox(i, e), (i.titleBlock = e);
}
var rb = {
  id: "title",
  _element: Ns,
  start(i, t, e) {
    Wf(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    ot.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const n = i.titleBlock;
    ot.configure(i, n, e), (n.options = e);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const zi = new WeakMap();
var ab = {
  id: "subtitle",
  start(i, t, e) {
    const n = new Ns({ ctx: i.ctx, options: e, chart: i });
    ot.configure(i, n, e), ot.addBox(i, n), zi.set(i, n);
  },
  stop(i) {
    ot.removeBox(i, zi.get(i)), zi.delete(i);
  },
  beforeUpdate(i, t, e) {
    const n = zi.get(i);
    ot.configure(i, n, e), (n.options = e);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "normal" },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Je = {
  average(i) {
    if (!i.length) return !1;
    let t,
      e,
      n = new Set(),
      s = 0,
      o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        n.add(l.x), (s += l.y), ++o;
      }
    }
    return { x: [...n].reduce((a, l) => a + l) / n.size, y: s / o };
  },
  nearest(i, t) {
    if (!i.length) return !1;
    let e = t.x,
      n = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      r,
      a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          h = ns(t, c);
        h < s && ((s = h), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (e = l.x), (n = l.y);
    }
    return { x: e, y: n };
  },
};
function Et(i, t) {
  return t && (H(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Lt(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function Bf(i, t) {
  const { element: e, datasetIndex: n, index: s } = t,
    o = i.getDatasetMeta(n).controller,
    { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(s),
    raw: i.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: e,
  };
}
function or(i, t) {
  const e = i.chart.ctx,
    { body: n, footer: s, title: o } = i,
    { boxWidth: r, boxHeight: a } = t,
    l = tt(t.bodyFont),
    c = tt(t.titleFont),
    h = tt(t.footerFont),
    u = o.length,
    d = s.length,
    f = n.length,
    g = rt(t.padding);
  let m = g.height,
    p = 0,
    b = n.reduce(
      (w, x) => w + x.before.length + x.lines.length + x.after.length,
      0
    );
  if (
    ((b += i.beforeBody.length + i.afterBody.length),
    u &&
      (m += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
    b)
  ) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    m += f * w + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  d && (m += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let y = 0;
  const _ = function (w) {
    p = Math.max(p, e.measureText(w).width + y);
  };
  return (
    e.save(),
    (e.font = c.string),
    V(i.title, _),
    (e.font = l.string),
    V(i.beforeBody.concat(i.afterBody), _),
    (y = t.displayColors ? r + 2 + t.boxPadding : 0),
    V(n, (w) => {
      V(w.before, _), V(w.lines, _), V(w.after, _);
    }),
    (y = 0),
    (e.font = h.string),
    V(i.footer, _),
    e.restore(),
    (p += g.width),
    { width: p, height: m }
  );
}
function Hf(i, t) {
  const { y: e, height: n } = t;
  return e < n / 2 ? "top" : e > i.height - n / 2 ? "bottom" : "center";
}
function $f(i, t, e, n) {
  const { x: s, width: o } = n,
    r = e.caretSize + e.caretPadding;
  if ((i === "left" && s + o + r > t.width) || (i === "right" && s - o - r < 0))
    return !0;
}
function jf(i, t, e, n) {
  const { x: s, width: o } = e,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = i;
  let c = "center";
  return (
    n === "center"
      ? (c = s <= (a + l) / 2 ? "left" : "right")
      : s <= o / 2
      ? (c = "left")
      : s >= r - o / 2 && (c = "right"),
    $f(c, i, t, e) && (c = "center"),
    c
  );
}
function rr(i, t, e) {
  const n = e.yAlign || t.yAlign || Hf(i, e);
  return { xAlign: e.xAlign || t.xAlign || jf(i, t, e, n), yAlign: n };
}
function Uf(i, t) {
  let { x: e, width: n } = i;
  return t === "right" ? (e -= n) : t === "center" && (e -= n / 2), e;
}
function Yf(i, t, e) {
  let { y: n, height: s } = i;
  return (
    t === "top" ? (n += e) : t === "bottom" ? (n -= s + e) : (n -= s / 2), n
  );
}
function ar(i, t, e, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = i,
    { xAlign: a, yAlign: l } = e,
    c = s + o,
    { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = ue(r);
  let g = Uf(t, a);
  const m = Yf(t, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (g += c)
        : a === "right" && (g -= c)
      : a === "left"
      ? (g -= Math.max(h, d) + s)
      : a === "right" && (g += Math.max(u, f) + s),
    { x: et(g, 0, n.width - t.width), y: et(m, 0, n.height - t.height) }
  );
}
function Vi(i, t, e) {
  const n = rt(e.padding);
  return t === "center"
    ? i.x + i.width / 2
    : t === "right"
    ? i.x + i.width - n.right
    : i.x + n.left;
}
function lr(i) {
  return Et([], Lt(i));
}
function qf(i, t, e) {
  return Xt(i, { tooltip: t, tooltipItems: e, type: "tooltip" });
}
function cr(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const tl = {
  beforeTitle: At,
  title(i) {
    if (i.length > 0) {
      const t = i[0],
        e = t.chart.data.labels,
        n = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (n > 0 && t.dataIndex < n) return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: At,
  beforeBody: At,
  beforeLabel: At,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return N(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return { pointStyle: e.pointStyle, rotation: e.rotation };
  },
  afterLabel: At,
  afterBody: At,
  beforeFooter: At,
  footer: At,
  afterFooter: At,
};
function lt(i, t, e, n) {
  const s = i[t].call(e, n);
  return typeof s == "undefined" ? tl[t].call(e, n) : s;
}
class hs extends Ot {
  constructor(t) {
    super();
    (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      n = this.options.setContext(this.getContext()),
      s = n.enabled && e.options.animation && n.animations,
      o = new La(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = qf(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, e) {
    const { callbacks: n } = e,
      s = lt(n, "beforeTitle", this, t),
      o = lt(n, "title", this, t),
      r = lt(n, "afterTitle", this, t);
    let a = [];
    return (a = Et(a, Lt(s))), (a = Et(a, Lt(o))), (a = Et(a, Lt(r))), a;
  }
  getBeforeBody(t, e) {
    return lr(lt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: n } = e,
      s = [];
    return (
      V(t, (o) => {
        const r = { before: [], lines: [], after: [] },
          a = cr(n, o);
        Et(r.before, Lt(lt(a, "beforeLabel", this, o))),
          Et(r.lines, lt(a, "label", this, o)),
          Et(r.after, Lt(lt(a, "afterLabel", this, o))),
          s.push(r);
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return lr(lt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: n } = e,
      s = lt(n, "beforeFooter", this, t),
      o = lt(n, "footer", this, t),
      r = lt(n, "afterFooter", this, t);
    let a = [];
    return (a = Et(a, Lt(s))), (a = Et(a, Lt(o))), (a = Et(a, Lt(r))), a;
  }
  _createItems(t) {
    const e = this._active,
      n = this.chart.data,
      s = [],
      o = [],
      r = [];
    let a = [],
      l,
      c;
    for (l = 0, c = e.length; l < c; ++l) a.push(Bf(this.chart, e[l]));
    return (
      t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, n))),
      t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, n))),
      V(a, (h) => {
        const u = cr(t.callbacks, h);
        s.push(lt(u, "labelColor", this, h)),
          o.push(lt(u, "labelPointStyle", this, h)),
          r.push(lt(u, "labelTextColor", this, h));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    );
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      r = [];
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const a = Je[n.position].call(this, s, this._eventPosition);
      (r = this._createItems(n)),
        (this.title = this.getTitle(r, n)),
        (this.beforeBody = this.getBeforeBody(r, n)),
        (this.body = this.getBody(r, n)),
        (this.afterBody = this.getAfterBody(r, n)),
        (this.footer = this.getFooter(r, n));
      const l = (this._size = or(this, n)),
        c = Object.assign({}, a, l),
        h = rr(this.chart, n, c),
        u = ar(n, c, h, this.chart);
      (this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (o = {
          opacity: 1,
          x: u.x,
          y: u.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        n.external &&
        n.external.call(this, { chart: this.chart, tooltip: this, replay: e });
  }
  drawCaret(t, e, n, s) {
    const o = this.getCaretPosition(t, n, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, n) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = n,
      { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = ue(a),
      { x: d, y: f } = t,
      { width: g, height: m } = e;
    let p, b, y, _, w, x;
    return (
      o === "center"
        ? ((w = f + m / 2),
          s === "left"
            ? ((p = d), (b = p - r), (_ = w + r), (x = w - r))
            : ((p = d + g), (b = p + r), (_ = w - r), (x = w + r)),
          (y = p))
        : (s === "left"
            ? (b = d + Math.max(l, h) + r)
            : s === "right"
            ? (b = d + g - Math.max(c, u) - r)
            : (b = this.caretX),
          o === "top"
            ? ((_ = f), (w = _ - r), (p = b - r), (y = b + r))
            : ((_ = f + m), (w = _ + r), (p = b + r), (y = b - r)),
          (x = _)),
      { x1: p, x2: b, x3: y, y1: _, y2: w, y3: x }
    );
  }
  drawTitle(t, e, n) {
    const s = this.title,
      o = s.length;
    let r, a, l;
    if (o) {
      const c = Te(n.rtl, this.x, this.width);
      for (
        t.x = Vi(this, n.titleAlign, n),
          e.textAlign = c.textAlign(n.titleAlign),
          e.textBaseline = "middle",
          r = tt(n.titleFont),
          a = n.titleSpacing,
          e.fillStyle = n.titleColor,
          e.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          l + 1 === o && (t.y += n.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, n, s, o) {
    const r = this.labelColors[n],
      a = this.labelPointStyles[n],
      { boxHeight: l, boxWidth: c } = o,
      h = tt(o.bodyFont),
      u = Vi(this, "left", o),
      d = s.x(u),
      f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
      g = e.y + f;
    if (o.usePointStyle) {
      const m = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        p = s.leftForLtr(d, c) + c / 2,
        b = g + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        os(t, m, p, b),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        os(t, m, p, b);
    } else {
      (t.lineWidth = I(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const m = s.leftForLtr(d, c),
        p = s.leftForLtr(s.xPlus(d, 1), c - 2),
        b = ue(r.borderRadius);
      Object.values(b).some((y) => y !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          di(t, { x: m, y: g, w: c, h: l, radius: b }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          di(t, { x: p, y: g + 1, w: c - 2, h: l - 2, radius: b }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(m, g, c, l),
          t.strokeRect(m, g, c, l),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(p, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: h,
      } = n,
      u = tt(n.bodyFont);
    let d = u.lineHeight,
      f = 0;
    const g = Te(n.rtl, this.x, this.width),
      m = function (M) {
        e.fillText(M, g.x(t.x + f), t.y + d / 2), (t.y += d + o);
      },
      p = g.textAlign(r);
    let b, y, _, w, x, k, S;
    for (
      e.textAlign = r,
        e.textBaseline = "middle",
        e.font = u.string,
        t.x = Vi(this, p, n),
        e.fillStyle = n.bodyColor,
        V(this.beforeBody, m),
        f = a && p !== "right" ? (r === "center" ? c / 2 + h : c + 2 + h) : 0,
        w = 0,
        k = s.length;
      w < k;
      ++w
    ) {
      for (
        b = s[w],
          y = this.labelTextColors[w],
          e.fillStyle = y,
          V(b.before, m),
          _ = b.lines,
          a &&
            _.length &&
            (this._drawColorBox(e, t, w, g, n),
            (d = Math.max(u.lineHeight, l))),
          x = 0,
          S = _.length;
        x < S;
        ++x
      )
        m(_[x]), (d = u.lineHeight);
      V(b.after, m);
    }
    (f = 0), (d = u.lineHeight), V(this.afterBody, m), (t.y -= o);
  }
  drawFooter(t, e, n) {
    const s = this.footer,
      o = s.length;
    let r, a;
    if (o) {
      const l = Te(n.rtl, this.x, this.width);
      for (
        t.x = Vi(this, n.footerAlign, n),
          t.y += n.footerMarginTop,
          e.textAlign = l.textAlign(n.footerAlign),
          e.textBaseline = "middle",
          r = tt(n.footerFont),
          e.fillStyle = n.footerColor,
          e.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + n.footerSpacing);
    }
  }
  drawBackground(t, e, n, s) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: l } = t,
      { width: c, height: h } = n,
      {
        topLeft: u,
        topRight: d,
        bottomLeft: f,
        bottomRight: g,
      } = ue(s.cornerRadius);
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(a + u, l),
      r === "top" && this.drawCaret(t, e, n, s),
      e.lineTo(a + c - d, l),
      e.quadraticCurveTo(a + c, l, a + c, l + d),
      r === "center" && o === "right" && this.drawCaret(t, e, n, s),
      e.lineTo(a + c, l + h - g),
      e.quadraticCurveTo(a + c, l + h, a + c - g, l + h),
      r === "bottom" && this.drawCaret(t, e, n, s),
      e.lineTo(a + f, l + h),
      e.quadraticCurveTo(a, l + h, a, l + h - f),
      r === "center" && o === "left" && this.drawCaret(t, e, n, s),
      e.lineTo(a, l + u),
      e.quadraticCurveTo(a, l, a + u, l),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      n = this.$animations,
      s = n && n.x,
      o = n && n.y;
    if (s || o) {
      const r = Je[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const a = (this._size = or(this, t)),
        l = Object.assign({}, r, this._size),
        c = rr(e, t, l),
        h = ar(t, l, c, e);
      (s._to !== h.x || o._to !== h.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n) return;
    this._updateAnimationTarget(e);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    n = Math.abs(n) < 0.001 ? 0 : n;
    const r = rt(e.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = n),
      this.drawBackground(o, t, s, e),
      Ea(t, e.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      Ca(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active,
      s = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      o = !Qi(n, s),
      r = this._positionChanged(s, e);
    (o || r) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, e, n),
      a = this._positionChanged(r, t),
      l = e || !Qi(r, o) || a;
    return (
      l &&
        ((this._active = r),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      l
    );
  }
  _getActiveElements(t, e, n, s) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!s)
      return e.filter(
        (a) =>
          this.chart.data.datasets[a.datasetIndex] &&
          this.chart
            .getDatasetMeta(a.datasetIndex)
            .controller.getParsed(a.index) !== void 0
      );
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: s, options: o } = this,
      r = Je[o.position].call(this, t, e);
    return r !== !1 && (n !== r.x || s !== r.y);
  }
}
v(hs, "positioners", Je);
var lb = {
  id: "tooltip",
  _element: hs,
  positioners: Je,
  afterInit(i, t, e) {
    e && (i.tooltip = new hs({ chart: i, options: e }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = { tooltip: t };
      if (
        i.notifyPlugins(
          "beforeTooltipDraw",
          dt(D({}, e), { cancelable: !0 })
        ) === !1
      )
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: tl,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const Zf = (i, t, e, n) => (
  typeof t == "string"
    ? ((e = i.push(t) - 1), n.unshift({ index: e, label: t }))
    : isNaN(t) && (e = null),
  e
);
function Xf(i, t, e, n) {
  const s = i.indexOf(t);
  if (s === -1) return Zf(i, t, e, n);
  const o = i.lastIndexOf(t);
  return s !== o ? e : s;
}
const Gf = (i, t) => (i === null ? null : et(Math.round(i), 0, t));
function hr(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class ur extends pe {
  constructor(t) {
    super(t);
    (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of e) n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (N(t)) return null;
    const n = this.getLabels();
    return (
      (e =
        isFinite(e) && n[e] === t ? e : Xf(n, t, C(e, t), this._addedLabels)),
      Gf(e, n.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (n = 0), e || (s = this.getLabels().length - 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      n = this.options.offset,
      s = [];
    let o = this.getLabels();
    (o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
      (this._startValue = this.min - (n ? 0.5 : 0));
    for (let r = t; r <= e; r++) s.push({ value: r });
    return s;
  }
  getLabelForValue(t) {
    return hr.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
v(ur, "id", "category"), v(ur, "defaults", { ticks: { callback: hr } });
function Kf(i, t) {
  const e = [],
    {
      bounds: s,
      step: o,
      min: r,
      max: a,
      precision: l,
      count: c,
      maxTicks: h,
      maxDigits: u,
      includeBounds: d,
    } = i,
    f = o || 1,
    g = h - 1,
    { min: m, max: p } = t,
    b = !N(r),
    y = !N(a),
    _ = !N(c),
    w = (p - m) / (u + 1);
  let x = so((p - m) / g / f) * f,
    k,
    S,
    M,
    T;
  if (x < 1e-14 && !b && !y) return [{ value: m }, { value: p }];
  (T = Math.ceil(p / x) - Math.floor(m / x)),
    T > g && (x = so((T * x) / g / f) * f),
    N(l) || ((k = Math.pow(10, l)), (x = Math.ceil(x * k) / k)),
    s === "ticks"
      ? ((S = Math.floor(m / x) * x), (M = Math.ceil(p / x) * x))
      : ((S = m), (M = p)),
    b && y && o && rh((a - r) / o, x / 1e3)
      ? ((T = Math.round(Math.min((a - r) / x, h))),
        (x = (a - r) / T),
        (S = r),
        (M = a))
      : _
      ? ((S = b ? r : S), (M = y ? a : M), (T = c - 1), (x = (M - S) / T))
      : ((T = (M - S) / x),
        ni(T, Math.round(T), x / 1e3)
          ? (T = Math.round(T))
          : (T = Math.ceil(T)));
  const P = Math.max(oo(x), oo(S));
  (k = Math.pow(10, N(l) ? P : l)),
    (S = Math.round(S * k) / k),
    (M = Math.round(M * k) / k);
  let A = 0;
  for (
    b &&
    (d && S !== r
      ? (e.push({ value: r }),
        S < r && A++,
        ni(Math.round((S + A * x) * k) / k, r, dr(r, w, i)) && A++)
      : S < r && A++);
    A < T;
    ++A
  ) {
    const L = Math.round((S + A * x) * k) / k;
    if (y && L > a) break;
    e.push({ value: L });
  }
  return (
    y && d && M !== a
      ? e.length && ni(e[e.length - 1].value, a, dr(a, w, i))
        ? (e[e.length - 1].value = a)
        : e.push({ value: a })
      : (!y || M === a) && e.push({ value: M }),
    e
  );
}
function dr(i, t, { horizontal: e, minRotation: n }) {
  const s = St(n),
    o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
    r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class an extends pe {
  constructor(t) {
    super(t);
    (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return N(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => (s = e ? s : l),
      a = (l) => (o = n ? o : l);
    if (t) {
      const l = Pt(s),
        c = Pt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    (this.min = s), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: n } = t,
      s;
    return (
      n
        ? ((s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (e = e || 11)),
      e && (s = Math.min(e, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      o = this._range || this,
      r = Kf(s, o);
    return (
      t.bounds === "ticks" && da(r, this, "value"),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      n = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (n - e) / Math.max(t.length - 1, 1) / 2;
      (e -= s), (n += s);
    }
    (this._startValue = e), (this._endValue = n), (this._valueRange = n - e);
  }
  getLabelForValue(t) {
    return yi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class fr extends an {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = Z(t) ? t : 0),
      (this.max = Z(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      n = St(this.options.ticks.minRotation),
      s = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
v(fr, "id", "linear"),
  v(fr, "defaults", { ticks: { callback: gn.formatters.numeric } });
const gi = (i) => Math.floor(jt(i)),
  ee = (i, t) => Math.pow(10, gi(i) + t);
function gr(i) {
  return i / Math.pow(10, gi(i)) === 1;
}
function mr(i, t, e) {
  const n = Math.pow(10, e),
    s = Math.floor(i / n);
  return Math.ceil(t / n) - s;
}
function Jf(i, t) {
  const e = t - i;
  let n = gi(e);
  for (; mr(i, t, n) > 10; ) n++;
  for (; mr(i, t, n) < 10; ) n--;
  return Math.min(n, gi(i));
}
function Qf(i, { min: t, max: e }) {
  t = ft(i.min, t);
  const n = [],
    s = gi(t);
  let o = Jf(t, e),
    r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o),
    l = s > o ? Math.pow(10, s) : 0,
    c = Math.round((t - l) * r) / r,
    h = Math.floor((t - l) / a / 10) * a * 10;
  let u = Math.floor((c - h) / Math.pow(10, o)),
    d = ft(i.min, Math.round((l + h + u * Math.pow(10, o)) * r) / r);
  for (; d < e; )
    n.push({ value: d, major: gr(d), significand: u }),
      u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
      u >= 20 && (o++, (u = 2), (r = o >= 0 ? 1 : r)),
      (d = Math.round((l + h + u * Math.pow(10, o)) * r) / r);
  const f = ft(i.max, d);
  return n.push({ value: f, major: gr(f), significand: u }), n;
}
class pr extends pe {
  constructor(t) {
    super(t);
    (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const n = an.prototype.parse.apply(this, [t, e]);
    if (n === 0) {
      this._zero = !0;
      return;
    }
    return Z(n) && n > 0 ? n : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = Z(t) ? Math.max(0, t) : null),
      (this.max = Z(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Z(this._userMin) &&
        (this.min = t === ee(this.min, 0) ? ee(this.min, -1) : ee(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let n = this.min,
      s = this.max;
    const o = (a) => (n = t ? n : a),
      r = (a) => (s = e ? s : a);
    n === s && (n <= 0 ? (o(1), r(10)) : (o(ee(n, -1)), r(ee(s, 1)))),
      n <= 0 && o(ee(s, -1)),
      s <= 0 && r(ee(n, 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      n = Qf(e, this);
    return (
      t.bounds === "ticks" && da(n, this, "value"),
      t.reverse
        ? (n.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      n
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : yi(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = jt(t)),
      (this._valueRange = jt(this.max) - jt(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (jt(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
v(pr, "id", "logarithmic"),
  v(pr, "defaults", {
    ticks: { callback: gn.formatters.logarithmic, major: { enabled: !0 } },
  });
function us(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = rt(t.backdropPadding);
    return C(t.font && t.font.size, X.font.size) + e.height;
  }
  return 0;
}
function tg(i, t, e) {
  return (
    (e = H(e) ? e : [e]), { w: Sh(i, t.string, e), h: e.length * t.lineHeight }
  );
}
function br(i, t, e, n, s) {
  return i === n || i === s
    ? { start: t - e / 2, end: t + e / 2 }
    : i < n || i > s
    ? { start: t - e, end: t }
    : { start: t, end: t + e };
}
function eg(i) {
  const t = {
      l: i.left + i._padding.left,
      r: i.right - i._padding.right,
      t: i.top + i._padding.top,
      b: i.bottom - i._padding.bottom,
    },
    e = Object.assign({}, t),
    n = [],
    s = [],
    o = i._pointLabels.length,
    r = i.options.pointLabels,
    a = r.centerPointLabels ? j / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    s[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + s[l], a),
      u = tt(c.font),
      d = tg(i.ctx, u, i._pointLabels[l]);
    n[l] = d;
    const f = gt(i.getIndexAngle(l) + a),
      g = Math.round(ks(f)),
      m = br(g, h.x, d.w, 0, 180),
      p = br(g, h.y, d.h, 90, 270);
    ig(e, t, f, m, p);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    (i._pointLabelItems = og(i, n, s));
}
function ig(i, t, e, n, s) {
  const o = Math.abs(Math.sin(e)),
    r = Math.abs(Math.cos(e));
  let a = 0,
    l = 0;
  n.start < t.l
    ? ((a = (t.l - n.start) / o), (i.l = Math.min(i.l, t.l - a)))
    : n.end > t.r && ((a = (n.end - t.r) / o), (i.r = Math.max(i.r, t.r + a))),
    s.start < t.t
      ? ((l = (t.t - s.start) / r), (i.t = Math.min(i.t, t.t - l)))
      : s.end > t.b &&
        ((l = (s.end - t.b) / r), (i.b = Math.max(i.b, t.b + l)));
}
function ng(i, t, e) {
  const n = i.drawingArea,
    { extra: s, additionalAngle: o, padding: r, size: a } = e,
    l = i.getPointPosition(t, n + s + r, o),
    c = Math.round(ks(gt(l.angle + K))),
    h = lg(l.y, a.h, c),
    u = rg(c),
    d = ag(l.x, a.w, u);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: u,
    left: d,
    top: h,
    right: d + a.w,
    bottom: h + a.h,
  };
}
function sg(i, t) {
  if (!t) return !0;
  const { left: e, top: n, right: s, bottom: o } = i;
  return !(
    zt({ x: e, y: n }, t) ||
    zt({ x: e, y: o }, t) ||
    zt({ x: s, y: n }, t) ||
    zt({ x: s, y: o }, t)
  );
}
function og(i, t, e) {
  const n = [],
    s = i._pointLabels.length,
    o = i.options,
    { centerPointLabels: r, display: a } = o.pointLabels,
    l = { extra: us(o) / 2, additionalAngle: r ? j / s : 0 };
  let c;
  for (let h = 0; h < s; h++) {
    (l.padding = e[h]), (l.size = t[h]);
    const u = ng(i, h, l);
    n.push(u), a === "auto" && ((u.visible = sg(u, c)), u.visible && (c = u));
  }
  return n;
}
function rg(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function ag(i, t, e) {
  return e === "right" ? (i -= t) : e === "center" && (i -= t / 2), i;
}
function lg(i, t, e) {
  return (
    e === 90 || e === 270 ? (i -= t / 2) : (e > 270 || e < 90) && (i -= t), i
  );
}
function cg(i, t, e) {
  const { left: n, top: s, right: o, bottom: r } = e,
    { backdropColor: a } = t;
  if (!N(a)) {
    const l = ue(t.borderRadius),
      c = rt(t.backdropPadding);
    i.fillStyle = a;
    const h = n - c.left,
      u = s - c.top,
      d = o - n + c.width,
      f = r - s + c.height;
    Object.values(l).some((g) => g !== 0)
      ? (i.beginPath(), di(i, { x: h, y: u, w: d, h: f, radius: l }), i.fill())
      : i.fillRect(h, u, d, f);
  }
}
function hg(i, t) {
  const {
    ctx: e,
    options: { pointLabels: n },
  } = i;
  for (let s = t - 1; s >= 0; s--) {
    const o = i._pointLabelItems[s];
    if (!o.visible) continue;
    const r = n.setContext(i.getPointLabelContext(s));
    cg(e, r, o);
    const a = tt(r.font),
      { x: l, y: c, textAlign: h } = o;
    me(e, i._pointLabels[s], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: "middle",
    });
  }
}
function el(i, t, e, n) {
  const { ctx: s } = i;
  if (e) s.arc(i.xCenter, i.yCenter, t, 0, $);
  else {
    let o = i.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < n; r++)
      (o = i.getPointPosition(r, t)), s.lineTo(o.x, o.y);
  }
}
function ug(i, t, e, n, s) {
  const o = i.ctx,
    r = t.circular,
    { color: a, lineWidth: l } = t;
  (!r && !n) ||
    !a ||
    !l ||
    e < 0 ||
    (o.save(),
    (o.strokeStyle = a),
    (o.lineWidth = l),
    o.setLineDash(s.dash),
    (o.lineDashOffset = s.dashOffset),
    o.beginPath(),
    el(i, e, r, n),
    o.closePath(),
    o.stroke(),
    o.restore());
}
function dg(i, t, e) {
  return Xt(i, { label: e, index: t, type: "pointLabel" });
}
class Wi extends an {
  constructor(t) {
    super(t);
    (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = rt(us(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      n = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, n) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = Z(t) && !isNaN(t) ? t : 0),
      (this.max = Z(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / us(this.options));
  }
  generateTickLabels(t) {
    an.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, n) => {
          const s = B(this.options.pointLabels.callback, [e, n], this);
          return s || s === 0 ? s : "";
        })
        .filter((e, n) => this.chart.getDataVisibility(n)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? eg(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, n, s) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((n - s) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, e, n, s)
      ));
  }
  getIndexAngle(t) {
    const e = $ / (this._pointLabels.length || 1),
      n = this.options.startAngle || 0;
    return gt(t * e + St(n));
  }
  getDistanceFromCenterForValue(t) {
    if (N(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (N(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return dg(this.getContext(), t, n);
    }
  }
  getPointPosition(t, e, n = 0) {
    const s = this.getIndexAngle(t) - K + n;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: n, right: s, bottom: o } = this._pointLabelItems[t];
    return { left: e, top: n, right: s, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const n = this.ctx;
      n.save(),
        n.beginPath(),
        el(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          e,
          this._pointLabels.length
        ),
        n.closePath(),
        (n.fillStyle = t),
        n.fill(),
        n.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: n, grid: s, border: o } = e,
      r = this._pointLabels.length;
    let a, l, c;
    if (
      (e.pointLabels.display && hg(this, r),
      s.display &&
        this.ticks.forEach((h, u) => {
          if (u !== 0 || (u === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(h.value);
            const d = this.getContext(u),
              f = s.setContext(d),
              g = o.setContext(d);
            ug(this, f, l, r, g);
          }
        }),
      n.display)
    ) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = n.setContext(this.getPointLabelContext(a)),
          { color: u, lineWidth: d } = h;
        !d ||
          !u ||
          ((t.lineWidth = d),
          (t.strokeStyle = u),
          t.setLineDash(h.borderDash),
          (t.lineDashOffset = h.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            e.ticks.reverse ? this.min : this.max
          )),
          (c = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      n = e.ticks;
    if (!n.display) return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && this.min >= 0 && !e.reverse) return;
        const c = n.setContext(this.getContext(l)),
          h = tt(c.font);
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = h.string),
            (r = t.measureText(a.label).width),
            (t.fillStyle = c.backdropColor);
          const u = rt(c.backdropPadding);
          t.fillRect(
            -r / 2 - u.left,
            -o - h.size / 2 - u.top,
            r + u.width,
            h.size + u.height
          );
        }
        me(t, a.label, 0, -o, h, {
          color: c.color,
          strokeColor: c.textStrokeColor,
          strokeWidth: c.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
v(Wi, "id", "radialLinear"),
  v(Wi, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: gn.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  v(Wi, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  v(Wi, "descriptors", { angleLines: { _fallback: "grid" } });
const yn = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  ct = Object.keys(yn);
function yr(i, t) {
  return i - t;
}
function xr(i, t) {
  if (N(t)) return null;
  const e = i._adapter,
    { parser: n, round: s, isoWeekday: o } = i._parseOpts;
  let r = t;
  return (
    typeof n == "function" && (r = n(r)),
    Z(r) || (r = typeof n == "string" ? e.parse(r, n) : e.parse(r)),
    r === null
      ? null
      : (s &&
          (r =
            s === "week" && (Ee(o) || o === !0)
              ? e.startOf(r, "isoWeek", o)
              : e.startOf(r, s)),
        +r)
  );
}
function _r(i, t, e, n) {
  const s = ct.length;
  for (let o = ct.indexOf(i); o < s - 1; ++o) {
    const r = yn[ct[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= n) return ct[o];
  }
  return ct[s - 1];
}
function fg(i, t, e, n, s) {
  for (let o = ct.length - 1; o >= ct.indexOf(e); o--) {
    const r = ct[o];
    if (yn[r].common && i._adapter.diff(s, n, r) >= t - 1) return r;
  }
  return ct[e ? ct.indexOf(e) : 0];
}
function gg(i) {
  for (let t = ct.indexOf(i) + 1, e = ct.length; t < e; ++t)
    if (yn[ct[t]].common) return ct[t];
}
function wr(i, t, e) {
  if (!e) i[t] = !0;
  else if (e.length) {
    const { lo: n, hi: s } = Os(e, t),
      o = e[n] >= t ? e[n] : e[s];
    i[o] = !0;
  }
}
function mg(i, t, e, n) {
  const s = i._adapter,
    o = +s.startOf(t[0].value, n),
    r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, n))
    (l = e[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function vr(i, t, e) {
  const n = [],
    s = {},
    o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    (a = t[r]), (s[a] = r), n.push({ value: a, major: !1 });
  return o === 0 || !e ? n : mg(i, n, s, e);
}
class ln extends pe {
  constructor(t) {
    super(t);
    (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e = {}) {
    const n = t.time || (t.time = {}),
      s = (this._adapter = new Na._date(t.adapters.date));
    s.init(e),
      ii(n.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: n.parser,
        round: n.round,
        isoWeekday: n.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return t === void 0 ? null : xr(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      n = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (s = Z(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n)),
      (o = Z(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      n = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n };
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      n = t.ticks,
      s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      r = this.max,
      a = hh(s, o, r);
    return (
      (this._unit =
        e.unit ||
        (n.autoSkip
          ? _r(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : fg(this, a.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        !n.major.enabled || this._unit === "year" ? void 0 : gg(this._unit)),
      this.initOffsets(s),
      t.reverse && a.reverse(),
      vr(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0,
      n = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (e = 1 - s)
        : (e = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (n = o)
        : (n = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (e = et(e, 0, r)),
      (n = et(n, 0, r)),
      (this._offsets = { start: e, end: n, factor: 1 / (e + 1 + n) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      n = this.max,
      s = this.options,
      o = s.time,
      r = o.unit || _r(o.minUnit, e, n, this._getLabelCapacity(e)),
      a = C(s.ticks.stepSize, 1),
      l = r === "week" ? o.isoWeekday : !1,
      c = Ee(l) || l === !0,
      h = {};
    let u = e,
      d,
      f;
    if (
      (c && (u = +t.startOf(u, "isoWeek", l)),
      (u = +t.startOf(u, c ? "day" : r)),
      t.diff(n, e, r) > 1e5 * a)
    )
      throw new Error(
        e + " and " + n + " are too far apart with stepSize of " + a + " " + r
      );
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (d = u, f = 0; d < n; d = +t.add(d, a, r), f++) wr(h, d, g);
    return (
      (d === n || s.bounds === "ticks" || f === 1) && wr(h, d, g),
      Object.keys(h)
        .sort(yr)
        .map((m) => +m)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      n = this.options.time;
    return n.tooltipFormat
      ? e.format(t, n.tooltipFormat)
      : e.format(t, n.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      r = e || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, n, s) {
    const o = this.options,
      r = o.ticks.callback;
    if (r) return B(r, [t, e, n], this);
    const a = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      h = l && a[l],
      u = c && a[c],
      d = n[e],
      f = c && u && d && d.major;
    return this._adapter.format(t, s || (f ? u : h));
  }
  generateTickLabels(t) {
    let e, n, s;
    for (e = 0, n = t.length; e < n; ++e)
      (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      n = this.ctx.measureText(t).width,
      s = St(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(s),
      r = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return { w: n * o + a * r, h: n * r + a * o };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      n = e.displayFormats,
      s = n[e.unit] || n.millisecond,
      o = this._tickFormatFunction(t, 0, vr(this, [t], this._majorUnit), s),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      n;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (e = 0, n = s.length; e < n; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, n = s.length; e < n; ++e) t.push(xr(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return ma(t.sort(yr));
  }
}
v(ln, "id", "time"),
  v(ln, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function Bi(i, t, e) {
  let n = 0,
    s = i.length - 1,
    o,
    r,
    a,
    l;
  e
    ? (t >= i[n].pos && t <= i[s].pos && ({ lo: n, hi: s } = Nt(i, "pos", t)),
      ({ pos: o, time: a } = i[n]),
      ({ pos: r, time: l } = i[s]))
    : (t >= i[n].time &&
        t <= i[s].time &&
        ({ lo: n, hi: s } = Nt(i, "time", t)),
      ({ time: o, pos: a } = i[n]),
      ({ time: r, pos: l } = i[s]));
  const c = r - o;
  return c ? a + ((l - a) * (t - o)) / c : a;
}
class Sr extends ln {
  constructor(t) {
    super(t);
    (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = Bi(e, this.min)),
      (this._tableRange = Bi(e, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: n } = this,
      s = [],
      o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      (c = t[r]), c >= e && c <= n && s.push(c);
    if (s.length < 2)
      return [
        { time: e, pos: 0 },
        { time: n, pos: 1 },
      ];
    for (r = 0, a = s.length; r < a; ++r)
      (h = s[r + 1]),
        (l = s[r - 1]),
        (c = s[r]),
        Math.round((h + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) });
    return o;
  }
  _generate() {
    const t = this.min,
      e = this.max;
    let n = super.getDataTimestamps();
    return (
      (!n.includes(t) || !n.length) && n.splice(0, 0, t),
      (!n.includes(e) || n.length === 1) && n.push(e),
      n.sort((s, o) => s - o)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      n = this.getLabelTimestamps();
    return (
      e.length && n.length
        ? (t = this.normalize(e.concat(n)))
        : (t = e.length ? e : n),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Bi(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return Bi(this._table, n * this._tableRange + this._minPos, !0);
  }
}
v(Sr, "id", "timeseries"), v(Sr, "defaults", ln.defaults);
class be extends Error {}
class pg extends be {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class bg extends be {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class yg extends be {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class Qe extends be {}
class il extends be {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class yt extends be {}
class Wt extends be {
  constructor() {
    super("Zone is an abstract class");
  }
}
const O = "numeric",
  Tt = "short",
  mt = "long",
  ds = { year: O, month: O, day: O },
  nl = { year: O, month: Tt, day: O },
  xg = { year: O, month: Tt, day: O, weekday: Tt },
  sl = { year: O, month: mt, day: O },
  ol = { year: O, month: mt, day: O, weekday: mt },
  rl = { hour: O, minute: O },
  al = { hour: O, minute: O, second: O },
  ll = { hour: O, minute: O, second: O, timeZoneName: Tt },
  cl = { hour: O, minute: O, second: O, timeZoneName: mt },
  hl = { hour: O, minute: O, hourCycle: "h23" },
  ul = { hour: O, minute: O, second: O, hourCycle: "h23" },
  dl = { hour: O, minute: O, second: O, hourCycle: "h23", timeZoneName: Tt },
  fl = { hour: O, minute: O, second: O, hourCycle: "h23", timeZoneName: mt },
  gl = { year: O, month: O, day: O, hour: O, minute: O },
  ml = { year: O, month: O, day: O, hour: O, minute: O, second: O },
  pl = { year: O, month: Tt, day: O, hour: O, minute: O },
  bl = { year: O, month: Tt, day: O, hour: O, minute: O, second: O },
  _g = { year: O, month: Tt, day: O, weekday: Tt, hour: O, minute: O },
  yl = { year: O, month: mt, day: O, hour: O, minute: O, timeZoneName: Tt },
  xl = {
    year: O,
    month: mt,
    day: O,
    hour: O,
    minute: O,
    second: O,
    timeZoneName: Tt,
  },
  _l = {
    year: O,
    month: mt,
    day: O,
    weekday: mt,
    hour: O,
    minute: O,
    timeZoneName: mt,
  },
  wl = {
    year: O,
    month: mt,
    day: O,
    weekday: mt,
    hour: O,
    minute: O,
    second: O,
    timeZoneName: mt,
  };
function F(i) {
  return typeof i == "undefined";
}
function fe(i) {
  return typeof i == "number";
}
function xn(i) {
  return typeof i == "number" && i % 1 === 0;
}
function wg(i) {
  return typeof i == "string";
}
function vg(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function vl() {
  try {
    return typeof Intl != "undefined" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Sg(i) {
  return Array.isArray(i) ? i : [i];
}
function Mr(i, t, e) {
  if (i.length !== 0)
    return i.reduce((n, s) => {
      const o = [t(s), s];
      return n && e(n[0], o[0]) === n[0] ? n : o;
    }, null)[1];
}
function Mg(i, t) {
  return t.reduce((e, n) => ((e[n] = i[n]), e), {});
}
function Ae(i, t) {
  return Object.prototype.hasOwnProperty.call(i, t);
}
function Vt(i, t, e) {
  return xn(i) && i >= t && i <= e;
}
function kg(i, t) {
  return i - t * Math.floor(i / t);
}
function J(i, t = 2) {
  const e = i < 0;
  let n;
  return (
    e
      ? (n = "-" + ("" + -i).padStart(t, "0"))
      : (n = ("" + i).padStart(t, "0")),
    n
  );
}
function Bt(i) {
  if (!(F(i) || i === null || i === "")) return parseInt(i, 10);
}
function ie(i) {
  if (!(F(i) || i === null || i === "")) return parseFloat(i);
}
function zs(i) {
  if (!(F(i) || i === null || i === "")) {
    const t = parseFloat("0." + i) * 1e3;
    return Math.floor(t);
  }
}
function Vs(i, t, e = !1) {
  const n = 10 ** t;
  return (e ? Math.trunc : Math.round)(i * n) / n;
}
function _i(i) {
  return i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0);
}
function ri(i) {
  return _i(i) ? 366 : 365;
}
function cn(i, t) {
  const e = kg(t - 1, 12) + 1,
    n = i + (t - e) / 12;
  return e === 2
    ? _i(n)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e - 1];
}
function Ws(i) {
  let t = Date.UTC(
    i.year,
    i.month - 1,
    i.day,
    i.hour,
    i.minute,
    i.second,
    i.millisecond
  );
  return (
    i.year < 100 &&
      i.year >= 0 &&
      ((t = new Date(t)), t.setUTCFullYear(t.getUTCFullYear() - 1900)),
    +t
  );
}
function hn(i) {
  const t =
      (i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400)) % 7,
    e = i - 1,
    n = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
  return t === 4 || n === 3 ? 53 : 52;
}
function fs(i) {
  return i > 99 ? i : i > 60 ? 1900 + i : 2e3 + i;
}
function Sl(i, t, e, n = null) {
  const s = new Date(i),
    o = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
  n && (o.timeZone = n);
  const r = D({ timeZoneName: t }, o),
    a = new Intl.DateTimeFormat(e, r)
      .formatToParts(s)
      .find((l) => l.type.toLowerCase() === "timezonename");
  return a ? a.value : null;
}
function _n(i, t) {
  let e = parseInt(i, 10);
  Number.isNaN(e) && (e = 0);
  const n = parseInt(t, 10) || 0,
    s = e < 0 || Object.is(e, -0) ? -n : n;
  return e * 60 + s;
}
function Ml(i) {
  const t = Number(i);
  if (typeof i == "boolean" || i === "" || Number.isNaN(t))
    throw new yt(`Invalid unit value ${i}`);
  return t;
}
function un(i, t) {
  const e = {};
  for (const n in i)
    if (Ae(i, n)) {
      const s = i[n];
      if (s == null) continue;
      e[t(n)] = Ml(s);
    }
  return e;
}
function dn(i, t) {
  const e = Math.trunc(Math.abs(i / 60)),
    n = Math.trunc(Math.abs(i % 60)),
    s = i >= 0 ? "+" : "-";
  switch (t) {
    case "short":
      return `${s}${J(e, 2)}:${J(n, 2)}`;
    case "narrow":
      return `${s}${e}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${s}${J(e, 2)}${J(n, 2)}`;
    default:
      throw new RangeError(
        `Value format ${t} is out of range for property format`
      );
  }
}
function wn(i) {
  return Mg(i, ["hour", "minute", "second", "millisecond"]);
}
const kl =
    /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/,
  Og = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  Ol = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  Tg = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Tl(i) {
  switch (i) {
    case "narrow":
      return [...Tg];
    case "short":
      return [...Ol];
    case "long":
      return [...Og];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
    default:
      return null;
  }
}
const Dl = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  El = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  Dg = ["M", "T", "W", "T", "F", "S", "S"];
function Cl(i) {
  switch (i) {
    case "narrow":
      return [...Dg];
    case "short":
      return [...El];
    case "long":
      return [...Dl];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Pl = ["AM", "PM"],
  Eg = ["Before Christ", "Anno Domini"],
  Cg = ["BC", "AD"],
  Pg = ["B", "A"];
function Al(i) {
  switch (i) {
    case "narrow":
      return [...Pg];
    case "short":
      return [...Cg];
    case "long":
      return [...Eg];
    default:
      return null;
  }
}
function Ag(i) {
  return Pl[i.hour < 12 ? 0 : 1];
}
function Ig(i, t) {
  return Cl(t)[i.weekday - 1];
}
function Lg(i, t) {
  return Tl(t)[i.month - 1];
}
function Fg(i, t) {
  return Al(t)[i.year < 0 ? 0 : 1];
}
function Rg(i, t, e = "always", n = !1) {
  const s = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."],
    },
    o = ["hours", "minutes", "seconds"].indexOf(i) === -1;
  if (e === "auto" && o) {
    const u = i === "days";
    switch (t) {
      case 1:
        return u ? "tomorrow" : `next ${s[i][0]}`;
      case -1:
        return u ? "yesterday" : `last ${s[i][0]}`;
      case 0:
        return u ? "today" : `this ${s[i][0]}`;
    }
  }
  const r = Object.is(t, -0) || t < 0,
    a = Math.abs(t),
    l = a === 1,
    c = s[i],
    h = n ? (l ? c[1] : c[2] || c[1]) : l ? s[i][0] : i;
  return r ? `${a} ${h} ago` : `in ${a} ${h}`;
}
function kr(i, t) {
  let e = "";
  for (const n of i) n.literal ? (e += n.val) : (e += t(n.val));
  return e;
}
const Ng = {
  D: ds,
  DD: nl,
  DDD: sl,
  DDDD: ol,
  t: rl,
  tt: al,
  ttt: ll,
  tttt: cl,
  T: hl,
  TT: ul,
  TTT: dl,
  TTTT: fl,
  f: gl,
  ff: pl,
  fff: yl,
  ffff: _l,
  F: ml,
  FF: bl,
  FFF: xl,
  FFFF: wl,
};
class ht {
  static create(t, e = {}) {
    return new ht(t, e);
  }
  static parseFormat(t) {
    let e = null,
      n = "",
      s = !1;
    const o = [];
    for (let r = 0; r < t.length; r++) {
      const a = t.charAt(r);
      a === "'"
        ? (n.length > 0 && o.push({ literal: s, val: n }),
          (e = null),
          (n = ""),
          (s = !s))
        : s || a === e
        ? (n += a)
        : (n.length > 0 && o.push({ literal: !1, val: n }), (n = a), (e = a));
    }
    return n.length > 0 && o.push({ literal: s, val: n }), o;
  }
  static macroTokenToFormatOpts(t) {
    return Ng[t];
  }
  constructor(t, e) {
    (this.opts = e), (this.loc = t), (this.systemLoc = null);
  }
  formatWithSystemDefault(t, e) {
    return (
      this.systemLoc === null &&
        (this.systemLoc = this.loc.redefaultToSystem()),
      this.systemLoc.dtFormatter(t, D(D({}, this.opts), e)).format()
    );
  }
  formatDateTime(t, e = {}) {
    return this.loc.dtFormatter(t, D(D({}, this.opts), e)).format();
  }
  formatDateTimeParts(t, e = {}) {
    return this.loc.dtFormatter(t, D(D({}, this.opts), e)).formatToParts();
  }
  resolvedOptions(t, e = {}) {
    return this.loc.dtFormatter(t, D(D({}, this.opts), e)).resolvedOptions();
  }
  num(t, e = 0) {
    if (this.opts.forceSimple) return J(t, e);
    const n = D({}, this.opts);
    return e > 0 && (n.padTo = e), this.loc.numberFormatter(n).format(t);
  }
  formatDateTimeFromString(t, e) {
    const n = this.loc.listingMode() === "en",
      s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      o = (f, g) => this.loc.extract(t, f, g),
      r = (f) =>
        t.isOffsetFixed && t.offset === 0 && f.allowZ
          ? "Z"
          : t.isValid
          ? t.zone.formatOffset(t.ts, f.format)
          : "",
      a = () =>
        n ? Ag(t) : o({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      l = (f, g) =>
        n
          ? Lg(t, f)
          : o(g ? { month: f } : { month: f, day: "numeric" }, "month"),
      c = (f, g) =>
        n
          ? Ig(t, f)
          : o(
              g
                ? { weekday: f }
                : { weekday: f, month: "long", day: "numeric" },
              "weekday"
            ),
      h = (f) => {
        const g = ht.macroTokenToFormatOpts(f);
        return g ? this.formatWithSystemDefault(t, g) : f;
      },
      u = (f) => (n ? Fg(t, f) : o({ era: f }, "era")),
      d = (f) => {
        switch (f) {
          case "S":
            return this.num(t.millisecond);
          case "u":
          case "SSS":
            return this.num(t.millisecond, 3);
          case "s":
            return this.num(t.second);
          case "ss":
            return this.num(t.second, 2);
          case "uu":
            return this.num(Math.floor(t.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(t.millisecond / 100));
          case "m":
            return this.num(t.minute);
          case "mm":
            return this.num(t.minute, 2);
          case "h":
            return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
          case "hh":
            return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
          case "H":
            return this.num(t.hour);
          case "HH":
            return this.num(t.hour, 2);
          case "Z":
            return r({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            return r({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            return r({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            return t.zone.offsetName(t.ts, {
              format: "short",
              locale: this.loc.locale,
            });
          case "ZZZZZ":
            return t.zone.offsetName(t.ts, {
              format: "long",
              locale: this.loc.locale,
            });
          case "z":
            return t.zoneName;
          case "a":
            return a();
          case "d":
            return s ? o({ day: "numeric" }, "day") : this.num(t.day);
          case "dd":
            return s ? o({ day: "2-digit" }, "day") : this.num(t.day, 2);
          case "c":
            return this.num(t.weekday);
          case "ccc":
            return c("short", !0);
          case "cccc":
            return c("long", !0);
          case "ccccc":
            return c("narrow", !0);
          case "E":
            return this.num(t.weekday);
          case "EEE":
            return c("short", !1);
          case "EEEE":
            return c("long", !1);
          case "EEEEE":
            return c("narrow", !1);
          case "L":
            return s
              ? o({ month: "numeric", day: "numeric" }, "month")
              : this.num(t.month);
          case "LL":
            return s
              ? o({ month: "2-digit", day: "numeric" }, "month")
              : this.num(t.month, 2);
          case "LLL":
            return l("short", !0);
          case "LLLL":
            return l("long", !0);
          case "LLLLL":
            return l("narrow", !0);
          case "M":
            return s ? o({ month: "numeric" }, "month") : this.num(t.month);
          case "MM":
            return s ? o({ month: "2-digit" }, "month") : this.num(t.month, 2);
          case "MMM":
            return l("short", !1);
          case "MMMM":
            return l("long", !1);
          case "MMMMM":
            return l("narrow", !1);
          case "y":
            return s ? o({ year: "numeric" }, "year") : this.num(t.year);
          case "yy":
            return s
              ? o({ year: "2-digit" }, "year")
              : this.num(t.year.toString().slice(-2), 2);
          case "yyyy":
            return s ? o({ year: "numeric" }, "year") : this.num(t.year, 4);
          case "yyyyyy":
            return s ? o({ year: "numeric" }, "year") : this.num(t.year, 6);
          case "G":
            return u("short");
          case "GG":
            return u("long");
          case "GGGGG":
            return u("narrow");
          case "kk":
            return this.num(t.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(t.weekYear, 4);
          case "W":
            return this.num(t.weekNumber);
          case "WW":
            return this.num(t.weekNumber, 2);
          case "o":
            return this.num(t.ordinal);
          case "ooo":
            return this.num(t.ordinal, 3);
          case "q":
            return this.num(t.quarter);
          case "qq":
            return this.num(t.quarter, 2);
          case "X":
            return this.num(Math.floor(t.ts / 1e3));
          case "x":
            return this.num(t.ts);
          default:
            return h(f);
        }
      };
    return kr(ht.parseFormat(e), d);
  }
  formatDurationFromString(t, e) {
    const n = (l) => {
        switch (l[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      s = (l) => (c) => {
        const h = n(c);
        return h ? this.num(l.get(h), c.length) : c;
      },
      o = ht.parseFormat(e),
      r = o.reduce((l, { literal: c, val: h }) => (c ? l : l.concat(h)), []),
      a = t.shiftTo(...r.map(n).filter((l) => l));
    return kr(o, s(a));
  }
}
class Mt {
  constructor(t, e) {
    (this.reason = t), (this.explanation = e);
  }
  toMessage() {
    return this.explanation
      ? `${this.reason}: ${this.explanation}`
      : this.reason;
  }
}
class wi {
  get type() {
    throw new Wt();
  }
  get name() {
    throw new Wt();
  }
  get isUniversal() {
    throw new Wt();
  }
  offsetName(t, e) {
    throw new Wt();
  }
  formatOffset(t, e) {
    throw new Wt();
  }
  offset(t) {
    throw new Wt();
  }
  equals(t) {
    throw new Wt();
  }
  get isValid() {
    throw new Wt();
  }
}
let Un = null;
class Bs extends wi {
  static get instance() {
    return Un === null && (Un = new Bs()), Un;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: e, locale: n }) {
    return Sl(t, e, n);
  }
  formatOffset(t, e) {
    return dn(this.offset(t), e);
  }
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  equals(t) {
    return t.type === "system";
  }
  get isValid() {
    return !0;
  }
}
const zg = RegExp(`^${kl.source}$`);
let Ki = {};
function Vg(i) {
  return (
    Ki[i] ||
      (Ki[i] = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: i,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })),
    Ki[i]
  );
}
const Wg = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function Bg(i, t) {
  const e = i.format(t).replace(/\u200E/g, ""),
    n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(e),
    [, s, o, r, a, l, c] = n;
  return [r, s, o, a, l, c];
}
function Hg(i, t) {
  const e = i.formatToParts(t),
    n = [];
  for (let s = 0; s < e.length; s++) {
    const { type: o, value: r } = e[s],
      a = Wg[o];
    F(a) || (n[a] = parseInt(r, 10));
  }
  return n;
}
let Hi = {};
class Dt extends wi {
  static create(t) {
    return Hi[t] || (Hi[t] = new Dt(t)), Hi[t];
  }
  static resetCache() {
    (Hi = {}), (Ki = {});
  }
  static isValidSpecifier(t) {
    return !!(t && t.match(zg));
  }
  static isValidZone(t) {
    if (!t) return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(t) {
    super();
    (this.zoneName = t), (this.valid = Dt.isValidZone(t));
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: e, locale: n }) {
    return Sl(t, e, n, this.name);
  }
  formatOffset(t, e) {
    return dn(this.offset(t), e);
  }
  offset(t) {
    const e = new Date(t);
    if (isNaN(e)) return NaN;
    const n = Vg(this.name),
      [s, o, r, a, l, c] = n.formatToParts ? Hg(n, e) : Bg(n, e),
      u = Ws({
        year: s,
        month: o,
        day: r,
        hour: a === 24 ? 0 : a,
        minute: l,
        second: c,
        millisecond: 0,
      });
    let d = +e;
    const f = d % 1e3;
    return (d -= f >= 0 ? f : 1e3 + f), (u - d) / (60 * 1e3);
  }
  equals(t) {
    return t.type === "iana" && t.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let Yn = null;
class at extends wi {
  static get utcInstance() {
    return Yn === null && (Yn = new at(0)), Yn;
  }
  static instance(t) {
    return t === 0 ? at.utcInstance : new at(t);
  }
  static parseSpecifier(t) {
    if (t) {
      const e = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (e) return new at(_n(e[1], e[2]));
    }
    return null;
  }
  constructor(t) {
    super();
    this.fixed = t;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${dn(this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(t, e) {
    return dn(this.fixed, e);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(t) {
    return t.type === "fixed" && t.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class Or extends wi {
  constructor(t) {
    super();
    this.zoneName = t;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function Ht(i, t) {
  if (F(i) || i === null) return t;
  if (i instanceof wi) return i;
  if (wg(i)) {
    const e = i.toLowerCase();
    return e === "local" || e === "system"
      ? t
      : e === "utc" || e === "gmt"
      ? at.utcInstance
      : Dt.isValidSpecifier(e)
      ? Dt.create(i)
      : at.parseSpecifier(e) || new Or(i);
  } else
    return fe(i)
      ? at.instance(i)
      : typeof i == "object" && i.offset && typeof i.offset == "number"
      ? i
      : new Or(i);
}
let Tr = () => Date.now(),
  Dr = "system",
  Er = null,
  Cr = null,
  Pr = null,
  Ar;
class Q {
  static get now() {
    return Tr;
  }
  static set now(t) {
    Tr = t;
  }
  static set defaultZone(t) {
    Dr = t;
  }
  static get defaultZone() {
    return Ht(Dr, Bs.instance);
  }
  static get defaultLocale() {
    return Er;
  }
  static set defaultLocale(t) {
    Er = t;
  }
  static get defaultNumberingSystem() {
    return Cr;
  }
  static set defaultNumberingSystem(t) {
    Cr = t;
  }
  static get defaultOutputCalendar() {
    return Pr;
  }
  static set defaultOutputCalendar(t) {
    Pr = t;
  }
  static get throwOnInvalid() {
    return Ar;
  }
  static set throwOnInvalid(t) {
    Ar = t;
  }
  static resetCaches() {
    Y.resetCache(), Dt.resetCache();
  }
}
let Ir = {};
function $g(i, t = {}) {
  const e = JSON.stringify([i, t]);
  let n = Ir[e];
  return n || ((n = new Intl.ListFormat(i, t)), (Ir[e] = n)), n;
}
let gs = {};
function ms(i, t = {}) {
  const e = JSON.stringify([i, t]);
  let n = gs[e];
  return n || ((n = new Intl.DateTimeFormat(i, t)), (gs[e] = n)), n;
}
let ps = {};
function jg(i, t = {}) {
  const e = JSON.stringify([i, t]);
  let n = ps[e];
  return n || ((n = new Intl.NumberFormat(i, t)), (ps[e] = n)), n;
}
let bs = {};
function Ug(i, t = {}) {
  const r = t,
    { base: e } = r,
    n = Sn(r, ["base"]),
    s = JSON.stringify([i, n]);
  let o = bs[s];
  return o || ((o = new Intl.RelativeTimeFormat(i, t)), (bs[s] = o)), o;
}
let ti = null;
function Yg() {
  return ti || ((ti = new Intl.DateTimeFormat().resolvedOptions().locale), ti);
}
function qg(i) {
  const t = i.indexOf("-u-");
  if (t === -1) return [i];
  {
    let e;
    const n = i.substring(0, t);
    try {
      e = ms(i).resolvedOptions();
    } catch {
      e = ms(n).resolvedOptions();
    }
    const { numberingSystem: s, calendar: o } = e;
    return [n, s, o];
  }
}
function Zg(i, t, e) {
  return (
    (e || t) && ((i += "-u"), e && (i += `-ca-${e}`), t && (i += `-nu-${t}`)), i
  );
}
function Xg(i) {
  const t = [];
  for (let e = 1; e <= 12; e++) {
    const n = E.utc(2016, e, 1);
    t.push(i(n));
  }
  return t;
}
function Gg(i) {
  const t = [];
  for (let e = 1; e <= 7; e++) {
    const n = E.utc(2016, 11, 13 + e);
    t.push(i(n));
  }
  return t;
}
function $i(i, t, e, n, s) {
  const o = i.listingMode(e);
  return o === "error" ? null : o === "en" ? n(t) : s(t);
}
function Kg(i) {
  return i.numberingSystem && i.numberingSystem !== "latn"
    ? !1
    : i.numberingSystem === "latn" ||
        !i.locale ||
        i.locale.startsWith("en") ||
        new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem ===
          "latn";
}
class Jg {
  constructor(t, e, n) {
    (this.padTo = n.padTo || 0), (this.floor = n.floor || !1);
    const a = n,
      { padTo: s, floor: o } = a,
      r = Sn(a, ["padTo", "floor"]);
    if (!e || Object.keys(r).length > 0) {
      const l = D({ useGrouping: !1 }, n);
      n.padTo > 0 && (l.minimumIntegerDigits = n.padTo), (this.inf = jg(t, l));
    }
  }
  format(t) {
    if (this.inf) {
      const e = this.floor ? Math.floor(t) : t;
      return this.inf.format(e);
    } else {
      const e = this.floor ? Math.floor(t) : Vs(t, 3);
      return J(e, this.padTo);
    }
  }
}
class Qg {
  constructor(t, e, n) {
    this.opts = n;
    let s;
    if (t.zone.isUniversal) {
      const r = -1 * (t.offset / 60),
        a = r >= 0 ? `Etc/GMT+${r}` : `Etc/GMT${r}`;
      t.offset !== 0 && Dt.create(a).valid
        ? ((s = a), (this.dt = t))
        : ((s = "UTC"),
          n.timeZoneName
            ? (this.dt = t)
            : (this.dt =
                t.offset === 0 ? t : E.fromMillis(t.ts + t.offset * 60 * 1e3)));
    } else
      t.zone.type === "system"
        ? (this.dt = t)
        : ((this.dt = t), (s = t.zone.name));
    const o = D({}, this.opts);
    s && (o.timeZone = s), (this.dtf = ms(e, o));
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class tm {
  constructor(t, e, n) {
    (this.opts = D({ style: "long" }, n)), !e && vl() && (this.rtf = Ug(t, n));
  }
  format(t, e) {
    return this.rtf
      ? this.rtf.format(t, e)
      : Rg(e, t, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(t, e) {
    return this.rtf ? this.rtf.formatToParts(t, e) : [];
  }
}
class Y {
  static fromOpts(t) {
    return Y.create(
      t.locale,
      t.numberingSystem,
      t.outputCalendar,
      t.defaultToEN
    );
  }
  static create(t, e, n, s = !1) {
    const o = t || Q.defaultLocale,
      r = o || (s ? "en-US" : Yg()),
      a = e || Q.defaultNumberingSystem,
      l = n || Q.defaultOutputCalendar;
    return new Y(r, a, l, o);
  }
  static resetCache() {
    (ti = null), (gs = {}), (ps = {}), (bs = {});
  }
  static fromObject({ locale: t, numberingSystem: e, outputCalendar: n } = {}) {
    return Y.create(t, e, n);
  }
  constructor(t, e, n, s) {
    const [o, r, a] = qg(t);
    (this.locale = o),
      (this.numberingSystem = e || r || null),
      (this.outputCalendar = n || a || null),
      (this.intl = Zg(this.locale, this.numberingSystem, this.outputCalendar)),
      (this.weekdaysCache = { format: {}, standalone: {} }),
      (this.monthsCache = { format: {}, standalone: {} }),
      (this.meridiemCache = null),
      (this.eraCache = {}),
      (this.specifiedLocale = s),
      (this.fastNumbersCached = null);
  }
  get fastNumbers() {
    return (
      this.fastNumbersCached == null && (this.fastNumbersCached = Kg(this)),
      this.fastNumbersCached
    );
  }
  listingMode() {
    const t = this.isEnglish(),
      e =
        (this.numberingSystem === null || this.numberingSystem === "latn") &&
        (this.outputCalendar === null || this.outputCalendar === "gregory");
    return t && e ? "en" : "intl";
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0
      ? this
      : Y.create(
          t.locale || this.specifiedLocale,
          t.numberingSystem || this.numberingSystem,
          t.outputCalendar || this.outputCalendar,
          t.defaultToEN || !1
        );
  }
  redefaultToEN(t = {}) {
    return this.clone(dt(D({}, t), { defaultToEN: !0 }));
  }
  redefaultToSystem(t = {}) {
    return this.clone(dt(D({}, t), { defaultToEN: !1 }));
  }
  months(t, e = !1, n = !0) {
    return $i(this, t, n, Tl, () => {
      const s = e ? { month: t, day: "numeric" } : { month: t },
        o = e ? "format" : "standalone";
      return (
        this.monthsCache[o][t] ||
          (this.monthsCache[o][t] = Xg((r) => this.extract(r, s, "month"))),
        this.monthsCache[o][t]
      );
    });
  }
  weekdays(t, e = !1, n = !0) {
    return $i(this, t, n, Cl, () => {
      const s = e
          ? { weekday: t, year: "numeric", month: "long", day: "numeric" }
          : { weekday: t },
        o = e ? "format" : "standalone";
      return (
        this.weekdaysCache[o][t] ||
          (this.weekdaysCache[o][t] = Gg((r) => this.extract(r, s, "weekday"))),
        this.weekdaysCache[o][t]
      );
    });
  }
  meridiems(t = !0) {
    return $i(
      this,
      void 0,
      t,
      () => Pl,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [
            E.utc(2016, 11, 13, 9),
            E.utc(2016, 11, 13, 19),
          ].map((n) => this.extract(n, e, "dayperiod"));
        }
        return this.meridiemCache;
      }
    );
  }
  eras(t, e = !0) {
    return $i(this, t, e, Al, () => {
      const n = { era: t };
      return (
        this.eraCache[t] ||
          (this.eraCache[t] = [E.utc(-40, 1, 1), E.utc(2017, 1, 1)].map((s) =>
            this.extract(s, n, "era")
          )),
        this.eraCache[t]
      );
    });
  }
  extract(t, e, n) {
    const s = this.dtFormatter(t, e),
      o = s.formatToParts(),
      r = o.find((a) => a.type.toLowerCase() === n);
    return r ? r.value : null;
  }
  numberFormatter(t = {}) {
    return new Jg(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, e = {}) {
    return new Qg(t, this.intl, e);
  }
  relFormatter(t = {}) {
    return new tm(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return $g(this.intl, t);
  }
  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith("en-us")
    );
  }
  equals(t) {
    return (
      this.locale === t.locale &&
      this.numberingSystem === t.numberingSystem &&
      this.outputCalendar === t.outputCalendar
    );
  }
}
function Ie(...i) {
  const t = i.reduce((e, n) => e + n.source, "");
  return RegExp(`^${t}$`);
}
function ye(...i) {
  return (t) =>
    i
      .reduce(
        ([e, n, s], o) => {
          const [r, a, l] = o(t, s);
          return [D(D({}, e), r), n || a, l];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}
function Le(i, ...t) {
  if (i == null) return [null, null];
  for (const [e, n] of t) {
    const s = e.exec(i);
    if (s) return n(s);
  }
  return [null, null];
}
function Il(...i) {
  return (t, e) => {
    const n = {};
    let s;
    for (s = 0; s < i.length; s++) n[i[s]] = Bt(t[e + s]);
    return [n, null, e + s];
  };
}
const Ll = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  Hs = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  Fl = RegExp(`${Hs.source}${Ll.source}?`),
  $s = RegExp(`(?:T${Fl.source})?`),
  em = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
  im = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
  nm = /(\d{4})-?(\d{3})/,
  sm = Il("weekYear", "weekNumber", "weekDay"),
  om = Il("year", "ordinal"),
  rm = /(\d{4})-(\d\d)-(\d\d)/,
  Rl = RegExp(`${Hs.source} ?(?:${Ll.source}|(${kl.source}))?`),
  am = RegExp(`(?: ${Rl.source})?`);
function De(i, t, e) {
  const n = i[t];
  return F(n) ? e : Bt(n);
}
function Nl(i, t) {
  return [
    { year: De(i, t), month: De(i, t + 1, 1), day: De(i, t + 2, 1) },
    null,
    t + 3,
  ];
}
function xe(i, t) {
  return [
    {
      hours: De(i, t, 0),
      minutes: De(i, t + 1, 0),
      seconds: De(i, t + 2, 0),
      milliseconds: zs(i[t + 3]),
    },
    null,
    t + 4,
  ];
}
function Fe(i, t) {
  const e = !i[t] && !i[t + 1],
    n = _n(i[t + 1], i[t + 2]),
    s = e ? null : at.instance(n);
  return [{}, s, t + 3];
}
function zl(i, t) {
  const e = i[t] ? Dt.create(i[t]) : null;
  return [{}, e, t + 1];
}
const lm = RegExp(`^T?${Hs.source}$`),
  cm =
    /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function hm(i) {
  const [t, e, n, s, o, r, a, l, c] = i,
    h = t[0] === "-",
    u = l && l[0] === "-",
    d = (f, g = !1) => (f !== void 0 && (g || (f && h)) ? -f : f);
  return [
    {
      years: d(ie(e)),
      months: d(ie(n)),
      weeks: d(ie(s)),
      days: d(ie(o)),
      hours: d(ie(r)),
      minutes: d(ie(a)),
      seconds: d(ie(l), l === "-0"),
      milliseconds: d(zs(c), u),
    },
  ];
}
const um = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};
function js(i, t, e, n, s, o, r) {
  const a = {
    year: t.length === 2 ? fs(Bt(t)) : Bt(t),
    month: Ol.indexOf(e) + 1,
    day: Bt(n),
    hour: Bt(s),
    minute: Bt(o),
  };
  return (
    r && (a.second = Bt(r)),
    i && (a.weekday = i.length > 3 ? Dl.indexOf(i) + 1 : El.indexOf(i) + 1),
    a
  );
}
const dm =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function fm(i) {
  const [, t, e, n, s, o, r, a, l, c, h, u] = i,
    d = js(t, s, n, e, o, r, a);
  let f;
  return l ? (f = um[l]) : c ? (f = 0) : (f = _n(h, u)), [d, new at(f)];
}
function gm(i) {
  return i
    .replace(/\([^)]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}
const mm =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  pm =
    /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  bm =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Lr(i) {
  const [, t, e, n, s, o, r, a] = i;
  return [js(t, s, n, e, o, r, a), at.utcInstance];
}
function ym(i) {
  const [, t, e, n, s, o, r, a] = i;
  return [js(t, a, e, n, s, o, r), at.utcInstance];
}
const xm = Ie(em, $s),
  _m = Ie(im, $s),
  wm = Ie(nm, $s),
  vm = Ie(Fl),
  Sm = ye(Nl, xe, Fe),
  Mm = ye(sm, xe, Fe),
  km = ye(om, xe, Fe),
  Om = ye(xe, Fe);
function Tm(i) {
  return Le(i, [xm, Sm], [_m, Mm], [wm, km], [vm, Om]);
}
function Dm(i) {
  return Le(gm(i), [dm, fm]);
}
function Em(i) {
  return Le(i, [mm, Lr], [pm, Lr], [bm, ym]);
}
function Cm(i) {
  return Le(i, [cm, hm]);
}
const Pm = ye(xe);
function Am(i) {
  return Le(i, [lm, Pm]);
}
const Im = Ie(rm, am),
  Lm = Ie(Rl),
  Fm = ye(Nl, xe, Fe, zl),
  Rm = ye(xe, Fe, zl);
function Nm(i) {
  return Le(i, [Im, Fm], [Lm, Rm]);
}
const zm = "Invalid Duration",
  Vl = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1e3,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1e3,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
    minutes: { seconds: 60, milliseconds: 60 * 1e3 },
    seconds: { milliseconds: 1e3 },
  },
  Vm = D(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 365 * 24,
        minutes: 365 * 24 * 60,
        seconds: 365 * 24 * 60 * 60,
        milliseconds: 365 * 24 * 60 * 60 * 1e3,
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 91 * 24,
        minutes: 91 * 24 * 60,
        seconds: 91 * 24 * 60 * 60,
        milliseconds: 91 * 24 * 60 * 60 * 1e3,
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 30 * 24,
        minutes: 30 * 24 * 60,
        seconds: 30 * 24 * 60 * 60,
        milliseconds: 30 * 24 * 60 * 60 * 1e3,
      },
    },
    Vl
  ),
  bt = 146097 / 400,
  ke = 146097 / 4800,
  Wm = D(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: bt / 7,
        days: bt,
        hours: bt * 24,
        minutes: bt * 24 * 60,
        seconds: bt * 24 * 60 * 60,
        milliseconds: bt * 24 * 60 * 60 * 1e3,
      },
      quarters: {
        months: 3,
        weeks: bt / 28,
        days: bt / 4,
        hours: (bt * 24) / 4,
        minutes: (bt * 24 * 60) / 4,
        seconds: (bt * 24 * 60 * 60) / 4,
        milliseconds: (bt * 24 * 60 * 60 * 1e3) / 4,
      },
      months: {
        weeks: ke / 7,
        days: ke,
        hours: ke * 24,
        minutes: ke * 24 * 60,
        seconds: ke * 24 * 60 * 60,
        milliseconds: ke * 24 * 60 * 60 * 1e3,
      },
    },
    Vl
  ),
  ae = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ],
  Bm = ae.slice(0).reverse();
function ne(i, t, e = !1) {
  const n = {
    values: e ? t.values : D(D({}, i.values), t.values || {}),
    loc: i.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || i.conversionAccuracy,
  };
  return new R(n);
}
function Hm(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function Wl(i, t, e, n, s) {
  const o = i[s][e],
    r = t[e] / o,
    a = Math.sign(r) === Math.sign(n[s]),
    l = !a && n[s] !== 0 && Math.abs(r) <= 1 ? Hm(r) : Math.trunc(r);
  (n[s] += l), (t[e] -= l * o);
}
function $m(i, t) {
  Bm.reduce((e, n) => (F(t[n]) ? e : (e && Wl(i, t, e, t, n), n)), null);
}
class R {
  constructor(t) {
    const e = t.conversionAccuracy === "longterm" || !1;
    (this.values = t.values),
      (this.loc = t.loc || Y.create()),
      (this.conversionAccuracy = e ? "longterm" : "casual"),
      (this.invalid = t.invalid || null),
      (this.matrix = e ? Wm : Vm),
      (this.isLuxonDuration = !0);
  }
  static fromMillis(t, e) {
    return R.fromObject({ milliseconds: t }, e);
  }
  static fromObject(t, e = {}) {
    if (t == null || typeof t != "object")
      throw new yt(
        `Duration.fromObject: argument expected to be an object, got ${
          t === null ? "null" : typeof t
        }`
      );
    return new R({
      values: un(t, R.normalizeUnit),
      loc: Y.fromObject(e),
      conversionAccuracy: e.conversionAccuracy,
    });
  }
  static fromDurationLike(t) {
    if (fe(t)) return R.fromMillis(t);
    if (R.isDuration(t)) return t;
    if (typeof t == "object") return R.fromObject(t);
    throw new yt(`Unknown duration argument ${t} of type ${typeof t}`);
  }
  static fromISO(t, e) {
    const [n] = Cm(t);
    return n
      ? R.fromObject(n, e)
      : R.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(t, e) {
    const [n] = Am(t);
    return n
      ? R.fromObject(n, e)
      : R.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static invalid(t, e = null) {
    if (!t) throw new yt("need to specify a reason the Duration is invalid");
    const n = t instanceof Mt ? t : new Mt(t, e);
    if (Q.throwOnInvalid) throw new yg(n);
    return new R({ invalid: n });
  }
  static normalizeUnit(t) {
    const e = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[t && t.toLowerCase()];
    if (!e) throw new il(t);
    return e;
  }
  static isDuration(t) {
    return (t && t.isLuxonDuration) || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(t, e = {}) {
    const n = dt(D({}, e), { floor: e.round !== !1 && e.floor !== !1 });
    return this.isValid
      ? ht.create(this.loc, n).formatDurationFromString(this, t)
      : zm;
  }
  toHuman(t = {}) {
    const e = ae
      .map((n) => {
        const s = this.values[n];
        return F(s)
          ? null
          : this.loc
              .numberFormatter(
                dt(D({ style: "unit", unitDisplay: "long" }, t), {
                  unit: n.slice(0, -1),
                })
              )
              .format(s);
      })
      .filter((n) => n);
    return this.loc
      .listFormatter(
        D({ type: "conjunction", style: t.listStyle || "narrow" }, t)
      )
      .format(e);
  }
  toObject() {
    return this.isValid ? D({}, this.values) : {};
  }
  toISO() {
    if (!this.isValid) return null;
    let t = "P";
    return (
      this.years !== 0 && (t += this.years + "Y"),
      (this.months !== 0 || this.quarters !== 0) &&
        (t += this.months + this.quarters * 3 + "M"),
      this.weeks !== 0 && (t += this.weeks + "W"),
      this.days !== 0 && (t += this.days + "D"),
      (this.hours !== 0 ||
        this.minutes !== 0 ||
        this.seconds !== 0 ||
        this.milliseconds !== 0) &&
        (t += "T"),
      this.hours !== 0 && (t += this.hours + "H"),
      this.minutes !== 0 && (t += this.minutes + "M"),
      (this.seconds !== 0 || this.milliseconds !== 0) &&
        (t += Vs(this.seconds + this.milliseconds / 1e3, 3) + "S"),
      t === "P" && (t += "T0S"),
      t
    );
  }
  toISOTime(t = {}) {
    if (!this.isValid) return null;
    const e = this.toMillis();
    if (e < 0 || e >= 864e5) return null;
    t = D(
      {
        suppressMilliseconds: !1,
        suppressSeconds: !1,
        includePrefix: !1,
        format: "extended",
      },
      t
    );
    const n = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let s = t.format === "basic" ? "hhmm" : "hh:mm";
    (!t.suppressSeconds || n.seconds !== 0 || n.milliseconds !== 0) &&
      ((s += t.format === "basic" ? "ss" : ":ss"),
      (!t.suppressMilliseconds || n.milliseconds !== 0) && (s += ".SSS"));
    let o = n.toFormat(s);
    return t.includePrefix && (o = "T" + o), o;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(t) {
    if (!this.isValid) return this;
    const e = R.fromDurationLike(t),
      n = {};
    for (const s of ae)
      (Ae(e.values, s) || Ae(this.values, s)) &&
        (n[s] = e.get(s) + this.get(s));
    return ne(this, { values: n }, !0);
  }
  minus(t) {
    if (!this.isValid) return this;
    const e = R.fromDurationLike(t);
    return this.plus(e.negate());
  }
  mapUnits(t) {
    if (!this.isValid) return this;
    const e = {};
    for (const n of Object.keys(this.values)) e[n] = Ml(t(this.values[n], n));
    return ne(this, { values: e }, !0);
  }
  get(t) {
    return this[R.normalizeUnit(t)];
  }
  set(t) {
    if (!this.isValid) return this;
    const e = D(D({}, this.values), un(t, R.normalizeUnit));
    return ne(this, { values: e });
  }
  reconfigure({ locale: t, numberingSystem: e, conversionAccuracy: n } = {}) {
    const s = this.loc.clone({ locale: t, numberingSystem: e }),
      o = { loc: s };
    return n && (o.conversionAccuracy = n), ne(this, o);
  }
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  normalize() {
    if (!this.isValid) return this;
    const t = this.toObject();
    return $m(this.matrix, t), ne(this, { values: t }, !0);
  }
  shiftTo(...t) {
    if (!this.isValid) return this;
    if (t.length === 0) return this;
    t = t.map((r) => R.normalizeUnit(r));
    const e = {},
      n = {},
      s = this.toObject();
    let o;
    for (const r of ae)
      if (t.indexOf(r) >= 0) {
        o = r;
        let a = 0;
        for (const c in n) (a += this.matrix[c][r] * n[c]), (n[c] = 0);
        fe(s[r]) && (a += s[r]);
        const l = Math.trunc(a);
        (e[r] = l), (n[r] = (a * 1e3 - l * 1e3) / 1e3);
        for (const c in s)
          ae.indexOf(c) > ae.indexOf(r) && Wl(this.matrix, s, c, e, r);
      } else fe(s[r]) && (n[r] = s[r]);
    for (const r in n)
      n[r] !== 0 && (e[o] += r === o ? n[r] : n[r] / this.matrix[o][r]);
    return ne(this, { values: e }, !0).normalize();
  }
  negate() {
    if (!this.isValid) return this;
    const t = {};
    for (const e of Object.keys(this.values)) t[e] = -this.values[e];
    return ne(this, { values: t }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;
    function e(n, s) {
      return n === void 0 || n === 0 ? s === void 0 || s === 0 : n === s;
    }
    for (const n of ae) if (!e(this.values[n], t.values[n])) return !1;
    return !0;
  }
}
const $e = "Invalid Interval";
function jm(i, t) {
  return !i || !i.isValid
    ? q.invalid("missing or invalid start")
    : !t || !t.isValid
    ? q.invalid("missing or invalid end")
    : t < i
    ? q.invalid(
        "end before start",
        `The end of an interval must be after its start, but you had start=${i.toISO()} and end=${t.toISO()}`
      )
    : null;
}
class q {
  constructor(t) {
    (this.s = t.start),
      (this.e = t.end),
      (this.invalid = t.invalid || null),
      (this.isLuxonInterval = !0);
  }
  static invalid(t, e = null) {
    if (!t) throw new yt("need to specify a reason the Interval is invalid");
    const n = t instanceof Mt ? t : new Mt(t, e);
    if (Q.throwOnInvalid) throw new bg(n);
    return new q({ invalid: n });
  }
  static fromDateTimes(t, e) {
    const n = Ye(t),
      s = Ye(e),
      o = jm(n, s);
    return o == null ? new q({ start: n, end: s }) : o;
  }
  static after(t, e) {
    const n = R.fromDurationLike(e),
      s = Ye(t);
    return q.fromDateTimes(s, s.plus(n));
  }
  static before(t, e) {
    const n = R.fromDurationLike(e),
      s = Ye(t);
    return q.fromDateTimes(s.minus(n), s);
  }
  static fromISO(t, e) {
    const [n, s] = (t || "").split("/", 2);
    if (n && s) {
      let o, r;
      try {
        (o = E.fromISO(n, e)), (r = o.isValid);
      } catch {
        r = !1;
      }
      let a, l;
      try {
        (a = E.fromISO(s, e)), (l = a.isValid);
      } catch {
        l = !1;
      }
      if (r && l) return q.fromDateTimes(o, a);
      if (r) {
        const c = R.fromISO(s, e);
        if (c.isValid) return q.after(o, c);
      } else if (l) {
        const c = R.fromISO(n, e);
        if (c.isValid) return q.before(a, c);
      }
    }
    return q.invalid(
      "unparsable",
      `the input "${t}" can't be parsed as ISO 8601`
    );
  }
  static isInterval(t) {
    return (t && t.isLuxonInterval) || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  count(t = "milliseconds") {
    if (!this.isValid) return NaN;
    const e = this.start.startOf(t),
      n = this.end.startOf(t);
    return Math.floor(n.diff(e, t).get(t)) + 1;
  }
  hasSame(t) {
    return this.isValid
      ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t)
      : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  set({ start: t, end: e } = {}) {
    return this.isValid ? q.fromDateTimes(t || this.s, e || this.e) : this;
  }
  splitAt(...t) {
    if (!this.isValid) return [];
    const e = t
        .map(Ye)
        .filter((r) => this.contains(r))
        .sort(),
      n = [];
    let { s } = this,
      o = 0;
    for (; s < this.e; ) {
      const r = e[o] || this.e,
        a = +r > +this.e ? this.e : r;
      n.push(q.fromDateTimes(s, a)), (s = a), (o += 1);
    }
    return n;
  }
  splitBy(t) {
    const e = R.fromDurationLike(t);
    if (!this.isValid || !e.isValid || e.as("milliseconds") === 0) return [];
    let { s: n } = this,
      s = 1,
      o;
    const r = [];
    for (; n < this.e; ) {
      const a = this.start.plus(e.mapUnits((l) => l * s));
      (o = +a > +this.e ? this.e : a),
        r.push(q.fromDateTimes(n, o)),
        (n = o),
        (s += 1);
    }
    return r;
  }
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  equals(t) {
    return !this.isValid || !t.isValid
      ? !1
      : this.s.equals(t.s) && this.e.equals(t.e);
  }
  intersection(t) {
    if (!this.isValid) return this;
    const e = this.s > t.s ? this.s : t.s,
      n = this.e < t.e ? this.e : t.e;
    return e >= n ? null : q.fromDateTimes(e, n);
  }
  union(t) {
    if (!this.isValid) return this;
    const e = this.s < t.s ? this.s : t.s,
      n = this.e > t.e ? this.e : t.e;
    return q.fromDateTimes(e, n);
  }
  static merge(t) {
    const [e, n] = t
      .sort((s, o) => s.s - o.s)
      .reduce(
        ([s, o], r) =>
          o
            ? o.overlaps(r) || o.abutsStart(r)
              ? [s, o.union(r)]
              : [s.concat([o]), r]
            : [s, r],
        [[], null]
      );
    return n && e.push(n), e;
  }
  static xor(t) {
    let e = null,
      n = 0;
    const s = [],
      o = t.map((l) => [
        { time: l.s, type: "s" },
        { time: l.e, type: "e" },
      ]),
      r = Array.prototype.concat(...o),
      a = r.sort((l, c) => l.time - c.time);
    for (const l of a)
      (n += l.type === "s" ? 1 : -1),
        n === 1
          ? (e = l.time)
          : (e && +e != +l.time && s.push(q.fromDateTimes(e, l.time)),
            (e = null));
    return q.merge(s);
  }
  difference(...t) {
    return q
      .xor([this].concat(t))
      .map((e) => this.intersection(e))
      .filter((e) => e && !e.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : $e;
  }
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : $e;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : $e;
  }
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : $e;
  }
  toFormat(t, { separator: e = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${e}${this.e.toFormat(t)}` : $e;
  }
  toDuration(t, e) {
    return this.isValid
      ? this.e.diff(this.s, t, e)
      : R.invalid(this.invalidReason);
  }
  mapEndpoints(t) {
    return q.fromDateTimes(t(this.s), t(this.e));
  }
}
class ji {
  static hasDST(t = Q.defaultZone) {
    const e = E.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset;
  }
  static isValidIANAZone(t) {
    return Dt.isValidSpecifier(t) && Dt.isValidZone(t);
  }
  static normalizeZone(t) {
    return Ht(t, Q.defaultZone);
  }
  static months(
    t = "long",
    {
      locale: e = null,
      numberingSystem: n = null,
      locObj: s = null,
      outputCalendar: o = "gregory",
    } = {}
  ) {
    return (s || Y.create(e, n, o)).months(t);
  }
  static monthsFormat(
    t = "long",
    {
      locale: e = null,
      numberingSystem: n = null,
      locObj: s = null,
      outputCalendar: o = "gregory",
    } = {}
  ) {
    return (s || Y.create(e, n, o)).months(t, !0);
  }
  static weekdays(
    t = "long",
    { locale: e = null, numberingSystem: n = null, locObj: s = null } = {}
  ) {
    return (s || Y.create(e, n, null)).weekdays(t);
  }
  static weekdaysFormat(
    t = "long",
    { locale: e = null, numberingSystem: n = null, locObj: s = null } = {}
  ) {
    return (s || Y.create(e, n, null)).weekdays(t, !0);
  }
  static meridiems({ locale: t = null } = {}) {
    return Y.create(t).meridiems();
  }
  static eras(t = "short", { locale: e = null } = {}) {
    return Y.create(e, null, "gregory").eras(t);
  }
  static features() {
    return { relative: vl() };
  }
}
function Fr(i, t) {
  const e = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
    n = e(t) - e(i);
  return Math.floor(R.fromMillis(n).as("days"));
}
function Um(i, t, e) {
  const n = [
      ["years", (a, l) => l.year - a.year],
      ["quarters", (a, l) => l.quarter - a.quarter],
      ["months", (a, l) => l.month - a.month + (l.year - a.year) * 12],
      [
        "weeks",
        (a, l) => {
          const c = Fr(a, l);
          return (c - (c % 7)) / 7;
        },
      ],
      ["days", Fr],
    ],
    s = {};
  let o, r;
  for (const [a, l] of n)
    if (e.indexOf(a) >= 0) {
      o = a;
      let c = l(i, t);
      (r = i.plus({ [a]: c })),
        r > t ? ((i = i.plus({ [a]: c - 1 })), (c -= 1)) : (i = r),
        (s[a] = c);
    }
  return [i, s, r, o];
}
function Ym(i, t, e, n) {
  let [s, o, r, a] = Um(i, t, e);
  const l = t - s,
    c = e.filter(
      (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
    );
  c.length === 0 &&
    (r < t && (r = s.plus({ [a]: 1 })),
    r !== s && (o[a] = (o[a] || 0) + l / (r - s)));
  const h = R.fromObject(o, n);
  return c.length > 0
    ? R.fromMillis(l, n)
        .shiftTo(...c)
        .plus(h)
    : h;
}
const Us = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec:
      "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d",
  },
  Rr = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  qm = Us.hanidec.replace(/[\[|\]]/g, "").split("");
function Zm(i) {
  let t = parseInt(i, 10);
  if (isNaN(t)) {
    t = "";
    for (let e = 0; e < i.length; e++) {
      const n = i.charCodeAt(e);
      if (i[e].search(Us.hanidec) !== -1) t += qm.indexOf(i[e]);
      else
        for (const s in Rr) {
          const [o, r] = Rr[s];
          n >= o && n <= r && (t += n - o);
        }
    }
    return parseInt(t, 10);
  } else return t;
}
function wt({ numberingSystem: i }, t = "") {
  return new RegExp(`${Us[i || "latn"]}${t}`);
}
const Xm = "missing Intl.DateTimeFormat.formatToParts support";
function z(i, t = (e) => e) {
  return { regex: i, deser: ([e]) => t(Zm(e)) };
}
const Gm = String.fromCharCode(160),
  Bl = `( |${Gm})`,
  Hl = new RegExp(Bl, "g");
function Km(i) {
  return i.replace(/\./g, "\\.?").replace(Hl, Bl);
}
function Nr(i) {
  return i.replace(/\./g, "").replace(Hl, " ").toLowerCase();
}
function vt(i, t) {
  return i === null
    ? null
    : {
        regex: RegExp(i.map(Km).join("|")),
        deser: ([e]) => i.findIndex((n) => Nr(e) === Nr(n)) + t,
      };
}
function zr(i, t) {
  return { regex: i, deser: ([, e, n]) => _n(e, n), groups: t };
}
function qn(i) {
  return { regex: i, deser: ([t]) => t };
}
function Jm(i) {
  return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Qm(i, t) {
  const e = wt(t),
    n = wt(t, "{2}"),
    s = wt(t, "{3}"),
    o = wt(t, "{4}"),
    r = wt(t, "{6}"),
    a = wt(t, "{1,2}"),
    l = wt(t, "{1,3}"),
    c = wt(t, "{1,6}"),
    h = wt(t, "{1,9}"),
    u = wt(t, "{2,4}"),
    d = wt(t, "{4,6}"),
    f = (p) => ({ regex: RegExp(Jm(p.val)), deser: ([b]) => b, literal: !0 }),
    m = ((p) => {
      if (i.literal) return f(p);
      switch (p.val) {
        case "G":
          return vt(t.eras("short", !1), 0);
        case "GG":
          return vt(t.eras("long", !1), 0);
        case "y":
          return z(c);
        case "yy":
          return z(u, fs);
        case "yyyy":
          return z(o);
        case "yyyyy":
          return z(d);
        case "yyyyyy":
          return z(r);
        case "M":
          return z(a);
        case "MM":
          return z(n);
        case "MMM":
          return vt(t.months("short", !0, !1), 1);
        case "MMMM":
          return vt(t.months("long", !0, !1), 1);
        case "L":
          return z(a);
        case "LL":
          return z(n);
        case "LLL":
          return vt(t.months("short", !1, !1), 1);
        case "LLLL":
          return vt(t.months("long", !1, !1), 1);
        case "d":
          return z(a);
        case "dd":
          return z(n);
        case "o":
          return z(l);
        case "ooo":
          return z(s);
        case "HH":
          return z(n);
        case "H":
          return z(a);
        case "hh":
          return z(n);
        case "h":
          return z(a);
        case "mm":
          return z(n);
        case "m":
          return z(a);
        case "q":
          return z(a);
        case "qq":
          return z(n);
        case "s":
          return z(a);
        case "ss":
          return z(n);
        case "S":
          return z(l);
        case "SSS":
          return z(s);
        case "u":
          return qn(h);
        case "uu":
          return qn(a);
        case "uuu":
          return z(e);
        case "a":
          return vt(t.meridiems(), 0);
        case "kkkk":
          return z(o);
        case "kk":
          return z(u, fs);
        case "W":
          return z(a);
        case "WW":
          return z(n);
        case "E":
        case "c":
          return z(e);
        case "EEE":
          return vt(t.weekdays("short", !1, !1), 1);
        case "EEEE":
          return vt(t.weekdays("long", !1, !1), 1);
        case "ccc":
          return vt(t.weekdays("short", !0, !1), 1);
        case "cccc":
          return vt(t.weekdays("long", !0, !1), 1);
        case "Z":
        case "ZZ":
          return zr(new RegExp(`([+-]${a.source})(?::(${n.source}))?`), 2);
        case "ZZZ":
          return zr(new RegExp(`([+-]${a.source})(${n.source})?`), 2);
        case "z":
          return qn(/[a-z_+-/]{1,256}?/i);
        default:
          return f(p);
      }
    })(i) || { invalidReason: Xm };
  return (m.token = i), m;
}
const tp = {
  year: { "2-digit": "yy", numeric: "yyyyy" },
  month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
  day: { numeric: "d", "2-digit": "dd" },
  weekday: { short: "EEE", long: "EEEE" },
  dayperiod: "a",
  dayPeriod: "a",
  hour: { numeric: "h", "2-digit": "hh" },
  minute: { numeric: "m", "2-digit": "mm" },
  second: { numeric: "s", "2-digit": "ss" },
};
function ep(i, t, e) {
  const { type: n, value: s } = i;
  if (n === "literal") return { literal: !0, val: s };
  const o = e[n];
  let r = tp[n];
  if ((typeof r == "object" && (r = r[o]), r)) return { literal: !1, val: r };
}
function ip(i) {
  return [
    `^${i.map((e) => e.regex).reduce((e, n) => `${e}(${n.source})`, "")}$`,
    i,
  ];
}
function np(i, t, e) {
  const n = i.match(t);
  if (n) {
    const s = {};
    let o = 1;
    for (const r in e)
      if (Ae(e, r)) {
        const a = e[r],
          l = a.groups ? a.groups + 1 : 1;
        !a.literal &&
          a.token &&
          (s[a.token.val[0]] = a.deser(n.slice(o, o + l))),
          (o += l);
      }
    return [n, s];
  } else return [n, {}];
}
function sp(i) {
  const t = (o) => {
    switch (o) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let e = null,
    n;
  return (
    F(i.z) || (e = Dt.create(i.z)),
    F(i.Z) || (e || (e = new at(i.Z)), (n = i.Z)),
    F(i.q) || (i.M = (i.q - 1) * 3 + 1),
    F(i.h) ||
      (i.h < 12 && i.a === 1
        ? (i.h += 12)
        : i.h === 12 && i.a === 0 && (i.h = 0)),
    i.G === 0 && i.y && (i.y = -i.y),
    F(i.u) || (i.S = zs(i.u)),
    [
      Object.keys(i).reduce((o, r) => {
        const a = t(r);
        return a && (o[a] = i[r]), o;
      }, {}),
      e,
      n,
    ]
  );
}
let Zn = null;
function op() {
  return Zn || (Zn = E.fromMillis(1555555555555)), Zn;
}
function rp(i, t) {
  if (i.literal) return i;
  const e = ht.macroTokenToFormatOpts(i.val);
  if (!e) return i;
  const o = ht
    .create(t, e)
    .formatDateTimeParts(op())
    .map((r) => ep(r, t, e));
  return o.includes(void 0) ? i : o;
}
function ap(i, t) {
  return Array.prototype.concat(...i.map((e) => rp(e, t)));
}
function $l(i, t, e) {
  const n = ap(ht.parseFormat(e), i),
    s = n.map((r) => Qm(r, i)),
    o = s.find((r) => r.invalidReason);
  if (o) return { input: t, tokens: n, invalidReason: o.invalidReason };
  {
    const [r, a] = ip(s),
      l = RegExp(r, "i"),
      [c, h] = np(t, l, a),
      [u, d, f] = h ? sp(h) : [null, null, void 0];
    if (Ae(h, "a") && Ae(h, "H"))
      throw new Qe("Can't include meridiem when specifying 24-hour format");
    return {
      input: t,
      tokens: n,
      regex: l,
      rawMatches: c,
      matches: h,
      result: u,
      zone: d,
      specificOffset: f,
    };
  }
}
function lp(i, t, e) {
  const {
    result: n,
    zone: s,
    specificOffset: o,
    invalidReason: r,
  } = $l(i, t, e);
  return [n, s, o, r];
}
const jl = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  Ul = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function xt(i, t) {
  return new Mt(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${i}, which is invalid`
  );
}
function Yl(i, t, e) {
  const n = new Date(Date.UTC(i, t - 1, e)).getUTCDay();
  return n === 0 ? 7 : n;
}
function ql(i, t, e) {
  return e + (_i(i) ? Ul : jl)[t - 1];
}
function Zl(i, t) {
  const e = _i(i) ? Ul : jl,
    n = e.findIndex((o) => o < t),
    s = t - e[n];
  return { month: n + 1, day: s };
}
function ys(i) {
  const { year: t, month: e, day: n } = i,
    s = ql(t, e, n),
    o = Yl(t, e, n);
  let r = Math.floor((s - o + 10) / 7),
    a;
  return (
    r < 1
      ? ((a = t - 1), (r = hn(a)))
      : r > hn(t)
      ? ((a = t + 1), (r = 1))
      : (a = t),
    D({ weekYear: a, weekNumber: r, weekday: o }, wn(i))
  );
}
function Vr(i) {
  const { weekYear: t, weekNumber: e, weekday: n } = i,
    s = Yl(t, 1, 4),
    o = ri(t);
  let r = e * 7 + n - s - 3,
    a;
  r < 1
    ? ((a = t - 1), (r += ri(a)))
    : r > o
    ? ((a = t + 1), (r -= ri(t)))
    : (a = t);
  const { month: l, day: c } = Zl(a, r);
  return D({ year: a, month: l, day: c }, wn(i));
}
function Xn(i) {
  const { year: t, month: e, day: n } = i,
    s = ql(t, e, n);
  return D({ year: t, ordinal: s }, wn(i));
}
function Wr(i) {
  const { year: t, ordinal: e } = i,
    { month: n, day: s } = Zl(t, e);
  return D({ year: t, month: n, day: s }, wn(i));
}
function cp(i) {
  const t = xn(i.weekYear),
    e = Vt(i.weekNumber, 1, hn(i.weekYear)),
    n = Vt(i.weekday, 1, 7);
  return t
    ? e
      ? n
        ? !1
        : xt("weekday", i.weekday)
      : xt("week", i.week)
    : xt("weekYear", i.weekYear);
}
function hp(i) {
  const t = xn(i.year),
    e = Vt(i.ordinal, 1, ri(i.year));
  return t ? (e ? !1 : xt("ordinal", i.ordinal)) : xt("year", i.year);
}
function Xl(i) {
  const t = xn(i.year),
    e = Vt(i.month, 1, 12),
    n = Vt(i.day, 1, cn(i.year, i.month));
  return t
    ? e
      ? n
        ? !1
        : xt("day", i.day)
      : xt("month", i.month)
    : xt("year", i.year);
}
function Gl(i) {
  const { hour: t, minute: e, second: n, millisecond: s } = i,
    o = Vt(t, 0, 23) || (t === 24 && e === 0 && n === 0 && s === 0),
    r = Vt(e, 0, 59),
    a = Vt(n, 0, 59),
    l = Vt(s, 0, 999);
  return o
    ? r
      ? a
        ? l
          ? !1
          : xt("millisecond", s)
        : xt("second", n)
      : xt("minute", e)
    : xt("hour", t);
}
const Gn = "Invalid DateTime",
  Br = 864e13;
function Ui(i) {
  return new Mt("unsupported zone", `the zone "${i.name}" is not supported`);
}
function Kn(i) {
  return i.weekData === null && (i.weekData = ys(i.c)), i.weekData;
}
function je(i, t) {
  const e = {
    ts: i.ts,
    zone: i.zone,
    c: i.c,
    o: i.o,
    loc: i.loc,
    invalid: i.invalid,
  };
  return new E(dt(D(D({}, e), t), { old: e }));
}
function Kl(i, t, e) {
  let n = i - t * 60 * 1e3;
  const s = e.offset(n);
  if (t === s) return [n, t];
  n -= (s - t) * 60 * 1e3;
  const o = e.offset(n);
  return s === o ? [n, s] : [i - Math.min(s, o) * 60 * 1e3, Math.max(s, o)];
}
function Hr(i, t) {
  i += t * 60 * 1e3;
  const e = new Date(i);
  return {
    year: e.getUTCFullYear(),
    month: e.getUTCMonth() + 1,
    day: e.getUTCDate(),
    hour: e.getUTCHours(),
    minute: e.getUTCMinutes(),
    second: e.getUTCSeconds(),
    millisecond: e.getUTCMilliseconds(),
  };
}
function Ji(i, t, e) {
  return Kl(Ws(i), t, e);
}
function $r(i, t) {
  const e = i.o,
    n = i.c.year + Math.trunc(t.years),
    s = i.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
    o = dt(D({}, i.c), {
      year: n,
      month: s,
      day:
        Math.min(i.c.day, cn(n, s)) +
        Math.trunc(t.days) +
        Math.trunc(t.weeks) * 7,
    }),
    r = R.fromObject({
      years: t.years - Math.trunc(t.years),
      quarters: t.quarters - Math.trunc(t.quarters),
      months: t.months - Math.trunc(t.months),
      weeks: t.weeks - Math.trunc(t.weeks),
      days: t.days - Math.trunc(t.days),
      hours: t.hours,
      minutes: t.minutes,
      seconds: t.seconds,
      milliseconds: t.milliseconds,
    }).as("milliseconds"),
    a = Ws(o);
  let [l, c] = Kl(a, e, i.zone);
  return r !== 0 && ((l += r), (c = i.zone.offset(l))), { ts: l, o: c };
}
function Ue(i, t, e, n, s, o) {
  const { setZone: r, zone: a } = e;
  if (i && Object.keys(i).length !== 0) {
    const l = t || a,
      c = E.fromObject(i, dt(D({}, e), { zone: l, specificOffset: o }));
    return r ? c : c.setZone(a);
  } else
    return E.invalid(
      new Mt("unparsable", `the input "${s}" can't be parsed as ${n}`)
    );
}
function Yi(i, t, e = !0) {
  return i.isValid
    ? ht
        .create(Y.create("en-US"), { allowZ: e, forceSimple: !0 })
        .formatDateTimeFromString(i, t)
    : null;
}
function Jn(i, t) {
  const e = i.c.year > 9999 || i.c.year < 0;
  let n = "";
  return (
    e && i.c.year >= 0 && (n += "+"),
    (n += J(i.c.year, e ? 6 : 4)),
    t
      ? ((n += "-"), (n += J(i.c.month)), (n += "-"), (n += J(i.c.day)))
      : ((n += J(i.c.month)), (n += J(i.c.day))),
    n
  );
}
function jr(i, t, e, n, s) {
  let o = J(i.c.hour);
  return (
    t
      ? ((o += ":"),
        (o += J(i.c.minute)),
        (i.c.second !== 0 || !e) && (o += ":"))
      : (o += J(i.c.minute)),
    (i.c.second !== 0 || !e) &&
      ((o += J(i.c.second)),
      (i.c.millisecond !== 0 || !n) &&
        ((o += "."), (o += J(i.c.millisecond, 3)))),
    s &&
      (i.isOffsetFixed && i.offset === 0
        ? (o += "Z")
        : i.o < 0
        ? ((o += "-"),
          (o += J(Math.trunc(-i.o / 60))),
          (o += ":"),
          (o += J(Math.trunc(-i.o % 60))))
        : ((o += "+"),
          (o += J(Math.trunc(i.o / 60))),
          (o += ":"),
          (o += J(Math.trunc(i.o % 60))))),
    o
  );
}
const Jl = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  up = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  dp = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  Ql = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  fp = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  gp = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ur(i) {
  const t = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[i.toLowerCase()];
  if (!t) throw new il(i);
  return t;
}
function Yr(i, t) {
  const e = Ht(t.zone, Q.defaultZone),
    n = Y.fromObject(t),
    s = Q.now();
  let o, r;
  if (F(i.year)) o = s;
  else {
    for (const c of Ql) F(i[c]) && (i[c] = Jl[c]);
    const a = Xl(i) || Gl(i);
    if (a) return E.invalid(a);
    const l = e.offset(s);
    [o, r] = Ji(i, l, e);
  }
  return new E({ ts: o, zone: e, loc: n, o: r });
}
function qr(i, t, e) {
  const n = F(e.round) ? !0 : e.round,
    s = (r, a) => (
      (r = Vs(r, n || e.calendary ? 0 : 2, !0)),
      t.loc.clone(e).relFormatter(e).format(r, a)
    ),
    o = (r) =>
      e.calendary
        ? t.hasSame(i, r)
          ? 0
          : t.startOf(r).diff(i.startOf(r), r).get(r)
        : t.diff(i, r).get(r);
  if (e.unit) return s(o(e.unit), e.unit);
  for (const r of e.units) {
    const a = o(r);
    if (Math.abs(a) >= 1) return s(a, r);
  }
  return s(i > t ? -0 : 0, e.units[e.units.length - 1]);
}
function Zr(i) {
  let t = {},
    e;
  return (
    i.length > 0 && typeof i[i.length - 1] == "object"
      ? ((t = i[i.length - 1]), (e = Array.from(i).slice(0, i.length - 1)))
      : (e = Array.from(i)),
    [t, e]
  );
}
class E {
  constructor(t) {
    const e = t.zone || Q.defaultZone;
    let n =
      t.invalid ||
      (Number.isNaN(t.ts) ? new Mt("invalid input") : null) ||
      (e.isValid ? null : Ui(e));
    this.ts = F(t.ts) ? Q.now() : t.ts;
    let s = null,
      o = null;
    if (!n)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(e))
        [s, o] = [t.old.c, t.old.o];
      else {
        const a = e.offset(this.ts);
        (s = Hr(this.ts, a)),
          (n = Number.isNaN(s.year) ? new Mt("invalid input") : null),
          (s = n ? null : s),
          (o = n ? null : a);
      }
    (this._zone = e),
      (this.loc = t.loc || Y.create()),
      (this.invalid = n),
      (this.weekData = null),
      (this.c = s),
      (this.o = o),
      (this.isLuxonDateTime = !0);
  }
  static now() {
    return new E({});
  }
  static local() {
    const [t, e] = Zr(arguments),
      [n, s, o, r, a, l, c] = e;
    return Yr(
      {
        year: n,
        month: s,
        day: o,
        hour: r,
        minute: a,
        second: l,
        millisecond: c,
      },
      t
    );
  }
  static utc() {
    const [t, e] = Zr(arguments),
      [n, s, o, r, a, l, c] = e;
    return (
      (t.zone = at.utcInstance),
      Yr(
        {
          year: n,
          month: s,
          day: o,
          hour: r,
          minute: a,
          second: l,
          millisecond: c,
        },
        t
      )
    );
  }
  static fromJSDate(t, e = {}) {
    const n = vg(t) ? t.valueOf() : NaN;
    if (Number.isNaN(n)) return E.invalid("invalid input");
    const s = Ht(e.zone, Q.defaultZone);
    return s.isValid
      ? new E({ ts: n, zone: s, loc: Y.fromObject(e) })
      : E.invalid(Ui(s));
  }
  static fromMillis(t, e = {}) {
    if (fe(t))
      return t < -Br || t > Br
        ? E.invalid("Timestamp out of range")
        : new E({
            ts: t,
            zone: Ht(e.zone, Q.defaultZone),
            loc: Y.fromObject(e),
          });
    throw new yt(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`
    );
  }
  static fromSeconds(t, e = {}) {
    if (fe(t))
      return new E({
        ts: t * 1e3,
        zone: Ht(e.zone, Q.defaultZone),
        loc: Y.fromObject(e),
      });
    throw new yt("fromSeconds requires a numerical input");
  }
  static fromObject(t, e = {}) {
    t = t || {};
    const n = Ht(e.zone, Q.defaultZone);
    if (!n.isValid) return E.invalid(Ui(n));
    const s = Q.now(),
      o = F(e.specificOffset) ? n.offset(s) : e.specificOffset,
      r = un(t, Ur),
      a = !F(r.ordinal),
      l = !F(r.year),
      c = !F(r.month) || !F(r.day),
      h = l || c,
      u = r.weekYear || r.weekNumber,
      d = Y.fromObject(e);
    if ((h || a) && u)
      throw new Qe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (c && a) throw new Qe("Can't mix ordinal dates with month/day");
    const f = u || (r.weekday && !h);
    let g,
      m,
      p = Hr(s, o);
    f
      ? ((g = fp), (m = up), (p = ys(p)))
      : a
      ? ((g = gp), (m = dp), (p = Xn(p)))
      : ((g = Ql), (m = Jl));
    let b = !1;
    for (const M of g) {
      const T = r[M];
      F(T) ? (b ? (r[M] = m[M]) : (r[M] = p[M])) : (b = !0);
    }
    const y = f ? cp(r) : a ? hp(r) : Xl(r),
      _ = y || Gl(r);
    if (_) return E.invalid(_);
    const w = f ? Vr(r) : a ? Wr(r) : r,
      [x, k] = Ji(w, o, n),
      S = new E({ ts: x, zone: n, o: k, loc: d });
    return r.weekday && h && t.weekday !== S.weekday
      ? E.invalid(
          "mismatched weekday",
          `you can't specify both a weekday of ${
            r.weekday
          } and a date of ${S.toISO()}`
        )
      : S;
  }
  static fromISO(t, e = {}) {
    const [n, s] = Tm(t);
    return Ue(n, s, e, "ISO 8601", t);
  }
  static fromRFC2822(t, e = {}) {
    const [n, s] = Dm(t);
    return Ue(n, s, e, "RFC 2822", t);
  }
  static fromHTTP(t, e = {}) {
    const [n, s] = Em(t);
    return Ue(n, s, e, "HTTP", e);
  }
  static fromFormat(t, e, n = {}) {
    if (F(t) || F(e))
      throw new yt("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: o = null } = n,
      r = Y.fromOpts({ locale: s, numberingSystem: o, defaultToEN: !0 }),
      [a, l, c, h] = lp(r, t, e);
    return h ? E.invalid(h) : Ue(a, l, n, `format ${e}`, t, c);
  }
  static fromString(t, e, n = {}) {
    return E.fromFormat(t, e, n);
  }
  static fromSQL(t, e = {}) {
    const [n, s] = Nm(t);
    return Ue(n, s, e, "SQL", t);
  }
  static invalid(t, e = null) {
    if (!t) throw new yt("need to specify a reason the DateTime is invalid");
    const n = t instanceof Mt ? t : new Mt(t, e);
    if (Q.throwOnInvalid) throw new pg(n);
    return new E({ invalid: n });
  }
  static isDateTime(t) {
    return (t && t.isLuxonDateTime) || !1;
  }
  get(t) {
    return this[t];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? Kn(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Kn(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Kn(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? Xn(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid
      ? ji.months("short", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get monthLong() {
    return this.isValid
      ? ji.months("long", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get weekdayShort() {
    return this.isValid
      ? ji.weekdays("short", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get weekdayLong() {
    return this.isValid
      ? ji.weekdays("long", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale })
      : null;
  }
  get offsetNameLong() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale })
      : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed
      ? !1
      : this.offset > this.set({ month: 1 }).offset ||
          this.offset > this.set({ month: 5 }).offset;
  }
  get isInLeapYear() {
    return _i(this.year);
  }
  get daysInMonth() {
    return cn(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? ri(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? hn(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(t = {}) {
    const {
      locale: e,
      numberingSystem: n,
      calendar: s,
    } = ht.create(this.loc.clone(t), t).resolvedOptions(this);
    return { locale: e, numberingSystem: n, outputCalendar: s };
  }
  toUTC(t = 0, e = {}) {
    return this.setZone(at.instance(t), e);
  }
  toLocal() {
    return this.setZone(Q.defaultZone);
  }
  setZone(t, { keepLocalTime: e = !1, keepCalendarTime: n = !1 } = {}) {
    if (((t = Ht(t, Q.defaultZone)), t.equals(this.zone))) return this;
    if (t.isValid) {
      let s = this.ts;
      if (e || n) {
        const o = t.offset(this.ts),
          r = this.toObject();
        [s] = Ji(r, o, t);
      }
      return je(this, { ts: s, zone: t });
    } else return E.invalid(Ui(t));
  }
  reconfigure({ locale: t, numberingSystem: e, outputCalendar: n } = {}) {
    const s = this.loc.clone({
      locale: t,
      numberingSystem: e,
      outputCalendar: n,
    });
    return je(this, { loc: s });
  }
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  set(t) {
    if (!this.isValid) return this;
    const e = un(t, Ur),
      n = !F(e.weekYear) || !F(e.weekNumber) || !F(e.weekday),
      s = !F(e.ordinal),
      o = !F(e.year),
      r = !F(e.month) || !F(e.day),
      a = o || r,
      l = e.weekYear || e.weekNumber;
    if ((a || s) && l)
      throw new Qe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (r && s) throw new Qe("Can't mix ordinal dates with month/day");
    let c;
    n
      ? (c = Vr(D(D({}, ys(this.c)), e)))
      : F(e.ordinal)
      ? ((c = D(D({}, this.toObject()), e)),
        F(e.day) && (c.day = Math.min(cn(c.year, c.month), c.day)))
      : (c = Wr(D(D({}, Xn(this.c)), e)));
    const [h, u] = Ji(c, this.o, this.zone);
    return je(this, { ts: h, o: u });
  }
  plus(t) {
    if (!this.isValid) return this;
    const e = R.fromDurationLike(t);
    return je(this, $r(this, e));
  }
  minus(t) {
    if (!this.isValid) return this;
    const e = R.fromDurationLike(t).negate();
    return je(this, $r(this, e));
  }
  startOf(t) {
    if (!this.isValid) return this;
    const e = {},
      n = R.normalizeUnit(t);
    switch (n) {
      case "years":
        e.month = 1;
      case "quarters":
      case "months":
        e.day = 1;
      case "weeks":
      case "days":
        e.hour = 0;
      case "hours":
        e.minute = 0;
      case "minutes":
        e.second = 0;
      case "seconds":
        e.millisecond = 0;
        break;
    }
    if ((n === "weeks" && (e.weekday = 1), n === "quarters")) {
      const s = Math.ceil(this.month / 3);
      e.month = (s - 1) * 3 + 1;
    }
    return this.set(e);
  }
  endOf(t) {
    return this.isValid
      ? this.plus({ [t]: 1 })
          .startOf(t)
          .minus(1)
      : this;
  }
  toFormat(t, e = {}) {
    return this.isValid
      ? ht.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this, t)
      : Gn;
  }
  toLocaleString(t = ds, e = {}) {
    return this.isValid
      ? ht.create(this.loc.clone(e), t).formatDateTime(this)
      : Gn;
  }
  toLocaleParts(t = {}) {
    return this.isValid
      ? ht.create(this.loc.clone(t), t).formatDateTimeParts(this)
      : [];
  }
  toISO({
    format: t = "extended",
    suppressSeconds: e = !1,
    suppressMilliseconds: n = !1,
    includeOffset: s = !0,
  } = {}) {
    if (!this.isValid) return null;
    const o = t === "extended";
    let r = Jn(this, o);
    return (r += "T"), (r += jr(this, o, e, n, s)), r;
  }
  toISODate({ format: t = "extended" } = {}) {
    return this.isValid ? Jn(this, t === "extended") : null;
  }
  toISOWeekDate() {
    return Yi(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: t = !1,
    suppressSeconds: e = !1,
    includeOffset: n = !0,
    includePrefix: s = !1,
    format: o = "extended",
  } = {}) {
    return this.isValid
      ? (s ? "T" : "") + jr(this, o === "extended", e, t, n)
      : null;
  }
  toRFC2822() {
    return Yi(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return Yi(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Jn(this, !0) : null;
  }
  toSQLTime({ includeOffset: t = !0, includeZone: e = !1 } = {}) {
    let n = "HH:mm:ss.SSS";
    return (
      (e || t) && ((n += " "), e ? (n += "z") : t && (n += "ZZ")),
      Yi(this, n, !0)
    );
  }
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Gn;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(t = {}) {
    if (!this.isValid) return {};
    const e = D({}, this.c);
    return (
      t.includeConfig &&
        ((e.outputCalendar = this.outputCalendar),
        (e.numberingSystem = this.loc.numberingSystem),
        (e.locale = this.loc.locale)),
      e
    );
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(t, e = "milliseconds", n = {}) {
    if (!this.isValid || !t.isValid)
      return R.invalid("created by diffing an invalid DateTime");
    const s = D(
        { locale: this.locale, numberingSystem: this.numberingSystem },
        n
      ),
      o = Sg(e).map(R.normalizeUnit),
      r = t.valueOf() > this.valueOf(),
      a = r ? this : t,
      l = r ? t : this,
      c = Ym(a, l, o, s);
    return r ? c.negate() : c;
  }
  diffNow(t = "milliseconds", e = {}) {
    return this.diff(E.now(), t, e);
  }
  until(t) {
    return this.isValid ? q.fromDateTimes(this, t) : this;
  }
  hasSame(t, e) {
    if (!this.isValid) return !1;
    const n = t.valueOf(),
      s = this.setZone(t.zone, { keepLocalTime: !0 });
    return s.startOf(e) <= n && n <= s.endOf(e);
  }
  equals(t) {
    return (
      this.isValid &&
      t.isValid &&
      this.valueOf() === t.valueOf() &&
      this.zone.equals(t.zone) &&
      this.loc.equals(t.loc)
    );
  }
  toRelative(t = {}) {
    if (!this.isValid) return null;
    const e = t.base || E.fromObject({}, { zone: this.zone }),
      n = t.padding ? (this < e ? -t.padding : t.padding) : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"],
      o = t.unit;
    return (
      Array.isArray(t.unit) && ((s = t.unit), (o = void 0)),
      qr(
        e,
        this.plus(n),
        dt(D({}, t), { numeric: "always", units: s, unit: o })
      )
    );
  }
  toRelativeCalendar(t = {}) {
    return this.isValid
      ? qr(
          t.base || E.fromObject({}, { zone: this.zone }),
          this,
          dt(D({}, t), {
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: !0,
          })
        )
      : null;
  }
  static min(...t) {
    if (!t.every(E.isDateTime))
      throw new yt("min requires all arguments be DateTimes");
    return Mr(t, (e) => e.valueOf(), Math.min);
  }
  static max(...t) {
    if (!t.every(E.isDateTime))
      throw new yt("max requires all arguments be DateTimes");
    return Mr(t, (e) => e.valueOf(), Math.max);
  }
  static fromFormatExplain(t, e, n = {}) {
    const { locale: s = null, numberingSystem: o = null } = n,
      r = Y.fromOpts({ locale: s, numberingSystem: o, defaultToEN: !0 });
    return $l(r, t, e);
  }
  static fromStringExplain(t, e, n = {}) {
    return E.fromFormatExplain(t, e, n);
  }
  static get DATE_SHORT() {
    return ds;
  }
  static get DATE_MED() {
    return nl;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return xg;
  }
  static get DATE_FULL() {
    return sl;
  }
  static get DATE_HUGE() {
    return ol;
  }
  static get TIME_SIMPLE() {
    return rl;
  }
  static get TIME_WITH_SECONDS() {
    return al;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return ll;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return cl;
  }
  static get TIME_24_SIMPLE() {
    return hl;
  }
  static get TIME_24_WITH_SECONDS() {
    return ul;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return dl;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return fl;
  }
  static get DATETIME_SHORT() {
    return gl;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return ml;
  }
  static get DATETIME_MED() {
    return pl;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return bl;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return _g;
  }
  static get DATETIME_FULL() {
    return yl;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return xl;
  }
  static get DATETIME_HUGE() {
    return _l;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return wl;
  }
}
function Ye(i) {
  if (E.isDateTime(i)) return i;
  if (i && i.valueOf && fe(i.valueOf())) return E.fromJSDate(i);
  if (i && typeof i == "object") return E.fromObject(i);
  throw new yt(`Unknown datetime argument: ${i}, of type ${typeof i}`);
}
/*!
 * chartjs-adapter-luxon v1.1.0
 * https://www.chartjs.org
 * (c) 2021 chartjs-adapter-luxon Contributors
 * Released under the MIT license
 */ const mp = {
  datetime: E.DATETIME_MED_WITH_SECONDS,
  millisecond: "h:mm:ss.SSS a",
  second: E.TIME_WITH_SECONDS,
  minute: E.TIME_SIMPLE,
  hour: { hour: "numeric" },
  day: { day: "numeric", month: "short" },
  week: "DD",
  month: { month: "short", year: "numeric" },
  quarter: "'Q'q - yyyy",
  year: { year: "numeric" },
};
Na._date.override({
  _id: "luxon",
  _create: function (i) {
    return E.fromMillis(i, this.options);
  },
  formats: function () {
    return mp;
  },
  parse: function (i, t) {
    const e = this.options;
    if (i === null || typeof i == "undefined") return null;
    const n = typeof i;
    return (
      n === "number"
        ? (i = this._create(i))
        : n === "string"
        ? typeof t == "string"
          ? (i = E.fromFormat(i, t, e))
          : (i = E.fromISO(i, e))
        : i instanceof Date
        ? (i = E.fromJSDate(i, e))
        : n === "object" && !(i instanceof E) && (i = E.fromObject(i)),
      i.isValid ? i.valueOf() : null
    );
  },
  format: function (i, t) {
    const e = this._create(i);
    return typeof t == "string"
      ? e.toFormat(t, this.options)
      : e.toLocaleString(t);
  },
  add: function (i, t, e) {
    const n = {};
    return (n[e] = t), this._create(i).plus(n).valueOf();
  },
  diff: function (i, t, e) {
    return this._create(i).diff(this._create(t)).as(e).valueOf();
  },
  startOf: function (i, t, e) {
    if (t === "isoWeek") {
      e = Math.trunc(Math.min(Math.max(0, e), 6));
      const n = this._create(i);
      return n
        .minus({ days: (n.weekday - e + 7) % 7 })
        .startOf("day")
        .valueOf();
    }
    return t ? this._create(i).startOf(t).valueOf() : i;
  },
  endOf: function (i, t) {
    return this._create(i).endOf(t).valueOf();
  },
});
function cb(i) {
  const t = i - 1;
  return t * t * t + 1;
}
function Xr(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function xs(i, t) {
  if (i === t || i !== i) return () => i;
  const e = typeof i;
  if (e !== typeof t || Array.isArray(i) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(i)) {
    const n = t.map((s, o) => xs(i[o], s));
    return (s) => n.map((o) => o(s));
  }
  if (e === "object") {
    if (!i || !t) throw new Error("Object cannot be null");
    if (Xr(i) && Xr(t)) {
      (i = i.getTime()), (t = t.getTime());
      const o = t - i;
      return (r) => new Date(i + r * o);
    }
    const n = Object.keys(t),
      s = {};
    return (
      n.forEach((o) => {
        s[o] = xs(i[o], t[o]);
      }),
      (o) => {
        const r = {};
        return (
          n.forEach((a) => {
            r[a] = s[a](o);
          }),
          r
        );
      }
    );
  }
  if (e === "number") {
    const n = t - i;
    return (s) => i + s * n;
  }
  throw new Error(`Cannot interpolate ${e} values`);
}
function hb(i, t = {}) {
  const e = Tc(i);
  let n,
    s = i;
  function o(r, a) {
    if (i == null) return e.set((i = r)), Promise.resolve();
    s = r;
    let l = n,
      c = !1,
      {
        delay: h = 0,
        duration: u = 400,
        easing: d = nc,
        interpolate: f = xs,
      } = Qn(Qn({}, t), a);
    if (u === 0)
      return l && (l.abort(), (l = null)), e.set((i = s)), Promise.resolve();
    const g = lc() + h;
    let m;
    return (
      (n = cc((p) => {
        if (p < g) return !0;
        c || ((m = f(i, r)), typeof u == "function" && (u = u(i, r)), (c = !0)),
          l && (l.abort(), (l = null));
        const b = p - g;
        return b > u ? (e.set((i = r)), !1) : (e.set((i = m(d(b / u)))), !0);
      })),
      n.promise
    );
  }
  return { set: o, update: (r, a) => o(r(s, i), a), subscribe: e.subscribe };
}
export {
  Ge as $,
  Kp as A,
  kc as B,
  Qn as C,
  Tc as D,
  Yp as E,
  bc as F,
  Ap as G,
  gc as H,
  he as I,
  Fp as J,
  Tp as K,
  Ep as L,
  mi as M,
  Mp as N,
  yp as O,
  xp as P,
  wp as Q,
  vp as R,
  eb as S,
  _p as T,
  re as U,
  Ni as V,
  ce as W,
  $n as X,
  Wn as Y,
  Pn as Z,
  An as _,
  yc as a,
  In as a0,
  Co as a1,
  Ln as a2,
  Fn as a3,
  Rn as a4,
  ur as a5,
  fr as a6,
  pr as a7,
  Wi as a8,
  ln as a9,
  Sr as aa,
  nb as ab,
  sb as ac,
  ob as ad,
  rb as ae,
  lb as af,
  ab as ag,
  ib as ah,
  Up as ai,
  jp as aj,
  hb as ak,
  cb as al,
  Xs as am,
  bp as an,
  E as ao,
  Vp as ap,
  Hp as aq,
  es as ar,
  Np as as,
  Dp as at,
  zp as au,
  Cp as b,
  Pp as c,
  mc as d,
  pc as e,
  Rp as f,
  Sp as g,
  _c as h,
  tb as i,
  Lp as j,
  kp as k,
  Op as l,
  Ip as m,
  qp as n,
  Xp as o,
  Zp as p,
  Sc as q,
  $p as r,
  oc as s,
  _s as t,
  Bp as u,
  Wp as v,
  Jp as w,
  Qp as x,
  Mc as y,
  Gp as z,
};
