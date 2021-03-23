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

  // dist/build/_fallback-cee8d085.js
  var require_fallback_cee8d085 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_cee8d085_default
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
    class fallback_cee8d085_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, g, v, main2.s, {});
      }
    }
  });

  // dist/build/index-4bf77cab.js
  var require_index_4bf77cab = __commonJS((exports) => {
    __export(exports, {
      default: () => index_4bf77cab_default
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
      let t3, n2, c2, i2, d2, r2, m2 = e2[15] + "", b2 = e2[3][e2[15]], w2 = [];
      for (let t4 = 0; t4 < b2.length; t4 += 1)
        w2[t4] = Y(X(e2, b2, t4));
      const $2 = (e3) => main2.v(w2[e3], 1, 1, () => {
        w2[e3] = null;
      });
      return {c() {
        t3 = main2.e("h3"), n2 = main2.t(m2), c2 = main2.a(), i2 = main2.e("ul");
        for (let e3 = 0; e3 < w2.length; e3 += 1)
          w2[e3].c();
        d2 = main2.a(), main2.b(t3, "class", "bg-white p-2 text-2xl text-center"), main2.b(i2, "class", "flex flex-wrap");
      }, m(e3, a3) {
        main2.c(e3, t3, a3), main2.d(t3, n2), main2.c(e3, c2, a3), main2.c(e3, i2, a3);
        for (let e4 = 0; e4 < w2.length; e4 += 1)
          w2[e4].m(i2, null);
        main2.d(i2, d2), r2 = true;
      }, p(e3, t4) {
        if ((!r2 || 16 & t4) && m2 !== (m2 = e3[15] + "") && main2.o(n2, m2), 24 & t4) {
          let n3;
          for (b2 = e3[3][e3[15]], n3 = 0; n3 < b2.length; n3 += 1) {
            const a3 = X(e3, b2, n3);
            w2[n3] ? (w2[n3].p(a3, t4), main2.p(w2[n3], 1)) : (w2[n3] = Y(a3), w2[n3].c(), main2.p(w2[n3], 1), w2[n3].m(i2, d2));
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
        e3 && main2.f(t3), e3 && main2.f(c2), e3 && main2.f(i2), main2.y(w2, e3);
      }};
    }
    function F(e2) {
      let t3, n2, c2, o2, d2, r2, m2 = false, g2 = () => {
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
        c2 = main2.z(n2, e2[10].bind(n2)), o2 = true, d2 || (r2 = [main2.A(window, "scroll", e2[5]), main2.A(window, "scroll", () => {
          m2 = true, clearTimeout(t3), t3 = C(g2, 100), e2[8]();
        }), main2.A(window, "resize", e2[9])], d2 = true);
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
        e3 && main2.f(n2), main2.y(h2, e3), c2(), d2 = false, main2.B(r2);
      }};
    }
    function G(e2, t3, n2) {
      let a3, c2, l2;
      const s2 = [{date: "2021-03-21", name: "b90d39624e131102cd037536ae52686a.jpeg", n: "6"}, {date: "2021-03-21", name: "94cf5360320d40e1d3142cea84f99081.jpeg", n: "7"}, {date: "2021-03-21", name: "90384e791c8d1adc105a4f0ea6d68d3c.jpeg", n: "8"}, {date: "2021-03-21", name: "34932e3f9c24f95a5fcf0019d8231ac3.jpeg", n: "9"}, {date: "2021-03-21", name: "ead6e6f71df1d2d175a97fbda10576ed.jpeg", n: "9"}, {date: "2021-03-21", name: "c3281576e74db5c6933abe9df5935ab9.jpeg", n: "11"}, {date: "2021-03-21", name: "3e6e3d9f314bf90df5ff422d07687322.jpeg", n: "12"}, {date: "2021-03-21", name: "6b27979497b3a8efb71a90302fefad1a.jpeg", n: "12"}, {date: "2021-03-21", name: "a75b6b26a62405c797a95cef04c5fe68.jpeg", n: "12"}, {date: "2021-03-21", name: "b4b37951916017cda21c57f599c1ed0d.jpeg", n: "12"}, {date: "2021-03-21", name: "dec6537c06b004488ca6c1b613be5b28.jpeg", n: "12"}, {date: "2021-03-21", name: "e2791622abdcffa0f3f0f756c37567db.jpeg", n: "12"}];
      let o2 = s2.concat(s2).concat(s2).concat(s2).concat(s2), i2 = 1;
      let d2, f2, r2 = 0, m2 = false;
      return e2.$$.update = () => {
        64 & e2.$$.dirty && n2(7, a3 = o2 && o2.slice(0, 6 * i2)), 128 & e2.$$.dirty && n2(3, c2 = a3.reduce((e3, t4) => (e3[t4.date] == null && (e3[t4.date] = []), e3[t4.date].push(t4), e3), {}));
      }, n2(4, l2 = [...new Set(o2.map((e3) => e3.date))].sort()), [r2, d2, f2, c2, l2, function() {
        d2 + r2 + 10 > f2 && !m2 && (m2 = true, setTimeout(() => {
          n2(6, i2 += 1), m2 = false;
        }, 300));
      }, i2, a3, function() {
        n2(0, r2 = window.pageYOffset);
      }, function() {
        n2(1, d2 = window.innerHeight);
      }, function() {
        f2 = this.clientHeight, n2(2, f2);
      }];
    }
    class index_4bf77cab_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, G, F, main2.s, {});
      }
    }
  });

  // dist/build/index-361dd333.js
  var require_index_361dd333 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_361dd333_default
    });
    const main2 = __toModule(require_main());
    function Z(t3) {
      let e2, n2, d2, b2, k2, M2, _2, C2, O2, S2, j2, L2 = t3[0].closeButton && Q(t3);
      var I2 = t3[1];
      return I2 && (M2 = new I2({})), {c() {
        e2 = main2.e("div"), n2 = main2.e("div"), d2 = main2.e("div"), L2 && L2.c(), b2 = main2.a(), k2 = main2.e("div"), M2 && main2.q(M2.$$.fragment), main2.b(k2, "class", "content svelte-1jadkpy"), main2.b(k2, "style", t3[12]), main2.b(d2, "class", "window svelte-1jadkpy"), main2.b(d2, "role", "dialog"), main2.b(d2, "aria-modal", "true"), main2.b(d2, "style", t3[11]), main2.b(n2, "class", "window-wrap svelte-1jadkpy"), main2.b(n2, "style", t3[10]), main2.b(e2, "class", "bg svelte-1jadkpy"), main2.b(e2, "style", t3[9]);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(n2, d2), L2 && L2.m(d2, null), main2.d(d2, b2), main2.d(d2, k2), M2 && main2.r(M2, k2, null), t3[37](d2), t3[38](n2), t3[39](e2), O2 = true, S2 || (j2 = [main2.A(d2, "introstart", function() {
          main2.F(t3[5]) && t3[5].apply(this, arguments);
        }), main2.A(d2, "outrostart", function() {
          main2.F(t3[6]) && t3[6].apply(this, arguments);
        }), main2.A(d2, "introend", function() {
          main2.F(t3[7]) && t3[7].apply(this, arguments);
        }), main2.A(d2, "outroend", function() {
          main2.F(t3[8]) && t3[8].apply(this, arguments);
        }), main2.A(e2, "click", t3[19])], S2 = true);
      }, p(r2, s2) {
        if ((t3 = r2)[0].closeButton ? L2 ? (L2.p(t3, s2), 1 & s2[0] && main2.p(L2, 1)) : (L2 = Q(t3), L2.c(), main2.p(L2, 1), L2.m(d2, b2)) : L2 && (main2.D(), main2.v(L2, 1, 1, () => {
          L2 = null;
        }), main2.x()), I2 !== (I2 = t3[1])) {
          if (M2) {
            main2.D();
            const t4 = M2;
            main2.v(t4.$$.fragment, 1, 0, () => {
              main2.w(t4, 1);
            }), main2.x();
          }
          I2 ? (M2 = new I2({}), main2.q(M2.$$.fragment), main2.p(M2.$$.fragment, 1), main2.r(M2, k2, null)) : M2 = null;
        }
        (!O2 || 4096 & s2[0]) && main2.b(k2, "style", t3[12]), (!O2 || 2048 & s2[0]) && main2.b(d2, "style", t3[11]), (!O2 || 1024 & s2[0]) && main2.b(n2, "style", t3[10]), (!O2 || 512 & s2[0]) && main2.b(e2, "style", t3[9]);
      }, i(n3) {
        O2 || (main2.p(L2), M2 && main2.p(M2.$$.fragment, n3), main2.j(() => {
          _2 || (_2 = main2.k(d2, t3[15], t3[0].transitionWindowProps, true)), _2.run(1);
        }), main2.j(() => {
          C2 || (C2 = main2.k(e2, t3[14], t3[0].transitionBgProps, true)), C2.run(1);
        }), O2 = true);
      }, o(n3) {
        main2.v(L2), M2 && main2.v(M2.$$.fragment, n3), _2 || (_2 = main2.k(d2, t3[15], t3[0].transitionWindowProps, false)), _2.run(0), C2 || (C2 = main2.k(e2, t3[14], t3[0].transitionBgProps, false)), C2.run(0), O2 = false;
      }, d(n3) {
        n3 && main2.f(e2), L2 && L2.d(), M2 && main2.w(M2), t3[37](null), n3 && _2 && _2.end(), t3[38](null), t3[39](null), n3 && C2 && C2.end(), S2 = false, main2.B(j2);
      }};
    }
    function Q(t3) {
      let e2, n2, r2, s2, o2;
      const c2 = [X, U], l2 = [];
      function a3(t4, n3) {
        return 1 & n3[0] && (e2 = !!t4[16](t4[0].closeButton)), e2 ? 0 : 1;
      }
      return n2 = a3(t3, [-1]), r2 = l2[n2] = c2[n2](t3), {c() {
        r2.c(), s2 = main2.G();
      }, m(t4, e3) {
        l2[n2].m(t4, e3), main2.c(t4, s2, e3), o2 = true;
      }, p(t4, e3) {
        let o3 = n2;
        n2 = a3(t4, e3), n2 === o3 ? l2[n2].p(t4, e3) : (main2.D(), main2.v(l2[o3], 1, 1, () => {
          l2[o3] = null;
        }), main2.x(), r2 = l2[n2], r2 ? r2.p(t4, e3) : (r2 = l2[n2] = c2[n2](t4), r2.c()), main2.p(r2, 1), r2.m(s2.parentNode, s2));
      }, i(t4) {
        o2 || (main2.p(r2), o2 = true);
      }, o(t4) {
        main2.v(r2), o2 = false;
      }, d(t4) {
        l2[n2].d(t4), t4 && main2.f(s2);
      }};
    }
    function U(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("button"), main2.b(e2, "class", "close svelte-1jadkpy"), main2.b(e2, "style", t3[13]);
      }, m(r2, o2) {
        main2.c(r2, e2, o2), n2 || (s2 = main2.A(e2, "click", t3[17]), n2 = true);
      }, p(t4, n3) {
        8192 & n3[0] && main2.b(e2, "style", t4[13]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), n2 = false, s2();
      }};
    }
    function X(t3) {
      let e2, n2, r2;
      var s2 = t3[0].closeButton;
      function o2(t4) {
        return {props: {onClose: t4[17]}};
      }
      return s2 && (e2 = new s2(o2(t3))), {c() {
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
          s2 ? (e2 = new s2(o2(t4)), main2.q(e2.$$.fragment), main2.p(e2.$$.fragment, 1), main2.r(e2, n2.parentNode, n2)) : e2 = null;
        }
      }, i(t4) {
        r2 || (e2 && main2.p(e2.$$.fragment, t4), r2 = true);
      }, o(t4) {
        e2 && main2.v(e2.$$.fragment, t4), r2 = false;
      }, d(t4) {
        t4 && main2.f(n2), e2 && main2.w(e2, t4);
      }};
    }
    function Y(t3) {
      let e2, n2, r2, o2, c2 = t3[1] && Z(t3);
      const a3 = t3[36].default, d2 = main2.H(a3, t3, t3[35], null);
      return {c() {
        c2 && c2.c(), e2 = main2.a(), d2 && d2.c();
      }, m(s2, a4) {
        c2 && c2.m(s2, a4), main2.c(s2, e2, a4), d2 && d2.m(s2, a4), n2 = true, r2 || (o2 = main2.A(window, "keydown", t3[18]), r2 = true);
      }, p(t4, n3) {
        t4[1] ? c2 ? (c2.p(t4, n3), 2 & n3[0] && main2.p(c2, 1)) : (c2 = Z(t4), c2.c(), main2.p(c2, 1), c2.m(e2.parentNode, e2)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x()), d2 && d2.p && 16 & n3[1] && main2.I(d2, a3, t4, t4[35], n3, null, null);
      }, i(t4) {
        n2 || (main2.p(c2), main2.p(d2, t4), n2 = true);
      }, o(t4) {
        main2.v(c2), main2.v(d2, t4), n2 = false;
      }, d(t4) {
        c2 && c2.d(t4), t4 && main2.f(e2), d2 && d2.d(t4), r2 = false, o2();
      }};
    }
    function G(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, {$$slots: u2 = {}, $$scope: d2} = e2;
      const h2 = main2.J(), f2 = main2.K;
      let {show: p2 = null} = e2, {key: g2 = "simple-modal"} = e2, {closeButton: m2 = true} = e2, {closeOnEsc: $2 = true} = e2, {closeOnOuterClick: y2 = true} = e2, {styleBg: w2 = {top: 0, left: 0}} = e2, {styleWindowWrap: v2 = {}} = e2, {styleWindow: x2 = {}} = e2, {styleContent: b2 = {}} = e2, {styleCloseButton: k2 = {}} = e2, {setContext: _2 = f2} = e2, {transitionBg: S2 = a} = e2, {transitionBgProps: j2 = {duration: 250}} = e2, {transitionWindow: L2 = S2} = e2, {transitionWindowProps: I2 = j2} = e2;
      const P2 = {closeButton: m2, closeOnEsc: $2, closeOnOuterClick: y2, styleBg: w2, styleWindowWrap: v2, styleWindow: x2, styleContent: b2, styleCloseButton: k2, transitionBg: S2, transitionBgProps: j2, transitionWindow: L2, transitionWindowProps: I2};
      let B2, A2, E2, z2 = {...P2}, W2 = null;
      const N2 = (t4) => Object.keys(t4).reduce((e3, n3) => `${e3}; ${((t5) => t5.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(n3)}: ${t4[n3]}`, ""), R2 = (t4) => !!(t4 && t4.constructor && t4.call && t4.apply), F2 = () => {
      };
      let D2 = F2, T2 = F2, J2 = F2, V2 = F2;
      const q2 = (t4, e3 = {}, r3 = {}, s3 = {}) => {
        n2(1, W2 = function(t5, e4 = {}) {
          return function(n3) {
            return new t5({...n3, props: {...e4, ...n3.props}});
          };
        }(t4, e3)), n2(0, z2 = {...P2, ...r3}), n2(5, D2 = (t5) => {
          s3.onOpen && s3.onOpen(t5), h2("opening");
        }), n2(6, T2 = (t5) => {
          s3.onClose && s3.onClose(t5), h2("closing");
        }), n2(7, J2 = (t5) => {
          s3.onOpened && s3.onOpened(t5), h2("opened");
        }), n2(8, V2 = (t5) => {
          s3.onClosed && s3.onClosed(t5), h2("closed");
        });
      }, H2 = (t4 = {}) => {
        n2(6, T2 = t4.onClose || T2), n2(8, V2 = t4.onClosed || V2), n2(1, W2 = null);
      };
      return _2(g2, {open: q2, close: H2}), t3.$$set = (t4) => {
        "show" in t4 && n2(20, p2 = t4.show), "key" in t4 && n2(21, g2 = t4.key), "closeButton" in t4 && n2(22, m2 = t4.closeButton), "closeOnEsc" in t4 && n2(23, $2 = t4.closeOnEsc), "closeOnOuterClick" in t4 && n2(24, y2 = t4.closeOnOuterClick), "styleBg" in t4 && n2(25, w2 = t4.styleBg), "styleWindowWrap" in t4 && n2(26, v2 = t4.styleWindowWrap), "styleWindow" in t4 && n2(27, x2 = t4.styleWindow), "styleContent" in t4 && n2(28, b2 = t4.styleContent), "styleCloseButton" in t4 && n2(29, k2 = t4.styleCloseButton), "setContext" in t4 && n2(30, _2 = t4.setContext), "transitionBg" in t4 && n2(31, S2 = t4.transitionBg), "transitionBgProps" in t4 && n2(32, j2 = t4.transitionBgProps), "transitionWindow" in t4 && n2(33, L2 = t4.transitionWindow), "transitionWindowProps" in t4 && n2(34, I2 = t4.transitionWindowProps), "$$scope" in t4 && n2(35, d2 = t4.$$scope);
      }, t3.$$.update = () => {
        1 & t3.$$.dirty[0] && n2(9, r2 = N2(z2.styleBg)), 1 & t3.$$.dirty[0] && n2(10, s2 = N2(z2.styleWindowWrap)), 1 & t3.$$.dirty[0] && n2(11, o2 = N2(z2.styleWindow)), 1 & t3.$$.dirty[0] && n2(12, i2 = N2(z2.styleContent)), 1 & t3.$$.dirty[0] && n2(13, c2 = N2(z2.styleCloseButton)), 1 & t3.$$.dirty[0] && n2(14, l2 = z2.transitionBg), 1 & t3.$$.dirty[0] && n2(15, a3 = z2.transitionWindow), 1048576 & t3.$$.dirty[0] && (R2(p2) ? q2(p2) : H2());
      }, [z2, W2, B2, A2, E2, D2, T2, J2, V2, r2, s2, o2, i2, c2, l2, a3, R2, H2, (t4) => {
        if (z2.closeOnEsc && W2 && t4.key === "Escape" && (t4.preventDefault(), H2()), W2 && t4.key === "Tab") {
          const e3 = E2.querySelectorAll("*"), n3 = Array.from(e3).filter((t5) => t5.tabIndex >= 0);
          let r3 = n3.indexOf(document.activeElement);
          r3 === -1 && t4.shiftKey && (r3 = 0), r3 += n3.length + (t4.shiftKey ? -1 : 1), r3 %= n3.length, n3[r3].focus(), t4.preventDefault();
        }
      }, (t4) => {
        !z2.closeOnOuterClick || t4.target !== B2 && t4.target !== A2 || (t4.preventDefault(), H2());
      }, p2, g2, m2, $2, y2, w2, v2, x2, b2, k2, _2, S2, j2, L2, I2, d2, u2, function(t4) {
        main2.m[t4 ? "unshift" : "push"](() => {
          E2 = t4, n2(4, E2);
        });
      }, function(t4) {
        main2.m[t4 ? "unshift" : "push"](() => {
          A2 = t4, n2(3, A2);
        });
      }, function(t4) {
        main2.m[t4 ? "unshift" : "push"](() => {
          B2 = t4, n2(2, B2);
        });
      }];
    }
    class tt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, G, Y, main2.s, {show: 20, key: 21, closeButton: 22, closeOnEsc: 23, closeOnOuterClick: 24, styleBg: 25, styleWindowWrap: 26, styleWindow: 27, styleContent: 28, styleCloseButton: 29, setContext: 30, transitionBg: 31, transitionBgProps: 32, transitionWindow: 33, transitionWindowProps: 34}, [-1, -1]);
      }
    }
    const et = {value: null, color: null};
    const nt = {value: "\u{1F496}", color: "#fff"};
    const rt = [{value: "\uAD8C\uC740\uBE44", color: "#bbb0dc"}, {value: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", color: "#f1d2e7"}, {value: "\uAC15\uD61C\uC6D0", color: "#db706c"}, {value: "\uCD5C\uC608\uB098", color: "#fcf695"}, {value: "\uC774\uCC44\uC5F0", color: "#a7e0e1"}, {value: "\uAE40\uCC44\uC6D0", color: "#cee5d5"}, {value: "\uC57C\uBD80\uD0A4 \uB098\uCF54", color: "#b7d3e9"}, {value: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", color: "#f1c3aa"}, {value: "\uAE40\uBBFC\uC8FC", color: "#fff"}, {value: "\uC870\uC720\uB9AC", color: "#f3aa51"}, {value: "\uC548\uC720\uC9C4", color: "#567ace"}, {value: "\uC7A5\uC6D0\uC601", color: "#d9598c"}, {value: "\uC6B4\uC601\uD300", color: "gray"}];
    let st;
    let ot = main2.L(function() {
      let t3 = rt.reduce((t4, e3) => (t4.set(e3.value, e3), t4), new Map([["\u{1F496}", nt]]));
      const e2 = localStorage.getItem("all_tag_dict");
      return e2 && (console.log("all tag backup loaded"), t3 = [...t3].reduce((t4, e3) => (t4.set(e3[0], e3[1]), t4), new Map(JSON.parse(e2)))), t3;
    }());
    ot.subscribe((t3) => {
      var e2;
      localStorage.setItem("all_tag_dict", (e2 = t3, JSON.stringify([...e2])));
    }), ot.subscribe((t3) => {
      st = (e2) => {
        const n2 = e2.map((e3) => [e3[0], new Set(e3[1].map((e4) => t3.get(e4)))]);
        return new Map(n2);
      };
    });
    let it = main2.L((() => {
      const t3 = localStorage.getItem("mail_to_tag_dict");
      let e2 = new Map([["m0", new Set([nt])]]);
      if (t3) {
        const n2 = JSON.parse(t3);
        e2 = st(n2);
      }
      return e2;
    })());
    function ct(t3) {
      return [...t3].map((t4) => [t4[0], [...t4[1]].map((t5) => t5.value)]);
    }
    it.subscribe((t3) => {
      if (!t3)
        return null;
      [...t3].forEach((t4) => {
        t4[1].size == 0 && it.update((e3) => (e3.delete(t4[0]), e3));
      });
      const e2 = ct(t3);
      localStorage.setItem("mail_to_tag_dict", JSON.stringify(e2));
    });
    let lt;
    let at = main2.L("");
    let ut = main2.L(Math.floor(12 * Math.random()));
    let dt = main2.L({color: null, value: null});
    ot.subscribe((t3) => {
      lt = (e2) => new Map(e2.map((e3) => [t3.get(e3[0]), new Set(e3[1])]));
    });
    let ht = main2.L((() => {
      let t3 = rt.reduce((t4, e3) => (t4.set(e3, new Set()), t4), new Map([[nt, new Set()]]));
      const e2 = localStorage.getItem("tag_to_mail_dict");
      if (e2) {
        const n2 = JSON.parse(e2);
        t3 = [...lt(n2)].reduce((t4, e3) => (t4.set(e3[0], e3[1]), t4), t3);
      }
      return t3;
    })());
    function ft(t3) {
      return [...t3].map((t4) => [t4[0].value, [...t4[1]]]);
    }
    ht.subscribe((t3) => {
      if ([...t3].forEach(([t4, e3]) => {
        if (e3.size == 0 && t4.value != "\u{1F496}" && !rt.includes(t4)) {
          const e4 = t4.value;
          ht.update((e5) => (e5.delete(t4), e5)), dt.update((e5) => e5 == t4 ? et : e5), ot.update((t5) => (t5.delete(e4), t5));
        }
      }), !t3)
        return null;
      const e2 = ft(t3);
      localStorage.setItem("tag_to_mail_dict", JSON.stringify(e2));
    });
    let pt = main2.L([{id: "", member: "", time: "", subject: "", preview: "", n: 1}]);
    let gt = main2.L({id: "m20731", member: "\uAD11\uBC30", time: "2021/03/09 19:23", subject: "\uC0AC\uD0D5", preview: "\uC704\uC988\uC6D0 \uC0AC\uD0D5 \uD478\uB529 \uB9DB \uC788\uB294\uAC70 \uC54C\uC558\uC5B4?? \uB9DB\uC788\uC5B4\uBCF4\uC5EC\uC11C \uC0AC\uC11C \uC5B8\uC81C\uBA39\uC744\uC9C0 \uACE0\uBBFC\uC911\uC774\uC57C ."});
    let mt = main2.L("");
    let $t = main2.M(mt, (t3) => "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + t3.replace(/\&nbsp;<\/div>/g, "\n").replace(/<\/div>/g, "\n").replace(/&nbsp;/g, "").replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "").replace(/\n\n/g, "\n").replace(/\n/g, "%0A"));
    let yt = main2.L(1);
    let wt = main2.L(true);
    let vt = main2.L(true);
    let xt = main2.M(vt, (t3) => !t3);
    function bt(t3) {
      let e2, n2, s2, c2;
      const d2 = t3[3].default, h2 = main2.H(d2, t3, t3[2], null);
      return {c() {
        e2 = main2.e("button"), h2 && h2.c(), main2.b(e2, "id", t3[1]), main2.b(e2, "class", "rounded bg-red-100 m-2 pl-1 pr-1");
      }, m(r2, o2) {
        main2.c(r2, e2, o2), h2 && h2.m(e2, null), n2 = true, s2 || (c2 = main2.A(e2, "click", function() {
          main2.F(t3[0]) && t3[0].apply(this, arguments);
        }), s2 = true);
      }, p(r2, [s3]) {
        t3 = r2, h2 && h2.p && 4 & s3 && main2.I(h2, d2, t3, t3[2], s3, null, null), (!n2 || 2 & s3) && main2.b(e2, "id", t3[1]);
      }, i(t4) {
        n2 || (main2.p(h2, t4), n2 = true);
      }, o(t4) {
        main2.v(h2, t4), n2 = false;
      }, d(t4) {
        t4 && main2.f(e2), h2 && h2.d(t4), s2 = false, c2();
      }};
    }
    function kt(t3, e2, n2) {
      let {$$slots: r2 = {}, $$scope: s2} = e2, {onClick: o2} = e2, {id: i2} = e2;
      return t3.$$set = (t4) => {
        "onClick" in t4 && n2(0, o2 = t4.onClick), "id" in t4 && n2(1, i2 = t4.id), "$$scope" in t4 && n2(2, s2 = t4.$$scope);
      }, [o2, i2, s2, r2];
    }
    class Mt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, kt, bt, main2.s, {onClick: 0, id: 1});
      }
    }
    function _t(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[10] = e2[n2], r2;
    }
    function Ct(t3) {
      let e2, n2, a3, u2, d2, h2, f2, p2 = t3[10].value + "";
      return {c() {
        e2 = main2.e("label"), n2 = main2.e("input"), a3 = main2.a(), u2 = main2.t(p2), d2 = main2.a(), main2.b(n2, "type", "radio"), n2.__value = t3[10].color, n2.value = n2.__value, t3[8][0].push(n2), main2.h(e2, "background-color", t3[10].color), main2.b(e2, "class", (t3[10].color == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-0.5 pl-1 pr-1.5");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), n2.checked = n2.__value === t3[1], main2.d(e2, a3), main2.d(e2, u2), main2.d(e2, d2), h2 || (f2 = main2.A(n2, "change", t3[7]), h2 = true);
      }, p(t4, e3) {
        2 & e3 && (n2.checked = n2.__value === t4[1]);
      }, d(r2) {
        r2 && main2.f(e2), t3[8][0].splice(t3[8][0].indexOf(n2), 1), h2 = false, f2();
      }};
    }
    function Ot(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uACB0\uC815\uD588\uC5B4\uC694!");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function St(t3) {
      let e2, n2, a3, d2, h2, p2, w2, v2, x2, b2, k2, M2, _2 = t3[3], C2 = [];
      for (let e3 = 0; e3 < _2.length; e3 += 1)
        C2[e3] = Ct(_t(t3, _2, e3));
      return x2 = new Mt({props: {onClick: t3[2], $$slots: {default: [Ot]}, $$scope: {ctx: t3}}}), {c() {
        e2 = main2.e("div"), n2 = main2.e("h3"), n2.textContent = "\uD0DC\uADF8 \uC218\uC815", a3 = main2.a(), d2 = main2.e("input"), p2 = main2.a(), w2 = main2.e("div");
        for (let t4 = 0; t4 < C2.length; t4 += 1)
          C2[t4].c();
        v2 = main2.a(), main2.q(x2.$$.fragment), main2.b(n2, "class", "svelte-qli48t"), main2.b(d2, "type", "text"), main2.h(d2, "background-color", t3[1]), main2.h(d2, "text-align", "center"), main2.b(d2, "class", h2 = (t3[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20"), main2.h(e2, "text-align", "center"), main2.b(w2, "class", "flex flex-wrap p-1");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(e2, a3), main2.d(e2, d2), main2.N(d2, t3[0]), main2.c(r2, p2, s2), main2.c(r2, w2, s2);
        for (let t4 = 0; t4 < C2.length; t4 += 1)
          C2[t4].m(w2, null);
        main2.c(r2, v2, s2), main2.r(x2, r2, s2), b2 = true, k2 || (M2 = main2.A(d2, "input", t3[6]), k2 = true);
      }, p(t4, [e3]) {
        if ((!b2 || 2 & e3) && main2.h(d2, "background-color", t4[1]), (!b2 || 2 & e3 && h2 !== (h2 = (t4[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20")) && main2.b(d2, "class", h2), 1 & e3 && d2.value !== t4[0] && main2.N(d2, t4[0]), 10 & e3) {
          let n4;
          for (_2 = t4[3], n4 = 0; n4 < _2.length; n4 += 1) {
            const r2 = _t(t4, _2, n4);
            C2[n4] ? C2[n4].p(r2, e3) : (C2[n4] = Ct(r2), C2[n4].c(), C2[n4].m(w2, null));
          }
          for (; n4 < C2.length; n4 += 1)
            C2[n4].d(1);
          C2.length = _2.length;
        }
        const n3 = {};
        4 & e3 && (n3.onClick = t4[2]), 8192 & e3 && (n3.$$scope = {dirty: e3, ctx: t4}), x2.$set(n3);
      }, i(t4) {
        b2 || (main2.p(x2.$$.fragment, t4), b2 = true);
      }, o(t4) {
        main2.v(x2.$$.fragment, t4), b2 = false;
      }, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(p2), t4 && main2.f(w2), main2.y(C2, t4), t4 && main2.f(v2), main2.w(x2, t4), k2 = false, M2();
      }};
    }
    function jt(t3, e2, n2) {
      let r2, s2;
      main2.g(t3, ot, (t4) => n2(5, s2 = t4));
      let {tag: o2} = e2, i2 = o2.value, c2 = o2.color;
      const {close: l2} = main2.O("simple-modal");
      return t3.$$set = (t4) => {
        "tag" in t4 && n2(4, o2 = t4.tag);
      }, t3.$$.update = () => {
        51 & t3.$$.dirty && n2(2, r2 = () => {
          const t4 = s2.get(o2.value);
          s2.delete(t4.value), t4.value = i2, t4.color = c2, s2.set(i2, t4), ot.set(s2), l2();
        });
      }, [i2, c2, r2, [{value: "\uC218\uB193\uC740\uBCC4\uBE5B", color: "#bbb0dc"}, {value: "\uBC9A\uAF43\uD551\uD06C", color: "#f1d2e7"}, {value: "\uAC15\uCF54\uB784", color: "#db706c"}, {value: "\uC60C\uB85C\uC6B0", color: "#fcf695"}, {value: "\uCC48\uBA54\uB784\uB4DC", color: "#a7e0e1"}, {value: "\uCC54\uBB34", color: "#cee5d5"}, {value: "\uB098\uBD80\uD0A4\uD558\uB298", color: "#b7d3e9"}, {value: "\uD1A0\uBBF8\uBCA0\uC774\uC9C0", color: "#f1c3aa"}, {value: "\uBC31\uC124\uBBFC\uC8FC", color: "#fff"}, {value: "\uC728\uB80C\uC9C0", color: "#f3aa51"}, {value: "\uBE14\uB8E8\uC9C0\uB2C8", color: "#567ace"}, {value: "\uCE94\uB514\uD551\uD06C", color: "#d9598c"}], o2, s2, function() {
        i2 = this.value, n2(0, i2);
      }, function() {
        c2 = this.__value, n2(1, c2);
      }, [[]]];
    }
    class Lt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, jt, St, main2.s, {tag: 4});
      }
    }
    const It = {0: "#d9598c", 1: "#f1d2e7", 2: "#f3aa51", 3: "#fcf695", 4: "#567ace", 5: "#b7d3e9", 6: "#bbb0dc", 7: "#db706c", 8: "#f1c3aa", 9: "#cee5d5", 10: "#fff", 11: "#a7e0e1", 12: "gray"};
    let Pt = main2.L({});
    main2.M(Pt, (t3) => Object.keys(t3).reduce((t4, e2) => ({...t4, [Pt[e2]]: e2}), {0: "\uC7A5\uC6D0\uC601"}));
    const Bt = {0: "\uC7A5\uC6D0\uC601", 1: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", 2: "\uC870\uC720\uB9AC", 3: "\uCD5C\uC608\uB098", 4: "\uC548\uC720\uC9C4", 5: "\uC57C\uBD80\uD0A4 \uB098\uCF54", 6: "\uAD8C\uC740\uBE44", 7: "\uAC15\uD61C\uC6D0", 8: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", 9: "\uAE40\uCC44\uC6D0", 10: "\uAE40\uBBFC\uC8FC", 11: "\uC774\uCC44\uC5F0", 12: "\uC6B4\uC601\uD300"};
    const At = new Set(["\u{1F496}", "\uC7A5\uC6D0\uC601", "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", "\uC870\uC720\uB9AC", "\uCD5C\uC608\uB098", "\uC548\uC720\uC9C4", "\uC57C\uBD80\uD0A4 \uB098\uCF54", "\uAD8C\uC740\uBE44", "\uAC15\uD61C\uC6D0", "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", "\uAE40\uCC44\uC6D0", "\uAE40\uBBFC\uC8FC", "\uC774\uCC44\uC5F0", "\uC6B4\uC601\uD300", "\uC0DD\uC77C"]);
    function Et(t3) {
      let e2, n2 = t3[0].value + "";
      return {c() {
        e2 = main2.t(n2);
      }, m(t4, n3) {
        main2.c(t4, e2, n3);
      }, p(t4, r2) {
        1 & r2 && n2 !== (n2 = t4[0].value + "") && main2.o(e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function zt(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("img"), main2.b(e2, "class", n2 = (t3[2] == "xs" ? "w-4 h-4" : "w-5 h-5") + " float-none"), e2.src !== (s2 = "./img/yellow-star.png") && main2.b(e2, "src", "./img/yellow-star.png"), main2.b(e2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30");
      }, m(t4, n3) {
        main2.c(t4, e2, n3);
      }, p(t4, r2) {
        4 & r2 && n2 !== (n2 = (t4[2] == "xs" ? "w-4 h-4" : "w-5 h-5") + " float-none") && main2.b(e2, "class", n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Wt(t3) {
      let e2, n2, s2, u2, d2;
      return {c() {
        e2 = main2.e("span"), n2 = main2.t("X"), main2.b(e2, "style", t3[6]), main2.b(e2, "class", s2 = "\r\n" + (t3[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r\r\n-ml-2 mt-1 mb-1 p-1\r\ntext-" + t3[2]);
      }, m(r2, s3) {
        main2.c(r2, e2, s3), main2.d(e2, n2), u2 || (d2 = main2.A(e2, "click", function() {
          main2.F(t3[3] ? t3[3] : t3[5]) && (t3[3] ? t3[3] : t3[5]).apply(this, arguments);
        }), u2 = true);
      }, p(n3, r2) {
        t3 = n3, 64 & r2 && main2.b(e2, "style", t3[6]), 5 & r2 && s2 !== (s2 = "\r\n" + (t3[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r\r\n-ml-2 mt-1 mb-1 p-1\r\ntext-" + t3[2]) && main2.b(e2, "class", s2);
      }, d(t4) {
        t4 && main2.f(e2), u2 = false, d2();
      }};
    }
    function Nt(t3) {
      let e2, n2, c2, u2, h2, f2;
      function p2(t4, e3) {
        return t4[0].value == "\u{1F496}" ? zt : Et;
      }
      let m2 = p2(t3), $2 = m2(t3), y2 = (t3[3] || t3[1] && t3[0].value != "\uC0DD\uC77C") && Wt(t3);
      return {c() {
        e2 = main2.e("span"), $2.c(), c2 = main2.a(), y2 && y2.c(), u2 = main2.G(), main2.b(e2, "style", t3[6]), main2.b(e2, "class", n2 = "\r\n" + (t3[2] == "" ? "p-0.5" : t3[0].color == "#fff" ? "border-2 p-0.5" : "p-1") + "\r\nm-1\r\n" + (t3[1] && t3[0].value != "\uC0DD\uC77C" ? "rounded-l border-r-0 pr-2" : "rounded") + "\r\ntext-" + t3[2] + " text-" + t3[4]);
      }, m(n3, r2) {
        main2.c(n3, e2, r2), $2.m(e2, null), main2.c(n3, c2, r2), y2 && y2.m(n3, r2), main2.c(n3, u2, r2), h2 || (f2 = [main2.A(e2, "pointerdown", function() {
          main2.F(t3[7]) && t3[7].apply(this, arguments);
        }), main2.A(e2, "pointerup", function() {
          main2.F(t3[8]) && t3[8].apply(this, arguments);
        }), main2.A(e2, "click", function() {
          main2.F(t3[9](t3[0])) && t3[9](t3[0]).apply(this, arguments);
        })], h2 = true);
      }, p(r2, [s2]) {
        m2 === (m2 = p2(t3 = r2)) && $2 ? $2.p(t3, s2) : ($2.d(1), $2 = m2(t3), $2 && ($2.c(), $2.m(e2, null))), 64 & s2 && main2.b(e2, "style", t3[6]), 23 & s2 && n2 !== (n2 = "\r\n" + (t3[2] == "" ? "p-0.5" : t3[0].color == "#fff" ? "border-2 p-0.5" : "p-1") + "\r\nm-1\r\n" + (t3[1] && t3[0].value != "\uC0DD\uC77C" ? "rounded-l border-r-0 pr-2" : "rounded") + "\r\ntext-" + t3[2] + " text-" + t3[4]) && main2.b(e2, "class", n2), t3[3] || t3[1] && t3[0].value != "\uC0DD\uC77C" ? y2 ? y2.p(t3, s2) : (y2 = Wt(t3), y2.c(), y2.m(u2.parentNode, u2)) : y2 && (y2.d(1), y2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), $2.d(), t4 && main2.f(c2), y2 && y2.d(t4), t4 && main2.f(u2), h2 = false, main2.B(f2);
      }};
    }
    function Rt(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, h2, f2, p2;
      main2.g(t3, ot, (t4) => n2(11, l2 = t4)), main2.g(t3, ht, (t4) => n2(12, a3 = t4)), main2.g(t3, gt, (t4) => n2(13, u2 = t4)), main2.g(t3, it, (t4) => n2(14, d2 = t4)), main2.g(t3, dt, (t4) => n2(15, h2 = t4)), main2.g(t3, main2.P, (t4) => n2(16, f2 = t4)), main2.g(t3, main2.Q, (t4) => n2(17, p2 = t4));
      var g2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, o3) {
          function i3(t5) {
            try {
              l3(r3.next(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function c3(t5) {
            try {
              l3(r3.throw(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function l3(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(i3, c3);
          }
          l3((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      let {tag: m2} = e2, {canDelete: $2 = false} = e2, {size: y2 = "xs"} = e2, {onRemove: w2 = null} = e2;
      main2.Q.subscribe((t4) => {
        t4.tag == null && h2 != et && main2.R(dt, h2 = et, h2), t4.tag && h2.value != t4.tag && main2.R(dt, h2 = l2.get(t4.tag), h2);
      });
      const {open: v2} = main2.O("simple-modal"), x2 = () => {
        v2(Lt, {tag: m2});
      };
      let b2;
      return t3.$$set = (t4) => {
        "tag" in t4 && n2(0, m2 = t4.tag), "canDelete" in t4 && n2(1, $2 = t4.canDelete), "size" in t4 && n2(2, y2 = t4.size), "onRemove" in t4 && n2(3, w2 = t4.onRemove);
      }, t3.$$.update = () => {
        1 & t3.$$.dirty && n2(4, r2 = m2.value == "\uAC15\uD61C\uC6D0" || m2.value == "\uC7A5\uC6D0\uC601" || m2.value == "\uC548\uC720\uC9C4" || m2.value == "\uC6B4\uC601\uD300" ? "black" : "gray-700"), 30721 & t3.$$.dirty && n2(5, s2 = () => g2(void 0, void 0, void 0, function* () {
          const t4 = l2.get(m2.value);
          a3.get(t4).delete(u2.id), ht.set(a3), d2.get(u2.id).delete(t4), it.set(d2);
        })), 1 & t3.$$.dirty && n2(6, o2 = `background-color: ${m2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#333333" : m2.color};
            ${m2.value == "\uD0C0\uC784\uCEA1\uC290" ? "color: #b299e6;" : ""}`), 1 & t3.$$.dirty && n2(7, i2 = () => {
          const t4 = At.has(m2.value) ? () => {
            alert("\uAE30\uBCF8 \uD0DC\uADF8\uB294 \uC544\uC9C1 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
          } : x2;
          n2(10, b2 = setTimeout(t4, 300));
        }), 1024 & t3.$$.dirty && n2(8, c2 = (t4) => {
          clearTimeout(b2);
        });
      }, [m2, $2, y2, w2, r2, s2, o2, i2, c2, (t4) => () => {
        dt.set(t4), f2("./", Object.assign(Object.assign({}, p2), {tag: h2.value, nowPage: 1}));
      }, b2, l2, a3, u2, d2];
    }
    class Ft extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Rt, Nt, main2.s, {tag: 0, canDelete: 1, size: 2, onRemove: 3});
      }
    }
    function Dt(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("span"), n2 = main2.t(t3[0]), main2.h(e2, "background-color", "pink"), main2.b(e2, "class", s2 = "border-1 m-1 rounded\r\n" + (t3[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t3[1]);
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.d(e2, n2);
      }, p(t4, [r2]) {
        1 & r2 && main2.o(n2, t4[0]), 2 & r2 && s2 !== (s2 = "border-1 m-1 rounded\r\n" + (t4[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t4[1]) && main2.b(e2, "class", s2);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Tt(t3, e2, n2) {
      let {time: r2} = e2, {size: s2 = "xs"} = e2;
      return t3.$$set = (t4) => {
        "time" in t4 && n2(0, r2 = t4.time), "size" in t4 && n2(1, s2 = t4.size);
      }, [r2, s2];
    }
    class Jt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Tt, Dt, main2.s, {time: 0, size: 1});
      }
    }
    function Vt(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("button"), e2.textContent = "\uCD94\uAC00", main2.b(e2, "class", "text-xs shadow rounded bg-red-400 p-1 m-1");
      }, m(r2, o2) {
        main2.c(r2, e2, o2), n2 || (s2 = main2.A(e2, "click", t3[2]), n2 = true);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e2), n2 = false, s2();
      }};
    }
    function qt(t3) {
      let e2, n2, c2, a3, u2, h2 = t3[1] && Vt(t3);
      return {c() {
        e2 = main2.e("input"), n2 = main2.a(), h2 && h2.c(), c2 = main2.G(), main2.b(e2, "type", "text"), main2.b(e2, "class", "\r\nborder-2 border-gray\r\nm-1 p-1\r\nrounded w-16\r\ntext-xs"), main2.b(e2, "placeholder", "\uC0C8 \uD0DC\uADF8");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.N(e2, t3[0]), main2.c(r2, n2, s2), h2 && h2.m(r2, s2), main2.c(r2, c2, s2), a3 || (u2 = [main2.A(e2, "input", t3[5]), main2.A(e2, "keypress", t3[3])], a3 = true);
      }, p(t4, [n3]) {
        1 & n3 && e2.value !== t4[0] && main2.N(e2, t4[0]), t4[1] ? h2 ? h2.p(t4, n3) : (h2 = Vt(t4), h2.c(), h2.m(c2.parentNode, c2)) : h2 && (h2.d(1), h2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), h2 && h2.d(t4), t4 && main2.f(c2), a3 = false, main2.B(u2);
      }};
    }
    function Ht(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2;
      main2.g(t3, at, (t4) => n2(0, s2 = t4)), main2.g(t3, ut, (t4) => n2(4, o2 = t4)), main2.g(t3, ot, (t4) => n2(7, i2 = t4)), main2.g(t3, ht, (t4) => n2(8, c2 = t4)), main2.g(t3, gt, (t4) => n2(9, l2 = t4)), main2.g(t3, it, (t4) => n2(10, a3 = t4)), main2.g(t3, xt, (t4) => n2(1, u2 = t4));
      var d2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, o3) {
          function i3(t5) {
            try {
              l3(r3.next(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function c3(t5) {
            try {
              l3(r3.throw(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function l3(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(i3, c3);
          }
          l3((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      const h2 = () => d2(void 0, void 0, void 0, function* () {
        let t4 = r2;
        i2.has(s2) ? (t4 = i2.get(s2), c2.get(t4).add(l2.id)) : (c2.set(r2, new Set([l2.id])), i2.set(s2, r2), ot.set(i2), yield fetch("/all-tag-dict/tag", {method: "POST", body: JSON.stringify(r2)})), ht.set(c2), a3.has(l2.id) ? a3.get(l2.id).add(t4) : a3.set(l2.id, new Set([t4])), it.set(a3), main2.R(at, s2 = "", s2), main2.R(ut, o2 = (o2 + 1) % 12, o2);
      });
      return t3.$$.update = () => {
        17 & t3.$$.dirty && (r2 = {value: s2, color: It[o2]});
      }, [s2, u2, h2, (t4) => {
        t4.code === "Enter" && h2();
      }, o2, function() {
        s2 = this.value, at.set(s2);
      }];
    }
    class Kt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Ht, qt, main2.s, {});
      }
    }
    function Zt(t3) {
      let e2, n2;
      return {c() {
        e2 = main2.e("img"), main2.b(e2, "class", Xt), e2.src !== (n2 = "./img/empty-star.png") && main2.b(e2, "src", "./img/empty-star.png"), main2.b(e2, "alt", "\uC88B\uC544\uC694 \uD558\uC2E4\uB798\uC694?");
      }, m(t4, n3) {
        main2.c(t4, e2, n3);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Qt(t3) {
      let e2, n2;
      return {c() {
        e2 = main2.e("img"), main2.b(e2, "class", Xt), e2.src !== (n2 = "./img/yellow-star.png") && main2.b(e2, "src", "./img/yellow-star.png"), main2.b(e2, "alt", "\uC88B\uC544\uC694 \uD588\uC5B4\uC694");
      }, m(t4, n3) {
        main2.c(t4, e2, n3);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Ut(t3) {
      let e2, n2, c2, u2, d2, h2;
      function f2(t4, e3) {
        return (n2 == null || 3 & e3) && (n2 = !!t4[1](t4[0])), n2 ? Qt : Zt;
      }
      let p2 = f2(t3, -1), m2 = p2(t3);
      return {c() {
        e2 = main2.e("label"), m2.c(), c2 = main2.a(), u2 = main2.e("input"), main2.b(e2, "for", "favorite"), main2.b(u2, "type", "checkbox"), main2.b(u2, "class", "hidden"), main2.b(u2, "id", "favorite");
      }, m(n3, r2) {
        main2.c(n3, e2, r2), m2.m(e2, null), main2.c(n3, c2, r2), main2.c(n3, u2, r2), d2 || (h2 = main2.A(e2, "click", function() {
          main2.F(t3[2](t3[0])) && t3[2](t3[0]).apply(this, arguments);
        }), d2 = true);
      }, p(n3, [r2]) {
        p2 === (p2 = f2(t3 = n3, r2)) && m2 ? m2.p(t3, r2) : (m2.d(1), m2 = p2(t3), m2 && (m2.c(), m2.m(e2, null)));
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), m2.d(), t4 && main2.f(c2), t4 && main2.f(u2), d2 = false, h2();
      }};
    }
    const Xt = "w-5 h-5 mt-0.5 float-left";
    function Yt(t3, e2, n2) {
      let r2, s2, o2, i2, c2;
      main2.g(t3, ot, (t4) => n2(4, i2 = t4)), main2.g(t3, ht, (t4) => n2(5, c2 = t4));
      let {pm: l2} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(0, l2 = t4.pm);
      }, t3.$$.update = () => {
        16 & t3.$$.dirty && n2(3, r2 = i2.get("\u{1F496}")), 40 & t3.$$.dirty && n2(2, o2 = (t4) => () => {
          const e3 = c2.get(r2);
          e3.has(t4.id) ? e3.delete(t4.id) : e3.add(t4.id), ht.set(c2);
        }), 40 & t3.$$.dirty && n2(1, s2 = (t4) => c2.get(r2).has(t4.id));
      }, [l2, s2, o2, r2, i2, c2];
    }
    class Gt extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Yt, Ut, main2.s, {pm: 0});
      }
    }
    function te(t3) {
      let e2, n2;
      return e2 = new Ft({props: {tag: t3[1], size: t3[0]}}), {c() {
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
    function ee(t3, e2, n2) {
      let r2, s2;
      main2.g(t3, ot, (t4) => n2(3, s2 = t4));
      let {pm: o2} = e2, {size: i2 = "xs"} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(2, o2 = t4.pm), "size" in t4 && n2(0, i2 = t4.size);
      }, t3.$$.update = () => {
        12 & t3.$$.dirty && n2(1, r2 = s2.get(o2.member));
      }, [i2, r2, o2, s2];
    }
    class ne extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ee, te, main2.s, {pm: 2, size: 0});
      }
    }
    let re = main2.L(function() {
      const t3 = localStorage.getItem("preferences-profile");
      return t3 || "latest";
    }());
    function se(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[4] = e2[n2], r2;
    }
    function oe(t3) {
      let e2, n2, a3, u2, d2, h2, f2, p2 = t3[4].name + "";
      return {c() {
        e2 = main2.e("label"), n2 = main2.e("input"), a3 = main2.a(), u2 = main2.t(p2), d2 = main2.a(), main2.b(n2, "type", "radio"), n2.__value = t3[4].path, n2.value = n2.__value, t3[3][0].push(n2);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), n2.checked = n2.__value === t3[0], main2.d(e2, a3), main2.d(e2, u2), main2.d(e2, d2), h2 || (f2 = main2.A(n2, "change", t3[2]), h2 = true);
      }, p(t4, e3) {
        1 & e3 && (n2.checked = n2.__value === t4[0]);
      }, d(r2) {
        r2 && main2.f(e2), t3[3][0].splice(t3[3][0].indexOf(n2), 1), h2 = false, f2();
      }};
    }
    function ie(t3) {
      let e2, n2, c2, l2 = t3[1], a3 = [];
      for (let e3 = 0; e3 < l2.length; e3 += 1)
        a3[e3] = oe(se(t3, l2, e3));
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
            const r2 = se(t4, l2, n3);
            a3[n3] ? a3[n3].p(r2, e3) : (a3[n3] = oe(r2), a3[n3].c(), a3[n3].m(c2, null));
          }
          for (; n3 < a3.length; n3 += 1)
            a3[n3].d(1);
          a3.length = l2.length;
        }
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), t4 && main2.f(c2), main2.y(a3, t4);
      }};
    }
    function ce(t3, e2, n2) {
      let r2;
      main2.g(t3, re, (t4) => n2(0, r2 = t4));
      return [r2, [{path: "la-vie-en-rose", name: "\uB77C\uBE44\uC559 \uB85C\uC988"}, {path: "one-the-story", name: "One The Story \uD3EC\uC2A4\uD130"}, {path: "latest", name: "\uCD5C\uC2E0 \uD504\uBA54"}], function() {
        r2 = this.__value, re.set(r2);
      }, [[]]];
    }
    re.subscribe((t3) => {
      localStorage.setItem("preferences-profile", t3);
    });
    class le extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ce, ie, main2.s, {});
      }
    }
    function ae(t3) {
      let e2, n2, s2, c2;
      return {c() {
        e2 = main2.e("img"), e2.src !== (n2 = "./img/" + t3[1]) && main2.b(e2, "src", n2), main2.b(e2, "class", "w-11 h-11 rounded-full \r\nml-1 mt-1 mr-2\r\nfloat-left\r\nborder-gray-100 border-2"), main2.b(e2, "alt", "");
      }, m(n3, r2) {
        main2.c(n3, e2, r2), s2 || (c2 = [main2.A(e2, "pointerdown", t3[5]), main2.A(e2, "pointerup", t3[6]), main2.A(e2, "mousedown", t3[7]), main2.A(e2, "mouseup", t3[8])], s2 = true);
      }, p(t4, [r2]) {
        2 & r2 && e2.src !== (n2 = "./img/" + t4[1]) && main2.b(e2, "src", n2);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), s2 = false, main2.B(c2);
      }};
    }
    function ue(t3, e2, n2) {
      let r2, s2;
      main2.g(t3, re, (t4) => n2(4, s2 = t4));
      let {pm: o2} = e2;
      const {open: i2} = main2.O("simple-modal"), c2 = () => {
        i2(le, {});
      };
      let l2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(3, o2 = t4.pm);
      }, t3.$$.update = () => {
        24 & t3.$$.dirty && n2(1, r2 = o2.member == "\uC6B4\uC601\uD300" ? "izone-logo.png" : `profile/${s2}/${o2.member}.jpg`);
      }, [l2, r2, c2, o2, s2, () => {
        n2(0, l2 = setTimeout(c2, 300));
      }, (t4) => {
        clearTimeout(l2);
      }, () => {
        n2(0, l2 = setTimeout(c2, 500));
      }, (t4) => {
        clearTimeout(l2);
      }];
    }
    class de extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ue, ae, main2.s, {pm: 3});
      }
    }
    function he(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[18] = e2[n2], r2;
    }
    function fe(t3) {
      let e2;
      return {c() {
        e2 = main2.e("br");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function pe(t3) {
      let e2, n2;
      return e2 = new Ft({props: {tag: t3[18], canDelete: true, size: "sm"}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        8 & n3 && (r2.tag = t4[18]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function ge(t3) {
      let e2, n2, a3, u2, d2, h2, f2, p2 = t3[7] && me(t3);
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("div"), u2 = main2.a(), p2 && p2.c(), main2.b(n2, "contenteditable", "false"), t3[4] === void 0 && main2.j(() => t3[16].call(n2)), main2.b(e2, "class", "h-5/6 overflow-scroll p-1");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), t3[4] !== void 0 && (n2.innerHTML = t3[4]), main2.d(e2, u2), p2 && p2.m(e2, null), d2 = true, h2 || (f2 = main2.A(n2, "input", t3[16]), h2 = true);
      }, p(t4, r2) {
        16 & r2 && t4[4] !== n2.innerHTML && (n2.innerHTML = t4[4]), t4[7] ? p2 ? p2.p(t4, r2) : (p2 = me(t4), p2.c(), p2.m(e2, null)) : p2 && (p2.d(1), p2 = null);
      }, i(t4) {
        d2 || (main2.j(() => {
          a3 || (a3 = main2.k(n2, a, {duration: 200}, true)), a3.run(1);
        }), d2 = true);
      }, o(t4) {
        a3 || (a3 = main2.k(n2, a, {duration: 200}, false)), a3.run(0), d2 = false;
      }, d(t4) {
        t4 && main2.f(e2), t4 && a3 && a3.end(), p2 && p2.d(), h2 = false, f2();
      }};
    }
    function me(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("button"), e2.textContent = "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30\u{1F5C3}\uFE0F", main2.b(e2, "class", "shadow rounded bg-red-200 p-1 mt-2");
      }, m(r2, o2) {
        main2.c(r2, e2, o2), n2 || (s2 = main2.A(e2, "click", t3[17]), n2 = true);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e2), n2 = false, s2();
      }};
    }
    function $e(t3) {
      let e2, n2, l2, a3, d2, v2, x2, b2, k2, M2, _2, C2, O2, S2, j2, P2, A2, E2, z2, W2, N2, D2, T2 = t3[2].subject + "";
      a3 = new de({props: {pm: t3[2]}});
      let J2 = t3[5] && fe();
      C2 = new Gt({props: {pm: t3[2]}}), j2 = new ne({props: {pm: t3[2], size: "sm"}}), A2 = new Jt({props: {time: t3[2].time, size: "sm"}});
      let V2 = t3[3], q2 = [];
      for (let e3 = 0; e3 < V2.length; e3 += 1)
        q2[e3] = pe(he(t3, V2, e3));
      const H2 = (t4) => main2.v(q2[t4], 1, 1, () => {
        q2[t4] = null;
      });
      W2 = new Kt({});
      let K = t3[4] && ge(t3);
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("div"), l2 = main2.e("div"), main2.q(a3.$$.fragment), d2 = main2.a(), v2 = main2.e("h4"), x2 = main2.t(T2), k2 = main2.a(), J2 && J2.c(), M2 = main2.a(), _2 = main2.e("div"), main2.q(C2.$$.fragment), O2 = main2.a(), S2 = main2.e("div"), main2.q(j2.$$.fragment), P2 = main2.a(), main2.q(A2.$$.fragment), E2 = main2.a();
        for (let t4 = 0; t4 < q2.length; t4 += 1)
          q2[t4].c();
        z2 = main2.a(), main2.q(W2.$$.fragment), N2 = main2.a(), K && K.c(), main2.b(v2, "class", "text-xl m-1 w-4/5"), main2.b(l2, "class", "relative"), main2.j(() => t3[15].call(l2)), main2.b(_2, "class", "absolute inset-y-0 right-0 m-1 h-8"), main2.b(S2, "class", "flex flex-wrap"), main2.b(n2, "class", "relative w-full"), main2.h(e2, "max-height", t3[6] && t3[0] ? "70%" : "90%"), main2.b(e2, "class", "\r\nshadow-2xl rounded-md bg-white \r\nw-full mt-2 p-2\r\nflex flex-col");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(n2, l2), main2.r(a3, l2, null), main2.d(l2, d2), main2.d(l2, v2), main2.d(v2, x2), b2 = main2.z(l2, t3[15].bind(l2)), main2.d(n2, k2), J2 && J2.m(n2, null), main2.d(n2, M2), main2.d(n2, _2), main2.r(C2, _2, null), main2.d(n2, O2), main2.d(n2, S2), main2.r(j2, S2, null), main2.d(S2, P2), main2.r(A2, S2, null), main2.d(S2, E2);
        for (let t4 = 0; t4 < q2.length; t4 += 1)
          q2[t4].m(S2, null);
        main2.d(S2, z2), main2.r(W2, S2, null), main2.d(e2, N2), K && K.m(e2, null), D2 = true;
      }, p(t4, [r2]) {
        const s2 = {};
        4 & r2 && (s2.pm = t4[2]), a3.$set(s2), (!D2 || 4 & r2) && T2 !== (T2 = t4[2].subject + "") && main2.o(x2, T2), t4[5] ? J2 || (J2 = fe(), J2.c(), J2.m(n2, M2)) : J2 && (J2.d(1), J2 = null);
        const o2 = {};
        4 & r2 && (o2.pm = t4[2]), C2.$set(o2);
        const i2 = {};
        4 & r2 && (i2.pm = t4[2]), j2.$set(i2);
        const c2 = {};
        if (4 & r2 && (c2.time = t4[2].time), A2.$set(c2), 8 & r2) {
          let e3;
          for (V2 = t4[3], e3 = 0; e3 < V2.length; e3 += 1) {
            const n3 = he(t4, V2, e3);
            q2[e3] ? (q2[e3].p(n3, r2), main2.p(q2[e3], 1)) : (q2[e3] = pe(n3), q2[e3].c(), main2.p(q2[e3], 1), q2[e3].m(S2, z2));
          }
          for (main2.D(), e3 = V2.length; e3 < q2.length; e3 += 1)
            H2(e3);
          main2.x();
        }
        t4[4] ? K ? (K.p(t4, r2), 16 & r2 && main2.p(K, 1)) : (K = ge(t4), K.c(), main2.p(K, 1), K.m(e2, null)) : K && (main2.D(), main2.v(K, 1, 1, () => {
          K = null;
        }), main2.x()), (!D2 || 65 & r2) && main2.h(e2, "max-height", t4[6] && t4[0] ? "70%" : "90%");
      }, i(t4) {
        if (!D2) {
          main2.p(a3.$$.fragment, t4), main2.p(C2.$$.fragment, t4), main2.p(j2.$$.fragment, t4), main2.p(A2.$$.fragment, t4);
          for (let t5 = 0; t5 < V2.length; t5 += 1)
            main2.p(q2[t5]);
          main2.p(W2.$$.fragment, t4), main2.p(K), D2 = true;
        }
      }, o(t4) {
        main2.v(a3.$$.fragment, t4), main2.v(C2.$$.fragment, t4), main2.v(j2.$$.fragment, t4), main2.v(A2.$$.fragment, t4), q2 = q2.filter(Boolean);
        for (let t5 = 0; t5 < q2.length; t5 += 1)
          main2.v(q2[t5]);
        main2.v(W2.$$.fragment, t4), main2.v(K), D2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.w(a3), b2(), J2 && J2.d(), main2.w(C2), main2.w(j2), main2.w(A2), main2.y(q2, t4), main2.w(W2), K && K.d();
      }};
    }
    function ye(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, h2, f2, p2, g2;
      main2.g(t3, it, (t4) => n2(12, c2 = t4)), main2.g(t3, ot, (t4) => n2(13, l2 = t4)), main2.g(t3, gt, (t4) => n2(2, a3 = t4)), main2.g(t3, mt, (t4) => n2(4, u2 = t4)), main2.g(t3, vt, (t4) => n2(6, d2 = t4)), main2.g(t3, xt, (t4) => n2(7, h2 = t4)), main2.g(t3, wt, (t4) => n2(8, f2 = t4)), main2.g(t3, main2.P, (t4) => n2(9, p2 = t4)), main2.g(t3, main2.Q, (t4) => n2(10, g2 = t4));
      let m2, {show: $2} = e2;
      return t3.$$set = (t4) => {
        "show" in t4 && n2(0, $2 = t4.show);
      }, t3.$$.update = () => {
        12288 & t3.$$.dirty && n2(11, r2 = (t4) => c2.has(t4.id) ? Array.from(c2.get(t4.id)).map((t5) => l2.get(t5.value)) : []), 2052 & t3.$$.dirty && n2(3, s2 = r2(a3)), 4 & t3.$$.dirty && n2(14, o2 = () => {
          main2.R(mt, u2 = "", u2), async function(t4) {
            const e3 = await fetch(`./mail/${t4}.html`).then((t5) => t5.text()), n3 = e3.search('<div class="main-contents" id="mail-detail"><html><head></head><body>') + 69, r3 = e3.search("</body></html></div>");
            return e3.slice(n3, r3);
          }(a3.id).then((t4) => {
            setTimeout(() => {
              main2.R(mt, u2 = t4, u2);
            }, 100);
          });
        }), 16384 & t3.$$.dirty && o2(), 2 & t3.$$.dirty && n2(5, i2 = m2 < 40);
      }, [$2, m2, a3, s2, u2, i2, d2, h2, f2, p2, g2, r2, c2, l2, o2, function() {
        m2 = this.clientHeight, n2(1, m2);
      }, function() {
        u2 = this.innerHTML, mt.set(u2);
      }, () => {
        main2.R(wt, f2 = true, f2), p2("./", {...g2, showList: true});
      }];
    }
    class we extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ye, $e, main2.s, {show: 0});
      }
    }
    function ve(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[5] = e2[n2], r2;
    }
    function xe(t3) {
      let e2, n2;
      return e2 = new Ft({props: {tag: t3[5], size: t3[1] ? "xs" : "sm"}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        1 & n3 && (r2.tag = t4[5]), 2 & n3 && (r2.size = t4[1] ? "xs" : "sm"), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function be(t3) {
      let e2, n2, s2 = t3[0], c2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        c2[e3] = xe(ve(t3, s2, e3));
      const l2 = (t4) => main2.v(c2[t4], 1, 1, () => {
        c2[t4] = null;
      });
      return {c() {
        e2 = main2.e("div");
        for (let t4 = 0; t4 < c2.length; t4 += 1)
          c2[t4].c();
        main2.b(e2, "class", "flex flex-wrap");
      }, m(t4, r2) {
        main2.c(t4, e2, r2);
        for (let t5 = 0; t5 < c2.length; t5 += 1)
          c2[t5].m(e2, null);
        n2 = true;
      }, p(t4, [n3]) {
        if (3 & n3) {
          let r2;
          for (s2 = t4[0], r2 = 0; r2 < s2.length; r2 += 1) {
            const o2 = ve(t4, s2, r2);
            c2[r2] ? (c2[r2].p(o2, n3), main2.p(c2[r2], 1)) : (c2[r2] = xe(o2), c2[r2].c(), main2.p(c2[r2], 1), c2[r2].m(e2, null));
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
    function ke(t3, e2, n2) {
      let r2, s2, o2, i2;
      return main2.g(t3, ot, (t4) => n2(2, s2 = t4)), main2.g(t3, dt, (t4) => n2(3, o2 = t4)), main2.g(t3, vt, (t4) => n2(1, i2 = t4)), t3.$$.update = () => {
        4 & t3.$$.dirty && n2(0, r2 = Array.from(s2.values()));
      }, s2.has(o2.value) && main2.R(dt, o2 = et, o2), [r2, i2, s2];
    }
    class Me extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ke, be, main2.s, {});
      }
    }
    function _e(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("button"), e2.textContent = "\uBAA9\uB85D\u{1F5C3}\uFE0F", main2.b(e2, "class", "shadow rounded bg-red-200 p-1 mr-1");
      }, m(r2, o2) {
        main2.c(r2, e2, o2), n2 || (s2 = main2.A(e2, "click", t3[10]), n2 = true);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e2), n2 = false, s2();
      }};
    }
    function Ce(t3) {
      let e2, n2, s2, a3, u2;
      return {c() {
        e2 = main2.e("label"), n2 = main2.t("\uD0DC\uADF8 \uBAA9\uB85D "), s2 = main2.e("input"), main2.b(s2, "id", "isListView"), main2.b(s2, "type", "checkbox"), main2.b(e2, "class", "p-1"), main2.b(e2, "for", "isListView");
      }, m(r2, o2) {
        main2.c(r2, e2, o2), main2.d(e2, n2), main2.d(e2, s2), s2.checked = t3[1], a3 || (u2 = main2.A(s2, "change", t3[11]), a3 = true);
      }, p(t4, e3) {
        2 & e3 && (s2.checked = t4[1]);
      }, d(t4) {
        t4 && main2.f(e2), a3 = false, u2();
      }};
    }
    function Oe(t3) {
      let e2, n2, c2, l2;
      return c2 = new Ft({props: {tag: t3[2], canDelete: true, onRemove: t3[9]}}), {c() {
        e2 = main2.e("span"), e2.textContent = "\uD604\uC7AC :", n2 = main2.a(), main2.q(c2.$$.fragment), main2.b(e2, "class", "ml-1 mt-1");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.c(t4, n2, r2), main2.r(c2, t4, r2), l2 = true;
      }, p(t4, e3) {
        const n3 = {};
        4 & e3 && (n3.tag = t4[2]), c2.$set(n3);
      }, i(t4) {
        l2 || (main2.p(c2.$$.fragment, t4), l2 = true);
      }, o(t4) {
        main2.v(c2.$$.fragment, t4), l2 = false;
      }, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), main2.w(c2, t4);
      }};
    }
    function Se(t3) {
      let e2, n2, l2, a3, d2, v2, x2, b2, k2, M2, _2, C2, O2, S2, j2, P2, B2, A2, E2 = t3[5] && _e(t3), z2 = 650 >= t3[0] && t3[7] && Ce(t3), W2 = t3[2].value && Oe(t3);
      return O2 = new Me({}), j2 = new we({props: {show: 650 < t3[0] || t3[1]}}), {c() {
        e2 = main2.e("section"), n2 = main2.e("div"), E2 && E2.c(), l2 = main2.a(), a3 = main2.e("div"), d2 = main2.e("a"), v2 = main2.t("\uBC88\uC5ED"), x2 = main2.e("img"), k2 = main2.a(), z2 && z2.c(), M2 = main2.a(), W2 && W2.c(), _2 = main2.a(), C2 = main2.e("div"), main2.q(O2.$$.fragment), S2 = main2.a(), main2.q(j2.$$.fragment), main2.b(x2, "class", "w-5 h-5 mt-0.5 float-right"), x2.src !== (b2 = "./img/papago.png") && main2.b(x2, "src", "./img/papago.png"), main2.b(x2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30"), main2.b(d2, "href", t3[8]), main2.b(d2, "target", "_blank"), main2.b(a3, "class", "w-16 p-1 shadow rounded bg-red-100 mr-1"), main2.b(n2, "class", "flex flex-row"), main2.h(C2, "min-height", "43px"), main2.b(C2, "class", "\r\n    h-36 mt-3 mb-3 p-2\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main2.T(C2, "hidden", !((650 < t3[0] || t3[1]) && t3[7])), main2.b(e2, "id", "MailDetailSection"), main2.b(e2, "class", P2 = "h-full p-3 " + (t3[7] ? "w-4/12" : "w-full") + " flex flex-col svelte-q462jf"), main2.j(() => t3[12].call(e2)), main2.T(e2, "hidden", t3[5] && t3[6]);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), E2 && E2.m(n2, null), main2.d(n2, l2), main2.d(n2, a3), main2.d(a3, d2), main2.d(d2, v2), main2.d(d2, x2), main2.d(n2, k2), z2 && z2.m(n2, null), main2.d(n2, M2), W2 && W2.m(n2, null), main2.d(e2, _2), main2.d(e2, C2), main2.r(O2, C2, null), main2.d(e2, S2), main2.r(j2, e2, null), B2 = main2.z(e2, t3[12].bind(e2)), A2 = true;
      }, p(t4, [r2]) {
        t4[5] ? E2 ? E2.p(t4, r2) : (E2 = _e(t4), E2.c(), E2.m(n2, l2)) : E2 && (E2.d(1), E2 = null), (!A2 || 256 & r2) && main2.b(d2, "href", t4[8]), 650 >= t4[0] && t4[7] ? z2 ? z2.p(t4, r2) : (z2 = Ce(t4), z2.c(), z2.m(n2, M2)) : z2 && (z2.d(1), z2 = null), t4[2].value ? W2 ? (W2.p(t4, r2), 4 & r2 && main2.p(W2, 1)) : (W2 = Oe(t4), W2.c(), main2.p(W2, 1), W2.m(n2, null)) : W2 && (main2.D(), main2.v(W2, 1, 1, () => {
          W2 = null;
        }), main2.x()), 131 & r2 && main2.T(C2, "hidden", !((650 < t4[0] || t4[1]) && t4[7]));
        const s2 = {};
        3 & r2 && (s2.show = 650 < t4[0] || t4[1]), j2.$set(s2), (!A2 || 128 & r2 && P2 !== (P2 = "h-full p-3 " + (t4[7] ? "w-4/12" : "w-full") + " flex flex-col svelte-q462jf")) && main2.b(e2, "class", P2), 224 & r2 && main2.T(e2, "hidden", t4[5] && t4[6]);
      }, i(t4) {
        A2 || (main2.p(W2), main2.p(O2.$$.fragment, t4), main2.p(j2.$$.fragment, t4), A2 = true);
      }, o(t4) {
        main2.v(W2), main2.v(O2.$$.fragment, t4), main2.v(j2.$$.fragment, t4), A2 = false;
      }, d(t4) {
        t4 && main2.f(e2), E2 && E2.d(), z2 && z2.d(), W2 && W2.d(), main2.w(O2), main2.w(j2), B2();
      }};
    }
    function je(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2;
      main2.g(t3, dt, (t4) => n2(2, r2 = t4)), main2.g(t3, yt, (t4) => n2(13, s2 = t4)), main2.g(t3, main2.P, (t4) => n2(3, o2 = t4)), main2.g(t3, main2.Q, (t4) => n2(4, i2 = t4)), main2.g(t3, xt, (t4) => n2(5, c2 = t4)), main2.g(t3, wt, (t4) => n2(6, l2 = t4)), main2.g(t3, vt, (t4) => n2(7, a3 = t4)), main2.g(t3, $t, (t4) => n2(8, u2 = t4));
      let d2, h2;
      return [d2, h2, r2, o2, i2, c2, l2, a3, u2, () => {
        main2.R(dt, r2 = et, r2), main2.R(yt, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, i2), {tag: ""}));
      }, () => {
        main2.R(wt, l2 = true, l2), o2("./", {...i2, showList: true});
      }, function() {
        h2 = this.checked, n2(1, h2);
      }, function() {
        d2 = this.clientHeight, n2(0, d2);
      }];
    }
    class Le extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, je, Se, main2.s, {});
      }
    }
    const Ie = Be(new Date(2021, 2, 20));
    let Pe = main2.L(Ie);
    function Be(t3) {
      let e2 = "" + (t3.getMonth() + 1), n2 = "" + t3.getDate();
      const r2 = t3.getFullYear();
      return e2.length < 2 && (e2 = "0" + e2), n2.length < 2 && (n2 = "0" + n2), [r2, e2, n2].join("-");
    }
    function Ae(t3) {
      const [e2, n2, r2] = t3.split("-").map((t4) => parseInt(t4));
      return new Date(e2, n2 - 1, r2);
    }
    const Ee = (t3) => t3.split(" ")[0].replace(/\//g, "-");
    function ze(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uC774\uC804");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function We(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uB2E4\uC74C");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Ne(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uC5B4\uC81C");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Re(t3) {
      let e2;
      return {c() {
        e2 = main2.t("\uB0B4\uC77C");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Fe(t3) {
      let e2, n2, a3, d2, h2, p2, w2, v2, b2, k2, M2, _2, C2, O2, S2, j2, I2, B2, A2, E2, z2;
      return e2 = new Mt({props: {id: "BackPageButton", onClick: t3[8], $$slots: {default: [ze]}, $$scope: {ctx: t3}}}), k2 = new Mt({props: {id: "NextPageButton", onClick: t3[7], $$slots: {default: [We]}, $$scope: {ctx: t3}}}), O2 = new Mt({props: {id: "toYesterdayButton", onClick: t3[5], $$slots: {default: [Ne]}, $$scope: {ctx: t3}}}), B2 = new Mt({props: {id: "toTomorrowButton", onClick: t3[6], $$slots: {default: [Re]}, $$scope: {ctx: t3}}}), {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), a3 = main2.e("span"), d2 = main2.e("input"), h2 = main2.a(), p2 = main2.e("span"), w2 = main2.t("/ "), v2 = main2.t(t3[0]), b2 = main2.a(), main2.q(k2.$$.fragment), M2 = main2.a(), _2 = main2.e("br"), C2 = main2.a(), main2.q(O2.$$.fragment), S2 = main2.a(), j2 = main2.e("input"), I2 = main2.a(), main2.q(B2.$$.fragment), main2.b(d2, "id", "NowPageInput"), main2.b(d2, "type", "number"), main2.b(d2, "class", "w-9"), main2.b(d2, "min", "1"), main2.b(d2, "max", t3[0]), main2.T(d2, "bg-red-300", t3[0] <= t3[1]), main2.b(a3, "id", "NowPageSpan"), main2.b(a3, "class", "bg-white border-2 border-gray-400 rounded w-24 p-1"), main2.T(a3, "bg-red-300", t3[0] <= t3[1]), main2.T(a3, "border-red-300", t3[0] <= t3[1]), main2.b(j2, "type", "date"), main2.b(j2, "class", "border-1 w-36 border-gray-400 rounded");
      }, m(r2, s2) {
        main2.r(e2, r2, s2), main2.c(r2, n2, s2), main2.c(r2, a3, s2), main2.d(a3, d2), main2.N(d2, t3[1]), main2.d(a3, h2), main2.d(a3, p2), main2.d(p2, w2), main2.d(p2, v2), main2.c(r2, b2, s2), main2.r(k2, r2, s2), main2.c(r2, M2, s2), main2.c(r2, _2, s2), main2.c(r2, C2, s2), main2.r(O2, r2, s2), main2.c(r2, S2, s2), main2.c(r2, j2, s2), main2.N(j2, t3[2]), main2.c(r2, I2, s2), main2.r(B2, r2, s2), A2 = true, E2 || (z2 = [main2.A(d2, "input", t3[9]), main2.A(j2, "input", t3[10]), main2.A(j2, "change", t3[11])], E2 = true);
      }, p(t4, [n3]) {
        const r2 = {};
        8192 & n3 && (r2.$$scope = {dirty: n3, ctx: t4}), e2.$set(r2), (!A2 || 1 & n3) && main2.b(d2, "max", t4[0]), 2 & n3 && main2.U(d2.value) !== t4[1] && main2.N(d2, t4[1]), 3 & n3 && main2.T(d2, "bg-red-300", t4[0] <= t4[1]), (!A2 || 1 & n3) && main2.o(v2, t4[0]), 3 & n3 && main2.T(a3, "bg-red-300", t4[0] <= t4[1]), 3 & n3 && main2.T(a3, "border-red-300", t4[0] <= t4[1]);
        const s2 = {};
        8192 & n3 && (s2.$$scope = {dirty: n3, ctx: t4}), k2.$set(s2);
        const i2 = {};
        8192 & n3 && (i2.$$scope = {dirty: n3, ctx: t4}), O2.$set(i2), 4 & n3 && main2.N(j2, t4[2]);
        const c2 = {};
        8192 & n3 && (c2.$$scope = {dirty: n3, ctx: t4}), B2.$set(c2);
      }, i(t4) {
        A2 || (main2.p(e2.$$.fragment, t4), main2.p(k2.$$.fragment, t4), main2.p(O2.$$.fragment, t4), main2.p(B2.$$.fragment, t4), A2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(k2.$$.fragment, t4), main2.v(O2.$$.fragment, t4), main2.v(B2.$$.fragment, t4), A2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), t4 && main2.f(a3), t4 && main2.f(b2), main2.w(k2, t4), t4 && main2.f(M2), t4 && main2.f(_2), t4 && main2.f(C2), main2.w(O2, t4), t4 && main2.f(S2), t4 && main2.f(j2), t4 && main2.f(I2), main2.w(B2, t4), E2 = false, main2.B(z2);
      }};
    }
    function De(t3, e2, n2) {
      let r2, s2, o2, i2, c2;
      main2.g(t3, dt, (t4) => n2(12, r2 = t4)), main2.g(t3, yt, (t4) => n2(1, s2 = t4)), main2.g(t3, Pe, (t4) => n2(2, o2 = t4)), main2.g(t3, main2.P, (t4) => n2(3, i2 = t4)), main2.g(t3, main2.Q, (t4) => n2(4, c2 = t4));
      let {maxPage: l2} = e2;
      main2.Q.subscribe((t4) => {
        const e3 = parseInt(t4.nowPage);
        s2 != e3 && main2.R(yt, s2 = t4.nowPage ? e3 : 1, s2), o2 != t4.dateString && main2.R(Pe, o2 = t4.dateString || Ie, o2);
      });
      return t3.$$set = (t4) => {
        "maxPage" in t4 && n2(0, l2 = t4.maxPage);
      }, [l2, s2, o2, i2, c2, function() {
        if (r2.value)
          return s2 < l2 && main2.R(yt, s2 += 1, s2), null;
        const [t4, e3, n3] = o2.split("-").map((t5) => parseInt(t5)), a3 = new Date(t4, e3 - 1, n3 - 1);
        main2.R(Pe, o2 = Be(a3), o2), main2.R(yt, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: o2}));
      }, function() {
        if (r2.value)
          return s2 > 1 && main2.R(yt, s2 -= 1, s2), null;
        const [t4, e3, n3] = o2.split("-").map((t5) => parseInt(t5)), l3 = new Date(t4, e3 - 1, n3 + 1);
        main2.R(Pe, o2 = Be(l3), o2), main2.R(yt, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: o2}));
      }, function() {
        s2 < l2 ? (main2.R(yt, s2 += 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 > 1 ? (main2.R(yt, s2 -= 1, s2), i2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 = main2.U(this.value), yt.set(s2);
      }, function() {
        o2 = this.value, Pe.set(o2);
      }, () => {
        main2.R(yt, s2 = 1, s2), i2("./", {...c2, nowPage: s2, dateString: o2});
      }];
    }
    class Te extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, De, Fe, main2.s, {maxPage: 0});
      }
    }
    function Je(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[13] = e2[n2], r2;
    }
    function Ve(t3) {
      let e2;
      return {c() {
        e2 = main2.e("span"), main2.b(e2, "class", "\r\n        border-1 text-lg\r\n        rounded bg-white text-white");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, p: main2.n, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function qe(t3) {
      let e2, n2, d2, w2, v2, x2, b2, k2, M2, _2, C2, O2, S2, j2, I2, P2, A2, E2, z2 = t3[0].subject + "", W2 = (t3[0].preview || "...") + "";
      e2 = new de({props: {pm: t3[0]}}), w2 = new Gt({props: {pm: t3[0]}}), x2 = new ne({props: {pm: t3[0]}}), k2 = new Jt({props: {time: t3[0].time}});
      let N2 = t3[6] && He(), F2 = t3[4](t3[0]), D2 = [];
      for (let e3 = 0; e3 < F2.length; e3 += 1)
        D2[e3] = Ke(Je(t3, F2, e3));
      const T2 = (t4) => main2.v(D2[t4], 1, 1, () => {
        D2[t4] = null;
      });
      return {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), d2 = main2.e("p"), main2.q(w2.$$.fragment), v2 = main2.a(), main2.q(x2.$$.fragment), b2 = main2.a(), main2.q(k2.$$.fragment), M2 = main2.a(), N2 && N2.c(), _2 = main2.a();
        for (let t4 = 0; t4 < D2.length; t4 += 1)
          D2[t4].c();
        C2 = main2.a(), O2 = main2.t(z2), S2 = main2.a(), j2 = main2.e("p"), I2 = main2.t(W2), main2.b(d2, "class", "truncate"), main2.b(j2, "class", "ml-1 mt-1 text-sm truncate");
      }, m(r2, s2) {
        main2.r(e2, r2, s2), main2.c(r2, n2, s2), main2.c(r2, d2, s2), main2.r(w2, d2, null), main2.d(d2, v2), main2.r(x2, d2, null), main2.d(d2, b2), main2.r(k2, d2, null), main2.d(d2, M2), N2 && N2.m(d2, null), main2.d(d2, _2);
        for (let t4 = 0; t4 < D2.length; t4 += 1)
          D2[t4].m(d2, null);
        main2.d(d2, C2), main2.d(d2, O2), main2.c(r2, S2, s2), main2.c(r2, j2, s2), main2.d(j2, I2), P2 = true, A2 || (E2 = main2.A(j2, "click", function() {
          main2.F(t3[3]) && t3[3].apply(this, arguments);
        }), A2 = true);
      }, p(n3, r2) {
        t3 = n3;
        const s2 = {};
        1 & r2 && (s2.pm = t3[0]), e2.$set(s2);
        const o2 = {};
        1 & r2 && (o2.pm = t3[0]), w2.$set(o2);
        const i2 = {};
        1 & r2 && (i2.pm = t3[0]), x2.$set(i2);
        const c2 = {};
        if (1 & r2 && (c2.time = t3[0].time), k2.$set(c2), t3[6] ? N2 || (N2 = He(), N2.c(), N2.m(d2, _2)) : N2 && (N2.d(1), N2 = null), 17 & r2) {
          let e3;
          for (F2 = t3[4](t3[0]), e3 = 0; e3 < F2.length; e3 += 1) {
            const n4 = Je(t3, F2, e3);
            D2[e3] ? (D2[e3].p(n4, r2), main2.p(D2[e3], 1)) : (D2[e3] = Ke(n4), D2[e3].c(), main2.p(D2[e3], 1), D2[e3].m(d2, C2));
          }
          for (main2.D(), e3 = F2.length; e3 < D2.length; e3 += 1)
            T2(e3);
          main2.x();
        }
        (!P2 || 1 & r2) && z2 !== (z2 = t3[0].subject + "") && main2.o(O2, z2), (!P2 || 1 & r2) && W2 !== (W2 = (t3[0].preview || "...") + "") && main2.o(I2, W2);
      }, i(t4) {
        if (!P2) {
          main2.p(e2.$$.fragment, t4), main2.p(w2.$$.fragment, t4), main2.p(x2.$$.fragment, t4), main2.p(k2.$$.fragment, t4);
          for (let t5 = 0; t5 < F2.length; t5 += 1)
            main2.p(D2[t5]);
          P2 = true;
        }
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(w2.$$.fragment, t4), main2.v(x2.$$.fragment, t4), main2.v(k2.$$.fragment, t4), D2 = D2.filter(Boolean);
        for (let t5 = 0; t5 < D2.length; t5 += 1)
          main2.v(D2[t5]);
        P2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), t4 && main2.f(d2), main2.w(w2), main2.w(x2), main2.w(k2), N2 && N2.d(), main2.y(D2, t4), t4 && main2.f(S2), t4 && main2.f(j2), A2 = false, E2();
      }};
    }
    function He(t3) {
      let e2;
      return {c() {
        e2 = main2.e("br");
      }, m(t4, n2) {
        main2.c(t4, e2, n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Ke(t3) {
      let e2, n2;
      return e2 = new Ft({props: {tag: t3[13]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        17 & n3 && (r2.tag = t4[13]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function Ze(t3) {
      let e2, n2, s2, o2, c2;
      const l2 = [qe, Ve], a3 = [];
      function d2(t4, e3) {
        return t4[0].member ? 0 : 1;
      }
      return n2 = d2(t3), s2 = a3[n2] = l2[n2](t3), {c() {
        e2 = main2.e("div"), s2.c();
      }, m(t4, r2) {
        main2.c(t4, e2, r2), a3[n2].m(e2, null), c2 = true;
      }, p(t4, r2) {
        let o3 = n2;
        n2 = d2(t4), n2 === o3 ? a3[n2].p(t4, r2) : (main2.D(), main2.v(a3[o3], 1, 1, () => {
          a3[o3] = null;
        }), main2.x(), s2 = a3[n2], s2 ? s2.p(t4, r2) : (s2 = a3[n2] = l2[n2](t4), s2.c()), main2.p(s2, 1), s2.m(e2, null));
      }, i(t4) {
        c2 || (main2.p(s2), o2 || main2.j(() => {
          o2 = main2.V(e2, a, {duration: 500}), o2.start();
        }), c2 = true);
      }, o(t4) {
        main2.v(s2), c2 = false;
      }, d(t4) {
        t4 && main2.f(e2), a3[n2].d();
      }};
    }
    function Qe(t3) {
      let e2, r2, s2 = t3[0], o2 = Xe(t3);
      return {c() {
        o2.c(), e2 = main2.G();
      }, m(t4, n2) {
        o2.m(t4, n2), main2.c(t4, e2, n2), r2 = true;
      }, p(t4, r3) {
        1 & r3 && main2.s(s2, s2 = t4[0]) ? (main2.D(), main2.v(o2, 1, 1, main2.n), main2.x(), o2 = Xe(t4), o2.c(), main2.p(o2), o2.m(e2.parentNode, e2)) : o2.p(t4, r3);
      }, i(t4) {
        r2 || (main2.p(o2), r2 = true);
      }, o(t4) {
        main2.v(o2), r2 = false;
      }, d(t4) {
        t4 && main2.f(e2), o2.d(t4);
      }};
    }
    function Ue(t3) {
      let e2, n2, o2, l2, a3, d2, h2, p2, w2 = t3[0].subject + "", v2 = " " + t3[0].preview;
      return e2 = new ne({props: {pm: t3[0], size: ""}}), o2 = new Jt({props: {time: t3[0].time, size: ""}}), {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), main2.q(o2.$$.fragment), l2 = main2.a(), a3 = main2.e("strong"), d2 = main2.t(w2), h2 = main2.t(v2);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), main2.c(t4, n2, r2), main2.r(o2, t4, r2), main2.c(t4, l2, r2), main2.c(t4, a3, r2), main2.d(a3, d2), main2.c(t4, h2, r2), p2 = true;
      }, p(t4, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = t4[0]), e2.$set(r2);
        const s2 = {};
        1 & n3 && (s2.time = t4[0].time), o2.$set(s2), (!p2 || 1 & n3) && w2 !== (w2 = t4[0].subject + "") && main2.o(d2, w2), (!p2 || 1 & n3) && v2 !== (v2 = " " + t4[0].preview) && main2.o(h2, v2);
      }, i(t4) {
        p2 || (main2.p(e2.$$.fragment, t4), main2.p(o2.$$.fragment, t4), p2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(o2.$$.fragment, t4), p2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), main2.w(o2, t4), t4 && main2.f(l2), t4 && main2.f(a3), t4 && main2.f(h2);
      }};
    }
    function Xe(t3) {
      let e2, n2, s2, c2 = t3[0].member && Ue(t3);
      return {c() {
        e2 = main2.e("li"), c2 && c2.c(), main2.b(e2, "class", "border-b-2 rounded w-full text-gray-500 truncate"), main2.h(e2, "font-size", "10px"), main2.h(e2, "height", "20px");
      }, m(t4, n3) {
        main2.c(t4, e2, n3), c2 && c2.m(e2, null), s2 = true;
      }, p(t4, n3) {
        t4[0].member ? c2 ? (c2.p(t4, n3), 1 & n3 && main2.p(c2, 1)) : (c2 = Ue(t4), c2.c(), main2.p(c2, 1), c2.m(e2, null)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x());
      }, i(t4) {
        s2 || (main2.p(c2), n2 || main2.j(() => {
          n2 = main2.V(e2, a, {duration: 300}), n2.start();
        }), s2 = true);
      }, o(t4) {
        main2.v(c2), s2 = false;
      }, d(t4) {
        t4 && main2.f(e2), c2 && c2.d();
      }};
    }
    function Ye(t3) {
      let e2, c2, l2, a3, m2, $2 = t3[0], y2 = Ze(t3), w2 = t3[1] && Qe(t3);
      return {c() {
        e2 = main2.e("li"), y2.c(), l2 = main2.a(), w2 && w2.c(), a3 = main2.G(), main2.b(e2, "id", c2 = "MailItem-" + t3[2]), main2.h(e2, "height", t3[5] ? "62px" : "84px"), main2.b(e2, "class", "border-b-2 rounded p-1 w-full"), main2.T(e2, "hidden", t3[1]);
      }, m(t4, n2) {
        main2.c(t4, e2, n2), y2.m(e2, null), main2.c(t4, l2, n2), w2 && w2.m(t4, n2), main2.c(t4, a3, n2), m2 = true;
      }, p(t4, [r2]) {
        1 & r2 && main2.s($2, $2 = t4[0]) ? (main2.D(), main2.v(y2, 1, 1, main2.n), main2.x(), y2 = Ze(t4), y2.c(), main2.p(y2), y2.m(e2, null)) : y2.p(t4, r2), (!m2 || 4 & r2 && c2 !== (c2 = "MailItem-" + t4[2])) && main2.b(e2, "id", c2), (!m2 || 32 & r2) && main2.h(e2, "height", t4[5] ? "62px" : "84px"), 2 & r2 && main2.T(e2, "hidden", t4[1]), t4[1] ? w2 ? (w2.p(t4, r2), 2 & r2 && main2.p(w2, 1)) : (w2 = Qe(t4), w2.c(), main2.p(w2, 1), w2.m(a3.parentNode, a3)) : w2 && (main2.D(), main2.v(w2, 1, 1, () => {
          w2 = null;
        }), main2.x());
      }, i(t4) {
        m2 || (main2.p(y2), main2.p(w2), m2 = true);
      }, o(t4) {
        main2.v(y2), main2.v(w2), m2 = false;
      }, d(t4) {
        t4 && main2.f(e2), y2.d(t4), t4 && main2.f(l2), w2 && w2.d(t4), t4 && main2.f(a3);
      }};
    }
    function Ge(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, h2;
      main2.g(t3, gt, (t4) => n2(11, o2 = t4)), main2.g(t3, wt, (t4) => n2(12, i2 = t4)), main2.g(t3, main2.P, (t4) => n2(7, c2 = t4)), main2.g(t3, main2.Q, (t4) => n2(8, l2 = t4)), main2.g(t3, it, (t4) => n2(9, a3 = t4)), main2.g(t3, ot, (t4) => n2(10, u2 = t4)), main2.g(t3, vt, (t4) => n2(5, d2 = t4)), main2.g(t3, xt, (t4) => n2(6, h2 = t4));
      let {pm: f2} = e2, {hidden: p2} = e2, {index: g2} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(0, f2 = t4.pm), "hidden" in t4 && n2(1, p2 = t4.hidden), "index" in t4 && n2(2, g2 = t4.index);
      }, t3.$$.update = () => {
        385 & t3.$$.dirty && n2(3, r2 = () => {
          f2 && (main2.R(gt, o2 = f2, o2), main2.R(wt, i2 = false, i2), c2("./", Object.assign(Object.assign({}, l2), {showList: false})));
        }), 1536 & t3.$$.dirty && n2(4, s2 = (t4) => a3.has(t4.id) ? Array.from(a3.get(t4.id)).map((t5) => u2.get(t5.value)) : []);
      }, [f2, p2, g2, r2, s2, d2, h2, c2, l2, a3, u2];
    }
    class tn extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Ge, Ye, main2.s, {pm: 0, hidden: 1, index: 2});
      }
    }
    function en(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[9] = e2[n2], r2;
    }
    function nn(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("img"), main2.b(e2, "class", "ml-5 m-3 w-10/12"), main2.b(e2, "alt", "no mail"), e2.src !== (n2 = "./img/izone-logo-card.png") && main2.b(e2, "src", "./img/izone-logo-card.png");
      }, m(t4, n3) {
        main2.c(t4, e2, n3);
      }, p: main2.n, i(t4) {
        s2 || main2.j(() => {
          s2 = main2.V(e2, a, {duration: 300}), s2.start();
        });
      }, o: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function rn(t3) {
      let e2, r2, s2 = t3[0], o2 = on(t3);
      return {c() {
        o2.c(), e2 = main2.G();
      }, m(t4, n2) {
        o2.m(t4, n2), main2.c(t4, e2, n2), r2 = true;
      }, p(t4, r3) {
        1 & r3 && main2.s(s2, s2 = t4[0]) ? (main2.D(), main2.v(o2, 1, 1, main2.n), main2.x(), o2 = on(t4), o2.c(), main2.p(o2), o2.m(e2.parentNode, e2)) : o2.p(t4, r3);
      }, i(t4) {
        r2 || (main2.p(o2), r2 = true);
      }, o(t4) {
        main2.v(o2), r2 = false;
      }, d(t4) {
        t4 && main2.f(e2), o2.d(t4);
      }};
    }
    function sn(t3) {
      let e2, n2;
      return e2 = new Ft({props: {tag: t3[9]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        5 & n3 && (r2.tag = t4[9]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function on(t3) {
      let e2, n2, d2, v2, b2, k2, M2, _2, C2, O2, S2, j2, I2, P2, A2, E2, z2, W2, N2, F2, D2, T2, V2, q2, H2 = t3[0].subject + "", Z2 = t3[0].preview + "";
      n2 = new de({props: {pm: t3[0]}}), C2 = new Gt({props: {pm: t3[0]}}), I2 = new ne({props: {pm: t3[0]}}), A2 = new Jt({props: {time: t3[0].time}});
      let Q2 = t3[2](t3[0]), U2 = [];
      for (let e3 = 0; e3 < Q2.length; e3 += 1)
        U2[e3] = sn(en(t3, Q2, e3));
      const X2 = (t4) => main2.v(U2[t4], 1, 1, () => {
        U2[t4] = null;
      });
      return {c() {
        e2 = main2.e("div"), main2.q(n2.$$.fragment), d2 = main2.a(), v2 = main2.e("h4"), b2 = main2.t(H2), M2 = main2.a(), _2 = main2.e("div"), main2.q(C2.$$.fragment), S2 = main2.a(), j2 = main2.e("div"), main2.q(I2.$$.fragment), P2 = main2.a(), main2.q(A2.$$.fragment), E2 = main2.a();
        for (let t4 = 0; t4 < U2.length; t4 += 1)
          U2[t4].c();
        W2 = main2.a(), N2 = main2.e("p"), F2 = main2.t(Z2), main2.b(v2, "class", "w-10/12 h-12"), main2.b(_2, "class", "absolute inset-y-0 right-0 m-2"), main2.b(j2, "class", "flex flex-wrap"), main2.b(N2, "class", "m-1 text-sm");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.r(n2, e2, null), main2.d(e2, d2), main2.d(e2, v2), main2.d(v2, b2), main2.c(r2, M2, s2), main2.c(r2, _2, s2), main2.r(C2, _2, null), main2.c(r2, S2, s2), main2.c(r2, j2, s2), main2.r(I2, j2, null), main2.d(j2, P2), main2.r(A2, j2, null), main2.d(j2, E2);
        for (let t4 = 0; t4 < U2.length; t4 += 1)
          U2[t4].m(j2, null);
        main2.c(r2, W2, s2), main2.c(r2, N2, s2), main2.d(N2, F2), T2 = true, V2 || (q2 = [main2.A(e2, "click", function() {
          main2.F(t3[3]) && t3[3].apply(this, arguments);
        }), main2.A(N2, "click", function() {
          main2.F(t3[3]) && t3[3].apply(this, arguments);
        })], V2 = true);
      }, p(e3, r2) {
        t3 = e3;
        const s2 = {};
        1 & r2 && (s2.pm = t3[0]), n2.$set(s2), (!T2 || 1 & r2) && H2 !== (H2 = t3[0].subject + "") && main2.o(b2, H2);
        const o2 = {};
        1 & r2 && (o2.pm = t3[0]), C2.$set(o2);
        const i2 = {};
        1 & r2 && (i2.pm = t3[0]), I2.$set(i2);
        const c2 = {};
        if (1 & r2 && (c2.time = t3[0].time), A2.$set(c2), 5 & r2) {
          let e4;
          for (Q2 = t3[2](t3[0]), e4 = 0; e4 < Q2.length; e4 += 1) {
            const n3 = en(t3, Q2, e4);
            U2[e4] ? (U2[e4].p(n3, r2), main2.p(U2[e4], 1)) : (U2[e4] = sn(n3), U2[e4].c(), main2.p(U2[e4], 1), U2[e4].m(j2, null));
          }
          for (main2.D(), e4 = Q2.length; e4 < U2.length; e4 += 1)
            X2(e4);
          main2.x();
        }
        (!T2 || 1 & r2) && Z2 !== (Z2 = t3[0].preview + "") && main2.o(F2, Z2);
      }, i(t4) {
        if (!T2) {
          main2.p(n2.$$.fragment, t4), k2 || main2.j(() => {
            k2 = main2.V(e2, a, {duration: 300}), k2.start();
          }), main2.p(C2.$$.fragment, t4), O2 || main2.j(() => {
            O2 = main2.V(_2, a, {duration: 300}), O2.start();
          }), main2.p(I2.$$.fragment, t4), main2.p(A2.$$.fragment, t4);
          for (let t5 = 0; t5 < Q2.length; t5 += 1)
            main2.p(U2[t5]);
          z2 || main2.j(() => {
            z2 = main2.V(j2, a, {duration: 300}), z2.start();
          }), D2 || main2.j(() => {
            D2 = main2.V(N2, a, {duration: 500}), D2.start();
          }), T2 = true;
        }
      }, o(t4) {
        main2.v(n2.$$.fragment, t4), main2.v(C2.$$.fragment, t4), main2.v(I2.$$.fragment, t4), main2.v(A2.$$.fragment, t4), U2 = U2.filter(Boolean);
        for (let t5 = 0; t5 < U2.length; t5 += 1)
          main2.v(U2[t5]);
        T2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.w(n2), t4 && main2.f(M2), t4 && main2.f(_2), main2.w(C2), t4 && main2.f(S2), t4 && main2.f(j2), main2.w(I2), main2.w(A2), main2.y(U2, t4), t4 && main2.f(W2), t4 && main2.f(N2), V2 = false, main2.B(q2);
      }};
    }
    function cn(t3) {
      let e2, n2, s2, c2, l2;
      const a3 = [rn, nn], d2 = [];
      function m2(t4, e3) {
        return t4[0].member ? 0 : 1;
      }
      return n2 = m2(t3), s2 = d2[n2] = a3[n2](t3), {c() {
        e2 = main2.e("div"), s2.c(), main2.b(e2, "id", c2 = "MailCard-" + t3[1]), main2.h(e2, "height", "156px"), main2.b(e2, "class", "\r\nw-64 m-3 p-1\r\nrelative overflow-y-scroll\r\nbg-white shadow-md rounded-md");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), d2[n2].m(e2, null), l2 = true;
      }, p(t4, [r2]) {
        let i2 = n2;
        n2 = m2(t4), n2 === i2 ? d2[n2].p(t4, r2) : (main2.D(), main2.v(d2[i2], 1, 1, () => {
          d2[i2] = null;
        }), main2.x(), s2 = d2[n2], s2 ? s2.p(t4, r2) : (s2 = d2[n2] = a3[n2](t4), s2.c()), main2.p(s2, 1), s2.m(e2, null)), (!l2 || 2 & r2 && c2 !== (c2 = "MailCard-" + t4[1])) && main2.b(e2, "id", c2);
      }, i(t4) {
        l2 || (main2.p(s2), l2 = true);
      }, o(t4) {
        main2.v(s2), l2 = false;
      }, d(t4) {
        t4 && main2.f(e2), d2[n2].d();
      }};
    }
    function ln(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3;
      main2.g(t3, it, (t4) => n2(4, o2 = t4)), main2.g(t3, gt, (t4) => n2(7, i2 = t4)), main2.g(t3, wt, (t4) => n2(8, c2 = t4)), main2.g(t3, main2.P, (t4) => n2(5, l2 = t4)), main2.g(t3, main2.Q, (t4) => n2(6, a3 = t4));
      let {pm: u2} = e2, {index: d2} = e2;
      return t3.$$set = (t4) => {
        "pm" in t4 && n2(0, u2 = t4.pm), "index" in t4 && n2(1, d2 = t4.index);
      }, t3.$$.update = () => {
        16 & t3.$$.dirty && n2(2, r2 = (t4) => o2.has(t4.id) ? Array.from(o2.get(t4.id)) : []), 97 & t3.$$.dirty && n2(3, s2 = () => {
          u2 && (main2.R(gt, i2 = u2, i2), main2.R(wt, c2 = false, c2), l2("./", Object.assign(Object.assign({}, a3), {showList: false})));
        });
      }, [u2, d2, r2, s2, o2, l2, a3];
    }
    class an extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, ln, cn, main2.s, {pm: 0, index: 1});
      }
    }
    function un(t3) {
      return Array.isArray ? Array.isArray(t3) : $n(t3) === "[object Array]";
    }
    function dn(t3) {
      return typeof t3 == "string";
    }
    function hn(t3) {
      return typeof t3 == "number";
    }
    function fn(t3) {
      return t3 === true || t3 === false || function(t4) {
        return pn(t4) && t4 !== null;
      }(t3) && $n(t3) == "[object Boolean]";
    }
    function pn(t3) {
      return typeof t3 == "object";
    }
    function gn(t3) {
      return t3 != null;
    }
    function mn(t3) {
      return !t3.trim().length;
    }
    function $n(t3) {
      return t3 == null ? t3 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t3);
    }
    const yn = Object.prototype.hasOwnProperty;
    class wn {
      constructor(t3) {
        this._keys = [], this._keyMap = {};
        let e2 = 0;
        t3.forEach((t4) => {
          let n2 = vn(t4);
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
    function vn(t3) {
      let e2 = null, n2 = null, r2 = null, s2 = 1;
      if (dn(t3) || un(t3))
        r2 = t3, e2 = xn(t3), n2 = bn(t3);
      else {
        if (!yn.call(t3, "name"))
          throw new Error(((t4) => `Missing ${t4} property in key`)("name"));
        const o2 = t3.name;
        if (r2 = o2, yn.call(t3, "weight") && (s2 = t3.weight, s2 <= 0))
          throw new Error(((t4) => `Property 'weight' in key '${t4}' must be a positive integer`)(o2));
        e2 = xn(o2), n2 = bn(o2);
      }
      return {path: e2, id: n2, weight: s2, src: r2};
    }
    function xn(t3) {
      return un(t3) ? t3 : t3.split(".");
    }
    function bn(t3) {
      return un(t3) ? t3.join(".") : t3;
    }
    var kn = {isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: (t3, e2) => t3.score === e2.score ? t3.idx < e2.idx ? -1 : 1 : t3.score < e2.score ? -1 : 1, includeMatches: false, findAllMatches: false, minMatchCharLength: 1, location: 0, threshold: 0.6, distance: 100, ...{useExtendedSearch: false, getFn: function(t3, e2) {
      let n2 = [], r2 = false;
      const s2 = (t4, e3, o2) => {
        if (gn(t4))
          if (e3[o2]) {
            const i2 = t4[e3[o2]];
            if (!gn(i2))
              return;
            if (o2 === e3.length - 1 && (dn(i2) || hn(i2) || fn(i2)))
              n2.push(function(t5) {
                return t5 == null ? "" : function(t6) {
                  if (typeof t6 == "string")
                    return t6;
                  let e4 = t6 + "";
                  return e4 == "0" && 1 / t6 == -1 / 0 ? "-0" : e4;
                }(t5);
              }(i2));
            else if (un(i2)) {
              r2 = true;
              for (let t5 = 0, n3 = i2.length; t5 < n3; t5 += 1)
                s2(i2[t5], e3, o2 + 1);
            } else
              e3.length && s2(i2, e3, o2 + 1);
          } else
            n2.push(t4);
      };
      return s2(t3, dn(e2) ? e2.split(".") : e2, 0), r2 ? n2 : n2[0];
    }, ignoreLocation: false, ignoreFieldNorm: false}};
    const Mn = /[^ ]+/g;
    class _n {
      constructor({getFn: t3 = kn.getFn} = {}) {
        this.norm = function(t4 = 3) {
          const e2 = new Map(), n2 = Math.pow(10, t4);
          return {get(t5) {
            const r2 = t5.match(Mn).length;
            if (e2.has(r2))
              return e2.get(r2);
            const s2 = 1 / Math.sqrt(r2), o2 = parseFloat(Math.round(s2 * n2) / n2);
            return e2.set(r2, o2), o2;
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
        !this.isCreated && this.docs.length && (this.isCreated = true, dn(this.docs[0]) ? this.docs.forEach((t3, e2) => {
          this._addString(t3, e2);
        }) : this.docs.forEach((t3, e2) => {
          this._addObject(t3, e2);
        }), this.norm.clear());
      }
      add(t3) {
        const e2 = this.size();
        dn(t3) ? this._addString(t3, e2) : this._addObject(t3, e2);
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
        if (!gn(t3) || mn(t3))
          return;
        let n2 = {v: t3, i: e2, n: this.norm.get(t3)};
        this.records.push(n2);
      }
      _addObject(t3, e2) {
        let n2 = {i: e2, $: {}};
        this.keys.forEach((e3, r2) => {
          let s2 = this.getFn(t3, e3.path);
          if (gn(s2)) {
            if (un(s2)) {
              let t4 = [];
              const e4 = [{nestedArrIndex: -1, value: s2}];
              for (; e4.length; ) {
                const {nestedArrIndex: n3, value: r3} = e4.pop();
                if (gn(r3))
                  if (dn(r3) && !mn(r3)) {
                    let e5 = {v: r3, i: n3, n: this.norm.get(r3)};
                    t4.push(e5);
                  } else
                    un(r3) && r3.forEach((t5, n4) => {
                      e4.push({nestedArrIndex: n4, value: t5});
                    });
              }
              n2.$[r2] = t4;
            } else if (!mn(s2)) {
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
    function Cn(t3, e2, {getFn: n2 = kn.getFn} = {}) {
      const r2 = new _n({getFn: n2});
      return r2.setKeys(t3.map(vn)), r2.setSources(e2), r2.create(), r2;
    }
    function On(t3, {errors: e2 = 0, currentLocation: n2 = 0, expectedLocation: r2 = 0, distance: s2 = kn.distance, ignoreLocation: o2 = kn.ignoreLocation} = {}) {
      const i2 = e2 / t3.length;
      if (o2)
        return i2;
      const c2 = Math.abs(r2 - n2);
      return s2 ? i2 + c2 / s2 : c2 ? 1 : i2;
    }
    function Sn(t3, e2, n2, {location: r2 = kn.location, distance: s2 = kn.distance, threshold: o2 = kn.threshold, findAllMatches: i2 = kn.findAllMatches, minMatchCharLength: c2 = kn.minMatchCharLength, includeMatches: l2 = kn.includeMatches, ignoreLocation: a3 = kn.ignoreLocation} = {}) {
      if (e2.length > 32)
        throw new Error(`Pattern length exceeds max of ${32}.`);
      const u2 = e2.length, d2 = t3.length, h2 = Math.max(0, Math.min(r2, d2));
      let f2 = o2, p2 = h2;
      const g2 = c2 > 1 || l2, m2 = g2 ? Array(d2) : [];
      let $2;
      for (; ($2 = t3.indexOf(e2, p2)) > -1; ) {
        let t4 = On(e2, {currentLocation: $2, expectedLocation: h2, distance: s2, ignoreLocation: a3});
        if (f2 = Math.min(t4, f2), p2 = $2 + u2, g2) {
          let t5 = 0;
          for (; t5 < u2; )
            m2[$2 + t5] = 1, t5 += 1;
        }
      }
      p2 = -1;
      let y2 = [], w2 = 1, v2 = u2 + d2;
      const x2 = 1 << u2 - 1;
      for (let r3 = 0; r3 < u2; r3 += 1) {
        let o3 = 0, c3 = v2;
        for (; o3 < c3; ) {
          On(e2, {errors: r3, currentLocation: h2 + c3, expectedLocation: h2, distance: s2, ignoreLocation: a3}) <= f2 ? o3 = c3 : v2 = c3, c3 = Math.floor((v2 - o3) / 2 + o3);
        }
        v2 = c3;
        let l3 = Math.max(1, h2 - c3 + 1), $3 = i2 ? d2 : Math.min(h2 + c3, d2) + u2, b3 = Array($3 + 2);
        b3[$3 + 1] = (1 << r3) - 1;
        for (let o4 = $3; o4 >= l3; o4 -= 1) {
          let i3 = o4 - 1, c4 = n2[t3.charAt(i3)];
          if (g2 && (m2[i3] = +!!c4), b3[o4] = (b3[o4 + 1] << 1 | 1) & c4, r3 && (b3[o4] |= (y2[o4 + 1] | y2[o4]) << 1 | 1 | y2[o4 + 1]), b3[o4] & x2 && (w2 = On(e2, {errors: r3, currentLocation: i3, expectedLocation: h2, distance: s2, ignoreLocation: a3}), w2 <= f2)) {
            if (f2 = w2, p2 = i3, p2 <= h2)
              break;
            l3 = Math.max(1, 2 * h2 - p2);
          }
        }
        if (On(e2, {errors: r3 + 1, currentLocation: h2, expectedLocation: h2, distance: s2, ignoreLocation: a3}) > f2)
          break;
        y2 = b3;
      }
      const b2 = {isMatch: p2 >= 0, score: Math.max(1e-3, w2)};
      if (g2) {
        const t4 = function(t5 = [], e3 = kn.minMatchCharLength) {
          let n3 = [], r3 = -1, s3 = -1, o3 = 0;
          for (let i3 = t5.length; o3 < i3; o3 += 1) {
            let i4 = t5[o3];
            i4 && r3 === -1 ? r3 = o3 : i4 || r3 === -1 || (s3 = o3 - 1, s3 - r3 + 1 >= e3 && n3.push([r3, s3]), r3 = -1);
          }
          return t5[o3 - 1] && o3 - r3 >= e3 && n3.push([r3, o3 - 1]), n3;
        }(m2, c2);
        t4.length ? l2 && (b2.indices = t4) : b2.isMatch = false;
      }
      return b2;
    }
    function jn(t3) {
      let e2 = {};
      for (let n2 = 0, r2 = t3.length; n2 < r2; n2 += 1) {
        const s2 = t3.charAt(n2);
        e2[s2] = (e2[s2] || 0) | 1 << r2 - n2 - 1;
      }
      return e2;
    }
    class Ln {
      constructor(t3, {location: e2 = kn.location, threshold: n2 = kn.threshold, distance: r2 = kn.distance, includeMatches: s2 = kn.includeMatches, findAllMatches: o2 = kn.findAllMatches, minMatchCharLength: i2 = kn.minMatchCharLength, isCaseSensitive: c2 = kn.isCaseSensitive, ignoreLocation: l2 = kn.ignoreLocation} = {}) {
        if (this.options = {location: e2, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: o2, minMatchCharLength: i2, isCaseSensitive: c2, ignoreLocation: l2}, this.pattern = c2 ? t3 : t3.toLowerCase(), this.chunks = [], !this.pattern.length)
          return;
        const a3 = (t4, e3) => {
          this.chunks.push({pattern: t4, alphabet: jn(t4), startIndex: e3});
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
        const {location: r2, distance: s2, threshold: o2, findAllMatches: i2, minMatchCharLength: c2, ignoreLocation: l2} = this.options;
        let a3 = [], u2 = 0, d2 = false;
        this.chunks.forEach(({pattern: e3, alphabet: h3, startIndex: f2}) => {
          const {isMatch: p2, score: g2, indices: m2} = Sn(t3, e3, h3, {location: r2 + f2, distance: s2, threshold: o2, findAllMatches: i2, minMatchCharLength: c2, includeMatches: n2, ignoreLocation: l2});
          p2 && (d2 = true), u2 += g2, p2 && m2 && (a3 = [...a3, ...m2]);
        });
        let h2 = {isMatch: d2, score: d2 ? u2 / this.chunks.length : 1};
        return d2 && n2 && (h2.indices = a3), h2;
      }
    }
    class In {
      constructor(t3) {
        this.pattern = t3;
      }
      static isMultiMatch(t3) {
        return Pn(t3, this.multiRegex);
      }
      static isSingleMatch(t3) {
        return Pn(t3, this.singleRegex);
      }
      search() {
      }
    }
    function Pn(t3, e2) {
      const n2 = t3.match(e2);
      return n2 ? n2[1] : null;
    }
    class Bn extends In {
      constructor(t3, {location: e2 = kn.location, threshold: n2 = kn.threshold, distance: r2 = kn.distance, includeMatches: s2 = kn.includeMatches, findAllMatches: o2 = kn.findAllMatches, minMatchCharLength: i2 = kn.minMatchCharLength, isCaseSensitive: c2 = kn.isCaseSensitive, ignoreLocation: l2 = kn.ignoreLocation} = {}) {
        super(t3), this._bitapSearch = new Ln(t3, {location: e2, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: o2, minMatchCharLength: i2, isCaseSensitive: c2, ignoreLocation: l2});
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
    class An extends In {
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
        const o2 = !!r2.length;
        return {isMatch: o2, score: o2 ? 0 : 1, indices: r2};
      }
    }
    const En = [class extends In {
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
    }, An, class extends In {
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
    }, class extends In {
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
    }, class extends In {
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
    }, class extends In {
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
    }, class extends In {
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
    }, Bn];
    const zn = En.length;
    const Wn = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    const Nn = new Set([Bn.type, An.type]);
    class Rn {
      constructor(t3, {isCaseSensitive: e2 = kn.isCaseSensitive, includeMatches: n2 = kn.includeMatches, minMatchCharLength: r2 = kn.minMatchCharLength, ignoreLocation: s2 = kn.ignoreLocation, findAllMatches: o2 = kn.findAllMatches, location: i2 = kn.location, threshold: c2 = kn.threshold, distance: l2 = kn.distance} = {}) {
        this.query = null, this.options = {isCaseSensitive: e2, includeMatches: n2, minMatchCharLength: r2, findAllMatches: o2, ignoreLocation: s2, location: i2, threshold: c2, distance: l2}, this.pattern = e2 ? t3 : t3.toLowerCase(), this.query = function(t4, e3 = {}) {
          return t4.split("|").map((t5) => {
            let n3 = t5.trim().split(Wn).filter((t6) => t6 && !!t6.trim()), r3 = [];
            for (let t6 = 0, s3 = n3.length; t6 < s3; t6 += 1) {
              const s4 = n3[t6];
              let o3 = false, i3 = -1;
              for (; !o3 && ++i3 < zn; ) {
                const t7 = En[i3];
                let n4 = t7.isMultiMatch(s4);
                n4 && (r3.push(new t7(n4, e3)), o3 = true);
              }
              if (!o3)
                for (i3 = -1; ++i3 < zn; ) {
                  const t7 = En[i3];
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
        let s2 = 0, o2 = [], i2 = 0;
        for (let r3 = 0, c2 = e2.length; r3 < c2; r3 += 1) {
          const c3 = e2[r3];
          o2.length = 0, s2 = 0;
          for (let e3 = 0, r4 = c3.length; e3 < r4; e3 += 1) {
            const r5 = c3[e3], {isMatch: l2, indices: a3, score: u2} = r5.search(t3);
            if (!l2) {
              i2 = 0, s2 = 0, o2.length = 0;
              break;
            }
            if (s2 += 1, i2 += u2, n2) {
              const t4 = r5.constructor.type;
              Nn.has(t4) ? o2 = [...o2, ...a3] : o2.push(a3);
            }
          }
          if (s2) {
            let t4 = {isMatch: true, score: i2 / s2};
            return n2 && (t4.indices = o2), t4;
          }
        }
        return {isMatch: false, score: 1};
      }
    }
    const Fn = [];
    function Dn(t3, e2) {
      for (let n2 = 0, r2 = Fn.length; n2 < r2; n2 += 1) {
        let r3 = Fn[n2];
        if (r3.condition(t3, e2))
          return new r3(t3, e2);
      }
      return new Ln(t3, e2);
    }
    const Tn = "$and";
    const Jn = "$or";
    const Vn = "$path";
    const qn = "$val";
    const Hn = (t3) => !(!t3[Tn] && !t3[Jn]);
    const Kn = (t3) => ({[Tn]: Object.keys(t3).map((e2) => ({[e2]: t3[e2]}))});
    function Zn(t3, e2, {auto: n2 = true} = {}) {
      const r2 = (t4) => {
        let s2 = Object.keys(t4);
        const o2 = ((t5) => !!t5[Vn])(t4);
        if (!o2 && s2.length > 1 && !Hn(t4))
          return r2(Kn(t4));
        if (((t5) => !un(t5) && pn(t5) && !Hn(t5))(t4)) {
          const r3 = o2 ? t4[Vn] : s2[0], i3 = o2 ? t4[qn] : t4[r3];
          if (!dn(i3))
            throw new Error(((t5) => `Invalid value for key ${t5}`)(r3));
          const c2 = {keyId: bn(r3), pattern: i3};
          return n2 && (c2.searcher = Dn(i3, e2)), c2;
        }
        let i2 = {children: [], operator: s2[0]};
        return s2.forEach((e3) => {
          const n3 = t4[e3];
          un(n3) && n3.forEach((t5) => {
            i2.children.push(r2(t5));
          });
        }), i2;
      };
      return Hn(t3) || (t3 = Kn(t3)), r2(t3);
    }
    function Qn(t3, e2) {
      const n2 = t3.matches;
      e2.matches = [], gn(n2) && n2.forEach((t4) => {
        if (!gn(t4.indices) || !t4.indices.length)
          return;
        const {indices: n3, value: r2} = t4;
        let s2 = {indices: n3, value: r2};
        t4.key && (s2.key = t4.key.src), t4.idx > -1 && (s2.refIndex = t4.idx), e2.matches.push(s2);
      });
    }
    function Un(t3, e2) {
      e2.score = t3.score;
    }
    class Xn {
      constructor(t3, e2 = {}, n2) {
        this.options = {...kn, ...e2}, this.options.useExtendedSearch, this._keyStore = new wn(this.options.keys), this.setCollection(t3, n2);
      }
      setCollection(t3, e2) {
        if (this._docs = t3, e2 && !(e2 instanceof _n))
          throw new Error("Incorrect 'index' type");
        this._myIndex = e2 || Cn(this.options.keys, this._docs, {getFn: this.options.getFn});
      }
      add(t3) {
        gn(t3) && (this._docs.push(t3), this._myIndex.add(t3));
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
        const {includeMatches: n2, includeScore: r2, shouldSort: s2, sortFn: o2, ignoreFieldNorm: i2} = this.options;
        let c2 = dn(t3) ? dn(this._docs[0]) ? this._searchStringList(t3) : this._searchObjectList(t3) : this._searchLogical(t3);
        return function(t4, {ignoreFieldNorm: e3 = kn.ignoreFieldNorm}) {
          t4.forEach((t5) => {
            let n3 = 1;
            t5.matches.forEach(({key: t6, norm: r3, score: s3}) => {
              const o3 = t6 ? t6.weight : null;
              n3 *= Math.pow(s3 === 0 && o3 ? Number.EPSILON : s3, (o3 || 1) * (e3 ? 1 : r3));
            }), t5.score = n3;
          });
        }(c2, {ignoreFieldNorm: i2}), s2 && c2.sort(o2), hn(e2) && e2 > -1 && (c2 = c2.slice(0, e2)), function(t4, e3, {includeMatches: n3 = kn.includeMatches, includeScore: r3 = kn.includeScore} = {}) {
          const s3 = [];
          return n3 && s3.push(Qn), r3 && s3.push(Un), t4.map((t5) => {
            const {idx: n4} = t5, r4 = {item: e3[n4], refIndex: n4};
            return s3.length && s3.forEach((e4) => {
              e4(t5, r4);
            }), r4;
          });
        }(c2, this._docs, {includeMatches: n2, includeScore: r2});
      }
      _searchStringList(t3) {
        const e2 = Dn(t3, this.options), {records: n2} = this._myIndex, r2 = [];
        return n2.forEach(({v: t4, i: n3, n: s2}) => {
          if (!gn(t4))
            return;
          const {isMatch: o2, score: i2, indices: c2} = e2.searchIn(t4);
          o2 && r2.push({item: t4, idx: n3, matches: [{score: i2, value: t4, norm: s2, indices: c2}]});
        }), r2;
      }
      _searchLogical(t3) {
        const e2 = Zn(t3, this.options), n2 = (t4, e3, r3) => {
          if (!t4.children) {
            const {keyId: n3, searcher: s3} = t4, o3 = this._findMatches({key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(e3, n3), searcher: s3});
            return o3 && o3.length ? [{idx: r3, item: e3, matches: o3}] : [];
          }
          switch (t4.operator) {
            case Tn: {
              const s3 = [];
              for (let o3 = 0, i2 = t4.children.length; o3 < i2; o3 += 1) {
                const i3 = t4.children[o3], c2 = n2(i3, e3, r3);
                if (!c2.length)
                  return [];
                s3.push(...c2);
              }
              return s3;
            }
            case Jn: {
              const s3 = [];
              for (let o3 = 0, i2 = t4.children.length; o3 < i2; o3 += 1) {
                const i3 = t4.children[o3], c2 = n2(i3, e3, r3);
                if (c2.length) {
                  s3.push(...c2);
                  break;
                }
              }
              return s3;
            }
          }
        }, r2 = this._myIndex.records, s2 = {}, o2 = [];
        return r2.forEach(({$: t4, i: r3}) => {
          if (gn(t4)) {
            let i2 = n2(e2, t4, r3);
            i2.length && (s2[r3] || (s2[r3] = {idx: r3, item: t4, matches: []}, o2.push(s2[r3])), i2.forEach(({matches: t5}) => {
              s2[r3].matches.push(...t5);
            }));
          }
        }), o2;
      }
      _searchObjectList(t3) {
        const e2 = Dn(t3, this.options), {keys: n2, records: r2} = this._myIndex, s2 = [];
        return r2.forEach(({$: t4, i: r3}) => {
          if (!gn(t4))
            return;
          let o2 = [];
          n2.forEach((n3, r4) => {
            o2.push(...this._findMatches({key: n3, value: t4[r4], searcher: e2}));
          }), o2.length && s2.push({idx: r3, item: t4, matches: o2});
        }), s2;
      }
      _findMatches({key: t3, value: e2, searcher: n2}) {
        if (!gn(e2))
          return [];
        let r2 = [];
        if (un(e2))
          e2.forEach(({v: e3, i: s2, n: o2}) => {
            if (!gn(e3))
              return;
            const {isMatch: i2, score: c2, indices: l2} = n2.searchIn(e3);
            i2 && r2.push({score: c2, key: t3, value: e3, idx: s2, norm: o2, indices: l2});
          });
        else {
          const {v: s2, n: o2} = e2, {isMatch: i2, score: c2, indices: l2} = n2.searchIn(s2);
          i2 && r2.push({score: c2, key: t3, value: s2, norm: o2, indices: l2});
        }
        return r2;
      }
    }
    Xn.version = "6.4.6", Xn.createIndex = Cn, Xn.parseIndex = function(t3, {getFn: e2 = kn.getFn} = {}) {
      const {keys: n2, records: r2} = t3, s2 = new _n({getFn: e2});
      return s2.setKeys(n2), s2.setIndexRecords(r2), s2;
    }, Xn.config = kn, Xn.parseQuery = Zn, function(...t3) {
      Fn.push(...t3);
    }(Rn);
    const Yn = {useExtendedSearch: true, keys: ["subject", "preview", "body"]};
    let Gn = main2.M(pt, (t3) => new Xn(t3, Yn));
    let tr = main2.L("");
    let er = main2.L(false);
    let nr = main2.M([pt, Gn, tr, er], ([t3, e2, n2, r2]) => n2 ? e2.search((r2 ? "" : "'") + n2).map((t4) => t4.item) : t3);
    function rr(t3) {
      let e2, n2, s2;
      return {c() {
        e2 = main2.e("span"), n2 = main2.t(t3[0]), s2 = main2.t("\uAC74"), main2.b(e2, "class", "bg-red-100 rounded pr-1");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.d(e2, n2), main2.d(e2, s2);
      }, p(t4, e3) {
        1 & e3 && main2.o(n2, t4[0]);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function sr(t3) {
      let e2, n2, a3, u2, h2, f2, p2, m2, $2, y2, w2 = t3[1] && rr(t3);
      return {c() {
        e2 = main2.e("span"), n2 = main2.e("label"), n2.textContent = "\uBD80\uBD84 \uC77C\uCE58", a3 = main2.a(), u2 = main2.e("input"), h2 = main2.a(), f2 = main2.e("input"), p2 = main2.a(), w2 && w2.c(), m2 = main2.G(), main2.b(n2, "for", "fuzzy"), main2.b(u2, "id", "fuzzy"), main2.b(u2, "type", "checkbox"), main2.b(e2, "class", "bg-red-100 rounded p-0.5 m-1"), main2.b(f2, "class", "m-1 border-1 border-gray-400 rounded w-28"), main2.b(f2, "type", "text"), main2.b(f2, "placeholder", "\uAC80\uC0C9");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(e2, a3), main2.d(e2, u2), u2.checked = t3[2], main2.c(r2, h2, s2), main2.c(r2, f2, s2), main2.N(f2, t3[1]), main2.c(r2, p2, s2), w2 && w2.m(r2, s2), main2.c(r2, m2, s2), $2 || (y2 = [main2.A(u2, "change", t3[4]), main2.A(f2, "change", t3[3]), main2.A(f2, "input", t3[5])], $2 = true);
      }, p(t4, [e3]) {
        4 & e3 && (u2.checked = t4[2]), 2 & e3 && f2.value !== t4[1] && main2.N(f2, t4[1]), t4[1] ? w2 ? w2.p(t4, e3) : (w2 = rr(t4), w2.c(), w2.m(m2.parentNode, m2)) : w2 && (w2.d(1), w2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(h2), t4 && main2.f(f2), t4 && main2.f(p2), w2 && w2.d(t4), t4 && main2.f(m2), $2 = false, main2.B(y2);
      }};
    }
    function or(t3, e2, n2) {
      let r2, s2, o2, i2, c2;
      main2.g(t3, tr, (t4) => n2(1, r2 = t4)), main2.g(t3, yt, (t4) => n2(6, s2 = t4)), main2.g(t3, main2.P, (t4) => n2(7, o2 = t4)), main2.g(t3, main2.Q, (t4) => n2(8, i2 = t4)), main2.g(t3, er, (t4) => n2(2, c2 = t4));
      let {search_length: l2} = e2;
      main2.Q.subscribe((t4) => {
        r2 != t4.search && main2.R(tr, r2 = t4.search || "", r2);
      });
      return t3.$$set = (t4) => {
        "search_length" in t4 && n2(0, l2 = t4.search_length);
      }, [l2, r2, c2, () => {
        main2.R(yt, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, i2), {search: r2}));
      }, function() {
        c2 = this.checked, er.set(c2);
      }, function() {
        r2 = this.value, tr.set(r2);
      }];
    }
    class ir extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, or, sr, main2.s, {search_length: 0});
      }
    }
    function cr(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[43] = e2[n2], r2[45] = n2, r2;
    }
    function lr(t3, e2, n2) {
      const r2 = t3.slice();
      return r2[43] = e2[n2], r2[45] = n2, r2;
    }
    function ar(t3) {
      let e2, n2, a3, u2, d2, h2, f2, p2 = t3[2] ? "on" : "off";
      return {c() {
        e2 = main2.e("label"), n2 = main2.t("\uB9AC\uC2A4\uD2B8\uBDF0 "), a3 = main2.t(p2), u2 = main2.a(), d2 = main2.e("input"), main2.b(d2, "id", "isListView"), main2.b(d2, "type", "checkbox"), main2.b(e2, "class", "p-1"), main2.b(e2, "for", "isListView");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(e2, a3), main2.d(e2, u2), main2.d(e2, d2), d2.checked = t3[2], h2 || (f2 = main2.A(d2, "change", t3[28]), h2 = true);
      }, p(t4, e3) {
        4 & e3[0] && p2 !== (p2 = t4[2] ? "on" : "off") && main2.o(a3, p2), 4 & e3[0] && (d2.checked = t4[2]);
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), h2 = false, f2();
      }};
    }
    function ur(t3) {
      let e2, n2, a3, m2, $2, y2, w2, v2, x2 = t3[4].value && dr(t3);
      return {c() {
        e2 = main2.e("label"), n2 = main2.t("\uD0DC\uADF8 \uBAA9\uB85D\r\n                "), a3 = main2.e("input"), m2 = main2.a(), x2 && x2.c(), $2 = main2.G(), main2.b(a3, "id", "isListView"), main2.b(a3, "type", "checkbox"), main2.b(e2, "class", "p-1"), main2.b(e2, "for", "isListView");
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), main2.d(e2, a3), a3.checked = t3[6], main2.c(r2, m2, s2), x2 && x2.m(r2, s2), main2.c(r2, $2, s2), y2 = true, w2 || (v2 = main2.A(a3, "change", t3[27]), w2 = true);
      }, p(t4, e3) {
        64 & e3[0] && (a3.checked = t4[6]), t4[4].value ? x2 ? (x2.p(t4, e3), 16 & e3[0] && main2.p(x2, 1)) : (x2 = dr(t4), x2.c(), main2.p(x2, 1), x2.m($2.parentNode, $2)) : x2 && (main2.D(), main2.v(x2, 1, 1, () => {
          x2 = null;
        }), main2.x());
      }, i(t4) {
        y2 || (main2.p(x2), y2 = true);
      }, o(t4) {
        main2.v(x2), y2 = false;
      }, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(m2), x2 && x2.d(t4), t4 && main2.f($2), w2 = false, v2();
      }};
    }
    function dr(t3) {
      let e2, n2, c2, l2;
      return c2 = new Ft({props: {tag: t3[4], canDelete: true, onRemove: t3[11]}}), {c() {
        e2 = main2.e("span"), e2.textContent = "\uD604\uC7AC :", n2 = main2.a(), main2.q(c2.$$.fragment), main2.b(e2, "class", "ml-1 mt-1");
      }, m(t4, r2) {
        main2.c(t4, e2, r2), main2.c(t4, n2, r2), main2.r(c2, t4, r2), l2 = true;
      }, p(t4, e3) {
        const n3 = {};
        16 & e3[0] && (n3.tag = t4[4]), c2.$set(n3);
      }, i(t4) {
        l2 || (main2.p(c2.$$.fragment, t4), l2 = true);
      }, o(t4) {
        main2.v(c2.$$.fragment, t4), l2 = false;
      }, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), main2.w(c2, t4);
      }};
    }
    function hr(t3) {
      let e2, n2, s2 = t3[7], c2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        c2[e3] = pr(cr(t3, s2, e3));
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
      }, p(t4, n3) {
        if (226 & n3[0]) {
          let r2;
          for (s2 = t4[7], r2 = 0; r2 < s2.length; r2 += 1) {
            const o2 = cr(t4, s2, r2);
            c2[r2] ? (c2[r2].p(o2, n3), main2.p(c2[r2], 1)) : (c2[r2] = pr(o2), c2[r2].c(), main2.p(c2[r2], 1), c2[r2].m(e2, null));
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
    function fr(t3) {
      let e2, n2, s2 = t3[7], c2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        c2[e3] = gr(lr(t3, s2, e3));
      const l2 = (t4) => main2.v(c2[t4], 1, 1, () => {
        c2[t4] = null;
      });
      return {c() {
        e2 = main2.e("div");
        for (let t4 = 0; t4 < c2.length; t4 += 1)
          c2[t4].c();
        main2.b(e2, "id", "MailCardView"), main2.b(e2, "class", "\r\n        mb-3 flex flex-wrap");
      }, m(t4, r2) {
        main2.c(t4, e2, r2);
        for (let t5 = 0; t5 < c2.length; t5 += 1)
          c2[t5].m(e2, null);
        n2 = true;
      }, p(t4, n3) {
        if (128 & n3[0]) {
          let r2;
          for (s2 = t4[7], r2 = 0; r2 < s2.length; r2 += 1) {
            const o2 = lr(t4, s2, r2);
            c2[r2] ? (c2[r2].p(o2, n3), main2.p(c2[r2], 1)) : (c2[r2] = gr(o2), c2[r2].c(), main2.p(c2[r2], 1), c2[r2].m(e2, null));
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
    function pr(t3) {
      let e2, n2;
      return e2 = new tn({props: {index: t3[45], pm: t3[43], hidden: t3[5] && (t3[1] < 400 || t3[6]) && t3[45] > 0}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        128 & n3[0] && (r2.pm = t4[43]), 98 & n3[0] && (r2.hidden = t4[5] && (t4[1] < 400 || t4[6]) && t4[45] > 0), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function gr(t3) {
      let e2, n2;
      return e2 = new an({props: {pm: t3[43], index: t3[45]}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        128 & n3[0] && (r2.pm = t4[43]), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function mr(t3) {
      let e2, n2, l2, a3, d2, v2, x2, b2, k2, M2, _2, C2, O2, S2, j2, L2, P2, B2, A2, E2;
      const z2 = [ur, ar], W2 = [];
      function N2(t4, e3) {
        return t4[5] ? 0 : 1;
      }
      l2 = N2(t3), a3 = W2[l2] = z2[l2](t3);
      b2 = new Me({});
      const R2 = [fr, hr], T2 = [];
      function J2(t4, e3) {
        return !t4[2] && t4[10] ? 0 : 1;
      }
      return M2 = J2(t3), _2 = T2[M2] = R2[M2](t3), O2 = new Te({props: {maxPage: t3[8]}}), P2 = new ir({props: {search_length: t3[3].length}}), {c() {
        e2 = main2.e("section"), n2 = main2.e("div"), a3.c(), d2 = main2.a(), v2 = main2.a(), x2 = main2.e("div"), main2.q(b2.$$.fragment), k2 = main2.a(), _2.c(), C2 = main2.a(), main2.q(O2.$$.fragment), S2 = main2.a(), j2 = main2.e("br"), L2 = main2.a(), main2.q(P2.$$.fragment), main2.b(n2, "class", "mb-1 flex flex-row"), main2.b(x2, "class", "\r\n    h-36 p-2 mb-3\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main2.T(x2, "hidden", !(t3[5] && t3[6])), main2.b(e2, "id", "MailListSection"), main2.h(e2, "min-height", (t3[2] || t3[5] ? t3[6] ? 520 : 360 : 490) + "px"), main2.b(e2, "class", B2 = "h-full\r\n" + (t3[10] ? "w-8/12" : "h-full w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y"), main2.j(() => t3[29].call(e2)), main2.T(e2, "hidden", t3[5] && !t3[9]);
      }, m(r2, s2) {
        main2.c(r2, e2, s2), main2.d(e2, n2), W2[l2].m(n2, null), main2.d(e2, d2), main2.d(e2, v2), main2.d(e2, x2), main2.r(b2, x2, null), main2.d(e2, k2), T2[M2].m(e2, null), main2.d(e2, C2), main2.r(O2, e2, null), main2.d(e2, S2), main2.d(e2, j2), main2.d(e2, L2), main2.r(P2, e2, null), A2 = main2.z(e2, t3[29].bind(e2)), E2 = true;
      }, p(t4, r2) {
        let s2 = l2;
        l2 = N2(t4), l2 === s2 ? W2[l2].p(t4, r2) : (main2.D(), main2.v(W2[s2], 1, 1, () => {
          W2[s2] = null;
        }), main2.x(), a3 = W2[l2], a3 ? a3.p(t4, r2) : (a3 = W2[l2] = z2[l2](t4), a3.c()), main2.p(a3, 1), a3.m(n2, null)), 96 & r2[0] && main2.T(x2, "hidden", !(t4[5] && t4[6]));
        let i2 = M2;
        M2 = J2(t4), M2 === i2 ? T2[M2].p(t4, r2) : (main2.D(), main2.v(T2[i2], 1, 1, () => {
          T2[i2] = null;
        }), main2.x(), _2 = T2[M2], _2 ? _2.p(t4, r2) : (_2 = T2[M2] = R2[M2](t4), _2.c()), main2.p(_2, 1), _2.m(e2, C2));
        const c2 = {};
        256 & r2[0] && (c2.maxPage = t4[8]), O2.$set(c2);
        const d3 = {};
        8 & r2[0] && (d3.search_length = t4[3].length), P2.$set(d3), (!E2 || 100 & r2[0]) && main2.h(e2, "min-height", (t4[2] || t4[5] ? t4[6] ? 520 : 360 : 490) + "px"), (!E2 || 1024 & r2[0] && B2 !== (B2 = "h-full\r\n" + (t4[10] ? "w-8/12" : "h-full w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y")) && main2.b(e2, "class", B2), 1568 & r2[0] && main2.T(e2, "hidden", t4[5] && !t4[9]);
      }, i(t4) {
        E2 || (main2.p(a3), main2.p(false), main2.p(b2.$$.fragment, t4), main2.p(_2), main2.p(O2.$$.fragment, t4), main2.p(P2.$$.fragment, t4), E2 = true);
      }, o(t4) {
        main2.v(a3), main2.v(false), main2.v(b2.$$.fragment, t4), main2.v(_2), main2.v(O2.$$.fragment, t4), main2.v(P2.$$.fragment, t4), E2 = false;
      }, d(t4) {
        t4 && main2.f(e2), W2[l2].d(), main2.w(b2), T2[M2].d(), main2.w(O2), main2.w(P2), A2();
      }};
    }
    function $r(t3, e2) {
      fetch(t3, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(e2)}).then((t4) => {
        console.log(e2);
      }).catch((e3) => {
        console.error(t3 + " \uBC31\uC5C5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."), console.error(e3);
      });
    }
    function yr(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2, h2, f2, p2, g2, m2, $2, y2, w2, v2, x2, b2, k2, M2, _2, C2, O2, S2;
      main2.g(t3, Pe, (t4) => n2(14, g2 = t4)), main2.g(t3, yt, (t4) => n2(16, m2 = t4)), main2.g(t3, main2.W, (t4) => n2(35, $2 = t4)), main2.g(t3, main2.Q, (t4) => n2(36, y2 = t4)), main2.g(t3, ht, (t4) => n2(18, w2 = t4)), main2.g(t3, dt, (t4) => n2(4, v2 = t4)), main2.g(t3, tr, (t4) => n2(21, x2 = t4)), main2.g(t3, nr, (t4) => n2(22, b2 = t4)), main2.g(t3, xt, (t4) => n2(5, k2 = t4)), main2.g(t3, main2.P, (t4) => n2(37, M2 = t4)), main2.g(t3, ot, (t4) => n2(38, _2 = t4)), main2.g(t3, it, (t4) => n2(39, C2 = t4)), main2.g(t3, wt, (t4) => n2(9, O2 = t4)), main2.g(t3, vt, (t4) => n2(10, S2 = t4));
      var j2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, o3) {
          function i3(t5) {
            try {
              l3(r3.next(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function c3(t5) {
            try {
              l3(r3.throw(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function l3(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(i3, c3);
          }
          l3((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      let L2, I2, P2 = 1, B2 = 3;
      main2.l(() => {
        const t4 = p2[0];
        if (B2 != u2 || P2 == m2 && L2 == Pe || (I2 = t4), B2 != u2 && I2) {
          let t5 = 0;
          return c2.forEach((t6, e3) => {
          }), main2.R(yt, m2 = Math.ceil((t5 + 1) / u2), m2), P2 = m2, B2 = u2, $2("./", Object.assign(Object.assign({}, y2), {nowPage: m2})), null;
        }
        if (r2 > new Date())
          return main2.R(Pe, g2 = Be(new Date()), g2), alert("\uBBF8\uB798\uB85C \uAC08 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."), $2("./", Object.assign(Object.assign({}, y2), {dateString: g2})), null;
        if (p2.length == 0 || !t4 && y2.nowPage != 1)
          return $2("./", Object.assign(Object.assign({}, y2), {nowPage: 1})), null;
        if (P2 != m2) {
          P2 = m2;
          const e3 = Ee(t4.time);
          return main2.R(Pe, g2 = e3, g2), L2 = e3, $2("./", Object.assign(Object.assign({}, y2), {nowPage: m2, dateString: e3})), null;
        }
        if (L2 !== g2) {
          let t5 = false;
          if (c2.forEach((e3, n3) => {
            if (t5 || !e3)
              return null;
            const s3 = Ee(e3.time);
            Ae(s3) <= r2 && (main2.R(yt, m2 = Math.ceil((n3 + 1) / u2), m2), main2.R(Pe, g2 = s3, g2), t5 = true);
          }), t5 == 0 && c2.length > 0) {
            main2.R(yt, m2 = d2, m2);
            const t6 = c2[c2.length - 1];
            main2.R(Pe, g2 = Ee(t6.time), g2);
          }
          return L2 = g2, $2("./", Object.assign(Object.assign({}, y2), {nowPage: m2, dateString: g2})), null;
        }
      });
      const E2 = (t4) => {
        const e3 = t4.time.split(" ")[0];
        typeof e3 != "string" && console.log(e3);
        try {
          return e3.replace(/\//g, "-") == g2;
        } catch (t5) {
          console.error(t5), console.log(e3);
        }
        return true;
      }, R2 = (t4) => true;
      let F2, D2, T2 = false, J2 = false;
      return t3.$$.update = () => {
        16384 & t3.$$.dirty[0] && (r2 = Ae(g2)), 262160 & t3.$$.dirty[0] && n2(17, s2 = w2.get(v2)), 131072 & t3.$$.dirty[0] && n2(19, o2 = (t4) => s2.has(t4.id)), 2637840 & t3.$$.dirty[0] && n2(20, i2 = v2.value && o2 || x2 && R2 || g2 && E2 || R2), 5242880 & t3.$$.dirty[0] && n2(3, c2 = b2.filter(i2)), 1 & t3.$$.dirty[0] && n2(23, l2 = Math.floor((F2 - 33) / 280)), 2 & t3.$$.dirty[0] && n2(24, a3 = Math.floor((D2 - 220) / 164)), 25165862 & t3.$$.dirty[0] && n2(15, u2 = k2 ? 5 : T2 ? Math.floor((D2 - 200) / 62) : l2 * a3), 32776 & t3.$$.dirty[0] && n2(8, d2 = Math.ceil(c2.length / u2)), 98304 & t3.$$.dirty[0] && n2(25, h2 = (m2 - 1) * u2), 33587208 & t3.$$.dirty[0] && n2(26, f2 = () => {
          const t4 = c2.slice(h2, h2 + u2);
          return t4.length < u2 ? t4.concat(Array(u2 - t4.length).fill({id: "", member: "", time: "", subject: "", preview: ""})) : t4;
        }), 67108872 & t3.$$.dirty[0] && n2(7, p2 = c2 && f2());
      }, [F2, D2, T2, c2, v2, k2, J2, p2, d2, O2, S2, () => {
        main2.R(dt, v2 = et, v2), main2.R(yt, m2 = 1, m2), M2("./", Object.assign(Object.assign({}, y2), {tag: ""}));
      }, () => {
        $r("/all-tag-dict/", {tag_list: [..._2].map((t4) => t4[1])}), $r("/mail-tag-dict/", {mail_to_tag_dict: ct(C2), tag_to_mail_dict: ft(w2)});
      }, () => j2(void 0, void 0, void 0, function* () {
        const t4 = yield fetch("/all-tag-dict/").then((t5) => t5.json()).then((t5) => t5.tag_list), e3 = yield fetch("/mail-tag-dict/").then((t5) => t5.json()), n3 = e3.tag_to_mail_dict, r3 = e3.mail_to_tag_dict;
        main2.R(dt, v2 = et, v2), main2.R(ot, _2 = t4.reduce((t5, e4) => (t5.set(e4.value, e4), t5), new Map([["\u{1F496}", nt]])), _2), console.log("all_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC"), main2.R(ht, w2 = lt(n3), w2), main2.R(it, C2 = st(r3), C2), console.log("mail_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC");
      }), g2, u2, m2, s2, w2, o2, i2, x2, b2, l2, a3, h2, f2, function() {
        J2 = this.checked, n2(6, J2);
      }, function() {
        T2 = this.checked, n2(2, T2);
      }, function() {
        F2 = this.clientWidth, D2 = this.clientHeight, n2(0, F2), n2(1, D2);
      }];
    }
    class wr extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, yr, mr, main2.s, {}, [-1, -1]);
      }
    }
    function vr(t3) {
      let e2, n2;
      return e2 = new tt({props: {show: kr, $$slots: {default: [xr]}, $$scope: {ctx: t3}}}), {c() {
        main2.q(e2.$$.fragment);
      }, m(t4, r2) {
        main2.r(e2, t4, r2), n2 = true;
      }, p(t4, n3) {
        const r2 = {};
        131072 & n3 && (r2.$$scope = {dirty: n3, ctx: t4}), e2.$set(r2);
      }, i(t4) {
        n2 || (main2.p(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.w(e2, t4);
      }};
    }
    function xr(t3) {
      let e2, n2, r2, o2;
      return e2 = new Le({}), r2 = new wr({}), {c() {
        main2.q(e2.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment);
      }, m(t4, s2) {
        main2.r(e2, t4, s2), main2.c(t4, n2, s2), main2.r(r2, t4, s2), o2 = true;
      }, i(t4) {
        o2 || (main2.p(e2.$$.fragment, t4), main2.p(r2.$$.fragment, t4), o2 = true);
      }, o(t4) {
        main2.v(e2.$$.fragment, t4), main2.v(r2.$$.fragment, t4), o2 = false;
      }, d(t4) {
        main2.w(e2, t4), t4 && main2.f(n2), main2.w(r2, t4);
      }};
    }
    function br(t3) {
      let e2, n2, s2, c2 = t3[1] && vr(t3);
      return {c() {
        e2 = main2.e("div"), c2 && c2.c(), main2.b(e2, "class", "flex w-screen h-screen relative"), main2.j(() => t3[4].call(e2));
      }, m(r2, o2) {
        main2.c(r2, e2, o2), c2 && c2.m(e2, null), n2 = main2.z(e2, t3[4].bind(e2)), s2 = true;
      }, p(t4, [n3]) {
        t4[1] ? c2 ? (c2.p(t4, n3), 2 & n3 && main2.p(c2, 1)) : (c2 = vr(t4), c2.c(), main2.p(c2, 1), c2.m(e2, null)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
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
    let kr = null;
    function Mr(t3, e2, n2) {
      let r2, s2, o2, i2, c2, l2, a3, u2, d2;
      main2.g(t3, ht, (t4) => n2(2, s2 = t4)), main2.g(t3, it, (t4) => n2(3, o2 = t4)), main2.g(t3, Pt, (t4) => n2(7, i2 = t4)), main2.g(t3, pt, (t4) => n2(8, c2 = t4)), main2.g(t3, gt, (t4) => n2(9, l2 = t4)), main2.g(t3, ot, (t4) => n2(10, a3 = t4)), main2.g(t3, wt, (t4) => n2(11, u2 = t4)), main2.g(t3, main2.P, (t4) => n2(12, d2 = t4));
      var h2 = this && this.__awaiter || function(t4, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, o3) {
          function i3(t5) {
            try {
              l3(r3.next(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function c3(t5) {
            try {
              l3(r3.throw(t5));
            } catch (t6) {
              o3(t6);
            }
          }
          function l3(t5) {
            var e4;
            t5.done ? s3(t5.value) : (e4 = t5.value, e4 instanceof n3 ? e4 : new n3(function(t6) {
              t6(e4);
            })).then(i3, c3);
          }
          l3((r3 = r3.apply(t4, e3 || [])).next());
        });
      };
      main2.X.title = "IZ*ONE Private Mail Viewer";
      let f2 = false;
      const p2 = (t4, e3) => {
        try {
          console.log(`${e3}\uCC28 \uC2DC\uB3C4`), console.log(t4.slice(0, 10));
          const n3 = [];
          for (let e4 = 0; e4 < t4.length; e4 += 2)
            n3.push(t4[e4]);
          return JSON.parse(n3.join(""));
        } catch (n3) {
          if (e3 < 4)
            return t4 = t4.slice(1), p2(t4, e3 + 1);
          throw n3;
        }
      }, g2 = (t4) => h2(void 0, void 0, void 0, function* () {
        try {
          const e3 = yield fetch(t4);
          return yield e3.json();
        } catch (e3) {
          console.log("json \uB85C\uB4DC \uC2E4\uD328");
          const n3 = yield fetch(t4), r3 = yield n3.text();
          return p2(r3, 0);
        }
      });
      let m2;
      return function() {
        return h2(this, void 0, void 0, function* () {
          console.log("\uBA54\uC77C \uB9AC\uC2A4\uD2B8 \uB85C\uB529 \uC2DC\uC791");
          const t4 = yield g2("./pm_list.json");
          console.log("\uBA54\uC77C \uB9AC\uC2A4\uD2B8 \uB85C\uB529 \uC644\uB8CC"), console.log("\uC774\uB984 dict \uB85C\uB529 \uC2DC\uC791"), main2.R(Pt, i2 = yield g2("./member_name.json"), i2), console.log("\uC774\uB984 dict \uB85C\uB529 \uB05D"), console.log(i2);
          const e3 = yield fetch("./mail_to_num_dict.json"), n3 = yield e3.json(), u3 = yield g2("./mail_body_dict.json").catch((t5) => (console.log("mail_body_dict\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."), null));
          main2.R(pt, c2 = t4.map((t5, e4) => {
            t5.id == "m20731" && main2.R(gt, l2 = t5, l2), t5.nick = t5.member;
            const r3 = i2[t5.nick];
            if (t5.member = Bt[r3], !t5.member && e4 < 5700) {
              const e5 = n3[t5.id];
              main2.R(Pt, i2[t5.nick] = e5, i2), t5.member = Bt[e5], console.log(t5.nick, t5.member);
            }
            return u3 && (t5.body = u3[t5.id]), t5;
          }), c2), console.log("all_tag_dict", a3);
          let d3 = 0;
          const h3 = a3.get("\uD63C\uB2E4 \uD788\uD1A0\uBBF8");
          if (s2.has(h3) && (c2.forEach((t5) => {
            const e4 = a3.get(t5.member), n4 = s2.get(e4);
            n4 ? n4.add(t5.id) : (console.log(t5.id, t5.nick), d3 += 1);
          }), ht.set(s2)), console.log("\uB204\uB77D", d3), !a3.has("\uC0DD\uC77C")) {
            const t5 = {value: "\uC0DD\uC77C", color: "LightPink"};
            a3.set(t5.value, t5), ot.set(a3), s2.set(t5, new Set()), c2.map((e4) => {
              e4.id.slice(0, 1) == "b" && r2(t5, e4);
            }), ht.set(s2), it.set(o2);
          }
        });
      }().then(() => {
        n2(1, f2 = true);
      }), main2.Q.subscribe((t4) => {
        const e3 = t4.showList == "true";
        e3 != u2 && main2.R(wt, u2 = e3, u2);
      }), d2("./", {dateString: Ie, nowPage: 1, tag: "", search: "", showList: true}), t3.$$.update = () => {
        12 & t3.$$.dirty && (r2 = (t4, e3) => {
          s2.get(t4).add(e3.id), o2.has(e3.id) ? o2.get(e3.id).add(t4) : o2.set(e3.id, new Set([t4]));
        }), 1 & t3.$$.dirty && vt.set(m2 > 800);
      }, [m2, f2, s2, o2, function() {
        m2 = this.clientWidth, n2(0, m2);
      }];
    }
    class index_361dd333_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, Mr, br, main2.s, {});
      }
    }
  });

  // dist/build/_layout-084b126d.js
  var require_layout_084b126d = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_084b126d_default
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
    class layout_084b126d_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, u, c, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => S,
      B: () => s,
      C: () => xt,
      D: () => mt,
      E: () => e,
      F: () => i,
      G: () => j,
      H: () => d,
      I: () => f,
      J: () => G,
      K: () => Q,
      L: () => Ht,
      M: () => Kt,
      N: () => A,
      O: () => V,
      P: () => fe,
      Q: () => de,
      R: () => h,
      S: () => Rt,
      T: () => C,
      U: () => I,
      V: () => wt,
      W: () => he,
      X: () => ge,
      a: () => O,
      b: () => R,
      c: () => x,
      d: () => _,
      e: () => k,
      f: () => v,
      g: () => u,
      h: () => T,
      i: () => St,
      j: () => st,
      k: () => _t,
      l: () => J,
      m: () => Z,
      n: () => t2,
      o: () => L,
      p: () => yt,
      q: () => Et,
      r: () => Ot,
      s: () => a2,
      t: () => E,
      u: () => pe,
      v: () => $t,
      w: () => jt,
      x: () => gt,
      y: () => P,
      z: () => N
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
        const r2 = p(t3, e2, n2, o2);
        return t3[0](r2);
      }
    }
    function p(t3, e2, o2, r2) {
      return t3[1] && r2 ? n(o2.ctx.slice(), t3[1](r2(e2))) : o2.ctx;
    }
    function f(t3, e2, n2, o2, r2, s2, i2) {
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
    function h(t3, e2, n2 = e2) {
      return t3.set(n2), e2;
    }
    const m = typeof window != "undefined";
    let g = m ? () => window.performance.now() : () => Date.now();
    let y = m ? (t3) => requestAnimationFrame(t3) : t2;
    const $ = new Set();
    function b(t3) {
      $.forEach((e2) => {
        e2.c(t3) || ($.delete(e2), e2.f());
      }), $.size !== 0 && y(b);
    }
    function w(t3) {
      let e2;
      return $.size === 0 && y(b), {promise: new Promise((n2) => {
        $.add(e2 = {c: t3, f: n2});
      }), abort() {
        $.delete(e2);
      }};
    }
    function _(t3, e2) {
      t3.appendChild(e2);
    }
    function x(t3, e2, n2) {
      t3.insertBefore(e2, n2 || null);
    }
    function v(t3) {
      t3.parentNode.removeChild(t3);
    }
    function P(t3, e2) {
      for (let n2 = 0; n2 < t3.length; n2 += 1)
        t3[n2] && t3[n2].d(e2);
    }
    function k(t3) {
      return document.createElement(t3);
    }
    function E(t3) {
      return document.createTextNode(t3);
    }
    function O() {
      return E(" ");
    }
    function j() {
      return E("");
    }
    function S(t3, e2, n2, o2) {
      return t3.addEventListener(e2, n2, o2), () => t3.removeEventListener(e2, n2, o2);
    }
    function R(t3, e2, n2) {
      n2 == null ? t3.removeAttribute(e2) : t3.getAttribute(e2) !== n2 && t3.setAttribute(e2, n2);
    }
    function I(t3) {
      return t3 === "" ? null : +t3;
    }
    function L(t3, e2) {
      e2 = "" + e2, t3.wholeText !== e2 && (t3.data = e2);
    }
    function A(t3, e2) {
      t3.value = e2 == null ? "" : e2;
    }
    function T(t3, e2, n2, o2) {
      t3.style.setProperty(e2, n2, o2 ? "important" : "");
    }
    let F;
    function M() {
      if (F === void 0) {
        F = false;
        try {
          typeof window != "undefined" && window.parent && window.parent.document;
        } catch (t3) {
          F = true;
        }
      }
      return F;
    }
    function N(t3, e2) {
      getComputedStyle(t3).position === "static" && (t3.style.position = "relative");
      const n2 = k("iframe");
      n2.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n2.setAttribute("aria-hidden", "true"), n2.tabIndex = -1;
      const o2 = M();
      let r2;
      return o2 ? (n2.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>", r2 = S(window, "message", (t4) => {
        t4.source === n2.contentWindow && e2();
      })) : (n2.src = "about:blank", n2.onload = () => {
        r2 = S(n2.contentWindow, "resize", e2);
      }), _(t3, n2), () => {
        (o2 || r2 && n2.contentWindow) && r2(), v(n2);
      };
    }
    function C(t3, e2, n2) {
      t3.classList[n2 ? "add" : "remove"](e2);
    }
    function q(t3, e2) {
      const n2 = document.createEvent("CustomEvent");
      return n2.initCustomEvent(t3, false, false, e2), n2;
    }
    const B = new Set();
    let U;
    let D = 0;
    function z(t3, e2, n2, o2, r2, s2, i2, a3 = 0) {
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
      }(u2)}_${a3}`, p2 = t3.ownerDocument;
      B.add(p2);
      const f2 = p2.__svelte_stylesheet || (p2.__svelte_stylesheet = p2.head.appendChild(k("style")).sheet), h2 = p2.__svelte_rules || (p2.__svelte_rules = {});
      h2[d2] || (h2[d2] = true, f2.insertRule(`@keyframes ${d2} ${u2}`, f2.cssRules.length));
      const m2 = t3.style.animation || "";
      return t3.style.animation = `${m2 ? `${m2}, ` : ""}${d2} ${o2}ms linear ${r2}ms 1 both`, D += 1, d2;
    }
    function H(t3, e2) {
      const n2 = (t3.style.animation || "").split(", "), o2 = n2.filter(e2 ? (t4) => t4.indexOf(e2) < 0 : (t4) => t4.indexOf("__svelte") === -1), r2 = n2.length - o2.length;
      r2 && (t3.style.animation = o2.join(", "), D -= r2, D || y(() => {
        D || (B.forEach((t4) => {
          const e3 = t4.__svelte_stylesheet;
          let n3 = e3.cssRules.length;
          for (; n3--; )
            e3.deleteRule(n3);
          t4.__svelte_rules = {};
        }), B.clear());
      }));
    }
    function K(t3) {
      U = t3;
    }
    function W() {
      if (!U)
        throw new Error("Function called outside component initialization");
      return U;
    }
    function J(t3) {
      W().$$.after_update.push(t3);
    }
    function G() {
      const t3 = W();
      return (e2, n2) => {
        const o2 = t3.$$.callbacks[e2];
        if (o2) {
          const r2 = q(e2, n2);
          o2.slice().forEach((e3) => {
            e3.call(t3, r2);
          });
        }
      };
    }
    function Q(t3, e2) {
      W().$$.context.set(t3, e2);
    }
    function V(t3) {
      return W().$$.context.get(t3);
    }
    const X = [];
    const Z = [];
    const Y = [];
    const tt = [];
    const et = Promise.resolve();
    let nt = false;
    function ot() {
      nt || (nt = true, et.then(ct));
    }
    function rt() {
      return ot(), et;
    }
    function st(t3) {
      Y.push(t3);
    }
    let it = false;
    const at = new Set();
    function ct() {
      if (!it) {
        it = true;
        do {
          for (let t3 = 0; t3 < X.length; t3 += 1) {
            const e2 = X[t3];
            K(e2), lt(e2.$$);
          }
          for (K(null), X.length = 0; Z.length; )
            Z.pop()();
          for (let t3 = 0; t3 < Y.length; t3 += 1) {
            const e2 = Y[t3];
            at.has(e2) || (at.add(e2), e2());
          }
          Y.length = 0;
        } while (X.length);
        for (; tt.length; )
          tt.pop()();
        nt = false, it = false, at.clear();
      }
    }
    function lt(t3) {
      if (t3.fragment !== null) {
        t3.update(), s(t3.before_update);
        const e2 = t3.dirty;
        t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e2), t3.after_update.forEach(st);
      }
    }
    let ut;
    function dt() {
      return ut || (ut = Promise.resolve(), ut.then(() => {
        ut = null;
      })), ut;
    }
    function pt(t3, e2, n2) {
      t3.dispatchEvent(q(`${e2 ? "intro" : "outro"}${n2}`));
    }
    const ft = new Set();
    let ht;
    function mt() {
      ht = {r: 0, c: [], p: ht};
    }
    function gt() {
      ht.r || s(ht.c), ht = ht.p;
    }
    function yt(t3, e2) {
      t3 && t3.i && (ft.delete(t3), t3.i(e2));
    }
    function $t(t3, e2, n2, o2) {
      if (t3 && t3.o) {
        if (ft.has(t3))
          return;
        ft.add(t3), ht.c.push(() => {
          ft.delete(t3), o2 && (n2 && t3.d(1), o2());
        }), t3.o(e2);
      }
    }
    const bt = {duration: 0};
    function wt(n2, o2, r2) {
      let s2, a3, c2 = o2(n2, r2), l2 = false, u2 = 0;
      function d2() {
        s2 && H(n2, s2);
      }
      function p2() {
        const {delay: o3 = 0, duration: r3 = 300, easing: i2 = e, tick: p3 = t2, css: f3} = c2 || bt;
        f3 && (s2 = z(n2, 0, 1, r3, o3, i2, f3, u2++)), p3(0, 1);
        const h2 = g() + o3, m2 = h2 + r3;
        a3 && a3.abort(), l2 = true, st(() => pt(n2, true, "start")), a3 = w((t3) => {
          if (l2) {
            if (t3 >= m2)
              return p3(1, 0), pt(n2, true, "end"), d2(), l2 = false;
            if (t3 >= h2) {
              const e2 = i2((t3 - h2) / r3);
              p3(e2, 1 - e2);
            }
          }
          return l2;
        });
      }
      let f2 = false;
      return {start() {
        f2 || (H(n2), i(c2) ? (c2 = c2(), dt().then(p2)) : p2());
      }, invalidate() {
        f2 = false;
      }, end() {
        l2 && (d2(), l2 = false);
      }};
    }
    function _t(n2, o2, r2, a3) {
      let c2 = o2(n2, r2), l2 = a3 ? 0 : 1, u2 = null, d2 = null, p2 = null;
      function f2() {
        p2 && H(n2, p2);
      }
      function h2(t3, e2) {
        const n3 = t3.b - l2;
        return e2 *= Math.abs(n3), {a: l2, b: t3.b, d: n3, duration: e2, start: t3.start, end: t3.start + e2, group: t3.group};
      }
      function m2(o3) {
        const {delay: r3 = 0, duration: i2 = 300, easing: a4 = e, tick: m3 = t2, css: y2} = c2 || bt, $2 = {start: g() + r3, b: o3};
        o3 || ($2.group = ht, ht.r += 1), u2 || d2 ? d2 = $2 : (y2 && (f2(), p2 = z(n2, l2, o3, i2, r3, a4, y2)), o3 && m3(0, 1), u2 = h2($2, i2), st(() => pt(n2, o3, "start")), w((t3) => {
          if (d2 && t3 > d2.start && (u2 = h2(d2, i2), d2 = null, pt(n2, u2.b, "start"), y2 && (f2(), p2 = z(n2, l2, u2.b, u2.duration, 0, a4, c2.css))), u2) {
            if (t3 >= u2.end)
              m3(l2 = u2.b, 1 - l2), pt(n2, u2.b, "end"), d2 || (u2.b ? f2() : --u2.group.r || s(u2.group.c)), u2 = null;
            else if (t3 >= u2.start) {
              const e2 = t3 - u2.start;
              l2 = u2.a + u2.d * a4(e2 / u2.duration), m3(l2, 1 - l2);
            }
          }
          return !(!u2 && !d2);
        }));
      }
      return {run(t3) {
        i(c2) ? dt().then(() => {
          c2 = c2(), m2(t3);
        }) : m2(t3);
      }, end() {
        f2(), u2 = d2 = null;
      }};
    }
    const xt = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
    function vt(t3, e2) {
      t3.d(1), e2.delete(t3.key);
    }
    function Pt(t3, e2) {
      $t(t3, 1, 1, () => {
        e2.delete(t3.key);
      });
    }
    function kt(t3, e2, n2, o2, r2, s2, i2, a3, c2, l2, u2, d2) {
      let p2 = t3.length, f2 = s2.length, h2 = p2;
      const m2 = {};
      for (; h2--; )
        m2[t3[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = f2; h2--; ) {
        const t4 = d2(r2, s2, h2), a4 = n2(t4);
        let c3 = i2.get(a4);
        c3 ? o2 && c3.p(t4, e2) : (c3 = l2(a4, t4), c3.c()), y2.set(a4, g2[h2] = c3), a4 in m2 && $2.set(a4, Math.abs(h2 - m2[a4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t4) {
        yt(t4, 1), t4.m(a3, u2), i2.set(t4.key, t4), u2 = t4.first, f2--;
      }
      for (; p2 && f2; ) {
        const e3 = g2[f2 - 1], n3 = t3[p2 - 1], o3 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, p2--, f2--) : y2.has(r3) ? !i2.has(o3) || b2.has(o3) ? _2(e3) : w2.has(r3) ? p2-- : $2.get(o3) > $2.get(r3) ? (w2.add(o3), _2(e3)) : (b2.add(r3), p2--) : (c2(n3, i2), p2--);
      }
      for (; p2--; ) {
        const e3 = t3[p2];
        y2.has(e3.key) || c2(e3, i2);
      }
      for (; f2; )
        _2(g2[f2 - 1]);
      return g2;
    }
    function Et(t3) {
      t3 && t3.c();
    }
    function Ot(t3, e2, n2) {
      const {fragment: r2, on_mount: a3, on_destroy: c2, after_update: l2} = t3.$$;
      r2 && r2.m(e2, n2), st(() => {
        const e3 = a3.map(o).filter(i);
        c2 ? c2.push(...e3) : s(e3), t3.$$.on_mount = [];
      }), l2.forEach(st);
    }
    function jt(t3, e2) {
      const n2 = t3.$$;
      n2.fragment !== null && (s(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function St(e2, n2, o2, i2, a3, c2, l2 = [-1]) {
      const u2 = U;
      K(e2);
      const d2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: a3, bound: r(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: r(), dirty: l2, skip_bound: false};
      let p2 = false;
      if (d2.ctx = o2 ? o2(e2, n2.props || {}, (t3, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return d2.ctx && a3(d2.ctx[t3], d2.ctx[t3] = r2) && (!d2.skip_bound && d2.bound[t3] && d2.bound[t3](r2), p2 && function(t4, e3) {
          t4.$$.dirty[0] === -1 && (X.push(t4), ot(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t3)), n3;
      }) : [], d2.update(), p2 = true, s(d2.before_update), d2.fragment = !!i2 && i2(d2.ctx), n2.target) {
        if (n2.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n2.target);
          d2.fragment && d2.fragment.l(t3), t3.forEach(v);
        } else
          d2.fragment && d2.fragment.c();
        n2.intro && yt(e2.$$.fragment), Ot(e2, n2.target, n2.anchor), ct();
      }
      K(u2);
    }
    class Rt {
      $destroy() {
        jt(this, 1), this.$destroy = t2;
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
    var It = {queryHandler: {parse: (t3) => {
      return e2 = new URLSearchParams(t3), [...e2].reduce((t4, [e3, n2]) => (t4[e3] = n2, t4), {});
      var e2;
    }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
    const Lt = RegExp(/\:([^/()]+)/g);
    function At(t3) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      Tt(t3), function() {
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
    function Tt(t3) {
      t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", Tt(t3.parentElement));
    }
    const Ft = (t3) => {
      const e2 = [];
      let n2;
      for (; n2 = Lt.exec(t3); )
        e2.push(n2[1]);
      return e2;
    };
    function Mt(t3, e2) {
      Mt._console = Mt._console || {log: console.log, warn: console.warn};
      const {_console: n2} = Mt, o2 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o2}> received an unexpected slot "default".`, `<${o2}> was created with unknown prop 'scoped'`, `<${o2}> was created with unknown prop 'scopedSync'`];
      for (const t4 of ["log", "warn"])
        console[t4] = (...e3) => {
          r2.includes(e3[0]) || n2[t4](...e3);
        }, e2().then(() => {
          console[t4] = n2[t4];
        });
    }
    function Nt() {
      let t3 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e2, options: n2} = function(t4) {
        const [e3, n3] = t4.split("__[[routify_url_options]]__"), o2 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o2.prefetch, {url: e3, options: o2};
      }(t3);
      return {...Ct(e2), options: n2};
    }
    function Ct(t3) {
      It.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const e2 = t3.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t3, e2);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function qt(t3, e2, n2) {
      const o2 = It.useHash ? "#" : "";
      let r2;
      return r2 = function(t4, e3, n3) {
        const o3 = Object.assign({}, n3, e3), r3 = function(t5, e4) {
          if (!It.queryHandler)
            return "";
          const n4 = Ft(t5), o4 = {};
          e4 && Object.entries(e4).forEach(([t6, e5]) => {
            n4.includes(t6) || (o4[t6] = e5);
          });
          return It.queryHandler.stringify(o4).replace(/\?$/, "");
        }(t4, e3);
        for (const [e4, n4] of Object.entries(o3))
          t4 = t4.replace(`:${e4}`, n4);
        return `${t4}${r3}`;
      }(t3, e2, n2), r2 = It.urlTransform.apply(r2), r2 = o2 + r2, r2;
    }
    function Bt(t3) {
      let e2;
      const n2 = t3[2].default, o2 = d(n2, t3, t3[1], null);
      return {c() {
        o2 && o2.c();
      }, m(t4, n3) {
        o2 && o2.m(t4, n3), e2 = true;
      }, p(t4, [e3]) {
        o2 && o2.p && 2 & e3 && f(o2, n2, t4, t4[1], e3, null, null);
      }, i(t4) {
        e2 || (yt(o2, t4), e2 = true);
      }, o(t4) {
        $t(o2, t4), e2 = false;
      }, d(t4) {
        o2 && o2.d(t4);
      }};
    }
    function Ut(t3, e2, n2) {
      let {$$slots: o2 = {}, $$scope: r2} = e2, {scoped: s2 = {}} = e2;
      return t3.$$set = (t4) => {
        "scoped" in t4 && n2(0, s2 = t4.scoped), "$$scope" in t4 && n2(1, r2 = t4.$$scope);
      }, [s2, r2, o2];
    }
    class Dt extends Rt {
      constructor(t3) {
        super(), St(this, t3, Ut, Bt, a2, {scoped: 0});
      }
    }
    const zt = [];
    function Ht(e2, n2 = t2) {
      let o2;
      const r2 = [];
      function s2(t3) {
        if (a2(e2, t3) && (e2 = t3, o2)) {
          const t4 = !zt.length;
          for (let t5 = 0; t5 < r2.length; t5 += 1) {
            const n3 = r2[t5];
            n3[1](), zt.push(n3, e2);
          }
          if (t4) {
            for (let t5 = 0; t5 < zt.length; t5 += 2)
              zt[t5][0](zt[t5 + 1]);
            zt.length = 0;
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
    function Kt(e2, n2, o2) {
      const r2 = !Array.isArray(e2), a3 = r2 ? [e2] : e2, l2 = n2.length < 2;
      return {subscribe: Ht(o2, (e3) => {
        let o3 = false;
        const u2 = [];
        let d2 = 0, p2 = t2;
        const f2 = () => {
          if (d2)
            return;
          p2();
          const o4 = n2(r2 ? u2[0] : u2, e3);
          l2 ? e3(o4) : p2 = i(o4) ? o4 : t2;
        }, h2 = a3.map((t3, e4) => c(t3, (t4) => {
          u2[e4] = t4, d2 &= ~(1 << e4), o3 && f2();
        }, () => {
          d2 |= 1 << e4;
        }));
        return o3 = true, f2(), function() {
          s(h2), p2();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const Wt = Ht(null);
    const Jt = Ht([]);
    Jt.subscribe((t3) => window.routify.routes = t3);
    let Gt = Ht({component: {params: {}}});
    const Qt = Ht(null);
    const Vt = Ht(true);
    function Xt(t3, e2 = false) {
      t3 = It.urlTransform.remove(t3);
      let {pathname: n2, search: o2} = Ct(t3).url;
      const r2 = l(Jt), s2 = r2.find((t4) => n2 === t4.meta.name) || r2.find((t4) => n2.match(t4.regex));
      if (!s2)
        throw new Error(`Route could not be found for "${n2}".`);
      const i2 = e2 ? Object.create(s2) : s2, {route: a3, redirectPath: c2, rewritePath: u2} = Zt(i2, r2);
      return u2 && ({pathname: n2, search: o2} = Ct(qt(u2, a3.params)).url, c2 && (a3.redirectTo = qt(c2, a3.params || {}))), It.queryHandler && (a3.params = Object.assign({}, a3.params, It.queryHandler.parse(o2))), function(t4, e3) {
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
    function Zt(t3, e2, n2, o2) {
      const {redirect: r2, rewrite: s2} = t3.meta;
      if (r2 || s2) {
        n2 = r2 ? r2.path || r2 : n2, o2 = s2 ? s2.path || s2 : n2;
        const i2 = r2 && r2.params, a3 = s2 && s2.params, c2 = e2.find((t4) => t4.path === o2);
        return c2 === t3 && console.error(`${o2} is redirecting to itself`), c2 || console.error(`${t3.path} is redirecting to non-existent path: ${o2}`), (i2 || a3) && (c2.params = Object.assign({}, c2.params, i2, a3)), Zt(c2, e2, n2, o2);
      }
      return {route: t3, redirectPath: n2, rewritePath: o2};
    }
    function Yt(t3, e2, n2) {
      const o2 = t3.slice();
      return o2[1] = e2[n2], o2;
    }
    function te(t3, e2) {
      let n2, o2;
      return {key: t3, first: null, c() {
        n2 = k("iframe"), n2.src !== (o2 = e2[1].url) && R(n2, "src", o2), R(n2, "frameborder", "0"), R(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t4, e3) {
        x(t4, n2, e3);
      }, p(t4, r2) {
        e2 = t4, 1 & r2 && n2.src !== (o2 = e2[1].url) && R(n2, "src", o2);
      }, d(t4) {
        t4 && v(n2);
      }};
    }
    function ee(e2) {
      let n2, o2 = [], r2 = new Map(), s2 = e2[0];
      const i2 = (t3) => t3[1].options.prefetch;
      for (let t3 = 0; t3 < s2.length; t3 += 1) {
        let n3 = Yt(e2, s2, t3), a3 = i2(n3);
        r2.set(a3, o2[t3] = te(a3, n3));
      }
      return {c() {
        n2 = k("div");
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].c();
        R(n2, "id", "__routify_iframes"), T(n2, "display", "none");
      }, m(t3, e3) {
        x(t3, n2, e3);
        for (let t4 = 0; t4 < o2.length; t4 += 1)
          o2[t4].m(n2, null);
      }, p(t3, [e3]) {
        1 & e3 && (s2 = t3[0], o2 = kt(o2, e3, i2, 1, t3, s2, r2, n2, vt, te, null, Yt));
      }, i: t2, o: t2, d(t3) {
        t3 && v(n2);
        for (let t4 = 0; t4 < o2.length; t4 += 1)
          o2[t4].d();
      }};
    }
    const ne = Ht([]);
    const oe = Kt(ne, (t3) => t3.slice(0, 2));
    function re(t3) {
      const e2 = t3.data ? t3.data.prefetchId : t3;
      if (!e2)
        return null;
      const n2 = l(ne).find((t4) => t4 && t4.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t4} = n2.options, o2 = new Promise((e3) => setTimeout(e3, t4)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t4 + 1e3);
        });
        Promise.all([o2, r2]).then(() => {
          ne.update((t5) => t5.filter((t6) => t6.options.prefetch != e2));
        });
      }
    }
    function se(t3, e2, n2) {
      let o2;
      return u(t3, oe, (t4) => n2(0, o2 = t4)), [o2];
    }
    oe.subscribe((t3) => t3.forEach(({options: t4}) => {
      setTimeout(() => re(t4.prefetch), t4.timeout);
    })), addEventListener("message", re, false);
    class ie extends Rt {
      constructor(t3) {
        super(), St(this, t3, se, ee, a2, {});
      }
    }
    function ae() {
      return V("routify") || Gt;
    }
    const ce = {_hooks: [(t3) => Vt.set(false)], subscribe: ue};
    const le = {_hooks: [], subscribe: ue};
    function ue(t3) {
      const e2 = this._hooks, n2 = e2.length;
      return t3((t4) => {
        e2[n2] = t4;
      }), () => delete e2[n2];
    }
    const de = {subscribe: (t3) => Kt(ae(), (t4) => t4.route.params).subscribe(t3)};
    const pe = {subscribe: (t3) => Kt([ae(), Wt, Jt], (t4) => function(t5, e2, n2) {
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
        let u2 = qt(o2, r2, a3);
        return c2 ? (c2.href = u2, {update(t6) {
          c2.href = qt(o2, t6, a3);
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
    const fe = {subscribe(t3) {
      const e2 = V("routifyupdatepage");
      return Kt(pe, (t4) => function(n2, o2, r2, s2) {
        const i2 = t4(n2, o2);
        r2 ? e2(i2, s2) : history.pushState({}, null, i2);
      }).subscribe(t3);
    }};
    const he = {subscribe(t3) {
      const e2 = V("routifyupdatepage");
      return Kt(pe, (t4) => function(n2, o2, r2, s2) {
        const i2 = t4(n2, o2);
        r2 ? e2(i2, s2) : history.replaceState({}, null, i2);
      }).subscribe(t3);
    }};
    const me = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e2) => [t3, (me.getLongest(me.templates, t3) || ((t4) => t4))(e2)]}, {name: "createMeta", condition: () => true, action(t3, e2) {
      me.writeMeta(t3, e2);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e2) {
      me.writeMeta(`og:${t3}`, e2);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e2) {
      document.title = e2;
    }}], getLongest(t3, e2) {
      const n2 = t3[e2];
      if (n2) {
        const o2 = l(Wt).path;
        return n2[Object.keys(t3[e2]).filter((t4) => o2.includes(t4)).sort((t4, e3) => e3.length - t4.length)[0]];
      }
    }, writeMeta(t3, e2) {
      const n2 = document.getElementsByTagName("head")[0], o2 = t3.match(/(.+)\:/), r2 = o2 && o2[1] || "plain", {propField: s2, valueField: i2} = ge.services[r2] || ge.services.plain, a3 = document.querySelector(`meta[${s2}='${t3}']`);
      a3 && a3.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s2, t3), c2.setAttribute(i2, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t3, e2) {
      me.plugins.forEach((n2) => {
        n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
      });
    }, clear() {
      const t3 = document.querySelector("meta");
      t3 && t3.remove();
    }, template(t3, e2) {
      const n2 = me.getOrigin();
      me.templates[t3] = me.templates[t3] || {}, me.templates[t3][n2] = e2;
    }, update() {
      Object.keys(me.props).forEach((t3) => {
        let e2 = me.getLongest(me.props, t3);
        me.plugins.forEach((n2) => {
          n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
        });
      });
    }, batchedUpdate() {
      me._pendingUpdate || (me._pendingUpdate = true, setTimeout(() => {
        me._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t3 = ae();
      return t3 && l(t3).path || "/";
    }, _pendingUpdate: false};
    const ge = new Proxy(me, {set(t3, e2, n2, o2) {
      const {props: r2, getOrigin: s2} = t3;
      return Reflect.has(t3, e2) ? Reflect.set(t3, e2, n2, o2) : (r2[e2] = r2[e2] || {}, r2[e2][s2()] = n2), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function ye(t3, e2, n2) {
      const o2 = t3.slice();
      return o2[18] = e2[n2].component, o2[19] = e2[n2].componentFile, o2[2] = e2[n2].decorator, o2[1] = e2[n2].nodes, o2;
    }
    function $e(t3) {
      let e2, n2, o2 = [], r2 = new Map(), s2 = [t3[4]];
      const i2 = (t4) => function({meta: t5, path: e3, param: n3, params: o3}) {
        return JSON.stringify({path: e3, param: (t5["param-is-page"] || t5["slug-is-page"]) && n3, queryParams: t5["query-params-is-page"] && o3});
      }(t4[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = ye(t3, s2, e3), a3 = i2(n3);
        r2.set(a3, o2[e3] = xe(a3, n3));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          o2[t4].c();
        e2 = j();
      }, m(t4, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].m(t4, r3);
        x(t4, e2, r3), n2 = true;
      }, p(t4, n3) {
        4194365 & n3 && (s2 = [t4[4]], mt(), o2 = kt(o2, n3, i2, 1, t4, s2, r2, e2.parentNode, Pt, xe, e2, ye), gt());
      }, i(t4) {
        if (!n2) {
          for (let t5 = 0; t5 < 1; t5 += 1)
            yt(o2[t5]);
          n2 = true;
        }
      }, o(t4) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          $t(o2[t5]);
        n2 = false;
      }, d(t4) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].d(t4);
        t4 && v(e2);
      }};
    }
    function be(t3) {
      let e2, n2;
      return e2 = new ke({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[22]}}}), {c() {
        Et(e2.$$.fragment);
      }, m(t4, o2) {
        Ot(e2, t4, o2), n2 = true;
      }, p(t4, n3) {
        const o2 = {};
        4 & n3 && (o2.decorator = t4[2]), 16 & n3 && (o2.nodes = [...t4[1]]), 4194305 & n3 && (o2.scoped = {...t4[0], ...t4[22]}), e2.$set(o2);
      }, i(t4) {
        n2 || (yt(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        $t(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        jt(e2, t4);
      }};
    }
    function we(t3) {
      let e2, n2, o2 = t3[18] && t3[1].length && be(t3);
      return {c() {
        o2 && o2.c(), e2 = j();
      }, m(t4, r2) {
        o2 && o2.m(t4, r2), x(t4, e2, r2), n2 = true;
      }, p(t4, n3) {
        t4[18] && t4[1].length ? o2 ? (o2.p(t4, n3), 16 & n3 && yt(o2, 1)) : (o2 = be(t4), o2.c(), yt(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (mt(), $t(o2, 1, 1, () => {
          o2 = null;
        }), gt());
      }, i(t4) {
        n2 || (yt(o2), n2 = true);
      }, o(t4) {
        $t(o2), n2 = false;
      }, d(t4) {
        o2 && o2.d(t4), t4 && v(e2);
      }};
    }
    function _e(t3) {
      let e2, o2, r2;
      const s2 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var i2 = t3[19];
      function a3(t4) {
        let e3 = {$$slots: {default: [we, ({scoped: t5, decorator: e4}) => ({22: t5, 2: e4}), ({scoped: t5, decorator: e4}) => (t5 ? 4194304 : 0) | (e4 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < s2.length; t5 += 1)
          e3 = n(e3, s2[t5]);
        return {props: e3};
      }
      return i2 && (e2 = new i2(a3(t3))), {c() {
        e2 && Et(e2.$$.fragment), o2 = O();
      }, m(t4, n2) {
        e2 && Ot(e2, t4, n2), x(t4, o2, n2), r2 = true;
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
            mt();
            const t5 = e2;
            $t(t5.$$.fragment, 1, 0, () => {
              jt(t5, 1);
            }), gt();
          }
          i2 ? (e2 = new i2(a3(t4)), Et(e2.$$.fragment), yt(e2.$$.fragment, 1), Ot(e2, o2.parentNode, o2)) : e2 = null;
        } else
          i2 && e2.$set(r3);
      }, i(t4) {
        r2 || (e2 && yt(e2.$$.fragment, t4), r2 = true);
      }, o(t4) {
        e2 && $t(e2.$$.fragment, t4), r2 = false;
      }, d(t4) {
        e2 && jt(e2, t4), t4 && v(o2);
      }};
    }
    function xe(t3, e2) {
      let n2, o2, r2, s2;
      var i2 = e2[2];
      function a3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [_e]}, $$scope: {ctx: t4}}};
      }
      return i2 && (o2 = new i2(a3(e2))), {key: t3, first: null, c() {
        n2 = j(), o2 && Et(o2.$$.fragment), r2 = j(), this.first = n2;
      }, m(t4, e3) {
        x(t4, n2, e3), o2 && Ot(o2, t4, e3), x(t4, r2, e3), s2 = true;
      }, p(t4, n3) {
        e2 = t4;
        const s3 = {};
        if (1 & n3 && (s3.scoped = e2[0]), 8388669 & n3 && (s3.$$scope = {dirty: n3, ctx: e2}), i2 !== (i2 = e2[2])) {
          if (o2) {
            mt();
            const t5 = o2;
            $t(t5.$$.fragment, 1, 0, () => {
              jt(t5, 1);
            }), gt();
          }
          i2 ? (o2 = new i2(a3(e2)), Et(o2.$$.fragment), yt(o2.$$.fragment, 1), Ot(o2, r2.parentNode, r2)) : o2 = null;
        } else
          i2 && o2.$set(s3);
      }, i(t4) {
        s2 || (o2 && yt(o2.$$.fragment, t4), s2 = true);
      }, o(t4) {
        o2 && $t(o2.$$.fragment, t4), s2 = false;
      }, d(t4) {
        t4 && v(n2), t4 && v(r2), o2 && jt(o2, t4);
      }};
    }
    function ve(e2) {
      let n2, o2, r2, s2, a3, c2 = e2[4] && $e(e2);
      return {c() {
        c2 && c2.c(), n2 = O(), o2 = k("span");
      }, m(l2, u2) {
        var d2;
        c2 && c2.m(l2, u2), x(l2, n2, u2), x(l2, o2, u2), r2 = true, s2 || (d2 = e2[8].call(null, o2), a3 = d2 && i(d2.destroy) ? d2.destroy : t2, s2 = true);
      }, p(t3, [e3]) {
        t3[4] ? c2 ? (c2.p(t3, e3), 16 & e3 && yt(c2, 1)) : (c2 = $e(t3), c2.c(), yt(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (mt(), $t(c2, 1, 1, () => {
          c2 = null;
        }), gt());
      }, i(t3) {
        r2 || (yt(c2), r2 = true);
      }, o(t3) {
        $t(c2), r2 = false;
      }, d(t3) {
        c2 && c2.d(t3), t3 && v(n2), t3 && v(o2), s2 = false, a3();
      }};
    }
    function Pe(t3, e2, n2) {
      let o2, r2, s2, i2;
      u(t3, Wt, (t4) => n2(14, s2 = t4));
      let a3, {nodes: c2 = []} = e2, {scoped: l2 = {}} = e2, {isRoot: d2 = false} = e2, {decorator: p2} = e2, f2 = null, h2 = null, m2 = {};
      const g2 = Ht(null);
      u(t3, g2, (t4) => n2(4, i2 = t4));
      const y2 = V("routify");
      u(t3, y2, (t4) => n2(10, r2 = t4));
      function $2(t4) {
        n2(5, m2 = {...l2}), h2.length === 0 && async function() {
          await rt(), At(a3);
          const t5 = i2.component.path === s2.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e4, afterPageLoad: n3}) {
            const {path: o3} = t6, {options: r3} = Nt(), s3 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t6.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o3, prefetchId: s3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: i2.component, metatags: ge, afterPageLoad: ce});
        }();
        const e3 = {nodes: h2, decorator: p2 || Dt, layout: f2.isLayout ? f2 : o2 && o2.layout, component: f2, route: s2, componentFile: t4, parentNode: a3 || o2 && o2.parentNode};
        g2.set(e3), d2 && Gt.set(e3);
      }
      return Q("routify", g2), t3.$$set = (t4) => {
        "nodes" in t4 && n2(1, c2 = t4.nodes), "scoped" in t4 && n2(0, l2 = t4.scoped), "isRoot" in t4 && n2(9, d2 = t4.isRoot), "decorator" in t4 && n2(2, p2 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o2 = r2), 2 & t3.$$.dirty && n2(3, [f2, ...h2] = c2, f2), 8 & t3.$$.dirty && function(t4) {
          let e3 = t4.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(f2), 16 & t3.$$.dirty && i2 && Mt(i2, rt);
      }, [l2, c2, p2, f2, i2, m2, g2, y2, (t4) => a3 = t4.parentNode, d2, r2];
    }
    class ke extends Rt {
      constructor(t3) {
        super(), St(this, t3, Pe, ve, a2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function Ee(t3, e2) {
      let n2 = false;
      function o2(o3, r3) {
        const s2 = Xt(o3 || Nt().fullpath);
        s2.redirectTo && (history.replaceStateNative({}, null, s2.redirectTo), delete s2.redirectTo);
        const i2 = [...(r3 && Xt(Nt().fullpath, t3) || s2).layouts, s2];
        n2 && delete n2.last, s2.last = n2, n2 = s2, o3 || Qt.set(s2), Wt.set(s2), s2.api.preload().then(() => {
          Vt.set(true), e2(i2);
        });
      }
      const r2 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e4 = {}, n4, o3) {
            if (o3 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: s2, params: i2} = l(Wt);
            e4 = {id: r3, path: s2, params: i2, ...e4};
            const a3 = new Event(t5.toLowerCase());
            Object.assign(a3, {state: e4, title: n4, url: o3});
            return await je(a3, o3) ? (history[t5 + "Native"].apply(this, [e4, n4, o3]), dispatchEvent(a3)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: Oe, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n4) => {
          e3 ? e3 = false : await je(n4, Nt().fullpath) ? t4() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n3).forEach((t5) => removeEventListener(...t5));
        };
      }(o2);
      return {updatePage: o2, destroy: r2};
    }
    function Oe(t3) {
      const e2 = t3.target.closest("a"), n2 = e2 && e2.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o2 = new URL(n2), r2 = o2.pathname + o2.search + o2.hash;
      t3.preventDefault(), history.pushState({}, "", r2);
    }
    async function je(t3, e2) {
      const n2 = Xt(e2).api;
      for (const o2 of le._hooks.filter(Boolean)) {
        if (!await o2(t3, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function Se(t3) {
      let e2, n2;
      return e2 = new ke({props: {nodes: t3[0], isRoot: true}}), {c() {
        Et(e2.$$.fragment);
      }, m(t4, o2) {
        Ot(e2, t4, o2), n2 = true;
      }, p(t4, n3) {
        const o2 = {};
        1 & n3 && (o2.nodes = t4[0]), e2.$set(o2);
      }, i(t4) {
        n2 || (yt(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        $t(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        jt(e2, t4);
      }};
    }
    function Re(t3) {
      let e2, n2, o2, r2 = t3[0] && t3[1] !== null && Se(t3);
      return n2 = new ie({}), {c() {
        r2 && r2.c(), e2 = O(), Et(n2.$$.fragment);
      }, m(t4, s2) {
        r2 && r2.m(t4, s2), x(t4, e2, s2), Ot(n2, t4, s2), o2 = true;
      }, p(t4, [n3]) {
        t4[0] && t4[1] !== null ? r2 ? (r2.p(t4, n3), 3 & n3 && yt(r2, 1)) : (r2 = Se(t4), r2.c(), yt(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (mt(), $t(r2, 1, 1, () => {
          r2 = null;
        }), gt());
      }, i(t4) {
        o2 || (yt(r2), yt(n2.$$.fragment, t4), o2 = true);
      }, o(t4) {
        $t(r2), $t(n2.$$.fragment, t4), o2 = false;
      }, d(t4) {
        r2 && r2.d(t4), t4 && v(e2), jt(n2, t4);
      }};
    }
    function Ie(t3, e2, n2) {
      let o2;
      u(t3, Wt, (t4) => n2(1, o2 = t4));
      let r2, s2, {routes: i2} = e2, {config: a3 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(It, a3);
      Q("routifyupdatepage", (...t4) => s2 && s2.updatePage(...t4));
      const c2 = (t4) => n2(0, r2 = t4), l2 = () => {
        s2 && (s2.destroy(), s2 = null);
      };
      let d2 = null;
      var p2;
      return p2 = l2, W().$$.on_destroy.push(p2), t3.$$set = (t4) => {
        "routes" in t4 && n2(2, i2 = t4.routes), "config" in t4 && n2(3, a3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && i2 && (clearTimeout(d2), d2 = setTimeout(() => {
          l2(), s2 = Ee(i2, c2), Jt.set(i2), s2.updatePage();
        }));
      }, [r2, o2, i2, a3];
    }
    class Le extends Rt {
      constructor(t3) {
        super(), St(this, t3, Ie, Re, a2, {routes: 2, config: 3});
      }
    }
    function Ae(t3) {
      const e2 = async function(e3) {
        return await Te(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return Fe(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function Te(t3, e2) {
      const n2 = await t3(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = await Promise.all(o2.children.map(async (n4) => Te(t3, {state: e2.state, scope: Me(e2.scope || {}), parent: e2.file, file: await n4})));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Fe(t3, e2) {
      const n2 = t3(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = o2.children.map((n4) => Fe(t3, {state: e2.state, scope: Me(e2.scope || {}), parent: e2.file, file: n4}));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Me(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const Ne = Ae(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(Lt, "([^/]+)") + n2}`;
      })(t3.path, t3.isFallback));
    });
    const Ce = Ae(({file: t3}) => {
      t3.paramKeys = Ft(t3.path);
    });
    const qe = Ae(({file: t3}) => {
      t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
    });
    const Be = Ae(({file: t3}) => {
      t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
    });
    const Ue = Ae(({file: t3}) => {
      const e2 = t3, n2 = t3.meta && t3.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const De = Ae((t3) => {
      const {file: e2} = t3, {isFallback: n2, meta: o2} = e2, r2 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i2 = o2.index || o2.index === 0, a3 = o2.index === false;
      e2.isIndexable = i2 || !n2 && !r2 && !s2 && !a3, e2.isNonIndexable = !e2.isIndexable;
    });
    const ze = Ae(({file: t3, parent: e2}) => {
      Object.defineProperty(t3, "parent", {get: () => e2}), Object.defineProperty(t3, "nextSibling", {get: () => Ke(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => Ke(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => He(e2)});
    });
    function He(t3, e2 = []) {
      return t3 && (e2.unshift(t3), He(t3.parent, e2)), e2;
    }
    function Ke(t3, e2) {
      if (!t3.root) {
        const n2 = t3.parent.children.filter((t4) => t4.isIndexable), o2 = n2.indexOf(t3);
        return n2[o2 + e2];
      }
    }
    const We = Ae(({file: t3, parent: e2}) => {
      t3.isIndex && Object.defineProperty(e2, "index", {get: () => t3});
    });
    const Je = Ae(({file: t3, scope: e2}) => {
      function n2(t4) {
        const {parent: e3} = t4, o2 = e3 && e3.component && e3, r2 = o2 && o2.isReset, s2 = e3 && !r2 && n2(e3) || [];
        return o2 && s2.push(o2), s2;
      }
      Object.defineProperty(t3, "layouts", {get: () => n2(t3)});
    });
    const Ge = Ae(({file: t3}) => {
      const e2 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e2.prototype);
    });
    var Qe = Object.freeze({__proto__: null, setRegex: Ne, setParamKeys: Ce, setShortPath: qe, setRank: Be, addMetaChildren: Ue, setIsIndexable: De, assignRelations: ze, assignIndex: We, assignLayout: Je, createFlatList: (t3) => {
      Ae((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e2) => t4.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: Ge});
    const Ve = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function Xe(t3) {
      return Object.entries(Ve).forEach(([e2, n2]) => {
        t3[e2] === void 0 && (t3[e2] = n2);
      }), t3.children && (t3.children = t3.children.map(Xe)), t3;
    }
    const Ze = Ae(({file: t3}) => {
      t3.api = new Ye(t3);
    });
    class Ye {
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
        return tn(this, 1);
      }
      get prev() {
        return tn(this, -1);
      }
      async preload() {
        const t3 = [...this.__file.layouts, this.__file].map((t4) => t4.component());
        await Promise.all(t3);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function tn(t3, e2) {
      if (!t3.__file.root) {
        const n2 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n2 + e2];
      }
    }
    const en = {...Qe, restoreDefaults: ({tree: t3}) => Xe(t3), assignAPI: Ze};
    const nn = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_cee8d085())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery/index", id: "_gallery_index", component: () => Promise.resolve().then(() => __toModule(require_index_4bf77cab())).then((t3) => t3.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery"}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_361dd333())).then((t3) => t3.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_084b126d())).then((t3) => t3.default)};
    const {tree: on, routes: rn} = function(t3) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t3, routes: []};
      for (let t4 of e2) {
        (en[t4].sync || en[t4])(n2);
      }
      return n2;
    }(nn);
    function sn(e2) {
      let n2, o2;
      return n2 = new Le({props: {routes: rn}}), {c() {
        Et(n2.$$.fragment);
      }, m(t3, e3) {
        Ot(n2, t3, e3), o2 = true;
      }, p: t2, i(t3) {
        o2 || (yt(n2.$$.fragment, t3), o2 = true);
      }, o(t3) {
        $t(n2.$$.fragment, t3), o2 = false;
      }, d(t3) {
        jt(n2, t3);
      }};
    }
    !function(t3, e2 = {target: document.body}, n2 = "hmr", o2 = "app-loaded") {
      const r2 = document.getElementById(n2), s2 = document.createElement("div");
      function i2() {
        r2 && r2.remove(), s2.style.visibility = null, s2.setAttribute("id", n2);
      }
      s2.style.visibility = "hidden", e2.target.appendChild(s2), r2 ? addEventListener(o2, i2) : i2(), new t3({...e2, target: s2});
    }(class extends Rt {
      constructor(t3) {
        super(), St(this, t3, null, sn, a2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/index-8c3c3d83.js
  const main = __toModule(require_main());
  function a(a2, {delay: o = 0, duration: e = 400, easing: i = main.E} = {}) {
    const n = +getComputedStyle(a2).opacity;
    return {delay: o, duration: e, easing: i, css: (t2) => "opacity: " + t2 * n};
  }
  require_main();
})();
