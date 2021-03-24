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

  // dist/build/_fallback-236e6746.js
  var require_fallback_236e6746 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_236e6746_default
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
    class fallback_236e6746_default extends main2.S {
      constructor(s2) {
        super(), main2.i(this, s2, g, v, main2.s, {});
      }
    }
  });

  // dist/build/index-2d57f1cd.js
  var require_index_2d57f1cd = __commonJS((exports) => {
    __export(exports, {
      default: () => index_2d57f1cd_default
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
    class index_2d57f1cd_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, G, F, main2.s, {});
      }
    }
  });

  // dist/build/index-193e75b2.js
  var require_index_193e75b2 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_193e75b2_default
    });
    const main2 = __toModule(require_main());
    function X(e2) {
      let t3, n2, d2, x2, M2, k2, _2, C2, S2, O2, j2, L2 = e2[0].closeButton && G(e2);
      var I2 = e2[1];
      return I2 && (k2 = new I2({})), {c() {
        t3 = main2.e("div"), n2 = main2.e("div"), d2 = main2.e("div"), L2 && L2.c(), x2 = main2.a(), M2 = main2.e("div"), k2 && main2.q(k2.$$.fragment), main2.b(M2, "class", "content svelte-1jadkpy"), main2.b(M2, "style", e2[12]), main2.b(d2, "class", "window svelte-1jadkpy"), main2.b(d2, "role", "dialog"), main2.b(d2, "aria-modal", "true"), main2.b(d2, "style", e2[11]), main2.b(n2, "class", "window-wrap svelte-1jadkpy"), main2.b(n2, "style", e2[10]), main2.b(t3, "class", "bg svelte-1jadkpy"), main2.b(t3, "style", e2[9]);
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), main2.d(n2, d2), L2 && L2.m(d2, null), main2.d(d2, x2), main2.d(d2, M2), k2 && main2.r(k2, M2, null), e2[37](d2), e2[38](n2), e2[39](t3), S2 = true, O2 || (j2 = [main2.A(d2, "introstart", function() {
          main2.F(e2[5]) && e2[5].apply(this, arguments);
        }), main2.A(d2, "outrostart", function() {
          main2.F(e2[6]) && e2[6].apply(this, arguments);
        }), main2.A(d2, "introend", function() {
          main2.F(e2[7]) && e2[7].apply(this, arguments);
        }), main2.A(d2, "outroend", function() {
          main2.F(e2[8]) && e2[8].apply(this, arguments);
        }), main2.A(t3, "click", e2[19])], O2 = true);
      }, p(r2, s2) {
        if ((e2 = r2)[0].closeButton ? L2 ? (L2.p(e2, s2), 1 & s2[0] && main2.p(L2, 1)) : (L2 = G(e2), L2.c(), main2.p(L2, 1), L2.m(d2, x2)) : L2 && (main2.D(), main2.v(L2, 1, 1, () => {
          L2 = null;
        }), main2.x()), I2 !== (I2 = e2[1])) {
          if (k2) {
            main2.D();
            const e3 = k2;
            main2.v(e3.$$.fragment, 1, 0, () => {
              main2.w(e3, 1);
            }), main2.x();
          }
          I2 ? (k2 = new I2({}), main2.q(k2.$$.fragment), main2.p(k2.$$.fragment, 1), main2.r(k2, M2, null)) : k2 = null;
        }
        (!S2 || 4096 & s2[0]) && main2.b(M2, "style", e2[12]), (!S2 || 2048 & s2[0]) && main2.b(d2, "style", e2[11]), (!S2 || 1024 & s2[0]) && main2.b(n2, "style", e2[10]), (!S2 || 512 & s2[0]) && main2.b(t3, "style", e2[9]);
      }, i(n3) {
        S2 || (main2.p(L2), k2 && main2.p(k2.$$.fragment, n3), main2.j(() => {
          _2 || (_2 = main2.k(d2, e2[15], e2[0].transitionWindowProps, true)), _2.run(1);
        }), main2.j(() => {
          C2 || (C2 = main2.k(t3, e2[14], e2[0].transitionBgProps, true)), C2.run(1);
        }), S2 = true);
      }, o(n3) {
        main2.v(L2), k2 && main2.v(k2.$$.fragment, n3), _2 || (_2 = main2.k(d2, e2[15], e2[0].transitionWindowProps, false)), _2.run(0), C2 || (C2 = main2.k(t3, e2[14], e2[0].transitionBgProps, false)), C2.run(0), S2 = false;
      }, d(n3) {
        n3 && main2.f(t3), L2 && L2.d(), k2 && main2.w(k2), e2[37](null), n3 && _2 && _2.end(), e2[38](null), e2[39](null), n3 && C2 && C2.end(), O2 = false, main2.B(j2);
      }};
    }
    function G(e2) {
      let t3, n2, r2, s2, i2;
      const c2 = [te, ee], l2 = [];
      function a3(e3, n3) {
        return 1 & n3[0] && (t3 = !!e3[16](e3[0].closeButton)), t3 ? 0 : 1;
      }
      return n2 = a3(e2, [-1]), r2 = l2[n2] = c2[n2](e2), {c() {
        r2.c(), s2 = main2.G();
      }, m(e3, t4) {
        l2[n2].m(e3, t4), main2.c(e3, s2, t4), i2 = true;
      }, p(e3, t4) {
        let i3 = n2;
        n2 = a3(e3, t4), n2 === i3 ? l2[n2].p(e3, t4) : (main2.D(), main2.v(l2[i3], 1, 1, () => {
          l2[i3] = null;
        }), main2.x(), r2 = l2[n2], r2 ? r2.p(e3, t4) : (r2 = l2[n2] = c2[n2](e3), r2.c()), main2.p(r2, 1), r2.m(s2.parentNode, s2));
      }, i(e3) {
        i2 || (main2.p(r2), i2 = true);
      }, o(e3) {
        main2.v(r2), i2 = false;
      }, d(e3) {
        l2[n2].d(e3), e3 && main2.f(s2);
      }};
    }
    function ee(e2) {
      let t3, n2, s2;
      return {c() {
        t3 = main2.e("button"), main2.b(t3, "class", "close svelte-1jadkpy"), main2.b(t3, "style", e2[13]);
      }, m(r2, i2) {
        main2.c(r2, t3, i2), n2 || (s2 = main2.A(t3, "click", e2[17]), n2 = true);
      }, p(e3, n3) {
        8192 & n3[0] && main2.b(t3, "style", e3[13]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), n2 = false, s2();
      }};
    }
    function te(e2) {
      let t3, n2, r2;
      var s2 = e2[0].closeButton;
      function i2(e3) {
        return {props: {onClose: e3[17]}};
      }
      return s2 && (t3 = new s2(i2(e2))), {c() {
        t3 && main2.q(t3.$$.fragment), n2 = main2.G();
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
          s2 ? (t3 = new s2(i2(e3)), main2.q(t3.$$.fragment), main2.p(t3.$$.fragment, 1), main2.r(t3, n2.parentNode, n2)) : t3 = null;
        }
      }, i(e3) {
        r2 || (t3 && main2.p(t3.$$.fragment, e3), r2 = true);
      }, o(e3) {
        t3 && main2.v(t3.$$.fragment, e3), r2 = false;
      }, d(e3) {
        e3 && main2.f(n2), t3 && main2.w(t3, e3);
      }};
    }
    function ne(e2) {
      let t3, n2, r2, i2, c2 = e2[1] && X(e2);
      const a3 = e2[36].default, d2 = main2.H(a3, e2, e2[35], null);
      return {c() {
        c2 && c2.c(), t3 = main2.a(), d2 && d2.c();
      }, m(s2, a4) {
        c2 && c2.m(s2, a4), main2.c(s2, t3, a4), d2 && d2.m(s2, a4), n2 = true, r2 || (i2 = main2.A(window, "keydown", e2[18]), r2 = true);
      }, p(e3, n3) {
        e3[1] ? c2 ? (c2.p(e3, n3), 2 & n3[0] && main2.p(c2, 1)) : (c2 = X(e3), c2.c(), main2.p(c2, 1), c2.m(t3.parentNode, t3)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x()), d2 && d2.p && 16 & n3[1] && main2.I(d2, a3, e3, e3[35], n3, null, null);
      }, i(e3) {
        n2 || (main2.p(c2), main2.p(d2, e3), n2 = true);
      }, o(e3) {
        main2.v(c2), main2.v(d2, e3), n2 = false;
      }, d(e3) {
        c2 && c2.d(e3), e3 && main2.f(t3), d2 && d2.d(e3), r2 = false, i2();
      }};
    }
    function re(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3, {$$slots: u2 = {}, $$scope: d2} = t3;
      const f2 = main2.J(), h2 = main2.K;
      let {show: p2 = null} = t3, {key: g2 = "simple-modal"} = t3, {closeButton: m2 = true} = t3, {closeOnEsc: $2 = true} = t3, {closeOnOuterClick: y2 = true} = t3, {styleBg: v2 = {top: 0, left: 0}} = t3, {styleWindowWrap: w2 = {}} = t3, {styleWindow: b2 = {}} = t3, {styleContent: x2 = {}} = t3, {styleCloseButton: M2 = {}} = t3, {setContext: _2 = h2} = t3, {transitionBg: O2 = a} = t3, {transitionBgProps: j2 = {duration: 250}} = t3, {transitionWindow: L2 = O2} = t3, {transitionWindowProps: I2 = j2} = t3;
      const P2 = {closeButton: m2, closeOnEsc: $2, closeOnOuterClick: y2, styleBg: v2, styleWindowWrap: w2, styleWindow: b2, styleContent: x2, styleCloseButton: M2, transitionBg: O2, transitionBgProps: j2, transitionWindow: L2, transitionWindowProps: I2};
      let B2, z2, E2, A2 = {...P2}, N2 = null;
      const W2 = (e3) => Object.keys(e3).reduce((t4, n3) => `${t4}; ${((e4) => e4.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(n3)}: ${e3[n3]}`, ""), T2 = (e3) => !!(e3 && e3.constructor && e3.call && e3.apply), D2 = () => {
      };
      let R2 = D2, F2 = D2, V2 = D2, q2 = D2;
      const J2 = (e3, t4 = {}, r3 = {}, s3 = {}) => {
        n2(1, N2 = function(e4, t5 = {}) {
          return function(n3) {
            return new e4({...n3, props: {...t5, ...n3.props}});
          };
        }(e3, t4)), n2(0, A2 = {...P2, ...r3}), n2(5, R2 = (e4) => {
          s3.onOpen && s3.onOpen(e4), f2("opening");
        }), n2(6, F2 = (e4) => {
          s3.onClose && s3.onClose(e4), f2("closing");
        }), n2(7, V2 = (e4) => {
          s3.onOpened && s3.onOpened(e4), f2("opened");
        }), n2(8, q2 = (e4) => {
          s3.onClosed && s3.onClosed(e4), f2("closed");
        });
      }, H2 = (e3 = {}) => {
        n2(6, F2 = e3.onClose || F2), n2(8, q2 = e3.onClosed || q2), n2(1, N2 = null);
      };
      return _2(g2, {open: J2, close: H2}), e2.$$set = (e3) => {
        "show" in e3 && n2(20, p2 = e3.show), "key" in e3 && n2(21, g2 = e3.key), "closeButton" in e3 && n2(22, m2 = e3.closeButton), "closeOnEsc" in e3 && n2(23, $2 = e3.closeOnEsc), "closeOnOuterClick" in e3 && n2(24, y2 = e3.closeOnOuterClick), "styleBg" in e3 && n2(25, v2 = e3.styleBg), "styleWindowWrap" in e3 && n2(26, w2 = e3.styleWindowWrap), "styleWindow" in e3 && n2(27, b2 = e3.styleWindow), "styleContent" in e3 && n2(28, x2 = e3.styleContent), "styleCloseButton" in e3 && n2(29, M2 = e3.styleCloseButton), "setContext" in e3 && n2(30, _2 = e3.setContext), "transitionBg" in e3 && n2(31, O2 = e3.transitionBg), "transitionBgProps" in e3 && n2(32, j2 = e3.transitionBgProps), "transitionWindow" in e3 && n2(33, L2 = e3.transitionWindow), "transitionWindowProps" in e3 && n2(34, I2 = e3.transitionWindowProps), "$$scope" in e3 && n2(35, d2 = e3.$$scope);
      }, e2.$$.update = () => {
        1 & e2.$$.dirty[0] && n2(9, r2 = W2(A2.styleBg)), 1 & e2.$$.dirty[0] && n2(10, s2 = W2(A2.styleWindowWrap)), 1 & e2.$$.dirty[0] && n2(11, i2 = W2(A2.styleWindow)), 1 & e2.$$.dirty[0] && n2(12, o2 = W2(A2.styleContent)), 1 & e2.$$.dirty[0] && n2(13, c2 = W2(A2.styleCloseButton)), 1 & e2.$$.dirty[0] && n2(14, l2 = A2.transitionBg), 1 & e2.$$.dirty[0] && n2(15, a3 = A2.transitionWindow), 1048576 & e2.$$.dirty[0] && (T2(p2) ? J2(p2) : H2());
      }, [A2, N2, B2, z2, E2, R2, F2, V2, q2, r2, s2, i2, o2, c2, l2, a3, T2, H2, (e3) => {
        if (A2.closeOnEsc && N2 && e3.key === "Escape" && (e3.preventDefault(), H2()), N2 && e3.key === "Tab") {
          const t4 = E2.querySelectorAll("*"), n3 = Array.from(t4).filter((e4) => e4.tabIndex >= 0);
          let r3 = n3.indexOf(document.activeElement);
          r3 === -1 && e3.shiftKey && (r3 = 0), r3 += n3.length + (e3.shiftKey ? -1 : 1), r3 %= n3.length, n3[r3].focus(), e3.preventDefault();
        }
      }, (e3) => {
        !A2.closeOnOuterClick || e3.target !== B2 && e3.target !== z2 || (e3.preventDefault(), H2());
      }, p2, g2, m2, $2, y2, v2, w2, b2, x2, M2, _2, O2, j2, L2, I2, d2, u2, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          E2 = e3, n2(4, E2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          z2 = e3, n2(3, z2);
        });
      }, function(e3) {
        main2.m[e3 ? "unshift" : "push"](() => {
          B2 = e3, n2(2, B2);
        });
      }];
    }
    class se extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, re, ne, main2.s, {show: 20, key: 21, closeButton: 22, closeOnEsc: 23, closeOnOuterClick: 24, styleBg: 25, styleWindowWrap: 26, styleWindow: 27, styleContent: 28, styleCloseButton: 29, setContext: 30, transitionBg: 31, transitionBgProps: 32, transitionWindow: 33, transitionWindowProps: 34}, [-1, -1]);
      }
    }
    const ie = {value: null, color: null};
    const oe = {value: "\u{1F496}", color: "#fff"};
    const ce = [{value: "\uAD8C\uC740\uBE44", color: "#bbb0dc"}, {value: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", color: "#f1d2e7"}, {value: "\uAC15\uD61C\uC6D0", color: "#db706c"}, {value: "\uCD5C\uC608\uB098", color: "#fcf695"}, {value: "\uC774\uCC44\uC5F0", color: "#a7e0e1"}, {value: "\uAE40\uCC44\uC6D0", color: "#cee5d5"}, {value: "\uC57C\uBD80\uD0A4 \uB098\uCF54", color: "#b7d3e9"}, {value: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", color: "#f1c3aa"}, {value: "\uAE40\uBBFC\uC8FC", color: "#fff"}, {value: "\uC870\uC720\uB9AC", color: "#f3aa51"}, {value: "\uC548\uC720\uC9C4", color: "#567ace"}, {value: "\uC7A5\uC6D0\uC601", color: "#d9598c"}, {value: "\uC6B4\uC601\uD300", color: "gray"}];
    let le;
    let ae = main2.L(function() {
      let e2 = ce.reduce((e3, t4) => (e3.set(t4.value, t4), e3), new Map([["\u{1F496}", oe]]));
      const t3 = localStorage.getItem("all_tag_dict");
      if (t3) {
        console.log("all tag backup loaded");
        const n2 = JSON.parse(t3);
        e2 = [...e2].reduce((e3, t4) => (e3.set(t4[0], t4[1]), e3), new Map(n2));
      }
      return e2;
    }());
    ae.subscribe((e2) => {
      var t3;
      localStorage.setItem("all_tag_dict", (t3 = e2, JSON.stringify([...t3])));
    }), ae.subscribe((e2) => {
      le = (t3) => {
        const n2 = t3.map((t4) => [t4[0], new Set(t4[1].map((t5) => e2.get(t5)))]);
        return new Map(n2);
      };
    });
    let ue = main2.L(function() {
      const e2 = localStorage.getItem("mail_to_tag_dict");
      let t3 = new Map([["m0", new Set([oe])]]);
      if (e2) {
        const n2 = JSON.parse(e2);
        t3 = le(n2);
      }
      return t3;
    }());
    ue.subscribe((e2) => {
      if (!e2)
        return null;
      [...e2].forEach((e3) => {
        e3[1].size == 0 && ue.update((t4) => (t4.delete(e3[0]), t4));
      });
      const t3 = function(e3) {
        return [...e3].map((e4) => [e4[0], [...e4[1]].map((e5) => e5.value)]);
      }(e2);
      localStorage.setItem("mail_to_tag_dict", JSON.stringify(t3));
    });
    let de;
    let fe = main2.L("");
    let he = main2.L(Math.floor(12 * Math.random()));
    let pe = main2.L({color: null, value: null});
    ae.subscribe((e2) => {
      de = (t3) => new Map(t3.map((t4) => [e2.get(t4[0]), new Set(t4[1])]));
    });
    let ge = main2.L(function() {
      const e2 = () => new Set();
      let t3 = ce.reduce((t4, n3) => (t4.set(n3, e2()), t4), new Map([[oe, e2()]]));
      const n2 = localStorage.getItem("tag_to_mail_dict");
      if (n2) {
        const e3 = JSON.parse(n2);
        t3 = [...de(e3)].reduce((e4, t4) => (e4.set(t4[0], t4[1]), e4), t3);
      }
      return t3;
    }());
    ge.subscribe((e2) => {
      if ([...e2].forEach(([e3, t4]) => {
        if (t4.size == 0 && e3.value != "\u{1F496}" && !ce.includes(e3)) {
          pe.update((t6) => t6 == e3 ? ie : t6);
          const t5 = e3.value;
          ge.update((t6) => (t6.delete(e3), t6)), ae.update((e4) => (e4.delete(t5), e4));
        }
      }), !e2)
        return null;
      const t3 = (n2 = e2, [...n2].map((e3) => [e3[0].value, [...e3[1]]]));
      var n2;
      localStorage.setItem("tag_to_mail_dict", JSON.stringify(t3));
    });
    let me = main2.L([{id: "", member: "", time: "", subject: "", preview: "", n: 1}]);
    let $e = main2.L({id: "m20731", member: "\uAD11\uBC30", time: "2021/03/09 19:23", subject: "\uC0AC\uD0D5", preview: "\uC704\uC988\uC6D0 \uC0AC\uD0D5 \uD478\uB529 \uB9DB \uC788\uB294\uAC70 \uC54C\uC558\uC5B4?? \uB9DB\uC788\uC5B4\uBCF4\uC5EC\uC11C \uC0AC\uC11C \uC5B8\uC81C\uBA39\uC744\uC9C0 \uACE0\uBBFC\uC911\uC774\uC57C ."});
    let ye = main2.L("");
    let ve = main2.M(ye, (e2) => "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + e2.replace(/\&nbsp;<\/div>/g, "\n").replace(/<\/div>/g, "\n").replace(/&nbsp;/g, "").replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "").replace(/\n\n/g, "\n").replace(/\n/g, "%0A"));
    let we = main2.L(1);
    let be = main2.L(true);
    let xe = main2.L(false);
    let Me = main2.L(true);
    let ke = main2.M(Me, (e2) => !e2);
    function _e(e2) {
      let t3, n2, s2, c2;
      const d2 = e2[3].default, f2 = main2.H(d2, e2, e2[2], null);
      return {c() {
        t3 = main2.e("button"), f2 && f2.c(), main2.b(t3, "id", e2[1]), main2.b(t3, "class", "rounded bg-red-100 m-2 pl-1 pr-1");
      }, m(r2, i2) {
        main2.c(r2, t3, i2), f2 && f2.m(t3, null), n2 = true, s2 || (c2 = main2.A(t3, "click", function() {
          main2.F(e2[0]) && e2[0].apply(this, arguments);
        }), s2 = true);
      }, p(r2, [s3]) {
        e2 = r2, f2 && f2.p && 4 & s3 && main2.I(f2, d2, e2, e2[2], s3, null, null), (!n2 || 2 & s3) && main2.b(t3, "id", e2[1]);
      }, i(e3) {
        n2 || (main2.p(f2, e3), n2 = true);
      }, o(e3) {
        main2.v(f2, e3), n2 = false;
      }, d(e3) {
        e3 && main2.f(t3), f2 && f2.d(e3), s2 = false, c2();
      }};
    }
    function Ce(e2, t3, n2) {
      let {$$slots: r2 = {}, $$scope: s2} = t3, {onClick: i2} = t3, {id: o2} = t3;
      return e2.$$set = (e3) => {
        "onClick" in e3 && n2(0, i2 = e3.onClick), "id" in e3 && n2(1, o2 = e3.id), "$$scope" in e3 && n2(2, s2 = e3.$$scope);
      }, [i2, o2, s2, r2];
    }
    class Se extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ce, _e, main2.s, {onClick: 0, id: 1});
      }
    }
    function Oe(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[10] = t3[n2], r2;
    }
    function je(e2) {
      let t3, n2, a3, u2, d2, f2, h2, p2 = e2[10].value + "";
      return {c() {
        t3 = main2.e("label"), n2 = main2.e("input"), a3 = main2.a(), u2 = main2.t(p2), d2 = main2.a(), main2.b(n2, "id", "TagUpdateColorRadio-" + e2[10].value), main2.b(n2, "type", "radio"), n2.__value = e2[10].color, n2.value = n2.__value, e2[8][0].push(n2), main2.h(t3, "background-color", e2[10].color), main2.b(t3, "class", (e2[10].color == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-0.5 pl-1 pr-1.5");
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), n2.checked = n2.__value === e2[1], main2.d(t3, a3), main2.d(t3, u2), main2.d(t3, d2), f2 || (h2 = main2.A(n2, "change", e2[7]), f2 = true);
      }, p(e3, t4) {
        2 & t4 && (n2.checked = n2.__value === e3[1]);
      }, d(r2) {
        r2 && main2.f(t3), e2[8][0].splice(e2[8][0].indexOf(n2), 1), f2 = false, h2();
      }};
    }
    function Le(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uACB0\uC815\uD588\uC5B4\uC694!");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Ie(e2) {
      let t3, n2, a3, d2, f2, p2, v2, w2, b2, x2, M2, k2, _2 = e2[3], C2 = [];
      for (let t4 = 0; t4 < _2.length; t4 += 1)
        C2[t4] = je(Oe(e2, _2, t4));
      return b2 = new Se({props: {id: "TagUpdateButton", onClick: e2[2], $$slots: {default: [Le]}, $$scope: {ctx: e2}}}), {c() {
        t3 = main2.e("div"), n2 = main2.e("h3"), n2.textContent = "\uD0DC\uADF8 \uC218\uC815", a3 = main2.a(), d2 = main2.e("input"), p2 = main2.a(), v2 = main2.e("div");
        for (let e3 = 0; e3 < C2.length; e3 += 1)
          C2[e3].c();
        w2 = main2.a(), main2.q(b2.$$.fragment), main2.b(n2, "class", "svelte-qli48t"), main2.b(d2, "type", "text"), main2.b(d2, "id", "TagUpdateInput"), main2.h(d2, "background-color", e2[1]), main2.h(d2, "text-align", "center"), main2.b(d2, "class", f2 = (e2[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20"), main2.h(t3, "text-align", "center"), main2.b(v2, "class", "flex flex-wrap p-1");
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), main2.d(t3, a3), main2.d(t3, d2), main2.N(d2, e2[0]), main2.c(r2, p2, s2), main2.c(r2, v2, s2);
        for (let e3 = 0; e3 < C2.length; e3 += 1)
          C2[e3].m(v2, null);
        main2.c(r2, w2, s2), main2.r(b2, r2, s2), x2 = true, M2 || (k2 = main2.A(d2, "input", e2[6]), M2 = true);
      }, p(e3, [t4]) {
        if ((!x2 || 2 & t4) && main2.h(d2, "background-color", e3[1]), (!x2 || 2 & t4 && f2 !== (f2 = (e3[1] == "#fff" ? "p-0 border-2 border-gray" : "p-0.5") + "\r\n    rounded m-3 pl-1 pr-1.5 w-20")) && main2.b(d2, "class", f2), 1 & t4 && d2.value !== e3[0] && main2.N(d2, e3[0]), 10 & t4) {
          let n4;
          for (_2 = e3[3], n4 = 0; n4 < _2.length; n4 += 1) {
            const r2 = Oe(e3, _2, n4);
            C2[n4] ? C2[n4].p(r2, t4) : (C2[n4] = je(r2), C2[n4].c(), C2[n4].m(v2, null));
          }
          for (; n4 < C2.length; n4 += 1)
            C2[n4].d(1);
          C2.length = _2.length;
        }
        const n3 = {};
        4 & t4 && (n3.onClick = e3[2]), 8192 & t4 && (n3.$$scope = {dirty: t4, ctx: e3}), b2.$set(n3);
      }, i(e3) {
        x2 || (main2.p(b2.$$.fragment, e3), x2 = true);
      }, o(e3) {
        main2.v(b2.$$.fragment, e3), x2 = false;
      }, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(p2), e3 && main2.f(v2), main2.y(C2, e3), e3 && main2.f(w2), main2.w(b2, e3), M2 = false, k2();
      }};
    }
    function Pe(e2, t3, n2) {
      let r2, s2;
      main2.g(e2, ae, (e3) => n2(5, s2 = e3));
      let {tag: i2} = t3, o2 = i2.value, c2 = i2.color;
      const {close: l2} = main2.O("simple-modal");
      return e2.$$set = (e3) => {
        "tag" in e3 && n2(4, i2 = e3.tag);
      }, e2.$$.update = () => {
        51 & e2.$$.dirty && n2(2, r2 = () => {
          const e3 = s2.get(i2.value);
          s2.delete(e3.value), e3.value = o2, e3.color = c2, s2.set(o2, e3), ae.set(s2), l2();
        });
      }, [o2, c2, r2, [{value: "\uC218\uB193\uC740\uBCC4\uBE5B", color: "#bbb0dc"}, {value: "\uBC9A\uAF43\uD551\uD06C", color: "#f1d2e7"}, {value: "\uAC15\uCF54\uB784", color: "#db706c"}, {value: "\uC60C\uB85C\uC6B0", color: "#fcf695"}, {value: "\uCC48\uBA54\uB784\uB4DC", color: "#a7e0e1"}, {value: "\uCC54\uBB34", color: "#cee5d5"}, {value: "\uB098\uBD80\uD0A4\uD558\uB298", color: "#b7d3e9"}, {value: "\uD1A0\uBBF8\uBCA0\uC774\uC9C0", color: "#f1c3aa"}, {value: "\uBC31\uC124\uBBFC\uC8FC", color: "#fff"}, {value: "\uC728\uB80C\uC9C0", color: "#f3aa51"}, {value: "\uBE14\uB8E8\uC9C0\uB2C8", color: "#567ace"}, {value: "\uCE94\uB514\uD551\uD06C", color: "#d9598c"}], i2, s2, function() {
        o2 = this.value, n2(0, o2);
      }, function() {
        c2 = this.__value, n2(1, c2);
      }, [[]]];
    }
    class Be extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Pe, Ie, main2.s, {tag: 4});
      }
    }
    const ze = {0: "#d9598c", 1: "#f1d2e7", 2: "#f3aa51", 3: "#fcf695", 4: "#567ace", 5: "#b7d3e9", 6: "#bbb0dc", 7: "#db706c", 8: "#f1c3aa", 9: "#cee5d5", 10: "#fff", 11: "#a7e0e1", 12: "gray"};
    let Ee = main2.L({});
    main2.M(Ee, (e2) => Object.keys(e2).reduce((e3, t3) => Object.assign(Object.assign({}, e3), {[Ee[t3]]: t3}), {0: "\uC7A5\uC6D0\uC601"}));
    const Ae = {0: "\uC7A5\uC6D0\uC601", 1: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", 2: "\uC870\uC720\uB9AC", 3: "\uCD5C\uC608\uB098", 4: "\uC548\uC720\uC9C4", 5: "\uC57C\uBD80\uD0A4 \uB098\uCF54", 6: "\uAD8C\uC740\uBE44", 7: "\uAC15\uD61C\uC6D0", 8: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", 9: "\uAE40\uCC44\uC6D0", 10: "\uAE40\uBBFC\uC8FC", 11: "\uC774\uCC44\uC5F0", 12: "\uC6B4\uC601\uD300"};
    const Ne = new Set(["\u{1F496}", "\uC7A5\uC6D0\uC601", "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", "\uC870\uC720\uB9AC", "\uCD5C\uC608\uB098", "\uC548\uC720\uC9C4", "\uC57C\uBD80\uD0A4 \uB098\uCF54", "\uAD8C\uC740\uBE44", "\uAC15\uD61C\uC6D0", "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", "\uAE40\uCC44\uC6D0", "\uAE40\uBBFC\uC8FC", "\uC774\uCC44\uC5F0", "\uC6B4\uC601\uD300", "\uC0DD\uC77C"]);
    function We(e2) {
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
    function Te(e2, t3, n2) {
      let {icon: r2} = t3, s2 = [], i2 = "", o2 = "";
      return e2.$$set = (e3) => {
        n2(4, t3 = main2.R(main2.R({}, t3), main2.T(e3))), "icon" in e3 && n2(3, r2 = e3.icon);
      }, e2.$$.update = () => {
        8 & e2.$$.dirty && n2(2, o2 = "0 0 " + r2.icon[0] + " " + r2.icon[1]), n2(1, i2 = "fa-svelte " + (t3.class ? t3.class : "")), 8 & e2.$$.dirty && n2(0, s2 = r2.icon[4]);
      }, t3 = main2.T(t3), [s2, i2, o2, r2];
    }
    class De extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Te, We, main2.s, {icon: 3});
      }
    }
    function Re(e2, t3, n2) {
      return e2(n2 = {path: t3, exports: {}, require: function(e3, t4) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(t4 == null && n2.path);
      }}, n2.exports), n2.exports;
    }
    var Fe = Re(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "twitter", r2 = [], s2 = "f099", i2 = "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [512, 512, r2, s2, i2]}, t3.faTwitter = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 512, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = i2;
    });
    var Ve = Re(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "facebook", r2 = [], s2 = "f09a", i2 = "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [512, 512, r2, s2, i2]}, t3.faFacebook = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 512, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = i2;
    });
    var qe = Re(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "instagram", r2 = [], s2 = "f16d", i2 = "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [448, 512, r2, s2, i2]}, t3.faInstagram = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 448, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = i2;
    });
    var Je = Re(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "youtube", r2 = [], s2 = "f167", i2 = "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";
      t3.definition = {prefix: "fab", iconName: n2, icon: [576, 512, r2, s2, i2]}, t3.faYoutube = t3.definition, t3.prefix = "fab", t3.iconName = n2, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = i2;
    });
    var He = Re(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "birthday-cake", r2 = [], s2 = "f1fd", i2 = "M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z";
      t3.definition = {prefix: "fas", iconName: n2, icon: [448, 512, r2, s2, i2]}, t3.faBirthdayCake = t3.definition, t3.prefix = "fas", t3.iconName = n2, t3.width = 448, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = i2;
    });
    var Ke = Re(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "star", r2 = [], s2 = "f005", i2 = "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z";
      t3.definition = {prefix: "fas", iconName: n2, icon: [576, 512, r2, s2, i2]}, t3.faStar = t3.definition, t3.prefix = "fas", t3.iconName = n2, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = i2;
    });
    function Ye(e2) {
      let t3, n2, r2, i2 = e2[12].has(e2[0].value), c2 = e2[0].value + "", l2 = i2 && Ue(e2);
      return {c() {
        l2 && l2.c(), t3 = main2.a(), n2 = main2.t(c2);
      }, m(e3, s2) {
        l2 && l2.m(e3, s2), main2.c(e3, t3, s2), main2.c(e3, n2, s2), r2 = true;
      }, p(e3, s2) {
        1 & s2 && (i2 = e3[12].has(e3[0].value)), i2 ? l2 ? (l2.p(e3, s2), 1 & s2 && main2.p(l2, 1)) : (l2 = Ue(e3), l2.c(), main2.p(l2, 1), l2.m(t3.parentNode, t3)) : l2 && (main2.D(), main2.v(l2, 1, 1, () => {
          l2 = null;
        }), main2.x()), (!r2 || 1 & s2) && c2 !== (c2 = e3[0].value + "") && main2.o(n2, c2);
      }, i(e3) {
        r2 || (main2.p(l2), r2 = true);
      }, o(e3) {
        main2.v(l2), r2 = false;
      }, d(e3) {
        l2 && l2.d(e3), e3 && main2.f(t3), e3 && main2.f(n2);
      }};
    }
    function Ze(e2) {
      let t3, n2;
      return t3 = new De({props: {icon: Ke.faStar, $$slots: {default: [Qe]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        16777216 & n3 && (r2.$$scope = {dirty: n3, ctx: e3}), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Ue(e2) {
      let t3, n2;
      return t3 = new De({props: {class: "mb-1 text-" + e2[12].get(e2[0].value).color, icon: e2[12].get(e2[0].value).icon}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        1 & n3 && (r2.class = "mb-1 text-" + e3[12].get(e3[0].value).color), 1 & n3 && (r2.icon = e3[12].get(e3[0].value).icon), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Qe(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uC88B\uC544\uC694 \uD0DC\uADF8");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Xe(e2) {
      let t3, n2, s2, u2, d2;
      return {c() {
        t3 = main2.e("span"), n2 = main2.t("X"), main2.h(t3, "background-color", e2[9]), main2.h(t3, "color", e2[10]), main2.b(t3, "class", s2 = (e2[3] ? "Remove" : "Delete") + "Tag-" + e2[0].value.replace(" ", "-") + "\r\n" + (e2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (e2[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + e2[2] + " svelte-mrene9");
      }, m(r2, s3) {
        main2.c(r2, t3, s3), main2.d(t3, n2), u2 || (d2 = main2.A(t3, "click", function() {
          main2.F(e2[3] ? e2[3] : e2[4]) && (e2[3] ? e2[3] : e2[4]).apply(this, arguments);
        }), u2 = true);
      }, p(n3, r2) {
        e2 = n3, 512 & r2 && main2.h(t3, "background-color", e2[9]), 1024 & r2 && main2.h(t3, "color", e2[10]), 13 & r2 && s2 !== (s2 = (e2[3] ? "Remove" : "Delete") + "Tag-" + e2[0].value.replace(" ", "-") + "\r\n" + (e2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r " + (e2[3] ? "-ml-1" : "-ml-2") + " mt-0.5 mb-0.5 text-" + e2[2] + " svelte-mrene9") && main2.b(t3, "class", s2);
      }, d(e3) {
        e3 && main2.f(t3), u2 = false, d2();
      }};
    }
    function Ge(e2) {
      let t3, n2, c2, m2, $2, y2, v2, w2, x2;
      const M2 = [Ze, Ye], k2 = [];
      function _2(e3, t4) {
        return e3[0].value == "\u{1F496}" ? 0 : 1;
      }
      n2 = _2(e2), c2 = k2[n2] = M2[n2](e2);
      let C2 = (e2[3] || e2[1] && e2[0].value != "\uC0DD\uC77C") && Xe(e2);
      return {c() {
        t3 = main2.e("span"), c2.c(), $2 = main2.a(), C2 && C2.c(), y2 = main2.G(), main2.h(t3, "background-color", e2[9]), main2.h(t3, "color", e2[10]), main2.b(t3, "class", m2 = "Tag-" + e2[0].value.replace(" ", "-") + " " + e2[7] + " " + e2[8] + " m-0.5 mr-0 text-" + e2[2] + "\r\n" + (e2[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9");
      }, m(r2, s2) {
        main2.c(r2, t3, s2), k2[n2].m(t3, null), main2.c(r2, $2, s2), C2 && C2.m(r2, s2), main2.c(r2, y2, s2), v2 = true, w2 || (x2 = [main2.A(t3, "pointerdown", function() {
          main2.F(e2[5]) && e2[5].apply(this, arguments);
        }), main2.A(t3, "pointerup", function() {
          main2.F(e2[6]) && e2[6].apply(this, arguments);
        }), main2.A(t3, "click", function() {
          main2.F(e2[11](e2[0])) && e2[11](e2[0]).apply(this, arguments);
        })], w2 = true);
      }, p(r2, [s2]) {
        let o2 = n2;
        n2 = _2(e2 = r2), n2 === o2 ? k2[n2].p(e2, s2) : (main2.D(), main2.v(k2[o2], 1, 1, () => {
          k2[o2] = null;
        }), main2.x(), c2 = k2[n2], c2 ? c2.p(e2, s2) : (c2 = k2[n2] = M2[n2](e2), c2.c()), main2.p(c2, 1), c2.m(t3, null)), (!v2 || 512 & s2) && main2.h(t3, "background-color", e2[9]), (!v2 || 1024 & s2) && main2.h(t3, "color", e2[10]), (!v2 || 389 & s2 && m2 !== (m2 = "Tag-" + e2[0].value.replace(" ", "-") + " " + e2[7] + " " + e2[8] + " m-0.5 mr-0 text-" + e2[2] + "\r\n" + (e2[0].value == "\u{1F496}" ? "pt-0" : "") + " svelte-mrene9")) && main2.b(t3, "class", m2), e2[3] || e2[1] && e2[0].value != "\uC0DD\uC77C" ? C2 ? C2.p(e2, s2) : (C2 = Xe(e2), C2.c(), C2.m(y2.parentNode, y2)) : C2 && (C2.d(1), C2 = null);
      }, i(e3) {
        v2 || (main2.p(c2), v2 = true);
      }, o(e3) {
        main2.v(c2), v2 = false;
      }, d(e3) {
        e3 && main2.f(t3), k2[n2].d(), e3 && main2.f($2), C2 && C2.d(e3), e3 && main2.f(y2), w2 = false, main2.B(x2);
      }};
    }
    function et(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2, h2, p2, g2, m2;
      main2.g(e2, ae, (e3) => n2(14, u2 = e3)), main2.g(e2, ge, (e3) => n2(15, d2 = e3)), main2.g(e2, $e, (e3) => n2(16, f2 = e3)), main2.g(e2, ue, (e3) => n2(17, h2 = e3)), main2.g(e2, pe, (e3) => n2(18, p2 = e3)), main2.g(e2, main2.U, (e3) => n2(19, g2 = e3)), main2.g(e2, main2.V, (e3) => n2(20, m2 = e3));
      var $2 = this && this.__awaiter || function(e3, t4, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(e4) {
            try {
              l3(r3.next(e4));
            } catch (e5) {
              i3(e5);
            }
          }
          function c3(e4) {
            try {
              l3(r3.throw(e4));
            } catch (e5) {
              i3(e5);
            }
          }
          function l3(e4) {
            var t5;
            e4.done ? s3(e4.value) : (t5 = e4.value, t5 instanceof n3 ? t5 : new n3(function(e5) {
              e5(t5);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      let {tag: y2} = t3, {canDelete: v2 = false} = t3, {size: w2 = "xs"} = t3, {onRemove: b2 = null} = t3;
      main2.V.subscribe((e3) => {
        e3.tag == null && p2 != ie && main2.W(pe, p2 = ie, p2), e3.tag && p2.value != e3.tag && main2.W(pe, p2 = u2.get(e3.tag), p2);
      });
      const {open: x2} = main2.O("simple-modal"), M2 = () => {
        x2(Be, {tag: y2});
      };
      let k2;
      const _2 = new Map([["\uC0DD\uC77C", {icon: He.faBirthdayCake, color: "red-600"}], ["\uD2B8\uC704\uD130", {icon: Fe.faTwitter, color: "blue-500"}], ["\uD398\uC774\uC2A4\uBD81", {icon: Ve.faFacebook, color: "blue-900"}], ["\uC778\uC2A4\uD0C0", {icon: qe.faInstagram, color: "red-500"}], ["\uC720\uD29C\uBE0C", {icon: Je.faYoutube, color: "red-600"}]]);
      return e2.$$set = (e3) => {
        "tag" in e3 && n2(0, y2 = e3.tag), "canDelete" in e3 && n2(1, v2 = e3.canDelete), "size" in e3 && n2(2, w2 = e3.size), "onRemove" in e3 && n2(3, b2 = e3.onRemove);
      }, e2.$$.update = () => {
        245761 & e2.$$.dirty && n2(4, r2 = () => $2(void 0, void 0, void 0, function* () {
          const e3 = u2.get(y2.value);
          d2.get(e3).delete(f2.id), ge.set(d2), h2.get(f2.id).delete(e3), ue.set(h2);
        })), 1 & e2.$$.dirty && n2(5, s2 = () => {
          Ne.has(y2.value) ? n2(13, k2 = setTimeout(() => {
            console.log("\uAE30\uBCF8 \uD0DC\uADF8\uB294 \uC544\uC9C1 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
          }, 300)) : n2(13, k2 = setTimeout(M2, 300));
        }), 8192 & e2.$$.dirty && n2(6, i2 = (e3) => {
          clearTimeout(k2);
        }), 1 & e2.$$.dirty && n2(7, o2 = y2.color == "#fff" ? "border-2 p-0.5" : "p-1"), 11 & e2.$$.dirty && n2(8, c2 = b2 || v2 && y2.value != "\uC0DD\uC77C" ? "rounded-l border-r-0" : "rounded"), 1 & e2.$$.dirty && n2(9, l2 = y2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#333333" : y2.color), 1 & e2.$$.dirty && n2(10, a3 = y2.value == "\uD0C0\uC784\uCEA1\uC290" ? "#b299e6" : y2.value == "\u{1F496}" ? "#ffb40d" : "black");
      }, [y2, v2, w2, b2, r2, s2, i2, o2, c2, l2, a3, (e3) => () => {
        pe.set(e3), g2("./", Object.assign(Object.assign({}, m2), {tag: p2.value, nowPage: 1}));
      }, _2, k2, u2, d2, f2, h2];
    }
    class tt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, et, Ge, main2.s, {tag: 0, canDelete: 1, size: 2, onRemove: 3});
      }
    }
    function nt(e2) {
      let t3, n2, s2, l2 = (e2[0].slice(11) == "00:00" ? e2[0].slice(0, 10) : e2[0]) + "";
      return {c() {
        t3 = main2.e("span"), n2 = main2.t(l2), main2.h(t3, "background-color", "pink"), main2.b(t3, "class", s2 = "border-1 rounded\r\ntext-black\r\n" + (e2[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + e2[1]);
      }, m(e3, r2) {
        main2.c(e3, t3, r2), main2.d(t3, n2);
      }, p(e3, [r2]) {
        1 & r2 && l2 !== (l2 = (e3[0].slice(11) == "00:00" ? e3[0].slice(0, 10) : e3[0]) + "") && main2.o(n2, l2), 2 & r2 && s2 !== (s2 = "border-1 rounded\r\ntext-black\r\n" + (e3[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + e3[1]) && main2.b(t3, "class", s2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function rt(e2, t3, n2) {
      let {time: r2} = t3, {size: s2 = "xs"} = t3;
      return e2.$$set = (e3) => {
        "time" in e3 && n2(0, r2 = e3.time), "size" in e3 && n2(1, s2 = e3.size);
      }, [r2, s2];
    }
    class st extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, rt, nt, main2.s, {time: 0, size: 1});
      }
    }
    function it(e2) {
      let t3, n2, c2, a3, u2;
      return {c() {
        t3 = main2.e("input"), n2 = main2.a(), c2 = main2.e("button"), c2.textContent = "\uCD94\uAC00", main2.b(t3, "type", "text"), main2.b(t3, "id", "TagInput"), main2.b(t3, "class", "border-2 border-gray p-1 rounded w-16 text-xs"), main2.b(t3, "placeholder", "\uC0C8 \uD0DC\uADF8"), main2.b(c2, "id", "AddTagButton"), main2.b(c2, "class", "text-xs shadow rounded bg-red-400 p-1 m-1");
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.N(t3, e2[0]), main2.c(r2, n2, s2), main2.c(r2, c2, s2), a3 || (u2 = [main2.A(t3, "input", e2[3]), main2.A(t3, "keypress", e2[4]), main2.A(c2, "click", e2[1])], a3 = true);
      }, p(e3, [n3]) {
        1 & n3 && t3.value !== e3[0] && main2.N(t3, e3[0]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(n2), e3 && main2.f(c2), a3 = false, main2.B(u2);
      }};
    }
    function ot(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3;
      main2.g(e2, fe, (e3) => n2(0, s2 = e3)), main2.g(e2, he, (e3) => n2(2, i2 = e3)), main2.g(e2, ae, (e3) => n2(6, o2 = e3)), main2.g(e2, ge, (e3) => n2(7, c2 = e3)), main2.g(e2, $e, (e3) => n2(8, l2 = e3)), main2.g(e2, ue, (e3) => n2(9, a3 = e3));
      var u2 = this && this.__awaiter || function(e3, t4, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(e4) {
            try {
              l3(r3.next(e4));
            } catch (e5) {
              i3(e5);
            }
          }
          function c3(e4) {
            try {
              l3(r3.throw(e4));
            } catch (e5) {
              i3(e5);
            }
          }
          function l3(e4) {
            var t5;
            e4.done ? s3(e4.value) : (t5 = e4.value, t5 instanceof n3 ? t5 : new n3(function(e5) {
              e5(t5);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      const d2 = () => u2(void 0, void 0, void 0, function* () {
        let e3 = r2;
        o2.has(s2) ? (e3 = o2.get(s2), c2.get(e3).add(l2.id)) : (c2.set(r2, new Set([l2.id])), o2.set(s2, r2), ae.set(o2)), ge.set(c2), a3.has(l2.id) ? a3.get(l2.id).add(e3) : a3.set(l2.id, new Set([e3])), ue.set(a3), main2.W(fe, s2 = "", s2), main2.W(he, i2 = (i2 + 1) % 12, i2);
      });
      return e2.$$.update = () => {
        5 & e2.$$.dirty && (r2 = {value: s2, color: ze[i2]});
      }, [s2, d2, i2, function() {
        s2 = this.value, fe.set(s2);
      }, (e3) => {
        e3.code === "Enter" && d2();
      }];
    }
    class ct extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ot, it, main2.s, {});
      }
    }
    var lt = Re(function(e2, t3) {
      Object.defineProperty(t3, "__esModule", {value: true});
      var n2 = "star", r2 = [], s2 = "f005", i2 = "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z";
      t3.definition = {prefix: "far", iconName: n2, icon: [576, 512, r2, s2, i2]}, t3.faStar = t3.definition, t3.prefix = "far", t3.iconName = n2, t3.width = 576, t3.height = 512, t3.ligatures = r2, t3.unicode = s2, t3.svgPathData = i2;
    });
    function at(e2) {
      let t3, n2, c2, d2, f2, p2, v2;
      return n2 = new De({props: {class: "float-" + e2[0] + " text-xl", icon: e2[1] ? Ke.faStar : lt.faStar}}), {c() {
        t3 = main2.e("label"), main2.q(n2.$$.fragment), c2 = main2.a(), d2 = main2.e("input"), main2.h(t3, "color", e2[1] ? "#ffb40d" : "#999"), main2.b(t3, "for", "favorite"), main2.b(d2, "type", "checkbox"), main2.b(d2, "class", "hidden"), main2.b(d2, "id", "favorite");
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.r(n2, t3, null), main2.c(r2, c2, s2), main2.c(r2, d2, s2), f2 = true, p2 || (v2 = main2.A(t3, "click", function() {
          main2.F(e2[2]) && e2[2].apply(this, arguments);
        }), p2 = true);
      }, p(r2, [s2]) {
        e2 = r2;
        const i2 = {};
        1 & s2 && (i2.class = "float-" + e2[0] + " text-xl"), 2 & s2 && (i2.icon = e2[1] ? Ke.faStar : lt.faStar), n2.$set(i2), (!f2 || 2 & s2) && main2.h(t3, "color", e2[1] ? "#ffb40d" : "#999");
      }, i(e3) {
        f2 || (main2.p(n2.$$.fragment, e3), f2 = true);
      }, o(e3) {
        main2.v(n2.$$.fragment, e3), f2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(n2), e3 && main2.f(c2), e3 && main2.f(d2), p2 = false, v2();
      }};
    }
    function ut(e2, t3, n2) {
      let r2, s2, i2, o2, c2;
      main2.g(e2, ae, (e3) => n2(5, o2 = e3)), main2.g(e2, ge, (e3) => n2(6, c2 = e3));
      let {pm: l2} = t3, {float: a3 = "right"} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(3, l2 = e3.pm), "float" in e3 && n2(0, a3 = e3.float);
      }, e2.$$.update = () => {
        32 & e2.$$.dirty && n2(4, r2 = o2.get("\u{1F496}")), 88 & e2.$$.dirty && n2(2, i2 = () => {
          const e3 = c2.get(r2);
          e3.has(l2.id) ? e3.delete(l2.id) : e3.add(l2.id), ge.set(c2);
        }), 88 & e2.$$.dirty && n2(1, s2 = c2.get(r2).has(l2.id));
      }, [a3, s2, i2, l2, r2, o2, c2];
    }
    class dt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ut, at, main2.s, {pm: 3, float: 0});
      }
    }
    function ft(e2) {
      let t3, n2;
      return t3 = new tt({props: {tag: e2[1], size: e2[0]}}), {c() {
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
    function ht(e2, t3, n2) {
      let r2, s2;
      main2.g(e2, ae, (e3) => n2(3, s2 = e3));
      let {pm: i2} = t3, {size: o2 = "xs"} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(2, i2 = e3.pm), "size" in e3 && n2(0, o2 = e3.size);
      }, e2.$$.update = () => {
        12 & e2.$$.dirty && n2(1, r2 = s2.get(i2.member));
      }, [o2, r2, i2, s2];
    }
    class pt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ht, ft, main2.s, {pm: 2, size: 0});
      }
    }
    let gt = main2.L(function() {
      const e2 = localStorage.getItem("preferences-profile");
      return e2 || "latest";
    }());
    function mt(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[4] = t3[n2], r2;
    }
    function $t(e2) {
      let t3, n2, a3, u2, d2, f2, h2, p2 = e2[4].name + "";
      return {c() {
        t3 = main2.e("label"), n2 = main2.e("input"), a3 = main2.a(), u2 = main2.t(p2), d2 = main2.a(), main2.b(n2, "type", "radio"), n2.__value = e2[4].path, n2.value = n2.__value, e2[3][0].push(n2);
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), n2.checked = n2.__value === e2[0], main2.d(t3, a3), main2.d(t3, u2), main2.d(t3, d2), f2 || (h2 = main2.A(n2, "change", e2[2]), f2 = true);
      }, p(e3, t4) {
        1 & t4 && (n2.checked = n2.__value === e3[0]);
      }, d(r2) {
        r2 && main2.f(t3), e2[3][0].splice(e2[3][0].indexOf(n2), 1), f2 = false, h2();
      }};
    }
    function yt(e2) {
      let t3, n2, c2, l2 = e2[1], a3 = [];
      for (let t4 = 0; t4 < l2.length; t4 += 1)
        a3[t4] = $t(mt(e2, l2, t4));
      return {c() {
        t3 = main2.e("h3"), t3.textContent = "\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.", n2 = main2.a(), c2 = main2.e("div");
        for (let e3 = 0; e3 < a3.length; e3 += 1)
          a3[e3].c();
        main2.b(t3, "class", "svelte-qli48t"), main2.b(c2, "class", "flex flex-col p-4");
      }, m(e3, r2) {
        main2.c(e3, t3, r2), main2.c(e3, n2, r2), main2.c(e3, c2, r2);
        for (let e4 = 0; e4 < a3.length; e4 += 1)
          a3[e4].m(c2, null);
      }, p(e3, [t4]) {
        if (3 & t4) {
          let n3;
          for (l2 = e3[1], n3 = 0; n3 < l2.length; n3 += 1) {
            const r2 = mt(e3, l2, n3);
            a3[n3] ? a3[n3].p(r2, t4) : (a3[n3] = $t(r2), a3[n3].c(), a3[n3].m(c2, null));
          }
          for (; n3 < a3.length; n3 += 1)
            a3[n3].d(1);
          a3.length = l2.length;
        }
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(n2), e3 && main2.f(c2), main2.y(a3, e3);
      }};
    }
    function vt(e2, t3, n2) {
      let r2;
      main2.g(e2, gt, (e3) => n2(0, r2 = e3));
      return [r2, [{path: "la-vie-en-rose", name: "\uB77C\uBE44\uC559 \uB85C\uC988"}, {path: "one-the-story", name: "One The Story \uD3EC\uC2A4\uD130"}, {path: "latest", name: "\uCD5C\uC2E0 \uD504\uBA54"}], function() {
        r2 = this.__value, gt.set(r2);
      }, [[]]];
    }
    gt.subscribe((e2) => {
      localStorage.setItem("preferences-profile", e2);
    });
    class wt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, vt, yt, main2.s, {});
      }
    }
    function bt(e2) {
      let t3, n2, s2, c2;
      return {c() {
        t3 = main2.e("img"), t3.src !== (n2 = "./img/" + e2[1]) && main2.b(t3, "src", n2), main2.b(t3, "class", "w-11 h-11 rounded-full border-gray-100 border-2\r\nfloat-left"), main2.b(t3, "alt", "");
      }, m(n3, r2) {
        main2.c(n3, t3, r2), s2 || (c2 = [main2.A(t3, "pointerdown", e2[5]), main2.A(t3, "pointerup", e2[6]), main2.A(t3, "mousedown", e2[7]), main2.A(t3, "mouseup", e2[8])], s2 = true);
      }, p(e3, [r2]) {
        2 & r2 && t3.src !== (n2 = "./img/" + e3[1]) && main2.b(t3, "src", n2);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), s2 = false, main2.B(c2);
      }};
    }
    function xt(e2, t3, n2) {
      let r2, s2;
      main2.g(e2, gt, (e3) => n2(4, s2 = e3));
      let {member: i2} = t3;
      const {open: o2} = main2.O("simple-modal"), c2 = () => {
        o2(wt, {});
      };
      let l2;
      return e2.$$set = (e3) => {
        "member" in e3 && n2(3, i2 = e3.member);
      }, e2.$$.update = () => {
        24 & e2.$$.dirty && n2(1, r2 = i2 == "\uC6B4\uC601\uD300" ? "izone-logo.png" : `profile/${s2}/${i2}.jpg`);
      }, [l2, r2, c2, i2, s2, () => {
        n2(0, l2 = setTimeout(c2, 300));
      }, (e3) => {
        clearTimeout(l2);
      }, () => {
        n2(0, l2 = setTimeout(c2, 500));
      }, (e3) => {
        clearTimeout(l2);
      }];
    }
    class Mt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, xt, bt, main2.s, {member: 3});
      }
    }
    function kt(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[16] = t3[n2], r2;
    }
    function _t(e2) {
      let t3, n2;
      return t3 = new tt({props: {tag: e2[16], canDelete: true, size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        4 & n3 && (r2.tag = e3[16]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Ct(e2) {
      let t3, n2, s2, a3, u2;
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("div"), main2.b(n2, "contenteditable", "false"), e2[3] === void 0 && main2.j(() => e2[13].call(n2)), main2.b(t3, "id", "MailDetailCardContent"), main2.b(t3, "class", "h-5/6 overflow-y-auto p-1");
      }, m(r2, s3) {
        main2.c(r2, t3, s3), main2.d(t3, n2), e2[3] !== void 0 && (n2.innerHTML = e2[3]), a3 || (u2 = main2.A(n2, "input", e2[13]), a3 = true);
      }, p(e3, t4) {
        8 & t4 && e3[3] !== n2.innerHTML && (n2.innerHTML = e3[3]);
      }, i(e3) {
        s2 || main2.j(() => {
          s2 = main2.X(n2, a, {duration: 300}), s2.start();
        });
      }, o: main2.n, d(e3) {
        e3 && main2.f(t3), a3 = false, u2();
      }};
    }
    function St(e2) {
      let t3, n2, s2;
      return {c() {
        t3 = main2.e("button"), t3.textContent = "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30\u{1F5C3}\uFE0F", main2.b(t3, "class", "shadow rounded bg-red-200 p-1 mt-2");
      }, m(r2, i2) {
        main2.c(r2, t3, i2), n2 || (s2 = main2.A(t3, "click", e2[14]), n2 = true);
      }, p: main2.n, d(e3) {
        e3 && main2.f(t3), n2 = false, s2();
      }};
    }
    function Ot(e2) {
      let t3, n2, l2, a3, d2, v2, w2, b2, x2, M2, k2, _2, C2, S2, O2, j2, P2, z2, E2, A2, N2 = e2[1].subject + "";
      l2 = new dt({props: {pm: e2[1]}}), d2 = new Mt({props: {member: e2[1].member}}), M2 = new pt({props: {pm: e2[1], size: "sm"}}), _2 = new st({props: {time: e2[1].time, size: "sm"}});
      let W2 = e2[2], T2 = [];
      for (let t4 = 0; t4 < W2.length; t4 += 1)
        T2[t4] = _t(kt(e2, W2, t4));
      const D2 = (e3) => main2.v(T2[e3], 1, 1, () => {
        T2[e3] = null;
      });
      P2 = new ct({});
      let R2 = e2[3] && Ct(e2), F2 = e2[5] && St(e2);
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("div"), main2.q(l2.$$.fragment), a3 = main2.a(), main2.q(d2.$$.fragment), v2 = main2.a(), w2 = main2.e("h4"), b2 = main2.t(N2), x2 = main2.a(), main2.q(M2.$$.fragment), k2 = main2.a(), main2.q(_2.$$.fragment), C2 = main2.a(), S2 = main2.e("br"), O2 = main2.a();
        for (let e3 = 0; e3 < T2.length; e3 += 1)
          T2[e3].c();
        j2 = main2.a(), main2.q(P2.$$.fragment), z2 = main2.a(), R2 && R2.c(), E2 = main2.a(), F2 && F2.c(), main2.b(w2, "class", "text-xl w-4/5"), main2.b(n2, "id", "MailDetailCardHeader"), main2.b(n2, "class", "relative w-full leading-loose"), main2.b(t3, "id", "MailDetailCard"), main2.h(t3, "max-height", e2[4] && e2[0] ? "70%" : "90%"), main2.h(t3, "min-height", "300px"), main2.b(t3, "class", "\r\nshadow-2xl rounded-md bg-white \r\nw-full mt-2 p-2\r\nflex flex-col");
      }, m(e3, r2) {
        main2.c(e3, t3, r2), main2.d(t3, n2), main2.r(l2, n2, null), main2.d(n2, a3), main2.r(d2, n2, null), main2.d(n2, v2), main2.d(n2, w2), main2.d(w2, b2), main2.d(n2, x2), main2.r(M2, n2, null), main2.d(n2, k2), main2.r(_2, n2, null), main2.d(n2, C2), main2.d(n2, S2), main2.d(n2, O2);
        for (let e4 = 0; e4 < T2.length; e4 += 1)
          T2[e4].m(n2, null);
        main2.d(n2, j2), main2.r(P2, n2, null), main2.d(t3, z2), R2 && R2.m(t3, null), main2.d(t3, E2), F2 && F2.m(t3, null), A2 = true;
      }, p(e3, [r2]) {
        const s2 = {};
        2 & r2 && (s2.pm = e3[1]), l2.$set(s2);
        const i2 = {};
        2 & r2 && (i2.member = e3[1].member), d2.$set(i2), (!A2 || 2 & r2) && N2 !== (N2 = e3[1].subject + "") && main2.o(b2, N2);
        const o2 = {};
        2 & r2 && (o2.pm = e3[1]), M2.$set(o2);
        const c2 = {};
        if (2 & r2 && (c2.time = e3[1].time), _2.$set(c2), 4 & r2) {
          let t4;
          for (W2 = e3[2], t4 = 0; t4 < W2.length; t4 += 1) {
            const s3 = kt(e3, W2, t4);
            T2[t4] ? (T2[t4].p(s3, r2), main2.p(T2[t4], 1)) : (T2[t4] = _t(s3), T2[t4].c(), main2.p(T2[t4], 1), T2[t4].m(n2, j2));
          }
          for (main2.D(), t4 = W2.length; t4 < T2.length; t4 += 1)
            D2(t4);
          main2.x();
        }
        e3[3] ? R2 ? (R2.p(e3, r2), 8 & r2 && main2.p(R2, 1)) : (R2 = Ct(e3), R2.c(), main2.p(R2, 1), R2.m(t3, E2)) : R2 && (R2.d(1), R2 = null), e3[5] ? F2 ? F2.p(e3, r2) : (F2 = St(e3), F2.c(), F2.m(t3, null)) : F2 && (F2.d(1), F2 = null), (!A2 || 17 & r2) && main2.h(t3, "max-height", e3[4] && e3[0] ? "70%" : "90%");
      }, i(e3) {
        if (!A2) {
          main2.p(l2.$$.fragment, e3), main2.p(d2.$$.fragment, e3), main2.p(M2.$$.fragment, e3), main2.p(_2.$$.fragment, e3);
          for (let e4 = 0; e4 < W2.length; e4 += 1)
            main2.p(T2[e4]);
          main2.p(P2.$$.fragment, e3), main2.p(R2), A2 = true;
        }
      }, o(e3) {
        main2.v(l2.$$.fragment, e3), main2.v(d2.$$.fragment, e3), main2.v(M2.$$.fragment, e3), main2.v(_2.$$.fragment, e3), T2 = T2.filter(Boolean);
        for (let e4 = 0; e4 < T2.length; e4 += 1)
          main2.v(T2[e4]);
        main2.v(P2.$$.fragment, e3), A2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.w(l2), main2.w(d2), main2.w(M2), main2.w(_2), main2.y(T2, e3), main2.w(P2), R2 && R2.d(), F2 && F2.d();
      }};
    }
    function jt(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2, h2, p2, g2;
      main2.g(e2, $e, (e3) => n2(1, o2 = e3)), main2.g(e2, me, (e3) => n2(15, c2 = e3)), main2.g(e2, ue, (e3) => n2(10, l2 = e3)), main2.g(e2, ae, (e3) => n2(11, a3 = e3)), main2.g(e2, ye, (e3) => n2(3, u2 = e3)), main2.g(e2, Me, (e3) => n2(4, d2 = e3)), main2.g(e2, ke, (e3) => n2(5, f2 = e3)), main2.g(e2, be, (e3) => n2(6, h2 = e3)), main2.g(e2, main2.U, (e3) => n2(7, p2 = e3)), main2.g(e2, main2.V, (e3) => n2(8, g2 = e3));
      let {show: m2} = t3;
      main2.V.subscribe((e3) => {
        if (o2.id != e3.now_pm) {
          const t4 = c2.filter((t5) => t5.id == e3.now_pm);
          t4.length == 1 && main2.W($e, o2 = t4[0], o2);
        }
      });
      return e2.$$set = (e3) => {
        "show" in e3 && n2(0, m2 = e3.show);
      }, e2.$$.update = () => {
        3072 & e2.$$.dirty && n2(9, r2 = (e3) => l2.has(e3.id) ? Array.from(l2.get(e3.id)).map((e4) => a3.get(e4.value)) : []), 514 & e2.$$.dirty && n2(2, s2 = r2(o2)), 2 & e2.$$.dirty && n2(12, i2 = () => {
          main2.W(ye, u2 = "", u2), async function(e3) {
            const t4 = await fetch(`./mail/${e3}.html`).then((e4) => e4.text()), n3 = t4.search('<div class="main-contents" id="mail-detail"><html><head></head><body>') + 69, r3 = t4.search("</body></html></div>");
            return t4.slice(n3, r3);
          }(o2.id).then((e3) => {
            setTimeout(() => {
              main2.W(ye, u2 = e3, u2);
            }, 100);
          });
        }), 4096 & e2.$$.dirty && i2();
      }, [m2, o2, s2, u2, d2, f2, h2, p2, g2, r2, l2, a3, i2, function() {
        u2 = this.innerHTML, ye.set(u2);
      }, () => {
        main2.W(be, h2 = true, h2), p2("./", {...g2, showList: true});
      }];
    }
    class Lt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, jt, Ot, main2.s, {show: 0});
      }
    }
    function It(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[5] = t3[n2], r2;
    }
    function Pt(e2) {
      let t3, n2;
      return t3 = new tt({props: {tag: e2[5], size: "sm"}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        2 & n3 && (r2.tag = e3[5]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Bt(e2) {
      let t3, n2, s2, l2 = e2[1], a3 = [];
      for (let t4 = 0; t4 < l2.length; t4 += 1)
        a3[t4] = Pt(It(e2, l2, t4));
      const d2 = (e3) => main2.v(a3[e3], 1, 1, () => {
        a3[e3] = null;
      });
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("div");
        for (let e3 = 0; e3 < a3.length; e3 += 1)
          a3[e3].c();
        main2.b(n2, "class", "flex flex-wrap"), main2.h(t3, "min-height", "43px"), main2.b(t3, "class", "AllTagList\r\n    h-36 p-2 mt-3 mb-3\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main2.Y(t3, "hidden", e2[0]);
      }, m(e3, r2) {
        main2.c(e3, t3, r2), main2.d(t3, n2);
        for (let e4 = 0; e4 < a3.length; e4 += 1)
          a3[e4].m(n2, null);
        s2 = true;
      }, p(e3, [r2]) {
        if (2 & r2) {
          let t4;
          for (l2 = e3[1], t4 = 0; t4 < l2.length; t4 += 1) {
            const s3 = It(e3, l2, t4);
            a3[t4] ? (a3[t4].p(s3, r2), main2.p(a3[t4], 1)) : (a3[t4] = Pt(s3), a3[t4].c(), main2.p(a3[t4], 1), a3[t4].m(n2, null));
          }
          for (main2.D(), t4 = l2.length; t4 < a3.length; t4 += 1)
            d2(t4);
          main2.x();
        }
        1 & r2 && main2.Y(t3, "hidden", e3[0]);
      }, i(e3) {
        if (!s2) {
          for (let e4 = 0; e4 < l2.length; e4 += 1)
            main2.p(a3[e4]);
          s2 = true;
        }
      }, o(e3) {
        a3 = a3.filter(Boolean);
        for (let e4 = 0; e4 < a3.length; e4 += 1)
          main2.v(a3[e4]);
        s2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(a3, e3);
      }};
    }
    function zt(e2, t3, n2) {
      let r2, s2, i2;
      main2.g(e2, ae, (e3) => n2(2, s2 = e3)), main2.g(e2, pe, (e3) => n2(3, i2 = e3));
      let {hidden: o2} = t3;
      return e2.$$set = (e3) => {
        "hidden" in e3 && n2(0, o2 = e3.hidden);
      }, e2.$$.update = () => {
        4 & e2.$$.dirty && n2(1, r2 = Array.from(s2.values()));
      }, s2.has(i2.value) && main2.W(pe, i2 = ie, i2), [o2, r2, s2];
    }
    class Et extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, zt, Bt, main2.s, {hidden: 0});
      }
    }
    function At(e2) {
      let t3, n2, c2, l2;
      return c2 = new tt({props: {tag: e2[1].get(e2[0].value), canDelete: true, onRemove: e2[2], size: "sm"}}), {c() {
        t3 = main2.e("span"), t3.textContent = "\uD604\uC7AC :", n2 = main2.a(), main2.q(c2.$$.fragment), main2.b(t3, "class", "ml-1 mt-1");
      }, m(e3, r2) {
        main2.c(e3, t3, r2), main2.c(e3, n2, r2), main2.r(c2, e3, r2), l2 = true;
      }, p(e3, [t4]) {
        const n3 = {};
        3 & t4 && (n3.tag = e3[1].get(e3[0].value)), c2.$set(n3);
      }, i(e3) {
        l2 || (main2.p(c2.$$.fragment, e3), l2 = true);
      }, o(e3) {
        main2.v(c2.$$.fragment, e3), l2 = false;
      }, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(n2), main2.w(c2, e3);
      }};
    }
    function Nt(e2, t3, n2) {
      let r2, s2, i2, o2, c2;
      main2.g(e2, pe, (e3) => n2(0, r2 = e3)), main2.g(e2, we, (e3) => n2(3, s2 = e3)), main2.g(e2, main2.U, (e3) => n2(4, i2 = e3)), main2.g(e2, main2.V, (e3) => n2(5, o2 = e3)), main2.g(e2, ae, (e3) => n2(1, c2 = e3));
      return [r2, c2, () => {
        main2.W(pe, r2 = ie, r2), main2.W(we, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, o2), {tag: ""}));
      }];
    }
    class Wt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Nt, At, main2.s, {});
      }
    }
    function Tt(e2) {
      let t3, n2, s2, l2, a3;
      return {c() {
        t3 = main2.e("div"), n2 = main2.e("a"), s2 = main2.t("\uBC88\uC5ED"), l2 = main2.e("img"), main2.b(l2, "class", "w-5 h-5 mt-0.5 float-right"), l2.src !== (a3 = "./img/papago.png") && main2.b(l2, "src", "./img/papago.png"), main2.b(l2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30"), main2.b(n2, "href", e2[0]), main2.b(n2, "target", "_blank"), main2.b(t3, "class", "w-16 p-1 shadow rounded bg-red-100 mr-1");
      }, m(e3, r2) {
        main2.c(e3, t3, r2), main2.d(t3, n2), main2.d(n2, s2), main2.d(n2, l2);
      }, p(e3, [t4]) {
        1 & t4 && main2.b(n2, "href", e3[0]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Dt(e2, t3, n2) {
      let r2;
      return main2.g(e2, ve, (e3) => n2(0, r2 = e3)), [r2];
    }
    class Rt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Dt, Tt, main2.s, {});
      }
    }
    function Ft(e2) {
      let t3, n2, s2, a3, u2;
      return {c() {
        t3 = main2.e("label"), n2 = main2.t("\uD0DC\uADF8 \uBAA9\uB85D\r\n    "), s2 = main2.e("input"), main2.b(s2, "id", "showTagListInput"), main2.b(s2, "type", "checkbox"), main2.b(t3, "class", "p-1"), main2.b(t3, "for", "showTagListInput");
      }, m(r2, i2) {
        main2.c(r2, t3, i2), main2.d(t3, n2), main2.d(t3, s2), s2.checked = e2[0], a3 || (u2 = main2.A(s2, "change", e2[1]), a3 = true);
      }, p(e3, [t4]) {
        1 & t4 && (s2.checked = e3[0]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), a3 = false, u2();
      }};
    }
    function Vt(e2, t3, n2) {
      let r2;
      return main2.g(e2, xe, (e3) => n2(0, r2 = e3)), [r2, function() {
        r2 = this.checked, xe.set(r2);
      }];
    }
    class qt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Vt, Ft, main2.s, {});
      }
    }
    function Jt(e2) {
      let t3, n2, s2;
      return {c() {
        t3 = main2.e("button"), t3.textContent = "\uBAA9\uB85D\u{1F5C3}\uFE0F", main2.b(t3, "class", "shadow rounded bg-red-200 p-1 mr-1");
      }, m(r2, i2) {
        main2.c(r2, t3, i2), n2 || (s2 = main2.A(t3, "click", e2[3]), n2 = true);
      }, p: main2.n, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), n2 = false, s2();
      }};
    }
    function Ht(e2, t3, n2) {
      let r2, s2, i2;
      main2.g(e2, be, (e3) => n2(0, r2 = e3)), main2.g(e2, main2.U, (e3) => n2(1, s2 = e3)), main2.g(e2, main2.V, (e3) => n2(2, i2 = e3));
      return [r2, s2, i2, () => {
        main2.W(be, r2 = true, r2), s2("./", {...i2, showList: true});
      }];
    }
    class Kt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Ht, Jt, main2.s, {});
      }
    }
    function Yt(e2) {
      let t3, n2;
      return t3 = new Kt({}), {c() {
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
    function Zt(e2) {
      let t3, n2;
      return t3 = new qt({}), {c() {
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
    function Ut(e2) {
      let t3, n2;
      return t3 = new Wt({}), {c() {
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
    function Qt(e2) {
      let t3, n2, l2, a3, d2, w2, b2, x2, M2, k2, _2, C2, S2, O2 = e2[2] && Yt();
      a3 = new Rt({});
      let j2 = !e2[1] && e2[4] && Zt(), L2 = e2[5].value && Ut();
      return x2 = new Et({props: {hidden: !((e2[1] || e2[6]) && e2[4])}}), k2 = new Lt({props: {show: e2[1] || e2[6]}}), {c() {
        t3 = main2.e("section"), n2 = main2.e("div"), O2 && O2.c(), l2 = main2.a(), main2.q(a3.$$.fragment), d2 = main2.a(), j2 && j2.c(), w2 = main2.a(), L2 && L2.c(), b2 = main2.a(), main2.q(x2.$$.fragment), M2 = main2.a(), main2.q(k2.$$.fragment), main2.b(n2, "class", "flex flex-row"), main2.b(t3, "id", "MailDetailSection"), main2.b(t3, "class", _2 = "h-full p-3 " + (e2[4] ? "w-4/12" : "w-full") + " flex flex-col svelte-q462jf"), main2.j(() => e2[7].call(t3)), main2.Y(t3, "hidden", e2[2] && e2[3]);
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), O2 && O2.m(n2, null), main2.d(n2, l2), main2.r(a3, n2, null), main2.d(n2, d2), j2 && j2.m(n2, null), main2.d(n2, w2), L2 && L2.m(n2, null), main2.d(t3, b2), main2.r(x2, t3, null), main2.d(t3, M2), main2.r(k2, t3, null), C2 = main2.z(t3, e2[7].bind(t3)), S2 = true;
      }, p(e3, [r2]) {
        e3[2] ? O2 ? 4 & r2 && main2.p(O2, 1) : (O2 = Yt(), O2.c(), main2.p(O2, 1), O2.m(n2, l2)) : O2 && (main2.D(), main2.v(O2, 1, 1, () => {
          O2 = null;
        }), main2.x()), !e3[1] && e3[4] ? j2 ? 18 & r2 && main2.p(j2, 1) : (j2 = Zt(), j2.c(), main2.p(j2, 1), j2.m(n2, w2)) : j2 && (main2.D(), main2.v(j2, 1, 1, () => {
          j2 = null;
        }), main2.x()), e3[5].value ? L2 ? 32 & r2 && main2.p(L2, 1) : (L2 = Ut(), L2.c(), main2.p(L2, 1), L2.m(n2, null)) : L2 && (main2.D(), main2.v(L2, 1, 1, () => {
          L2 = null;
        }), main2.x());
        const s2 = {};
        82 & r2 && (s2.hidden = !((e3[1] || e3[6]) && e3[4])), x2.$set(s2);
        const o2 = {};
        66 & r2 && (o2.show = e3[1] || e3[6]), k2.$set(o2), (!S2 || 16 & r2 && _2 !== (_2 = "h-full p-3 " + (e3[4] ? "w-4/12" : "w-full") + " flex flex-col svelte-q462jf")) && main2.b(t3, "class", _2), 28 & r2 && main2.Y(t3, "hidden", e3[2] && e3[3]);
      }, i(e3) {
        S2 || (main2.p(O2), main2.p(a3.$$.fragment, e3), main2.p(j2), main2.p(L2), main2.p(x2.$$.fragment, e3), main2.p(k2.$$.fragment, e3), S2 = true);
      }, o(e3) {
        main2.v(O2), main2.v(a3.$$.fragment, e3), main2.v(j2), main2.v(L2), main2.v(x2.$$.fragment, e3), main2.v(k2.$$.fragment, e3), S2 = false;
      }, d(e3) {
        e3 && main2.f(t3), O2 && O2.d(), main2.w(a3), j2 && j2.d(), L2 && L2.d(), main2.w(x2), main2.w(k2), C2();
      }};
    }
    function Xt(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3;
      return main2.g(e2, ke, (e3) => n2(2, s2 = e3)), main2.g(e2, be, (e3) => n2(3, i2 = e3)), main2.g(e2, Me, (e3) => n2(4, o2 = e3)), main2.g(e2, pe, (e3) => n2(5, c2 = e3)), main2.g(e2, xe, (e3) => n2(6, l2 = e3)), e2.$$.update = () => {
        1 & e2.$$.dirty && n2(1, r2 = 650 < a3);
      }, [a3, r2, s2, i2, o2, c2, l2, function() {
        a3 = this.clientHeight, n2(0, a3);
      }];
    }
    class Gt extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Xt, Qt, main2.s, {});
      }
    }
    const en = nn(new Date(2021, 2, 20));
    let tn = main2.L(en);
    function nn(e2) {
      let t3 = "" + (e2.getMonth() + 1), n2 = "" + e2.getDate();
      const r2 = e2.getFullYear();
      return t3.length < 2 && (t3 = "0" + t3), n2.length < 2 && (n2 = "0" + n2), [r2, t3, n2].join("-");
    }
    function rn(e2) {
      const [t3, n2, r2] = e2.split("-").map((e3) => parseInt(e3));
      return new Date(t3, n2 - 1, r2);
    }
    function sn(e2) {
      return e2.split(" ")[0].replace(/\//g, "-");
    }
    function on(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uC774\uC804");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function cn(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uB2E4\uC74C");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function ln(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uC5B4\uC81C");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function an(e2) {
      let t3;
      return {c() {
        t3 = main2.t("\uB0B4\uC77C");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function un(e2) {
      let t3, n2, a3, d2, f2, p2, v2, w2, x2, M2, k2, _2, C2, S2, O2, j2, I2, B2, z2, E2, A2;
      return t3 = new Se({props: {id: "BackPageButton", onClick: e2[8], $$slots: {default: [on]}, $$scope: {ctx: e2}}}), M2 = new Se({props: {id: "NextPageButton", onClick: e2[7], $$slots: {default: [cn]}, $$scope: {ctx: e2}}}), S2 = new Se({props: {id: "toYesterdayButton", onClick: e2[5], $$slots: {default: [ln]}, $$scope: {ctx: e2}}}), B2 = new Se({props: {id: "toTomorrowButton", onClick: e2[6], $$slots: {default: [an]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), a3 = main2.e("span"), d2 = main2.e("input"), f2 = main2.a(), p2 = main2.e("span"), v2 = main2.t("/ "), w2 = main2.t(e2[0]), x2 = main2.a(), main2.q(M2.$$.fragment), k2 = main2.a(), _2 = main2.e("br"), C2 = main2.a(), main2.q(S2.$$.fragment), O2 = main2.a(), j2 = main2.e("input"), I2 = main2.a(), main2.q(B2.$$.fragment), main2.b(d2, "id", "NowPageInput"), main2.b(d2, "type", "number"), main2.b(d2, "class", "w-9"), main2.b(d2, "min", "1"), main2.b(d2, "max", e2[0]), main2.Y(d2, "bg-red-300", e2[0] <= e2[1]), main2.b(a3, "id", "NowPageSpan"), main2.b(a3, "class", "bg-white border-2 border-gray-400 rounded w-24 p-1"), main2.Y(a3, "bg-red-300", e2[0] <= e2[1]), main2.Y(a3, "border-red-300", e2[0] <= e2[1]), main2.b(j2, "id", "DateStringInput"), main2.b(j2, "type", "date"), main2.b(j2, "class", "border-1 w-36 border-gray-400 rounded");
      }, m(r2, s2) {
        main2.r(t3, r2, s2), main2.c(r2, n2, s2), main2.c(r2, a3, s2), main2.d(a3, d2), main2.N(d2, e2[1]), main2.d(a3, f2), main2.d(a3, p2), main2.d(p2, v2), main2.d(p2, w2), main2.c(r2, x2, s2), main2.r(M2, r2, s2), main2.c(r2, k2, s2), main2.c(r2, _2, s2), main2.c(r2, C2, s2), main2.r(S2, r2, s2), main2.c(r2, O2, s2), main2.c(r2, j2, s2), main2.N(j2, e2[2]), main2.c(r2, I2, s2), main2.r(B2, r2, s2), z2 = true, E2 || (A2 = [main2.A(d2, "input", e2[9]), main2.A(j2, "input", e2[10]), main2.A(j2, "change", e2[11])], E2 = true);
      }, p(e3, [n3]) {
        const r2 = {};
        8192 & n3 && (r2.$$scope = {dirty: n3, ctx: e3}), t3.$set(r2), (!z2 || 1 & n3) && main2.b(d2, "max", e3[0]), 2 & n3 && main2.Z(d2.value) !== e3[1] && main2.N(d2, e3[1]), 3 & n3 && main2.Y(d2, "bg-red-300", e3[0] <= e3[1]), (!z2 || 1 & n3) && main2.o(w2, e3[0]), 3 & n3 && main2.Y(a3, "bg-red-300", e3[0] <= e3[1]), 3 & n3 && main2.Y(a3, "border-red-300", e3[0] <= e3[1]);
        const s2 = {};
        8192 & n3 && (s2.$$scope = {dirty: n3, ctx: e3}), M2.$set(s2);
        const o2 = {};
        8192 & n3 && (o2.$$scope = {dirty: n3, ctx: e3}), S2.$set(o2), 4 & n3 && main2.N(j2, e3[2]);
        const c2 = {};
        8192 & n3 && (c2.$$scope = {dirty: n3, ctx: e3}), B2.$set(c2);
      }, i(e3) {
        z2 || (main2.p(t3.$$.fragment, e3), main2.p(M2.$$.fragment, e3), main2.p(S2.$$.fragment, e3), main2.p(B2.$$.fragment, e3), z2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(M2.$$.fragment, e3), main2.v(S2.$$.fragment, e3), main2.v(B2.$$.fragment, e3), z2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), e3 && main2.f(a3), e3 && main2.f(x2), main2.w(M2, e3), e3 && main2.f(k2), e3 && main2.f(_2), e3 && main2.f(C2), main2.w(S2, e3), e3 && main2.f(O2), e3 && main2.f(j2), e3 && main2.f(I2), main2.w(B2, e3), E2 = false, main2.B(A2);
      }};
    }
    function dn(e2, t3, n2) {
      let r2, s2, i2, o2, c2;
      main2.g(e2, pe, (e3) => n2(12, r2 = e3)), main2.g(e2, we, (e3) => n2(1, s2 = e3)), main2.g(e2, tn, (e3) => n2(2, i2 = e3)), main2.g(e2, main2.U, (e3) => n2(3, o2 = e3)), main2.g(e2, main2.V, (e3) => n2(4, c2 = e3));
      let {maxPage: l2} = t3;
      main2.V.subscribe((e3) => {
        const t4 = parseInt(e3.nowPage);
        s2 != t4 && main2.W(we, s2 = e3.nowPage ? t4 : 1, s2), i2 != e3.dateString && main2.W(tn, i2 = e3.dateString || en, i2);
      });
      return e2.$$set = (e3) => {
        "maxPage" in e3 && n2(0, l2 = e3.maxPage);
      }, [l2, s2, i2, o2, c2, function() {
        if (r2.value)
          return s2 < l2 && main2.W(we, s2 += 1, s2), null;
        const [e3, t4, n3] = i2.split("-").map((e4) => parseInt(e4)), a3 = new Date(e3, t4 - 1, n3 - 1);
        main2.W(tn, i2 = nn(a3), i2), main2.W(we, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: i2}));
      }, function() {
        if (r2.value)
          return s2 > 1 && main2.W(we, s2 -= 1, s2), null;
        const [e3, t4, n3] = i2.split("-").map((e4) => parseInt(e4)), l3 = new Date(e3, t4 - 1, n3 + 1);
        main2.W(tn, i2 = nn(l3), i2), main2.W(we, s2 = 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2, dateString: i2}));
      }, function() {
        s2 < l2 ? (main2.W(we, s2 += 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 > 1 ? (main2.W(we, s2 -= 1, s2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: s2}))) : alert("\uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 = main2.Z(this.value), we.set(s2);
      }, function() {
        i2 = this.value, tn.set(i2);
      }, () => {
        main2.W(we, s2 = 1, s2), o2("./", {...c2, nowPage: s2, dateString: i2});
      }];
    }
    class fn extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, dn, un, main2.s, {maxPage: 0});
      }
    }
    function hn(e2) {
      return Array.isArray ? Array.isArray(e2) : wn(e2) === "[object Array]";
    }
    function pn(e2) {
      return typeof e2 == "string";
    }
    function gn(e2) {
      return typeof e2 == "number";
    }
    function mn(e2) {
      return e2 === true || e2 === false || function(e3) {
        return $n(e3) && e3 !== null;
      }(e2) && wn(e2) == "[object Boolean]";
    }
    function $n(e2) {
      return typeof e2 == "object";
    }
    function yn(e2) {
      return e2 != null;
    }
    function vn(e2) {
      return !e2.trim().length;
    }
    function wn(e2) {
      return e2 == null ? e2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e2);
    }
    const bn = Object.prototype.hasOwnProperty;
    class xn {
      constructor(e2) {
        this._keys = [], this._keyMap = {};
        let t3 = 0;
        e2.forEach((e3) => {
          let n2 = Mn(e3);
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
    function Mn(e2) {
      let t3 = null, n2 = null, r2 = null, s2 = 1;
      if (pn(e2) || hn(e2))
        r2 = e2, t3 = kn(e2), n2 = _n(e2);
      else {
        if (!bn.call(e2, "name"))
          throw new Error(((e3) => `Missing ${e3} property in key`)("name"));
        const i2 = e2.name;
        if (r2 = i2, bn.call(e2, "weight") && (s2 = e2.weight, s2 <= 0))
          throw new Error(((e3) => `Property 'weight' in key '${e3}' must be a positive integer`)(i2));
        t3 = kn(i2), n2 = _n(i2);
      }
      return {path: t3, id: n2, weight: s2, src: r2};
    }
    function kn(e2) {
      return hn(e2) ? e2 : e2.split(".");
    }
    function _n(e2) {
      return hn(e2) ? e2.join(".") : e2;
    }
    var Cn = {isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: (e2, t3) => e2.score === t3.score ? e2.idx < t3.idx ? -1 : 1 : e2.score < t3.score ? -1 : 1, includeMatches: false, findAllMatches: false, minMatchCharLength: 1, location: 0, threshold: 0.6, distance: 100, ...{useExtendedSearch: false, getFn: function(e2, t3) {
      let n2 = [], r2 = false;
      const s2 = (e3, t4, i2) => {
        if (yn(e3))
          if (t4[i2]) {
            const o2 = e3[t4[i2]];
            if (!yn(o2))
              return;
            if (i2 === t4.length - 1 && (pn(o2) || gn(o2) || mn(o2)))
              n2.push(function(e4) {
                return e4 == null ? "" : function(e5) {
                  if (typeof e5 == "string")
                    return e5;
                  let t5 = e5 + "";
                  return t5 == "0" && 1 / e5 == -1 / 0 ? "-0" : t5;
                }(e4);
              }(o2));
            else if (hn(o2)) {
              r2 = true;
              for (let e4 = 0, n3 = o2.length; e4 < n3; e4 += 1)
                s2(o2[e4], t4, i2 + 1);
            } else
              t4.length && s2(o2, t4, i2 + 1);
          } else
            n2.push(e3);
      };
      return s2(e2, pn(t3) ? t3.split(".") : t3, 0), r2 ? n2 : n2[0];
    }, ignoreLocation: false, ignoreFieldNorm: false}};
    const Sn = /[^ ]+/g;
    class On {
      constructor({getFn: e2 = Cn.getFn} = {}) {
        this.norm = function(e3 = 3) {
          const t3 = new Map(), n2 = Math.pow(10, e3);
          return {get(e4) {
            const r2 = e4.match(Sn).length;
            if (t3.has(r2))
              return t3.get(r2);
            const s2 = 1 / Math.sqrt(r2), i2 = parseFloat(Math.round(s2 * n2) / n2);
            return t3.set(r2, i2), i2;
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
        !this.isCreated && this.docs.length && (this.isCreated = true, pn(this.docs[0]) ? this.docs.forEach((e2, t3) => {
          this._addString(e2, t3);
        }) : this.docs.forEach((e2, t3) => {
          this._addObject(e2, t3);
        }), this.norm.clear());
      }
      add(e2) {
        const t3 = this.size();
        pn(e2) ? this._addString(e2, t3) : this._addObject(e2, t3);
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
        if (!yn(e2) || vn(e2))
          return;
        let n2 = {v: e2, i: t3, n: this.norm.get(e2)};
        this.records.push(n2);
      }
      _addObject(e2, t3) {
        let n2 = {i: t3, $: {}};
        this.keys.forEach((t4, r2) => {
          let s2 = this.getFn(e2, t4.path);
          if (yn(s2)) {
            if (hn(s2)) {
              let e3 = [];
              const t5 = [{nestedArrIndex: -1, value: s2}];
              for (; t5.length; ) {
                const {nestedArrIndex: n3, value: r3} = t5.pop();
                if (yn(r3))
                  if (pn(r3) && !vn(r3)) {
                    let t6 = {v: r3, i: n3, n: this.norm.get(r3)};
                    e3.push(t6);
                  } else
                    hn(r3) && r3.forEach((e4, n4) => {
                      t5.push({nestedArrIndex: n4, value: e4});
                    });
              }
              n2.$[r2] = e3;
            } else if (!vn(s2)) {
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
    function jn(e2, t3, {getFn: n2 = Cn.getFn} = {}) {
      const r2 = new On({getFn: n2});
      return r2.setKeys(e2.map(Mn)), r2.setSources(t3), r2.create(), r2;
    }
    function Ln(e2, {errors: t3 = 0, currentLocation: n2 = 0, expectedLocation: r2 = 0, distance: s2 = Cn.distance, ignoreLocation: i2 = Cn.ignoreLocation} = {}) {
      const o2 = t3 / e2.length;
      if (i2)
        return o2;
      const c2 = Math.abs(r2 - n2);
      return s2 ? o2 + c2 / s2 : c2 ? 1 : o2;
    }
    function In(e2, t3, n2, {location: r2 = Cn.location, distance: s2 = Cn.distance, threshold: i2 = Cn.threshold, findAllMatches: o2 = Cn.findAllMatches, minMatchCharLength: c2 = Cn.minMatchCharLength, includeMatches: l2 = Cn.includeMatches, ignoreLocation: a3 = Cn.ignoreLocation} = {}) {
      if (t3.length > 32)
        throw new Error(`Pattern length exceeds max of ${32}.`);
      const u2 = t3.length, d2 = e2.length, f2 = Math.max(0, Math.min(r2, d2));
      let h2 = i2, p2 = f2;
      const g2 = c2 > 1 || l2, m2 = g2 ? Array(d2) : [];
      let $2;
      for (; ($2 = e2.indexOf(t3, p2)) > -1; ) {
        let e3 = Ln(t3, {currentLocation: $2, expectedLocation: f2, distance: s2, ignoreLocation: a3});
        if (h2 = Math.min(e3, h2), p2 = $2 + u2, g2) {
          let e4 = 0;
          for (; e4 < u2; )
            m2[$2 + e4] = 1, e4 += 1;
        }
      }
      p2 = -1;
      let y2 = [], v2 = 1, w2 = u2 + d2;
      const b2 = 1 << u2 - 1;
      for (let r3 = 0; r3 < u2; r3 += 1) {
        let i3 = 0, c3 = w2;
        for (; i3 < c3; ) {
          Ln(t3, {errors: r3, currentLocation: f2 + c3, expectedLocation: f2, distance: s2, ignoreLocation: a3}) <= h2 ? i3 = c3 : w2 = c3, c3 = Math.floor((w2 - i3) / 2 + i3);
        }
        w2 = c3;
        let l3 = Math.max(1, f2 - c3 + 1), $3 = o2 ? d2 : Math.min(f2 + c3, d2) + u2, x3 = Array($3 + 2);
        x3[$3 + 1] = (1 << r3) - 1;
        for (let i4 = $3; i4 >= l3; i4 -= 1) {
          let o3 = i4 - 1, c4 = n2[e2.charAt(o3)];
          if (g2 && (m2[o3] = +!!c4), x3[i4] = (x3[i4 + 1] << 1 | 1) & c4, r3 && (x3[i4] |= (y2[i4 + 1] | y2[i4]) << 1 | 1 | y2[i4 + 1]), x3[i4] & b2 && (v2 = Ln(t3, {errors: r3, currentLocation: o3, expectedLocation: f2, distance: s2, ignoreLocation: a3}), v2 <= h2)) {
            if (h2 = v2, p2 = o3, p2 <= f2)
              break;
            l3 = Math.max(1, 2 * f2 - p2);
          }
        }
        if (Ln(t3, {errors: r3 + 1, currentLocation: f2, expectedLocation: f2, distance: s2, ignoreLocation: a3}) > h2)
          break;
        y2 = x3;
      }
      const x2 = {isMatch: p2 >= 0, score: Math.max(1e-3, v2)};
      if (g2) {
        const e3 = function(e4 = [], t4 = Cn.minMatchCharLength) {
          let n3 = [], r3 = -1, s3 = -1, i3 = 0;
          for (let o3 = e4.length; i3 < o3; i3 += 1) {
            let o4 = e4[i3];
            o4 && r3 === -1 ? r3 = i3 : o4 || r3 === -1 || (s3 = i3 - 1, s3 - r3 + 1 >= t4 && n3.push([r3, s3]), r3 = -1);
          }
          return e4[i3 - 1] && i3 - r3 >= t4 && n3.push([r3, i3 - 1]), n3;
        }(m2, c2);
        e3.length ? l2 && (x2.indices = e3) : x2.isMatch = false;
      }
      return x2;
    }
    function Pn(e2) {
      let t3 = {};
      for (let n2 = 0, r2 = e2.length; n2 < r2; n2 += 1) {
        const s2 = e2.charAt(n2);
        t3[s2] = (t3[s2] || 0) | 1 << r2 - n2 - 1;
      }
      return t3;
    }
    class Bn {
      constructor(e2, {location: t3 = Cn.location, threshold: n2 = Cn.threshold, distance: r2 = Cn.distance, includeMatches: s2 = Cn.includeMatches, findAllMatches: i2 = Cn.findAllMatches, minMatchCharLength: o2 = Cn.minMatchCharLength, isCaseSensitive: c2 = Cn.isCaseSensitive, ignoreLocation: l2 = Cn.ignoreLocation} = {}) {
        if (this.options = {location: t3, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2}, this.pattern = c2 ? e2 : e2.toLowerCase(), this.chunks = [], !this.pattern.length)
          return;
        const a3 = (e3, t4) => {
          this.chunks.push({pattern: e3, alphabet: Pn(e3), startIndex: t4});
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
        const {location: r2, distance: s2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, ignoreLocation: l2} = this.options;
        let a3 = [], u2 = 0, d2 = false;
        this.chunks.forEach(({pattern: t4, alphabet: f3, startIndex: h2}) => {
          const {isMatch: p2, score: g2, indices: m2} = In(e2, t4, f3, {location: r2 + h2, distance: s2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, includeMatches: n2, ignoreLocation: l2});
          p2 && (d2 = true), u2 += g2, p2 && m2 && (a3 = [...a3, ...m2]);
        });
        let f2 = {isMatch: d2, score: d2 ? u2 / this.chunks.length : 1};
        return d2 && n2 && (f2.indices = a3), f2;
      }
    }
    class zn {
      constructor(e2) {
        this.pattern = e2;
      }
      static isMultiMatch(e2) {
        return En(e2, this.multiRegex);
      }
      static isSingleMatch(e2) {
        return En(e2, this.singleRegex);
      }
      search() {
      }
    }
    function En(e2, t3) {
      const n2 = e2.match(t3);
      return n2 ? n2[1] : null;
    }
    class An extends zn {
      constructor(e2, {location: t3 = Cn.location, threshold: n2 = Cn.threshold, distance: r2 = Cn.distance, includeMatches: s2 = Cn.includeMatches, findAllMatches: i2 = Cn.findAllMatches, minMatchCharLength: o2 = Cn.minMatchCharLength, isCaseSensitive: c2 = Cn.isCaseSensitive, ignoreLocation: l2 = Cn.ignoreLocation} = {}) {
        super(e2), this._bitapSearch = new Bn(e2, {location: t3, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2});
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
    class Nn extends zn {
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
        const i2 = !!r2.length;
        return {isMatch: i2, score: i2 ? 0 : 1, indices: r2};
      }
    }
    const Wn = [class extends zn {
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
    }, Nn, class extends zn {
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
    }, class extends zn {
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
    }, class extends zn {
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
    }, class extends zn {
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
    }, class extends zn {
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
    }, An];
    const Tn = Wn.length;
    const Dn = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    const Rn = new Set([An.type, Nn.type]);
    class Fn {
      constructor(e2, {isCaseSensitive: t3 = Cn.isCaseSensitive, includeMatches: n2 = Cn.includeMatches, minMatchCharLength: r2 = Cn.minMatchCharLength, ignoreLocation: s2 = Cn.ignoreLocation, findAllMatches: i2 = Cn.findAllMatches, location: o2 = Cn.location, threshold: c2 = Cn.threshold, distance: l2 = Cn.distance} = {}) {
        this.query = null, this.options = {isCaseSensitive: t3, includeMatches: n2, minMatchCharLength: r2, findAllMatches: i2, ignoreLocation: s2, location: o2, threshold: c2, distance: l2}, this.pattern = t3 ? e2 : e2.toLowerCase(), this.query = function(e3, t4 = {}) {
          return e3.split("|").map((e4) => {
            let n3 = e4.trim().split(Dn).filter((e5) => e5 && !!e5.trim()), r3 = [];
            for (let e5 = 0, s3 = n3.length; e5 < s3; e5 += 1) {
              const s4 = n3[e5];
              let i3 = false, o3 = -1;
              for (; !i3 && ++o3 < Tn; ) {
                const e6 = Wn[o3];
                let n4 = e6.isMultiMatch(s4);
                n4 && (r3.push(new e6(n4, t4)), i3 = true);
              }
              if (!i3)
                for (o3 = -1; ++o3 < Tn; ) {
                  const e6 = Wn[o3];
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
        let s2 = 0, i2 = [], o2 = 0;
        for (let r3 = 0, c2 = t3.length; r3 < c2; r3 += 1) {
          const c3 = t3[r3];
          i2.length = 0, s2 = 0;
          for (let t4 = 0, r4 = c3.length; t4 < r4; t4 += 1) {
            const r5 = c3[t4], {isMatch: l2, indices: a3, score: u2} = r5.search(e2);
            if (!l2) {
              o2 = 0, s2 = 0, i2.length = 0;
              break;
            }
            if (s2 += 1, o2 += u2, n2) {
              const e3 = r5.constructor.type;
              Rn.has(e3) ? i2 = [...i2, ...a3] : i2.push(a3);
            }
          }
          if (s2) {
            let e3 = {isMatch: true, score: o2 / s2};
            return n2 && (e3.indices = i2), e3;
          }
        }
        return {isMatch: false, score: 1};
      }
    }
    const Vn = [];
    function qn(e2, t3) {
      for (let n2 = 0, r2 = Vn.length; n2 < r2; n2 += 1) {
        let r3 = Vn[n2];
        if (r3.condition(e2, t3))
          return new r3(e2, t3);
      }
      return new Bn(e2, t3);
    }
    const Jn = "$and";
    const Hn = "$or";
    const Kn = "$path";
    const Yn = "$val";
    const Zn = (e2) => !(!e2[Jn] && !e2[Hn]);
    const Un = (e2) => ({[Jn]: Object.keys(e2).map((t3) => ({[t3]: e2[t3]}))});
    function Qn(e2, t3, {auto: n2 = true} = {}) {
      const r2 = (e3) => {
        let s2 = Object.keys(e3);
        const i2 = ((e4) => !!e4[Kn])(e3);
        if (!i2 && s2.length > 1 && !Zn(e3))
          return r2(Un(e3));
        if (((e4) => !hn(e4) && $n(e4) && !Zn(e4))(e3)) {
          const r3 = i2 ? e3[Kn] : s2[0], o3 = i2 ? e3[Yn] : e3[r3];
          if (!pn(o3))
            throw new Error(((e4) => `Invalid value for key ${e4}`)(r3));
          const c2 = {keyId: _n(r3), pattern: o3};
          return n2 && (c2.searcher = qn(o3, t3)), c2;
        }
        let o2 = {children: [], operator: s2[0]};
        return s2.forEach((t4) => {
          const n3 = e3[t4];
          hn(n3) && n3.forEach((e4) => {
            o2.children.push(r2(e4));
          });
        }), o2;
      };
      return Zn(e2) || (e2 = Un(e2)), r2(e2);
    }
    function Xn(e2, t3) {
      const n2 = e2.matches;
      t3.matches = [], yn(n2) && n2.forEach((e3) => {
        if (!yn(e3.indices) || !e3.indices.length)
          return;
        const {indices: n3, value: r2} = e3;
        let s2 = {indices: n3, value: r2};
        e3.key && (s2.key = e3.key.src), e3.idx > -1 && (s2.refIndex = e3.idx), t3.matches.push(s2);
      });
    }
    function Gn(e2, t3) {
      t3.score = e2.score;
    }
    class er {
      constructor(e2, t3 = {}, n2) {
        this.options = {...Cn, ...t3}, this.options.useExtendedSearch, this._keyStore = new xn(this.options.keys), this.setCollection(e2, n2);
      }
      setCollection(e2, t3) {
        if (this._docs = e2, t3 && !(t3 instanceof On))
          throw new Error("Incorrect 'index' type");
        this._myIndex = t3 || jn(this.options.keys, this._docs, {getFn: this.options.getFn});
      }
      add(e2) {
        yn(e2) && (this._docs.push(e2), this._myIndex.add(e2));
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
        const {includeMatches: n2, includeScore: r2, shouldSort: s2, sortFn: i2, ignoreFieldNorm: o2} = this.options;
        let c2 = pn(e2) ? pn(this._docs[0]) ? this._searchStringList(e2) : this._searchObjectList(e2) : this._searchLogical(e2);
        return function(e3, {ignoreFieldNorm: t4 = Cn.ignoreFieldNorm}) {
          e3.forEach((e4) => {
            let n3 = 1;
            e4.matches.forEach(({key: e5, norm: r3, score: s3}) => {
              const i3 = e5 ? e5.weight : null;
              n3 *= Math.pow(s3 === 0 && i3 ? Number.EPSILON : s3, (i3 || 1) * (t4 ? 1 : r3));
            }), e4.score = n3;
          });
        }(c2, {ignoreFieldNorm: o2}), s2 && c2.sort(i2), gn(t3) && t3 > -1 && (c2 = c2.slice(0, t3)), function(e3, t4, {includeMatches: n3 = Cn.includeMatches, includeScore: r3 = Cn.includeScore} = {}) {
          const s3 = [];
          return n3 && s3.push(Xn), r3 && s3.push(Gn), e3.map((e4) => {
            const {idx: n4} = e4, r4 = {item: t4[n4], refIndex: n4};
            return s3.length && s3.forEach((t5) => {
              t5(e4, r4);
            }), r4;
          });
        }(c2, this._docs, {includeMatches: n2, includeScore: r2});
      }
      _searchStringList(e2) {
        const t3 = qn(e2, this.options), {records: n2} = this._myIndex, r2 = [];
        return n2.forEach(({v: e3, i: n3, n: s2}) => {
          if (!yn(e3))
            return;
          const {isMatch: i2, score: o2, indices: c2} = t3.searchIn(e3);
          i2 && r2.push({item: e3, idx: n3, matches: [{score: o2, value: e3, norm: s2, indices: c2}]});
        }), r2;
      }
      _searchLogical(e2) {
        const t3 = Qn(e2, this.options), n2 = (e3, t4, r3) => {
          if (!e3.children) {
            const {keyId: n3, searcher: s3} = e3, i3 = this._findMatches({key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(t4, n3), searcher: s3});
            return i3 && i3.length ? [{idx: r3, item: t4, matches: i3}] : [];
          }
          switch (e3.operator) {
            case Jn: {
              const s3 = [];
              for (let i3 = 0, o2 = e3.children.length; i3 < o2; i3 += 1) {
                const o3 = e3.children[i3], c2 = n2(o3, t4, r3);
                if (!c2.length)
                  return [];
                s3.push(...c2);
              }
              return s3;
            }
            case Hn: {
              const s3 = [];
              for (let i3 = 0, o2 = e3.children.length; i3 < o2; i3 += 1) {
                const o3 = e3.children[i3], c2 = n2(o3, t4, r3);
                if (c2.length) {
                  s3.push(...c2);
                  break;
                }
              }
              return s3;
            }
          }
        }, r2 = this._myIndex.records, s2 = {}, i2 = [];
        return r2.forEach(({$: e3, i: r3}) => {
          if (yn(e3)) {
            let o2 = n2(t3, e3, r3);
            o2.length && (s2[r3] || (s2[r3] = {idx: r3, item: e3, matches: []}, i2.push(s2[r3])), o2.forEach(({matches: e4}) => {
              s2[r3].matches.push(...e4);
            }));
          }
        }), i2;
      }
      _searchObjectList(e2) {
        const t3 = qn(e2, this.options), {keys: n2, records: r2} = this._myIndex, s2 = [];
        return r2.forEach(({$: e3, i: r3}) => {
          if (!yn(e3))
            return;
          let i2 = [];
          n2.forEach((n3, r4) => {
            i2.push(...this._findMatches({key: n3, value: e3[r4], searcher: t3}));
          }), i2.length && s2.push({idx: r3, item: e3, matches: i2});
        }), s2;
      }
      _findMatches({key: e2, value: t3, searcher: n2}) {
        if (!yn(t3))
          return [];
        let r2 = [];
        if (hn(t3))
          t3.forEach(({v: t4, i: s2, n: i2}) => {
            if (!yn(t4))
              return;
            const {isMatch: o2, score: c2, indices: l2} = n2.searchIn(t4);
            o2 && r2.push({score: c2, key: e2, value: t4, idx: s2, norm: i2, indices: l2});
          });
        else {
          const {v: s2, n: i2} = t3, {isMatch: o2, score: c2, indices: l2} = n2.searchIn(s2);
          o2 && r2.push({score: c2, key: e2, value: s2, norm: i2, indices: l2});
        }
        return r2;
      }
    }
    er.version = "6.4.6", er.createIndex = jn, er.parseIndex = function(e2, {getFn: t3 = Cn.getFn} = {}) {
      const {keys: n2, records: r2} = e2, s2 = new On({getFn: t3});
      return s2.setKeys(n2), s2.setIndexRecords(r2), s2;
    }, er.config = Cn, er.parseQuery = Qn, function(...e2) {
      Vn.push(...e2);
    }(Fn);
    const tr = {useExtendedSearch: true, keys: ["subject", "preview", "body"]};
    let nr = main2.M(me, (e2) => new er(e2, tr));
    let rr = main2.L("");
    let sr = main2.M([me, nr, rr], ([e2, t3, n2]) => n2 ? t3.search("'" + n2).map((e3) => e3.item) : e2);
    let ir = main2.M([sr, pe, ge, rr, tn], ([e2, t3, n2, r2, s2]) => {
      const i2 = n2.get(t3), o2 = (e3) => true, c2 = t3.value && ((e3) => i2.has(e3.id)) || r2 && o2 || s2 && ((e3) => e3.time.split(" ")[0].replace(/\//g, "-") == s2) || o2;
      return e2.filter(c2);
    });
    const or = {id: "", member: "", time: "", subject: "", preview: ""};
    let cr = main2.M([ir, we], ([e2, t3]) => function(n2) {
      const r2 = (t3 - 1) * n2, s2 = e2.slice(r2, r2 + n2);
      return s2.length < n2 ? s2.concat(Array(n2 - s2.length).fill(or)) : s2;
    });
    function lr(e2) {
      let t3, n2, a3, u2, d2, f2, h2;
      return {c() {
        t3 = main2.e("span"), n2 = main2.t(e2[0]), a3 = main2.t("\uAC74"), u2 = main2.a(), d2 = main2.e("input"), main2.b(t3, "id", "MailCounter"), main2.b(t3, "class", "m-2 bg-red-100 rounded p-0.5"), main2.b(d2, "id", "SearchInput"), main2.b(d2, "class", "border-1 border-gray-400 rounded w-28 pl-1"), main2.b(d2, "type", "text"), main2.b(d2, "placeholder", "\uAC80\uC0C9");
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), main2.d(t3, a3), main2.c(r2, u2, s2), main2.c(r2, d2, s2), main2.N(d2, e2[1]), f2 || (h2 = main2.A(d2, "input", e2[2]), f2 = true);
      }, p(e3, [t4]) {
        1 & t4 && main2.o(n2, e3[0]), 2 & t4 && d2.value !== e3[1] && main2.N(d2, e3[1]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), e3 && main2.f(u2), e3 && main2.f(d2), f2 = false, h2();
      }};
    }
    function ar(e2, t3, n2) {
      let r2, s2, i2, o2;
      main2.g(e2, rr, (e3) => n2(1, r2 = e3)), main2.g(e2, we, (e3) => n2(3, s2 = e3)), main2.g(e2, main2.U, (e3) => n2(4, i2 = e3)), main2.g(e2, main2.V, (e3) => n2(5, o2 = e3));
      let {search_length: c2} = t3;
      return main2.V.subscribe((e3) => {
        r2 != e3.search && main2.W(rr, r2 = e3.search || "", r2);
      }), rr.subscribe((e3) => {
        main2.W(we, s2 = 1, s2), i2("./", Object.assign(Object.assign({}, o2), {search: e3}));
      }), e2.$$set = (e3) => {
        "search_length" in e3 && n2(0, c2 = e3.search_length);
      }, [c2, r2, function() {
        r2 = this.value, rr.set(r2);
      }];
    }
    class ur extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, ar, lr, main2.s, {search_length: 0});
      }
    }
    function dr(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[13] = t3[n2], r2;
    }
    function fr(e2) {
      let t3;
      return {c() {
        t3 = main2.e("span"), main2.b(t3, "class", "border-1 rounded bg-white text-white text-lg");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, p: main2.n, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function hr(e2) {
      let t3, n2, d2, v2, w2, x2, M2, k2, _2, C2, S2, O2, j2, I2, P2, z2, E2, A2, N2 = e2[0].subject + "", W2 = (e2[0].preview || "...") + "";
      t3 = new Mt({props: {member: e2[0].member}}), d2 = new dt({props: {pm: e2[0], float: "left mt-0.5"}}), x2 = new pt({props: {pm: e2[0]}}), k2 = new st({props: {time: e2[0].time}});
      let T2 = e2[6] && pr(), D2 = e2[5](e2[0]), R2 = [];
      for (let t4 = 0; t4 < D2.length; t4 += 1)
        R2[t4] = gr(dr(e2, D2, t4));
      const F2 = (e3) => main2.v(R2[e3], 1, 1, () => {
        R2[e3] = null;
      });
      return {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(d2.$$.fragment), v2 = main2.a(), w2 = main2.e("p"), main2.q(x2.$$.fragment), M2 = main2.a(), main2.q(k2.$$.fragment), _2 = main2.a(), T2 && T2.c(), C2 = main2.a();
        for (let e3 = 0; e3 < R2.length; e3 += 1)
          R2[e3].c();
        S2 = main2.a(), O2 = main2.t(N2), j2 = main2.a(), I2 = main2.e("p"), P2 = main2.t(W2), main2.b(w2, "class", "truncate"), main2.b(I2, "class", "ml-1 mt-1 text-sm truncate");
      }, m(r2, s2) {
        main2.r(t3, r2, s2), main2.c(r2, n2, s2), main2.r(d2, r2, s2), main2.c(r2, v2, s2), main2.c(r2, w2, s2), main2.r(x2, w2, null), main2.d(w2, M2), main2.r(k2, w2, null), main2.d(w2, _2), T2 && T2.m(w2, null), main2.d(w2, C2);
        for (let e3 = 0; e3 < R2.length; e3 += 1)
          R2[e3].m(w2, null);
        main2.d(w2, S2), main2.d(w2, O2), main2.c(r2, j2, s2), main2.c(r2, I2, s2), main2.d(I2, P2), z2 = true, E2 || (A2 = [main2.A(w2, "click", function() {
          main2.F(e2[4]) && e2[4].apply(this, arguments);
        }), main2.A(I2, "click", function() {
          main2.F(e2[4]) && e2[4].apply(this, arguments);
        })], E2 = true);
      }, p(n3, r2) {
        e2 = n3;
        const s2 = {};
        1 & r2 && (s2.member = e2[0].member), t3.$set(s2);
        const i2 = {};
        1 & r2 && (i2.pm = e2[0]), d2.$set(i2);
        const o2 = {};
        1 & r2 && (o2.pm = e2[0]), x2.$set(o2);
        const c2 = {};
        if (1 & r2 && (c2.time = e2[0].time), k2.$set(c2), e2[6] ? T2 || (T2 = pr(), T2.c(), T2.m(w2, C2)) : T2 && (T2.d(1), T2 = null), 33 & r2) {
          let t4;
          for (D2 = e2[5](e2[0]), t4 = 0; t4 < D2.length; t4 += 1) {
            const n4 = dr(e2, D2, t4);
            R2[t4] ? (R2[t4].p(n4, r2), main2.p(R2[t4], 1)) : (R2[t4] = gr(n4), R2[t4].c(), main2.p(R2[t4], 1), R2[t4].m(w2, S2));
          }
          for (main2.D(), t4 = D2.length; t4 < R2.length; t4 += 1)
            F2(t4);
          main2.x();
        }
        (!z2 || 1 & r2) && N2 !== (N2 = e2[0].subject + "") && main2.o(O2, N2), (!z2 || 1 & r2) && W2 !== (W2 = (e2[0].preview || "...") + "") && main2.o(P2, W2);
      }, i(e3) {
        if (!z2) {
          main2.p(t3.$$.fragment, e3), main2.p(d2.$$.fragment, e3), main2.p(x2.$$.fragment, e3), main2.p(k2.$$.fragment, e3);
          for (let e4 = 0; e4 < D2.length; e4 += 1)
            main2.p(R2[e4]);
          z2 = true;
        }
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(d2.$$.fragment, e3), main2.v(x2.$$.fragment, e3), main2.v(k2.$$.fragment, e3), R2 = R2.filter(Boolean);
        for (let e4 = 0; e4 < R2.length; e4 += 1)
          main2.v(R2[e4]);
        z2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(d2, e3), e3 && main2.f(v2), e3 && main2.f(w2), main2.w(x2), main2.w(k2), T2 && T2.d(), main2.y(R2, e3), e3 && main2.f(j2), e3 && main2.f(I2), E2 = false, main2.B(A2);
      }};
    }
    function pr(e2) {
      let t3;
      return {c() {
        t3 = main2.e("br");
      }, m(e3, n2) {
        main2.c(e3, t3, n2);
      }, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function gr(e2) {
      let t3, n2;
      return t3 = new tt({props: {tag: e2[13]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        33 & n3 && (r2.tag = e3[13]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function mr(e2) {
      let t3, n2, s2, i2, c2;
      const l2 = [hr, fr], a3 = [];
      function d2(e3, t4) {
        return e3[0].member ? 0 : 1;
      }
      return n2 = d2(e2), s2 = a3[n2] = l2[n2](e2), {c() {
        t3 = main2.e("div"), s2.c();
      }, m(e3, r2) {
        main2.c(e3, t3, r2), a3[n2].m(t3, null), c2 = true;
      }, p(e3, r2) {
        let i3 = n2;
        n2 = d2(e3), n2 === i3 ? a3[n2].p(e3, r2) : (main2.D(), main2.v(a3[i3], 1, 1, () => {
          a3[i3] = null;
        }), main2.x(), s2 = a3[n2], s2 ? s2.p(e3, r2) : (s2 = a3[n2] = l2[n2](e3), s2.c()), main2.p(s2, 1), s2.m(t3, null));
      }, i(e3) {
        c2 || (main2.p(s2), i2 || main2.j(() => {
          i2 = main2.X(t3, a, {duration: 500}), i2.start();
        }), c2 = true);
      }, o(e3) {
        main2.v(s2), c2 = false;
      }, d(e3) {
        e3 && main2.f(t3), a3[n2].d();
      }};
    }
    function $r(e2) {
      let t3, r2, s2 = e2[0], i2 = vr(e2);
      return {c() {
        i2.c(), t3 = main2.G();
      }, m(e3, n2) {
        i2.m(e3, n2), main2.c(e3, t3, n2), r2 = true;
      }, p(e3, r3) {
        1 & r3 && main2.s(s2, s2 = e3[0]) ? (main2.D(), main2.v(i2, 1, 1, main2.n), main2.x(), i2 = vr(e3), i2.c(), main2.p(i2), i2.m(t3.parentNode, t3)) : i2.p(e3, r3);
      }, i(e3) {
        r2 || (main2.p(i2), r2 = true);
      }, o(e3) {
        main2.v(i2), r2 = false;
      }, d(e3) {
        e3 && main2.f(t3), i2.d(e3);
      }};
    }
    function yr(e2) {
      let t3, n2, i2, l2, a3, d2, f2, p2, v2 = e2[0].subject + "", w2 = " " + e2[0].preview;
      return t3 = new pt({props: {pm: e2[0], size: ""}}), i2 = new st({props: {time: e2[0].time, size: ""}}), {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(i2.$$.fragment), l2 = main2.a(), a3 = main2.e("strong"), d2 = main2.t(v2), f2 = main2.t(w2);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), main2.c(e3, n2, r2), main2.r(i2, e3, r2), main2.c(e3, l2, r2), main2.c(e3, a3, r2), main2.d(a3, d2), main2.c(e3, f2, r2), p2 = true;
      }, p(e3, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = e3[0]), t3.$set(r2);
        const s2 = {};
        1 & n3 && (s2.time = e3[0].time), i2.$set(s2), (!p2 || 1 & n3) && v2 !== (v2 = e3[0].subject + "") && main2.o(d2, v2), (!p2 || 1 & n3) && w2 !== (w2 = " " + e3[0].preview) && main2.o(f2, w2);
      }, i(e3) {
        p2 || (main2.p(t3.$$.fragment, e3), main2.p(i2.$$.fragment, e3), p2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(i2.$$.fragment, e3), p2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(i2, e3), e3 && main2.f(l2), e3 && main2.f(a3), e3 && main2.f(f2);
      }};
    }
    function vr(e2) {
      let t3, n2, s2, c2 = e2[0].member && yr(e2);
      return {c() {
        t3 = main2.e("li"), c2 && c2.c(), main2.b(t3, "class", "border-b-2 rounded w-full text-gray-500 truncate"), main2.h(t3, "font-size", "10px"), main2.h(t3, "height", "20px");
      }, m(e3, n3) {
        main2.c(e3, t3, n3), c2 && c2.m(t3, null), s2 = true;
      }, p(e3, n3) {
        e3[0].member ? c2 ? (c2.p(e3, n3), 1 & n3 && main2.p(c2, 1)) : (c2 = yr(e3), c2.c(), main2.p(c2, 1), c2.m(t3, null)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x());
      }, i(e3) {
        s2 || (main2.p(c2), n2 || main2.j(() => {
          n2 = main2.X(t3, a, {duration: 300}), n2.start();
        }), s2 = true);
      }, o(e3) {
        main2.v(c2), s2 = false;
      }, d(e3) {
        e3 && main2.f(t3), c2 && c2.d();
      }};
    }
    function wr(e2) {
      let t3, c2, l2, a3, m2, $2 = e2[0].id, y2 = mr(e2), v2 = e2[1] && $r(e2);
      return {c() {
        t3 = main2.e("li"), y2.c(), l2 = main2.a(), v2 && v2.c(), a3 = main2.G(), main2.b(t3, "id", c2 = "MailItem-" + e2[2]), main2.h(t3, "height", e2[3] ? "62px" : "84px"), main2.b(t3, "class", "border-b-2 rounded p-1 w-full"), main2.Y(t3, "hidden", e2[1]);
      }, m(e3, n2) {
        main2.c(e3, t3, n2), y2.m(t3, null), main2.c(e3, l2, n2), v2 && v2.m(e3, n2), main2.c(e3, a3, n2), m2 = true;
      }, p(e3, [r2]) {
        1 & r2 && main2.s($2, $2 = e3[0].id) ? (main2.D(), main2.v(y2, 1, 1, main2.n), main2.x(), y2 = mr(e3), y2.c(), main2.p(y2), y2.m(t3, null)) : y2.p(e3, r2), (!m2 || 4 & r2 && c2 !== (c2 = "MailItem-" + e3[2])) && main2.b(t3, "id", c2), (!m2 || 8 & r2) && main2.h(t3, "height", e3[3] ? "62px" : "84px"), 2 & r2 && main2.Y(t3, "hidden", e3[1]), e3[1] ? v2 ? (v2.p(e3, r2), 2 & r2 && main2.p(v2, 1)) : (v2 = $r(e3), v2.c(), main2.p(v2, 1), v2.m(a3.parentNode, a3)) : v2 && (main2.D(), main2.v(v2, 1, 1, () => {
          v2 = null;
        }), main2.x());
      }, i(e3) {
        m2 || (main2.p(y2), main2.p(v2), m2 = true);
      }, o(e3) {
        main2.v(y2), main2.v(v2), m2 = false;
      }, d(e3) {
        e3 && main2.f(t3), y2.d(e3), e3 && main2.f(l2), v2 && v2.d(e3), e3 && main2.f(a3);
      }};
    }
    function br(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2;
      main2.g(e2, $e, (e3) => n2(7, i2 = e3)), main2.g(e2, be, (e3) => n2(8, o2 = e3)), main2.g(e2, Me, (e3) => n2(3, c2 = e3)), main2.g(e2, main2.U, (e3) => n2(9, l2 = e3)), main2.g(e2, main2.V, (e3) => n2(10, a3 = e3)), main2.g(e2, ue, (e3) => n2(11, u2 = e3)), main2.g(e2, ae, (e3) => n2(12, d2 = e3)), main2.g(e2, ke, (e3) => n2(6, f2 = e3));
      let {pm: h2} = t3, {hidden: p2} = t3, {index: g2} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(0, h2 = e3.pm), "hidden" in e3 && n2(1, p2 = e3.hidden), "index" in e3 && n2(2, g2 = e3.index);
      }, e2.$$.update = () => {
        1929 & e2.$$.dirty && n2(4, r2 = () => {
          h2 && (main2.W($e, i2 = h2, i2), main2.W(be, o2 = c2 || false, o2), l2("./", Object.assign(Object.assign({}, a3), {showList: o2, now_pm: i2.id})));
        }), 6144 & e2.$$.dirty && n2(5, s2 = (e3) => u2.has(e3.id) ? Array.from(u2.get(e3.id)).map((e4) => d2.get(e4.value)) : []);
      }, [h2, p2, g2, c2, r2, s2, f2, i2, o2, l2, a3, u2, d2];
    }
    class xr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, br, wr, main2.s, {pm: 0, hidden: 1, index: 2});
      }
    }
    function Mr(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[4] = t3[n2], r2[6] = n2, r2;
    }
    function kr(e2) {
      let t3, n2;
      return t3 = new xr({props: {index: e2[6], pm: e2[4], hidden: e2[2] && (e2[1] || e2[3]) && e2[6] > 0}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        1 & n3 && (r2.pm = e3[4]), 14 & n3 && (r2.hidden = e3[2] && (e3[1] || e3[3]) && e3[6] > 0), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function _r(e2) {
      let t3, n2, s2 = e2[0], c2 = [];
      for (let t4 = 0; t4 < s2.length; t4 += 1)
        c2[t4] = kr(Mr(e2, s2, t4));
      const l2 = (e3) => main2.v(c2[e3], 1, 1, () => {
        c2[e3] = null;
      });
      return {c() {
        t3 = main2.e("ul");
        for (let e3 = 0; e3 < c2.length; e3 += 1)
          c2[e3].c();
        main2.b(t3, "id", "MailItemList"), main2.h(t3, "max-width", "728px"), main2.b(t3, "class", "bg-white rounded shadow-xl mb-3");
      }, m(e3, r2) {
        main2.c(e3, t3, r2);
        for (let e4 = 0; e4 < c2.length; e4 += 1)
          c2[e4].m(t3, null);
        n2 = true;
      }, p(e3, [n3]) {
        if (15 & n3) {
          let r2;
          for (s2 = e3[0], r2 = 0; r2 < s2.length; r2 += 1) {
            const i2 = Mr(e3, s2, r2);
            c2[r2] ? (c2[r2].p(i2, n3), main2.p(c2[r2], 1)) : (c2[r2] = kr(i2), c2[r2].c(), main2.p(c2[r2], 1), c2[r2].m(t3, null));
          }
          for (main2.D(), r2 = s2.length; r2 < c2.length; r2 += 1)
            l2(r2);
          main2.x();
        }
      }, i(e3) {
        if (!n2) {
          for (let e4 = 0; e4 < s2.length; e4 += 1)
            main2.p(c2[e4]);
          n2 = true;
        }
      }, o(e3) {
        c2 = c2.filter(Boolean);
        for (let e4 = 0; e4 < c2.length; e4 += 1)
          main2.v(c2[e4]);
        n2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(c2, e3);
      }};
    }
    function Cr(e2, t3, n2) {
      let r2, s2;
      main2.g(e2, ke, (e3) => n2(2, r2 = e3)), main2.g(e2, xe, (e3) => n2(3, s2 = e3));
      let {mail_list: i2} = t3, {isTyping: o2} = t3;
      return e2.$$set = (e3) => {
        "mail_list" in e3 && n2(0, i2 = e3.mail_list), "isTyping" in e3 && n2(1, o2 = e3.isTyping);
      }, [i2, o2, r2, s2];
    }
    class Sr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Cr, _r, main2.s, {mail_list: 0, isTyping: 1});
      }
    }
    function Or(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[11] = t3[n2], r2;
    }
    function jr(e2) {
      let t3, n2;
      return {c() {
        t3 = main2.e("img"), main2.b(t3, "class", "ml-5 m-3 w-10/12"), main2.b(t3, "alt", "no mail"), t3.src !== (n2 = "./img/izone-logo-card.png") && main2.b(t3, "src", "./img/izone-logo-card.png");
      }, m(e3, n3) {
        main2.c(e3, t3, n3);
      }, p: main2.n, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3);
      }};
    }
    function Lr(e2) {
      let t3, n2, d2, v2, w2, x2, M2, k2, _2, C2, S2, O2, j2, I2, P2, z2, E2, A2 = e2[0].subject + "", N2 = e2[0].preview + "";
      t3 = new dt({props: {pm: e2[0]}}), d2 = new Mt({props: {member: e2[0].member}}), k2 = new pt({props: {pm: e2[0]}}), C2 = new st({props: {time: e2[0].time}});
      let W2 = e2[2](e2[0]), T2 = [];
      for (let t4 = 0; t4 < W2.length; t4 += 1)
        T2[t4] = Ir(Or(e2, W2, t4));
      const D2 = (e3) => main2.v(T2[e3], 1, 1, () => {
        T2[e3] = null;
      });
      return {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(d2.$$.fragment), v2 = main2.a(), w2 = main2.e("h4"), x2 = main2.t(A2), M2 = main2.a(), main2.q(k2.$$.fragment), _2 = main2.a(), main2.q(C2.$$.fragment), S2 = main2.a();
        for (let e3 = 0; e3 < T2.length; e3 += 1)
          T2[e3].c();
        O2 = main2.a(), j2 = main2.e("p"), I2 = main2.t(N2), main2.b(w2, "class", "text-lg"), main2.b(j2, "class", "text-sm");
      }, m(r2, s2) {
        main2.r(t3, r2, s2), main2.c(r2, n2, s2), main2.r(d2, r2, s2), main2.c(r2, v2, s2), main2.c(r2, w2, s2), main2.d(w2, x2), main2.c(r2, M2, s2), main2.r(k2, r2, s2), main2.c(r2, _2, s2), main2.r(C2, r2, s2), main2.c(r2, S2, s2);
        for (let e3 = 0; e3 < T2.length; e3 += 1)
          T2[e3].m(r2, s2);
        main2.c(r2, O2, s2), main2.c(r2, j2, s2), main2.d(j2, I2), P2 = true, z2 || (E2 = [main2.A(w2, "click", function() {
          main2.F(e2[3]) && e2[3].apply(this, arguments);
        }), main2.A(j2, "click", function() {
          main2.F(e2[3]) && e2[3].apply(this, arguments);
        })], z2 = true);
      }, p(n3, r2) {
        e2 = n3;
        const s2 = {};
        1 & r2 && (s2.pm = e2[0]), t3.$set(s2);
        const i2 = {};
        1 & r2 && (i2.member = e2[0].member), d2.$set(i2), (!P2 || 1 & r2) && A2 !== (A2 = e2[0].subject + "") && main2.o(x2, A2);
        const o2 = {};
        1 & r2 && (o2.pm = e2[0]), k2.$set(o2);
        const c2 = {};
        if (1 & r2 && (c2.time = e2[0].time), C2.$set(c2), 5 & r2) {
          let t4;
          for (W2 = e2[2](e2[0]), t4 = 0; t4 < W2.length; t4 += 1) {
            const n4 = Or(e2, W2, t4);
            T2[t4] ? (T2[t4].p(n4, r2), main2.p(T2[t4], 1)) : (T2[t4] = Ir(n4), T2[t4].c(), main2.p(T2[t4], 1), T2[t4].m(O2.parentNode, O2));
          }
          for (main2.D(), t4 = W2.length; t4 < T2.length; t4 += 1)
            D2(t4);
          main2.x();
        }
        (!P2 || 1 & r2) && N2 !== (N2 = e2[0].preview + "") && main2.o(I2, N2);
      }, i(e3) {
        if (!P2) {
          main2.p(t3.$$.fragment, e3), main2.p(d2.$$.fragment, e3), main2.p(k2.$$.fragment, e3), main2.p(C2.$$.fragment, e3);
          for (let e4 = 0; e4 < W2.length; e4 += 1)
            main2.p(T2[e4]);
          P2 = true;
        }
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(d2.$$.fragment, e3), main2.v(k2.$$.fragment, e3), main2.v(C2.$$.fragment, e3), T2 = T2.filter(Boolean);
        for (let e4 = 0; e4 < T2.length; e4 += 1)
          main2.v(T2[e4]);
        P2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(d2, e3), e3 && main2.f(v2), e3 && main2.f(w2), e3 && main2.f(M2), main2.w(k2, e3), e3 && main2.f(_2), main2.w(C2, e3), e3 && main2.f(S2), main2.y(T2, e3), e3 && main2.f(O2), e3 && main2.f(j2), z2 = false, main2.B(E2);
      }};
    }
    function Ir(e2) {
      let t3, n2;
      return t3 = new tt({props: {tag: e2[11]}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        5 & n3 && (r2.tag = e3[11]), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Pr(e2) {
      let t3, n2, s2, c2, l2;
      const a3 = [Lr, jr], d2 = [];
      function m2(e3, t4) {
        return e3[0].member ? 0 : 1;
      }
      return n2 = m2(e2), s2 = d2[n2] = a3[n2](e2), {c() {
        t3 = main2.e("div"), s2.c(), main2.b(t3, "class", "leading-relaxed");
      }, m(e3, r2) {
        main2.c(e3, t3, r2), d2[n2].m(t3, null), l2 = true;
      }, p(e3, r2) {
        let i2 = n2;
        n2 = m2(e3), n2 === i2 ? d2[n2].p(e3, r2) : (main2.D(), main2.v(d2[i2], 1, 1, () => {
          d2[i2] = null;
        }), main2.x(), s2 = d2[n2], s2 ? s2.p(e3, r2) : (s2 = d2[n2] = a3[n2](e3), s2.c()), main2.p(s2, 1), s2.m(t3, null));
      }, i(e3) {
        l2 || (main2.p(s2), c2 || main2.j(() => {
          c2 = main2.X(t3, a, {duration: 500}), c2.start();
        }), l2 = true);
      }, o(e3) {
        main2.v(s2), l2 = false;
      }, d(e3) {
        e3 && main2.f(t3), d2[n2].d();
      }};
    }
    function Br(e2) {
      let t3, s2, c2, l2 = e2[0], a3 = Pr(e2);
      return {c() {
        t3 = main2.e("div"), a3.c(), main2.b(t3, "id", s2 = "MailCard-" + e2[1]), main2.h(t3, "width", "264px"), main2.h(t3, "height", "156px"), main2.b(t3, "class", "m-3 p-2\r\nrelative overflow-y-auto\r\nbg-white shadow-md rounded-md");
      }, m(e3, n2) {
        main2.c(e3, t3, n2), a3.m(t3, null), c2 = true;
      }, p(e3, [r2]) {
        1 & r2 && main2.s(l2, l2 = e3[0]) ? (main2.D(), main2.v(a3, 1, 1, main2.n), main2.x(), a3 = Pr(e3), a3.c(), main2.p(a3), a3.m(t3, null)) : a3.p(e3, r2), (!c2 || 2 & r2 && s2 !== (s2 = "MailCard-" + e3[1])) && main2.b(t3, "id", s2);
      }, i(e3) {
        c2 || (main2.p(a3), c2 = true);
      }, o(e3) {
        main2.v(a3), c2 = false;
      }, d(e3) {
        e3 && main2.f(t3), a3.d(e3);
      }};
    }
    function zr(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2;
      main2.g(e2, ue, (e3) => n2(4, i2 = e3)), main2.g(e2, ae, (e3) => n2(5, o2 = e3)), main2.g(e2, $e, (e3) => n2(6, c2 = e3)), main2.g(e2, be, (e3) => n2(7, l2 = e3)), main2.g(e2, Me, (e3) => n2(8, a3 = e3)), main2.g(e2, main2.U, (e3) => n2(9, u2 = e3)), main2.g(e2, main2.V, (e3) => n2(10, d2 = e3));
      let {pm: f2} = t3, {index: h2} = t3;
      return e2.$$set = (e3) => {
        "pm" in e3 && n2(0, f2 = e3.pm), "index" in e3 && n2(1, h2 = e3.index);
      }, e2.$$.update = () => {
        48 & e2.$$.dirty && n2(2, r2 = (e3) => i2.has(e3.id) ? Array.from(i2.get(e3.id)).map((e4) => o2.get(e4.value)) : []), 1985 & e2.$$.dirty && n2(3, s2 = () => {
          f2 && (main2.W($e, c2 = f2, c2), main2.W(be, l2 = a3 || false, l2), u2("./", Object.assign(Object.assign({}, d2), {showList: l2, now_pm: c2.id})));
        });
      }, [f2, h2, r2, s2, i2, o2, c2, l2, a3, u2, d2];
    }
    class Er extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, zr, Br, main2.s, {pm: 0, index: 1});
      }
    }
    function Ar(e2, t3, n2) {
      const r2 = e2.slice();
      return r2[1] = t3[n2], r2[3] = n2, r2;
    }
    function Nr(e2) {
      let t3, n2;
      return t3 = new Er({props: {pm: e2[1], index: e2[3]}}), {c() {
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
    function Wr(e2) {
      let t3, n2, s2 = e2[0], c2 = [];
      for (let t4 = 0; t4 < s2.length; t4 += 1)
        c2[t4] = Nr(Ar(e2, s2, t4));
      const l2 = (e3) => main2.v(c2[e3], 1, 1, () => {
        c2[e3] = null;
      });
      return {c() {
        t3 = main2.e("div");
        for (let e3 = 0; e3 < c2.length; e3 += 1)
          c2[e3].c();
        main2.b(t3, "id", "MailCardView"), main2.b(t3, "class", "mb-3 flex flex-wrap");
      }, m(e3, r2) {
        main2.c(e3, t3, r2);
        for (let e4 = 0; e4 < c2.length; e4 += 1)
          c2[e4].m(t3, null);
        n2 = true;
      }, p(e3, [n3]) {
        if (1 & n3) {
          let r2;
          for (s2 = e3[0], r2 = 0; r2 < s2.length; r2 += 1) {
            const i2 = Ar(e3, s2, r2);
            c2[r2] ? (c2[r2].p(i2, n3), main2.p(c2[r2], 1)) : (c2[r2] = Nr(i2), c2[r2].c(), main2.p(c2[r2], 1), c2[r2].m(t3, null));
          }
          for (main2.D(), r2 = s2.length; r2 < c2.length; r2 += 1)
            l2(r2);
          main2.x();
        }
      }, i(e3) {
        if (!n2) {
          for (let e4 = 0; e4 < s2.length; e4 += 1)
            main2.p(c2[e4]);
          n2 = true;
        }
      }, o(e3) {
        c2 = c2.filter(Boolean);
        for (let e4 = 0; e4 < c2.length; e4 += 1)
          main2.v(c2[e4]);
        n2 = false;
      }, d(e3) {
        e3 && main2.f(t3), main2.y(c2, e3);
      }};
    }
    function Tr(e2, t3, n2) {
      let {mail_list: r2} = t3;
      return e2.$$set = (e3) => {
        "mail_list" in e3 && n2(0, r2 = e3.mail_list);
      }, [r2];
    }
    class Dr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Tr, Wr, main2.s, {mail_list: 0});
      }
    }
    function Rr(e2) {
      let t3, n2, a3, u2, d2, f2, h2, p2 = e2[2] ? "on" : "off";
      return {c() {
        t3 = main2.e("label"), n2 = main2.t("\uB9AC\uC2A4\uD2B8\uBDF0 "), a3 = main2.t(p2), u2 = main2.a(), d2 = main2.e("input"), main2.b(d2, "id", "isListViewInput"), main2.b(d2, "type", "checkbox"), main2.b(t3, "class", "p-1"), main2.b(t3, "for", "isListViewInput");
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), main2.d(t3, a3), main2.d(t3, u2), main2.d(t3, d2), d2.checked = e2[2], f2 || (h2 = main2.A(d2, "change", e2[18]), f2 = true);
      }, p(e3, t4) {
        4 & t4 && p2 !== (p2 = e3[2] ? "on" : "off") && main2.o(a3, p2), 4 & t4 && (d2.checked = e3[2]);
      }, i: main2.n, o: main2.n, d(e3) {
        e3 && main2.f(t3), f2 = false, h2();
      }};
    }
    function Fr(e2) {
      let t3, n2, r2, i2;
      t3 = new qt({});
      let c2 = e2[12].value && Vr();
      return {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), c2 && c2.c(), r2 = main2.G();
      }, m(e3, s2) {
        main2.r(t3, e3, s2), main2.c(e3, n2, s2), c2 && c2.m(e3, s2), main2.c(e3, r2, s2), i2 = true;
      }, p(e3, t4) {
        e3[12].value ? c2 ? 4096 & t4 && main2.p(c2, 1) : (c2 = Vr(), c2.c(), main2.p(c2, 1), c2.m(r2.parentNode, r2)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x());
      }, i(e3) {
        i2 || (main2.p(t3.$$.fragment, e3), main2.p(c2), i2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(c2), i2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), c2 && c2.d(e3), e3 && main2.f(r2);
      }};
    }
    function Vr(e2) {
      let t3, n2;
      return t3 = new Wt({}), {c() {
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
    function qr(e2) {
      let t3, n2;
      return t3 = new Sr({props: {mail_list: e2[8], isTyping: e2[7]}}), {c() {
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
    function Jr(e2) {
      let t3, n2;
      return t3 = new Dr({props: {mail_list: e2[8]}}), {c() {
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
    function Hr(e2) {
      let t3, n2, l2, a3, d2, w2, b2, x2, M2, k2, _2, C2, S2, O2, j2, L2, P2, B2, z2;
      const E2 = [Fr, Rr], A2 = [];
      function N2(e3, t4) {
        return e3[3] ? 0 : 1;
      }
      l2 = N2(e2), a3 = A2[l2] = E2[l2](e2);
      b2 = new Et({props: {hidden: !(e2[3] && e2[5])}});
      const W2 = [Jr, qr], T2 = [];
      function D2(e3, t4) {
        return !e3[2] && e3[11] ? 0 : 1;
      }
      return M2 = D2(e2), k2 = T2[M2] = W2[M2](e2), C2 = new fn({props: {maxPage: e2[6]}}), L2 = new ur({props: {search_length: e2[4].length}}), {c() {
        t3 = main2.e("section"), n2 = main2.e("div"), a3.c(), d2 = main2.a(), w2 = main2.a(), main2.q(b2.$$.fragment), x2 = main2.a(), k2.c(), _2 = main2.a(), main2.q(C2.$$.fragment), S2 = main2.a(), O2 = main2.e("br"), j2 = main2.a(), main2.q(L2.$$.fragment), main2.b(n2, "class", "mb-1 flex flex-row"), main2.b(t3, "id", "MailListSection"), main2.h(t3, "min-height", e2[9] + "px"), main2.b(t3, "class", P2 = "h-full " + (e2[11] ? "w-8/12" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y"), main2.j(() => e2[19].call(t3)), main2.Y(t3, "hidden", e2[3] && !e2[10]);
      }, m(r2, s2) {
        main2.c(r2, t3, s2), main2.d(t3, n2), A2[l2].m(n2, null), main2.d(t3, d2), main2.d(t3, w2), main2.r(b2, t3, null), main2.d(t3, x2), T2[M2].m(t3, null), main2.d(t3, _2), main2.r(C2, t3, null), main2.d(t3, S2), main2.d(t3, O2), main2.d(t3, j2), main2.r(L2, t3, null), B2 = main2.z(t3, e2[19].bind(t3)), z2 = true;
      }, p(e3, [r2]) {
        let s2 = l2;
        l2 = N2(e3), l2 === s2 ? A2[l2].p(e3, r2) : (main2.D(), main2.v(A2[s2], 1, 1, () => {
          A2[s2] = null;
        }), main2.x(), a3 = A2[l2], a3 ? a3.p(e3, r2) : (a3 = A2[l2] = E2[l2](e3), a3.c()), main2.p(a3, 1), a3.m(n2, null));
        const o2 = {};
        40 & r2 && (o2.hidden = !(e3[3] && e3[5])), b2.$set(o2);
        let c2 = M2;
        M2 = D2(e3), M2 === c2 ? T2[M2].p(e3, r2) : (main2.D(), main2.v(T2[c2], 1, 1, () => {
          T2[c2] = null;
        }), main2.x(), k2 = T2[M2], k2 ? k2.p(e3, r2) : (k2 = T2[M2] = W2[M2](e3), k2.c()), main2.p(k2, 1), k2.m(t3, _2));
        const d3 = {};
        64 & r2 && (d3.maxPage = e3[6]), C2.$set(d3);
        const g2 = {};
        16 & r2 && (g2.search_length = e3[4].length), L2.$set(g2), (!z2 || 512 & r2) && main2.h(t3, "min-height", e3[9] + "px"), (!z2 || 2048 & r2 && P2 !== (P2 = "h-full " + (e3[11] ? "w-8/12" : "w-full") + "\r\nrelative pl-4 pr-4 pt-2 svelte-1dlnf5y")) && main2.b(t3, "class", P2), 3080 & r2 && main2.Y(t3, "hidden", e3[3] && !e3[10]);
      }, i(e3) {
        z2 || (main2.p(a3), main2.p(false), main2.p(b2.$$.fragment, e3), main2.p(k2), main2.p(C2.$$.fragment, e3), main2.p(L2.$$.fragment, e3), z2 = true);
      }, o(e3) {
        main2.v(a3), main2.v(false), main2.v(b2.$$.fragment, e3), main2.v(k2), main2.v(C2.$$.fragment, e3), main2.v(L2.$$.fragment, e3), z2 = false;
      }, d(e3) {
        e3 && main2.f(t3), A2[l2].d(), main2.w(b2), T2[M2].d(), main2.w(C2), main2.w(L2), B2();
      }};
    }
    function Kr(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2, h2, p2, g2, m2, $2, y2, v2, w2, b2, x2, M2, k2;
      main2.g(e2, ke, (e3) => n2(3, d2 = e3)), main2.g(e2, ir, (e3) => n2(4, f2 = e3)), main2.g(e2, cr, (e3) => n2(16, h2 = e3)), main2.g(e2, tn, (e3) => n2(17, p2 = e3)), main2.g(e2, we, (e3) => n2(25, g2 = e3)), main2.g(e2, main2._, (e3) => n2(26, m2 = e3)), main2.g(e2, main2.V, (e3) => n2(27, $2 = e3)), main2.g(e2, xe, (e3) => n2(5, y2 = e3)), main2.g(e2, be, (e3) => n2(10, v2 = e3)), main2.g(e2, Me, (e3) => n2(11, w2 = e3)), main2.g(e2, pe, (e3) => n2(12, b2 = e3));
      let _2, C2 = 1, S2 = 3;
      main2.l(() => {
        const e3 = l2[0];
        if (S2 != i2 || C2 == g2 && k2 == tn || (_2 = e3), S2 != i2 && _2) {
          let e4 = 0;
          return f2.forEach((e5, t4) => {
          }), main2.W(we, g2 = Math.ceil((e4 + 1) / i2), g2), C2 = g2, S2 = i2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: g2})), null;
        }
        if (a3 > new Date())
          return main2.W(tn, p2 = nn(new Date()), p2), alert("\uBBF8\uB798\uB85C \uAC08 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."), m2("./", Object.assign(Object.assign({}, $2), {dateString: p2})), null;
        if (l2.length == 0 || !e3 && $2.nowPage != 1)
          return m2("./", Object.assign(Object.assign({}, $2), {nowPage: 1})), null;
        if (C2 != g2) {
          C2 = g2;
          const t4 = sn(e3.time);
          return main2.W(tn, p2 = t4, p2), k2 = t4, m2("./", Object.assign(Object.assign({}, $2), {nowPage: g2, dateString: t4})), null;
        }
        if (k2 !== p2) {
          let e4 = false;
          if (f2.forEach((t4, n3) => {
            if (e4 || !t4)
              return null;
            const r3 = sn(t4.time);
            rn(r3) <= a3 && (main2.W(we, g2 = Math.ceil((n3 + 1) / i2), g2), main2.W(tn, p2 = r3, p2), e4 = true);
          }), e4 == 0 && f2.length > 0) {
            main2.W(we, g2 = o2, g2);
            const e5 = f2[f2.length - 1];
            main2.W(tn, p2 = sn(e5.time), p2);
          }
          return k2 = p2, m2("./", Object.assign(Object.assign({}, $2), {nowPage: g2, dateString: p2})), null;
        }
      });
      let O2 = false;
      return e2.$$.update = () => {
        1 & e2.$$.dirty && n2(13, r2 = Math.floor((x2 - 33) / 288)), 2 & e2.$$.dirty && n2(14, s2 = Math.floor((M2 - 220) / 164)), 24590 & e2.$$.dirty && n2(15, i2 = d2 ? 5 : O2 ? Math.floor((M2 - 200) / 62) : r2 * s2), 32784 & e2.$$.dirty && n2(6, o2 = Math.ceil(f2.length / i2)), 2 & e2.$$.dirty && n2(7, c2 = M2 < 400), 98320 & e2.$$.dirty && n2(8, l2 = f2 ? h2(i2) : []), 131072 & e2.$$.dirty && (a3 = rn(p2)), 44 & e2.$$.dirty && n2(9, u2 = O2 || d2 ? y2 ? 520 : 360 : 490);
      }, [x2, M2, O2, d2, f2, y2, o2, c2, l2, u2, v2, w2, b2, r2, s2, i2, h2, p2, function() {
        O2 = this.checked, n2(2, O2);
      }, function() {
        x2 = this.clientWidth, M2 = this.clientHeight, n2(0, x2), n2(1, M2);
      }];
    }
    class Yr extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Kr, Hr, main2.s, {});
      }
    }
    function Zr(e2) {
      let t3, n2;
      return t3 = new se({props: {show: Xr, $$slots: {default: [Ur]}, $$scope: {ctx: e2}}}), {c() {
        main2.q(t3.$$.fragment);
      }, m(e3, r2) {
        main2.r(t3, e3, r2), n2 = true;
      }, p(e3, n3) {
        const r2 = {};
        262144 & n3 && (r2.$$scope = {dirty: n3, ctx: e3}), t3.$set(r2);
      }, i(e3) {
        n2 || (main2.p(t3.$$.fragment, e3), n2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), n2 = false;
      }, d(e3) {
        main2.w(t3, e3);
      }};
    }
    function Ur(e2) {
      let t3, n2, r2, i2;
      return t3 = new Gt({}), r2 = new Yr({}), {c() {
        main2.q(t3.$$.fragment), n2 = main2.a(), main2.q(r2.$$.fragment);
      }, m(e3, s2) {
        main2.r(t3, e3, s2), main2.c(e3, n2, s2), main2.r(r2, e3, s2), i2 = true;
      }, i(e3) {
        i2 || (main2.p(t3.$$.fragment, e3), main2.p(r2.$$.fragment, e3), i2 = true);
      }, o(e3) {
        main2.v(t3.$$.fragment, e3), main2.v(r2.$$.fragment, e3), i2 = false;
      }, d(e3) {
        main2.w(t3, e3), e3 && main2.f(n2), main2.w(r2, e3);
      }};
    }
    function Qr(e2) {
      let t3, n2, s2, c2 = e2[1] && Zr(e2);
      return {c() {
        t3 = main2.e("div"), c2 && c2.c(), main2.b(t3, "class", "flex w-screen h-screen relative"), main2.j(() => e2[4].call(t3));
      }, m(r2, i2) {
        main2.c(r2, t3, i2), c2 && c2.m(t3, null), n2 = main2.z(t3, e2[4].bind(t3)), s2 = true;
      }, p(e3, [n3]) {
        e3[1] ? c2 ? (c2.p(e3, n3), 2 & n3 && main2.p(c2, 1)) : (c2 = Zr(e3), c2.c(), main2.p(c2, 1), c2.m(t3, null)) : c2 && (main2.D(), main2.v(c2, 1, 1, () => {
          c2 = null;
        }), main2.x());
      }, i(e3) {
        s2 || (main2.p(c2), s2 = true);
      }, o(e3) {
        main2.v(c2), s2 = false;
      }, d(e3) {
        e3 && main2.f(t3), c2 && c2.d(), n2();
      }};
    }
    let Xr = null;
    function Gr(e2, t3, n2) {
      let r2, s2, i2, o2, c2, l2, a3, u2, d2, f2;
      main2.g(e2, ge, (e3) => n2(2, s2 = e3)), main2.g(e2, ue, (e3) => n2(3, i2 = e3)), main2.g(e2, Ee, (e3) => n2(7, o2 = e3)), main2.g(e2, me, (e3) => n2(8, c2 = e3)), main2.g(e2, $e, (e3) => n2(9, l2 = e3)), main2.g(e2, ae, (e3) => n2(10, a3 = e3)), main2.g(e2, be, (e3) => n2(11, u2 = e3)), main2.g(e2, main2.V, (e3) => n2(12, d2 = e3)), main2.g(e2, main2.U, (e3) => n2(13, f2 = e3));
      var h2 = this && this.__awaiter || function(e3, t4, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(e4) {
            try {
              l3(r3.next(e4));
            } catch (e5) {
              i3(e5);
            }
          }
          function c3(e4) {
            try {
              l3(r3.throw(e4));
            } catch (e5) {
              i3(e5);
            }
          }
          function l3(e4) {
            var t5;
            e4.done ? s3(e4.value) : (t5 = e4.value, t5 instanceof n3 ? t5 : new n3(function(e5) {
              e5(t5);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(e3, t4 || [])).next());
        });
      };
      main2.$.title = "IZ*ONE Private Mail Viewer";
      let p2 = false;
      const g2 = (e3, t4) => {
        try {
          console.log(`${t4}\uCC28 \uC2DC\uB3C4`), console.log(e3.slice(0, 10));
          const n3 = [];
          for (let t5 = 0; t5 < e3.length; t5 += 2)
            n3.push(e3[t5]);
          return JSON.parse(n3.join(""));
        } catch (n3) {
          if (t4 < 4)
            return e3 = e3.slice(1), g2(e3, t4 + 1);
          throw n3;
        }
      }, m2 = (e3) => h2(void 0, void 0, void 0, function* () {
        const t4 = yield fetch(e3), n3 = yield t4.text();
        try {
          return JSON.parse(n3);
        } catch (e4) {
          if (n3.slice(0, 9) == "<!DOCTYPE")
            throw e4;
          if (e4 instanceof SyntaxError)
            return g2(n3, 0);
          console.error(e4);
        }
      });
      let $2;
      return function() {
        return h2(this, void 0, void 0, function* () {
          yield Promise.all([m2("./pm_list.json"), m2("./member_name.json"), m2("./mail_to_num_dict.json"), m2("./mail_body_dict.json").catch((e3) => (console.log("mail_body_dict\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."), null))]).then((e3) => {
            const t4 = e3[0];
            main2.W(Ee, o2 = e3[1], o2), console.log(o2);
            const n3 = e3[2], u3 = e3[3];
            main2.W(me, c2 = t4.map((e4, t5) => {
              e4.id == "m20731" && main2.W($e, l2 = e4, l2), e4.nick = e4.member;
              const r3 = o2[e4.nick];
              if (e4.member = Ae[r3], !e4.member && n3.has(e4.id)) {
                const t6 = n3[e4.id];
                main2.W(Ee, o2[e4.nick] = t6, o2), e4.member = Ae[t6], console.log("member_name.json \uC5D0 \uBA64\uBC84 \uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."), console.log(e4.nick, e4.member);
              }
              return u3 && (e4.body = u3[e4.id]), e4;
            }), c2);
            let d3 = 0;
            const f3 = a3.get("\uD63C\uB2E4 \uD788\uD1A0\uBBF8");
            if (s2.has(f3) && (c2.forEach((e4) => {
              const t5 = a3.get(e4.member), n4 = s2.get(t5);
              n4 ? n4.add(e4.id) : (console.log(e4.id, e4.nick), d3 += 1);
            }), ge.set(s2)), console.log("\uB204\uB77D", d3), !a3.has("\uC0DD\uC77C")) {
              const e4 = {value: "\uC0DD\uC77C", color: "LightPink"};
              a3.set(e4.value, e4), ae.set(a3), s2.set(e4, new Set()), c2.map((t5) => {
                t5.id.slice(0, 1) == "b" && r2(e4, t5);
              }), ge.set(s2), ue.set(i2);
            }
          });
        });
      }().then(() => {
        n2(1, p2 = true);
      }), main2.V.subscribe((e3) => {
        const t4 = e3.showList == "true";
        t4 != u2 && main2.W(be, u2 = t4, u2);
      }), d2.dateString || f2("./", {dateString: en, nowPage: 1, tag: "", search: "", showList: true, now_pm: "m20731"}), e2.$$.update = () => {
        12 & e2.$$.dirty && (r2 = (e3, t4) => {
          s2.get(e3).add(t4.id), i2.has(t4.id) ? i2.get(t4.id).add(e3) : i2.set(t4.id, new Set([e3]));
        }), 1 & e2.$$.dirty && Me.set($2 > 700);
      }, [$2, p2, s2, i2, function() {
        $2 = this.clientWidth, n2(0, $2);
      }];
    }
    class index_193e75b2_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, Gr, Qr, main2.s, {});
      }
    }
  });

  // dist/build/_layout-0236f6f3.js
  var require_layout_0236f6f3 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_0236f6f3_default
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
    class layout_0236f6f3_default extends main2.S {
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
      U: () => ge,
      V: () => he,
      W: () => g,
      X: () => xt,
      Y: () => U,
      Z: () => T,
      _: () => ye,
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
    const sn = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_236e6746())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery/index", id: "_gallery_index", component: () => Promise.resolve().then(() => __toModule(require_index_2d57f1cd())).then((t3) => t3.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/gallery"}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_193e75b2())).then((t3) => t3.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_0236f6f3())).then((t3) => t3.default)};
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

  // dist/build/index-7db3551b.js
  const main = __toModule(require_main());
  function a(a2, {delay: o = 0, duration: e = 400, easing: i = main.E} = {}) {
    const n = +getComputedStyle(a2).opacity;
    return {delay: o, duration: e, easing: i, css: (t2) => "opacity: " + t2 * n};
  }
  require_main();
})();
