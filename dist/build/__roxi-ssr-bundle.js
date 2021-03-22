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

  // dist/build/_fallback-6e92d963.js
  var require_fallback_6e92d963 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_6e92d963_default
    });
    const main = __toModule(require_main());
    function v(s2) {
      let a2, e2, d2, f2, v2, g2, h, m;
      return {c() {
        a2 = main.e("div"), e2 = main.e("div"), e2.textContent = "404", d2 = main.a(), f2 = main.e("div"), v2 = main.t("Page not found. \n  \n  "), g2 = main.e("a"), h = main.t("Go back"), main.b(e2, "class", "huge svelte-zz1yq2"), main.b(g2, "href", m = s2[0]("../")), main.b(f2, "class", "big"), main.b(a2, "class", "e404 svelte-zz1yq2");
      }, m(s3, t2) {
        main.c(s3, a2, t2), main.d(a2, e2), main.d(a2, d2), main.d(a2, f2), main.d(f2, v2), main.d(f2, g2), main.d(g2, h);
      }, p(s3, [a3]) {
        1 & a3 && m !== (m = s3[0]("../")) && main.b(g2, "href", m);
      }, i: main.n, o: main.n, d(s3) {
        s3 && main.f(a2);
      }};
    }
    function g(s2, a2, e2) {
      let t2;
      return main.g(s2, main.u, (s3) => e2(0, t2 = s3)), [t2];
    }
    class fallback_6e92d963_default extends main.S {
      constructor(s2) {
        super(), main.i(this, s2, g, v, main.s, {});
      }
    }
  });

  // dist/build/index-8b4a4faa.js
  var require_index_8b4a4faa = __commonJS((exports) => {
    __export(exports, {
      default: () => index_8b4a4faa_default
    });
    const main = __toModule(require_main());
    const q = {value: null, color: null};
    const Z = {value: "\u{1F496}", color: "#fff"};
    const Q = [{value: "\uAD8C\uC740\uBE44", color: "#bbb0dc"}, {value: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", color: "#f1d2e7"}, {value: "\uAC15\uD61C\uC6D0", color: "#db706c"}, {value: "\uCD5C\uC608\uB098", color: "#fcf695"}, {value: "\uC774\uCC44\uC5F0", color: "#a7e0e1"}, {value: "\uAE40\uCC44\uC6D0", color: "#cee5d5"}, {value: "\uC57C\uBD80\uD0A4 \uB098\uCF54", color: "#b7d3e9"}, {value: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", color: "#f1c3aa"}, {value: "\uAE40\uBBFC\uC8FC", color: "#fff"}, {value: "\uC870\uC720\uB9AC", color: "#f3aa51"}, {value: "\uC548\uC720\uC9C4", color: "#567ace"}, {value: "\uC7A5\uC6D0\uC601", color: "#d9598c"}, {value: "\uC6B4\uC601\uD300", color: "gray"}];
    let U;
    let Y = main.w(function() {
      let t2 = Q.reduce((t3, e3) => (t3.set(e3.value, e3), t3), new Map([["\u{1F496}", Z]]));
      const e2 = localStorage.getItem("all_tag_dict");
      return e2 && (console.log("all tag backup loaded"), t2 = [...t2].reduce((t3, e3) => (t3.set(e3[0], e3[1]), t3), new Map(JSON.parse(e2)))), t2;
    }());
    Y.subscribe((t2) => {
      var e2;
      localStorage.setItem("all_tag_dict", (e2 = t2, JSON.stringify([...e2])));
    }), Y.subscribe((t2) => {
      U = (e2) => {
        const n2 = e2.map((e3) => [e3[0], new Set(e3[1].map((e4) => t2.get(e4)))]);
        return new Map(n2);
      };
    });
    let G = main.w((() => {
      const t2 = localStorage.getItem("mail_to_tag_dict");
      let e2 = new Map([["m0", new Set([Z])]]);
      if (t2) {
        const n2 = JSON.parse(t2);
        e2 = U(n2);
      }
      return e2;
    })());
    function X(t2) {
      return [...t2].map((t3) => [t3[0], [...t3[1]].map((t4) => t4.value)]);
    }
    G.subscribe((t2) => {
      if (!t2)
        return null;
      [...t2].forEach((t3) => {
        t3[1].size == 0 && G.update((e3) => (e3.delete(t3[0]), e3));
      });
      const e2 = X(t2);
      localStorage.setItem("mail_to_tag_dict", JSON.stringify(e2));
    });
    let tt;
    let et = main.w("");
    let nt = main.w(Math.floor(12 * Math.random()));
    let st = main.w({color: null, value: null});
    Y.subscribe((t2) => {
      tt = (e2) => new Map(e2.map((e3) => [t2.get(e3[0]), new Set(e3[1])]));
    });
    let rt = main.w((() => {
      let t2 = Q.reduce((t3, e3) => (t3.set(e3, new Set()), t3), new Map([[Z, new Set()]]));
      const e2 = localStorage.getItem("tag_to_mail_dict");
      if (e2) {
        const n2 = JSON.parse(e2);
        t2 = [...tt(n2)].reduce((t3, e3) => (t3.set(e3[0], e3[1]), t3), t2);
      }
      return t2;
    })());
    function it(t2) {
      return [...t2].map((t3) => [t3[0].value, [...t3[1]]]);
    }
    rt.subscribe((t2) => {
      if ([...t2].forEach(([t3, e3]) => {
        if (e3.size == 0 && t3.value != "\u{1F496}" && !Q.includes(t3)) {
          const e4 = t3.value;
          rt.update((e5) => (e5.delete(t3), e5)), Y.update((t4) => (t4.delete(e4), fetch(`/all-tag-dict/tag/${e4}`, {method: "DELETE"}).then((t5) => {
            console.log("\uC11C\uBC84\uC5D0\uC11C \uD0DC\uADF8 \uC0AD\uC81C \uC644\uB8CC");
          }), t4)), st.update((e5) => e5 == t3 ? {color: null, value: null} : e5);
        }
      }), !t2)
        return null;
      const e2 = it(t2);
      localStorage.setItem("tag_to_mail_dict", JSON.stringify(e2));
    });
    let ot = main.w([{id: "", member: "", time: "", subject: "", preview: "", n: 1}]);
    let ct = main.w({id: "m20731", member: "\uAD11\uBC30", time: "2021/03/09 19:23", subject: "\uC0AC\uD0D5", preview: "\uC704\uC988\uC6D0 \uC0AC\uD0D5 \uD478\uB529 \uB9DB \uC788\uB294\uAC70 \uC54C\uC558\uC5B4?? \uB9DB\uC788\uC5B4\uBCF4\uC5EC\uC11C \uC0AC\uC11C \uC5B8\uC81C\uBA39\uC744\uC9C0 \uACE0\uBBFC\uC911\uC774\uC57C ."});
    let lt = main.w("");
    let at = main.h(lt, (t2) => "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + t2.replace(/\&nbsp;<\/div>/g, "\n").replace(/<\/div>/g, "\n").replace(/&nbsp;/g, "").replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "").replace(/\n\n/g, "\n").replace(/\n/g, "%0A"));
    let ut = main.w(1);
    let dt = main.w(true);
    let ht = main.w(true);
    let ft = main.h(ht, (t2) => !t2);
    function gt(t2) {
      let e2, n2 = t2[0].value + "";
      return {c() {
        e2 = main.t(n2);
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p(t3, s2) {
        1 & s2 && n2 !== (n2 = t3[0].value + "") && main.r(e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function pt(t2) {
      let e2, n2, s2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", n2 = (t2[2] == "xs" ? "w-4 h-4" : "w-5 h-5") + " float-none"), e2.src !== (s2 = "./img/yellow-star.png") && main.b(e2, "src", "./img/yellow-star.png"), main.b(e2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p(t3, s3) {
        4 & s3 && n2 !== (n2 = (t3[2] == "xs" ? "w-4 h-4" : "w-5 h-5") + " float-none") && main.b(e2, "class", n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function mt(t2) {
      let e2, n2, s2, r2, g2;
      return {c() {
        e2 = main.e("span"), n2 = main.t("X"), main.j(e2, "background-color", t2[0].color), main.b(e2, "class", s2 = "\r\n" + (t2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r\r\n-ml-2 mt-1 mb-1 p-1\r\ntext-" + t2[2]);
      }, m(s3, i2) {
        main.c(s3, e2, i2), main.d(e2, n2), r2 || (g2 = main.l(e2, "click", function() {
          main.k(t2[3] ? t2[3] : t2[5]) && (t2[3] ? t2[3] : t2[5]).apply(this, arguments);
        }), r2 = true);
      }, p(n3, r3) {
        t2 = n3, 1 & r3 && main.j(e2, "background-color", t2[0].color), 5 & r3 && s2 !== (s2 = "\r\n" + (t2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r\r\n-ml-2 mt-1 mb-1 p-1\r\ntext-" + t2[2]) && main.b(e2, "class", s2);
      }, d(t3) {
        t3 && main.f(e2), r2 = false, g2();
      }};
    }
    function $t(t2) {
      let e2, n2, s2, r2, o2, u2;
      function $2(t3, e3) {
        return t3[0].value == "\u{1F496}" ? pt : gt;
      }
      let y2 = $2(t2), w2 = y2(t2), x2 = (t2[3] || t2[1] && t2[0].value != "\uC0DD\uC77C") && mt(t2);
      return {c() {
        e2 = main.e("span"), w2.c(), s2 = main.a(), x2 && x2.c(), r2 = main.m(), main.j(e2, "background-color", t2[0].color), main.b(e2, "class", n2 = "\r\n" + (t2[2] == "" ? "p-0.5" : t2[0].color == "#fff" ? "border-2 p-0.5" : "p-1") + "\r\nm-1\r\n" + (t2[1] && t2[0].value != "\uC0DD\uC77C" ? "rounded-l border-r-0 pr-2" : "rounded") + "\r\ntext-" + t2[2] + " text-" + t2[4]);
      }, m(n3, i2) {
        main.c(n3, e2, i2), w2.m(e2, null), main.c(n3, s2, i2), x2 && x2.m(n3, i2), main.c(n3, r2, i2), o2 || (u2 = main.l(e2, "click", function() {
          main.k(t2[3] ? t2[3] : t2[6](t2[0])) && (t2[3] ? t2[3] : t2[6](t2[0])).apply(this, arguments);
        }), o2 = true);
      }, p(s3, [i2]) {
        y2 === (y2 = $2(t2 = s3)) && w2 ? w2.p(t2, i2) : (w2.d(1), w2 = y2(t2), w2 && (w2.c(), w2.m(e2, null))), 1 & i2 && main.j(e2, "background-color", t2[0].color), 23 & i2 && n2 !== (n2 = "\r\n" + (t2[2] == "" ? "p-0.5" : t2[0].color == "#fff" ? "border-2 p-0.5" : "p-1") + "\r\nm-1\r\n" + (t2[1] && t2[0].value != "\uC0DD\uC77C" ? "rounded-l border-r-0 pr-2" : "rounded") + "\r\ntext-" + t2[2] + " text-" + t2[4]) && main.b(e2, "class", n2), t2[3] || t2[1] && t2[0].value != "\uC0DD\uC77C" ? x2 ? x2.p(t2, i2) : (x2 = mt(t2), x2.c(), x2.m(r2.parentNode, r2)) : x2 && (x2.d(1), x2 = null);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), w2.d(), t3 && main.f(s2), x2 && x2.d(t3), t3 && main.f(r2), o2 = false, u2();
      }};
    }
    function yt(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, u2, d2;
      main.g(t2, Y, (t3) => n2(7, i2 = t3)), main.g(t2, ct, (t3) => n2(8, o2 = t3)), main.g(t2, rt, (t3) => n2(9, c2 = t3)), main.g(t2, G, (t3) => n2(10, l2 = t3)), main.g(t2, st, (t3) => n2(11, a2 = t3)), main.g(t2, main.o, (t3) => n2(12, u2 = t3)), main.g(t2, main.p, (t3) => n2(13, d2 = t3));
      var h2 = this && this.__awaiter || function(t3, e3, n3, s3) {
        return new (n3 || (n3 = Promise))(function(r3, i3) {
          function o3(t4) {
            try {
              l3(s3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(s3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? r3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((s3 = s3.apply(t3, e3 || [])).next());
        });
      };
      let {tag: f2} = e2, {canDelete: g2 = false} = e2, {size: p2 = "xs"} = e2, {onRemove: m2 = null} = e2;
      main.p.subscribe((t3) => {
        t3.tag == null && a2 != q && main.q(st, a2 = q, a2), t3.tag && a2.value != t3.tag && main.q(st, a2 = i2.get(t3.tag), a2);
      });
      return t2.$$set = (t3) => {
        "tag" in t3 && n2(0, f2 = t3.tag), "canDelete" in t3 && n2(1, g2 = t3.canDelete), "size" in t3 && n2(2, p2 = t3.size), "onRemove" in t3 && n2(3, m2 = t3.onRemove);
      }, t2.$$.update = () => {
        1 & t2.$$.dirty && n2(4, s2 = f2.value == "\uAC15\uD61C\uC6D0" || f2.value == "\uC7A5\uC6D0\uC601" || f2.value == "\uC548\uC720\uC9C4" || f2.value == "\uC6B4\uC601\uD300" ? "black" : "gray-700"), 1921 & t2.$$.dirty && n2(5, r2 = () => h2(void 0, void 0, void 0, function* () {
          const t3 = i2.get(f2.value);
          yield fetch(`/mail-tag-dict/mail/${o2.id}/tag/${t3.value}`, {method: "DELETE"}), c2.get(t3).delete(o2.id), rt.set(c2), l2.get(o2.id).delete(t3), G.set(l2);
        }));
      }, [f2, g2, p2, m2, s2, r2, (t3) => () => {
        st.set(t3), u2("./", Object.assign(Object.assign({}, d2), {tag: a2.value, nowPage: 1}));
      }, i2, o2, c2, l2];
    }
    class wt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, yt, $t, main.s, {tag: 0, canDelete: 1, size: 2, onRemove: 3});
      }
    }
    function xt(t2) {
      let e2, n2, s2;
      return {c() {
        e2 = main.e("span"), n2 = main.t(t2[0]), main.j(e2, "background-color", "pink"), main.b(e2, "class", s2 = "border-1 m-1 rounded\r\n" + (t2[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t2[1]);
      }, m(t3, s3) {
        main.c(t3, e2, s3), main.d(e2, n2);
      }, p(t3, [r2]) {
        1 & r2 && main.r(n2, t3[0]), 2 & r2 && s2 !== (s2 = "border-1 m-1 rounded\r\n" + (t3[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t3[1]) && main.b(e2, "class", s2);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function bt(t2, e2, n2) {
      let {time: s2} = e2, {size: r2 = "xs"} = e2;
      return t2.$$set = (t3) => {
        "time" in t3 && n2(0, s2 = t3.time), "size" in t3 && n2(1, r2 = t3.size);
      }, [s2, r2];
    }
    class vt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, bt, xt, main.s, {time: 0, size: 1});
      }
    }
    const kt = {0: "#d9598c", 1: "#f1d2e7", 2: "#f3aa51", 3: "#fcf695", 4: "#567ace", 5: "#b7d3e9", 6: "#bbb0dc", 7: "#db706c", 8: "#f1c3aa", 9: "#cee5d5", 10: "#fff", 11: "#a7e0e1", 12: "gray"};
    let Mt = main.w({});
    main.h(Mt, (t2) => Object.keys(t2).reduce((t3, e2) => ({...t3, [Mt[e2]]: e2}), {0: "\uC7A5\uC6D0\uC601"}));
    const _t = {0: "\uC7A5\uC6D0\uC601", 1: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", 2: "\uC870\uC720\uB9AC", 3: "\uCD5C\uC608\uB098", 4: "\uC548\uC720\uC9C4", 5: "\uC57C\uBD80\uD0A4 \uB098\uCF54", 6: "\uAD8C\uC740\uBE44", 7: "\uAC15\uD61C\uC6D0", 8: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", 9: "\uAE40\uCC44\uC6D0", 10: "\uAE40\uBBFC\uC8FC", 11: "\uC774\uCC44\uC5F0", 12: "\uC6B4\uC601\uD300"};
    function Ct(t2) {
      let e2, n2, s2;
      return {c() {
        e2 = main.e("button"), e2.textContent = "\uCD94\uAC00", main.b(e2, "class", "text-xs shadow rounded bg-red-400 p-1 m-1");
      }, m(r2, i2) {
        main.c(r2, e2, i2), n2 || (s2 = main.l(e2, "click", t2[2]), n2 = true);
      }, p: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, s2();
      }};
    }
    function Ot(t2) {
      let e2, n2, s2, r2, o2, c2 = t2[1] && Ct(t2);
      return {c() {
        e2 = main.e("input"), n2 = main.a(), c2 && c2.c(), s2 = main.m(), main.b(e2, "type", "text"), main.b(e2, "class", "\r\nborder-2 border-gray\r\nm-1 p-1\r\nrounded w-16\r\ntext-xs"), main.b(e2, "placeholder", "\uC0C8 \uD0DC\uADF8");
      }, m(i2, l2) {
        main.c(i2, e2, l2), main.v(e2, t2[0]), main.c(i2, n2, l2), c2 && c2.m(i2, l2), main.c(i2, s2, l2), r2 || (o2 = [main.l(e2, "input", t2[5]), main.l(e2, "keypress", t2[3])], r2 = true);
      }, p(t3, [n3]) {
        1 & n3 && e2.value !== t3[0] && main.v(e2, t3[0]), t3[1] ? c2 ? c2.p(t3, n3) : (c2 = Ct(t3), c2.c(), c2.m(s2.parentNode, s2)) : c2 && (c2.d(1), c2 = null);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), c2 && c2.d(t3), t3 && main.f(s2), r2 = false, main.x(o2);
      }};
    }
    function St(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, u2;
      main.g(t2, et, (t3) => n2(0, r2 = t3)), main.g(t2, nt, (t3) => n2(4, i2 = t3)), main.g(t2, Y, (t3) => n2(7, o2 = t3)), main.g(t2, rt, (t3) => n2(8, c2 = t3)), main.g(t2, ct, (t3) => n2(9, l2 = t3)), main.g(t2, G, (t3) => n2(10, a2 = t3)), main.g(t2, ft, (t3) => n2(1, u2 = t3));
      var d2 = this && this.__awaiter || function(t3, e3, n3, s3) {
        return new (n3 || (n3 = Promise))(function(r3, i3) {
          function o3(t4) {
            try {
              l3(s3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(s3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? r3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((s3 = s3.apply(t3, e3 || [])).next());
        });
      };
      const h2 = () => d2(void 0, void 0, void 0, function* () {
        let t3 = s2;
        o2.has(r2) ? (t3 = o2.get(r2), c2.get(t3).add(l2.id)) : (c2.set(s2, new Set([l2.id])), o2.set(r2, s2), Y.set(o2), yield fetch("/all-tag-dict/tag", {method: "POST", body: JSON.stringify(s2)})), rt.set(c2), a2.has(l2.id) ? a2.get(l2.id).add(t3) : a2.set(l2.id, new Set([t3])), G.set(a2), fetch(`/mail-tag-dict/mail/${l2.id}/tag/${s2.value}`, {method: "POST"}).then((t4) => {
          console.log("\uC11C\uBC84\uC5D0 \uD0DC\uADF8 \uCD94\uAC00 \uC644\uB8CC.");
        }), main.q(et, r2 = "", r2), main.q(nt, i2 = (i2 + 1) % 12, i2);
      });
      return t2.$$.update = () => {
        17 & t2.$$.dirty && (s2 = {value: r2, color: kt[i2]});
      }, [r2, u2, h2, (t3) => {
        t3.code === "Enter" && h2();
      }, i2, function() {
        r2 = this.value, et.set(r2);
      }];
    }
    class jt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, St, Ot, main.s, {});
      }
    }
    function Lt(t2) {
      let e2, n2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", Pt), e2.src !== (n2 = "./img/empty-star.png") && main.b(e2, "src", "./img/empty-star.png"), main.b(e2, "alt", "\uC88B\uC544\uC694 \uD558\uC2E4\uB798\uC694?");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function It(t2) {
      let e2, n2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", Pt), e2.src !== (n2 = "./img/yellow-star.png") && main.b(e2, "src", "./img/yellow-star.png"), main.b(e2, "alt", "\uC88B\uC544\uC694 \uD588\uC5B4\uC694");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Et(t2) {
      let e2, n2, s2, r2, o2, c2;
      function u2(t3, e3) {
        return (n2 == null || 3 & e3) && (n2 = !!t3[1](t3[0])), n2 ? It : Lt;
      }
      let p2 = u2(t2, -1), $2 = p2(t2);
      return {c() {
        e2 = main.e("label"), $2.c(), s2 = main.a(), r2 = main.e("input"), main.b(e2, "for", "favorite"), main.b(r2, "type", "checkbox"), main.b(r2, "class", "hidden"), main.b(r2, "id", "favorite");
      }, m(n3, i2) {
        main.c(n3, e2, i2), $2.m(e2, null), main.c(n3, s2, i2), main.c(n3, r2, i2), o2 || (c2 = main.l(e2, "click", function() {
          main.k(t2[2](t2[0])) && t2[2](t2[0]).apply(this, arguments);
        }), o2 = true);
      }, p(n3, [s3]) {
        p2 === (p2 = u2(t2 = n3, s3)) && $2 ? $2.p(t2, s3) : ($2.d(1), $2 = p2(t2), $2 && ($2.c(), $2.m(e2, null)));
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), $2.d(), t3 && main.f(s2), t3 && main.f(r2), o2 = false, c2();
      }};
    }
    const Pt = "w-5 h-5 mt-0.5 float-left";
    function Bt(t2, e2, n2) {
      let s2, r2, i2, o2, c2;
      main.g(t2, Y, (t3) => n2(4, o2 = t3)), main.g(t2, rt, (t3) => n2(5, c2 = t3));
      let {pm: l2} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(0, l2 = t3.pm);
      }, t2.$$.update = () => {
        16 & t2.$$.dirty && n2(3, s2 = o2.get("\u{1F496}")), 40 & t2.$$.dirty && n2(2, i2 = (t3) => () => {
          const e3 = c2.get(s2);
          e3.has(t3.id) ? e3.delete(t3.id) : e3.add(t3.id), rt.set(c2);
        }), 40 & t2.$$.dirty && n2(1, r2 = (t3) => c2.get(s2).has(t3.id));
      }, [l2, r2, i2, s2, o2, c2];
    }
    class At extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Bt, Et, main.s, {pm: 0});
      }
    }
    function zt(t2) {
      let e2, n2;
      return e2 = new wt({props: {tag: t2[1], size: t2[0]}}), {c() {
        main.y(e2.$$.fragment);
      }, m(t3, s2) {
        main.z(e2, t3, s2), n2 = true;
      }, p(t3, [n3]) {
        const s2 = {};
        2 & n3 && (s2.tag = t3[1]), 1 & n3 && (s2.size = t3[0]), e2.$set(s2);
      }, i(t3) {
        n2 || (main.A(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.C(e2, t3);
      }};
    }
    function Wt(t2, e2, n2) {
      let s2, r2;
      main.g(t2, Y, (t3) => n2(3, r2 = t3));
      let {pm: i2} = e2, {size: o2 = "xs"} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(2, i2 = t3.pm), "size" in t3 && n2(0, o2 = t3.size);
      }, t2.$$.update = () => {
        12 & t2.$$.dirty && n2(1, s2 = r2.get(i2.member));
      }, [o2, s2, i2, r2];
    }
    class Nt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Wt, zt, main.s, {pm: 2, size: 0});
      }
    }
    let Rt = main.w(function() {
      const t2 = localStorage.getItem("preferences-profile");
      return t2 || "latest";
    }());
    function Ft(t2, e2, n2) {
      const s2 = t2.slice();
      return s2[4] = e2[n2], s2;
    }
    function Dt(t2) {
      let e2, n2, s2, r2, c2, h2, p2, m2 = t2[4].name + "";
      return {c() {
        e2 = main.e("label"), n2 = main.e("input"), s2 = main.a(), r2 = main.t(m2), c2 = main.a(), main.b(n2, "type", "radio"), n2.__value = t2[4].path, n2.value = n2.__value, t2[3][0].push(n2);
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), n2.checked = n2.__value === t2[0], main.d(e2, s2), main.d(e2, r2), main.d(e2, c2), h2 || (p2 = main.l(n2, "change", t2[2]), h2 = true);
      }, p(t3, e3) {
        1 & e3 && (n2.checked = n2.__value === t3[0]);
      }, d(s3) {
        s3 && main.f(e2), t2[3][0].splice(t2[3][0].indexOf(n2), 1), h2 = false, p2();
      }};
    }
    function Tt(t2) {
      let e2, n2, s2, r2 = t2[1], o2 = [];
      for (let e3 = 0; e3 < r2.length; e3 += 1)
        o2[e3] = Dt(Ft(t2, r2, e3));
      return {c() {
        e2 = main.e("h3"), e2.textContent = "\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.", n2 = main.a(), s2 = main.e("div");
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].c();
        main.b(e2, "class", "svelte-qli48t"), main.b(s2, "class", "flex flex-col p-4");
      }, m(t3, r3) {
        main.c(t3, e2, r3), main.c(t3, n2, r3), main.c(t3, s2, r3);
        for (let t4 = 0; t4 < o2.length; t4 += 1)
          o2[t4].m(s2, null);
      }, p(t3, [e3]) {
        if (3 & e3) {
          let n3;
          for (r2 = t3[1], n3 = 0; n3 < r2.length; n3 += 1) {
            const i2 = Ft(t3, r2, n3);
            o2[n3] ? o2[n3].p(i2, e3) : (o2[n3] = Dt(i2), o2[n3].c(), o2[n3].m(s2, null));
          }
          for (; n3 < o2.length; n3 += 1)
            o2[n3].d(1);
          o2.length = r2.length;
        }
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), t3 && main.f(s2), main.D(o2, t3);
      }};
    }
    function Jt(t2, e2, n2) {
      let s2;
      main.g(t2, Rt, (t3) => n2(0, s2 = t3));
      return [s2, [{path: "la-vie-en-rose", name: "\uB77C\uBE44\uC559 \uB85C\uC988"}, {path: "one-the-story", name: "One The Story \uD3EC\uC2A4\uD130"}, {path: "latest", name: "\uCD5C\uC2E0 \uD504\uBA54"}], function() {
        s2 = this.__value, Rt.set(s2);
      }, [[]]];
    }
    Rt.subscribe((t2) => {
      localStorage.setItem("preferences-profile", t2);
    });
    class Vt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Jt, Tt, main.s, {});
      }
    }
    function Ht(t2) {
      let e2, n2, s2, r2;
      return {c() {
        e2 = main.e("img"), e2.src !== (n2 = "./img/" + t2[1]) && main.b(e2, "src", n2), main.b(e2, "class", "w-11 h-11 rounded-full \r\nml-1 mt-1 mr-2\r\nfloat-left\r\nborder-gray-100 border-2"), main.b(e2, "alt", "");
      }, m(n3, i2) {
        main.c(n3, e2, i2), s2 || (r2 = [main.l(e2, "pointerdown", t2[5]), main.l(e2, "pointerup", t2[6]), main.l(e2, "mousedown", t2[7]), main.l(e2, "mouseup", t2[8])], s2 = true);
      }, p(t3, [s3]) {
        2 & s3 && e2.src !== (n2 = "./img/" + t3[1]) && main.b(e2, "src", n2);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), s2 = false, main.x(r2);
      }};
    }
    function Kt(t2, e2, n2) {
      let s2, r2;
      main.g(t2, Rt, (t3) => n2(4, r2 = t3));
      let {pm: i2} = e2;
      const {open: o2} = main.E("simple-modal"), c2 = () => {
        o2(Vt, {});
      };
      let l2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(3, i2 = t3.pm);
      }, t2.$$.update = () => {
        24 & t2.$$.dirty && n2(1, s2 = i2.member == "\uC6B4\uC601\uD300" ? "izone-logo.png" : `profile/${r2}/${i2.member}.jpg`);
      }, [l2, s2, c2, i2, r2, () => {
        n2(0, l2 = setTimeout(c2, 300));
      }, (t3) => {
        clearTimeout(l2);
      }, () => {
        n2(0, l2 = setTimeout(c2, 500));
      }, (t3) => {
        clearTimeout(l2);
      }];
    }
    class qt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Kt, Ht, main.s, {pm: 3});
      }
    }
    function Zt(t2) {
      const e2 = t2 - 1;
      return e2 * e2 * e2 + 1;
    }
    function Qt(t2, {delay: e2 = 0, duration: n2 = 400, easing: s2 = main.F} = {}) {
      const r2 = +getComputedStyle(t2).opacity;
      return {delay: e2, duration: n2, easing: s2, css: (t3) => "opacity: " + t3 * r2};
    }
    function Ut(t2, {delay: e2 = 0, duration: n2 = 400, easing: s2 = Zt, x: r2 = 0, y: i2 = 0, opacity: o2 = 0} = {}) {
      const c2 = getComputedStyle(t2), l2 = +c2.opacity, a2 = c2.transform === "none" ? "" : c2.transform, u2 = l2 * (1 - o2);
      return {delay: e2, duration: n2, easing: s2, css: (t3, e3) => `
			transform: ${a2} translate(${(1 - t3) * r2}px, ${(1 - t3) * i2}px);
			opacity: ${l2 - u2 * e3}`};
    }
    function Yt(t2, e2, n2) {
      const s2 = t2.slice();
      return s2[14] = e2[n2], s2;
    }
    function Gt(t2) {
      let e2;
      return {c() {
        e2 = main.e("br");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Xt(t2) {
      let e2, n2;
      return e2 = new wt({props: {tag: t2[14], canDelete: true, size: "sm"}}), {c() {
        main.y(e2.$$.fragment);
      }, m(t3, s2) {
        main.z(e2, t3, s2), n2 = true;
      }, p(t3, n3) {
        const s2 = {};
        8 & n3 && (s2.tag = t3[14]), e2.$set(s2);
      }, i(t3) {
        n2 || (main.A(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.C(e2, t3);
      }};
    }
    function te(t2) {
      let e2, n2, s2, r2, o2, c2, h2, p2 = t2[7] && ee(t2);
      return {c() {
        e2 = main.e("div"), n2 = main.e("div"), r2 = main.a(), p2 && p2.c(), main.b(n2, "contenteditable", "false"), t2[4] === void 0 && main.G(() => t2[12].call(n2)), main.b(e2, "class", "h-5/6 overflow-scroll p-1");
      }, m(s3, i2) {
        main.c(s3, e2, i2), main.d(e2, n2), t2[4] !== void 0 && (n2.innerHTML = t2[4]), main.d(e2, r2), p2 && p2.m(e2, null), o2 = true, c2 || (h2 = main.l(n2, "input", t2[12]), c2 = true);
      }, p(t3, s3) {
        16 & s3 && t3[4] !== n2.innerHTML && (n2.innerHTML = t3[4]), t3[7] ? p2 ? p2.p(t3, s3) : (p2 = ee(t3), p2.c(), p2.m(e2, null)) : p2 && (p2.d(1), p2 = null);
      }, i(t3) {
        o2 || (main.G(() => {
          s2 || (s2 = main.H(n2, Qt, {duration: 200}, true)), s2.run(1);
        }), o2 = true);
      }, o(t3) {
        s2 || (s2 = main.H(n2, Qt, {duration: 200}, false)), s2.run(0), o2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && s2 && s2.end(), p2 && p2.d(), c2 = false, h2();
      }};
    }
    function ee(t2) {
      let e2, n2, s2;
      return {c() {
        e2 = main.e("button"), e2.textContent = "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30\u{1F5C3}\uFE0F", main.b(e2, "class", "shadow rounded bg-red-200 p-1 mt-2");
      }, m(r2, i2) {
        main.c(r2, e2, i2), n2 || (s2 = main.l(e2, "click", t2[13]), n2 = true);
      }, p: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, s2();
      }};
    }
    function ne(t2) {
      let e2, n2, s2, r2, d2, h2, p2, m2, $2, y2, w2, x2, v2, k2, L2, I2, P2, W2, N2, R2, F2, D2, T2 = t2[2].subject + "";
      r2 = new qt({props: {pm: t2[2]}});
      let J2 = t2[5] && Gt();
      x2 = new At({props: {pm: t2[2]}}), L2 = new Nt({props: {pm: t2[2], size: "sm"}}), P2 = new vt({props: {time: t2[2].time, size: "sm"}});
      let V2 = t2[3], H2 = [];
      for (let e3 = 0; e3 < V2.length; e3 += 1)
        H2[e3] = Xt(Yt(t2, V2, e3));
      const K2 = (t3) => main.B(H2[t3], 1, 1, () => {
        H2[t3] = null;
      });
      R2 = new jt({});
      let q2 = t2[4] && te(t2);
      return {c() {
        e2 = main.e("div"), n2 = main.e("div"), s2 = main.e("div"), main.y(r2.$$.fragment), d2 = main.a(), h2 = main.e("h4"), p2 = main.t(T2), $2 = main.a(), J2 && J2.c(), y2 = main.a(), w2 = main.e("div"), main.y(x2.$$.fragment), v2 = main.a(), k2 = main.e("div"), main.y(L2.$$.fragment), I2 = main.a(), main.y(P2.$$.fragment), W2 = main.a();
        for (let t3 = 0; t3 < H2.length; t3 += 1)
          H2[t3].c();
        N2 = main.a(), main.y(R2.$$.fragment), F2 = main.a(), q2 && q2.c(), main.b(h2, "class", "text-xl m-1 w-4/5"), main.b(s2, "class", "relative"), main.G(() => t2[11].call(s2)), main.b(w2, "class", "absolute inset-y-0 right-0 m-1 h-8"), main.b(k2, "class", "flex flex-wrap"), main.b(n2, "class", "relative w-full"), main.j(e2, "max-height", t2[6] && t2[0] ? "70%" : "90%"), main.b(e2, "class", "\r\nshadow-2xl rounded-md bg-white \r\nw-full mt-2 p-2\r\nflex flex-col");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(n2, s2), main.z(r2, s2, null), main.d(s2, d2), main.d(s2, h2), main.d(h2, p2), m2 = main.I(s2, t2[11].bind(s2)), main.d(n2, $2), J2 && J2.m(n2, null), main.d(n2, y2), main.d(n2, w2), main.z(x2, w2, null), main.d(n2, v2), main.d(n2, k2), main.z(L2, k2, null), main.d(k2, I2), main.z(P2, k2, null), main.d(k2, W2);
        for (let t3 = 0; t3 < H2.length; t3 += 1)
          H2[t3].m(k2, null);
        main.d(k2, N2), main.z(R2, k2, null), main.d(e2, F2), q2 && q2.m(e2, null), D2 = true;
      }, p(t3, [s3]) {
        const i2 = {};
        4 & s3 && (i2.pm = t3[2]), r2.$set(i2), (!D2 || 4 & s3) && T2 !== (T2 = t3[2].subject + "") && main.r(p2, T2), t3[5] ? J2 || (J2 = Gt(), J2.c(), J2.m(n2, y2)) : J2 && (J2.d(1), J2 = null);
        const o2 = {};
        4 & s3 && (o2.pm = t3[2]), x2.$set(o2);
        const l2 = {};
        4 & s3 && (l2.pm = t3[2]), L2.$set(l2);
        const a2 = {};
        if (4 & s3 && (a2.time = t3[2].time), P2.$set(a2), 8 & s3) {
          let e3;
          for (V2 = t3[3], e3 = 0; e3 < V2.length; e3 += 1) {
            const n3 = Yt(t3, V2, e3);
            H2[e3] ? (H2[e3].p(n3, s3), main.A(H2[e3], 1)) : (H2[e3] = Xt(n3), H2[e3].c(), main.A(H2[e3], 1), H2[e3].m(k2, N2));
          }
          for (main.J(), e3 = V2.length; e3 < H2.length; e3 += 1)
            K2(e3);
          main.K();
        }
        t3[4] ? q2 ? (q2.p(t3, s3), 16 & s3 && main.A(q2, 1)) : (q2 = te(t3), q2.c(), main.A(q2, 1), q2.m(e2, null)) : q2 && (main.J(), main.B(q2, 1, 1, () => {
          q2 = null;
        }), main.K()), (!D2 || 65 & s3) && main.j(e2, "max-height", t3[6] && t3[0] ? "70%" : "90%");
      }, i(t3) {
        if (!D2) {
          main.A(r2.$$.fragment, t3), main.A(x2.$$.fragment, t3), main.A(L2.$$.fragment, t3), main.A(P2.$$.fragment, t3);
          for (let t4 = 0; t4 < V2.length; t4 += 1)
            main.A(H2[t4]);
          main.A(R2.$$.fragment, t3), main.A(q2), D2 = true;
        }
      }, o(t3) {
        main.B(r2.$$.fragment, t3), main.B(x2.$$.fragment, t3), main.B(L2.$$.fragment, t3), main.B(P2.$$.fragment, t3), H2 = H2.filter(Boolean);
        for (let t4 = 0; t4 < H2.length; t4 += 1)
          main.B(H2[t4]);
        main.B(R2.$$.fragment, t3), main.B(q2), D2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.C(r2), m2(), J2 && J2.d(), main.C(x2), main.C(L2), main.C(P2), main.D(H2, t3), main.C(R2), q2 && q2.d();
      }};
    }
    function se(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, u2, d2;
      main.g(t2, G, (t3) => n2(9, o2 = t3)), main.g(t2, ct, (t3) => n2(2, c2 = t3)), main.g(t2, lt, (t3) => n2(4, l2 = t3)), main.g(t2, ht, (t3) => n2(6, a2 = t3)), main.g(t2, ft, (t3) => n2(7, u2 = t3)), main.g(t2, dt, (t3) => n2(8, d2 = t3));
      let h2, {show: f2} = e2;
      return t2.$$set = (t3) => {
        "show" in t3 && n2(0, f2 = t3.show);
      }, t2.$$.update = () => {
        516 & t2.$$.dirty && n2(3, s2 = o2.has(c2.id) ? Array.from(o2.get(c2.id)) : []), 4 & t2.$$.dirty && n2(10, r2 = () => {
          main.q(lt, l2 = "", l2), async function(t3) {
            const e3 = await fetch(`./mail/${t3}.html`).then((t4) => t4.text()), n3 = e3.search('<div class="main-contents" id="mail-detail"><html><head></head><body>') + 69, s3 = e3.search("</body></html></div>");
            return e3.slice(n3, s3);
          }(c2.id).then((t3) => {
            setTimeout(() => {
              main.q(lt, l2 = t3, l2);
            }, 100);
          });
        }), 1024 & t2.$$.dirty && r2(), 2 & t2.$$.dirty && n2(5, i2 = h2 < 40);
      }, [f2, h2, c2, s2, l2, i2, a2, u2, d2, o2, r2, function() {
        h2 = this.clientHeight, n2(1, h2);
      }, function() {
        l2 = this.innerHTML, lt.set(l2);
      }, () => {
        main.q(dt, d2 = true, d2);
      }];
    }
    class re extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, se, ne, main.s, {show: 0});
      }
    }
    function ie(t2, e2, n2) {
      const s2 = t2.slice();
      return s2[5] = e2[n2], s2;
    }
    function oe(t2) {
      let e2, n2;
      return e2 = new wt({props: {tag: t2[5], size: t2[1] ? "xs" : "sm"}}), {c() {
        main.y(e2.$$.fragment);
      }, m(t3, s2) {
        main.z(e2, t3, s2), n2 = true;
      }, p(t3, n3) {
        const s2 = {};
        1 & n3 && (s2.tag = t3[5]), 2 & n3 && (s2.size = t3[1] ? "xs" : "sm"), e2.$set(s2);
      }, i(t3) {
        n2 || (main.A(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.C(e2, t3);
      }};
    }
    function ce(t2) {
      let e2, n2, s2 = t2[0], r2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        r2[e3] = oe(ie(t2, s2, e3));
      const o2 = (t3) => main.B(r2[t3], 1, 1, () => {
        r2[t3] = null;
      });
      return {c() {
        e2 = main.e("div");
        for (let t3 = 0; t3 < r2.length; t3 += 1)
          r2[t3].c();
        main.b(e2, "class", "flex flex-wrap");
      }, m(t3, s3) {
        main.c(t3, e2, s3);
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          r2[t4].m(e2, null);
        n2 = true;
      }, p(t3, [n3]) {
        if (3 & n3) {
          let i2;
          for (s2 = t3[0], i2 = 0; i2 < s2.length; i2 += 1) {
            const o3 = ie(t3, s2, i2);
            r2[i2] ? (r2[i2].p(o3, n3), main.A(r2[i2], 1)) : (r2[i2] = oe(o3), r2[i2].c(), main.A(r2[i2], 1), r2[i2].m(e2, null));
          }
          for (main.J(), i2 = s2.length; i2 < r2.length; i2 += 1)
            o2(i2);
          main.K();
        }
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < s2.length; t4 += 1)
            main.A(r2[t4]);
          n2 = true;
        }
      }, o(t3) {
        r2 = r2.filter(Boolean);
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          main.B(r2[t4]);
        n2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.D(r2, t3);
      }};
    }
    function le(t2, e2, n2) {
      let s2, r2, i2, o2;
      return main.g(t2, Y, (t3) => n2(2, r2 = t3)), main.g(t2, st, (t3) => n2(3, i2 = t3)), main.g(t2, ht, (t3) => n2(1, o2 = t3)), t2.$$.update = () => {
        4 & t2.$$.dirty && n2(0, s2 = Array.from(r2.values()));
      }, r2.has(i2.value) && main.q(st, i2 = q, i2), [s2, o2, r2];
    }
    class ae extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, le, ce, main.s, {});
      }
    }
    function ue(t2) {
      let e2, n2, s2;
      return {c() {
        e2 = main.e("button"), e2.textContent = "\uBAA9\uB85D\u{1F5C3}\uFE0F", main.b(e2, "class", "shadow rounded bg-red-200 p-1 mr-1");
      }, m(r2, i2) {
        main.c(r2, e2, i2), n2 || (s2 = main.l(e2, "click", t2[10]), n2 = true);
      }, p: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, s2();
      }};
    }
    function de(t2) {
      let e2, n2, s2, r2, c2;
      return {c() {
        e2 = main.e("label"), n2 = main.t("\uD0DC\uADF8 \uBAA9\uB85D "), s2 = main.e("input"), main.b(s2, "id", "isListView"), main.b(s2, "type", "checkbox"), main.b(e2, "class", "p-1"), main.b(e2, "for", "isListView");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(e2, s2), s2.checked = t2[1], r2 || (c2 = main.l(s2, "change", t2[11]), r2 = true);
      }, p(t3, e3) {
        2 & e3 && (s2.checked = t3[1]);
      }, d(t3) {
        t3 && main.f(e2), r2 = false, c2();
      }};
    }
    function he(t2) {
      let e2, n2, s2, r2;
      return s2 = new wt({props: {tag: t2[2], canDelete: true, onRemove: t2[9]}}), {c() {
        e2 = main.e("span"), e2.textContent = "\uD604\uC7AC :", n2 = main.a(), main.y(s2.$$.fragment), main.b(e2, "class", "ml-1 mt-1");
      }, m(t3, i2) {
        main.c(t3, e2, i2), main.c(t3, n2, i2), main.z(s2, t3, i2), r2 = true;
      }, p(t3, e3) {
        const n3 = {};
        4 & e3 && (n3.tag = t3[2]), s2.$set(n3);
      }, i(t3) {
        r2 || (main.A(s2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        main.B(s2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), main.C(s2, t3);
      }};
    }
    function fe(t2) {
      let e2, n2, s2, r2, d2, h2, p2, m2, $2, y2, w2, x2, b2, v2, k2, j2, L2, I2, N2, R2 = t2[5] && ue(t2), F2 = 650 >= t2[0] && t2[7] && de(t2), D2 = t2[2].value && he(t2);
      return b2 = new ae({}), k2 = new re({props: {show: 650 < t2[0] || t2[1]}}), {c() {
        e2 = main.e("section"), n2 = main.e("div"), R2 && R2.c(), s2 = main.a(), r2 = main.e("div"), d2 = main.e("a"), h2 = main.t("\uBC88\uC5ED"), p2 = main.e("img"), $2 = main.a(), F2 && F2.c(), y2 = main.a(), D2 && D2.c(), w2 = main.a(), x2 = main.e("div"), main.y(b2.$$.fragment), v2 = main.a(), main.y(k2.$$.fragment), main.b(p2, "class", "w-5 h-5 mt-0.5 float-right"), p2.src !== (m2 = "./img/papago.png") && main.b(p2, "src", "./img/papago.png"), main.b(p2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30"), main.b(d2, "href", t2[8]), main.b(d2, "target", "_blank"), main.b(r2, "class", "w-16 p-1 shadow rounded bg-red-100 mr-1"), main.b(n2, "class", "flex flex-row"), main.j(x2, "min-height", "43px"), main.b(x2, "class", "\r\n    h-36 mt-3 mb-3 p-2\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main.L(x2, "hidden", !((650 < t2[0] || t2[1]) && t2[7])), main.b(e2, "class", j2 = "h-full p-3 " + (t2[7] ? "w-4/12" : "w-full") + " flex flex-col"), main.G(() => t2[12].call(e2)), main.L(e2, "hidden", t2[5] && t2[6]);
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), R2 && R2.m(n2, null), main.d(n2, s2), main.d(n2, r2), main.d(r2, d2), main.d(d2, h2), main.d(d2, p2), main.d(n2, $2), F2 && F2.m(n2, null), main.d(n2, y2), D2 && D2.m(n2, null), main.d(e2, w2), main.d(e2, x2), main.z(b2, x2, null), main.d(e2, v2), main.z(k2, e2, null), L2 = main.I(e2, t2[12].bind(e2)), N2 = true;
      }, p(t3, [r3]) {
        t3[5] ? R2 ? R2.p(t3, r3) : (R2 = ue(t3), R2.c(), R2.m(n2, s2)) : R2 && (R2.d(1), R2 = null), (!N2 || 256 & r3) && main.b(d2, "href", t3[8]), 650 >= t3[0] && t3[7] ? F2 ? F2.p(t3, r3) : (F2 = de(t3), F2.c(), F2.m(n2, y2)) : F2 && (F2.d(1), F2 = null), t3[2].value ? D2 ? (D2.p(t3, r3), 4 & r3 && main.A(D2, 1)) : (D2 = he(t3), D2.c(), main.A(D2, 1), D2.m(n2, null)) : D2 && (main.J(), main.B(D2, 1, 1, () => {
          D2 = null;
        }), main.K()), 131 & r3 && main.L(x2, "hidden", !((650 < t3[0] || t3[1]) && t3[7]));
        const i2 = {};
        3 & r3 && (i2.show = 650 < t3[0] || t3[1]), k2.$set(i2), (!N2 || 128 & r3 && j2 !== (j2 = "h-full p-3 " + (t3[7] ? "w-4/12" : "w-full") + " flex flex-col")) && main.b(e2, "class", j2), 224 & r3 && main.L(e2, "hidden", t3[5] && t3[6]);
      }, i(t3) {
        N2 || (main.A(D2), main.A(b2.$$.fragment, t3), main.A(k2.$$.fragment, t3), main.G(() => {
          I2 || (I2 = main.H(e2, Ut, {x: -400, duration: 400}, true)), I2.run(1);
        }), N2 = true);
      }, o(t3) {
        main.B(D2), main.B(b2.$$.fragment, t3), main.B(k2.$$.fragment, t3), I2 || (I2 = main.H(e2, Ut, {x: -400, duration: 400}, false)), I2.run(0), N2 = false;
      }, d(t3) {
        t3 && main.f(e2), R2 && R2.d(), F2 && F2.d(), D2 && D2.d(), main.C(b2), main.C(k2), L2(), t3 && I2 && I2.end();
      }};
    }
    function ge(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, u2;
      main.g(t2, st, (t3) => n2(2, s2 = t3)), main.g(t2, ut, (t3) => n2(13, r2 = t3)), main.g(t2, main.o, (t3) => n2(3, i2 = t3)), main.g(t2, main.p, (t3) => n2(4, o2 = t3)), main.g(t2, ft, (t3) => n2(5, c2 = t3)), main.g(t2, dt, (t3) => n2(6, l2 = t3)), main.g(t2, ht, (t3) => n2(7, a2 = t3)), main.g(t2, at, (t3) => n2(8, u2 = t3));
      let d2, h2;
      return [d2, h2, s2, i2, o2, c2, l2, a2, u2, () => {
        main.q(st, s2 = q, s2), main.q(ut, r2 = 1, r2), i2("./", Object.assign(Object.assign({}, o2), {tag: ""}));
      }, () => {
        main.q(dt, l2 = true, l2), i2("./", {...o2, showList: true});
      }, function() {
        h2 = this.checked, n2(1, h2);
      }, function() {
        d2 = this.clientHeight, n2(0, d2);
      }];
    }
    class pe extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, ge, fe, main.s, {});
      }
    }
    const me = ye(new Date(2021, 2, 20));
    let $e = main.w(me);
    function ye(t2) {
      let e2 = "" + (t2.getMonth() + 1), n2 = "" + t2.getDate();
      const s2 = t2.getFullYear();
      return e2.length < 2 && (e2 = "0" + e2), n2.length < 2 && (n2 = "0" + n2), [s2, e2, n2].join("-");
    }
    function we(t2) {
      const [e2, n2, s2] = t2.split("-").map((t3) => parseInt(t3));
      return new Date(e2, n2 - 1, s2);
    }
    const xe = (t2) => t2.split(" ")[0].replace(/\//g, "-");
    function be(t2) {
      let e2, n2, s2, r2;
      const o2 = t2[3].default, c2 = main.M(o2, t2, t2[2], null);
      return {c() {
        e2 = main.e("button"), c2 && c2.c(), main.b(e2, "id", t2[1]), main.b(e2, "class", "rounded bg-red-100 m-2 pl-1 pr-1");
      }, m(i2, o3) {
        main.c(i2, e2, o3), c2 && c2.m(e2, null), n2 = true, s2 || (r2 = main.l(e2, "click", function() {
          main.k(t2[0]) && t2[0].apply(this, arguments);
        }), s2 = true);
      }, p(s3, [r3]) {
        t2 = s3, c2 && c2.p && 4 & r3 && main.N(c2, o2, t2, t2[2], r3, null, null), (!n2 || 2 & r3) && main.b(e2, "id", t2[1]);
      }, i(t3) {
        n2 || (main.A(c2, t3), n2 = true);
      }, o(t3) {
        main.B(c2, t3), n2 = false;
      }, d(t3) {
        t3 && main.f(e2), c2 && c2.d(t3), s2 = false, r2();
      }};
    }
    function ve(t2, e2, n2) {
      let {$$slots: s2 = {}, $$scope: r2} = e2, {onClick: i2} = e2, {id: o2} = e2;
      return t2.$$set = (t3) => {
        "onClick" in t3 && n2(0, i2 = t3.onClick), "id" in t3 && n2(1, o2 = t3.id), "$$scope" in t3 && n2(2, r2 = t3.$$scope);
      }, [i2, o2, r2, s2];
    }
    class ke extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, ve, be, main.s, {onClick: 0, id: 1});
      }
    }
    function Me(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uC774\uC804");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function _e(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uB2E4\uC74C");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Ce(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uC5B4\uC81C");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Oe(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uB0B4\uC77C");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Se(t2) {
      let e2, n2, s2, r2, c2, h2, p2, m2, $2, y2, w2, x2, j2, L2, I2, E2, P2, B2, A2, z2, N2;
      return e2 = new ke({props: {id: "BackPageButton", onClick: t2[8], $$slots: {default: [Me]}, $$scope: {ctx: t2}}}), y2 = new ke({props: {id: "NextPageButton", onClick: t2[7], $$slots: {default: [_e]}, $$scope: {ctx: t2}}}), L2 = new ke({props: {id: "toYesterdayButton", onClick: t2[5], $$slots: {default: [Ce]}, $$scope: {ctx: t2}}}), B2 = new ke({props: {id: "toTomorrowButton", onClick: t2[6], $$slots: {default: [Oe]}, $$scope: {ctx: t2}}}), {c() {
        main.y(e2.$$.fragment), n2 = main.a(), s2 = main.e("span"), r2 = main.e("input"), c2 = main.a(), h2 = main.e("span"), p2 = main.t("/ "), m2 = main.t(t2[0]), $2 = main.a(), main.y(y2.$$.fragment), w2 = main.a(), x2 = main.e("br"), j2 = main.a(), main.y(L2.$$.fragment), I2 = main.a(), E2 = main.e("input"), P2 = main.a(), main.y(B2.$$.fragment), main.b(r2, "id", "NowPageInput"), main.b(r2, "type", "number"), main.b(r2, "class", "w-9"), main.b(r2, "min", "1"), main.b(r2, "max", t2[0]), main.L(r2, "bg-red-300", t2[0] <= t2[1]), main.b(s2, "id", "NowPageSpan"), main.b(s2, "class", "bg-white border-2 border-gray-400 rounded w-24 p-1"), main.L(s2, "bg-red-300", t2[0] <= t2[1]), main.L(s2, "border-red-300", t2[0] <= t2[1]), main.b(E2, "type", "date"), main.b(E2, "class", "border-1 w-36 border-gray-400 rounded");
      }, m(i2, o2) {
        main.z(e2, i2, o2), main.c(i2, n2, o2), main.c(i2, s2, o2), main.d(s2, r2), main.v(r2, t2[1]), main.d(s2, c2), main.d(s2, h2), main.d(h2, p2), main.d(h2, m2), main.c(i2, $2, o2), main.z(y2, i2, o2), main.c(i2, w2, o2), main.c(i2, x2, o2), main.c(i2, j2, o2), main.z(L2, i2, o2), main.c(i2, I2, o2), main.c(i2, E2, o2), main.v(E2, t2[2]), main.c(i2, P2, o2), main.z(B2, i2, o2), A2 = true, z2 || (N2 = [main.l(r2, "input", t2[9]), main.l(E2, "input", t2[10]), main.l(E2, "change", t2[11])], z2 = true);
      }, p(t3, [n3]) {
        const i2 = {};
        8192 & n3 && (i2.$$scope = {dirty: n3, ctx: t3}), e2.$set(i2), (!A2 || 1 & n3) && main.b(r2, "max", t3[0]), 2 & n3 && main.O(r2.value) !== t3[1] && main.v(r2, t3[1]), 3 & n3 && main.L(r2, "bg-red-300", t3[0] <= t3[1]), (!A2 || 1 & n3) && main.r(m2, t3[0]), 3 & n3 && main.L(s2, "bg-red-300", t3[0] <= t3[1]), 3 & n3 && main.L(s2, "border-red-300", t3[0] <= t3[1]);
        const o2 = {};
        8192 & n3 && (o2.$$scope = {dirty: n3, ctx: t3}), y2.$set(o2);
        const c3 = {};
        8192 & n3 && (c3.$$scope = {dirty: n3, ctx: t3}), L2.$set(c3), 4 & n3 && main.v(E2, t3[2]);
        const a2 = {};
        8192 & n3 && (a2.$$scope = {dirty: n3, ctx: t3}), B2.$set(a2);
      }, i(t3) {
        A2 || (main.A(e2.$$.fragment, t3), main.A(y2.$$.fragment, t3), main.A(L2.$$.fragment, t3), main.A(B2.$$.fragment, t3), A2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), main.B(y2.$$.fragment, t3), main.B(L2.$$.fragment, t3), main.B(B2.$$.fragment, t3), A2 = false;
      }, d(t3) {
        main.C(e2, t3), t3 && main.f(n2), t3 && main.f(s2), t3 && main.f($2), main.C(y2, t3), t3 && main.f(w2), t3 && main.f(x2), t3 && main.f(j2), main.C(L2, t3), t3 && main.f(I2), t3 && main.f(E2), t3 && main.f(P2), main.C(B2, t3), z2 = false, main.x(N2);
      }};
    }
    function je(t2, e2, n2) {
      let s2, r2, i2, o2, c2;
      main.g(t2, st, (t3) => n2(12, s2 = t3)), main.g(t2, ut, (t3) => n2(1, r2 = t3)), main.g(t2, $e, (t3) => n2(2, i2 = t3)), main.g(t2, main.o, (t3) => n2(3, o2 = t3)), main.g(t2, main.p, (t3) => n2(4, c2 = t3));
      let {maxPage: l2} = e2;
      main.p.subscribe((t3) => {
        const e3 = parseInt(t3.nowPage);
        r2 != e3 && main.q(ut, r2 = t3.nowPage ? e3 : 1, r2), i2 != t3.dateString && main.q($e, i2 = t3.dateString || me, i2);
      });
      return t2.$$set = (t3) => {
        "maxPage" in t3 && n2(0, l2 = t3.maxPage);
      }, [l2, r2, i2, o2, c2, function() {
        if (s2.value)
          return r2 < l2 && main.q(ut, r2 += 1, r2), null;
        const [t3, e3, n3] = i2.split("-").map((t4) => parseInt(t4)), a2 = new Date(t3, e3 - 1, n3 - 1);
        main.q($e, i2 = ye(a2), i2), main.q(ut, r2 = 1, r2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: r2, dateString: i2}));
      }, function() {
        if (s2.value)
          return r2 > 1 && main.q(ut, r2 -= 1, r2), null;
        const [t3, e3, n3] = i2.split("-").map((t4) => parseInt(t4)), l3 = new Date(t3, e3 - 1, n3 + 1);
        main.q($e, i2 = ye(l3), i2), main.q(ut, r2 = 1, r2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: r2, dateString: i2}));
      }, function() {
        r2 < l2 ? (main.q(ut, r2 += 1, r2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: r2}))) : alert("\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        r2 > 1 ? (main.q(ut, r2 -= 1, r2), o2("./", Object.assign(Object.assign({}, c2), {nowPage: r2}))) : alert("\uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        r2 = main.O(this.value), ut.set(r2);
      }, function() {
        i2 = this.value, $e.set(i2);
      }, () => {
        main.q(ut, r2 = 1, r2), o2("./", {...c2, nowPage: r2, dateString: i2});
      }];
    }
    class Le extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, je, Se, main.s, {maxPage: 0});
      }
    }
    function Ie(t2, e2, n2) {
      const s2 = t2.slice();
      return s2[12] = e2[n2], s2;
    }
    function Ee(t2) {
      let e2;
      return {c() {
        e2 = main.e("span"), main.b(e2, "class", "\r\n        border-1 text-lg\r\n        rounded bg-white text-white");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, p: main.n, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Pe(t2) {
      let e2, n2, s2, r2, c2, p2, m2, $2, y2, w2, x2, v2, k2, L2, I2, E2, P2, B2, W2 = t2[0].subject + "", N2 = (t2[0].preview || "...") + "";
      e2 = new qt({props: {pm: t2[0]}}), r2 = new At({props: {pm: t2[0]}}), p2 = new Nt({props: {pm: t2[0]}}), $2 = new vt({props: {time: t2[0].time}});
      let R2 = t2[6] && Be(), F2 = t2[4](t2[0]), D2 = [];
      for (let e3 = 0; e3 < F2.length; e3 += 1)
        D2[e3] = Ae(Ie(t2, F2, e3));
      const T2 = (t3) => main.B(D2[t3], 1, 1, () => {
        D2[t3] = null;
      });
      return {c() {
        main.y(e2.$$.fragment), n2 = main.a(), s2 = main.e("p"), main.y(r2.$$.fragment), c2 = main.a(), main.y(p2.$$.fragment), m2 = main.a(), main.y($2.$$.fragment), y2 = main.a(), R2 && R2.c(), w2 = main.a();
        for (let t3 = 0; t3 < D2.length; t3 += 1)
          D2[t3].c();
        x2 = main.a(), v2 = main.t(W2), k2 = main.a(), L2 = main.e("p"), I2 = main.t(N2), main.b(s2, "class", "truncate"), main.b(L2, "class", "ml-1 mt-1 text-sm truncate");
      }, m(i2, o2) {
        main.z(e2, i2, o2), main.c(i2, n2, o2), main.c(i2, s2, o2), main.z(r2, s2, null), main.d(s2, c2), main.z(p2, s2, null), main.d(s2, m2), main.z($2, s2, null), main.d(s2, y2), R2 && R2.m(s2, null), main.d(s2, w2);
        for (let t3 = 0; t3 < D2.length; t3 += 1)
          D2[t3].m(s2, null);
        main.d(s2, x2), main.d(s2, v2), main.c(i2, k2, o2), main.c(i2, L2, o2), main.d(L2, I2), E2 = true, P2 || (B2 = main.l(L2, "click", function() {
          main.k(t2[3]) && t2[3].apply(this, arguments);
        }), P2 = true);
      }, p(n3, i2) {
        t2 = n3;
        const o2 = {};
        1 & i2 && (o2.pm = t2[0]), e2.$set(o2);
        const c3 = {};
        1 & i2 && (c3.pm = t2[0]), r2.$set(c3);
        const l2 = {};
        1 & i2 && (l2.pm = t2[0]), p2.$set(l2);
        const a2 = {};
        if (1 & i2 && (a2.time = t2[0].time), $2.$set(a2), t2[6] ? R2 || (R2 = Be(), R2.c(), R2.m(s2, w2)) : R2 && (R2.d(1), R2 = null), 17 & i2) {
          let e3;
          for (F2 = t2[4](t2[0]), e3 = 0; e3 < F2.length; e3 += 1) {
            const n4 = Ie(t2, F2, e3);
            D2[e3] ? (D2[e3].p(n4, i2), main.A(D2[e3], 1)) : (D2[e3] = Ae(n4), D2[e3].c(), main.A(D2[e3], 1), D2[e3].m(s2, x2));
          }
          for (main.J(), e3 = F2.length; e3 < D2.length; e3 += 1)
            T2(e3);
          main.K();
        }
        (!E2 || 1 & i2) && W2 !== (W2 = t2[0].subject + "") && main.r(v2, W2), (!E2 || 1 & i2) && N2 !== (N2 = (t2[0].preview || "...") + "") && main.r(I2, N2);
      }, i(t3) {
        if (!E2) {
          main.A(e2.$$.fragment, t3), main.A(r2.$$.fragment, t3), main.A(p2.$$.fragment, t3), main.A($2.$$.fragment, t3);
          for (let t4 = 0; t4 < F2.length; t4 += 1)
            main.A(D2[t4]);
          E2 = true;
        }
      }, o(t3) {
        main.B(e2.$$.fragment, t3), main.B(r2.$$.fragment, t3), main.B(p2.$$.fragment, t3), main.B($2.$$.fragment, t3), D2 = D2.filter(Boolean);
        for (let t4 = 0; t4 < D2.length; t4 += 1)
          main.B(D2[t4]);
        E2 = false;
      }, d(t3) {
        main.C(e2, t3), t3 && main.f(n2), t3 && main.f(s2), main.C(r2), main.C(p2), main.C($2), R2 && R2.d(), main.D(D2, t3), t3 && main.f(k2), t3 && main.f(L2), P2 = false, B2();
      }};
    }
    function Be(t2) {
      let e2;
      return {c() {
        e2 = main.e("br");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Ae(t2) {
      let e2, n2;
      return e2 = new wt({props: {tag: t2[12]}}), {c() {
        main.y(e2.$$.fragment);
      }, m(t3, s2) {
        main.z(e2, t3, s2), n2 = true;
      }, p(t3, n3) {
        const s2 = {};
        17 & n3 && (s2.tag = t3[12]), e2.$set(s2);
      }, i(t3) {
        n2 || (main.A(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.C(e2, t3);
      }};
    }
    function ze(t2) {
      let e2, n2, s2 = t2[0].member && We(t2);
      return {c() {
        e2 = main.e("li"), s2 && s2.c(), main.b(e2, "class", "border-b-2 rounded w-full text-gray-500 truncate"), main.j(e2, "font-size", "10px"), main.j(e2, "height", "20px");
      }, m(t3, r2) {
        main.c(t3, e2, r2), s2 && s2.m(e2, null), n2 = true;
      }, p(t3, n3) {
        t3[0].member ? s2 ? (s2.p(t3, n3), 1 & n3 && main.A(s2, 1)) : (s2 = We(t3), s2.c(), main.A(s2, 1), s2.m(e2, null)) : s2 && (main.J(), main.B(s2, 1, 1, () => {
          s2 = null;
        }), main.K());
      }, i(t3) {
        n2 || (main.A(s2), n2 = true);
      }, o(t3) {
        main.B(s2), n2 = false;
      }, d(t3) {
        t3 && main.f(e2), s2 && s2.d();
      }};
    }
    function We(t2) {
      let e2, n2, s2, r2, c2, l2, d2, h2, p2 = t2[0].subject + "", m2 = " " + t2[0].preview;
      return e2 = new Nt({props: {pm: t2[0], size: ""}}), s2 = new vt({props: {time: t2[0].time, size: ""}}), {c() {
        main.y(e2.$$.fragment), n2 = main.a(), main.y(s2.$$.fragment), r2 = main.a(), c2 = main.e("strong"), l2 = main.t(p2), d2 = main.t(m2);
      }, m(t3, i2) {
        main.z(e2, t3, i2), main.c(t3, n2, i2), main.z(s2, t3, i2), main.c(t3, r2, i2), main.c(t3, c2, i2), main.d(c2, l2), main.c(t3, d2, i2), h2 = true;
      }, p(t3, n3) {
        const r3 = {};
        1 & n3 && (r3.pm = t3[0]), e2.$set(r3);
        const i2 = {};
        1 & n3 && (i2.time = t3[0].time), s2.$set(i2), (!h2 || 1 & n3) && p2 !== (p2 = t3[0].subject + "") && main.r(l2, p2), (!h2 || 1 & n3) && m2 !== (m2 = " " + t3[0].preview) && main.r(d2, m2);
      }, i(t3) {
        h2 || (main.A(e2.$$.fragment, t3), main.A(s2.$$.fragment, t3), h2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), main.B(s2.$$.fragment, t3), h2 = false;
      }, d(t3) {
        main.C(e2, t3), t3 && main.f(n2), main.C(s2, t3), t3 && main.f(r2), t3 && main.f(c2), t3 && main.f(d2);
      }};
    }
    function Ne(t2) {
      let e2, n2, s2, r2, o2, d2, h2, m2;
      const $2 = [Pe, Ee], y2 = [];
      function w2(t3, e3) {
        return t3[0].member ? 0 : 1;
      }
      s2 = w2(t2), r2 = y2[s2] = $2[s2](t2);
      let x2 = t2[1] && ze(t2);
      return {c() {
        e2 = main.e("li"), n2 = main.e("div"), r2.c(), d2 = main.a(), x2 && x2.c(), h2 = main.m(), main.b(e2, "id", o2 = "MailItem-" + t2[2]), main.j(e2, "height", t2[5] ? "62px" : "84px"), main.b(e2, "class", "border-b-2 rounded p-1 w-full"), main.L(e2, "hidden", t2[1]);
      }, m(t3, r3) {
        main.c(t3, e2, r3), main.d(e2, n2), y2[s2].m(n2, null), main.c(t3, d2, r3), x2 && x2.m(t3, r3), main.c(t3, h2, r3), m2 = true;
      }, p(t3, [i2]) {
        let a2 = s2;
        s2 = w2(t3), s2 === a2 ? y2[s2].p(t3, i2) : (main.J(), main.B(y2[a2], 1, 1, () => {
          y2[a2] = null;
        }), main.K(), r2 = y2[s2], r2 ? r2.p(t3, i2) : (r2 = y2[s2] = $2[s2](t3), r2.c()), main.A(r2, 1), r2.m(n2, null)), (!m2 || 4 & i2 && o2 !== (o2 = "MailItem-" + t3[2])) && main.b(e2, "id", o2), (!m2 || 32 & i2) && main.j(e2, "height", t3[5] ? "62px" : "84px"), 2 & i2 && main.L(e2, "hidden", t3[1]), t3[1] ? x2 ? (x2.p(t3, i2), 2 & i2 && main.A(x2, 1)) : (x2 = ze(t3), x2.c(), main.A(x2, 1), x2.m(h2.parentNode, h2)) : x2 && (main.J(), main.B(x2, 1, 1, () => {
          x2 = null;
        }), main.K());
      }, i(t3) {
        m2 || (main.A(r2), main.A(x2), m2 = true);
      }, o(t3) {
        main.B(r2), main.B(x2), m2 = false;
      }, d(t3) {
        t3 && main.f(e2), y2[s2].d(), t3 && main.f(d2), x2 && x2.d(t3), t3 && main.f(h2);
      }};
    }
    function Re(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, u2, d2;
      main.g(t2, ct, (t3) => n2(10, i2 = t3)), main.g(t2, dt, (t3) => n2(11, o2 = t3)), main.g(t2, main.o, (t3) => n2(7, c2 = t3)), main.g(t2, main.p, (t3) => n2(8, l2 = t3)), main.g(t2, G, (t3) => n2(9, a2 = t3)), main.g(t2, ht, (t3) => n2(5, u2 = t3)), main.g(t2, ft, (t3) => n2(6, d2 = t3));
      let {pm: h2} = e2, {hidden: f2} = e2, {index: g2} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(0, h2 = t3.pm), "hidden" in t3 && n2(1, f2 = t3.hidden), "index" in t3 && n2(2, g2 = t3.index);
      }, t2.$$.update = () => {
        385 & t2.$$.dirty && n2(3, s2 = () => {
          h2 && (main.q(ct, i2 = h2, i2), main.q(dt, o2 = false, o2), c2("./", Object.assign(Object.assign({}, l2), {showList: false})));
        }), 512 & t2.$$.dirty && n2(4, r2 = (t3) => a2.has(t3.id) ? Array.from(a2.get(t3.id)) : []);
      }, [h2, f2, g2, s2, r2, u2, d2, c2, l2, a2];
    }
    class Fe extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Re, Ne, main.s, {pm: 0, hidden: 1, index: 2});
      }
    }
    function De(t2, e2, n2) {
      const s2 = t2.slice();
      return s2[9] = e2[n2], s2;
    }
    function Te(t2) {
      let e2, n2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", "ml-5 m-3 w-10/12"), main.b(e2, "alt", "no mail"), e2.src !== (n2 = "./img/izone-logo-card.png") && main.b(e2, "src", "./img/izone-logo-card.png");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p: main.n, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Je(t2) {
      let e2, n2, s2, r2, c2, p2, m2, $2, y2, w2, x2, v2, L2, I2, E2, P2, B2, W2, N2, R2, F2 = t2[0].subject + "", D2 = t2[0].preview + "";
      n2 = new qt({props: {pm: t2[0]}}), $2 = new At({props: {pm: t2[0]}}), x2 = new Nt({props: {pm: t2[0]}}), L2 = new vt({props: {time: t2[0].time}});
      let T2 = t2[2](t2[0]), J2 = [];
      for (let e3 = 0; e3 < T2.length; e3 += 1)
        J2[e3] = Ve(De(t2, T2, e3));
      const V2 = (t3) => main.B(J2[t3], 1, 1, () => {
        J2[t3] = null;
      });
      return {c() {
        e2 = main.e("div"), main.y(n2.$$.fragment), s2 = main.a(), r2 = main.e("h4"), c2 = main.t(F2), p2 = main.a(), m2 = main.e("div"), main.y($2.$$.fragment), y2 = main.a(), w2 = main.e("div"), main.y(x2.$$.fragment), v2 = main.a(), main.y(L2.$$.fragment), I2 = main.a();
        for (let t3 = 0; t3 < J2.length; t3 += 1)
          J2[t3].c();
        E2 = main.a(), P2 = main.e("p"), B2 = main.t(D2), main.b(r2, "class", "w-10/12 h-12"), main.b(m2, "class", "absolute inset-y-0 right-0 m-2"), main.b(w2, "class", "flex flex-wrap"), main.b(P2, "class", "m-1 text-sm");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.z(n2, e2, null), main.d(e2, s2), main.d(e2, r2), main.d(r2, c2), main.c(i2, p2, o2), main.c(i2, m2, o2), main.z($2, m2, null), main.c(i2, y2, o2), main.c(i2, w2, o2), main.z(x2, w2, null), main.d(w2, v2), main.z(L2, w2, null), main.d(w2, I2);
        for (let t3 = 0; t3 < J2.length; t3 += 1)
          J2[t3].m(w2, null);
        main.c(i2, E2, o2), main.c(i2, P2, o2), main.d(P2, B2), W2 = true, N2 || (R2 = [main.l(e2, "click", function() {
          main.k(t2[3]) && t2[3].apply(this, arguments);
        }), main.l(P2, "click", function() {
          main.k(t2[3]) && t2[3].apply(this, arguments);
        })], N2 = true);
      }, p(e3, s3) {
        t2 = e3;
        const r3 = {};
        1 & s3 && (r3.pm = t2[0]), n2.$set(r3), (!W2 || 1 & s3) && F2 !== (F2 = t2[0].subject + "") && main.r(c2, F2);
        const i2 = {};
        1 & s3 && (i2.pm = t2[0]), $2.$set(i2);
        const o2 = {};
        1 & s3 && (o2.pm = t2[0]), x2.$set(o2);
        const l2 = {};
        if (1 & s3 && (l2.time = t2[0].time), L2.$set(l2), 5 & s3) {
          let e4;
          for (T2 = t2[2](t2[0]), e4 = 0; e4 < T2.length; e4 += 1) {
            const n3 = De(t2, T2, e4);
            J2[e4] ? (J2[e4].p(n3, s3), main.A(J2[e4], 1)) : (J2[e4] = Ve(n3), J2[e4].c(), main.A(J2[e4], 1), J2[e4].m(w2, null));
          }
          for (main.J(), e4 = T2.length; e4 < J2.length; e4 += 1)
            V2(e4);
          main.K();
        }
        (!W2 || 1 & s3) && D2 !== (D2 = t2[0].preview + "") && main.r(B2, D2);
      }, i(t3) {
        if (!W2) {
          main.A(n2.$$.fragment, t3), main.A($2.$$.fragment, t3), main.A(x2.$$.fragment, t3), main.A(L2.$$.fragment, t3);
          for (let t4 = 0; t4 < T2.length; t4 += 1)
            main.A(J2[t4]);
          W2 = true;
        }
      }, o(t3) {
        main.B(n2.$$.fragment, t3), main.B($2.$$.fragment, t3), main.B(x2.$$.fragment, t3), main.B(L2.$$.fragment, t3), J2 = J2.filter(Boolean);
        for (let t4 = 0; t4 < J2.length; t4 += 1)
          main.B(J2[t4]);
        W2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.C(n2), t3 && main.f(p2), t3 && main.f(m2), main.C($2), t3 && main.f(y2), t3 && main.f(w2), main.C(x2), main.C(L2), main.D(J2, t3), t3 && main.f(E2), t3 && main.f(P2), N2 = false, main.x(R2);
      }};
    }
    function Ve(t2) {
      let e2, n2;
      return e2 = new wt({props: {tag: t2[9]}}), {c() {
        main.y(e2.$$.fragment);
      }, m(t3, s2) {
        main.z(e2, t3, s2), n2 = true;
      }, p(t3, n3) {
        const s2 = {};
        5 & n3 && (s2.tag = t3[9]), e2.$set(s2);
      }, i(t3) {
        n2 || (main.A(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.C(e2, t3);
      }};
    }
    function He(t2) {
      let e2, n2, s2, r2, o2;
      const u2 = [Je, Te], d2 = [];
      function h2(t3, e3) {
        return t3[0].member ? 0 : 1;
      }
      return n2 = h2(t2), s2 = d2[n2] = u2[n2](t2), {c() {
        e2 = main.e("div"), s2.c(), main.b(e2, "id", r2 = "MailCard-" + t2[1]), main.j(e2, "height", "156px"), main.b(e2, "class", "\r\nw-64 m-3 p-1\r\nrelative overflow-y-scroll\r\nbg-white shadow-md rounded-md");
      }, m(t3, s3) {
        main.c(t3, e2, s3), d2[n2].m(e2, null), o2 = true;
      }, p(t3, [i2]) {
        let c2 = n2;
        n2 = h2(t3), n2 === c2 ? d2[n2].p(t3, i2) : (main.J(), main.B(d2[c2], 1, 1, () => {
          d2[c2] = null;
        }), main.K(), s2 = d2[n2], s2 ? s2.p(t3, i2) : (s2 = d2[n2] = u2[n2](t3), s2.c()), main.A(s2, 1), s2.m(e2, null)), (!o2 || 2 & i2 && r2 !== (r2 = "MailCard-" + t3[1])) && main.b(e2, "id", r2);
      }, i(t3) {
        o2 || (main.A(s2), o2 = true);
      }, o(t3) {
        main.B(s2), o2 = false;
      }, d(t3) {
        t3 && main.f(e2), d2[n2].d();
      }};
    }
    function Ke(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2;
      main.g(t2, G, (t3) => n2(4, i2 = t3)), main.g(t2, ct, (t3) => n2(7, o2 = t3)), main.g(t2, dt, (t3) => n2(8, c2 = t3)), main.g(t2, main.o, (t3) => n2(5, l2 = t3)), main.g(t2, main.p, (t3) => n2(6, a2 = t3));
      let {pm: u2} = e2, {index: d2} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(0, u2 = t3.pm), "index" in t3 && n2(1, d2 = t3.index);
      }, t2.$$.update = () => {
        16 & t2.$$.dirty && n2(2, s2 = (t3) => i2.has(t3.id) ? Array.from(i2.get(t3.id)) : []), 97 & t2.$$.dirty && n2(3, r2 = () => {
          u2 && (main.q(ct, o2 = u2, o2), main.q(dt, c2 = false, c2), l2("./", Object.assign(Object.assign({}, a2), {showList: false})));
        });
      }, [u2, d2, s2, r2, i2, l2, a2];
    }
    class qe extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Ke, He, main.s, {pm: 0, index: 1});
      }
    }
    function Ze(t2) {
      return Array.isArray ? Array.isArray(t2) : en(t2) === "[object Array]";
    }
    function Qe(t2) {
      return typeof t2 == "string";
    }
    function Ue(t2) {
      return typeof t2 == "number";
    }
    function Ye(t2) {
      return t2 === true || t2 === false || function(t3) {
        return Ge(t3) && t3 !== null;
      }(t2) && en(t2) == "[object Boolean]";
    }
    function Ge(t2) {
      return typeof t2 == "object";
    }
    function Xe(t2) {
      return t2 != null;
    }
    function tn(t2) {
      return !t2.trim().length;
    }
    function en(t2) {
      return t2 == null ? t2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t2);
    }
    const nn = Object.prototype.hasOwnProperty;
    class sn {
      constructor(t2) {
        this._keys = [], this._keyMap = {};
        let e2 = 0;
        t2.forEach((t3) => {
          let n2 = rn(t3);
          e2 += n2.weight, this._keys.push(n2), this._keyMap[n2.id] = n2, e2 += n2.weight;
        }), this._keys.forEach((t3) => {
          t3.weight /= e2;
        });
      }
      get(t2) {
        return this._keyMap[t2];
      }
      keys() {
        return this._keys;
      }
      toJSON() {
        return JSON.stringify(this._keys);
      }
    }
    function rn(t2) {
      let e2 = null, n2 = null, s2 = null, r2 = 1;
      if (Qe(t2) || Ze(t2))
        s2 = t2, e2 = on(t2), n2 = cn(t2);
      else {
        if (!nn.call(t2, "name"))
          throw new Error(((t3) => `Missing ${t3} property in key`)("name"));
        const i2 = t2.name;
        if (s2 = i2, nn.call(t2, "weight") && (r2 = t2.weight, r2 <= 0))
          throw new Error(((t3) => `Property 'weight' in key '${t3}' must be a positive integer`)(i2));
        e2 = on(i2), n2 = cn(i2);
      }
      return {path: e2, id: n2, weight: r2, src: s2};
    }
    function on(t2) {
      return Ze(t2) ? t2 : t2.split(".");
    }
    function cn(t2) {
      return Ze(t2) ? t2.join(".") : t2;
    }
    var ln = {isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: (t2, e2) => t2.score === e2.score ? t2.idx < e2.idx ? -1 : 1 : t2.score < e2.score ? -1 : 1, includeMatches: false, findAllMatches: false, minMatchCharLength: 1, location: 0, threshold: 0.6, distance: 100, ...{useExtendedSearch: false, getFn: function(t2, e2) {
      let n2 = [], s2 = false;
      const r2 = (t3, e3, i2) => {
        if (Xe(t3))
          if (e3[i2]) {
            const o2 = t3[e3[i2]];
            if (!Xe(o2))
              return;
            if (i2 === e3.length - 1 && (Qe(o2) || Ue(o2) || Ye(o2)))
              n2.push(function(t4) {
                return t4 == null ? "" : function(t5) {
                  if (typeof t5 == "string")
                    return t5;
                  let e4 = t5 + "";
                  return e4 == "0" && 1 / t5 == -1 / 0 ? "-0" : e4;
                }(t4);
              }(o2));
            else if (Ze(o2)) {
              s2 = true;
              for (let t4 = 0, n3 = o2.length; t4 < n3; t4 += 1)
                r2(o2[t4], e3, i2 + 1);
            } else
              e3.length && r2(o2, e3, i2 + 1);
          } else
            n2.push(t3);
      };
      return r2(t2, Qe(e2) ? e2.split(".") : e2, 0), s2 ? n2 : n2[0];
    }, ignoreLocation: false, ignoreFieldNorm: false}};
    const an = /[^ ]+/g;
    class un {
      constructor({getFn: t2 = ln.getFn} = {}) {
        this.norm = function(t3 = 3) {
          const e2 = new Map(), n2 = Math.pow(10, t3);
          return {get(t4) {
            const s2 = t4.match(an).length;
            if (e2.has(s2))
              return e2.get(s2);
            const r2 = 1 / Math.sqrt(s2), i2 = parseFloat(Math.round(r2 * n2) / n2);
            return e2.set(s2, i2), i2;
          }, clear() {
            e2.clear();
          }};
        }(3), this.getFn = t2, this.isCreated = false, this.setIndexRecords();
      }
      setSources(t2 = []) {
        this.docs = t2;
      }
      setIndexRecords(t2 = []) {
        this.records = t2;
      }
      setKeys(t2 = []) {
        this.keys = t2, this._keysMap = {}, t2.forEach((t3, e2) => {
          this._keysMap[t3.id] = e2;
        });
      }
      create() {
        !this.isCreated && this.docs.length && (this.isCreated = true, Qe(this.docs[0]) ? this.docs.forEach((t2, e2) => {
          this._addString(t2, e2);
        }) : this.docs.forEach((t2, e2) => {
          this._addObject(t2, e2);
        }), this.norm.clear());
      }
      add(t2) {
        const e2 = this.size();
        Qe(t2) ? this._addString(t2, e2) : this._addObject(t2, e2);
      }
      removeAt(t2) {
        this.records.splice(t2, 1);
        for (let e2 = t2, n2 = this.size(); e2 < n2; e2 += 1)
          this.records[e2].i -= 1;
      }
      getValueForItemAtKeyId(t2, e2) {
        return t2[this._keysMap[e2]];
      }
      size() {
        return this.records.length;
      }
      _addString(t2, e2) {
        if (!Xe(t2) || tn(t2))
          return;
        let n2 = {v: t2, i: e2, n: this.norm.get(t2)};
        this.records.push(n2);
      }
      _addObject(t2, e2) {
        let n2 = {i: e2, $: {}};
        this.keys.forEach((e3, s2) => {
          let r2 = this.getFn(t2, e3.path);
          if (Xe(r2)) {
            if (Ze(r2)) {
              let t3 = [];
              const e4 = [{nestedArrIndex: -1, value: r2}];
              for (; e4.length; ) {
                const {nestedArrIndex: n3, value: s3} = e4.pop();
                if (Xe(s3))
                  if (Qe(s3) && !tn(s3)) {
                    let e5 = {v: s3, i: n3, n: this.norm.get(s3)};
                    t3.push(e5);
                  } else
                    Ze(s3) && s3.forEach((t4, n4) => {
                      e4.push({nestedArrIndex: n4, value: t4});
                    });
              }
              n2.$[s2] = t3;
            } else if (!tn(r2)) {
              let t3 = {v: r2, n: this.norm.get(r2)};
              n2.$[s2] = t3;
            }
          }
        }), this.records.push(n2);
      }
      toJSON() {
        return {keys: this.keys, records: this.records};
      }
    }
    function dn(t2, e2, {getFn: n2 = ln.getFn} = {}) {
      const s2 = new un({getFn: n2});
      return s2.setKeys(t2.map(rn)), s2.setSources(e2), s2.create(), s2;
    }
    function hn(t2, {errors: e2 = 0, currentLocation: n2 = 0, expectedLocation: s2 = 0, distance: r2 = ln.distance, ignoreLocation: i2 = ln.ignoreLocation} = {}) {
      const o2 = e2 / t2.length;
      if (i2)
        return o2;
      const c2 = Math.abs(s2 - n2);
      return r2 ? o2 + c2 / r2 : c2 ? 1 : o2;
    }
    function fn(t2, e2, n2, {location: s2 = ln.location, distance: r2 = ln.distance, threshold: i2 = ln.threshold, findAllMatches: o2 = ln.findAllMatches, minMatchCharLength: c2 = ln.minMatchCharLength, includeMatches: l2 = ln.includeMatches, ignoreLocation: a2 = ln.ignoreLocation} = {}) {
      if (e2.length > 32)
        throw new Error(`Pattern length exceeds max of ${32}.`);
      const u2 = e2.length, d2 = t2.length, h2 = Math.max(0, Math.min(s2, d2));
      let f2 = i2, g2 = h2;
      const p2 = c2 > 1 || l2, m2 = p2 ? Array(d2) : [];
      let $2;
      for (; ($2 = t2.indexOf(e2, g2)) > -1; ) {
        let t3 = hn(e2, {currentLocation: $2, expectedLocation: h2, distance: r2, ignoreLocation: a2});
        if (f2 = Math.min(t3, f2), g2 = $2 + u2, p2) {
          let t4 = 0;
          for (; t4 < u2; )
            m2[$2 + t4] = 1, t4 += 1;
        }
      }
      g2 = -1;
      let y2 = [], w2 = 1, x2 = u2 + d2;
      const b2 = 1 << u2 - 1;
      for (let s3 = 0; s3 < u2; s3 += 1) {
        let i3 = 0, c3 = x2;
        for (; i3 < c3; ) {
          hn(e2, {errors: s3, currentLocation: h2 + c3, expectedLocation: h2, distance: r2, ignoreLocation: a2}) <= f2 ? i3 = c3 : x2 = c3, c3 = Math.floor((x2 - i3) / 2 + i3);
        }
        x2 = c3;
        let l3 = Math.max(1, h2 - c3 + 1), $3 = o2 ? d2 : Math.min(h2 + c3, d2) + u2, v3 = Array($3 + 2);
        v3[$3 + 1] = (1 << s3) - 1;
        for (let i4 = $3; i4 >= l3; i4 -= 1) {
          let o3 = i4 - 1, c4 = n2[t2.charAt(o3)];
          if (p2 && (m2[o3] = +!!c4), v3[i4] = (v3[i4 + 1] << 1 | 1) & c4, s3 && (v3[i4] |= (y2[i4 + 1] | y2[i4]) << 1 | 1 | y2[i4 + 1]), v3[i4] & b2 && (w2 = hn(e2, {errors: s3, currentLocation: o3, expectedLocation: h2, distance: r2, ignoreLocation: a2}), w2 <= f2)) {
            if (f2 = w2, g2 = o3, g2 <= h2)
              break;
            l3 = Math.max(1, 2 * h2 - g2);
          }
        }
        if (hn(e2, {errors: s3 + 1, currentLocation: h2, expectedLocation: h2, distance: r2, ignoreLocation: a2}) > f2)
          break;
        y2 = v3;
      }
      const v2 = {isMatch: g2 >= 0, score: Math.max(1e-3, w2)};
      if (p2) {
        const t3 = function(t4 = [], e3 = ln.minMatchCharLength) {
          let n3 = [], s3 = -1, r3 = -1, i3 = 0;
          for (let o3 = t4.length; i3 < o3; i3 += 1) {
            let o4 = t4[i3];
            o4 && s3 === -1 ? s3 = i3 : o4 || s3 === -1 || (r3 = i3 - 1, r3 - s3 + 1 >= e3 && n3.push([s3, r3]), s3 = -1);
          }
          return t4[i3 - 1] && i3 - s3 >= e3 && n3.push([s3, i3 - 1]), n3;
        }(m2, c2);
        t3.length ? l2 && (v2.indices = t3) : v2.isMatch = false;
      }
      return v2;
    }
    function gn(t2) {
      let e2 = {};
      for (let n2 = 0, s2 = t2.length; n2 < s2; n2 += 1) {
        const r2 = t2.charAt(n2);
        e2[r2] = (e2[r2] || 0) | 1 << s2 - n2 - 1;
      }
      return e2;
    }
    class pn {
      constructor(t2, {location: e2 = ln.location, threshold: n2 = ln.threshold, distance: s2 = ln.distance, includeMatches: r2 = ln.includeMatches, findAllMatches: i2 = ln.findAllMatches, minMatchCharLength: o2 = ln.minMatchCharLength, isCaseSensitive: c2 = ln.isCaseSensitive, ignoreLocation: l2 = ln.ignoreLocation} = {}) {
        if (this.options = {location: e2, threshold: n2, distance: s2, includeMatches: r2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2}, this.pattern = c2 ? t2 : t2.toLowerCase(), this.chunks = [], !this.pattern.length)
          return;
        const a2 = (t3, e3) => {
          this.chunks.push({pattern: t3, alphabet: gn(t3), startIndex: e3});
        }, u2 = this.pattern.length;
        if (u2 > 32) {
          let t3 = 0;
          const e3 = u2 % 32, n3 = u2 - e3;
          for (; t3 < n3; )
            a2(this.pattern.substr(t3, 32), t3), t3 += 32;
          if (e3) {
            const t4 = u2 - 32;
            a2(this.pattern.substr(t4), t4);
          }
        } else
          a2(this.pattern, 0);
      }
      searchIn(t2) {
        const {isCaseSensitive: e2, includeMatches: n2} = this.options;
        if (e2 || (t2 = t2.toLowerCase()), this.pattern === t2) {
          let e3 = {isMatch: true, score: 0};
          return n2 && (e3.indices = [[0, t2.length - 1]]), e3;
        }
        const {location: s2, distance: r2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, ignoreLocation: l2} = this.options;
        let a2 = [], u2 = 0, d2 = false;
        this.chunks.forEach(({pattern: e3, alphabet: h3, startIndex: f2}) => {
          const {isMatch: g2, score: p2, indices: m2} = fn(t2, e3, h3, {location: s2 + f2, distance: r2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, includeMatches: n2, ignoreLocation: l2});
          g2 && (d2 = true), u2 += p2, g2 && m2 && (a2 = [...a2, ...m2]);
        });
        let h2 = {isMatch: d2, score: d2 ? u2 / this.chunks.length : 1};
        return d2 && n2 && (h2.indices = a2), h2;
      }
    }
    class mn {
      constructor(t2) {
        this.pattern = t2;
      }
      static isMultiMatch(t2) {
        return $n(t2, this.multiRegex);
      }
      static isSingleMatch(t2) {
        return $n(t2, this.singleRegex);
      }
      search() {
      }
    }
    function $n(t2, e2) {
      const n2 = t2.match(e2);
      return n2 ? n2[1] : null;
    }
    class yn extends mn {
      constructor(t2, {location: e2 = ln.location, threshold: n2 = ln.threshold, distance: s2 = ln.distance, includeMatches: r2 = ln.includeMatches, findAllMatches: i2 = ln.findAllMatches, minMatchCharLength: o2 = ln.minMatchCharLength, isCaseSensitive: c2 = ln.isCaseSensitive, ignoreLocation: l2 = ln.ignoreLocation} = {}) {
        super(t2), this._bitapSearch = new pn(t2, {location: e2, threshold: n2, distance: s2, includeMatches: r2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2});
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
      search(t2) {
        return this._bitapSearch.searchIn(t2);
      }
    }
    class wn extends mn {
      constructor(t2) {
        super(t2);
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
      search(t2) {
        let e2, n2 = 0;
        const s2 = [], r2 = this.pattern.length;
        for (; (e2 = t2.indexOf(this.pattern, n2)) > -1; )
          n2 = e2 + r2, s2.push([e2, n2 - 1]);
        const i2 = !!s2.length;
        return {isMatch: i2, score: i2 ? 0 : 1, indices: s2};
      }
    }
    const xn = [class extends mn {
      constructor(t2) {
        super(t2);
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
      search(t2) {
        const e2 = t2 === this.pattern;
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, this.pattern.length - 1]};
      }
    }, wn, class extends mn {
      constructor(t2) {
        super(t2);
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
      search(t2) {
        const e2 = t2.startsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, this.pattern.length - 1]};
      }
    }, class extends mn {
      constructor(t2) {
        super(t2);
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
      search(t2) {
        const e2 = !t2.startsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, t2.length - 1]};
      }
    }, class extends mn {
      constructor(t2) {
        super(t2);
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
      search(t2) {
        const e2 = !t2.endsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, t2.length - 1]};
      }
    }, class extends mn {
      constructor(t2) {
        super(t2);
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
      search(t2) {
        const e2 = t2.endsWith(this.pattern);
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [t2.length - this.pattern.length, t2.length - 1]};
      }
    }, class extends mn {
      constructor(t2) {
        super(t2);
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
      search(t2) {
        const e2 = t2.indexOf(this.pattern) === -1;
        return {isMatch: e2, score: e2 ? 0 : 1, indices: [0, t2.length - 1]};
      }
    }, yn];
    const bn = xn.length;
    const vn = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    const kn = new Set([yn.type, wn.type]);
    class Mn {
      constructor(t2, {isCaseSensitive: e2 = ln.isCaseSensitive, includeMatches: n2 = ln.includeMatches, minMatchCharLength: s2 = ln.minMatchCharLength, ignoreLocation: r2 = ln.ignoreLocation, findAllMatches: i2 = ln.findAllMatches, location: o2 = ln.location, threshold: c2 = ln.threshold, distance: l2 = ln.distance} = {}) {
        this.query = null, this.options = {isCaseSensitive: e2, includeMatches: n2, minMatchCharLength: s2, findAllMatches: i2, ignoreLocation: r2, location: o2, threshold: c2, distance: l2}, this.pattern = e2 ? t2 : t2.toLowerCase(), this.query = function(t3, e3 = {}) {
          return t3.split("|").map((t4) => {
            let n3 = t4.trim().split(vn).filter((t5) => t5 && !!t5.trim()), s3 = [];
            for (let t5 = 0, r3 = n3.length; t5 < r3; t5 += 1) {
              const r4 = n3[t5];
              let i3 = false, o3 = -1;
              for (; !i3 && ++o3 < bn; ) {
                const t6 = xn[o3];
                let n4 = t6.isMultiMatch(r4);
                n4 && (s3.push(new t6(n4, e3)), i3 = true);
              }
              if (!i3)
                for (o3 = -1; ++o3 < bn; ) {
                  const t6 = xn[o3];
                  let n4 = t6.isSingleMatch(r4);
                  if (n4) {
                    s3.push(new t6(n4, e3));
                    break;
                  }
                }
            }
            return s3;
          });
        }(this.pattern, this.options);
      }
      static condition(t2, e2) {
        return e2.useExtendedSearch;
      }
      searchIn(t2) {
        const e2 = this.query;
        if (!e2)
          return {isMatch: false, score: 1};
        const {includeMatches: n2, isCaseSensitive: s2} = this.options;
        t2 = s2 ? t2 : t2.toLowerCase();
        let r2 = 0, i2 = [], o2 = 0;
        for (let s3 = 0, c2 = e2.length; s3 < c2; s3 += 1) {
          const c3 = e2[s3];
          i2.length = 0, r2 = 0;
          for (let e3 = 0, s4 = c3.length; e3 < s4; e3 += 1) {
            const s5 = c3[e3], {isMatch: l2, indices: a2, score: u2} = s5.search(t2);
            if (!l2) {
              o2 = 0, r2 = 0, i2.length = 0;
              break;
            }
            if (r2 += 1, o2 += u2, n2) {
              const t3 = s5.constructor.type;
              kn.has(t3) ? i2 = [...i2, ...a2] : i2.push(a2);
            }
          }
          if (r2) {
            let t3 = {isMatch: true, score: o2 / r2};
            return n2 && (t3.indices = i2), t3;
          }
        }
        return {isMatch: false, score: 1};
      }
    }
    const _n = [];
    function Cn(t2, e2) {
      for (let n2 = 0, s2 = _n.length; n2 < s2; n2 += 1) {
        let s3 = _n[n2];
        if (s3.condition(t2, e2))
          return new s3(t2, e2);
      }
      return new pn(t2, e2);
    }
    const On = "$and";
    const Sn = "$or";
    const jn = "$path";
    const Ln = "$val";
    const In = (t2) => !(!t2[On] && !t2[Sn]);
    const En = (t2) => ({[On]: Object.keys(t2).map((e2) => ({[e2]: t2[e2]}))});
    function Pn(t2, e2, {auto: n2 = true} = {}) {
      const s2 = (t3) => {
        let r2 = Object.keys(t3);
        const i2 = ((t4) => !!t4[jn])(t3);
        if (!i2 && r2.length > 1 && !In(t3))
          return s2(En(t3));
        if (((t4) => !Ze(t4) && Ge(t4) && !In(t4))(t3)) {
          const s3 = i2 ? t3[jn] : r2[0], o3 = i2 ? t3[Ln] : t3[s3];
          if (!Qe(o3))
            throw new Error(((t4) => `Invalid value for key ${t4}`)(s3));
          const c2 = {keyId: cn(s3), pattern: o3};
          return n2 && (c2.searcher = Cn(o3, e2)), c2;
        }
        let o2 = {children: [], operator: r2[0]};
        return r2.forEach((e3) => {
          const n3 = t3[e3];
          Ze(n3) && n3.forEach((t4) => {
            o2.children.push(s2(t4));
          });
        }), o2;
      };
      return In(t2) || (t2 = En(t2)), s2(t2);
    }
    function Bn(t2, e2) {
      const n2 = t2.matches;
      e2.matches = [], Xe(n2) && n2.forEach((t3) => {
        if (!Xe(t3.indices) || !t3.indices.length)
          return;
        const {indices: n3, value: s2} = t3;
        let r2 = {indices: n3, value: s2};
        t3.key && (r2.key = t3.key.src), t3.idx > -1 && (r2.refIndex = t3.idx), e2.matches.push(r2);
      });
    }
    function An(t2, e2) {
      e2.score = t2.score;
    }
    class zn {
      constructor(t2, e2 = {}, n2) {
        this.options = {...ln, ...e2}, this.options.useExtendedSearch, this._keyStore = new sn(this.options.keys), this.setCollection(t2, n2);
      }
      setCollection(t2, e2) {
        if (this._docs = t2, e2 && !(e2 instanceof un))
          throw new Error("Incorrect 'index' type");
        this._myIndex = e2 || dn(this.options.keys, this._docs, {getFn: this.options.getFn});
      }
      add(t2) {
        Xe(t2) && (this._docs.push(t2), this._myIndex.add(t2));
      }
      remove(t2 = () => false) {
        const e2 = [];
        for (let n2 = 0, s2 = this._docs.length; n2 < s2; n2 += 1) {
          const r2 = this._docs[n2];
          t2(r2, n2) && (this.removeAt(n2), n2 -= 1, s2 -= 1, e2.push(r2));
        }
        return e2;
      }
      removeAt(t2) {
        this._docs.splice(t2, 1), this._myIndex.removeAt(t2);
      }
      getIndex() {
        return this._myIndex;
      }
      search(t2, {limit: e2 = -1} = {}) {
        const {includeMatches: n2, includeScore: s2, shouldSort: r2, sortFn: i2, ignoreFieldNorm: o2} = this.options;
        let c2 = Qe(t2) ? Qe(this._docs[0]) ? this._searchStringList(t2) : this._searchObjectList(t2) : this._searchLogical(t2);
        return function(t3, {ignoreFieldNorm: e3 = ln.ignoreFieldNorm}) {
          t3.forEach((t4) => {
            let n3 = 1;
            t4.matches.forEach(({key: t5, norm: s3, score: r3}) => {
              const i3 = t5 ? t5.weight : null;
              n3 *= Math.pow(r3 === 0 && i3 ? Number.EPSILON : r3, (i3 || 1) * (e3 ? 1 : s3));
            }), t4.score = n3;
          });
        }(c2, {ignoreFieldNorm: o2}), r2 && c2.sort(i2), Ue(e2) && e2 > -1 && (c2 = c2.slice(0, e2)), function(t3, e3, {includeMatches: n3 = ln.includeMatches, includeScore: s3 = ln.includeScore} = {}) {
          const r3 = [];
          return n3 && r3.push(Bn), s3 && r3.push(An), t3.map((t4) => {
            const {idx: n4} = t4, s4 = {item: e3[n4], refIndex: n4};
            return r3.length && r3.forEach((e4) => {
              e4(t4, s4);
            }), s4;
          });
        }(c2, this._docs, {includeMatches: n2, includeScore: s2});
      }
      _searchStringList(t2) {
        const e2 = Cn(t2, this.options), {records: n2} = this._myIndex, s2 = [];
        return n2.forEach(({v: t3, i: n3, n: r2}) => {
          if (!Xe(t3))
            return;
          const {isMatch: i2, score: o2, indices: c2} = e2.searchIn(t3);
          i2 && s2.push({item: t3, idx: n3, matches: [{score: o2, value: t3, norm: r2, indices: c2}]});
        }), s2;
      }
      _searchLogical(t2) {
        const e2 = Pn(t2, this.options), n2 = (t3, e3, s3) => {
          if (!t3.children) {
            const {keyId: n3, searcher: r3} = t3, i3 = this._findMatches({key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(e3, n3), searcher: r3});
            return i3 && i3.length ? [{idx: s3, item: e3, matches: i3}] : [];
          }
          switch (t3.operator) {
            case On: {
              const r3 = [];
              for (let i3 = 0, o2 = t3.children.length; i3 < o2; i3 += 1) {
                const o3 = t3.children[i3], c2 = n2(o3, e3, s3);
                if (!c2.length)
                  return [];
                r3.push(...c2);
              }
              return r3;
            }
            case Sn: {
              const r3 = [];
              for (let i3 = 0, o2 = t3.children.length; i3 < o2; i3 += 1) {
                const o3 = t3.children[i3], c2 = n2(o3, e3, s3);
                if (c2.length) {
                  r3.push(...c2);
                  break;
                }
              }
              return r3;
            }
          }
        }, s2 = this._myIndex.records, r2 = {}, i2 = [];
        return s2.forEach(({$: t3, i: s3}) => {
          if (Xe(t3)) {
            let o2 = n2(e2, t3, s3);
            o2.length && (r2[s3] || (r2[s3] = {idx: s3, item: t3, matches: []}, i2.push(r2[s3])), o2.forEach(({matches: t4}) => {
              r2[s3].matches.push(...t4);
            }));
          }
        }), i2;
      }
      _searchObjectList(t2) {
        const e2 = Cn(t2, this.options), {keys: n2, records: s2} = this._myIndex, r2 = [];
        return s2.forEach(({$: t3, i: s3}) => {
          if (!Xe(t3))
            return;
          let i2 = [];
          n2.forEach((n3, s4) => {
            i2.push(...this._findMatches({key: n3, value: t3[s4], searcher: e2}));
          }), i2.length && r2.push({idx: s3, item: t3, matches: i2});
        }), r2;
      }
      _findMatches({key: t2, value: e2, searcher: n2}) {
        if (!Xe(e2))
          return [];
        let s2 = [];
        if (Ze(e2))
          e2.forEach(({v: e3, i: r2, n: i2}) => {
            if (!Xe(e3))
              return;
            const {isMatch: o2, score: c2, indices: l2} = n2.searchIn(e3);
            o2 && s2.push({score: c2, key: t2, value: e3, idx: r2, norm: i2, indices: l2});
          });
        else {
          const {v: r2, n: i2} = e2, {isMatch: o2, score: c2, indices: l2} = n2.searchIn(r2);
          o2 && s2.push({score: c2, key: t2, value: r2, norm: i2, indices: l2});
        }
        return s2;
      }
    }
    zn.version = "6.4.6", zn.createIndex = dn, zn.parseIndex = function(t2, {getFn: e2 = ln.getFn} = {}) {
      const {keys: n2, records: s2} = t2, r2 = new un({getFn: e2});
      return r2.setKeys(n2), r2.setIndexRecords(s2), r2;
    }, zn.config = ln, zn.parseQuery = Pn, function(...t2) {
      _n.push(...t2);
    }(Mn);
    const Wn = {useExtendedSearch: true, keys: ["subject", "preview"]};
    let Nn = main.h(ot, (t2) => new zn(t2, Wn));
    let Rn = main.w("");
    let Fn = main.w(false);
    let Dn = main.h([ot, Nn, Rn, Fn], ([t2, e2, n2, s2]) => n2 ? e2.search((s2 ? "" : "'") + n2).map((t3) => t3.item) : t2);
    function Tn(t2) {
      let e2, n2, s2;
      return {c() {
        e2 = main.e("span"), n2 = main.t(t2[0]), s2 = main.t("\uAC74"), main.b(e2, "class", "bg-red-100 rounded pr-1");
      }, m(t3, r2) {
        main.c(t3, e2, r2), main.d(e2, n2), main.d(e2, s2);
      }, p(t3, e3) {
        1 & e3 && main.r(n2, t3[0]);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Jn(t2) {
      let e2, n2, s2, r2, o2, c2, h2, $2, y2, w2, x2 = t2[1] && Tn(t2);
      return {c() {
        e2 = main.e("span"), n2 = main.e("label"), n2.textContent = "\uBD80\uBD84 \uC77C\uCE58", s2 = main.a(), r2 = main.e("input"), o2 = main.a(), c2 = main.e("input"), h2 = main.a(), x2 && x2.c(), $2 = main.m(), main.b(n2, "for", "fuzzy"), main.b(r2, "id", "fuzzy"), main.b(r2, "type", "checkbox"), main.b(e2, "class", "bg-red-100 rounded p-0.5 m-1"), main.b(c2, "class", "m-1 border-1 border-gray-400 rounded w-28"), main.b(c2, "type", "text"), main.b(c2, "placeholder", "\uAC80\uC0C9");
      }, m(i2, l2) {
        main.c(i2, e2, l2), main.d(e2, n2), main.d(e2, s2), main.d(e2, r2), r2.checked = t2[2], main.c(i2, o2, l2), main.c(i2, c2, l2), main.v(c2, t2[1]), main.c(i2, h2, l2), x2 && x2.m(i2, l2), main.c(i2, $2, l2), y2 || (w2 = [main.l(r2, "change", t2[4]), main.l(c2, "change", t2[3]), main.l(c2, "input", t2[5])], y2 = true);
      }, p(t3, [e3]) {
        4 & e3 && (r2.checked = t3[2]), 2 & e3 && c2.value !== t3[1] && main.v(c2, t3[1]), t3[1] ? x2 ? x2.p(t3, e3) : (x2 = Tn(t3), x2.c(), x2.m($2.parentNode, $2)) : x2 && (x2.d(1), x2 = null);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), t3 && main.f(o2), t3 && main.f(c2), t3 && main.f(h2), x2 && x2.d(t3), t3 && main.f($2), y2 = false, main.x(w2);
      }};
    }
    function Vn(t2, e2, n2) {
      let s2, r2, i2, o2, c2;
      main.g(t2, Rn, (t3) => n2(1, s2 = t3)), main.g(t2, ut, (t3) => n2(6, r2 = t3)), main.g(t2, main.o, (t3) => n2(7, i2 = t3)), main.g(t2, main.p, (t3) => n2(8, o2 = t3)), main.g(t2, Fn, (t3) => n2(2, c2 = t3));
      let {search_length: l2} = e2;
      main.p.subscribe((t3) => {
        s2 != t3.search && main.q(Rn, s2 = t3.search || "", s2);
      });
      return t2.$$set = (t3) => {
        "search_length" in t3 && n2(0, l2 = t3.search_length);
      }, [l2, s2, c2, () => {
        main.q(ut, r2 = 1, r2), i2("./", Object.assign(Object.assign({}, o2), {search: s2}));
      }, function() {
        c2 = this.checked, Fn.set(c2);
      }, function() {
        s2 = this.value, Rn.set(s2);
      }];
    }
    class Hn extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Vn, Jn, main.s, {search_length: 0});
      }
    }
    function Kn(t2, e2, n2) {
      const s2 = t2.slice();
      return s2[43] = e2[n2], s2[45] = n2, s2;
    }
    function qn(t2, e2, n2) {
      const s2 = t2.slice();
      return s2[43] = e2[n2], s2[45] = n2, s2;
    }
    function Zn(t2) {
      let e2, n2, s2, r2, c2, h2, p2, $2 = t2[2] ? "on" : "off";
      return {c() {
        e2 = main.e("label"), n2 = main.t("\uB9AC\uC2A4\uD2B8\uBDF0 "), s2 = main.t($2), r2 = main.a(), c2 = main.e("input"), main.b(c2, "id", "isListView"), main.b(c2, "type", "checkbox"), main.b(e2, "class", "p-1"), main.b(e2, "for", "isListView");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(e2, s2), main.d(e2, r2), main.d(e2, c2), c2.checked = t2[2], h2 || (p2 = main.l(c2, "change", t2[28]), h2 = true);
      }, p(t3, e3) {
        4 & e3[0] && $2 !== ($2 = t3[2] ? "on" : "off") && main.r(s2, $2), 4 & e3[0] && (c2.checked = t3[2]);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), h2 = false, p2();
      }};
    }
    function Qn(t2) {
      let e2, n2, s2, r2, c2, h2, m2, $2, y2 = t2[4].value && Un(t2);
      return {c() {
        e2 = main.e("label"), n2 = main.t("\uD0DC\uADF8 \uBAA9\uB85D\r\n                "), s2 = main.e("input"), r2 = main.a(), y2 && y2.c(), c2 = main.m(), main.b(s2, "id", "isListView"), main.b(s2, "type", "checkbox"), main.b(e2, "class", "p-1"), main.b(e2, "for", "isListView");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(e2, s2), s2.checked = t2[6], main.c(i2, r2, o2), y2 && y2.m(i2, o2), main.c(i2, c2, o2), h2 = true, m2 || ($2 = main.l(s2, "change", t2[27]), m2 = true);
      }, p(t3, e3) {
        64 & e3[0] && (s2.checked = t3[6]), t3[4].value ? y2 ? (y2.p(t3, e3), 16 & e3[0] && main.A(y2, 1)) : (y2 = Un(t3), y2.c(), main.A(y2, 1), y2.m(c2.parentNode, c2)) : y2 && (main.J(), main.B(y2, 1, 1, () => {
          y2 = null;
        }), main.K());
      }, i(t3) {
        h2 || (main.A(y2), h2 = true);
      }, o(t3) {
        main.B(y2), h2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && main.f(r2), y2 && y2.d(t3), t3 && main.f(c2), m2 = false, $2();
      }};
    }
    function Un(t2) {
      let e2, n2, s2, r2;
      return s2 = new wt({props: {tag: t2[4], canDelete: true, onRemove: t2[11]}}), {c() {
        e2 = main.e("span"), e2.textContent = "\uD604\uC7AC :", n2 = main.a(), main.y(s2.$$.fragment), main.b(e2, "class", "ml-1 mt-1");
      }, m(t3, i2) {
        main.c(t3, e2, i2), main.c(t3, n2, i2), main.z(s2, t3, i2), r2 = true;
      }, p(t3, e3) {
        const n3 = {};
        16 & e3[0] && (n3.tag = t3[4]), s2.$set(n3);
      }, i(t3) {
        r2 || (main.A(s2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        main.B(s2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), main.C(s2, t3);
      }};
    }
    function Yn(t2) {
      let e2, n2, s2 = t2[7], r2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        r2[e3] = Xn(Kn(t2, s2, e3));
      const o2 = (t3) => main.B(r2[t3], 1, 1, () => {
        r2[t3] = null;
      });
      return {c() {
        e2 = main.e("ul");
        for (let t3 = 0; t3 < r2.length; t3 += 1)
          r2[t3].c();
        main.b(e2, "id", "MailItemList"), main.j(e2, "max-width", "728px"), main.b(e2, "class", "bg-white rounded shadow-xl mb-3");
      }, m(t3, s3) {
        main.c(t3, e2, s3);
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          r2[t4].m(e2, null);
        n2 = true;
      }, p(t3, n3) {
        if (226 & n3[0]) {
          let i2;
          for (s2 = t3[7], i2 = 0; i2 < s2.length; i2 += 1) {
            const o3 = Kn(t3, s2, i2);
            r2[i2] ? (r2[i2].p(o3, n3), main.A(r2[i2], 1)) : (r2[i2] = Xn(o3), r2[i2].c(), main.A(r2[i2], 1), r2[i2].m(e2, null));
          }
          for (main.J(), i2 = s2.length; i2 < r2.length; i2 += 1)
            o2(i2);
          main.K();
        }
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < s2.length; t4 += 1)
            main.A(r2[t4]);
          n2 = true;
        }
      }, o(t3) {
        r2 = r2.filter(Boolean);
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          main.B(r2[t4]);
        n2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.D(r2, t3);
      }};
    }
    function Gn(t2) {
      let e2, n2, s2 = t2[7], r2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        r2[e3] = ts(qn(t2, s2, e3));
      const o2 = (t3) => main.B(r2[t3], 1, 1, () => {
        r2[t3] = null;
      });
      return {c() {
        e2 = main.e("div");
        for (let t3 = 0; t3 < r2.length; t3 += 1)
          r2[t3].c();
        main.b(e2, "id", "MailCardView"), main.b(e2, "class", "\r\n        mb-3 flex flex-wrap");
      }, m(t3, s3) {
        main.c(t3, e2, s3);
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          r2[t4].m(e2, null);
        n2 = true;
      }, p(t3, n3) {
        if (128 & n3[0]) {
          let i2;
          for (s2 = t3[7], i2 = 0; i2 < s2.length; i2 += 1) {
            const o3 = qn(t3, s2, i2);
            r2[i2] ? (r2[i2].p(o3, n3), main.A(r2[i2], 1)) : (r2[i2] = ts(o3), r2[i2].c(), main.A(r2[i2], 1), r2[i2].m(e2, null));
          }
          for (main.J(), i2 = s2.length; i2 < r2.length; i2 += 1)
            o2(i2);
          main.K();
        }
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < s2.length; t4 += 1)
            main.A(r2[t4]);
          n2 = true;
        }
      }, o(t3) {
        r2 = r2.filter(Boolean);
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          main.B(r2[t4]);
        n2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.D(r2, t3);
      }};
    }
    function Xn(t2) {
      let e2, n2;
      return e2 = new Fe({props: {index: t2[45], pm: t2[43], hidden: t2[5] && (t2[1] < 400 || t2[6]) && t2[45] > 0}}), {c() {
        main.y(e2.$$.fragment);
      }, m(t3, s2) {
        main.z(e2, t3, s2), n2 = true;
      }, p(t3, n3) {
        const s2 = {};
        128 & n3[0] && (s2.pm = t3[43]), 98 & n3[0] && (s2.hidden = t3[5] && (t3[1] < 400 || t3[6]) && t3[45] > 0), e2.$set(s2);
      }, i(t3) {
        n2 || (main.A(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.C(e2, t3);
      }};
    }
    function ts(t2) {
      let e2, n2;
      return e2 = new qe({props: {pm: t2[43], index: t2[45]}}), {c() {
        main.y(e2.$$.fragment);
      }, m(t3, s2) {
        main.z(e2, t3, s2), n2 = true;
      }, p(t3, n3) {
        const s2 = {};
        128 & n3[0] && (s2.pm = t3[43]), e2.$set(s2);
      }, i(t3) {
        n2 || (main.A(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.C(e2, t3);
      }};
    }
    function es(t2) {
      let e2, n2, s2, r2, o2, d2, h2, p2, m2, $2, y2, w2, x2, b2, v2, k2, j2, L2, I2, N2, R2;
      const F2 = [Qn, Zn], D2 = [];
      function T2(t3, e3) {
        return t3[5] ? 0 : 1;
      }
      s2 = T2(t2), r2 = D2[s2] = F2[s2](t2);
      p2 = new ae({});
      const J2 = [Gn, Yn], V2 = [];
      function H2(t3, e3) {
        return !t3[2] && t3[10] ? 0 : 1;
      }
      return $2 = H2(t2), y2 = V2[$2] = J2[$2](t2), x2 = new Le({props: {maxPage: t2[8]}}), j2 = new Hn({props: {search_length: t2[3].length}}), {c() {
        e2 = main.e("section"), n2 = main.e("div"), r2.c(), o2 = main.a(), d2 = main.a(), h2 = main.e("div"), main.y(p2.$$.fragment), m2 = main.a(), y2.c(), w2 = main.a(), main.y(x2.$$.fragment), b2 = main.a(), v2 = main.e("br"), k2 = main.a(), main.y(j2.$$.fragment), main.b(n2, "class", "mb-1 flex flex-row"), main.b(h2, "class", "\r\n    h-36 p-2 mb-3\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main.L(h2, "hidden", !(t2[5] && t2[6])), main.b(e2, "id", "MailListSection"), main.j(e2, "min-height", (t2[2] || t2[5] ? t2[6] ? 520 : 360 : 490) + "px"), main.b(e2, "class", L2 = "h-full\r\n" + (t2[10] ? "w-8/12" : "h-full w-full") + "\r\nrelative pl-4 pr-4 pt-2"), main.G(() => t2[29].call(e2)), main.L(e2, "hidden", t2[5] && !t2[9]);
      }, m(r3, i2) {
        main.c(r3, e2, i2), main.d(e2, n2), D2[s2].m(n2, null), main.d(e2, o2), main.d(e2, d2), main.d(e2, h2), main.z(p2, h2, null), main.d(e2, m2), V2[$2].m(e2, null), main.d(e2, w2), main.z(x2, e2, null), main.d(e2, b2), main.d(e2, v2), main.d(e2, k2), main.z(j2, e2, null), I2 = main.I(e2, t2[29].bind(e2)), R2 = true;
      }, p(t3, i2) {
        let o3 = s2;
        s2 = T2(t3), s2 === o3 ? D2[s2].p(t3, i2) : (main.J(), main.B(D2[o3], 1, 1, () => {
          D2[o3] = null;
        }), main.K(), r2 = D2[s2], r2 ? r2.p(t3, i2) : (r2 = D2[s2] = F2[s2](t3), r2.c()), main.A(r2, 1), r2.m(n2, null)), 96 & i2[0] && main.L(h2, "hidden", !(t3[5] && t3[6]));
        let a2 = $2;
        $2 = H2(t3), $2 === a2 ? V2[$2].p(t3, i2) : (main.J(), main.B(V2[a2], 1, 1, () => {
          V2[a2] = null;
        }), main.K(), y2 = V2[$2], y2 ? y2.p(t3, i2) : (y2 = V2[$2] = J2[$2](t3), y2.c()), main.A(y2, 1), y2.m(e2, w2));
        const u2 = {};
        256 & i2[0] && (u2.maxPage = t3[8]), x2.$set(u2);
        const d3 = {};
        8 & i2[0] && (d3.search_length = t3[3].length), j2.$set(d3), (!R2 || 100 & i2[0]) && main.j(e2, "min-height", (t3[2] || t3[5] ? t3[6] ? 520 : 360 : 490) + "px"), (!R2 || 1024 & i2[0] && L2 !== (L2 = "h-full\r\n" + (t3[10] ? "w-8/12" : "h-full w-full") + "\r\nrelative pl-4 pr-4 pt-2")) && main.b(e2, "class", L2), 1568 & i2[0] && main.L(e2, "hidden", t3[5] && !t3[9]);
      }, i(t3) {
        R2 || (main.A(r2), main.A(false), main.A(p2.$$.fragment, t3), main.A(y2), main.A(x2.$$.fragment, t3), main.A(j2.$$.fragment, t3), main.G(() => {
          N2 || (N2 = main.H(e2, Ut, {x: 200, duration: 200}, true)), N2.run(1);
        }), R2 = true);
      }, o(t3) {
        main.B(r2), main.B(false), main.B(p2.$$.fragment, t3), main.B(y2), main.B(x2.$$.fragment, t3), main.B(j2.$$.fragment, t3), N2 || (N2 = main.H(e2, Ut, {x: 200, duration: 200}, false)), N2.run(0), R2 = false;
      }, d(t3) {
        t3 && main.f(e2), D2[s2].d(), main.C(p2), V2[$2].d(), main.C(x2), main.C(j2), I2(), t3 && N2 && N2.end();
      }};
    }
    function ns(t2, e2) {
      fetch(t2, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(e2)}).then((t3) => {
        console.log(e2);
      }).catch((e3) => {
        console.error(t2 + " \uBC31\uC5C5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."), console.error(e3);
      });
    }
    function ss(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, u2, d2, h2, f2, g2, p2, m2, b2, v2, k2, M2, _2, C2, O2, S2, j2, L2, I2, E2;
      main.g(t2, $e, (t3) => n2(14, p2 = t3)), main.g(t2, ut, (t3) => n2(16, m2 = t3)), main.g(t2, main.P, (t3) => n2(35, b2 = t3)), main.g(t2, main.p, (t3) => n2(36, v2 = t3)), main.g(t2, rt, (t3) => n2(18, k2 = t3)), main.g(t2, st, (t3) => n2(4, M2 = t3)), main.g(t2, Rn, (t3) => n2(21, _2 = t3)), main.g(t2, Dn, (t3) => n2(22, C2 = t3)), main.g(t2, ft, (t3) => n2(5, O2 = t3)), main.g(t2, main.o, (t3) => n2(37, S2 = t3)), main.g(t2, Y, (t3) => n2(38, j2 = t3)), main.g(t2, G, (t3) => n2(39, L2 = t3)), main.g(t2, dt, (t3) => n2(9, I2 = t3)), main.g(t2, ht, (t3) => n2(10, E2 = t3));
      var P2 = this && this.__awaiter || function(t3, e3, n3, s3) {
        return new (n3 || (n3 = Promise))(function(r3, i3) {
          function o3(t4) {
            try {
              l3(s3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(s3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? r3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((s3 = s3.apply(t3, e3 || [])).next());
        });
      };
      let B2, A2, z2 = 1, W2 = 3;
      main.Q(() => {
        const t3 = g2[0];
        if (W2 != u2 || z2 == m2 && B2 == $e || (A2 = t3), W2 != u2 && A2) {
          let t4 = 0;
          return c2.forEach((t5, e3) => {
          }), main.q(ut, m2 = Math.ceil((t4 + 1) / u2), m2), z2 = m2, W2 = u2, b2("./", Object.assign(Object.assign({}, v2), {nowPage: m2})), null;
        }
        if (s2 > new Date())
          return main.q($e, p2 = ye(new Date()), p2), alert("\uBBF8\uB798\uB85C \uAC08 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."), b2("./", Object.assign(Object.assign({}, v2), {dateString: p2})), null;
        if (g2.length == 0 || !t3 && v2.nowPage != 1)
          return b2("./", Object.assign(Object.assign({}, v2), {nowPage: 1})), null;
        if (z2 != m2) {
          z2 = m2;
          const e3 = xe(t3.time);
          return main.q($e, p2 = e3, p2), B2 = e3, b2("./", Object.assign(Object.assign({}, v2), {nowPage: m2, dateString: e3})), null;
        }
        if (B2 !== p2) {
          let t4 = false;
          if (c2.forEach((e3, n3) => {
            if (t4 || !e3)
              return null;
            const r3 = xe(e3.time);
            we(r3) <= s2 && (main.q(ut, m2 = Math.ceil((n3 + 1) / u2), m2), main.q($e, p2 = r3, p2), t4 = true);
          }), t4 == 0 && c2.length > 0) {
            main.q(ut, m2 = d2, m2);
            const t5 = c2[c2.length - 1];
            main.q($e, p2 = xe(t5.time), p2);
          }
          return B2 = p2, b2("./", Object.assign(Object.assign({}, v2), {nowPage: m2, dateString: p2})), null;
        }
      });
      const N2 = (t3) => {
        const e3 = t3.time.split(" ")[0];
        typeof e3 != "string" && console.log(e3);
        try {
          return e3.replace(/\//g, "-") == p2;
        } catch (t4) {
          console.error(t4), console.log(e3);
        }
        return true;
      }, R2 = (t3) => true;
      let F2, J2, V2 = false, H2 = false;
      return t2.$$.update = () => {
        16384 & t2.$$.dirty[0] && (s2 = we(p2)), 262160 & t2.$$.dirty[0] && n2(17, r2 = k2.get(M2)), 131072 & t2.$$.dirty[0] && n2(19, i2 = (t3) => r2.has(t3.id)), 2637840 & t2.$$.dirty[0] && n2(20, o2 = M2.value && i2 || _2 && R2 || p2 && N2 || R2), 5242880 & t2.$$.dirty[0] && n2(3, c2 = C2.filter(o2)), 1 & t2.$$.dirty[0] && n2(23, l2 = Math.floor((F2 - 33) / 280)), 2 & t2.$$.dirty[0] && n2(24, a2 = Math.floor((J2 - 220) / 164)), 25165862 & t2.$$.dirty[0] && n2(15, u2 = O2 ? 5 : V2 ? Math.floor((J2 - 200) / 62) : l2 * a2), 32776 & t2.$$.dirty[0] && n2(8, d2 = Math.ceil(c2.length / u2)), 98304 & t2.$$.dirty[0] && n2(25, h2 = (m2 - 1) * u2), 33587208 & t2.$$.dirty[0] && n2(26, f2 = () => {
          const t3 = c2.slice(h2, h2 + u2);
          return t3.length < u2 ? t3.concat(Array(u2 - t3.length).fill({id: "", member: "", time: "", subject: "", preview: ""})) : t3;
        }), 67108872 & t2.$$.dirty[0] && n2(7, g2 = c2 && f2());
      }, [F2, J2, V2, c2, M2, O2, H2, g2, d2, I2, E2, () => {
        main.q(st, M2 = q, M2), main.q(ut, m2 = 1, m2), S2("./", Object.assign(Object.assign({}, v2), {tag: ""}));
      }, () => {
        ns("/all-tag-dict/", {tag_list: [...j2].map((t3) => t3[1])}), ns("/mail-tag-dict/", {mail_to_tag_dict: X(L2), tag_to_mail_dict: it(k2)});
      }, () => P2(void 0, void 0, void 0, function* () {
        const t3 = yield fetch("/all-tag-dict/").then((t4) => t4.json()).then((t4) => t4.tag_list), e3 = yield fetch("/mail-tag-dict/").then((t4) => t4.json()), n3 = e3.tag_to_mail_dict, s3 = e3.mail_to_tag_dict;
        main.q(st, M2 = q, M2), main.q(Y, j2 = t3.reduce((t4, e4) => (t4.set(e4.value, e4), t4), new Map([["\u{1F496}", Z]])), j2), console.log("all_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC"), main.q(rt, k2 = tt(n3), k2), main.q(G, L2 = U(s3), L2), console.log("mail_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC");
      }), p2, u2, m2, r2, k2, i2, o2, _2, C2, l2, a2, h2, f2, function() {
        H2 = this.checked, n2(6, H2);
      }, function() {
        V2 = this.checked, n2(2, V2);
      }, function() {
        F2 = this.clientWidth, J2 = this.clientHeight, n2(0, F2), n2(1, J2);
      }];
    }
    class rs extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, ss, es, main.s, {}, [-1, -1]);
      }
    }
    function is(t2) {
      let e2, n2, s2, r2, o2, c2, p2, m2, $2, y2, w2, x2 = t2[0].closeButton && os(t2);
      var b2 = t2[1];
      return b2 && (c2 = new b2({})), {c() {
        e2 = main.e("div"), n2 = main.e("div"), s2 = main.e("div"), x2 && x2.c(), r2 = main.a(), o2 = main.e("div"), c2 && main.y(c2.$$.fragment), main.b(o2, "class", "content svelte-1jadkpy"), main.b(o2, "style", t2[12]), main.b(s2, "class", "window svelte-1jadkpy"), main.b(s2, "role", "dialog"), main.b(s2, "aria-modal", "true"), main.b(s2, "style", t2[11]), main.b(n2, "class", "window-wrap svelte-1jadkpy"), main.b(n2, "style", t2[10]), main.b(e2, "class", "bg svelte-1jadkpy"), main.b(e2, "style", t2[9]);
      }, m(i2, l2) {
        main.c(i2, e2, l2), main.d(e2, n2), main.d(n2, s2), x2 && x2.m(s2, null), main.d(s2, r2), main.d(s2, o2), c2 && main.z(c2, o2, null), t2[37](s2), t2[38](n2), t2[39](e2), $2 = true, y2 || (w2 = [main.l(s2, "introstart", function() {
          main.k(t2[5]) && t2[5].apply(this, arguments);
        }), main.l(s2, "outrostart", function() {
          main.k(t2[6]) && t2[6].apply(this, arguments);
        }), main.l(s2, "introend", function() {
          main.k(t2[7]) && t2[7].apply(this, arguments);
        }), main.l(s2, "outroend", function() {
          main.k(t2[8]) && t2[8].apply(this, arguments);
        }), main.l(e2, "click", t2[19])], y2 = true);
      }, p(i2, a2) {
        if ((t2 = i2)[0].closeButton ? x2 ? (x2.p(t2, a2), 1 & a2[0] && main.A(x2, 1)) : (x2 = os(t2), x2.c(), main.A(x2, 1), x2.m(s2, r2)) : x2 && (main.J(), main.B(x2, 1, 1, () => {
          x2 = null;
        }), main.K()), b2 !== (b2 = t2[1])) {
          if (c2) {
            main.J();
            const t3 = c2;
            main.B(t3.$$.fragment, 1, 0, () => {
              main.C(t3, 1);
            }), main.K();
          }
          b2 ? (c2 = new b2({}), main.y(c2.$$.fragment), main.A(c2.$$.fragment, 1), main.z(c2, o2, null)) : c2 = null;
        }
        (!$2 || 4096 & a2[0]) && main.b(o2, "style", t2[12]), (!$2 || 2048 & a2[0]) && main.b(s2, "style", t2[11]), (!$2 || 1024 & a2[0]) && main.b(n2, "style", t2[10]), (!$2 || 512 & a2[0]) && main.b(e2, "style", t2[9]);
      }, i(n3) {
        $2 || (main.A(x2), c2 && main.A(c2.$$.fragment, n3), main.G(() => {
          p2 || (p2 = main.H(s2, t2[15], t2[0].transitionWindowProps, true)), p2.run(1);
        }), main.G(() => {
          m2 || (m2 = main.H(e2, t2[14], t2[0].transitionBgProps, true)), m2.run(1);
        }), $2 = true);
      }, o(n3) {
        main.B(x2), c2 && main.B(c2.$$.fragment, n3), p2 || (p2 = main.H(s2, t2[15], t2[0].transitionWindowProps, false)), p2.run(0), m2 || (m2 = main.H(e2, t2[14], t2[0].transitionBgProps, false)), m2.run(0), $2 = false;
      }, d(n3) {
        n3 && main.f(e2), x2 && x2.d(), c2 && main.C(c2), t2[37](null), n3 && p2 && p2.end(), t2[38](null), t2[39](null), n3 && m2 && m2.end(), y2 = false, main.x(w2);
      }};
    }
    function os(t2) {
      let e2, n2, s2, r2, i2;
      const o2 = [ls, cs], c2 = [];
      function l2(t3, n3) {
        return 1 & n3[0] && (e2 = !!t3[16](t3[0].closeButton)), e2 ? 0 : 1;
      }
      return n2 = l2(t2, [-1]), s2 = c2[n2] = o2[n2](t2), {c() {
        s2.c(), r2 = main.m();
      }, m(t3, e3) {
        c2[n2].m(t3, e3), main.c(t3, r2, e3), i2 = true;
      }, p(t3, e3) {
        let i3 = n2;
        n2 = l2(t3, e3), n2 === i3 ? c2[n2].p(t3, e3) : (main.J(), main.B(c2[i3], 1, 1, () => {
          c2[i3] = null;
        }), main.K(), s2 = c2[n2], s2 ? s2.p(t3, e3) : (s2 = c2[n2] = o2[n2](t3), s2.c()), main.A(s2, 1), s2.m(r2.parentNode, r2));
      }, i(t3) {
        i2 || (main.A(s2), i2 = true);
      }, o(t3) {
        main.B(s2), i2 = false;
      }, d(t3) {
        c2[n2].d(t3), t3 && main.f(r2);
      }};
    }
    function cs(t2) {
      let e2, n2, s2;
      return {c() {
        e2 = main.e("button"), main.b(e2, "class", "close svelte-1jadkpy"), main.b(e2, "style", t2[13]);
      }, m(r2, i2) {
        main.c(r2, e2, i2), n2 || (s2 = main.l(e2, "click", t2[17]), n2 = true);
      }, p(t3, n3) {
        8192 & n3[0] && main.b(e2, "style", t3[13]);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, s2();
      }};
    }
    function ls(t2) {
      let e2, n2, s2;
      var r2 = t2[0].closeButton;
      function i2(t3) {
        return {props: {onClose: t3[17]}};
      }
      return r2 && (e2 = new r2(i2(t2))), {c() {
        e2 && main.y(e2.$$.fragment), n2 = main.m();
      }, m(t3, r3) {
        e2 && main.z(e2, t3, r3), main.c(t3, n2, r3), s2 = true;
      }, p(t3, s3) {
        if (r2 !== (r2 = t3[0].closeButton)) {
          if (e2) {
            main.J();
            const t4 = e2;
            main.B(t4.$$.fragment, 1, 0, () => {
              main.C(t4, 1);
            }), main.K();
          }
          r2 ? (e2 = new r2(i2(t3)), main.y(e2.$$.fragment), main.A(e2.$$.fragment, 1), main.z(e2, n2.parentNode, n2)) : e2 = null;
        }
      }, i(t3) {
        s2 || (e2 && main.A(e2.$$.fragment, t3), s2 = true);
      }, o(t3) {
        e2 && main.B(e2.$$.fragment, t3), s2 = false;
      }, d(t3) {
        t3 && main.f(n2), e2 && main.C(e2, t3);
      }};
    }
    function as(t2) {
      let e2, n2, s2, r2, i2 = t2[1] && is(t2);
      const o2 = t2[36].default, c2 = main.M(o2, t2, t2[35], null);
      return {c() {
        i2 && i2.c(), e2 = main.a(), c2 && c2.c();
      }, m(o3, l2) {
        i2 && i2.m(o3, l2), main.c(o3, e2, l2), c2 && c2.m(o3, l2), n2 = true, s2 || (r2 = main.l(window, "keydown", t2[18]), s2 = true);
      }, p(t3, n3) {
        t3[1] ? i2 ? (i2.p(t3, n3), 2 & n3[0] && main.A(i2, 1)) : (i2 = is(t3), i2.c(), main.A(i2, 1), i2.m(e2.parentNode, e2)) : i2 && (main.J(), main.B(i2, 1, 1, () => {
          i2 = null;
        }), main.K()), c2 && c2.p && 16 & n3[1] && main.N(c2, o2, t3, t3[35], n3, null, null);
      }, i(t3) {
        n2 || (main.A(i2), main.A(c2, t3), n2 = true);
      }, o(t3) {
        main.B(i2), main.B(c2, t3), n2 = false;
      }, d(t3) {
        i2 && i2.d(t3), t3 && main.f(e2), c2 && c2.d(t3), s2 = false, r2();
      }};
    }
    function us(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, {$$slots: u2 = {}, $$scope: d2} = e2;
      const h2 = main.R(), f2 = main.U;
      let {show: g2 = null} = e2, {key: p2 = "simple-modal"} = e2, {closeButton: m2 = true} = e2, {closeOnEsc: $2 = true} = e2, {closeOnOuterClick: y2 = true} = e2, {styleBg: w2 = {top: 0, left: 0}} = e2, {styleWindowWrap: x2 = {}} = e2, {styleWindow: b2 = {}} = e2, {styleContent: v2 = {}} = e2, {styleCloseButton: k2 = {}} = e2, {setContext: M2 = f2} = e2, {transitionBg: _2 = Qt} = e2, {transitionBgProps: C2 = {duration: 250}} = e2, {transitionWindow: O2 = _2} = e2, {transitionWindowProps: S2 = C2} = e2;
      const j2 = {closeButton: m2, closeOnEsc: $2, closeOnOuterClick: y2, styleBg: w2, styleWindowWrap: x2, styleWindow: b2, styleContent: v2, styleCloseButton: k2, transitionBg: _2, transitionBgProps: C2, transitionWindow: O2, transitionWindowProps: S2};
      let L2, I2, E2, P2 = {...j2}, B2 = null;
      const A2 = (t3) => Object.keys(t3).reduce((e3, n3) => `${e3}; ${((t4) => t4.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(n3)}: ${t3[n3]}`, ""), z2 = (t3) => !!(t3 && t3.constructor && t3.call && t3.apply), W2 = () => {
      };
      let N2 = W2, R2 = W2, F2 = W2, D2 = W2;
      const T2 = (t3, e3 = {}, s3 = {}, r3 = {}) => {
        n2(1, B2 = function(t4, e4 = {}) {
          return function(n3) {
            return new t4({...n3, props: {...e4, ...n3.props}});
          };
        }(t3, e3)), n2(0, P2 = {...j2, ...s3}), n2(5, N2 = (t4) => {
          r3.onOpen && r3.onOpen(t4), h2("opening");
        }), n2(6, R2 = (t4) => {
          r3.onClose && r3.onClose(t4), h2("closing");
        }), n2(7, F2 = (t4) => {
          r3.onOpened && r3.onOpened(t4), h2("opened");
        }), n2(8, D2 = (t4) => {
          r3.onClosed && r3.onClosed(t4), h2("closed");
        });
      }, K2 = (t3 = {}) => {
        n2(6, R2 = t3.onClose || R2), n2(8, D2 = t3.onClosed || D2), n2(1, B2 = null);
      };
      return M2(p2, {open: T2, close: K2}), t2.$$set = (t3) => {
        "show" in t3 && n2(20, g2 = t3.show), "key" in t3 && n2(21, p2 = t3.key), "closeButton" in t3 && n2(22, m2 = t3.closeButton), "closeOnEsc" in t3 && n2(23, $2 = t3.closeOnEsc), "closeOnOuterClick" in t3 && n2(24, y2 = t3.closeOnOuterClick), "styleBg" in t3 && n2(25, w2 = t3.styleBg), "styleWindowWrap" in t3 && n2(26, x2 = t3.styleWindowWrap), "styleWindow" in t3 && n2(27, b2 = t3.styleWindow), "styleContent" in t3 && n2(28, v2 = t3.styleContent), "styleCloseButton" in t3 && n2(29, k2 = t3.styleCloseButton), "setContext" in t3 && n2(30, M2 = t3.setContext), "transitionBg" in t3 && n2(31, _2 = t3.transitionBg), "transitionBgProps" in t3 && n2(32, C2 = t3.transitionBgProps), "transitionWindow" in t3 && n2(33, O2 = t3.transitionWindow), "transitionWindowProps" in t3 && n2(34, S2 = t3.transitionWindowProps), "$$scope" in t3 && n2(35, d2 = t3.$$scope);
      }, t2.$$.update = () => {
        1 & t2.$$.dirty[0] && n2(9, s2 = A2(P2.styleBg)), 1 & t2.$$.dirty[0] && n2(10, r2 = A2(P2.styleWindowWrap)), 1 & t2.$$.dirty[0] && n2(11, i2 = A2(P2.styleWindow)), 1 & t2.$$.dirty[0] && n2(12, o2 = A2(P2.styleContent)), 1 & t2.$$.dirty[0] && n2(13, c2 = A2(P2.styleCloseButton)), 1 & t2.$$.dirty[0] && n2(14, l2 = P2.transitionBg), 1 & t2.$$.dirty[0] && n2(15, a2 = P2.transitionWindow), 1048576 & t2.$$.dirty[0] && (z2(g2) ? T2(g2) : K2());
      }, [P2, B2, L2, I2, E2, N2, R2, F2, D2, s2, r2, i2, o2, c2, l2, a2, z2, K2, (t3) => {
        if (P2.closeOnEsc && B2 && t3.key === "Escape" && (t3.preventDefault(), K2()), B2 && t3.key === "Tab") {
          const e3 = E2.querySelectorAll("*"), n3 = Array.from(e3).filter((t4) => t4.tabIndex >= 0);
          let s3 = n3.indexOf(document.activeElement);
          s3 === -1 && t3.shiftKey && (s3 = 0), s3 += n3.length + (t3.shiftKey ? -1 : 1), s3 %= n3.length, n3[s3].focus(), t3.preventDefault();
        }
      }, (t3) => {
        !P2.closeOnOuterClick || t3.target !== L2 && t3.target !== I2 || (t3.preventDefault(), K2());
      }, g2, p2, m2, $2, y2, w2, x2, b2, v2, k2, M2, _2, C2, O2, S2, d2, u2, function(t3) {
        main.T[t3 ? "unshift" : "push"](() => {
          E2 = t3, n2(4, E2);
        });
      }, function(t3) {
        main.T[t3 ? "unshift" : "push"](() => {
          I2 = t3, n2(3, I2);
        });
      }, function(t3) {
        main.T[t3 ? "unshift" : "push"](() => {
          L2 = t3, n2(2, L2);
        });
      }];
    }
    class ds extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, us, as, main.s, {show: 20, key: 21, closeButton: 22, closeOnEsc: 23, closeOnOuterClick: 24, styleBg: 25, styleWindowWrap: 26, styleWindow: 27, styleContent: 28, styleCloseButton: 29, setContext: 30, transitionBg: 31, transitionBgProps: 32, transitionWindow: 33, transitionWindowProps: 34}, [-1, -1]);
      }
    }
    function hs(t2) {
      let e2, n2, s2, r2;
      return e2 = new pe({}), s2 = new rs({}), {c() {
        main.y(e2.$$.fragment), n2 = main.a(), main.y(s2.$$.fragment);
      }, m(t3, i2) {
        main.z(e2, t3, i2), main.c(t3, n2, i2), main.z(s2, t3, i2), r2 = true;
      }, i(t3) {
        r2 || (main.A(e2.$$.fragment, t3), main.A(s2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        main.B(e2.$$.fragment, t3), main.B(s2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        main.C(e2, t3), t3 && main.f(n2), main.C(s2, t3);
      }};
    }
    function fs(t2) {
      let e2, n2, s2 = t2[1] && hs();
      return {c() {
        s2 && s2.c(), e2 = main.m();
      }, m(t3, r2) {
        s2 && s2.m(t3, r2), main.c(t3, e2, r2), n2 = true;
      }, p(t3, n3) {
        t3[1] ? s2 ? 2 & n3 && main.A(s2, 1) : (s2 = hs(), s2.c(), main.A(s2, 1), s2.m(e2.parentNode, e2)) : s2 && (main.J(), main.B(s2, 1, 1, () => {
          s2 = null;
        }), main.K());
      }, i(t3) {
        n2 || (main.A(s2), n2 = true);
      }, o(t3) {
        main.B(s2), n2 = false;
      }, d(t3) {
        s2 && s2.d(t3), t3 && main.f(e2);
      }};
    }
    function gs(t2) {
      let e2, n2, s2, r2;
      return n2 = new ds({props: {show: ps, $$slots: {default: [fs]}, $$scope: {ctx: t2}}}), {c() {
        e2 = main.e("div"), main.y(n2.$$.fragment), main.b(e2, "class", "flex w-screen h-screen relative"), main.G(() => t2[4].call(e2));
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.z(n2, e2, null), s2 = main.I(e2, t2[4].bind(e2)), r2 = true;
      }, p(t3, [e3]) {
        const s3 = {};
        131074 & e3 && (s3.$$scope = {dirty: e3, ctx: t3}), n2.$set(s3);
      }, i(t3) {
        r2 || (main.A(n2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        main.B(n2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.C(n2), s2();
      }};
    }
    let ps = null;
    function ms(t2, e2, n2) {
      let s2, r2, i2, o2, c2, l2, a2, u2, d2;
      main.g(t2, rt, (t3) => n2(2, r2 = t3)), main.g(t2, G, (t3) => n2(3, i2 = t3)), main.g(t2, Mt, (t3) => n2(7, o2 = t3)), main.g(t2, ot, (t3) => n2(8, c2 = t3)), main.g(t2, ct, (t3) => n2(9, l2 = t3)), main.g(t2, Y, (t3) => n2(10, a2 = t3)), main.g(t2, main.o, (t3) => n2(11, u2 = t3)), main.g(t2, dt, (t3) => n2(12, d2 = t3));
      var h2 = this && this.__awaiter || function(t3, e3, n3, s3) {
        return new (n3 || (n3 = Promise))(function(r3, i3) {
          function o3(t4) {
            try {
              l3(s3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(s3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? r3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((s3 = s3.apply(t3, e3 || [])).next());
        });
      };
      main.V.title = "IZ*ONE Private Mail Viewer";
      let f2 = false;
      const g2 = (t3, e3) => {
        try {
          console.log(`${e3}\uCC28 \uC2DC\uB3C4`), console.log(t3.slice(0, 10));
          const n3 = [];
          for (let e4 = 0; e4 < t3.length; e4 += 2)
            n3.push(t3[e4]);
          return JSON.parse(n3.join(""));
        } catch (n3) {
          if (e3 < 4)
            return t3 = t3.slice(1), g2(t3, e3 + 1);
          throw n3;
        }
      }, p2 = (t3) => h2(void 0, void 0, void 0, function* () {
        try {
          const e3 = yield fetch(t3);
          return yield e3.json();
        } catch (e3) {
          console.log("json \uB85C\uB4DC \uC2E4\uD328");
          const n3 = yield fetch(t3), s3 = yield n3.text();
          return g2(s3, 0);
        }
      });
      let m2;
      return function() {
        return h2(this, void 0, void 0, function* () {
          console.log("\uBA54\uC77C \uB9AC\uC2A4\uD2B8 \uB85C\uB529 \uC2DC\uC791");
          const t3 = yield p2("./pm_list.json");
          console.log("\uBA54\uC77C \uB9AC\uC2A4\uD2B8 \uB85C\uB529 \uC644\uB8CC"), console.log("\uC774\uB984 dict \uB85C\uB529 \uC2DC\uC791"), main.q(Mt, o2 = yield p2("./member_name.json"), o2), console.log("\uC774\uB984 dict \uB85C\uB529 \uB05D"), console.log(o2);
          const e3 = yield fetch("./mail_to_num_dict.json"), n3 = yield e3.json();
          main.q(ot, c2 = t3.map((t4, e4) => {
            t4.id == "m20731" && main.q(ct, l2 = t4, l2), t4.nick = t4.member;
            const s3 = o2[t4.nick];
            if (t4.member = _t[s3], !t4.member && e4 < 5700) {
              const e5 = n3[t4.id];
              main.q(Mt, o2[t4.nick] = e5, o2), t4.member = _t[e5], console.log(t4.nick, t4.member);
            }
            return t4;
          }), c2), console.log("all_tag_dict", a2);
          let d3 = 0;
          const h3 = a2.get("\uD63C\uB2E4 \uD788\uD1A0\uBBF8");
          if (r2.has(h3) && (c2.forEach((t4) => {
            const e4 = a2.get(t4.member), n4 = r2.get(e4);
            n4 ? n4.add(t4.id) : (console.log(t4.id, t4.nick), d3 += 1);
          }), rt.set(r2)), console.log("\uB204\uB77D", d3), !a2.has("\uC0DD\uC77C")) {
            const t4 = {value: "\uC0DD\uC77C", color: "LightPink"};
            a2.set(t4.value, t4), Y.set(a2), r2.set(t4, new Set()), c2.map((e4) => {
              e4.id.slice(0, 1) == "b" && s2(t4, e4);
            }), rt.set(r2), G.set(i2);
          }
          u2("./", {dateString: me, nowPage: 1, tag: "", search: "", showList: true});
        });
      }().then(() => {
        n2(1, f2 = true);
      }), main.p.subscribe((t3) => {
        const e3 = t3.showList == "true";
        e3 != d2 && main.q(dt, d2 = e3, d2);
      }), t2.$$.update = () => {
        12 & t2.$$.dirty && (s2 = (t3, e3) => {
          r2.get(t3).add(e3.id), i2.has(e3.id) ? i2.get(e3.id).add(t3) : i2.set(e3.id, new Set([t3]));
        }), 1 & t2.$$.dirty && ht.set(m2 > 800);
      }, [m2, f2, r2, i2, function() {
        m2 = this.clientWidth, n2(0, m2);
      }];
    }
    class index_8b4a4faa_default extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, ms, gs, main.s, {});
      }
    }
  });

  // dist/build/_layout-2c1ce2e1.js
  var require_layout_2c1ce2e1 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_2c1ce2e1_default
    });
    const main = __toModule(require_main());
    function c(s2) {
      let t2;
      const e2 = s2[1].default, c2 = main.M(e2, s2, s2[0], null);
      return {c() {
        c2 && c2.c();
      }, m(s3, e3) {
        c2 && c2.m(s3, e3), t2 = true;
      }, p(s3, [t3]) {
        c2 && c2.p && 1 & t3 && main.N(c2, e2, s3, s3[0], t3, null, null);
      }, i(s3) {
        t2 || (main.A(c2, s3), t2 = true);
      }, o(s3) {
        main.B(c2, s3), t2 = false;
      }, d(s3) {
        c2 && c2.d(s3);
      }};
    }
    function u(s2, t2, e2) {
      let {$$slots: n2 = {}, $$scope: o2} = t2;
      return s2.$$set = (s3) => {
        "$$scope" in s3 && e2(0, o2 = s3.$$scope);
      }, [o2, n2];
    }
    class layout_2c1ce2e1_default extends main.S {
      constructor(s2) {
        super(), main.i(this, s2, u, c, main.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => mt,
      B: () => gt,
      C: () => Pt,
      D: () => x,
      E: () => Q,
      F: () => e,
      G: () => rt,
      H: () => $t,
      I: () => N,
      J: () => dt,
      K: () => ht,
      L: () => T,
      M: () => p,
      N: () => d,
      O: () => R,
      P: () => ue,
      Q: () => W,
      R: () => J,
      S: () => Et,
      T: () => Z,
      U: () => G,
      V: () => fe,
      a: () => E,
      b: () => S,
      c: () => _,
      d: () => w,
      e: () => P,
      f: () => v,
      g: () => u,
      h: () => Ut,
      i: () => kt,
      j: () => A,
      k: () => i,
      l: () => j,
      m: () => O,
      n: () => t,
      o: () => le,
      p: () => ae,
      q: () => h,
      r: () => L,
      s: () => a,
      t: () => k,
      u: () => ce,
      v: () => I,
      w: () => Bt,
      x: () => s,
      y: () => vt,
      z: () => xt
    });
    function t() {
    }
    const e = (t2) => t2;
    function n(t2, e2) {
      for (const n2 in e2)
        t2[n2] = e2[n2];
      return t2;
    }
    function o(t2) {
      return t2();
    }
    function r() {
      return Object.create(null);
    }
    function s(t2) {
      t2.forEach(o);
    }
    function i(t2) {
      return typeof t2 == "function";
    }
    function a(t2, e2) {
      return t2 != t2 ? e2 == e2 : t2 !== e2 || t2 && typeof t2 == "object" || typeof t2 == "function";
    }
    function c(e2, ...n2) {
      if (e2 == null)
        return t;
      const o2 = e2.subscribe(...n2);
      return o2.unsubscribe ? () => o2.unsubscribe() : o2;
    }
    function l(t2) {
      let e2;
      return c(t2, (t3) => e2 = t3)(), e2;
    }
    function u(t2, e2, n2) {
      t2.$$.on_destroy.push(c(e2, n2));
    }
    function p(t2, e2, n2, o2) {
      if (t2) {
        const r2 = f(t2, e2, n2, o2);
        return t2[0](r2);
      }
    }
    function f(t2, e2, o2, r2) {
      return t2[1] && r2 ? n(o2.ctx.slice(), t2[1](r2(e2))) : o2.ctx;
    }
    function d(t2, e2, n2, o2, r2, s2, i2) {
      const a2 = function(t3, e3, n3, o3) {
        if (t3[2] && o3) {
          const r3 = t3[2](o3(n3));
          if (e3.dirty === void 0)
            return r3;
          if (typeof r3 == "object") {
            const t4 = [], n4 = Math.max(e3.dirty.length, r3.length);
            for (let o4 = 0; o4 < n4; o4 += 1)
              t4[o4] = e3.dirty[o4] | r3[o4];
            return t4;
          }
          return e3.dirty | r3;
        }
        return e3.dirty;
      }(e2, o2, r2, s2);
      if (a2) {
        const r3 = f(e2, n2, o2, i2);
        t2.p(r3, a2);
      }
    }
    function h(t2, e2, n2 = e2) {
      return t2.set(n2), e2;
    }
    const m = typeof window != "undefined";
    let g = m ? () => window.performance.now() : () => Date.now();
    let y = m ? (t2) => requestAnimationFrame(t2) : t;
    const $ = new Set();
    function b(t2) {
      $.forEach((e2) => {
        e2.c(t2) || ($.delete(e2), e2.f());
      }), $.size !== 0 && y(b);
    }
    function w(t2, e2) {
      t2.appendChild(e2);
    }
    function _(t2, e2, n2) {
      t2.insertBefore(e2, n2 || null);
    }
    function v(t2) {
      t2.parentNode.removeChild(t2);
    }
    function x(t2, e2) {
      for (let n2 = 0; n2 < t2.length; n2 += 1)
        t2[n2] && t2[n2].d(e2);
    }
    function P(t2) {
      return document.createElement(t2);
    }
    function k(t2) {
      return document.createTextNode(t2);
    }
    function E() {
      return k(" ");
    }
    function O() {
      return k("");
    }
    function j(t2, e2, n2, o2) {
      return t2.addEventListener(e2, n2, o2), () => t2.removeEventListener(e2, n2, o2);
    }
    function S(t2, e2, n2) {
      n2 == null ? t2.removeAttribute(e2) : t2.getAttribute(e2) !== n2 && t2.setAttribute(e2, n2);
    }
    function R(t2) {
      return t2 === "" ? null : +t2;
    }
    function L(t2, e2) {
      e2 = "" + e2, t2.wholeText !== e2 && (t2.data = e2);
    }
    function I(t2, e2) {
      t2.value = e2 == null ? "" : e2;
    }
    function A(t2, e2, n2, o2) {
      t2.style.setProperty(e2, n2, o2 ? "important" : "");
    }
    let F;
    function M() {
      if (F === void 0) {
        F = false;
        try {
          typeof window != "undefined" && window.parent && window.parent.document;
        } catch (t2) {
          F = true;
        }
      }
      return F;
    }
    function N(t2, e2) {
      getComputedStyle(t2).position === "static" && (t2.style.position = "relative");
      const n2 = P("iframe");
      n2.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n2.setAttribute("aria-hidden", "true"), n2.tabIndex = -1;
      const o2 = M();
      let r2;
      return o2 ? (n2.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>", r2 = j(window, "message", (t3) => {
        t3.source === n2.contentWindow && e2();
      })) : (n2.src = "about:blank", n2.onload = () => {
        r2 = j(n2.contentWindow, "resize", e2);
      }), w(t2, n2), () => {
        (o2 || r2 && n2.contentWindow) && r2(), v(n2);
      };
    }
    function T(t2, e2, n2) {
      t2.classList[n2 ? "add" : "remove"](e2);
    }
    function C(t2, e2) {
      const n2 = document.createEvent("CustomEvent");
      return n2.initCustomEvent(t2, false, false, e2), n2;
    }
    const q = new Set();
    let B;
    let U = 0;
    function z(t2, e2, n2, o2, r2, s2, i2, a2 = 0) {
      const c2 = 16.666 / o2;
      let l2 = "{\n";
      for (let t3 = 0; t3 <= 1; t3 += c2) {
        const o3 = e2 + (n2 - e2) * s2(t3);
        l2 += 100 * t3 + `%{${i2(o3, 1 - o3)}}
`;
      }
      const u2 = l2 + `100% {${i2(n2, 1 - n2)}}
}`, p2 = `__svelte_${function(t3) {
        let e3 = 5381, n3 = t3.length;
        for (; n3--; )
          e3 = (e3 << 5) - e3 ^ t3.charCodeAt(n3);
        return e3 >>> 0;
      }(u2)}_${a2}`, f2 = t2.ownerDocument;
      q.add(f2);
      const d2 = f2.__svelte_stylesheet || (f2.__svelte_stylesheet = f2.head.appendChild(P("style")).sheet), h2 = f2.__svelte_rules || (f2.__svelte_rules = {});
      h2[p2] || (h2[p2] = true, d2.insertRule(`@keyframes ${p2} ${u2}`, d2.cssRules.length));
      const m2 = t2.style.animation || "";
      return t2.style.animation = `${m2 ? `${m2}, ` : ""}${p2} ${o2}ms linear ${r2}ms 1 both`, U += 1, p2;
    }
    function D(t2, e2) {
      const n2 = (t2.style.animation || "").split(", "), o2 = n2.filter(e2 ? (t3) => t3.indexOf(e2) < 0 : (t3) => t3.indexOf("__svelte") === -1), r2 = n2.length - o2.length;
      r2 && (t2.style.animation = o2.join(", "), U -= r2, U || y(() => {
        U || (q.forEach((t3) => {
          const e3 = t3.__svelte_stylesheet;
          let n3 = e3.cssRules.length;
          for (; n3--; )
            e3.deleteRule(n3);
          t3.__svelte_rules = {};
        }), q.clear());
      }));
    }
    function H(t2) {
      B = t2;
    }
    function K() {
      if (!B)
        throw new Error("Function called outside component initialization");
      return B;
    }
    function W(t2) {
      K().$$.after_update.push(t2);
    }
    function J() {
      const t2 = K();
      return (e2, n2) => {
        const o2 = t2.$$.callbacks[e2];
        if (o2) {
          const r2 = C(e2, n2);
          o2.slice().forEach((e3) => {
            e3.call(t2, r2);
          });
        }
      };
    }
    function G(t2, e2) {
      K().$$.context.set(t2, e2);
    }
    function Q(t2) {
      return K().$$.context.get(t2);
    }
    const V = [];
    const Z = [];
    const X = [];
    const Y = [];
    const tt = Promise.resolve();
    let et = false;
    function nt() {
      et || (et = true, tt.then(at));
    }
    function ot() {
      return nt(), tt;
    }
    function rt(t2) {
      X.push(t2);
    }
    let st = false;
    const it = new Set();
    function at() {
      if (!st) {
        st = true;
        do {
          for (let t2 = 0; t2 < V.length; t2 += 1) {
            const e2 = V[t2];
            H(e2), ct(e2.$$);
          }
          for (H(null), V.length = 0; Z.length; )
            Z.pop()();
          for (let t2 = 0; t2 < X.length; t2 += 1) {
            const e2 = X[t2];
            it.has(e2) || (it.add(e2), e2());
          }
          X.length = 0;
        } while (V.length);
        for (; Y.length; )
          Y.pop()();
        et = false, st = false, it.clear();
      }
    }
    function ct(t2) {
      if (t2.fragment !== null) {
        t2.update(), s(t2.before_update);
        const e2 = t2.dirty;
        t2.dirty = [-1], t2.fragment && t2.fragment.p(t2.ctx, e2), t2.after_update.forEach(rt);
      }
    }
    let lt;
    function ut(t2, e2, n2) {
      t2.dispatchEvent(C(`${e2 ? "intro" : "outro"}${n2}`));
    }
    const pt = new Set();
    let ft;
    function dt() {
      ft = {r: 0, c: [], p: ft};
    }
    function ht() {
      ft.r || s(ft.c), ft = ft.p;
    }
    function mt(t2, e2) {
      t2 && t2.i && (pt.delete(t2), t2.i(e2));
    }
    function gt(t2, e2, n2, o2) {
      if (t2 && t2.o) {
        if (pt.has(t2))
          return;
        pt.add(t2), ft.c.push(() => {
          pt.delete(t2), o2 && (n2 && t2.d(1), o2());
        }), t2.o(e2);
      }
    }
    const yt = {duration: 0};
    function $t(n2, o2, r2, a2) {
      let c2 = o2(n2, r2), l2 = a2 ? 0 : 1, u2 = null, p2 = null, f2 = null;
      function d2() {
        f2 && D(n2, f2);
      }
      function h2(t2, e2) {
        const n3 = t2.b - l2;
        return e2 *= Math.abs(n3), {a: l2, b: t2.b, d: n3, duration: e2, start: t2.start, end: t2.start + e2, group: t2.group};
      }
      function m2(o3) {
        const {delay: r3 = 0, duration: i2 = 300, easing: a3 = e, tick: m3 = t, css: w2} = c2 || yt, _2 = {start: g() + r3, b: o3};
        o3 || (_2.group = ft, ft.r += 1), u2 || p2 ? p2 = _2 : (w2 && (d2(), f2 = z(n2, l2, o3, i2, r3, a3, w2)), o3 && m3(0, 1), u2 = h2(_2, i2), rt(() => ut(n2, o3, "start")), function(t2) {
          let e2;
          $.size === 0 && y(b), new Promise((n3) => {
            $.add(e2 = {c: t2, f: n3});
          });
        }((t2) => {
          if (p2 && t2 > p2.start && (u2 = h2(p2, i2), p2 = null, ut(n2, u2.b, "start"), w2 && (d2(), f2 = z(n2, l2, u2.b, u2.duration, 0, a3, c2.css))), u2) {
            if (t2 >= u2.end)
              m3(l2 = u2.b, 1 - l2), ut(n2, u2.b, "end"), p2 || (u2.b ? d2() : --u2.group.r || s(u2.group.c)), u2 = null;
            else if (t2 >= u2.start) {
              const e2 = t2 - u2.start;
              l2 = u2.a + u2.d * a3(e2 / u2.duration), m3(l2, 1 - l2);
            }
          }
          return !(!u2 && !p2);
        }));
      }
      return {run(t2) {
        i(c2) ? (lt || (lt = Promise.resolve(), lt.then(() => {
          lt = null;
        })), lt).then(() => {
          c2 = c2(), m2(t2);
        }) : m2(t2);
      }, end() {
        d2(), u2 = p2 = null;
      }};
    }
    function bt(t2, e2) {
      t2.d(1), e2.delete(t2.key);
    }
    function wt(t2, e2) {
      gt(t2, 1, 1, () => {
        e2.delete(t2.key);
      });
    }
    function _t(t2, e2, n2, o2, r2, s2, i2, a2, c2, l2, u2, p2) {
      let f2 = t2.length, d2 = s2.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t2[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t3 = p2(r2, s2, h2), a3 = n2(t3);
        let c3 = i2.get(a3);
        c3 ? o2 && c3.p(t3, e2) : (c3 = l2(a3, t3), c3.c()), y2.set(a3, g2[h2] = c3), a3 in m2 && $2.set(a3, Math.abs(h2 - m2[a3]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t3) {
        mt(t3, 1), t3.m(a2, u2), i2.set(t3.key, t3), u2 = t3.first, d2--;
      }
      for (; f2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t2[f2 - 1], o3 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, f2--, d2--) : y2.has(r3) ? !i2.has(o3) || b2.has(o3) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o3) > $2.get(r3) ? (w2.add(o3), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, i2), f2--);
      }
      for (; f2--; ) {
        const e3 = t2[f2];
        y2.has(e3.key) || c2(e3, i2);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function vt(t2) {
      t2 && t2.c();
    }
    function xt(t2, e2, n2) {
      const {fragment: r2, on_mount: a2, on_destroy: c2, after_update: l2} = t2.$$;
      r2 && r2.m(e2, n2), rt(() => {
        const e3 = a2.map(o).filter(i);
        c2 ? c2.push(...e3) : s(e3), t2.$$.on_mount = [];
      }), l2.forEach(rt);
    }
    function Pt(t2, e2) {
      const n2 = t2.$$;
      n2.fragment !== null && (s(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function kt(e2, n2, o2, i2, a2, c2, l2 = [-1]) {
      const u2 = B;
      H(e2);
      const p2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t, not_equal: a2, bound: r(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: r(), dirty: l2, skip_bound: false};
      let f2 = false;
      if (p2.ctx = o2 ? o2(e2, n2.props || {}, (t2, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return p2.ctx && a2(p2.ctx[t2], p2.ctx[t2] = r2) && (!p2.skip_bound && p2.bound[t2] && p2.bound[t2](r2), f2 && function(t3, e3) {
          t3.$$.dirty[0] === -1 && (V.push(t3), nt(), t3.$$.dirty.fill(0)), t3.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t2)), n3;
      }) : [], p2.update(), f2 = true, s(p2.before_update), p2.fragment = !!i2 && i2(p2.ctx), n2.target) {
        if (n2.hydrate) {
          const t2 = function(t3) {
            return Array.from(t3.childNodes);
          }(n2.target);
          p2.fragment && p2.fragment.l(t2), t2.forEach(v);
        } else
          p2.fragment && p2.fragment.c();
        n2.intro && mt(e2.$$.fragment), xt(e2, n2.target, n2.anchor), at();
      }
      H(u2);
    }
    class Et {
      $destroy() {
        Pt(this, 1), this.$destroy = t;
      }
      $on(t2, e2) {
        const n2 = this.$$.callbacks[t2] || (this.$$.callbacks[t2] = []);
        return n2.push(e2), () => {
          const t3 = n2.indexOf(e2);
          t3 !== -1 && n2.splice(t3, 1);
        };
      }
      $set(t2) {
        var e2;
        this.$$set && (e2 = t2, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t2), this.$$.skip_bound = false);
      }
    }
    var Ot = {queryHandler: {parse: (t2) => {
      return e2 = new URLSearchParams(t2), [...e2].reduce((t3, [e3, n2]) => (t3[e3] = n2, t3), {});
      var e2;
    }, stringify: (t2) => "?" + new URLSearchParams(t2).toString()}, urlTransform: {apply: (t2) => t2, remove: (t2) => t2}, useHash: false};
    const jt = RegExp(/\:([^/()]+)/g);
    function St(t2) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      Rt(t2), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t3} = window.location;
        if (t3) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t3.substring(1))) {
            const e2 = document.querySelector(t3);
            e2 && e2.scrollIntoView();
          }
        }
      }();
    }
    function Rt(t2) {
      t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", Rt(t2.parentElement));
    }
    const Lt = (t2) => {
      const e2 = [];
      let n2;
      for (; n2 = jt.exec(t2); )
        e2.push(n2[1]);
      return e2;
    };
    function It(t2, e2) {
      It._console = It._console || {log: console.log, warn: console.warn};
      const {_console: n2} = It, o2 = t2.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t2.component.shortPath.split("/").pop()).replace(/^./, (t3) => t3.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o2}> received an unexpected slot "default".`, `<${o2}> was created with unknown prop 'scoped'`, `<${o2}> was created with unknown prop 'scopedSync'`];
      for (const t3 of ["log", "warn"])
        console[t3] = (...e3) => {
          r2.includes(e3[0]) || n2[t3](...e3);
        }, e2().then(() => {
          console[t3] = n2[t3];
        });
    }
    function At() {
      let t2 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e2, options: n2} = function(t3) {
        const [e3, n3] = t3.split("__[[routify_url_options]]__"), o2 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o2.prefetch, {url: e3, options: o2};
      }(t2);
      return {...Ft(e2), options: n2};
    }
    function Ft(t2) {
      Ot.useHash && (t2 = t2.replace(/.*#(.+)/, "$1"));
      const e2 = t2.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t2, e2);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function Mt(t2, e2, n2) {
      const o2 = Ot.useHash ? "#" : "";
      let r2;
      return r2 = function(t3, e3, n3) {
        const o3 = Object.assign({}, n3, e3), r3 = function(t4, e4) {
          if (!Ot.queryHandler)
            return "";
          const n4 = Lt(t4), o4 = {};
          e4 && Object.entries(e4).forEach(([t5, e5]) => {
            n4.includes(t5) || (o4[t5] = e5);
          });
          return Ot.queryHandler.stringify(o4).replace(/\?$/, "");
        }(t3, e3);
        for (const [e4, n4] of Object.entries(o3))
          t3 = t3.replace(`:${e4}`, n4);
        return `${t3}${r3}`;
      }(t2, e2, n2), r2 = Ot.urlTransform.apply(r2), r2 = o2 + r2, r2;
    }
    function Nt(t2) {
      let e2;
      const n2 = t2[2].default, o2 = p(n2, t2, t2[1], null);
      return {c() {
        o2 && o2.c();
      }, m(t3, n3) {
        o2 && o2.m(t3, n3), e2 = true;
      }, p(t3, [e3]) {
        o2 && o2.p && 2 & e3 && d(o2, n2, t3, t3[1], e3, null, null);
      }, i(t3) {
        e2 || (mt(o2, t3), e2 = true);
      }, o(t3) {
        gt(o2, t3), e2 = false;
      }, d(t3) {
        o2 && o2.d(t3);
      }};
    }
    function Tt(t2, e2, n2) {
      let {$$slots: o2 = {}, $$scope: r2} = e2, {scoped: s2 = {}} = e2;
      return t2.$$set = (t3) => {
        "scoped" in t3 && n2(0, s2 = t3.scoped), "$$scope" in t3 && n2(1, r2 = t3.$$scope);
      }, [s2, r2, o2];
    }
    class Ct extends Et {
      constructor(t2) {
        super(), kt(this, t2, Tt, Nt, a, {scoped: 0});
      }
    }
    const qt = [];
    function Bt(e2, n2 = t) {
      let o2;
      const r2 = [];
      function s2(t2) {
        if (a(e2, t2) && (e2 = t2, o2)) {
          const t3 = !qt.length;
          for (let t4 = 0; t4 < r2.length; t4 += 1) {
            const n3 = r2[t4];
            n3[1](), qt.push(n3, e2);
          }
          if (t3) {
            for (let t4 = 0; t4 < qt.length; t4 += 2)
              qt[t4][0](qt[t4 + 1]);
            qt.length = 0;
          }
        }
      }
      return {set: s2, update: function(t2) {
        s2(t2(e2));
      }, subscribe: function(i2, a2 = t) {
        const c2 = [i2, a2];
        return r2.push(c2), r2.length === 1 && (o2 = n2(s2) || t), i2(e2), () => {
          const t2 = r2.indexOf(c2);
          t2 !== -1 && r2.splice(t2, 1), r2.length === 0 && (o2(), o2 = null);
        };
      }};
    }
    function Ut(e2, n2, o2) {
      const r2 = !Array.isArray(e2), a2 = r2 ? [e2] : e2, l2 = n2.length < 2;
      return {subscribe: Bt(o2, (e3) => {
        let o3 = false;
        const u2 = [];
        let p2 = 0, f2 = t;
        const d2 = () => {
          if (p2)
            return;
          f2();
          const o4 = n2(r2 ? u2[0] : u2, e3);
          l2 ? e3(o4) : f2 = i(o4) ? o4 : t;
        }, h2 = a2.map((t2, e4) => c(t2, (t3) => {
          u2[e4] = t3, p2 &= ~(1 << e4), o3 && d2();
        }, () => {
          p2 |= 1 << e4;
        }));
        return o3 = true, d2(), function() {
          s(h2), f2();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const zt = Bt(null);
    const Dt = Bt([]);
    Dt.subscribe((t2) => window.routify.routes = t2);
    let Ht = Bt({component: {params: {}}});
    const Kt = Bt(null);
    const Wt = Bt(true);
    function Jt(t2, e2 = false) {
      t2 = Ot.urlTransform.remove(t2);
      let {pathname: n2, search: o2} = Ft(t2).url;
      const r2 = l(Dt), s2 = r2.find((t3) => n2 === t3.meta.name) || r2.find((t3) => n2.match(t3.regex));
      if (!s2)
        throw new Error(`Route could not be found for "${n2}".`);
      const i2 = e2 ? Object.create(s2) : s2, {route: a2, redirectPath: c2, rewritePath: u2} = Gt(i2, r2);
      return u2 && ({pathname: n2, search: o2} = Ft(Mt(u2, a2.params)).url, c2 && (a2.redirectTo = Mt(c2, a2.params || {}))), Ot.queryHandler && (a2.params = Object.assign({}, a2.params, Ot.queryHandler.parse(o2))), function(t3, e3) {
        if (t3.paramKeys) {
          const n3 = function(t4) {
            const e4 = [];
            return t4.forEach((t5) => {
              e4[t5.path.split("/").filter(Boolean).length - 1] = t5;
            }), e4;
          }(t3.layouts), o3 = e3.split("/").filter(Boolean);
          (function(t4) {
            return t4.split("/").filter(Boolean).map((t5) => t5.match(/\:(.+)/)).map((t5) => t5 && t5[1]);
          })(t3.path).forEach((e4, r3) => {
            e4 && (t3.params[e4] = o3[r3], n3[r3] ? n3[r3].param = {[e4]: o3[r3]} : t3.param = {[e4]: o3[r3]});
          });
        }
      }(a2, n2), a2.leftover = t2.replace(new RegExp(a2.regex), ""), a2;
    }
    function Gt(t2, e2, n2, o2) {
      const {redirect: r2, rewrite: s2} = t2.meta;
      if (r2 || s2) {
        n2 = r2 ? r2.path || r2 : n2, o2 = s2 ? s2.path || s2 : n2;
        const i2 = r2 && r2.params, a2 = s2 && s2.params, c2 = e2.find((t3) => t3.path === o2);
        return c2 === t2 && console.error(`${o2} is redirecting to itself`), c2 || console.error(`${t2.path} is redirecting to non-existent path: ${o2}`), (i2 || a2) && (c2.params = Object.assign({}, c2.params, i2, a2)), Gt(c2, e2, n2, o2);
      }
      return {route: t2, redirectPath: n2, rewritePath: o2};
    }
    function Qt(t2, e2, n2) {
      const o2 = t2.slice();
      return o2[1] = e2[n2], o2;
    }
    function Vt(t2, e2) {
      let n2, o2;
      return {key: t2, first: null, c() {
        n2 = P("iframe"), n2.src !== (o2 = e2[1].url) && S(n2, "src", o2), S(n2, "frameborder", "0"), S(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t3, e3) {
        _(t3, n2, e3);
      }, p(t3, r2) {
        e2 = t3, 1 & r2 && n2.src !== (o2 = e2[1].url) && S(n2, "src", o2);
      }, d(t3) {
        t3 && v(n2);
      }};
    }
    function Zt(e2) {
      let n2, o2 = [], r2 = new Map(), s2 = e2[0];
      const i2 = (t2) => t2[1].options.prefetch;
      for (let t2 = 0; t2 < s2.length; t2 += 1) {
        let n3 = Qt(e2, s2, t2), a2 = i2(n3);
        r2.set(a2, o2[t2] = Vt(a2, n3));
      }
      return {c() {
        n2 = P("div");
        for (let t2 = 0; t2 < o2.length; t2 += 1)
          o2[t2].c();
        S(n2, "id", "__routify_iframes"), A(n2, "display", "none");
      }, m(t2, e3) {
        _(t2, n2, e3);
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].m(n2, null);
      }, p(t2, [e3]) {
        1 & e3 && (s2 = t2[0], o2 = _t(o2, e3, i2, 1, t2, s2, r2, n2, bt, Vt, null, Qt));
      }, i: t, o: t, d(t2) {
        t2 && v(n2);
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].d();
      }};
    }
    const Xt = Bt([]);
    const Yt = Ut(Xt, (t2) => t2.slice(0, 2));
    function te(t2) {
      const e2 = t2.data ? t2.data.prefetchId : t2;
      if (!e2)
        return null;
      const n2 = l(Xt).find((t3) => t3 && t3.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t3} = n2.options, o2 = new Promise((e3) => setTimeout(e3, t3)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t3 + 1e3);
        });
        Promise.all([o2, r2]).then(() => {
          Xt.update((t4) => t4.filter((t5) => t5.options.prefetch != e2));
        });
      }
    }
    function ee(t2, e2, n2) {
      let o2;
      return u(t2, Yt, (t3) => n2(0, o2 = t3)), [o2];
    }
    Yt.subscribe((t2) => t2.forEach(({options: t3}) => {
      setTimeout(() => te(t3.prefetch), t3.timeout);
    })), addEventListener("message", te, false);
    class ne extends Et {
      constructor(t2) {
        super(), kt(this, t2, ee, Zt, a, {});
      }
    }
    function oe() {
      return Q("routify") || Ht;
    }
    const re = {_hooks: [(t2) => Wt.set(false)], subscribe: ie};
    const se = {_hooks: [], subscribe: ie};
    function ie(t2) {
      const e2 = this._hooks, n2 = e2.length;
      return t2((t3) => {
        e2[n2] = t3;
      }), () => delete e2[n2];
    }
    const ae = {subscribe: (t2) => Ut(oe(), (t3) => t3.route.params).subscribe(t2)};
    const ce = {subscribe: (t2) => Ut([oe(), zt, Dt], (t3) => function(t4, e2, n2) {
      return function(o2, r2 = {}, s2) {
        const {component: i2} = t4, a2 = Object.assign({}, e2.params, i2.params);
        let c2 = o2 && o2.nodeType && o2;
        c2 && (o2 = o2.getAttribute("href")), o2 = o2 ? p2(o2) : i2.shortPath;
        const l2 = n2.find((t5) => [t5.shortPath || "/", t5.path].includes(o2));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t5 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t5);
        }
        s2 && s2.strict !== false || (o2 = o2.replace(/index$/, ""));
        let u2 = Mt(o2, r2, a2);
        return c2 ? (c2.href = u2, {update(t5) {
          c2.href = Mt(o2, t5, a2);
        }}) : u2;
        function p2(t5) {
          if (t5.match(/^\.\.?\//)) {
            let [, e3, n3] = t5.match(/^([\.\/]+)(.*)/), o3 = i2.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            i2.isPage && r3.push(null), r3.forEach(() => o3 = o3.replace(/\/[^\/]+\/?$/, "")), t5 = (t5 = `${o3}/${n3}`.replace(/\/$/, "")) || "/";
          } else if (t5.match(/^\//))
            ;
          else {
            const e3 = n2.find((e4) => e4.meta.name === t5);
            e3 && (t5 = e3.shortPath);
          }
          return t5;
        }
      };
    }(...t3)).subscribe(t2)};
    const le = {subscribe(t2) {
      const e2 = Q("routifyupdatepage");
      return Ut(ce, (t3) => function(n2, o2, r2, s2) {
        const i2 = t3(n2, o2);
        r2 ? e2(i2, s2) : history.pushState({}, null, i2);
      }).subscribe(t2);
    }};
    const ue = {subscribe(t2) {
      const e2 = Q("routifyupdatepage");
      return Ut(ce, (t3) => function(n2, o2, r2, s2) {
        const i2 = t3(n2, o2);
        r2 ? e2(i2, s2) : history.replaceState({}, null, i2);
      }).subscribe(t2);
    }};
    const pe = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e2) => [t2, (pe.getLongest(pe.templates, t2) || ((t3) => t3))(e2)]}, {name: "createMeta", condition: () => true, action(t2, e2) {
      pe.writeMeta(t2, e2);
    }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e2) {
      pe.writeMeta(`og:${t2}`, e2);
    }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e2) {
      document.title = e2;
    }}], getLongest(t2, e2) {
      const n2 = t2[e2];
      if (n2) {
        const o2 = l(zt).path;
        return n2[Object.keys(t2[e2]).filter((t3) => o2.includes(t3)).sort((t3, e3) => e3.length - t3.length)[0]];
      }
    }, writeMeta(t2, e2) {
      const n2 = document.getElementsByTagName("head")[0], o2 = t2.match(/(.+)\:/), r2 = o2 && o2[1] || "plain", {propField: s2, valueField: i2} = fe.services[r2] || fe.services.plain, a2 = document.querySelector(`meta[${s2}='${t2}']`);
      a2 && a2.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s2, t2), c2.setAttribute(i2, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t2, e2) {
      pe.plugins.forEach((n2) => {
        n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
      });
    }, clear() {
      const t2 = document.querySelector("meta");
      t2 && t2.remove();
    }, template(t2, e2) {
      const n2 = pe.getOrigin();
      pe.templates[t2] = pe.templates[t2] || {}, pe.templates[t2][n2] = e2;
    }, update() {
      Object.keys(pe.props).forEach((t2) => {
        let e2 = pe.getLongest(pe.props, t2);
        pe.plugins.forEach((n2) => {
          n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
        });
      });
    }, batchedUpdate() {
      pe._pendingUpdate || (pe._pendingUpdate = true, setTimeout(() => {
        pe._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t2 = oe();
      return t2 && l(t2).path || "/";
    }, _pendingUpdate: false};
    const fe = new Proxy(pe, {set(t2, e2, n2, o2) {
      const {props: r2, getOrigin: s2} = t2;
      return Reflect.has(t2, e2) ? Reflect.set(t2, e2, n2, o2) : (r2[e2] = r2[e2] || {}, r2[e2][s2()] = n2), window.routify.appLoaded && t2.batchedUpdate(), true;
    }});
    function de(t2, e2, n2) {
      const o2 = t2.slice();
      return o2[18] = e2[n2].component, o2[19] = e2[n2].componentFile, o2[2] = e2[n2].decorator, o2[1] = e2[n2].nodes, o2;
    }
    function he(t2) {
      let e2, n2, o2 = [], r2 = new Map(), s2 = [t2[4]];
      const i2 = (t3) => function({meta: t4, path: e3, param: n3, params: o3}) {
        return JSON.stringify({path: e3, param: (t4["param-is-page"] || t4["slug-is-page"]) && n3, queryParams: t4["query-params-is-page"] && o3});
      }(t3[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = de(t2, s2, e3), a2 = i2(n3);
        r2.set(a2, o2[e3] = $e(a2, n3));
      }
      return {c() {
        for (let t3 = 0; t3 < 1; t3 += 1)
          o2[t3].c();
        e2 = O();
      }, m(t3, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].m(t3, r3);
        _(t3, e2, r3), n2 = true;
      }, p(t3, n3) {
        4194365 & n3 && (s2 = [t3[4]], dt(), o2 = _t(o2, n3, i2, 1, t3, s2, r2, e2.parentNode, wt, $e, e2, de), ht());
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < 1; t4 += 1)
            mt(o2[t4]);
          n2 = true;
        }
      }, o(t3) {
        for (let t4 = 0; t4 < 1; t4 += 1)
          gt(o2[t4]);
        n2 = false;
      }, d(t3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].d(t3);
        t3 && v(e2);
      }};
    }
    function me(t2) {
      let e2, n2;
      return e2 = new _e({props: {decorator: t2[2], nodes: [...t2[1]], scoped: {...t2[0], ...t2[22]}}}), {c() {
        vt(e2.$$.fragment);
      }, m(t3, o2) {
        xt(e2, t3, o2), n2 = true;
      }, p(t3, n3) {
        const o2 = {};
        4 & n3 && (o2.decorator = t3[2]), 16 & n3 && (o2.nodes = [...t3[1]]), 4194305 & n3 && (o2.scoped = {...t3[0], ...t3[22]}), e2.$set(o2);
      }, i(t3) {
        n2 || (mt(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        gt(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        Pt(e2, t3);
      }};
    }
    function ge(t2) {
      let e2, n2, o2 = t2[18] && t2[1].length && me(t2);
      return {c() {
        o2 && o2.c(), e2 = O();
      }, m(t3, r2) {
        o2 && o2.m(t3, r2), _(t3, e2, r2), n2 = true;
      }, p(t3, n3) {
        t3[18] && t3[1].length ? o2 ? (o2.p(t3, n3), 16 & n3 && mt(o2, 1)) : (o2 = me(t3), o2.c(), mt(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (dt(), gt(o2, 1, 1, () => {
          o2 = null;
        }), ht());
      }, i(t3) {
        n2 || (mt(o2), n2 = true);
      }, o(t3) {
        gt(o2), n2 = false;
      }, d(t3) {
        o2 && o2.d(t3), t3 && v(e2);
      }};
    }
    function ye(t2) {
      let e2, o2, r2;
      const s2 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[3].param || {}];
      var i2 = t2[19];
      function a2(t3) {
        let e3 = {$$slots: {default: [ge, ({scoped: t4, decorator: e4}) => ({22: t4, 2: e4}), ({scoped: t4, decorator: e4}) => (t4 ? 4194304 : 0) | (e4 ? 4 : 0)]}, $$scope: {ctx: t3}};
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          e3 = n(e3, s2[t4]);
        return {props: e3};
      }
      return i2 && (e2 = new i2(a2(t2))), {c() {
        e2 && vt(e2.$$.fragment), o2 = E();
      }, m(t3, n2) {
        e2 && xt(e2, t3, n2), _(t3, o2, n2), r2 = true;
      }, p(t3, n2) {
        const r3 = 41 & n2 ? function(t4, e3) {
          const n3 = {}, o3 = {}, r4 = {$$scope: 1};
          let s3 = t4.length;
          for (; s3--; ) {
            const i3 = t4[s3], a3 = e3[s3];
            if (a3) {
              for (const t5 in i3)
                t5 in a3 || (o3[t5] = 1);
              for (const t5 in a3)
                r4[t5] || (n3[t5] = a3[t5], r4[t5] = 1);
              t4[s3] = a3;
            } else
              for (const t5 in i3)
                r4[t5] = 1;
          }
          for (const t5 in o3)
            t5 in n3 || (n3[t5] = void 0);
          return n3;
        }(s2, [1 & n2 && {scoped: t3[0]}, 32 & n2 && {scopedSync: t3[5]}, 8 & n2 && (c2 = t3[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582933 & n2 && (r3.$$scope = {dirty: n2, ctx: t3}), i2 !== (i2 = t3[19])) {
          if (e2) {
            dt();
            const t4 = e2;
            gt(t4.$$.fragment, 1, 0, () => {
              Pt(t4, 1);
            }), ht();
          }
          i2 ? (e2 = new i2(a2(t3)), vt(e2.$$.fragment), mt(e2.$$.fragment, 1), xt(e2, o2.parentNode, o2)) : e2 = null;
        } else
          i2 && e2.$set(r3);
      }, i(t3) {
        r2 || (e2 && mt(e2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        e2 && gt(e2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        e2 && Pt(e2, t3), t3 && v(o2);
      }};
    }
    function $e(t2, e2) {
      let n2, o2, r2, s2;
      var i2 = e2[2];
      function a2(t3) {
        return {props: {scoped: t3[0], $$slots: {default: [ye]}, $$scope: {ctx: t3}}};
      }
      return i2 && (o2 = new i2(a2(e2))), {key: t2, first: null, c() {
        n2 = O(), o2 && vt(o2.$$.fragment), r2 = O(), this.first = n2;
      }, m(t3, e3) {
        _(t3, n2, e3), o2 && xt(o2, t3, e3), _(t3, r2, e3), s2 = true;
      }, p(t3, n3) {
        e2 = t3;
        const s3 = {};
        if (1 & n3 && (s3.scoped = e2[0]), 8388669 & n3 && (s3.$$scope = {dirty: n3, ctx: e2}), i2 !== (i2 = e2[2])) {
          if (o2) {
            dt();
            const t4 = o2;
            gt(t4.$$.fragment, 1, 0, () => {
              Pt(t4, 1);
            }), ht();
          }
          i2 ? (o2 = new i2(a2(e2)), vt(o2.$$.fragment), mt(o2.$$.fragment, 1), xt(o2, r2.parentNode, r2)) : o2 = null;
        } else
          i2 && o2.$set(s3);
      }, i(t3) {
        s2 || (o2 && mt(o2.$$.fragment, t3), s2 = true);
      }, o(t3) {
        o2 && gt(o2.$$.fragment, t3), s2 = false;
      }, d(t3) {
        t3 && v(n2), t3 && v(r2), o2 && Pt(o2, t3);
      }};
    }
    function be(e2) {
      let n2, o2, r2, s2, a2, c2 = e2[4] && he(e2);
      return {c() {
        c2 && c2.c(), n2 = E(), o2 = P("span");
      }, m(l2, u2) {
        var p2;
        c2 && c2.m(l2, u2), _(l2, n2, u2), _(l2, o2, u2), r2 = true, s2 || (p2 = e2[8].call(null, o2), a2 = p2 && i(p2.destroy) ? p2.destroy : t, s2 = true);
      }, p(t2, [e3]) {
        t2[4] ? c2 ? (c2.p(t2, e3), 16 & e3 && mt(c2, 1)) : (c2 = he(t2), c2.c(), mt(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (dt(), gt(c2, 1, 1, () => {
          c2 = null;
        }), ht());
      }, i(t2) {
        r2 || (mt(c2), r2 = true);
      }, o(t2) {
        gt(c2), r2 = false;
      }, d(t2) {
        c2 && c2.d(t2), t2 && v(n2), t2 && v(o2), s2 = false, a2();
      }};
    }
    function we(t2, e2, n2) {
      let o2, r2, s2, i2;
      u(t2, zt, (t3) => n2(14, s2 = t3));
      let a2, {nodes: c2 = []} = e2, {scoped: l2 = {}} = e2, {isRoot: p2 = false} = e2, {decorator: f2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = Bt(null);
      u(t2, g2, (t3) => n2(4, i2 = t3));
      const y2 = Q("routify");
      u(t2, y2, (t3) => n2(10, r2 = t3));
      function $2(t3) {
        n2(5, m2 = {...l2}), h2.length === 0 && async function() {
          await ot(), St(a2);
          const t4 = i2.component.path === s2.path;
          !window.routify.stopAutoReady && t4 && async function({page: t5, metatags: e4, afterPageLoad: n3}) {
            const {path: o3} = t5, {options: r3} = At(), s3 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t5.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o3, prefetchId: s3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: i2.component, metatags: fe, afterPageLoad: re});
        }();
        const e3 = {nodes: h2, decorator: f2 || Ct, layout: d2.isLayout ? d2 : o2 && o2.layout, component: d2, route: s2, componentFile: t3, parentNode: a2 || o2 && o2.parentNode};
        g2.set(e3), p2 && Ht.set(e3);
      }
      return G("routify", g2), t2.$$set = (t3) => {
        "nodes" in t3 && n2(1, c2 = t3.nodes), "scoped" in t3 && n2(0, l2 = t3.scoped), "isRoot" in t3 && n2(9, p2 = t3.isRoot), "decorator" in t3 && n2(2, f2 = t3.decorator);
      }, t2.$$.update = () => {
        1024 & t2.$$.dirty && (o2 = r2), 2 & t2.$$.dirty && n2(3, [d2, ...h2] = c2, d2), 8 & t2.$$.dirty && function(t3) {
          let e3 = t3.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t2.$$.dirty && i2 && It(i2, ot);
      }, [l2, c2, f2, d2, i2, m2, g2, y2, (t3) => a2 = t3.parentNode, p2, r2];
    }
    class _e extends Et {
      constructor(t2) {
        super(), kt(this, t2, we, be, a, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function ve(t2, e2) {
      let n2 = false;
      function o2(o3, r3) {
        const s2 = Jt(o3 || At().fullpath);
        s2.redirectTo && (history.replaceStateNative({}, null, s2.redirectTo), delete s2.redirectTo);
        const i2 = [...(r3 && Jt(At().fullpath, t2) || s2).layouts, s2];
        n2 && delete n2.last, s2.last = n2, n2 = s2, o3 || Kt.set(s2), zt.set(s2), s2.api.preload().then(() => {
          Wt.set(true), e2(i2);
        });
      }
      const r2 = function(t3) {
        ["pushState", "replaceState"].forEach((t4) => {
          history[t4 + "Native"] = history[t4], history[t4] = async function(e4 = {}, n4, o3) {
            if (o3 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: s2, params: i2} = l(zt);
            e4 = {id: r3, path: s2, params: i2, ...e4};
            const a2 = new Event(t4.toLowerCase());
            Object.assign(a2, {state: e4, title: n4, url: o3});
            return await Pe(a2, o3) ? (history[t4 + "Native"].apply(this, [e4, n4, o3]), dispatchEvent(a2)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: xe, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n4) => {
          e3 ? e3 = false : await Pe(n4, At().fullpath) ? t3() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t4) => addEventListener(...t4));
        return () => {
          Object.entries(n3).forEach((t4) => removeEventListener(...t4));
        };
      }(o2);
      return {updatePage: o2, destroy: r2};
    }
    function xe(t2) {
      const e2 = t2.target.closest("a"), n2 = e2 && e2.href;
      if (t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o2 = new URL(n2), r2 = o2.pathname + o2.search + o2.hash;
      t2.preventDefault(), history.pushState({}, "", r2);
    }
    async function Pe(t2, e2) {
      const n2 = Jt(e2).api;
      for (const o2 of se._hooks.filter(Boolean)) {
        if (!await o2(t2, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function ke(t2) {
      let e2, n2;
      return e2 = new _e({props: {nodes: t2[0], isRoot: true}}), {c() {
        vt(e2.$$.fragment);
      }, m(t3, o2) {
        xt(e2, t3, o2), n2 = true;
      }, p(t3, n3) {
        const o2 = {};
        1 & n3 && (o2.nodes = t3[0]), e2.$set(o2);
      }, i(t3) {
        n2 || (mt(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        gt(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        Pt(e2, t3);
      }};
    }
    function Ee(t2) {
      let e2, n2, o2, r2 = t2[0] && t2[1] !== null && ke(t2);
      return n2 = new ne({}), {c() {
        r2 && r2.c(), e2 = E(), vt(n2.$$.fragment);
      }, m(t3, s2) {
        r2 && r2.m(t3, s2), _(t3, e2, s2), xt(n2, t3, s2), o2 = true;
      }, p(t3, [n3]) {
        t3[0] && t3[1] !== null ? r2 ? (r2.p(t3, n3), 3 & n3 && mt(r2, 1)) : (r2 = ke(t3), r2.c(), mt(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (dt(), gt(r2, 1, 1, () => {
          r2 = null;
        }), ht());
      }, i(t3) {
        o2 || (mt(r2), mt(n2.$$.fragment, t3), o2 = true);
      }, o(t3) {
        gt(r2), gt(n2.$$.fragment, t3), o2 = false;
      }, d(t3) {
        r2 && r2.d(t3), t3 && v(e2), Pt(n2, t3);
      }};
    }
    function Oe(t2, e2, n2) {
      let o2;
      u(t2, zt, (t3) => n2(1, o2 = t3));
      let r2, s2, {routes: i2} = e2, {config: a2 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(Ot, a2);
      G("routifyupdatepage", (...t3) => s2 && s2.updatePage(...t3));
      const c2 = (t3) => n2(0, r2 = t3), l2 = () => {
        s2 && (s2.destroy(), s2 = null);
      };
      let p2 = null;
      var f2;
      return f2 = l2, K().$$.on_destroy.push(f2), t2.$$set = (t3) => {
        "routes" in t3 && n2(2, i2 = t3.routes), "config" in t3 && n2(3, a2 = t3.config);
      }, t2.$$.update = () => {
        4 & t2.$$.dirty && i2 && (clearTimeout(p2), p2 = setTimeout(() => {
          l2(), s2 = ve(i2, c2), Dt.set(i2), s2.updatePage();
        }));
      }, [r2, o2, i2, a2];
    }
    class je extends Et {
      constructor(t2) {
        super(), kt(this, t2, Oe, Ee, a, {routes: 2, config: 3});
      }
    }
    function Se(t2) {
      const e2 = async function(e3) {
        return await Re(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return Le(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function Re(t2, e2) {
      const n2 = await t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = await Promise.all(o2.children.map(async (n4) => Re(t2, {state: e2.state, scope: Ie(e2.scope || {}), parent: e2.file, file: await n4})));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Le(t2, e2) {
      const n2 = t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = o2.children.map((n4) => Le(t2, {state: e2.state, scope: Ie(e2.scope || {}), parent: e2.file, file: n4}));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Ie(t2) {
      return JSON.parse(JSON.stringify(t2));
    }
    const Ae = Se(({file: t2}) => {
      (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(jt, "([^/]+)") + n2}`;
      })(t2.path, t2.isFallback));
    });
    const Fe = Se(({file: t2}) => {
      t2.paramKeys = Lt(t2.path);
    });
    const Me = Se(({file: t2}) => {
      t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
    });
    const Ne = Se(({file: t2}) => {
      t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
    });
    const Te = Se(({file: t2}) => {
      const e2 = t2, n2 = t2.meta && t2.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
    });
    const Ce = Se((t2) => {
      const {file: e2} = t2, {isFallback: n2, meta: o2} = e2, r2 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i2 = o2.index || o2.index === 0, a2 = o2.index === false;
      e2.isIndexable = i2 || !n2 && !r2 && !s2 && !a2, e2.isNonIndexable = !e2.isIndexable;
    });
    const qe = Se(({file: t2, parent: e2}) => {
      Object.defineProperty(t2, "parent", {get: () => e2}), Object.defineProperty(t2, "nextSibling", {get: () => Ue(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => Ue(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => Be(e2)});
    });
    function Be(t2, e2 = []) {
      return t2 && (e2.unshift(t2), Be(t2.parent, e2)), e2;
    }
    function Ue(t2, e2) {
      if (!t2.root) {
        const n2 = t2.parent.children.filter((t3) => t3.isIndexable), o2 = n2.indexOf(t2);
        return n2[o2 + e2];
      }
    }
    const ze = Se(({file: t2, parent: e2}) => {
      t2.isIndex && Object.defineProperty(e2, "index", {get: () => t2});
    });
    const De = Se(({file: t2, scope: e2}) => {
      function n2(t3) {
        const {parent: e3} = t3, o2 = e3 && e3.component && e3, r2 = o2 && o2.isReset, s2 = e3 && !r2 && n2(e3) || [];
        return o2 && s2.push(o2), s2;
      }
      Object.defineProperty(t2, "layouts", {get: () => n2(t2)});
    });
    const He = Se(({file: t2}) => {
      const e2 = t2.root ? function() {
      } : t2.children ? (t2.isPage, function() {
      }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
      });
      Object.setPrototypeOf(t2, e2.prototype);
    });
    var Ke = Object.freeze({__proto__: null, setRegex: Ae, setParamKeys: Fe, setShortPath: Me, setRank: Ne, addMetaChildren: Te, setIsIndexable: Ce, assignRelations: qe, assignIndex: ze, assignLayout: De, createFlatList: (t2) => {
      Se((t3) => {
        (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
      }).sync(t2), t2.routes.sort((t3, e2) => t3.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: He});
    const We = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function Je(t2) {
      return Object.entries(We).forEach(([e2, n2]) => {
        t2[e2] === void 0 && (t2[e2] = n2);
      }), t2.children && (t2.children = t2.children.map(Je)), t2;
    }
    const Ge = Se(({file: t2}) => {
      t2.api = new Qe(t2);
    });
    class Qe {
      constructor(t2) {
        this.__file = t2, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t2.isMeta, this.path = t2.path, this.title = function(t3) {
          return t3.meta.title !== void 0 ? t3.meta.title : (t3.shortPath || t3.path).split("/").pop().replace(/-/g, " ");
        }(t2), this.meta = t2.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t2) => !t2.isNonIndexable).sort((t2, e2) => t2.isMeta && e2.isMeta ? 0 : (t2 = (t2.meta.index || t2.meta.title || t2.path).toString(), e2 = (e2.meta.index || e2.meta.title || e2.path).toString(), t2.localeCompare(e2, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t2}) => t2);
      }
      get next() {
        return Ve(this, 1);
      }
      get prev() {
        return Ve(this, -1);
      }
      async preload() {
        const t2 = [...this.__file.layouts, this.__file].map((t3) => t3.component());
        await Promise.all(t2);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function Ve(t2, e2) {
      if (!t2.__file.root) {
        const n2 = t2.parent.children.indexOf(t2);
        return t2.parent.children[n2 + e2];
      }
    }
    const Ze = {...Ke, restoreDefaults: ({tree: t2}) => Je(t2), assignAPI: Ge};
    const Xe = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_6e92d963())).then((t2) => t2.default)}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_8b4a4faa())).then((t2) => t2.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_2c1ce2e1())).then((t2) => t2.default)};
    const {tree: Ye, routes: tn} = function(t2) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t2, routes: []};
      for (let t3 of e2) {
        (Ze[t3].sync || Ze[t3])(n2);
      }
      return n2;
    }(Xe);
    function en(e2) {
      let n2, o2;
      return n2 = new je({props: {routes: tn}}), {c() {
        vt(n2.$$.fragment);
      }, m(t2, e3) {
        xt(n2, t2, e3), o2 = true;
      }, p: t, i(t2) {
        o2 || (mt(n2.$$.fragment, t2), o2 = true);
      }, o(t2) {
        gt(n2.$$.fragment, t2), o2 = false;
      }, d(t2) {
        Pt(n2, t2);
      }};
    }
    !function(t2, e2 = {target: document.body}, n2 = "hmr", o2 = "app-loaded") {
      const r2 = document.getElementById(n2), s2 = document.createElement("div");
      function i2() {
        r2 && r2.remove(), s2.style.visibility = null, s2.setAttribute("id", n2);
      }
      s2.style.visibility = "hidden", e2.target.appendChild(s2), r2 ? addEventListener(o2, i2) : i2(), new t2({...e2, target: s2});
    }(class extends Et {
      constructor(t2) {
        super(), kt(this, t2, null, en, a, {});
      }
    }, {target: document.body}, "routify-app");
  });
  require_main();
})();
