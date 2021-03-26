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

  // dist/build/_fallback-f1dc27da.js
  var require_fallback_f1dc27da = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_f1dc27da_default
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
    class fallback_f1dc27da_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, g, v, main2.s, {});
      }
    }
  });

  // dist/build/index-3d4e8715.js
  var require_index_3d4e8715 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_3d4e8715_default
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
    class index_3d4e8715_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, G, F, main2.s, {});
      }
    }
  });

  // dist/build/index-868dc185.js
  var require_index_868dc185 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_868dc185_default
    });
    const main2 = __toModule(require_main());
    function X(e2, t3) {
      const n2 = localStorage.getItem(e2);
      return n2 || t3;
    }
    let G = main2.F(X("preferences-profile", "latest"));
    G.subscribe((e2) => {
      localStorage.setItem("preferences-profile", e2);
    });
    let ee = main2.F([]);
    let te = main2.F(false);
    let ne = main2.F(X("dark-mode", false));
    ne.subscribe((e2) => {
      localStorage.setItem("dark-mode", e2);
    });
    let re = main2.G(ne, (e2) => e2 ? "bg-gray-800 text-gray-300 " : "bg-white");
    let se = main2.G(ne, (e2) => e2 ? "border-gray-900" : "border-gray-100");
    function oe(e2) {
      let t3, n2, r2, s2, g2, M2, k2, S2, O2, C2, j2, L2, P2 = e2[0].closeButton && ie(e2);
      var I2 = e2[1];
      return I2 && (M2 = new I2({})), {c() {
        t3 = main2.e("div"), n2 = main2.e("div"), r2 = main2.e("div"), P2 && P2.c(), s2 = main2.a(), g2 = main2.e("div"), M2 && main2.q(M2.$$.fragment), main2.b(g2, "class", "content svelte-ypgpsi"), main2.b(g2, "style", e2[12]), main2.b(r2, "class", k2 = "window " + e2[16] + " svelte-ypgpsi"), main2.b(r2, "role", "dialog"), main2.b(r2, "aria-modal", "true"), main2.b(r2, "style", e2[11]), main2.b(n2, "class", "window-wrap svelte-ypgpsi"), main2.b(n2, "style", e2[10]), main2.b(t3, "class", "bg svelte-ypgpsi"), main2.b(t3, "style", e2[9]);
      }, m(o2, i2) {
        main2.c(o2, t3, i2), main2.d(t3, n2), main2.d(n2, r2), P2 && P2.m(r2, null), main2.d(r2, s2), main2.d(r2, g2), M2 && main2.r(M2, g2, null), e2[38](r2), e2[39](n2), e2[40](t3), C2 = true, j2 || (L2 = [main2.A(r2, "introstart", function() {
          main2.H(e2[5]) && e2[5].apply(this, arguments);
        }), main2.A(r2, "outrostart", function() {
          main2.H(e2[6]) && e2[6].apply(this, arguments);
        }), main2.A(r2, "introend", function() {
          main2.H(e2[7]) && e2[7].apply(this, arguments);
        }), main2.A(r2, "outroend", function() {
          main2.H(e2[8]) && e2[8].apply(this, arguments);
        }), main2.A(t3, "click", e2[20])], j2 = true);
      }, p(o2, i2) {
        if ((e2 = o2)[0].closeButton ? P2 ? (P2.p(e2, i2), 1 & i2[0] && main2.p(P2, 1)) : (P2 = ie(e2), P2.c(), main2.p(P2, 1), P2.m(r2, s2)) : P2 && (main2.D(), main2.v(P2, 1, 1, () => {
          P2 = null;
        }), main2.x()), I2 !== (I2 = e2[1])) {
          if (M2) {
            main2.D();
            const e3 = M2;
            main2.v(e3.$$.fragment, 1, 0, () => {
              main2.w(e3, 1);
            }), main2.x();
          }
          I2 ? (M2 = new I2({}), main2.q(M2.$$.fragment), main2.p(M2.$$.fragment, 1), main2.r(M2, g2, null)) : M2 = null;
        }
        (!C2 || 4096 & i2[0]) && main2.b(g2, "style", e2[12]), (!C2 || 65536 & i2[0] && k2 !== (k2 = "window " + e2[16] + " svelte-ypgpsi")) && main2.b(r2, "class", k2), (!C2 || 2048 & i2[0]) && main2.b(r2, "style", e2[11]), (!C2 || 1024 & i2[0]) && main2.b(n2, "style", e2[10]), (!C2 || 512 & i2[0]) && main2.b(t3, "style", e2[9]);
      }, i(n3) {
        C2 || (main2.p(P2), M2 && main2.p(M2.$$.fragment, n3), main2.j(() => {
          S2 || (S2 = main2.k(r2, e2[15], e2[0].transitionWindowProps, true)), S2.run(1);
        }), main2.j(() => {
          O2 || (O2 = main2.k(t3, e2[14], e2[0].transitionBgProps, true)), O2.run(1);
        }), C2 = true);
      }, o(n3) {
        main2.v(P2), M2 && main2.v(M2.$$.fragment, n3), S2 || (S2 = main2.k(r2, e2[15], e2[0].transitionWindowProps, false)), S2.run(0), O2 || (O2 = main2.k(t3, e2[14], e2[0].transitionBgProps, false)), O2.run(0), C2 = false;
      }, d(n3) {
        n3 && main2.f(t3), P2 && P2.d(), M2 && main2.w(M2), e2[38](null), n3 && S2 && S2.end(), e2[39](null), e2[40](null), n3 && O2 && O2.end(), j2 = false, main2.B(L2);
      }};
    }
    function ie(e2) {
      let t3, n2, r2, s2, o2;
      const i2 = [le, ce], c2 = [];
      function a3(e3, n3) {
        return 1 & n3[0] && (t3 = !!e3[17](e3[0].closeButton)), t3 ? 0 : 1;
      }
      return n2 = a3(e2, [-1]), r2 = c2[n2] = i2[n2](e2), {c() {
        r2.c(), s2 = main2.I();
      }, m(e3, t4) {
        c2[n2].m(e3, t4), main2.c(e3, s2, t4), o2 = true;
      }, p(e3, t4) {
        let o3 = n2;
        n2 = a3(e3, t4), n2 === o3 ? c2[n2].p(e3, t4) : (main2.D(), main2.v(c2[o3], 1, 1, () => {
          c2[o3] = null;
        }), main2.x(), r2 = c2[n2], r2 ? r2.p(e3, t4) : (r2 = c2[n2] = i2[n2](e3), r2.c()), main2.p(r2, 1), r2.m(s2.parentNode, s2));
      }, i(e3) {
        o2 || (main2.p(r2), o2 = true);
      }, o(e3) {
        main2.v(r2), o2 = false;
      }, d(e3) {
        c2[n2].d(e3), e3 && main2.f(s2);
      }};
    }
    function ce(e2) {
      let t3, n2, r2;
      return {c() {
        t3 = main2.e("button"), main2.b(t3, "class", "close svelte-ypgpsi"), main2.b(t3, "style", e2[13]);
      }, m(s2, o2) {
        main2.c(s2, t3, o2), n2 || (r2 = main2.A(t3, "click", e2[18]), n2 = true);
      }, p(e3, n3) {
        8192 & n3[0] && main2.b(t3, "style", e3[13]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), n2 = false, r2();
      }};
    }
    function le(e2) {
      let t3, n2, r2;
      var s2 = e2[0].closeButton;
      function o2(e3) {
        return {props: {onClose: e3[18]}};
      }
      return s2 && (t3 = new s2(o2(e2))), {c() {
        t3 && main2.q(t3.$$.fragment), n2 = main2.I();
      }, m(e3, s3) {
        t3 && main2.r(t3, e3, s3), main2.c(e3, n2, s3), r2 = true;
      }, p(e3, r3) {
        if (s2 !== (s2 = e3[0].closeButton)) {
          if (t3) {
            main2.D();
            const e4 = t3;
            main2.v(e4.$$.fragment, 1, 0, () => {
              main2.w(e4, 1);
            }), main2.x();
          }
          s2 ? (t3 = new s2(o2(e3)), main2.q(t3.$$.fragment), main2.p(t3.$$.fragment, 1), main2.r(t3, n2.parentNode, n2)) : t3 = null;
        }
      }, i(e3) {
        r2 || (t3 && main2.p(t3.$$.fragment, e3), r2 = true);
      }, o(e3) {
        t3 && main2.v(t3.$$.fragment, e3), r2 = false;
      }, d(e3) {
        e3 && main2.f(n2), t3 && main2.w(t3, e3);
      }};
    }
    function ae(e2) {
      let t3, n2, r2, s2, o2 = e2[1] && oe(e2);
      const c2 = e2[37].default, a3 = main2.J(c2, e2, e2[36], null);
      return {c() {
        o2 && o2.c(), t3 = main2.a(), a3 && a3.c();
      }, m(i2, c3) {
        o2 && o2.m(i2, c3), main2.c(i2, t3, c3), a3 && a3.m(i2, c3), n2 = true, r2 || (s2 = main2.A(window, "keydown", e2[19]), r2 = true);
      }, p(e3, n3) {
        e3[1] ? o2 ? (o2.p(e3, n3), 2 & n3[0] && main2.p(o2, 1)) : (o2 = oe(e3), o2.c(), main2.p(o2, 1), o2.m(t3.parentNode, t3)) : o2 && (main2.D(), main2.v(o2, 1, 1, () => {
          o2 = null;
        }), main2.x()), a3 && a3.p && 32 & n3[1] && main2.K(a3, c2, e3, e3[36], n3, null, null);
      }, i(e3) {
        n2 || (main2.p(o2), main2.p(a3, e3), n2 = true);
      }, o(e3) {
        main2.v(o2), main2.v(a3, e3), n2 = false;
      }, d(e3) {
        o2 && o2.d(e3), e3 && main2.f(t3), a3 && a3.d(e3), r2 = false, s2();
      }};
    }
    function ue(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2;
      main2.g(e2, re, (e3) => n2(16, u2 = e3));
      let {$$slots: d2 = {}, $$scope: f2} = t3;
      const g2 = main2.L(), h2 = main2.M;
      let {show: p2 = null} = t3, {key: m2 = "simple-modal"} = t3, {closeButton: $2 = true} = t3, {closeOnEsc: y2 = true} = t3, {closeOnOuterClick: b2 = true} = t3, {styleBg: w2 = {top: 0, left: 0}} = t3, {styleWindowWrap: x2 = {}} = t3, {styleWindow: v2 = {}} = t3, {styleContent: _2 = {}} = t3, {styleCloseButton: M2 = {}} = t3, {setContext: k2 = h2} = t3, {transitionBg: C2 = a} = t3, {transitionBgProps: P2 = {duration: 250}} = t3, {transitionWindow: I2 = C2} = t3, {transitionWindowProps: T2 = P2} = t3;
      const A2 = {closeButton: $2, closeOnEsc: y2, closeOnOuterClick: b2, styleBg: w2, styleWindowWrap: x2, styleWindow: v2, styleContent: _2, styleCloseButton: M2, transitionBg: C2, transitionBgProps: P2, transitionWindow: I2, transitionWindowProps: T2};
      let B2, E2, z2, N2 = {...A2}, D2 = null;
      const W2 = (e3) => Object.keys(e3).reduce((t4, n3) => `${t4}; ${((e4) => e4.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(n3)}: ${e3[n3]}`, ""), R2 = (e3) => !!(e3 && e3.constructor && e3.call && e3.apply), F2 = () => {
      };
      let J2 = F2, V2 = F2, q2 = F2, H2 = F2;
      const K2 = (e3, t4 = {}, r3 = {}, s3 = {}) => {
        n2(1, D2 = function(e4, t5 = {}) {
          return function(n3) {
            return new e4({...n3, props: {...t5, ...n3.props}});
          };
        }(e3, t4)), n2(0, N2 = {...A2, ...r3}), n2(5, J2 = (e4) => {
          s3.onOpen && s3.onOpen(e4), g2("opening");
        }), n2(6, V2 = (e4) => {
          s3.onClose && s3.onClose(e4), g2("closing");
        }), n2(7, q2 = (e4) => {
          s3.onOpened && s3.onOpened(e4), g2("opened");
        }), n2(8, H2 = (e4) => {
          s3.onClosed && s3.onClosed(e4), g2("closed");
        });
      }, U2 = (e3 = {}) => {
        n2(6, V2 = e3.onClose || V2), n2(8, H2 = e3.onClosed || H2), n2(1, D2 = null);
      };
      return k2(m2, {open: K2, close: U2}), e2.$$set = (e3) => {
        "show" in e3 && n2(21, p2 = e3.show), "key" in e3 && n2(22, m2 = e3.key), "closeButton" in e3 && n2(23, $2 = e3.closeButton), "closeOnEsc" in e3 && n2(24, y2 = e3.closeOnEsc), "closeOnOuterClick" in e3 && n2(25, b2 = e3.closeOnOuterClick), "styleBg" in e3 && n2(26, w2 = e3.styleBg), "styleWindowWrap" in e3 && n2(27, x2 = e3.styleWindowWrap), "styleWindow" in e3 && n2(28, v2 = e3.styleWindow), "styleContent" in e3 && n2(29, _2 = e3.styleContent), "styleCloseButton" in e3 && n2(30, M2 = e3.styleCloseButton), "setContext" in e3 && n2(31, k2 = e3.setContext), "transitionBg" in e3 && n2(32, C2 = e3.transitionBg), "transitionBgProps" in e3 && n2(33, P2 = e3.transitionBgProps), "transitionWindow" in e3 && n2(34, I2 = e3.transitionWindow), "transitionWindowProps" in e3 && n2(35, T2 = e3.transitionWindowProps), "$$scope" in e3 && n2(36, f2 = e3.$$scope);
      }, e2.$$.update = () => {
        1 & e2.$$.dirty[0] && n2(9, r2 = W2(N2.styleBg)), 1 & e2.$$.dirty[0] && n2(10, s2 = W2(N2.styleWindowWrap)), 1 & e2.$$.dirty[0] && n2(11, o2 = W2(N2.styleWindow)), 1 & e2.$$.dirty[0] && n2(12, i2 = W2(N2.styleContent)), 1 & e2.$$.dirty[0] && n2(13, c2 = W2(N2.styleCloseButton)), 1 & e2.$$.dirty[0] && n2(14, l2 = N2.transitionBg), 1 & e2.$$.dirty[0] && n2(15, a3 = N2.transitionWindow), 2097152 & e2.$$.dirty[0] && (R2(p2) ? K2(p2) : U2());
      }, [N2, D2, B2, E2, z2, J2, V2, q2, H2, r2, s2, o2, i2, c2, l2, a3, u2, R2, U2, (e3) => {
        if (N2.closeOnEsc && D2 && e3.key === "Escape" && (e3.preventDefault(), U2()), D2 && e3.key === "Tab") {
          const t4 = z2.querySelectorAll("*"), n3 = Array.from(t4).filter((e4) => e4.tabIndex >= 0);
          let r3 = n3.indexOf(document.activeElement);
          r3 === -1 && e3.shiftKey && (r3 = 0), r3 += n3.length + (e3.shiftKey ? -1 : 1), r3 %= n3.length, n3[r3].focus(), e3.preventDefault();
        }
      }, (e3) => {
        !N2.closeOnOuterClick || e3.target !== B2 && e3.target !== E2 || (e3.preventDefault(), U2());
      }, p2, m2, $2, y2, b2, w2, x2, v2, _2, M2, k2, C2, P2, I2, T2, f2, d2, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          z2 = e3, n2(4, z2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          E2 = e3, n2(3, E2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          B2 = e3, n2(2, B2);
        });
      }];
    }
    class de extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ue, ae, main2.s, {show: 21, key: 22, closeButton: 23, closeOnEsc: 24, closeOnOuterClick: 25, styleBg: 26, styleWindowWrap: 27, styleWindow: 28, styleContent: 29, styleCloseButton: 30, setContext: 31, transitionBg: 32, transitionBgProps: 33, transitionWindow: 34, transitionWindowProps: 35}, [-1, -1]);
      }
    }
    const fe = {value: "\u{1F496}", color: "#fff"};
    const ge = [{value: "\uAD8C\uC740\uBE44", color: "#bbb0dc"}, {value: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", color: "#f1d2e7"}, {value: "\uAC15\uD61C\uC6D0", color: "#db706c"}, {value: "\uCD5C\uC608\uB098", color: "#fcf695"}, {value: "\uC774\uCC44\uC5F0", color: "#a7e0e1"}, {value: "\uAE40\uCC44\uC6D0", color: "#cee5d5"}, {value: "\uC57C\uBD80\uD0A4 \uB098\uCF54", color: "#b7d3e9"}, {value: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", color: "#f1c3aa"}, {value: "\uAE40\uBBFC\uC8FC", color: "#fff"}, {value: "\uC870\uC720\uB9AC", color: "#f3aa51"}, {value: "\uC548\uC720\uC9C4", color: "#567ace"}, {value: "\uC7A5\uC6D0\uC601", color: "#d9598c"}, {value: "\uC6B4\uC601\uD300", color: "gray"}];
    let he;
    let pe = main2.F(function() {
      let e2 = ge.reduce((e3, t4) => (e3.set(t4.value, t4), e3), new Map([["\u{1F496}", fe]]));
      const t3 = localStorage.getItem("all_tag_dict");
      if (t3) {
        console.log("all tag backup loaded");
        const n2 = JSON.parse(t3);
        e2 = [...e2].reduce((e3, t4) => (e3.set(t4[0], t4[1]), e3), new Map(n2));
      }
      return e2;
    }());
    pe.subscribe((e2) => {
      var t3;
      localStorage.setItem("all_tag_dict", (t3 = e2, JSON.stringify([...t3])));
    }), pe.subscribe((e2) => {
      he = (t3) => {
        const n2 = t3.map((t4) => {
          const n3 = t4[0], r2 = t4[1].filter((t5) => e2.has(t5)).map((t5) => e2.get(t5));
          return [n3, new Set(r2)];
        });
        return new Map(n2);
      };
    });
    let me = main2.F(function() {
      const e2 = localStorage.getItem("mail_to_tag_dict");
      let t3 = new Map([["m0", new Set([fe])]]);
      if (e2) {
        const n2 = JSON.parse(e2);
        t3 = he(n2);
      }
      return t3;
    }());
    function $e(e2) {
      return [...e2].map((e3) => [e3[0], [...e3[1]].map((e4) => e4.value)]);
    }
    me.subscribe((e2) => {
      if (!e2)
        return null;
      [...e2].forEach((e3) => {
        e3[1].size == 0 && me.update((t4) => (t4.delete(e3[0]), t4));
      });
      const t3 = $e(e2);
      localStorage.setItem("mail_to_tag_dict", JSON.stringify(t3));
    });
    let ye;
    let be = main2.F("");
    let we = main2.F(Math.floor(12 * Math.random()));
    let xe = main2.F(null);
    pe.subscribe((e2) => {
      ye = (t3) => new Map(t3.filter((t4) => e2.has(t4[0])).map((t4) => [e2.get(t4[0]), new Set(t4[1])]));
    });
    let ve = main2.F(function() {
      const e2 = () => new Set();
      let t3 = ge.reduce((t4, n3) => (t4.set(n3, e2()), t4), new Map([[fe, e2()]]));
      const n2 = localStorage.getItem("tag_to_mail_dict");
      if (n2) {
        const e3 = JSON.parse(n2);
        t3 = [...ye(e3)].reduce((e4, t4) => (e4.set(t4[0], t4[1]), e4), t3);
      }
      return t3;
    }());
    function _e(e2) {
      return [...e2].map((e3) => [e3[0].value, [...e3[1]]]);
    }
    te.subscribe((e2) => {
    }), ve.subscribe((e2) => {
      if ([...e2].forEach(([t4, n2]) => {
        if (n2 || (console.log(t4, n2), console.log(e2)), n2.size == 0 && t4.value != "\u{1F496}" && !ge.includes(t4)) {
          xe.update((e4) => e4 == t4.value ? null : e4);
          const e3 = t4.value;
          ve.update((e4) => (e4.delete(t4), e4)), pe.update((t5) => (t5.delete(e3), t5));
        }
      }), !e2)
        return null;
      const t3 = _e(e2);
      localStorage.setItem("tag_to_mail_dict", JSON.stringify(t3));
    });
    let Me = main2.F([{id: "", member: "", time: "", subject: "", preview: "", n: 1}]);
    let ke = main2.F({id: "m20731", member: "\uAD11\uBC30", time: "2021/03/09 19:23", subject: "\uC0AC\uD0D5", preview: "\uC704\uC988\uC6D0 \uC0AC\uD0D5 \uD478\uB529 \uB9DB \uC788\uB294\uAC70 \uC54C\uC558\uC5B4?? \uB9DB\uC788\uC5B4\uBCF4\uC5EC\uC11C \uC0AC\uC11C \uC5B8\uC81C\uBA39\uC744\uC9C0 \uACE0\uBBFC\uC911\uC774\uC57C ."});
    let Se = main2.F("");
    let Oe = main2.G(Se, (e2) => "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + e2.replace(/\&nbsp;<\/div>/g, "\n").replace(/<\/div>/g, "\n").replace(/&nbsp;/g, "").replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "").replace(/\n\n/g, "\n").replace(/\n/g, "%0A"));
    let Ce = main2.F(1);
    let je = main2.F(true);
    let Le = main2.F(false);
    let Pe = main2.F(true);
    let Ie = main2.G(Pe, (e2) => !e2);
    const Te = "http://" + window.location.hostname + ":8000/api";
    async function Ae(e2) {
      return await fetch(e2);
    }
    async function Be(e2, t3 = "") {
      return t3 ? fetch(e2, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(t3)}) : fetch(e2, {method: "POST"});
    }
    function Ee(e2, t3) {
      return Be(e2, t3).then((e3) => (console.log("\uBC31\uC5C5 \uC131\uACF5!"), e3)).catch((t4) => {
        console.error(e2 + " \uBC31\uC5C5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."), console.error(t4);
      });
    }
    const ze = (e2, t3) => {
      try {
        console.log(`${t3}+'\uCC28 \uC2DC\uB3C4`), console.log(e2.slice(0, 10));
        const n2 = [];
        for (let t4 = 0; t4 < e2.length; t4 += 2)
          n2.push(e2[t4]);
        return JSON.parse(n2.join(""));
      } catch (n2) {
        if (t3 < 4)
          return e2 = e2.slice(1), ze(e2, t3 + 1);
        throw n2;
      }
    };
    const Ne = (e2) => {
      try {
        return JSON.parse(e2);
      } catch (t3) {
        if (e2.slice(0, 9) == "<!DOCTYPE")
          throw t3;
        if (t3 instanceof SyntaxError)
          return console.log("json \uC77D\uAE30 \uC2E4\uD328. \uC7AC\uC2DC\uB3C4\uD569\uB2C8\uB2E4."), ze(e2.slice(2), 2);
        console.error(t3);
      }
    };
    const De = Te + "/all-tag-dict";
    const We = ge.concat([fe]);
    const Re = {get: async () => {
      const e2 = await Ae(De + "/").then((e3) => e3.text()).then(Ne).then((e3) => e3.tag_list);
      return We.concat(e2);
    }, save: async (e2) => {
      const t3 = {tag_list: [...e2].map((e3) => e3[1])};
      return console.log(t3), Ee(De + "/", t3);
    }, addTag: async (e2) => Be(De + "/tag", e2), updateTag: async (e2, t3) => await async function(e3, t4) {
      fetch(e3, {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(t4)});
    }(De + "/tag/" + e2, t3)};
    const Fe = new Set(ge.map((e2) => e2.value));
    const Je = Te + "/mail-tag-dict";
    var Ve = {AllTagDict: Re, MailTagDict: {get: async () => await Ae(Je + "/").then((e2) => e2.json()), save: async (e2, t3) => {
      const n2 = {mail_to_tag_dict: $e(e2), tag_to_mail_dict: _e(t3).filter((e3) => !Fe.has(e3[0]))};
      return console.log(n2), Ee(Je + "/", n2);
    }, addTag: async (e2, t3) => Be(`${Je}/mail/${e2}/tag/${t3}`).then((e3) => (console.log("\uC11C\uBC84\uC5D0 \uD0DC\uADF8 \uCD94\uAC00 \uC644\uB8CC."), e3)), deleteTag: async (e2, t3) => await async function(e3) {
      return await fetch(e3, {method: "DELETE"});
    }(`${Je}/mail/${e2}/tag/${t3}`)}, ping: fetch(Te + "/ping")};
    const qe = {0: "#d9598c", 1: "#f1d2e7", 2: "#f3aa51", 3: "#fcf695", 4: "#567ace", 5: "#b7d3e9", 6: "#bbb0dc", 7: "#db706c", 8: "#f1c3aa", 9: "#cee5d5", 10: "#fff", 11: "#a7e0e1", 12: "gray"};
    const He = {"#d9598c": "#d02f6f", "#f1d2e7": "#c33c98", "#f3aa51": "#ee8b11", "#fcf695": "#dfd407", "#567ace": "#345ab2", "#b7d3e9": "#3c89c3", "#bbb0dc": "#674eb1", "#db706c": "#cd3732", "#f1c3aa": "#dd6422", "#cee5d5": "#4f9665", "#fff": "#d9d9d9", "#a7e0e1": "#41bcbe", gray: "#595959", LightPink: "#ff3352"};
    let Ke = main2.F({});
    main2.G(Ke, (e2) => Object.keys(e2).reduce((e3, t3) => Object.assign(Object.assign({}, e3), {[Ke[t3]]: t3}), {0: "\uC7A5\uC6D0\uC601"}));
    const Ue = {0: "\uC7A5\uC6D0\uC601", 1: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", 2: "\uC870\uC720\uB9AC", 3: "\uCD5C\uC608\uB098", 4: "\uC548\uC720\uC9C4", 5: "\uC57C\uBD80\uD0A4 \uB098\uCF54", 6: "\uAD8C\uC740\uBE44", 7: "\uAC15\uD61C\uC6D0", 8: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", 9: "\uAE40\uCC44\uC6D0", 10: "\uAE40\uBBFC\uC8FC", 11: "\uC774\uCC44\uC5F0", 12: "\uC6B4\uC601\uD300"};
    const Ye = new Set(["\u{1F496}", "\uC7A5\uC6D0\uC601", "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", "\uC870\uC720\uB9AC", "\uCD5C\uC608\uB098", "\uC548\uC720\uC9C4", "\uC57C\uBD80\uD0A4 \uB098\uCF54", "\uAD8C\uC740\uBE44", "\uAC15\uD61C\uC6D0", "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", "\uAE40\uCC44\uC6D0", "\uAE40\uBBFC\uC8FC", "\uC774\uCC44\uC5F0", "\uC6B4\uC601\uD300", "\uC0DD\uC77C"]);
    function Ze(e2) {
      let t3, n2, r2, s2, i2;
      const a3 = e2[4].default, g2 = main2.J(a3, e2, e2[3], null);
      return {c() {
        t3 = main2.e("button"), g2 && g2.c(), main2.b(t3, "id", e2[1]), main2.b(t3, "class", n2 = "rounded " + (e2[2] ? "bg-gray-800 text-gray-300" : "bg-red-100") + " m-2 pl-1 pr-1");
      }, m(n3, o2) {
        main2.c(n3, t3, o2), g2 && g2.m(t3, null), r2 = true, s2 || (i2 = main2.A(t3, "click", function() {
          main2.H(e2[0]) && e2[0].apply(this, arguments);
        }), s2 = true);
      }, p(s3, [o2]) {
        e2 = s3, g2 && g2.p && 8 & o2 && main2.K(g2, a3, e2, e2[3], o2, null, null), (!r2 || 2 & o2) && main2.b(t3, "id", e2[1]), (!r2 || 4 & o2 && n2 !== (n2 = "rounded " + (e2[2] ? "bg-gray-800 text-gray-300" : "bg-red-100") + " m-2 pl-1 pr-1")) && main2.b(t3, "class", n2);
      }, i(e3) {
        r2 || (main2.p(g2, e3), r2 = true);
      }, o(e3) {
        main2.v(g2, e3), r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), g2 && g2.d(e3), s2 = false, i2();
      }};
    }
    function Qe(e2, t3, n2) {
      let r2;
      main2.g(e2, ne, (e3) => n2(2, r2 = e3));
      let {$$slots: s2 = {}, $$scope: o2} = t3, {onClick: i2} = t3, {id: c2} = t3;
      return e2.$$set = (e3) => {
        "onClick" in e3 && n2(0, i2 = e3.onClick), "id" in e3 && n2(1, c2 = e3.id), "$$scope" in e3 && n2(3, o2 = e3.$$scope);
      }, [i2, c2, r2, o2, s2];
    }
    class Xe extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Qe, Ze, main2.s, {onClick: 0, id: 1});
      }
    }
    function Ge(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[12] = t3[n2], r2;
    }
    function et(e2) {
      let t3, n2, r2, s2, d2, f2, g2, h2 = e2[12].value + "";
      return {c() {
        t3 = main2.e("label"), n2 = main2.e("input"), r2 = main2.a(), s2 = main2.t(h2), d2 = main2.a(), main2.b(n2, "id", "TagUpdateColorRadio-" + e2[12].value), main2.b(n2, "type", "radio"), n2.__value = e2[12].color, n2.value = n2.__value, e2[10][0].push(n2), main2.h(t3, "background-color", e2[3] ? He[e2[12].color] : e2[12].color), main2.b(t3, "class", (e2[12].color == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-0.5 pl-1 pr-1.5");
      }, m(o2, i2) {
        main2.c(o2, t3, i2), main2.d(t3, n2), n2.checked = n2.__value === e2[1], main2.d(t3, r2), main2.d(t3, s2), main2.d(t3, d2), f2 || (g2 = main2.A(n2, "change", e2[9]), f2 = true);
      }, p(e3, r3) {
        2 & r3 && (n2.checked = n2.__value === e3[1]), 8 & r3 && main2.h(t3, "background-color", e3[3] ? He[e3[12].color] : e3[12].color);
      }, d(r3) {
        r3 && main2.f(t3), e2[10][0].splice(e2[10][0].indexOf(n2), 1), f2 = false, g2();
      }};
    }
    function tt(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uACB0\uC815\uD588\uC5B4\uC694!");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function nt(e2) {
      let t3, n2, r2, s2, d2, g2, h2, m2, x2, v2, _2, M2, k2 = e2[4], S2 = [];
      for (let t4 = 0; t4 < k2.length; t4 += 1)
        S2[t4] = et(Ge(e2, k2, t4));
      return x2 = new Xe({props: {id: "TagUpdateButton", onClick: e2[2], $$slots: {default: [tt]}, $$scope: {ctx: e2}}}), {c() {
        t3 = main2.e("div"), n2 = main2.e("h3"), n2.textContent = "\uD0DC\uADF8 \uC218\uC815", r2 = main2.a(), s2 = main2.e("input"), g2 = main2.a(), h2 = main2.e("div");
        for (let e3 = 0; e3 < S2.length; e3 += 1)
          S2[e3].c();
        m2 = main2.a(), main2.q(x2.$$.fragment), main2.b(n2, "class", "svelte-qli48t"), main2.b(s2, "type", "text"), main2.b(s2, "id", "TagUpdateInput"), main2.h(s2, "text-align", "center"), main2.h(s2, "background-color", e2[3] ? He[e2[1]] : e2[1]), main2.b(s2, "class", d2 = (e2[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20"), main2.h(t3, "text-align", "center"), main2.b(h2, "class", "flex flex-wrap p-1");
      }, m(o2, i2) {
        main2.c(o2, t3, i2), main2.d(t3, n2), main2.d(t3, r2), main2.d(t3, s2), main2.N(s2, e2[0]), main2.c(o2, g2, i2), main2.c(o2, h2, i2);
        for (let e3 = 0; e3 < S2.length; e3 += 1)
          S2[e3].m(h2, null);
        main2.c(o2, m2, i2), main2.r(x2, o2, i2), v2 = true, _2 || (M2 = main2.A(s2, "input", e2[8]), _2 = true);
      }, p(e3, [t4]) {
        if ((!v2 || 10 & t4) && main2.h(s2, "background-color", e3[3] ? He[e3[1]] : e3[1]), (!v2 || 2 & t4 && d2 !== (d2 = (e3[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20")) && main2.b(s2, "class", d2), 1 & t4 && s2.value !== e3[0] && main2.N(s2, e3[0]), 26 & t4) {
          let n4;
          for (k2 = e3[4], n4 = 0; n4 < k2.length; n4 += 1) {
            const r3 = Ge(e3, k2, n4);
            S2[n4] ? S2[n4].p(r3, t4) : (S2[n4] = et(r3), S2[n4].c(), S2[n4].m(h2, null));
          }
          for (; n4 < S2.length; n4 += 1)
            S2[n4].d(1);
          S2.length = k2.length;
        }
        const n3 = {};
        4 & t4 && (n3.onClick = e3[2]), 32768 & t4 && (n3.$$scope = {dirty: t4, ctx: e3}), x2.$set(n3);
      }, i(e3) {
        v2 || (main2.p(x2.$$.fragment, e3), v2 = true);
      }, o(e3) {
        main2.v(x2.$$.fragment, e3), v2 = false;
      }, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(g2), e3 && main2.f(h2), main2.y(S2, e3), e3 && main2.f(m2), main2.w(x2, e3), _2 = false, M2();
      }};
    }
    function rt(e2, t3, n2) {
      let r2, s2, o2, i2;
      main2.g(e2, te, (e3) => n2(6, s2 = e3)), main2.g(e2, pe, (e3) => n2(7, o2 = e3)), main2.g(e2, ne, (e3) => n2(3, i2 = e3));
      let {tag: c2} = t3, l2 = c2.value, a3 = c2.color;
      const {close: u2} = main2.O("simple-modal");
      return e2.$$set = (e3) => {
        "tag" in e3 && n2(5, c2 = e3.tag);
      }, e2.$$.update = () => {
        227 & e2.$$.dirty && n2(2, r2 = () => {
          s2 && Ve.AllTagDict.updateTag(c2.value, {value: l2, color: a3});
          const e3 = o2.get(c2.value);
          o2.delete(e3.value), e3.value = l2, e3.color = a3, o2.set(l2, e3), pe.set(o2), u2();
        });
      }, [l2, a3, r2, i2, [{value: "\uC218\uB193\uC740\uBCC4\uBE5B", color: "#bbb0dc"}, {value: "\uBC9A\uAF43\uD551\uD06C", color: "#f1d2e7"}, {value: "\uAC15\uCF54\uB784", color: "#db706c"}, {value: "\uC60C\uB85C\uC6B0", color: "#fcf695"}, {value: "\uCC48\uBA54\uB784\uB4DC", color: "#a7e0e1"}, {value: "\uCC54\uBB34", color: "#cee5d5"}, {value: "\uB098\uBD80\uD0A4\uD558\uB298", color: "#b7d3e9"}, {value: "\uD1A0\uBBF8\uBCA0\uC774\uC9C0", color: "#f1c3aa"}, {value: "\uBC31\uC124\uBBFC\uC8FC", color: "#fff"}, {value: "\uC728\uB80C\uC9C0", color: "#f3aa51"}, {value: "\uBE14\uB8E8\uC9C0\uB2C8", color: "#567ace"}, {value: "\uCE94\uB514\uD551\uD06C", color: "#d9598c"}], c2, s2, o2, function() {
        l2 = this.value, n2(0, l2);
      }, function() {
        a3 = this.__value, n2(1, a3);
      }, [[]]];
    }
    class st extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, rt, nt, main2.s, {tag: 5});
      }
    }
    function ot(e2) {
      let t3, n2, r2;
      return {c() {
        t3 = main2.P("svg"), n2 = main2.P("path"), main2.b(n2, "fill", "currentColor"), main2.b(n2, "d", e2[0]), main2.b(t3, "aria-hidden", "true"), main2.b(t3, "class", r2 = main2.Q(e2[1]) + " svelte-go33dg"), main2.b(t3, "role", "img"), main2.b(t3, "xmlns", "http://www.w3.org/2000/svg"), main2.b(t3, "viewBox", e2[2]);
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.d(t3, n2);
      }, p(e3, [s2]) {
        1 & s2 && main2.b(n2, "d", e3[0]), 2 & s2 && r2 !== (r2 = main2.Q(e3[1]) + " svelte-go33dg") && main2.b(t3, "class", r2), 4 & s2 && main2.b(t3, "viewBox", e3[2]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function it(e2, t3, n2) {
      let {icon: r2} = t3, s2 = [], o2 = "", i2 = "";
      return e2.$$set = (e3) => {
        n2(4, t3 = main2.R(main2.R({}, t3), main2.T(e3))), "icon" in e3 && n2(3, r2 = e3.icon);
      }, e2.$$.update = () => {
        8 & e2.$$.dirty && n2(2, i2 = "0 0 " + r2.icon[0] + " " + r2.icon[1]), n2(1, o2 = "fa-svelte " + (t3.class ? t3.class : "")), 8 & e2.$$.dirty && n2(0, s2 = r2.icon[4]);
      }, t3 = main2.T(t3), [s2, o2, i2, r2];
    }
    class ct extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, it, ot, main2.s, {icon: 3});
      }
    }
    function lt(e2, t3, n2) {
      return e2(n2 = {path: t3, exports: {}, require: function(e3, t4) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(t4 == null && n2.path);
      }}, n2.exports), n2.exports;
    }
    var at = lt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "twitter", r2 = [], s2 = "f099", o2 = "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [512, 512, r2, s2, o2]}, t3.faTwitter = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 512, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = o2;
    });
    var ut = lt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "facebook", r2 = [], s2 = "f09a", o2 = "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [512, 512, r2, s2, o2]}, t3.faFacebook = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 512, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = o2;
    });
    var dt = lt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "instagram", r2 = [], s2 = "f16d", o2 = "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [448, 512, r2, s2, o2]}, t3.faInstagram = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 448, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = o2;
    });
    var ft = lt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "youtube", r2 = [], s2 = "f167", o2 = "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [576, 512, r2, s2, o2]}, t3.faYoutube = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = o2;
    });
    var gt = lt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "star", r2 = [], s2 = "f005", o2 = "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z";
      t3.definition = {prefix: "fas", iconName: n2, icon: [576, 512, r2, s2, o2]}, t3.faStar = t3.definition, t3.prefix = "fas", t3.iconName = n2, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = o2;
    });
    function ht(e2) {
      let t3, n2, r2, s2 = e2[12].has(e2[0].value), o2 = e2[0].value + "", c2 = s2 && mt(e2);
      return {c() {
        c2 && c2.c(), t3 = main2.a(), n2 = main2.t(o2);
      }, m(e3, s3) {
        c2 && c2.m(e3, s3), main2.c(e3, t3, s3), main2.c(e3, n2, s3), r2 = true;
      }, p(e3, i2) {
        1 & i2 && (s2 = e3[12].has(e3[0].value)), s2 ? c2 ? (c2.p(e3, i2), 1 & i2 && main2.p(c2, 1)) : (c2 = mt(e3), c2.c(), main2.p(c2, 1), c2.m(t3.parentNode, t3)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x()), (!r2 || 1 & i2) && o2 !== (o2 = e3[0].value + "") && main2.o(n2, o2);
      }, i(e3) {
        r2 || (main2.p(c2), r2 = true);
      }, o(e3) {
        main2.v(c2), r2 = false;
      }, d(e3) {
        c2 && c2.d(e3), e3 && main2.f(t3), e3 && main2.f(n2);
      }};
    }
    function pt(e2) {
      let t3, n2;
      return t3 = new ct({props: {icon: gt.faStar}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p: main2.n, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function mt(e2) {
      let t3, n2;
      return t3 = new ct({props: {class: "mb-1 text-" + e2[9].color, icon: e2[9].icon}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        512 & n3 && (r2.class = "mb-1 text-" + e3[9].color), 512 & n3 && (r2.icon = e3[9].icon), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function $t(e2) {
      let t3, n2, r2, s2, i2;
      return {c() {
        t3 = main2.e("span"), n2 = main2.t("X"), main2.b(t3, "style", e2[10]), main2.b(t3, "class", r2 = (e2[3] ? "Remove" : "Delete") + "Tag-" + e2[0].value.replace(" ", "-") + "\r\n" + (e2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (e2[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + e2[2] + " svelte-mrene9");
      }, m(r3, o2) {
        main2.c(r3, t3, o2), main2.d(t3, n2), s2 || (i2 = main2.A(t3, "click", function() {
          main2.H(e2[3] ? e2[3] : e2[4]) && (e2[3] ? e2[3] : e2[4]).apply(this, arguments);
        }), s2 = true);
      }, p(n3, s3) {
        e2 = n3, 1024 & s3 && main2.b(t3, "style", e2[10]), 13 & s3 && r2 !== (r2 = (e2[3] ? "Remove" : "Delete") + "Tag-" + e2[0].value.replace(" ", "-") + "\r\n" + (e2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (e2[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + e2[2] + " svelte-mrene9") && main2.b(t3, "class", r2);
      }, d(e3) {
        e3 && main2.f(t3), s2 = false, i2();
      }};
    }
    function yt(e2) {
      let t3, n2, r2, s2, a3, y2, b2, w2, x2;
      const v2 = [pt, ht], M2 = [];
      function k2(e3, t4) {
        return e3[0].value == "\u{1F496}" ? 0 : 1;
      }
      n2 = k2(e2), r2 = M2[n2] = v2[n2](e2);
      let S2 = (e2[3] || e2[1] && e2[0].value != "\uC0DD\uC77C") && $t(e2);
      return {c() {
        t3 = main2.e("span"), r2.c(), a3 = main2.a(), S2 && S2.c(), y2 = main2.I(), main2.b(t3, "style", e2[10]), main2.b(t3, "class", s2 = "Tag-" + e2[0].value.replace(" ", "-") + " " + e2[7] + " " + e2[8] + " m-0.5 mr-0 text-" + e2[2] + "\r\n" + (e2[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9");
      }, m(r3, s3) {
        main2.c(r3, t3, s3), M2[n2].m(t3, null), main2.c(r3, a3, s3), S2 && S2.m(r3, s3), main2.c(r3, y2, s3), b2 = true, w2 || (x2 = [main2.A(t3, "pointerdown", function() {
          main2.H(e2[5]) && e2[5].apply(this, arguments);
        }), main2.A(t3, "pointerup", function() {
          main2.H(e2[6]) && e2[6].apply(this, arguments);
        }), main2.A(t3, "click", function() {
          main2.H(e2[11](e2[0])) && e2[11](e2[0]).apply(this, arguments);
        })], w2 = true);
      }, p(o2, [i2]) {
        let l2 = n2;
        n2 = k2(e2 = o2), n2 === l2 ? M2[n2].p(e2, i2) : (main2.D(), main2.v(M2[l2], 1, 1, () => {
          M2[l2] = null;
        }), main2.x(), r2 = M2[n2], r2 ? r2.p(e2, i2) : (r2 = M2[n2] = v2[n2](e2), r2.c()), main2.p(r2, 1), r2.m(t3, null)), (!b2 || 1024 & i2) && main2.b(t3, "style", e2[10]), (!b2 || 389 & i2 && s2 !== (s2 = "Tag-" + e2[0].value.replace(" ", "-") + " " + e2[7] + " " + e2[8] + " m-0.5 mr-0 text-" + e2[2] + "\r\n" + (e2[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9")) && main2.b(t3, "class", s2), e2[3] || e2[1] && e2[0].value != "\uC0DD\uC77C" ? S2 ? S2.p(e2, i2) : (S2 = $t(e2), S2.c(), S2.m(y2.parentNode, y2)) : S2 && (S2.d(1), S2 = null);
      }, i(e3) {
        b2 || (main2.p(r2), b2 = true);
      }, o(e3) {
        main2.v(r2), b2 = false;
      }, d(e3) {
        e3 && main2.f(t3), M2[n2].d(), e3 && main2.f(a3), S2 && S2.d(e3), e3 && main2.f(y2), w2 = false, main2.B(x2);
      }};
    }
    function bt(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, f2, g2, h2, p2, m2, $2, y2, b2, w2, x2, v2;
      main2.g(e2, pe, (e3) => n2(14, h2 = e3)), main2.g(e2, ve, (e3) => n2(15, p2 = e3)), main2.g(e2, ke, (e3) => n2(16, m2 = e3)), main2.g(e2, me, (e3) => n2(17, $2 = e3)), main2.g(e2, te, (e3) => n2(18, y2 = e3)), main2.g(e2, main2.U, (e3) => n2(24, b2 = e3)), main2.g(e2, main2.V, (e3) => n2(25, w2 = e3)), main2.g(e2, xe, (e3) => n2(26, x2 = e3)), main2.g(e2, ne, (e3) => n2(23, v2 = e3));
      var _2 = this && this.__awaiter || function(e3, t4, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, o3) {
          function i3(e4) {
            try {
              l3(r3.next(e4));
            } catch (e5) {
              o3(e5);
            }
          }
          function c3(e4) {
            try {
              l3(r3.throw(e4));
            } catch (e5) {
              o3(e5);
            }
          }
          function l3(e4) {
            var t5;
            e4.done ? s3(e4.value) : (t5 = e4.value, t5 instanceof n3 ? t5 : new n3(function(e5) {
              e5(t5);
            })).then(i3, c3);
          }
          l3((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      let {tag: M2} = t3, {canDelete: k2 = false} = t3, {size: O2 = "xs"} = t3, {onRemove: C2 = null} = t3;
      const {open: j2} = main2.O("simple-modal"), L2 = () => {
        j2(st, {tag: M2});
      };
      let P2;
      const I2 = new Map([["\uD2B8\uC704\uD130", {icon: at.faTwitter, color: "blue-500"}], ["\uD398\uC774\uC2A4\uBD81", {icon: ut.faFacebook, color: "blue-900"}], ["\uC778\uC2A4\uD0C0", {icon: dt.faInstagram, color: "red-500"}], ["\uC720\uD29C\uBE0C", {icon: ft.faYoutube, color: "red-600"}]]);
      return e2.$$set = (e3) => {
        "tag" in e3 && n2(0, M2 = e3.tag), "canDelete" in e3 && n2(1, k2 = e3.canDelete), "size" in e3 && n2(2, O2 = e3.size), "onRemove" in e3 && n2(3, C2 = e3.onRemove);
      }, e2.$$.update = () => {
        507905 & e2.$$.dirty && n2(4, r2 = () => _2(void 0, void 0, void 0, function* () {
          const e3 = h2.get(M2.value);
          p2.has(e3) && p2.get(e3).delete(m2.id), ve.set(p2), $2.has(m2.id) && $2.get(m2.id).delete(e3), me.set($2), y2 && (yield Ve.MailTagDict.deleteTag(m2.id, M2.value).then((e4) => {
            console.log("\uC11C\uBC84\uC5D0\uC11C \uD0DC\uADF8 \uC0AD\uC81C \uC131\uACF5");
          }));
        })), 1 & e2.$$.dirty && n2(5, s2 = () => {
          Ye.has(M2.value) ? n2(13, P2 = setTimeout(() => {
            console.log("\uAE30\uBCF8 \uD0DC\uADF8\uB294 \uC544\uC9C1 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
          }, 300)) : n2(13, P2 = setTimeout(L2, 300));
        }), 8192 & e2.$$.dirty && n2(6, o2 = (e3) => {
          clearTimeout(P2);
        }), 1 & e2.$$.dirty && n2(7, i2 = M2.color == "#fff" ? "border-2 p-0.5" : "p-1"), 11 & e2.$$.dirty && n2(8, c2 = C2 || k2 && M2.value != "\uC0DD\uC77C" ? "rounded-l border-r-0" : "rounded"), 1 & e2.$$.dirty && n2(19, l2 = M2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#333333" : M2.color), 524288 & e2.$$.dirty && n2(20, a3 = He[l2]), 1 & e2.$$.dirty && n2(21, u2 = () => M2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#b299e6" : M2.value == "\u{1F496}" ? "#ffb40d" : "black"), 2097153 & e2.$$.dirty && n2(22, d2 = () => u2() != "black" ? u2() : M2.value == "\uAE40\uBBFC\uC8FC" || M2.value == "\uCD5C\uC608\uB098" ? "#666" : "#ddd"), 1 & e2.$$.dirty && n2(9, f2 = I2.get(M2.value)), 16252928 & e2.$$.dirty && n2(10, g2 = `background-color: ${v2 ? a3 : l2};
            color: ${v2 ? d2() : u2()};`);
      }, [M2, k2, O2, C2, r2, s2, o2, i2, c2, f2, g2, (e3) => () => {
        xe.set(e3.value), b2("./", Object.assign(Object.assign({}, w2), {tag: x2, nowPage: 1}));
      }, I2, P2, h2, p2, m2, $2, y2, l2, a3, u2, d2, v2];
    }
    class wt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, bt, yt, main2.s, {tag: 0, canDelete: 1, size: 2, onRemove: 3});
      }
    }
    function xt(e2) {
      let t3, n2, r2, s2, i2 = (e2[0].slice(11) == "00:00" ? e2[0].slice(0, 10) : e2[0]) + "";
      return {c() {
        t3 = main2.e("span"), n2 = main2.t(i2), main2.b(t3, "style", r2 = "background-color: pink; " + (e2[2] ? "filter: brightness(30%) saturate(1000%);" : "")), main2.b(t3, "class", s2 = "border-1 rounded\r\ntext-black\r\n" + (e2[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + e2[1]);
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.d(t3, n2);
      }, p(e3, [o2]) {
        1 & o2 && i2 !== (i2 = (e3[0].slice(11) == "00:00" ? e3[0].slice(0, 10) : e3[0]) + "") && main2.o(n2, i2), 4 & o2 && r2 !== (r2 = "background-color: pink; " + (e3[2] ? "filter: brightness(30%) saturate(1000%);" : "")) && main2.b(t3, "style", r2), 2 & o2 && s2 !== (s2 = "border-1 rounded\r\ntext-black\r\n" + (e3[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + e3[1]) && main2.b(t3, "class", s2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function vt(e2, t3, n2) {
      let r2;
      main2.g(e2, ne, (e3) => n2(2, r2 = e3));
      let {time: s2} = t3, {size: o2 = "xs"} = t3;
      return e2.$$set = (e3) => {
        "time" in e3 && n2(0, s2 = e3.time), "size" in e3 && n2(1, o2 = e3.size);
      }, [s2, o2, r2];
    }
    class _t extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, vt, xt, main2.s, {time: 0, size: 1});
      }
    }
    function Mt(e2) {
      let t3, n2, r2, s2, a3, d2;
      return {c() {
        t3 = main2.e("input"), r2 = main2.a(), s2 = main2.e("button"), s2.textContent = "\uCD94\uAC00", main2.b(t3, "type", "text"), main2.b(t3, "id", "TagInput"), main2.b(t3, "class", n2 = "border-2 p-1 rounded w-16 text-xs " + e2[1] + " " + e2[2]), main2.b(t3, "placeholder", "\uC0C8 \uD0DC\uADF8"), main2.b(s2, "id", "AddTagButton"), main2.b(s2, "class", "text-xs text-black shadow rounded bg-red-400 p-1 m-1");
      }, m(n3, o2) {
        main2.c(n3, t3, o2), main2.N(t3, e2[0]), main2.c(n3, r2, o2), main2.c(n3, s2, o2), a3 || (d2 = [main2.A(t3, "input", e2[5]), main2.A(t3, "keypress", e2[6]), main2.A(s2, "click", e2[3])], a3 = true);
      }, p(e3, [r3]) {
        6 & r3 && n2 !== (n2 = "border-2 p-1 rounded w-16 text-xs " + e3[1] + " " + e3[2]) && main2.b(t3, "class", n2), 1 & r3 && t3.value !== e3[0] && main2.N(t3, e3[0]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(r2), e3 && main2.f(s2), a3 = false, main2.B(d2);
      }};
    }
    function kt(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, f2;
      main2.g(e2, be, (e3) => n2(0, s2 = e3)), main2.g(e2, we, (e3) => n2(4, o2 = e3)), main2.g(e2, pe, (e3) => n2(8, i2 = e3)), main2.g(e2, te, (e3) => n2(9, c2 = e3)), main2.g(e2, ve, (e3) => n2(10, l2 = e3)), main2.g(e2, ke, (e3) => n2(11, a3 = e3)), main2.g(e2, me, (e3) => n2(12, u2 = e3)), main2.g(e2, re, (e3) => n2(1, d2 = e3)), main2.g(e2, se, (e3) => n2(2, f2 = e3));
      var g2 = this && this.__awaiter || function(e3, t4, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, o3) {
          function i3(e4) {
            try {
              l3(r3.next(e4));
            } catch (e5) {
              o3(e5);
            }
          }
          function c3(e4) {
            try {
              l3(r3.throw(e4));
            } catch (e5) {
              o3(e5);
            }
          }
          function l3(e4) {
            var t5;
            e4.done ? s3(e4.value) : (t5 = e4.value, t5 instanceof n3 ? t5 : new n3(function(e5) {
              e5(t5);
            })).then(i3, c3);
          }
          l3((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      const h2 = () => g2(void 0, void 0, void 0, function* () {
        if (s2 == "")
          return alert("\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."), null;
        let e3 = r2;
        i2.has(s2) ? e3 = i2.get(s2) : (i2.set(s2, r2), pe.set(i2), c2 && (yield Ve.AllTagDict.addTag(r2))), l2.has(e3) ? l2.get(e3).add(a3.id) : l2.set(e3, new Set([a3.id])), ve.set(l2), u2.has(a3.id) ? u2.get(a3.id).add(e3) : u2.set(a3.id, new Set([e3])), me.set(u2), main2.W(be, s2 = "", s2), main2.W(we, o2 = (o2 + 1) % 12, o2), c2 && (console.log(e3), yield Ve.MailTagDict.addTag(a3.id, e3.value));
      });
      return e2.$$.update = () => {
        17 & e2.$$.dirty && (r2 = {value: s2, color: qe[o2]});
      }, [s2, d2, f2, h2, o2, function() {
        s2 = this.value, be.set(s2);
      }, (e3) => {
        e3.code === "Enter" && h2();
      }];
    }
    class St extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, kt, Mt, main2.s, {});
      }
    }
    var Ot = lt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "star", r2 = [], s2 = "f005", o2 = "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z";
      t3.definition = {prefix: "far", iconName: n2, icon: [576, 512, r2, s2, o2]}, t3.faStar = t3.definition, t3.prefix = "far", t3.iconName = n2, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = o2;
    });
    function Ct(e2) {
      let t3, n2, r2, s2, a3, g2, h2;
      return n2 = new ct({props: {class: "float-" + e2[0] + " text-xl", icon: e2[1] ? gt.faStar : Ot.faStar}}), {c() {
        t3 = main2.e("label"), main2.q(n2.$$.fragment), r2 = main2.a(), s2 = main2.e("input"), main2.h(t3, "color", e2[1] ? "#ffb40d" : "#999"), main2.b(t3, "for", "favorite"), main2.b(s2, "type", "checkbox"), main2.b(s2, "class", "hidden"), main2.b(s2, "id", "favorite");
      }, m(o2, i2) {
        main2.c(o2, t3, i2), main2.r(n2, t3, null), main2.c(o2, r2, i2), main2.c(o2, s2, i2), a3 = true, g2 || (h2 = main2.A(t3, "click", function() {
          main2.H(e2[2]) && e2[2].apply(this, arguments);
        }), g2 = true);
      }, p(r3, [s3]) {
        e2 = r3;
        const o2 = {};
        1 & s3 && (o2.class = "float-" + e2[0] + " text-xl"), 2 & s3 && (o2.icon = e2[1] ? gt.faStar : Ot.faStar), n2.$set(o2), (!a3 || 2 & s3) && main2.h(t3, "color", e2[1] ? "#ffb40d" : "#999");
      }, i(e3) {
        a3 || (main2.p(n2.$$.fragment, e3), a3 = true);
      }, o(e3) {
        main2.v(n2.$$.fragment, e3), a3 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(n2), e3 && main2.f(r2), e3 && main2.f(s2), g2 = false, h2();
      }};
    }
    function jt(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2;
      main2.g(e2, pe, (e3) => n2(5, c2 = e3)), main2.g(e2, ve, (e3) => n2(7, l2 = e3));
      let {pm: a3} = t3, {float: u2 = "right"} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(3, a3 = e3.pm), "float" in e3 && n2(0, u2 = e3.float);
      }, e2.$$.update = () => {
        32 & e2.$$.dirty && n2(4, r2 = c2.get("\u{1F496}")), 152 & e2.$$.dirty && n2(2, i2 = () => {
          const e3 = l2.get(r2);
          e3.has(a3.id) ? e3.delete(a3.id) : e3.add(a3.id), ve.set(l2);
        }), 144 & e2.$$.dirty && n2(6, s2 = l2.get(r2)), 72 & e2.$$.dirty && n2(1, o2 = !!s2 && s2.has(a3.id));
      }, [u2, o2, i2, a3, r2, c2, s2, l2];
    }
    class Lt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, jt, Ct, main2.s, {pm: 3, float: 0});
      }
    }
    function Pt(e2) {
      let t3, n2;
      return t3 = new wt({props: {tag: e2[1], size: e2[0]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, [n3]) {
        const r2 = {};
        2 & n3 && (r2.tag = e3[1]), 1 & n3 && (r2.size = e3[0]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function It(e2, t3, n2) {
      let r2, s2;
      main2.g(e2, pe, (e3) => n2(3, s2 = e3));
      let {pm: o2} = t3, {size: i2 = "xs"} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(2, o2 = e3.pm), "size" in e3 && n2(0, i2 = e3.size);
      }, e2.$$.update = () => {
        12 & e2.$$.dirty && n2(1, r2 = s2.get(o2.member));
      }, [i2, r2, o2, s2];
    }
    class Tt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, It, Pt, main2.s, {pm: 2, size: 0});
      }
    }
    function At(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[10] = t3[n2], r2;
    }
    function Bt(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[13] = t3[n2], r2;
    }
    function Et(e2) {
      let t3, n2, r2;
      return {c() {
        t3 = main2.e("img"), t3.src !== (n2 = "./img/profile/" + e2[10].path + "/" + Ue[e2[13]] + ".jpg") && main2.b(t3, "src", n2), main2.b(t3, "class", r2 = "w-9 h-9 rounded-full border-gray-" + (e2[3] ? "700" : "100") + "  border-2\r\n                float-left"), main2.b(t3, "alt", "");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, p(e3, s2) {
        6 & s2 && t3.src !== (n2 = "./img/profile/" + e3[10].path + "/" + Ue[e3[13]] + ".jpg") && main2.b(t3, "src", n2), 8 & s2 && r2 !== (r2 = "w-9 h-9 rounded-full border-gray-" + (e3[3] ? "700" : "100") + "  border-2\r\n                float-left") && main2.b(t3, "class", r2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function zt(e2) {
      let t3, n2, r2, s2, d2, f2, g2, h2, p2, m2, y2, b2, w2, x2 = e2[10].name + "", v2 = e2[2], _2 = [];
      for (let t4 = 0; t4 < v2.length; t4 += 1)
        _2[t4] = Et(Bt(e2, v2, t4));
      return {c() {
        t3 = main2.e("label"), n2 = main2.e("input"), s2 = main2.a(), d2 = main2.t(x2), f2 = main2.a(), g2 = main2.e("br"), h2 = main2.a(), p2 = main2.e("div");
        for (let e3 = 0; e3 < _2.length; e3 += 1)
          _2[e3].c();
        m2 = main2.a(), main2.b(n2, "type", "radio"), n2.__value = r2 = e2[10].path, n2.value = n2.__value, e2[7][0].push(n2), main2.b(p2, "class", "h-9"), main2.b(t3, "class", y2 = e2[3] ? "text-gray-300" : "text-black");
      }, m(r3, o2) {
        main2.c(r3, t3, o2), main2.d(t3, n2), n2.checked = n2.__value === e2[4], main2.d(t3, s2), main2.d(t3, d2), main2.d(t3, f2), main2.d(t3, g2), main2.d(t3, h2), main2.d(t3, p2);
        for (let e3 = 0; e3 < _2.length; e3 += 1)
          _2[e3].m(p2, null);
        main2.d(t3, m2), b2 || (w2 = main2.A(n2, "change", e2[6]), b2 = true);
      }, p(e3, s3) {
        if (2 & s3 && r2 !== (r2 = e3[10].path) && (n2.__value = r2, n2.value = n2.__value), 16 & s3 && (n2.checked = n2.__value === e3[4]), 2 & s3 && x2 !== (x2 = e3[10].name + "") && main2.o(d2, x2), 14 & s3) {
          let t4;
          for (v2 = e3[2], t4 = 0; t4 < v2.length; t4 += 1) {
            const n3 = Bt(e3, v2, t4);
            _2[t4] ? _2[t4].p(n3, s3) : (_2[t4] = Et(n3), _2[t4].c(), _2[t4].m(p2, null));
          }
          for (; t4 < _2.length; t4 += 1)
            _2[t4].d(1);
          _2.length = v2.length;
        }
        8 & s3 && y2 !== (y2 = e3[3] ? "text-gray-300" : "text-black") && main2.b(t3, "class", y2);
      }, d(r3) {
        r3 && main2.f(t3), e2[7][0].splice(e2[7][0].indexOf(n2), 1), main2.y(_2, r3), b2 = false, w2();
      }};
    }
    function Nt(e2) {
      let t3, n2, r2, s2, u2, d2, f2 = e2[1], g2 = [];
      for (let t4 = 0; t4 < f2.length; t4 += 1)
        g2[t4] = zt(At(e2, f2, t4));
      return {c() {
        t3 = main2.e("h3"), n2 = main2.t("\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uBC14\uAFC9\uB2C8\uB2E4."), s2 = main2.a(), u2 = main2.e("div");
        for (let e3 = 0; e3 < g2.length; e3 += 1)
          g2[e3].c();
        main2.b(t3, "class", r2 = main2.Q(e2[3] ? "text-gray-300" : "text-black") + " svelte-34egsl"), main2.b(u2, "id", "ProfileChoiceList"), main2.b(u2, "class", "flex flex-col p-4 overflow-y-auto svelte-34egsl"), main2.j(() => e2[8].call(u2));
      }, m(r3, o2) {
        main2.c(r3, t3, o2), main2.d(t3, n2), main2.c(r3, s2, o2), main2.c(r3, u2, o2);
        for (let e3 = 0; e3 < g2.length; e3 += 1)
          g2[e3].m(u2, null);
        d2 = main2.z(u2, e2[8].bind(u2));
      }, p(e3, [n3]) {
        if (8 & n3 && r2 !== (r2 = main2.Q(e3[3] ? "text-gray-300" : "text-black") + " svelte-34egsl") && main2.b(t3, "class", r2), 30 & n3) {
          let t4;
          for (f2 = e3[1], t4 = 0; t4 < f2.length; t4 += 1) {
            const r3 = At(e3, f2, t4);
            g2[t4] ? g2[t4].p(r3, n3) : (g2[t4] = zt(r3), g2[t4].c(), g2[t4].m(u2, null));
          }
          for (; t4 < g2.length; t4 += 1)
            g2[t4].d(1);
          g2.length = f2.length;
        }
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(s2), e3 && main2.f(u2), main2.y(g2, e3), d2();
      }};
    }
    function Dt(e2, t3, n2) {
      let r2, s2, o2, i2, c2;
      main2.g(e2, ee, (e3) => n2(1, o2 = e3)), main2.g(e2, ne, (e3) => n2(3, i2 = e3)), main2.g(e2, G, (e3) => n2(4, c2 = e3));
      const l2 = [{path: "la-vie-en-rose", name: "\uB77C\uBE44\uC559 \uB85C\uC988"}, {path: "violeta", name: "\uBE44\uC62C\uB808\uD0C0"}, {path: "fiesta", name: "\uD53C\uC5D0\uC2A4\uD0C0"}, {path: "the-secret-story-of-swan", name: "\uD658\uC0C1\uB3D9\uD654"}, {path: "one-the-story", name: "One The Story \uD3EC\uC2A4\uD130"}, {path: "one-the-story-appreciation", name: "One The Story \uC18C\uAC10"}, {path: "eating-trip-3", name: "\uC787\uD79D \uD2B8\uB9BD 3"}, {path: "latest", name: "\uCD5C\uC2E0 \uD504\uBA54"}];
      let a3;
      o2.length == 0 && fetch("./\uD504\uB85C\uD544_\uC0AC\uC9C4_\uBAA9\uB85D.json").then((e3) => e3.json()).then((e3) => {
        main2.W(ee, o2 = e3, o2), console.log("\uD504\uB85C\uD544 \uC0AC\uC9C4 \uBAA9\uB85D \uB85C\uB529 \uC644\uB8CC");
      }).catch((e3) => {
        console.error("\uD504\uB85C\uD544 \uC0AC\uC9C4 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."), console.error(e3), console.log("\uAE30\uBCF8 \uBAA9\uB85D\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4."), main2.W(ee, o2 = l2, o2);
      });
      return e2.$$.update = () => {
        1 & e2.$$.dirty && n2(5, r2 = Math.floor((a3 - 36) / 36)), 32 & e2.$$.dirty && n2(2, s2 = function(e3) {
          let t4, n3 = e3.length;
          if (n3)
            for (; --n3; )
              t4 = Math.floor(Math.random() * (n3 + 1)), [e3[t4], e3[n3]] = [e3[n3], e3[t4]];
          return e3;
        }([...Array(12).keys()]).slice(0, r2));
      }, [a3, o2, s2, i2, c2, r2, function() {
        c2 = this.__value, G.set(c2);
      }, [[]], function() {
        a3 = this.clientWidth, n2(0, a3);
      }];
    }
    class Wt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Dt, Nt, main2.s, {});
      }
    }
    function Rt(e2) {
      let t3, n2, r2, s2, i2;
      return {c() {
        t3 = main2.e("img"), t3.src !== (n2 = "./img/" + e2[1]) && main2.b(t3, "src", n2), main2.b(t3, "class", r2 = "w-12 h-12 rounded-full " + (e2[2] ? "border-gray-700" : "border-gray-100") + " border-2\r\nfloat-left"), main2.b(t3, "alt", "");
      }, m(n3, r3) {
        main2.c(n3, t3, r3), s2 || (i2 = [main2.A(t3, "pointerdown", e2[6]), main2.A(t3, "pointerup", e2[7]), main2.A(t3, "mousedown", e2[8]), main2.A(t3, "mouseup", e2[9])], s2 = true);
      }, p(e3, [s3]) {
        2 & s3 && t3.src !== (n2 = "./img/" + e3[1]) && main2.b(t3, "src", n2), 4 & s3 && r2 !== (r2 = "w-12 h-12 rounded-full " + (e3[2] ? "border-gray-700" : "border-gray-100") + " border-2\r\nfloat-left") && main2.b(t3, "class", r2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), s2 = false, main2.B(i2);
      }};
    }
    function Ft(e2, t3, n2) {
      let r2, s2, o2;
      main2.g(e2, G, (e3) => n2(5, s2 = e3)), main2.g(e2, ne, (e3) => n2(2, o2 = e3));
      let {member: i2} = t3;
      const {open: c2} = main2.O("simple-modal"), l2 = () => {
        c2(Wt, {});
      };
      let a3;
      return e2.$$set = (e3) => {
        "member" in e3 && n2(4, i2 = e3.member);
      }, e2.$$.update = () => {
        48 & e2.$$.dirty && n2(1, r2 = i2 == "\uC6B4\uC601\uD300" ? "izone-logo.png" : `profile/${s2}/${i2}.jpg`);
      }, [a3, r2, o2, l2, i2, s2, () => {
        n2(0, a3 = setTimeout(l2, 300));
      }, (e3) => {
        clearTimeout(a3);
      }, () => {
        n2(0, a3 = setTimeout(l2, 500));
      }, (e3) => {
        clearTimeout(a3);
      }];
    }
    class Jt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ft, Rt, main2.s, {member: 4});
      }
    }
    function Vt(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[18] = t3[n2], r2;
    }
    function qt(e2) {
      let t3, n2;
      return t3 = new wt({props: {tag: e2[18], canDelete: true, size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        4 & n3 && (r2.tag = e3[18]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Ht(e2) {
      let t3, n2, r2, s2, i2;
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("div"), main2.b(n2, "contenteditable", "false"), e2[3] === void 0 && main2.j(() => e2[15].call(n2)), main2.b(t3, "id", "MailDetailCardContent"), main2.b(t3, "class", "h-5/6 overflow-y-auto p-1");
      }, m(r3, o2) {
        main2.c(r3, t3, o2), main2.d(t3, n2), e2[3] !== void 0 && (n2.innerHTML = e2[3]), s2 || (i2 = main2.A(n2, "input", e2[15]), s2 = true);
      }, p(e3, t4) {
        8 & t4 && e3[3] !== n2.innerHTML && (n2.innerHTML = e3[3]);
      }, i(e3) {
        r2 || main2.j(() => {
          r2 = main2.X(n2, a, {duration: 300}), r2.start();
        });
      }, o: main2.n, d(e3) {
        e3 && main2.f(t3), s2 = false, i2();
      }};
    }
    function Kt(e2) {
      let t3, n2, r2, s2, i2;
      return {c() {
        t3 = main2.e("button"), n2 = main2.t("\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30\u{1F5C3}\uFE0F"), main2.b(t3, "class", r2 = "shadow rounded p-1 mt-2 " + (e2[7] ? "bg-gray-900 text-gray-300" : "bg-red-100"));
      }, m(r3, o2) {
        main2.c(r3, t3, o2), main2.d(t3, n2), s2 || (i2 = main2.A(t3, "click", e2[16]), s2 = true);
      }, p(e3, n3) {
        128 & n3 && r2 !== (r2 = "shadow rounded p-1 mt-2 " + (e3[7] ? "bg-gray-900 text-gray-300" : "bg-red-100")) && main2.b(t3, "class", r2);
      }, d(e3) {
        e3 && main2.f(t3), s2 = false, i2();
      }};
    }
    function Ut(e2) {
      let t3, n2, r2, s2, u2, d2, g2, x2, v2, _2, M2, k2, S2, O2, C2, j2, L2, T2, B2, E2, z2, N2 = e2[1].subject + "";
      r2 = new Lt({props: {pm: e2[1]}}), u2 = new Jt({props: {member: e2[1].member}}), _2 = new Tt({props: {pm: e2[1], size: "sm"}}), k2 = new _t({props: {time: e2[1].time, size: "sm"}});
      let D2 = e2[2], W2 = [];
      for (let t4 = 0; t4 < D2.length; t4 += 1)
        W2[t4] = qt(Vt(e2, D2, t4));
      const R2 = (e3) => main2.v(W2[e3], 1, 1, () => {
        W2[e3] = null;
      });
      L2 = new St({});
      let J2 = e2[3] && Ht(e2), V2 = e2[6] && Kt(e2);
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("div"), main2.q(r2.$$.fragment), s2 = main2.a(), main2.q(u2.$$.fragment), d2 = main2.a(), g2 = main2.e("h4"), x2 = main2.t(N2), v2 = main2.a(), main2.q(_2.$$.fragment), M2 = main2.a(), main2.q(k2.$$.fragment), S2 = main2.a(), O2 = main2.e("br"), C2 = main2.a();
        for (let e3 = 0; e3 < W2.length; e3 += 1)
          W2[e3].c();
        j2 = main2.a(), main2.q(L2.$$.fragment), T2 = main2.a(), J2 && J2.c(), B2 = main2.a(), V2 && V2.c(), main2.b(g2, "class", "text-xl w-4/5"), main2.b(n2, "id", "MailDetailCardHeader"), main2.b(n2, "class", "relative w-full leading-loose"), main2.b(t3, "id", "MailDetailCard"), main2.h(t3, "max-height", e2[4] && e2[0] ? "70%" : "90%"), main2.h(t3, "min-height", "300px"), main2.b(t3, "class", E2 = "\r\nshadow-2xl rounded-md\r\n" + e2[5] + "\r\nw-full m-1 p-2\r\nflex flex-col");
      }, m(e3, o2) {
        main2.c(e3, t3, o2), main2.d(t3, n2), main2.r(r2, n2, null), main2.d(n2, s2), main2.r(u2, n2, null), main2.d(n2, d2), main2.d(n2, g2), main2.d(g2, x2), main2.d(n2, v2), main2.r(_2, n2, null), main2.d(n2, M2), main2.r(k2, n2, null), main2.d(n2, S2), main2.d(n2, O2), main2.d(n2, C2);
        for (let e4 = 0; e4 < W2.length; e4 += 1)
          W2[e4].m(n2, null);
        main2.d(n2, j2), main2.r(L2, n2, null), main2.d(t3, T2), J2 && J2.m(t3, null), main2.d(t3, B2), V2 && V2.m(t3, null), z2 = true;
      }, p(e3, [s3]) {
        const o2 = {};
        2 & s3 && (o2.pm = e3[1]), r2.$set(o2);
        const i2 = {};
        2 & s3 && (i2.member = e3[1].member), u2.$set(i2), (!z2 || 2 & s3) && N2 !== (N2 = e3[1].subject + "") && main2.o(x2, N2);
        const l2 = {};
        2 & s3 && (l2.pm = e3[1]), _2.$set(l2);
        const a3 = {};
        if (2 & s3 && (a3.time = e3[1].time), k2.$set(a3), 4 & s3) {
          let t4;
          for (D2 = e3[2], t4 = 0; t4 < D2.length; t4 += 1) {
            const r3 = Vt(e3, D2, t4);
            W2[t4] ? (W2[t4].p(r3, s3), main2.p(W2[t4], 1)) : (W2[t4] = qt(r3), W2[t4].c(), main2.p(W2[t4], 1), W2[t4].m(n2, j2));
          }
          for (main2.D(), t4 = D2.length; t4 < W2.length; t4 += 1)
            R2(t4);
          main2.x();
        }
        e3[3] ? J2 ? (J2.p(e3, s3), 8 & s3 && main2.p(J2, 1)) : (J2 = Ht(e3), J2.c(), main2.p(J2, 1), J2.m(t3, B2)) : J2 && (J2.d(1), J2 = null), e3[6] ? V2 ? V2.p(e3, s3) : (V2 = Kt(e3), V2.c(), V2.m(t3, null)) : V2 && (V2.d(1), V2 = null), (!z2 || 17 & s3) && main2.h(t3, "max-height", e3[4] && e3[0] ? "70%" : "90%"), (!z2 || 32 & s3 && E2 !== (E2 = "\r\nshadow-2xl rounded-md\r\n" + e3[5] + "\r\nw-full m-1 p-2\r\nflex flex-col")) && main2.b(t3, "class", E2);
      }, i(e3) {
        if (!z2) {
          main2.p(r2.$$.fragment, e3), main2.p(u2.$$.fragment, e3), main2.p(_2.$$.fragment, e3), main2.p(k2.$$.fragment, e3);
          for (let e4 = 0; e4 < D2.length; e4 += 1)
            main2.p(W2[e4]);
          main2.p(L2.$$.fragment, e3), main2.p(J2), z2 = true;
        }
      }, o(e3) {
        main2.v(r2.$$.fragment, e3), main2.v(u2.$$.fragment, e3), main2.v(_2.$$.fragment, e3), main2.v(k2.$$.fragment, e3), W2 = W2.filter(Boolean);
        for (let e4 = 0; e4 < W2.length; e4 += 1)
          main2.v(W2[e4]);
        main2.v(L2.$$.fragment, e3), z2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(r2), main2.w(u2), main2.w(_2), main2.w(k2), main2.y(W2, e3), main2.w(L2), J2 && J2.d(), V2 && V2.d();
      }};
    }
    function Yt(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, f2, g2, h2, p2, m2, $2;
      main2.g(e2, ke, (e3) => n2(1, i2 = e3)), main2.g(e2, Me, (e3) => n2(17, c2 = e3)), main2.g(e2, me, (e3) => n2(12, l2 = e3)), main2.g(e2, pe, (e3) => n2(13, a3 = e3)), main2.g(e2, Se, (e3) => n2(3, u2 = e3)), main2.g(e2, Pe, (e3) => n2(4, d2 = e3)), main2.g(e2, re, (e3) => n2(5, f2 = e3)), main2.g(e2, Ie, (e3) => n2(6, g2 = e3)), main2.g(e2, ne, (e3) => n2(7, h2 = e3)), main2.g(e2, je, (e3) => n2(8, p2 = e3)), main2.g(e2, main2.U, (e3) => n2(9, m2 = e3)), main2.g(e2, main2.V, (e3) => n2(10, $2 = e3));
      let {show: y2} = t3;
      main2.V.subscribe((e3) => {
        if (i2.id != e3.now_pm) {
          const t4 = c2.filter((t5) => t5.id == e3.now_pm);
          t4.length == 1 && main2.W(ke, i2 = t4[0], i2);
        }
      });
      return e2.$$set = (e3) => {
        "show" in e3 && n2(0, y2 = e3.show);
      }, e2.$$.update = () => {
        12288 & e2.$$.dirty && n2(11, r2 = (e3) => l2.has(e3.id) ? Array.from(l2.get(e3.id)).map((e4) => a3.get(e4.value)) : []), 2050 & e2.$$.dirty && n2(2, s2 = r2(i2)), 2 & e2.$$.dirty && n2(14, o2 = () => {
          main2.W(Se, u2 = "", u2), async function(e3) {
            const t4 = await fetch(`./mail/${e3}.html`).then((e4) => e4.text()), n3 = t4.search('<div class="main-contents" id="mail-detail"><html><head></head><body>') + 69, r3 = t4.search("</body></html></div>");
            return t4.slice(n3, r3);
          }(i2.id).then((e3) => {
            setTimeout(() => {
              main2.W(Se, u2 = e3, u2);
            }, 100);
          });
        }), 16384 & e2.$$.dirty && o2();
      }, [y2, i2, s2, u2, d2, f2, g2, h2, p2, m2, $2, r2, l2, a3, o2, function() {
        u2 = this.innerHTML, Se.set(u2);
      }, () => {
        main2.W(je, p2 = true, p2), m2("./", {...$2, showList: true});
      }];
    }
    class Zt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Yt, Ut, main2.s, {show: 0});
      }
    }
    function Qt(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[8] = t3[n2], r2;
    }
    function Xt(e2) {
      let t3, n2;
      return t3 = new wt({props: {tag: e2[8], size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        2 & n3 && (r2.tag = e3[8]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Gt(e2) {
      let t3, n2, r2, s2, i2 = e2[1], u2 = [];
      for (let t4 = 0; t4 < i2.length; t4 += 1)
        u2[t4] = Xt(Qt(e2, i2, t4));
      const d2 = (e3) => main2.v(u2[e3], 1, 1, () => {
        u2[e3] = null;
      });
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("div");
        for (let e3 = 0; e3 < u2.length; e3 += 1)
          u2[e3].c();
        main2.b(n2, "class", "flex flex-wrap w-full"), main2.h(t3, "min-height", "43px"), main2.b(t3, "class", r2 = "AllTagList\r\n    " + e2[2] + "\r\n    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto"), main2.Y(t3, "hidden", e2[0]);
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.d(t3, n2);
        for (let e4 = 0; e4 < u2.length; e4 += 1)
          u2[e4].m(n2, null);
        s2 = true;
      }, p(e3, [o2]) {
        if (2 & o2) {
          let t4;
          for (i2 = e3[1], t4 = 0; t4 < i2.length; t4 += 1) {
            const r3 = Qt(e3, i2, t4);
            u2[t4] ? (u2[t4].p(r3, o2), main2.p(u2[t4], 1)) : (u2[t4] = Xt(r3), u2[t4].c(), main2.p(u2[t4], 1), u2[t4].m(n2, null));
          }
          for (main2.D(), t4 = i2.length; t4 < u2.length; t4 += 1)
            d2(t4);
          main2.x();
        }
        (!s2 || 4 & o2 && r2 !== (r2 = "AllTagList\r\n    " + e3[2] + "\r\n    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto")) && main2.b(t3, "class", r2), 5 & o2 && main2.Y(t3, "hidden", e3[0]);
      }, i(e3) {
        if (!s2) {
          for (let e4 = 0; e4 < i2.length; e4 += 1)
            main2.p(u2[e4]);
          s2 = true;
        }
      }, o(e3) {
        u2 = u2.filter(Boolean);
        for (let e4 = 0; e4 < u2.length; e4 += 1)
          main2.v(u2[e4]);
        s2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(u2, e3);
      }};
    }
    function en(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2;
      main2.g(e2, pe, (e3) => n2(3, s2 = e3)), main2.g(e2, xe, (e3) => n2(4, o2 = e3)), main2.g(e2, main2.Z, (e3) => n2(5, i2 = e3)), main2.g(e2, main2.V, (e3) => n2(6, c2 = e3)), main2.g(e2, re, (e3) => n2(2, l2 = e3));
      let {hidden: a3} = t3;
      return e2.$$set = (e3) => {
        "hidden" in e3 && n2(0, a3 = e3.hidden);
      }, e2.$$.update = () => {
        8 & e2.$$.dirty && n2(1, r2 = Array.from(s2.values()));
      }, s2.has(o2) && (main2.W(xe, o2 = null, o2), i2("./", Object.assign(Object.assign({}, c2), {tag: ""}))), [a3, r2, l2, s2];
    }
    class tn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, en, Gt, main2.s, {hidden: 0});
      }
    }
    function nn(e2) {
      let t3, n2, r2, s2, i2, u2;
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("a"), r2 = main2.t("\uBC88\uC5ED"), s2 = main2.e("img"), main2.b(s2, "class", "w-5 h-5 mt-0.5 float-right"), s2.src !== (i2 = "./img/papago.png") && main2.b(s2, "src", "./img/papago.png"), main2.b(s2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30"), main2.b(n2, "href", e2[1]), main2.b(n2, "target", "_blank"), main2.b(t3, "class", u2 = "w-16 p-1 shadow rounded mr-1\r\n            " + (e2[0] ? "bg-gray-900 text-gray-300" : "bg-red-100"));
      }, m(e3, o2) {
        main2.c(e3, t3, o2), main2.d(t3, n2), main2.d(n2, r2), main2.d(n2, s2);
      }, p(e3, [r3]) {
        2 & r3 && main2.b(n2, "href", e3[1]), 1 & r3 && u2 !== (u2 = "w-16 p-1 shadow rounded mr-1\r\n            " + (e3[0] ? "bg-gray-900 text-gray-300" : "bg-red-100")) && main2.b(t3, "class", u2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function rn(e2, t3, n2) {
      let r2, s2;
      return main2.g(e2, ne, (e3) => n2(0, r2 = e3)), main2.g(e2, Oe, (e3) => n2(1, s2 = e3)), [r2, s2];
    }
    class sn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, rn, nn, main2.s, {});
      }
    }
    function on(e2) {
      let t3, n2, r2, s2, i2, d2;
      return {c() {
        t3 = main2.e("label"), n2 = main2.t("\uD0DC\uADF8 \uBAA9\uB85D\r\n    "), r2 = main2.e("input"), main2.b(r2, "id", "showTagListInput"), main2.b(r2, "type", "checkbox"), main2.b(t3, "class", s2 = "p-1 rounded " + e2[0]), main2.b(t3, "for", "showTagListInput");
      }, m(s3, o2) {
        main2.c(s3, t3, o2), main2.d(t3, n2), main2.d(t3, r2), r2.checked = e2[1], i2 || (d2 = main2.A(r2, "change", e2[2]), i2 = true);
      }, p(e3, [n3]) {
        2 & n3 && (r2.checked = e3[1]), 1 & n3 && s2 !== (s2 = "p-1 rounded " + e3[0]) && main2.b(t3, "class", s2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), i2 = false, d2();
      }};
    }
    function cn(e2, t3, n2) {
      let r2, s2;
      return main2.g(e2, re, (e3) => n2(0, r2 = e3)), main2.g(e2, Le, (e3) => n2(1, s2 = e3)), [r2, s2, function() {
        s2 = this.checked, Le.set(s2);
      }];
    }
    class ln extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, cn, on, main2.s, {});
      }
    }
    function an(e2) {
      let t3, n2, r2, s2, i2;
      return {c() {
        t3 = main2.e("button"), n2 = main2.t("\uBAA9\uB85D\u{1F5C3}\uFE0F"), main2.b(t3, "class", r2 = "shadow rounded p-1 mr-1 " + (e2[0] ? "bg-gray-900 text-gray-300" : "bg-red-100"));
      }, m(r3, o2) {
        main2.c(r3, t3, o2), main2.d(t3, n2), s2 || (i2 = main2.A(t3, "click", e2[4]), s2 = true);
      }, p(e3, [n3]) {
        1 & n3 && r2 !== (r2 = "shadow rounded p-1 mr-1 " + (e3[0] ? "bg-gray-900 text-gray-300" : "bg-red-100")) && main2.b(t3, "class", r2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), s2 = false, i2();
      }};
    }
    function un(e2, t3, n2) {
      let r2, s2, o2, i2;
      main2.g(e2, ne, (e3) => n2(0, r2 = e3)), main2.g(e2, je, (e3) => n2(1, s2 = e3)), main2.g(e2, main2.U, (e3) => n2(2, o2 = e3)), main2.g(e2, main2.V, (e3) => n2(3, i2 = e3));
      return [r2, s2, o2, i2, () => {
        main2.W(je, s2 = true, s2), o2("./", {...i2, showList: true});
      }];
    }
    class dn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, un, an, main2.s, {});
      }
    }
    function fn(e2) {
      let t3, n2, r2, s2, i2, d2, f2 = e2[0] ? "\uB2E4\uD06C" : "\uCEEC\uB7EC";
      return {c() {
        t3 = main2.e("span"), n2 = main2.t(f2), main2.b(t3, "style", r2 = e2[0] ? "" : e2[1]), main2.b(t3, "class", s2 = "rounded pl-1 pr-1 mr-1 border-2 text-lg\r\n    " + (e2[0] ? "text-gray-400 border-gray-900 bg-gray-800" : "text-red-300  border-red-300 border-2"));
      }, m(r3, s3) {
        main2.c(r3, t3, s3), main2.d(t3, n2), i2 || (d2 = main2.A(t3, "click", e2[2]), i2 = true);
      }, p(e3, [o2]) {
        1 & o2 && f2 !== (f2 = e3[0] ? "\uB2E4\uD06C" : "\uCEEC\uB7EC") && main2.o(n2, f2), 1 & o2 && r2 !== (r2 = e3[0] ? "" : e3[1]) && main2.b(t3, "style", r2), 1 & o2 && s2 !== (s2 = "rounded pl-1 pr-1 mr-1 border-2 text-lg\r\n    " + (e3[0] ? "text-gray-400 border-gray-900 bg-gray-800" : "text-red-300  border-red-300 border-2")) && main2.b(t3, "class", s2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), i2 = false, d2();
      }};
    }
    function gn(e2, t3, n2) {
      let r2;
      main2.g(e2, ne, (e3) => n2(0, r2 = e3));
      return [r2, "\nbackground-image: linear-gradient(\n    to right,\n    #f1d2e7,#f1c3aa,#e382a9, #e18784,\n    #f3aa51, #fcf695, #fff,#cee5d5,\n    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7)\n", () => {
        main2.W(ne, r2 = !r2, r2);
      }];
    }
    class hn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, gn, fn, main2.s, {});
      }
    }
    function pn(e2) {
      let t3, n2;
      return t3 = new dn({}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function mn(e2) {
      let t3, n2;
      return t3 = new ln({}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function $n(e2) {
      let t3, n2, r2, s2, u2, d2, g2, v2, _2, M2, k2, S2, O2, C2, j2 = e2[2] && pn();
      s2 = new sn({}), d2 = new hn({});
      let L2 = !e2[1] && e2[4] && mn();
      return _2 = new tn({props: {hidden: !((e2[1] || e2[5]) && e2[4])}}), k2 = new Zt({props: {show: e2[1] || e2[5]}}), {c() {
        t3 = main2.e("section"), n2 = main2.e("div"), j2 && j2.c(), r2 = main2.a(), main2.q(s2.$$.fragment), u2 = main2.a(), main2.q(d2.$$.fragment), g2 = main2.a(), L2 && L2.c(), v2 = main2.a(), main2.q(_2.$$.fragment), M2 = main2.a(), main2.q(k2.$$.fragment), main2.b(n2, "class", "flex flex-row m-1"), main2.b(t3, "id", "MailDetailSection"), main2.b(t3, "class", S2 = "h-full p-3 " + (e2[4] ? "w-1/2 lg:w-1/3 xl:w-1/4" : "w-full") + " flex flex-col svelte-q462jf"), main2.j(() => e2[6].call(t3)), main2.Y(t3, "hidden", e2[2] && e2[3]);
      }, m(o2, i2) {
        main2.c(o2, t3, i2), main2.d(t3, n2), j2 && j2.m(n2, null), main2.d(n2, r2), main2.r(s2, n2, null), main2.d(n2, u2), main2.r(d2, n2, null), main2.d(n2, g2), L2 && L2.m(n2, null), main2.d(t3, v2), main2.r(_2, t3, null), main2.d(t3, M2), main2.r(k2, t3, null), O2 = main2.z(t3, e2[6].bind(t3)), C2 = true;
      }, p(e3, [s3]) {
        e3[2] ? j2 ? 4 & s3 && main2.p(j2, 1) : (j2 = pn(), j2.c(), main2.p(j2, 1), j2.m(n2, r2)) : j2 && (main2.D(), main2.v(j2, 1, 1, () => {
          j2 = null;
        }), main2.x()), !e3[1] && e3[4] ? L2 ? 18 & s3 && main2.p(L2, 1) : (L2 = mn(), L2.c(), main2.p(L2, 1), L2.m(n2, null)) : L2 && (main2.D(), main2.v(L2, 1, 1, () => {
          L2 = null;
        }), main2.x());
        const o2 = {};
        50 & s3 && (o2.hidden = !((e3[1] || e3[5]) && e3[4])), _2.$set(o2);
        const i2 = {};
        34 & s3 && (i2.show = e3[1] || e3[5]), k2.$set(i2), (!C2 || 16 & s3 && S2 !== (S2 = "h-full p-3 " + (e3[4] ? "w-1/2 lg:w-1/3 xl:w-1/4" : "w-full") + " flex flex-col svelte-q462jf")) && main2.b(t3, "class", S2), 28 & s3 && main2.Y(t3, "hidden", e3[2] && e3[3]);
      }, i(e3) {
        C2 || (main2.p(j2), main2.p(s2.$$.fragment, e3), main2.p(d2.$$.fragment, e3), main2.p(L2), main2.p(_2.$$.fragment, e3), main2.p(k2.$$.fragment, e3), C2 = true);
      }, o(e3) {
        main2.v(j2), main2.v(s2.$$.fragment, e3), main2.v(d2.$$.fragment, e3), main2.v(L2), main2.v(_2.$$.fragment, e3), main2.v(k2.$$.fragment, e3), C2 = false;
      }, d(e3) {
        e3 && main2.f(t3), j2 && j2.d(), main2.w(s2), main2.w(d2), L2 && L2.d(), main2.w(_2), main2.w(k2), O2();
      }};
    }
    function yn(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2;
      return main2.g(e2, Ie, (e3) => n2(2, s2 = e3)), main2.g(e2, je, (e3) => n2(3, o2 = e3)), main2.g(e2, Pe, (e3) => n2(4, i2 = e3)), main2.g(e2, Le, (e3) => n2(5, c2 = e3)), e2.$$.update = () => {
        1 & e2.$$.dirty && n2(1, r2 = 650 < l2);
      }, [l2, r2, s2, o2, i2, c2, function() {
        l2 = this.clientHeight, n2(0, l2);
      }];
    }
    class bn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, yn, $n, main2.s, {});
      }
    }
    const wn = vn(new Date(2021, 2, 20));
    let xn = main2.F(wn);
    function vn(e2) {
      let t3 = "" + (e2.getMonth() + 1), n2 = "" + e2.getDate();
      const r2 = e2.getFullYear();
      return t3.length < 2 && (t3 = "0" + t3), n2.length < 2 && (n2 = "0" + n2), [r2, t3, n2].join("-");
    }
    function _n(e2) {
      const [t3, n2, r2] = e2.split("-").map((e3) => parseInt(e3));
      return new Date(t3, n2 - 1, r2);
    }
    function Mn(e2) {
      return e2.split(" ")[0].replace(/\//g, "-");
    }
    function kn(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uC774\uC804");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Sn(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uB2E4\uC74C");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function On(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uC5B4\uC81C");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Cn(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uB0B4\uC77C");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function jn(e2) {
      let t3, n2, r2, s2, d2, g2, h2, m2, x2, v2, M2, k2, S2, O2, C2, j2, L2, I2, A2, B2, E2, z2, N2, D2;
      return t3 = new Xe({props: {id: "BackPageButton", onClick: e2[11], $$slots: {default: [kn]}, $$scope: {ctx: e2}}}), k2 = new Xe({props: {id: "NextPageButton", onClick: e2[10], $$slots: {default: [Sn]}, $$scope: {ctx: e2}}}), j2 = new Xe({props: {id: "toYesterdayButton", onClick: e2[8], $$slots: {default: [On]}, $$scope: {ctx: e2}}}), E2 = new Xe({props: {id: "toTomorrowButton", onClick: e2[9], $$slots: {default: [Cn]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), r2 = main2.e("span"), s2 = main2.e("input"), g2 = main2.a(), h2 = main2.e("span"), m2 = main2.t("/ "), x2 = main2.t(e2[0]), M2 = main2.a(), main2.q(k2.$$.fragment), S2 = main2.a(), O2 = main2.e("br"), C2 = main2.a(), main2.q(j2.$$.fragment), L2 = main2.a(), I2 = main2.e("input"), B2 = main2.a(), main2.q(E2.$$.fragment), main2.b(s2, "id", "NowPageInput"), main2.b(s2, "type", "number"), main2.b(s2, "class", d2 = "w-9 " + e2[5]), main2.b(s2, "min", "1"), main2.b(s2, "max", e2[0]), main2.Y(s2, "bg-red-300", !e2[7] && e2[0] <= e2[1]), main2.Y(s2, "bg-red-500", e2[7] && e2[0] <= e2[1]), main2.b(r2, "id", "NowPageSpan"), main2.b(r2, "class", v2 = e2[5] + " " + e2[6] + "\r\n        border-2 rounded w-24 p-1"), main2.Y(r2, "bg-red-300", !e2[7] && e2[0] <= e2[1]), main2.Y(r2, "bg-red-500", e2[7] && e2[0] <= e2[1]), main2.Y(r2, "border-red-700", e2[0] <= e2[1]), main2.b(I2, "id", "DateStringInput"), main2.b(I2, "type", "date"), main2.b(I2, "class", A2 = "w-38 border-2 " + e2[6] + " rounded " + e2[5]);
      }, m(o2, i2) {
        main2.r(t3, o2, i2), main2.c(o2, n2, i2), main2.c(o2, r2, i2), main2.d(r2, s2), main2.N(s2, e2[1]), main2.d(r2, g2), main2.d(r2, h2), main2.d(h2, m2), main2.d(h2, x2), main2.c(o2, M2, i2), main2.r(k2, o2, i2), main2.c(o2, S2, i2), main2.c(o2, O2, i2), main2.c(o2, C2, i2), main2.r(j2, o2, i2), main2.c(o2, L2, i2), main2.c(o2, I2, i2), main2.N(I2, e2[2]), main2.c(o2, B2, i2), main2.r(E2, o2, i2), z2 = true, N2 || (D2 = [main2.A(s2, "input", e2[12]), main2.A(I2, "input", e2[13]), main2.A(I2, "change", e2[14])], N2 = true);
      }, p(e3, [n3]) {
        const o2 = {};
        65536 & n3 && (o2.$$scope = {dirty: n3, ctx: e3}), t3.$set(o2), (!z2 || 32 & n3 && d2 !== (d2 = "w-9 " + e3[5])) && main2.b(s2, "class", d2), (!z2 || 1 & n3) && main2.b(s2, "max", e3[0]), 2 & n3 && main2._(s2.value) !== e3[1] && main2.N(s2, e3[1]), 163 & n3 && main2.Y(s2, "bg-red-300", !e3[7] && e3[0] <= e3[1]), 163 & n3 && main2.Y(s2, "bg-red-500", e3[7] && e3[0] <= e3[1]), (!z2 || 1 & n3) && main2.o(x2, e3[0]), (!z2 || 96 & n3 && v2 !== (v2 = e3[5] + " " + e3[6] + "\r\n        border-2 rounded w-24 p-1")) && main2.b(r2, "class", v2), 227 & n3 && main2.Y(r2, "bg-red-300", !e3[7] && e3[0] <= e3[1]), 227 & n3 && main2.Y(r2, "bg-red-500", e3[7] && e3[0] <= e3[1]), 99 & n3 && main2.Y(r2, "border-red-700", e3[0] <= e3[1]);
        const i2 = {};
        65536 & n3 && (i2.$$scope = {dirty: n3, ctx: e3}), k2.$set(i2);
        const l2 = {};
        65536 & n3 && (l2.$$scope = {dirty: n3, ctx: e3}), j2.$set(l2), (!z2 || 96 & n3 && A2 !== (A2 = "w-38 border-2 " + e3[6] + " rounded " + e3[5])) && main2.b(I2, "class", A2), 4 & n3 && main2.N(I2, e3[2]);
        const a3 = {};
        65536 & n3 && (a3.$$scope = {dirty: n3, ctx: e3}), E2.$set(a3);
      }, i(e3) {
        z2 || (main2.p(t3.$$.fragment, e3), main2.p(k2.$$.fragment, e3), main2.p(j2.$$.fragment, e3), main2.p(E2.$$.fragment, e3), z2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(k2.$$.fragment, e3), main2.v(j2.$$.fragment, e3), main2.v(E2.$$.fragment, e3), z2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), e3 && main2.f(r2), e3 && main2.f(M2), main2.w(k2, e3), e3 && main2.f(S2), e3 && main2.f(O2), e3 && main2.f(C2), main2.w(j2, e3), e3 && main2.f(L2), e3 && main2.f(I2), e3 && main2.f(B2), main2.w(E2, e3), N2 = false, main2.B(D2);
      }};
    }
    function Ln(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2;
      main2.g(e2, xe, (e3) => n2(15, r2 = e3)), main2.g(e2, Ce, (e3) => n2(1, s2 = e3)), main2.g(e2, xn, (e3) => n2(2, o2 = e3)), main2.g(e2, main2.U, (e3) => n2(3, i2 = e3)), main2.g(e2, main2.V, (e3) => n2(4, c2 = e3)), main2.g(e2, re, (e3) => n2(5, l2 = e3)), main2.g(e2, se, (e3) => n2(6, a3 = e3)), main2.g(e2, ne, (e3) => n2(7, u2 = e3));
      let {maxPage: d2} = t3;
      main2.V.subscribe((e3) => {
        const t4 = parseInt(e3.nowPage);
        s2 != t4 && main2.W(Ce, s2 = e3.nowPage ? t4 : 1, s2), o2 != e3.dateString && main2.W(xn, o2 = e3.dateString || wn, o2);
      });
      return e2.$$set = (e3) => {
        "maxPage" in e3 && n2(0, d2 = e3.maxPage);
      }, [d2, s2, o2, i2, c2, l2, a3, u2, function() {
        if (r2)
          return s2 < d2 && main2.W(Ce, s2 += 1, s2), null;
        const [e3, t4, n3] = o2.split("-").map((e4) => parseInt(e4)), l3 = new Date(e3, t4 - 1, n3 - 1);
        main2.W(xn, o2 = vn(l3), o2), main2.W(Ce, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: o2}));
      }, function() {
        if (r2)
          return s2 > 1 && main2.W(Ce, s2 -= 1, s2), null;
        const [e3, t4, n3] = o2.split("-").map((e4) => parseInt(e4)), l3 = new Date(e3, t4 - 1, n3 + 1);
        main2.W(xn, o2 = vn(l3), o2), main2.W(Ce, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: o2}));
      }, function() {
        s2 < d2 ? (main2.W(Ce, s2 += 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 > 1 ? (main2.W(Ce, s2 -= 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 = main2._(this.value), Ce.set(s2);
      }, function() {
        o2 = this.value, xn.set(o2);
      }, () => {
        main2.W(Ce, s2 = 1, s2), i2("./", {...c2, nowPage: s2, dateString: o2});
      }];
    }
    class Pn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ln, jn, main2.s, {maxPage: 0});
      }
    }
    function In(e2) {
      return Array.isArray ? Array.isArray(e2) : Dn(e2) === "[object Array]";
    }
    function Tn(e2) {
      return typeof e2 == "string";
    }
    function An(e2) {
      return typeof e2 == "number";
    }
    function Bn(e2) {
      return e2 === true || e2 === false || function(e3) {
        return En(e3) && e3 !== null;
      }(e2) && Dn(e2) == "[object Boolean]";
    }
    function En(e2) {
      return typeof e2 == "object";
    }
    function zn(e2) {
      return e2 != null;
    }
    function Nn(e2) {
      return !e2.trim().length;
    }
    function Dn(e2) {
      return e2 == null ? e2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e2);
    }
    const Wn = Object.prototype.hasOwnProperty;
    class Rn {
      constructor(e2) {
        this._keys = [], this._keyMap = {};
        let t3 = 0;
        e2.forEach((e3) => {
          let n2 = Fn(e3);
          t3 += n2.weight, this._keys.push(n2), this._keyMap[n2.id] = n2, t3 += n2.weight;
        }), this._keys.forEach((e3) => {
          e3.weight /= t3;
        });
      }
      get(e2) {
        return this._keyMap[e2];
      }
      keys() {
        return this._keys;
      }
      toJSON() {
        return JSON.stringify(this._keys);
      }
    }
    function Fn(e2) {
      let t3 = null, n2 = null, r2 = null, s2 = 1;
      if (Tn(e2) || In(e2))
        r2 = e2, t3 = Jn(e2), n2 = Vn(e2);
      else {
        if (!Wn.call(e2, "name"))
          throw new Error(((e3) => `Missing ${e3} property in key`)("name"));
        const o2 = e2.name;
        if (r2 = o2, Wn.call(e2, "weight") && (s2 = e2.weight, s2 <= 0))
          throw new Error(((e3) => `Property 'weight' in key '${e3}' must be a positive integer`)(o2));
        t3 = Jn(o2), n2 = Vn(o2);
      }
      return {path: t3, id: n2, weight: s2, src: r2};
    }
    function Jn(e2) {
      return In(e2) ? e2 : e2.split(".");
    }
    function Vn(e2) {
      return In(e2) ? e2.join(".") : e2;
    }
    var qn = {isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: (e2, t3) => e2.score === t3.score ? e2.idx < t3.idx ? -1 : 1 : e2.score < t3.score ? -1 : 1, includeMatches: false, findAllMatches: false, minMatchCharLength: 1, location: 0, threshold: 0.6, distance: 100, ...{useExtendedSearch: false, getFn: function(e2, t3) {
      let n2 = [], r2 = false;
      const s2 = (e3, t4, o2) => {
        if (zn(e3))
          if (t4[o2]) {
            const i2 = e3[t4[o2]];
            if (!zn(i2))
              return;
            if (o2 === t4.length - 1 && (Tn(i2) || An(i2) || Bn(i2)))
              n2.push(function(e4) {
                return e4 == null ? "" : function(e5) {
                  if (typeof e5 == "string")
                    return e5;
                  let t5 = e5 + "";
                  return t5 == "0" && 1 / e5 == -1 / 0 ? "-0" : t5;
                }(e4);
              }(i2));
            else if (In(i2)) {
              r2 = true;
              for (let e4 = 0, n3 = i2.length; e4 < n3; e4 += 1)
                s2(i2[e4], t4, o2 + 1);
            } else
              t4.length && s2(i2, t4, o2 + 1);
          } else
            n2.push(e3);
      };
      return s2(e2, Tn(t3) ? t3.split(".") : t3, 0), r2 ? n2 : n2[0];
    }, ignoreLocation: false, ignoreFieldNorm: false}};
    const Hn = /[^ ]+/g;
    class Kn {
      constructor({getFn: e2 = qn.getFn} = {}) {
        this.norm = function(e3 = 3) {
          const t3 = new Map(), n2 = Math.pow(10, e3);
          return {get(e4) {
            const r2 = e4.match(Hn).length;
            if (t3.has(r2))
              return t3.get(r2);
            const s2 = 1 / Math.sqrt(r2), o2 = parseFloat(Math.round(s2 * n2) / n2);
            return t3.set(r2, o2), o2;
          }, clear() {
            t3.clear();
          }};
        }(3), this.getFn = e2, this.isCreated = false, this.setIndexRecords();
      }
      setSources(e2 = []) {
        this.docs = e2;
      }
      setIndexRecords(e2 = []) {
        this.records = e2;
      }
      setKeys(e2 = []) {
        this.keys = e2, this._keysMap = {}, e2.forEach((e3, t3) => {
          this._keysMap[e3.id] = t3;
        });
      }
      create() {
        !this.isCreated && this.docs.length && (this.isCreated = true, Tn(this.docs[0]) ? this.docs.forEach((e2, t3) => {
          this._addString(e2, t3);
        }) : this.docs.forEach((e2, t3) => {
          this._addObject(e2, t3);
        }), this.norm.clear());
      }
      add(e2) {
        const t3 = this.size();
        Tn(e2) ? this._addString(e2, t3) : this._addObject(e2, t3);
      }
      removeAt(e2) {
        this.records.splice(e2, 1);
        for (let t3 = e2, n2 = this.size(); t3 < n2; t3 += 1)
          this.records[t3].i -= 1;
      }
      getValueForItemAtKeyId(e2, t3) {
        return e2[this._keysMap[t3]];
      }
      size() {
        return this.records.length;
      }
      _addString(e2, t3) {
        if (!zn(e2) || Nn(e2))
          return;
        let n2 = {v: e2, i: t3, n: this.norm.get(e2)};
        this.records.push(n2);
      }
      _addObject(e2, t3) {
        let n2 = {i: t3, $: {}};
        this.keys.forEach((t4, r2) => {
          let s2 = this.getFn(e2, t4.path);
          if (zn(s2)) {
            if (In(s2)) {
              let e3 = [];
              const t5 = [{nestedArrIndex: -1, value: s2}];
              for (; t5.length; ) {
                const {nestedArrIndex: n3, value: r3} = t5.pop();
                if (zn(r3))
                  if (Tn(r3) && !Nn(r3)) {
                    let t6 = {v: r3, i: n3, n: this.norm.get(r3)};
                    e3.push(t6);
                  } else
                    In(r3) && r3.forEach((e4, n4) => {
                      t5.push({nestedArrIndex: n4, value: e4});
                    });
              }
              n2.$[r2] = e3;
            } else if (!Nn(s2)) {
              let e3 = {v: s2, n: this.norm.get(s2)};
              n2.$[r2] = e3;
            }
          }
        }), this.records.push(n2);
      }
      toJSON() {
        return {keys: this.keys, records: this.records};
      }
    }
    function Un(e2, t3, {getFn: n2 = qn.getFn} = {}) {
      const r2 = new Kn({getFn: n2});
      return r2.setKeys(e2.map(Fn)), r2.setSources(t3), r2.create(), r2;
    }
    function Yn(e2, {errors: t3 = 0, currentLocation: n2 = 0, expectedLocation: r2 = 0, distance: s2 = qn.distance, ignoreLocation: o2 = qn.ignoreLocation} = {}) {
      const i2 = t3 / e2.length;
      if (o2)
        return i2;
      const c2 = Math.abs(r2 - n2);
      return s2 ? i2 + c2 / s2 : c2 ? 1 : i2;
    }
    function Zn(e2, t3, n2, {location: r2 = qn.location, distance: s2 = qn.distance, threshold: o2 = qn.threshold, findAllMatches: i2 = qn.findAllMatches, minMatchCharLength: c2 = qn.minMatchCharLength, includeMatches: l2 = qn.includeMatches, ignoreLocation: a3 = qn.ignoreLocation} = {}) {
      if (t3.length > 32)
        throw new Error(`Pattern length exceeds max of ${32}.`);
      const u2 = t3.length, d2 = e2.length, f2 = Math.max(0, Math.min(r2, d2));
      let g2 = o2, h2 = f2;
      const p2 = c2 > 1 || l2, m2 = p2 ? Array(d2) : [];
      let $2;
      for (; ($2 = e2.indexOf(t3, h2)) > -1; ) {
        let e3 = Yn(t3, {currentLocation: $2, expectedLocation: f2, distance: s2, ignoreLocation: a3});
        if (g2 = Math.min(e3, g2), h2 = $2 + u2, p2) {
          let e4 = 0;
          for (; e4 < u2; )
            m2[$2 + e4] = 1, e4 += 1;
        }
      }
      h2 = -1;
      let y2 = [], b2 = 1, w2 = u2 + d2;
      const x2 = 1 << u2 - 1;
      for (let r3 = 0; r3 < u2; r3 += 1) {
        let o3 = 0, c3 = w2;
        for (; o3 < c3; ) {
          Yn(t3, {errors: r3, currentLocation: f2 + c3, expectedLocation: f2, distance: s2, ignoreLocation: a3}) <= g2 ? o3 = c3 : w2 = c3, c3 = Math.floor((w2 - o3) / 2 + o3);
        }
        w2 = c3;
        let l3 = Math.max(1, f2 - c3 + 1), $3 = i2 ? d2 : Math.min(f2 + c3, d2) + u2, v3 = Array($3 + 2);
        v3[$3 + 1] = (1 << r3) - 1;
        for (let o4 = $3; o4 >= l3; o4 -= 1) {
          let i3 = o4 - 1, c4 = n2[e2.charAt(i3)];
          if (p2 && (m2[i3] = +!!c4), v3[o4] = (v3[o4 + 1] << 1 | 1) & c4, r3 && (v3[o4] |= (y2[o4 + 1] | y2[o4]) << 1 | 1 | y2[o4 + 1]), v3[o4] & x2 && (b2 = Yn(t3, {errors: r3, currentLocation: i3, expectedLocation: f2, distance: s2, ignoreLocation: a3}), b2 <= g2)) {
            if (g2 = b2, h2 = i3, h2 <= f2)
              break;
            l3 = Math.max(1, 2 * f2 - h2);
          }
        }
        if (Yn(t3, {errors: r3 + 1, currentLocation: f2, expectedLocation: f2, distance: s2, ignoreLocation: a3}) > g2)
          break;
        y2 = v3;
      }
      const v2 = {isMatch: h2 >= 0, score: Math.max(1e-3, b2)};
      if (p2) {
        const e3 = function(e4 = [], t4 = qn.minMatchCharLength) {
          let n3 = [], r3 = -1, s3 = -1, o3 = 0;
          for (let i3 = e4.length; o3 < i3; o3 += 1) {
            let i4 = e4[o3];
            i4 && r3 === -1 ? r3 = o3 : i4 || r3 === -1 || (s3 = o3 - 1, s3 - r3 + 1 >= t4 && n3.push([r3, s3]), r3 = -1);
          }
          return e4[o3 - 1] && o3 - r3 >= t4 && n3.push([r3, o3 - 1]), n3;
        }(m2, c2);
        e3.length ? l2 && (v2.indices = e3) : v2.isMatch = false;
      }
      return v2;
    }
    function Qn(e2) {
      let t3 = {};
      for (let n2 = 0, r2 = e2.length; n2 < r2; n2 += 1) {
        const s2 = e2.charAt(n2);
        t3[s2] = (t3[s2] || 0) | 1 << r2 - n2 - 1;
      }
      return t3;
    }
    class Xn {
      constructor(e2, {location: t3 = qn.location, threshold: n2 = qn.threshold, distance: r2 = qn.distance, includeMatches: s2 = qn.includeMatches, findAllMatches: o2 = qn.findAllMatches, minMatchCharLength: i2 = qn.minMatchCharLength, isCaseSensitive: c2 = qn.isCaseSensitive, ignoreLocation: l2 = qn.ignoreLocation} = {}) {
        if (this.options = {location: t3, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: o2, minMatchCharLength: i2, isCaseSensitive: c2, ignoreLocation: l2}, this.pattern = c2 ? e2 : e2.toLowerCase(), this.chunks = [], !this.pattern.length)
          return;
        const a3 = (e3, t4) => {
          this.chunks.push({pattern: e3, alphabet: Qn(e3), startIndex: t4});
        }, u2 = this.pattern.length;
        if (u2 > 32) {
          let e3 = 0;
          const t4 = u2 % 32, n3 = u2 - t4;
          for (; e3 < n3; )
            a3(this.pattern.substr(e3, 32), e3), e3 += 32;
          if (t4) {
            const e4 = u2 - 32;
            a3(this.pattern.substr(e4), e4);
          }
        } else
          a3(this.pattern, 0);
      }
      searchIn(e2) {
        const {isCaseSensitive: t3, includeMatches: n2} = this.options;
        if (t3 || (e2 = e2.toLowerCase()), this.pattern === e2) {
          let t4 = {isMatch: true, score: 0};
          return n2 && (t4.indices = [[0, e2.length - 1]]), t4;
        }
        const {location: r2, distance: s2, threshold: o2, findAllMatches: i2, minMatchCharLength: c2, ignoreLocation: l2} = this.options;
        let a3 = [], u2 = 0, d2 = false;
        this.chunks.forEach(({pattern: t4, alphabet: f3, startIndex: g2}) => {
          const {isMatch: h2, score: p2, indices: m2} = Zn(e2, t4, f3, {location: r2 + g2, distance: s2, threshold: o2, findAllMatches: i2, minMatchCharLength: c2, includeMatches: n2, ignoreLocation: l2});
          h2 && (d2 = true), u2 += p2, h2 && m2 && (a3 = [...a3, ...m2]);
        });
        let f2 = {isMatch: d2, score: d2 ? u2 / this.chunks.length : 1};
        return d2 && n2 && (f2.indices = a3), f2;
      }
    }
    class Gn {
      constructor(e2) {
        this.pattern = e2;
      }
      static isMultiMatch(e2) {
        return er(e2, this.multiRegex);
      }
      static isSingleMatch(e2) {
        return er(e2, this.singleRegex);
      }
      search() {
      }
    }
    function er(e2, t3) {
      const n2 = e2.match(t3);
      return n2 ? n2[1] : null;
    }
    class tr extends Gn {
      constructor(e2, {location: t3 = qn.location, threshold: n2 = qn.threshold, distance: r2 = qn.distance, includeMatches: s2 = qn.includeMatches, findAllMatches: o2 = qn.findAllMatches, minMatchCharLength: i2 = qn.minMatchCharLength, isCaseSensitive: c2 = qn.isCaseSensitive, ignoreLocation: l2 = qn.ignoreLocation} = {}) {
        super(e2), this._bitapSearch = new Xn(e2, {location: t3, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: o2, minMatchCharLength: i2, isCaseSensitive: c2, ignoreLocation: l2});
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
      search(e2) {
        return this._bitapSearch.searchIn(e2);
      }
    }
    class nr extends Gn {
      constructor(e2) {
        super(e2);
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
      search(e2) {
        let t3, n2 = 0;
        const r2 = [], s2 = this.pattern.length;
        for (; (t3 = e2.indexOf(this.pattern, n2)) > -1; )
          n2 = t3 + s2, r2.push([t3, n2 - 1]);
        const o2 = !!r2.length;
        return {isMatch: o2, score: o2 ? 0 : 1, indices: r2};
      }
    }
    const rr = [class extends Gn {
      constructor(e2) {
        super(e2);
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
      search(e2) {
        const t3 = e2 === this.pattern;
        return {isMatch: t3, score: t3 ? 0 : 1, indices: [0, this.pattern.length - 1]};
      }
    }, nr, class extends Gn {
      constructor(e2) {
        super(e2);
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
      search(e2) {
        const t3 = e2.startsWith(this.pattern);
        return {isMatch: t3, score: t3 ? 0 : 1, indices: [0, this.pattern.length - 1]};
      }
    }, class extends Gn {
      constructor(e2) {
        super(e2);
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
      search(e2) {
        const t3 = !e2.startsWith(this.pattern);
        return {isMatch: t3, score: t3 ? 0 : 1, indices: [0, e2.length - 1]};
      }
    }, class extends Gn {
      constructor(e2) {
        super(e2);
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
      search(e2) {
        const t3 = !e2.endsWith(this.pattern);
        return {isMatch: t3, score: t3 ? 0 : 1, indices: [0, e2.length - 1]};
      }
    }, class extends Gn {
      constructor(e2) {
        super(e2);
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
      search(e2) {
        const t3 = e2.endsWith(this.pattern);
        return {isMatch: t3, score: t3 ? 0 : 1, indices: [e2.length - this.pattern.length, e2.length - 1]};
      }
    }, class extends Gn {
      constructor(e2) {
        super(e2);
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
      search(e2) {
        const t3 = e2.indexOf(this.pattern) === -1;
        return {isMatch: t3, score: t3 ? 0 : 1, indices: [0, e2.length - 1]};
      }
    }, tr];
    const sr = rr.length;
    const or = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    const ir = new Set([tr.type, nr.type]);
    class cr {
      constructor(e2, {isCaseSensitive: t3 = qn.isCaseSensitive, includeMatches: n2 = qn.includeMatches, minMatchCharLength: r2 = qn.minMatchCharLength, ignoreLocation: s2 = qn.ignoreLocation, findAllMatches: o2 = qn.findAllMatches, location: i2 = qn.location, threshold: c2 = qn.threshold, distance: l2 = qn.distance} = {}) {
        this.query = null, this.options = {isCaseSensitive: t3, includeMatches: n2, minMatchCharLength: r2, findAllMatches: o2, ignoreLocation: s2, location: i2, threshold: c2, distance: l2}, this.pattern = t3 ? e2 : e2.toLowerCase(), this.query = function(e3, t4 = {}) {
          return e3.split("|").map((e4) => {
            let n3 = e4.trim().split(or).filter((e5) => e5 && !!e5.trim()), r3 = [];
            for (let e5 = 0, s3 = n3.length; e5 < s3; e5 += 1) {
              const s4 = n3[e5];
              let o3 = false, i3 = -1;
              for (; !o3 && ++i3 < sr; ) {
                const e6 = rr[i3];
                let n4 = e6.isMultiMatch(s4);
                n4 && (r3.push(new e6(n4, t4)), o3 = true);
              }
              if (!o3)
                for (i3 = -1; ++i3 < sr; ) {
                  const e6 = rr[i3];
                  let n4 = e6.isSingleMatch(s4);
                  if (n4) {
                    r3.push(new e6(n4, t4));
                    break;
                  }
                }
            }
            return r3;
          });
        }(this.pattern, this.options);
      }
      static condition(e2, t3) {
        return t3.useExtendedSearch;
      }
      searchIn(e2) {
        const t3 = this.query;
        if (!t3)
          return {isMatch: false, score: 1};
        const {includeMatches: n2, isCaseSensitive: r2} = this.options;
        e2 = r2 ? e2 : e2.toLowerCase();
        let s2 = 0, o2 = [], i2 = 0;
        for (let r3 = 0, c2 = t3.length; r3 < c2; r3 += 1) {
          const c3 = t3[r3];
          o2.length = 0, s2 = 0;
          for (let t4 = 0, r4 = c3.length; t4 < r4; t4 += 1) {
            const r5 = c3[t4], {isMatch: l2, indices: a3, score: u2} = r5.search(e2);
            if (!l2) {
              i2 = 0, s2 = 0, o2.length = 0;
              break;
            }
            if (s2 += 1, i2 += u2, n2) {
              const e3 = r5.constructor.type;
              ir.has(e3) ? o2 = [...o2, ...a3] : o2.push(a3);
            }
          }
          if (s2) {
            let e3 = {isMatch: true, score: i2 / s2};
            return n2 && (e3.indices = o2), e3;
          }
        }
        return {isMatch: false, score: 1};
      }
    }
    const lr = [];
    function ar(e2, t3) {
      for (let n2 = 0, r2 = lr.length; n2 < r2; n2 += 1) {
        let r3 = lr[n2];
        if (r3.condition(e2, t3))
          return new r3(e2, t3);
      }
      return new Xn(e2, t3);
    }
    const ur = "$and";
    const dr = "$or";
    const fr = "$path";
    const gr = "$val";
    const hr = (e2) => !(!e2[ur] && !e2[dr]);
    const pr = (e2) => ({[ur]: Object.keys(e2).map((t3) => ({[t3]: e2[t3]}))});
    function mr(e2, t3, {auto: n2 = true} = {}) {
      const r2 = (e3) => {
        let s2 = Object.keys(e3);
        const o2 = ((e4) => !!e4[fr])(e3);
        if (!o2 && s2.length > 1 && !hr(e3))
          return r2(pr(e3));
        if (((e4) => !In(e4) && En(e4) && !hr(e4))(e3)) {
          const r3 = o2 ? e3[fr] : s2[0], i3 = o2 ? e3[gr] : e3[r3];
          if (!Tn(i3))
            throw new Error(((e4) => `Invalid value for key ${e4}`)(r3));
          const c2 = {keyId: Vn(r3), pattern: i3};
          return n2 && (c2.searcher = ar(i3, t3)), c2;
        }
        let i2 = {children: [], operator: s2[0]};
        return s2.forEach((t4) => {
          const n3 = e3[t4];
          In(n3) && n3.forEach((e4) => {
            i2.children.push(r2(e4));
          });
        }), i2;
      };
      return hr(e2) || (e2 = pr(e2)), r2(e2);
    }
    function $r(e2, t3) {
      const n2 = e2.matches;
      t3.matches = [], zn(n2) && n2.forEach((e3) => {
        if (!zn(e3.indices) || !e3.indices.length)
          return;
        const {indices: n3, value: r2} = e3;
        let s2 = {indices: n3, value: r2};
        e3.key && (s2.key = e3.key.src), e3.idx > -1 && (s2.refIndex = e3.idx), t3.matches.push(s2);
      });
    }
    function yr(e2, t3) {
      t3.score = e2.score;
    }
    class br {
      constructor(e2, t3 = {}, n2) {
        this.options = {...qn, ...t3}, this.options.useExtendedSearch, this._keyStore = new Rn(this.options.keys), this.setCollection(e2, n2);
      }
      setCollection(e2, t3) {
        if (this._docs = e2, t3 && !(t3 instanceof Kn))
          throw new Error("Incorrect 'index' type");
        this._myIndex = t3 || Un(this.options.keys, this._docs, {getFn: this.options.getFn});
      }
      add(e2) {
        zn(e2) && (this._docs.push(e2), this._myIndex.add(e2));
      }
      remove(e2 = () => false) {
        const t3 = [];
        for (let n2 = 0, r2 = this._docs.length; n2 < r2; n2 += 1) {
          const s2 = this._docs[n2];
          e2(s2, n2) && (this.removeAt(n2), n2 -= 1, r2 -= 1, t3.push(s2));
        }
        return t3;
      }
      removeAt(e2) {
        this._docs.splice(e2, 1), this._myIndex.removeAt(e2);
      }
      getIndex() {
        return this._myIndex;
      }
      search(e2, {limit: t3 = -1} = {}) {
        const {includeMatches: n2, includeScore: r2, shouldSort: s2, sortFn: o2, ignoreFieldNorm: i2} = this.options;
        let c2 = Tn(e2) ? Tn(this._docs[0]) ? this._searchStringList(e2) : this._searchObjectList(e2) : this._searchLogical(e2);
        return function(e3, {ignoreFieldNorm: t4 = qn.ignoreFieldNorm}) {
          e3.forEach((e4) => {
            let n3 = 1;
            e4.matches.forEach(({key: e5, norm: r3, score: s3}) => {
              const o3 = e5 ? e5.weight : null;
              n3 *= Math.pow(s3 === 0 && o3 ? Number.EPSILON : s3, (o3 || 1) * (t4 ? 1 : r3));
            }), e4.score = n3;
          });
        }(c2, {ignoreFieldNorm: i2}), s2 && c2.sort(o2), An(t3) && t3 > -1 && (c2 = c2.slice(0, t3)), function(e3, t4, {includeMatches: n3 = qn.includeMatches, includeScore: r3 = qn.includeScore} = {}) {
          const s3 = [];
          return n3 && s3.push($r), r3 && s3.push(yr), e3.map((e4) => {
            const {idx: n4} = e4, r4 = {item: t4[n4], refIndex: n4};
            return s3.length && s3.forEach((t5) => {
              t5(e4, r4);
            }), r4;
          });
        }(c2, this._docs, {includeMatches: n2, includeScore: r2});
      }
      _searchStringList(e2) {
        const t3 = ar(e2, this.options), {records: n2} = this._myIndex, r2 = [];
        return n2.forEach(({v: e3, i: n3, n: s2}) => {
          if (!zn(e3))
            return;
          const {isMatch: o2, score: i2, indices: c2} = t3.searchIn(e3);
          o2 && r2.push({item: e3, idx: n3, matches: [{score: i2, value: e3, norm: s2, indices: c2}]});
        }), r2;
      }
      _searchLogical(e2) {
        const t3 = mr(e2, this.options), n2 = (e3, t4, r3) => {
          if (!e3.children) {
            const {keyId: n3, searcher: s3} = e3, o3 = this._findMatches({key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(t4, n3), searcher: s3});
            return o3 && o3.length ? [{idx: r3, item: t4, matches: o3}] : [];
          }
          switch (e3.operator) {
            case ur: {
              const s3 = [];
              for (let o3 = 0, i2 = e3.children.length; o3 < i2; o3 += 1) {
                const i3 = e3.children[o3], c2 = n2(i3, t4, r3);
                if (!c2.length)
                  return [];
                s3.push(...c2);
              }
              return s3;
            }
            case dr: {
              const s3 = [];
              for (let o3 = 0, i2 = e3.children.length; o3 < i2; o3 += 1) {
                const i3 = e3.children[o3], c2 = n2(i3, t4, r3);
                if (c2.length) {
                  s3.push(...c2);
                  break;
                }
              }
              return s3;
            }
          }
        }, r2 = this._myIndex.records, s2 = {}, o2 = [];
        return r2.forEach(({$: e3, i: r3}) => {
          if (zn(e3)) {
            let i2 = n2(t3, e3, r3);
            i2.length && (s2[r3] || (s2[r3] = {idx: r3, item: e3, matches: []}, o2.push(s2[r3])), i2.forEach(({matches: e4}) => {
              s2[r3].matches.push(...e4);
            }));
          }
        }), o2;
      }
      _searchObjectList(e2) {
        const t3 = ar(e2, this.options), {keys: n2, records: r2} = this._myIndex, s2 = [];
        return r2.forEach(({$: e3, i: r3}) => {
          if (!zn(e3))
            return;
          let o2 = [];
          n2.forEach((n3, r4) => {
            o2.push(...this._findMatches({key: n3, value: e3[r4], searcher: t3}));
          }), o2.length && s2.push({idx: r3, item: e3, matches: o2});
        }), s2;
      }
      _findMatches({key: e2, value: t3, searcher: n2}) {
        if (!zn(t3))
          return [];
        let r2 = [];
        if (In(t3))
          t3.forEach(({v: t4, i: s2, n: o2}) => {
            if (!zn(t4))
              return;
            const {isMatch: i2, score: c2, indices: l2} = n2.searchIn(t4);
            i2 && r2.push({score: c2, key: e2, value: t4, idx: s2, norm: o2, indices: l2});
          });
        else {
          const {v: s2, n: o2} = t3, {isMatch: i2, score: c2, indices: l2} = n2.searchIn(s2);
          i2 && r2.push({score: c2, key: e2, value: s2, norm: o2, indices: l2});
        }
        return r2;
      }
    }
    br.version = "6.4.6", br.createIndex = Un, br.parseIndex = function(e2, {getFn: t3 = qn.getFn} = {}) {
      const {keys: n2, records: r2} = e2, s2 = new Kn({getFn: t3});
      return s2.setKeys(n2), s2.setIndexRecords(r2), s2;
    }, br.config = qn, br.parseQuery = mr, function(...e2) {
      lr.push(...e2);
    }(cr);
    const wr = {useExtendedSearch: true, keys: ["subject", "preview", "body"]};
    let xr = main2.G(Me, (e2) => new br(e2, wr));
    let vr = main2.F("");
    let _r = main2.G([Me, xr, vr], ([e2, t3, n2]) => n2 ? t3.search("'" + n2).map((e3) => e3.item) : e2);
    let Mr = main2.G([_r, pe, xe, ve, vr, xn], ([e2, t3, n2, r2, s2, o2]) => {
      if (n2) {
        let s3 = t3.get(n2);
        r2.has(s3) || r2.set(s3, new Set());
        let o3 = r2.get(s3), i3 = (e3) => o3.has(e3.id);
        return e2.filter(i3);
      }
      const i2 = (e3) => true, c2 = s2 && i2 || o2 && ((e3) => e3.time.split(" ")[0].replace(/\//g, "-") == o2) || i2;
      return e2.filter(c2);
    });
    const kr = {id: "", member: "", time: "", subject: "", preview: ""};
    let Sr = main2.G([Mr, Ce], ([e2, t3]) => function(n2) {
      const r2 = (t3 - 1) * n2, s2 = e2.slice(r2, r2 + n2);
      return s2.length < n2 ? s2.concat(Array(n2 - s2.length).fill(kr)) : s2;
    });
    function Or(e2) {
      let t3, n2, r2, s2, d2, f2, g2, h2, p2;
      return {c() {
        t3 = main2.e("span"), n2 = main2.t(e2[0]), r2 = main2.t("\uAC74"), d2 = main2.a(), f2 = main2.e("input"), main2.b(t3, "id", "MailCounter"), main2.b(t3, "class", s2 = "m-2 rounded p-0.5\r\n" + (e2[2] ? "bg-gray-800 text-gray-300" : "bg-red-100")), main2.b(f2, "id", "SearchInput"), main2.b(f2, "class", g2 = "border-2 " + e2[3] + " rounded pl-1 " + e2[4]), main2.h(f2, "width", "170px"), main2.b(f2, "type", "text"), main2.b(f2, "placeholder", "\uAC80\uC0C9");
      }, m(s3, o2) {
        main2.c(s3, t3, o2), main2.d(t3, n2), main2.d(t3, r2), main2.c(s3, d2, o2), main2.c(s3, f2, o2), main2.N(f2, e2[1]), h2 || (p2 = main2.A(f2, "input", e2[5]), h2 = true);
      }, p(e3, [r3]) {
        1 & r3 && main2.o(n2, e3[0]), 4 & r3 && s2 !== (s2 = "m-2 rounded p-0.5\r\n" + (e3[2] ? "bg-gray-800 text-gray-300" : "bg-red-100")) && main2.b(t3, "class", s2), 24 & r3 && g2 !== (g2 = "border-2 " + e3[3] + " rounded pl-1 " + e3[4]) && main2.b(f2, "class", g2), 2 & r3 && f2.value !== e3[1] && main2.N(f2, e3[1]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(d2), e3 && main2.f(f2), h2 = false, p2();
      }};
    }
    function Cr(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3;
      main2.g(e2, vr, (e3) => n2(1, r2 = e3)), main2.g(e2, Ce, (e3) => n2(6, s2 = e3)), main2.g(e2, main2.U, (e3) => n2(7, o2 = e3)), main2.g(e2, main2.V, (e3) => n2(8, i2 = e3)), main2.g(e2, ne, (e3) => n2(2, c2 = e3)), main2.g(e2, se, (e3) => n2(3, l2 = e3)), main2.g(e2, re, (e3) => n2(4, a3 = e3));
      let {search_length: u2} = t3;
      return main2.V.subscribe((e3) => {
        r2 != e3.search && main2.W(vr, r2 = e3.search || "", r2);
      }), vr.subscribe((e3) => {
        main2.W(Ce, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, i2), {search: e3}));
      }), e2.$$set = (e3) => {
        "search_length" in e3 && n2(0, u2 = e3.search_length);
      }, [u2, r2, c2, l2, a3, function() {
        r2 = this.value, vr.set(r2);
      }];
    }
    class jr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Cr, Or, main2.s, {search_length: 0});
      }
    }
    function Lr(e2) {
      let t3, n2;
      return t3 = new wt({props: {tag: e2[1].get(e2[0]), canDelete: true, onRemove: e2[2], size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, [n3]) {
        const r2 = {};
        3 & n3 && (r2.tag = e3[1].get(e3[0])), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Pr(e2, t3, n2) {
      let r2, s2, o2, i2, c2;
      main2.g(e2, xe, (e3) => n2(0, r2 = e3)), main2.g(e2, Ce, (e3) => n2(3, s2 = e3)), main2.g(e2, main2.U, (e3) => n2(4, o2 = e3)), main2.g(e2, main2.V, (e3) => n2(5, i2 = e3)), main2.g(e2, pe, (e3) => n2(1, c2 = e3));
      return [r2, c2, () => {
        main2.W(xe, r2 = null, r2), main2.W(Ce, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, i2), {tag: ""}));
      }];
    }
    class Ir extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Pr, Lr, main2.s, {});
      }
    }
    function Tr(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uD0DC\uADF8 \uBD88\uB7EC\uC624\uAE30\u2B07\uFE0F");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Ar(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uD0DC\uADF8 \uC62C\uB9AC\uAE30\u2B06\uFE0F");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Br(e2) {
      let t3, n2, r2, s2, u2;
      return n2 = new Xe({props: {id: "DownloadTagsButton", onClick: e2[1], $$slots: {default: [Tr]}, $$scope: {ctx: e2}}}), s2 = new Xe({props: {id: "UploadTagsButton", onClick: e2[0], $$slots: {default: [Ar]}, $$scope: {ctx: e2}}}), {c() {
        t3 = main2.e("div"), main2.q(n2.$$.fragment), r2 = main2.a(), main2.q(s2.$$.fragment), main2.b(t3, "class", "flex flex-row");
      }, m(e3, o2) {
        main2.c(e3, t3, o2), main2.r(n2, t3, null), main2.d(t3, r2), main2.r(s2, t3, null), u2 = true;
      }, p(e3, [t4]) {
        const r3 = {};
        64 & t4 && (r3.$$scope = {dirty: t4, ctx: e3}), n2.$set(r3);
        const o2 = {};
        64 & t4 && (o2.$$scope = {dirty: t4, ctx: e3}), s2.$set(o2);
      }, i(e3) {
        u2 || (main2.p(n2.$$.fragment, e3), main2.p(s2.$$.fragment, e3), u2 = true);
      }, o(e3) {
        main2.v(n2.$$.fragment, e3), main2.v(s2.$$.fragment, e3), u2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(n2), main2.w(s2);
      }};
    }
    function Er(e2, t3, n2) {
      let r2, s2, o2, i2;
      main2.g(e2, pe, (e3) => n2(2, r2 = e3)), main2.g(e2, me, (e3) => n2(3, s2 = e3)), main2.g(e2, ve, (e3) => n2(4, o2 = e3)), main2.g(e2, xe, (e3) => n2(5, i2 = e3));
      return [() => {
        Ve.AllTagDict.save(r2), Ve.MailTagDict.save(s2, o2);
      }, () => {
        Promise.all([Ve.AllTagDict.get(), Ve.MailTagDict.get()]).then((e3) => {
          main2.W(xe, i2 = null, i2);
          const t4 = new Map([...o2].map((e4) => [e4[0].value, e4[1]])), n3 = e3[0], c2 = new Set(n3.map((e4) => e4.value)), l2 = [...r2].filter(([e4, t5]) => c2.has(e4));
          main2.W(pe, r2 = n3.reduce((e4, t5) => {
            if (e4.has(t5.value)) {
              const n4 = e4.get(t5.value);
              n4.color != t5.color && (n4.color = t5.color, e4.set(n4.value, n4), console.log());
            } else
              e4.set(t5.value, t5);
            return e4;
          }, new Map(l2)), r2), console.log("all_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC");
          const a3 = e3[1];
          let u2 = ge.reduce((e4, n4) => {
            const s3 = r2.get(n4.value), o3 = t4.get(n4.value);
            return e4.set(s3, o3);
          }, new Map());
          const d2 = a3.tag_to_mail_dict.filter((e4) => r2.has(e4[0])).reduce((e4, t5) => {
            const n4 = r2.get(t5[0]), s3 = new Set(t5[1]);
            return e4.set(n4, s3), e4;
          }, u2), f2 = r2.get("\u{1F496}"), g2 = d2.has(f2);
          console.log("\uB370\uC774\uD130 \uC815\uD569\uC131 \uCCB4\uD06C", g2 ? "\uD1B5\uACFC" : "\uC2E4\uD328"), g2 && (main2.W(ve, o2 = d2, o2), main2.W(me, s2 = a3.mail_to_tag_dict.reduce((e4, t5) => {
            const n4 = t5[0], s3 = t5[1].filter((e5) => r2.has(e5)).map((e5) => r2.get(e5));
            return e4.set(n4, new Set(s3)), e4;
          }, new Map()), s2), console.log("mail_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC"));
        });
      }];
    }
    class zr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Er, Br, main2.s, {});
      }
    }
    function Nr(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[14] = t3[n2], r2;
    }
    function Dr(e2) {
      let t3;
      return {c() {
        t3 = main2.e("span"), main2.b(t3, "class", "border-1 rounded bg-white text-white text-lg");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, p: main2.n, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Wr(e2) {
      let t3, n2, r2, s2, g2, x2, v2, M2, k2, S2, O2, C2, j2, L2, I2, T2, B2, E2, z2 = e2[0].subject + "", N2 = (e2[0].preview || "...") + "";
      t3 = new Jt({props: {member: e2[0].member}}), r2 = new Lt({props: {pm: e2[0], float: "left mt-0.5"}}), x2 = new Tt({props: {pm: e2[0]}}), M2 = new _t({props: {time: e2[0].time}});
      let D2 = e2[7] && Rr(), W2 = e2[5](e2[0]), R2 = [];
      for (let t4 = 0; t4 < W2.length; t4 += 1)
        R2[t4] = Fr(Nr(e2, W2, t4));
      const J2 = (e3) => main2.v(R2[e3], 1, 1, () => {
        R2[e3] = null;
      });
      return {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment), s2 = main2.a(), g2 = main2.e("p"), main2.q(x2.$$.fragment), v2 = main2.a(), main2.q(M2.$$.fragment), k2 = main2.a(), D2 && D2.c(), S2 = main2.a();
        for (let e3 = 0; e3 < R2.length; e3 += 1)
          R2[e3].c();
        O2 = main2.a(), C2 = main2.t(z2), j2 = main2.a(), L2 = main2.e("p"), I2 = main2.t(N2), main2.b(g2, "class", "truncate"), main2.b(L2, "class", "ml-1 mt-1 text-sm truncate");
      }, m(o2, i2) {
        main2.r(t3, o2, i2), main2.c(o2, n2, i2), main2.r(r2, o2, i2), main2.c(o2, s2, i2), main2.c(o2, g2, i2), main2.r(x2, g2, null), main2.d(g2, v2), main2.r(M2, g2, null), main2.d(g2, k2), D2 && D2.m(g2, null), main2.d(g2, S2);
        for (let e3 = 0; e3 < R2.length; e3 += 1)
          R2[e3].m(g2, null);
        main2.d(g2, O2), main2.d(g2, C2), main2.c(o2, j2, i2), main2.c(o2, L2, i2), main2.d(L2, I2), T2 = true, B2 || (E2 = [main2.A(g2, "click", function() {
          main2.H(e2[4]) && e2[4].apply(this, arguments);
        }), main2.A(L2, "click", function() {
          main2.H(e2[4]) && e2[4].apply(this, arguments);
        })], B2 = true);
      }, p(n3, s3) {
        e2 = n3;
        const o2 = {};
        1 & s3 && (o2.member = e2[0].member), t3.$set(o2);
        const i2 = {};
        1 & s3 && (i2.pm = e2[0]), r2.$set(i2);
        const c2 = {};
        1 & s3 && (c2.pm = e2[0]), x2.$set(c2);
        const l2 = {};
        if (1 & s3 && (l2.time = e2[0].time), M2.$set(l2), e2[7] ? D2 || (D2 = Rr(), D2.c(), D2.m(g2, S2)) : D2 && (D2.d(1), D2 = null), 33 & s3) {
          let t4;
          for (W2 = e2[5](e2[0]), t4 = 0; t4 < W2.length; t4 += 1) {
            const n4 = Nr(e2, W2, t4);
            R2[t4] ? (R2[t4].p(n4, s3), main2.p(R2[t4], 1)) : (R2[t4] = Fr(n4), R2[t4].c(), main2.p(R2[t4], 1), R2[t4].m(g2, O2));
          }
          for (main2.D(), t4 = W2.length; t4 < R2.length; t4 += 1)
            J2(t4);
          main2.x();
        }
        (!T2 || 1 & s3) && z2 !== (z2 = e2[0].subject + "") && main2.o(C2, z2), (!T2 || 1 & s3) && N2 !== (N2 = (e2[0].preview || "...") + "") && main2.o(I2, N2);
      }, i(e3) {
        if (!T2) {
          main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), main2.p(x2.$$.fragment, e3), main2.p(M2.$$.fragment, e3);
          for (let e4 = 0; e4 < W2.length; e4 += 1)
            main2.p(R2[e4]);
          T2 = true;
        }
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), main2.v(x2.$$.fragment, e3), main2.v(M2.$$.fragment, e3), R2 = R2.filter(Boolean);
        for (let e4 = 0; e4 < R2.length; e4 += 1)
          main2.v(R2[e4]);
        T2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(r2, e3), e3 && main2.f(s2), e3 && main2.f(g2), main2.w(x2), main2.w(M2), D2 && D2.d(), main2.y(R2, e3), e3 && main2.f(j2), e3 && main2.f(L2), B2 = false, main2.B(E2);
      }};
    }
    function Rr(e2) {
      let t3;
      return {c() {
        t3 = main2.e("br");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Fr(e2) {
      let t3, n2;
      return t3 = new wt({props: {tag: e2[14]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        33 & n3 && (r2.tag = e3[14]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Jr(e2) {
      let t3, n2, r2, s2, i2;
      const c2 = [Wr, Dr], a3 = [];
      function u2(e3, t4) {
        return e3[0].member ? 0 : 1;
      }
      return n2 = u2(e2), r2 = a3[n2] = c2[n2](e2), {c() {
        t3 = main2.e("div"), r2.c();
      }, m(e3, r3) {
        main2.c(e3, t3, r3), a3[n2].m(t3, null), i2 = true;
      }, p(e3, s3) {
        let o2 = n2;
        n2 = u2(e3), n2 === o2 ? a3[n2].p(e3, s3) : (main2.D(), main2.v(a3[o2], 1, 1, () => {
          a3[o2] = null;
        }), main2.x(), r2 = a3[n2], r2 ? r2.p(e3, s3) : (r2 = a3[n2] = c2[n2](e3), r2.c()), main2.p(r2, 1), r2.m(t3, null));
      }, i(e3) {
        i2 || (main2.p(r2), s2 || main2.j(() => {
          s2 = main2.X(t3, a, {duration: 500}), s2.start();
        }), i2 = true);
      }, o(e3) {
        main2.v(r2), i2 = false;
      }, d(e3) {
        e3 && main2.f(t3), a3[n2].d();
      }};
    }
    function Vr(e2) {
      let t3, n2, r2 = e2[0], o2 = Hr(e2);
      return {c() {
        o2.c(), t3 = main2.I();
      }, m(e3, r3) {
        o2.m(e3, r3), main2.c(e3, t3, r3), n2 = true;
      }, p(e3, n3) {
        1 & n3 && main2.s(r2, r2 = e3[0]) ? (main2.D(), main2.v(o2, 1, 1, main2.n), main2.x(), o2 = Hr(e3), o2.c(), main2.p(o2), o2.m(t3.parentNode, t3)) : o2.p(e3, n3);
      }, i(e3) {
        n2 || (main2.p(o2), n2 = true);
      }, o(e3) {
        main2.v(o2), n2 = false;
      }, d(e3) {
        e3 && main2.f(t3), o2.d(e3);
      }};
    }
    function qr(e2) {
      let t3, n2, r2, s2, c2, u2, d2, g2, h2 = e2[0].subject + "", m2 = " " + e2[0].preview;
      return t3 = new Tt({props: {pm: e2[0], size: ""}}), r2 = new _t({props: {time: e2[0].time, size: ""}}), {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment), s2 = main2.a(), c2 = main2.e("strong"), u2 = main2.t(h2), d2 = main2.t(m2);
      }, m(e3, o2) {
        main2.r(t3, e3, o2), main2.c(e3, n2, o2), main2.r(r2, e3, o2), main2.c(e3, s2, o2), main2.c(e3, c2, o2), main2.d(c2, u2), main2.c(e3, d2, o2), g2 = true;
      }, p(e3, n3) {
        const s3 = {};
        1 & n3 && (s3.pm = e3[0]), t3.$set(s3);
        const o2 = {};
        1 & n3 && (o2.time = e3[0].time), r2.$set(o2), (!g2 || 1 & n3) && h2 !== (h2 = e3[0].subject + "") && main2.o(u2, h2), (!g2 || 1 & n3) && m2 !== (m2 = " " + e3[0].preview) && main2.o(d2, m2);
      }, i(e3) {
        g2 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), g2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), g2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(r2, e3), e3 && main2.f(s2), e3 && main2.f(c2), e3 && main2.f(d2);
      }};
    }
    function Hr(e2) {
      let t3, n2, r2, s2, i2 = e2[0].member && qr(e2);
      return {c() {
        t3 = main2.e("li"), i2 && i2.c(), main2.b(t3, "class", n2 = e2[6] + " border-b-2 rounded w-full text-gray-300 truncate "), main2.h(t3, "font-size", "10px"), main2.h(t3, "height", "20px");
      }, m(e3, n3) {
        main2.c(e3, t3, n3), i2 && i2.m(t3, null), s2 = true;
      }, p(e3, r3) {
        e3[0].member ? i2 ? (i2.p(e3, r3), 1 & r3 && main2.p(i2, 1)) : (i2 = qr(e3), i2.c(), main2.p(i2, 1), i2.m(t3, null)) : i2 && (main2.D(), main2.v(i2, 1, 1, () => {
          i2 = null;
        }), main2.x()), (!s2 || 64 & r3 && n2 !== (n2 = e3[6] + " border-b-2 rounded w-full text-gray-300 truncate ")) && main2.b(t3, "class", n2);
      }, i(e3) {
        s2 || (main2.p(i2), r2 || main2.j(() => {
          r2 = main2.X(t3, a, {duration: 300}), r2.start();
        }), s2 = true);
      }, o(e3) {
        main2.v(i2), s2 = false;
      }, d(e3) {
        e3 && main2.f(t3), i2 && i2.d();
      }};
    }
    function Kr(e2) {
      let t3, n2, r2, a3, u2, d2, y2 = e2[0].id, b2 = Jr(e2), w2 = e2[1] && Vr(e2);
      return {c() {
        t3 = main2.e("li"), b2.c(), a3 = main2.a(), w2 && w2.c(), u2 = main2.I(), main2.b(t3, "id", n2 = "MailItem-" + e2[2]), main2.h(t3, "height", e2[3] ? "62px" : "84px"), main2.b(t3, "class", r2 = "border-b-2 rounded p-1 w-full leading-relaxed " + e2[6]), main2.Y(t3, "hidden", e2[1]);
      }, m(e3, n3) {
        main2.c(e3, t3, n3), b2.m(t3, null), main2.c(e3, a3, n3), w2 && w2.m(e3, n3), main2.c(e3, u2, n3), d2 = true;
      }, p(e3, [o2]) {
        1 & o2 && main2.s(y2, y2 = e3[0].id) ? (main2.D(), main2.v(b2, 1, 1, main2.n), main2.x(), b2 = Jr(e3), b2.c(), main2.p(b2), b2.m(t3, null)) : b2.p(e3, o2), (!d2 || 4 & o2 && n2 !== (n2 = "MailItem-" + e3[2])) && main2.b(t3, "id", n2), (!d2 || 8 & o2) && main2.h(t3, "height", e3[3] ? "62px" : "84px"), (!d2 || 64 & o2 && r2 !== (r2 = "border-b-2 rounded p-1 w-full leading-relaxed " + e3[6])) && main2.b(t3, "class", r2), 66 & o2 && main2.Y(t3, "hidden", e3[1]), e3[1] ? w2 ? (w2.p(e3, o2), 2 & o2 && main2.p(w2, 1)) : (w2 = Vr(e3), w2.c(), main2.p(w2, 1), w2.m(u2.parentNode, u2)) : w2 && (main2.D(), main2.v(w2, 1, 1, () => {
          w2 = null;
        }), main2.x());
      }, i(e3) {
        d2 || (main2.p(b2), main2.p(w2), d2 = true);
      }, o(e3) {
        main2.v(b2), main2.v(w2), d2 = false;
      }, d(e3) {
        e3 && main2.f(t3), b2.d(e3), e3 && main2.f(a3), w2 && w2.d(e3), e3 && main2.f(u2);
      }};
    }
    function Ur(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, f2, g2;
      main2.g(e2, ke, (e3) => n2(8, o2 = e3)), main2.g(e2, je, (e3) => n2(9, i2 = e3)), main2.g(e2, Pe, (e3) => n2(3, c2 = e3)), main2.g(e2, main2.U, (e3) => n2(10, l2 = e3)), main2.g(e2, main2.V, (e3) => n2(11, a3 = e3)), main2.g(e2, me, (e3) => n2(12, u2 = e3)), main2.g(e2, pe, (e3) => n2(13, d2 = e3)), main2.g(e2, se, (e3) => n2(6, f2 = e3)), main2.g(e2, Ie, (e3) => n2(7, g2 = e3));
      let {pm: h2} = t3, {hidden: p2} = t3, {index: m2} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(0, h2 = e3.pm), "hidden" in e3 && n2(1, p2 = e3.hidden), "index" in e3 && n2(2, m2 = e3.index);
      }, e2.$$.update = () => {
        3849 & e2.$$.dirty && n2(4, r2 = () => {
          h2 && (main2.W(ke, o2 = h2, o2), main2.W(je, i2 = c2 || false, i2), l2("./", Object.assign(Object.assign({}, a3), {showList: i2, now_pm: o2.id})));
        }), 12288 & e2.$$.dirty && n2(5, s2 = (e3) => u2.has(e3.id) ? Array.from(u2.get(e3.id)).map((e4) => d2.get(e4.value)) : []);
      }, [h2, p2, m2, c2, r2, s2, f2, g2, o2, i2, l2, a3, u2, d2];
    }
    class Yr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ur, Kr, main2.s, {pm: 0, hidden: 1, index: 2});
      }
    }
    function Zr(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[5] = t3[n2], r2[7] = n2, r2;
    }
    function Qr(e2) {
      let t3, n2;
      return t3 = new Yr({props: {index: e2[7], pm: e2[5], hidden: e2[3] && (e2[1] || e2[4]) && e2[7] > 0}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = e3[5]), 26 & n3 && (r2.hidden = e3[3] && (e3[1] || e3[4]) && e3[7] > 0), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Xr(e2) {
      let t3, n2, r2, s2 = e2[0], i2 = [];
      for (let t4 = 0; t4 < s2.length; t4 += 1)
        i2[t4] = Qr(Zr(e2, s2, t4));
      const a3 = (e3) => main2.v(i2[e3], 1, 1, () => {
        i2[e3] = null;
      });
      return {c() {
        t3 = main2.e("ul");
        for (let e3 = 0; e3 < i2.length; e3 += 1)
          i2[e3].c();
        main2.b(t3, "id", "MailItemList"), main2.h(t3, "max-width", "728px"), main2.b(t3, "class", n2 = e2[2] + " rounded shadow-xl m-1");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
        for (let e4 = 0; e4 < i2.length; e4 += 1)
          i2[e4].m(t3, null);
        r2 = true;
      }, p(e3, [o2]) {
        if (27 & o2) {
          let n3;
          for (s2 = e3[0], n3 = 0; n3 < s2.length; n3 += 1) {
            const r3 = Zr(e3, s2, n3);
            i2[n3] ? (i2[n3].p(r3, o2), main2.p(i2[n3], 1)) : (i2[n3] = Qr(r3), i2[n3].c(), main2.p(i2[n3], 1), i2[n3].m(t3, null));
          }
          for (main2.D(), n3 = s2.length; n3 < i2.length; n3 += 1)
            a3(n3);
          main2.x();
        }
        (!r2 || 4 & o2 && n2 !== (n2 = e3[2] + " rounded shadow-xl m-1")) && main2.b(t3, "class", n2);
      }, i(e3) {
        if (!r2) {
          for (let e4 = 0; e4 < s2.length; e4 += 1)
            main2.p(i2[e4]);
          r2 = true;
        }
      }, o(e3) {
        i2 = i2.filter(Boolean);
        for (let e4 = 0; e4 < i2.length; e4 += 1)
          main2.v(i2[e4]);
        r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(i2, e3);
      }};
    }
    function Gr(e2, t3, n2) {
      let r2, s2, o2;
      main2.g(e2, re, (e3) => n2(2, r2 = e3)), main2.g(e2, Ie, (e3) => n2(3, s2 = e3)), main2.g(e2, Le, (e3) => n2(4, o2 = e3));
      let {mail_list: i2} = t3, {isTyping: c2} = t3;
      return e2.$$set = (e3) => {
        "mail_list" in e3 && n2(0, i2 = e3.mail_list), "isTyping" in e3 && n2(1, c2 = e3.isTyping);
      }, [i2, c2, r2, s2, o2];
    }
    class es extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Gr, Xr, main2.s, {mail_list: 0, isTyping: 1});
      }
    }
    function ts(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[12] = t3[n2], r2;
    }
    function ns(e2) {
      let t3, n2;
      return {c() {
        t3 = main2.e("img"), main2.b(t3, "class", "ml-5 mt-2 w-10/12"), main2.b(t3, "alt", "no mail"), t3.src !== (n2 = "./img/izone-logo-card.png") && main2.b(t3, "src", "./img/izone-logo-card.png");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, p: main2.n, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function rs(e2) {
      let t3, n2, r2, s2, g2, x2, v2, M2, k2, S2, O2, C2, j2, L2, I2, T2, B2, E2 = e2[0].subject + "", z2 = e2[0].preview + "";
      t3 = new Lt({props: {pm: e2[0]}}), r2 = new Jt({props: {member: e2[0].member}}), M2 = new Tt({props: {pm: e2[0]}}), S2 = new _t({props: {time: e2[0].time}});
      let N2 = e2[2](e2[0]), D2 = [];
      for (let t4 = 0; t4 < N2.length; t4 += 1)
        D2[t4] = ss(ts(e2, N2, t4));
      const W2 = (e3) => main2.v(D2[e3], 1, 1, () => {
        D2[e3] = null;
      });
      return {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment), s2 = main2.a(), g2 = main2.e("h4"), x2 = main2.t(E2), v2 = main2.a(), main2.q(M2.$$.fragment), k2 = main2.a(), main2.q(S2.$$.fragment), O2 = main2.a();
        for (let e3 = 0; e3 < D2.length; e3 += 1)
          D2[e3].c();
        C2 = main2.a(), j2 = main2.e("p"), L2 = main2.t(z2), main2.b(g2, "class", "text-lg"), main2.b(j2, "class", "text-sm");
      }, m(o2, i2) {
        main2.r(t3, o2, i2), main2.c(o2, n2, i2), main2.r(r2, o2, i2), main2.c(o2, s2, i2), main2.c(o2, g2, i2), main2.d(g2, x2), main2.c(o2, v2, i2), main2.r(M2, o2, i2), main2.c(o2, k2, i2), main2.r(S2, o2, i2), main2.c(o2, O2, i2);
        for (let e3 = 0; e3 < D2.length; e3 += 1)
          D2[e3].m(o2, i2);
        main2.c(o2, C2, i2), main2.c(o2, j2, i2), main2.d(j2, L2), I2 = true, T2 || (B2 = [main2.A(g2, "click", function() {
          main2.H(e2[3]) && e2[3].apply(this, arguments);
        }), main2.A(j2, "click", function() {
          main2.H(e2[3]) && e2[3].apply(this, arguments);
        })], T2 = true);
      }, p(n3, s3) {
        e2 = n3;
        const o2 = {};
        1 & s3 && (o2.pm = e2[0]), t3.$set(o2);
        const i2 = {};
        1 & s3 && (i2.member = e2[0].member), r2.$set(i2), (!I2 || 1 & s3) && E2 !== (E2 = e2[0].subject + "") && main2.o(x2, E2);
        const c2 = {};
        1 & s3 && (c2.pm = e2[0]), M2.$set(c2);
        const l2 = {};
        if (1 & s3 && (l2.time = e2[0].time), S2.$set(l2), 5 & s3) {
          let t4;
          for (N2 = e2[2](e2[0]), t4 = 0; t4 < N2.length; t4 += 1) {
            const n4 = ts(e2, N2, t4);
            D2[t4] ? (D2[t4].p(n4, s3), main2.p(D2[t4], 1)) : (D2[t4] = ss(n4), D2[t4].c(), main2.p(D2[t4], 1), D2[t4].m(C2.parentNode, C2));
          }
          for (main2.D(), t4 = N2.length; t4 < D2.length; t4 += 1)
            W2(t4);
          main2.x();
        }
        (!I2 || 1 & s3) && z2 !== (z2 = e2[0].preview + "") && main2.o(L2, z2);
      }, i(e3) {
        if (!I2) {
          main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), main2.p(M2.$$.fragment, e3), main2.p(S2.$$.fragment, e3);
          for (let e4 = 0; e4 < N2.length; e4 += 1)
            main2.p(D2[e4]);
          I2 = true;
        }
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), main2.v(M2.$$.fragment, e3), main2.v(S2.$$.fragment, e3), D2 = D2.filter(Boolean);
        for (let e4 = 0; e4 < D2.length; e4 += 1)
          main2.v(D2[e4]);
        I2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(r2, e3), e3 && main2.f(s2), e3 && main2.f(g2), e3 && main2.f(v2), main2.w(M2, e3), e3 && main2.f(k2), main2.w(S2, e3), e3 && main2.f(O2), main2.y(D2, e3), e3 && main2.f(C2), e3 && main2.f(j2), T2 = false, main2.B(B2);
      }};
    }
    function ss(e2) {
      let t3, n2;
      return t3 = new wt({props: {tag: e2[12]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        5 & n3 && (r2.tag = e3[12]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function os(e2) {
      let t3, n2, r2, s2, i2;
      const a3 = [rs, ns], u2 = [];
      function d2(e3, t4) {
        return e3[0].member ? 0 : 1;
      }
      return n2 = d2(e2), r2 = u2[n2] = a3[n2](e2), {c() {
        t3 = main2.e("div"), r2.c(), main2.b(t3, "class", "leading-relaxed");
      }, m(e3, r3) {
        main2.c(e3, t3, r3), u2[n2].m(t3, null), i2 = true;
      }, p(e3, s3) {
        let o2 = n2;
        n2 = d2(e3), n2 === o2 ? u2[n2].p(e3, s3) : (main2.D(), main2.v(u2[o2], 1, 1, () => {
          u2[o2] = null;
        }), main2.x(), r2 = u2[n2], r2 ? r2.p(e3, s3) : (r2 = u2[n2] = a3[n2](e3), r2.c()), main2.p(r2, 1), r2.m(t3, null));
      }, i(e3) {
        i2 || (main2.p(r2), s2 || main2.j(() => {
          s2 = main2.X(t3, a, {duration: 500}), s2.start();
        }), i2 = true);
      }, o(e3) {
        main2.v(r2), i2 = false;
      }, d(e3) {
        e3 && main2.f(t3), u2[n2].d();
      }};
    }
    function is(e2) {
      let t3, n2, r2, i2, a3 = e2[0], u2 = os(e2);
      return {c() {
        t3 = main2.e("div"), u2.c(), main2.b(t3, "id", n2 = "MailCard-" + e2[1]), main2.h(t3, "width", "276px"), main2.h(t3, "height", "156px"), main2.b(t3, "class", r2 = "m-2 p-2\r\nrelative overflow-y-auto\r\n" + e2[4] + "\r\nshadow-md rounded-md");
      }, m(e3, n3) {
        main2.c(e3, t3, n3), u2.m(t3, null), i2 = true;
      }, p(e3, [o2]) {
        1 & o2 && main2.s(a3, a3 = e3[0]) ? (main2.D(), main2.v(u2, 1, 1, main2.n), main2.x(), u2 = os(e3), u2.c(), main2.p(u2), u2.m(t3, null)) : u2.p(e3, o2), (!i2 || 2 & o2 && n2 !== (n2 = "MailCard-" + e3[1])) && main2.b(t3, "id", n2), (!i2 || 16 & o2 && r2 !== (r2 = "m-2 p-2\r\nrelative overflow-y-auto\r\n" + e3[4] + "\r\nshadow-md rounded-md")) && main2.b(t3, "class", r2);
      }, i(e3) {
        i2 || (main2.p(u2), i2 = true);
      }, o(e3) {
        main2.v(u2), i2 = false;
      }, d(e3) {
        e3 && main2.f(t3), u2.d(e3);
      }};
    }
    function cs(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, f2;
      main2.g(e2, me, (e3) => n2(5, o2 = e3)), main2.g(e2, pe, (e3) => n2(6, i2 = e3)), main2.g(e2, ke, (e3) => n2(7, c2 = e3)), main2.g(e2, je, (e3) => n2(8, l2 = e3)), main2.g(e2, Pe, (e3) => n2(9, a3 = e3)), main2.g(e2, main2.U, (e3) => n2(10, u2 = e3)), main2.g(e2, main2.V, (e3) => n2(11, d2 = e3)), main2.g(e2, re, (e3) => n2(4, f2 = e3));
      let {pm: g2} = t3, {index: h2} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(0, g2 = e3.pm), "index" in e3 && n2(1, h2 = e3.index);
      }, e2.$$.update = () => {
        96 & e2.$$.dirty && n2(2, r2 = (e3) => o2.has(e3.id) ? Array.from(o2.get(e3.id)).map((e4) => i2.get(e4.value)) : []), 3969 & e2.$$.dirty && n2(3, s2 = () => {
          g2 && (main2.W(ke, c2 = g2, c2), main2.W(je, l2 = a3 || false, l2), u2("./", Object.assign(Object.assign({}, d2), {showList: l2, now_pm: c2.id})));
        });
      }, [g2, h2, r2, s2, f2, o2, i2, c2, l2, a3, u2, d2];
    }
    class ls extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, cs, is, main2.s, {pm: 0, index: 1});
      }
    }
    function as(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[1] = t3[n2], r2[3] = n2, r2;
    }
    function us(e2) {
      let t3, n2;
      return t3 = new ls({props: {pm: e2[1], index: e2[3]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = e3[1]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function ds(e2) {
      let t3, n2, r2 = e2[0], s2 = [];
      for (let t4 = 0; t4 < r2.length; t4 += 1)
        s2[t4] = us(as(e2, r2, t4));
      const i2 = (e3) => main2.v(s2[e3], 1, 1, () => {
        s2[e3] = null;
      });
      return {c() {
        t3 = main2.e("div");
        for (let e3 = 0; e3 < s2.length; e3 += 1)
          s2[e3].c();
        main2.b(t3, "id", "MailCardView"), main2.b(t3, "class", "mb-3 flex flex-wrap");
      }, m(e3, r3) {
        main2.c(e3, t3, r3);
        for (let e4 = 0; e4 < s2.length; e4 += 1)
          s2[e4].m(t3, null);
        n2 = true;
      }, p(e3, [n3]) {
        if (1 & n3) {
          let o2;
          for (r2 = e3[0], o2 = 0; o2 < r2.length; o2 += 1) {
            const i3 = as(e3, r2, o2);
            s2[o2] ? (s2[o2].p(i3, n3), main2.p(s2[o2], 1)) : (s2[o2] = us(i3), s2[o2].c(), main2.p(s2[o2], 1), s2[o2].m(t3, null));
          }
          for (main2.D(), o2 = r2.length; o2 < s2.length; o2 += 1)
            i2(o2);
          main2.x();
        }
      }, i(e3) {
        if (!n2) {
          for (let e4 = 0; e4 < r2.length; e4 += 1)
            main2.p(s2[e4]);
          n2 = true;
        }
      }, o(e3) {
        s2 = s2.filter(Boolean);
        for (let e4 = 0; e4 < s2.length; e4 += 1)
          main2.v(s2[e4]);
        n2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(s2, e3);
      }};
    }
    function fs(e2, t3, n2) {
      let {mail_list: r2} = t3;
      return e2.$$set = (e3) => {
        "mail_list" in e3 && n2(0, r2 = e3.mail_list);
      }, [r2];
    }
    class gs extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, fs, ds, main2.s, {mail_list: 0});
      }
    }
    function hs(e2) {
      let t3, n2, r2, s2, d2, f2, g2, h2, p2 = e2[2] ? "on" : "off";
      return {c() {
        t3 = main2.e("label"), n2 = main2.t("\uB9AC\uC2A4\uD2B8\uBDF0 "), r2 = main2.t(p2), s2 = main2.a(), d2 = main2.e("input"), main2.b(d2, "id", "isListViewInput"), main2.b(d2, "type", "checkbox"), main2.b(t3, "class", f2 = "p-1 rounded " + e2[12]), main2.b(t3, "for", "isListViewInput");
      }, m(o2, i2) {
        main2.c(o2, t3, i2), main2.d(t3, n2), main2.d(t3, r2), main2.d(t3, s2), main2.d(t3, d2), d2.checked = e2[2], g2 || (h2 = main2.A(d2, "change", e2[20]), g2 = true);
      }, p(e3, n3) {
        4 & n3 && p2 !== (p2 = e3[2] ? "on" : "off") && main2.o(r2, p2), 4 & n3 && (d2.checked = e3[2]), 4096 & n3 && f2 !== (f2 = "p-1 rounded " + e3[12]) && main2.b(t3, "class", f2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), g2 = false, h2();
      }};
    }
    function ps(e2) {
      let t3, n2, r2, s2;
      return t3 = new hn({}), r2 = new ln({}), {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment);
      }, m(e3, o2) {
        main2.r(t3, e3, o2), main2.c(e3, n2, o2), main2.r(r2, e3, o2), s2 = true;
      }, p: main2.n, i(e3) {
        s2 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), s2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), s2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(r2, e3);
      }};
    }
    function ms(e2) {
      let t3, n2;
      return t3 = new Ir({}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function $s(e2) {
      let t3, n2;
      return t3 = new zr({}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function ys(e2) {
      let t3, n2;
      return t3 = new es({props: {mail_list: e2[8], isTyping: e2[7]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        256 & n3 && (r2.mail_list = e3[8]), 128 & n3 && (r2.isTyping = e3[7]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function bs(e2) {
      let t3, n2;
      return t3 = new gs({props: {mail_list: e2[8]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        256 & n3 && (r2.mail_list = e3[8]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function ws(e2) {
      let t3, n2, r2, s2, u2, d2, g2, v2, _2, M2, k2, S2, O2, C2, j2, L2, P2, T2, A2, B2;
      const E2 = [ps, hs], z2 = [];
      function N2(e3, t4) {
        return e3[3] ? 0 : 1;
      }
      r2 = N2(e2), s2 = z2[r2] = E2[r2](e2);
      let D2 = e2[13] && ms(), W2 = e2[14] && $s();
      v2 = new tn({props: {hidden: !(e2[3] && e2[5])}});
      const R2 = [bs, ys], F2 = [];
      function J2(e3, t4) {
        return !e3[2] && e3[11] ? 0 : 1;
      }
      return M2 = J2(e2), k2 = F2[M2] = R2[M2](e2), O2 = new Pn({props: {maxPage: e2[6]}}), P2 = new jr({props: {search_length: e2[4].length}}), {c() {
        t3 = main2.e("section"), n2 = main2.e("div"), s2.c(), u2 = main2.a(), D2 && D2.c(), d2 = main2.a(), W2 && W2.c(), g2 = main2.a(), main2.q(v2.$$.fragment), _2 = main2.a(), k2.c(), S2 = main2.a(), main2.q(O2.$$.fragment), C2 = main2.a(), j2 = main2.e("br"), L2 = main2.a(), main2.q(P2.$$.fragment), main2.b(n2, "class", "ml-2 flex flex-row"), main2.b(t3, "id", "MailListSection"), main2.h(t3, "min-height", e2[9] + "px"), main2.b(t3, "class", T2 = "h-full " + (e2[11] ? "w-1/2 lg:w-2/3 xl:w-3/4" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y"), main2.j(() => e2[21].call(t3)), main2.Y(t3, "hidden", e2[3] && !e2[10]);
      }, m(s3, o2) {
        main2.c(s3, t3, o2), main2.d(t3, n2), z2[r2].m(n2, null), main2.d(n2, u2), D2 && D2.m(n2, null), main2.d(t3, d2), W2 && W2.m(t3, null), main2.d(t3, g2), main2.r(v2, t3, null), main2.d(t3, _2), F2[M2].m(t3, null), main2.d(t3, S2), main2.r(O2, t3, null), main2.d(t3, C2), main2.d(t3, j2), main2.d(t3, L2), main2.r(P2, t3, null), A2 = main2.z(t3, e2[21].bind(t3)), B2 = true;
      }, p(e3, [o2]) {
        let i2 = r2;
        r2 = N2(e3), r2 === i2 ? z2[r2].p(e3, o2) : (main2.D(), main2.v(z2[i2], 1, 1, () => {
          z2[i2] = null;
        }), main2.x(), s2 = z2[r2], s2 ? s2.p(e3, o2) : (s2 = z2[r2] = E2[r2](e3), s2.c()), main2.p(s2, 1), s2.m(n2, u2)), e3[13] ? D2 ? 8192 & o2 && main2.p(D2, 1) : (D2 = ms(), D2.c(), main2.p(D2, 1), D2.m(n2, null)) : D2 && (main2.D(), main2.v(D2, 1, 1, () => {
          D2 = null;
        }), main2.x()), e3[14] ? W2 ? 16384 & o2 && main2.p(W2, 1) : (W2 = $s(), W2.c(), main2.p(W2, 1), W2.m(t3, g2)) : W2 && (main2.D(), main2.v(W2, 1, 1, () => {
          W2 = null;
        }), main2.x());
        const l2 = {};
        40 & o2 && (l2.hidden = !(e3[3] && e3[5])), v2.$set(l2);
        let a3 = M2;
        M2 = J2(e3), M2 === a3 ? F2[M2].p(e3, o2) : (main2.D(), main2.v(F2[a3], 1, 1, () => {
          F2[a3] = null;
        }), main2.x(), k2 = F2[M2], k2 ? k2.p(e3, o2) : (k2 = F2[M2] = R2[M2](e3), k2.c()), main2.p(k2, 1), k2.m(t3, S2));
        const d3 = {};
        64 & o2 && (d3.maxPage = e3[6]), O2.$set(d3);
        const $2 = {};
        16 & o2 && ($2.search_length = e3[4].length), P2.$set($2), (!B2 || 512 & o2) && main2.h(t3, "min-height", e3[9] + "px"), (!B2 || 2048 & o2 && T2 !== (T2 = "h-full " + (e3[11] ? "w-1/2 lg:w-2/3 xl:w-3/4" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y")) && main2.b(t3, "class", T2), 3080 & o2 && main2.Y(t3, "hidden", e3[3] && !e3[10]);
      }, i(e3) {
        B2 || (main2.p(s2), main2.p(D2), main2.p(W2), main2.p(v2.$$.fragment, e3), main2.p(k2), main2.p(O2.$$.fragment, e3), main2.p(P2.$$.fragment, e3), B2 = true);
      }, o(e3) {
        main2.v(s2), main2.v(D2), main2.v(W2), main2.v(v2.$$.fragment, e3), main2.v(k2), main2.v(O2.$$.fragment, e3), main2.v(P2.$$.fragment, e3), B2 = false;
      }, d(e3) {
        e3 && main2.f(t3), z2[r2].d(), D2 && D2.d(), W2 && W2.d(), main2.w(v2), F2[M2].d(), main2.w(O2), main2.w(P2), A2();
      }};
    }
    function xs(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, f2, g2, h2, p2, m2, $2, y2, b2, w2, x2, v2, _2, M2, k2, O2;
      main2.g(e2, Ie, (e3) => n2(3, d2 = e3)), main2.g(e2, Mr, (e3) => n2(4, f2 = e3)), main2.g(e2, Sr, (e3) => n2(18, g2 = e3)), main2.g(e2, xn, (e3) => n2(19, h2 = e3)), main2.g(e2, Ce, (e3) => n2(27, p2 = e3)), main2.g(e2, main2.Z, (e3) => n2(28, m2 = e3)), main2.g(e2, main2.V, (e3) => n2(29, $2 = e3)), main2.g(e2, Le, (e3) => n2(5, y2 = e3)), main2.g(e2, je, (e3) => n2(10, b2 = e3)), main2.g(e2, Pe, (e3) => n2(11, w2 = e3)), main2.g(e2, re, (e3) => n2(12, x2 = e3)), main2.g(e2, xe, (e3) => n2(13, v2 = e3)), main2.g(e2, te, (e3) => n2(14, _2 = e3));
      let C2, j2 = 1, L2 = 3;
      main2.l(() => {
        const e3 = l2[0];
        if (L2 != o2 || j2 == p2 && O2 == xn || (C2 = e3), L2 != o2 && C2) {
          let e4 = 0;
          return f2.forEach((e5, t4) => {
          }), main2.W(Ce, p2 = Math.ceil((e4 + 1) / o2), p2), j2 = p2, L2 = o2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2})), null;
        }
        if (a3 > new Date())
          return main2.W(xn, h2 = vn(new Date()), h2), alert("\uBBF8\uB798\uB85C \uAC08 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."), m2("./", Object.assign(Object.assign({}, $2), {dateString: h2})), null;
        if (l2.length == 0 || !e3 && $2.nowPage != 1)
          return m2("./", Object.assign(Object.assign({}, $2), {nowPage: 1})), null;
        if (j2 != p2) {
          j2 = p2;
          const t4 = Mn(e3.time);
          return main2.W(xn, h2 = t4, h2), O2 = t4, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2, dateString: t4})), null;
        }
        if (O2 !== h2) {
          let e4 = false;
          if (f2.forEach((t4, n3) => {
            if (e4 || !t4)
              return null;
            const r3 = Mn(t4.time);
            _n(r3) <= a3 && (main2.W(Ce, p2 = Math.ceil((n3 + 1) / o2), p2), main2.W(xn, h2 = r3, h2), e4 = true);
          }), e4 == 0 && f2.length > 0) {
            main2.W(Ce, p2 = i2, p2);
            const e5 = f2[f2.length - 1];
            main2.W(xn, h2 = Mn(e5.time), h2);
          }
          return O2 = h2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2, dateString: h2})), null;
        }
      });
      let P2 = false;
      return e2.$$.update = () => {
        1 & e2.$$.dirty && n2(15, r2 = Math.floor((M2 - 32) / 292)), 2 & e2.$$.dirty && n2(16, s2 = Math.floor((k2 - 220) / 164)), 98318 & e2.$$.dirty && n2(17, o2 = d2 ? 5 : P2 ? Math.floor((k2 - 200) / 62) : r2 * s2), 131088 & e2.$$.dirty && n2(6, i2 = Math.ceil(f2.length / o2)), 2 & e2.$$.dirty && n2(7, c2 = k2 < 400), 393232 & e2.$$.dirty && n2(8, l2 = f2 ? g2(o2) : []), 524288 & e2.$$.dirty && (a3 = _n(h2)), 44 & e2.$$.dirty && n2(9, u2 = P2 || d2 ? y2 ? 520 : 360 : 490);
      }, [M2, k2, P2, d2, f2, y2, i2, c2, l2, u2, b2, w2, x2, v2, _2, r2, s2, o2, g2, h2, function() {
        P2 = this.checked, n2(2, P2);
      }, function() {
        M2 = this.clientWidth, k2 = this.clientHeight, n2(0, M2), n2(1, k2);
      }];
    }
    class vs extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, xs, ws, main2.s, {});
      }
    }
    function _s(e2) {
      let t3, n2, r2;
      return {c() {
        t3 = main2.e("div"), main2.b(t3, "id", "Background"), main2.b(t3, "class", "w-screen h-screen absolute bg-contain"), main2.h(t3, "background-color", "black"), main2.h(t3, "background-image", e2[0]), main2.h(t3, "background-position", "center"), main2.h(t3, "background-size", "cover"), main2.h(t3, "background-attachment", "fixed");
      }, m(e3, n3) {
        main2.c(e3, t3, n3), r2 = true;
      }, p(e3, [n3]) {
        (!r2 || 1 & n3) && main2.h(t3, "background-image", e3[0]);
      }, i(e3) {
        r2 || (main2.j(() => {
          n2 || (n2 = main2.k(t3, a, {}, true)), n2.run(1);
        }), r2 = true);
      }, o(e3) {
        n2 || (n2 = main2.k(t3, a, {}, false)), n2.run(0), r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), e3 && n2 && n2.end();
      }};
    }
    function Ms(e2, t3, n2) {
      let r2, s2, o2, i2;
      main2.g(e2, Ie, (e3) => n2(2, o2 = e3)), main2.g(e2, ne, (e3) => n2(3, i2 = e3));
      return e2.$$.update = () => {
        4 & e2.$$.dirty && n2(1, r2 = `url('./img/bg/custom_mic${o2 ? "_m" : ""}.jpg')`), 10 & e2.$$.dirty && n2(0, s2 = i2 ? r2 : "\n    linear-gradient(to bottom right,\n    #f1d2e7,#f1c3aa,#e382a9, #e18784,\n    #f3aa51, #fcf695, #fff,#cee5d5,\n    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7)");
      }, [s2, r2, o2, i2];
    }
    class ks extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ms, _s, main2.s, {});
      }
    }
    function Ss(e2) {
      let t3, n2;
      return t3 = new de({props: {show: js, $$slots: {default: [Os]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        2097152 & n3 && (r2.$$scope = {dirty: n3, ctx: e3}), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Os(e2) {
      let t3, n2, r2, s2, o2, c2;
      return t3 = new ks({}), r2 = new bn({}), o2 = new vs({}), {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment), s2 = main2.a(), main2.q(o2.$$.fragment);
      }, m(e3, i2) {
        main2.r(t3, e3, i2), main2.c(e3, n2, i2), main2.r(r2, e3, i2), main2.c(e3, s2, i2), main2.r(o2, e3, i2), c2 = true;
      }, i(e3) {
        c2 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), main2.p(o2.$$.fragment, e3), c2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), main2.v(o2.$$.fragment, e3), c2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(r2, e3), e3 && main2.f(s2), main2.w(o2, e3);
      }};
    }
    function Cs(e2) {
      let t3, n2, r2, s2 = e2[1] && Ss(e2);
      return {c() {
        t3 = main2.e("div"), s2 && s2.c(), main2.b(t3, "class", "flex w-screen h-screen relative"), main2.j(() => e2[4].call(t3));
      }, m(o2, i2) {
        main2.c(o2, t3, i2), s2 && s2.m(t3, null), n2 = main2.z(t3, e2[4].bind(t3)), r2 = true;
      }, p(e3, [n3]) {
        e3[1] ? s2 ? (s2.p(e3, n3), 2 & n3 && main2.p(s2, 1)) : (s2 = Ss(e3), s2.c(), main2.p(s2, 1), s2.m(t3, null)) : s2 && (main2.D(), main2.v(s2, 1, 1, () => {
          s2 = null;
        }), main2.x());
      }, i(e3) {
        r2 || (main2.p(s2), r2 = true);
      }, o(e3) {
        main2.v(s2), r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), s2 && s2.d(), n2();
      }};
    }
    let js = null;
    function Ls(e2, t3, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, f2, g2, h2, p2;
      main2.g(e2, ve, (e3) => n2(2, s2 = e3)), main2.g(e2, me, (e3) => n2(3, o2 = e3)), main2.g(e2, Ke, (e3) => n2(7, i2 = e3)), main2.g(e2, Me, (e3) => n2(8, c2 = e3)), main2.g(e2, ke, (e3) => n2(9, l2 = e3)), main2.g(e2, pe, (e3) => n2(10, a3 = e3)), main2.g(e2, te, (e3) => n2(11, u2 = e3)), main2.g(e2, je, (e3) => n2(12, d2 = e3)), main2.g(e2, xe, (e3) => n2(13, f2 = e3)), main2.g(e2, main2.Z, (e3) => n2(14, g2 = e3)), main2.g(e2, main2.V, (e3) => n2(15, h2 = e3)), main2.g(e2, main2.U, (e3) => n2(16, p2 = e3));
      var m2 = this && this.__awaiter || function(e3, t4, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, o3) {
          function i3(e4) {
            try {
              l3(r3.next(e4));
            } catch (e5) {
              o3(e5);
            }
          }
          function c3(e4) {
            try {
              l3(r3.throw(e4));
            } catch (e5) {
              o3(e5);
            }
          }
          function l3(e4) {
            var t5;
            e4.done ? s3(e4.value) : (t5 = e4.value, t5 instanceof n3 ? t5 : new n3(function(e5) {
              e5(t5);
            })).then(i3, c3);
          }
          l3((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      main2.$.title = "IZ*ONE Private Mail Viewer";
      let $2 = false;
      const y2 = (e3, t4) => {
        try {
          console.log(`${t4}\uCC28 \uC2DC\uB3C4`), console.log(e3.slice(0, 10));
          const n3 = [];
          for (let t5 = 0; t5 < e3.length; t5 += 2)
            n3.push(e3[t5]);
          const r3 = JSON.parse(n3.join(""));
          return console.log("\uB85C\uB529 \uC131\uACF5!"), r3;
        } catch (n3) {
          if (t4 < 4)
            return e3 = e3.slice(1), y2(e3, t4 + 1);
          throw n3;
        }
      }, b2 = (e3) => m2(void 0, void 0, void 0, function* () {
        const t4 = yield fetch(e3), n3 = yield t4.text();
        try {
          return JSON.parse(n3);
        } catch (e4) {
          if (n3.slice(0, 9) == "<!DOCTYPE")
            throw e4;
          if (e4 instanceof SyntaxError)
            return console.log("json \uC77D\uAE30 \uC2E4\uD328. \uC7AC\uC2DC\uB3C4\uD569\uB2C8\uB2E4."), y2(n3.slice(2), 2);
          console.error(e4);
        }
      });
      let w2;
      return function() {
        return m2(this, void 0, void 0, function* () {
          yield Promise.all([b2("./pm_list.json"), b2("./member_name.json"), b2("./mail_to_num_dict.json"), b2("./mail_body_dict.json").catch((e3) => (console.log("mail_body_dict\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."), null))]).then((e3) => {
            const t4 = e3[0];
            main2.W(Ke, i2 = e3[1], i2), console.log(i2);
            const n3 = e3[2], u3 = e3[3];
            main2.W(Me, c2 = t4.map((e4, t5) => {
              e4.id == "m20731" && main2.W(ke, l2 = e4, l2), e4.nick = e4.member;
              const r3 = i2[e4.nick];
              if (e4.member = Ue[r3], !e4.member && n3.has(e4.id)) {
                const t6 = n3[e4.id];
                main2.W(Ke, i2[e4.nick] = t6, i2), e4.member = Ue[t6], console.log("member_name.json \uC5D0 \uBA64\uBC84 \uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."), console.log(e4.nick, e4.member);
              }
              return u3 && (e4.body = u3[e4.id]), e4;
            }), c2);
            let d3 = 0;
            const f3 = a3.get("\uD63C\uB2E4 \uD788\uD1A0\uBBF8");
            if (s2.has(f3) && (c2.forEach((e4) => {
              const t5 = a3.get(e4.member), n4 = s2.get(t5);
              n4 ? n4.add(e4.id) : (console.log(e4.id, e4.nick), d3 += 1);
            }), ve.set(s2)), console.log("\uB204\uB77D", d3), !a3.has("\uC0DD\uC77C")) {
              const e4 = {value: "\uC0DD\uC77C", color: "LightPink"};
              a3.set(e4.value, e4), pe.set(a3);
            }
            const g3 = a3.get("\uC0DD\uC77C");
            s2.has(g3) || s2.set(g3, new Set()), console.log("size", s2.get(g3).size), s2.get(g3).size == 0 && (c2.map((e4) => {
              e4.id.slice(0, 1) == "b" && r2(g3, e4);
            }), ve.set(s2), me.set(o2));
          });
        });
      }().then(() => {
        n2(1, $2 = true);
      }), Ve.ping.then((e3) => e3.status == 200).then((e3) => {
        e3 && (console.log("API \uC11C\uBC84 \uC5F0\uACB0 \uC131\uACF5! \uC2E0 \uC11C\uBC84\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4. \uD0DC\uADF8 \uB3D9\uAE30\uD654 \uBC0F \uC800\uC7A5 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), main2.W(te, u2 = true, u2));
      }).catch((e3) => {
        console.error(e3), console.log("\uAD6C \uBC84\uC804 \uC11C\uBC84\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4.");
      }), main2.V.subscribe((e3) => {
        const t4 = e3.showList == "true";
        t4 != d2 && main2.W(je, d2 = t4, d2);
      }), main2.V.subscribe((e3) => {
        if (e3.tag || f2 == null || main2.W(xe, f2 = null, f2), e3.tag)
          if (a3.has(e3.tag)) {
            if (f2 != e3.tag) {
              const t4 = a3.get(e3.tag);
              main2.W(xe, f2 = t4.value, f2);
            }
          } else
            g2("./", Object.assign(Object.assign({}, h2), {tag: ""})), console.log("redirect to empty tag url");
      }), h2.dateString || p2("./", {dateString: wn, nowPage: 1, tag: "", search: "", showList: true, now_pm: "m20731"}), e2.$$.update = () => {
        12 & e2.$$.dirty && (r2 = (e3, t4) => {
          s2.get(e3).add(t4.id), o2.has(t4.id) ? o2.get(t4.id).add(e3) : o2.set(t4.id, new Set([e3]));
        }), 1 & e2.$$.dirty && Pe.set(w2 > 700);
      }, [w2, $2, s2, o2, function() {
        w2 = this.clientWidth, n2(0, w2);
      }];
    }
    class index_868dc185_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ls, Cs, main2.s, {});
      }
    }
  });

  // dist/build/_layout-e80684cd.js
  var require_layout_e80684cd = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_e80684cd_default
    });
    const main2 = __toModule(require_main());
    function c(s2) {
      let t3;
      const e2 = s2[1].default, c2 = main2.J(e2, s2, s2[0], null);
      return {c() {
        c2 && c2.c();
      }, m(s3, e3) {
        c2 && c2.m(s3, e3), t3 = true;
      }, p(s3, [t4]) {
        c2 && c2.p && 1 & t4 && main2.K(c2, e2, s3, s3[0], t4, null, null);
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
    class layout_e80684cd_default extends main2.S {
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
      F: () => Jt,
      G: () => Gt,
      H: () => i,
      I: () => I,
      J: () => d,
      K: () => p,
      L: () => Z,
      M: () => X,
      N: () => M,
      O: () => Y,
      P: () => j,
      Q: () => m,
      R: () => n,
      S: () => At,
      T: () => h,
      U: () => ge,
      V: () => he,
      W: () => g,
      X: () => xt,
      Y: () => U,
      Z: () => ye,
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
    function d(t3, e2, n2, o2) {
      if (t3) {
        const r2 = f(t3, e2, n2, o2);
        return t3[0](r2);
      }
    }
    function f(t3, e2, o2, r2) {
      return t3[1] && r2 ? n(o2.ctx.slice(), t3[1](r2(e2))) : o2.ctx;
    }
    function p(t3, e2, n2, o2, r2, s2, i2) {
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
        const r3 = f(e2, n2, o2, i2);
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
}`, d2 = `__svelte_${function(t4) {
        let e3 = 5381, n3 = t4.length;
        for (; n3--; )
          e3 = (e3 << 5) - e3 ^ t4.charCodeAt(n3);
        return e3 >>> 0;
      }(u2)}_${a3}`, f2 = t3.ownerDocument;
      z.add(f2);
      const p2 = f2.__svelte_stylesheet || (f2.__svelte_stylesheet = f2.head.appendChild(O("style")).sheet), h2 = f2.__svelte_rules || (f2.__svelte_rules = {});
      h2[d2] || (h2[d2] = true, p2.insertRule(`@keyframes ${d2} ${u2}`, p2.cssRules.length));
      const m2 = t3.style.animation || "";
      return t3.style.animation = `${m2 ? `${m2}, ` : ""}${d2} ${o2}ms linear ${r2}ms 1 both`, K += 1, d2;
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
      st || (st = true, rt.then(dt));
    }
    function at() {
      return it(), rt;
    }
    function ct(t3) {
      nt.push(t3);
    }
    let lt = false;
    const ut = new Set();
    function dt() {
      if (!lt) {
        lt = true;
        do {
          for (let t3 = 0; t3 < tt.length; t3 += 1) {
            const e2 = tt[t3];
            G(e2), ft(e2.$$);
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
    function ft(t3) {
      if (t3.fragment !== null) {
        t3.update(), s(t3.before_update);
        const e2 = t3.dirty;
        t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e2), t3.after_update.forEach(ct);
      }
    }
    let pt;
    function ht() {
      return pt || (pt = Promise.resolve(), pt.then(() => {
        pt = null;
      })), pt;
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
      function d2() {
        s2 && J(n2, s2);
      }
      function f2() {
        const {delay: o3 = 0, duration: r3 = 300, easing: i2 = e, tick: f3 = t2, css: p3} = c2 || vt;
        p3 && (s2 = W(n2, 0, 1, r3, o3, i2, p3, u2++)), f3(0, 1);
        const h2 = $() + o3, m2 = h2 + r3;
        a3 && a3.abort(), l2 = true, ct(() => mt(n2, true, "start")), a3 = v((t3) => {
          if (l2) {
            if (t3 >= m2)
              return f3(1, 0), mt(n2, true, "end"), d2(), l2 = false;
            if (t3 >= h2) {
              const e2 = i2((t3 - h2) / r3);
              f3(e2, 1 - e2);
            }
          }
          return l2;
        });
      }
      let p2 = false;
      return {start() {
        p2 || (J(n2), i(c2) ? (c2 = c2(), ht().then(f2)) : f2());
      }, invalidate() {
        p2 = false;
      }, end() {
        l2 && (d2(), l2 = false);
      }};
    }
    function Pt(n2, o2, r2, a3) {
      let c2 = o2(n2, r2), l2 = a3 ? 0 : 1, u2 = null, d2 = null, f2 = null;
      function p2() {
        f2 && J(n2, f2);
      }
      function h2(t3, e2) {
        const n3 = t3.b - l2;
        return e2 *= Math.abs(n3), {a: l2, b: t3.b, d: n3, duration: e2, start: t3.start, end: t3.start + e2, group: t3.group};
      }
      function m2(o3) {
        const {delay: r3 = 0, duration: i2 = 300, easing: a4 = e, tick: m3 = t2, css: g2} = c2 || vt, y2 = {start: $() + r3, b: o3};
        o3 || (y2.group = yt, yt.r += 1), u2 || d2 ? d2 = y2 : (g2 && (p2(), f2 = W(n2, l2, o3, i2, r3, a4, g2)), o3 && m3(0, 1), u2 = h2(y2, i2), ct(() => mt(n2, o3, "start")), v((t3) => {
          if (d2 && t3 > d2.start && (u2 = h2(d2, i2), d2 = null, mt(n2, u2.b, "start"), g2 && (p2(), f2 = W(n2, l2, u2.b, u2.duration, 0, a4, c2.css))), u2) {
            if (t3 >= u2.end)
              m3(l2 = u2.b, 1 - l2), mt(n2, u2.b, "end"), d2 || (u2.b ? p2() : --u2.group.r || s(u2.group.c)), u2 = null;
            else if (t3 >= u2.start) {
              const e2 = t3 - u2.start;
              l2 = u2.a + u2.d * a4(e2 / u2.duration), m3(l2, 1 - l2);
            }
          }
          return !(!u2 && !d2);
        }));
      }
      return {run(t3) {
        i(c2) ? ht().then(() => {
          c2 = c2(), m2(t3);
        }) : m2(t3);
      }, end() {
        p2(), u2 = d2 = null;
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
    function jt(t3, e2, n2, o2, r2, s2, i2, a3, c2, l2, u2, d2) {
      let f2 = t3.length, p2 = s2.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t3[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = p2; h2--; ) {
        const t4 = d2(r2, s2, h2), a4 = n2(t4);
        let c3 = i2.get(a4);
        c3 ? o2 && c3.p(t4, e2) : (c3 = l2(a4, t4), c3.c()), y2.set(a4, g2[h2] = c3), a4 in m2 && $2.set(a4, Math.abs(h2 - m2[a4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t4) {
        wt(t4, 1), t4.m(a3, u2), i2.set(t4.key, t4), u2 = t4.first, p2--;
      }
      for (; f2 && p2; ) {
        const e3 = g2[p2 - 1], n3 = t3[f2 - 1], o3 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, f2--, p2--) : y2.has(r3) ? !i2.has(o3) || b2.has(o3) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o3) > $2.get(r3) ? (w2.add(o3), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, i2), f2--);
      }
      for (; f2--; ) {
        const e3 = t3[f2];
        y2.has(e3.key) || c2(e3, i2);
      }
      for (; p2; )
        _2(g2[p2 - 1]);
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
      const d2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: a3, bound: r(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: r(), dirty: l2, skip_bound: false};
      let f2 = false;
      if (d2.ctx = o2 ? o2(e2, n2.props || {}, (t3, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return d2.ctx && a3(d2.ctx[t3], d2.ctx[t3] = r2) && (!d2.skip_bound && d2.bound[t3] && d2.bound[t3](r2), f2 && function(t4, e3) {
          t4.$$.dirty[0] === -1 && (tt.push(t4), it(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t3)), n3;
      }) : [], d2.update(), f2 = true, s(d2.before_update), d2.fragment = !!i2 && i2(d2.ctx), n2.target) {
        if (n2.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n2.target);
          d2.fragment && d2.fragment.l(t3), t3.forEach(k);
        } else
          d2.fragment && d2.fragment.c();
        n2.intro && wt(e2.$$.fragment), Rt(e2, n2.target, n2.anchor), dt();
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
      const n2 = t3[2].default, o2 = d(n2, t3, t3[1], null);
      return {c() {
        o2 && o2.c();
      }, m(t4, n3) {
        o2 && o2.m(t4, n3), e2 = true;
      }, p(t4, [e3]) {
        o2 && o2.p && 2 & e3 && p(o2, n2, t4, t4[1], e3, null, null);
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
        let d2 = 0, f2 = t2;
        const p2 = () => {
          if (d2)
            return;
          f2();
          const o4 = n2(r2 ? u2[0] : u2, e3);
          l2 ? e3(o4) : f2 = i(o4) ? o4 : t2;
        }, h2 = a3.map((t3, e4) => c(t3, (t4) => {
          u2[e4] = t4, d2 &= ~(1 << e4), o3 && p2();
        }, () => {
          d2 |= 1 << e4;
        }));
        return o3 = true, p2(), function() {
          s(h2), f2();
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
    const de = {_hooks: [(t3) => Yt.set(false)], subscribe: pe};
    const fe = {_hooks: [], subscribe: pe};
    function pe(t3) {
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
        c2 && (o2 = o2.getAttribute("href")), o2 = o2 ? d2(o2) : i2.shortPath;
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
        function d2(t6) {
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
        var d2;
        c2 && c2.m(l2, u2), P(l2, n2, u2), P(l2, o2, u2), r2 = true, s2 || (d2 = e2[8].call(null, o2), a3 = d2 && i(d2.destroy) ? d2.destroy : t2, s2 = true);
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
      let a3, {nodes: c2 = []} = e2, {scoped: l2 = {}} = e2, {isRoot: d2 = false} = e2, {decorator: f2} = e2, p2 = null, h2 = null, m2 = {};
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
          }({page: i2.component, metatags: be, afterPageLoad: de});
        }();
        const e3 = {nodes: h2, decorator: f2 || Kt, layout: p2.isLayout ? p2 : o2 && o2.layout, component: p2, route: s2, componentFile: t4, parentNode: a3 || o2 && o2.parentNode};
        g2.set(e3), d2 && Zt.set(e3);
      }
      return X("routify", g2), t3.$$set = (t4) => {
        "nodes" in t4 && n2(1, c2 = t4.nodes), "scoped" in t4 && n2(0, l2 = t4.scoped), "isRoot" in t4 && n2(9, d2 = t4.isRoot), "decorator" in t4 && n2(2, f2 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o2 = r2), 2 & t3.$$.dirty && n2(3, [p2, ...h2] = c2, p2), 8 & t3.$$.dirty && function(t4) {
          let e3 = t4.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(p2), 16 & t3.$$.dirty && i2 && qt(i2, at);
      }, [l2, c2, f2, p2, i2, m2, g2, y2, (t4) => a3 = t4.parentNode, d2, r2];
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
      for (const o2 of fe._hooks.filter(Boolean)) {
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
      let d2 = null;
      var f2;
      return f2 = l2, Q().$$.on_destroy.push(f2), t3.$$set = (t4) => {
        "routes" in t4 && n2(2, i2 = t4.routes), "config" in t4 && n2(3, a3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && i2 && (clearTimeout(d2), d2 = setTimeout(() => {
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
    const sn = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_f1dc27da())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery/index", id: "_gallery_index", component: () => Promise.resolve().then(() => __toModule(require_index_3d4e8715())).then((t3) => t3.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery"}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_868dc185())).then((t3) => t3.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_e80684cd())).then((t3) => t3.default)};
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

  // dist/build/index-311dc5dc.js
  const main = __toModule(require_main());
  function a(a2, {delay: o = 0, duration: e = 400, easing: i = main.E} = {}) {
    const n = +getComputedStyle(a2).opacity;
    return {delay: o, duration: e, easing: i, css: (t2) => "opacity: " + t2 * n};
  }
  require_main();
})();
