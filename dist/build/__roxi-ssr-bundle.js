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

  // dist/build/_fallback-3b602e46.js
  var require_fallback_3b602e46 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_3b602e46_default
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
    class fallback_3b602e46_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, g, v, main2.s, {});
      }
    }
  });

  // dist/build/index-e6327fa2.js
  var require_index_e6327fa2 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_e6327fa2_default
    });
    const main2 = __toModule(require_main());
    function S(e2) {
      let t3, n3, r2, m2, g2;
      return {c() {
        t3 = main2.e("li"), n3 = main2.e("img"), main2.h(n3, "max-height", e2[2] + "px"), main2.h(n3, "max-width", e2[3] + "px"), n3.src !== (r2 = `/img/mail/${e2[0].n}/${e2[0].date.replace(/-/g, "")}/${e2[0].name}`) && main2.b(n3, "src", r2), main2.b(n3, "alt", ""), main2.h(t3, "max-height", k + "px"), main2.h(t3, "max-width", k + "px"), main2.h(t3, "overflow", "hidden"), main2.b(t3, "class", "m-2 shadow-lg border-white border-8 rounded");
      }, m(a3, c2) {
        main2.c(a3, t3, c2), main2.d(t3, n3), e2[4](n3), g2 = true;
      }, p(e3, [t4]) {
        (!g2 || 4 & t4) && main2.h(n3, "max-height", e3[2] + "px"), (!g2 || 8 & t4) && main2.h(n3, "max-width", e3[3] + "px"), (!g2 || 1 & t4 && n3.src !== (r2 = `/img/mail/${e3[0].n}/${e3[0].date.replace(/-/g, "")}/${e3[0].name}`)) && main2.b(n3, "src", r2);
      }, i(e3) {
        g2 || (main2.j(() => {
          m2 || (m2 = main2.k(t3, a, {duration: 1e3}, true)), m2.run(1);
        }), g2 = true);
      }, o(e3) {
        m2 || (m2 = main2.k(t3, a, {duration: 1e3}, false)), m2.run(0), g2 = false;
      }, d(n4) {
        n4 && main2.f(t3), e2[4](null), n4 && m2 && m2.end();
      }};
    }
    const k = 250;
    function q(e2, t3, n3) {
      let a3, {image: c2} = t3, l2 = 1.25 * k, s2 = 1.25 * k, o3 = false;
      return main2.l(() => {
        setTimeout(() => {
          if (a3 && !o3) {
            const e3 = a3.width > a3.height;
            n3(2, l2 = k * (e3 ? 1 : 1.25)), n3(3, s2 = k * (e3 ? 1.25 : 1)), o3 = true;
          }
        }, 200);
      }), e2.$$set = (e3) => {
        "image" in e3 && n3(0, c2 = e3.image);
      }, [c2, a3, l2, s2, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          a3 = e3, n3(1, a3);
        });
      }];
    }
    class A extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, q, S, main2.s, {image: 0});
      }
    }
    const {setTimeout: C} = main2.C;
    function D(e2, t3, n3) {
      const a3 = e2.slice();
      return a3[15] = t3[n3], a3;
    }
    function X(e2, t3, n3) {
      const a3 = e2.slice();
      return a3[18] = t3[n3], a3;
    }
    function Y(e2) {
      let t3, n3;
      return t3 = new A({props: {image: e2[18]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, a3) {
        main2.r(t3, e3, a3), n3 = true;
      }, p(e3, n4) {
        const a3 = {};
        24 & n4 && (a3.image = e3[18]), t3.$set(a3);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function E(e2) {
      let t3, n3, c2, i2, d2, r2, m2 = e2[15] + "", b2 = e2[3][e2[15]], w2 = [];
      for (let t4 = 0; t4 < b2.length; t4 += 1)
        w2[t4] = Y(X(e2, b2, t4));
      const $2 = (e3) => main2.v(w2[e3], 1, 1, () => {
        w2[e3] = null;
      });
      return {c() {
        t3 = main2.e("h3"), n3 = main2.t(m2), c2 = main2.a(), i2 = main2.e("ul");
        for (let e3 = 0; e3 < w2.length; e3 += 1)
          w2[e3].c();
        d2 = main2.a(), main2.b(t3, "class", "bg-white p-2 text-2xl text-center"), main2.b(i2, "class", "flex flex-wrap");
      }, m(e3, a3) {
        main2.c(e3, t3, a3), main2.d(t3, n3), main2.c(e3, c2, a3), main2.c(e3, i2, a3);
        for (let e4 = 0; e4 < w2.length; e4 += 1)
          w2[e4].m(i2, null);
        main2.d(i2, d2), r2 = true;
      }, p(e3, t4) {
        if ((!r2 || 16 & t4) && m2 !== (m2 = e3[15] + "") && main2.o(n3, m2), 24 & t4) {
          let n4;
          for (b2 = e3[3][e3[15]], n4 = 0; n4 < b2.length; n4 += 1) {
            const a3 = X(e3, b2, n4);
            w2[n4] ? (w2[n4].p(a3, t4), main2.p(w2[n4], 1)) : (w2[n4] = Y(a3), w2[n4].c(), main2.p(w2[n4], 1), w2[n4].m(i2, d2));
          }
          for (main2.D(), n4 = b2.length; n4 < w2.length; n4 += 1)
            $2(n4);
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
        e3 && main2.f(t3), e3 && main2.f(c2), e3 && main2.f(i2), main2.y(w2, e3);
      }};
    }
    function F(e2) {
      let t3, n3, c2, o3, d2, r2, m2 = false, g2 = () => {
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
        n3 = main2.e("div");
        for (let e3 = 0; e3 < h2.length; e3 += 1)
          h2[e3].c();
        main2.b(n3, "class", "flex flex-col"), main2.j(() => e2[10].call(n3));
      }, m(a3, l2) {
        main2.c(a3, n3, l2);
        for (let e3 = 0; e3 < h2.length; e3 += 1)
          h2[e3].m(n3, null);
        c2 = main2.z(n3, e2[10].bind(n3)), o3 = true, d2 || (r2 = [main2.A(window, "scroll", e2[5]), main2.A(window, "scroll", () => {
          m2 = true, clearTimeout(t3), t3 = C(g2, 100), e2[8]();
        }), main2.A(window, "resize", e2[9])], d2 = true);
      }, p(e3, [a3]) {
        if (1 & a3 && !m2 && (m2 = true, clearTimeout(t3), scrollTo(window.pageXOffset, e3[0]), t3 = C(g2, 100)), 24 & a3) {
          let t4;
          for (u2 = e3[4], t4 = 0; t4 < u2.length; t4 += 1) {
            const c3 = D(e3, u2, t4);
            h2[t4] ? (h2[t4].p(c3, a3), main2.p(h2[t4], 1)) : (h2[t4] = E(c3), h2[t4].c(), main2.p(h2[t4], 1), h2[t4].m(n3, null));
          }
          for (main2.D(), t4 = u2.length; t4 < h2.length; t4 += 1)
            b2(t4);
          main2.x();
        }
      }, i(e3) {
        if (!o3) {
          for (let e4 = 0; e4 < u2.length; e4 += 1)
            main2.p(h2[e4]);
          o3 = true;
        }
      }, o(e3) {
        h2 = h2.filter(Boolean);
        for (let e4 = 0; e4 < h2.length; e4 += 1)
          main2.v(h2[e4]);
        o3 = false;
      }, d(e3) {
        e3 && main2.f(n3), main2.y(h2, e3), c2(), d2 = false, main2.B(r2);
      }};
    }
    function G(e2, t3, n3) {
      let a3, c2, l2;
      const s2 = [{date: "2021-03-21", name: "b90d39624e131102cd037536ae52686a.jpeg", n: "6"}, {date: "2021-03-21", name: "94cf5360320d40e1d3142cea84f99081.jpeg", n: "7"}, {date: "2021-03-21", name: "90384e791c8d1adc105a4f0ea6d68d3c.jpeg", n: "8"}, {date: "2021-03-21", name: "34932e3f9c24f95a5fcf0019d8231ac3.jpeg", n: "9"}, {date: "2021-03-21", name: "ead6e6f71df1d2d175a97fbda10576ed.jpeg", n: "9"}, {date: "2021-03-21", name: "c3281576e74db5c6933abe9df5935ab9.jpeg", n: "11"}, {date: "2021-03-21", name: "3e6e3d9f314bf90df5ff422d07687322.jpeg", n: "12"}, {date: "2021-03-21", name: "6b27979497b3a8efb71a90302fefad1a.jpeg", n: "12"}, {date: "2021-03-21", name: "a75b6b26a62405c797a95cef04c5fe68.jpeg", n: "12"}, {date: "2021-03-21", name: "b4b37951916017cda21c57f599c1ed0d.jpeg", n: "12"}, {date: "2021-03-21", name: "dec6537c06b004488ca6c1b613be5b28.jpeg", n: "12"}, {date: "2021-03-21", name: "e2791622abdcffa0f3f0f756c37567db.jpeg", n: "12"}];
      let o3 = s2.concat(s2).concat(s2).concat(s2).concat(s2), i2 = 1;
      let d2, f2, r2 = 0, m2 = false;
      return e2.$$.update = () => {
        64 & e2.$$.dirty && n3(7, a3 = o3 && o3.slice(0, 6 * i2)), 128 & e2.$$.dirty && n3(3, c2 = a3.reduce((e3, t4) => (e3[t4.date] == null && (e3[t4.date] = []), e3[t4.date].push(t4), e3), {}));
      }, n3(4, l2 = [...new Set(o3.map((e3) => e3.date))].sort()), [r2, d2, f2, c2, l2, function() {
        d2 + r2 + 10 > f2 && !m2 && (m2 = true, setTimeout(() => {
          n3(6, i2 += 1), m2 = false;
        }, 300));
      }, i2, a3, function() {
        n3(0, r2 = window.pageYOffset);
      }, function() {
        n3(1, d2 = window.innerHeight);
      }, function() {
        f2 = this.clientHeight, n3(2, f2);
      }];
    }
    class index_e6327fa2_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, G, F, main2.s, {});
      }
    }
  });

  // dist/build/index-75a207d2.js
  var require_index_75a207d2 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_75a207d2_default
    });
    const main2 = __toModule(require_main());
    function ae(e2, t3) {
      const n3 = localStorage.getItem(e2);
      return n3 || t3;
    }
    let ce = main2.F(ae("preferences-profile", "latest"));
    ce.subscribe((e2) => {
      localStorage.setItem("preferences-profile", e2);
    });
    let de = main2.F([]);
    let ue = main2.F(false);
    let ge = main2.F(ae("dark-mode", false));
    ge.subscribe((e2) => {
      localStorage.setItem("dark-mode", e2);
    });
    let he = main2.G(ge, (e2) => (t3) => e2 ? "bg-gray-800 text-gray-300 " : t3);
    let fe = main2.G(ge, (e2) => e2 ? "border-gray-700" : "border-gray-100");
    function pe(e2) {
      let t3, n3, r2, o3, h2, M2, _2, C2, S2, O2, D2, T2, j2 = e2[0].closeButton && me(e2);
      var L2 = e2[1];
      return L2 && (M2 = new L2({})), {c() {
        t3 = main2.e("div"), n3 = main2.e("div"), r2 = main2.e("div"), j2 && j2.c(), o3 = main2.a(), h2 = main2.e("div"), M2 && main2.q(M2.$$.fragment), main2.b(h2, "class", "content svelte-ypgpsi"), main2.b(h2, "style", e2[12]), main2.b(r2, "class", _2 = "window " + e2[16]("bg-white") + " svelte-ypgpsi"), main2.b(r2, "role", "dialog"), main2.b(r2, "aria-modal", "true"), main2.b(r2, "style", e2[11]), main2.b(n3, "class", "window-wrap svelte-ypgpsi"), main2.b(n3, "style", e2[10]), main2.b(t3, "class", "bg svelte-ypgpsi"), main2.b(t3, "style", e2[9]);
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.d(t3, n3), main2.d(n3, r2), j2 && j2.m(r2, null), main2.d(r2, o3), main2.d(r2, h2), M2 && main2.r(M2, h2, null), e2[38](r2), e2[39](n3), e2[40](t3), O2 = true, D2 || (T2 = [main2.A(r2, "introstart", function() {
          main2.H(e2[5]) && e2[5].apply(this, arguments);
        }), main2.A(r2, "outrostart", function() {
          main2.H(e2[6]) && e2[6].apply(this, arguments);
        }), main2.A(r2, "introend", function() {
          main2.H(e2[7]) && e2[7].apply(this, arguments);
        }), main2.A(r2, "outroend", function() {
          main2.H(e2[8]) && e2[8].apply(this, arguments);
        }), main2.A(t3, "click", e2[20])], D2 = true);
      }, p(s2, i2) {
        if ((e2 = s2)[0].closeButton ? j2 ? (j2.p(e2, i2), 1 & i2[0] && main2.p(j2, 1)) : (j2 = me(e2), j2.c(), main2.p(j2, 1), j2.m(r2, o3)) : j2 && (main2.D(), main2.v(j2, 1, 1, () => {
          j2 = null;
        }), main2.x()), L2 !== (L2 = e2[1])) {
          if (M2) {
            main2.D();
            const e3 = M2;
            main2.v(e3.$$.fragment, 1, 0, () => {
              main2.w(e3, 1);
            }), main2.x();
          }
          L2 ? (M2 = new L2({}), main2.q(M2.$$.fragment), main2.p(M2.$$.fragment, 1), main2.r(M2, h2, null)) : M2 = null;
        }
        (!O2 || 4096 & i2[0]) && main2.b(h2, "style", e2[12]), (!O2 || 65536 & i2[0] && _2 !== (_2 = "window " + e2[16]("bg-white") + " svelte-ypgpsi")) && main2.b(r2, "class", _2), (!O2 || 2048 & i2[0]) && main2.b(r2, "style", e2[11]), (!O2 || 1024 & i2[0]) && main2.b(n3, "style", e2[10]), (!O2 || 512 & i2[0]) && main2.b(t3, "style", e2[9]);
      }, i(n4) {
        O2 || (main2.p(j2), M2 && main2.p(M2.$$.fragment, n4), main2.j(() => {
          C2 || (C2 = main2.k(r2, e2[15], e2[0].transitionWindowProps, true)), C2.run(1);
        }), main2.j(() => {
          S2 || (S2 = main2.k(t3, e2[14], e2[0].transitionBgProps, true)), S2.run(1);
        }), O2 = true);
      }, o(n4) {
        main2.v(j2), M2 && main2.v(M2.$$.fragment, n4), C2 || (C2 = main2.k(r2, e2[15], e2[0].transitionWindowProps, false)), C2.run(0), S2 || (S2 = main2.k(t3, e2[14], e2[0].transitionBgProps, false)), S2.run(0), O2 = false;
      }, d(n4) {
        n4 && main2.f(t3), j2 && j2.d(), M2 && main2.w(M2), e2[38](null), n4 && C2 && C2.end(), e2[39](null), e2[40](null), n4 && S2 && S2.end(), D2 = false, main2.B(T2);
      }};
    }
    function me(e2) {
      let t3, n3, r2, o3, s2;
      const i2 = [ye, $e], l2 = [];
      function c2(e3, n4) {
        return 1 & n4[0] && (t3 = !!e3[17](e3[0].closeButton)), t3 ? 0 : 1;
      }
      return n3 = c2(e2, [-1]), r2 = l2[n3] = i2[n3](e2), {c() {
        r2.c(), o3 = main2.I();
      }, m(e3, t4) {
        l2[n3].m(e3, t4), main2.c(e3, o3, t4), s2 = true;
      }, p(e3, t4) {
        let s3 = n3;
        n3 = c2(e3, t4), n3 === s3 ? l2[n3].p(e3, t4) : (main2.D(), main2.v(l2[s3], 1, 1, () => {
          l2[s3] = null;
        }), main2.x(), r2 = l2[n3], r2 ? r2.p(e3, t4) : (r2 = l2[n3] = i2[n3](e3), r2.c()), main2.p(r2, 1), r2.m(o3.parentNode, o3));
      }, i(e3) {
        s2 || (main2.p(r2), s2 = true);
      }, o(e3) {
        main2.v(r2), s2 = false;
      }, d(e3) {
        l2[n3].d(e3), e3 && main2.f(o3);
      }};
    }
    function $e(e2) {
      let t3, n3, r2;
      return {c() {
        t3 = main2.e("button"), main2.b(t3, "class", "close svelte-ypgpsi"), main2.b(t3, "style", e2[13]);
      }, m(o3, s2) {
        main2.c(o3, t3, s2), n3 || (r2 = main2.A(t3, "click", e2[18]), n3 = true);
      }, p(e3, n4) {
        8192 & n4[0] && main2.b(t3, "style", e3[13]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), n3 = false, r2();
      }};
    }
    function ye(e2) {
      let t3, n3, r2;
      var o3 = e2[0].closeButton;
      function s2(e3) {
        return {props: {onClose: e3[18]}};
      }
      return o3 && (t3 = new o3(s2(e2))), {c() {
        t3 && main2.q(t3.$$.fragment), n3 = main2.I();
      }, m(e3, o4) {
        t3 && main2.r(t3, e3, o4), main2.c(e3, n3, o4), r2 = true;
      }, p(e3, r3) {
        if (o3 !== (o3 = e3[0].closeButton)) {
          if (t3) {
            main2.D();
            const e4 = t3;
            main2.v(e4.$$.fragment, 1, 0, () => {
              main2.w(e4, 1);
            }), main2.x();
          }
          o3 ? (t3 = new o3(s2(e3)), main2.q(t3.$$.fragment), main2.p(t3.$$.fragment, 1), main2.r(t3, n3.parentNode, n3)) : t3 = null;
        }
      }, i(e3) {
        r2 || (t3 && main2.p(t3.$$.fragment, e3), r2 = true);
      }, o(e3) {
        t3 && main2.v(t3.$$.fragment, e3), r2 = false;
      }, d(e3) {
        e3 && main2.f(n3), t3 && main2.w(t3, e3);
      }};
    }
    function be(e2) {
      let t3, n3, r2, o3, s2 = e2[1] && pe(e2);
      const l2 = e2[37].default, c2 = main2.J(l2, e2, e2[36], null);
      return {c() {
        s2 && s2.c(), t3 = main2.a(), c2 && c2.c();
      }, m(i2, l3) {
        s2 && s2.m(i2, l3), main2.c(i2, t3, l3), c2 && c2.m(i2, l3), n3 = true, r2 || (o3 = main2.A(window, "keydown", e2[19]), r2 = true);
      }, p(e3, n4) {
        e3[1] ? s2 ? (s2.p(e3, n4), 2 & n4[0] && main2.p(s2, 1)) : (s2 = pe(e3), s2.c(), main2.p(s2, 1), s2.m(t3.parentNode, t3)) : s2 && (main2.D(), main2.v(s2, 1, 1, () => {
          s2 = null;
        }), main2.x()), c2 && c2.p && 32 & n4[1] && main2.K(c2, l2, e3, e3[36], n4, null, null);
      }, i(e3) {
        n3 || (main2.p(s2), main2.p(c2, e3), n3 = true);
      }, o(e3) {
        main2.v(s2), main2.v(c2, e3), n3 = false;
      }, d(e3) {
        s2 && s2.d(e3), e3 && main2.f(t3), c2 && c2.d(e3), r2 = false, o3();
      }};
    }
    function we(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2;
      main2.g(e2, he, (e3) => n3(16, d2 = e3));
      let {$$slots: u2 = {}, $$scope: g2} = t3;
      const h2 = main2.L(), f2 = main2.M;
      let {show: p2 = null} = t3, {key: m2 = "simple-modal"} = t3, {closeButton: $2 = true} = t3, {closeOnEsc: y2 = true} = t3, {closeOnOuterClick: b2 = true} = t3, {styleBg: w2 = {top: 0, left: 0}} = t3, {styleWindowWrap: v2 = {}} = t3, {styleWindow: x2 = {}} = t3, {styleContent: k2 = {}} = t3, {styleCloseButton: M2 = {}} = t3, {setContext: _2 = f2} = t3, {transitionBg: O2 = a} = t3, {transitionBgProps: j2 = {duration: 250}} = t3, {transitionWindow: L2 = O2} = t3, {transitionWindowProps: P2 = j2} = t3;
      const B2 = {closeButton: $2, closeOnEsc: y2, closeOnOuterClick: b2, styleBg: w2, styleWindowWrap: v2, styleWindow: x2, styleContent: k2, styleCloseButton: M2, transitionBg: O2, transitionBgProps: j2, transitionWindow: L2, transitionWindowProps: P2};
      let A2, I2, N2, E2 = {...B2}, z2 = null;
      const W2 = (e3) => Object.keys(e3).reduce((t4, n4) => `${t4}; ${((e4) => e4.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(n4)}: ${e3[n4]}`, ""), F2 = (e3) => !!(e3 && e3.constructor && e3.call && e3.apply), Y2 = () => {
      };
      let R2 = Y2, H2 = Y2, J2 = Y2, q2 = Y2;
      const V2 = (e3, t4 = {}, r3 = {}, o4 = {}) => {
        n3(1, z2 = function(e4, t5 = {}) {
          return function(n4) {
            return new e4({...n4, props: {...t5, ...n4.props}});
          };
        }(e3, t4)), n3(0, E2 = {...B2, ...r3}), n3(5, R2 = (e4) => {
          o4.onOpen && o4.onOpen(e4), h2("opening");
        }), n3(6, H2 = (e4) => {
          o4.onClose && o4.onClose(e4), h2("closing");
        }), n3(7, J2 = (e4) => {
          o4.onOpened && o4.onOpened(e4), h2("opened");
        }), n3(8, q2 = (e4) => {
          o4.onClosed && o4.onClosed(e4), h2("closed");
        });
      }, K2 = (e3 = {}) => {
        n3(6, H2 = e3.onClose || H2), n3(8, q2 = e3.onClosed || q2), n3(1, z2 = null);
      };
      return _2(m2, {open: V2, close: K2}), e2.$$set = (e3) => {
        "show" in e3 && n3(21, p2 = e3.show), "key" in e3 && n3(22, m2 = e3.key), "closeButton" in e3 && n3(23, $2 = e3.closeButton), "closeOnEsc" in e3 && n3(24, y2 = e3.closeOnEsc), "closeOnOuterClick" in e3 && n3(25, b2 = e3.closeOnOuterClick), "styleBg" in e3 && n3(26, w2 = e3.styleBg), "styleWindowWrap" in e3 && n3(27, v2 = e3.styleWindowWrap), "styleWindow" in e3 && n3(28, x2 = e3.styleWindow), "styleContent" in e3 && n3(29, k2 = e3.styleContent), "styleCloseButton" in e3 && n3(30, M2 = e3.styleCloseButton), "setContext" in e3 && n3(31, _2 = e3.setContext), "transitionBg" in e3 && n3(32, O2 = e3.transitionBg), "transitionBgProps" in e3 && n3(33, j2 = e3.transitionBgProps), "transitionWindow" in e3 && n3(34, L2 = e3.transitionWindow), "transitionWindowProps" in e3 && n3(35, P2 = e3.transitionWindowProps), "$$scope" in e3 && n3(36, g2 = e3.$$scope);
      }, e2.$$.update = () => {
        1 & e2.$$.dirty[0] && n3(9, r2 = W2(E2.styleBg)), 1 & e2.$$.dirty[0] && n3(10, o3 = W2(E2.styleWindowWrap)), 1 & e2.$$.dirty[0] && n3(11, s2 = W2(E2.styleWindow)), 1 & e2.$$.dirty[0] && n3(12, i2 = W2(E2.styleContent)), 1 & e2.$$.dirty[0] && n3(13, l2 = W2(E2.styleCloseButton)), 1 & e2.$$.dirty[0] && n3(14, a3 = E2.transitionBg), 1 & e2.$$.dirty[0] && n3(15, c2 = E2.transitionWindow), 2097152 & e2.$$.dirty[0] && (F2(p2) ? V2(p2) : K2());
      }, [E2, z2, A2, I2, N2, R2, H2, J2, q2, r2, o3, s2, i2, l2, a3, c2, d2, F2, K2, (e3) => {
        if (E2.closeOnEsc && z2 && e3.key === "Escape" && (e3.preventDefault(), K2()), z2 && e3.key === "Tab") {
          const t4 = N2.querySelectorAll("*"), n4 = Array.from(t4).filter((e4) => e4.tabIndex >= 0);
          let r3 = n4.indexOf(document.activeElement);
          r3 === -1 && e3.shiftKey && (r3 = 0), r3 += n4.length + (e3.shiftKey ? -1 : 1), r3 %= n4.length, n4[r3].focus(), e3.preventDefault();
        }
      }, (e3) => {
        !E2.closeOnOuterClick || e3.target !== A2 && e3.target !== I2 || (e3.preventDefault(), K2());
      }, p2, m2, $2, y2, b2, w2, v2, x2, k2, M2, _2, O2, j2, L2, P2, g2, u2, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          N2 = e3, n3(4, N2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          I2 = e3, n3(3, I2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          A2 = e3, n3(2, A2);
        });
      }];
    }
    class ve extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, we, be, main2.s, {show: 21, key: 22, closeButton: 23, closeOnEsc: 24, closeOnOuterClick: 25, styleBg: 26, styleWindowWrap: 27, styleWindow: 28, styleContent: 29, styleCloseButton: 30, setContext: 31, transitionBg: 32, transitionBgProps: 33, transitionWindow: 34, transitionWindowProps: 35}, [-1, -1]);
      }
    }
    const xe = {value: "\u{1F496}", color: "#fff"};
    const ke = [{value: "\uAD8C\uC740\uBE44", color: "#bbb0dc"}, {value: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", color: "#f1d2e7"}, {value: "\uAC15\uD61C\uC6D0", color: "#db706c"}, {value: "\uCD5C\uC608\uB098", color: "#fcf695"}, {value: "\uC774\uCC44\uC5F0", color: "#a7e0e1"}, {value: "\uAE40\uCC44\uC6D0", color: "#cee5d5"}, {value: "\uC57C\uBD80\uD0A4 \uB098\uCF54", color: "#b7d3e9"}, {value: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", color: "#f1c3aa"}, {value: "\uAE40\uBBFC\uC8FC", color: "#fff"}, {value: "\uC870\uC720\uB9AC", color: "#f3aa51"}, {value: "\uC548\uC720\uC9C4", color: "#567ace"}, {value: "\uC7A5\uC6D0\uC601", color: "#d9598c"}, {value: "\uC6B4\uC601\uD300", color: "gray"}];
    let Me;
    let _e = main2.F(function() {
      let e2 = ke.reduce((e3, t4) => (e3.set(t4.value, t4), e3), new Map([["\u{1F496}", xe]]));
      const t3 = localStorage.getItem("all_tag_dict");
      if (t3) {
        console.log("all tag backup loaded");
        const n3 = JSON.parse(t3);
        e2 = [...e2].reduce((e3, t4) => (e3.set(t4[0], t4[1]), e3), new Map(n3));
      }
      return e2;
    }());
    _e.subscribe((e2) => {
      var t3;
      localStorage.setItem("all_tag_dict", (t3 = e2, JSON.stringify([...t3])));
    }), _e.subscribe((e2) => {
      Me = (t3) => {
        const n3 = t3.map((t4) => {
          const n4 = t4[0], r2 = t4[1].filter((t5) => e2.has(t5)).map((t5) => e2.get(t5));
          return [n4, new Set(r2)];
        });
        return new Map(n3);
      };
    });
    let Ce = main2.F(function() {
      const e2 = localStorage.getItem("mail_to_tag_dict");
      let t3 = new Map([["m0", new Set([xe])]]);
      if (e2) {
        const n3 = JSON.parse(e2);
        t3 = Me(n3);
      }
      return t3;
    }());
    function Se(e2) {
      return [...e2].map((e3) => [e3[0], [...e3[1]].map((e4) => e4.value)]);
    }
    Ce.subscribe((e2) => {
      if (!e2)
        return null;
      [...e2].forEach((e3) => {
        e3[1].size == 0 && Ce.update((t4) => (t4.delete(e3[0]), t4));
      });
      const t3 = Se(e2);
      localStorage.setItem("mail_to_tag_dict", JSON.stringify(t3));
    });
    let Oe;
    let De = main2.F("");
    let Te = main2.F(Math.floor(12 * Math.random()));
    let je = main2.F(null);
    _e.subscribe((e2) => {
      Oe = (t3) => new Map(t3.filter((t4) => e2.has(t4[0])).map((t4) => [e2.get(t4[0]), new Set(t4[1])]));
    });
    let Le = main2.F(function() {
      const e2 = () => new Set();
      let t3 = ke.reduce((t4, n4) => (t4.set(n4, e2()), t4), new Map([[xe, e2()]]));
      const n3 = localStorage.getItem("tag_to_mail_dict");
      if (n3) {
        const e3 = JSON.parse(n3);
        t3 = [...Oe(e3)].reduce((e4, t4) => (e4.set(t4[0], t4[1]), e4), t3);
      }
      return t3;
    }());
    function Pe(e2) {
      return [...e2].map((e3) => [e3[0].value, [...e3[1]]]);
    }
    ue.subscribe((e2) => {
    }), Le.subscribe((e2) => {
      if ([...e2].forEach(([t4, n3]) => {
        if (n3 || (console.log(t4, n3), console.log(e2)), n3.size == 0 && t4.value != "\u{1F496}" && !ke.includes(t4)) {
          je.update((e4) => e4 == t4.value ? null : e4);
          const e3 = t4.value;
          Le.update((e4) => (e4.delete(t4), e4)), _e.update((t5) => (t5.delete(e3), t5));
        }
      }), !e2)
        return null;
      const t3 = Pe(e2);
      localStorage.setItem("tag_to_mail_dict", JSON.stringify(t3));
    });
    let Be = main2.F([{id: "", member: "", time: "", subject: "", preview: "", n: 1}]);
    let Ae = main2.F({id: "", member: "\uAD11\uBC30", time: "2021/03/09 19:23", subject: "\uC0AC\uD0D5", preview: "\uC704\uC988\uC6D0 \uC0AC\uD0D5 \uD478\uB529 \uB9DB \uC788\uB294\uAC70 \uC54C\uC558\uC5B4?? \uB9DB\uC788\uC5B4\uBCF4\uC5EC\uC11C \uC0AC\uC11C \uC5B8\uC81C\uBA39\uC744\uC9C0 \uACE0\uBBFC\uC911\uC774\uC57C ."});
    let Ie = main2.F(1);
    let Ne = main2.F(true);
    let Ee = main2.F(false);
    let ze = main2.F(true);
    let We = main2.G(ze, (e2) => !e2);
    const Fe = "http://" + window.location.hostname + ":8000/api";
    async function Ye(e2) {
      return await fetch(e2);
    }
    async function Re(e2, t3 = "") {
      return t3 ? fetch(e2, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(t3)}) : fetch(e2, {method: "POST"});
    }
    function He(e2, t3) {
      return Re(e2, t3).then((e3) => (console.log("\uBC31\uC5C5 \uC131\uACF5!"), e3)).catch((t4) => {
        console.error(e2 + " \uBC31\uC5C5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."), console.error(t4);
      });
    }
    const Je = (e2, t3) => {
      try {
        console.log(`${t3}+'\uCC28 \uC2DC\uB3C4`), console.log(e2.slice(0, 10));
        const n3 = [];
        for (let t4 = 0; t4 < e2.length; t4 += 2)
          n3.push(e2[t4]);
        return JSON.parse(n3.join(""));
      } catch (n3) {
        if (t3 < 4)
          return e2 = e2.slice(1), Je(e2, t3 + 1);
        throw n3;
      }
    };
    const qe = (e2) => {
      try {
        return JSON.parse(e2);
      } catch (t3) {
        if (e2.slice(0, 9) == "<!DOCTYPE")
          throw t3;
        if (t3 instanceof SyntaxError)
          return console.log("json \uC77D\uAE30 \uC2E4\uD328. \uC7AC\uC2DC\uB3C4\uD569\uB2C8\uB2E4."), Je(e2.slice(2), 2);
        console.error(t3);
      }
    };
    const Ve = Fe + "/all-tag-dict";
    const Ke = ke.concat([xe]);
    const Ue = {get: async () => {
      const e2 = await Ye(Ve + "/").then((e3) => e3.text()).then(qe).then((e3) => e3.tag_list);
      return Ke.concat(e2);
    }, save: async (e2) => {
      const t3 = {tag_list: [...e2].map((e3) => e3[1])};
      return console.log(t3), He(Ve + "/", t3);
    }, addTag: async (e2) => Re(Ve + "/tag", e2), updateTag: async (e2, t3) => await async function(e3, t4) {
      fetch(e3, {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(t4)});
    }(Ve + "/tag/" + e2, t3)};
    const Ze = new Set(ke.map((e2) => e2.value));
    const Ge = Fe + "/mail-tag-dict";
    var Qe = {AllTagDict: Ue, MailTagDict: {get: async () => await Ye(Ge + "/").then((e2) => e2.json()), save: async (e2, t3) => {
      const n3 = {mail_to_tag_dict: Se(e2), tag_to_mail_dict: Pe(t3).filter((e3) => !Ze.has(e3[0]))};
      return console.log(n3), He(Ge + "/", n3);
    }, addTag: async (e2, t3) => Re(`${Ge}/mail/${e2}/tag/${t3}`).then((e3) => (console.log("\uC11C\uBC84\uC5D0 \uD0DC\uADF8 \uCD94\uAC00 \uC644\uB8CC."), e3)), deleteTag: async (e2, t3) => await async function(e3) {
      return await fetch(e3, {method: "DELETE"});
    }(`${Ge}/mail/${e2}/tag/${t3}`)}, ping: fetch(Fe + "/ping"), load_pm: (e2) => Re(Fe + "/private-mail/", {token: e2})};
    const Xe = {0: "#d9598c", 1: "#f1d2e7", 2: "#f3aa51", 3: "#fcf695", 4: "#567ace", 5: "#b7d3e9", 6: "#bbb0dc", 7: "#db706c", 8: "#f1c3aa", 9: "#cee5d5", 10: "#fff", 11: "#a7e0e1", 12: "gray"};
    const et = {"#d9598c": "#d02f6f", "#f1d2e7": "#c33c98", "#f3aa51": "#ee8b11", "#fcf695": "#dfd407", "#567ace": "#345ab2", "#b7d3e9": "#3c89c3", "#bbb0dc": "#674eb1", "#db706c": "#cd3732", "#f1c3aa": "#dd6422", "#cee5d5": "#4f9665", "#fff": "#ddd", "#a7e0e1": "#41bcbe", gray: "#595959", LightPink: "#ff3352"};
    let tt = main2.F({});
    main2.G(tt, (e2) => Object.keys(e2).reduce((e3, t3) => Object.assign(Object.assign({}, e3), {[tt[t3]]: t3}), {0: "\uC7A5\uC6D0\uC601"}));
    const nt = {0: "\uC7A5\uC6D0\uC601", 1: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", 2: "\uC870\uC720\uB9AC", 3: "\uCD5C\uC608\uB098", 4: "\uC548\uC720\uC9C4", 5: "\uC57C\uBD80\uD0A4 \uB098\uCF54", 6: "\uAD8C\uC740\uBE44", 7: "\uAC15\uD61C\uC6D0", 8: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", 9: "\uAE40\uCC44\uC6D0", 10: "\uAE40\uBBFC\uC8FC", 11: "\uC774\uCC44\uC5F0", 12: "\uC6B4\uC601\uD300"};
    const rt = new Set(["\u{1F496}", "\uC7A5\uC6D0\uC601", "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", "\uC870\uC720\uB9AC", "\uCD5C\uC608\uB098", "\uC548\uC720\uC9C4", "\uC57C\uBD80\uD0A4 \uB098\uCF54", "\uAD8C\uC740\uBE44", "\uAC15\uD61C\uC6D0", "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", "\uAE40\uCC44\uC6D0", "\uAE40\uBBFC\uC8FC", "\uC774\uCC44\uC5F0", "\uC6B4\uC601\uD300", "\uC0DD\uC77C"]);
    function ot(e2) {
      let t3, n3, r2, o3, i2;
      const c2 = e2[5].default, h2 = main2.J(c2, e2, e2[4], null);
      return {c() {
        t3 = main2.e("button"), h2 && h2.c(), main2.b(t3, "id", e2[1]), main2.b(t3, "class", n3 = "rounded m-1 p-0.5 pl-1 pr-1\r\n    " + (e2[3] ? "text-gray-300 " + (e2[2] ? "bg-gray-900" : "bg-gray-800") : "bg-red-100"));
      }, m(n4, s2) {
        main2.c(n4, t3, s2), h2 && h2.m(t3, null), r2 = true, o3 || (i2 = main2.A(t3, "click", function() {
          main2.H(e2[0]) && e2[0].apply(this, arguments);
        }), o3 = true);
      }, p(o4, [s2]) {
        e2 = o4, h2 && h2.p && 16 & s2 && main2.K(h2, c2, e2, e2[4], s2, null, null), (!r2 || 2 & s2) && main2.b(t3, "id", e2[1]), (!r2 || 12 & s2 && n3 !== (n3 = "rounded m-1 p-0.5 pl-1 pr-1\r\n    " + (e2[3] ? "text-gray-300 " + (e2[2] ? "bg-gray-900" : "bg-gray-800") : "bg-red-100"))) && main2.b(t3, "class", n3);
      }, i(e3) {
        r2 || (main2.p(h2, e3), r2 = true);
      }, o(e3) {
        main2.v(h2, e3), r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), h2 && h2.d(e3), o3 = false, i2();
      }};
    }
    function st(e2, t3, n3) {
      let r2;
      main2.g(e2, ge, (e3) => n3(3, r2 = e3));
      let {$$slots: o3 = {}, $$scope: s2} = t3, {onClick: i2} = t3, {id: l2} = t3, {strong: a3 = false} = t3;
      return e2.$$set = (e3) => {
        "onClick" in e3 && n3(0, i2 = e3.onClick), "id" in e3 && n3(1, l2 = e3.id), "strong" in e3 && n3(2, a3 = e3.strong), "$$scope" in e3 && n3(4, s2 = e3.$$scope);
      }, [i2, l2, a3, r2, s2, o3];
    }
    class it extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, st, ot, main2.s, {onClick: 0, id: 1, strong: 2});
      }
    }
    function lt(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[12] = t3[n3], r2;
    }
    function at(e2) {
      let t3, n3, r2, o3, u2, g2, h2, f2 = e2[12].value + "";
      return {c() {
        t3 = main2.e("label"), n3 = main2.e("input"), r2 = main2.a(), o3 = main2.t(f2), u2 = main2.a(), main2.b(n3, "id", "TagUpdateColorRadio-" + e2[12].value), main2.b(n3, "type", "radio"), n3.__value = e2[12].color, n3.value = n3.__value, e2[10][0].push(n3), main2.h(t3, "background-color", e2[3] ? et[e2[12].color] : e2[12].color), main2.b(t3, "class", (e2[12].color == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-0.5 pl-1 pr-1.5");
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.d(t3, n3), n3.checked = n3.__value === e2[1], main2.d(t3, r2), main2.d(t3, o3), main2.d(t3, u2), g2 || (h2 = main2.A(n3, "change", e2[9]), g2 = true);
      }, p(e3, r3) {
        2 & r3 && (n3.checked = n3.__value === e3[1]), 8 & r3 && main2.h(t3, "background-color", e3[3] ? et[e3[12].color] : e3[12].color);
      }, d(r3) {
        r3 && main2.f(t3), e2[10][0].splice(e2[10][0].indexOf(n3), 1), g2 = false, h2();
      }};
    }
    function ct(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uACB0\uC815\uD588\uC5B4\uC694!");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function dt(e2) {
      let t3, n3, r2, o3, u2, h2, f2, m2, v2, x2, k2, M2, _2 = e2[4], C2 = [];
      for (let t4 = 0; t4 < _2.length; t4 += 1)
        C2[t4] = at(lt(e2, _2, t4));
      return v2 = new it({props: {id: "TagUpdateButton", onClick: e2[2], strong: true, $$slots: {default: [ct]}, $$scope: {ctx: e2}}}), {c() {
        t3 = main2.e("div"), n3 = main2.e("h3"), n3.textContent = "\uD0DC\uADF8 \uC218\uC815", r2 = main2.a(), o3 = main2.e("input"), h2 = main2.a(), f2 = main2.e("div");
        for (let e3 = 0; e3 < C2.length; e3 += 1)
          C2[e3].c();
        m2 = main2.a(), main2.q(v2.$$.fragment), main2.b(n3, "class", "svelte-qli48t"), main2.b(o3, "type", "text"), main2.b(o3, "id", "TagUpdateInput"), main2.h(o3, "text-align", "center"), main2.h(o3, "background-color", e2[3] ? et[e2[1]] : e2[1]), main2.b(o3, "class", u2 = (e2[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20"), main2.h(t3, "text-align", "center"), main2.b(f2, "class", "flex flex-wrap p-1");
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.d(t3, n3), main2.d(t3, r2), main2.d(t3, o3), main2.N(o3, e2[0]), main2.c(s2, h2, i2), main2.c(s2, f2, i2);
        for (let e3 = 0; e3 < C2.length; e3 += 1)
          C2[e3].m(f2, null);
        main2.c(s2, m2, i2), main2.r(v2, s2, i2), x2 = true, k2 || (M2 = main2.A(o3, "input", e2[8]), k2 = true);
      }, p(e3, [t4]) {
        if ((!x2 || 10 & t4) && main2.h(o3, "background-color", e3[3] ? et[e3[1]] : e3[1]), (!x2 || 2 & t4 && u2 !== (u2 = (e3[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20")) && main2.b(o3, "class", u2), 1 & t4 && o3.value !== e3[0] && main2.N(o3, e3[0]), 26 & t4) {
          let n5;
          for (_2 = e3[4], n5 = 0; n5 < _2.length; n5 += 1) {
            const r3 = lt(e3, _2, n5);
            C2[n5] ? C2[n5].p(r3, t4) : (C2[n5] = at(r3), C2[n5].c(), C2[n5].m(f2, null));
          }
          for (; n5 < C2.length; n5 += 1)
            C2[n5].d(1);
          C2.length = _2.length;
        }
        const n4 = {};
        4 & t4 && (n4.onClick = e3[2]), 32768 & t4 && (n4.$$scope = {dirty: t4, ctx: e3}), v2.$set(n4);
      }, i(e3) {
        x2 || (main2.p(v2.$$.fragment, e3), x2 = true);
      }, o(e3) {
        main2.v(v2.$$.fragment, e3), x2 = false;
      }, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(h2), e3 && main2.f(f2), main2.y(C2, e3), e3 && main2.f(m2), main2.w(v2, e3), k2 = false, M2();
      }};
    }
    function ut(e2, t3, n3) {
      let r2, o3, s2, i2;
      main2.g(e2, ue, (e3) => n3(6, o3 = e3)), main2.g(e2, _e, (e3) => n3(7, s2 = e3)), main2.g(e2, ge, (e3) => n3(3, i2 = e3));
      let {tag: l2} = t3, a3 = l2.value, c2 = l2.color;
      const {close: d2} = main2.O("simple-modal");
      return e2.$$set = (e3) => {
        "tag" in e3 && n3(5, l2 = e3.tag);
      }, e2.$$.update = () => {
        227 & e2.$$.dirty && n3(2, r2 = () => {
          o3 && Qe.AllTagDict.updateTag(l2.value, {value: a3, color: c2});
          const e3 = s2.get(l2.value);
          s2.delete(e3.value), e3.value = a3, e3.color = c2, s2.set(a3, e3), _e.set(s2), d2();
        });
      }, [a3, c2, r2, i2, [{value: "\uC218\uB193\uC740\uBCC4\uBE5B", color: "#bbb0dc"}, {value: "\uBC9A\uAF43\uD551\uD06C", color: "#f1d2e7"}, {value: "\uAC15\uCF54\uB784", color: "#db706c"}, {value: "\uC60C\uB85C\uC6B0", color: "#fcf695"}, {value: "\uCC48\uBA54\uB784\uB4DC", color: "#a7e0e1"}, {value: "\uCC54\uBB34", color: "#cee5d5"}, {value: "\uB098\uBD80\uD0A4\uD558\uB298", color: "#b7d3e9"}, {value: "\uD1A0\uBBF8\uBCA0\uC774\uC9C0", color: "#f1c3aa"}, {value: "\uBC31\uC124\uBBFC\uC8FC", color: "#fff"}, {value: "\uC728\uB80C\uC9C0", color: "#f3aa51"}, {value: "\uBE14\uB8E8\uC9C0\uB2C8", color: "#567ace"}, {value: "\uCE94\uB514\uD551\uD06C", color: "#d9598c"}], l2, o3, s2, function() {
        a3 = this.value, n3(0, a3);
      }, function() {
        c2 = this.__value, n3(1, c2);
      }, [[]]];
    }
    class gt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ut, dt, main2.s, {tag: 5});
      }
    }
    function ht(e2) {
      let t3, n3, r2;
      return {c() {
        t3 = main2.P("svg"), n3 = main2.P("path"), main2.b(n3, "fill", "currentColor"), main2.b(n3, "d", e2[0]), main2.b(t3, "aria-hidden", "true"), main2.b(t3, "class", r2 = main2.Q(e2[1]) + " svelte-go33dg"), main2.b(t3, "role", "img"), main2.b(t3, "xmlns", "http://www.w3.org/2000/svg"), main2.b(t3, "viewBox", e2[2]);
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.d(t3, n3);
      }, p(e3, [o3]) {
        1 & o3 && main2.b(n3, "d", e3[0]), 2 & o3 && r2 !== (r2 = main2.Q(e3[1]) + " svelte-go33dg") && main2.b(t3, "class", r2), 4 & o3 && main2.b(t3, "viewBox", e3[2]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function ft(e2, t3, n3) {
      let {icon: r2} = t3, o3 = [], s2 = "", i2 = "";
      return e2.$$set = (e3) => {
        n3(4, t3 = main2.R(main2.R({}, t3), main2.T(e3))), "icon" in e3 && n3(3, r2 = e3.icon);
      }, e2.$$.update = () => {
        8 & e2.$$.dirty && n3(2, i2 = "0 0 " + r2.icon[0] + " " + r2.icon[1]), n3(1, s2 = "fa-svelte " + (t3.class ? t3.class : "")), 8 & e2.$$.dirty && n3(0, o3 = r2.icon[4]);
      }, t3 = main2.T(t3), [o3, s2, i2, r2];
    }
    class pt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ft, ht, main2.s, {icon: 3});
      }
    }
    function mt(e2, t3, n3) {
      return e2(n3 = {path: t3, exports: {}, require: function(e3, t4) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(t4 == null && n3.path);
      }}, n3.exports), n3.exports;
    }
    var $t = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "twitter", r2 = [], o3 = "f099", s2 = "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z";
      t3.definition = {prefix: "fab", iconName: n3, icon: [512, 512, r2, o3, s2]}, t3.faTwitter = t3.definition, t3.prefix = "fab", t3.iconName = n3, t3.width = 512, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    var yt = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "facebook", r2 = [], o3 = "f09a", s2 = "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z";
      t3.definition = {prefix: "fab", iconName: n3, icon: [512, 512, r2, o3, s2]}, t3.faFacebook = t3.definition, t3.prefix = "fab", t3.iconName = n3, t3.width = 512, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    var bt = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "instagram", r2 = [], o3 = "f16d", s2 = "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";
      t3.definition = {prefix: "fab", iconName: n3, icon: [448, 512, r2, o3, s2]}, t3.faInstagram = t3.definition, t3.prefix = "fab", t3.iconName = n3, t3.width = 448, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    var wt = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "youtube", r2 = [], o3 = "f167", s2 = "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";
      t3.definition = {prefix: "fab", iconName: n3, icon: [576, 512, r2, o3, s2]}, t3.faYoutube = t3.definition, t3.prefix = "fab", t3.iconName = n3, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    var vt = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "star", r2 = [], o3 = "f005", s2 = "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z";
      t3.definition = {prefix: "fas", iconName: n3, icon: [576, 512, r2, o3, s2]}, t3.faStar = t3.definition, t3.prefix = "fas", t3.iconName = n3, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    function xt(e2) {
      let t3, n3, r2, o3 = e2[13].has(e2[0].value), s2 = e2[0].value + "", l2 = o3 && Mt(e2);
      return {c() {
        l2 && l2.c(), t3 = main2.a(), n3 = main2.t(s2);
      }, m(e3, o4) {
        l2 && l2.m(e3, o4), main2.c(e3, t3, o4), main2.c(e3, n3, o4), r2 = true;
      }, p(e3, i2) {
        1 & i2 && (o3 = e3[13].has(e3[0].value)), o3 ? l2 ? (l2.p(e3, i2), 1 & i2 && main2.p(l2, 1)) : (l2 = Mt(e3), l2.c(), main2.p(l2, 1), l2.m(t3.parentNode, t3)) : l2 && (main2.D(), main2.v(l2, 1, 1, () => {
          l2 = null;
        }), main2.x()), (!r2 || 1 & i2) && s2 !== (s2 = e3[0].value + "") && main2.o(n3, s2);
      }, i(e3) {
        r2 || (main2.p(l2), r2 = true);
      }, o(e3) {
        main2.v(l2), r2 = false;
      }, d(e3) {
        l2 && l2.d(e3), e3 && main2.f(t3), e3 && main2.f(n3);
      }};
    }
    function kt(e2) {
      let t3, n3;
      return t3 = new pt({props: {icon: vt.faStar}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p: main2.n, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Mt(e2) {
      let t3, n3;
      return t3 = new pt({props: {class: "mb-1 text-white", icon: e2[9]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        512 & n4 && (r2.icon = e3[9]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function _t(e2) {
      let t3, n3, r2, o3, i2;
      return {c() {
        t3 = main2.e("span"), n3 = main2.t("X"), main2.b(t3, "style", e2[10]), main2.b(t3, "class", r2 = (e2[3] ? "Remove" : "Delete") + "Tag-" + e2[0].value.replace(" ", "-") + "\r\n" + e2[11] + "\r\n" + (e2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (e2[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + e2[2] + " svelte-mrene9");
      }, m(r3, s2) {
        main2.c(r3, t3, s2), main2.d(t3, n3), o3 || (i2 = main2.A(t3, "click", function() {
          main2.H(e2[3] ? e2[3] : e2[4]) && (e2[3] ? e2[3] : e2[4]).apply(this, arguments);
        }), o3 = true);
      }, p(n4, o4) {
        e2 = n4, 1024 & o4 && main2.b(t3, "style", e2[10]), 2061 & o4 && r2 !== (r2 = (e2[3] ? "Remove" : "Delete") + "Tag-" + e2[0].value.replace(" ", "-") + "\r\n" + e2[11] + "\r\n" + (e2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (e2[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + e2[2] + " svelte-mrene9") && main2.b(t3, "class", r2);
      }, d(e3) {
        e3 && main2.f(t3), o3 = false, i2();
      }};
    }
    function Ct(e2) {
      let t3, n3, r2, o3, c2, y2, b2, w2, v2;
      const x2 = [kt, xt], M2 = [];
      function _2(e3, t4) {
        return e3[0].value == "\u{1F496}" ? 0 : 1;
      }
      n3 = _2(e2), r2 = M2[n3] = x2[n3](e2);
      let C2 = (e2[3] || e2[1] && e2[0].value != "\uC0DD\uC77C") && _t(e2);
      return {c() {
        t3 = main2.e("span"), r2.c(), c2 = main2.a(), C2 && C2.c(), y2 = main2.I(), main2.b(t3, "style", e2[10]), main2.b(t3, "class", o3 = "Tag-" + e2[0].value.replace(" ", "-") + " " + e2[7] + " " + e2[8] + " m-0.5 mr-0 text-" + e2[2] + "\r\n" + e2[11] + " " + (e2[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9");
      }, m(r3, o4) {
        main2.c(r3, t3, o4), M2[n3].m(t3, null), main2.c(r3, c2, o4), C2 && C2.m(r3, o4), main2.c(r3, y2, o4), b2 = true, w2 || (v2 = [main2.A(t3, "pointerdown", function() {
          main2.H(e2[5]) && e2[5].apply(this, arguments);
        }), main2.A(t3, "pointerup", function() {
          main2.H(e2[6]) && e2[6].apply(this, arguments);
        }), main2.A(t3, "click", function() {
          main2.H(e2[12](e2[0])) && e2[12](e2[0]).apply(this, arguments);
        })], w2 = true);
      }, p(s2, [i2]) {
        let a3 = n3;
        n3 = _2(e2 = s2), n3 === a3 ? M2[n3].p(e2, i2) : (main2.D(), main2.v(M2[a3], 1, 1, () => {
          M2[a3] = null;
        }), main2.x(), r2 = M2[n3], r2 ? r2.p(e2, i2) : (r2 = M2[n3] = x2[n3](e2), r2.c()), main2.p(r2, 1), r2.m(t3, null)), (!b2 || 1024 & i2) && main2.b(t3, "style", e2[10]), (!b2 || 2437 & i2 && o3 !== (o3 = "Tag-" + e2[0].value.replace(" ", "-") + " " + e2[7] + " " + e2[8] + " m-0.5 mr-0 text-" + e2[2] + "\r\n" + e2[11] + " " + (e2[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9")) && main2.b(t3, "class", o3), e2[3] || e2[1] && e2[0].value != "\uC0DD\uC77C" ? C2 ? C2.p(e2, i2) : (C2 = _t(e2), C2.c(), C2.m(y2.parentNode, y2)) : C2 && (C2.d(1), C2 = null);
      }, i(e3) {
        b2 || (main2.p(r2), b2 = true);
      }, o(e3) {
        main2.v(r2), b2 = false;
      }, d(e3) {
        e3 && main2.f(t3), M2[n3].d(), e3 && main2.f(c2), C2 && C2.d(e3), e3 && main2.f(y2), w2 = false, main2.B(v2);
      }};
    }
    function St(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2, h2, f2, p2, m2, $2, y2, b2, w2, v2, x2, k2;
      main2.g(e2, _e, (e3) => n3(15, f2 = e3)), main2.g(e2, Le, (e3) => n3(16, p2 = e3)), main2.g(e2, Ae, (e3) => n3(17, m2 = e3)), main2.g(e2, Ce, (e3) => n3(18, $2 = e3)), main2.g(e2, ue, (e3) => n3(19, y2 = e3)), main2.g(e2, main2.U, (e3) => n3(25, b2 = e3)), main2.g(e2, main2.V, (e3) => n3(26, w2 = e3)), main2.g(e2, je, (e3) => n3(27, v2 = e3)), main2.g(e2, ge, (e3) => n3(24, x2 = e3)), main2.g(e2, fe, (e3) => n3(11, k2 = e3));
      var M2 = this && this.__awaiter || function(e3, t4, n4, r3) {
        return new (n4 || (n4 = Promise))(function(o4, s3) {
          function i3(e4) {
            try {
              a4(r3.next(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function l3(e4) {
            try {
              a4(r3.throw(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function a4(e4) {
            var t5;
            e4.done ? o4(e4.value) : (t5 = e4.value, t5 instanceof n4 ? t5 : new n4(function(e5) {
              e5(t5);
            })).then(i3, l3);
          }
          a4((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      let {tag: _2} = t3, {canDelete: S2 = false} = t3, {size: O2 = "xs"} = t3, {onRemove: D2 = null} = t3;
      const {open: T2} = main2.O("simple-modal"), j2 = () => {
        T2(gt, {tag: _2});
      };
      let L2;
      const P2 = new Map([["\uD2B8\uC704\uD130", $t.faTwitter], ["\uD398\uC774\uC2A4\uBD81", yt.faFacebook], ["\uC778\uC2A4\uD0C0", bt.faInstagram], ["\uC720\uD29C\uBE0C", wt.faYoutube]]);
      return e2.$$set = (e3) => {
        "tag" in e3 && n3(0, _2 = e3.tag), "canDelete" in e3 && n3(1, S2 = e3.canDelete), "size" in e3 && n3(2, O2 = e3.size), "onRemove" in e3 && n3(3, D2 = e3.onRemove);
      }, e2.$$.update = () => {
        1015809 & e2.$$.dirty && n3(4, r2 = () => M2(void 0, void 0, void 0, function* () {
          const e3 = f2.get(_2.value);
          p2.has(e3) && p2.get(e3).delete(m2.id), Le.set(p2), $2.has(m2.id) && $2.get(m2.id).delete(e3), Ce.set($2), y2 && (yield Qe.MailTagDict.deleteTag(m2.id, _2.value).then((e4) => {
            console.log("\uC11C\uBC84\uC5D0\uC11C \uD0DC\uADF8 \uC0AD\uC81C \uC131\uACF5");
          }));
        })), 1 & e2.$$.dirty && n3(5, o3 = () => {
          rt.has(_2.value) ? n3(14, L2 = setTimeout(() => {
            console.log("\uAE30\uBCF8 \uD0DC\uADF8\uB294 \uC544\uC9C1 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
          }, 300)) : n3(14, L2 = setTimeout(j2, 300));
        }), 16384 & e2.$$.dirty && n3(6, s2 = (e3) => {
          clearTimeout(L2);
        }), 1 & e2.$$.dirty && n3(7, i2 = _2.color == "#fff" ? "border-2 p-0.5" : "p-1"), 11 & e2.$$.dirty && n3(8, l2 = D2 || S2 && _2.value != "\uC0DD\uC77C" ? "rounded-l border-r-0" : "rounded"), 1 & e2.$$.dirty && n3(20, a3 = _2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#555" : _2.color), 1048576 & e2.$$.dirty && n3(21, c2 = et[a3]), 1 & e2.$$.dirty && n3(22, d2 = () => _2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#b299e6" : _2.value == "\u{1F496}" ? "#ffb40d" : "black"), 4194305 & e2.$$.dirty && n3(23, u2 = () => d2() != "black" ? d2() : _2.value == "\uAE40\uBBFC\uC8FC" || _2.value == "\uCD5C\uC608\uB098" ? "#333" : "#eee"), 1 & e2.$$.dirty && n3(9, g2 = P2.get(_2.value)), 32505856 & e2.$$.dirty && n3(10, h2 = `background-color: ${x2 ? c2 : a3};
            color: ${x2 ? u2() : d2()};`);
      }, [_2, S2, O2, D2, r2, o3, s2, i2, l2, g2, h2, k2, (e3) => () => {
        je.set(e3.value), b2("./", Object.assign(Object.assign({}, w2), {tag: v2, nowPage: 1}));
      }, P2, L2, f2, p2, m2, $2, y2, a3, c2, d2, u2, x2];
    }
    class Ot extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, St, Ct, main2.s, {tag: 0, canDelete: 1, size: 2, onRemove: 3});
      }
    }
    function Dt(e2) {
      let t3, n3, r2, o3 = (e2[0].slice(11) == "00:00" ? e2[0].slice(0, 10) : e2[0]) + "";
      return {c() {
        t3 = main2.e("span"), n3 = main2.t(o3), main2.b(t3, "class", r2 = "border-1 rounded\r\n" + (e2[2] ? "border-2 border-gray-900 bg-gray-600" : "bg-red-100") + "\r\n" + (e2[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + e2[1]);
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.d(t3, n3);
      }, p(e3, [s2]) {
        1 & s2 && o3 !== (o3 = (e3[0].slice(11) == "00:00" ? e3[0].slice(0, 10) : e3[0]) + "") && main2.o(n3, o3), 6 & s2 && r2 !== (r2 = "border-1 rounded\r\n" + (e3[2] ? "border-2 border-gray-900 bg-gray-600" : "bg-red-100") + "\r\n" + (e3[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + e3[1]) && main2.b(t3, "class", r2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Tt(e2, t3, n3) {
      let r2;
      main2.g(e2, ge, (e3) => n3(2, r2 = e3));
      let {time: o3} = t3, {size: s2 = "xs"} = t3;
      return e2.$$set = (e3) => {
        "time" in e3 && n3(0, o3 = e3.time), "size" in e3 && n3(1, s2 = e3.size);
      }, [o3, s2, r2];
    }
    class jt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Tt, Dt, main2.s, {time: 0, size: 1});
      }
    }
    function Lt(e2) {
      let t3, n3, r2, o3, c2, u2;
      return {c() {
        t3 = main2.e("input"), r2 = main2.a(), o3 = main2.e("button"), o3.textContent = "\uCD94\uAC00", main2.b(t3, "type", "text"), main2.b(t3, "id", "TagInput"), main2.b(t3, "class", n3 = "border-2 p-1 rounded w-16 text-xs " + e2[1]("bg-white") + " " + e2[2]), main2.b(t3, "placeholder", "\uC0C8 \uD0DC\uADF8"), main2.b(o3, "id", "AddTagButton"), main2.b(o3, "class", "text-xs text-black shadow rounded bg-red-400 p-1 m-1");
      }, m(n4, s2) {
        main2.c(n4, t3, s2), main2.N(t3, e2[0]), main2.c(n4, r2, s2), main2.c(n4, o3, s2), c2 || (u2 = [main2.A(t3, "input", e2[5]), main2.A(t3, "keypress", e2[6]), main2.A(o3, "click", e2[3])], c2 = true);
      }, p(e3, [r3]) {
        6 & r3 && n3 !== (n3 = "border-2 p-1 rounded w-16 text-xs " + e3[1]("bg-white") + " " + e3[2]) && main2.b(t3, "class", n3), 1 & r3 && t3.value !== e3[0] && main2.N(t3, e3[0]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(r2), e3 && main2.f(o3), c2 = false, main2.B(u2);
      }};
    }
    function Pt(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2;
      main2.g(e2, De, (e3) => n3(0, o3 = e3)), main2.g(e2, Te, (e3) => n3(4, s2 = e3)), main2.g(e2, _e, (e3) => n3(8, i2 = e3)), main2.g(e2, ue, (e3) => n3(9, l2 = e3)), main2.g(e2, Le, (e3) => n3(10, a3 = e3)), main2.g(e2, Ae, (e3) => n3(11, c2 = e3)), main2.g(e2, Ce, (e3) => n3(12, d2 = e3)), main2.g(e2, he, (e3) => n3(1, u2 = e3)), main2.g(e2, fe, (e3) => n3(2, g2 = e3));
      var h2 = this && this.__awaiter || function(e3, t4, n4, r3) {
        return new (n4 || (n4 = Promise))(function(o4, s3) {
          function i3(e4) {
            try {
              a4(r3.next(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function l3(e4) {
            try {
              a4(r3.throw(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function a4(e4) {
            var t5;
            e4.done ? o4(e4.value) : (t5 = e4.value, t5 instanceof n4 ? t5 : new n4(function(e5) {
              e5(t5);
            })).then(i3, l3);
          }
          a4((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      const f2 = () => h2(void 0, void 0, void 0, function* () {
        if (o3 == "")
          return alert("\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."), null;
        let e3 = r2;
        i2.has(o3) ? e3 = i2.get(o3) : (i2.set(o3, r2), _e.set(i2), l2 && (yield Qe.AllTagDict.addTag(r2))), a3.has(e3) ? a3.get(e3).add(c2.id) : a3.set(e3, new Set([c2.id])), Le.set(a3), d2.has(c2.id) ? d2.get(c2.id).add(e3) : d2.set(c2.id, new Set([e3])), Ce.set(d2), main2.W(De, o3 = "", o3), main2.W(Te, s2 = (s2 + 1) % 12, s2), l2 && (console.log(e3), yield Qe.MailTagDict.addTag(c2.id, e3.value));
      });
      return e2.$$.update = () => {
        17 & e2.$$.dirty && (r2 = {value: o3, color: Xe[s2]});
      }, [o3, u2, g2, f2, s2, function() {
        o3 = this.value, De.set(o3);
      }, (e3) => {
        e3.code === "Enter" && f2();
      }];
    }
    class Bt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Pt, Lt, main2.s, {});
      }
    }
    var At = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "star", r2 = [], o3 = "f005", s2 = "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z";
      t3.definition = {prefix: "far", iconName: n3, icon: [576, 512, r2, o3, s2]}, t3.faStar = t3.definition, t3.prefix = "far", t3.iconName = n3, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    function It(e2) {
      let t3, n3, r2, o3, c2, h2, f2;
      return n3 = new pt({props: {class: "float-" + e2[0] + " text-xl", icon: e2[1] ? vt.faStar : At.faStar}}), {c() {
        t3 = main2.e("label"), main2.q(n3.$$.fragment), r2 = main2.a(), o3 = main2.e("input"), main2.h(t3, "color", e2[1] ? "#ffb40d" : "#999"), main2.b(t3, "for", "favorite"), main2.b(o3, "type", "checkbox"), main2.b(o3, "class", "hidden"), main2.b(o3, "id", "favorite");
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.r(n3, t3, null), main2.c(s2, r2, i2), main2.c(s2, o3, i2), c2 = true, h2 || (f2 = main2.A(t3, "click", function() {
          main2.H(e2[2]) && e2[2].apply(this, arguments);
        }), h2 = true);
      }, p(r3, [o4]) {
        e2 = r3;
        const s2 = {};
        1 & o4 && (s2.class = "float-" + e2[0] + " text-xl"), 2 & o4 && (s2.icon = e2[1] ? vt.faStar : At.faStar), n3.$set(s2), (!c2 || 2 & o4) && main2.h(t3, "color", e2[1] ? "#ffb40d" : "#999");
      }, i(e3) {
        c2 || (main2.p(n3.$$.fragment, e3), c2 = true);
      }, o(e3) {
        main2.v(n3.$$.fragment, e3), c2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(n3), e3 && main2.f(r2), e3 && main2.f(o3), h2 = false, f2();
      }};
    }
    function Nt(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2;
      main2.g(e2, _e, (e3) => n3(5, l2 = e3)), main2.g(e2, Le, (e3) => n3(7, a3 = e3)), main2.g(e2, ue, (e3) => n3(8, c2 = e3));
      var d2 = this && this.__awaiter || function(e3, t4, n4, r3) {
        return new (n4 || (n4 = Promise))(function(o4, s3) {
          function i3(e4) {
            try {
              a4(r3.next(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function l3(e4) {
            try {
              a4(r3.throw(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function a4(e4) {
            var t5;
            e4.done ? o4(e4.value) : (t5 = e4.value, t5 instanceof n4 ? t5 : new n4(function(e5) {
              e5(t5);
            })).then(i3, l3);
          }
          a4((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      let {pm_id: u2} = t3, {float: g2 = "right"} = t3;
      return e2.$$set = (e3) => {
        "pm_id" in e3 && n3(3, u2 = e3.pm_id), "float" in e3 && n3(0, g2 = e3.float);
      }, e2.$$.update = () => {
        32 & e2.$$.dirty && n3(4, r2 = l2.get("\u{1F496}")), 408 & e2.$$.dirty && n3(2, i2 = () => d2(void 0, void 0, void 0, function* () {
          const e3 = a3.get(r2);
          e3.has(u2) ? (e3.delete(u2), c2 && Qe.MailTagDict.deleteTag(u2, "\u{1F496}")) : (e3.add(u2), c2 && Qe.MailTagDict.addTag(u2, "\u{1F496}")), Le.set(a3);
        })), 144 & e2.$$.dirty && n3(6, o3 = a3.get(r2)), 72 & e2.$$.dirty && n3(1, s2 = !!o3 && o3.has(u2));
      }, [g2, s2, i2, u2, r2, l2, o3, a3, c2];
    }
    class Et extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Nt, It, main2.s, {pm_id: 3, float: 0});
      }
    }
    function zt(e2) {
      let t3, n3;
      return t3 = new Ot({props: {tag: e2[1], size: e2[0]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, [n4]) {
        const r2 = {};
        2 & n4 && (r2.tag = e3[1]), 1 & n4 && (r2.size = e3[0]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Wt(e2, t3, n3) {
      let r2, o3;
      main2.g(e2, _e, (e3) => n3(3, o3 = e3));
      let {pm: s2} = t3, {size: i2 = "xs"} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n3(2, s2 = e3.pm), "size" in e3 && n3(0, i2 = e3.size);
      }, e2.$$.update = () => {
        12 & e2.$$.dirty && n3(1, r2 = o3.get(s2.member));
      }, [i2, r2, s2, o3];
    }
    class Ft extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Wt, zt, main2.s, {pm: 2, size: 0});
      }
    }
    function Yt(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[10] = t3[n3], r2;
    }
    function Rt(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[13] = t3[n3], r2;
    }
    function Ht(e2) {
      let t3, n3, r2;
      return {c() {
        t3 = main2.e("img"), t3.src !== (n3 = "./img/profile/" + e2[10].path + "/" + nt[e2[13]] + ".jpg") && main2.b(t3, "src", n3), main2.b(t3, "class", r2 = "w-9 h-9 rounded-full border-gray-" + (e2[3] ? "700" : "100") + "  border-2\r\n                float-left"), main2.b(t3, "alt", "");
      }, m(e3, n4) {
        main2.c(e3, t3, n4);
      }, p(e3, o3) {
        6 & o3 && t3.src !== (n3 = "./img/profile/" + e3[10].path + "/" + nt[e3[13]] + ".jpg") && main2.b(t3, "src", n3), 8 & o3 && r2 !== (r2 = "w-9 h-9 rounded-full border-gray-" + (e3[3] ? "700" : "100") + "  border-2\r\n                float-left") && main2.b(t3, "class", r2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Jt(e2) {
      let t3, n3, r2, o3, u2, g2, h2, f2, p2, m2, y2, b2, w2, v2 = e2[10].name + "", x2 = e2[2], k2 = [];
      for (let t4 = 0; t4 < x2.length; t4 += 1)
        k2[t4] = Ht(Rt(e2, x2, t4));
      return {c() {
        t3 = main2.e("label"), n3 = main2.e("input"), o3 = main2.a(), u2 = main2.t(v2), g2 = main2.a(), h2 = main2.e("br"), f2 = main2.a(), p2 = main2.e("div");
        for (let e3 = 0; e3 < k2.length; e3 += 1)
          k2[e3].c();
        m2 = main2.a(), main2.b(n3, "type", "radio"), n3.__value = r2 = e2[10].path, n3.value = n3.__value, e2[7][0].push(n3), main2.b(p2, "class", "h-9"), main2.b(t3, "class", y2 = e2[3] ? "text-gray-300" : "text-black");
      }, m(r3, s2) {
        main2.c(r3, t3, s2), main2.d(t3, n3), n3.checked = n3.__value === e2[4], main2.d(t3, o3), main2.d(t3, u2), main2.d(t3, g2), main2.d(t3, h2), main2.d(t3, f2), main2.d(t3, p2);
        for (let e3 = 0; e3 < k2.length; e3 += 1)
          k2[e3].m(p2, null);
        main2.d(t3, m2), b2 || (w2 = main2.A(n3, "change", e2[6]), b2 = true);
      }, p(e3, o4) {
        if (2 & o4 && r2 !== (r2 = e3[10].path) && (n3.__value = r2, n3.value = n3.__value), 16 & o4 && (n3.checked = n3.__value === e3[4]), 2 & o4 && v2 !== (v2 = e3[10].name + "") && main2.o(u2, v2), 14 & o4) {
          let t4;
          for (x2 = e3[2], t4 = 0; t4 < x2.length; t4 += 1) {
            const n4 = Rt(e3, x2, t4);
            k2[t4] ? k2[t4].p(n4, o4) : (k2[t4] = Ht(n4), k2[t4].c(), k2[t4].m(p2, null));
          }
          for (; t4 < k2.length; t4 += 1)
            k2[t4].d(1);
          k2.length = x2.length;
        }
        8 & o4 && y2 !== (y2 = e3[3] ? "text-gray-300" : "text-black") && main2.b(t3, "class", y2);
      }, d(r3) {
        r3 && main2.f(t3), e2[7][0].splice(e2[7][0].indexOf(n3), 1), main2.y(k2, r3), b2 = false, w2();
      }};
    }
    function qt(e2) {
      let t3, n3, r2, o3, d2, u2, g2 = e2[1], h2 = [];
      for (let t4 = 0; t4 < g2.length; t4 += 1)
        h2[t4] = Jt(Yt(e2, g2, t4));
      return {c() {
        t3 = main2.e("h3"), n3 = main2.t("\uD504\uB85C\uD544 \uC0AC\uC9C4 \uBC14\uAFB8\uAE30"), o3 = main2.a(), d2 = main2.e("div");
        for (let e3 = 0; e3 < h2.length; e3 += 1)
          h2[e3].c();
        main2.b(t3, "class", r2 = main2.Q(e2[3] ? "text-gray-300" : "text-black") + " svelte-34egsl"), main2.b(d2, "id", "ProfileChoiceList"), main2.b(d2, "class", "flex flex-col p-4 overflow-y-auto svelte-34egsl"), main2.j(() => e2[8].call(d2));
      }, m(r3, s2) {
        main2.c(r3, t3, s2), main2.d(t3, n3), main2.c(r3, o3, s2), main2.c(r3, d2, s2);
        for (let e3 = 0; e3 < h2.length; e3 += 1)
          h2[e3].m(d2, null);
        u2 = main2.z(d2, e2[8].bind(d2));
      }, p(e3, [n4]) {
        if (8 & n4 && r2 !== (r2 = main2.Q(e3[3] ? "text-gray-300" : "text-black") + " svelte-34egsl") && main2.b(t3, "class", r2), 30 & n4) {
          let t4;
          for (g2 = e3[1], t4 = 0; t4 < g2.length; t4 += 1) {
            const r3 = Yt(e3, g2, t4);
            h2[t4] ? h2[t4].p(r3, n4) : (h2[t4] = Jt(r3), h2[t4].c(), h2[t4].m(d2, null));
          }
          for (; t4 < h2.length; t4 += 1)
            h2[t4].d(1);
          h2.length = g2.length;
        }
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(o3), e3 && main2.f(d2), main2.y(h2, e3), u2();
      }};
    }
    function Vt(e2, t3, n3) {
      let r2, o3, s2, i2, l2;
      main2.g(e2, de, (e3) => n3(1, s2 = e3)), main2.g(e2, ge, (e3) => n3(3, i2 = e3)), main2.g(e2, ce, (e3) => n3(4, l2 = e3));
      const a3 = [{path: "la-vie-en-rose", name: "\uB77C\uBE44\uC559 \uB85C\uC988"}, {path: "violeta", name: "\uBE44\uC62C\uB808\uD0C0"}, {path: "fiesta", name: "\uD53C\uC5D0\uC2A4\uD0C0"}, {path: "the-secret-story-of-swan", name: "\uD658\uC0C1\uB3D9\uD654"}, {path: "one-the-story", name: "One The Story \uD3EC\uC2A4\uD130"}, {path: "one-the-story-appreciation", name: "One The Story \uC18C\uAC10"}, {path: "eating-trip-3", name: "\uC787\uD79D \uD2B8\uB9BD 3"}, {path: "latest", name: "\uCD5C\uC2E0 \uD504\uBA54"}];
      let c2;
      s2.length == 0 && fetch("./\uD504\uB85C\uD544_\uC0AC\uC9C4_\uBAA9\uB85D.json").then((e3) => e3.json()).then((e3) => {
        main2.W(de, s2 = e3, s2), console.log("\uD504\uB85C\uD544 \uC0AC\uC9C4 \uBAA9\uB85D \uB85C\uB529 \uC644\uB8CC");
      }).catch((e3) => {
        console.error("\uD504\uB85C\uD544 \uC0AC\uC9C4 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."), console.error(e3), console.log("\uAE30\uBCF8 \uBAA9\uB85D\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4."), main2.W(de, s2 = a3, s2);
      });
      return e2.$$.update = () => {
        1 & e2.$$.dirty && n3(5, r2 = Math.floor((c2 - 36) / 36)), 32 & e2.$$.dirty && n3(2, o3 = function(e3) {
          let t4, n4 = e3.length;
          if (n4)
            for (; --n4; )
              t4 = Math.floor(Math.random() * (n4 + 1)), [e3[t4], e3[n4]] = [e3[n4], e3[t4]];
          return e3;
        }([...Array(12).keys()]).slice(0, r2));
      }, [c2, s2, o3, i2, l2, r2, function() {
        l2 = this.__value, ce.set(l2);
      }, [[]], function() {
        c2 = this.clientWidth, n3(0, c2);
      }];
    }
    class Kt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Vt, qt, main2.s, {});
      }
    }
    function Ut(e2) {
      let t3, n3, r2, o3, i2;
      return {c() {
        t3 = main2.e("img"), t3.src !== (n3 = "./img/" + e2[1]) && main2.b(t3, "src", n3), main2.b(t3, "class", r2 = "w-12 h-12 rounded-full border-2 float-left\r\n" + (e2[2] ? "border-gray-700" : "border-gray-100")), main2.b(t3, "alt", "");
      }, m(n4, r3) {
        main2.c(n4, t3, r3), o3 || (i2 = [main2.A(t3, "pointerdown", e2[6]), main2.A(t3, "pointerup", e2[7])], o3 = true);
      }, p(e3, [o4]) {
        2 & o4 && t3.src !== (n3 = "./img/" + e3[1]) && main2.b(t3, "src", n3), 4 & o4 && r2 !== (r2 = "w-12 h-12 rounded-full border-2 float-left\r\n" + (e3[2] ? "border-gray-700" : "border-gray-100")) && main2.b(t3, "class", r2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), o3 = false, main2.B(i2);
      }};
    }
    function Zt(e2, t3, n3) {
      let r2, o3, s2;
      main2.g(e2, ce, (e3) => n3(5, o3 = e3)), main2.g(e2, ge, (e3) => n3(2, s2 = e3));
      let {member: i2} = t3;
      const {open: l2} = main2.O("simple-modal"), a3 = () => {
        l2(Kt, {});
      };
      let c2;
      return e2.$$set = (e3) => {
        "member" in e3 && n3(4, i2 = e3.member);
      }, e2.$$.update = () => {
        48 & e2.$$.dirty && n3(1, r2 = i2 == "\uC6B4\uC601\uD300" ? "izone-logo.png" : `profile/${o3}/${i2}.jpg`);
      }, [c2, r2, s2, a3, i2, o3, () => {
        n3(0, c2 = setTimeout(a3, 300));
      }, (e3) => {
        clearTimeout(c2);
      }];
    }
    class Gt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Zt, Ut, main2.s, {member: 4});
      }
    }
    function Qt(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[17] = t3[n3], r2;
    }
    function Xt(e2) {
      let t3, n3;
      return t3 = new Ot({props: {tag: e2[17], canDelete: true, size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        4 & n4 && (r2.tag = e3[17]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function en(e2) {
      let t3, n3, r2, o3;
      return {c() {
        t3 = main2.e("div"), t3.innerHTML = "<p>\uB85C\uB529 \uC911</p>", main2.b(t3, "class", "leading-relaxed"), main2.b(t3, "contenteditable", "false"), e2[3] === void 0 && main2.j(() => e2[14].call(t3));
      }, m(n4, s2) {
        main2.c(n4, t3, s2), e2[3] !== void 0 && (t3.innerHTML = e2[3]), r2 || (o3 = main2.A(t3, "input", e2[14]), r2 = true);
      }, p(e3, n4) {
        8 & n4 && e3[3] !== t3.innerHTML && (t3.innerHTML = e3[3]);
      }, i(e3) {
        n3 || main2.j(() => {
          n3 = main2.X(t3, a, {duration: 300}), n3.start();
        });
      }, o: main2.n, d(e3) {
        e3 && main2.f(t3), r2 = false, o3();
      }};
    }
    function tn(e2) {
      let t3, n3, r2, o3, i2;
      return {c() {
        t3 = main2.e("button"), n3 = main2.t("\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30\u{1F5C3}\uFE0F"), main2.b(t3, "class", r2 = "shadow rounded p-1 mt-2 " + (e2[7] ? "bg-gray-900 text-gray-300" : "bg-red-100"));
      }, m(r3, s2) {
        main2.c(r3, t3, s2), main2.d(t3, n3), o3 || (i2 = main2.A(t3, "click", e2[15]), o3 = true);
      }, p(e3, n4) {
        128 & n4 && r2 !== (r2 = "shadow rounded p-1 mt-2 " + (e3[7] ? "bg-gray-900 text-gray-300" : "bg-red-100")) && main2.b(t3, "class", r2);
      }, d(e3) {
        e3 && main2.f(t3), o3 = false, i2();
      }};
    }
    function nn(e2) {
      let t3, n3, r2, d2, u2, h2, v2, x2, k2, M2, _2, C2, S2, D2, T2, P2, A2, I2, N2, E2, z2, W2, F2 = e2[1].subject + "", R2 = e2[1];
      r2 = new Et({props: {pm_id: e2[1].id}}), u2 = new Gt({props: {member: e2[1].member}}), M2 = new Ft({props: {pm: e2[1], size: "sm"}}), C2 = new jt({props: {time: e2[1].time, size: "sm"}});
      let H2 = e2[2], J2 = [];
      for (let t4 = 0; t4 < H2.length; t4 += 1)
        J2[t4] = Xt(Qt(e2, H2, t4));
      const q2 = (e3) => main2.v(J2[e3], 1, 1, () => {
        J2[e3] = null;
      });
      A2 = new Bt({});
      let V2 = en(e2), K2 = e2[6] && tn(e2);
      return {c() {
        t3 = main2.e("div"), n3 = main2.e("div"), main2.q(r2.$$.fragment), d2 = main2.a(), main2.q(u2.$$.fragment), h2 = main2.a(), v2 = main2.e("h4"), x2 = main2.t(F2), k2 = main2.a(), main2.q(M2.$$.fragment), _2 = main2.a(), main2.q(C2.$$.fragment), S2 = main2.a(), D2 = main2.e("br"), T2 = main2.a();
        for (let e3 = 0; e3 < J2.length; e3 += 1)
          J2[e3].c();
        P2 = main2.a(), main2.q(A2.$$.fragment), I2 = main2.a(), N2 = main2.e("div"), V2.c(), E2 = main2.a(), K2 && K2.c(), main2.b(v2, "class", "text-xl w-4/5"), main2.b(n3, "id", "MailDetailCardHeader"), main2.b(n3, "class", "relative w-full leading-loose"), main2.b(N2, "id", "MailDetailCardContent"), main2.b(N2, "class", "h-5/6 overflow-y-auto p-1"), main2.b(t3, "id", "MailDetailCard"), main2.h(t3, "max-height", e2[4] && e2[0] ? "70%" : "90%"), main2.h(t3, "min-height", "300px"), main2.b(t3, "class", z2 = "\r\nshadow-2xl rounded-md\r\n" + e2[5]("bg-white") + "\r\nw-full m-1 p-2\r\nflex flex-col");
      }, m(e3, o3) {
        main2.c(e3, t3, o3), main2.d(t3, n3), main2.r(r2, n3, null), main2.d(n3, d2), main2.r(u2, n3, null), main2.d(n3, h2), main2.d(n3, v2), main2.d(v2, x2), main2.d(n3, k2), main2.r(M2, n3, null), main2.d(n3, _2), main2.r(C2, n3, null), main2.d(n3, S2), main2.d(n3, D2), main2.d(n3, T2);
        for (let e4 = 0; e4 < J2.length; e4 += 1)
          J2[e4].m(n3, null);
        main2.d(n3, P2), main2.r(A2, n3, null), main2.d(t3, I2), main2.d(t3, N2), V2.m(N2, null), main2.d(t3, E2), K2 && K2.m(t3, null), W2 = true;
      }, p(e3, [s2]) {
        const i2 = {};
        2 & s2 && (i2.pm_id = e3[1].id), r2.$set(i2);
        const a3 = {};
        2 & s2 && (a3.member = e3[1].member), u2.$set(a3), (!W2 || 2 & s2) && F2 !== (F2 = e3[1].subject + "") && main2.o(x2, F2);
        const c2 = {};
        2 & s2 && (c2.pm = e3[1]), M2.$set(c2);
        const d3 = {};
        if (2 & s2 && (d3.time = e3[1].time), C2.$set(d3), 4 & s2) {
          let t4;
          for (H2 = e3[2], t4 = 0; t4 < H2.length; t4 += 1) {
            const r3 = Qt(e3, H2, t4);
            J2[t4] ? (J2[t4].p(r3, s2), main2.p(J2[t4], 1)) : (J2[t4] = Xt(r3), J2[t4].c(), main2.p(J2[t4], 1), J2[t4].m(n3, P2));
          }
          for (main2.D(), t4 = H2.length; t4 < J2.length; t4 += 1)
            q2(t4);
          main2.x();
        }
        2 & s2 && main2.s(R2, R2 = e3[1]) ? (main2.D(), main2.v(V2, 1, 1, main2.n), main2.x(), V2 = en(e3), V2.c(), main2.p(V2), V2.m(N2, null)) : V2.p(e3, s2), e3[6] ? K2 ? K2.p(e3, s2) : (K2 = tn(e3), K2.c(), K2.m(t3, null)) : K2 && (K2.d(1), K2 = null), (!W2 || 17 & s2) && main2.h(t3, "max-height", e3[4] && e3[0] ? "70%" : "90%"), (!W2 || 32 & s2 && z2 !== (z2 = "\r\nshadow-2xl rounded-md\r\n" + e3[5]("bg-white") + "\r\nw-full m-1 p-2\r\nflex flex-col")) && main2.b(t3, "class", z2);
      }, i(e3) {
        if (!W2) {
          main2.p(r2.$$.fragment, e3), main2.p(u2.$$.fragment, e3), main2.p(M2.$$.fragment, e3), main2.p(C2.$$.fragment, e3);
          for (let e4 = 0; e4 < H2.length; e4 += 1)
            main2.p(J2[e4]);
          main2.p(A2.$$.fragment, e3), main2.p(V2), W2 = true;
        }
      }, o(e3) {
        main2.v(r2.$$.fragment, e3), main2.v(u2.$$.fragment, e3), main2.v(M2.$$.fragment, e3), main2.v(C2.$$.fragment, e3), J2 = J2.filter(Boolean);
        for (let e4 = 0; e4 < J2.length; e4 += 1)
          main2.v(J2[e4]);
        main2.v(A2.$$.fragment, e3), main2.v(V2), W2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(r2), main2.w(u2), main2.w(M2), main2.w(C2), main2.y(J2, e3), main2.w(A2), V2.d(e3), K2 && K2.d();
      }};
    }
    function rn(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2, h2, f2, p2, m2;
      main2.g(e2, Ae, (e3) => n3(1, i2 = e3)), main2.g(e2, Be, (e3) => n3(16, l2 = e3)), main2.g(e2, Ce, (e3) => n3(12, a3 = e3)), main2.g(e2, _e, (e3) => n3(13, c2 = e3)), main2.g(e2, ze, (e3) => n3(4, d2 = e3)), main2.g(e2, he, (e3) => n3(5, u2 = e3)), main2.g(e2, We, (e3) => n3(6, g2 = e3)), main2.g(e2, ge, (e3) => n3(7, h2 = e3)), main2.g(e2, Ne, (e3) => n3(8, f2 = e3)), main2.g(e2, main2.U, (e3) => n3(9, p2 = e3)), main2.g(e2, main2.V, (e3) => n3(10, m2 = e3));
      let {show: $2} = t3;
      main2.V.subscribe((e3) => {
        if (i2.id != e3.now_pm) {
          const t4 = l2.filter((t5) => t5.id == e3.now_pm);
          t4.length == 1 && main2.W(Ae, i2 = t4[0], i2);
        }
      }), Ae.subscribe((e3) => {
        const t4 = document.getElementById("MailDetailCardContent");
        t4 && t4.scrollTo({top: 0, behavior: "smooth"});
      });
      return e2.$$set = (e3) => {
        "show" in e3 && n3(0, $2 = e3.show);
      }, e2.$$.update = () => {
        12288 & e2.$$.dirty && n3(11, r2 = (e3) => a3.has(e3.id) ? Array.from(a3.get(e3.id)).map((e4) => c2.get(e4.value)) : []), 2050 & e2.$$.dirty && n3(2, o3 = r2(i2)), 2 & e2.$$.dirty && n3(3, s2 = i2.images.reduce((e3, t4) => e3.replace("{\uC774\uBBF8\uC9C0}", `<img src="../${t4}" style="max-width:100%;display:block;margin-left:auto;margin-right:auto; margin-top:8px;">`).replace(/\n\n/g, "<br/>").replace(/\n/g, "<br/>"), i2.body));
      }, [$2, i2, o3, s2, d2, u2, g2, h2, f2, p2, m2, r2, a3, c2, function() {
        s2 = this.innerHTML, n3(3, s2), n3(1, i2);
      }, () => {
        main2.W(Ne, f2 = true, f2), p2("./", {...m2, showList: true});
      }];
    }
    class on extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, rn, nn, main2.s, {show: 0});
      }
    }
    function sn(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uD0DC\uADF8 \uBD88\uB7EC\uC624\uAE30\u2B07\uFE0F");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function ln(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uD0DC\uADF8 \uC62C\uB9AC\uAE30\u2B06\uFE0F");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function an(e2) {
      let t3, n3, r2, o3;
      return t3 = new it({props: {id: "DownloadTagsButton", onClick: e2[1], strong: true, $$slots: {default: [sn]}, $$scope: {ctx: e2}}}), r2 = new it({props: {id: "UploadTagsButton", onClick: e2[0], strong: true, $$slots: {default: [ln]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment), n3 = main2.a(), main2.q(r2.$$.fragment);
      }, m(e3, s2) {
        main2.r(t3, e3, s2), main2.c(e3, n3, s2), main2.r(r2, e3, s2), o3 = true;
      }, p(e3, [n4]) {
        const o4 = {};
        64 & n4 && (o4.$$scope = {dirty: n4, ctx: e3}), t3.$set(o4);
        const s2 = {};
        64 & n4 && (s2.$$scope = {dirty: n4, ctx: e3}), r2.$set(s2);
      }, i(e3) {
        o3 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), o3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), o3 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n3), main2.w(r2, e3);
      }};
    }
    function cn(e2, t3, n3) {
      let r2, o3, s2, i2;
      main2.g(e2, _e, (e3) => n3(2, r2 = e3)), main2.g(e2, Ce, (e3) => n3(3, o3 = e3)), main2.g(e2, Le, (e3) => n3(4, s2 = e3)), main2.g(e2, je, (e3) => n3(5, i2 = e3));
      return [() => {
        Qe.AllTagDict.save(r2), Qe.MailTagDict.save(o3, s2);
      }, () => {
        Promise.all([Qe.AllTagDict.get(), Qe.MailTagDict.get()]).then((e3) => {
          main2.W(je, i2 = null, i2);
          const t4 = new Map([...s2].map((e4) => [e4[0].value, e4[1]])), n4 = e3[0], l2 = new Set(n4.map((e4) => e4.value)), a3 = [...r2].filter(([e4, t5]) => l2.has(e4));
          main2.W(_e, r2 = n4.reduce((e4, t5) => {
            if (e4.has(t5.value)) {
              const n5 = e4.get(t5.value);
              n5.color != t5.color && (n5.color = t5.color, e4.set(n5.value, n5), console.log());
            } else
              e4.set(t5.value, t5);
            return e4;
          }, new Map(a3)), r2), console.log("all_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC");
          const c2 = e3[1];
          let d2 = ke.reduce((e4, n5) => {
            const o4 = r2.get(n5.value), s3 = t4.get(n5.value);
            return e4.set(o4, s3);
          }, new Map());
          const u2 = c2.tag_to_mail_dict.filter((e4) => r2.has(e4[0])).reduce((e4, t5) => {
            const n5 = r2.get(t5[0]), o4 = new Set(t5[1]);
            return e4.set(n5, o4), e4;
          }, d2), g2 = r2.get("\u{1F496}"), h2 = u2.has(g2);
          console.log("\uB370\uC774\uD130 \uC815\uD569\uC131 \uCCB4\uD06C", h2 ? "\uD1B5\uACFC" : "\uC2E4\uD328"), h2 && (main2.W(Le, s2 = u2, s2), main2.W(Ce, o3 = c2.mail_to_tag_dict.reduce((e4, t5) => {
            const n5 = t5[0], o4 = t5[1].filter((e5) => r2.has(e5)).map((e5) => r2.get(e5));
            return e4.set(n5, new Set(o4)), e4;
          }, new Map()), o3), console.log("mail_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC"));
        });
      }];
    }
    class dn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, cn, an, main2.s, {});
      }
    }
    function un(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[9] = t3[n3], r2;
    }
    function gn(e2) {
      let t3, n3;
      return t3 = new dn({}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function hn(e2) {
      let t3, n3;
      return t3 = new Ot({props: {tag: e2[9], size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        2 & n4 && (r2.tag = e3[9]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function fn(e2) {
      let t3, n3, r2, o3, d2, u2 = e2[3] && gn(), h2 = e2[1], y2 = [];
      for (let t4 = 0; t4 < h2.length; t4 += 1)
        y2[t4] = hn(un(e2, h2, t4));
      const b2 = (e3) => main2.v(y2[e3], 1, 1, () => {
        y2[e3] = null;
      });
      return {c() {
        t3 = main2.e("div"), u2 && u2.c(), n3 = main2.a(), r2 = main2.e("div");
        for (let e3 = 0; e3 < y2.length; e3 += 1)
          y2[e3].c();
        main2.b(r2, "class", "flex flex-wrap w-full"), main2.h(t3, "min-height", "43px"), main2.b(t3, "class", o3 = "AllTagList\r\n    " + e2[2]("bg-white") + "\r\n    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto"), main2.Y(t3, "hidden", e2[0]);
      }, m(e3, o4) {
        main2.c(e3, t3, o4), u2 && u2.m(t3, null), main2.d(t3, n3), main2.d(t3, r2);
        for (let e4 = 0; e4 < y2.length; e4 += 1)
          y2[e4].m(r2, null);
        d2 = true;
      }, p(e3, [s2]) {
        if (e3[3] ? u2 ? 8 & s2 && main2.p(u2, 1) : (u2 = gn(), u2.c(), main2.p(u2, 1), u2.m(t3, n3)) : u2 && (main2.D(), main2.v(u2, 1, 1, () => {
          u2 = null;
        }), main2.x()), 2 & s2) {
          let t4;
          for (h2 = e3[1], t4 = 0; t4 < h2.length; t4 += 1) {
            const n4 = un(e3, h2, t4);
            y2[t4] ? (y2[t4].p(n4, s2), main2.p(y2[t4], 1)) : (y2[t4] = hn(n4), y2[t4].c(), main2.p(y2[t4], 1), y2[t4].m(r2, null));
          }
          for (main2.D(), t4 = h2.length; t4 < y2.length; t4 += 1)
            b2(t4);
          main2.x();
        }
        (!d2 || 4 & s2 && o3 !== (o3 = "AllTagList\r\n    " + e3[2]("bg-white") + "\r\n    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto")) && main2.b(t3, "class", o3), 5 & s2 && main2.Y(t3, "hidden", e3[0]);
      }, i(e3) {
        if (!d2) {
          main2.p(u2);
          for (let e4 = 0; e4 < h2.length; e4 += 1)
            main2.p(y2[e4]);
          d2 = true;
        }
      }, o(e3) {
        main2.v(u2), y2 = y2.filter(Boolean);
        for (let e4 = 0; e4 < y2.length; e4 += 1)
          main2.v(y2[e4]);
        d2 = false;
      }, d(e3) {
        e3 && main2.f(t3), u2 && u2.d(), main2.y(y2, e3);
      }};
    }
    function pn(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2;
      main2.g(e2, _e, (e3) => n3(4, o3 = e3)), main2.g(e2, je, (e3) => n3(5, s2 = e3)), main2.g(e2, main2.Z, (e3) => n3(6, i2 = e3)), main2.g(e2, main2.V, (e3) => n3(7, l2 = e3)), main2.g(e2, he, (e3) => n3(2, a3 = e3)), main2.g(e2, ue, (e3) => n3(3, c2 = e3));
      let {hidden: d2} = t3;
      return e2.$$set = (e3) => {
        "hidden" in e3 && n3(0, d2 = e3.hidden);
      }, e2.$$.update = () => {
        16 & e2.$$.dirty && n3(1, r2 = Array.from(o3.values()));
      }, o3.has(s2) && (main2.W(je, s2 = null, s2), i2("./", Object.assign(Object.assign({}, l2), {tag: ""}))), [d2, r2, a3, c2, o3];
    }
    class mn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, pn, fn, main2.s, {hidden: 0});
      }
    }
    function $n(e2) {
      let t3, n3, r2, o3, i2, d2, u2;
      return {c() {
        t3 = main2.e("div"), n3 = main2.e("a"), r2 = main2.t("\uBC88\uC5ED"), o3 = main2.e("img"), main2.b(o3, "class", "w-5 h-5 mt-0.5 float-right"), o3.src !== (i2 = "./img/papago.png") && main2.b(o3, "src", "./img/papago.png"), main2.b(o3, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30"), main2.b(n3, "href", d2 = "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + e2[0]), main2.b(n3, "target", "_blank"), main2.b(t3, "class", u2 = "w-16 p-1 shadow rounded mr-1 " + e2[1]("bg-red-100"));
      }, m(e3, s2) {
        main2.c(e3, t3, s2), main2.d(t3, n3), main2.d(n3, r2), main2.d(n3, o3);
      }, p(e3, [r3]) {
        1 & r3 && d2 !== (d2 = "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + e3[0]) && main2.b(n3, "href", d2), 2 & r3 && u2 !== (u2 = "w-16 p-1 shadow rounded mr-1 " + e3[1]("bg-red-100")) && main2.b(t3, "class", u2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function yn(e2, t3, n3) {
      let r2, o3, s2;
      return main2.g(e2, Ae, (e3) => n3(2, o3 = e3)), main2.g(e2, he, (e3) => n3(1, s2 = e3)), e2.$$.update = () => {
        4 & e2.$$.dirty && n3(0, r2 = o3.body.replace(/\n/g, "%0A").replace(/\{이미지\}/g, "").replace(/<[^>]+>/g, ""));
      }, [r2, s2, o3];
    }
    class bn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, yn, $n, main2.s, {});
      }
    }
    function wn(e2) {
      let t3, n3, r2, o3, i2, u2;
      return {c() {
        t3 = main2.e("label"), n3 = main2.t("\uD0DC\uADF8 \uBAA9\uB85D\r\n    "), r2 = main2.e("input"), main2.b(r2, "id", "showTagListInput"), main2.b(r2, "type", "checkbox"), main2.b(t3, "class", o3 = "p-1 rounded " + e2[0]("bg-red-100")), main2.b(t3, "for", "showTagListInput");
      }, m(o4, s2) {
        main2.c(o4, t3, s2), main2.d(t3, n3), main2.d(t3, r2), r2.checked = e2[1], i2 || (u2 = main2.A(r2, "change", e2[2]), i2 = true);
      }, p(e3, [n4]) {
        2 & n4 && (r2.checked = e3[1]), 1 & n4 && o3 !== (o3 = "p-1 rounded " + e3[0]("bg-red-100")) && main2.b(t3, "class", o3);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), i2 = false, u2();
      }};
    }
    function vn(e2, t3, n3) {
      let r2, o3;
      return main2.g(e2, he, (e3) => n3(0, r2 = e3)), main2.g(e2, Ee, (e3) => n3(1, o3 = e3)), [r2, o3, function() {
        o3 = this.checked, Ee.set(o3);
      }];
    }
    class xn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, vn, wn, main2.s, {});
      }
    }
    function kn(e2) {
      let t3, n3, r2, o3, i2, u2, g2 = e2[0] ? "\uB2E4\uD06C" : "\uCEEC\uB7EC";
      return {c() {
        t3 = main2.e("span"), n3 = main2.t(g2), main2.b(t3, "style", r2 = e2[0] ? "" : e2[1]), main2.b(t3, "class", o3 = "rounded pl-1 pr-1 mr-1 border-2 text-lg\r\n    " + (e2[0] ? "text-gray-400 border-gray-900 bg-gray-800" : "text-red-300  border-red-300 border-2"));
      }, m(r3, o4) {
        main2.c(r3, t3, o4), main2.d(t3, n3), i2 || (u2 = main2.A(t3, "click", e2[2]), i2 = true);
      }, p(e3, [s2]) {
        1 & s2 && g2 !== (g2 = e3[0] ? "\uB2E4\uD06C" : "\uCEEC\uB7EC") && main2.o(n3, g2), 1 & s2 && r2 !== (r2 = e3[0] ? "" : e3[1]) && main2.b(t3, "style", r2), 1 & s2 && o3 !== (o3 = "rounded pl-1 pr-1 mr-1 border-2 text-lg\r\n    " + (e3[0] ? "text-gray-400 border-gray-900 bg-gray-800" : "text-red-300  border-red-300 border-2")) && main2.b(t3, "class", o3);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), i2 = false, u2();
      }};
    }
    function Mn(e2, t3, n3) {
      let r2;
      main2.g(e2, ge, (e3) => n3(0, r2 = e3));
      return [r2, "\nbackground-image: linear-gradient(\n    to right,\n    #f1d2e7,#f1c3aa,#e382a9, #e18784,\n    #f3aa51, #fcf695, #fff,#cee5d5,\n    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7)\n", () => {
        main2.W(ge, r2 = !r2, r2);
      }];
    }
    class _n extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Mn, kn, main2.s, {});
      }
    }
    function Cn(e2) {
      let t3, n3;
      return t3 = new xn({}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Sn(e2) {
      let t3, n3, r2, o3, d2, u2, h2, x2, k2, M2, _2, C2, S2;
      r2 = new bn({}), d2 = new _n({});
      let O2 = !e2[1] && e2[4] && Cn();
      return x2 = new mn({props: {hidden: !((e2[1] || e2[5]) && e2[4])}}), M2 = new on({props: {show: e2[1] || e2[5]}}), {c() {
        t3 = main2.e("section"), n3 = main2.e("div"), main2.q(r2.$$.fragment), o3 = main2.a(), main2.q(d2.$$.fragment), u2 = main2.a(), O2 && O2.c(), h2 = main2.a(), main2.q(x2.$$.fragment), k2 = main2.a(), main2.q(M2.$$.fragment), main2.b(n3, "class", "flex flex-row m-1"), main2.b(t3, "id", "MailDetailSection"), main2.b(t3, "class", _2 = "h-full p-3 " + (e2[4] ? "w-1/2 lg:w-1/3 xl:w-1/4" : "w-full") + " flex flex-col svelte-q462jf"), main2.j(() => e2[6].call(t3)), main2.Y(t3, "hidden", e2[2] && e2[3]);
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.d(t3, n3), main2.r(r2, n3, null), main2.d(n3, o3), main2.r(d2, n3, null), main2.d(n3, u2), O2 && O2.m(n3, null), main2.d(t3, h2), main2.r(x2, t3, null), main2.d(t3, k2), main2.r(M2, t3, null), C2 = main2.z(t3, e2[6].bind(t3)), S2 = true;
      }, p(e3, [r3]) {
        !e3[1] && e3[4] ? O2 ? 18 & r3 && main2.p(O2, 1) : (O2 = Cn(), O2.c(), main2.p(O2, 1), O2.m(n3, null)) : O2 && (main2.D(), main2.v(O2, 1, 1, () => {
          O2 = null;
        }), main2.x());
        const o4 = {};
        50 & r3 && (o4.hidden = !((e3[1] || e3[5]) && e3[4])), x2.$set(o4);
        const s2 = {};
        34 & r3 && (s2.show = e3[1] || e3[5]), M2.$set(s2), (!S2 || 16 & r3 && _2 !== (_2 = "h-full p-3 " + (e3[4] ? "w-1/2 lg:w-1/3 xl:w-1/4" : "w-full") + " flex flex-col svelte-q462jf")) && main2.b(t3, "class", _2), 28 & r3 && main2.Y(t3, "hidden", e3[2] && e3[3]);
      }, i(e3) {
        S2 || (main2.p(r2.$$.fragment, e3), main2.p(d2.$$.fragment, e3), main2.p(O2), main2.p(x2.$$.fragment, e3), main2.p(M2.$$.fragment, e3), S2 = true);
      }, o(e3) {
        main2.v(r2.$$.fragment, e3), main2.v(d2.$$.fragment, e3), main2.v(O2), main2.v(x2.$$.fragment, e3), main2.v(M2.$$.fragment, e3), S2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(r2), main2.w(d2), O2 && O2.d(), main2.w(x2), main2.w(M2), C2();
      }};
    }
    function On(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3;
      return main2.g(e2, We, (e3) => n3(2, o3 = e3)), main2.g(e2, Ne, (e3) => n3(3, s2 = e3)), main2.g(e2, ze, (e3) => n3(4, i2 = e3)), main2.g(e2, Ee, (e3) => n3(5, l2 = e3)), e2.$$.update = () => {
        1 & e2.$$.dirty && n3(1, r2 = 650 < a3);
      }, [a3, r2, o3, s2, i2, l2, function() {
        a3 = this.clientHeight, n3(0, a3);
      }];
    }
    class Dn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, On, Sn, main2.s, {});
      }
    }
    const Tn = Ln(new Date(2021, 2, 20));
    let jn = main2.F(Tn);
    function Ln(e2) {
      let t3 = "" + (e2.getMonth() + 1), n3 = "" + e2.getDate();
      const r2 = e2.getFullYear();
      return t3.length < 2 && (t3 = "0" + t3), n3.length < 2 && (n3 = "0" + n3), [r2, t3, n3].join("-");
    }
    function Pn(e2) {
      const [t3, n3, r2] = e2.split("-").map((e3) => parseInt(e3));
      return new Date(t3, n3 - 1, r2);
    }
    function Bn(e2) {
      return e2.split(" ")[0].replace(/\//g, "-");
    }
    const An = (e2, t3, n3, r2 = 0) => {
      let o3 = new Date(t3, e2, 1);
      o3.setDate(o3.getDate() - o3.getDay() + r2);
      let s2 = e2 === 11 ? 0 : e2 + 1, i2 = [];
      for (; o3.getMonth() !== s2 || o3.getDay() !== r2 || i2.length !== 6; ) {
        o3.getDay() === r2 && i2.unshift({days: [], id: `${t3}${e2}${t3}${i2.length}`});
        const s3 = Object.assign({partOfMonth: o3.getMonth() === e2, day: o3.getDate(), month: o3.getMonth(), year: o3.getFullYear(), date: new Date(o3)}, n3(o3));
        i2[0].days.push(s3), o3.setDate(o3.getDate() + 1);
      }
      return i2.reverse(), {month: e2, year: t3, weeks: i2};
    };
    function In(e2, t3, n3 = null, r2 = 0) {
      e2.setHours(0, 0, 0, 0), t3.setHours(0, 0, 0, 0);
      let o3 = new Date(t3.getFullYear(), t3.getMonth() + 1, 1), s2 = [], i2 = new Date(e2.getFullYear(), e2.getMonth(), 1), l2 = ((e3, t4, n4) => {
        let r3 = new Date();
        return r3.setHours(0, 0, 0, 0), (o4) => {
          const s3 = o4 >= e3 && o4 <= t4;
          return {isInRange: s3, selectable: s3 && (!n4 || n4(o4)), isToday: o4.getTime() === r3.getTime()};
        };
      })(e2, t3, n3);
      for (; i2 < o3; )
        s2.push(An(i2.getMonth(), i2.getFullYear(), l2, r2)), i2.setMonth(i2.getMonth() + 1);
      return s2;
    }
    const Nn = (e2, t3) => e2.getDate() === t3.getDate() && e2.getMonth() === t3.getMonth() && e2.getFullYear() === t3.getFullYear();
    function En(e2) {
      return Array.isArray ? Array.isArray(e2) : Jn(e2) === "[object Array]";
    }
    function zn(e2) {
      return typeof e2 == "string";
    }
    function Wn(e2) {
      return typeof e2 == "number";
    }
    function Fn(e2) {
      return e2 === true || e2 === false || function(e3) {
        return Yn(e3) && e3 !== null;
      }(e2) && Jn(e2) == "[object Boolean]";
    }
    function Yn(e2) {
      return typeof e2 == "object";
    }
    function Rn(e2) {
      return e2 != null;
    }
    function Hn(e2) {
      return !e2.trim().length;
    }
    function Jn(e2) {
      return e2 == null ? e2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e2);
    }
    const qn = Object.prototype.hasOwnProperty;
    class Vn {
      constructor(e2) {
        this._keys = [], this._keyMap = {};
        let t3 = 0;
        e2.forEach((e3) => {
          let n3 = Kn(e3);
          t3 += n3.weight, this._keys.push(n3), this._keyMap[n3.id] = n3, t3 += n3.weight;
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
    function Kn(e2) {
      let t3 = null, n3 = null, r2 = null, o3 = 1;
      if (zn(e2) || En(e2))
        r2 = e2, t3 = Un(e2), n3 = Zn(e2);
      else {
        if (!qn.call(e2, "name"))
          throw new Error(((e3) => `Missing ${e3} property in key`)("name"));
        const s2 = e2.name;
        if (r2 = s2, qn.call(e2, "weight") && (o3 = e2.weight, o3 <= 0))
          throw new Error(((e3) => `Property 'weight' in key '${e3}' must be a positive integer`)(s2));
        t3 = Un(s2), n3 = Zn(s2);
      }
      return {path: t3, id: n3, weight: o3, src: r2};
    }
    function Un(e2) {
      return En(e2) ? e2 : e2.split(".");
    }
    function Zn(e2) {
      return En(e2) ? e2.join(".") : e2;
    }
    var Gn = {isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: (e2, t3) => e2.score === t3.score ? e2.idx < t3.idx ? -1 : 1 : e2.score < t3.score ? -1 : 1, includeMatches: false, findAllMatches: false, minMatchCharLength: 1, location: 0, threshold: 0.6, distance: 100, ...{useExtendedSearch: false, getFn: function(e2, t3) {
      let n3 = [], r2 = false;
      const o3 = (e3, t4, s2) => {
        if (Rn(e3))
          if (t4[s2]) {
            const i2 = e3[t4[s2]];
            if (!Rn(i2))
              return;
            if (s2 === t4.length - 1 && (zn(i2) || Wn(i2) || Fn(i2)))
              n3.push(function(e4) {
                return e4 == null ? "" : function(e5) {
                  if (typeof e5 == "string")
                    return e5;
                  let t5 = e5 + "";
                  return t5 == "0" && 1 / e5 == -1 / 0 ? "-0" : t5;
                }(e4);
              }(i2));
            else if (En(i2)) {
              r2 = true;
              for (let e4 = 0, n4 = i2.length; e4 < n4; e4 += 1)
                o3(i2[e4], t4, s2 + 1);
            } else
              t4.length && o3(i2, t4, s2 + 1);
          } else
            n3.push(e3);
      };
      return o3(e2, zn(t3) ? t3.split(".") : t3, 0), r2 ? n3 : n3[0];
    }, ignoreLocation: false, ignoreFieldNorm: false}};
    const Qn = /[^ ]+/g;
    class Xn {
      constructor({getFn: e2 = Gn.getFn} = {}) {
        this.norm = function(e3 = 3) {
          const t3 = new Map(), n3 = Math.pow(10, e3);
          return {get(e4) {
            const r2 = e4.match(Qn).length;
            if (t3.has(r2))
              return t3.get(r2);
            const o3 = 1 / Math.sqrt(r2), s2 = parseFloat(Math.round(o3 * n3) / n3);
            return t3.set(r2, s2), s2;
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
        !this.isCreated && this.docs.length && (this.isCreated = true, zn(this.docs[0]) ? this.docs.forEach((e2, t3) => {
          this._addString(e2, t3);
        }) : this.docs.forEach((e2, t3) => {
          this._addObject(e2, t3);
        }), this.norm.clear());
      }
      add(e2) {
        const t3 = this.size();
        zn(e2) ? this._addString(e2, t3) : this._addObject(e2, t3);
      }
      removeAt(e2) {
        this.records.splice(e2, 1);
        for (let t3 = e2, n3 = this.size(); t3 < n3; t3 += 1)
          this.records[t3].i -= 1;
      }
      getValueForItemAtKeyId(e2, t3) {
        return e2[this._keysMap[t3]];
      }
      size() {
        return this.records.length;
      }
      _addString(e2, t3) {
        if (!Rn(e2) || Hn(e2))
          return;
        let n3 = {v: e2, i: t3, n: this.norm.get(e2)};
        this.records.push(n3);
      }
      _addObject(e2, t3) {
        let n3 = {i: t3, $: {}};
        this.keys.forEach((t4, r2) => {
          let o3 = this.getFn(e2, t4.path);
          if (Rn(o3)) {
            if (En(o3)) {
              let e3 = [];
              const t5 = [{nestedArrIndex: -1, value: o3}];
              for (; t5.length; ) {
                const {nestedArrIndex: n4, value: r3} = t5.pop();
                if (Rn(r3))
                  if (zn(r3) && !Hn(r3)) {
                    let t6 = {v: r3, i: n4, n: this.norm.get(r3)};
                    e3.push(t6);
                  } else
                    En(r3) && r3.forEach((e4, n5) => {
                      t5.push({nestedArrIndex: n5, value: e4});
                    });
              }
              n3.$[r2] = e3;
            } else if (!Hn(o3)) {
              let e3 = {v: o3, n: this.norm.get(o3)};
              n3.$[r2] = e3;
            }
          }
        }), this.records.push(n3);
      }
      toJSON() {
        return {keys: this.keys, records: this.records};
      }
    }
    function er(e2, t3, {getFn: n3 = Gn.getFn} = {}) {
      const r2 = new Xn({getFn: n3});
      return r2.setKeys(e2.map(Kn)), r2.setSources(t3), r2.create(), r2;
    }
    function tr(e2, {errors: t3 = 0, currentLocation: n3 = 0, expectedLocation: r2 = 0, distance: o3 = Gn.distance, ignoreLocation: s2 = Gn.ignoreLocation} = {}) {
      const i2 = t3 / e2.length;
      if (s2)
        return i2;
      const l2 = Math.abs(r2 - n3);
      return o3 ? i2 + l2 / o3 : l2 ? 1 : i2;
    }
    function nr(e2, t3, n3, {location: r2 = Gn.location, distance: o3 = Gn.distance, threshold: s2 = Gn.threshold, findAllMatches: i2 = Gn.findAllMatches, minMatchCharLength: l2 = Gn.minMatchCharLength, includeMatches: a3 = Gn.includeMatches, ignoreLocation: c2 = Gn.ignoreLocation} = {}) {
      if (t3.length > 32)
        throw new Error(`Pattern length exceeds max of ${32}.`);
      const d2 = t3.length, u2 = e2.length, g2 = Math.max(0, Math.min(r2, u2));
      let h2 = s2, f2 = g2;
      const p2 = l2 > 1 || a3, m2 = p2 ? Array(u2) : [];
      let $2;
      for (; ($2 = e2.indexOf(t3, f2)) > -1; ) {
        let e3 = tr(t3, {currentLocation: $2, expectedLocation: g2, distance: o3, ignoreLocation: c2});
        if (h2 = Math.min(e3, h2), f2 = $2 + d2, p2) {
          let e4 = 0;
          for (; e4 < d2; )
            m2[$2 + e4] = 1, e4 += 1;
        }
      }
      f2 = -1;
      let y2 = [], b2 = 1, w2 = d2 + u2;
      const v2 = 1 << d2 - 1;
      for (let r3 = 0; r3 < d2; r3 += 1) {
        let s3 = 0, l3 = w2;
        for (; s3 < l3; ) {
          tr(t3, {errors: r3, currentLocation: g2 + l3, expectedLocation: g2, distance: o3, ignoreLocation: c2}) <= h2 ? s3 = l3 : w2 = l3, l3 = Math.floor((w2 - s3) / 2 + s3);
        }
        w2 = l3;
        let a4 = Math.max(1, g2 - l3 + 1), $3 = i2 ? u2 : Math.min(g2 + l3, u2) + d2, x3 = Array($3 + 2);
        x3[$3 + 1] = (1 << r3) - 1;
        for (let s4 = $3; s4 >= a4; s4 -= 1) {
          let i3 = s4 - 1, l4 = n3[e2.charAt(i3)];
          if (p2 && (m2[i3] = +!!l4), x3[s4] = (x3[s4 + 1] << 1 | 1) & l4, r3 && (x3[s4] |= (y2[s4 + 1] | y2[s4]) << 1 | 1 | y2[s4 + 1]), x3[s4] & v2 && (b2 = tr(t3, {errors: r3, currentLocation: i3, expectedLocation: g2, distance: o3, ignoreLocation: c2}), b2 <= h2)) {
            if (h2 = b2, f2 = i3, f2 <= g2)
              break;
            a4 = Math.max(1, 2 * g2 - f2);
          }
        }
        if (tr(t3, {errors: r3 + 1, currentLocation: g2, expectedLocation: g2, distance: o3, ignoreLocation: c2}) > h2)
          break;
        y2 = x3;
      }
      const x2 = {isMatch: f2 >= 0, score: Math.max(1e-3, b2)};
      if (p2) {
        const e3 = function(e4 = [], t4 = Gn.minMatchCharLength) {
          let n4 = [], r3 = -1, o4 = -1, s3 = 0;
          for (let i3 = e4.length; s3 < i3; s3 += 1) {
            let i4 = e4[s3];
            i4 && r3 === -1 ? r3 = s3 : i4 || r3 === -1 || (o4 = s3 - 1, o4 - r3 + 1 >= t4 && n4.push([r3, o4]), r3 = -1);
          }
          return e4[s3 - 1] && s3 - r3 >= t4 && n4.push([r3, s3 - 1]), n4;
        }(m2, l2);
        e3.length ? a3 && (x2.indices = e3) : x2.isMatch = false;
      }
      return x2;
    }
    function rr(e2) {
      let t3 = {};
      for (let n3 = 0, r2 = e2.length; n3 < r2; n3 += 1) {
        const o3 = e2.charAt(n3);
        t3[o3] = (t3[o3] || 0) | 1 << r2 - n3 - 1;
      }
      return t3;
    }
    class or {
      constructor(e2, {location: t3 = Gn.location, threshold: n3 = Gn.threshold, distance: r2 = Gn.distance, includeMatches: o3 = Gn.includeMatches, findAllMatches: s2 = Gn.findAllMatches, minMatchCharLength: i2 = Gn.minMatchCharLength, isCaseSensitive: l2 = Gn.isCaseSensitive, ignoreLocation: a3 = Gn.ignoreLocation} = {}) {
        if (this.options = {location: t3, threshold: n3, distance: r2, includeMatches: o3, findAllMatches: s2, minMatchCharLength: i2, isCaseSensitive: l2, ignoreLocation: a3}, this.pattern = l2 ? e2 : e2.toLowerCase(), this.chunks = [], !this.pattern.length)
          return;
        const c2 = (e3, t4) => {
          this.chunks.push({pattern: e3, alphabet: rr(e3), startIndex: t4});
        }, d2 = this.pattern.length;
        if (d2 > 32) {
          let e3 = 0;
          const t4 = d2 % 32, n4 = d2 - t4;
          for (; e3 < n4; )
            c2(this.pattern.substr(e3, 32), e3), e3 += 32;
          if (t4) {
            const e4 = d2 - 32;
            c2(this.pattern.substr(e4), e4);
          }
        } else
          c2(this.pattern, 0);
      }
      searchIn(e2) {
        const {isCaseSensitive: t3, includeMatches: n3} = this.options;
        if (t3 || (e2 = e2.toLowerCase()), this.pattern === e2) {
          let t4 = {isMatch: true, score: 0};
          return n3 && (t4.indices = [[0, e2.length - 1]]), t4;
        }
        const {location: r2, distance: o3, threshold: s2, findAllMatches: i2, minMatchCharLength: l2, ignoreLocation: a3} = this.options;
        let c2 = [], d2 = 0, u2 = false;
        this.chunks.forEach(({pattern: t4, alphabet: g3, startIndex: h2}) => {
          const {isMatch: f2, score: p2, indices: m2} = nr(e2, t4, g3, {location: r2 + h2, distance: o3, threshold: s2, findAllMatches: i2, minMatchCharLength: l2, includeMatches: n3, ignoreLocation: a3});
          f2 && (u2 = true), d2 += p2, f2 && m2 && (c2 = [...c2, ...m2]);
        });
        let g2 = {isMatch: u2, score: u2 ? d2 / this.chunks.length : 1};
        return u2 && n3 && (g2.indices = c2), g2;
      }
    }
    class sr {
      constructor(e2) {
        this.pattern = e2;
      }
      static isMultiMatch(e2) {
        return ir(e2, this.multiRegex);
      }
      static isSingleMatch(e2) {
        return ir(e2, this.singleRegex);
      }
      search() {
      }
    }
    function ir(e2, t3) {
      const n3 = e2.match(t3);
      return n3 ? n3[1] : null;
    }
    class lr extends sr {
      constructor(e2, {location: t3 = Gn.location, threshold: n3 = Gn.threshold, distance: r2 = Gn.distance, includeMatches: o3 = Gn.includeMatches, findAllMatches: s2 = Gn.findAllMatches, minMatchCharLength: i2 = Gn.minMatchCharLength, isCaseSensitive: l2 = Gn.isCaseSensitive, ignoreLocation: a3 = Gn.ignoreLocation} = {}) {
        super(e2), this._bitapSearch = new or(e2, {location: t3, threshold: n3, distance: r2, includeMatches: o3, findAllMatches: s2, minMatchCharLength: i2, isCaseSensitive: l2, ignoreLocation: a3});
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
    class ar extends sr {
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
        let t3, n3 = 0;
        const r2 = [], o3 = this.pattern.length;
        for (; (t3 = e2.indexOf(this.pattern, n3)) > -1; )
          n3 = t3 + o3, r2.push([t3, n3 - 1]);
        const s2 = !!r2.length;
        return {isMatch: s2, score: s2 ? 0 : 1, indices: r2};
      }
    }
    const cr = [class extends sr {
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
    }, ar, class extends sr {
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
    }, class extends sr {
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
    }, class extends sr {
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
    }, class extends sr {
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
    }, class extends sr {
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
    }, lr];
    const dr = cr.length;
    const ur = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    const gr = new Set([lr.type, ar.type]);
    class hr {
      constructor(e2, {isCaseSensitive: t3 = Gn.isCaseSensitive, includeMatches: n3 = Gn.includeMatches, minMatchCharLength: r2 = Gn.minMatchCharLength, ignoreLocation: o3 = Gn.ignoreLocation, findAllMatches: s2 = Gn.findAllMatches, location: i2 = Gn.location, threshold: l2 = Gn.threshold, distance: a3 = Gn.distance} = {}) {
        this.query = null, this.options = {isCaseSensitive: t3, includeMatches: n3, minMatchCharLength: r2, findAllMatches: s2, ignoreLocation: o3, location: i2, threshold: l2, distance: a3}, this.pattern = t3 ? e2 : e2.toLowerCase(), this.query = function(e3, t4 = {}) {
          return e3.split("|").map((e4) => {
            let n4 = e4.trim().split(ur).filter((e5) => e5 && !!e5.trim()), r3 = [];
            for (let e5 = 0, o4 = n4.length; e5 < o4; e5 += 1) {
              const o5 = n4[e5];
              let s3 = false, i3 = -1;
              for (; !s3 && ++i3 < dr; ) {
                const e6 = cr[i3];
                let n5 = e6.isMultiMatch(o5);
                n5 && (r3.push(new e6(n5, t4)), s3 = true);
              }
              if (!s3)
                for (i3 = -1; ++i3 < dr; ) {
                  const e6 = cr[i3];
                  let n5 = e6.isSingleMatch(o5);
                  if (n5) {
                    r3.push(new e6(n5, t4));
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
        const {includeMatches: n3, isCaseSensitive: r2} = this.options;
        e2 = r2 ? e2 : e2.toLowerCase();
        let o3 = 0, s2 = [], i2 = 0;
        for (let r3 = 0, l2 = t3.length; r3 < l2; r3 += 1) {
          const l3 = t3[r3];
          s2.length = 0, o3 = 0;
          for (let t4 = 0, r4 = l3.length; t4 < r4; t4 += 1) {
            const r5 = l3[t4], {isMatch: a3, indices: c2, score: d2} = r5.search(e2);
            if (!a3) {
              i2 = 0, o3 = 0, s2.length = 0;
              break;
            }
            if (o3 += 1, i2 += d2, n3) {
              const e3 = r5.constructor.type;
              gr.has(e3) ? s2 = [...s2, ...c2] : s2.push(c2);
            }
          }
          if (o3) {
            let e3 = {isMatch: true, score: i2 / o3};
            return n3 && (e3.indices = s2), e3;
          }
        }
        return {isMatch: false, score: 1};
      }
    }
    const fr = [];
    function pr(e2, t3) {
      for (let n3 = 0, r2 = fr.length; n3 < r2; n3 += 1) {
        let r3 = fr[n3];
        if (r3.condition(e2, t3))
          return new r3(e2, t3);
      }
      return new or(e2, t3);
    }
    const mr = "$and";
    const $r = "$or";
    const yr = "$path";
    const br = "$val";
    const wr = (e2) => !(!e2[mr] && !e2[$r]);
    const vr = (e2) => ({[mr]: Object.keys(e2).map((t3) => ({[t3]: e2[t3]}))});
    function xr(e2, t3, {auto: n3 = true} = {}) {
      const r2 = (e3) => {
        let o3 = Object.keys(e3);
        const s2 = ((e4) => !!e4[yr])(e3);
        if (!s2 && o3.length > 1 && !wr(e3))
          return r2(vr(e3));
        if (((e4) => !En(e4) && Yn(e4) && !wr(e4))(e3)) {
          const r3 = s2 ? e3[yr] : o3[0], i3 = s2 ? e3[br] : e3[r3];
          if (!zn(i3))
            throw new Error(((e4) => `Invalid value for key ${e4}`)(r3));
          const l2 = {keyId: Zn(r3), pattern: i3};
          return n3 && (l2.searcher = pr(i3, t3)), l2;
        }
        let i2 = {children: [], operator: o3[0]};
        return o3.forEach((t4) => {
          const n4 = e3[t4];
          En(n4) && n4.forEach((e4) => {
            i2.children.push(r2(e4));
          });
        }), i2;
      };
      return wr(e2) || (e2 = vr(e2)), r2(e2);
    }
    function kr(e2, t3) {
      const n3 = e2.matches;
      t3.matches = [], Rn(n3) && n3.forEach((e3) => {
        if (!Rn(e3.indices) || !e3.indices.length)
          return;
        const {indices: n4, value: r2} = e3;
        let o3 = {indices: n4, value: r2};
        e3.key && (o3.key = e3.key.src), e3.idx > -1 && (o3.refIndex = e3.idx), t3.matches.push(o3);
      });
    }
    function Mr(e2, t3) {
      t3.score = e2.score;
    }
    class _r {
      constructor(e2, t3 = {}, n3) {
        this.options = {...Gn, ...t3}, this.options.useExtendedSearch, this._keyStore = new Vn(this.options.keys), this.setCollection(e2, n3);
      }
      setCollection(e2, t3) {
        if (this._docs = e2, t3 && !(t3 instanceof Xn))
          throw new Error("Incorrect 'index' type");
        this._myIndex = t3 || er(this.options.keys, this._docs, {getFn: this.options.getFn});
      }
      add(e2) {
        Rn(e2) && (this._docs.push(e2), this._myIndex.add(e2));
      }
      remove(e2 = () => false) {
        const t3 = [];
        for (let n3 = 0, r2 = this._docs.length; n3 < r2; n3 += 1) {
          const o3 = this._docs[n3];
          e2(o3, n3) && (this.removeAt(n3), n3 -= 1, r2 -= 1, t3.push(o3));
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
        const {includeMatches: n3, includeScore: r2, shouldSort: o3, sortFn: s2, ignoreFieldNorm: i2} = this.options;
        let l2 = zn(e2) ? zn(this._docs[0]) ? this._searchStringList(e2) : this._searchObjectList(e2) : this._searchLogical(e2);
        return function(e3, {ignoreFieldNorm: t4 = Gn.ignoreFieldNorm}) {
          e3.forEach((e4) => {
            let n4 = 1;
            e4.matches.forEach(({key: e5, norm: r3, score: o4}) => {
              const s3 = e5 ? e5.weight : null;
              n4 *= Math.pow(o4 === 0 && s3 ? Number.EPSILON : o4, (s3 || 1) * (t4 ? 1 : r3));
            }), e4.score = n4;
          });
        }(l2, {ignoreFieldNorm: i2}), o3 && l2.sort(s2), Wn(t3) && t3 > -1 && (l2 = l2.slice(0, t3)), function(e3, t4, {includeMatches: n4 = Gn.includeMatches, includeScore: r3 = Gn.includeScore} = {}) {
          const o4 = [];
          return n4 && o4.push(kr), r3 && o4.push(Mr), e3.map((e4) => {
            const {idx: n5} = e4, r4 = {item: t4[n5], refIndex: n5};
            return o4.length && o4.forEach((t5) => {
              t5(e4, r4);
            }), r4;
          });
        }(l2, this._docs, {includeMatches: n3, includeScore: r2});
      }
      _searchStringList(e2) {
        const t3 = pr(e2, this.options), {records: n3} = this._myIndex, r2 = [];
        return n3.forEach(({v: e3, i: n4, n: o3}) => {
          if (!Rn(e3))
            return;
          const {isMatch: s2, score: i2, indices: l2} = t3.searchIn(e3);
          s2 && r2.push({item: e3, idx: n4, matches: [{score: i2, value: e3, norm: o3, indices: l2}]});
        }), r2;
      }
      _searchLogical(e2) {
        const t3 = xr(e2, this.options), n3 = (e3, t4, r3) => {
          if (!e3.children) {
            const {keyId: n4, searcher: o4} = e3, s3 = this._findMatches({key: this._keyStore.get(n4), value: this._myIndex.getValueForItemAtKeyId(t4, n4), searcher: o4});
            return s3 && s3.length ? [{idx: r3, item: t4, matches: s3}] : [];
          }
          switch (e3.operator) {
            case mr: {
              const o4 = [];
              for (let s3 = 0, i2 = e3.children.length; s3 < i2; s3 += 1) {
                const i3 = e3.children[s3], l2 = n3(i3, t4, r3);
                if (!l2.length)
                  return [];
                o4.push(...l2);
              }
              return o4;
            }
            case $r: {
              const o4 = [];
              for (let s3 = 0, i2 = e3.children.length; s3 < i2; s3 += 1) {
                const i3 = e3.children[s3], l2 = n3(i3, t4, r3);
                if (l2.length) {
                  o4.push(...l2);
                  break;
                }
              }
              return o4;
            }
          }
        }, r2 = this._myIndex.records, o3 = {}, s2 = [];
        return r2.forEach(({$: e3, i: r3}) => {
          if (Rn(e3)) {
            let i2 = n3(t3, e3, r3);
            i2.length && (o3[r3] || (o3[r3] = {idx: r3, item: e3, matches: []}, s2.push(o3[r3])), i2.forEach(({matches: e4}) => {
              o3[r3].matches.push(...e4);
            }));
          }
        }), s2;
      }
      _searchObjectList(e2) {
        const t3 = pr(e2, this.options), {keys: n3, records: r2} = this._myIndex, o3 = [];
        return r2.forEach(({$: e3, i: r3}) => {
          if (!Rn(e3))
            return;
          let s2 = [];
          n3.forEach((n4, r4) => {
            s2.push(...this._findMatches({key: n4, value: e3[r4], searcher: t3}));
          }), s2.length && o3.push({idx: r3, item: e3, matches: s2});
        }), o3;
      }
      _findMatches({key: e2, value: t3, searcher: n3}) {
        if (!Rn(t3))
          return [];
        let r2 = [];
        if (En(t3))
          t3.forEach(({v: t4, i: o3, n: s2}) => {
            if (!Rn(t4))
              return;
            const {isMatch: i2, score: l2, indices: a3} = n3.searchIn(t4);
            i2 && r2.push({score: l2, key: e2, value: t4, idx: o3, norm: s2, indices: a3});
          });
        else {
          const {v: o3, n: s2} = t3, {isMatch: i2, score: l2, indices: a3} = n3.searchIn(o3);
          i2 && r2.push({score: l2, key: e2, value: o3, norm: s2, indices: a3});
        }
        return r2;
      }
    }
    _r.version = "6.4.6", _r.createIndex = er, _r.parseIndex = function(e2, {getFn: t3 = Gn.getFn} = {}) {
      const {keys: n3, records: r2} = e2, o3 = new Xn({getFn: t3});
      return o3.setKeys(n3), o3.setIndexRecords(r2), o3;
    }, _r.config = Gn, _r.parseQuery = xr, function(...e2) {
      fr.push(...e2);
    }(hr);
    const Cr = {useExtendedSearch: true, keys: ["subject", "preview", "body"]};
    let Sr = main2.G(Be, (e2) => new _r(e2, Cr));
    let Or = main2.F("");
    let Dr = main2.G(Be, (e2) => e2.reduce((e3, t3) => {
      const n3 = Bn(t3.time);
      return e3.has(n3) || e3.set(n3, 0), e3.set(n3, e3.get(n3) + 1), e3;
    }, new Map()));
    let Tr = main2.G([Be, Sr, Or], ([e2, t3, n3]) => n3 ? t3.search("'" + n3).map((e3) => e3.item) : e2);
    let jr = main2.G([Tr, _e, je, Le, Or, jn], ([e2, t3, n3, r2, o3, s2]) => {
      if (n3) {
        let o4 = t3.get(n3);
        r2.has(o4) || r2.set(o4, new Set());
        let s3 = r2.get(o4), i3 = (e3) => s3.has(e3.id);
        return e2.filter(i3);
      }
      const i2 = (e3) => true, l2 = o3 && i2 || s2 && ((e3) => Bn(e3.time) == s2) || i2;
      return e2.filter(l2);
    });
    const Lr = {id: "", member: "", time: "", subject: "", preview: ""};
    let Pr = main2.G([jr, Ie], ([e2, t3]) => function(n3) {
      const r2 = (t3 - 1) * n3, o3 = e2.slice(r2, r2 + n3);
      return o3.length < n3 ? o3.concat(Array(n3 - o3.length).fill(Lr)) : o3;
    });
    function Br(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[11] = t3[n3], r2;
    }
    function Ar(e2) {
      let t3, n3, r2, o3, u2, g2, h2, f2, p2, m2, y2, b2 = e2[11].date.getDate() + "", w2 = (e2[7](e2[11].date) || 0) + "";
      function v2() {
        return e2[9](e2[11]);
      }
      return {c() {
        t3 = main2.e("div"), n3 = main2.e("button"), r2 = main2.t(b2), u2 = main2.a(), g2 = main2.e("span"), h2 = main2.t(w2), p2 = main2.a(), main2.b(n3, "class", o3 = "day--label " + e2[8](e2[11].date) + " svelte-f0q6d3"), main2.b(n3, "type", "button"), main2.Y(n3, "selected", Nn(e2[11].date, e2[1])), main2.Y(n3, "highlighted", Nn(e2[11].date, e2[2])), main2.Y(n3, "shake-date", e2[3] && Nn(e2[11].date, e2[3])), main2.Y(n3, "disabled", !e2[11].selectable), main2.b(g2, "class", f2 = (e2[5] ? "text-gray-600" : "text-pink-200") + " text-xs absolute bottom-0 right-0"), main2.b(t3, "class", "day relative svelte-f0q6d3"), main2.Y(t3, "outside-month", !e2[11].partOfMonth), main2.Y(t3, "is-today", e2[11].isToday), main2.Y(t3, "is-disabled", !e2[11].selectable);
      }, m(e3, o4) {
        main2.c(e3, t3, o4), main2.d(t3, n3), main2.d(n3, r2), main2.d(t3, u2), main2.d(t3, g2), main2.d(g2, h2), main2.d(t3, p2), m2 || (y2 = main2.A(n3, "click", v2), m2 = true);
      }, p(s2, i2) {
        e2 = s2, 1 & i2 && b2 !== (b2 = e2[11].date.getDate() + "") && main2.o(r2, b2), 1 & i2 && o3 !== (o3 = "day--label " + e2[8](e2[11].date) + " svelte-f0q6d3") && main2.b(n3, "class", o3), 3 & i2 && main2.Y(n3, "selected", Nn(e2[11].date, e2[1])), 5 & i2 && main2.Y(n3, "highlighted", Nn(e2[11].date, e2[2])), 9 & i2 && main2.Y(n3, "shake-date", e2[3] && Nn(e2[11].date, e2[3])), 1 & i2 && main2.Y(n3, "disabled", !e2[11].selectable), 1 & i2 && w2 !== (w2 = (e2[7](e2[11].date) || 0) + "") && main2.o(h2, w2), 32 & i2 && f2 !== (f2 = (e2[5] ? "text-gray-600" : "text-pink-200") + " text-xs absolute bottom-0 right-0") && main2.b(g2, "class", f2), 1 & i2 && main2.Y(t3, "outside-month", !e2[11].partOfMonth), 1 & i2 && main2.Y(t3, "is-today", e2[11].isToday), 1 & i2 && main2.Y(t3, "is-disabled", !e2[11].selectable);
      }, d(e3) {
        e3 && main2.f(t3), m2 = false, y2();
      }};
    }
    function Ir(e2) {
      let t3, n3, r2, o3, i2 = e2[0], c2 = [];
      for (let t4 = 0; t4 < i2.length; t4 += 1)
        c2[t4] = Ar(Br(e2, i2, t4));
      return {c() {
        t3 = main2.e("div");
        for (let e3 = 0; e3 < c2.length; e3 += 1)
          c2[e3].c();
        main2.b(t3, "class", "week svelte-f0q6d3");
      }, m(e3, n4) {
        main2.c(e3, t3, n4);
        for (let e4 = 0; e4 < c2.length; e4 += 1)
          c2[e4].m(t3, null);
        o3 = true;
      }, p(n4, [r3]) {
        if (e2 = n4, 495 & r3) {
          let n5;
          for (i2 = e2[0], n5 = 0; n5 < i2.length; n5 += 1) {
            const o4 = Br(e2, i2, n5);
            c2[n5] ? c2[n5].p(o4, r3) : (c2[n5] = Ar(o4), c2[n5].c(), c2[n5].m(t3, null));
          }
          for (; n5 < c2.length; n5 += 1)
            c2[n5].d(1);
          c2.length = i2.length;
        }
      }, i(s2) {
        o3 || (s2 && main2.j(() => {
          r2 && r2.end(1), n3 || (n3 = main2.X(t3, o, {x: 50 * e2[4], duration: 180, delay: 90})), n3.start();
        }), o3 = true);
      }, o(e3) {
        n3 && n3.invalidate(), e3 && (r2 = main2._(t3, a, {duration: 180})), o3 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(c2, e3), e3 && r2 && r2.end();
      }};
    }
    function Nr(e2, t3, n3) {
      let r2, o3;
      main2.g(e2, Dr, (e3) => n3(10, r2 = e3)), main2.g(e2, ge, (e3) => n3(5, o3 = e3));
      const s2 = main2.L();
      let {days: i2} = t3, {selected: l2} = t3, {highlighted: a3} = t3, {shouldShakeDate: c2} = t3, {direction: d2} = t3;
      function u2(e3) {
        return r2.get(Ln(e3));
      }
      return e2.$$set = (e3) => {
        "days" in e3 && n3(0, i2 = e3.days), "selected" in e3 && n3(1, l2 = e3.selected), "highlighted" in e3 && n3(2, a3 = e3.highlighted), "shouldShakeDate" in e3 && n3(3, c2 = e3.shouldShakeDate), "direction" in e3 && n3(4, d2 = e3.direction);
      }, [i2, l2, a3, c2, d2, o3, s2, u2, function(e3) {
        const t4 = u2(e3);
        if (!t4)
          return (o3 ? "bg-gray-700" : "bg-gray-400") + " opacity-60";
        const n4 = 20 * Math.floor((t4 + 20) / 10);
        return (o3 ? "bg-pink-900 " : "bg-pink-400 ") + "bg-opacity-" + n4;
      }, (e3) => s2("dateSelected", e3.date)];
    }
    class Er extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Nr, Ir, main2.s, {days: 0, selected: 1, highlighted: 2, shouldShakeDate: 3, direction: 4});
      }
    }
    function zr(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[8] = t3[n3], r2;
    }
    function Wr(e2, t3) {
      let n3, r2, o3;
      return r2 = new Er({props: {days: t3[8].days, selected: t3[1], highlighted: t3[2], shouldShakeDate: t3[3], direction: t3[4]}}), r2.$on("dateSelected", t3[7]), {key: e2, first: null, c() {
        n3 = main2.I(), main2.q(r2.$$.fragment), this.first = n3;
      }, m(e3, t4) {
        main2.c(e3, n3, t4), main2.r(r2, e3, t4), o3 = true;
      }, p(e3, n4) {
        t3 = e3;
        const o4 = {};
        1 & n4 && (o4.days = t3[8].days), 2 & n4 && (o4.selected = t3[1]), 4 & n4 && (o4.highlighted = t3[2]), 8 & n4 && (o4.shouldShakeDate = t3[3]), 16 & n4 && (o4.direction = t3[4]), r2.$set(o4);
      }, i(e3) {
        o3 || (main2.p(r2.$$.fragment, e3), o3 = true);
      }, o(e3) {
        main2.v(r2.$$.fragment, e3), o3 = false;
      }, d(e3) {
        e3 && main2.f(n3), main2.w(r2, e3);
      }};
    }
    function Fr(e2) {
      let t3, n3, r2 = [], o3 = new Map(), i2 = e2[0].weeks;
      const c2 = (e3) => e3[8].id;
      for (let t4 = 0; t4 < i2.length; t4 += 1) {
        let n4 = zr(e2, i2, t4), s2 = c2(n4);
        o3.set(s2, r2[t4] = Wr(s2, n4));
      }
      return {c() {
        t3 = main2.e("div");
        for (let e3 = 0; e3 < r2.length; e3 += 1)
          r2[e3].c();
        main2.b(t3, "class", "month-container svelte-l3zhme");
      }, m(e3, o4) {
        main2.c(e3, t3, o4);
        for (let e4 = 0; e4 < r2.length; e4 += 1)
          r2[e4].m(t3, null);
        n3 = true;
      }, p(e3, [n4]) {
        31 & n4 && (i2 = e3[0].weeks, main2.D(), r2 = main2.$(r2, n4, c2, 1, e3, i2, o3, t3, main2.a0, Wr, null, zr), main2.x());
      }, i(e3) {
        if (!n3) {
          for (let e4 = 0; e4 < i2.length; e4 += 1)
            main2.p(r2[e4]);
          n3 = true;
        }
      }, o(e3) {
        for (let e4 = 0; e4 < r2.length; e4 += 1)
          main2.v(r2[e4]);
        n3 = false;
      }, d(e3) {
        e3 && main2.f(t3);
        for (let e4 = 0; e4 < r2.length; e4 += 1)
          r2[e4].d();
      }};
    }
    function Yr(e2, t3, n3) {
      let r2, {id: o3} = t3, {visibleMonth: s2} = t3, {selected: i2} = t3, {highlighted: l2} = t3, {shouldShakeDate: a3} = t3, c2 = o3;
      return e2.$$set = (e3) => {
        "id" in e3 && n3(5, o3 = e3.id), "visibleMonth" in e3 && n3(0, s2 = e3.visibleMonth), "selected" in e3 && n3(1, i2 = e3.selected), "highlighted" in e3 && n3(2, l2 = e3.highlighted), "shouldShakeDate" in e3 && n3(3, a3 = e3.shouldShakeDate);
      }, e2.$$.update = () => {
        96 & e2.$$.dirty && (n3(4, r2 = c2 < o3 ? 1 : -1), n3(6, c2 = o3));
      }, [s2, i2, l2, a3, r2, o3, c2, function(t4) {
        main2.a1(e2, t4);
      }];
    }
    class Rr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Yr, Fr, main2.s, {id: 5, visibleMonth: 0, selected: 1, highlighted: 2, shouldShakeDate: 3});
      }
    }
    function Hr(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[17] = t3[n3], r2[19] = n3, r2;
    }
    function Jr(e2) {
      let t3, n3, r2, o3, u2, g2, h2, f2 = e2[17].abbrev + "";
      function p2(...t4) {
        return e2[16](e2[17], e2[19], ...t4);
      }
      return {c() {
        t3 = main2.e("div"), n3 = main2.e("span"), r2 = main2.t(f2), o3 = main2.a(), main2.b(n3, "class", "svelte-kimpxh"), main2.b(t3, "class", "month-selector--month svelte-kimpxh"), main2.Y(t3, "selected", e2[19] === e2[0]), main2.Y(t3, "selectable", e2[17].selectable);
      }, m(e3, s2) {
        main2.c(e3, t3, s2), main2.d(t3, n3), main2.d(n3, r2), main2.d(t3, o3), g2 || (h2 = main2.A(t3, "click", p2), g2 = true);
      }, p(n4, o4) {
        e2 = n4, 16 & o4 && f2 !== (f2 = e2[17].abbrev + "") && main2.o(r2, f2), 1 & o4 && main2.Y(t3, "selected", e2[19] === e2[0]), 16 & o4 && main2.Y(t3, "selectable", e2[17].selectable);
      }, i(n4) {
        u2 || main2.j(() => {
          u2 = main2.X(t3, o, {x: 100 * e2[5]}), u2.start();
        });
      }, o: main2.n, d(e3) {
        e3 && main2.f(t3), g2 = false, h2();
      }};
    }
    function qr(e2) {
      let t3, n3 = e2[4], r2 = [];
      for (let t4 = 0; t4 < n3.length; t4 += 1)
        r2[t4] = Jr(Hr(e2, n3, t4));
      return {c() {
        for (let e3 = 0; e3 < r2.length; e3 += 1)
          r2[e3].c();
        t3 = main2.I();
      }, m(e3, n4) {
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          r2[t4].m(e3, n4);
        main2.c(e3, t3, n4);
      }, p(e3, o3) {
        if (529 & o3) {
          let s2;
          for (n3 = e3[4], s2 = 0; s2 < n3.length; s2 += 1) {
            const i2 = Hr(e3, n3, s2);
            r2[s2] ? (r2[s2].p(i2, o3), main2.p(r2[s2], 1)) : (r2[s2] = Jr(i2), r2[s2].c(), main2.p(r2[s2], 1), r2[s2].m(t3.parentNode, t3));
          }
          for (; s2 < r2.length; s2 += 1)
            r2[s2].d(1);
          r2.length = n3.length;
        }
      }, i(e3) {
        for (let e4 = 0; e4 < n3.length; e4 += 1)
          main2.p(r2[e4]);
      }, o: main2.n, d(e3) {
        main2.y(r2, e3), e3 && main2.f(t3);
      }};
    }
    function Vr(e2) {
      let t3, n3, r2, u2, h2, y2, b2, w2, v2, x2, M2, _2, C2, S2, D2, T2, L2, P2, B2, A2, I2, N2, E2, z2 = e2[2][e2[0]][0] + "", W2 = e2[1], F2 = qr(e2);
      return {c() {
        t3 = main2.e("div"), n3 = main2.e("div"), r2 = main2.e("div"), u2 = main2.e("span"), u2.textContent = "\u25C1", h2 = main2.a(), y2 = main2.e("span"), b2 = main2.t(e2[1]), w2 = main2.t("\uB144"), v2 = main2.a(), x2 = main2.e("span"), x2.textContent = "\u25B7", M2 = main2.a(), _2 = main2.e("div"), C2 = main2.e("span"), C2.textContent = "\u25C1", S2 = main2.a(), D2 = main2.e("span"), T2 = main2.t(z2), L2 = main2.a(), P2 = main2.e("span"), P2.textContent = "\u25B7", B2 = main2.a(), A2 = main2.e("div"), F2.c(), main2.b(u2, "class", "label svelte-kimpxh"), main2.b(y2, "class", "label svelte-kimpxh"), main2.b(x2, "class", "label svelte-kimpxh"), main2.b(r2, "class", "leading-tight"), main2.b(C2, "class", "label svelte-kimpxh"), main2.b(D2, "class", "label svelte-kimpxh"), main2.b(P2, "class", "label svelte-kimpxh"), main2.b(_2, "class", "leading-tight mr-4 ml-4"), main2.b(n3, "class", "heading-section flex justify-center p-2 svelte-kimpxh"), main2.b(A2, "class", I2 = "month-selector " + e2[6]("bg-white") + " svelte-kimpxh"), main2.Y(A2, "open", e2[3]), main2.b(t3, "class", "title");
      }, m(o3, s2) {
        main2.c(o3, t3, s2), main2.d(t3, n3), main2.d(n3, r2), main2.d(r2, u2), main2.d(r2, h2), main2.d(r2, y2), main2.d(y2, b2), main2.d(y2, w2), main2.d(r2, v2), main2.d(r2, x2), main2.d(n3, M2), main2.d(n3, _2), main2.d(_2, C2), main2.d(_2, S2), main2.d(_2, D2), main2.d(D2, T2), main2.d(_2, L2), main2.d(_2, P2), main2.d(t3, B2), main2.d(t3, A2), F2.m(A2, null), N2 || (E2 = [main2.A(u2, "click", e2[12]), main2.A(x2, "click", e2[13]), main2.A(C2, "click", e2[14]), main2.A(D2, "click", e2[8]), main2.A(P2, "click", e2[15])], N2 = true);
      }, p(e3, [t4]) {
        2 & t4 && main2.o(b2, e3[1]), 5 & t4 && z2 !== (z2 = e3[2][e3[0]][0] + "") && main2.o(T2, z2), 2 & t4 && main2.s(W2, W2 = e3[1]) ? (main2.D(), main2.v(F2, 1, 1, main2.n), main2.x(), F2 = qr(e3), F2.c(), main2.p(F2), F2.m(A2, null)) : F2.p(e3, t4), 64 & t4 && I2 !== (I2 = "month-selector " + e3[6]("bg-white") + " svelte-kimpxh") && main2.b(A2, "class", I2), 72 & t4 && main2.Y(A2, "open", e3[3]);
      }, i(e3) {
        main2.p(F2);
      }, o(e3) {
        main2.v(F2);
      }, d(e3) {
        e3 && main2.f(t3), F2.d(e3), N2 = false, main2.B(E2);
      }};
    }
    function Kr(e2, t3, n3) {
      let r2;
      main2.g(e2, he, (e3) => n3(6, r2 = e3));
      const o3 = main2.L();
      let s2, i2, {month: l2} = t3, {year: a3} = t3, {start: c2} = t3, {end: d2} = t3, {monthsOfYear: u2} = t3, g2 = false;
      function h2() {
        n3(3, g2 = !g2);
      }
      function f2(e3, {m: t4, i: n4}) {
        e3.stopPropagation(), t4.selectable && (o3("monthSelected", n4), h2());
      }
      return e2.$$set = (e3) => {
        "month" in e3 && n3(0, l2 = e3.month), "year" in e3 && n3(1, a3 = e3.year), "start" in e3 && n3(10, c2 = e3.start), "end" in e3 && n3(11, d2 = e3.end), "monthsOfYear" in e3 && n3(2, u2 = e3.monthsOfYear);
      }, e2.$$.update = () => {
        if (3078 & e2.$$.dirty) {
          let e3 = c2.getFullYear() === a3, t4 = d2.getFullYear() === a3;
          n3(4, s2 = u2.map((n4, r3) => Object.assign({}, {name: n4[0], abbrev: n4[1]}, {selectable: !e3 && !t4 || (!e3 || r3 >= c2.getMonth()) && (!t4 || r3 <= d2.getMonth())})));
        }
      }, [l2, a3, u2, g2, s2, i2, r2, o3, h2, f2, c2, d2, () => {
        n3(5, i2 = -1), o3("incrementYear", -1);
      }, () => {
        n3(5, i2 = 1), o3("incrementYear", 1);
      }, () => {
        n3(5, i2 = -1), o3("incrementMonth", -1);
      }, () => {
        n3(5, i2 = 1), o3("incrementMonth", 1);
      }, (e3, t4, n4) => f2(n4, {m: e3, i: t4})];
    }
    class Ur extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Kr, Vr, main2.s, {month: 0, year: 1, start: 10, end: 11, monthsOfYear: 2});
      }
    }
    const {window: Zr} = main2.C;
    const Gr = (e2) => ({});
    const Qr = (e2) => ({});
    const Xr = (e2) => ({});
    const eo = (e2) => ({});
    function to(e2) {
      let t3, n3, r2, o3, u2, h2, f2, m2, y2, b2;
      main2.j(e2[15]);
      const w2 = e2[14].trigger, x2 = main2.J(w2, e2, e2[13], eo), C2 = e2[14].contents, S2 = main2.J(C2, e2, e2[13], Qr);
      return {c() {
        t3 = main2.e("div"), n3 = main2.e("div"), x2 && x2.c(), r2 = main2.a(), o3 = main2.e("div"), u2 = main2.e("div"), h2 = main2.e("div"), S2 && S2.c(), main2.b(n3, "class", "trigger"), main2.b(h2, "class", "contents-inner svelte-195d723"), main2.b(u2, "class", f2 = "contents " + e2[9]("bg-white") + " svelte-195d723"), main2.b(o3, "class", "contents-wrapper svelte-195d723"), main2.h(o3, "transform", "translate(-50%,-50%) translate(" + e2[8] + "px, " + e2[7] + "px)"), main2.Y(o3, "visible", e2[0]), main2.Y(o3, "shrink", e2[1]), main2.b(t3, "class", "sc-popover svelte-195d723");
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.d(t3, n3), x2 && x2.m(n3, null), e2[16](n3), main2.d(t3, r2), main2.d(t3, o3), main2.d(o3, u2), main2.d(u2, h2), S2 && S2.m(h2, null), e2[17](u2), e2[18](o3), e2[19](t3), m2 = true, y2 || (b2 = [main2.A(Zr, "resize", e2[15]), main2.A(n3, "click", e2[10])], y2 = true);
      }, p(e3, [t4]) {
        x2 && x2.p && 8192 & t4 && main2.K(x2, w2, e3, e3[13], t4, Xr, eo), S2 && S2.p && 8192 & t4 && main2.K(S2, C2, e3, e3[13], t4, Gr, Qr), (!m2 || 512 & t4 && f2 !== (f2 = "contents " + e3[9]("bg-white") + " svelte-195d723")) && main2.b(u2, "class", f2), (!m2 || 384 & t4) && main2.h(o3, "transform", "translate(-50%,-50%) translate(" + e3[8] + "px, " + e3[7] + "px)"), 1 & t4 && main2.Y(o3, "visible", e3[0]), 2 & t4 && main2.Y(o3, "shrink", e3[1]);
      }, i(e3) {
        m2 || (main2.p(x2, e3), main2.p(S2, e3), m2 = true);
      }, o(e3) {
        main2.v(x2, e3), main2.v(S2, e3), m2 = false;
      }, d(n4) {
        n4 && main2.f(t3), x2 && x2.d(n4), e2[16](null), S2 && S2.d(n4), e2[17](null), e2[18](null), e2[19](null), y2 = false, main2.B(b2);
      }};
    }
    function no(e2, t3, n3) {
      let r2;
      main2.g(e2, he, (e3) => n3(9, r2 = e3));
      let {$$slots: o3 = {}, $$scope: s2} = t3;
      const i2 = main2.L();
      let l2, a3, c2, d2, u2, g2 = (e3, t4, n4) => {
        e3.addEventListener(t4, function r3() {
          n4.apply(this, arguments), e3.removeEventListener(t4, r3);
        });
      }, h2 = 0, f2 = 0, {open: p2 = false} = t3, {shrink: m2} = t3, {trigger: $2} = t3;
      const y2 = () => {
        n3(1, m2 = true), d2 && g2(d2, "animationend", () => {
          n3(1, m2 = false), n3(0, p2 = false), i2("closed");
        });
      };
      function b2(e3) {
        if (!p2)
          return;
        let t4 = e3.target;
        do {
          if (t4 === l2)
            return;
        } while (t4 = t4.parentNode);
        y2();
      }
      main2.a2(() => {
        if (document.addEventListener("click", b2), $2)
          return c2.appendChild($2.parentNode.removeChild($2)), () => {
            document.removeEventListener("click", b2);
          };
      });
      const w2 = async () => {
        let e3, t4, r3 = await (async () => {
          p2 || n3(0, p2 = true), await main2.a3();
          let e4 = u2.getBoundingClientRect();
          return {top: e4.top + -1 * h2, bottom: window.innerHeight - e4.bottom + h2, left: e4.left + -1 * f2, right: document.body.clientWidth - e4.right + f2};
        })();
        return t4 = a3 < 480 ? r3.bottom : r3.top < 0 ? Math.abs(r3.top) : r3.bottom < 0 ? r3.bottom : 0, e3 = r3.left < 0 ? Math.abs(r3.left) : r3.right < 0 ? r3.right : 0, {x: e3, y: t4};
      };
      return e2.$$set = (e3) => {
        "open" in e3 && n3(0, p2 = e3.open), "shrink" in e3 && n3(1, m2 = e3.shrink), "trigger" in e3 && n3(11, $2 = e3.trigger), "$$scope" in e3 && n3(13, s2 = e3.$$scope);
      }, [p2, m2, l2, a3, c2, d2, u2, h2, f2, r2, async () => {
        const {x: e3, y: t4} = await w2();
        n3(8, f2 = e3), n3(7, h2 = t4), n3(0, p2 = true), i2("opened");
      }, $2, y2, s2, o3, function() {
        n3(3, a3 = Zr.innerWidth);
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          c2 = e3, n3(4, c2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          d2 = e3, n3(5, d2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          u2 = e3, n3(6, u2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          l2 = e3, n3(2, l2);
        });
      }];
    }
    class ro extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, no, to, main2.s, {open: 0, shrink: 1, trigger: 11, close: 12});
      }
      get close() {
        return this.$$.ctx[12];
      }
    }
    const oo = (e2, t3, n3) => e2.replace(new RegExp("#{" + t3 + "}", "g"), n3);
    const so = function(e2, t3, n3) {
      if (e2 = e2.toString(), t3 === void 0)
        return e2;
      if (e2.length == t3)
        return e2;
      if (n3 = n3 !== void 0 && n3, e2.length < t3)
        for (; t3 - e2.length > 0; )
          e2 = "0" + e2;
      else
        e2.length > t3 && (e2 = n3 ? e2.substring(e2.length - t3) : e2.substring(0, t3));
      return e2;
    };
    let io = {daysOfWeek: [["Sunday", "Sun"], ["Monday", "Mon"], ["Tuesday", "Tue"], ["Wednesday", "Wed"], ["Thursday", "Thu"], ["Friday", "Fri"], ["Saturday", "Sat"]], monthsOfYear: [["January", "Jan"], ["February", "Feb"], ["March", "Mar"], ["April", "Apr"], ["May", "May"], ["June", "Jun"], ["July", "Jul"], ["August", "Aug"], ["September", "Sep"], ["October", "Oct"], ["November", "Nov"], ["December", "Dec"]]};
    var lo = [{key: "d", method: function(e2) {
      return so(e2.getDate(), 2);
    }}, {key: "D", method: function(e2) {
      return io.daysOfWeek[e2.getDay()][1];
    }}, {key: "j", method: function(e2) {
      return e2.getDate();
    }}, {key: "l", method: function(e2) {
      return io.daysOfWeek[e2.getDay()][0];
    }}, {key: "F", method: function(e2) {
      return io.monthsOfYear[e2.getMonth()][0];
    }}, {key: "m", method: function(e2) {
      return so(e2.getMonth() + 1, 2);
    }}, {key: "M", method: function(e2) {
      return io.monthsOfYear[e2.getMonth()][1];
    }}, {key: "n", method: function(e2) {
      return e2.getMonth() + 1;
    }}, {key: "Y", method: function(e2) {
      return e2.getFullYear();
    }}, {key: "y", method: function(e2) {
      return so(e2.getFullYear(), 2, true);
    }}];
    var ao = [{key: "a", method: function(e2) {
      return e2.getHours() > 11 ? "pm" : "am";
    }}, {key: "A", method: function(e2) {
      return e2.getHours() > 11 ? "PM" : "AM";
    }}, {key: "g", method: function(e2) {
      return e2.getHours() % 12 || 12;
    }}, {key: "G", method: function(e2) {
      return e2.getHours();
    }}, {key: "h", method: function(e2) {
      return so(e2.getHours() % 12 || 12, 2);
    }}, {key: "H", method: function(e2) {
      return so(e2.getHours(), 2);
    }}, {key: "i", method: function(e2) {
      return so(e2.getMinutes(), 2);
    }}, {key: "s", method: function(e2) {
      return so(e2.getSeconds(), 2);
    }}];
    const co = (e2 = {}) => {
      ((e3) => {
        Object.keys(e3).forEach((t3) => {
          io[t3] && io[t3].length == e3[t3].length && (io[t3] = e3[t3]);
        });
      })(e2);
    };
    const uo = {left: 37, up: 38, right: 39, down: 40, pgup: 33, pgdown: 34, enter: 13, escape: 27, tab: 9};
    const go = Object.keys(uo).map((e2) => uo[e2]);
    function ho(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[68] = t3[n3], r2;
    }
    const fo = (e2) => ({selected: 1 & e2[0], formattedSelected: 4 & e2[0]});
    const po = (e2) => ({selected: e2[0], formattedSelected: e2[2]});
    function mo(e2) {
      let t3, n3;
      return {c() {
        t3 = main2.e("button"), n3 = main2.t(e2[2]), main2.b(t3, "class", "calendar-button svelte-1kbc1zi"), main2.b(t3, "type", "button");
      }, m(e3, r2) {
        main2.c(e3, t3, r2), main2.d(t3, n3);
      }, p(e3, t4) {
        4 & t4[0] && main2.o(n3, e3[2]);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function $o(e2) {
      let t3, n3;
      const r2 = e2[40].default, o3 = main2.J(r2, e2, e2[48], po), i2 = o3 || function(e3) {
        let t4, n4 = !e3[1] && mo(e3);
        return {c() {
          n4 && n4.c(), t4 = main2.I();
        }, m(e4, r3) {
          n4 && n4.m(e4, r3), main2.c(e4, t4, r3);
        }, p(e4, r3) {
          e4[1] ? n4 && (n4.d(1), n4 = null) : n4 ? n4.p(e4, r3) : (n4 = mo(e4), n4.c(), n4.m(t4.parentNode, t4));
        }, d(e4) {
          n4 && n4.d(e4), e4 && main2.f(t4);
        }};
      }(e2);
      return {c() {
        t3 = main2.e("div"), i2 && i2.c(), main2.b(t3, "slot", "trigger"), main2.b(t3, "class", "svelte-1kbc1zi");
      }, m(e3, r3) {
        main2.c(e3, t3, r3), i2 && i2.m(t3, null), n3 = true;
      }, p(e3, t4) {
        o3 ? o3.p && 5 & t4[0] | 131072 & t4[1] && main2.K(o3, r2, e3, e3[48], t4, fo, po) : i2 && i2.p && 6 & t4[0] && i2.p(e3, t4);
      }, i(e3) {
        n3 || (main2.p(i2, e3), n3 = true);
      }, o(e3) {
        main2.v(i2, e3), n3 = false;
      }, d(e3) {
        e3 && main2.f(t3), i2 && i2.d(e3);
      }};
    }
    function yo(e2) {
      let t3, n3, r2 = e2[68][1] + "";
      return {c() {
        t3 = main2.e("span"), n3 = main2.t(r2), main2.b(t3, "class", "svelte-1kbc1zi");
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.d(t3, n3);
      }, p: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function bo(e2) {
      let t3, n3, r2, o3, d2, u2, h2, f2, m2;
      r2 = new Ur({props: {month: e2[6], year: e2[7], start: e2[3], end: e2[4], monthsOfYear: e2[5]}}), r2.$on("monthSelected", e2[41]), r2.$on("incrementMonth", e2[42]), r2.$on("incrementYear", e2[43]);
      let v2 = e2[17], x2 = [];
      for (let t4 = 0; t4 < v2.length; t4 += 1)
        x2[t4] = yo(ho(e2, v2, t4));
      return h2 = new Rr({props: {visibleMonth: e2[8], selected: e2[0], highlighted: e2[10], shouldShakeDate: e2[11], id: e2[14]}}), h2.$on("dateSelected", e2[44]), {c() {
        t3 = main2.e("div"), n3 = main2.e("div"), main2.q(r2.$$.fragment), o3 = main2.a(), d2 = main2.e("div");
        for (let e3 = 0; e3 < x2.length; e3 += 1)
          x2[e3].c();
        u2 = main2.a(), main2.q(h2.$$.fragment), main2.b(d2, "class", "legend svelte-1kbc1zi"), main2.b(n3, "class", f2 = "calendar " + e2[16]("bg-white") + " svelte-1kbc1zi"), main2.b(t3, "slot", "contents"), main2.b(t3, "class", "svelte-1kbc1zi");
      }, m(e3, s2) {
        main2.c(e3, t3, s2), main2.d(t3, n3), main2.r(r2, n3, null), main2.d(n3, o3), main2.d(n3, d2);
        for (let e4 = 0; e4 < x2.length; e4 += 1)
          x2[e4].m(d2, null);
        main2.d(n3, u2), main2.r(h2, n3, null), m2 = true;
      }, p(e3, t4) {
        const o4 = {};
        if (64 & t4[0] && (o4.month = e3[6]), 128 & t4[0] && (o4.year = e3[7]), 8 & t4[0] && (o4.start = e3[3]), 16 & t4[0] && (o4.end = e3[4]), 32 & t4[0] && (o4.monthsOfYear = e3[5]), r2.$set(o4), 131072 & t4[0]) {
          let n4;
          for (v2 = e3[17], n4 = 0; n4 < v2.length; n4 += 1) {
            const r3 = ho(e3, v2, n4);
            x2[n4] ? x2[n4].p(r3, t4) : (x2[n4] = yo(r3), x2[n4].c(), x2[n4].m(d2, null));
          }
          for (; n4 < x2.length; n4 += 1)
            x2[n4].d(1);
          x2.length = v2.length;
        }
        const s2 = {};
        256 & t4[0] && (s2.visibleMonth = e3[8]), 1 & t4[0] && (s2.selected = e3[0]), 1024 & t4[0] && (s2.highlighted = e3[10]), 2048 & t4[0] && (s2.shouldShakeDate = e3[11]), 16384 & t4[0] && (s2.id = e3[14]), h2.$set(s2), (!m2 || 65536 & t4[0] && f2 !== (f2 = "calendar " + e3[16]("bg-white") + " svelte-1kbc1zi")) && main2.b(n3, "class", f2);
      }, i(e3) {
        m2 || (main2.p(r2.$$.fragment, e3), main2.p(h2.$$.fragment, e3), m2 = true);
      }, o(e3) {
        main2.v(r2.$$.fragment, e3), main2.v(h2.$$.fragment, e3), m2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(r2), main2.y(x2, e3), main2.w(h2);
      }};
    }
    function wo(e2) {
      let t3;
      return {c() {
        t3 = main2.a();
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, p: main2.n, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function vo(e2) {
      let t3, n3, r2, o3, i2;
      function c2(t4) {
        e2[46](t4);
      }
      function d2(t4) {
        e2[47](t4);
      }
      let u2 = {trigger: e2[1], $$slots: {default: [wo], contents: [bo], trigger: [$o]}, $$scope: {ctx: e2}};
      return e2[12] !== void 0 && (u2.open = e2[12]), e2[13] !== void 0 && (u2.shrink = e2[13]), n3 = new ro({props: u2}), e2[45](n3), main2.m.push(() => main2.a4(n3, "open", c2)), main2.m.push(() => main2.a4(n3, "shrink", d2)), n3.$on("opened", e2[23]), n3.$on("closed", e2[22]), {c() {
        t3 = main2.e("div"), main2.q(n3.$$.fragment), main2.b(t3, "class", "datepicker svelte-1kbc1zi"), main2.b(t3, "style", e2[15]), main2.Y(t3, "open", e2[12]), main2.Y(t3, "closing", e2[13]);
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.r(n3, t3, null), i2 = true;
      }, p(e3, s2) {
        const a3 = {};
        2 & s2[0] && (a3.trigger = e3[1]), 85503 & s2[0] | 131072 & s2[1] && (a3.$$scope = {dirty: s2, ctx: e3}), !r2 && 4096 & s2[0] && (r2 = true, a3.open = e3[12], main2.a5(() => r2 = false)), !o3 && 8192 & s2[0] && (o3 = true, a3.shrink = e3[13], main2.a5(() => o3 = false)), n3.$set(a3), (!i2 || 32768 & s2[0]) && main2.b(t3, "style", e3[15]), 4096 & s2[0] && main2.Y(t3, "open", e3[12]), 8192 & s2[0] && main2.Y(t3, "closing", e3[13]);
      }, i(e3) {
        i2 || (main2.p(n3.$$.fragment, e3), i2 = true);
      }, o(e3) {
        main2.v(n3.$$.fragment, e3), i2 = false;
      }, d(r3) {
        r3 && main2.f(t3), e2[45](null), main2.w(n3);
      }};
    }
    function xo(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2, h2;
      main2.g(e2, he, (e3) => n3(16, h2 = e3));
      let {$$slots: f2 = {}, $$scope: p2} = t3;
      const m2 = main2.L(), $2 = new Date(), y2 = 31536e6;
      let b2, {format: w2 = "#{m}/#{d}/#{Y}"} = t3, {start: v2 = new Date(Date.now() - y2)} = t3, {end: x2 = new Date(Date.now() + y2)} = t3, {selected: k2 = $2} = t3, {dateChosen: M2 = false} = t3, {trigger: _2 = null} = t3, {selectableCallback: O2 = null} = t3, {weekStart: T2 = 0} = t3, {daysOfWeek: j2 = [["Sunday", "Sun"], ["Monday", "Mon"], ["Tuesday", "Tue"], ["Wednesday", "Wed"], ["Thursday", "Thu"], ["Friday", "Fri"], ["Saturday", "Sat"]]} = t3, {monthsOfYear: L2 = [["January", "Jan"], ["February", "Feb"], ["March", "Mar"], ["April", "Apr"], ["May", "May"], ["June", "Jun"], ["July", "Jul"], ["August", "Aug"], ["September", "Sep"], ["October", "Oct"], ["November", "Nov"], ["December", "Dec"]]} = t3;
      k2 = k2.getTime() < v2.getTime() || k2.getTime() > x2.getTime() ? v2 : k2;
      let {style: P2 = ""} = t3, {buttonBackgroundColor: B2 = "#fff"} = t3, {buttonBorderColor: A2 = "#eee"} = t3, {buttonTextColor: I2 = "#333"} = t3, {highlightColor: N2 = "#f7901e"} = t3, {dayBackgroundColor: E2 = "none"} = t3, {dayTextColor: z2 = "#4a4a4a"} = t3, {dayHighlightedBackgroundColor: W2 = "#efefef"} = t3, {dayHighlightedTextColor: F2 = "#4a4a4a"} = t3;
      co({daysOfWeek: j2, monthsOfYear: L2});
      let Y2, R2 = T2 === 0 ? j2 : (() => {
        let e3 = j2.slice();
        return e3.push(e3.shift()), e3;
      })(), H2 = $2, J2 = false, q2 = $2.getMonth(), V2 = $2.getFullYear(), K2 = false, U2 = false;
      $2.setHours(0, 0, 0, 0);
      let Z2 = 0, {formattedSelected: G2} = t3;
      function X2(e3) {
        n3(6, q2 = e3), n3(10, H2 = new Date(V2, q2, 1));
      }
      function ee2(e3, t4 = 1) {
        if (e3 === 1 && !a3)
          return;
        if (e3 === -1 && !c2)
          return;
        let r3 = new Date(V2, q2, 1);
        r3.setMonth(r3.getMonth() + e3), n3(6, q2 = r3.getMonth()), n3(7, V2 = r3.getFullYear()), n3(10, H2 = new Date(V2, q2, t4));
      }
      function te2(e3, t4 = 1) {
        let r3 = new Date(V2 + e3, q2, t4);
        e3 !== 1 || u2 || (r3 = new Date()), e3 !== -1 || g2 || (r3 = new Date(2019, 1, 18)), n3(6, q2 = r3.getMonth()), n3(7, V2 = r3.getFullYear()), n3(10, H2 = new Date(V2, q2, t4));
      }
      main2.a2(() => {
        n3(6, q2 = k2.getMonth()), n3(7, V2 = k2.getFullYear());
      });
      const ne2 = (e3, t4, n4) => {
        let o4 = r2.find((t5) => t5.month === e3 && t5.year === n4);
        if (!o4)
          return null;
        for (let r3 = 0; r3 < o4.weeks.length; ++r3)
          for (let s3 = 0; s3 < o4.weeks[r3].days.length; ++s3) {
            let i3 = o4.weeks[r3].days[s3];
            if (i3.month === e3 && i3.day === t4 && i3.year === n4)
              return i3;
          }
        return null;
      };
      function re2(e3) {
        let t4 = new Date(H2);
        t4.setDate(H2.getDate() + e3);
        let r3 = ne2(t4.getMonth(), t4.getDate(), t4.getFullYear());
        r3 && r3.isInRange && (n3(10, H2 = t4), e3 > 0 && H2 > i2 && ee2(1, H2.getDate()), e3 < 0 && H2 < l2 && ee2(-1, H2.getDate()));
      }
      function oe2(e3) {
        !function(e4) {
          _2 && n3(1, _2.innerHTML = e4, _2);
        }(e3);
      }
      function se2(e3) {
        return function(e4) {
          const t5 = ne2(e4.getMonth(), e4.getDate(), e4.getFullYear());
          return t5 && t5.selectable;
        }(e3) ? (ae2(), n3(0, k2 = e3), n3(24, M2 = true), oe2(G2), m2("dateSelected", {date: e3})) : (t4 = e3, clearTimeout(Y2), n3(11, J2 = t4), void (Y2 = setTimeout(() => {
          n3(11, J2 = false);
        }, 700)));
        var t4;
      }
      function ie(e3) {
        if (go.indexOf(e3.keyCode) !== -1)
          switch (e3.preventDefault(), e3.keyCode) {
            case uo.left:
              re2(-1);
              break;
            case uo.up:
              re2(-7);
              break;
            case uo.right:
              re2(1);
              break;
            case uo.down:
              re2(7);
              break;
            case uo.pgup:
              ee2(-1);
              break;
            case uo.pgdown:
              ee2(1);
              break;
            case uo.escape:
              ae2();
              break;
            case uo.enter:
              se2(H2);
          }
      }
      function le() {
        document.removeEventListener("keydown", ie), m2("close");
      }
      function ae2() {
        b2.close(), le();
      }
      return e2.$$set = (e3) => {
        "format" in e3 && n3(25, w2 = e3.format), "start" in e3 && n3(3, v2 = e3.start), "end" in e3 && n3(4, x2 = e3.end), "selected" in e3 && n3(0, k2 = e3.selected), "dateChosen" in e3 && n3(24, M2 = e3.dateChosen), "trigger" in e3 && n3(1, _2 = e3.trigger), "selectableCallback" in e3 && n3(26, O2 = e3.selectableCallback), "weekStart" in e3 && n3(27, T2 = e3.weekStart), "daysOfWeek" in e3 && n3(28, j2 = e3.daysOfWeek), "monthsOfYear" in e3 && n3(5, L2 = e3.monthsOfYear), "style" in e3 && n3(29, P2 = e3.style), "buttonBackgroundColor" in e3 && n3(30, B2 = e3.buttonBackgroundColor), "buttonBorderColor" in e3 && n3(31, A2 = e3.buttonBorderColor), "buttonTextColor" in e3 && n3(32, I2 = e3.buttonTextColor), "highlightColor" in e3 && n3(33, N2 = e3.highlightColor), "dayBackgroundColor" in e3 && n3(34, E2 = e3.dayBackgroundColor), "dayTextColor" in e3 && n3(35, z2 = e3.dayTextColor), "dayHighlightedBackgroundColor" in e3 && n3(36, W2 = e3.dayHighlightedBackgroundColor), "dayHighlightedTextColor" in e3 && n3(37, F2 = e3.dayHighlightedTextColor), "formattedSelected" in e3 && n3(2, G2 = e3.formattedSelected), "$$scope" in e3 && n3(48, p2 = e3.$$scope);
      }, e2.$$.update = () => {
        if (201326616 & e2.$$.dirty[0] && n3(39, r2 = In(v2, x2, O2, T2)), 192 & e2.$$.dirty[0] | 256 & e2.$$.dirty[1]) {
          n3(38, Z2 = 0);
          for (let e3 = 0; e3 < r2.length; e3 += 1)
            r2[e3].month === q2 && r2[e3].year === V2 && n3(38, Z2 = e3);
        }
        384 & e2.$$.dirty[1] && n3(8, o3 = r2[Z2]), 192 & e2.$$.dirty[0] && n3(14, s2 = V2 + q2 / 100), 256 & e2.$$.dirty[0] && (i2 = o3.weeks[o3.weeks.length - 1].days[6].date), 256 & e2.$$.dirty[0] && (l2 = o3.weeks[0].days[0].date), 384 & e2.$$.dirty[1] && (a3 = Z2 < r2.length - 1), 128 & e2.$$.dirty[1] && (c2 = Z2 > 0), 1610612736 & e2.$$.dirty[0] | 127 & e2.$$.dirty[1] && n3(15, d2 = `
    --button-background-color: ${B2};
    --button-border-color: ${A2};
    --button-text-color: ${I2};
    --highlight-color: ${N2};
    --day-background-color: ${E2};
    --day-text-color: ${z2};
    --day-highlighted-background-color: ${W2};
    --day-highlighted-text-color: ${F2};
    ${P2}
  `), 33554433 & e2.$$.dirty[0] && n3(2, G2 = ((e3, t4 = "#{m}/#{d}/#{Y}") => (lo.forEach((n4) => {
          t4.indexOf(`#{${n4.key}}`) != -1 && (t4 = oo(t4, n4.key, n4.method(e3)));
        }), ao.forEach((n4) => {
          t4.indexOf(`#{${n4.key}}`) != -1 && (t4 = oo(t4, n4.key, n4.method(e3)));
        }), t4))(k2, w2)), 192 & e2.$$.dirty[0] && (u2 = new Date(V2 + 1, q2, 1) <= new Date()), 192 & e2.$$.dirty[0] && (g2 = new Date(V2 - 1, q2 + 1, 18) >= new Date(2019, 1, 18));
      }, [k2, _2, G2, v2, x2, L2, q2, V2, o3, b2, H2, J2, K2, U2, s2, d2, h2, R2, X2, ee2, te2, se2, le, function() {
        n3(10, H2 = new Date(k2)), n3(6, q2 = k2.getMonth()), n3(7, V2 = k2.getFullYear()), document.addEventListener("keydown", ie), m2("open");
      }, M2, w2, O2, T2, j2, P2, B2, A2, I2, N2, E2, z2, W2, F2, Z2, r2, f2, (e3) => X2(e3.detail), (e3) => ee2(e3.detail), (e3) => te2(e3.detail), (e3) => se2(e3.detail), function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          b2 = e3, n3(9, b2);
        });
      }, function(e3) {
        K2 = e3, n3(12, K2);
      }, function(e3) {
        U2 = e3, n3(13, U2);
      }, p2];
    }
    class ko extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, xo, vo, main2.s, {format: 25, start: 3, end: 4, selected: 0, dateChosen: 24, trigger: 1, selectableCallback: 26, weekStart: 27, daysOfWeek: 28, monthsOfYear: 5, style: 29, buttonBackgroundColor: 30, buttonBorderColor: 31, buttonTextColor: 32, highlightColor: 33, dayBackgroundColor: 34, dayTextColor: 35, dayHighlightedBackgroundColor: 36, dayHighlightedTextColor: 37, formattedSelected: 2}, [-1, -1, -1]);
      }
    }
    var Mo = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "arrow-right", r2 = [], o3 = "f061", s2 = "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z";
      t3.definition = {prefix: "fas", iconName: n3, icon: [448, 512, r2, o3, s2]}, t3.faArrowRight = t3.definition, t3.prefix = "fas", t3.iconName = n3, t3.width = 448, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    var _o = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "arrow-left", r2 = [], o3 = "f060", s2 = "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z";
      t3.definition = {prefix: "fas", iconName: n3, icon: [448, 512, r2, o3, s2]}, t3.faArrowLeft = t3.definition, t3.prefix = "fas", t3.iconName = n3, t3.width = 448, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    function Co(e2) {
      let t3, n3;
      return t3 = new pt({props: {icon: _o.faArrowLeft}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p: main2.n, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function So(e2) {
      let t3, n3;
      return t3 = new pt({props: {icon: Mo.faArrowRight}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p: main2.n, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Oo(e2) {
      let t3;
      return {c() {
        t3 = main2.e("br");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Do(e2) {
      let t3, n3;
      return t3 = new pt({props: {icon: _o.faArrowLeft}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p: main2.n, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function To(e2) {
      let t3, n3, r2;
      function o3(t4) {
        e2[15](t4);
      }
      let s2 = {selected: Pn(e2[3]), format: "#{Y}-#{m}-#{d}", start: new Date(2019, 0, 18), end: new Date(), buttonTextColor: e2[8] ? "#ddd" : "black", dayTextColor: e2[8] ? "#ddd" : "white", buttonBorderColor: e2[8] ? "rgb(55, 65, 81)" : "rgb(243, 244, 246)", buttonBackgroundColor: e2[8] ? "rgb(31, 41, 55)" : "white", dayBackgroundColor: e2[8] ? "rgb(31, 41, 55)" : "white", daysOfWeek: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map(Po), monthsOfYear: [...Array(12).keys()].map(Bo)};
      return e2[3] !== void 0 && (s2.formattedSelected = e2[3]), t3 = new ko({props: s2}), main2.m.push(() => main2.a4(t3, "formattedSelected", o3)), t3.$on("dateSelected", e2[16]), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, n4) {
        main2.r(t3, e3, n4), r2 = true;
      }, p(e3, r3) {
        const o4 = {};
        8 & r3 && (o4.selected = Pn(e3[3])), 256 & r3 && (o4.buttonTextColor = e3[8] ? "#ddd" : "black"), 256 & r3 && (o4.dayTextColor = e3[8] ? "#ddd" : "white"), 256 & r3 && (o4.buttonBorderColor = e3[8] ? "rgb(55, 65, 81)" : "rgb(243, 244, 246)"), 256 & r3 && (o4.buttonBackgroundColor = e3[8] ? "rgb(31, 41, 55)" : "white"), 256 & r3 && (o4.dayBackgroundColor = e3[8] ? "rgb(31, 41, 55)" : "white"), !n3 && 8 & r3 && (n3 = true, o4.formattedSelected = e3[3], main2.a5(() => n3 = false)), t3.$set(o4);
      }, i(e3) {
        r2 || (main2.p(t3.$$.fragment, e3), r2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), r2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function jo(e2) {
      let t3, n3;
      return t3 = new pt({props: {icon: Mo.faArrowRight}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p: main2.n, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Lo(e2) {
      let t3, n3, r2, u2, h2, v2, x2, k2, M2, _2, C2, S2, D2, T2, L2, B2, A2, I2, N2, E2, z2, W2 = e2[8];
      t3 = new it({props: {id: "BackPageButton", onClick: e2[12], $$slots: {default: [Co]}, $$scope: {ctx: e2}}}), S2 = new it({props: {id: "NextPageButton", onClick: e2[11], $$slots: {default: [So]}, $$scope: {ctx: e2}}});
      let F2 = e2[1] && Oo();
      L2 = new it({props: {id: "toYesterdayButton", onClick: e2[9], $$slots: {default: [Do]}, $$scope: {ctx: e2}}});
      let R2 = To(e2);
      return I2 = new it({props: {id: "toTomorrowButton", onClick: e2[10], $$slots: {default: [jo]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment), n3 = main2.a(), r2 = main2.e("span"), u2 = main2.e("input"), v2 = main2.a(), x2 = main2.e("span"), k2 = main2.t("/ "), M2 = main2.t(e2[0]), C2 = main2.a(), main2.q(S2.$$.fragment), D2 = main2.a(), F2 && F2.c(), T2 = main2.a(), main2.q(L2.$$.fragment), B2 = main2.a(), R2.c(), A2 = main2.a(), main2.q(I2.$$.fragment), main2.b(u2, "id", "NowPageInput"), main2.b(u2, "type", "number"), main2.b(u2, "class", h2 = "w-9 " + e2[6]("bg-white")), main2.b(u2, "min", "1"), main2.b(u2, "max", e2[0]), main2.Y(u2, "bg-red-300", !e2[8] && e2[0] <= e2[2]), main2.Y(u2, "bg-red-500", e2[8] && e2[0] <= e2[2]), main2.b(r2, "id", "NowPageSpan"), main2.b(r2, "class", _2 = e2[6]("bg-white") + " " + e2[7] + "\r\n    border-2 rounded w-24 p-0.5 pl-2 pr-2"), main2.Y(r2, "bg-red-300", !e2[8] && e2[0] <= e2[2]), main2.Y(r2, "bg-red-500", e2[8] && e2[0] <= e2[2]), main2.Y(r2, "border-red-700", e2[0] <= e2[2]);
      }, m(o3, s2) {
        main2.r(t3, o3, s2), main2.c(o3, n3, s2), main2.c(o3, r2, s2), main2.d(r2, u2), main2.N(u2, e2[2]), main2.d(r2, v2), main2.d(r2, x2), main2.d(x2, k2), main2.d(x2, M2), main2.c(o3, C2, s2), main2.r(S2, o3, s2), main2.c(o3, D2, s2), F2 && F2.m(o3, s2), main2.c(o3, T2, s2), main2.r(L2, o3, s2), main2.c(o3, B2, s2), R2.m(o3, s2), main2.c(o3, A2, s2), main2.r(I2, o3, s2), N2 = true, E2 || (z2 = main2.A(u2, "input", e2[14]), E2 = true);
      }, p(e3, [n4]) {
        const s2 = {};
        524288 & n4 && (s2.$$scope = {dirty: n4, ctx: e3}), t3.$set(s2), (!N2 || 64 & n4 && h2 !== (h2 = "w-9 " + e3[6]("bg-white"))) && main2.b(u2, "class", h2), (!N2 || 1 & n4) && main2.b(u2, "max", e3[0]), 4 & n4 && main2.a6(u2.value) !== e3[2] && main2.N(u2, e3[2]), 325 & n4 && main2.Y(u2, "bg-red-300", !e3[8] && e3[0] <= e3[2]), 325 & n4 && main2.Y(u2, "bg-red-500", e3[8] && e3[0] <= e3[2]), (!N2 || 1 & n4) && main2.o(M2, e3[0]), (!N2 || 192 & n4 && _2 !== (_2 = e3[6]("bg-white") + " " + e3[7] + "\r\n    border-2 rounded w-24 p-0.5 pl-2 pr-2")) && main2.b(r2, "class", _2), 453 & n4 && main2.Y(r2, "bg-red-300", !e3[8] && e3[0] <= e3[2]), 453 & n4 && main2.Y(r2, "bg-red-500", e3[8] && e3[0] <= e3[2]), 197 & n4 && main2.Y(r2, "border-red-700", e3[0] <= e3[2]);
        const i2 = {};
        524288 & n4 && (i2.$$scope = {dirty: n4, ctx: e3}), S2.$set(i2), e3[1] ? F2 || (F2 = Oo(), F2.c(), F2.m(T2.parentNode, T2)) : F2 && (F2.d(1), F2 = null);
        const a3 = {};
        524288 & n4 && (a3.$$scope = {dirty: n4, ctx: e3}), L2.$set(a3), 256 & n4 && main2.s(W2, W2 = e3[8]) ? (main2.D(), main2.v(R2, 1, 1, main2.n), main2.x(), R2 = To(e3), R2.c(), main2.p(R2), R2.m(A2.parentNode, A2)) : R2.p(e3, n4);
        const c2 = {};
        524288 & n4 && (c2.$$scope = {dirty: n4, ctx: e3}), I2.$set(c2);
      }, i(e3) {
        N2 || (main2.p(t3.$$.fragment, e3), main2.p(S2.$$.fragment, e3), main2.p(L2.$$.fragment, e3), main2.p(R2), main2.p(I2.$$.fragment, e3), N2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(S2.$$.fragment, e3), main2.v(L2.$$.fragment, e3), main2.v(R2), main2.v(I2.$$.fragment, e3), N2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n3), e3 && main2.f(r2), e3 && main2.f(C2), main2.w(S2, e3), e3 && main2.f(D2), F2 && F2.d(e3), e3 && main2.f(T2), main2.w(L2, e3), e3 && main2.f(B2), R2.d(e3), e3 && main2.f(A2), main2.w(I2, e3), E2 = false, z2();
      }};
    }
    const Po = (e2) => [e2 + "\uC694\uC77C", e2];
    const Bo = (e2) => [`${e2 + 1}\uC6D4`, `${e2 + 1}\uC6D4`];
    function Ao(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2;
      main2.g(e2, je, (e3) => n3(18, o3 = e3)), main2.g(e2, Ie, (e3) => n3(2, s2 = e3)), main2.g(e2, jn, (e3) => n3(3, i2 = e3)), main2.g(e2, main2.U, (e3) => n3(4, l2 = e3)), main2.g(e2, main2.V, (e3) => n3(5, a3 = e3)), main2.g(e2, he, (e3) => n3(6, c2 = e3)), main2.g(e2, fe, (e3) => n3(7, d2 = e3)), main2.g(e2, ge, (e3) => n3(8, u2 = e3));
      let g2, {maxPage: h2} = t3, {parent_width: f2} = t3;
      main2.V.subscribe((e3) => {
        const t4 = parseInt(e3.nowPage);
        if (s2 != t4 && main2.W(Ie, s2 = e3.nowPage ? t4 : 1, s2), e3.dateString == "NaN-Na-Na" || i2 == "NaN-Na-Na")
          return main2.W(jn, i2 = g2, i2), l2("./", Object.assign(Object.assign({}, a3), {dateString: g2})), null;
        i2 != e3.dateString && (main2.W(jn, i2 = e3.dateString || Tn, i2), g2 = i2);
      });
      return e2.$$set = (e3) => {
        "maxPage" in e3 && n3(0, h2 = e3.maxPage), "parent_width" in e3 && n3(13, f2 = e3.parent_width);
      }, e2.$$.update = () => {
        8192 & e2.$$.dirty && n3(1, r2 = f2 < 400);
      }, [h2, r2, s2, i2, l2, a3, c2, d2, u2, function() {
        if (o3)
          return s2 < h2 && main2.W(Ie, s2 += 1, s2), null;
        const [e3, t4, n4] = i2.split("-").map((e4) => parseInt(e4)), r3 = new Date(e3, t4 - 1, n4 - 1);
        main2.W(jn, i2 = Ln(r3), i2), main2.W(Ie, s2 = 1, s2), l2("./", Object.assign(Object.assign({}, a3), {nowPage: s2, dateString: i2}));
      }, function() {
        if (o3)
          return s2 > 1 && main2.W(Ie, s2 -= 1, s2), null;
        const [e3, t4, n4] = i2.split("-").map((e4) => parseInt(e4)), r3 = new Date(e3, t4 - 1, n4 + 1);
        main2.W(jn, i2 = Ln(r3), i2), main2.W(Ie, s2 = 1, s2), l2("./", Object.assign(Object.assign({}, a3), {nowPage: s2, dateString: i2}));
      }, function() {
        s2 < h2 ? (main2.W(Ie, s2 += 1, s2), l2("./", Object.assign(Object.assign({}, a3), {nowPage: s2}))) : alert("\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 > 1 ? (main2.W(Ie, s2 -= 1, s2), l2("./", Object.assign(Object.assign({}, a3), {nowPage: s2}))) : alert("\uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, f2, function() {
        s2 = main2.a6(this.value), Ie.set(s2);
      }, function(e3) {
        i2 = e3, jn.set(i2);
      }, (e3) => {
        main2.W(Ie, s2 = 1, s2), l2("./", {...a3, nowPage: s2, dateString: i2});
      }];
    }
    class Io extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ao, Lo, main2.s, {maxPage: 0, parent_width: 13});
      }
    }
    function No(e2) {
      let t3, n3, r2, o3, u2, g2, h2, f2, p2;
      return {c() {
        t3 = main2.e("span"), n3 = main2.t(e2[0]), r2 = main2.t("\uAC74"), u2 = main2.a(), g2 = main2.e("input"), main2.b(t3, "id", "MailCounter"), main2.b(t3, "class", o3 = "m-1 rounded p-1\r\n" + e2[4]("bg-red-100")), main2.b(g2, "id", "SearchInput"), main2.b(g2, "class", h2 = "w-28 p-0.5 rounded border-2\r\n" + e2[5] + " " + e2[4]("bg-white")), main2.b(g2, "type", "text"), main2.b(g2, "placeholder", "\uAC80\uC0C9\uC5B4 \uC785\uB825");
      }, m(o4, s2) {
        main2.c(o4, t3, s2), main2.d(t3, n3), main2.d(t3, r2), main2.c(o4, u2, s2), main2.c(o4, g2, s2), main2.N(g2, e2[1]), f2 || (p2 = [main2.A(g2, "keydown", e2[8]), main2.A(g2, "input", e2[9])], f2 = true);
      }, p(e3, [r3]) {
        1 & r3 && main2.o(n3, e3[0]), 16 & r3 && o3 !== (o3 = "m-1 rounded p-1\r\n" + e3[4]("bg-red-100")) && main2.b(t3, "class", o3), 48 & r3 && h2 !== (h2 = "w-28 p-0.5 rounded border-2\r\n" + e3[5] + " " + e3[4]("bg-white")) && main2.b(g2, "class", h2), 2 & r3 && g2.value !== e3[1] && main2.N(g2, e3[1]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(u2), e3 && main2.f(g2), f2 = false, main2.B(p2);
      }};
    }
    function Eo(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2;
      main2.g(e2, Or, (e3) => n3(10, o3 = e3)), main2.g(e2, Ie, (e3) => n3(11, s2 = e3)), main2.g(e2, Ne, (e3) => n3(12, i2 = e3)), main2.g(e2, main2.U, (e3) => n3(6, l2 = e3)), main2.g(e2, main2.V, (e3) => n3(7, a3 = e3)), main2.g(e2, he, (e3) => n3(4, c2 = e3)), main2.g(e2, fe, (e3) => n3(5, d2 = e3));
      let {search_length: u2} = t3;
      main2.V.subscribe((e3) => {
        o3 != e3.search && main2.W(Or, o3 = e3.search || "", o3);
      });
      let g2, h2 = o3;
      return e2.$$set = (e3) => {
        "search_length" in e3 && n3(0, u2 = e3.search_length);
      }, e2.$$.update = () => {
        194 & e2.$$.dirty && n3(3, r2 = () => {
          main2.W(Ie, s2 = 1, s2), main2.W(Or, o3 = h2, o3), main2.W(Ne, i2 = true, i2), l2("./", Object.assign(Object.assign({}, a3), {showList: true, search: h2}));
        });
      }, [u2, h2, g2, r2, c2, d2, l2, a3, (e3) => {
        if (clearTimeout(g2), e3.key == "Enter")
          return r2();
        n3(2, g2 = setTimeout(r2, 500));
      }, function() {
        h2 = this.value, n3(1, h2);
      }];
    }
    class zo extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Eo, No, main2.s, {search_length: 0});
      }
    }
    function Wo(e2) {
      let t3, n3;
      return t3 = new Ot({props: {tag: e2[1].get(e2[0]), canDelete: true, onRemove: e2[2], size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, [n4]) {
        const r2 = {};
        3 & n4 && (r2.tag = e3[1].get(e3[0])), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Fo(e2, t3, n3) {
      let r2, o3, s2, i2, l2;
      main2.g(e2, je, (e3) => n3(0, r2 = e3)), main2.g(e2, Ie, (e3) => n3(3, o3 = e3)), main2.g(e2, main2.U, (e3) => n3(4, s2 = e3)), main2.g(e2, main2.V, (e3) => n3(5, i2 = e3)), main2.g(e2, _e, (e3) => n3(1, l2 = e3));
      return [r2, l2, () => {
        main2.W(je, r2 = null, r2), main2.W(Ie, o3 = 1, o3), s2("./", Object.assign(Object.assign({}, i2), {tag: ""}));
      }];
    }
    class Yo extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Fo, Wo, main2.s, {});
      }
    }
    var Ro = mt(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n3 = "sync", r2 = [], o3 = "f021", s2 = "M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z";
      t3.definition = {prefix: "fas", iconName: n3, icon: [512, 512, r2, o3, s2]}, t3.faSync = t3.definition, t3.prefix = "fas", t3.iconName = n3, t3.width = 512, t3.height = 512, t3.ligatures = r2, t3.unicode = o3, t3.svgPathData = s2;
    });
    function Ho(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uBD88\uB7EC\uC624\uAE30");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Jo(e2) {
      let t3, n3, r2, o3, u2, h2, f2, m2, v2, x2, M2, _2, C2, S2, O2, D2, T2, L2, B2, A2, I2, N2, E2, z2, W2;
      return o3 = new pt({props: {icon: Ro.faSync}}), I2 = new it({props: {onClick: e2[2], strong: true, $$slots: {default: [Ho]}, $$scope: {ctx: e2}}}), {c() {
        t3 = main2.e("div"), n3 = main2.e("h3"), r2 = main2.t("\uCD5C\uC2E0 Private Mail\uC744 \uBD88\uB7EC\uC635\uB2C8\uB2E4."), main2.q(o3.$$.fragment), u2 = main2.a(), h2 = main2.e("p"), h2.textContent = "Private Mail \uC571 id\uC640 \uBCF4\uC548 \uD1A0\uD070\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.", f2 = main2.a(), m2 = main2.e("p"), m2.textContent = "\uAC12\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.", v2 = main2.a(), x2 = main2.e("p"), x2.textContent = "\uD578\uB4DC\uD3F0 \uC571\uC5D0\uC11C \uC774\uC5B4\uBC1B\uC73C\uBA74 \uD1A0\uD070\uC774 \uCD08\uAE30\uD654\uB429\uB2C8\uB2E4.", M2 = main2.a(), _2 = main2.e("p"), _2.textContent = "\uCD08\uAE30\uD654\uB41C \uACBD\uC6B0 \uB2E4\uC2DC \uD1A0\uD070\uC744 \uBC1B\uC544\uC8FC\uC138\uC694.", C2 = main2.a(), S2 = main2.e("div"), O2 = main2.e("input"), T2 = main2.a(), L2 = main2.e("input"), A2 = main2.a(), main2.q(I2.$$.fragment), main2.b(n3, "class", "m-3 svelte-lnm8tm"), main2.b(h2, "class", "svelte-lnm8tm"), main2.b(m2, "class", "text-sm svelte-lnm8tm"), main2.b(x2, "class", "text-sm svelte-lnm8tm"), main2.b(_2, "class", "text-sm svelte-lnm8tm"), main2.b(O2, "class", D2 = "w-32 rounded m-1 p-1 " + (e2[3] ? "bg-gray-900" : "text-white") + " svelte-lnm8tm"), main2.b(O2, "placeholder", "User Id"), main2.b(L2, "class", B2 = "w-64 rounded m-1 p-1 " + (e2[3] ? "bg-gray-900" : "text-white") + " svelte-lnm8tm"), main2.b(L2, "placeholder", "Access Token"), main2.b(S2, "class", "flex justify-center mt-4"), main2.b(t3, "class", N2 = e2[3] ? "text-gray-300" : "text-black");
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.d(t3, n3), main2.d(n3, r2), main2.r(o3, n3, null), main2.d(t3, u2), main2.d(t3, h2), main2.d(t3, f2), main2.d(t3, m2), main2.d(t3, v2), main2.d(t3, x2), main2.d(t3, M2), main2.d(t3, _2), main2.d(t3, C2), main2.d(t3, S2), main2.d(S2, O2), main2.N(O2, e2[0]), main2.d(S2, T2), main2.d(S2, L2), main2.N(L2, e2[1]), main2.d(S2, A2), main2.r(I2, S2, null), E2 = true, z2 || (W2 = [main2.A(O2, "input", e2[4]), main2.A(L2, "input", e2[5])], z2 = true);
      }, p(e3, [n4]) {
        (!E2 || 8 & n4 && D2 !== (D2 = "w-32 rounded m-1 p-1 " + (e3[3] ? "bg-gray-900" : "text-white") + " svelte-lnm8tm")) && main2.b(O2, "class", D2), 1 & n4 && O2.value !== e3[0] && main2.N(O2, e3[0]), (!E2 || 8 & n4 && B2 !== (B2 = "w-64 rounded m-1 p-1 " + (e3[3] ? "bg-gray-900" : "text-white") + " svelte-lnm8tm")) && main2.b(L2, "class", B2), 2 & n4 && L2.value !== e3[1] && main2.N(L2, e3[1]);
        const r3 = {};
        4 & n4 && (r3.onClick = e3[2]), 128 & n4 && (r3.$$scope = {dirty: n4, ctx: e3}), I2.$set(r3), (!E2 || 8 & n4 && N2 !== (N2 = e3[3] ? "text-gray-300" : "text-black")) && main2.b(t3, "class", N2);
      }, i(e3) {
        E2 || (main2.p(o3.$$.fragment, e3), main2.p(I2.$$.fragment, e3), E2 = true);
      }, o(e3) {
        main2.v(o3.$$.fragment, e3), main2.v(I2.$$.fragment, e3), E2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(o3), main2.w(I2), z2 = false, main2.B(W2);
      }};
    }
    function qo(e2, t3, n3) {
      let r2, o3;
      main2.g(e2, ge, (e3) => n3(3, o3 = e3));
      var s2 = this && this.__awaiter || function(e3, t4, n4, r3) {
        return new (n4 || (n4 = Promise))(function(o4, s3) {
          function i3(e4) {
            try {
              a3(r3.next(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function l3(e4) {
            try {
              a3(r3.throw(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function a3(e4) {
            var t5;
            e4.done ? o4(e4.value) : (t5 = e4.value, t5 instanceof n4 ? t5 : new n4(function(e5) {
              e5(t5);
            })).then(i3, l3);
          }
          a3((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      let i2 = localStorage.getItem("pm-user-id"), l2 = localStorage.getItem("pm-access-token");
      return e2.$$.update = () => {
        3 & e2.$$.dirty && n3(2, r2 = () => s2(void 0, void 0, void 0, function* () {
          localStorage.setItem("pm-user-id", i2), localStorage.setItem("pm-access-token", l2), console.log(i2, l2), yield Qe.load_pm(l2);
        }));
      }, [i2, l2, r2, o3, function() {
        i2 = this.value, n3(0, i2);
      }, function() {
        l2 = this.value, n3(1, l2);
      }];
    }
    class Vo extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, qo, Jo, main2.s, {});
      }
    }
    function Ko(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[21] = t3[n3], r2;
    }
    function Uo(e2) {
      let t3, n3, r2, o3, h2, v2, x2, M2, _2, C2, S2, O2, D2, T2, L2, P2, A2, I2, N2 = e2[0].subject + "", E2 = (e2[0].preview || "...") + "";
      t3 = new Gt({props: {member: e2[0].member}}), r2 = new Et({props: {pm_id: e2[0].id, float: "left mt-0.5"}}), v2 = new Ft({props: {pm: e2[0]}}), M2 = new jt({props: {time: e2[0].time}});
      let z2 = e2[9] && Zo(), W2 = e2[4](e2[0]), F2 = [];
      for (let t4 = 0; t4 < W2.length; t4 += 1)
        F2[t4] = Go(Ko(e2, W2, t4));
      const R2 = (e3) => main2.v(F2[e3], 1, 1, () => {
        F2[e3] = null;
      });
      return {c() {
        main2.q(t3.$$.fragment), n3 = main2.a(), main2.q(r2.$$.fragment), o3 = main2.a(), h2 = main2.e("p"), main2.q(v2.$$.fragment), x2 = main2.a(), main2.q(M2.$$.fragment), _2 = main2.a(), z2 && z2.c(), C2 = main2.a();
        for (let e3 = 0; e3 < F2.length; e3 += 1)
          F2[e3].c();
        S2 = main2.a(), O2 = main2.t(N2), D2 = main2.a(), T2 = main2.e("p"), L2 = main2.t(E2), main2.b(h2, "class", "truncate"), main2.b(T2, "class", "ml-1 mt-1 text-sm truncate");
      }, m(s2, i2) {
        main2.r(t3, s2, i2), main2.c(s2, n3, i2), main2.r(r2, s2, i2), main2.c(s2, o3, i2), main2.c(s2, h2, i2), main2.r(v2, h2, null), main2.d(h2, x2), main2.r(M2, h2, null), main2.d(h2, _2), z2 && z2.m(h2, null), main2.d(h2, C2);
        for (let e3 = 0; e3 < F2.length; e3 += 1)
          F2[e3].m(h2, null);
        main2.d(h2, S2), main2.d(h2, O2), main2.c(s2, D2, i2), main2.c(s2, T2, i2), main2.d(T2, L2), P2 = true, A2 || (I2 = [main2.A(h2, "click", function() {
          main2.H(e2[3]) && e2[3].apply(this, arguments);
        }), main2.A(T2, "click", function() {
          main2.H(e2[3]) && e2[3].apply(this, arguments);
        })], A2 = true);
      }, p(n4, o4) {
        e2 = n4;
        const s2 = {};
        1 & o4 && (s2.member = e2[0].member), t3.$set(s2);
        const i2 = {};
        1 & o4 && (i2.pm_id = e2[0].id), r2.$set(i2);
        const l2 = {};
        1 & o4 && (l2.pm = e2[0]), v2.$set(l2);
        const a3 = {};
        if (1 & o4 && (a3.time = e2[0].time), M2.$set(a3), e2[9] ? z2 || (z2 = Zo(), z2.c(), z2.m(h2, C2)) : z2 && (z2.d(1), z2 = null), 17 & o4) {
          let t4;
          for (W2 = e2[4](e2[0]), t4 = 0; t4 < W2.length; t4 += 1) {
            const n5 = Ko(e2, W2, t4);
            F2[t4] ? (F2[t4].p(n5, o4), main2.p(F2[t4], 1)) : (F2[t4] = Go(n5), F2[t4].c(), main2.p(F2[t4], 1), F2[t4].m(h2, S2));
          }
          for (main2.D(), t4 = W2.length; t4 < F2.length; t4 += 1)
            R2(t4);
          main2.x();
        }
        (!P2 || 1 & o4) && N2 !== (N2 = e2[0].subject + "") && main2.o(O2, N2), (!P2 || 1 & o4) && E2 !== (E2 = (e2[0].preview || "...") + "") && main2.o(L2, E2);
      }, i(e3) {
        if (!P2) {
          main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), main2.p(v2.$$.fragment, e3), main2.p(M2.$$.fragment, e3);
          for (let e4 = 0; e4 < W2.length; e4 += 1)
            main2.p(F2[e4]);
          P2 = true;
        }
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), main2.v(v2.$$.fragment, e3), main2.v(M2.$$.fragment, e3), F2 = F2.filter(Boolean);
        for (let e4 = 0; e4 < F2.length; e4 += 1)
          main2.v(F2[e4]);
        P2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n3), main2.w(r2, e3), e3 && main2.f(o3), e3 && main2.f(h2), main2.w(v2), main2.w(M2), z2 && z2.d(), main2.y(F2, e3), e3 && main2.f(D2), e3 && main2.f(T2), A2 = false, main2.B(I2);
      }};
    }
    function Zo(e2) {
      let t3;
      return {c() {
        t3 = main2.e("br");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Go(e2) {
      let t3, n3;
      return t3 = new Ot({props: {tag: e2[21]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        17 & n4 && (r2.tag = e3[21]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Qo(e2) {
      let t3, n3, r2, o3 = e2[0].member && Uo(e2);
      return {c() {
        t3 = main2.e("div"), o3 && o3.c();
      }, m(e3, n4) {
        main2.c(e3, t3, n4), o3 && o3.m(t3, null), r2 = true;
      }, p(e3, n4) {
        e3[0].member ? o3 ? (o3.p(e3, n4), 1 & n4 && main2.p(o3, 1)) : (o3 = Uo(e3), o3.c(), main2.p(o3, 1), o3.m(t3, null)) : o3 && (main2.D(), main2.v(o3, 1, 1, () => {
          o3 = null;
        }), main2.x());
      }, i(e3) {
        r2 || (main2.p(o3), n3 || main2.j(() => {
          n3 = main2.X(t3, a, {duration: 500}), n3.start();
        }), r2 = true);
      }, o(e3) {
        main2.v(o3), r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), o3 && o3.d();
      }};
    }
    function Xo(e2) {
      let t3, n3, r2 = e2[0], s2 = ts(e2);
      return {c() {
        s2.c(), t3 = main2.I();
      }, m(e3, r3) {
        s2.m(e3, r3), main2.c(e3, t3, r3), n3 = true;
      }, p(e3, n4) {
        1 & n4 && main2.s(r2, r2 = e3[0]) ? (main2.D(), main2.v(s2, 1, 1, main2.n), main2.x(), s2 = ts(e3), s2.c(), main2.p(s2), s2.m(t3.parentNode, t3)) : s2.p(e3, n4);
      }, i(e3) {
        n3 || (main2.p(s2), n3 = true);
      }, o(e3) {
        main2.v(s2), n3 = false;
      }, d(e3) {
        e3 && main2.f(t3), s2.d(e3);
      }};
    }
    function es(e2) {
      let t3, n3, r2, o3, l2, d2, u2, h2, f2 = e2[0].subject + "", m2 = " " + e2[0].preview;
      return t3 = new Ft({props: {pm: e2[0], size: ""}}), r2 = new jt({props: {time: e2[0].time, size: ""}}), {c() {
        main2.q(t3.$$.fragment), n3 = main2.a(), main2.q(r2.$$.fragment), o3 = main2.a(), l2 = main2.e("strong"), d2 = main2.t(f2), u2 = main2.t(m2);
      }, m(e3, s2) {
        main2.r(t3, e3, s2), main2.c(e3, n3, s2), main2.r(r2, e3, s2), main2.c(e3, o3, s2), main2.c(e3, l2, s2), main2.d(l2, d2), main2.c(e3, u2, s2), h2 = true;
      }, p(e3, n4) {
        const o4 = {};
        1 & n4 && (o4.pm = e3[0]), t3.$set(o4);
        const s2 = {};
        1 & n4 && (s2.time = e3[0].time), r2.$set(s2), (!h2 || 1 & n4) && f2 !== (f2 = e3[0].subject + "") && main2.o(d2, f2), (!h2 || 1 & n4) && m2 !== (m2 = " " + e3[0].preview) && main2.o(u2, m2);
      }, i(e3) {
        h2 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), h2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), h2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n3), main2.w(r2, e3), e3 && main2.f(o3), e3 && main2.f(l2), e3 && main2.f(u2);
      }};
    }
    function ts(e2) {
      let t3, n3, r2, o3, i2 = e2[0].member && es(e2);
      return {c() {
        t3 = main2.e("li"), i2 && i2.c(), main2.b(t3, "class", n3 = e2[8] + " border-b-2 rounded w-full text-gray-300 truncate "), main2.h(t3, "font-size", "10px"), main2.h(t3, "height", "20px");
      }, m(e3, n4) {
        main2.c(e3, t3, n4), i2 && i2.m(t3, null), o3 = true;
      }, p(e3, r3) {
        e3[0].member ? i2 ? (i2.p(e3, r3), 1 & r3 && main2.p(i2, 1)) : (i2 = es(e3), i2.c(), main2.p(i2, 1), i2.m(t3, null)) : i2 && (main2.D(), main2.v(i2, 1, 1, () => {
          i2 = null;
        }), main2.x()), (!o3 || 256 & r3 && n3 !== (n3 = e3[8] + " border-b-2 rounded w-full text-gray-300 truncate ")) && main2.b(t3, "class", n3);
      }, i(e3) {
        o3 || (main2.p(i2), r2 || main2.j(() => {
          r2 = main2.X(t3, a, {duration: 300}), r2.start();
        }), o3 = true);
      }, o(e3) {
        main2.v(i2), o3 = false;
      }, d(e3) {
        e3 && main2.f(t3), i2 && i2.d();
      }};
    }
    function ns(e2) {
      let t3, n3, r2, c2, y2, b2, w2, v2, x2 = e2[0].id, M2 = Qo(e2), _2 = e2[1] && Xo(e2);
      return {c() {
        t3 = main2.e("li"), M2.c(), c2 = main2.a(), _2 && _2.c(), y2 = main2.I(), main2.b(t3, "id", n3 = "MailItem-" + e2[2]), main2.h(t3, "height", e2[7] ? "62px" : "84px"), main2.b(t3, "class", r2 = "border-b-2 rounded p-1 w-full leading-relaxed " + e2[8]), main2.Y(t3, "hidden", e2[1]);
      }, m(n4, r3) {
        main2.c(n4, t3, r3), M2.m(t3, null), main2.c(n4, c2, r3), _2 && _2.m(n4, r3), main2.c(n4, y2, r3), b2 = true, w2 || (v2 = [main2.A(t3, "pointerdown", function() {
          main2.H(e2[5]) && e2[5].apply(this, arguments);
        }), main2.A(t3, "pointerup", function() {
          main2.H(e2[6]) && e2[6].apply(this, arguments);
        })], w2 = true);
      }, p(s2, [i2]) {
        e2 = s2, 1 & i2 && main2.s(x2, x2 = e2[0].id) ? (main2.D(), main2.v(M2, 1, 1, main2.n), main2.x(), M2 = Qo(e2), M2.c(), main2.p(M2), M2.m(t3, null)) : M2.p(e2, i2), (!b2 || 4 & i2 && n3 !== (n3 = "MailItem-" + e2[2])) && main2.b(t3, "id", n3), (!b2 || 128 & i2) && main2.h(t3, "height", e2[7] ? "62px" : "84px"), (!b2 || 256 & i2 && r2 !== (r2 = "border-b-2 rounded p-1 w-full leading-relaxed " + e2[8])) && main2.b(t3, "class", r2), 258 & i2 && main2.Y(t3, "hidden", e2[1]), e2[1] ? _2 ? (_2.p(e2, i2), 2 & i2 && main2.p(_2, 1)) : (_2 = Xo(e2), _2.c(), main2.p(_2, 1), _2.m(y2.parentNode, y2)) : _2 && (main2.D(), main2.v(_2, 1, 1, () => {
          _2 = null;
        }), main2.x());
      }, i(e3) {
        b2 || (main2.p(M2), main2.p(_2), b2 = true);
      }, o(e3) {
        main2.v(M2), main2.v(_2), b2 = false;
      }, d(e3) {
        e3 && main2.f(t3), M2.d(e3), e3 && main2.f(c2), _2 && _2.d(e3), e3 && main2.f(y2), w2 = false, main2.B(v2);
      }};
    }
    function rs(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2, h2, f2, p2, m2;
      main2.g(e2, Ae, (e3) => n3(11, l2 = e3)), main2.g(e2, Ne, (e3) => n3(12, a3 = e3)), main2.g(e2, main2.U, (e3) => n3(13, c2 = e3)), main2.g(e2, main2.V, (e3) => n3(14, d2 = e3)), main2.g(e2, Ce, (e3) => n3(15, u2 = e3)), main2.g(e2, _e, (e3) => n3(16, g2 = e3)), main2.g(e2, jn, (e3) => n3(17, h2 = e3)), main2.g(e2, ze, (e3) => n3(7, f2 = e3)), main2.g(e2, fe, (e3) => n3(8, p2 = e3)), main2.g(e2, We, (e3) => n3(9, m2 = e3));
      let {pm: $2} = t3, {hidden: y2} = t3, {index: b2} = t3;
      const w2 = Ln(new Date()), {open: v2} = main2.O("simple-modal"), x2 = () => {
        v2(Vo);
      };
      let k2;
      return e2.$$set = (e3) => {
        "pm" in e3 && n3(0, $2 = e3.pm), "hidden" in e3 && n3(1, y2 = e3.hidden), "index" in e3 && n3(2, b2 = e3.index);
      }, e2.$$.update = () => {
        30721 & e2.$$.dirty && n3(3, r2 = () => {
          console.log("i am here"), $2 && (main2.W(Ae, l2 = $2, l2), main2.W(Ne, a3 = false, a3), c2("./", Object.assign(Object.assign({}, d2), {showList: a3, now_pm: l2.id})));
        }), 98304 & e2.$$.dirty && n3(4, o3 = (e3) => u2.has(e3.id) ? Array.from(u2.get(e3.id)).map((e4) => g2.get(e4.value)) : []), 131073 & e2.$$.dirty && n3(5, s2 = () => {
          $2.member || h2 != w2 || n3(10, k2 = setTimeout(x2, 300));
        }), 132097 & e2.$$.dirty && n3(6, i2 = (e3) => {
          $2.member || h2 != w2 || clearTimeout(k2);
        });
      }, [$2, y2, b2, r2, o3, s2, i2, f2, p2, m2, k2, l2, a3, c2, d2, u2, g2, h2];
    }
    class os extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, rs, ns, main2.s, {pm: 0, hidden: 1, index: 2});
      }
    }
    function ss(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[5] = t3[n3], r2[7] = n3, r2;
    }
    function is(e2) {
      let t3, n3;
      return t3 = new os({props: {index: e2[7], pm: e2[5], hidden: e2[3] && (e2[1] || e2[4]) && e2[7] > 0}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        1 & n4 && (r2.pm = e3[5]), 26 & n4 && (r2.hidden = e3[3] && (e3[1] || e3[4]) && e3[7] > 0), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function ls(e2) {
      let t3, n3, r2, o3 = e2[0], i2 = [];
      for (let t4 = 0; t4 < o3.length; t4 += 1)
        i2[t4] = is(ss(e2, o3, t4));
      const c2 = (e3) => main2.v(i2[e3], 1, 1, () => {
        i2[e3] = null;
      });
      return {c() {
        t3 = main2.e("ul");
        for (let e3 = 0; e3 < i2.length; e3 += 1)
          i2[e3].c();
        main2.b(t3, "id", "MailItemList"), main2.h(t3, "max-width", "728px"), main2.b(t3, "class", n3 = e2[2]("bg-white") + " rounded shadow-xl m-1");
      }, m(e3, n4) {
        main2.c(e3, t3, n4);
        for (let e4 = 0; e4 < i2.length; e4 += 1)
          i2[e4].m(t3, null);
        r2 = true;
      }, p(e3, [s2]) {
        if (27 & s2) {
          let n4;
          for (o3 = e3[0], n4 = 0; n4 < o3.length; n4 += 1) {
            const r3 = ss(e3, o3, n4);
            i2[n4] ? (i2[n4].p(r3, s2), main2.p(i2[n4], 1)) : (i2[n4] = is(r3), i2[n4].c(), main2.p(i2[n4], 1), i2[n4].m(t3, null));
          }
          for (main2.D(), n4 = o3.length; n4 < i2.length; n4 += 1)
            c2(n4);
          main2.x();
        }
        (!r2 || 4 & s2 && n3 !== (n3 = e3[2]("bg-white") + " rounded shadow-xl m-1")) && main2.b(t3, "class", n3);
      }, i(e3) {
        if (!r2) {
          for (let e4 = 0; e4 < o3.length; e4 += 1)
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
    function as(e2, t3, n3) {
      let r2, o3, s2;
      main2.g(e2, he, (e3) => n3(2, r2 = e3)), main2.g(e2, We, (e3) => n3(3, o3 = e3)), main2.g(e2, Ee, (e3) => n3(4, s2 = e3));
      let {mail_list: i2} = t3, {isTyping: l2} = t3;
      return e2.$$set = (e3) => {
        "mail_list" in e3 && n3(0, i2 = e3.mail_list), "isTyping" in e3 && n3(1, l2 = e3.isTyping);
      }, [i2, l2, r2, o3, s2];
    }
    class cs extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, as, ls, main2.s, {mail_list: 0, isTyping: 1});
      }
    }
    function ds(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[19] = t3[n3], r2;
    }
    function us(e2) {
      let t3, n3;
      return {c() {
        t3 = main2.e("img"), main2.b(t3, "class", "ml-5 mt-2 w-10/12"), main2.b(t3, "alt", "no mail"), t3.src !== (n3 = "./img/izone-logo-card.png") && main2.b(t3, "src", "./img/izone-logo-card.png");
      }, m(e3, n4) {
        main2.c(e3, t3, n4);
      }, p: main2.n, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function gs(e2) {
      let t3, n3, r2, o3, h2, v2, x2, M2, _2, C2, S2, O2, D2, T2, L2, P2, A2, I2 = e2[0].subject + "", N2 = e2[0].preview + "";
      t3 = new Et({props: {pm_id: e2[0].id}}), r2 = new Gt({props: {member: e2[0].member}}), M2 = new Ft({props: {pm: e2[0]}}), C2 = new jt({props: {time: e2[0].time}});
      let E2 = e2[2](e2[0]), z2 = [];
      for (let t4 = 0; t4 < E2.length; t4 += 1)
        z2[t4] = hs(ds(e2, E2, t4));
      const W2 = (e3) => main2.v(z2[e3], 1, 1, () => {
        z2[e3] = null;
      });
      return {c() {
        main2.q(t3.$$.fragment), n3 = main2.a(), main2.q(r2.$$.fragment), o3 = main2.a(), h2 = main2.e("h4"), v2 = main2.t(I2), x2 = main2.a(), main2.q(M2.$$.fragment), _2 = main2.a(), main2.q(C2.$$.fragment), S2 = main2.a();
        for (let e3 = 0; e3 < z2.length; e3 += 1)
          z2[e3].c();
        O2 = main2.a(), D2 = main2.e("p"), T2 = main2.t(N2), main2.b(h2, "class", "text-lg"), main2.b(D2, "class", "text-sm");
      }, m(s2, i2) {
        main2.r(t3, s2, i2), main2.c(s2, n3, i2), main2.r(r2, s2, i2), main2.c(s2, o3, i2), main2.c(s2, h2, i2), main2.d(h2, v2), main2.c(s2, x2, i2), main2.r(M2, s2, i2), main2.c(s2, _2, i2), main2.r(C2, s2, i2), main2.c(s2, S2, i2);
        for (let e3 = 0; e3 < z2.length; e3 += 1)
          z2[e3].m(s2, i2);
        main2.c(s2, O2, i2), main2.c(s2, D2, i2), main2.d(D2, T2), L2 = true, P2 || (A2 = [main2.A(h2, "click", function() {
          main2.H(e2[3]) && e2[3].apply(this, arguments);
        }), main2.A(D2, "click", function() {
          main2.H(e2[3]) && e2[3].apply(this, arguments);
        })], P2 = true);
      }, p(n4, o4) {
        e2 = n4;
        const s2 = {};
        1 & o4 && (s2.pm_id = e2[0].id), t3.$set(s2);
        const i2 = {};
        1 & o4 && (i2.member = e2[0].member), r2.$set(i2), (!L2 || 1 & o4) && I2 !== (I2 = e2[0].subject + "") && main2.o(v2, I2);
        const l2 = {};
        1 & o4 && (l2.pm = e2[0]), M2.$set(l2);
        const a3 = {};
        if (1 & o4 && (a3.time = e2[0].time), C2.$set(a3), 5 & o4) {
          let t4;
          for (E2 = e2[2](e2[0]), t4 = 0; t4 < E2.length; t4 += 1) {
            const n5 = ds(e2, E2, t4);
            z2[t4] ? (z2[t4].p(n5, o4), main2.p(z2[t4], 1)) : (z2[t4] = hs(n5), z2[t4].c(), main2.p(z2[t4], 1), z2[t4].m(O2.parentNode, O2));
          }
          for (main2.D(), t4 = E2.length; t4 < z2.length; t4 += 1)
            W2(t4);
          main2.x();
        }
        (!L2 || 1 & o4) && N2 !== (N2 = e2[0].preview + "") && main2.o(T2, N2);
      }, i(e3) {
        if (!L2) {
          main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), main2.p(M2.$$.fragment, e3), main2.p(C2.$$.fragment, e3);
          for (let e4 = 0; e4 < E2.length; e4 += 1)
            main2.p(z2[e4]);
          L2 = true;
        }
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), main2.v(M2.$$.fragment, e3), main2.v(C2.$$.fragment, e3), z2 = z2.filter(Boolean);
        for (let e4 = 0; e4 < z2.length; e4 += 1)
          main2.v(z2[e4]);
        L2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n3), main2.w(r2, e3), e3 && main2.f(o3), e3 && main2.f(h2), e3 && main2.f(x2), main2.w(M2, e3), e3 && main2.f(_2), main2.w(C2, e3), e3 && main2.f(S2), main2.y(z2, e3), e3 && main2.f(O2), e3 && main2.f(D2), P2 = false, main2.B(A2);
      }};
    }
    function hs(e2) {
      let t3, n3;
      return t3 = new Ot({props: {tag: e2[19]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        5 & n4 && (r2.tag = e3[19]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function fs(e2) {
      let t3, n3, r2, o3, i2;
      const c2 = [gs, us], d2 = [];
      function u2(e3, t4) {
        return e3[0].member ? 0 : 1;
      }
      return n3 = u2(e2), r2 = d2[n3] = c2[n3](e2), {c() {
        t3 = main2.e("div"), r2.c(), main2.b(t3, "class", "leading-relaxed");
      }, m(e3, r3) {
        main2.c(e3, t3, r3), d2[n3].m(t3, null), i2 = true;
      }, p(e3, o4) {
        let s2 = n3;
        n3 = u2(e3), n3 === s2 ? d2[n3].p(e3, o4) : (main2.D(), main2.v(d2[s2], 1, 1, () => {
          d2[s2] = null;
        }), main2.x(), r2 = d2[n3], r2 ? r2.p(e3, o4) : (r2 = d2[n3] = c2[n3](e3), r2.c()), main2.p(r2, 1), r2.m(t3, null));
      }, i(e3) {
        i2 || (main2.p(r2), o3 || main2.j(() => {
          o3 = main2.X(t3, a, {duration: 500}), o3.start();
        }), i2 = true);
      }, o(e3) {
        main2.v(r2), i2 = false;
      }, d(e3) {
        e3 && main2.f(t3), d2[n3].d();
      }};
    }
    function ps(e2) {
      let t3, n3, r2, i2, c2, h2, y2 = e2[0], b2 = fs(e2);
      return {c() {
        t3 = main2.e("div"), b2.c(), main2.b(t3, "id", n3 = "MailCard-" + e2[1]), main2.h(t3, "width", "276px"), main2.h(t3, "height", "156px"), main2.b(t3, "class", r2 = "m-2 p-2\r\nrelative overflow-y-auto\r\n" + e2[6]("bg-white") + "\r\nshadow-md rounded-md");
      }, m(n4, r3) {
        main2.c(n4, t3, r3), b2.m(t3, null), i2 = true, c2 || (h2 = [main2.A(t3, "pointerdown", function() {
          main2.H(e2[4]) && e2[4].apply(this, arguments);
        }), main2.A(t3, "pointerup", function() {
          main2.H(e2[5]) && e2[5].apply(this, arguments);
        })], c2 = true);
      }, p(s2, [a3]) {
        e2 = s2, 1 & a3 && main2.s(y2, y2 = e2[0]) ? (main2.D(), main2.v(b2, 1, 1, main2.n), main2.x(), b2 = fs(e2), b2.c(), main2.p(b2), b2.m(t3, null)) : b2.p(e2, a3), (!i2 || 2 & a3 && n3 !== (n3 = "MailCard-" + e2[1])) && main2.b(t3, "id", n3), (!i2 || 64 & a3 && r2 !== (r2 = "m-2 p-2\r\nrelative overflow-y-auto\r\n" + e2[6]("bg-white") + "\r\nshadow-md rounded-md")) && main2.b(t3, "class", r2);
      }, i(e3) {
        i2 || (main2.p(b2), i2 = true);
      }, o(e3) {
        main2.v(b2), i2 = false;
      }, d(e3) {
        e3 && main2.f(t3), b2.d(e3), c2 = false, main2.B(h2);
      }};
    }
    function ms(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2, h2, f2, p2;
      main2.g(e2, Ce, (e3) => n3(8, a3 = e3)), main2.g(e2, _e, (e3) => n3(9, c2 = e3)), main2.g(e2, Ae, (e3) => n3(10, d2 = e3)), main2.g(e2, Ne, (e3) => n3(11, u2 = e3)), main2.g(e2, main2.U, (e3) => n3(12, g2 = e3)), main2.g(e2, main2.V, (e3) => n3(13, h2 = e3)), main2.g(e2, jn, (e3) => n3(15, f2 = e3)), main2.g(e2, he, (e3) => n3(6, p2 = e3));
      let {pm: m2} = t3, {index: $2} = t3;
      const y2 = Ln(new Date()), {open: b2} = main2.O("simple-modal"), w2 = () => {
        b2(Vo);
      };
      let v2;
      return e2.$$set = (e3) => {
        "pm" in e3 && n3(0, m2 = e3.pm), "index" in e3 && n3(1, $2 = e3.index);
      }, e2.$$.update = () => {
        768 & e2.$$.dirty && n3(2, r2 = (e3) => a3.has(e3.id) ? Array.from(a3.get(e3.id)).map((e4) => c2.get(e4.value)) : []), 15361 & e2.$$.dirty && n3(3, o3 = () => {
          m2 && (main2.W(Ae, d2 = m2, d2), main2.W(Ne, u2 = false, u2), g2("./", Object.assign(Object.assign({}, h2), {showList: u2, now_pm: d2.id})));
        }), 32769 & e2.$$.dirty && n3(14, s2 = !m2.member && f2 == y2), 16384 & e2.$$.dirty && n3(4, i2 = () => {
          s2 && n3(7, v2 = setTimeout(w2, 300));
        }), 16512 & e2.$$.dirty && n3(5, l2 = (e3) => {
          s2 && clearTimeout(v2);
        });
      }, [m2, $2, r2, o3, i2, l2, p2, v2, a3, c2, d2, u2, g2, h2, s2, f2];
    }
    class $s extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ms, ps, main2.s, {pm: 0, index: 1});
      }
    }
    function ys(e2, t3, n3) {
      const r2 = e2.slice();
      return r2[1] = t3[n3], r2[3] = n3, r2;
    }
    function bs(e2) {
      let t3, n3;
      return t3 = new $s({props: {pm: e2[1], index: e2[3]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        1 & n4 && (r2.pm = e3[1]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function ws(e2) {
      let t3, n3, r2 = e2[0], o3 = [];
      for (let t4 = 0; t4 < r2.length; t4 += 1)
        o3[t4] = bs(ys(e2, r2, t4));
      const i2 = (e3) => main2.v(o3[e3], 1, 1, () => {
        o3[e3] = null;
      });
      return {c() {
        t3 = main2.e("div");
        for (let e3 = 0; e3 < o3.length; e3 += 1)
          o3[e3].c();
        main2.b(t3, "id", "MailCardView"), main2.b(t3, "class", "mb-3 flex flex-wrap");
      }, m(e3, r3) {
        main2.c(e3, t3, r3);
        for (let e4 = 0; e4 < o3.length; e4 += 1)
          o3[e4].m(t3, null);
        n3 = true;
      }, p(e3, [n4]) {
        if (1 & n4) {
          let s2;
          for (r2 = e3[0], s2 = 0; s2 < r2.length; s2 += 1) {
            const i3 = ys(e3, r2, s2);
            o3[s2] ? (o3[s2].p(i3, n4), main2.p(o3[s2], 1)) : (o3[s2] = bs(i3), o3[s2].c(), main2.p(o3[s2], 1), o3[s2].m(t3, null));
          }
          for (main2.D(), s2 = r2.length; s2 < o3.length; s2 += 1)
            i2(s2);
          main2.x();
        }
      }, i(e3) {
        if (!n3) {
          for (let e4 = 0; e4 < r2.length; e4 += 1)
            main2.p(o3[e4]);
          n3 = true;
        }
      }, o(e3) {
        o3 = o3.filter(Boolean);
        for (let e4 = 0; e4 < o3.length; e4 += 1)
          main2.v(o3[e4]);
        n3 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(o3, e3);
      }};
    }
    function vs(e2, t3, n3) {
      let {mail_list: r2} = t3;
      return e2.$$set = (e3) => {
        "mail_list" in e3 && n3(0, r2 = e3.mail_list);
      }, [r2];
    }
    class xs extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, vs, ws, main2.s, {mail_list: 0});
      }
    }
    function ks(e2) {
      let t3, n3, r2, o3, u2, g2, h2, f2, p2 = e2[2] ? "on" : "off";
      return {c() {
        t3 = main2.e("label"), n3 = main2.t("\uB9AC\uC2A4\uD2B8\uBDF0 "), r2 = main2.t(p2), o3 = main2.a(), u2 = main2.e("input"), main2.b(u2, "id", "isListViewInput"), main2.b(u2, "type", "checkbox"), main2.b(t3, "class", g2 = "p-1 rounded " + e2[12]("bg-red-100")), main2.b(t3, "for", "isListViewInput");
      }, m(s2, i2) {
        main2.c(s2, t3, i2), main2.d(t3, n3), main2.d(t3, r2), main2.d(t3, o3), main2.d(t3, u2), u2.checked = e2[2], h2 || (f2 = main2.A(u2, "change", e2[19]), h2 = true);
      }, p(e3, n4) {
        4 & n4 && p2 !== (p2 = e3[2] ? "on" : "off") && main2.o(r2, p2), 4 & n4 && (u2.checked = e3[2]), 4096 & n4 && g2 !== (g2 = "p-1 rounded " + e3[12]("bg-red-100")) && main2.b(t3, "class", g2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), h2 = false, f2();
      }};
    }
    function Ms(e2) {
      let t3, n3, r2, o3;
      return t3 = new _n({}), r2 = new xn({}), {c() {
        main2.q(t3.$$.fragment), n3 = main2.a(), main2.q(r2.$$.fragment);
      }, m(e3, s2) {
        main2.r(t3, e3, s2), main2.c(e3, n3, s2), main2.r(r2, e3, s2), o3 = true;
      }, p: main2.n, i(e3) {
        o3 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), o3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), o3 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n3), main2.w(r2, e3);
      }};
    }
    function _s(e2) {
      let t3, n3;
      return t3 = new Yo({}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Cs(e2) {
      let t3, n3;
      return t3 = new cs({props: {mail_list: e2[8], isTyping: e2[7]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        256 & n4 && (r2.mail_list = e3[8]), 128 & n4 && (r2.isTyping = e3[7]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Ss(e2) {
      let t3, n3;
      return t3 = new xs({props: {mail_list: e2[8]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        256 & n4 && (r2.mail_list = e3[8]), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Os(e2) {
      let t3;
      return {c() {
        t3 = main2.e("br");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Ds(e2) {
      let t3, n3, r2, o3, d2, u2, h2, x2, k2, M2, _2, C2, S2, O2, D2, T2, j2, P2;
      const B2 = [Ms, ks], A2 = [];
      function I2(e3, t4) {
        return e3[3] ? 0 : 1;
      }
      r2 = I2(e2), o3 = A2[r2] = B2[r2](e2);
      let N2 = e2[13] && _s();
      h2 = new mn({props: {hidden: !(e2[3] && e2[5])}});
      const E2 = [Ss, Cs], z2 = [];
      function W2(e3, t4) {
        return !e3[2] && e3[11] ? 0 : 1;
      }
      k2 = W2(e2), M2 = z2[k2] = E2[k2](e2), C2 = new Io({props: {maxPage: e2[6], parent_width: e2[0]}});
      let F2 = e2[0] < 600 && Os();
      return D2 = new zo({props: {search_length: e2[4].length}}), {c() {
        t3 = main2.e("section"), n3 = main2.e("div"), o3.c(), d2 = main2.a(), N2 && N2.c(), u2 = main2.a(), main2.q(h2.$$.fragment), x2 = main2.a(), M2.c(), _2 = main2.a(), main2.q(C2.$$.fragment), S2 = main2.a(), F2 && F2.c(), O2 = main2.a(), main2.q(D2.$$.fragment), main2.b(n3, "class", "ml-2 flex flex-row"), main2.b(t3, "id", "MailListSection"), main2.h(t3, "min-height", e2[9] + "px"), main2.b(t3, "class", T2 = "h-full " + (e2[11] ? "w-1/2 lg:w-2/3 xl:w-3/4" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y"), main2.j(() => e2[20].call(t3)), main2.Y(t3, "hidden", e2[3] && !e2[10]);
      }, m(o4, s2) {
        main2.c(o4, t3, s2), main2.d(t3, n3), A2[r2].m(n3, null), main2.d(n3, d2), N2 && N2.m(n3, null), main2.d(t3, u2), main2.r(h2, t3, null), main2.d(t3, x2), z2[k2].m(t3, null), main2.d(t3, _2), main2.r(C2, t3, null), main2.d(t3, S2), F2 && F2.m(t3, null), main2.d(t3, O2), main2.r(D2, t3, null), j2 = main2.z(t3, e2[20].bind(t3)), P2 = true;
      }, p(e3, [s2]) {
        let i2 = r2;
        r2 = I2(e3), r2 === i2 ? A2[r2].p(e3, s2) : (main2.D(), main2.v(A2[i2], 1, 1, () => {
          A2[i2] = null;
        }), main2.x(), o3 = A2[r2], o3 ? o3.p(e3, s2) : (o3 = A2[r2] = B2[r2](e3), o3.c()), main2.p(o3, 1), o3.m(n3, d2)), e3[13] ? N2 ? 8192 & s2 && main2.p(N2, 1) : (N2 = _s(), N2.c(), main2.p(N2, 1), N2.m(n3, null)) : N2 && (main2.D(), main2.v(N2, 1, 1, () => {
          N2 = null;
        }), main2.x());
        const a3 = {};
        40 & s2 && (a3.hidden = !(e3[3] && e3[5])), h2.$set(a3);
        let c2 = k2;
        k2 = W2(e3), k2 === c2 ? z2[k2].p(e3, s2) : (main2.D(), main2.v(z2[c2], 1, 1, () => {
          z2[c2] = null;
        }), main2.x(), M2 = z2[k2], M2 ? M2.p(e3, s2) : (M2 = z2[k2] = E2[k2](e3), M2.c()), main2.p(M2, 1), M2.m(t3, _2));
        const u3 = {};
        64 & s2 && (u3.maxPage = e3[6]), 1 & s2 && (u3.parent_width = e3[0]), C2.$set(u3), e3[0] < 600 ? F2 || (F2 = Os(), F2.c(), F2.m(t3, O2)) : F2 && (F2.d(1), F2 = null);
        const $2 = {};
        16 & s2 && ($2.search_length = e3[4].length), D2.$set($2), (!P2 || 512 & s2) && main2.h(t3, "min-height", e3[9] + "px"), (!P2 || 2048 & s2 && T2 !== (T2 = "h-full " + (e3[11] ? "w-1/2 lg:w-2/3 xl:w-3/4" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y")) && main2.b(t3, "class", T2), 3080 & s2 && main2.Y(t3, "hidden", e3[3] && !e3[10]);
      }, i(e3) {
        P2 || (main2.p(o3), main2.p(N2), main2.p(h2.$$.fragment, e3), main2.p(M2), main2.p(C2.$$.fragment, e3), main2.p(D2.$$.fragment, e3), P2 = true);
      }, o(e3) {
        main2.v(o3), main2.v(N2), main2.v(h2.$$.fragment, e3), main2.v(M2), main2.v(C2.$$.fragment, e3), main2.v(D2.$$.fragment, e3), P2 = false;
      }, d(e3) {
        e3 && main2.f(t3), A2[r2].d(), N2 && N2.d(), main2.w(h2), z2[k2].d(), main2.w(C2), F2 && F2.d(), main2.w(D2), j2();
      }};
    }
    function Ts(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2, h2, f2, p2, m2, $2, y2, b2, w2, v2, x2, k2, M2, _2;
      main2.g(e2, We, (e3) => n3(3, u2 = e3)), main2.g(e2, jr, (e3) => n3(4, g2 = e3)), main2.g(e2, Pr, (e3) => n3(17, h2 = e3)), main2.g(e2, jn, (e3) => n3(18, f2 = e3)), main2.g(e2, Ie, (e3) => n3(26, p2 = e3)), main2.g(e2, main2.Z, (e3) => n3(27, m2 = e3)), main2.g(e2, main2.V, (e3) => n3(28, $2 = e3)), main2.g(e2, Ee, (e3) => n3(5, y2 = e3)), main2.g(e2, Ne, (e3) => n3(10, b2 = e3)), main2.g(e2, ze, (e3) => n3(11, w2 = e3)), main2.g(e2, he, (e3) => n3(12, v2 = e3)), main2.g(e2, je, (e3) => n3(13, x2 = e3));
      let S2, O2 = 1, D2 = 3;
      main2.l(() => {
        const e3 = a3[0];
        if (D2 != s2 || O2 == p2 && _2 == jn || (S2 = e3), D2 != s2 && S2) {
          let e4 = 0;
          return g2.forEach((e5, t4) => {
          }), main2.W(Ie, p2 = Math.ceil((e4 + 1) / s2), p2), O2 = p2, D2 = s2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2})), null;
        }
        if (c2 > new Date())
          return main2.W(jn, f2 = Ln(new Date()), f2), alert("\uBBF8\uB798\uB85C \uAC08 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."), m2("./", Object.assign(Object.assign({}, $2), {dateString: f2})), null;
        if (a3.length == 0 || !e3 && $2.nowPage != 1)
          return m2("./", Object.assign(Object.assign({}, $2), {nowPage: 1})), null;
        if (O2 != p2) {
          O2 = p2;
          const t4 = Bn(e3.time);
          return main2.W(jn, f2 = t4, f2), _2 = t4, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2, dateString: t4})), null;
        }
        if (_2 !== f2) {
          let e4 = false;
          if (g2.forEach((t4, n4) => {
            if (e4 || !t4)
              return null;
            const r3 = Bn(t4.time);
            Pn(r3) <= c2 && (main2.W(Ie, p2 = Math.ceil((n4 + 1) / s2), p2), main2.W(jn, f2 = r3, f2), e4 = true);
          }), e4 == 0 && g2.length > 0) {
            main2.W(Ie, p2 = i2, p2);
            const e5 = g2[g2.length - 1];
            main2.W(jn, f2 = Bn(e5.time), f2);
          }
          return _2 = f2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: p2, dateString: f2})), null;
        }
      });
      let T2 = false;
      return e2.$$.update = () => {
        1 & e2.$$.dirty && n3(14, r2 = Math.floor((k2 - 32) / 292)), 2 & e2.$$.dirty && n3(15, o3 = Math.floor((M2 - 220) / 164)), 49166 & e2.$$.dirty && n3(16, s2 = u2 ? 5 : T2 ? Math.floor((M2 - 200) / 62) : r2 * o3), 65552 & e2.$$.dirty && n3(6, i2 = Math.ceil(g2.length / s2)), 2 & e2.$$.dirty && n3(7, l2 = M2 < 400), 196624 & e2.$$.dirty && n3(8, a3 = g2 ? h2(s2) : []), 262144 & e2.$$.dirty && (c2 = Pn(f2)), 44 & e2.$$.dirty && n3(9, d2 = T2 || u2 ? y2 ? 520 : 360 : 490);
      }, [k2, M2, T2, u2, g2, y2, i2, l2, a3, d2, b2, w2, v2, x2, r2, o3, s2, h2, f2, function() {
        T2 = this.checked, n3(2, T2);
      }, function() {
        k2 = this.clientWidth, M2 = this.clientHeight, n3(0, k2), n3(1, M2);
      }];
    }
    class js extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ts, Ds, main2.s, {});
      }
    }
    function Ls(e2) {
      let t3, n3, r2, o3;
      return {c() {
        t3 = main2.a(), n3 = main2.e("div"), main2.b(n3, "id", "Background"), main2.b(n3, "class", "w-screen h-screen absolute bg-contain"), main2.h(n3, "background-color", "black"), main2.h(n3, "background-image", e2[0]), main2.h(n3, "background-position", "center"), main2.h(n3, "background-size", "cover"), main2.h(n3, "background-attachment", "fixed");
      }, m(e3, r3) {
        main2.c(e3, t3, r3), main2.c(e3, n3, r3), o3 = true;
      }, p(e3, [t4]) {
        (!o3 || 1 & t4) && main2.h(n3, "background-image", e3[0]);
      }, i(e3) {
        o3 || (main2.j(() => {
          r2 || (r2 = main2.k(n3, a, {}, true)), r2.run(1);
        }), o3 = true);
      }, o(e3) {
        r2 || (r2 = main2.k(n3, a, {}, false)), r2.run(0), o3 = false;
      }, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(n3), e3 && r2 && r2.end();
      }};
    }
    function Ps(e2, t3, n3) {
      let r2, o3, s2, i2;
      main2.g(e2, We, (e3) => n3(2, s2 = e3)), main2.g(e2, ge, (e3) => n3(3, i2 = e3));
      return e2.$$.update = () => {
        4 & e2.$$.dirty && n3(1, r2 = `url('./img/bg/custom_mic${s2 ? "_m" : ""}.jpg')`), 10 & e2.$$.dirty && n3(0, o3 = i2 ? r2 : "\n    linear-gradient(to bottom right,\n    #f1d2e7,#f1c3aa,#e382a9, #e18784,\n    #f3aa51, #fcf695, #fff,#cee5d5,\n    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7)");
      }, [o3, r2, s2, i2];
    }
    class Bs extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ps, Ls, main2.s, {});
      }
    }
    function As(e2) {
      let t3, n3;
      return t3 = new ve({props: {show: Es, $$slots: {default: [Is]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n3 = true;
      }, p(e3, n4) {
        const r2 = {};
        2097152 & n4 && (r2.$$scope = {dirty: n4, ctx: e3}), t3.$set(r2);
      }, i(e3) {
        n3 || (main2.p(t3.$$.fragment, e3), n3 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n3 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Is(e2) {
      let t3, n3, r2, o3, s2, l2;
      return t3 = new Bs({}), r2 = new Dn({}), s2 = new js({}), {c() {
        main2.q(t3.$$.fragment), n3 = main2.a(), main2.q(r2.$$.fragment), o3 = main2.a(), main2.q(s2.$$.fragment);
      }, m(e3, i2) {
        main2.r(t3, e3, i2), main2.c(e3, n3, i2), main2.r(r2, e3, i2), main2.c(e3, o3, i2), main2.r(s2, e3, i2), l2 = true;
      }, i(e3) {
        l2 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), main2.p(s2.$$.fragment, e3), l2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), main2.v(s2.$$.fragment, e3), l2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n3), main2.w(r2, e3), e3 && main2.f(o3), main2.w(s2, e3);
      }};
    }
    function Ns(e2) {
      let t3, n3, r2, o3 = e2[1] && As(e2);
      return {c() {
        t3 = main2.e("div"), o3 && o3.c(), main2.b(t3, "class", "flex w-screen h-screen relative"), main2.j(() => e2[4].call(t3));
      }, m(s2, i2) {
        main2.c(s2, t3, i2), o3 && o3.m(t3, null), n3 = main2.z(t3, e2[4].bind(t3)), r2 = true;
      }, p(e3, [n4]) {
        e3[1] ? o3 ? (o3.p(e3, n4), 2 & n4 && main2.p(o3, 1)) : (o3 = As(e3), o3.c(), main2.p(o3, 1), o3.m(t3, null)) : o3 && (main2.D(), main2.v(o3, 1, 1, () => {
          o3 = null;
        }), main2.x());
      }, i(e3) {
        r2 || (main2.p(o3), r2 = true);
      }, o(e3) {
        main2.v(o3), r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), o3 && o3.d(), n3();
      }};
    }
    let Es = null;
    function zs(e2, t3, n3) {
      let r2, o3, s2, i2, l2, a3, c2, d2, u2, g2, h2, f2, p2;
      main2.g(e2, Le, (e3) => n3(2, o3 = e3)), main2.g(e2, Ce, (e3) => n3(3, s2 = e3)), main2.g(e2, tt, (e3) => n3(7, i2 = e3)), main2.g(e2, Be, (e3) => n3(8, l2 = e3)), main2.g(e2, Ae, (e3) => n3(9, a3 = e3)), main2.g(e2, _e, (e3) => n3(10, c2 = e3)), main2.g(e2, main2.V, (e3) => n3(11, d2 = e3)), main2.g(e2, main2.U, (e3) => n3(12, u2 = e3)), main2.g(e2, ue, (e3) => n3(13, g2 = e3)), main2.g(e2, Ne, (e3) => n3(14, h2 = e3)), main2.g(e2, je, (e3) => n3(15, f2 = e3)), main2.g(e2, main2.Z, (e3) => n3(16, p2 = e3));
      var m2 = this && this.__awaiter || function(e3, t4, n4, r3) {
        return new (n4 || (n4 = Promise))(function(o4, s3) {
          function i3(e4) {
            try {
              a4(r3.next(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function l3(e4) {
            try {
              a4(r3.throw(e4));
            } catch (e5) {
              s3(e5);
            }
          }
          function a4(e4) {
            var t5;
            e4.done ? o4(e4.value) : (t5 = e4.value, t5 instanceof n4 ? t5 : new n4(function(e5) {
              e5(t5);
            })).then(i3, l3);
          }
          a4((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      main2.a7.title = "IZ*ONE Private Mail Viewer";
      let $2 = false;
      const y2 = (e3, t4) => {
        try {
          console.log(`${t4}\uCC28 \uC2DC\uB3C4`), console.log(e3.slice(0, 10));
          const n4 = [];
          for (let t5 = 0; t5 < e3.length; t5 += 2)
            n4.push(e3[t5]);
          const r3 = JSON.parse(n4.join(""));
          return console.log("\uB85C\uB529 \uC131\uACF5!"), r3;
        } catch (n4) {
          if (t4 < 4)
            return e3 = e3.slice(1), y2(e3, t4 + 1);
          throw n4;
        }
      }, b2 = (e3) => m2(void 0, void 0, void 0, function* () {
        const t4 = yield fetch(e3, {cache: "no-cache"}), n4 = yield t4.text();
        try {
          return JSON.parse(n4);
        } catch (e4) {
          if (n4.slice(0, 9) == "<!DOCTYPE")
            throw e4;
          if (e4 instanceof SyntaxError)
            return console.log("json \uC77D\uAE30 \uC2E4\uD328. \uC7AC\uC2DC\uB3C4\uD569\uB2C8\uB2E4."), y2(n4.slice(2), 2);
          console.error(e4);
        }
      });
      let w2;
      return function() {
        return m2(this, void 0, void 0, function* () {
          yield Promise.all([b2("./pm_list.json"), b2("./member_name.json"), b2("./mail_to_num_dict.json"), b2("./mail_body_dict.json").catch((e3) => (console.log("mail_body_dict\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."), null))]).then((e3) => {
            const t4 = e3[0];
            main2.W(tt, i2 = e3[1], i2), console.log(i2);
            const n4 = new Map(Object.entries(e3[2])), g3 = e3[3];
            main2.W(Be, l2 = t4.map((e4, t5) => {
              t5 == 0 && main2.W(Ae, a3 = e4, a3), e4.nick = e4.member;
              const r3 = i2[e4.nick];
              if (e4.member = nt[r3], !e4.member && n4.has(e4.id)) {
                const t6 = n4.get(e4.id);
                main2.W(tt, i2[e4.nick] = t6, i2), e4.member = nt[t6], console.log("member_name.json \uC5D0 \uBA64\uBC84 \uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."), console.log(e4.nick, e4.member);
              }
              if (g3) {
                const {body: t6, images: n5} = g3[e4.id];
                e4.body = t6, e4.images = n5;
              }
              return e4;
            }).sort((e4) => Pn(Bn(e4.time))), l2);
            let h3 = 0;
            const f3 = c2.get("\uD63C\uB2E4 \uD788\uD1A0\uBBF8");
            if (o3.has(f3) && (l2.forEach((e4) => {
              const t5 = c2.get(e4.member), n5 = o3.get(t5);
              n5 ? n5.add(e4.id) : (console.log(e4.id, e4.nick), h3 += 1);
            }), Le.set(o3)), console.log("\uB204\uB77D", h3), !c2.has("\uC0DD\uC77C")) {
              const e4 = {value: "\uC0DD\uC77C", color: "LightPink"};
              c2.set(e4.value, e4), _e.set(c2);
            }
            const p3 = c2.get("\uC0DD\uC77C");
            o3.has(p3) || o3.set(p3, new Set()), console.log("size", o3.get(p3).size), o3.get(p3).size == 0 && (l2.map((e4) => {
              e4.id.slice(0, 1) == "b" && r2(p3, e4);
            }), Le.set(o3), Ce.set(s2)), d2.dateString || u2("./", {dateString: Tn, nowPage: 1, tag: "", search: "", showList: true, now_pm: l2[0].id});
          });
        });
      }().then(() => {
        n3(1, $2 = true);
      }), Qe.ping.then((e3) => e3.status == 200).then((e3) => {
        e3 && (console.log("API \uC11C\uBC84 \uC5F0\uACB0 \uC131\uACF5! \uC2E0 \uC11C\uBC84\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4. \uD0DC\uADF8 \uB3D9\uAE30\uD654 \uBC0F \uC800\uC7A5 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), main2.W(ue, g2 = true, g2));
      }).catch((e3) => {
        console.error(e3), console.log("\uAD6C \uBC84\uC804 \uC11C\uBC84\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4.");
      }), main2.V.subscribe((e3) => {
        h2 != (e3.showList == "true") && e3.showList;
      }), main2.V.subscribe((e3) => {
        if (e3.tag || f2 == null || main2.W(je, f2 = null, f2), e3.tag)
          if (c2.has(e3.tag)) {
            if (f2 != e3.tag) {
              const t4 = c2.get(e3.tag);
              t4 && main2.W(je, f2 = t4.value, f2);
            }
          } else
            p2("./", Object.assign(Object.assign({}, d2), {tag: ""})), console.log("redirect to empty tag url");
      }), e2.$$.update = () => {
        12 & e2.$$.dirty && (r2 = (e3, t4) => {
          o3.get(e3).add(t4.id), s2.has(t4.id) ? s2.get(t4.id).add(e3) : s2.set(t4.id, new Set([e3]));
        }), 1 & e2.$$.dirty && ze.set(w2 > 700);
      }, [w2, $2, o3, s2, function() {
        w2 = this.clientWidth, n3(0, w2);
      }];
    }
    class index_75a207d2_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, zs, Ns, main2.s, {});
      }
    }
  });

  // dist/build/_layout-1540f712.js
  var require_layout_1540f712 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_1540f712_default
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
      let {$$slots: n3 = {}, $$scope: o3} = t3;
      return s2.$$set = (s3) => {
        "$$scope" in s3 && e2(0, o3 = s3.$$scope);
      }, [o3, n3];
    }
    class layout_1540f712_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, u, c, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      $: () => Lt,
      A: () => L,
      B: () => s,
      C: () => St,
      D: () => _t,
      E: () => e,
      F: () => Xt,
      G: () => Yt,
      H: () => i,
      I: () => I,
      J: () => f,
      K: () => d,
      L: () => X,
      M: () => Y,
      N: () => M,
      O: () => tt,
      P: () => j,
      Q: () => m,
      R: () => n2,
      S: () => Ct,
      T: () => h,
      U: () => _e,
      V: () => be,
      W: () => g,
      X: () => Et,
      Y: () => U,
      Z: () => ve,
      _: () => Ot,
      a: () => R,
      a0: () => It,
      a1: () => et,
      a2: () => V,
      a3: () => lt,
      a4: () => At,
      a5: () => ft,
      a6: () => T,
      a7: () => ke,
      b: () => A,
      c: () => k,
      d: () => x,
      e: () => O,
      f: () => P,
      g: () => u,
      h: () => N,
      i: () => Nt,
      j: () => ut,
      k: () => jt,
      l: () => Z,
      m: () => ot,
      n: () => t2,
      o: () => F,
      p: () => xt,
      q: () => Tt,
      r: () => Ft,
      s: () => a2,
      t: () => S,
      u: () => we,
      v: () => kt,
      w: () => Mt,
      x: () => vt,
      y: () => E,
      z: () => B
    });
    function t2() {
    }
    const e = (t3) => t3;
    function n2(t3, e2) {
      for (const n3 in e2)
        t3[n3] = e2[n3];
      return t3;
    }
    function o2(t3) {
      return t3();
    }
    function r() {
      return Object.create(null);
    }
    function s(t3) {
      t3.forEach(o2);
    }
    function i(t3) {
      return typeof t3 == "function";
    }
    function a2(t3, e2) {
      return t3 != t3 ? e2 == e2 : t3 !== e2 || t3 && typeof t3 == "object" || typeof t3 == "function";
    }
    function c(e2, ...n3) {
      if (e2 == null)
        return t2;
      const o3 = e2.subscribe(...n3);
      return o3.unsubscribe ? () => o3.unsubscribe() : o3;
    }
    function l(t3) {
      let e2;
      return c(t3, (t4) => e2 = t4)(), e2;
    }
    function u(t3, e2, n3) {
      t3.$$.on_destroy.push(c(e2, n3));
    }
    function f(t3, e2, n3, o3) {
      if (t3) {
        const r2 = p(t3, e2, n3, o3);
        return t3[0](r2);
      }
    }
    function p(t3, e2, o3, r2) {
      return t3[1] && r2 ? n2(o3.ctx.slice(), t3[1](r2(e2))) : o3.ctx;
    }
    function d(t3, e2, n3, o3, r2, s2, i2) {
      const a3 = function(t4, e3, n4, o4) {
        if (t4[2] && o4) {
          const r3 = t4[2](o4(n4));
          if (e3.dirty === void 0)
            return r3;
          if (typeof r3 == "object") {
            const t5 = [], n5 = Math.max(e3.dirty.length, r3.length);
            for (let o5 = 0; o5 < n5; o5 += 1)
              t5[o5] = e3.dirty[o5] | r3[o5];
            return t5;
          }
          return e3.dirty | r3;
        }
        return e3.dirty;
      }(e2, o3, r2, s2);
      if (a3) {
        const r3 = p(e2, n3, o3, i2);
        t3.p(r3, a3);
      }
    }
    function h(t3) {
      const e2 = {};
      for (const n3 in t3)
        n3[0] !== "$" && (e2[n3] = t3[n3]);
      return e2;
    }
    function m(t3) {
      return t3 == null ? "" : t3;
    }
    function g(t3, e2, n3 = e2) {
      return t3.set(n3), e2;
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
      return w.size === 0 && b(_), {promise: new Promise((n3) => {
        w.add(e2 = {c: t3, f: n3});
      }), abort() {
        w.delete(e2);
      }};
    }
    function x(t3, e2) {
      t3.appendChild(e2);
    }
    function k(t3, e2, n3) {
      t3.insertBefore(e2, n3 || null);
    }
    function P(t3) {
      t3.parentNode.removeChild(t3);
    }
    function E(t3, e2) {
      for (let n3 = 0; n3 < t3.length; n3 += 1)
        t3[n3] && t3[n3].d(e2);
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
    function L(t3, e2, n3, o3) {
      return t3.addEventListener(e2, n3, o3), () => t3.removeEventListener(e2, n3, o3);
    }
    function A(t3, e2, n3) {
      n3 == null ? t3.removeAttribute(e2) : t3.getAttribute(e2) !== n3 && t3.setAttribute(e2, n3);
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
    function N(t3, e2, n3, o3) {
      t3.style.setProperty(e2, n3, o3 ? "important" : "");
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
      const n3 = O("iframe");
      n3.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n3.setAttribute("aria-hidden", "true"), n3.tabIndex = -1;
      const o3 = q();
      let r2;
      return o3 ? (n3.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>", r2 = L(window, "message", (t4) => {
        t4.source === n3.contentWindow && e2();
      })) : (n3.src = "about:blank", n3.onload = () => {
        r2 = L(n3.contentWindow, "resize", e2);
      }), x(t3, n3), () => {
        (o3 || r2 && n3.contentWindow) && r2(), P(n3);
      };
    }
    function U(t3, e2, n3) {
      t3.classList[n3 ? "add" : "remove"](e2);
    }
    function D(t3, e2) {
      const n3 = document.createEvent("CustomEvent");
      return n3.initCustomEvent(t3, false, false, e2), n3;
    }
    const z = new Set();
    let H;
    let K = 0;
    function W(t3, e2, n3, o3, r2, s2, i2, a3 = 0) {
      const c2 = 16.666 / o3;
      let l2 = "{\n";
      for (let t4 = 0; t4 <= 1; t4 += c2) {
        const o4 = e2 + (n3 - e2) * s2(t4);
        l2 += 100 * t4 + `%{${i2(o4, 1 - o4)}}
`;
      }
      const u2 = l2 + `100% {${i2(n3, 1 - n3)}}
}`, f2 = `__svelte_${function(t4) {
        let e3 = 5381, n4 = t4.length;
        for (; n4--; )
          e3 = (e3 << 5) - e3 ^ t4.charCodeAt(n4);
        return e3 >>> 0;
      }(u2)}_${a3}`, p2 = t3.ownerDocument;
      z.add(p2);
      const d2 = p2.__svelte_stylesheet || (p2.__svelte_stylesheet = p2.head.appendChild(O("style")).sheet), h2 = p2.__svelte_rules || (p2.__svelte_rules = {});
      h2[f2] || (h2[f2] = true, d2.insertRule(`@keyframes ${f2} ${u2}`, d2.cssRules.length));
      const m2 = t3.style.animation || "";
      return t3.style.animation = `${m2 ? `${m2}, ` : ""}${f2} ${o3}ms linear ${r2}ms 1 both`, K += 1, f2;
    }
    function J(t3, e2) {
      const n3 = (t3.style.animation || "").split(", "), o3 = n3.filter(e2 ? (t4) => t4.indexOf(e2) < 0 : (t4) => t4.indexOf("__svelte") === -1), r2 = n3.length - o3.length;
      r2 && (t3.style.animation = o3.join(", "), K -= r2, K || b(() => {
        K || (z.forEach((t4) => {
          const e3 = t4.__svelte_stylesheet;
          let n4 = e3.cssRules.length;
          for (; n4--; )
            e3.deleteRule(n4);
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
      Q().$$.on_mount.push(t3);
    }
    function Z(t3) {
      Q().$$.after_update.push(t3);
    }
    function X() {
      const t3 = Q();
      return (e2, n3) => {
        const o3 = t3.$$.callbacks[e2];
        if (o3) {
          const r2 = D(e2, n3);
          o3.slice().forEach((e3) => {
            e3.call(t3, r2);
          });
        }
      };
    }
    function Y(t3, e2) {
      Q().$$.context.set(t3, e2);
    }
    function tt(t3) {
      return Q().$$.context.get(t3);
    }
    function et(t3, e2) {
      const n3 = t3.$$.callbacks[e2.type];
      n3 && n3.slice().forEach((t4) => t4(e2));
    }
    const nt = [];
    const ot = [];
    const rt = [];
    const st = [];
    const it = Promise.resolve();
    let at = false;
    function ct() {
      at || (at = true, it.then(ht));
    }
    function lt() {
      return ct(), it;
    }
    function ut(t3) {
      rt.push(t3);
    }
    function ft(t3) {
      st.push(t3);
    }
    let pt = false;
    const dt = new Set();
    function ht() {
      if (!pt) {
        pt = true;
        do {
          for (let t3 = 0; t3 < nt.length; t3 += 1) {
            const e2 = nt[t3];
            G(e2), mt(e2.$$);
          }
          for (G(null), nt.length = 0; ot.length; )
            ot.pop()();
          for (let t3 = 0; t3 < rt.length; t3 += 1) {
            const e2 = rt[t3];
            dt.has(e2) || (dt.add(e2), e2());
          }
          rt.length = 0;
        } while (nt.length);
        for (; st.length; )
          st.pop()();
        at = false, pt = false, dt.clear();
      }
    }
    function mt(t3) {
      if (t3.fragment !== null) {
        t3.update(), s(t3.before_update);
        const e2 = t3.dirty;
        t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e2), t3.after_update.forEach(ut);
      }
    }
    let gt;
    function yt() {
      return gt || (gt = Promise.resolve(), gt.then(() => {
        gt = null;
      })), gt;
    }
    function $t(t3, e2, n3) {
      t3.dispatchEvent(D(`${e2 ? "intro" : "outro"}${n3}`));
    }
    const bt = new Set();
    let wt;
    function _t() {
      wt = {r: 0, c: [], p: wt};
    }
    function vt() {
      wt.r || s(wt.c), wt = wt.p;
    }
    function xt(t3, e2) {
      t3 && t3.i && (bt.delete(t3), t3.i(e2));
    }
    function kt(t3, e2, n3, o3) {
      if (t3 && t3.o) {
        if (bt.has(t3))
          return;
        bt.add(t3), wt.c.push(() => {
          bt.delete(t3), o3 && (n3 && t3.d(1), o3());
        }), t3.o(e2);
      }
    }
    const Pt = {duration: 0};
    function Et(n3, o3, r2) {
      let s2, a3, c2 = o3(n3, r2), l2 = false, u2 = 0;
      function f2() {
        s2 && J(n3, s2);
      }
      function p2() {
        const {delay: o4 = 0, duration: r3 = 300, easing: i2 = e, tick: p3 = t2, css: d3} = c2 || Pt;
        d3 && (s2 = W(n3, 0, 1, r3, o4, i2, d3, u2++)), p3(0, 1);
        const h2 = $() + o4, m2 = h2 + r3;
        a3 && a3.abort(), l2 = true, ut(() => $t(n3, true, "start")), a3 = v((t3) => {
          if (l2) {
            if (t3 >= m2)
              return p3(1, 0), $t(n3, true, "end"), f2(), l2 = false;
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
        d2 || (J(n3), i(c2) ? (c2 = c2(), yt().then(p2)) : p2());
      }, invalidate() {
        d2 = false;
      }, end() {
        l2 && (f2(), l2 = false);
      }};
    }
    function Ot(n3, o3, r2) {
      let a3, c2 = o3(n3, r2), l2 = true;
      const u2 = wt;
      function f2() {
        const {delay: o4 = 0, duration: r3 = 300, easing: i2 = e, tick: f3 = t2, css: p2} = c2 || Pt;
        p2 && (a3 = W(n3, 1, 0, r3, o4, i2, p2));
        const d2 = $() + o4, h2 = d2 + r3;
        ut(() => $t(n3, false, "start")), v((t3) => {
          if (l2) {
            if (t3 >= h2)
              return f3(0, 1), $t(n3, false, "end"), --u2.r || s(u2.c), false;
            if (t3 >= d2) {
              const e2 = i2((t3 - d2) / r3);
              f3(1 - e2, e2);
            }
          }
          return l2;
        });
      }
      return u2.r += 1, i(c2) ? yt().then(() => {
        c2 = c2(), f2();
      }) : f2(), {end(t3) {
        t3 && c2.tick && c2.tick(1, 0), l2 && (a3 && J(n3, a3), l2 = false);
      }};
    }
    function jt(n3, o3, r2, a3) {
      let c2 = o3(n3, r2), l2 = a3 ? 0 : 1, u2 = null, f2 = null, p2 = null;
      function d2() {
        p2 && J(n3, p2);
      }
      function h2(t3, e2) {
        const n4 = t3.b - l2;
        return e2 *= Math.abs(n4), {a: l2, b: t3.b, d: n4, duration: e2, start: t3.start, end: t3.start + e2, group: t3.group};
      }
      function m2(o4) {
        const {delay: r3 = 0, duration: i2 = 300, easing: a4 = e, tick: m3 = t2, css: g2} = c2 || Pt, y2 = {start: $() + r3, b: o4};
        o4 || (y2.group = wt, wt.r += 1), u2 || f2 ? f2 = y2 : (g2 && (d2(), p2 = W(n3, l2, o4, i2, r3, a4, g2)), o4 && m3(0, 1), u2 = h2(y2, i2), ut(() => $t(n3, o4, "start")), v((t3) => {
          if (f2 && t3 > f2.start && (u2 = h2(f2, i2), f2 = null, $t(n3, u2.b, "start"), g2 && (d2(), p2 = W(n3, l2, u2.b, u2.duration, 0, a4, c2.css))), u2) {
            if (t3 >= u2.end)
              m3(l2 = u2.b, 1 - l2), $t(n3, u2.b, "end"), f2 || (u2.b ? d2() : --u2.group.r || s(u2.group.c)), u2 = null;
            else if (t3 >= u2.start) {
              const e2 = t3 - u2.start;
              l2 = u2.a + u2.d * a4(e2 / u2.duration), m3(l2, 1 - l2);
            }
          }
          return !(!u2 && !f2);
        }));
      }
      return {run(t3) {
        i(c2) ? yt().then(() => {
          c2 = c2(), m2(t3);
        }) : m2(t3);
      }, end() {
        d2(), u2 = f2 = null;
      }};
    }
    const St = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
    function Rt(t3, e2) {
      t3.d(1), e2.delete(t3.key);
    }
    function It(t3, e2) {
      kt(t3, 1, 1, () => {
        e2.delete(t3.key);
      });
    }
    function Lt(t3, e2, n3, o3, r2, s2, i2, a3, c2, l2, u2, f2) {
      let p2 = t3.length, d2 = s2.length, h2 = p2;
      const m2 = {};
      for (; h2--; )
        m2[t3[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t4 = f2(r2, s2, h2), a4 = n3(t4);
        let c3 = i2.get(a4);
        c3 ? o3 && c3.p(t4, e2) : (c3 = l2(a4, t4), c3.c()), y2.set(a4, g2[h2] = c3), a4 in m2 && $2.set(a4, Math.abs(h2 - m2[a4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t4) {
        xt(t4, 1), t4.m(a3, u2), i2.set(t4.key, t4), u2 = t4.first, d2--;
      }
      for (; p2 && d2; ) {
        const e3 = g2[d2 - 1], n4 = t3[p2 - 1], o4 = e3.key, r3 = n4.key;
        e3 === n4 ? (u2 = e3.first, p2--, d2--) : y2.has(r3) ? !i2.has(o4) || b2.has(o4) ? _2(e3) : w2.has(r3) ? p2-- : $2.get(o4) > $2.get(r3) ? (w2.add(o4), _2(e3)) : (b2.add(r3), p2--) : (c2(n4, i2), p2--);
      }
      for (; p2--; ) {
        const e3 = t3[p2];
        y2.has(e3.key) || c2(e3, i2);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function At(t3, e2, n3) {
      const o3 = t3.$$.props[e2];
      o3 !== void 0 && (t3.$$.bound[o3] = n3, n3(t3.$$.ctx[o3]));
    }
    function Tt(t3) {
      t3 && t3.c();
    }
    function Ft(t3, e2, n3) {
      const {fragment: r2, on_mount: a3, on_destroy: c2, after_update: l2} = t3.$$;
      r2 && r2.m(e2, n3), ut(() => {
        const e3 = a3.map(o2).filter(i);
        c2 ? c2.push(...e3) : s(e3), t3.$$.on_mount = [];
      }), l2.forEach(ut);
    }
    function Mt(t3, e2) {
      const n3 = t3.$$;
      n3.fragment !== null && (s(n3.on_destroy), n3.fragment && n3.fragment.d(e2), n3.on_destroy = n3.fragment = null, n3.ctx = []);
    }
    function Nt(e2, n3, o3, i2, a3, c2, l2 = [-1]) {
      const u2 = H;
      G(e2);
      const f2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: a3, bound: r(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: r(), dirty: l2, skip_bound: false};
      let p2 = false;
      if (f2.ctx = o3 ? o3(e2, n3.props || {}, (t3, n4, ...o4) => {
        const r2 = o4.length ? o4[0] : n4;
        return f2.ctx && a3(f2.ctx[t3], f2.ctx[t3] = r2) && (!f2.skip_bound && f2.bound[t3] && f2.bound[t3](r2), p2 && function(t4, e3) {
          t4.$$.dirty[0] === -1 && (nt.push(t4), ct(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t3)), n4;
      }) : [], f2.update(), p2 = true, s(f2.before_update), f2.fragment = !!i2 && i2(f2.ctx), n3.target) {
        if (n3.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n3.target);
          f2.fragment && f2.fragment.l(t3), t3.forEach(P);
        } else
          f2.fragment && f2.fragment.c();
        n3.intro && xt(e2.$$.fragment), Ft(e2, n3.target, n3.anchor), ht();
      }
      G(u2);
    }
    class Ct {
      $destroy() {
        Mt(this, 1), this.$destroy = t2;
      }
      $on(t3, e2) {
        const n3 = this.$$.callbacks[t3] || (this.$$.callbacks[t3] = []);
        return n3.push(e2), () => {
          const t4 = n3.indexOf(e2);
          t4 !== -1 && n3.splice(t4, 1);
        };
      }
      $set(t3) {
        var e2;
        this.$$set && (e2 = t3, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t3), this.$$.skip_bound = false);
      }
    }
    var qt = {queryHandler: {parse: (t3) => {
      return e2 = new URLSearchParams(t3), [...e2].reduce((t4, [e3, n3]) => (t4[e3] = n3, t4), {});
      var e2;
    }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
    const Bt = RegExp(/\:([^/()]+)/g);
    function Ut(t3) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      Dt(t3), function() {
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
    function Dt(t3) {
      t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", Dt(t3.parentElement));
    }
    const zt = (t3) => {
      const e2 = [];
      let n3;
      for (; n3 = Bt.exec(t3); )
        e2.push(n3[1]);
      return e2;
    };
    function Ht(t3, e2) {
      Ht._console = Ht._console || {log: console.log, warn: console.warn};
      const {_console: n3} = Ht, o3 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
      for (const t4 of ["log", "warn"])
        console[t4] = (...e3) => {
          r2.includes(e3[0]) || n3[t4](...e3);
        }, e2().then(() => {
          console[t4] = n3[t4];
        });
    }
    function Kt() {
      let t3 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e2, options: n3} = function(t4) {
        const [e3, n4] = t4.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n4 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e3, options: o3};
      }(t3);
      return {...Wt(e2), options: n3};
    }
    function Wt(t3) {
      qt.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const e2 = t3.startsWith("/") ? window.location.origin : void 0, n3 = new URL(t3, e2);
      return {url: n3, fullpath: n3.pathname + n3.search + n3.hash};
    }
    function Jt(t3, e2, n3) {
      const o3 = qt.useHash ? "#" : "";
      let r2;
      return r2 = function(t4, e3, n4) {
        const o4 = Object.assign({}, n4, e3), r3 = function(t5, e4) {
          if (!qt.queryHandler)
            return "";
          const n5 = zt(t5), o5 = {};
          e4 && Object.entries(e4).forEach(([t6, e5]) => {
            n5.includes(t6) || (o5[t6] = e5);
          });
          return qt.queryHandler.stringify(o5).replace(/\?$/, "");
        }(t4, e3);
        for (const [e4, n5] of Object.entries(o4))
          t4 = t4.replace(`:${e4}`, n5);
        return `${t4}${r3}`;
      }(t3, e2, n3), r2 = qt.urlTransform.apply(r2), r2 = o3 + r2, r2;
    }
    function Gt(t3) {
      let e2;
      const n3 = t3[2].default, o3 = f(n3, t3, t3[1], null);
      return {c() {
        o3 && o3.c();
      }, m(t4, n4) {
        o3 && o3.m(t4, n4), e2 = true;
      }, p(t4, [e3]) {
        o3 && o3.p && 2 & e3 && d(o3, n3, t4, t4[1], e3, null, null);
      }, i(t4) {
        e2 || (xt(o3, t4), e2 = true);
      }, o(t4) {
        kt(o3, t4), e2 = false;
      }, d(t4) {
        o3 && o3.d(t4);
      }};
    }
    function Qt(t3, e2, n3) {
      let {$$slots: o3 = {}, $$scope: r2} = e2, {scoped: s2 = {}} = e2;
      return t3.$$set = (t4) => {
        "scoped" in t4 && n3(0, s2 = t4.scoped), "$$scope" in t4 && n3(1, r2 = t4.$$scope);
      }, [s2, r2, o3];
    }
    class Vt extends Ct {
      constructor(t3) {
        super(), Nt(this, t3, Qt, Gt, a2, {scoped: 0});
      }
    }
    const Zt = [];
    function Xt(e2, n3 = t2) {
      let o3;
      const r2 = [];
      function s2(t3) {
        if (a2(e2, t3) && (e2 = t3, o3)) {
          const t4 = !Zt.length;
          for (let t5 = 0; t5 < r2.length; t5 += 1) {
            const n4 = r2[t5];
            n4[1](), Zt.push(n4, e2);
          }
          if (t4) {
            for (let t5 = 0; t5 < Zt.length; t5 += 2)
              Zt[t5][0](Zt[t5 + 1]);
            Zt.length = 0;
          }
        }
      }
      return {set: s2, update: function(t3) {
        s2(t3(e2));
      }, subscribe: function(i2, a3 = t2) {
        const c2 = [i2, a3];
        return r2.push(c2), r2.length === 1 && (o3 = n3(s2) || t2), i2(e2), () => {
          const t3 = r2.indexOf(c2);
          t3 !== -1 && r2.splice(t3, 1), r2.length === 0 && (o3(), o3 = null);
        };
      }};
    }
    function Yt(e2, n3, o3) {
      const r2 = !Array.isArray(e2), a3 = r2 ? [e2] : e2, l2 = n3.length < 2;
      return {subscribe: Xt(o3, (e3) => {
        let o4 = false;
        const u2 = [];
        let f2 = 0, p2 = t2;
        const d2 = () => {
          if (f2)
            return;
          p2();
          const o5 = n3(r2 ? u2[0] : u2, e3);
          l2 ? e3(o5) : p2 = i(o5) ? o5 : t2;
        }, h2 = a3.map((t3, e4) => c(t3, (t4) => {
          u2[e4] = t4, f2 &= ~(1 << e4), o4 && d2();
        }, () => {
          f2 |= 1 << e4;
        }));
        return o4 = true, d2(), function() {
          s(h2), p2();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const te = Xt(null);
    const ee = Xt([]);
    ee.subscribe((t3) => window.routify.routes = t3);
    let ne = Xt({component: {params: {}}});
    const oe = Xt(null);
    const re = Xt(true);
    function se(t3, e2 = false) {
      t3 = qt.urlTransform.remove(t3);
      let {pathname: n3, search: o3} = Wt(t3).url;
      const r2 = l(ee), s2 = r2.find((t4) => n3 === t4.meta.name) || r2.find((t4) => n3.match(t4.regex));
      if (!s2)
        throw new Error(`Route could not be found for "${n3}".`);
      const i2 = e2 ? Object.create(s2) : s2, {route: a3, redirectPath: c2, rewritePath: u2} = ie(i2, r2);
      return u2 && ({pathname: n3, search: o3} = Wt(Jt(u2, a3.params)).url, c2 && (a3.redirectTo = Jt(c2, a3.params || {}))), qt.queryHandler && (a3.params = Object.assign({}, a3.params, qt.queryHandler.parse(o3))), function(t4, e3) {
        if (t4.paramKeys) {
          const n4 = function(t5) {
            const e4 = [];
            return t5.forEach((t6) => {
              e4[t6.path.split("/").filter(Boolean).length - 1] = t6;
            }), e4;
          }(t4.layouts), o4 = e3.split("/").filter(Boolean);
          (function(t5) {
            return t5.split("/").filter(Boolean).map((t6) => t6.match(/\:(.+)/)).map((t6) => t6 && t6[1]);
          })(t4.path).forEach((e4, r3) => {
            e4 && (t4.params[e4] = o4[r3], n4[r3] ? n4[r3].param = {[e4]: o4[r3]} : t4.param = {[e4]: o4[r3]});
          });
        }
      }(a3, n3), a3.leftover = t3.replace(new RegExp(a3.regex), ""), a3;
    }
    function ie(t3, e2, n3, o3) {
      const {redirect: r2, rewrite: s2} = t3.meta;
      if (r2 || s2) {
        n3 = r2 ? r2.path || r2 : n3, o3 = s2 ? s2.path || s2 : n3;
        const i2 = r2 && r2.params, a3 = s2 && s2.params, c2 = e2.find((t4) => t4.path === o3);
        return c2 === t3 && console.error(`${o3} is redirecting to itself`), c2 || console.error(`${t3.path} is redirecting to non-existent path: ${o3}`), (i2 || a3) && (c2.params = Object.assign({}, c2.params, i2, a3)), ie(c2, e2, n3, o3);
      }
      return {route: t3, redirectPath: n3, rewritePath: o3};
    }
    function ae(t3, e2, n3) {
      const o3 = t3.slice();
      return o3[1] = e2[n3], o3;
    }
    function ce(t3, e2) {
      let n3, o3;
      return {key: t3, first: null, c() {
        n3 = O("iframe"), n3.src !== (o3 = e2[1].url) && A(n3, "src", o3), A(n3, "frameborder", "0"), A(n3, "title", "routify prefetcher"), this.first = n3;
      }, m(t4, e3) {
        k(t4, n3, e3);
      }, p(t4, r2) {
        e2 = t4, 1 & r2 && n3.src !== (o3 = e2[1].url) && A(n3, "src", o3);
      }, d(t4) {
        t4 && P(n3);
      }};
    }
    function le(e2) {
      let n3, o3 = [], r2 = new Map(), s2 = e2[0];
      const i2 = (t3) => t3[1].options.prefetch;
      for (let t3 = 0; t3 < s2.length; t3 += 1) {
        let n4 = ae(e2, s2, t3), a3 = i2(n4);
        r2.set(a3, o3[t3] = ce(a3, n4));
      }
      return {c() {
        n3 = O("div");
        for (let t3 = 0; t3 < o3.length; t3 += 1)
          o3[t3].c();
        A(n3, "id", "__routify_iframes"), N(n3, "display", "none");
      }, m(t3, e3) {
        k(t3, n3, e3);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].m(n3, null);
      }, p(t3, [e3]) {
        1 & e3 && (s2 = t3[0], o3 = Lt(o3, e3, i2, 1, t3, s2, r2, n3, Rt, ce, null, ae));
      }, i: t2, o: t2, d(t3) {
        t3 && P(n3);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].d();
      }};
    }
    const ue = Xt([]);
    const fe = Yt(ue, (t3) => t3.slice(0, 2));
    function pe(t3) {
      const e2 = t3.data ? t3.data.prefetchId : t3;
      if (!e2)
        return null;
      const n3 = l(ue).find((t4) => t4 && t4.options.prefetch == e2);
      if (n3) {
        const {gracePeriod: t4} = n3.options, o3 = new Promise((e3) => setTimeout(e3, t4)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t4 + 1e3);
        });
        Promise.all([o3, r2]).then(() => {
          ue.update((t5) => t5.filter((t6) => t6.options.prefetch != e2));
        });
      }
    }
    function de(t3, e2, n3) {
      let o3;
      return u(t3, fe, (t4) => n3(0, o3 = t4)), [o3];
    }
    fe.subscribe((t3) => t3.forEach(({options: t4}) => {
      setTimeout(() => pe(t4.prefetch), t4.timeout);
    })), addEventListener("message", pe, false);
    class he extends Ct {
      constructor(t3) {
        super(), Nt(this, t3, de, le, a2, {});
      }
    }
    function me() {
      return tt("routify") || ne;
    }
    const ge = {_hooks: [(t3) => re.set(false)], subscribe: $e};
    const ye = {_hooks: [], subscribe: $e};
    function $e(t3) {
      const e2 = this._hooks, n3 = e2.length;
      return t3((t4) => {
        e2[n3] = t4;
      }), () => delete e2[n3];
    }
    const be = {subscribe: (t3) => Yt(me(), (t4) => t4.route.params).subscribe(t3)};
    const we = {subscribe: (t3) => Yt([me(), te, ee], (t4) => function(t5, e2, n3) {
      return function(o3, r2 = {}, s2) {
        const {component: i2} = t5, a3 = Object.assign({}, e2.params, i2.params);
        let c2 = o3 && o3.nodeType && o3;
        c2 && (o3 = o3.getAttribute("href")), o3 = o3 ? f2(o3) : i2.shortPath;
        const l2 = n3.find((t6) => [t6.shortPath || "/", t6.path].includes(o3));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t6 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t6);
        }
        s2 && s2.strict !== false || (o3 = o3.replace(/index$/, ""));
        let u2 = Jt(o3, r2, a3);
        return c2 ? (c2.href = u2, {update(t6) {
          c2.href = Jt(o3, t6, a3);
        }}) : u2;
        function f2(t6) {
          if (t6.match(/^\.\.?\//)) {
            let [, e3, n4] = t6.match(/^([\.\/]+)(.*)/), o4 = i2.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            i2.isPage && r3.push(null), r3.forEach(() => o4 = o4.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o4}/${n4}`.replace(/\/$/, "")) || "/";
          } else if (t6.match(/^\//))
            ;
          else {
            const e3 = n3.find((e4) => e4.meta.name === t6);
            e3 && (t6 = e3.shortPath);
          }
          return t6;
        }
      };
    }(...t4)).subscribe(t3)};
    const _e = {subscribe(t3) {
      const e2 = tt("routifyupdatepage");
      return Yt(we, (t4) => function(n3, o3, r2, s2) {
        const i2 = t4(n3, o3);
        r2 ? e2(i2, s2) : history.pushState({}, null, i2);
      }).subscribe(t3);
    }};
    const ve = {subscribe(t3) {
      const e2 = tt("routifyupdatepage");
      return Yt(we, (t4) => function(n3, o3, r2, s2) {
        const i2 = t4(n3, o3);
        r2 ? e2(i2, s2) : history.replaceState({}, null, i2);
      }).subscribe(t3);
    }};
    const xe = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e2) => [t3, (xe.getLongest(xe.templates, t3) || ((t4) => t4))(e2)]}, {name: "createMeta", condition: () => true, action(t3, e2) {
      xe.writeMeta(t3, e2);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e2) {
      xe.writeMeta(`og:${t3}`, e2);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e2) {
      document.title = e2;
    }}], getLongest(t3, e2) {
      const n3 = t3[e2];
      if (n3) {
        const o3 = l(te).path;
        return n3[Object.keys(t3[e2]).filter((t4) => o3.includes(t4)).sort((t4, e3) => e3.length - t4.length)[0]];
      }
    }, writeMeta(t3, e2) {
      const n3 = document.getElementsByTagName("head")[0], o3 = t3.match(/(.+)\:/), r2 = o3 && o3[1] || "plain", {propField: s2, valueField: i2} = ke.services[r2] || ke.services.plain, a3 = document.querySelector(`meta[${s2}='${t3}']`);
      a3 && a3.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s2, t3), c2.setAttribute(i2, e2), c2.setAttribute("data-origin", "routify"), n3.appendChild(c2);
    }, set(t3, e2) {
      xe.plugins.forEach((n3) => {
        n3.condition(t3, e2) && ([t3, e2] = n3.action(t3, e2) || [t3, e2]);
      });
    }, clear() {
      const t3 = document.querySelector("meta");
      t3 && t3.remove();
    }, template(t3, e2) {
      const n3 = xe.getOrigin();
      xe.templates[t3] = xe.templates[t3] || {}, xe.templates[t3][n3] = e2;
    }, update() {
      Object.keys(xe.props).forEach((t3) => {
        let e2 = xe.getLongest(xe.props, t3);
        xe.plugins.forEach((n3) => {
          n3.condition(t3, e2) && ([t3, e2] = n3.action(t3, e2) || [t3, e2]);
        });
      });
    }, batchedUpdate() {
      xe._pendingUpdate || (xe._pendingUpdate = true, setTimeout(() => {
        xe._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t3 = me();
      return t3 && l(t3).path || "/";
    }, _pendingUpdate: false};
    const ke = new Proxy(xe, {set(t3, e2, n3, o3) {
      const {props: r2, getOrigin: s2} = t3;
      return Reflect.has(t3, e2) ? Reflect.set(t3, e2, n3, o3) : (r2[e2] = r2[e2] || {}, r2[e2][s2()] = n3), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function Pe(t3, e2, n3) {
      const o3 = t3.slice();
      return o3[18] = e2[n3].component, o3[19] = e2[n3].componentFile, o3[2] = e2[n3].decorator, o3[1] = e2[n3].nodes, o3;
    }
    function Ee(t3) {
      let e2, n3, o3 = [], r2 = new Map(), s2 = [t3[4]];
      const i2 = (t4) => function({meta: t5, path: e3, param: n4, params: o4}) {
        return JSON.stringify({path: e3, param: (t5["param-is-page"] || t5["slug-is-page"]) && n4, queryParams: t5["query-params-is-page"] && o4});
      }(t4[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n4 = Pe(t3, s2, e3), a3 = i2(n4);
        r2.set(a3, o3[e3] = Re(a3, n4));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          o3[t4].c();
        e2 = I();
      }, m(t4, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].m(t4, r3);
        k(t4, e2, r3), n3 = true;
      }, p(t4, n4) {
        4194365 & n4 && (s2 = [t4[4]], _t(), o3 = Lt(o3, n4, i2, 1, t4, s2, r2, e2.parentNode, It, Re, e2, Pe), vt());
      }, i(t4) {
        if (!n3) {
          for (let t5 = 0; t5 < 1; t5 += 1)
            xt(o3[t5]);
          n3 = true;
        }
      }, o(t4) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          kt(o3[t5]);
        n3 = false;
      }, d(t4) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].d(t4);
        t4 && P(e2);
      }};
    }
    function Oe(t3) {
      let e2, n3;
      return e2 = new Ae({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[22]}}}), {c() {
        Tt(e2.$$.fragment);
      }, m(t4, o3) {
        Ft(e2, t4, o3), n3 = true;
      }, p(t4, n4) {
        const o3 = {};
        4 & n4 && (o3.decorator = t4[2]), 16 & n4 && (o3.nodes = [...t4[1]]), 4194305 & n4 && (o3.scoped = {...t4[0], ...t4[22]}), e2.$set(o3);
      }, i(t4) {
        n3 || (xt(e2.$$.fragment, t4), n3 = true);
      }, o(t4) {
        kt(e2.$$.fragment, t4), n3 = false;
      }, d(t4) {
        Mt(e2, t4);
      }};
    }
    function je(t3) {
      let e2, n3, o3 = t3[18] && t3[1].length && Oe(t3);
      return {c() {
        o3 && o3.c(), e2 = I();
      }, m(t4, r2) {
        o3 && o3.m(t4, r2), k(t4, e2, r2), n3 = true;
      }, p(t4, n4) {
        t4[18] && t4[1].length ? o3 ? (o3.p(t4, n4), 16 & n4 && xt(o3, 1)) : (o3 = Oe(t4), o3.c(), xt(o3, 1), o3.m(e2.parentNode, e2)) : o3 && (_t(), kt(o3, 1, 1, () => {
          o3 = null;
        }), vt());
      }, i(t4) {
        n3 || (xt(o3), n3 = true);
      }, o(t4) {
        kt(o3), n3 = false;
      }, d(t4) {
        o3 && o3.d(t4), t4 && P(e2);
      }};
    }
    function Se(t3) {
      let e2, o3, r2;
      const s2 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var i2 = t3[19];
      function a3(t4) {
        let e3 = {$$slots: {default: [je, ({scoped: t5, decorator: e4}) => ({22: t5, 2: e4}), ({scoped: t5, decorator: e4}) => (t5 ? 4194304 : 0) | (e4 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < s2.length; t5 += 1)
          e3 = n2(e3, s2[t5]);
        return {props: e3};
      }
      return i2 && (e2 = new i2(a3(t3))), {c() {
        e2 && Tt(e2.$$.fragment), o3 = R();
      }, m(t4, n3) {
        e2 && Ft(e2, t4, n3), k(t4, o3, n3), r2 = true;
      }, p(t4, n3) {
        const r3 = 41 & n3 ? function(t5, e3) {
          const n4 = {}, o4 = {}, r4 = {$$scope: 1};
          let s3 = t5.length;
          for (; s3--; ) {
            const i3 = t5[s3], a4 = e3[s3];
            if (a4) {
              for (const t6 in i3)
                t6 in a4 || (o4[t6] = 1);
              for (const t6 in a4)
                r4[t6] || (n4[t6] = a4[t6], r4[t6] = 1);
              t5[s3] = a4;
            } else
              for (const t6 in i3)
                r4[t6] = 1;
          }
          for (const t6 in o4)
            t6 in n4 || (n4[t6] = void 0);
          return n4;
        }(s2, [1 & n3 && {scoped: t4[0]}, 32 & n3 && {scopedSync: t4[5]}, 8 & n3 && (c2 = t4[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582933 & n3 && (r3.$$scope = {dirty: n3, ctx: t4}), i2 !== (i2 = t4[19])) {
          if (e2) {
            _t();
            const t5 = e2;
            kt(t5.$$.fragment, 1, 0, () => {
              Mt(t5, 1);
            }), vt();
          }
          i2 ? (e2 = new i2(a3(t4)), Tt(e2.$$.fragment), xt(e2.$$.fragment, 1), Ft(e2, o3.parentNode, o3)) : e2 = null;
        } else
          i2 && e2.$set(r3);
      }, i(t4) {
        r2 || (e2 && xt(e2.$$.fragment, t4), r2 = true);
      }, o(t4) {
        e2 && kt(e2.$$.fragment, t4), r2 = false;
      }, d(t4) {
        e2 && Mt(e2, t4), t4 && P(o3);
      }};
    }
    function Re(t3, e2) {
      let n3, o3, r2, s2;
      var i2 = e2[2];
      function a3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [Se]}, $$scope: {ctx: t4}}};
      }
      return i2 && (o3 = new i2(a3(e2))), {key: t3, first: null, c() {
        n3 = I(), o3 && Tt(o3.$$.fragment), r2 = I(), this.first = n3;
      }, m(t4, e3) {
        k(t4, n3, e3), o3 && Ft(o3, t4, e3), k(t4, r2, e3), s2 = true;
      }, p(t4, n4) {
        e2 = t4;
        const s3 = {};
        if (1 & n4 && (s3.scoped = e2[0]), 8388669 & n4 && (s3.$$scope = {dirty: n4, ctx: e2}), i2 !== (i2 = e2[2])) {
          if (o3) {
            _t();
            const t5 = o3;
            kt(t5.$$.fragment, 1, 0, () => {
              Mt(t5, 1);
            }), vt();
          }
          i2 ? (o3 = new i2(a3(e2)), Tt(o3.$$.fragment), xt(o3.$$.fragment, 1), Ft(o3, r2.parentNode, r2)) : o3 = null;
        } else
          i2 && o3.$set(s3);
      }, i(t4) {
        s2 || (o3 && xt(o3.$$.fragment, t4), s2 = true);
      }, o(t4) {
        o3 && kt(o3.$$.fragment, t4), s2 = false;
      }, d(t4) {
        t4 && P(n3), t4 && P(r2), o3 && Mt(o3, t4);
      }};
    }
    function Ie(e2) {
      let n3, o3, r2, s2, a3, c2 = e2[4] && Ee(e2);
      return {c() {
        c2 && c2.c(), n3 = R(), o3 = O("span");
      }, m(l2, u2) {
        var f2;
        c2 && c2.m(l2, u2), k(l2, n3, u2), k(l2, o3, u2), r2 = true, s2 || (f2 = e2[8].call(null, o3), a3 = f2 && i(f2.destroy) ? f2.destroy : t2, s2 = true);
      }, p(t3, [e3]) {
        t3[4] ? c2 ? (c2.p(t3, e3), 16 & e3 && xt(c2, 1)) : (c2 = Ee(t3), c2.c(), xt(c2, 1), c2.m(n3.parentNode, n3)) : c2 && (_t(), kt(c2, 1, 1, () => {
          c2 = null;
        }), vt());
      }, i(t3) {
        r2 || (xt(c2), r2 = true);
      }, o(t3) {
        kt(c2), r2 = false;
      }, d(t3) {
        c2 && c2.d(t3), t3 && P(n3), t3 && P(o3), s2 = false, a3();
      }};
    }
    function Le(t3, e2, n3) {
      let o3, r2, s2, i2;
      u(t3, te, (t4) => n3(14, s2 = t4));
      let a3, {nodes: c2 = []} = e2, {scoped: l2 = {}} = e2, {isRoot: f2 = false} = e2, {decorator: p2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = Xt(null);
      u(t3, g2, (t4) => n3(4, i2 = t4));
      const y2 = tt("routify");
      u(t3, y2, (t4) => n3(10, r2 = t4));
      function $2(t4) {
        n3(5, m2 = {...l2}), h2.length === 0 && async function() {
          await lt(), Ut(a3);
          const t5 = i2.component.path === s2.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e4, afterPageLoad: n4}) {
            const {path: o4} = t6, {options: r3} = Kt(), s3 = r3.prefetch;
            for (const e5 of n4._hooks)
              e5 && await e5(t6.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o4, prefetchId: s3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: i2.component, metatags: ke, afterPageLoad: ge});
        }();
        const e3 = {nodes: h2, decorator: p2 || Vt, layout: d2.isLayout ? d2 : o3 && o3.layout, component: d2, route: s2, componentFile: t4, parentNode: a3 || o3 && o3.parentNode};
        g2.set(e3), f2 && ne.set(e3);
      }
      return Y("routify", g2), t3.$$set = (t4) => {
        "nodes" in t4 && n3(1, c2 = t4.nodes), "scoped" in t4 && n3(0, l2 = t4.scoped), "isRoot" in t4 && n3(9, f2 = t4.isRoot), "decorator" in t4 && n3(2, p2 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o3 = r2), 2 & t3.$$.dirty && n3(3, [d2, ...h2] = c2, d2), 8 & t3.$$.dirty && function(t4) {
          let e3 = t4.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t3.$$.dirty && i2 && Ht(i2, lt);
      }, [l2, c2, p2, d2, i2, m2, g2, y2, (t4) => a3 = t4.parentNode, f2, r2];
    }
    class Ae extends Ct {
      constructor(t3) {
        super(), Nt(this, t3, Le, Ie, a2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function Te(t3, e2) {
      let n3 = false;
      function o3(o4, r3) {
        const s2 = se(o4 || Kt().fullpath);
        s2.redirectTo && (history.replaceStateNative({}, null, s2.redirectTo), delete s2.redirectTo);
        const i2 = [...(r3 && se(Kt().fullpath, t3) || s2).layouts, s2];
        n3 && delete n3.last, s2.last = n3, n3 = s2, o4 || oe.set(s2), te.set(s2), s2.api.preload().then(() => {
          re.set(true), e2(i2);
        });
      }
      const r2 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e4 = {}, n5, o4) {
            if (o4 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: s2, params: i2} = l(te);
            e4 = {id: r3, path: s2, params: i2, ...e4};
            const a3 = new Event(t5.toLowerCase());
            Object.assign(a3, {state: e4, title: n5, url: o4});
            return await Me(a3, o4) ? (history[t5 + "Native"].apply(this, [e4, n5, o4]), dispatchEvent(a3)) : void 0;
          };
        });
        let e3 = false;
        const n4 = {click: Fe, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n5) => {
          e3 ? e3 = false : await Me(n5, Kt().fullpath) ? t4() : (e3 = true, n5.preventDefault(), history.go(1));
        }};
        Object.entries(n4).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n4).forEach((t5) => removeEventListener(...t5));
        };
      }(o3);
      return {updatePage: o3, destroy: r2};
    }
    function Fe(t3) {
      const e2 = t3.target.closest("a"), n3 = e2 && e2.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n3 || e2.target || e2.host !== location.host)
        return;
      const o3 = new URL(n3), r2 = o3.pathname + o3.search + o3.hash;
      t3.preventDefault(), history.pushState({}, "", r2);
    }
    async function Me(t3, e2) {
      const n3 = se(e2).api;
      for (const o3 of ye._hooks.filter(Boolean)) {
        if (!await o3(t3, n3, {url: e2}))
          return false;
      }
      return true;
    }
    function Ne(t3) {
      let e2, n3;
      return e2 = new Ae({props: {nodes: t3[0], isRoot: true}}), {c() {
        Tt(e2.$$.fragment);
      }, m(t4, o3) {
        Ft(e2, t4, o3), n3 = true;
      }, p(t4, n4) {
        const o3 = {};
        1 & n4 && (o3.nodes = t4[0]), e2.$set(o3);
      }, i(t4) {
        n3 || (xt(e2.$$.fragment, t4), n3 = true);
      }, o(t4) {
        kt(e2.$$.fragment, t4), n3 = false;
      }, d(t4) {
        Mt(e2, t4);
      }};
    }
    function Ce(t3) {
      let e2, n3, o3, r2 = t3[0] && t3[1] !== null && Ne(t3);
      return n3 = new he({}), {c() {
        r2 && r2.c(), e2 = R(), Tt(n3.$$.fragment);
      }, m(t4, s2) {
        r2 && r2.m(t4, s2), k(t4, e2, s2), Ft(n3, t4, s2), o3 = true;
      }, p(t4, [n4]) {
        t4[0] && t4[1] !== null ? r2 ? (r2.p(t4, n4), 3 & n4 && xt(r2, 1)) : (r2 = Ne(t4), r2.c(), xt(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (_t(), kt(r2, 1, 1, () => {
          r2 = null;
        }), vt());
      }, i(t4) {
        o3 || (xt(r2), xt(n3.$$.fragment, t4), o3 = true);
      }, o(t4) {
        kt(r2), kt(n3.$$.fragment, t4), o3 = false;
      }, d(t4) {
        r2 && r2.d(t4), t4 && P(e2), Mt(n3, t4);
      }};
    }
    function qe(t3, e2, n3) {
      let o3;
      u(t3, te, (t4) => n3(1, o3 = t4));
      let r2, s2, {routes: i2} = e2, {config: a3 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(qt, a3);
      Y("routifyupdatepage", (...t4) => s2 && s2.updatePage(...t4));
      const c2 = (t4) => n3(0, r2 = t4), l2 = () => {
        s2 && (s2.destroy(), s2 = null);
      };
      let f2 = null;
      var p2;
      return p2 = l2, Q().$$.on_destroy.push(p2), t3.$$set = (t4) => {
        "routes" in t4 && n3(2, i2 = t4.routes), "config" in t4 && n3(3, a3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && i2 && (clearTimeout(f2), f2 = setTimeout(() => {
          l2(), s2 = Te(i2, c2), ee.set(i2), s2.updatePage();
        }));
      }, [r2, o3, i2, a3];
    }
    class Be extends Ct {
      constructor(t3) {
        super(), Nt(this, t3, qe, Ce, a2, {routes: 2, config: 3});
      }
    }
    function Ue(t3) {
      const e2 = async function(e3) {
        return await De(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return ze(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function De(t3, e2) {
      const n3 = await t3(e2);
      if (n3 === false)
        return false;
      const o3 = n3 || e2.file;
      if (o3.children) {
        const n4 = await Promise.all(o3.children.map(async (n5) => De(t3, {state: e2.state, scope: He(e2.scope || {}), parent: e2.file, file: await n5})));
        o3.children = n4.filter(Boolean);
      }
      return o3;
    }
    function ze(t3, e2) {
      const n3 = t3(e2);
      if (n3 === false)
        return false;
      const o3 = n3 || e2.file;
      if (o3.children) {
        const n4 = o3.children.map((n5) => ze(t3, {state: e2.state, scope: He(e2.scope || {}), parent: e2.file, file: n5}));
        o3.children = n4.filter(Boolean);
      }
      return o3;
    }
    function He(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const Ke = Ue(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e2) => {
        const n3 = e2 ? "" : "/?$";
        return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(Bt, "([^/]+)") + n3}`;
      })(t3.path, t3.isFallback));
    });
    const We = Ue(({file: t3}) => {
      t3.paramKeys = zt(t3.path);
    });
    const Je = Ue(({file: t3}) => {
      t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
    });
    const Ge = Ue(({file: t3}) => {
      t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
    });
    const Qe = Ue(({file: t3}) => {
      const e2 = t3, n3 = t3.meta && t3.meta.children || [];
      n3.length && (e2.children = e2.children || [], e2.children.push(...n3.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const Ve = Ue((t3) => {
      const {file: e2} = t3, {isFallback: n3, meta: o3} = e2, r2 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i2 = o3.index || o3.index === 0, a3 = o3.index === false;
      e2.isIndexable = i2 || !n3 && !r2 && !s2 && !a3, e2.isNonIndexable = !e2.isIndexable;
    });
    const Ze = Ue(({file: t3, parent: e2}) => {
      Object.defineProperty(t3, "parent", {get: () => e2}), Object.defineProperty(t3, "nextSibling", {get: () => Ye(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => Ye(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => Xe(e2)});
    });
    function Xe(t3, e2 = []) {
      return t3 && (e2.unshift(t3), Xe(t3.parent, e2)), e2;
    }
    function Ye(t3, e2) {
      if (!t3.root) {
        const n3 = t3.parent.children.filter((t4) => t4.isIndexable), o3 = n3.indexOf(t3);
        return n3[o3 + e2];
      }
    }
    const tn = Ue(({file: t3, parent: e2}) => {
      t3.isIndex && Object.defineProperty(e2, "index", {get: () => t3});
    });
    const en = Ue(({file: t3, scope: e2}) => {
      function n3(t4) {
        const {parent: e3} = t4, o3 = e3 && e3.component && e3, r2 = o3 && o3.isReset, s2 = e3 && !r2 && n3(e3) || [];
        return o3 && s2.push(o3), s2;
      }
      Object.defineProperty(t3, "layouts", {get: () => n3(t3)});
    });
    const nn = Ue(({file: t3}) => {
      const e2 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e2.prototype);
    });
    var on = Object.freeze({__proto__: null, setRegex: Ke, setParamKeys: We, setShortPath: Je, setRank: Ge, addMetaChildren: Qe, setIsIndexable: Ve, assignRelations: Ze, assignIndex: tn, assignLayout: en, createFlatList: (t3) => {
      Ue((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e2) => t4.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: nn});
    const rn = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function sn(t3) {
      return Object.entries(rn).forEach(([e2, n3]) => {
        t3[e2] === void 0 && (t3[e2] = n3);
      }), t3.children && (t3.children = t3.children.map(sn)), t3;
    }
    const an = Ue(({file: t3}) => {
      t3.api = new cn(t3);
    });
    class cn {
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
        return ln(this, 1);
      }
      get prev() {
        return ln(this, -1);
      }
      async preload() {
        const t3 = [...this.__file.layouts, this.__file].map((t4) => t4.component());
        await Promise.all(t3);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function ln(t3, e2) {
      if (!t3.__file.root) {
        const n3 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n3 + e2];
      }
    }
    const un = {...on, restoreDefaults: ({tree: t3}) => sn(t3), assignAPI: an};
    const fn = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_3b602e46())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery/index", id: "_gallery_index", component: () => Promise.resolve().then(() => __toModule(require_index_e6327fa2())).then((t3) => t3.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery"}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_75a207d2())).then((t3) => t3.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_1540f712())).then((t3) => t3.default)};
    const {tree: pn, routes: dn} = function(t3) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n3 = {tree: t3, routes: []};
      for (let t4 of e2) {
        (un[t4].sync || un[t4])(n3);
      }
      return n3;
    }(fn);
    function hn(e2) {
      let n3, o3;
      return n3 = new Be({props: {routes: dn}}), {c() {
        Tt(n3.$$.fragment);
      }, m(t3, e3) {
        Ft(n3, t3, e3), o3 = true;
      }, p: t2, i(t3) {
        o3 || (xt(n3.$$.fragment, t3), o3 = true);
      }, o(t3) {
        kt(n3.$$.fragment, t3), o3 = false;
      }, d(t3) {
        Mt(n3, t3);
      }};
    }
    !function(t3, e2 = {target: document.body}, n3 = "hmr", o3 = "app-loaded") {
      const r2 = document.getElementById(n3), s2 = document.createElement("div");
      function i2() {
        r2 && r2.remove(), s2.style.visibility = null, s2.setAttribute("id", n3);
      }
      s2.style.visibility = "hidden", e2.target.appendChild(s2), r2 ? addEventListener(o3, i2) : i2(), new t3({...e2, target: s2});
    }(class extends Ct {
      constructor(t3) {
        super(), Nt(this, t3, null, hn, a2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/index-c04e03b0.js
  const main = __toModule(require_main());
  function n(t2) {
    const n2 = t2 - 1;
    return n2 * n2 * n2 + 1;
  }
  function a(n2, {delay: a2 = 0, duration: o2 = 400, easing: e = main.E} = {}) {
    const r = +getComputedStyle(n2).opacity;
    return {delay: a2, duration: o2, easing: e, css: (t2) => "opacity: " + t2 * r};
  }
  function o(t2, {delay: a2 = 0, duration: o2 = 400, easing: e = n, x: r = 0, y: s = 0, opacity: i = 0} = {}) {
    const c = getComputedStyle(t2), u = +c.opacity, y = c.transform === "none" ? "" : c.transform, p = u * (1 - i);
    return {delay: a2, duration: o2, easing: e, css: (t3, n2) => `
			transform: ${y} translate(${(1 - t3) * r}px, ${(1 - t3) * s}px);
			opacity: ${u - p * n2}`};
  }
  require_main();
})();
