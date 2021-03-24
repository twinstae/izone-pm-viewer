(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // dist/build/_fallback-c3ce2b1a.js
  var require_fallback_c3ce2b1a = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_c3ce2b1a_default
    });
    const main2 = __toModule(require_main());
    function v(s2) {
      let a3, e2, d2, f2, v2, g2, h, m;
      return {c() {
        a3 = main2.e("div"), e2 = main2.e("div"), e2.textContent = "404", d2 = main2.a(), f2 = main2.e("div"), v2 = main2.t("Page not found. \n  \n  "), g2 = main2.e("a"), h = main2.t("Go back"), main2.b(e2, "class", "huge svelte-zz1yq2"), main2.b(g2, "href", m = s2[0]("../")), main2.b(f2, "class", "big"), main2.b(a3, "class", "e404 svelte-zz1yq2");
      }, m(s3, t3) {
        main2.c(s3, a3, t3), main2.d(a3, e2), main2.d(a3, d2), main2.d(a3, f2), main2.d(f2, v2), main2.d(f2, g2), main2.d(g2, h);
      }, p(s3, [a4]) {
        1 & a4 && m !== (m = s3[0]("../")) && main2.b(g2, "href", m);
      }, i: main2.n, o: main2.n, d(s3) {
        s3 && main2.f(a3);
      }};
    }
    function g(s2, a3, e2) {
      let t3;
      return main2.g(s2, main2.u, (s3) => e2(0, t3 = s3)), [t3];
    }
    class fallback_c3ce2b1a_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, g, v, main2.s, {});
      }
    }
  });

  // dist/build/index-37e38a34.js
  var require_index_37e38a34 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_37e38a34_default
    });
    const main2 = __toModule(require_main());
    function S(e2) {
      let t3, n2, r2, m2, g2;
      return {c() {
        t3 = main2.e("li"), n2 = main2.e("img"), main2.h(n2, "max-height", e2[2] + "px"), main2.h(n2, "max-width", e2[3] + "px"), n2.src !== (r2 = `/img/mail/${e2[0].n}/${e2[0].date.replace(/-/g, "")}/${e2[0].name}`) && main2.b(n2, "src", r2), main2.b(n2, "alt", ""), main2.h(t3, "max-height", k + "px"), main2.h(t3, "max-width", k + "px"), main2.h(t3, "overflow", "hidden"), main2.b(t3, "class", "m-2 shadow-lg border-white border-8 rounded");
      }, m(a3, c2) {
        main2.c(a3, t3, c2), main2.d(t3, n2), e2[4](n2), g2 = true;
      }, p(e3, [t4]) {
        (!g2 || 4 & t4) && main2.h(n2, "max-height", e3[2] + "px"), (!g2 || 8 & t4) && main2.h(n2, "max-width", e3[3] + "px"), (!g2 || 1 & t4 && n2.src !== (r2 = `/img/mail/${e3[0].n}/${e3[0].date.replace(/-/g, "")}/${e3[0].name}`)) && main2.b(n2, "src", r2);
      }, i(e3) {
        g2 || (main2.j(() => {
          m2 || (m2 = main2.k(t3, a, {duration: 1e3}, true)), m2.run(1);
        }), g2 = true);
      }, o(e3) {
        m2 || (m2 = main2.k(t3, a, {duration: 1e3}, false)), m2.run(0), g2 = false;
      }, d(n3) {
        n3 && main2.f(t3), e2[4](null), n3 && m2 && m2.end();
      }};
    }
    const k = 250;
    function q(e2, t3, n2) {
      let a3, {image: c2} = t3, l2 = 1.25 * k, s2 = 1.25 * k, o2 = false;
      return main2.l(() => {
        setTimeout(() => {
          if (a3 && !o2) {
            const e3 = a3.width > a3.height;
            n2(2, l2 = k * (e3 ? 1 : 1.25)), n2(3, s2 = k * (e3 ? 1.25 : 1)), o2 = true;
          }
        }, 200);
      }), e2.$$set = (e3) => {
        "image" in e3 && n2(0, c2 = e3.image);
      }, [c2, a3, l2, s2, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          a3 = e3, n2(1, a3);
        });
      }];
    }
    class A extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, q, S, main2.s, {image: 0});
      }
    }
    const {setTimeout: C} = main2.C;
    function D(e2, t3, n2) {
      const a3 = e2.slice();
      return a3[15] = t3[n2], a3;
    }
    function X(e2, t3, n2) {
      const a3 = e2.slice();
      return a3[18] = t3[n2], a3;
    }
    function Y(e2) {
      let t3, n2;
      return t3 = new A({props: {image: e2[18]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, a3) {
        main2.r(t3, e3, a3), n2 = true;
      }, p(e3, n3) {
        const a3 = {};
        24 & n3 && (a3.image = e3[18]), t3.$set(a3);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function E(e2) {
      let t3, n2, c2, d2, i2, r2, m2 = e2[15] + "", b2 = e2[3][e2[15]], w2 = [];
      for (let t4 = 0; t4 < b2.length; t4 += 1)
        w2[t4] = Y(X(e2, b2, t4));
      const $2 = (e3) => main2.v(w2[e3], 1, 1, () => {
        w2[e3] = null;
      });
      return {c() {
        t3 = main2.e("h3"), n2 = main2.t(m2), c2 = main2.a(), d2 = main2.e("ul");
        for (let e3 = 0; e3 < w2.length; e3 += 1)
          w2[e3].c();
        i2 = main2.a(), main2.b(t3, "class", "bg-white p-2 text-2xl text-center"), main2.b(d2, "class", "flex flex-wrap");
      }, m(e3, a3) {
        main2.c(e3, t3, a3), main2.d(t3, n2), main2.c(e3, c2, a3), main2.c(e3, d2, a3);
        for (let e4 = 0; e4 < w2.length; e4 += 1)
          w2[e4].m(d2, null);
        main2.d(d2, i2), r2 = true;
      }, p(e3, t4) {
        if ((!r2 || 16 & t4) && m2 !== (m2 = e3[15] + "") && main2.o(n2, m2), 24 & t4) {
          let n3;
          for (b2 = e3[3][e3[15]], n3 = 0; n3 < b2.length; n3 += 1) {
            const a3 = X(e3, b2, n3);
            w2[n3] ? (w2[n3].p(a3, t4), main2.p(w2[n3], 1)) : (w2[n3] = Y(a3), w2[n3].c(), main2.p(w2[n3], 1), w2[n3].m(d2, i2));
          }
          for (main2.D(), n3 = b2.length; n3 < w2.length; n3 += 1)
            $2(n3);
          main2.x();
        }
      }, i(e3) {
        if (!r2) {
          for (let e4 = 0; e4 < b2.length; e4 += 1)
            main2.p(w2[e4]);
          r2 = true;
        }
      }, o(e3) {
        w2 = w2.filter(Boolean);
        for (let e4 = 0; e4 < w2.length; e4 += 1)
          main2.v(w2[e4]);
        r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(c2), e3 && main2.f(d2), main2.y(w2, e3);
      }};
    }
    function F(e2) {
      let t3, n2, c2, o2, i2, r2, m2 = false, g2 = () => {
        m2 = false;
      };
      main2.j(e2[8]), main2.j(e2[9]);
      let u2 = e2[4], h2 = [];
      for (let t4 = 0; t4 < u2.length; t4 += 1)
        h2[t4] = E(D(e2, u2, t4));
      const b2 = (e3) => main2.v(h2[e3], 1, 1, () => {
        h2[e3] = null;
      });
      return {c() {
        n2 = main2.e("div");
        for (let e3 = 0; e3 < h2.length; e3 += 1)
          h2[e3].c();
        main2.b(n2, "class", "flex flex-col"), main2.j(() => e2[10].call(n2));
      }, m(a3, l2) {
        main2.c(a3, n2, l2);
        for (let e3 = 0; e3 < h2.length; e3 += 1)
          h2[e3].m(n2, null);
        c2 = main2.z(n2, e2[10].bind(n2)), o2 = true, i2 || (r2 = [main2.A(window, "scroll", e2[5]), main2.A(window, "scroll", () => {
          m2 = true, clearTimeout(t3), t3 = C(g2, 100), e2[8]();
        }), main2.A(window, "resize", e2[9])], i2 = true);
      }, p(e3, [a3]) {
        if (1 & a3 && !m2 && (m2 = true, clearTimeout(t3), scrollTo(window.pageXOffset, e3[0]), t3 = C(g2, 100)), 24 & a3) {
          let t4;
          for (u2 = e3[4], t4 = 0; t4 < u2.length; t4 += 1) {
            const c3 = D(e3, u2, t4);
            h2[t4] ? (h2[t4].p(c3, a3), main2.p(h2[t4], 1)) : (h2[t4] = E(c3), h2[t4].c(), main2.p(h2[t4], 1), h2[t4].m(n2, null));
          }
          for (main2.D(), t4 = u2.length; t4 < h2.length; t4 += 1)
            b2(t4);
          main2.x();
        }
      }, i(e3) {
        if (!o2) {
          for (let e4 = 0; e4 < u2.length; e4 += 1)
            main2.p(h2[e4]);
          o2 = true;
        }
      }, o(e3) {
        h2 = h2.filter(Boolean);
        for (let e4 = 0; e4 < h2.length; e4 += 1)
          main2.v(h2[e4]);
        o2 = false;
      }, d(e3) {
        e3 && main2.f(n2), main2.y(h2, e3), c2(), i2 = false, main2.B(r2);
      }};
    }
    function G(e2, t3, n2) {
      let a3, c2, l2;
      const s2 = [{date: "2021-03-21", name: "b90d39624e131102cd037536ae52686a.jpeg", n: "6"}, {date: "2021-03-21", name: "94cf5360320d40e1d3142cea84f99081.jpeg", n: "7"}, {date: "2021-03-21", name: "90384e791c8d1adc105a4f0ea6d68d3c.jpeg", n: "8"}, {date: "2021-03-21", name: "34932e3f9c24f95a5fcf0019d8231ac3.jpeg", n: "9"}, {date: "2021-03-21", name: "ead6e6f71df1d2d175a97fbda10576ed.jpeg", n: "9"}, {date: "2021-03-21", name: "c3281576e74db5c6933abe9df5935ab9.jpeg", n: "11"}, {date: "2021-03-21", name: "3e6e3d9f314bf90df5ff422d07687322.jpeg", n: "12"}, {date: "2021-03-21", name: "6b27979497b3a8efb71a90302fefad1a.jpeg", n: "12"}, {date: "2021-03-21", name: "a75b6b26a62405c797a95cef04c5fe68.jpeg", n: "12"}, {date: "2021-03-21", name: "b4b37951916017cda21c57f599c1ed0d.jpeg", n: "12"}, {date: "2021-03-21", name: "dec6537c06b004488ca6c1b613be5b28.jpeg", n: "12"}, {date: "2021-03-21", name: "e2791622abdcffa0f3f0f756c37567db.jpeg", n: "12"}];
      let o2 = s2.concat(s2).concat(s2).concat(s2).concat(s2), d2 = 1;
      let i2, f2, r2 = 0, m2 = false;
      return e2.$$.update = () => {
        64 & e2.$$.dirty && n2(7, a3 = o2 && o2.slice(0, 6 * d2)), 128 & e2.$$.dirty && n2(3, c2 = a3.reduce((e3, t4) => (e3[t4.date] == null && (e3[t4.date] = []), e3[t4.date].push(t4), e3), {}));
      }, n2(4, l2 = [...new Set(o2.map((e3) => e3.date))].sort()), [r2, i2, f2, c2, l2, function() {
        i2 + r2 + 10 > f2 && !m2 && (m2 = true, setTimeout(() => {
          n2(6, d2 += 1), m2 = false;
        }, 300));
      }, d2, a3, function() {
        n2(0, r2 = window.pageYOffset);
      }, function() {
        n2(1, i2 = window.innerHeight);
      }, function() {
        f2 = this.clientHeight, n2(2, f2);
      }];
    }
    class index_37e38a34_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, G, F, main2.s, {});
      }
    }
  });

  // dist/build/index-7750f5d9.js
  var require_index_7750f5d9 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_7750f5d9_default
    });
    const main2 = __toModule(require_main());
    function X(t3) {
      let e2, n2, d2, x2, _2, M2, k2, C2, S2, O2, j2, L2 = t3[0].closeButton && G(t3);
      var P2 = t3[1];
      return P2 && (M2 = new P2({})), {c() {
        e2 = main2.e("div"), n2 = main2.e("div"), d2 = main2.e("div"), L2 && L2.c(), x2 = main2.a(), _2 = main2.e("div"), M2 && main2.q(M2.$$.fragment), main2.b(_2, "class", "content svelte-1jadkpy"), main2.b(_2, "style", t3[12]), main2.b(d2, "class", "window svelte-1jadkpy"), main2.b(d2, "role", "dialog"), main2.b(d2, "aria-modal", "true"), main2.b(d2, "style", t3[11]), main2.b(n2, "class", "window-wrap svelte-1jadkpy"), main2.b(n2, "style", t3[10]), main2.b(e2, "class", "bg svelte-1jadkpy"), main2.b(e2, "style", t3[9]);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(n2, d2), L2 && L2.m(d2, null), main2.d(d2, x2), main2.d(d2, _2), M2 && main2.r(M2, _2, null), t3[37](d2), t3[38](n2), t3[39](e2), S2 = true, O2 || (j2 = [main2.A(d2, "introstart", function() {
          main2.F(t3[5]) && t3[5].apply(this, arguments);
        }), main2.A(d2, "outrostart", function() {
          main2.F(t3[6]) && t3[6].apply(this, arguments);
        }), main2.A(d2, "introend", function() {
          main2.F(t3[7]) && t3[7].apply(this, arguments);
        }), main2.A(d2, "outroend", function() {
          main2.F(t3[8]) && t3[8].apply(this, arguments);
        }), main2.A(e2, "click", t3[19])], O2 = true);
      }, p(r2, s2) {
        if ((t3 = r2)[0].closeButton ? L2 ? (L2.p(t3, s2), 1 & s2[0] && main2.p(L2, 1)) : (L2 = G(t3), L2.c(), main2.p(L2, 1), L2.m(d2, x2)) : L2 && (main2.D(), main2.v(L2, 1, 1, () => {
          L2 = null;
        }), main2.x()), P2 !== (P2 = t3[1])) {
          if (M2) {
            main2.D();
            const t4 = M2;
            main2.v(t4.$$.fragment, 1, 0, () => {
              main2.w(t4, 1);
            }), main2.x();
          }
          P2 ? (M2 = new P2({}), main2.q(M2.$$.fragment), main2.p(M2.$$.fragment, 1), main2.r(M2, _2, null)) : M2 = null;
        }
        (!S2 || 4096 & s2[0]) && main2.b(_2, "style", t3[12]), (!S2 || 2048 & s2[0]) && main2.b(d2, "style", t3[11]), (!S2 || 1024 & s2[0]) && main2.b(n2, "style", t3[10]), (!S2 || 512 & s2[0]) && main2.b(e2, "style", t3[9]);
      }, i(n3) {
        S2 || (main2.p(L2), M2 && main2.p(M2.$$.fragment, n3), main2.j(() => {
          k2 || (k2 = main2.k(d2, t3[15], t3[0].transitionWindowProps, true)), k2.run(1);
        }), main2.j(() => {
          C2 || (C2 = main2.k(e2, t3[14], t3[0].transitionBgProps, true)), C2.run(1);
        }), S2 = true);
      }, o(n3) {
        main2.v(L2), M2 && main2.v(M2.$$.fragment, n3), k2 || (k2 = main2.k(d2, t3[15], t3[0].transitionWindowProps, false)), k2.run(0), C2 || (C2 = main2.k(e2, t3[14], t3[0].transitionBgProps, false)), C2.run(0), S2 = false;
      }, d(n3) {
        n3 && main2.f(e2), L2 && L2.d(), M2 && main2.w(M2), t3[37](null), n3 && k2 && k2.end(), t3[38](null), t3[39](null), n3 && C2 && C2.end(), O2 = false, main2.B(j2);
      }};
    }
    function G(t3) {
      let e2, n2, r2, s2, i2;
      const c2 = [et, tt], l2 = [];
      function a3(t4, n3) {
        return 1 & n3[0] && (e2 = !!t4[16](t4[0].closeButton)), e2 ? 0 : 1;
      }
      return n2 = a3(t3, [-1]), r2 = l2[n2] = c2[n2](t3), {c() {
        r2.c(), s2 = main2.G();
      }, m(t4, e3) {
        l2[n2].m(t4, e3), main2.c(t4, s2, e3), i2 = true;
      }, p(t4, e3) {
        let i3 = n2;
        n2 = a3(t4, e3), n2 === i3 ? l2[n2].p(t4, e3) : (main2.D(), main2.v(l2[i3], 1, 1, () => {
          l2[i3] = null;
        }), main2.x(), r2 = l2[n2], r2 ? r2.p(t4, e3) : (r2 = l2[n2] = c2[n2](t4), r2.c()), main2.p(r2, 1), r2.m(s2.parentNode, s2));
      }, i(t4) {
        i2 || (main2.p(r2), i2 = true);
      }, o(t4) {
        main2.v(r2), i2 = false;
      }, d(t4) {
        l2[n2].d(t4), t4 && main2.f(s2);
      }};
    }
    function tt(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("button"), main2.b(e2, "class", "close svelte-1jadkpy"), main2.b(e2, "style", t3[13]);
      }, m(r2, i2) {
        main2.c(r2, e2, i2), n2 || (s2 = main2.A(e2, "click", t3[17]), n2 = true);
      }, p(t4, n3) {
        8192 & n3[0] && main2.b(e2, "style", t4[13]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), n2 = false, s2();
      }};
    }
    function et(t3) {
      let e2, n2, r2;
      var s2 = t3[0].closeButton;
      function i2(t4) {
        return {props: {onClose: t4[17]}};
      }
      return s2 && (e2 = new s2(i2(t3))), {c() {
        e2 && main2.q(e2.$$.fragment), n2 = main2.G();
      }, m(t4, s3) {
        e2 && main2.r(e2, t4, s3), main2.c(t4, n2, s3), r2 = true;
      }, p(t4, r3) {
        if (s2 !== (s2 = t4[0].closeButton)) {
          if (e2) {
            main2.D();
            const t5 = e2;
            main2.v(t5.$$.fragment, 1, 0, () => {
              main2.w(t5, 1);
            }), main2.x();
          }
          s2 ? (e2 = new s2(i2(t4)), main2.q(e2.$$.fragment), main2.p(e2.$$.fragment, 1), main2.r(e2, n2.parentNode, n2)) : e2 = null;
        }
      }, i(t4) {
        r2 || (e2 && main2.p(e2.$$.fragment, t4), r2 = true);
      }, o(t4) {
        e2 && main2.v(e2.$$.fragment, t4), r2 = false;
      }, d(t4) {
        t4 && main2.f(n2), e2 && main2.w(e2, t4);
      }};
    }
    function nt(t3) {
      let e2, n2, r2, i2, c2 = t3[1] && X(t3);
      const a3 = t3[36].default, d2 = main2.H(a3, t3, t3[35], null);
      return {c() {
        c2 && c2.c(), e2 = main2.a(), d2 && d2.c();
      }, m(s2, a4) {
        c2 && c2.m(s2, a4), main2.c(s2, e2, a4), d2 && d2.m(s2, a4), n2 = true, r2 || (i2 = main2.A(window, "keydown", t3[18]), r2 = true);
      }, p(t4, n3) {
        t4[1] ? c2 ? (c2.p(t4, n3), 2 & n3[0] && main2.p(c2, 1)) : (c2 = X(t4), c2.c(), main2.p(c2, 1), c2.m(e2.parentNode, e2)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x()), d2 && d2.p && 16 & n3[1] && main2.I(d2, a3, t4, t4[35], n3, null, null);
      }, i(t4) {
        n2 || (main2.p(c2), main2.p(d2, t4), n2 = true);
      }, o(t4) {
        main2.v(c2), main2.v(d2, t4), n2 = false;
      }, d(t4) {
        c2 && c2.d(t4), t4 && main2.f(e2), d2 && d2.d(t4), r2 = false, i2();
      }};
    }
    function rt(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, {$$slots: u2 = {}, $$scope: d2} = e2;
      const f2 = main2.J(), h2 = main2.K;
      let {show: g2 = null} = e2, {key: p2 = "simple-modal"} = e2, {closeButton: m2 = true} = e2, {closeOnEsc: $2 = true} = e2, {closeOnOuterClick: y2 = true} = e2, {styleBg: v2 = {top: 0, left: 0}} = e2, {styleWindowWrap: w2 = {}} = e2, {styleWindow: b2 = {}} = e2, {styleContent: x2 = {}} = e2, {styleCloseButton: _2 = {}} = e2, {setContext: k2 = h2} = e2, {transitionBg: O2 = a} = e2, {transitionBgProps: j2 = {duration: 250}} = e2, {transitionWindow: L2 = O2} = e2, {transitionWindowProps: P2 = j2} = e2;
      const I2 = {closeButton: m2, closeOnEsc: $2, closeOnOuterClick: y2, styleBg: v2, styleWindowWrap: w2, styleWindow: b2, styleContent: x2, styleCloseButton: _2, transitionBg: O2, transitionBgProps: j2, transitionWindow: L2, transitionWindowProps: P2};
      let B2, E2, z2, T2 = {...I2}, N2 = null;
      const A2 = (t4) => Object.keys(t4).reduce((e3, n3) => `${e3}; ${((t5) => t5.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(n3)}: ${t4[n3]}`, ""), W2 = (t4) => !!(t4 && t4.constructor && t4.call && t4.apply), D2 = () => {
      };
      let R2 = D2, F2 = D2, V2 = D2, J2 = D2;
      const q2 = (t4, e3 = {}, r3 = {}, s3 = {}) => {
        n2(1, N2 = function(t5, e4 = {}) {
          return function(n3) {
            return new t5({...n3, props: {...e4, ...n3.props}});
          };
        }(t4, e3)), n2(0, T2 = {...I2, ...r3}), n2(5, R2 = (t5) => {
          s3.onOpen && s3.onOpen(t5), f2("opening");
        }), n2(6, F2 = (t5) => {
          s3.onClose && s3.onClose(t5), f2("closing");
        }), n2(7, V2 = (t5) => {
          s3.onOpened && s3.onOpened(t5), f2("opened");
        }), n2(8, J2 = (t5) => {
          s3.onClosed && s3.onClosed(t5), f2("closed");
        });
      }, H2 = (t4 = {}) => {
        n2(6, F2 = t4.onClose || F2), n2(8, J2 = t4.onClosed || J2), n2(1, N2 = null);
      };
      return k2(p2, {open: q2, close: H2}), t3.$$set = (t4) => {
        "show" in t4 && n2(20, g2 = t4.show), "key" in t4 && n2(21, p2 = t4.key), "closeButton" in t4 && n2(22, m2 = t4.closeButton), "closeOnEsc" in t4 && n2(23, $2 = t4.closeOnEsc), "closeOnOuterClick" in t4 && n2(24, y2 = t4.closeOnOuterClick), "styleBg" in t4 && n2(25, v2 = t4.styleBg), "styleWindowWrap" in t4 && n2(26, w2 = t4.styleWindowWrap), "styleWindow" in t4 && n2(27, b2 = t4.styleWindow), "styleContent" in t4 && n2(28, x2 = t4.styleContent), "styleCloseButton" in t4 && n2(29, _2 = t4.styleCloseButton), "setContext" in t4 && n2(30, k2 = t4.setContext), "transitionBg" in t4 && n2(31, O2 = t4.transitionBg), "transitionBgProps" in t4 && n2(32, j2 = t4.transitionBgProps), "transitionWindow" in t4 && n2(33, L2 = t4.transitionWindow), "transitionWindowProps" in t4 && n2(34, P2 = t4.transitionWindowProps), "$$scope" in t4 && n2(35, d2 = t4.$$scope);
      }, t3.$$.update = () => {
        1 & t3.$$.dirty[0] && n2(9, r2 = A2(T2.styleBg)), 1 & t3.$$.dirty[0] && n2(10, s2 = A2(T2.styleWindowWrap)), 1 & t3.$$.dirty[0] && n2(11, i2 = A2(T2.styleWindow)), 1 & t3.$$.dirty[0] && n2(12, o2 = A2(T2.styleContent)), 1 & t3.$$.dirty[0] && n2(13, c2 = A2(T2.styleCloseButton)), 1 & t3.$$.dirty[0] && n2(14, l2 = T2.transitionBg), 1 & t3.$$.dirty[0] && n2(15, a3 = T2.transitionWindow), 1048576 & t3.$$.dirty[0] && (W2(g2) ? q2(g2) : H2());
      }, [T2, N2, B2, E2, z2, R2, F2, V2, J2, r2, s2, i2, o2, c2, l2, a3, W2, H2, (t4) => {
        if (T2.closeOnEsc && N2 && t4.key === "Escape" && (t4.preventDefault(), H2()), N2 && t4.key === "Tab") {
          const e3 = z2.querySelectorAll("*"), n3 = Array.from(e3).filter((t5) => t5.tabIndex >= 0);
          let r3 = n3.indexOf(document.activeElement);
          r3 === -1 && t4.shiftKey && (r3 = 0), r3 += n3.length + (t4.shiftKey ? -1 : 1), r3 %= n3.length, n3[r3].focus(), t4.preventDefault();
        }
      }, (t4) => {
        !T2.closeOnOuterClick || t4.target !== B2 && t4.target !== E2 || (t4.preventDefault(), H2());
      }, g2, p2, m2, $2, y2, v2, w2, b2, x2, _2, k2, O2, j2, L2, P2, d2, u2, function(t4) {
        main2.m[t4 ? "unshift" : "push"](() => {
          z2 = t4, n2(4, z2);
        });
      }, function(t4) {
        main2.m[t4 ? "unshift" : "push"](() => {
          E2 = t4, n2(3, E2);
        });
      }, function(t4) {
        main2.m[t4 ? "unshift" : "push"](() => {
          B2 = t4, n2(2, B2);
        });
      }];
    }
    class st extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, rt, nt, main2.s, {show: 20, key: 21, closeButton: 22, closeOnEsc: 23, closeOnOuterClick: 24, styleBg: 25, styleWindowWrap: 26, styleWindow: 27, styleContent: 28, styleCloseButton: 29, setContext: 30, transitionBg: 31, transitionBgProps: 32, transitionWindow: 33, transitionWindowProps: 34}, [-1, -1]);
      }
    }
    const it = {value: null, color: null};
    const ot = {value: "\u{1F496}", color: "#fff"};
    const ct = [{value: "\uAD8C\uC740\uBE44", color: "#bbb0dc"}, {value: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", color: "#f1d2e7"}, {value: "\uAC15\uD61C\uC6D0", color: "#db706c"}, {value: "\uCD5C\uC608\uB098", color: "#fcf695"}, {value: "\uC774\uCC44\uC5F0", color: "#a7e0e1"}, {value: "\uAE40\uCC44\uC6D0", color: "#cee5d5"}, {value: "\uC57C\uBD80\uD0A4 \uB098\uCF54", color: "#b7d3e9"}, {value: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", color: "#f1c3aa"}, {value: "\uAE40\uBBFC\uC8FC", color: "#fff"}, {value: "\uC870\uC720\uB9AC", color: "#f3aa51"}, {value: "\uC548\uC720\uC9C4", color: "#567ace"}, {value: "\uC7A5\uC6D0\uC601", color: "#d9598c"}, {value: "\uC6B4\uC601\uD300", color: "gray"}];
    let lt;
    let at = main2.L(function() {
      let t3 = ct.reduce((t4, e3) => (t4.set(e3.value, e3), t4), new Map([["\u{1F496}", ot]]));
      const e2 = localStorage.getItem("all_tag_dict");
      if (e2) {
        console.log("all tag backup loaded");
        const n2 = JSON.parse(e2);
        t3 = [...t3].reduce((t4, e3) => (t4.set(e3[0], e3[1]), t4), new Map(n2));
      }
      return t3;
    }());
    at.subscribe((t3) => {
      var e2;
      localStorage.setItem("all_tag_dict", (e2 = t3, JSON.stringify([...e2])));
    }), at.subscribe((t3) => {
      lt = (e2) => {
        const n2 = e2.map((e3) => [e3[0], new Set(e3[1].map((e4) => t3.get(e4)))]);
        return new Map(n2);
      };
    });
    let ut = main2.L(function() {
      const t3 = localStorage.getItem("mail_to_tag_dict");
      let e2 = new Map([["m0", new Set([ot])]]);
      if (t3) {
        const n2 = JSON.parse(t3);
        e2 = lt(n2);
      }
      return e2;
    }());
    function dt(t3) {
      return [...t3].map((t4) => [t4[0], [...t4[1]].map((t5) => t5.value)]);
    }
    async function ft(t3, e2 = "") {
      return e2 ? fetch(t3, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(e2)}) : fetch(t3, {method: "POST"});
    }
    function ht(t3, e2) {
      return ft(t3, e2).then((t4) => (console.log(e2), t4)).catch((e3) => {
        console.error(t3 + " \uBC31\uC5C5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."), console.error(e3);
      });
    }
    ut.subscribe((t3) => {
      if (!t3)
        return null;
      [...t3].forEach((t4) => {
        t4[1].size == 0 && ut.update((e3) => (e3.delete(t4[0]), e3));
      });
      const e2 = dt(t3);
      localStorage.setItem("mail_to_tag_dict", JSON.stringify(e2));
    });
    var gt = {get: async () => (await fetch("/all-tag-dict/").then((t3) => t3.json()).then((t3) => t3.tag_list)).reduce((t3, e2) => (t3.set(e2.value, e2), t3), new Map([["\u{1F496}", ot]])), save: async (t3) => ht("/all-tag-dict/", {tag_list: [...t3].map((t4) => t4[1])}), addTag: async (t3) => ft("/all-tag-dict/tag", t3), deleteTag: async (t3) => fetch(`/all-tag-dict/tag/${t3}`, {method: "DELETE"}).then((t4) => (console.log("\uC11C\uBC84\uC5D0\uC11C \uD0DC\uADF8 \uC0AD\uC81C \uC644\uB8CC"), t4))};
    var pt = {get: async () => {
      const t3 = await fetch("/mail-tag-dict/").then((t4) => t4.json());
      return {tag_to_mail_dict: $t(t3.tag_to_mail_dict), mail_to_tag_dict: lt(t3.mail_to_tag_dict)};
    }, save: async (t3, e2) => ht("/mail-tag-dict/", {mail_to_tag_dict: dt(t3), tag_to_mail_dict: Mt(e2)}), addTag: async (t3, e2) => ft(`/mail-tag-dict/mail/${t3}/tag/${e2}`).then((t4) => (console.log("\uC11C\uBC84\uC5D0 \uD0DC\uADF8 \uCD94\uAC00 \uC644\uB8CC."), t4)), deleteTag: async (t3, e2) => await fetch(`/mail-tag-dict/mail/${t3}/tag/${e2}`, {method: "DELETE"})};
    let mt = main2.L(function() {
      const t3 = localStorage.getItem("preferences-profile");
      return t3 || "latest";
    }());
    mt.subscribe((t3) => {
      localStorage.setItem("preferences-profile", t3);
    });
    let $t;
    let yt = main2.L(false);
    let vt = main2.L("");
    let wt = main2.L(Math.floor(12 * Math.random()));
    let bt = main2.L({color: null, value: null});
    at.subscribe((t3) => {
      $t = (e2) => new Map(e2.map((e3) => [t3.get(e3[0]), new Set(e3[1])]));
    });
    let xt;
    let _t = main2.L(function() {
      const t3 = () => new Set();
      let e2 = ct.reduce((e3, n3) => (e3.set(n3, t3()), e3), new Map([[ot, t3()]]));
      const n2 = localStorage.getItem("tag_to_mail_dict");
      if (n2) {
        const t4 = JSON.parse(n2);
        e2 = [...$t(t4)].reduce((t5, e3) => (t5.set(e3[0], e3[1]), t5), e2);
      }
      return e2;
    }());
    function Mt(t3) {
      return [...t3].map((t4) => [t4[0].value, [...t4[1]]]);
    }
    yt.subscribe((t3) => {
      xt = t3;
    }), _t.subscribe((t3) => {
      if ([...t3].forEach(([t4, e3]) => {
        if (e3.size == 0 && t4.value != "\u{1F496}" && !ct.includes(t4)) {
          bt.update((e5) => e5 == t4 ? it : e5);
          const e4 = t4.value;
          _t.update((e5) => (e5.delete(t4), e5)), at.update((t5) => (t5.delete(e4), xt && gt.deleteTag(e4), t5));
        }
      }), !t3)
        return null;
      const e2 = Mt(t3);
      localStorage.setItem("tag_to_mail_dict", JSON.stringify(e2));
    });
    let kt = main2.L([{id: "", member: "", time: "", subject: "", preview: "", n: 1}]);
    let Ct = main2.L({id: "m20731", member: "\uAD11\uBC30", time: "2021/03/09 19:23", subject: "\uC0AC\uD0D5", preview: "\uC704\uC988\uC6D0 \uC0AC\uD0D5 \uD478\uB529 \uB9DB \uC788\uB294\uAC70 \uC54C\uC558\uC5B4?? \uB9DB\uC788\uC5B4\uBCF4\uC5EC\uC11C \uC0AC\uC11C \uC5B8\uC81C\uBA39\uC744\uC9C0 \uACE0\uBBFC\uC911\uC774\uC57C ."});
    let St = main2.L("");
    let Ot = main2.M(St, (t3) => "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + t3.replace(/\&nbsp;<\/div>/g, "\n").replace(/<\/div>/g, "\n").replace(/&nbsp;/g, "").replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "").replace(/\n\n/g, "\n").replace(/\n/g, "%0A"));
    let jt = main2.L(1);
    let Lt = main2.L(true);
    let Pt = main2.L(false);
    let It = main2.L(true);
    let Bt = main2.M(It, (t3) => !t3);
    function Et(t3) {
      let e2, n2, s2, c2;
      const d2 = t3[3].default, f2 = main2.H(d2, t3, t3[2], null);
      return {c() {
        e2 = main2.e("button"), f2 && f2.c(), main2.b(e2, "id", t3[1]), main2.b(e2, "class", "rounded bg-red-100 m-2 pl-1 pr-1");
      }, m(r2, i2) {
        main2.c(r2, e2, i2), f2 && f2.m(e2, null), n2 = true, s2 || (c2 = main2.A(e2, "click", function() {
          main2.F(t3[0]) && t3[0].apply(this, arguments);
        }), s2 = true);
      }, p(r2, [s3]) {
        t3 = r2, f2 && f2.p && 4 & s3 && main2.I(f2, d2, t3, t3[2], s3, null, null), (!n2 || 2 & s3) && main2.b(e2, "id", t3[1]);
      }, i(t4) {
        n2 || (main2.p(f2, t4), n2 = true);
      }, o(t4) {
        main2.v(f2, t4), n2 = false;
      }, d(t4) {
        t4 && main2.f(e2), f2 && f2.d(t4), s2 = false, c2();
      }};
    }
    function zt(t3, e2, n2) {
      let {$$slots: r2 = {}, $$scope: s2} = e2, {onClick: i2} = e2, {id: o2} = e2;
      return t3.$$set = (t4) => {
        "onClick" in t4 && n2(0, i2 = t4.onClick), "id" in t4 && n2(1, o2 = t4.id), "$$scope" in t4 && n2(2, s2 = t4.$$scope);
      }, [i2, o2, s2, r2];
    }
    class Tt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, zt, Et, main2.s, {onClick: 0, id: 1});
      }
    }
    function Nt(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[10] = e2[n2], r2;
    }
    function At(t3) {
      let e2, n2, a3, u2, d2, f2, h2, g2 = t3[10].value + "";
      return {c() {
        e2 = main2.e("label"), n2 = main2.e("input"), a3 = main2.a(), u2 = main2.t(g2), d2 = main2.a(), main2.b(n2, "id", "TagUpdateColorRadio-" + t3[10].value), main2.b(n2, "type", "radio"), n2.__value = t3[10].color, n2.value = n2.__value, t3[8][0].push(n2), main2.h(e2, "background-color", t3[10].color), main2.b(e2, "class", (t3[10].color == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-0.5 pl-1 pr-1.5");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), n2.checked = n2.__value === t3[1], main2.d(e2, a3), main2.d(e2, u2), main2.d(e2, d2), f2 || (h2 = main2.A(n2, "change", t3[7]), f2 = true);
      }, p(t4, e3) {
        2 & e3 && (n2.checked = n2.__value === t4[1]);
      }, d(r2) {
        r2 && main2.f(e2), t3[8][0].splice(t3[8][0].indexOf(n2), 1), f2 = false, h2();
      }};
    }
    function Wt(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uACB0\uC815\uD588\uC5B4\uC694!");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Dt(t3) {
      let e2, n2, a3, d2, f2, g2, v2, w2, b2, x2, _2, M2, k2 = t3[3], C2 = [];
      for (let e3 = 0; e3 < k2.length; e3 += 1)
        C2[e3] = At(Nt(t3, k2, e3));
      return b2 = new Tt({props: {id: "TagUpdateButton", onClick: t3[2], $$slots: {default: [Wt]}, $$scope: {ctx: t3}}}), {c() {
        e2 = main2.e("div"), n2 = main2.e("h3"), n2.textContent = "\uD0DC\uADF8 \uC218\uC815", a3 = main2.a(), d2 = main2.e("input"), g2 = main2.a(), v2 = main2.e("div");
        for (let t4 = 0; t4 < C2.length; t4 += 1)
          C2[t4].c();
        w2 = main2.a(), main2.q(b2.$$.fragment), main2.b(n2, "class", "svelte-qli48t"), main2.b(d2, "type", "text"), main2.b(d2, "id", "TagUpdateInput"), main2.h(d2, "background-color", t3[1]), main2.h(d2, "text-align", "center"), main2.b(d2, "class", f2 = (t3[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20"), main2.h(e2, "text-align", "center"), main2.b(v2, "class", "flex flex-wrap p-1");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(e2, a3), main2.d(e2, d2), main2.N(d2, t3[0]), main2.c(r2, g2, s2), main2.c(r2, v2, s2);
        for (let t4 = 0; t4 < C2.length; t4 += 1)
          C2[t4].m(v2, null);
        main2.c(r2, w2, s2), main2.r(b2, r2, s2), x2 = true, _2 || (M2 = main2.A(d2, "input", t3[6]), _2 = true);
      }, p(t4, [e3]) {
        if ((!x2 || 2 & e3) && main2.h(d2, "background-color", t4[1]), (!x2 || 2 & e3 && f2 !== (f2 = (t4[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20")) && main2.b(d2, "class", f2), 1 & e3 && d2.value !== t4[0] && main2.N(d2, t4[0]), 10 & e3) {
          let n4;
          for (k2 = t4[3], n4 = 0; n4 < k2.length; n4 += 1) {
            const r2 = Nt(t4, k2, n4);
            C2[n4] ? C2[n4].p(r2, e3) : (C2[n4] = At(r2), C2[n4].c(), C2[n4].m(v2, null));
          }
          for (; n4 < C2.length; n4 += 1)
            C2[n4].d(1);
          C2.length = k2.length;
        }
        const n3 = {};
        4 & e3 && (n3.onClick = t4[2]), 8192 & e3 && (n3.$$scope = {dirty: e3, ctx: t4}), b2.$set(n3);
      }, i(t4) {
        x2 || (main2.p(b2.$$.fragment, t4), x2 = true);
      }, o(t4) {
        main2.v(b2.$$.fragment, t4), x2 = false;
      }, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(g2), t4 && main2.f(v2), main2.y(C2, t4), t4 && main2.f(w2), main2.w(b2, t4), _2 = false, M2();
      }};
    }
    function Rt(t3, e2, n2) {
      let r2, s2;
      main2.g(t3, at, (t4) => n2(5, s2 = t4));
      let {tag: i2} = e2, o2 = i2.value, c2 = i2.color;
      const {close: l2} = main2.O("simple-modal");
      return t3.$$set = (t4) => {
        "tag" in t4 && n2(4, i2 = t4.tag);
      }, t3.$$.update = () => {
        51 & t3.$$.dirty && n2(2, r2 = () => {
          const t4 = s2.get(i2.value);
          s2.delete(t4.value), t4.value = o2, t4.color = c2, s2.set(o2, t4), at.set(s2), l2();
        });
      }, [o2, c2, r2, [{value: "\uC218\uB193\uC740\uBCC4\uBE5B", color: "#bbb0dc"}, {value: "\uBC9A\uAF43\uD551\uD06C", color: "#f1d2e7"}, {value: "\uAC15\uCF54\uB784", color: "#db706c"}, {value: "\uC60C\uB85C\uC6B0", color: "#fcf695"}, {value: "\uCC48\uBA54\uB784\uB4DC", color: "#a7e0e1"}, {value: "\uCC54\uBB34", color: "#cee5d5"}, {value: "\uB098\uBD80\uD0A4\uD558\uB298", color: "#b7d3e9"}, {value: "\uD1A0\uBBF8\uBCA0\uC774\uC9C0", color: "#f1c3aa"}, {value: "\uBC31\uC124\uBBFC\uC8FC", color: "#fff"}, {value: "\uC728\uB80C\uC9C0", color: "#f3aa51"}, {value: "\uBE14\uB8E8\uC9C0\uB2C8", color: "#567ace"}, {value: "\uCE94\uB514\uD551\uD06C", color: "#d9598c"}], i2, s2, function() {
        o2 = this.value, n2(0, o2);
      }, function() {
        c2 = this.__value, n2(1, c2);
      }, [[]]];
    }
    class Ft extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Rt, Dt, main2.s, {tag: 4});
      }
    }
    const Vt = {0: "#d9598c", 1: "#f1d2e7", 2: "#f3aa51", 3: "#fcf695", 4: "#567ace", 5: "#b7d3e9", 6: "#bbb0dc", 7: "#db706c", 8: "#f1c3aa", 9: "#cee5d5", 10: "#fff", 11: "#a7e0e1", 12: "gray"};
    let Jt = main2.L({});
    main2.M(Jt, (t3) => Object.keys(t3).reduce((t4, e2) => Object.assign(Object.assign({}, t4), {[Jt[e2]]: e2}), {0: "\uC7A5\uC6D0\uC601"}));
    const qt = {0: "\uC7A5\uC6D0\uC601", 1: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", 2: "\uC870\uC720\uB9AC", 3: "\uCD5C\uC608\uB098", 4: "\uC548\uC720\uC9C4", 5: "\uC57C\uBD80\uD0A4 \uB098\uCF54", 6: "\uAD8C\uC740\uBE44", 7: "\uAC15\uD61C\uC6D0", 8: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", 9: "\uAE40\uCC44\uC6D0", 10: "\uAE40\uBBFC\uC8FC", 11: "\uC774\uCC44\uC5F0", 12: "\uC6B4\uC601\uD300"};
    const Ht = new Set(["\u{1F496}", "\uC7A5\uC6D0\uC601", "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", "\uC870\uC720\uB9AC", "\uCD5C\uC608\uB098", "\uC548\uC720\uC9C4", "\uC57C\uBD80\uD0A4 \uB098\uCF54", "\uAD8C\uC740\uBE44", "\uAC15\uD61C\uC6D0", "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", "\uAE40\uCC44\uC6D0", "\uAE40\uBBFC\uC8FC", "\uC774\uCC44\uC5F0", "\uC6B4\uC601\uD300", "\uC0DD\uC77C"]);
    function Kt(t3) {
      let e2, n2, r2;
      return {c() {
        e2 = main2.P("svg"), n2 = main2.P("path"), main2.b(n2, "fill", "currentColor"), main2.b(n2, "d", t3[0]), main2.b(e2, "aria-hidden", "true"), main2.b(e2, "class", r2 = main2.Q(t3[1]) + " svelte-go33dg"), main2.b(e2, "role", "img"), main2.b(e2, "xmlns", "http://www.w3.org/2000/svg"), main2.b(e2, "viewBox", t3[2]);
      }, m(t4, r3) {
        main2.c(t4, e2, r3), main2.d(e2, n2);
      }, p(t4, [s2]) {
        1 & s2 && main2.b(n2, "d", t4[0]), 2 & s2 && r2 !== (r2 = main2.Q(t4[1]) + " svelte-go33dg") && main2.b(e2, "class", r2), 4 & s2 && main2.b(e2, "viewBox", t4[2]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Yt(t3, e2, n2) {
      let {icon: r2} = e2, s2 = [], i2 = "", o2 = "";
      return t3.$$set = (t4) => {
        n2(4, e2 = main2.R(main2.R({}, e2), main2.T(t4))), "icon" in t4 && n2(3, r2 = t4.icon);
      }, t3.$$.update = () => {
        8 & t3.$$.dirty && n2(2, o2 = "0 0 " + r2.icon[0] + " " + r2.icon[1]), n2(1, i2 = "fa-svelte " + (e2.class ? e2.class : "")), 8 & t3.$$.dirty && n2(0, s2 = r2.icon[4]);
      }, e2 = main2.T(e2), [s2, i2, o2, r2];
    }
    class Zt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Yt, Kt, main2.s, {icon: 3});
      }
    }
    function Ut(t3, e2, n2) {
      return t3(n2 = {path: e2, exports: {}, require: function(t4, e3) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(e3 == null && n2.path);
      }}, n2.exports), n2.exports;
    }
    var Qt = Ut(function(t3, e2) {
      Object.defineProperty(e2, "__esModule", {value: true});
      var n2 = "twitter", r2 = [], s2 = "f099", i2 = "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z";
      e2.definition = {prefix: "fab", iconName: n2, icon: [512, 512, r2, s2, i2]}, e2.faTwitter = e2.definition, e2.prefix = "fab", e2.iconName = n2, e2.width = 512, e2.height = 512, e2.ligatures = r2, e2.unicode = s2, e2.svgPathData = i2;
    });
    var Xt = Ut(function(t3, e2) {
      Object.defineProperty(e2, "__esModule", {value: true});
      var n2 = "facebook", r2 = [], s2 = "f09a", i2 = "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z";
      e2.definition = {prefix: "fab", iconName: n2, icon: [512, 512, r2, s2, i2]}, e2.faFacebook = e2.definition, e2.prefix = "fab", e2.iconName = n2, e2.width = 512, e2.height = 512, e2.ligatures = r2, e2.unicode = s2, e2.svgPathData = i2;
    });
    var Gt = Ut(function(t3, e2) {
      Object.defineProperty(e2, "__esModule", {value: true});
      var n2 = "instagram", r2 = [], s2 = "f16d", i2 = "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";
      e2.definition = {prefix: "fab", iconName: n2, icon: [448, 512, r2, s2, i2]}, e2.faInstagram = e2.definition, e2.prefix = "fab", e2.iconName = n2, e2.width = 448, e2.height = 512, e2.ligatures = r2, e2.unicode = s2, e2.svgPathData = i2;
    });
    var te = Ut(function(t3, e2) {
      Object.defineProperty(e2, "__esModule", {value: true});
      var n2 = "youtube", r2 = [], s2 = "f167", i2 = "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";
      e2.definition = {prefix: "fab", iconName: n2, icon: [576, 512, r2, s2, i2]}, e2.faYoutube = e2.definition, e2.prefix = "fab", e2.iconName = n2, e2.width = 576, e2.height = 512, e2.ligatures = r2, e2.unicode = s2, e2.svgPathData = i2;
    });
    var ee = Ut(function(t3, e2) {
      Object.defineProperty(e2, "__esModule", {value: true});
      var n2 = "birthday-cake", r2 = [], s2 = "f1fd", i2 = "M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z";
      e2.definition = {prefix: "fas", iconName: n2, icon: [448, 512, r2, s2, i2]}, e2.faBirthdayCake = e2.definition, e2.prefix = "fas", e2.iconName = n2, e2.width = 448, e2.height = 512, e2.ligatures = r2, e2.unicode = s2, e2.svgPathData = i2;
    });
    var ne = Ut(function(t3, e2) {
      Object.defineProperty(e2, "__esModule", {value: true});
      var n2 = "star", r2 = [], s2 = "f005", i2 = "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z";
      e2.definition = {prefix: "fas", iconName: n2, icon: [576, 512, r2, s2, i2]}, e2.faStar = e2.definition, e2.prefix = "fas", e2.iconName = n2, e2.width = 576, e2.height = 512, e2.ligatures = r2, e2.unicode = s2, e2.svgPathData = i2;
    });
    function re(t3) {
      let e2, n2, r2, i2 = t3[12].has(t3[0].value), c2 = t3[0].value + "", l2 = i2 && ie(t3);
      return {c() {
        l2 && l2.c(), e2 = main2.a(), n2 = main2.t(c2);
      }, m(t4, s2) {
        l2 && l2.m(t4, s2), main2.c(t4, e2, s2), main2.c(t4, n2, s2), r2 = true;
      }, p(t4, s2) {
        1 & s2 && (i2 = t4[12].has(t4[0].value)), i2 ? l2 ? (l2.p(t4, s2), 1 & s2 && main2.p(l2, 1)) : (l2 = ie(t4), l2.c(), main2.p(l2, 1), l2.m(e2.parentNode, e2)) : l2 && (main2.D(), main2.v(l2, 1, 1, () => {
          l2 = null;
        }), main2.x()), (!r2 || 1 & s2) && c2 !== (c2 = t4[0].value + "") && main2.o(n2, c2);
      }, i(t4) {
        r2 || (main2.p(l2), r2 = true);
      }, o(t4) {
        main2.v(l2), r2 = false;
      }, d(t4) {
        l2 && l2.d(t4), t4 && main2.f(e2), t4 && main2.f(n2);
      }};
    }
    function se(t3) {
      let e2, n2;
      return e2 = new Zt({props: {icon: ne.faStar, $$slots: {default: [oe]}, $$scope: {ctx: t3}}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        67108864 & n3 && (r2.$$scope = {dirty: n3, ctx: t4}), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function ie(t3) {
      let e2, n2;
      return e2 = new Zt({props: {class: "mb-1 text-" + t3[12].get(t3[0].value).color, icon: t3[12].get(t3[0].value).icon}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        1 & n3 && (r2.class = "mb-1 text-" + t4[12].get(t4[0].value).color), 1 & n3 && (r2.icon = t4[12].get(t4[0].value).icon), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function oe(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uC88B\uC544\uC694 \uD0DC\uADF8");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function ce(t3) {
      let e2, n2, s2, u2, d2;
      return {c() {
        e2 = main2.e("span"), n2 = main2.t("X"), main2.h(e2, "background-color", t3[9]), main2.h(e2, "color", t3[10]), main2.b(e2, "class", s2 = (t3[3] ? "Remove" : "Delete") + "Tag-" + t3[0].value.replace(" ", "-") + "\r\n" + (t3[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (t3[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + t3[2] + " svelte-mrene9");
      }, m(r2, s3) {
        main2.c(r2, e2, s3), main2.d(e2, n2), u2 || (d2 = main2.A(e2, "click", function() {
          main2.F(t3[3] ? t3[3] : t3[4]) && (t3[3] ? t3[3] : t3[4]).apply(this, arguments);
        }), u2 = true);
      }, p(n3, r2) {
        t3 = n3, 512 & r2 && main2.h(e2, "background-color", t3[9]), 1024 & r2 && main2.h(e2, "color", t3[10]), 13 & r2 && s2 !== (s2 = (t3[3] ? "Remove" : "Delete") + "Tag-" + t3[0].value.replace(" ", "-") + "\r\n" + (t3[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (t3[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + t3[2] + " svelte-mrene9") && main2.b(e2, "class", s2);
      }, d(t4) {
        t4 && main2.f(e2), u2 = false, d2();
      }};
    }
    function le(t3) {
      let e2, n2, c2, m2, $2, y2, v2, w2, x2;
      const _2 = [se, re], M2 = [];
      function k2(t4, e3) {
        return t4[0].value == "\u{1F496}" ? 0 : 1;
      }
      n2 = k2(t3), c2 = M2[n2] = _2[n2](t3);
      let C2 = (t3[3] || t3[1] && t3[0].value != "\uC0DD\uC77C") && ce(t3);
      return {c() {
        e2 = main2.e("span"), c2.c(), $2 = main2.a(), C2 && C2.c(), y2 = main2.G(), main2.h(e2, "background-color", t3[9]), main2.h(e2, "color", t3[10]), main2.b(e2, "class", m2 = "Tag-" + t3[0].value.replace(" ", "-") + " " + t3[7] + " " + t3[8] + " m-0.5 mr-0 text-" + t3[2] + "\r\n" + (t3[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), M2[n2].m(e2, null), main2.c(r2, $2, s2), C2 && C2.m(r2, s2), main2.c(r2, y2, s2), v2 = true, w2 || (x2 = [main2.A(e2, "pointerdown", function() {
          main2.F(t3[5]) && t3[5].apply(this, arguments);
        }), main2.A(e2, "pointerup", function() {
          main2.F(t3[6]) && t3[6].apply(this, arguments);
        }), main2.A(e2, "click", function() {
          main2.F(t3[11](t3[0])) && t3[11](t3[0]).apply(this, arguments);
        })], w2 = true);
      }, p(r2, [s2]) {
        let o2 = n2;
        n2 = k2(t3 = r2), n2 === o2 ? M2[n2].p(t3, s2) : (main2.D(), main2.v(M2[o2], 1, 1, () => {
          M2[o2] = null;
        }), main2.x(), c2 = M2[n2], c2 ? c2.p(t3, s2) : (c2 = M2[n2] = _2[n2](t3), c2.c()), main2.p(c2, 1), c2.m(e2, null)), (!v2 || 512 & s2) && main2.h(e2, "background-color", t3[9]), (!v2 || 1024 & s2) && main2.h(e2, "color", t3[10]), (!v2 || 389 & s2 && m2 !== (m2 = "Tag-" + t3[0].value.replace(" ", "-") + " " + t3[7] + " " + t3[8] + " m-0.5 mr-0 text-" + t3[2] + "\r\n" + (t3[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9")) && main2.b(e2, "class", m2), t3[3] || t3[1] && t3[0].value != "\uC0DD\uC77C" ? C2 ? C2.p(t3, s2) : (C2 = ce(t3), C2.c(), C2.m(y2.parentNode, y2)) : C2 && (C2.d(1), C2 = null);
      }, i(t4) {
        v2 || (main2.p(c2), v2 = true);
      }, o(t4) {
        main2.v(c2), v2 = false;
      }, d(t4) {
        t4 && main2.f(e2), M2[n2].d(), t4 && main2.f($2), C2 && C2.d(t4), t4 && main2.f(y2), w2 = false, main2.B(x2);
      }};
    }
    function ae(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2, h2, g2, p2, m2, $2, y2;
      main2.g(t3, at, (t4) => n2(14, u2 = t4)), main2.g(t3, yt, (t4) => n2(15, d2 = t4)), main2.g(t3, Ct, (t4) => n2(16, f2 = t4)), main2.g(t3, _t, (t4) => n2(17, h2 = t4)), main2.g(t3, ut, (t4) => n2(18, g2 = t4)), main2.g(t3, bt, (t4) => n2(19, p2 = t4)), main2.g(t3, main2.U, (t4) => n2(20, m2 = t4)), main2.g(t3, main2.V, (t4) => n2(21, $2 = t4)), main2.g(t3, main2.W, (t4) => n2(22, y2 = t4));
      var v2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t5) {
            try {
              l3(r3.next(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function c3(t5) {
            try {
              l3(r3.throw(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function l3(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      let {tag: w2} = e2, {canDelete: b2 = false} = e2, {size: x2 = "xs"} = e2, {onRemove: _2 = null} = e2;
      main2.V.subscribe((t4) => {
        t4.tag || p2 == it || main2.X(bt, p2 = it, p2), t4.tag && (u2.has(t4.tag) ? p2.value != t4.tag && main2.X(bt, p2 = u2.get(t4.tag), p2) : m2("./", Object.assign(Object.assign({}, $2), {tag: ""})));
      });
      const {open: M2} = main2.O("simple-modal"), k2 = () => {
        M2(Ft, {tag: w2});
      };
      let C2;
      const S2 = new Map([["\uC0DD\uC77C", {icon: ee.faBirthdayCake, color: "red-600"}], ["\uD2B8\uC704\uD130", {icon: Qt.faTwitter, color: "blue-500"}], ["\uD398\uC774\uC2A4\uBD81", {icon: Xt.faFacebook, color: "blue-900"}], ["\uC778\uC2A4\uD0C0", {icon: Gt.faInstagram, color: "red-500"}], ["\uC720\uD29C\uBE0C", {icon: te.faYoutube, color: "red-600"}]]);
      return t3.$$set = (t4) => {
        "tag" in t4 && n2(0, w2 = t4.tag), "canDelete" in t4 && n2(1, b2 = t4.canDelete), "size" in t4 && n2(2, x2 = t4.size), "onRemove" in t4 && n2(3, _2 = t4.onRemove);
      }, t3.$$.update = () => {
        507905 & t3.$$.dirty && n2(4, r2 = () => v2(void 0, void 0, void 0, function* () {
          const t4 = u2.get(w2.value);
          d2 && (yield pt.deleteTag(f2.id, t4.value)), h2.get(t4).delete(f2.id), _t.set(h2), g2.get(f2.id).delete(t4), ut.set(g2);
        })), 1 & t3.$$.dirty && n2(5, s2 = () => {
          Ht.has(w2.value) ? n2(13, C2 = setTimeout(() => {
            console.log("\uAE30\uBCF8 \uD0DC\uADF8\uB294 \uC544\uC9C1 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
          }, 300)) : n2(13, C2 = setTimeout(k2, 300));
        }), 8192 & t3.$$.dirty && n2(6, i2 = (t4) => {
          clearTimeout(C2);
        }), 1 & t3.$$.dirty && n2(7, o2 = w2.color == "#fff" ? "border-2 p-0.5" : "p-1"), 11 & t3.$$.dirty && n2(8, c2 = _2 || b2 && w2.value != "\uC0DD\uC77C" ? "rounded-l border-r-0" : "rounded"), 1 & t3.$$.dirty && n2(9, l2 = w2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#333333" : w2.color), 1 & t3.$$.dirty && n2(10, a3 = w2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#b299e6" : w2.value == "\u{1F496}" ? "#ffb40d" : "black");
      }, [w2, b2, x2, _2, r2, s2, i2, o2, c2, l2, a3, (t4) => () => {
        bt.set(t4), y2("./", Object.assign(Object.assign({}, $2), {tag: p2.value, nowPage: 1}));
      }, S2, C2, u2, d2, f2, h2, g2];
    }
    class ue extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ae, le, main2.s, {tag: 0, canDelete: 1, size: 2, onRemove: 3});
      }
    }
    function de(t3) {
      let e2, n2, s2, l2 = (t3[0].slice(11) == "00:00" ? t3[0].slice(0, 10) : t3[0]) + "";
      return {c() {
        e2 = main2.e("span"), n2 = main2.t(l2), main2.h(e2, "background-color", "pink"), main2.b(e2, "class", s2 = "border-1 rounded\r\ntext-black\r\n" + (t3[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t3[1]);
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.d(e2, n2);
      }, p(t4, [r2]) {
        1 & r2 && l2 !== (l2 = (t4[0].slice(11) == "00:00" ? t4[0].slice(0, 10) : t4[0]) + "") && main2.o(n2, l2), 2 & r2 && s2 !== (s2 = "border-1 rounded\r\ntext-black\r\n" + (t4[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t4[1]) && main2.b(e2, "class", s2);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function fe(t3, e2, n2) {
      let {time: r2} = e2, {size: s2 = "xs"} = e2;
      return t3.$$set = (t4) => {
        "time" in t4 && n2(0, r2 = t4.time), "size" in t4 && n2(1, s2 = t4.size);
      }, [r2, s2];
    }
    class he extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, fe, de, main2.s, {time: 0, size: 1});
      }
    }
    function ge(t3) {
      let e2, n2, c2, a3, u2;
      return {c() {
        e2 = main2.e("input"), n2 = main2.a(), c2 = main2.e("button"), c2.textContent = "\uCD94\uAC00", main2.b(e2, "type", "text"), main2.b(e2, "id", "TagInput"), main2.b(e2, "class", "border-2 border-gray p-1 rounded w-16 text-xs"), main2.b(e2, "placeholder", "\uC0C8 \uD0DC\uADF8"), main2.b(c2, "id", "AddTagButton"), main2.b(c2, "class", "text-xs shadow rounded bg-red-400 p-1 m-1");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.N(e2, t3[0]), main2.c(r2, n2, s2), main2.c(r2, c2, s2), a3 || (u2 = [main2.A(e2, "input", t3[3]), main2.A(e2, "keypress", t3[4]), main2.A(c2, "click", t3[1])], a3 = true);
      }, p(t4, [n3]) {
        1 & n3 && e2.value !== t4[0] && main2.N(e2, t4[0]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), t4 && main2.f(c2), a3 = false, main2.B(u2);
      }};
    }
    function pe(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2;
      main2.g(t3, vt, (t4) => n2(0, s2 = t4)), main2.g(t3, wt, (t4) => n2(2, i2 = t4)), main2.g(t3, at, (t4) => n2(6, o2 = t4)), main2.g(t3, _t, (t4) => n2(7, c2 = t4)), main2.g(t3, Ct, (t4) => n2(8, l2 = t4)), main2.g(t3, yt, (t4) => n2(9, a3 = t4)), main2.g(t3, ut, (t4) => n2(10, u2 = t4));
      var d2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t5) {
            try {
              l3(r3.next(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function c3(t5) {
            try {
              l3(r3.throw(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function l3(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      const f2 = () => d2(void 0, void 0, void 0, function* () {
        let t4 = r2;
        o2.has(s2) ? (t4 = o2.get(s2), c2.get(t4).add(l2.id)) : (c2.set(r2, new Set([l2.id])), o2.set(s2, r2), at.set(o2), a3 && (yield gt.addTag(r2))), _t.set(c2), u2.has(l2.id) ? u2.get(l2.id).add(t4) : u2.set(l2.id, new Set([t4])), ut.set(u2), a3 && (console.log(t4), yield pt.addTag(l2.id, s2)), main2.X(vt, s2 = "", s2), main2.X(wt, i2 = (i2 + 1) % 12, i2);
      });
      return t3.$$.update = () => {
        5 & t3.$$.dirty && (r2 = {value: s2, color: Vt[i2]});
      }, [s2, f2, i2, function() {
        s2 = this.value, vt.set(s2);
      }, (t4) => {
        t4.code === "Enter" && f2();
      }];
    }
    class me extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, pe, ge, main2.s, {});
      }
    }
    var $e = Ut(function(t3, e2) {
      Object.defineProperty(e2, "__esModule", {value: true});
      var n2 = "star", r2 = [], s2 = "f005", i2 = "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z";
      e2.definition = {prefix: "far", iconName: n2, icon: [576, 512, r2, s2, i2]}, e2.faStar = e2.definition, e2.prefix = "far", e2.iconName = n2, e2.width = 576, e2.height = 512, e2.ligatures = r2, e2.unicode = s2, e2.svgPathData = i2;
    });
    function ye(t3) {
      let e2, n2, c2, d2, f2, g2, v2;
      return n2 = new Zt({props: {class: "float-" + t3[0] + " text-xl", icon: t3[1] ? ne.faStar : $e.faStar}}), {c() {
        e2 = main2.e("label"), main2.q(n2.$$.fragment), c2 = main2.a(), d2 = main2.e("input"), main2.h(e2, "color", t3[1] ? "#ffb40d" : "#999"), main2.b(e2, "for", "favorite"), main2.b(d2, "type", "checkbox"), main2.b(d2, "class", "hidden"), main2.b(d2, "id", "favorite");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.r(n2, e2, null), main2.c(r2, c2, s2), main2.c(r2, d2, s2), f2 = true, g2 || (v2 = main2.A(e2, "click", function() {
          main2.F(t3[2]) && t3[2].apply(this, arguments);
        }), g2 = true);
      }, p(r2, [s2]) {
        t3 = r2;
        const i2 = {};
        1 & s2 && (i2.class = "float-" + t3[0] + " text-xl"), 2 & s2 && (i2.icon = t3[1] ? ne.faStar : $e.faStar), n2.$set(i2), (!f2 || 2 & s2) && main2.h(e2, "color", t3[1] ? "#ffb40d" : "#999");
      }, i(t4) {
        f2 || (main2.p(n2.$$.fragment, t4), f2 = true);
      }, o(t4) {
        main2.v(n2.$$.fragment, t4), f2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.w(n2), t4 && main2.f(c2), t4 && main2.f(d2), g2 = false, v2();
      }};
    }
    function ve(t3, e2, n2) {
      let r2, s2, i2, o2, c2;
      main2.g(t3, at, (t4) => n2(5, o2 = t4)), main2.g(t3, _t, (t4) => n2(6, c2 = t4));
      let {pm: l2} = e2, {float: a3 = "right"} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(3, l2 = t4.pm), "float" in t4 && n2(0, a3 = t4.float);
      }, t3.$$.update = () => {
        32 & t3.$$.dirty && n2(4, r2 = o2.get("\u{1F496}")), 88 & t3.$$.dirty && n2(2, i2 = () => {
          const t4 = c2.get(r2);
          t4.has(l2.id) ? t4.delete(l2.id) : t4.add(l2.id), _t.set(c2);
        }), 88 & t3.$$.dirty && n2(1, s2 = c2.get(r2).has(l2.id));
      }, [a3, s2, i2, l2, r2, o2, c2];
    }
    class we extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ve, ye, main2.s, {pm: 3, float: 0});
      }
    }
    function be(t3) {
      let e2, n2;
      return e2 = new ue({props: {tag: t3[1], size: t3[0]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, [n3]) {
        const r2 = {};
        2 & n3 && (r2.tag = t4[1]), 1 & n3 && (r2.size = t4[0]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function xe(t3, e2, n2) {
      let r2, s2;
      main2.g(t3, at, (t4) => n2(3, s2 = t4));
      let {pm: i2} = e2, {size: o2 = "xs"} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(2, i2 = t4.pm), "size" in t4 && n2(0, o2 = t4.size);
      }, t3.$$.update = () => {
        12 & t3.$$.dirty && n2(1, r2 = s2.get(i2.member));
      }, [o2, r2, i2, s2];
    }
    class _e extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, xe, be, main2.s, {pm: 2, size: 0});
      }
    }
    function Me(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[4] = e2[n2], r2;
    }
    function ke(t3) {
      let e2, n2, a3, u2, d2, f2, h2, g2 = t3[4].name + "";
      return {c() {
        e2 = main2.e("label"), n2 = main2.e("input"), a3 = main2.a(), u2 = main2.t(g2), d2 = main2.a(), main2.b(n2, "type", "radio"), n2.__value = t3[4].path, n2.value = n2.__value, t3[3][0].push(n2);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), n2.checked = n2.__value === t3[0], main2.d(e2, a3), main2.d(e2, u2), main2.d(e2, d2), f2 || (h2 = main2.A(n2, "change", t3[2]), f2 = true);
      }, p(t4, e3) {
        1 & e3 && (n2.checked = n2.__value === t4[0]);
      }, d(r2) {
        r2 && main2.f(e2), t3[3][0].splice(t3[3][0].indexOf(n2), 1), f2 = false, h2();
      }};
    }
    function Ce(t3) {
      let e2, n2, c2, l2 = t3[1], a3 = [];
      for (let e3 = 0; e3 < l2.length; e3 += 1)
        a3[e3] = ke(Me(t3, l2, e3));
      return {c() {
        e2 = main2.e("h3"), e2.textContent = "\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.", n2 = main2.a(), c2 = main2.e("div");
        for (let t4 = 0; t4 < a3.length; t4 += 1)
          a3[t4].c();
        main2.b(e2, "class", "svelte-qli48t"), main2.b(c2, "class", "flex flex-col p-4");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.c(t4, n2, r2), main2.c(t4, c2, r2);
        for (let t5 = 0; t5 < a3.length; t5 += 1)
          a3[t5].m(c2, null);
      }, p(t4, [e3]) {
        if (3 & e3) {
          let n3;
          for (l2 = t4[1], n3 = 0; n3 < l2.length; n3 += 1) {
            const r2 = Me(t4, l2, n3);
            a3[n3] ? a3[n3].p(r2, e3) : (a3[n3] = ke(r2), a3[n3].c(), a3[n3].m(c2, null));
          }
          for (; n3 < a3.length; n3 += 1)
            a3[n3].d(1);
          a3.length = l2.length;
        }
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), t4 && main2.f(c2), main2.y(a3, t4);
      }};
    }
    function Se(t3, e2, n2) {
      let r2;
      main2.g(t3, mt, (t4) => n2(0, r2 = t4));
      return [r2, [{path: "la-vie-en-rose", name: "\uB77C\uBE44\uC559 \uB85C\uC988"}, {path: "one-the-story", name: "One The Story \uD3EC\uC2A4\uD130"}, {path: "latest", name: "\uCD5C\uC2E0 \uD504\uBA54"}], function() {
        r2 = this.__value, mt.set(r2);
      }, [[]]];
    }
    class Oe extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Se, Ce, main2.s, {});
      }
    }
    function je(t3) {
      let e2, n2, s2, c2;
      return {c() {
        e2 = main2.e("img"), e2.src !== (n2 = "./img/" + t3[1]) && main2.b(e2, "src", n2), main2.b(e2, "class", "w-11 h-11 rounded-full border-gray-100 border-2\r\nfloat-left"), main2.b(e2, "alt", "");
      }, m(n3, r2) {
        main2.c(n3, e2, r2), s2 || (c2 = [main2.A(e2, "pointerdown", t3[5]), main2.A(e2, "pointerup", t3[6]), main2.A(e2, "mousedown", t3[7]), main2.A(e2, "mouseup", t3[8])], s2 = true);
      }, p(t4, [r2]) {
        2 & r2 && e2.src !== (n2 = "./img/" + t4[1]) && main2.b(e2, "src", n2);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), s2 = false, main2.B(c2);
      }};
    }
    function Le(t3, e2, n2) {
      let r2, s2;
      main2.g(t3, mt, (t4) => n2(4, s2 = t4));
      let {member: i2} = e2;
      const {open: o2} = main2.O("simple-modal"), c2 = () => {
        o2(Oe, {});
      };
      let l2;
      return t3.$$set = (t4) => {
        "member" in t4 && n2(3, i2 = t4.member);
      }, t3.$$.update = () => {
        24 & t3.$$.dirty && n2(1, r2 = i2 == "\uC6B4\uC601\uD300" ? "izone-logo.png" : `profile/${s2}/${i2}.jpg`);
      }, [l2, r2, c2, i2, s2, () => {
        n2(0, l2 = setTimeout(c2, 300));
      }, (t4) => {
        clearTimeout(l2);
      }, () => {
        n2(0, l2 = setTimeout(c2, 500));
      }, (t4) => {
        clearTimeout(l2);
      }];
    }
    class Pe extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Le, je, main2.s, {member: 3});
      }
    }
    function Ie(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[16] = e2[n2], r2;
    }
    function Be(t3) {
      let e2, n2;
      return e2 = new ue({props: {tag: t3[16], canDelete: true, size: "sm"}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        4 & n3 && (r2.tag = t4[16]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function Ee(t3) {
      let e2, n2, s2, a3, u2;
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("div"), main2.b(n2, "contenteditable", "false"), t3[3] === void 0 && main2.j(() => t3[13].call(n2)), main2.b(e2, "id", "MailDetailCardContent"), main2.b(e2, "class", "h-5/6 overflow-y-auto p-1");
      }, m(r2, s3) {
        main2.c(r2, e2, s3), main2.d(e2, n2), t3[3] !== void 0 && (n2.innerHTML = t3[3]), a3 || (u2 = main2.A(n2, "input", t3[13]), a3 = true);
      }, p(t4, e3) {
        8 & e3 && t4[3] !== n2.innerHTML && (n2.innerHTML = t4[3]);
      }, i(t4) {
        s2 || main2.j(() => {
          s2 = main2.Y(n2, a, {duration: 300}), s2.start();
        });
      }, o: main2.n, d(t4) {
        t4 && main2.f(e2), a3 = false, u2();
      }};
    }
    function ze(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("button"), e2.textContent = "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30\u{1F5C3}\uFE0F", main2.b(e2, "class", "shadow rounded bg-red-200 p-1 mt-2");
      }, m(r2, i2) {
        main2.c(r2, e2, i2), n2 || (s2 = main2.A(e2, "click", t3[14]), n2 = true);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e2), n2 = false, s2();
      }};
    }
    function Te(t3) {
      let e2, n2, l2, a3, d2, v2, w2, b2, x2, _2, M2, k2, C2, S2, O2, j2, I2, E2, z2, T2, N2 = t3[1].subject + "";
      l2 = new we({props: {pm: t3[1]}}), d2 = new Pe({props: {member: t3[1].member}}), _2 = new _e({props: {pm: t3[1], size: "sm"}}), k2 = new he({props: {time: t3[1].time, size: "sm"}});
      let A2 = t3[2], W2 = [];
      for (let e3 = 0; e3 < A2.length; e3 += 1)
        W2[e3] = Be(Ie(t3, A2, e3));
      const D2 = (t4) => main2.v(W2[t4], 1, 1, () => {
        W2[t4] = null;
      });
      I2 = new me({});
      let R2 = t3[3] && Ee(t3), F2 = t3[5] && ze(t3);
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("div"), main2.q(l2.$$.fragment), a3 = main2.a(), main2.q(d2.$$.fragment), v2 = main2.a(), w2 = main2.e("h4"), b2 = main2.t(N2), x2 = main2.a(), main2.q(_2.$$.fragment), M2 = main2.a(), main2.q(k2.$$.fragment), C2 = main2.a(), S2 = main2.e("br"), O2 = main2.a();
        for (let t4 = 0; t4 < W2.length; t4 += 1)
          W2[t4].c();
        j2 = main2.a(), main2.q(I2.$$.fragment), E2 = main2.a(), R2 && R2.c(), z2 = main2.a(), F2 && F2.c(), main2.b(w2, "class", "text-xl w-4/5"), main2.b(n2, "id", "MailDetailCardHeader"), main2.b(n2, "class", "relative w-full leading-loose"), main2.b(e2, "id", "MailDetailCard"), main2.h(e2, "max-height", t3[4] && t3[0] ? "70%" : "90%"), main2.h(e2, "min-height", "300px"), main2.b(e2, "class", "\r\nshadow-2xl rounded-md bg-white \r\nw-full mt-2 p-2\r\nflex flex-col");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.d(e2, n2), main2.r(l2, n2, null), main2.d(n2, a3), main2.r(d2, n2, null), main2.d(n2, v2), main2.d(n2, w2), main2.d(w2, b2), main2.d(n2, x2), main2.r(_2, n2, null), main2.d(n2, M2), main2.r(k2, n2, null), main2.d(n2, C2), main2.d(n2, S2), main2.d(n2, O2);
        for (let t5 = 0; t5 < W2.length; t5 += 1)
          W2[t5].m(n2, null);
        main2.d(n2, j2), main2.r(I2, n2, null), main2.d(e2, E2), R2 && R2.m(e2, null), main2.d(e2, z2), F2 && F2.m(e2, null), T2 = true;
      }, p(t4, [r2]) {
        const s2 = {};
        2 & r2 && (s2.pm = t4[1]), l2.$set(s2);
        const i2 = {};
        2 & r2 && (i2.member = t4[1].member), d2.$set(i2), (!T2 || 2 & r2) && N2 !== (N2 = t4[1].subject + "") && main2.o(b2, N2);
        const o2 = {};
        2 & r2 && (o2.pm = t4[1]), _2.$set(o2);
        const c2 = {};
        if (2 & r2 && (c2.time = t4[1].time), k2.$set(c2), 4 & r2) {
          let e3;
          for (A2 = t4[2], e3 = 0; e3 < A2.length; e3 += 1) {
            const s3 = Ie(t4, A2, e3);
            W2[e3] ? (W2[e3].p(s3, r2), main2.p(W2[e3], 1)) : (W2[e3] = Be(s3), W2[e3].c(), main2.p(W2[e3], 1), W2[e3].m(n2, j2));
          }
          for (main2.D(), e3 = A2.length; e3 < W2.length; e3 += 1)
            D2(e3);
          main2.x();
        }
        t4[3] ? R2 ? (R2.p(t4, r2), 8 & r2 && main2.p(R2, 1)) : (R2 = Ee(t4), R2.c(), main2.p(R2, 1), R2.m(e2, z2)) : R2 && (R2.d(1), R2 = null), t4[5] ? F2 ? F2.p(t4, r2) : (F2 = ze(t4), F2.c(), F2.m(e2, null)) : F2 && (F2.d(1), F2 = null), (!T2 || 17 & r2) && main2.h(e2, "max-height", t4[4] && t4[0] ? "70%" : "90%");
      }, i(t4) {
        if (!T2) {
          main2.p(l2.$$.fragment, t4), main2.p(d2.$$.fragment, t4), main2.p(_2.$$.fragment, t4), main2.p(k2.$$.fragment, t4);
          for (let t5 = 0; t5 < A2.length; t5 += 1)
            main2.p(W2[t5]);
          main2.p(I2.$$.fragment, t4), main2.p(R2), T2 = true;
        }
      }, o(t4) {
        main2.v(l2.$$.fragment, t4), main2.v(d2.$$.fragment, t4), main2.v(_2.$$.fragment, t4), main2.v(k2.$$.fragment, t4), W2 = W2.filter(Boolean);
        for (let t5 = 0; t5 < W2.length; t5 += 1)
          main2.v(W2[t5]);
        main2.v(I2.$$.fragment, t4), T2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.w(l2), main2.w(d2), main2.w(_2), main2.w(k2), main2.y(W2, t4), main2.w(I2), R2 && R2.d(), F2 && F2.d();
      }};
    }
    function Ne(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2, h2, g2, p2;
      main2.g(t3, Ct, (t4) => n2(1, o2 = t4)), main2.g(t3, kt, (t4) => n2(15, c2 = t4)), main2.g(t3, ut, (t4) => n2(10, l2 = t4)), main2.g(t3, at, (t4) => n2(11, a3 = t4)), main2.g(t3, St, (t4) => n2(3, u2 = t4)), main2.g(t3, It, (t4) => n2(4, d2 = t4)), main2.g(t3, Bt, (t4) => n2(5, f2 = t4)), main2.g(t3, Lt, (t4) => n2(6, h2 = t4)), main2.g(t3, main2.W, (t4) => n2(7, g2 = t4)), main2.g(t3, main2.V, (t4) => n2(8, p2 = t4));
      let {show: m2} = e2;
      main2.V.subscribe((t4) => {
        if (o2.id != t4.now_pm) {
          const e3 = c2.filter((e4) => e4.id == t4.now_pm);
          e3.length == 1 && main2.X(Ct, o2 = e3[0], o2);
        }
      });
      return t3.$$set = (t4) => {
        "show" in t4 && n2(0, m2 = t4.show);
      }, t3.$$.update = () => {
        3072 & t3.$$.dirty && n2(9, r2 = (t4) => l2.has(t4.id) ? Array.from(l2.get(t4.id)).map((t5) => a3.get(t5.value)) : []), 514 & t3.$$.dirty && n2(2, s2 = r2(o2)), 2 & t3.$$.dirty && n2(12, i2 = () => {
          main2.X(St, u2 = "", u2), async function(t4) {
            const e3 = await fetch(`./mail/${t4}.html`).then((t5) => t5.text()), n3 = e3.search('<div class="main-contents" id="mail-detail"><html><head></head><body>') + 69, r3 = e3.search("</body></html></div>");
            return e3.slice(n3, r3);
          }(o2.id).then((t4) => {
            setTimeout(() => {
              main2.X(St, u2 = t4, u2);
            }, 100);
          });
        }), 4096 & t3.$$.dirty && i2();
      }, [m2, o2, s2, u2, d2, f2, h2, g2, p2, r2, l2, a3, i2, function() {
        u2 = this.innerHTML, St.set(u2);
      }, () => {
        main2.X(Lt, h2 = true, h2), g2("./", {...p2, showList: true});
      }];
    }
    class Ae extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Ne, Te, main2.s, {show: 0});
      }
    }
    function We(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[5] = e2[n2], r2;
    }
    function De(t3) {
      let e2, n2;
      return e2 = new ue({props: {tag: t3[5], size: "sm"}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        2 & n3 && (r2.tag = t4[5]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function Re(t3) {
      let e2, n2, s2, l2 = t3[1], a3 = [];
      for (let e3 = 0; e3 < l2.length; e3 += 1)
        a3[e3] = De(We(t3, l2, e3));
      const d2 = (t4) => main2.v(a3[t4], 1, 1, () => {
        a3[t4] = null;
      });
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("div");
        for (let t4 = 0; t4 < a3.length; t4 += 1)
          a3[t4].c();
        main2.b(n2, "class", "flex flex-wrap"), main2.h(e2, "min-height", "43px"), main2.b(e2, "class", "AllTagList\r\n    h-36 p-2 mt-3 mb-3\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main2.Z(e2, "hidden", t3[0]);
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.d(e2, n2);
        for (let t5 = 0; t5 < a3.length; t5 += 1)
          a3[t5].m(n2, null);
        s2 = true;
      }, p(t4, [r2]) {
        if (2 & r2) {
          let e3;
          for (l2 = t4[1], e3 = 0; e3 < l2.length; e3 += 1) {
            const s3 = We(t4, l2, e3);
            a3[e3] ? (a3[e3].p(s3, r2), main2.p(a3[e3], 1)) : (a3[e3] = De(s3), a3[e3].c(), main2.p(a3[e3], 1), a3[e3].m(n2, null));
          }
          for (main2.D(), e3 = l2.length; e3 < a3.length; e3 += 1)
            d2(e3);
          main2.x();
        }
        1 & r2 && main2.Z(e2, "hidden", t4[0]);
      }, i(t4) {
        if (!s2) {
          for (let t5 = 0; t5 < l2.length; t5 += 1)
            main2.p(a3[t5]);
          s2 = true;
        }
      }, o(t4) {
        a3 = a3.filter(Boolean);
        for (let t5 = 0; t5 < a3.length; t5 += 1)
          main2.v(a3[t5]);
        s2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.y(a3, t4);
      }};
    }
    function Fe(t3, e2, n2) {
      let r2, s2, i2;
      main2.g(t3, at, (t4) => n2(2, s2 = t4)), main2.g(t3, bt, (t4) => n2(3, i2 = t4));
      let {hidden: o2} = e2;
      return t3.$$set = (t4) => {
        "hidden" in t4 && n2(0, o2 = t4.hidden);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && n2(1, r2 = Array.from(s2.values()));
      }, s2.has(i2.value) && main2.X(bt, i2 = it, i2), [o2, r2, s2];
    }
    class Ve extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Fe, Re, main2.s, {hidden: 0});
      }
    }
    function Je(t3) {
      let e2, n2, c2, l2;
      return c2 = new ue({props: {tag: t3[1].get(t3[0].value), canDelete: true, onRemove: t3[2], size: "sm"}}), {c() {
        e2 = main2.e("span"), e2.textContent = "\uD604\uC7AC :", n2 = main2.a(), main2.q(c2.$$.fragment), main2.b(e2, "class", "ml-1 mt-1");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.c(t4, n2, r2), main2.r(c2, t4, r2), l2 = true;
      }, p(t4, [e3]) {
        const n3 = {};
        3 & e3 && (n3.tag = t4[1].get(t4[0].value)), c2.$set(n3);
      }, i(t4) {
        l2 || (main2.p(c2.$$.fragment, t4), l2 = true);
      }, o(t4) {
        main2.v(c2.$$.fragment, t4), l2 = false;
      }, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), main2.w(c2, t4);
      }};
    }
    function qe(t3, e2, n2) {
      let r2, s2, i2, o2, c2;
      main2.g(t3, bt, (t4) => n2(0, r2 = t4)), main2.g(t3, jt, (t4) => n2(3, s2 = t4)), main2.g(t3, main2.W, (t4) => n2(4, i2 = t4)), main2.g(t3, main2.V, (t4) => n2(5, o2 = t4)), main2.g(t3, at, (t4) => n2(1, c2 = t4));
      return [r2, c2, () => {
        main2.X(bt, r2 = it, r2), main2.X(jt, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, o2), {tag: ""}));
      }];
    }
    class He extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, qe, Je, main2.s, {});
      }
    }
    function Ke(t3) {
      let e2, n2, s2, l2, a3;
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("a"), s2 = main2.t("\uBC88\uC5ED"), l2 = main2.e("img"), main2.b(l2, "class", "w-5 h-5 mt-0.5 float-right"), l2.src !== (a3 = "./img/papago.png") && main2.b(l2, "src", "./img/papago.png"), main2.b(l2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30"), main2.b(n2, "href", t3[0]), main2.b(n2, "target", "_blank"), main2.b(e2, "class", "w-16 p-1 shadow rounded bg-red-100 mr-1");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.d(e2, n2), main2.d(n2, s2), main2.d(n2, l2);
      }, p(t4, [e3]) {
        1 & e3 && main2.b(n2, "href", t4[0]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Ye(t3, e2, n2) {
      let r2;
      return main2.g(t3, Ot, (t4) => n2(0, r2 = t4)), [r2];
    }
    class Ze extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Ye, Ke, main2.s, {});
      }
    }
    function Ue(t3) {
      let e2, n2, s2, a3, u2;
      return {c() {
        e2 = main2.e("label"), n2 = main2.t("\uD0DC\uADF8 \uBAA9\uB85D\r\n    "), s2 = main2.e("input"), main2.b(s2, "id", "showTagListInput"), main2.b(s2, "type", "checkbox"), main2.b(e2, "class", "p-1"), main2.b(e2, "for", "showTagListInput");
      }, m(r2, i2) {
        main2.c(r2, e2, i2), main2.d(e2, n2), main2.d(e2, s2), s2.checked = t3[0], a3 || (u2 = main2.A(s2, "change", t3[1]), a3 = true);
      }, p(t4, [e3]) {
        1 & e3 && (s2.checked = t4[0]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), a3 = false, u2();
      }};
    }
    function Qe(t3, e2, n2) {
      let r2;
      return main2.g(t3, Pt, (t4) => n2(0, r2 = t4)), [r2, function() {
        r2 = this.checked, Pt.set(r2);
      }];
    }
    class Xe extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Qe, Ue, main2.s, {});
      }
    }
    function Ge(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("button"), e2.textContent = "\uBAA9\uB85D\u{1F5C3}\uFE0F", main2.b(e2, "class", "shadow rounded bg-red-200 p-1 mr-1");
      }, m(r2, i2) {
        main2.c(r2, e2, i2), n2 || (s2 = main2.A(e2, "click", t3[3]), n2 = true);
      }, p: main2.n, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), n2 = false, s2();
      }};
    }
    function tn(t3, e2, n2) {
      let r2, s2, i2;
      main2.g(t3, Lt, (t4) => n2(0, r2 = t4)), main2.g(t3, main2.W, (t4) => n2(1, s2 = t4)), main2.g(t3, main2.V, (t4) => n2(2, i2 = t4));
      return [r2, s2, i2, () => {
        main2.X(Lt, r2 = true, r2), s2("./", {...i2, showList: true});
      }];
    }
    class en extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, tn, Ge, main2.s, {});
      }
    }
    function nn(t3) {
      let e2, n2;
      return e2 = new en({}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function rn(t3) {
      let e2, n2;
      return e2 = new Xe({}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function sn(t3) {
      let e2, n2;
      return e2 = new He({}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function on(t3) {
      let e2, n2, l2, a3, d2, w2, b2, x2, _2, M2, k2, C2, S2, O2 = t3[2] && nn();
      a3 = new Ze({});
      let j2 = !t3[1] && t3[4] && rn(), L2 = t3[5].value && sn();
      return x2 = new Ve({props: {hidden: !((t3[1] || t3[6]) && t3[4])}}), M2 = new Ae({props: {show: t3[1] || t3[6]}}), {c() {
        e2 = main2.e("section"), n2 = main2.e("div"), O2 && O2.c(), l2 = main2.a(), main2.q(a3.$$.fragment), d2 = main2.a(), j2 && j2.c(), w2 = main2.a(), L2 && L2.c(), b2 = main2.a(), main2.q(x2.$$.fragment), _2 = main2.a(), main2.q(M2.$$.fragment), main2.b(n2, "class", "flex flex-row"), main2.b(e2, "id", "MailDetailSection"), main2.b(e2, "class", k2 = "h-full p-3 " + (t3[4] ? "w-4/12" : "w-full") + " flex flex-col svelte-q462jf"), main2.j(() => t3[7].call(e2)), main2.Z(e2, "hidden", t3[2] && t3[3]);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), O2 && O2.m(n2, null), main2.d(n2, l2), main2.r(a3, n2, null), main2.d(n2, d2), j2 && j2.m(n2, null), main2.d(n2, w2), L2 && L2.m(n2, null), main2.d(e2, b2), main2.r(x2, e2, null), main2.d(e2, _2), main2.r(M2, e2, null), C2 = main2.z(e2, t3[7].bind(e2)), S2 = true;
      }, p(t4, [r2]) {
        t4[2] ? O2 ? 4 & r2 && main2.p(O2, 1) : (O2 = nn(), O2.c(), main2.p(O2, 1), O2.m(n2, l2)) : O2 && (main2.D(), main2.v(O2, 1, 1, () => {
          O2 = null;
        }), main2.x()), !t4[1] && t4[4] ? j2 ? 18 & r2 && main2.p(j2, 1) : (j2 = rn(), j2.c(), main2.p(j2, 1), j2.m(n2, w2)) : j2 && (main2.D(), main2.v(j2, 1, 1, () => {
          j2 = null;
        }), main2.x()), t4[5].value ? L2 ? 32 & r2 && main2.p(L2, 1) : (L2 = sn(), L2.c(), main2.p(L2, 1), L2.m(n2, null)) : L2 && (main2.D(), main2.v(L2, 1, 1, () => {
          L2 = null;
        }), main2.x());
        const s2 = {};
        82 & r2 && (s2.hidden = !((t4[1] || t4[6]) && t4[4])), x2.$set(s2);
        const o2 = {};
        66 & r2 && (o2.show = t4[1] || t4[6]), M2.$set(o2), (!S2 || 16 & r2 && k2 !== (k2 = "h-full p-3 " + (t4[4] ? "w-4/12" : "w-full") + " flex flex-col svelte-q462jf")) && main2.b(e2, "class", k2), 28 & r2 && main2.Z(e2, "hidden", t4[2] && t4[3]);
      }, i(t4) {
        S2 || (main2.p(O2), main2.p(a3.$$.fragment, t4), main2.p(j2), main2.p(L2), main2.p(x2.$$.fragment, t4), main2.p(M2.$$.fragment, t4), S2 = true);
      }, o(t4) {
        main2.v(O2), main2.v(a3.$$.fragment, t4), main2.v(j2), main2.v(L2), main2.v(x2.$$.fragment, t4), main2.v(M2.$$.fragment, t4), S2 = false;
      }, d(t4) {
        t4 && main2.f(e2), O2 && O2.d(), main2.w(a3), j2 && j2.d(), L2 && L2.d(), main2.w(x2), main2.w(M2), C2();
      }};
    }
    function cn(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3;
      return main2.g(t3, Bt, (t4) => n2(2, s2 = t4)), main2.g(t3, Lt, (t4) => n2(3, i2 = t4)), main2.g(t3, It, (t4) => n2(4, o2 = t4)), main2.g(t3, bt, (t4) => n2(5, c2 = t4)), main2.g(t3, Pt, (t4) => n2(6, l2 = t4)), t3.$$.update = () => {
        1 & t3.$$.dirty && n2(1, r2 = 650 < a3);
      }, [a3, r2, s2, i2, o2, c2, l2, function() {
        a3 = this.clientHeight, n2(0, a3);
      }];
    }
    class ln extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, cn, on, main2.s, {});
      }
    }
    const an = dn(new Date(2021, 2, 20));
    let un = main2.L(an);
    function dn(t3) {
      let e2 = "" + (t3.getMonth() + 1), n2 = "" + t3.getDate();
      const r2 = t3.getFullYear();
      return e2.length < 2 && (e2 = "0" + e2), n2.length < 2 && (n2 = "0" + n2), [r2, e2, n2].join("-");
    }
    function fn(t3) {
      const [e2, n2, r2] = t3.split("-").map((t4) => parseInt(t4));
      return new Date(e2, n2 - 1, r2);
    }
    function hn(t3) {
      return t3.split(" ")[0].replace(/\//g, "-");
    }
    function gn(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uC774\uC804");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function pn(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uB2E4\uC74C");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function mn(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uC5B4\uC81C");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function $n(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uB0B4\uC77C");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function yn(t3) {
      let e2, n2, a3, d2, f2, g2, v2, w2, x2, _2, M2, k2, C2, S2, O2, j2, P2, B2, E2, z2, T2;
      return e2 = new Tt({props: {id: "BackPageButton", onClick: t3[8], $$slots: {default: [gn]}, $$scope: {ctx: t3}}}), _2 = new Tt({props: {id: "NextPageButton", onClick: t3[7], $$slots: {default: [pn]}, $$scope: {ctx: t3}}}), S2 = new Tt({props: {id: "toYesterdayButton", onClick: t3[5], $$slots: {default: [mn]}, $$scope: {ctx: t3}}}), B2 = new Tt({props: {id: "toTomorrowButton", onClick: t3[6], $$slots: {default: [$n]}, $$scope: {ctx: t3}}}), {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), a3 = main2.e("span"), d2 = main2.e("input"), f2 = main2.a(), g2 = main2.e("span"), v2 = main2.t("/ "), w2 = main2.t(t3[0]), x2 = main2.a(), main2.q(_2.$$.fragment), M2 = main2.a(), k2 = main2.e("br"), C2 = main2.a(), main2.q(S2.$$.fragment), O2 = main2.a(), j2 = main2.e("input"), P2 = main2.a(), main2.q(B2.$$.fragment), main2.b(d2, "id", "NowPageInput"), main2.b(d2, "type", "number"), main2.b(d2, "class", "w-9"), main2.b(d2, "min", "1"), main2.b(d2, "max", t3[0]), main2.Z(d2, "bg-red-300", t3[0] <= t3[1]), main2.b(a3, "id", "NowPageSpan"), main2.b(a3, "class", "bg-white border-2 border-gray-400 rounded w-24 p-1"), main2.Z(a3, "bg-red-300", t3[0] <= t3[1]), main2.Z(a3, "border-red-300", t3[0] <= t3[1]), main2.b(j2, "id", "DateStringInput"), main2.b(j2, "type", "date"), main2.b(j2, "class", "border-1 w-36 border-gray-400 rounded");
      }, m(r2, s2) {
        main2.r(e2, r2, s2), main2.c(r2, n2, s2), main2.c(r2, a3, s2), main2.d(a3, d2), main2.N(d2, t3[1]), main2.d(a3, f2), main2.d(a3, g2), main2.d(g2, v2), main2.d(g2, w2), main2.c(r2, x2, s2), main2.r(_2, r2, s2), main2.c(r2, M2, s2), main2.c(r2, k2, s2), main2.c(r2, C2, s2), main2.r(S2, r2, s2), main2.c(r2, O2, s2), main2.c(r2, j2, s2), main2.N(j2, t3[2]), main2.c(r2, P2, s2), main2.r(B2, r2, s2), E2 = true, z2 || (T2 = [main2.A(d2, "input", t3[9]), main2.A(j2, "input", t3[10]), main2.A(j2, "change", t3[11])], z2 = true);
      }, p(t4, [n3]) {
        const r2 = {};
        8192 & n3 && (r2.$$scope = {dirty: n3, ctx: t4}), e2.$set(r2), (!E2 || 1 & n3) && main2.b(d2, "max", t4[0]), 2 & n3 && main2._(d2.value) !== t4[1] && main2.N(d2, t4[1]), 3 & n3 && main2.Z(d2, "bg-red-300", t4[0] <= t4[1]), (!E2 || 1 & n3) && main2.o(w2, t4[0]), 3 & n3 && main2.Z(a3, "bg-red-300", t4[0] <= t4[1]), 3 & n3 && main2.Z(a3, "border-red-300", t4[0] <= t4[1]);
        const s2 = {};
        8192 & n3 && (s2.$$scope = {dirty: n3, ctx: t4}), _2.$set(s2);
        const o2 = {};
        8192 & n3 && (o2.$$scope = {dirty: n3, ctx: t4}), S2.$set(o2), 4 & n3 && main2.N(j2, t4[2]);
        const c2 = {};
        8192 & n3 && (c2.$$scope = {dirty: n3, ctx: t4}), B2.$set(c2);
      }, i(t4) {
        E2 || (main2.p(e2.$$.fragment, t4), main2.p(_2.$$.fragment, t4), main2.p(S2.$$.fragment, t4), main2.p(B2.$$.fragment, t4), E2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(_2.$$.fragment, t4), main2.v(S2.$$.fragment, t4), main2.v(B2.$$.fragment, t4), E2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), t4 && main2.f(a3), t4 && main2.f(x2), main2.w(_2, t4), t4 && main2.f(M2), t4 && main2.f(k2), t4 && main2.f(C2), main2.w(S2, t4), t4 && main2.f(O2), t4 && main2.f(j2), t4 && main2.f(P2), main2.w(B2, t4), z2 = false, main2.B(T2);
      }};
    }
    function vn(t3, e2, n2) {
      let r2, s2, i2, o2, c2;
      main2.g(t3, bt, (t4) => n2(12, r2 = t4)), main2.g(t3, jt, (t4) => n2(1, s2 = t4)), main2.g(t3, un, (t4) => n2(2, i2 = t4)), main2.g(t3, main2.W, (t4) => n2(3, o2 = t4)), main2.g(t3, main2.V, (t4) => n2(4, c2 = t4));
      let {maxPage: l2} = e2;
      main2.V.subscribe((t4) => {
        const e3 = parseInt(t4.nowPage);
        s2 != e3 && main2.X(jt, s2 = t4.nowPage ? e3 : 1, s2), i2 != t4.dateString && main2.X(un, i2 = t4.dateString || an, i2);
      });
      return t3.$$set = (t4) => {
        "maxPage" in t4 && n2(0, l2 = t4.maxPage);
      }, [l2, s2, i2, o2, c2, function() {
        if (r2.value)
          return s2 < l2 && main2.X(jt, s2 += 1, s2), null;
        const [t4, e3, n3] = i2.split("-").map((t5) => parseInt(t5)), a3 = new Date(t4, e3 - 1, n3 - 1);
        main2.X(un, i2 = dn(a3), i2), main2.X(jt, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: i2}));
      }, function() {
        if (r2.value)
          return s2 > 1 && main2.X(jt, s2 -= 1, s2), null;
        const [t4, e3, n3] = i2.split("-").map((t5) => parseInt(t5)), l3 = new Date(t4, e3 - 1, n3 + 1);
        main2.X(un, i2 = dn(l3), i2), main2.X(jt, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: i2}));
      }, function() {
        s2 < l2 ? (main2.X(jt, s2 += 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 > 1 ? (main2.X(jt, s2 -= 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 = main2._(this.value), jt.set(s2);
      }, function() {
        i2 = this.value, un.set(i2);
      }, () => {
        main2.X(jt, s2 = 1, s2), o2("./", {...c2, nowPage: s2, dateString: i2});
      }];
    }
    class wn extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, vn, yn, main2.s, {maxPage: 0});
      }
    }
    function bn(t3) {
      return Array.isArray ? Array.isArray(t3) : On(t3) === "[object Array]";
    }
    function xn(t3) {
      return typeof t3 == "string";
    }
    function _n(t3) {
      return typeof t3 == "number";
    }
    function Mn(t3) {
      return t3 === true || t3 === false || function(t4) {
        return kn(t4) && t4 !== null;
      }(t3) && On(t3) == "[object Boolean]";
    }
    function kn(t3) {
      return typeof t3 == "object";
    }
    function Cn(t3) {
      return t3 != null;
    }
    function Sn(t3) {
      return !t3.trim().length;
    }
    function On(t3) {
      return t3 == null ? t3 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t3);
    }
    const jn = Object.prototype.hasOwnProperty;
    class Ln {
      constructor(t3) {
        this._keys = [], this._keyMap = {};
        let e2 = 0;
        t3.forEach((t4) => {
          let n2 = Pn(t4);
          e2 += n2.weight, this._keys.push(n2), this._keyMap[n2.id] = n2, e2 += n2.weight;
        }), this._keys.forEach((t4) => {
          t4.weight /= e2;
        });
      }
      get(t3) {
        return this._keyMap[t3];
      }
      keys() {
        return this._keys;
      }
      toJSON() {
        return JSON.stringify(this._keys);
      }
    }
    function Pn(t3) {
      let e2 = null, n2 = null, r2 = null, s2 = 1;
      if (xn(t3) || bn(t3))
        r2 = t3, e2 = In(t3), n2 = Bn(t3);
      else {
        if (!jn.call(t3, "name"))
          throw new Error(((t4) => `Missing ${t4} property in key`)("name"));
        const i2 = t3.name;
        if (r2 = i2, jn.call(t3, "weight") && (s2 = t3.weight, s2 <= 0))
          throw new Error(((t4) => `Property 'weight' in key '${t4}' must be a positive integer`)(i2));
        e2 = In(i2), n2 = Bn(i2);
      }
      return {path: e2, id: n2, weight: s2, src: r2};
    }
    function In(t3) {
      return bn(t3) ? t3 : t3.split(".");
    }
    function Bn(t3) {
      return bn(t3) ? t3.join(".") : t3;
    }
    var En = {isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: (t3, e2) => t3.score === e2.score ? t3.idx < e2.idx ? -1 : 1 : t3.score < e2.score ? -1 : 1, includeMatches: false, findAllMatches: false, minMatchCharLength: 1, location: 0, threshold: 0.6, distance: 100, ...{useExtendedSearch: false, getFn: function(t3, e2) {
      let n2 = [], r2 = false;
      const s2 = (t4, e3, i2) => {
        if (Cn(t4))
          if (e3[i2]) {
            const o2 = t4[e3[i2]];
            if (!Cn(o2))
              return;
            if (i2 === e3.length - 1 && (xn(o2) || _n(o2) || Mn(o2)))
              n2.push(function(t5) {
                return t5 == null ? "" : function(t6) {
                  if (typeof t6 == "string")
                    return t6;
                  let e4 = t6 + "";
                  return e4 == "0" && 1 / t6 == -1 / 0 ? "-0" : e4;
                }(t5);
              }(o2));
            else if (bn(o2)) {
              r2 = true;
              for (let t5 = 0, n3 = o2.length; t5 < n3; t5 += 1)
                s2(o2[t5], e3, i2 + 1);
            } else
              e3.length && s2(o2, e3, i2 + 1);
          } else
            n2.push(t4);
      };
      return s2(t3, xn(e2) ? e2.split(".") : e2, 0), r2 ? n2 : n2[0];
    }, ignoreLocation: false, ignoreFieldNorm: false}};
    const zn = /[^ ]+/g;
    class Tn {
      constructor({getFn: t3 = En.getFn} = {}) {
        this.norm = function(t4 = 3) {
          const e2 = new Map(), n2 = Math.pow(10, t4);
          return {get(t5) {
            const r2 = t5.match(zn).length;
            if (e2.has(r2))
              return e2.get(r2);
            const s2 = 1 / Math.sqrt(r2), i2 = parseFloat(Math.round(s2 * n2) / n2);
            return e2.set(r2, i2), i2;
          }, clear() {
            e2.clear();
          }};
        }(3), this.getFn = t3, this.isCreated = false, this.setIndexRecords();
      }
      setSources(t3 = []) {
        this.docs = t3;
      }
      setIndexRecords(t3 = []) {
        this.records = t3;
      }
      setKeys(t3 = []) {
        this.keys = t3, this._keysMap = {}, t3.forEach((t4, e2) => {
          this._keysMap[t4.id] = e2;
        });
      }
      create() {
        !this.isCreated && this.docs.length && (this.isCreated = true, xn(this.docs[0]) ? this.docs.forEach((t3, e2) => {
          this._addString(t3, e2);
        }) : this.docs.forEach((t3, e2) => {
          this._addObject(t3, e2);
        }), this.norm.clear());
      }
      add(t3) {
        const e2 = this.size();
        xn(t3) ? this._addString(t3, e2) : this._addObject(t3, e2);
      }
      removeAt(t3) {
        this.records.splice(t3, 1);
        for (let e2 = t3, n2 = this.size(); e2 < n2; e2 += 1)
          this.records[e2].i -= 1;
      }
      getValueForItemAtKeyId(t3, e2) {
        return t3[this._keysMap[e2]];
      }
      size() {
        return this.records.length;
      }
      _addString(t3, e2) {
        if (!Cn(t3) || Sn(t3))
          return;
        let n2 = {v: t3, i: e2, n: this.norm.get(t3)};
        this.records.push(n2);
      }
      _addObject(t3, e2) {
        let n2 = {i: e2, $: {}};
        this.keys.forEach((e3, r2) => {
          let s2 = this.getFn(t3, e3.path);
          if (Cn(s2)) {
            if (bn(s2)) {
              let t4 = [];
              const e4 = [{nestedArrIndex: -1, value: s2}];
              for (; e4.length; ) {
                const {nestedArrIndex: n3, value: r3} = e4.pop();
                if (Cn(r3))
                  if (xn(r3) && !Sn(r3)) {
                    let e5 = {v: r3, i: n3, n: this.norm.get(r3)};
                    t4.push(e5);
                  } else
                    bn(r3) && r3.forEach((t5, n4) => {
                      e4.push({nestedArrIndex: n4, value: t5});
                    });
              }
              n2.$[r2] = t4;
            } else if (!Sn(s2)) {
              let t4 = {v: s2, n: this.norm.get(s2)};
              n2.$[r2] = t4;
            }
          }
        }), this.records.push(n2);
      }
      toJSON() {
        return {keys: this.keys, records: this.records};
      }
    }
    function Nn(t3, e2, {getFn: n2 = En.getFn} = {}) {
      const r2 = new Tn({getFn: n2});
      return r2.setKeys(t3.map(Pn)), r2.setSources(e2), r2.create(), r2;
    }
    function An(t3, {errors: e2 = 0, currentLocation: n2 = 0, expectedLocation: r2 = 0, distance: s2 = En.distance, ignoreLocation: i2 = En.ignoreLocation} = {}) {
      const o2 = e2 / t3.length;
      if (i2)
        return o2;
      const c2 = Math.abs(r2 - n2);
      return s2 ? o2 + c2 / s2 : c2 ? 1 : o2;
    }
    function Wn(t3, e2, n2, {location: r2 = En.location, distance: s2 = En.distance, threshold: i2 = En.threshold, findAllMatches: o2 = En.findAllMatches, minMatchCharLength: c2 = En.minMatchCharLength, includeMatches: l2 = En.includeMatches, ignoreLocation: a3 = En.ignoreLocation} = {}) {
      if (e2.length > 32)
        throw new Error(`Pattern length exceeds max of ${32}.`);
      const u2 = e2.length, d2 = t3.length, f2 = Math.max(0, Math.min(r2, d2));
      let h2 = i2, g2 = f2;
      const p2 = c2 > 1 || l2, m2 = p2 ? Array(d2) : [];
      let $2;
      for (; ($2 = t3.indexOf(e2, g2)) > -1; ) {
        let t4 = An(e2, {currentLocation: $2, expectedLocation: f2, distance: s2, ignoreLocation: a3});
        if (h2 = Math.min(t4, h2), g2 = $2 + u2, p2) {
          let t5 = 0;
          for (; t5 < u2; )
            m2[$2 + t5] = 1, t5 += 1;
        }
      }
      g2 = -1;
      let y2 = [], v2 = 1, w2 = u2 + d2;
      const b2 = 1 << u2 - 1;
      for (let r3 = 0; r3 < u2; r3 += 1) {
        let i3 = 0, c3 = w2;
        for (; i3 < c3; ) {
          An(e2, {errors: r3, currentLocation: f2 + c3, expectedLocation: f2, distance: s2, ignoreLocation: a3}) <= h2 ? i3 = c3 : w2 = c3, c3 = Math.floor((w2 - i3) / 2 + i3);
        }
        w2 = c3;
        let l3 = Math.max(1, f2 - c3 + 1), $3 = o2 ? d2 : Math.min(f2 + c3, d2) + u2, x3 = Array($3 + 2);
        x3[$3 + 1] = (1 << r3) - 1;
        for (let i4 = $3; i4 >= l3; i4 -= 1) {
          let o3 = i4 - 1, c4 = n2[t3.charAt(o3)];
          if (p2 && (m2[o3] = +!!c4), x3[i4] = (x3[i4 + 1] << 1 | 1) & c4, r3 && (x3[i4] |= (y2[i4 + 1] | y2[i4]) << 1 | 1 | y2[i4 + 1]), x3[i4] & b2 && (v2 = An(e2, {errors: r3, currentLocation: o3, expectedLocation: f2, distance: s2, ignoreLocation: a3}), v2 <= h2)) {
            if (h2 = v2, g2 = o3, g2 <= f2)
              break;
            l3 = Math.max(1, 2 * f2 - g2);
          }
        }
        if (An(e2, {errors: r3 + 1, currentLocation: f2, expectedLocation: f2, distance: s2, ignoreLocation: a3}) > h2)
          break;
        y2 = x3;
      }
      const x2 = {isMatch: g2 >= 0, score: Math.max(1e-3, v2)};
      if (p2) {
        const t4 = function(t5 = [], e3 = En.minMatchCharLength) {
          let n3 = [], r3 = -1, s3 = -1, i3 = 0;
          for (let o3 = t5.length; i3 < o3; i3 += 1) {
            let o4 = t5[i3];
            o4 && r3 === -1 ? r3 = i3 : o4 || r3 === -1 || (s3 = i3 - 1, s3 - r3 + 1 >= e3 && n3.push([r3, s3]), r3 = -1);
          }
          return t5[i3 - 1] && i3 - r3 >= e3 && n3.push([r3, i3 - 1]), n3;
        }(m2, c2);
        t4.length ? l2 && (x2.indices = t4) : x2.isMatch = false;
      }
      return x2;
    }
    function Dn(t3) {
      let e2 = {};
      for (let n2 = 0, r2 = t3.length; n2 < r2; n2 += 1) {
        const s2 = t3.charAt(n2);
        e2[s2] = (e2[s2] || 0) | 1 << r2 - n2 - 1;
      }
      return e2;
    }
    class Rn {
      constructor(t3, {location: e2 = En.location, threshold: n2 = En.threshold, distance: r2 = En.distance, includeMatches: s2 = En.includeMatches, findAllMatches: i2 = En.findAllMatches, minMatchCharLength: o2 = En.minMatchCharLength, isCaseSensitive: c2 = En.isCaseSensitive, ignoreLocation: l2 = En.ignoreLocation} = {}) {
        if (this.options = {location: e2, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2}, this.pattern = c2 ? t3 : t3.toLowerCase(), this.chunks = [], !this.pattern.length)
          return;
        const a3 = (t4, e3) => {
          this.chunks.push({pattern: t4, alphabet: Dn(t4), startIndex: e3});
        }, u2 = this.pattern.length;
        if (u2 > 32) {
          let t4 = 0;
          const e3 = u2 % 32, n3 = u2 - e3;
          for (; t4 < n3; )
            a3(this.pattern.substr(t4, 32), t4), t4 += 32;
          if (e3) {
            const t5 = u2 - 32;
            a3(this.pattern.substr(t5), t5);
          }
        } else
          a3(this.pattern, 0);
      }
      searchIn(t3) {
        const {isCaseSensitive: e2, includeMatches: n2} = this.options;
        if (e2 || (t3 = t3.toLowerCase()), this.pattern === t3) {
          let e3 = {isMatch: true, score: 0};
          return n2 && (e3.indices = [[0, t3.length - 1]]), e3;
        }
        const {location: r2, distance: s2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, ignoreLocation: l2} = this.options;
        let a3 = [], u2 = 0, d2 = false;
        this.chunks.forEach(({pattern: e3, alphabet: f3, startIndex: h2}) => {
          const {isMatch: g2, score: p2, indices: m2} = Wn(t3, e3, f3, {location: r2 + h2, distance: s2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, includeMatches: n2, ignoreLocation: l2});
          g2 && (d2 = true), u2 += p2, g2 && m2 && (a3 = [...a3, ...m2]);
        });
        let f2 = {isMatch: d2, score: d2 ? u2 / this.chunks.length : 1};
        return d2 && n2 && (f2.indices = a3), f2;
      }
    }
    class Fn {
      constructor(t3) {
        this.pattern = t3;
      }
      static isMultiMatch(t3) {
        return Vn(t3, this.multiRegex);
      }
      static isSingleMatch(t3) {
        return Vn(t3, this.singleRegex);
      }
      search() {
      }
    }
    function Vn(t3, e2) {
      const n2 = t3.match(e2);
      return n2 ? n2[1] : null;
    }
    class Jn extends Fn {
      constructor(t3, {location: e2 = En.location, threshold: n2 = En.threshold, distance: r2 = En.distance, includeMatches: s2 = En.includeMatches, findAllMatches: i2 = En.findAllMatches, minMatchCharLength: o2 = En.minMatchCharLength, isCaseSensitive: c2 = En.isCaseSensitive, ignoreLocation: l2 = En.ignoreLocation} = {}) {
        super(t3), this._bitapSearch = new Rn(t3, {location: e2, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2});
      }
      static get type() {
        return "fuzzy";
      }
      static get multiRegex() {
        return /^"(.*)"$/;
      }
      static get singleRegex() {
        return /^(.*)$/;
      }
      search(t3) {
        return this._bitapSearch.searchIn(t3);
      }
    }
    class qn extends Fn {
      constructor(t3) {
        super(t3);
      }
      static get type() {
        return "include";
      }
      static get multiRegex() {
        return /^'"(.*)"$/;
      }
      static get singleRegex() {
        return /^'(.*)$/;
      }
      search(t3) {
        let e2, n2 = 0;
        const r2 = [], s2 = this.pattern.length;
        for (; (e2 = t3.indexOf(this.pattern, n2)) > -1; )
          n2 = e2 + s2, r2.push([e2, n2 - 1]);
        const i2 = !!r2.length;
        return {isMatch: i2, score: i2 ? 0 : 1, indices: r2};
      }
    }
    const Hn = [class extends Fn {
      constructor(t3) {
        super(t3);
      }
      static get type() {
        return "exact";
      }
      static get multiRegex() {
        return /^="(.*)"$/;
      }
      static get singleRegex() {
        return /^=(.*)$/;
      }
      search(t3) {
        const e2 = t3 === this.pattern;
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, this.pattern.length - 1]};
      }
    }, qn, class extends Fn {
      constructor(t3) {
        super(t3);
      }
      static get type() {
        return "prefix-exact";
      }
      static get multiRegex() {
        return /^\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^\^(.*)$/;
      }
      search(t3) {
        const e2 = t3.startsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, this.pattern.length - 1]};
      }
    }, class extends Fn {
      constructor(t3) {
        super(t3);
      }
      static get type() {
        return "inverse-prefix-exact";
      }
      static get multiRegex() {
        return /^!\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^!\^(.*)$/;
      }
      search(t3) {
        const e2 = !t3.startsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, t3.length - 1]};
      }
    }, class extends Fn {
      constructor(t3) {
        super(t3);
      }
      static get type() {
        return "inverse-suffix-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^!(.*)\$$/;
      }
      search(t3) {
        const e2 = !t3.endsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, t3.length - 1]};
      }
    }, class extends Fn {
      constructor(t3) {
        super(t3);
      }
      static get type() {
        return "suffix-exact";
      }
      static get multiRegex() {
        return /^"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^(.*)\$$/;
      }
      search(t3) {
        const e2 = t3.endsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [t3.length - this.pattern.length, t3.length - 1]};
      }
    }, class extends Fn {
      constructor(t3) {
        super(t3);
      }
      static get type() {
        return "inverse-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"$/;
      }
      static get singleRegex() {
        return /^!(.*)$/;
      }
      search(t3) {
        const e2 = t3.indexOf(this.pattern) === -1;
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, t3.length - 1]};
      }
    }, Jn];
    const Kn = Hn.length;
    const Yn = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    const Zn = new Set([Jn.type, qn.type]);
    class Un {
      constructor(t3, {isCaseSensitive: e2 = En.isCaseSensitive, includeMatches: n2 = En.includeMatches, minMatchCharLength: r2 = En.minMatchCharLength, ignoreLocation: s2 = En.ignoreLocation, findAllMatches: i2 = En.findAllMatches, location: o2 = En.location, threshold: c2 = En.threshold, distance: l2 = En.distance} = {}) {
        this.query = null, this.options = {isCaseSensitive: e2, includeMatches: n2, minMatchCharLength: r2, findAllMatches: i2, ignoreLocation: s2, location: o2, threshold: c2, distance: l2}, this.pattern = e2 ? t3 : t3.toLowerCase(), this.query = function(t4, e3 = {}) {
          return t4.split("|").map((t5) => {
            let n3 = t5.trim().split(Yn).filter((t6) => t6 && !!t6.trim()), r3 = [];
            for (let t6 = 0, s3 = n3.length; t6 < s3; t6 += 1) {
              const s4 = n3[t6];
              let i3 = false, o3 = -1;
              for (; !i3 && ++o3 < Kn; ) {
                const t7 = Hn[o3];
                let n4 = t7.isMultiMatch(s4);
                n4 && (r3.push(new t7(n4, e3)), i3 = true);
              }
              if (!i3)
                for (o3 = -1; ++o3 < Kn; ) {
                  const t7 = Hn[o3];
                  let n4 = t7.isSingleMatch(s4);
                  if (n4) {
                    r3.push(new t7(n4, e3));
                    break;
                  }
                }
            }
            return r3;
          });
        }(this.pattern, this.options);
      }
      static condition(t3, e2) {
        return e2.useExtendedSearch;
      }
      searchIn(t3) {
        const e2 = this.query;
        if (!e2)
          return {isMatch: false, score: 1};
        const {includeMatches: n2, isCaseSensitive: r2} = this.options;
        t3 = r2 ? t3 : t3.toLowerCase();
        let s2 = 0, i2 = [], o2 = 0;
        for (let r3 = 0, c2 = e2.length; r3 < c2; r3 += 1) {
          const c3 = e2[r3];
          i2.length = 0, s2 = 0;
          for (let e3 = 0, r4 = c3.length; e3 < r4; e3 += 1) {
            const r5 = c3[e3], {isMatch: l2, indices: a3, score: u2} = r5.search(t3);
            if (!l2) {
              o2 = 0, s2 = 0, i2.length = 0;
              break;
            }
            if (s2 += 1, o2 += u2, n2) {
              const t4 = r5.constructor.type;
              Zn.has(t4) ? i2 = [...i2, ...a3] : i2.push(a3);
            }
          }
          if (s2) {
            let t4 = {isMatch: true, score: o2 / s2};
            return n2 && (t4.indices = i2), t4;
          }
        }
        return {isMatch: false, score: 1};
      }
    }
    const Qn = [];
    function Xn(t3, e2) {
      for (let n2 = 0, r2 = Qn.length; n2 < r2; n2 += 1) {
        let r3 = Qn[n2];
        if (r3.condition(t3, e2))
          return new r3(t3, e2);
      }
      return new Rn(t3, e2);
    }
    const Gn = "$and";
    const tr = "$or";
    const er = "$path";
    const nr = "$val";
    const rr = (t3) => !(!t3[Gn] && !t3[tr]);
    const sr = (t3) => ({[Gn]: Object.keys(t3).map((e2) => ({[e2]: t3[e2]}))});
    function ir(t3, e2, {auto: n2 = true} = {}) {
      const r2 = (t4) => {
        let s2 = Object.keys(t4);
        const i2 = ((t5) => !!t5[er])(t4);
        if (!i2 && s2.length > 1 && !rr(t4))
          return r2(sr(t4));
        if (((t5) => !bn(t5) && kn(t5) && !rr(t5))(t4)) {
          const r3 = i2 ? t4[er] : s2[0], o3 = i2 ? t4[nr] : t4[r3];
          if (!xn(o3))
            throw new Error(((t5) => `Invalid value for key ${t5}`)(r3));
          const c2 = {keyId: Bn(r3), pattern: o3};
          return n2 && (c2.searcher = Xn(o3, e2)), c2;
        }
        let o2 = {children: [], operator: s2[0]};
        return s2.forEach((e3) => {
          const n3 = t4[e3];
          bn(n3) && n3.forEach((t5) => {
            o2.children.push(r2(t5));
          });
        }), o2;
      };
      return rr(t3) || (t3 = sr(t3)), r2(t3);
    }
    function or(t3, e2) {
      const n2 = t3.matches;
      e2.matches = [], Cn(n2) && n2.forEach((t4) => {
        if (!Cn(t4.indices) || !t4.indices.length)
          return;
        const {indices: n3, value: r2} = t4;
        let s2 = {indices: n3, value: r2};
        t4.key && (s2.key = t4.key.src), t4.idx > -1 && (s2.refIndex = t4.idx), e2.matches.push(s2);
      });
    }
    function cr(t3, e2) {
      e2.score = t3.score;
    }
    class lr {
      constructor(t3, e2 = {}, n2) {
        this.options = {...En, ...e2}, this.options.useExtendedSearch, this._keyStore = new Ln(this.options.keys), this.setCollection(t3, n2);
      }
      setCollection(t3, e2) {
        if (this._docs = t3, e2 && !(e2 instanceof Tn))
          throw new Error("Incorrect 'index' type");
        this._myIndex = e2 || Nn(this.options.keys, this._docs, {getFn: this.options.getFn});
      }
      add(t3) {
        Cn(t3) && (this._docs.push(t3), this._myIndex.add(t3));
      }
      remove(t3 = () => false) {
        const e2 = [];
        for (let n2 = 0, r2 = this._docs.length; n2 < r2; n2 += 1) {
          const s2 = this._docs[n2];
          t3(s2, n2) && (this.removeAt(n2), n2 -= 1, r2 -= 1, e2.push(s2));
        }
        return e2;
      }
      removeAt(t3) {
        this._docs.splice(t3, 1), this._myIndex.removeAt(t3);
      }
      getIndex() {
        return this._myIndex;
      }
      search(t3, {limit: e2 = -1} = {}) {
        const {includeMatches: n2, includeScore: r2, shouldSort: s2, sortFn: i2, ignoreFieldNorm: o2} = this.options;
        let c2 = xn(t3) ? xn(this._docs[0]) ? this._searchStringList(t3) : this._searchObjectList(t3) : this._searchLogical(t3);
        return function(t4, {ignoreFieldNorm: e3 = En.ignoreFieldNorm}) {
          t4.forEach((t5) => {
            let n3 = 1;
            t5.matches.forEach(({key: t6, norm: r3, score: s3}) => {
              const i3 = t6 ? t6.weight : null;
              n3 *= Math.pow(s3 === 0 && i3 ? Number.EPSILON : s3, (i3 || 1) * (e3 ? 1 : r3));
            }), t5.score = n3;
          });
        }(c2, {ignoreFieldNorm: o2}), s2 && c2.sort(i2), _n(e2) && e2 > -1 && (c2 = c2.slice(0, e2)), function(t4, e3, {includeMatches: n3 = En.includeMatches, includeScore: r3 = En.includeScore} = {}) {
          const s3 = [];
          return n3 && s3.push(or), r3 && s3.push(cr), t4.map((t5) => {
            const {idx: n4} = t5, r4 = {item: e3[n4], refIndex: n4};
            return s3.length && s3.forEach((e4) => {
              e4(t5, r4);
            }), r4;
          });
        }(c2, this._docs, {includeMatches: n2, includeScore: r2});
      }
      _searchStringList(t3) {
        const e2 = Xn(t3, this.options), {records: n2} = this._myIndex, r2 = [];
        return n2.forEach(({v: t4, i: n3, n: s2}) => {
          if (!Cn(t4))
            return;
          const {isMatch: i2, score: o2, indices: c2} = e2.searchIn(t4);
          i2 && r2.push({item: t4, idx: n3, matches: [{score: o2, value: t4, norm: s2, indices: c2}]});
        }), r2;
      }
      _searchLogical(t3) {
        const e2 = ir(t3, this.options), n2 = (t4, e3, r3) => {
          if (!t4.children) {
            const {keyId: n3, searcher: s3} = t4, i3 = this._findMatches({key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(e3, n3), searcher: s3});
            return i3 && i3.length ? [{idx: r3, item: e3, matches: i3}] : [];
          }
          switch (t4.operator) {
            case Gn: {
              const s3 = [];
              for (let i3 = 0, o2 = t4.children.length; i3 < o2; i3 += 1) {
                const o3 = t4.children[i3], c2 = n2(o3, e3, r3);
                if (!c2.length)
                  return [];
                s3.push(...c2);
              }
              return s3;
            }
            case tr: {
              const s3 = [];
              for (let i3 = 0, o2 = t4.children.length; i3 < o2; i3 += 1) {
                const o3 = t4.children[i3], c2 = n2(o3, e3, r3);
                if (c2.length) {
                  s3.push(...c2);
                  break;
                }
              }
              return s3;
            }
          }
        }, r2 = this._myIndex.records, s2 = {}, i2 = [];
        return r2.forEach(({$: t4, i: r3}) => {
          if (Cn(t4)) {
            let o2 = n2(e2, t4, r3);
            o2.length && (s2[r3] || (s2[r3] = {idx: r3, item: t4, matches: []}, i2.push(s2[r3])), o2.forEach(({matches: t5}) => {
              s2[r3].matches.push(...t5);
            }));
          }
        }), i2;
      }
      _searchObjectList(t3) {
        const e2 = Xn(t3, this.options), {keys: n2, records: r2} = this._myIndex, s2 = [];
        return r2.forEach(({$: t4, i: r3}) => {
          if (!Cn(t4))
            return;
          let i2 = [];
          n2.forEach((n3, r4) => {
            i2.push(...this._findMatches({key: n3, value: t4[r4], searcher: e2}));
          }), i2.length && s2.push({idx: r3, item: t4, matches: i2});
        }), s2;
      }
      _findMatches({key: t3, value: e2, searcher: n2}) {
        if (!Cn(e2))
          return [];
        let r2 = [];
        if (bn(e2))
          e2.forEach(({v: e3, i: s2, n: i2}) => {
            if (!Cn(e3))
              return;
            const {isMatch: o2, score: c2, indices: l2} = n2.searchIn(e3);
            o2 && r2.push({score: c2, key: t3, value: e3, idx: s2, norm: i2, indices: l2});
          });
        else {
          const {v: s2, n: i2} = e2, {isMatch: o2, score: c2, indices: l2} = n2.searchIn(s2);
          o2 && r2.push({score: c2, key: t3, value: s2, norm: i2, indices: l2});
        }
        return r2;
      }
    }
    lr.version = "6.4.6", lr.createIndex = Nn, lr.parseIndex = function(t3, {getFn: e2 = En.getFn} = {}) {
      const {keys: n2, records: r2} = t3, s2 = new Tn({getFn: e2});
      return s2.setKeys(n2), s2.setIndexRecords(r2), s2;
    }, lr.config = En, lr.parseQuery = ir, function(...t3) {
      Qn.push(...t3);
    }(Un);
    const ar = {useExtendedSearch: true, keys: ["subject", "preview", "body"]};
    let ur = main2.M(kt, (t3) => new lr(t3, ar));
    let dr = main2.L("");
    let fr = main2.M([kt, ur, dr], ([t3, e2, n2]) => n2 ? e2.search("'" + n2).map((t4) => t4.item) : t3);
    let hr = main2.M([fr, bt, _t, dr, un], ([t3, e2, n2, r2, s2]) => {
      const i2 = n2.get(e2), o2 = (t4) => true, c2 = e2.value && ((t4) => i2.has(t4.id)) || r2 && o2 || s2 && ((t4) => t4.time.split(" ")[0].replace(/\//g, "-") == s2) || o2;
      return t3.filter(c2);
    });
    const gr = {id: "", member: "", time: "", subject: "", preview: ""};
    let pr = main2.M([hr, jt], ([t3, e2]) => function(n2) {
      const r2 = (e2 - 1) * n2, s2 = t3.slice(r2, r2 + n2);
      return s2.length < n2 ? s2.concat(Array(n2 - s2.length).fill(gr)) : s2;
    });
    function mr(t3) {
      let e2, n2, a3, u2, d2, f2, h2;
      return {c() {
        e2 = main2.e("span"), n2 = main2.t(t3[0]), a3 = main2.t("\uAC74"), u2 = main2.a(), d2 = main2.e("input"), main2.b(e2, "id", "MailCounter"), main2.b(e2, "class", "m-2 bg-red-100 rounded p-0.5"), main2.b(d2, "id", "SearchInput"), main2.b(d2, "class", "border-1 border-gray-400 rounded w-28 pl-1"), main2.b(d2, "type", "text"), main2.b(d2, "placeholder", "\uAC80\uC0C9");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(e2, a3), main2.c(r2, u2, s2), main2.c(r2, d2, s2), main2.N(d2, t3[1]), f2 || (h2 = main2.A(d2, "input", t3[2]), f2 = true);
      }, p(t4, [e3]) {
        1 & e3 && main2.o(n2, t4[0]), 2 & e3 && d2.value !== t4[1] && main2.N(d2, t4[1]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(u2), t4 && main2.f(d2), f2 = false, h2();
      }};
    }
    function $r(t3, e2, n2) {
      let r2, s2, i2, o2;
      main2.g(t3, dr, (t4) => n2(1, r2 = t4)), main2.g(t3, jt, (t4) => n2(3, s2 = t4)), main2.g(t3, main2.W, (t4) => n2(4, i2 = t4)), main2.g(t3, main2.V, (t4) => n2(5, o2 = t4));
      let {search_length: c2} = e2;
      return main2.V.subscribe((t4) => {
        r2 != t4.search && main2.X(dr, r2 = t4.search || "", r2);
      }), dr.subscribe((t4) => {
        main2.X(jt, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, o2), {search: t4}));
      }), t3.$$set = (t4) => {
        "search_length" in t4 && n2(0, c2 = t4.search_length);
      }, [c2, r2, function() {
        r2 = this.value, dr.set(r2);
      }];
    }
    class yr extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, $r, mr, main2.s, {search_length: 0});
      }
    }
    function vr(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uD0DC\uADF8 \uBD88\uB7EC\uC624\uAE30\u2B07\uFE0F");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function wr(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uD0DC\uADF8 \uC62C\uB9AC\uAE30\u2B06\uFE0F");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function br(t3) {
      let e2, n2, l2, a3, d2;
      return n2 = new Tt({props: {id: "downloadTagsButton", onClick: t3[1], $$slots: {default: [vr]}, $$scope: {ctx: t3}}}), a3 = new Tt({props: {id: "uploadTagsButton", onClick: t3[0], $$slots: {default: [wr]}, $$scope: {ctx: t3}}}), {c() {
        e2 = main2.e("div"), main2.q(n2.$$.fragment), l2 = main2.a(), main2.q(a3.$$.fragment), main2.b(e2, "class", "mb-1 flex flex-row");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.r(n2, e2, null), main2.d(e2, l2), main2.r(a3, e2, null), d2 = true;
      }, p(t4, [e3]) {
        const r2 = {};
        128 & e3 && (r2.$$scope = {dirty: e3, ctx: t4}), n2.$set(r2);
        const s2 = {};
        128 & e3 && (s2.$$scope = {dirty: e3, ctx: t4}), a3.$set(s2);
      }, i(t4) {
        d2 || (main2.p(n2.$$.fragment, t4), main2.p(a3.$$.fragment, t4), d2 = true);
      }, o(t4) {
        main2.v(n2.$$.fragment, t4), main2.v(a3.$$.fragment, t4), d2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.w(n2), main2.w(a3);
      }};
    }
    function xr(t3, e2, n2) {
      let r2, s2, i2, o2;
      main2.g(t3, at, (t4) => n2(2, r2 = t4)), main2.g(t3, ut, (t4) => n2(3, s2 = t4)), main2.g(t3, _t, (t4) => n2(4, i2 = t4)), main2.g(t3, bt, (t4) => n2(5, o2 = t4));
      var c2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t5) {
            try {
              l2(r3.next(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function c3(t5) {
            try {
              l2(r3.throw(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function l2(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(o3, c3);
          }
          l2((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      return [() => {
        gt.save(r2), pt.save(s2, i2);
      }, () => c2(void 0, void 0, void 0, function* () {
        main2.X(bt, o2 = it, o2), main2.X(at, r2 = yield gt.get(), r2), console.log("all_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC");
        const t4 = yield pt.get();
        console.log(t4), main2.X(_t, i2 = t4.tag_to_mail_dict, i2), main2.X(ut, s2 = t4.mail_to_tag_dict, s2), console.log("mail_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC");
      })];
    }
    class _r extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, xr, br, main2.s, {});
      }
    }
    function Mr(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[13] = e2[n2], r2;
    }
    function kr(t3) {
      let e2;
      return {c() {
        e2 = main2.e("span"), main2.b(e2, "class", "border-1 rounded bg-white text-white text-lg");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, p: main2.n, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Cr(t3) {
      let e2, n2, d2, v2, w2, x2, _2, M2, k2, C2, S2, O2, j2, P2, I2, E2, z2, T2, N2 = t3[0].subject + "", A2 = (t3[0].preview || "...") + "";
      e2 = new Pe({props: {member: t3[0].member}}), d2 = new we({props: {pm: t3[0], float: "left mt-0.5"}}), x2 = new _e({props: {pm: t3[0]}}), M2 = new he({props: {time: t3[0].time}});
      let W2 = t3[6] && Sr(), D2 = t3[5](t3[0]), R2 = [];
      for (let e3 = 0; e3 < D2.length; e3 += 1)
        R2[e3] = Or(Mr(t3, D2, e3));
      const F2 = (t4) => main2.v(R2[t4], 1, 1, () => {
        R2[t4] = null;
      });
      return {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), main2.q(d2.$$.fragment), v2 = main2.a(), w2 = main2.e("p"), main2.q(x2.$$.fragment), _2 = main2.a(), main2.q(M2.$$.fragment), k2 = main2.a(), W2 && W2.c(), C2 = main2.a();
        for (let t4 = 0; t4 < R2.length; t4 += 1)
          R2[t4].c();
        S2 = main2.a(), O2 = main2.t(N2), j2 = main2.a(), P2 = main2.e("p"), I2 = main2.t(A2), main2.b(w2, "class", "truncate"), main2.b(P2, "class", "ml-1 mt-1 text-sm truncate");
      }, m(r2, s2) {
        main2.r(e2, r2, s2), main2.c(r2, n2, s2), main2.r(d2, r2, s2), main2.c(r2, v2, s2), main2.c(r2, w2, s2), main2.r(x2, w2, null), main2.d(w2, _2), main2.r(M2, w2, null), main2.d(w2, k2), W2 && W2.m(w2, null), main2.d(w2, C2);
        for (let t4 = 0; t4 < R2.length; t4 += 1)
          R2[t4].m(w2, null);
        main2.d(w2, S2), main2.d(w2, O2), main2.c(r2, j2, s2), main2.c(r2, P2, s2), main2.d(P2, I2), E2 = true, z2 || (T2 = [main2.A(w2, "click", function() {
          main2.F(t3[4]) && t3[4].apply(this, arguments);
        }), main2.A(P2, "click", function() {
          main2.F(t3[4]) && t3[4].apply(this, arguments);
        })], z2 = true);
      }, p(n3, r2) {
        t3 = n3;
        const s2 = {};
        1 & r2 && (s2.member = t3[0].member), e2.$set(s2);
        const i2 = {};
        1 & r2 && (i2.pm = t3[0]), d2.$set(i2);
        const o2 = {};
        1 & r2 && (o2.pm = t3[0]), x2.$set(o2);
        const c2 = {};
        if (1 & r2 && (c2.time = t3[0].time), M2.$set(c2), t3[6] ? W2 || (W2 = Sr(), W2.c(), W2.m(w2, C2)) : W2 && (W2.d(1), W2 = null), 33 & r2) {
          let e3;
          for (D2 = t3[5](t3[0]), e3 = 0; e3 < D2.length; e3 += 1) {
            const n4 = Mr(t3, D2, e3);
            R2[e3] ? (R2[e3].p(n4, r2), main2.p(R2[e3], 1)) : (R2[e3] = Or(n4), R2[e3].c(), main2.p(R2[e3], 1), R2[e3].m(w2, S2));
          }
          for (main2.D(), e3 = D2.length; e3 < R2.length; e3 += 1)
            F2(e3);
          main2.x();
        }
        (!E2 || 1 & r2) && N2 !== (N2 = t3[0].subject + "") && main2.o(O2, N2), (!E2 || 1 & r2) && A2 !== (A2 = (t3[0].preview || "...") + "") && main2.o(I2, A2);
      }, i(t4) {
        if (!E2) {
          main2.p(e2.$$.fragment, t4), main2.p(d2.$$.fragment, t4), main2.p(x2.$$.fragment, t4), main2.p(M2.$$.fragment, t4);
          for (let t5 = 0; t5 < D2.length; t5 += 1)
            main2.p(R2[t5]);
          E2 = true;
        }
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(d2.$$.fragment, t4), main2.v(x2.$$.fragment, t4), main2.v(M2.$$.fragment, t4), R2 = R2.filter(Boolean);
        for (let t5 = 0; t5 < R2.length; t5 += 1)
          main2.v(R2[t5]);
        E2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), main2.w(d2, t4), t4 && main2.f(v2), t4 && main2.f(w2), main2.w(x2), main2.w(M2), W2 && W2.d(), main2.y(R2, t4), t4 && main2.f(j2), t4 && main2.f(P2), z2 = false, main2.B(T2);
      }};
    }
    function Sr(t3) {
      let e2;
      return {c() {
        e2 = main2.e("br");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Or(t3) {
      let e2, n2;
      return e2 = new ue({props: {tag: t3[13]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        33 & n3 && (r2.tag = t4[13]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function jr(t3) {
      let e2, n2, s2, i2, c2;
      const l2 = [Cr, kr], a3 = [];
      function d2(t4, e3) {
        return t4[0].member ? 0 : 1;
      }
      return n2 = d2(t3), s2 = a3[n2] = l2[n2](t3), {c() {
        e2 = main2.e("div"), s2.c();
      }, m(t4, r2) {
        main2.c(t4, e2, r2), a3[n2].m(e2, null), c2 = true;
      }, p(t4, r2) {
        let i3 = n2;
        n2 = d2(t4), n2 === i3 ? a3[n2].p(t4, r2) : (main2.D(), main2.v(a3[i3], 1, 1, () => {
          a3[i3] = null;
        }), main2.x(), s2 = a3[n2], s2 ? s2.p(t4, r2) : (s2 = a3[n2] = l2[n2](t4), s2.c()), main2.p(s2, 1), s2.m(e2, null));
      }, i(t4) {
        c2 || (main2.p(s2), i2 || main2.j(() => {
          i2 = main2.Y(e2, a, {duration: 500}), i2.start();
        }), c2 = true);
      }, o(t4) {
        main2.v(s2), c2 = false;
      }, d(t4) {
        t4 && main2.f(e2), a3[n2].d();
      }};
    }
    function Lr(t3) {
      let e2, r2, s2 = t3[0], i2 = Ir(t3);
      return {c() {
        i2.c(), e2 = main2.G();
      }, m(t4, n2) {
        i2.m(t4, n2), main2.c(t4, e2, n2), r2 = true;
      }, p(t4, r3) {
        1 & r3 && main2.s(s2, s2 = t4[0]) ? (main2.D(), main2.v(i2, 1, 1, main2.n), main2.x(), i2 = Ir(t4), i2.c(), main2.p(i2), i2.m(e2.parentNode, e2)) : i2.p(t4, r3);
      }, i(t4) {
        r2 || (main2.p(i2), r2 = true);
      }, o(t4) {
        main2.v(i2), r2 = false;
      }, d(t4) {
        t4 && main2.f(e2), i2.d(t4);
      }};
    }
    function Pr(t3) {
      let e2, n2, i2, l2, a3, d2, f2, g2, v2 = t3[0].subject + "", w2 = " " + t3[0].preview;
      return e2 = new _e({props: {pm: t3[0], size: ""}}), i2 = new he({props: {time: t3[0].time, size: ""}}), {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), main2.q(i2.$$.fragment), l2 = main2.a(), a3 = main2.e("strong"), d2 = main2.t(v2), f2 = main2.t(w2);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), main2.c(t4, n2, r2), main2.r(i2, t4, r2), main2.c(t4, l2, r2), main2.c(t4, a3, r2), main2.d(a3, d2), main2.c(t4, f2, r2), g2 = true;
      }, p(t4, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = t4[0]), e2.$set(r2);
        const s2 = {};
        1 & n3 && (s2.time = t4[0].time), i2.$set(s2), (!g2 || 1 & n3) && v2 !== (v2 = t4[0].subject + "") && main2.o(d2, v2), (!g2 || 1 & n3) && w2 !== (w2 = " " + t4[0].preview) && main2.o(f2, w2);
      }, i(t4) {
        g2 || (main2.p(e2.$$.fragment, t4), main2.p(i2.$$.fragment, t4), g2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(i2.$$.fragment, t4), g2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), main2.w(i2, t4), t4 && main2.f(l2), t4 && main2.f(a3), t4 && main2.f(f2);
      }};
    }
    function Ir(t3) {
      let e2, n2, s2, c2 = t3[0].member && Pr(t3);
      return {c() {
        e2 = main2.e("li"), c2 && c2.c(), main2.b(e2, "class", "border-b-2 rounded w-full text-gray-500 truncate"), main2.h(e2, "font-size", "10px"), main2.h(e2, "height", "20px");
      }, m(t4, n3) {
        main2.c(t4, e2, n3), c2 && c2.m(e2, null), s2 = true;
      }, p(t4, n3) {
        t4[0].member ? c2 ? (c2.p(t4, n3), 1 & n3 && main2.p(c2, 1)) : (c2 = Pr(t4), c2.c(), main2.p(c2, 1), c2.m(e2, null)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x());
      }, i(t4) {
        s2 || (main2.p(c2), n2 || main2.j(() => {
          n2 = main2.Y(e2, a, {duration: 300}), n2.start();
        }), s2 = true);
      }, o(t4) {
        main2.v(c2), s2 = false;
      }, d(t4) {
        t4 && main2.f(e2), c2 && c2.d();
      }};
    }
    function Br(t3) {
      let e2, c2, l2, a3, m2, $2 = t3[0].id, y2 = jr(t3), v2 = t3[1] && Lr(t3);
      return {c() {
        e2 = main2.e("li"), y2.c(), l2 = main2.a(), v2 && v2.c(), a3 = main2.G(), main2.b(e2, "id", c2 = "MailItem-" + t3[2]), main2.h(e2, "height", t3[3] ? "62px" : "84px"), main2.b(e2, "class", "border-b-2 rounded p-1 w-full"), main2.Z(e2, "hidden", t3[1]);
      }, m(t4, n2) {
        main2.c(t4, e2, n2), y2.m(e2, null), main2.c(t4, l2, n2), v2 && v2.m(t4, n2), main2.c(t4, a3, n2), m2 = true;
      }, p(t4, [r2]) {
        1 & r2 && main2.s($2, $2 = t4[0].id) ? (main2.D(), main2.v(y2, 1, 1, main2.n), main2.x(), y2 = jr(t4), y2.c(), main2.p(y2), y2.m(e2, null)) : y2.p(t4, r2), (!m2 || 4 & r2 && c2 !== (c2 = "MailItem-" + t4[2])) && main2.b(e2, "id", c2), (!m2 || 8 & r2) && main2.h(e2, "height", t4[3] ? "62px" : "84px"), 2 & r2 && main2.Z(e2, "hidden", t4[1]), t4[1] ? v2 ? (v2.p(t4, r2), 2 & r2 && main2.p(v2, 1)) : (v2 = Lr(t4), v2.c(), main2.p(v2, 1), v2.m(a3.parentNode, a3)) : v2 && (main2.D(), main2.v(v2, 1, 1, () => {
          v2 = null;
        }), main2.x());
      }, i(t4) {
        m2 || (main2.p(y2), main2.p(v2), m2 = true);
      }, o(t4) {
        main2.v(y2), main2.v(v2), m2 = false;
      }, d(t4) {
        t4 && main2.f(e2), y2.d(t4), t4 && main2.f(l2), v2 && v2.d(t4), t4 && main2.f(a3);
      }};
    }
    function Er(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2;
      main2.g(t3, Ct, (t4) => n2(7, i2 = t4)), main2.g(t3, Lt, (t4) => n2(8, o2 = t4)), main2.g(t3, It, (t4) => n2(3, c2 = t4)), main2.g(t3, main2.W, (t4) => n2(9, l2 = t4)), main2.g(t3, main2.V, (t4) => n2(10, a3 = t4)), main2.g(t3, ut, (t4) => n2(11, u2 = t4)), main2.g(t3, at, (t4) => n2(12, d2 = t4)), main2.g(t3, Bt, (t4) => n2(6, f2 = t4));
      let {pm: h2} = e2, {hidden: g2} = e2, {index: p2} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(0, h2 = t4.pm), "hidden" in t4 && n2(1, g2 = t4.hidden), "index" in t4 && n2(2, p2 = t4.index);
      }, t3.$$.update = () => {
        1929 & t3.$$.dirty && n2(4, r2 = () => {
          h2 && (main2.X(Ct, i2 = h2, i2), main2.X(Lt, o2 = c2 || false, o2), l2("./", Object.assign(Object.assign({}, a3), {showList: o2, now_pm: i2.id})));
        }), 6144 & t3.$$.dirty && n2(5, s2 = (t4) => u2.has(t4.id) ? Array.from(u2.get(t4.id)).map((t5) => d2.get(t5.value)) : []);
      }, [h2, g2, p2, c2, r2, s2, f2, i2, o2, l2, a3, u2, d2];
    }
    class zr extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Er, Br, main2.s, {pm: 0, hidden: 1, index: 2});
      }
    }
    function Tr(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[4] = e2[n2], r2[6] = n2, r2;
    }
    function Nr(t3) {
      let e2, n2;
      return e2 = new zr({props: {index: t3[6], pm: t3[4], hidden: t3[2] && (t3[1] || t3[3]) && t3[6] > 0}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = t4[4]), 14 & n3 && (r2.hidden = t4[2] && (t4[1] || t4[3]) && t4[6] > 0), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function Ar(t3) {
      let e2, n2, s2 = t3[0], c2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        c2[e3] = Nr(Tr(t3, s2, e3));
      const l2 = (t4) => main2.v(c2[t4], 1, 1, () => {
        c2[t4] = null;
      });
      return {c() {
        e2 = main2.e("ul");
        for (let t4 = 0; t4 < c2.length; t4 += 1)
          c2[t4].c();
        main2.b(e2, "id", "MailItemList"), main2.h(e2, "max-width", "728px"), main2.b(e2, "class", "bg-white rounded shadow-xl mb-3");
      }, m(t4, r2) {
        main2.c(t4, e2, r2);
        for (let t5 = 0; t5 < c2.length; t5 += 1)
          c2[t5].m(e2, null);
        n2 = true;
      }, p(t4, [n3]) {
        if (15 & n3) {
          let r2;
          for (s2 = t4[0], r2 = 0; r2 < s2.length; r2 += 1) {
            const i2 = Tr(t4, s2, r2);
            c2[r2] ? (c2[r2].p(i2, n3), main2.p(c2[r2], 1)) : (c2[r2] = Nr(i2), c2[r2].c(), main2.p(c2[r2], 1), c2[r2].m(e2, null));
          }
          for (main2.D(), r2 = s2.length; r2 < c2.length; r2 += 1)
            l2(r2);
          main2.x();
        }
      }, i(t4) {
        if (!n2) {
          for (let t5 = 0; t5 < s2.length; t5 += 1)
            main2.p(c2[t5]);
          n2 = true;
        }
      }, o(t4) {
        c2 = c2.filter(Boolean);
        for (let t5 = 0; t5 < c2.length; t5 += 1)
          main2.v(c2[t5]);
        n2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.y(c2, t4);
      }};
    }
    function Wr(t3, e2, n2) {
      let r2, s2;
      main2.g(t3, Bt, (t4) => n2(2, r2 = t4)), main2.g(t3, Pt, (t4) => n2(3, s2 = t4));
      let {mail_list: i2} = e2, {isTyping: o2} = e2;
      return t3.$$set = (t4) => {
        "mail_list" in t4 && n2(0, i2 = t4.mail_list), "isTyping" in t4 && n2(1, o2 = t4.isTyping);
      }, [i2, o2, r2, s2];
    }
    class Dr extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Wr, Ar, main2.s, {mail_list: 0, isTyping: 1});
      }
    }
    function Rr(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[11] = e2[n2], r2;
    }
    function Fr(t3) {
      let e2, n2;
      return {c() {
        e2 = main2.e("img"), main2.b(e2, "class", "ml-5 m-3 w-10/12"), main2.b(e2, "alt", "no mail"), e2.src !== (n2 = "./img/izone-logo-card.png") && main2.b(e2, "src", "./img/izone-logo-card.png");
      }, m(t4, n3) {
        main2.c(t4, e2, n3);
      }, p: main2.n, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Vr(t3) {
      let e2, n2, d2, v2, w2, x2, _2, M2, k2, C2, S2, O2, j2, P2, I2, E2, z2, T2 = t3[0].subject + "", N2 = t3[0].preview + "";
      e2 = new we({props: {pm: t3[0]}}), d2 = new Pe({props: {member: t3[0].member}}), M2 = new _e({props: {pm: t3[0]}}), C2 = new he({props: {time: t3[0].time}});
      let A2 = t3[2](t3[0]), W2 = [];
      for (let e3 = 0; e3 < A2.length; e3 += 1)
        W2[e3] = Jr(Rr(t3, A2, e3));
      const D2 = (t4) => main2.v(W2[t4], 1, 1, () => {
        W2[t4] = null;
      });
      return {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), main2.q(d2.$$.fragment), v2 = main2.a(), w2 = main2.e("h4"), x2 = main2.t(T2), _2 = main2.a(), main2.q(M2.$$.fragment), k2 = main2.a(), main2.q(C2.$$.fragment), S2 = main2.a();
        for (let t4 = 0; t4 < W2.length; t4 += 1)
          W2[t4].c();
        O2 = main2.a(), j2 = main2.e("p"), P2 = main2.t(N2), main2.b(w2, "class", "text-lg"), main2.b(j2, "class", "text-sm");
      }, m(r2, s2) {
        main2.r(e2, r2, s2), main2.c(r2, n2, s2), main2.r(d2, r2, s2), main2.c(r2, v2, s2), main2.c(r2, w2, s2), main2.d(w2, x2), main2.c(r2, _2, s2), main2.r(M2, r2, s2), main2.c(r2, k2, s2), main2.r(C2, r2, s2), main2.c(r2, S2, s2);
        for (let t4 = 0; t4 < W2.length; t4 += 1)
          W2[t4].m(r2, s2);
        main2.c(r2, O2, s2), main2.c(r2, j2, s2), main2.d(j2, P2), I2 = true, E2 || (z2 = [main2.A(w2, "click", function() {
          main2.F(t3[3]) && t3[3].apply(this, arguments);
        }), main2.A(j2, "click", function() {
          main2.F(t3[3]) && t3[3].apply(this, arguments);
        })], E2 = true);
      }, p(n3, r2) {
        t3 = n3;
        const s2 = {};
        1 & r2 && (s2.pm = t3[0]), e2.$set(s2);
        const i2 = {};
        1 & r2 && (i2.member = t3[0].member), d2.$set(i2), (!I2 || 1 & r2) && T2 !== (T2 = t3[0].subject + "") && main2.o(x2, T2);
        const o2 = {};
        1 & r2 && (o2.pm = t3[0]), M2.$set(o2);
        const c2 = {};
        if (1 & r2 && (c2.time = t3[0].time), C2.$set(c2), 5 & r2) {
          let e3;
          for (A2 = t3[2](t3[0]), e3 = 0; e3 < A2.length; e3 += 1) {
            const n4 = Rr(t3, A2, e3);
            W2[e3] ? (W2[e3].p(n4, r2), main2.p(W2[e3], 1)) : (W2[e3] = Jr(n4), W2[e3].c(), main2.p(W2[e3], 1), W2[e3].m(O2.parentNode, O2));
          }
          for (main2.D(), e3 = A2.length; e3 < W2.length; e3 += 1)
            D2(e3);
          main2.x();
        }
        (!I2 || 1 & r2) && N2 !== (N2 = t3[0].preview + "") && main2.o(P2, N2);
      }, i(t4) {
        if (!I2) {
          main2.p(e2.$$.fragment, t4), main2.p(d2.$$.fragment, t4), main2.p(M2.$$.fragment, t4), main2.p(C2.$$.fragment, t4);
          for (let t5 = 0; t5 < A2.length; t5 += 1)
            main2.p(W2[t5]);
          I2 = true;
        }
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(d2.$$.fragment, t4), main2.v(M2.$$.fragment, t4), main2.v(C2.$$.fragment, t4), W2 = W2.filter(Boolean);
        for (let t5 = 0; t5 < W2.length; t5 += 1)
          main2.v(W2[t5]);
        I2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), main2.w(d2, t4), t4 && main2.f(v2), t4 && main2.f(w2), t4 && main2.f(_2), main2.w(M2, t4), t4 && main2.f(k2), main2.w(C2, t4), t4 && main2.f(S2), main2.y(W2, t4), t4 && main2.f(O2), t4 && main2.f(j2), E2 = false, main2.B(z2);
      }};
    }
    function Jr(t3) {
      let e2, n2;
      return e2 = new ue({props: {tag: t3[11]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        5 & n3 && (r2.tag = t4[11]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function qr(t3) {
      let e2, n2, s2, c2, l2;
      const a3 = [Vr, Fr], d2 = [];
      function m2(t4, e3) {
        return t4[0].member ? 0 : 1;
      }
      return n2 = m2(t3), s2 = d2[n2] = a3[n2](t3), {c() {
        e2 = main2.e("div"), s2.c(), main2.b(e2, "class", "leading-relaxed");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), d2[n2].m(e2, null), l2 = true;
      }, p(t4, r2) {
        let i2 = n2;
        n2 = m2(t4), n2 === i2 ? d2[n2].p(t4, r2) : (main2.D(), main2.v(d2[i2], 1, 1, () => {
          d2[i2] = null;
        }), main2.x(), s2 = d2[n2], s2 ? s2.p(t4, r2) : (s2 = d2[n2] = a3[n2](t4), s2.c()), main2.p(s2, 1), s2.m(e2, null));
      }, i(t4) {
        l2 || (main2.p(s2), c2 || main2.j(() => {
          c2 = main2.Y(e2, a, {duration: 500}), c2.start();
        }), l2 = true);
      }, o(t4) {
        main2.v(s2), l2 = false;
      }, d(t4) {
        t4 && main2.f(e2), d2[n2].d();
      }};
    }
    function Hr(t3) {
      let e2, s2, c2, l2 = t3[0], a3 = qr(t3);
      return {c() {
        e2 = main2.e("div"), a3.c(), main2.b(e2, "id", s2 = "MailCard-" + t3[1]), main2.h(e2, "width", "264px"), main2.h(e2, "height", "156px"), main2.b(e2, "class", "m-3 p-2\r\nrelative overflow-y-auto\r\nbg-white shadow-md rounded-md");
      }, m(t4, n2) {
        main2.c(t4, e2, n2), a3.m(e2, null), c2 = true;
      }, p(t4, [r2]) {
        1 & r2 && main2.s(l2, l2 = t4[0]) ? (main2.D(), main2.v(a3, 1, 1, main2.n), main2.x(), a3 = qr(t4), a3.c(), main2.p(a3), a3.m(e2, null)) : a3.p(t4, r2), (!c2 || 2 & r2 && s2 !== (s2 = "MailCard-" + t4[1])) && main2.b(e2, "id", s2);
      }, i(t4) {
        c2 || (main2.p(a3), c2 = true);
      }, o(t4) {
        main2.v(a3), c2 = false;
      }, d(t4) {
        t4 && main2.f(e2), a3.d(t4);
      }};
    }
    function Kr(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2;
      main2.g(t3, ut, (t4) => n2(4, i2 = t4)), main2.g(t3, at, (t4) => n2(5, o2 = t4)), main2.g(t3, Ct, (t4) => n2(6, c2 = t4)), main2.g(t3, Lt, (t4) => n2(7, l2 = t4)), main2.g(t3, It, (t4) => n2(8, a3 = t4)), main2.g(t3, main2.W, (t4) => n2(9, u2 = t4)), main2.g(t3, main2.V, (t4) => n2(10, d2 = t4));
      let {pm: f2} = e2, {index: h2} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(0, f2 = t4.pm), "index" in t4 && n2(1, h2 = t4.index);
      }, t3.$$.update = () => {
        48 & t3.$$.dirty && n2(2, r2 = (t4) => i2.has(t4.id) ? Array.from(i2.get(t4.id)).map((t5) => o2.get(t5.value)) : []), 1985 & t3.$$.dirty && n2(3, s2 = () => {
          f2 && (main2.X(Ct, c2 = f2, c2), main2.X(Lt, l2 = a3 || false, l2), u2("./", Object.assign(Object.assign({}, d2), {showList: l2, now_pm: c2.id})));
        });
      }, [f2, h2, r2, s2, i2, o2, c2, l2, a3, u2, d2];
    }
    class Yr extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Kr, Hr, main2.s, {pm: 0, index: 1});
      }
    }
    function Zr(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[1] = e2[n2], r2[3] = n2, r2;
    }
    function Ur(t3) {
      let e2, n2;
      return e2 = new Yr({props: {pm: t3[1], index: t3[3]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = t4[1]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function Qr(t3) {
      let e2, n2, s2 = t3[0], c2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        c2[e3] = Ur(Zr(t3, s2, e3));
      const l2 = (t4) => main2.v(c2[t4], 1, 1, () => {
        c2[t4] = null;
      });
      return {c() {
        e2 = main2.e("div");
        for (let t4 = 0; t4 < c2.length; t4 += 1)
          c2[t4].c();
        main2.b(e2, "id", "MailCardView"), main2.b(e2, "class", "mb-3 flex flex-wrap");
      }, m(t4, r2) {
        main2.c(t4, e2, r2);
        for (let t5 = 0; t5 < c2.length; t5 += 1)
          c2[t5].m(e2, null);
        n2 = true;
      }, p(t4, [n3]) {
        if (1 & n3) {
          let r2;
          for (s2 = t4[0], r2 = 0; r2 < s2.length; r2 += 1) {
            const i2 = Zr(t4, s2, r2);
            c2[r2] ? (c2[r2].p(i2, n3), main2.p(c2[r2], 1)) : (c2[r2] = Ur(i2), c2[r2].c(), main2.p(c2[r2], 1), c2[r2].m(e2, null));
          }
          for (main2.D(), r2 = s2.length; r2 < c2.length; r2 += 1)
            l2(r2);
          main2.x();
        }
      }, i(t4) {
        if (!n2) {
          for (let t5 = 0; t5 < s2.length; t5 += 1)
            main2.p(c2[t5]);
          n2 = true;
        }
      }, o(t4) {
        c2 = c2.filter(Boolean);
        for (let t5 = 0; t5 < c2.length; t5 += 1)
          main2.v(c2[t5]);
        n2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.y(c2, t4);
      }};
    }
    function Xr(t3, e2, n2) {
      let {mail_list: r2} = e2;
      return t3.$$set = (t4) => {
        "mail_list" in t4 && n2(0, r2 = t4.mail_list);
      }, [r2];
    }
    class Gr extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Xr, Qr, main2.s, {mail_list: 0});
      }
    }
    function ts(t3) {
      let e2, n2, a3, u2, d2, f2, h2, g2 = t3[2] ? "on" : "off";
      return {c() {
        e2 = main2.e("label"), n2 = main2.t("\uB9AC\uC2A4\uD2B8\uBDF0 "), a3 = main2.t(g2), u2 = main2.a(), d2 = main2.e("input"), main2.b(d2, "id", "isListViewInput"), main2.b(d2, "type", "checkbox"), main2.b(e2, "class", "p-1"), main2.b(e2, "for", "isListViewInput");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(e2, a3), main2.d(e2, u2), main2.d(e2, d2), d2.checked = t3[2], f2 || (h2 = main2.A(d2, "change", t3[19]), f2 = true);
      }, p(t4, e3) {
        4 & e3 && g2 !== (g2 = t4[2] ? "on" : "off") && main2.o(a3, g2), 4 & e3 && (d2.checked = t4[2]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), f2 = false, h2();
      }};
    }
    function es(t3) {
      let e2, n2, r2, i2;
      e2 = new Xe({});
      let c2 = t3[12].value && ns();
      return {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), c2 && c2.c(), r2 = main2.G();
      }, m(t4, s2) {
        main2.r(e2, t4, s2), main2.c(t4, n2, s2), c2 && c2.m(t4, s2), main2.c(t4, r2, s2), i2 = true;
      }, p(t4, e3) {
        t4[12].value ? c2 ? 4096 & e3 && main2.p(c2, 1) : (c2 = ns(), c2.c(), main2.p(c2, 1), c2.m(r2.parentNode, r2)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x());
      }, i(t4) {
        i2 || (main2.p(e2.$$.fragment, t4), main2.p(c2), i2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(c2), i2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), c2 && c2.d(t4), t4 && main2.f(r2);
      }};
    }
    function ns(t3) {
      let e2, n2;
      return e2 = new He({}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function rs(t3) {
      let e2, n2;
      return e2 = new _r({}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function ss(t3) {
      let e2, n2;
      return e2 = new Dr({props: {mail_list: t3[8], isTyping: t3[7]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        256 & n3 && (r2.mail_list = t4[8]), 128 & n3 && (r2.isTyping = t4[7]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function is(t3) {
      let e2, n2;
      return e2 = new Gr({props: {mail_list: t3[8]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        256 & n3 && (r2.mail_list = t4[8]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function os(t3) {
      let e2, n2, l2, a3, d2, w2, b2, x2, _2, M2, k2, C2, S2, O2, j2, L2, I2, B2, E2;
      const z2 = [es, ts], T2 = [];
      function N2(t4, e3) {
        return t4[3] ? 0 : 1;
      }
      l2 = N2(t3), a3 = T2[l2] = z2[l2](t3);
      let A2 = t3[13] && rs();
      b2 = new Ve({props: {hidden: !(t3[3] && t3[5])}});
      const W2 = [is, ss], D2 = [];
      function R2(t4, e3) {
        return !t4[2] && t4[11] ? 0 : 1;
      }
      return _2 = R2(t3), M2 = D2[_2] = W2[_2](t3), C2 = new wn({props: {maxPage: t3[6]}}), L2 = new yr({props: {search_length: t3[4].length}}), {c() {
        e2 = main2.e("section"), n2 = main2.e("div"), a3.c(), d2 = main2.a(), A2 && A2.c(), w2 = main2.a(), main2.q(b2.$$.fragment), x2 = main2.a(), M2.c(), k2 = main2.a(), main2.q(C2.$$.fragment), S2 = main2.a(), O2 = main2.e("br"), j2 = main2.a(), main2.q(L2.$$.fragment), main2.b(n2, "class", "mb-1 flex flex-row"), main2.b(e2, "id", "MailListSection"), main2.h(e2, "min-height", t3[9] + "px"), main2.b(e2, "class", I2 = "h-full " + (t3[11] ? "w-8/12" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y"), main2.j(() => t3[20].call(e2)), main2.Z(e2, "hidden", t3[3] && !t3[10]);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), T2[l2].m(n2, null), main2.d(e2, d2), A2 && A2.m(e2, null), main2.d(e2, w2), main2.r(b2, e2, null), main2.d(e2, x2), D2[_2].m(e2, null), main2.d(e2, k2), main2.r(C2, e2, null), main2.d(e2, S2), main2.d(e2, O2), main2.d(e2, j2), main2.r(L2, e2, null), B2 = main2.z(e2, t3[20].bind(e2)), E2 = true;
      }, p(t4, [r2]) {
        let s2 = l2;
        l2 = N2(t4), l2 === s2 ? T2[l2].p(t4, r2) : (main2.D(), main2.v(T2[s2], 1, 1, () => {
          T2[s2] = null;
        }), main2.x(), a3 = T2[l2], a3 ? a3.p(t4, r2) : (a3 = T2[l2] = z2[l2](t4), a3.c()), main2.p(a3, 1), a3.m(n2, null)), t4[13] ? A2 ? 8192 & r2 && main2.p(A2, 1) : (A2 = rs(), A2.c(), main2.p(A2, 1), A2.m(e2, w2)) : A2 && (main2.D(), main2.v(A2, 1, 1, () => {
          A2 = null;
        }), main2.x());
        const o2 = {};
        40 & r2 && (o2.hidden = !(t4[3] && t4[5])), b2.$set(o2);
        let c2 = _2;
        _2 = R2(t4), _2 === c2 ? D2[_2].p(t4, r2) : (main2.D(), main2.v(D2[c2], 1, 1, () => {
          D2[c2] = null;
        }), main2.x(), M2 = D2[_2], M2 ? M2.p(t4, r2) : (M2 = D2[_2] = W2[_2](t4), M2.c()), main2.p(M2, 1), M2.m(e2, k2));
        const d3 = {};
        64 & r2 && (d3.maxPage = t4[6]), C2.$set(d3);
        const p2 = {};
        16 & r2 && (p2.search_length = t4[4].length), L2.$set(p2), (!E2 || 512 & r2) && main2.h(e2, "min-height", t4[9] + "px"), (!E2 || 2048 & r2 && I2 !== (I2 = "h-full " + (t4[11] ? "w-8/12" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y")) && main2.b(e2, "class", I2), 3080 & r2 && main2.Z(e2, "hidden", t4[3] && !t4[10]);
      }, i(t4) {
        E2 || (main2.p(a3), main2.p(A2), main2.p(b2.$$.fragment, t4), main2.p(M2), main2.p(C2.$$.fragment, t4), main2.p(L2.$$.fragment, t4), E2 = true);
      }, o(t4) {
        main2.v(a3), main2.v(A2), main2.v(b2.$$.fragment, t4), main2.v(M2), main2.v(C2.$$.fragment, t4), main2.v(L2.$$.fragment, t4), E2 = false;
      }, d(t4) {
        t4 && main2.f(e2), T2[l2].d(), A2 && A2.d(), main2.w(b2), D2[_2].d(), main2.w(C2), main2.w(L2), B2();
      }};
    }
    function cs(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2, h2, g2, p2, m2, $2, y2, v2, w2, b2, x2, _2, M2, k2;
      main2.g(t3, Bt, (t4) => n2(3, d2 = t4)), main2.g(t3, hr, (t4) => n2(4, f2 = t4)), main2.g(t3, pr, (t4) => n2(17, h2 = t4)), main2.g(t3, un, (t4) => n2(18, g2 = t4)), main2.g(t3, jt, (t4) => n2(26, p2 = t4)), main2.g(t3, main2.U, (t4) => n2(27, m2 = t4)), main2.g(t3, main2.V, (t4) => n2(28, $2 = t4)), main2.g(t3, Pt, (t4) => n2(5, y2 = t4)), main2.g(t3, Lt, (t4) => n2(10, v2 = t4)), main2.g(t3, It, (t4) => n2(11, w2 = t4)), main2.g(t3, bt, (t4) => n2(12, b2 = t4)), main2.g(t3, yt, (t4) => n2(13, x2 = t4));
      let C2, S2 = 1, O2 = 3;
      main2.l(() => {
        const t4 = l2[0];
        if (O2 != i2 || S2 == p2 && k2 == un || (C2 = t4), O2 != i2 && C2) {
          let t5 = 0;
          return f2.forEach((t6, e3) => {
          }), main2.X(jt, p2 = Math.ceil((t5 + 1) / i2), p2), S2 = p2, O2 = i2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2})), null;
        }
        if (a3 > new Date())
          return main2.X(un, g2 = dn(new Date()), g2), alert("\uBBF8\uB798\uB85C \uAC08 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."), m2("./", Object.assign(Object.assign({}, $2), {dateString: g2})), null;
        if (l2.length == 0 || !t4 && $2.nowPage != 1)
          return m2("./", Object.assign(Object.assign({}, $2), {nowPage: 1})), null;
        if (S2 != p2) {
          S2 = p2;
          const e3 = hn(t4.time);
          return main2.X(un, g2 = e3, g2), k2 = e3, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2, dateString: e3})), null;
        }
        if (k2 !== g2) {
          let t5 = false;
          if (f2.forEach((e3, n3) => {
            if (t5 || !e3)
              return null;
            const r3 = hn(e3.time);
            fn(r3) <= a3 && (main2.X(jt, p2 = Math.ceil((n3 + 1) / i2), p2), main2.X(un, g2 = r3, g2), t5 = true);
          }), t5 == 0 && f2.length > 0) {
            main2.X(jt, p2 = o2, p2);
            const t6 = f2[f2.length - 1];
            main2.X(un, g2 = hn(t6.time), g2);
          }
          return k2 = g2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2, dateString: g2})), null;
        }
      });
      let j2 = false;
      return t3.$$.update = () => {
        1 & t3.$$.dirty && n2(14, r2 = Math.floor((_2 - 33) / 288)), 2 & t3.$$.dirty && n2(15, s2 = Math.floor((M2 - 220) / 164)), 49166 & t3.$$.dirty && n2(16, i2 = d2 ? 5 : j2 ? Math.floor((M2 - 200) / 62) : r2 * s2), 65552 & t3.$$.dirty && n2(6, o2 = Math.ceil(f2.length / i2)), 2 & t3.$$.dirty && n2(7, c2 = M2 < 400), 196624 & t3.$$.dirty && n2(8, l2 = f2 ? h2(i2) : []), 262144 & t3.$$.dirty && (a3 = fn(g2)), 44 & t3.$$.dirty && n2(9, u2 = j2 || d2 ? y2 ? 520 : 360 : 490);
      }, [_2, M2, j2, d2, f2, y2, o2, c2, l2, u2, v2, w2, b2, x2, r2, s2, i2, h2, g2, function() {
        j2 = this.checked, n2(2, j2);
      }, function() {
        _2 = this.clientWidth, M2 = this.clientHeight, n2(0, _2), n2(1, M2);
      }];
    }
    class ls extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, cs, os, main2.s, {});
      }
    }
    function as(t3) {
      let e2, n2;
      return e2 = new st({props: {show: fs, $$slots: {default: [us]}, $$scope: {ctx: t3}}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        524288 & n3 && (r2.$$scope = {dirty: n3, ctx: t4}), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function us(t3) {
      let e2, n2, r2, i2;
      return e2 = new ln({}), r2 = new ls({}), {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment);
      }, m(t4, s2) {
        main2.r(e2, t4, s2), main2.c(t4, n2, s2), main2.r(r2, t4, s2), i2 = true;
      }, i(t4) {
        i2 || (main2.p(e2.$$.fragment, t4), main2.p(r2.$$.fragment, t4), i2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(r2.$$.fragment, t4), i2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), main2.w(r2, t4);
      }};
    }
    function ds(t3) {
      let e2, n2, s2, c2 = t3[1] && as(t3);
      return {c() {
        e2 = main2.e("div"), c2 && c2.c(), main2.b(e2, "class", "flex w-screen h-screen relative"), main2.j(() => t3[4].call(e2));
      }, m(r2, i2) {
        main2.c(r2, e2, i2), c2 && c2.m(e2, null), n2 = main2.z(e2, t3[4].bind(e2)), s2 = true;
      }, p(t4, [n3]) {
        t4[1] ? c2 ? (c2.p(t4, n3), 2 & n3 && main2.p(c2, 1)) : (c2 = as(t4), c2.c(), main2.p(c2, 1), c2.m(e2, null)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x());
      }, i(t4) {
        s2 || (main2.p(c2), s2 = true);
      }, o(t4) {
        main2.v(c2), s2 = false;
      }, d(t4) {
        t4 && main2.f(e2), c2 && c2.d(), n2();
      }};
    }
    let fs = null;
    function hs(t3, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2, h2;
      main2.g(t3, _t, (t4) => n2(2, s2 = t4)), main2.g(t3, ut, (t4) => n2(3, i2 = t4)), main2.g(t3, Jt, (t4) => n2(7, o2 = t4)), main2.g(t3, kt, (t4) => n2(8, c2 = t4)), main2.g(t3, Ct, (t4) => n2(9, l2 = t4)), main2.g(t3, at, (t4) => n2(10, a3 = t4)), main2.g(t3, yt, (t4) => n2(11, u2 = t4)), main2.g(t3, Lt, (t4) => n2(12, d2 = t4)), main2.g(t3, main2.V, (t4) => n2(13, f2 = t4)), main2.g(t3, main2.W, (t4) => n2(14, h2 = t4));
      var g2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t5) {
            try {
              l3(r3.next(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function c3(t5) {
            try {
              l3(r3.throw(t5));
            } catch (t6) {
              i3(t6);
            }
          }
          function l3(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      main2.$.title = "IZ*ONE Private Mail Viewer";
      let p2 = false;
      const m2 = (t4, e3) => {
        try {
          console.log(`${e3}\uCC28 \uC2DC\uB3C4`), console.log(t4.slice(0, 10));
          const n3 = [];
          for (let e4 = 0; e4 < t4.length; e4 += 2)
            n3.push(t4[e4]);
          return JSON.parse(n3.join(""));
        } catch (n3) {
          if (e3 < 4)
            return t4 = t4.slice(1), m2(t4, e3 + 1);
          throw n3;
        }
      }, $2 = (t4) => g2(void 0, void 0, void 0, function* () {
        const e3 = yield fetch(t4), n3 = yield e3.text();
        try {
          return JSON.parse(n3);
        } catch (t5) {
          if (n3.slice(0, 9) == "<!DOCTYPE")
            throw t5;
          if (t5 instanceof SyntaxError)
            return m2(n3, 0);
          console.error(t5);
        }
      });
      let y2;
      return function() {
        return g2(this, void 0, void 0, function* () {
          yield Promise.all([$2("./pm_list.json"), $2("./member_name.json"), $2("./mail_to_num_dict.json"), $2("./mail_body_dict.json").catch((t4) => (console.log("mail_body_dict\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."), null))]).then((t4) => {
            const e3 = t4[0];
            main2.X(Jt, o2 = t4[1], o2), console.log(o2);
            const n3 = t4[2], u3 = t4[3];
            main2.X(kt, c2 = e3.map((t5, e4) => {
              t5.id == "m20731" && main2.X(Ct, l2 = t5, l2), t5.nick = t5.member;
              const r3 = o2[t5.nick];
              if (t5.member = qt[r3], !t5.member && n3.has(t5.id)) {
                const e5 = n3[t5.id];
                main2.X(Jt, o2[t5.nick] = e5, o2), t5.member = qt[e5], console.log("member_name.json \uC5D0 \uBA64\uBC84 \uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."), console.log(t5.nick, t5.member);
              }
              return u3 && (t5.body = u3[t5.id]), t5;
            }), c2);
            let d3 = 0;
            const f3 = a3.get("\uD63C\uB2E4 \uD788\uD1A0\uBBF8");
            if (s2.has(f3) && (c2.forEach((t5) => {
              const e4 = a3.get(t5.member), n4 = s2.get(e4);
              n4 ? n4.add(t5.id) : (console.log(t5.id, t5.nick), d3 += 1);
            }), _t.set(s2)), console.log("\uB204\uB77D", d3), !a3.has("\uC0DD\uC77C")) {
              const t5 = {value: "\uC0DD\uC77C", color: "LightPink"};
              a3.set(t5.value, t5), at.set(a3), s2.set(t5, new Set()), c2.map((e4) => {
                e4.id.slice(0, 1) == "b" && r2(t5, e4);
              }), _t.set(s2), ut.set(i2);
            }
          });
        });
      }().then(() => {
        n2(1, p2 = true);
      }), fetch("./ping").then((t4) => t4.json()).then((t4) => {
        t4.msg == "ok" && (console.log("\uC2E0 \uC11C\uBC84\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4. \uD0DC\uADF8 \uC800\uC7A5, \uB3D9\uAE30\uD654\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), main2.X(yt, u2 = true, u2));
      }).catch((t4) => {
        console.log("\uAD6C \uBC84\uC804 \uC11C\uBC84\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4.");
      }), main2.V.subscribe((t4) => {
        const e3 = t4.showList == "true";
        e3 != d2 && main2.X(Lt, d2 = e3, d2);
      }), f2.dateString || h2("./", {dateString: an, nowPage: 1, tag: "", search: "", showList: true, now_pm: "m20731"}), t3.$$.update = () => {
        12 & t3.$$.dirty && (r2 = (t4, e3) => {
          s2.get(t4).add(e3.id), i2.has(e3.id) ? i2.get(e3.id).add(t4) : i2.set(e3.id, new Set([t4]));
        }), 1 & t3.$$.dirty && It.set(y2 > 700);
      }, [y2, p2, s2, i2, function() {
        y2 = this.clientWidth, n2(0, y2);
      }];
    }
    class index_7750f5d9_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, hs, ds, main2.s, {});
      }
    }
  });

  // dist/build/_layout-9ebc197d.js
  var require_layout_9ebc197d = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_9ebc197d_default
    });
    const main2 = __toModule(require_main());
    function c(s2) {
      let t3;
      const e2 = s2[1].default, c2 = main2.H(e2, s2, s2[0], null);
      return {c() {
        c2 && c2.c();
      }, m(s3, e3) {
        c2 && c2.m(s3, e3), t3 = true;
      }, p(s3, [t4]) {
        c2 && c2.p && 1 & t4 && main2.I(c2, e2, s3, s3[0], t4, null, null);
      }, i(s3) {
        t3 || (main2.p(c2, s3), t3 = true);
      }, o(s3) {
        main2.v(c2, s3), t3 = false;
      }, d(s3) {
        c2 && c2.d(s3);
      }};
    }
    function u(s2, t3, e2) {
      let {$$slots: n2 = {}, $$scope: o2} = t3;
      return s2.$$set = (s3) => {
        "$$scope" in s3 && e2(0, o2 = s3.$$scope);
      }, [o2, n2];
    }
    class layout_9ebc197d_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, u, c, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      $: () => be,
      A: () => L,
      B: () => s,
      C: () => kt,
      D: () => $t,
      E: () => e,
      F: () => i,
      G: () => I,
      H: () => f,
      I: () => d,
      J: () => Z,
      K: () => X,
      L: () => Jt,
      M: () => Gt,
      N: () => M,
      O: () => Y,
      P: () => j,
      Q: () => m,
      R: () => n,
      S: () => At,
      T: () => h,
      U: () => ye,
      V: () => he,
      W: () => ge,
      X: () => g,
      Y: () => xt,
      Z: () => U,
      _: () => T,
      a: () => R,
      b: () => A,
      c: () => P,
      d: () => x,
      e: () => O,
      f: () => k,
      g: () => u,
      h: () => N,
      i: () => Lt,
      j: () => ct,
      k: () => Pt,
      l: () => V,
      m: () => et,
      n: () => t2,
      o: () => F,
      p: () => wt,
      q: () => St,
      r: () => Rt,
      s: () => a2,
      t: () => S,
      u: () => me,
      v: () => _t,
      w: () => It,
      x: () => bt,
      y: () => E,
      z: () => B
    });
    function t2() {
    }
    const e = (t3) => t3;
    function n(t3, e2) {
      for (const n2 in e2)
        t3[n2] = e2[n2];
      return t3;
    }
    function o(t3) {
      return t3();
    }
    function r() {
      return Object.create(null);
    }
    function s(t3) {
      t3.forEach(o);
    }
    function i(t3) {
      return typeof t3 == "function";
    }
    function a2(t3, e2) {
      return t3 != t3 ? e2 == e2 : t3 !== e2 || t3 && typeof t3 == "object" || typeof t3 == "function";
    }
    function c(e2, ...n2) {
      if (e2 == null)
        return t2;
      const o2 = e2.subscribe(...n2);
      return o2.unsubscribe ? () => o2.unsubscribe() : o2;
    }
    function l(t3) {
      let e2;
      return c(t3, (t4) => e2 = t4)(), e2;
    }
    function u(t3, e2, n2) {
      t3.$$.on_destroy.push(c(e2, n2));
    }
    function f(t3, e2, n2, o2) {
      if (t3) {
        const r2 = p(t3, e2, n2, o2);
        return t3[0](r2);
      }
    }
    function p(t3, e2, o2, r2) {
      return t3[1] && r2 ? n(o2.ctx.slice(), t3[1](r2(e2))) : o2.ctx;
    }
    function d(t3, e2, n2, o2, r2, s2, i2) {
      const a3 = function(t4, e3, n3, o3) {
        if (t4[2] && o3) {
          const r3 = t4[2](o3(n3));
          if (e3.dirty === void 0)
            return r3;
          if (typeof r3 == "object") {
            const t5 = [], n4 = Math.max(e3.dirty.length, r3.length);
            for (let o4 = 0; o4 < n4; o4 += 1)
              t5[o4] = e3.dirty[o4] | r3[o4];
            return t5;
          }
          return e3.dirty | r3;
        }
        return e3.dirty;
      }(e2, o2, r2, s2);
      if (a3) {
        const r3 = p(e2, n2, o2, i2);
        t3.p(r3, a3);
      }
    }
    function h(t3) {
      const e2 = {};
      for (const n2 in t3)
        n2[0] !== "$" && (e2[n2] = t3[n2]);
      return e2;
    }
    function m(t3) {
      return t3 == null ? "" : t3;
    }
    function g(t3, e2, n2 = e2) {
      return t3.set(n2), e2;
    }
    const y = typeof window != "undefined";
    let $ = y ? () => window.performance.now() : () => Date.now();
    let b = y ? (t3) => requestAnimationFrame(t3) : t2;
    const w = new Set();
    function _(t3) {
      w.forEach((e2) => {
        e2.c(t3) || (w.delete(e2), e2.f());
      }), w.size !== 0 && b(_);
    }
    function v(t3) {
      let e2;
      return w.size === 0 && b(_), {promise: new Promise((n2) => {
        w.add(e2 = {c: t3, f: n2});
      }), abort() {
        w.delete(e2);
      }};
    }
    function x(t3, e2) {
      t3.appendChild(e2);
    }
    function P(t3, e2, n2) {
      t3.insertBefore(e2, n2 || null);
    }
    function k(t3) {
      t3.parentNode.removeChild(t3);
    }
    function E(t3, e2) {
      for (let n2 = 0; n2 < t3.length; n2 += 1)
        t3[n2] && t3[n2].d(e2);
    }
    function O(t3) {
      return document.createElement(t3);
    }
    function j(t3) {
      return document.createElementNS("http://www.w3.org/2000/svg", t3);
    }
    function S(t3) {
      return document.createTextNode(t3);
    }
    function R() {
      return S(" ");
    }
    function I() {
      return S("");
    }
    function L(t3, e2, n2, o2) {
      return t3.addEventListener(e2, n2, o2), () => t3.removeEventListener(e2, n2, o2);
    }
    function A(t3, e2, n2) {
      n2 == null ? t3.removeAttribute(e2) : t3.getAttribute(e2) !== n2 && t3.setAttribute(e2, n2);
    }
    function T(t3) {
      return t3 === "" ? null : +t3;
    }
    function F(t3, e2) {
      e2 = "" + e2, t3.wholeText !== e2 && (t3.data = e2);
    }
    function M(t3, e2) {
      t3.value = e2 == null ? "" : e2;
    }
    function N(t3, e2, n2, o2) {
      t3.style.setProperty(e2, n2, o2 ? "important" : "");
    }
    let C;
    function q() {
      if (C === void 0) {
        C = false;
        try {
          typeof window != "undefined" && window.parent && window.parent.document;
        } catch (t3) {
          C = true;
        }
      }
      return C;
    }
    function B(t3, e2) {
      getComputedStyle(t3).position === "static" && (t3.style.position = "relative");
      const n2 = O("iframe");
      n2.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n2.setAttribute("aria-hidden", "true"), n2.tabIndex = -1;
      const o2 = q();
      let r2;
      return o2 ? (n2.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>", r2 = L(window, "message", (t4) => {
        t4.source === n2.contentWindow && e2();
      })) : (n2.src = "about:blank", n2.onload = () => {
        r2 = L(n2.contentWindow, "resize", e2);
      }), x(t3, n2), () => {
        (o2 || r2 && n2.contentWindow) && r2(), k(n2);
      };
    }
    function U(t3, e2, n2) {
      t3.classList[n2 ? "add" : "remove"](e2);
    }
    function D(t3, e2) {
      const n2 = document.createEvent("CustomEvent");
      return n2.initCustomEvent(t3, false, false, e2), n2;
    }
    const z = new Set();
    let H;
    let K = 0;
    function W(t3, e2, n2, o2, r2, s2, i2, a3 = 0) {
      const c2 = 16.666 / o2;
      let l2 = "{\n";
      for (let t4 = 0; t4 <= 1; t4 += c2) {
        const o3 = e2 + (n2 - e2) * s2(t4);
        l2 += 100 * t4 + `%{${i2(o3, 1 - o3)}}
`;
      }
      const u2 = l2 + `100% {${i2(n2, 1 - n2)}}
}`, f2 = `__svelte_${function(t4) {
        let e3 = 5381, n3 = t4.length;
        for (; n3--; )
          e3 = (e3 << 5) - e3 ^ t4.charCodeAt(n3);
        return e3 >>> 0;
      }(u2)}_${a3}`, p2 = t3.ownerDocument;
      z.add(p2);
      const d2 = p2.__svelte_stylesheet || (p2.__svelte_stylesheet = p2.head.appendChild(O("style")).sheet), h2 = p2.__svelte_rules || (p2.__svelte_rules = {});
      h2[f2] || (h2[f2] = true, d2.insertRule(`@keyframes ${f2} ${u2}`, d2.cssRules.length));
      const m2 = t3.style.animation || "";
      return t3.style.animation = `${m2 ? `${m2}, ` : ""}${f2} ${o2}ms linear ${r2}ms 1 both`, K += 1, f2;
    }
    function J(t3, e2) {
      const n2 = (t3.style.animation || "").split(", "), o2 = n2.filter(e2 ? (t4) => t4.indexOf(e2) < 0 : (t4) => t4.indexOf("__svelte") === -1), r2 = n2.length - o2.length;
      r2 && (t3.style.animation = o2.join(", "), K -= r2, K || b(() => {
        K || (z.forEach((t4) => {
          const e3 = t4.__svelte_stylesheet;
          let n3 = e3.cssRules.length;
          for (; n3--; )
            e3.deleteRule(n3);
          t4.__svelte_rules = {};
        }), z.clear());
      }));
    }
    function G(t3) {
      H = t3;
    }
    function Q() {
      if (!H)
        throw new Error("Function called outside component initialization");
      return H;
    }
    function V(t3) {
      Q().$$.after_update.push(t3);
    }
    function Z() {
      const t3 = Q();
      return (e2, n2) => {
        const o2 = t3.$$.callbacks[e2];
        if (o2) {
          const r2 = D(e2, n2);
          o2.slice().forEach((e3) => {
            e3.call(t3, r2);
          });
        }
      };
    }
    function X(t3, e2) {
      Q().$$.context.set(t3, e2);
    }
    function Y(t3) {
      return Q().$$.context.get(t3);
    }
    const tt = [];
    const et = [];
    const nt = [];
    const ot = [];
    const rt = Promise.resolve();
    let st = false;
    function it() {
      st || (st = true, rt.then(ft));
    }
    function at() {
      return it(), rt;
    }
    function ct(t3) {
      nt.push(t3);
    }
    let lt = false;
    const ut = new Set();
    function ft() {
      if (!lt) {
        lt = true;
        do {
          for (let t3 = 0; t3 < tt.length; t3 += 1) {
            const e2 = tt[t3];
            G(e2), pt(e2.$$);
          }
          for (G(null), tt.length = 0; et.length; )
            et.pop()();
          for (let t3 = 0; t3 < nt.length; t3 += 1) {
            const e2 = nt[t3];
            ut.has(e2) || (ut.add(e2), e2());
          }
          nt.length = 0;
        } while (tt.length);
        for (; ot.length; )
          ot.pop()();
        st = false, lt = false, ut.clear();
      }
    }
    function pt(t3) {
      if (t3.fragment !== null) {
        t3.update(), s(t3.before_update);
        const e2 = t3.dirty;
        t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e2), t3.after_update.forEach(ct);
      }
    }
    let dt;
    function ht() {
      return dt || (dt = Promise.resolve(), dt.then(() => {
        dt = null;
      })), dt;
    }
    function mt(t3, e2, n2) {
      t3.dispatchEvent(D(`${e2 ? "intro" : "outro"}${n2}`));
    }
    const gt = new Set();
    let yt;
    function $t() {
      yt = {r: 0, c: [], p: yt};
    }
    function bt() {
      yt.r || s(yt.c), yt = yt.p;
    }
    function wt(t3, e2) {
      t3 && t3.i && (gt.delete(t3), t3.i(e2));
    }
    function _t(t3, e2, n2, o2) {
      if (t3 && t3.o) {
        if (gt.has(t3))
          return;
        gt.add(t3), yt.c.push(() => {
          gt.delete(t3), o2 && (n2 && t3.d(1), o2());
        }), t3.o(e2);
      }
    }
    const vt = {duration: 0};
    function xt(n2, o2, r2) {
      let s2, a3, c2 = o2(n2, r2), l2 = false, u2 = 0;
      function f2() {
        s2 && J(n2, s2);
      }
      function p2() {
        const {delay: o3 = 0, duration: r3 = 300, easing: i2 = e, tick: p3 = t2, css: d3} = c2 || vt;
        d3 && (s2 = W(n2, 0, 1, r3, o3, i2, d3, u2++)), p3(0, 1);
        const h2 = $() + o3, m2 = h2 + r3;
        a3 && a3.abort(), l2 = true, ct(() => mt(n2, true, "start")), a3 = v((t3) => {
          if (l2) {
            if (t3 >= m2)
              return p3(1, 0), mt(n2, true, "end"), f2(), l2 = false;
            if (t3 >= h2) {
              const e2 = i2((t3 - h2) / r3);
              p3(e2, 1 - e2);
            }
          }
          return l2;
        });
      }
      let d2 = false;
      return {start() {
        d2 || (J(n2), i(c2) ? (c2 = c2(), ht().then(p2)) : p2());
      }, invalidate() {
        d2 = false;
      }, end() {
        l2 && (f2(), l2 = false);
      }};
    }
    function Pt(n2, o2, r2, a3) {
      let c2 = o2(n2, r2), l2 = a3 ? 0 : 1, u2 = null, f2 = null, p2 = null;
      function d2() {
        p2 && J(n2, p2);
      }
      function h2(t3, e2) {
        const n3 = t3.b - l2;
        return e2 *= Math.abs(n3), {a: l2, b: t3.b, d: n3, duration: e2, start: t3.start, end: t3.start + e2, group: t3.group};
      }
      function m2(o3) {
        const {delay: r3 = 0, duration: i2 = 300, easing: a4 = e, tick: m3 = t2, css: g2} = c2 || vt, y2 = {start: $() + r3, b: o3};
        o3 || (y2.group = yt, yt.r += 1), u2 || f2 ? f2 = y2 : (g2 && (d2(), p2 = W(n2, l2, o3, i2, r3, a4, g2)), o3 && m3(0, 1), u2 = h2(y2, i2), ct(() => mt(n2, o3, "start")), v((t3) => {
          if (f2 && t3 > f2.start && (u2 = h2(f2, i2), f2 = null, mt(n2, u2.b, "start"), g2 && (d2(), p2 = W(n2, l2, u2.b, u2.duration, 0, a4, c2.css))), u2) {
            if (t3 >= u2.end)
              m3(l2 = u2.b, 1 - l2), mt(n2, u2.b, "end"), f2 || (u2.b ? d2() : --u2.group.r || s(u2.group.c)), u2 = null;
            else if (t3 >= u2.start) {
              const e2 = t3 - u2.start;
              l2 = u2.a + u2.d * a4(e2 / u2.duration), m3(l2, 1 - l2);
            }
          }
          return !(!u2 && !f2);
        }));
      }
      return {run(t3) {
        i(c2) ? ht().then(() => {
          c2 = c2(), m2(t3);
        }) : m2(t3);
      }, end() {
        d2(), u2 = f2 = null;
      }};
    }
    const kt = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
    function Et(t3, e2) {
      t3.d(1), e2.delete(t3.key);
    }
    function Ot(t3, e2) {
      _t(t3, 1, 1, () => {
        e2.delete(t3.key);
      });
    }
    function jt(t3, e2, n2, o2, r2, s2, i2, a3, c2, l2, u2, f2) {
      let p2 = t3.length, d2 = s2.length, h2 = p2;
      const m2 = {};
      for (; h2--; )
        m2[t3[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t4 = f2(r2, s2, h2), a4 = n2(t4);
        let c3 = i2.get(a4);
        c3 ? o2 && c3.p(t4, e2) : (c3 = l2(a4, t4), c3.c()), y2.set(a4, g2[h2] = c3), a4 in m2 && $2.set(a4, Math.abs(h2 - m2[a4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t4) {
        wt(t4, 1), t4.m(a3, u2), i2.set(t4.key, t4), u2 = t4.first, d2--;
      }
      for (; p2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t3[p2 - 1], o3 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, p2--, d2--) : y2.has(r3) ? !i2.has(o3) || b2.has(o3) ? _2(e3) : w2.has(r3) ? p2-- : $2.get(o3) > $2.get(r3) ? (w2.add(o3), _2(e3)) : (b2.add(r3), p2--) : (c2(n3, i2), p2--);
      }
      for (; p2--; ) {
        const e3 = t3[p2];
        y2.has(e3.key) || c2(e3, i2);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function St(t3) {
      t3 && t3.c();
    }
    function Rt(t3, e2, n2) {
      const {fragment: r2, on_mount: a3, on_destroy: c2, after_update: l2} = t3.$$;
      r2 && r2.m(e2, n2), ct(() => {
        const e3 = a3.map(o).filter(i);
        c2 ? c2.push(...e3) : s(e3), t3.$$.on_mount = [];
      }), l2.forEach(ct);
    }
    function It(t3, e2) {
      const n2 = t3.$$;
      n2.fragment !== null && (s(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function Lt(e2, n2, o2, i2, a3, c2, l2 = [-1]) {
      const u2 = H;
      G(e2);
      const f2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: a3, bound: r(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: r(), dirty: l2, skip_bound: false};
      let p2 = false;
      if (f2.ctx = o2 ? o2(e2, n2.props || {}, (t3, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return f2.ctx && a3(f2.ctx[t3], f2.ctx[t3] = r2) && (!f2.skip_bound && f2.bound[t3] && f2.bound[t3](r2), p2 && function(t4, e3) {
          t4.$$.dirty[0] === -1 && (tt.push(t4), it(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t3)), n3;
      }) : [], f2.update(), p2 = true, s(f2.before_update), f2.fragment = !!i2 && i2(f2.ctx), n2.target) {
        if (n2.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n2.target);
          f2.fragment && f2.fragment.l(t3), t3.forEach(k);
        } else
          f2.fragment && f2.fragment.c();
        n2.intro && wt(e2.$$.fragment), Rt(e2, n2.target, n2.anchor), ft();
      }
      G(u2);
    }
    class At {
      $destroy() {
        It(this, 1), this.$destroy = t2;
      }
      $on(t3, e2) {
        const n2 = this.$$.callbacks[t3] || (this.$$.callbacks[t3] = []);
        return n2.push(e2), () => {
          const t4 = n2.indexOf(e2);
          t4 !== -1 && n2.splice(t4, 1);
        };
      }
      $set(t3) {
        var e2;
        this.$$set && (e2 = t3, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t3), this.$$.skip_bound = false);
      }
    }
    var Tt = {queryHandler: {parse: (t3) => {
      return e2 = new URLSearchParams(t3), [...e2].reduce((t4, [e3, n2]) => (t4[e3] = n2, t4), {});
      var e2;
    }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
    const Ft = RegExp(/\:([^/()]+)/g);
    function Mt(t3) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      Nt(t3), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t4} = window.location;
        if (t4) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t4.substring(1))) {
            const e2 = document.querySelector(t4);
            e2 && e2.scrollIntoView();
          }
        }
      }();
    }
    function Nt(t3) {
      t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", Nt(t3.parentElement));
    }
    const Ct = (t3) => {
      const e2 = [];
      let n2;
      for (; n2 = Ft.exec(t3); )
        e2.push(n2[1]);
      return e2;
    };
    function qt(t3, e2) {
      qt._console = qt._console || {log: console.log, warn: console.warn};
      const {_console: n2} = qt, o2 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o2}> received an unexpected slot "default".`, `<${o2}> was created with unknown prop 'scoped'`, `<${o2}> was created with unknown prop 'scopedSync'`];
      for (const t4 of ["log", "warn"])
        console[t4] = (...e3) => {
          r2.includes(e3[0]) || n2[t4](...e3);
        }, e2().then(() => {
          console[t4] = n2[t4];
        });
    }
    function Bt() {
      let t3 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e2, options: n2} = function(t4) {
        const [e3, n3] = t4.split("__[[routify_url_options]]__"), o2 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o2.prefetch, {url: e3, options: o2};
      }(t3);
      return {...Ut(e2), options: n2};
    }
    function Ut(t3) {
      Tt.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const e2 = t3.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t3, e2);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function Dt(t3, e2, n2) {
      const o2 = Tt.useHash ? "#" : "";
      let r2;
      return r2 = function(t4, e3, n3) {
        const o3 = Object.assign({}, n3, e3), r3 = function(t5, e4) {
          if (!Tt.queryHandler)
            return "";
          const n4 = Ct(t5), o4 = {};
          e4 && Object.entries(e4).forEach(([t6, e5]) => {
            n4.includes(t6) || (o4[t6] = e5);
          });
          return Tt.queryHandler.stringify(o4).replace(/\?$/, "");
        }(t4, e3);
        for (const [e4, n4] of Object.entries(o3))
          t4 = t4.replace(`:${e4}`, n4);
        return `${t4}${r3}`;
      }(t3, e2, n2), r2 = Tt.urlTransform.apply(r2), r2 = o2 + r2, r2;
    }
    function zt(t3) {
      let e2;
      const n2 = t3[2].default, o2 = f(n2, t3, t3[1], null);
      return {c() {
        o2 && o2.c();
      }, m(t4, n3) {
        o2 && o2.m(t4, n3), e2 = true;
      }, p(t4, [e3]) {
        o2 && o2.p && 2 & e3 && d(o2, n2, t4, t4[1], e3, null, null);
      }, i(t4) {
        e2 || (wt(o2, t4), e2 = true);
      }, o(t4) {
        _t(o2, t4), e2 = false;
      }, d(t4) {
        o2 && o2.d(t4);
      }};
    }
    function Ht(t3, e2, n2) {
      let {$$slots: o2 = {}, $$scope: r2} = e2, {scoped: s2 = {}} = e2;
      return t3.$$set = (t4) => {
        "scoped" in t4 && n2(0, s2 = t4.scoped), "$$scope" in t4 && n2(1, r2 = t4.$$scope);
      }, [s2, r2, o2];
    }
    class Kt extends At {
      constructor(t3) {
        super(), Lt(this, t3, Ht, zt, a2, {scoped: 0});
      }
    }
    const Wt = [];
    function Jt(e2, n2 = t2) {
      let o2;
      const r2 = [];
      function s2(t3) {
        if (a2(e2, t3) && (e2 = t3, o2)) {
          const t4 = !Wt.length;
          for (let t5 = 0; t5 < r2.length; t5 += 1) {
            const n3 = r2[t5];
            n3[1](), Wt.push(n3, e2);
          }
          if (t4) {
            for (let t5 = 0; t5 < Wt.length; t5 += 2)
              Wt[t5][0](Wt[t5 + 1]);
            Wt.length = 0;
          }
        }
      }
      return {set: s2, update: function(t3) {
        s2(t3(e2));
      }, subscribe: function(i2, a3 = t2) {
        const c2 = [i2, a3];
        return r2.push(c2), r2.length === 1 && (o2 = n2(s2) || t2), i2(e2), () => {
          const t3 = r2.indexOf(c2);
          t3 !== -1 && r2.splice(t3, 1), r2.length === 0 && (o2(), o2 = null);
        };
      }};
    }
    function Gt(e2, n2, o2) {
      const r2 = !Array.isArray(e2), a3 = r2 ? [e2] : e2, l2 = n2.length < 2;
      return {subscribe: Jt(o2, (e3) => {
        let o3 = false;
        const u2 = [];
        let f2 = 0, p2 = t2;
        const d2 = () => {
          if (f2)
            return;
          p2();
          const o4 = n2(r2 ? u2[0] : u2, e3);
          l2 ? e3(o4) : p2 = i(o4) ? o4 : t2;
        }, h2 = a3.map((t3, e4) => c(t3, (t4) => {
          u2[e4] = t4, f2 &= ~(1 << e4), o3 && d2();
        }, () => {
          f2 |= 1 << e4;
        }));
        return o3 = true, d2(), function() {
          s(h2), p2();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const Qt = Jt(null);
    const Vt = Jt([]);
    Vt.subscribe((t3) => window.routify.routes = t3);
    let Zt = Jt({component: {params: {}}});
    const Xt = Jt(null);
    const Yt = Jt(true);
    function te(t3, e2 = false) {
      t3 = Tt.urlTransform.remove(t3);
      let {pathname: n2, search: o2} = Ut(t3).url;
      const r2 = l(Vt), s2 = r2.find((t4) => n2 === t4.meta.name) || r2.find((t4) => n2.match(t4.regex));
      if (!s2)
        throw new Error(`Route could not be found for "${n2}".`);
      const i2 = e2 ? Object.create(s2) : s2, {route: a3, redirectPath: c2, rewritePath: u2} = ee(i2, r2);
      return u2 && ({pathname: n2, search: o2} = Ut(Dt(u2, a3.params)).url, c2 && (a3.redirectTo = Dt(c2, a3.params || {}))), Tt.queryHandler && (a3.params = Object.assign({}, a3.params, Tt.queryHandler.parse(o2))), function(t4, e3) {
        if (t4.paramKeys) {
          const n3 = function(t5) {
            const e4 = [];
            return t5.forEach((t6) => {
              e4[t6.path.split("/").filter(Boolean).length - 1] = t6;
            }), e4;
          }(t4.layouts), o3 = e3.split("/").filter(Boolean);
          (function(t5) {
            return t5.split("/").filter(Boolean).map((t6) => t6.match(/\:(.+)/)).map((t6) => t6 && t6[1]);
          })(t4.path).forEach((e4, r3) => {
            e4 && (t4.params[e4] = o3[r3], n3[r3] ? n3[r3].param = {[e4]: o3[r3]} : t4.param = {[e4]: o3[r3]});
          });
        }
      }(a3, n2), a3.leftover = t3.replace(new RegExp(a3.regex), ""), a3;
    }
    function ee(t3, e2, n2, o2) {
      const {redirect: r2, rewrite: s2} = t3.meta;
      if (r2 || s2) {
        n2 = r2 ? r2.path || r2 : n2, o2 = s2 ? s2.path || s2 : n2;
        const i2 = r2 && r2.params, a3 = s2 && s2.params, c2 = e2.find((t4) => t4.path === o2);
        return c2 === t3 && console.error(`${o2} is redirecting to itself`), c2 || console.error(`${t3.path} is redirecting to non-existent path: ${o2}`), (i2 || a3) && (c2.params = Object.assign({}, c2.params, i2, a3)), ee(c2, e2, n2, o2);
      }
      return {route: t3, redirectPath: n2, rewritePath: o2};
    }
    function ne(t3, e2, n2) {
      const o2 = t3.slice();
      return o2[1] = e2[n2], o2;
    }
    function oe(t3, e2) {
      let n2, o2;
      return {key: t3, first: null, c() {
        n2 = O("iframe"), n2.src !== (o2 = e2[1].url) && A(n2, "src", o2), A(n2, "frameborder", "0"), A(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t4, e3) {
        P(t4, n2, e3);
      }, p(t4, r2) {
        e2 = t4, 1 & r2 && n2.src !== (o2 = e2[1].url) && A(n2, "src", o2);
      }, d(t4) {
        t4 && k(n2);
      }};
    }
    function re(e2) {
      let n2, o2 = [], r2 = new Map(), s2 = e2[0];
      const i2 = (t3) => t3[1].options.prefetch;
      for (let t3 = 0; t3 < s2.length; t3 += 1) {
        let n3 = ne(e2, s2, t3), a3 = i2(n3);
        r2.set(a3, o2[t3] = oe(a3, n3));
      }
      return {c() {
        n2 = O("div");
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].c();
        A(n2, "id", "__routify_iframes"), N(n2, "display", "none");
      }, m(t3, e3) {
        P(t3, n2, e3);
        for (let t4 = 0; t4 < o2.length; t4 += 1)
          o2[t4].m(n2, null);
      }, p(t3, [e3]) {
        1 & e3 && (s2 = t3[0], o2 = jt(o2, e3, i2, 1, t3, s2, r2, n2, Et, oe, null, ne));
      }, i: t2, o: t2, d(t3) {
        t3 && k(n2);
        for (let t4 = 0; t4 < o2.length; t4 += 1)
          o2[t4].d();
      }};
    }
    const se = Jt([]);
    const ie = Gt(se, (t3) => t3.slice(0, 2));
    function ae(t3) {
      const e2 = t3.data ? t3.data.prefetchId : t3;
      if (!e2)
        return null;
      const n2 = l(se).find((t4) => t4 && t4.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t4} = n2.options, o2 = new Promise((e3) => setTimeout(e3, t4)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t4 + 1e3);
        });
        Promise.all([o2, r2]).then(() => {
          se.update((t5) => t5.filter((t6) => t6.options.prefetch != e2));
        });
      }
    }
    function ce(t3, e2, n2) {
      let o2;
      return u(t3, ie, (t4) => n2(0, o2 = t4)), [o2];
    }
    ie.subscribe((t3) => t3.forEach(({options: t4}) => {
      setTimeout(() => ae(t4.prefetch), t4.timeout);
    })), addEventListener("message", ae, false);
    class le extends At {
      constructor(t3) {
        super(), Lt(this, t3, ce, re, a2, {});
      }
    }
    function ue() {
      return Y("routify") || Zt;
    }
    const fe = {_hooks: [(t3) => Yt.set(false)], subscribe: de};
    const pe = {_hooks: [], subscribe: de};
    function de(t3) {
      const e2 = this._hooks, n2 = e2.length;
      return t3((t4) => {
        e2[n2] = t4;
      }), () => delete e2[n2];
    }
    const he = {subscribe: (t3) => Gt(ue(), (t4) => t4.route.params).subscribe(t3)};
    const me = {subscribe: (t3) => Gt([ue(), Qt, Vt], (t4) => function(t5, e2, n2) {
      return function(o2, r2 = {}, s2) {
        const {component: i2} = t5, a3 = Object.assign({}, e2.params, i2.params);
        let c2 = o2 && o2.nodeType && o2;
        c2 && (o2 = o2.getAttribute("href")), o2 = o2 ? f2(o2) : i2.shortPath;
        const l2 = n2.find((t6) => [t6.shortPath || "/", t6.path].includes(o2));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t6 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t6);
        }
        s2 && s2.strict !== false || (o2 = o2.replace(/index$/, ""));
        let u2 = Dt(o2, r2, a3);
        return c2 ? (c2.href = u2, {update(t6) {
          c2.href = Dt(o2, t6, a3);
        }}) : u2;
        function f2(t6) {
          if (t6.match(/^\.\.?\//)) {
            let [, e3, n3] = t6.match(/^([\.\/]+)(.*)/), o3 = i2.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            i2.isPage && r3.push(null), r3.forEach(() => o3 = o3.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o3}/${n3}`.replace(/\/$/, "")) || "/";
          } else if (t6.match(/^\//))
            ;
          else {
            const e3 = n2.find((e4) => e4.meta.name === t6);
            e3 && (t6 = e3.shortPath);
          }
          return t6;
        }
      };
    }(...t4)).subscribe(t3)};
    const ge = {subscribe(t3) {
      const e2 = Y("routifyupdatepage");
      return Gt(me, (t4) => function(n2, o2, r2, s2) {
        const i2 = t4(n2, o2);
        r2 ? e2(i2, s2) : history.pushState({}, null, i2);
      }).subscribe(t3);
    }};
    const ye = {subscribe(t3) {
      const e2 = Y("routifyupdatepage");
      return Gt(me, (t4) => function(n2, o2, r2, s2) {
        const i2 = t4(n2, o2);
        r2 ? e2(i2, s2) : history.replaceState({}, null, i2);
      }).subscribe(t3);
    }};
    const $e = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e2) => [t3, ($e.getLongest($e.templates, t3) || ((t4) => t4))(e2)]}, {name: "createMeta", condition: () => true, action(t3, e2) {
      $e.writeMeta(t3, e2);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e2) {
      $e.writeMeta(`og:${t3}`, e2);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e2) {
      document.title = e2;
    }}], getLongest(t3, e2) {
      const n2 = t3[e2];
      if (n2) {
        const o2 = l(Qt).path;
        return n2[Object.keys(t3[e2]).filter((t4) => o2.includes(t4)).sort((t4, e3) => e3.length - t4.length)[0]];
      }
    }, writeMeta(t3, e2) {
      const n2 = document.getElementsByTagName("head")[0], o2 = t3.match(/(.+)\:/), r2 = o2 && o2[1] || "plain", {propField: s2, valueField: i2} = be.services[r2] || be.services.plain, a3 = document.querySelector(`meta[${s2}='${t3}']`);
      a3 && a3.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s2, t3), c2.setAttribute(i2, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t3, e2) {
      $e.plugins.forEach((n2) => {
        n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
      });
    }, clear() {
      const t3 = document.querySelector("meta");
      t3 && t3.remove();
    }, template(t3, e2) {
      const n2 = $e.getOrigin();
      $e.templates[t3] = $e.templates[t3] || {}, $e.templates[t3][n2] = e2;
    }, update() {
      Object.keys($e.props).forEach((t3) => {
        let e2 = $e.getLongest($e.props, t3);
        $e.plugins.forEach((n2) => {
          n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
        });
      });
    }, batchedUpdate() {
      $e._pendingUpdate || ($e._pendingUpdate = true, setTimeout(() => {
        $e._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t3 = ue();
      return t3 && l(t3).path || "/";
    }, _pendingUpdate: false};
    const be = new Proxy($e, {set(t3, e2, n2, o2) {
      const {props: r2, getOrigin: s2} = t3;
      return Reflect.has(t3, e2) ? Reflect.set(t3, e2, n2, o2) : (r2[e2] = r2[e2] || {}, r2[e2][s2()] = n2), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function we(t3, e2, n2) {
      const o2 = t3.slice();
      return o2[18] = e2[n2].component, o2[19] = e2[n2].componentFile, o2[2] = e2[n2].decorator, o2[1] = e2[n2].nodes, o2;
    }
    function _e(t3) {
      let e2, n2, o2 = [], r2 = new Map(), s2 = [t3[4]];
      const i2 = (t4) => function({meta: t5, path: e3, param: n3, params: o3}) {
        return JSON.stringify({path: e3, param: (t5["param-is-page"] || t5["slug-is-page"]) && n3, queryParams: t5["query-params-is-page"] && o3});
      }(t4[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = we(t3, s2, e3), a3 = i2(n3);
        r2.set(a3, o2[e3] = ke(a3, n3));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          o2[t4].c();
        e2 = I();
      }, m(t4, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].m(t4, r3);
        P(t4, e2, r3), n2 = true;
      }, p(t4, n3) {
        4194365 & n3 && (s2 = [t4[4]], $t(), o2 = jt(o2, n3, i2, 1, t4, s2, r2, e2.parentNode, Ot, ke, e2, we), bt());
      }, i(t4) {
        if (!n2) {
          for (let t5 = 0; t5 < 1; t5 += 1)
            wt(o2[t5]);
          n2 = true;
        }
      }, o(t4) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          _t(o2[t5]);
        n2 = false;
      }, d(t4) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].d(t4);
        t4 && k(e2);
      }};
    }
    function ve(t3) {
      let e2, n2;
      return e2 = new je({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[22]}}}), {c() {
        St(e2.$$.fragment);
      }, m(t4, o2) {
        Rt(e2, t4, o2), n2 = true;
      }, p(t4, n3) {
        const o2 = {};
        4 & n3 && (o2.decorator = t4[2]), 16 & n3 && (o2.nodes = [...t4[1]]), 4194305 & n3 && (o2.scoped = {...t4[0], ...t4[22]}), e2.$set(o2);
      }, i(t4) {
        n2 || (wt(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        _t(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        It(e2, t4);
      }};
    }
    function xe(t3) {
      let e2, n2, o2 = t3[18] && t3[1].length && ve(t3);
      return {c() {
        o2 && o2.c(), e2 = I();
      }, m(t4, r2) {
        o2 && o2.m(t4, r2), P(t4, e2, r2), n2 = true;
      }, p(t4, n3) {
        t4[18] && t4[1].length ? o2 ? (o2.p(t4, n3), 16 & n3 && wt(o2, 1)) : (o2 = ve(t4), o2.c(), wt(o2, 1), o2.m(e2.parentNode, e2)) : o2 && ($t(), _t(o2, 1, 1, () => {
          o2 = null;
        }), bt());
      }, i(t4) {
        n2 || (wt(o2), n2 = true);
      }, o(t4) {
        _t(o2), n2 = false;
      }, d(t4) {
        o2 && o2.d(t4), t4 && k(e2);
      }};
    }
    function Pe(t3) {
      let e2, o2, r2;
      const s2 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var i2 = t3[19];
      function a3(t4) {
        let e3 = {$$slots: {default: [xe, ({scoped: t5, decorator: e4}) => ({22: t5, 2: e4}), ({scoped: t5, decorator: e4}) => (t5 ? 4194304 : 0) | (e4 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < s2.length; t5 += 1)
          e3 = n(e3, s2[t5]);
        return {props: e3};
      }
      return i2 && (e2 = new i2(a3(t3))), {c() {
        e2 && St(e2.$$.fragment), o2 = R();
      }, m(t4, n2) {
        e2 && Rt(e2, t4, n2), P(t4, o2, n2), r2 = true;
      }, p(t4, n2) {
        const r3 = 41 & n2 ? function(t5, e3) {
          const n3 = {}, o3 = {}, r4 = {$$scope: 1};
          let s3 = t5.length;
          for (; s3--; ) {
            const i3 = t5[s3], a4 = e3[s3];
            if (a4) {
              for (const t6 in i3)
                t6 in a4 || (o3[t6] = 1);
              for (const t6 in a4)
                r4[t6] || (n3[t6] = a4[t6], r4[t6] = 1);
              t5[s3] = a4;
            } else
              for (const t6 in i3)
                r4[t6] = 1;
          }
          for (const t6 in o3)
            t6 in n3 || (n3[t6] = void 0);
          return n3;
        }(s2, [1 & n2 && {scoped: t4[0]}, 32 & n2 && {scopedSync: t4[5]}, 8 & n2 && (c2 = t4[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582933 & n2 && (r3.$$scope = {dirty: n2, ctx: t4}), i2 !== (i2 = t4[19])) {
          if (e2) {
            $t();
            const t5 = e2;
            _t(t5.$$.fragment, 1, 0, () => {
              It(t5, 1);
            }), bt();
          }
          i2 ? (e2 = new i2(a3(t4)), St(e2.$$.fragment), wt(e2.$$.fragment, 1), Rt(e2, o2.parentNode, o2)) : e2 = null;
        } else
          i2 && e2.$set(r3);
      }, i(t4) {
        r2 || (e2 && wt(e2.$$.fragment, t4), r2 = true);
      }, o(t4) {
        e2 && _t(e2.$$.fragment, t4), r2 = false;
      }, d(t4) {
        e2 && It(e2, t4), t4 && k(o2);
      }};
    }
    function ke(t3, e2) {
      let n2, o2, r2, s2;
      var i2 = e2[2];
      function a3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [Pe]}, $$scope: {ctx: t4}}};
      }
      return i2 && (o2 = new i2(a3(e2))), {key: t3, first: null, c() {
        n2 = I(), o2 && St(o2.$$.fragment), r2 = I(), this.first = n2;
      }, m(t4, e3) {
        P(t4, n2, e3), o2 && Rt(o2, t4, e3), P(t4, r2, e3), s2 = true;
      }, p(t4, n3) {
        e2 = t4;
        const s3 = {};
        if (1 & n3 && (s3.scoped = e2[0]), 8388669 & n3 && (s3.$$scope = {dirty: n3, ctx: e2}), i2 !== (i2 = e2[2])) {
          if (o2) {
            $t();
            const t5 = o2;
            _t(t5.$$.fragment, 1, 0, () => {
              It(t5, 1);
            }), bt();
          }
          i2 ? (o2 = new i2(a3(e2)), St(o2.$$.fragment), wt(o2.$$.fragment, 1), Rt(o2, r2.parentNode, r2)) : o2 = null;
        } else
          i2 && o2.$set(s3);
      }, i(t4) {
        s2 || (o2 && wt(o2.$$.fragment, t4), s2 = true);
      }, o(t4) {
        o2 && _t(o2.$$.fragment, t4), s2 = false;
      }, d(t4) {
        t4 && k(n2), t4 && k(r2), o2 && It(o2, t4);
      }};
    }
    function Ee(e2) {
      let n2, o2, r2, s2, a3, c2 = e2[4] && _e(e2);
      return {c() {
        c2 && c2.c(), n2 = R(), o2 = O("span");
      }, m(l2, u2) {
        var f2;
        c2 && c2.m(l2, u2), P(l2, n2, u2), P(l2, o2, u2), r2 = true, s2 || (f2 = e2[8].call(null, o2), a3 = f2 && i(f2.destroy) ? f2.destroy : t2, s2 = true);
      }, p(t3, [e3]) {
        t3[4] ? c2 ? (c2.p(t3, e3), 16 & e3 && wt(c2, 1)) : (c2 = _e(t3), c2.c(), wt(c2, 1), c2.m(n2.parentNode, n2)) : c2 && ($t(), _t(c2, 1, 1, () => {
          c2 = null;
        }), bt());
      }, i(t3) {
        r2 || (wt(c2), r2 = true);
      }, o(t3) {
        _t(c2), r2 = false;
      }, d(t3) {
        c2 && c2.d(t3), t3 && k(n2), t3 && k(o2), s2 = false, a3();
      }};
    }
    function Oe(t3, e2, n2) {
      let o2, r2, s2, i2;
      u(t3, Qt, (t4) => n2(14, s2 = t4));
      let a3, {nodes: c2 = []} = e2, {scoped: l2 = {}} = e2, {isRoot: f2 = false} = e2, {decorator: p2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = Jt(null);
      u(t3, g2, (t4) => n2(4, i2 = t4));
      const y2 = Y("routify");
      u(t3, y2, (t4) => n2(10, r2 = t4));
      function $2(t4) {
        n2(5, m2 = {...l2}), h2.length === 0 && async function() {
          await at(), Mt(a3);
          const t5 = i2.component.path === s2.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e4, afterPageLoad: n3}) {
            const {path: o3} = t6, {options: r3} = Bt(), s3 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t6.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o3, prefetchId: s3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: i2.component, metatags: be, afterPageLoad: fe});
        }();
        const e3 = {nodes: h2, decorator: p2 || Kt, layout: d2.isLayout ? d2 : o2 && o2.layout, component: d2, route: s2, componentFile: t4, parentNode: a3 || o2 && o2.parentNode};
        g2.set(e3), f2 && Zt.set(e3);
      }
      return X("routify", g2), t3.$$set = (t4) => {
        "nodes" in t4 && n2(1, c2 = t4.nodes), "scoped" in t4 && n2(0, l2 = t4.scoped), "isRoot" in t4 && n2(9, f2 = t4.isRoot), "decorator" in t4 && n2(2, p2 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o2 = r2), 2 & t3.$$.dirty && n2(3, [d2, ...h2] = c2, d2), 8 & t3.$$.dirty && function(t4) {
          let e3 = t4.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t3.$$.dirty && i2 && qt(i2, at);
      }, [l2, c2, p2, d2, i2, m2, g2, y2, (t4) => a3 = t4.parentNode, f2, r2];
    }
    class je extends At {
      constructor(t3) {
        super(), Lt(this, t3, Oe, Ee, a2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function Se(t3, e2) {
      let n2 = false;
      function o2(o3, r3) {
        const s2 = te(o3 || Bt().fullpath);
        s2.redirectTo && (history.replaceStateNative({}, null, s2.redirectTo), delete s2.redirectTo);
        const i2 = [...(r3 && te(Bt().fullpath, t3) || s2).layouts, s2];
        n2 && delete n2.last, s2.last = n2, n2 = s2, o3 || Xt.set(s2), Qt.set(s2), s2.api.preload().then(() => {
          Yt.set(true), e2(i2);
        });
      }
      const r2 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e4 = {}, n4, o3) {
            if (o3 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: s2, params: i2} = l(Qt);
            e4 = {id: r3, path: s2, params: i2, ...e4};
            const a3 = new Event(t5.toLowerCase());
            Object.assign(a3, {state: e4, title: n4, url: o3});
            return await Ie(a3, o3) ? (history[t5 + "Native"].apply(this, [e4, n4, o3]), dispatchEvent(a3)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: Re, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n4) => {
          e3 ? e3 = false : await Ie(n4, Bt().fullpath) ? t4() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n3).forEach((t5) => removeEventListener(...t5));
        };
      }(o2);
      return {updatePage: o2, destroy: r2};
    }
    function Re(t3) {
      const e2 = t3.target.closest("a"), n2 = e2 && e2.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o2 = new URL(n2), r2 = o2.pathname + o2.search + o2.hash;
      t3.preventDefault(), history.pushState({}, "", r2);
    }
    async function Ie(t3, e2) {
      const n2 = te(e2).api;
      for (const o2 of pe._hooks.filter(Boolean)) {
        if (!await o2(t3, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function Le(t3) {
      let e2, n2;
      return e2 = new je({props: {nodes: t3[0], isRoot: true}}), {c() {
        St(e2.$$.fragment);
      }, m(t4, o2) {
        Rt(e2, t4, o2), n2 = true;
      }, p(t4, n3) {
        const o2 = {};
        1 & n3 && (o2.nodes = t4[0]), e2.$set(o2);
      }, i(t4) {
        n2 || (wt(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        _t(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        It(e2, t4);
      }};
    }
    function Ae(t3) {
      let e2, n2, o2, r2 = t3[0] && t3[1] !== null && Le(t3);
      return n2 = new le({}), {c() {
        r2 && r2.c(), e2 = R(), St(n2.$$.fragment);
      }, m(t4, s2) {
        r2 && r2.m(t4, s2), P(t4, e2, s2), Rt(n2, t4, s2), o2 = true;
      }, p(t4, [n3]) {
        t4[0] && t4[1] !== null ? r2 ? (r2.p(t4, n3), 3 & n3 && wt(r2, 1)) : (r2 = Le(t4), r2.c(), wt(r2, 1), r2.m(e2.parentNode, e2)) : r2 && ($t(), _t(r2, 1, 1, () => {
          r2 = null;
        }), bt());
      }, i(t4) {
        o2 || (wt(r2), wt(n2.$$.fragment, t4), o2 = true);
      }, o(t4) {
        _t(r2), _t(n2.$$.fragment, t4), o2 = false;
      }, d(t4) {
        r2 && r2.d(t4), t4 && k(e2), It(n2, t4);
      }};
    }
    function Te(t3, e2, n2) {
      let o2;
      u(t3, Qt, (t4) => n2(1, o2 = t4));
      let r2, s2, {routes: i2} = e2, {config: a3 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(Tt, a3);
      X("routifyupdatepage", (...t4) => s2 && s2.updatePage(...t4));
      const c2 = (t4) => n2(0, r2 = t4), l2 = () => {
        s2 && (s2.destroy(), s2 = null);
      };
      let f2 = null;
      var p2;
      return p2 = l2, Q().$$.on_destroy.push(p2), t3.$$set = (t4) => {
        "routes" in t4 && n2(2, i2 = t4.routes), "config" in t4 && n2(3, a3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && i2 && (clearTimeout(f2), f2 = setTimeout(() => {
          l2(), s2 = Se(i2, c2), Vt.set(i2), s2.updatePage();
        }));
      }, [r2, o2, i2, a3];
    }
    class Fe extends At {
      constructor(t3) {
        super(), Lt(this, t3, Te, Ae, a2, {routes: 2, config: 3});
      }
    }
    function Me(t3) {
      const e2 = async function(e3) {
        return await Ne(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return Ce(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function Ne(t3, e2) {
      const n2 = await t3(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = await Promise.all(o2.children.map(async (n4) => Ne(t3, {state: e2.state, scope: qe(e2.scope || {}), parent: e2.file, file: await n4})));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Ce(t3, e2) {
      const n2 = t3(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = o2.children.map((n4) => Ce(t3, {state: e2.state, scope: qe(e2.scope || {}), parent: e2.file, file: n4}));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function qe(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const Be = Me(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(Ft, "([^/]+)") + n2}`;
      })(t3.path, t3.isFallback));
    });
    const Ue = Me(({file: t3}) => {
      t3.paramKeys = Ct(t3.path);
    });
    const De = Me(({file: t3}) => {
      t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
    });
    const ze = Me(({file: t3}) => {
      t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
    });
    const He = Me(({file: t3}) => {
      const e2 = t3, n2 = t3.meta && t3.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const Ke = Me((t3) => {
      const {file: e2} = t3, {isFallback: n2, meta: o2} = e2, r2 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i2 = o2.index || o2.index === 0, a3 = o2.index === false;
      e2.isIndexable = i2 || !n2 && !r2 && !s2 && !a3, e2.isNonIndexable = !e2.isIndexable;
    });
    const We = Me(({file: t3, parent: e2}) => {
      Object.defineProperty(t3, "parent", {get: () => e2}), Object.defineProperty(t3, "nextSibling", {get: () => Ge(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => Ge(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => Je(e2)});
    });
    function Je(t3, e2 = []) {
      return t3 && (e2.unshift(t3), Je(t3.parent, e2)), e2;
    }
    function Ge(t3, e2) {
      if (!t3.root) {
        const n2 = t3.parent.children.filter((t4) => t4.isIndexable), o2 = n2.indexOf(t3);
        return n2[o2 + e2];
      }
    }
    const Qe = Me(({file: t3, parent: e2}) => {
      t3.isIndex && Object.defineProperty(e2, "index", {get: () => t3});
    });
    const Ve = Me(({file: t3, scope: e2}) => {
      function n2(t4) {
        const {parent: e3} = t4, o2 = e3 && e3.component && e3, r2 = o2 && o2.isReset, s2 = e3 && !r2 && n2(e3) || [];
        return o2 && s2.push(o2), s2;
      }
      Object.defineProperty(t3, "layouts", {get: () => n2(t3)});
    });
    const Ze = Me(({file: t3}) => {
      const e2 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e2.prototype);
    });
    var Xe = Object.freeze({__proto__: null, setRegex: Be, setParamKeys: Ue, setShortPath: De, setRank: ze, addMetaChildren: He, setIsIndexable: Ke, assignRelations: We, assignIndex: Qe, assignLayout: Ve, createFlatList: (t3) => {
      Me((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e2) => t4.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: Ze});
    const Ye = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function tn(t3) {
      return Object.entries(Ye).forEach(([e2, n2]) => {
        t3[e2] === void 0 && (t3[e2] = n2);
      }), t3.children && (t3.children = t3.children.map(tn)), t3;
    }
    const en = Me(({file: t3}) => {
      t3.api = new nn(t3);
    });
    class nn {
      constructor(t3) {
        this.__file = t3, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t3.isMeta, this.path = t3.path, this.title = function(t4) {
          return t4.meta.title !== void 0 ? t4.meta.title : (t4.shortPath || t4.path).split("/").pop().replace(/-/g, " ");
        }(t3), this.meta = t3.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t3) => !t3.isNonIndexable).sort((t3, e2) => t3.isMeta && e2.isMeta ? 0 : (t3 = (t3.meta.index || t3.meta.title || t3.path).toString(), e2 = (e2.meta.index || e2.meta.title || e2.path).toString(), t3.localeCompare(e2, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t3}) => t3);
      }
      get next() {
        return on(this, 1);
      }
      get prev() {
        return on(this, -1);
      }
      async preload() {
        const t3 = [...this.__file.layouts, this.__file].map((t4) => t4.component());
        await Promise.all(t3);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function on(t3, e2) {
      if (!t3.__file.root) {
        const n2 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n2 + e2];
      }
    }
    const rn = {...Xe, restoreDefaults: ({tree: t3}) => tn(t3), assignAPI: en};
    const sn = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_c3ce2b1a())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery/index", id: "_gallery_index", component: () => Promise.resolve().then(() => __toModule(require_index_37e38a34())).then((t3) => t3.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery"}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_7750f5d9())).then((t3) => t3.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_9ebc197d())).then((t3) => t3.default)};
    const {tree: an, routes: cn} = function(t3) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t3, routes: []};
      for (let t4 of e2) {
        (rn[t4].sync || rn[t4])(n2);
      }
      return n2;
    }(sn);
    function ln(e2) {
      let n2, o2;
      return n2 = new Fe({props: {routes: cn}}), {c() {
        St(n2.$$.fragment);
      }, m(t3, e3) {
        Rt(n2, t3, e3), o2 = true;
      }, p: t2, i(t3) {
        o2 || (wt(n2.$$.fragment, t3), o2 = true);
      }, o(t3) {
        _t(n2.$$.fragment, t3), o2 = false;
      }, d(t3) {
        It(n2, t3);
      }};
    }
    !function(t3, e2 = {target: document.body}, n2 = "hmr", o2 = "app-loaded") {
      const r2 = document.getElementById(n2), s2 = document.createElement("div");
      function i2() {
        r2 && r2.remove(), s2.style.visibility = null, s2.setAttribute("id", n2);
      }
      s2.style.visibility = "hidden", e2.target.appendChild(s2), r2 ? addEventListener(o2, i2) : i2(), new t3({...e2, target: s2});
    }(class extends At {
      constructor(t3) {
        super(), Lt(this, t3, null, ln, a2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/index-534f5dd7.js
  const main = __toModule(require_main());
  function a(a2, {delay: o = 0, duration: e = 400, easing: i = main.E} = {}) {
    const n = +getComputedStyle(a2).opacity;
    return {delay: o, duration: e, easing: i, css: (t2) => "opacity: " + t2 * n};
  }
  require_main();
})();
