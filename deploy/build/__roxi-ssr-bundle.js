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

  // dist/build/_fallback-9f3ddefc.js
  var require_fallback_9f3ddefc = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_9f3ddefc_default
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
    class fallback_9f3ddefc_default extends main.S {
      constructor(s2) {
        super(), main.i(this, s2, g, v, main.s, {});
      }
    }
  });

  // dist/build/index-1280be85.js
  var require_index_1280be85 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_1280be85_default
    });
    const main = __toModule(require_main());
    const V = {value: null, color: null};
    const H = {value: "\u{1F496}", color: "#fff"};
    const K = [{value: "\uAD8C\uC740\uBE44", color: "#bbb0dc"}, {value: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", color: "#f1d2e7"}, {value: "\uAC15\uD61C\uC6D0", color: "#db706c"}, {value: "\uCD5C\uC608\uB098", color: "#fcf695"}, {value: "\uC774\uCC44\uC5F0", color: "#a7e0e1"}, {value: "\uAE40\uCC44\uC6D0", color: "#cee5d5"}, {value: "\uC57C\uBD80\uD0A4 \uB098\uCF54", color: "#b7d3e9"}, {value: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", color: "#f1c3aa"}, {value: "\uAE40\uBBFC\uC8FC", color: "#fff"}, {value: "\uC870\uC720\uB9AC", color: "#f3aa51"}, {value: "\uC548\uC720\uC9C4", color: "#567ace"}, {value: "\uC7A5\uC6D0\uC601", color: "#d9598c"}, {value: "\uC6B4\uC601\uD300", color: "gray"}];
    let q;
    let Z = main.w(function() {
      let t2 = K.reduce((t3, e3) => (t3.set(e3.value, e3), t3), new Map([["\u{1F496}", H]]));
      const e2 = localStorage.getItem("all_tag_dict");
      return e2 && (console.log("all tag backup loaded"), t2 = [...t2].reduce((t3, e3) => (t3.set(e3[0], e3[1]), t3), new Map(JSON.parse(e2)))), t2;
    }());
    Z.subscribe((t2) => {
      var e2;
      localStorage.setItem("all_tag_dict", (e2 = t2, JSON.stringify([...e2])));
    }), Z.subscribe((t2) => {
      q = (e2) => {
        const n2 = e2.map((e3) => [e3[0], new Set(e3[1].map((e4) => t2.get(e4)))]);
        return new Map(n2);
      };
    });
    let Q = main.w((() => {
      const t2 = localStorage.getItem("mail_to_tag_dict");
      let e2 = new Map([["m0", new Set([H])]]);
      if (t2) {
        const n2 = JSON.parse(t2);
        e2 = q(n2);
      }
      return e2;
    })());
    function G(t2) {
      return [...t2].map((t3) => [t3[0], [...t3[1]].map((t4) => t4.value)]);
    }
    Q.subscribe((t2) => {
      if (!t2)
        return null;
      [...t2].forEach((t3) => {
        t3[1].size == 0 && Q.update((e3) => (e3.delete(t3[0]), e3));
      });
      const e2 = G(t2);
      localStorage.setItem("mail_to_tag_dict", JSON.stringify(e2));
    });
    let U = main.w([{id: "", member: "", time: "", subject: "", preview: "", n: 1}]);
    let X = main.w({id: "m20731", member: "\uAD11\uBC30", time: "2021/03/09 19:23", subject: "\uC0AC\uD0D5", preview: "\uC704\uC988\uC6D0 \uC0AC\uD0D5 \uD478\uB529 \uB9DB \uC788\uB294\uAC70 \uC54C\uC558\uC5B4?? \uB9DB\uC788\uC5B4\uBCF4\uC5EC\uC11C \uC0AC\uC11C \uC5B8\uC81C\uBA39\uC744\uC9C0 \uACE0\uBBFC\uC911\uC774\uC57C ."});
    let Y = main.w("");
    let tt = main.h(Y, (t2) => "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + t2.replace(/\&nbsp;<\/div>/g, "\n").replace(/<\/div>/g, "\n").replace(/&nbsp;/g, "").replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "").replace(/\n\n/g, "\n").replace(/\n/g, "%0A"));
    let et = main.w(1);
    let nt = main.w(true);
    let rt = main.w(true);
    let st = main.h(rt, (t2) => !t2);
    let it = main.w("");
    let ot = main.w(Math.floor(12 * Math.random()));
    let ct = main.w({color: null, value: null});
    const lt = (t2) => () => {
      ct.set(t2), et.set(1);
    };
    let at;
    Z.subscribe((t2) => {
      at = (e2) => new Map(e2.map((e3) => [t2.get(e3[0]), new Set(e3[1])]));
    });
    let ut = main.w((() => {
      let t2 = K.reduce((t3, e3) => (t3.set(e3, new Set()), t3), new Map([[H, new Set()]]));
      const e2 = localStorage.getItem("tag_to_mail_dict");
      if (e2) {
        const n2 = JSON.parse(e2);
        t2 = [...at(n2)].reduce((t3, e3) => (t3.set(e3[0], e3[1]), t3), t2);
      }
      return t2;
    })());
    function dt(t2) {
      return [...t2].map((t3) => [t3[0].value, [...t3[1]]]);
    }
    function ht(t2) {
      let e2, n2 = t2[0].value + "";
      return {c() {
        e2 = main.t(n2);
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p(t3, r2) {
        1 & r2 && n2 !== (n2 = t3[0].value + "") && main.o(e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function ft(t2) {
      let e2, n2, r2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", n2 = (t2[2] == "xs" ? "w-4 h-4" : "w-5 h-5") + " float-none"), e2.src !== (r2 = "./img/yellow-star.png") && main.b(e2, "src", "./img/yellow-star.png"), main.b(e2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p(t3, r3) {
        4 & r3 && n2 !== (n2 = (t3[2] == "xs" ? "w-4 h-4" : "w-5 h-5") + " float-none") && main.b(e2, "class", n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function pt(t2) {
      let e2, n2, r2, s2, p2;
      return {c() {
        e2 = main.e("span"), n2 = main.t("X"), main.j(e2, "background-color", t2[0].color), main.b(e2, "class", r2 = "\r\n" + (t2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r\r\n-ml-2 mt-1 mb-1 p-1\r\ntext-" + t2[2]);
      }, m(r3, i2) {
        main.c(r3, e2, i2), main.d(e2, n2), s2 || (p2 = main.l(e2, "click", function() {
          main.k(t2[3] ? t2[3] : t2[5]) && (t2[3] ? t2[3] : t2[5]).apply(this, arguments);
        }), s2 = true);
      }, p(n3, s3) {
        t2 = n3, 1 & s3 && main.j(e2, "background-color", t2[0].color), 5 & s3 && r2 !== (r2 = "\r\n" + (t2[0].color == "#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1") + "\r\nrounded-r\r\n-ml-2 mt-1 mb-1 p-1\r\ntext-" + t2[2]) && main.b(e2, "class", r2);
      }, d(t3) {
        t3 && main.f(e2), s2 = false, p2();
      }};
    }
    function mt(t2) {
      let e2, n2, r2, s2, o2, u2;
      function $2(t3, e3) {
        return t3[0].value == "\u{1F496}" ? ft : ht;
      }
      let y2 = $2(t2), w2 = y2(t2), x2 = (t2[3] || t2[1] && t2[0].value != "\uC0DD\uC77C") && pt(t2);
      return {c() {
        e2 = main.e("span"), w2.c(), r2 = main.a(), x2 && x2.c(), s2 = main.m(), main.j(e2, "background-color", t2[0].color), main.b(e2, "class", n2 = "\r\n" + (t2[2] == "" ? "p-0.5" : t2[0].color == "#fff" ? "border-2 p-0.5" : "p-1") + "\r\n" + (t2[1] ? "mt-1 ml-1 mb-1 rounded-l border-r-0 pr-2" : "m-1 rounded") + "\r\ntext-" + t2[2] + " text-" + t2[4]);
      }, m(n3, i2) {
        main.c(n3, e2, i2), w2.m(e2, null), main.c(n3, r2, i2), x2 && x2.m(n3, i2), main.c(n3, s2, i2), o2 || (u2 = main.l(e2, "click", function() {
          main.k(t2[3] ? t2[3] : lt(t2[0])) && (t2[3] ? t2[3] : lt(t2[0])).apply(this, arguments);
        }), o2 = true);
      }, p(r3, [i2]) {
        y2 === (y2 = $2(t2 = r3)) && w2 ? w2.p(t2, i2) : (w2.d(1), w2 = y2(t2), w2 && (w2.c(), w2.m(e2, null))), 1 & i2 && main.j(e2, "background-color", t2[0].color), 23 & i2 && n2 !== (n2 = "\r\n" + (t2[2] == "" ? "p-0.5" : t2[0].color == "#fff" ? "border-2 p-0.5" : "p-1") + "\r\n" + (t2[1] ? "mt-1 ml-1 mb-1 rounded-l border-r-0 pr-2" : "m-1 rounded") + "\r\ntext-" + t2[2] + " text-" + t2[4]) && main.b(e2, "class", n2), t2[3] || t2[1] && t2[0].value != "\uC0DD\uC77C" ? x2 ? x2.p(t2, i2) : (x2 = pt(t2), x2.c(), x2.m(s2.parentNode, s2)) : x2 && (x2.d(1), x2 = null);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), w2.d(), t3 && main.f(r2), x2 && x2.d(t3), t3 && main.f(s2), o2 = false, u2();
      }};
    }
    function gt(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2;
      main.g(t2, Z, (t3) => n2(6, i2 = t3)), main.g(t2, X, (t3) => n2(7, o2 = t3)), main.g(t2, ut, (t3) => n2(8, c2 = t3)), main.g(t2, Q, (t3) => n2(9, l2 = t3));
      var a2 = this && this.__awaiter || function(t3, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t4) {
            try {
              l3(r3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(r3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? s3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(t3, e3 || [])).next());
        });
      };
      let {tag: u2} = e2, {canDelete: d2 = false} = e2, {size: h2 = "xs"} = e2, {onRemove: f2} = e2;
      return t2.$$set = (t3) => {
        "tag" in t3 && n2(0, u2 = t3.tag), "canDelete" in t3 && n2(1, d2 = t3.canDelete), "size" in t3 && n2(2, h2 = t3.size), "onRemove" in t3 && n2(3, f2 = t3.onRemove);
      }, t2.$$.update = () => {
        1 & t2.$$.dirty && n2(4, r2 = u2.value == "\uAC15\uD61C\uC6D0" || u2.value == "\uC7A5\uC6D0\uC601" || u2.value == "\uC548\uC720\uC9C4" || u2.value == "\uC6B4\uC601\uD300" ? "black" : "gray-700"), 961 & t2.$$.dirty && n2(5, s2 = () => a2(void 0, void 0, void 0, function* () {
          const t3 = i2.get(u2.value);
          yield fetch(`/mail-tag-dict/mail/${o2.id}/tag/${t3.value}`, {method: "DELETE"}), c2.get(t3).delete(o2.id), ut.set(c2), l2.get(o2.id).delete(t3), Q.set(l2);
        }));
      }, [u2, d2, h2, f2, r2, s2, i2, o2, c2, l2];
    }
    ut.subscribe((t2) => {
      if ([...t2].forEach(([t3, e3]) => {
        if (e3.size == 0 && t3.value != "\u{1F496}" && !K.includes(t3)) {
          const e4 = t3.value;
          ut.update((e5) => (e5.delete(t3), e5)), Z.update((t4) => (t4.delete(e4), fetch(`/all-tag-dict/tag/${e4}`, {method: "DELETE"}).then((t5) => {
            console.log("\uC11C\uBC84\uC5D0\uC11C \uD0DC\uADF8 \uC0AD\uC81C \uC644\uB8CC");
          }), t4)), ct.update((e5) => e5 == t3 ? {color: null, value: null} : e5);
        }
      }), !t2)
        return null;
      const e2 = dt(t2);
      localStorage.setItem("tag_to_mail_dict", JSON.stringify(e2));
    });
    class $t extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, gt, mt, main.s, {tag: 0, canDelete: 1, size: 2, onRemove: 3});
      }
    }
    function yt(t2) {
      let e2, n2, r2;
      return {c() {
        e2 = main.e("span"), n2 = main.t(t2[0]), main.j(e2, "background-color", "pink"), main.b(e2, "class", r2 = "border-1 m-1 rounded\r\n" + (t2[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t2[1]);
      }, m(t3, r3) {
        main.c(t3, e2, r3), main.d(e2, n2);
      }, p(t3, [s2]) {
        1 & s2 && main.o(n2, t3[0]), 2 & s2 && r2 !== (r2 = "border-1 m-1 rounded\r\n" + (t3[1] == "" ? "p-0.5" : "p-1") + "\r\ntext-" + t3[1]) && main.b(e2, "class", r2);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function wt(t2, e2, n2) {
      let {time: r2} = e2, {size: s2 = "xs"} = e2;
      return t2.$$set = (t3) => {
        "time" in t3 && n2(0, r2 = t3.time), "size" in t3 && n2(1, s2 = t3.size);
      }, [r2, s2];
    }
    class xt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, wt, yt, main.s, {time: 0, size: 1});
      }
    }
    const vt = {0: "#d9598c", 1: "#f1d2e7", 2: "#f3aa51", 3: "#fcf695", 4: "#567ace", 5: "#b7d3e9", 6: "#bbb0dc", 7: "#db706c", 8: "#f1c3aa", 9: "#cee5d5", 10: "#fff", 11: "#a7e0e1", 12: "gray"};
    let bt = main.w({});
    main.h(bt, (t2) => Object.keys(t2).reduce((t3, e2) => ({...t3, [bt[e2]]: e2}), {0: "\uC7A5\uC6D0\uC601"}));
    const kt = {0: "\uC7A5\uC6D0\uC601", 1: "\uBBF8\uC57C\uC640\uD0A4 \uC0AC\uCFE0\uB77C", 2: "\uC870\uC720\uB9AC", 3: "\uCD5C\uC608\uB098", 4: "\uC548\uC720\uC9C4", 5: "\uC57C\uBD80\uD0A4 \uB098\uCF54", 6: "\uAD8C\uC740\uBE44", 7: "\uAC15\uD61C\uC6D0", 8: "\uD63C\uB2E4 \uD788\uD1A0\uBBF8", 9: "\uAE40\uCC44\uC6D0", 10: "\uAE40\uBBFC\uC8FC", 11: "\uC774\uCC44\uC5F0", 12: "\uC6B4\uC601\uD300"};
    function Mt(t2) {
      let e2, n2, r2;
      return {c() {
        e2 = main.e("button"), e2.textContent = "\uCD94\uAC00", main.b(e2, "class", "text-xs shadow rounded bg-red-400 p-1 m-1");
      }, m(s2, i2) {
        main.c(s2, e2, i2), n2 || (r2 = main.l(e2, "click", t2[2]), n2 = true);
      }, p: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, r2();
      }};
    }
    function _t(t2) {
      let e2, n2, r2, s2, o2, c2 = t2[1] && Mt(t2);
      return {c() {
        e2 = main.e("input"), n2 = main.a(), c2 && c2.c(), r2 = main.m(), main.b(e2, "type", "text"), main.b(e2, "class", "\r\nborder-2 border-gray\r\nm-1 p-1\r\nrounded w-16\r\ntext-xs"), main.b(e2, "placeholder", "\uC0C8 \uD0DC\uADF8");
      }, m(i2, l2) {
        main.c(i2, e2, l2), main.p(e2, t2[0]), main.c(i2, n2, l2), c2 && c2.m(i2, l2), main.c(i2, r2, l2), s2 || (o2 = [main.l(e2, "input", t2[5]), main.l(e2, "keypress", t2[3])], s2 = true);
      }, p(t3, [n3]) {
        1 & n3 && e2.value !== t3[0] && main.p(e2, t3[0]), t3[1] ? c2 ? c2.p(t3, n3) : (c2 = Mt(t3), c2.c(), c2.m(r2.parentNode, r2)) : c2 && (c2.d(1), c2 = null);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), c2 && c2.d(t3), t3 && main.f(r2), s2 = false, main.r(o2);
      }};
    }
    function Ct(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a2, u2;
      main.g(t2, it, (t3) => n2(0, s2 = t3)), main.g(t2, ot, (t3) => n2(4, i2 = t3)), main.g(t2, Z, (t3) => n2(7, o2 = t3)), main.g(t2, ut, (t3) => n2(8, c2 = t3)), main.g(t2, X, (t3) => n2(9, l2 = t3)), main.g(t2, Q, (t3) => n2(10, a2 = t3)), main.g(t2, st, (t3) => n2(1, u2 = t3));
      var d2 = this && this.__awaiter || function(t3, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t4) {
            try {
              l3(r3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(r3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? s3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(t3, e3 || [])).next());
        });
      };
      const h2 = () => d2(void 0, void 0, void 0, function* () {
        let t3 = r2;
        o2.has(s2) ? (t3 = o2.get(s2), c2.get(t3).add(l2.id)) : (c2.set(r2, new Set([l2.id])), o2.set(s2, r2), Z.set(o2), yield fetch("/all-tag-dict/tag", {method: "POST", body: JSON.stringify(r2)})), ut.set(c2), a2.has(l2.id) ? a2.get(l2.id).add(t3) : a2.set(l2.id, new Set([t3])), Q.set(a2), fetch(`/mail-tag-dict/mail/${l2.id}/tag/${r2.value}`, {method: "POST"}).then((t4) => {
          console.log("\uC11C\uBC84\uC5D0 \uD0DC\uADF8 \uCD94\uAC00 \uC644\uB8CC.");
        }), main.q(it, s2 = "", s2), main.q(ot, i2 = (i2 + 1) % 12, i2);
      });
      return t2.$$.update = () => {
        17 & t2.$$.dirty && (r2 = {value: s2, color: vt[i2]});
      }, [s2, u2, h2, (t3) => {
        t3.code === "Enter" && h2();
      }, i2, function() {
        s2 = this.value, it.set(s2);
      }];
    }
    class St extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Ct, _t, main.s, {});
      }
    }
    function Lt(t2) {
      let e2, n2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", "w-6 h-6 float-left"), e2.src !== (n2 = "./img/empty-star.png") && main.b(e2, "src", "./img/empty-star.png"), main.b(e2, "alt", "\uC88B\uC544\uC694 \uD558\uC2E4\uB798\uC694?");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Ot(t2) {
      let e2, n2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", "w-6 h-6 float-left"), e2.src !== (n2 = "./img/yellow-star.png") && main.b(e2, "src", "./img/yellow-star.png"), main.b(e2, "alt", "\uC88B\uC544\uC694 \uD588\uC5B4\uC694");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function It(t2) {
      let e2, n2, r2, s2, o2, c2;
      function u2(t3, e3) {
        return (n2 == null || 3 & e3) && (n2 = !!t3[1](t3[0])), n2 ? Ot : Lt;
      }
      let m2 = u2(t2, -1), $2 = m2(t2);
      return {c() {
        e2 = main.e("label"), $2.c(), r2 = main.a(), s2 = main.e("input"), main.b(e2, "class", "text-xl"), main.b(e2, "for", "favorite"), main.b(s2, "type", "checkbox"), main.b(s2, "class", "hidden"), main.b(s2, "id", "favorite");
      }, m(n3, i2) {
        main.c(n3, e2, i2), $2.m(e2, null), main.c(n3, r2, i2), main.c(n3, s2, i2), o2 || (c2 = main.l(e2, "click", function() {
          main.k(t2[2](t2[0])) && t2[2](t2[0]).apply(this, arguments);
        }), o2 = true);
      }, p(n3, [r3]) {
        m2 !== (m2 = u2(t2 = n3, r3)) && ($2.d(1), $2 = m2(t2), $2 && ($2.c(), $2.m(e2, null)));
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), $2.d(), t3 && main.f(r2), t3 && main.f(s2), o2 = false, c2();
      }};
    }
    function Et(t2, e2, n2) {
      let r2, s2, i2, o2, c2;
      main.g(t2, Z, (t3) => n2(4, o2 = t3)), main.g(t2, ut, (t3) => n2(5, c2 = t3));
      let {pm: l2} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(0, l2 = t3.pm);
      }, t2.$$.update = () => {
        16 & t2.$$.dirty && n2(3, r2 = o2.get("\u{1F496}")), 40 & t2.$$.dirty && n2(2, i2 = (t3) => () => {
          const e3 = c2.get(r2);
          e3.has(t3.id) ? e3.delete(t3.id) : e3.add(t3.id), ut.set(c2);
        }), 40 & t2.$$.dirty && n2(1, s2 = (t3) => c2.get(r2).has(t3.id));
      }, [l2, s2, i2, r2, o2, c2];
    }
    class jt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Et, It, main.s, {pm: 0});
      }
    }
    function Bt(t2) {
      let e2, n2;
      return e2 = new $t({props: {tag: t2[1], size: t2[0]}}), {c() {
        main.v(e2.$$.fragment);
      }, m(t3, r2) {
        main.x(e2, t3, r2), n2 = true;
      }, p(t3, [n3]) {
        const r2 = {};
        2 & n3 && (r2.tag = t3[1]), 1 & n3 && (r2.size = t3[0]), e2.$set(r2);
      }, i(t3) {
        n2 || (main.y(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.A(e2, t3);
      }};
    }
    function At(t2, e2, n2) {
      let r2, s2;
      main.g(t2, Z, (t3) => n2(3, s2 = t3));
      let {pm: i2} = e2, {size: o2 = "xs"} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(2, i2 = t3.pm), "size" in t3 && n2(0, o2 = t3.size);
      }, t2.$$.update = () => {
        12 & t2.$$.dirty && n2(1, r2 = s2.get(i2.member));
      }, [o2, r2, i2, s2];
    }
    class zt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, At, Bt, main.s, {pm: 2, size: 0});
      }
    }
    let Pt = main.w(function() {
      const t2 = localStorage.getItem("preferences-profile");
      return t2 || "latest";
    }());
    function Wt(t2, e2, n2) {
      const r2 = t2.slice();
      return r2[4] = e2[n2], r2;
    }
    function Nt(t2) {
      let e2, n2, r2, s2, c2, h2, m2, g2 = t2[4].name + "";
      return {c() {
        e2 = main.e("label"), n2 = main.e("input"), r2 = main.a(), s2 = main.t(g2), c2 = main.a(), main.b(n2, "type", "radio"), n2.__value = t2[4].path, n2.value = n2.__value, t2[3][0].push(n2);
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), n2.checked = n2.__value === t2[0], main.d(e2, r2), main.d(e2, s2), main.d(e2, c2), h2 || (m2 = main.l(n2, "change", t2[2]), h2 = true);
      }, p(t3, e3) {
        1 & e3 && (n2.checked = n2.__value === t3[0]);
      }, d(r3) {
        r3 && main.f(e2), t2[3][0].splice(t2[3][0].indexOf(n2), 1), h2 = false, m2();
      }};
    }
    function Rt(t2) {
      let e2, n2, r2, s2 = t2[1], o2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        o2[e3] = Nt(Wt(t2, s2, e3));
      return {c() {
        e2 = main.e("h3"), e2.textContent = "\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.", n2 = main.a(), r2 = main.e("div");
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].c();
        main.b(e2, "class", "svelte-qli48t"), main.b(r2, "class", "flex flex-col p-4");
      }, m(t3, s3) {
        main.c(t3, e2, s3), main.c(t3, n2, s3), main.c(t3, r2, s3);
        for (let t4 = 0; t4 < o2.length; t4 += 1)
          o2[t4].m(r2, null);
      }, p(t3, [e3]) {
        if (3 & e3) {
          let n3;
          for (s2 = t3[1], n3 = 0; n3 < s2.length; n3 += 1) {
            const i2 = Wt(t3, s2, n3);
            o2[n3] ? o2[n3].p(i2, e3) : (o2[n3] = Nt(i2), o2[n3].c(), o2[n3].m(r2, null));
          }
          for (; n3 < o2.length; n3 += 1)
            o2[n3].d(1);
          o2.length = s2.length;
        }
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), t3 && main.f(r2), main.B(o2, t3);
      }};
    }
    function Ft(t2, e2, n2) {
      let r2;
      main.g(t2, Pt, (t3) => n2(0, r2 = t3));
      return [r2, [{path: "la-vie-en-rose", name: "\uB77C\uBE44\uC559 \uB85C\uC988"}, {path: "one-the-story", name: "One The Story \uD3EC\uC2A4\uD130"}, {path: "latest", name: "\uCD5C\uC2E0 \uD504\uBA54"}], function() {
        r2 = this.__value, Pt.set(r2);
      }, [[]]];
    }
    Pt.subscribe((t2) => {
      localStorage.setItem("preferences-profile", t2);
    });
    class Dt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Ft, Rt, main.s, {});
      }
    }
    function Tt(t2) {
      let e2, n2, r2, s2;
      return {c() {
        e2 = main.e("img"), e2.src !== (n2 = "./img/" + t2[1]) && main.b(e2, "src", n2), main.b(e2, "class", "w-10 h-10 ml-1 mt-1 mr-2 rounded-full float-left border-gray-200 border-1"), main.b(e2, "alt", "");
      }, m(n3, i2) {
        main.c(n3, e2, i2), r2 || (s2 = [main.l(e2, "mousedown", t2[5]), main.l(e2, "mouseup", t2[6])], r2 = true);
      }, p(t3, [r3]) {
        2 & r3 && e2.src !== (n2 = "./img/" + t3[1]) && main.b(e2, "src", n2);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), r2 = false, main.r(s2);
      }};
    }
    function Jt(t2, e2, n2) {
      let r2, s2;
      main.g(t2, Pt, (t3) => n2(4, s2 = t3));
      let {pm: i2} = e2;
      const {open: o2} = main.C("simple-modal"), c2 = () => {
        o2(Dt, {});
      };
      let l2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(3, i2 = t3.pm);
      }, t2.$$.update = () => {
        24 & t2.$$.dirty && n2(1, r2 = i2.member == "\uC6B4\uC601\uD300" ? "izone-logo.png" : `profile/${s2}/${i2.member}.jpg`);
      }, [l2, r2, c2, i2, s2, () => {
        n2(0, l2 = setTimeout(c2, 500));
      }, (t3) => {
        clearTimeout(l2);
      }];
    }
    class Vt extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Jt, Tt, main.s, {pm: 3});
      }
    }
    function Ht(t2) {
      const e2 = t2 - 1;
      return e2 * e2 * e2 + 1;
    }
    function Kt(t2, {delay: e2 = 0, duration: n2 = 400, easing: r2 = main.D} = {}) {
      const s2 = +getComputedStyle(t2).opacity;
      return {delay: e2, duration: n2, easing: r2, css: (t3) => "opacity: " + t3 * s2};
    }
    function qt(t2, {delay: e2 = 0, duration: n2 = 400, easing: r2 = Ht, x: s2 = 0, y: i2 = 0, opacity: o2 = 0} = {}) {
      const c2 = getComputedStyle(t2), l2 = +c2.opacity, a2 = c2.transform === "none" ? "" : c2.transform, u2 = l2 * (1 - o2);
      return {delay: e2, duration: n2, easing: r2, css: (t3, e3) => `
			transform: ${a2} translate(${(1 - t3) * s2}px, ${(1 - t3) * i2}px);
			opacity: ${l2 - u2 * e3}`};
    }
    function Zt(t2, e2, n2) {
      const r2 = t2.slice();
      return r2[14] = e2[n2], r2;
    }
    function Qt(t2) {
      let e2;
      return {c() {
        e2 = main.e("br");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Gt(t2) {
      let e2, n2;
      return e2 = new $t({props: {tag: t2[14], canDelete: true, size: "sm"}}), {c() {
        main.v(e2.$$.fragment);
      }, m(t3, r2) {
        main.x(e2, t3, r2), n2 = true;
      }, p(t3, n3) {
        const r2 = {};
        8 & n3 && (r2.tag = t3[14]), e2.$set(r2);
      }, i(t3) {
        n2 || (main.y(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.A(e2, t3);
      }};
    }
    function Ut(t2) {
      let e2, n2, r2, s2, o2, c2, h2, m2 = t2[7] && Xt(t2);
      return {c() {
        e2 = main.e("div"), n2 = main.e("div"), s2 = main.a(), m2 && m2.c(), main.b(n2, "contenteditable", "false"), t2[4] === void 0 && main.E(() => t2[12].call(n2)), main.b(e2, "class", "h-5/6 overflow-scroll p-1");
      }, m(r3, i2) {
        main.c(r3, e2, i2), main.d(e2, n2), t2[4] !== void 0 && (n2.innerHTML = t2[4]), main.d(e2, s2), m2 && m2.m(e2, null), o2 = true, c2 || (h2 = main.l(n2, "input", t2[12]), c2 = true);
      }, p(t3, r3) {
        16 & r3 && t3[4] !== n2.innerHTML && (n2.innerHTML = t3[4]), t3[7] ? m2 ? m2.p(t3, r3) : (m2 = Xt(t3), m2.c(), m2.m(e2, null)) : m2 && (m2.d(1), m2 = null);
      }, i(t3) {
        o2 || (main.E(() => {
          r2 || (r2 = main.F(n2, Kt, {duration: 200}, true)), r2.run(1);
        }), o2 = true);
      }, o(t3) {
        r2 || (r2 = main.F(n2, Kt, {duration: 200}, false)), r2.run(0), o2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && r2 && r2.end(), m2 && m2.d(), c2 = false, h2();
      }};
    }
    function Xt(t2) {
      let e2, n2, r2;
      return {c() {
        e2 = main.e("button"), e2.textContent = "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30\u{1F5C3}\uFE0F", main.b(e2, "class", "shadow rounded bg-red-200 p-1 mt-2");
      }, m(s2, i2) {
        main.c(s2, e2, i2), n2 || (r2 = main.l(e2, "click", t2[13]), n2 = true);
      }, p: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, r2();
      }};
    }
    function Yt(t2) {
      let e2, n2, r2, s2, d2, h2, m2, g2, $2, w2, x2, v2, L2, O2, E2, z2, P2, W2, N2, R2, F2, D2, T2 = t2[2].subject + "";
      s2 = new Vt({props: {pm: t2[2]}});
      let J2 = t2[5] && Qt();
      v2 = new jt({props: {pm: t2[2]}}), E2 = new zt({props: {pm: t2[2], size: "sm"}}), P2 = new xt({props: {time: t2[2].time, size: "sm"}});
      let V2 = t2[3], H2 = [];
      for (let e3 = 0; e3 < V2.length; e3 += 1)
        H2[e3] = Gt(Zt(t2, V2, e3));
      const K2 = (t3) => main.z(H2[t3], 1, 1, () => {
        H2[t3] = null;
      });
      R2 = new St({});
      let q2 = t2[4] && Ut(t2);
      return {c() {
        e2 = main.e("div"), n2 = main.e("div"), r2 = main.e("div"), main.v(s2.$$.fragment), d2 = main.a(), h2 = main.e("h4"), m2 = main.t(T2), $2 = main.a(), J2 && J2.c(), w2 = main.a(), x2 = main.e("div"), main.v(v2.$$.fragment), L2 = main.a(), O2 = main.e("div"), main.v(E2.$$.fragment), z2 = main.a(), main.v(P2.$$.fragment), W2 = main.a();
        for (let t3 = 0; t3 < H2.length; t3 += 1)
          H2[t3].c();
        N2 = main.a(), main.v(R2.$$.fragment), F2 = main.a(), q2 && q2.c(), main.b(h2, "class", "text-xl m-1 w-4/5"), main.b(r2, "class", "relative"), main.E(() => t2[11].call(r2)), main.b(x2, "class", "absolute inset-y-0 right-0 m-1 h-8"), main.b(O2, "class", "flex flex-wrap"), main.b(n2, "class", "relative w-full"), main.j(e2, "max-height", t2[6] && t2[0] ? "70%" : "90%"), main.b(e2, "class", "\r\nshadow-2xl rounded-md bg-white \r\nw-full mt-2 p-2\r\nflex flex-col");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(n2, r2), main.x(s2, r2, null), main.d(r2, d2), main.d(r2, h2), main.d(h2, m2), g2 = main.G(r2, t2[11].bind(r2)), main.d(n2, $2), J2 && J2.m(n2, null), main.d(n2, w2), main.d(n2, x2), main.x(v2, x2, null), main.d(n2, L2), main.d(n2, O2), main.x(E2, O2, null), main.d(O2, z2), main.x(P2, O2, null), main.d(O2, W2);
        for (let t3 = 0; t3 < H2.length; t3 += 1)
          H2[t3].m(O2, null);
        main.d(O2, N2), main.x(R2, O2, null), main.d(e2, F2), q2 && q2.m(e2, null), D2 = true;
      }, p(t3, [r3]) {
        const i2 = {};
        4 & r3 && (i2.pm = t3[2]), s2.$set(i2), (!D2 || 4 & r3) && T2 !== (T2 = t3[2].subject + "") && main.o(m2, T2), t3[5] ? J2 || (J2 = Qt(), J2.c(), J2.m(n2, w2)) : J2 && (J2.d(1), J2 = null);
        const o2 = {};
        4 & r3 && (o2.pm = t3[2]), v2.$set(o2);
        const l2 = {};
        4 & r3 && (l2.pm = t3[2]), E2.$set(l2);
        const a2 = {};
        if (4 & r3 && (a2.time = t3[2].time), P2.$set(a2), 8 & r3) {
          let e3;
          for (V2 = t3[3], e3 = 0; e3 < V2.length; e3 += 1) {
            const n3 = Zt(t3, V2, e3);
            H2[e3] ? (H2[e3].p(n3, r3), main.y(H2[e3], 1)) : (H2[e3] = Gt(n3), H2[e3].c(), main.y(H2[e3], 1), H2[e3].m(O2, N2));
          }
          for (main.H(), e3 = V2.length; e3 < H2.length; e3 += 1)
            K2(e3);
          main.I();
        }
        t3[4] ? q2 ? (q2.p(t3, r3), 16 & r3 && main.y(q2, 1)) : (q2 = Ut(t3), q2.c(), main.y(q2, 1), q2.m(e2, null)) : q2 && (main.H(), main.z(q2, 1, 1, () => {
          q2 = null;
        }), main.I()), (!D2 || 65 & r3) && main.j(e2, "max-height", t3[6] && t3[0] ? "70%" : "90%");
      }, i(t3) {
        if (!D2) {
          main.y(s2.$$.fragment, t3), main.y(v2.$$.fragment, t3), main.y(E2.$$.fragment, t3), main.y(P2.$$.fragment, t3);
          for (let t4 = 0; t4 < V2.length; t4 += 1)
            main.y(H2[t4]);
          main.y(R2.$$.fragment, t3), main.y(q2), D2 = true;
        }
      }, o(t3) {
        main.z(s2.$$.fragment, t3), main.z(v2.$$.fragment, t3), main.z(E2.$$.fragment, t3), main.z(P2.$$.fragment, t3), H2 = H2.filter(Boolean);
        for (let t4 = 0; t4 < H2.length; t4 += 1)
          main.z(H2[t4]);
        main.z(R2.$$.fragment, t3), main.z(q2), D2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.A(s2), g2(), J2 && J2.d(), main.A(v2), main.A(E2), main.A(P2), main.B(H2, t3), main.A(R2), q2 && q2.d();
      }};
    }
    function te(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a2, u2, d2;
      main.g(t2, Q, (t3) => n2(9, o2 = t3)), main.g(t2, X, (t3) => n2(2, c2 = t3)), main.g(t2, Y, (t3) => n2(4, l2 = t3)), main.g(t2, rt, (t3) => n2(6, a2 = t3)), main.g(t2, st, (t3) => n2(7, u2 = t3)), main.g(t2, nt, (t3) => n2(8, d2 = t3));
      let h2, {show: f2} = e2;
      return t2.$$set = (t3) => {
        "show" in t3 && n2(0, f2 = t3.show);
      }, t2.$$.update = () => {
        516 & t2.$$.dirty && n2(3, r2 = o2.has(c2.id) ? Array.from(o2.get(c2.id)) : []), 4 & t2.$$.dirty && n2(10, s2 = () => {
          main.q(Y, l2 = "", l2), async function(t3) {
            const e3 = await fetch(`./mail/${t3}.html`).then((t4) => t4.text()), n3 = e3.search('<div class="main-contents" id="mail-detail"><html><head></head><body>') + 69, r3 = e3.search("</body></html></div>");
            return e3.slice(n3, r3);
          }(c2.id).then((t3) => {
            setTimeout(() => {
              main.q(Y, l2 = t3, l2);
            }, 100);
          });
        }), 1024 & t2.$$.dirty && s2(), 2 & t2.$$.dirty && n2(5, i2 = h2 < 40);
      }, [f2, h2, c2, r2, l2, i2, a2, u2, d2, o2, s2, function() {
        h2 = this.clientHeight, n2(1, h2);
      }, function() {
        l2 = this.innerHTML, Y.set(l2);
      }, () => {
        main.q(nt, d2 = true, d2);
      }];
    }
    class ee extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, te, Yt, main.s, {show: 0});
      }
    }
    function ne(t2, e2, n2) {
      const r2 = t2.slice();
      return r2[5] = e2[n2], r2;
    }
    function re(t2) {
      let e2, n2;
      return e2 = new $t({props: {tag: t2[5], size: t2[1] ? "xs" : "sm"}}), {c() {
        main.v(e2.$$.fragment);
      }, m(t3, r2) {
        main.x(e2, t3, r2), n2 = true;
      }, p(t3, n3) {
        const r2 = {};
        1 & n3 && (r2.tag = t3[5]), 2 & n3 && (r2.size = t3[1] ? "xs" : "sm"), e2.$set(r2);
      }, i(t3) {
        n2 || (main.y(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.A(e2, t3);
      }};
    }
    function se(t2) {
      let e2, n2, r2 = t2[0], s2 = [];
      for (let e3 = 0; e3 < r2.length; e3 += 1)
        s2[e3] = re(ne(t2, r2, e3));
      const o2 = (t3) => main.z(s2[t3], 1, 1, () => {
        s2[t3] = null;
      });
      return {c() {
        e2 = main.e("div");
        for (let t3 = 0; t3 < s2.length; t3 += 1)
          s2[t3].c();
        main.b(e2, "class", "flex flex-wrap");
      }, m(t3, r3) {
        main.c(t3, e2, r3);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          s2[t4].m(e2, null);
        n2 = true;
      }, p(t3, [n3]) {
        if (3 & n3) {
          let i2;
          for (r2 = t3[0], i2 = 0; i2 < r2.length; i2 += 1) {
            const o3 = ne(t3, r2, i2);
            s2[i2] ? (s2[i2].p(o3, n3), main.y(s2[i2], 1)) : (s2[i2] = re(o3), s2[i2].c(), main.y(s2[i2], 1), s2[i2].m(e2, null));
          }
          for (main.H(), i2 = r2.length; i2 < s2.length; i2 += 1)
            o2(i2);
          main.I();
        }
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < r2.length; t4 += 1)
            main.y(s2[t4]);
          n2 = true;
        }
      }, o(t3) {
        s2 = s2.filter(Boolean);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          main.z(s2[t4]);
        n2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.B(s2, t3);
      }};
    }
    function ie(t2, e2, n2) {
      let r2, s2, i2, o2;
      return main.g(t2, Z, (t3) => n2(2, s2 = t3)), main.g(t2, ct, (t3) => n2(3, i2 = t3)), main.g(t2, rt, (t3) => n2(1, o2 = t3)), t2.$$.update = () => {
        4 & t2.$$.dirty && n2(0, r2 = Array.from(s2.values()));
      }, s2.has(i2.value) && main.q(ct, i2 = V, i2), [r2, o2, s2];
    }
    class oe extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, ie, se, main.s, {});
      }
    }
    function ce(t2) {
      let e2, n2, r2, s2;
      const o2 = t2[3].default, c2 = main.J(o2, t2, t2[2], null);
      return {c() {
        e2 = main.e("button"), c2 && c2.c(), main.b(e2, "id", t2[1]), main.b(e2, "class", "rounded bg-red-100 m-2 pl-1 pr-1");
      }, m(i2, o3) {
        main.c(i2, e2, o3), c2 && c2.m(e2, null), n2 = true, r2 || (s2 = main.l(e2, "click", function() {
          main.k(t2[0]) && t2[0].apply(this, arguments);
        }), r2 = true);
      }, p(r3, [s3]) {
        t2 = r3, c2 && c2.p && 4 & s3 && main.K(c2, o2, t2, t2[2], s3, null, null), (!n2 || 2 & s3) && main.b(e2, "id", t2[1]);
      }, i(t3) {
        n2 || (main.y(c2, t3), n2 = true);
      }, o(t3) {
        main.z(c2, t3), n2 = false;
      }, d(t3) {
        t3 && main.f(e2), c2 && c2.d(t3), r2 = false, s2();
      }};
    }
    function le(t2, e2, n2) {
      let {$$slots: r2 = {}, $$scope: s2} = e2, {onClick: i2} = e2, {id: o2} = e2;
      return t2.$$set = (t3) => {
        "onClick" in t3 && n2(0, i2 = t3.onClick), "id" in t3 && n2(1, o2 = t3.id), "$$scope" in t3 && n2(2, s2 = t3.$$scope);
      }, [i2, o2, s2, r2];
    }
    class ae extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, le, ce, main.s, {onClick: 0, id: 1});
      }
    }
    function ue(t2) {
      let e2, n2, r2;
      return {c() {
        e2 = main.e("button"), e2.textContent = "\uBAA9\uB85D\u{1F5C3}\uFE0F", main.b(e2, "class", "shadow rounded bg-red-200 p-1 mr-1");
      }, m(s2, i2) {
        main.c(s2, e2, i2), n2 || (r2 = main.l(e2, "click", t2[8]), n2 = true);
      }, p: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, r2();
      }};
    }
    function de(t2) {
      let e2, n2, r2, s2, c2;
      return {c() {
        e2 = main.e("label"), n2 = main.t("\uD0DC\uADF8 \uBAA9\uB85D "), r2 = main.e("input"), main.b(r2, "id", "isListView"), main.b(r2, "type", "checkbox"), main.b(e2, "class", "p-1"), main.b(e2, "for", "isListView");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(e2, r2), r2.checked = t2[1], s2 || (c2 = main.l(r2, "change", t2[9]), s2 = true);
      }, p(t3, e3) {
        2 & e3 && (r2.checked = t3[1]);
      }, d(t3) {
        t3 && main.f(e2), s2 = false, c2();
      }};
    }
    function he(t2) {
      let e2, n2, r2, s2;
      return r2 = new $t({props: {tag: t2[2], canDelete: true, onRemove: t2[7]}}), {c() {
        e2 = main.e("span"), e2.textContent = "\uD604\uC7AC :", n2 = main.a(), main.v(r2.$$.fragment), main.b(e2, "class", "ml-1 mt-1");
      }, m(t3, i2) {
        main.c(t3, e2, i2), main.c(t3, n2, i2), main.x(r2, t3, i2), s2 = true;
      }, p(t3, e3) {
        const n3 = {};
        4 & e3 && (n3.tag = t3[2]), r2.$set(n3);
      }, i(t3) {
        s2 || (main.y(r2.$$.fragment, t3), s2 = true);
      }, o(t3) {
        main.z(r2.$$.fragment, t3), s2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), main.A(r2, t3);
      }};
    }
    function fe(t2) {
      let e2, n2, r2, s2, d2, h2, m2, g2, $2, y2, w2, x2, v2, S2, L2, O2, z2, P2, N2, R2 = t2[3] && ue(t2), F2 = 650 >= t2[0] && t2[5] && de(t2), D2 = t2[2].value && he(t2);
      return v2 = new oe({}), L2 = new ee({props: {show: 650 < t2[0] || t2[1]}}), {c() {
        e2 = main.e("section"), n2 = main.e("div"), R2 && R2.c(), r2 = main.a(), s2 = main.e("div"), d2 = main.e("a"), h2 = main.t("\uBC88\uC5ED"), m2 = main.e("img"), $2 = main.a(), F2 && F2.c(), y2 = main.a(), D2 && D2.c(), w2 = main.a(), x2 = main.e("div"), main.v(v2.$$.fragment), S2 = main.a(), main.v(L2.$$.fragment), main.b(m2, "class", "w-5 h-5 float-right"), m2.src !== (g2 = "./img/papago.png") && main.b(m2, "src", "./img/papago.png"), main.b(m2, "alt", "\uD30C\uD30C\uACE0 \uBC88\uC5ED\uD558\uAE30"), main.b(d2, "href", t2[6]), main.b(d2, "target", "_blank"), main.b(s2, "class", "w-16 p-1 shadow rounded bg-red-100 mr-1"), main.b(n2, "class", "flex flex-row"), main.j(x2, "min-height", "43px"), main.b(x2, "class", "\r\n    h-36 mt-3 mb-3 p-2\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main.L(x2, "hidden", !((650 < t2[0] || t2[1]) && t2[5])), main.b(e2, "class", O2 = "h-full p-3 " + (t2[5] ? "w-4/12" : "w-full") + " flex flex-col"), main.E(() => t2[10].call(e2)), main.L(e2, "hidden", t2[3] && t2[4]);
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), R2 && R2.m(n2, null), main.d(n2, r2), main.d(n2, s2), main.d(s2, d2), main.d(d2, h2), main.d(d2, m2), main.d(n2, $2), F2 && F2.m(n2, null), main.d(n2, y2), D2 && D2.m(n2, null), main.d(e2, w2), main.d(e2, x2), main.x(v2, x2, null), main.d(e2, S2), main.x(L2, e2, null), z2 = main.G(e2, t2[10].bind(e2)), N2 = true;
      }, p(t3, [s3]) {
        t3[3] ? R2 ? R2.p(t3, s3) : (R2 = ue(t3), R2.c(), R2.m(n2, r2)) : R2 && (R2.d(1), R2 = null), (!N2 || 64 & s3) && main.b(d2, "href", t3[6]), 650 >= t3[0] && t3[5] ? F2 ? F2.p(t3, s3) : (F2 = de(t3), F2.c(), F2.m(n2, y2)) : F2 && (F2.d(1), F2 = null), t3[2].value ? D2 ? (D2.p(t3, s3), 4 & s3 && main.y(D2, 1)) : (D2 = he(t3), D2.c(), main.y(D2, 1), D2.m(n2, null)) : D2 && (main.H(), main.z(D2, 1, 1, () => {
          D2 = null;
        }), main.I()), 35 & s3 && main.L(x2, "hidden", !((650 < t3[0] || t3[1]) && t3[5]));
        const i2 = {};
        3 & s3 && (i2.show = 650 < t3[0] || t3[1]), L2.$set(i2), (!N2 || 32 & s3 && O2 !== (O2 = "h-full p-3 " + (t3[5] ? "w-4/12" : "w-full") + " flex flex-col")) && main.b(e2, "class", O2), 56 & s3 && main.L(e2, "hidden", t3[3] && t3[4]);
      }, i(t3) {
        N2 || (main.y(D2), main.y(v2.$$.fragment, t3), main.y(L2.$$.fragment, t3), main.E(() => {
          P2 || (P2 = main.F(e2, qt, {x: -400, duration: 400}, true)), P2.run(1);
        }), N2 = true);
      }, o(t3) {
        main.z(D2), main.z(v2.$$.fragment, t3), main.z(L2.$$.fragment, t3), P2 || (P2 = main.F(e2, qt, {x: -400, duration: 400}, false)), P2.run(0), N2 = false;
      }, d(t3) {
        t3 && main.f(e2), R2 && R2.d(), F2 && F2.d(), D2 && D2.d(), main.A(v2), main.A(L2), z2(), t3 && P2 && P2.end();
      }};
    }
    function pe(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2;
      main.g(t2, ct, (t3) => n2(2, r2 = t3)), main.g(t2, et, (t3) => n2(11, s2 = t3)), main.g(t2, st, (t3) => n2(3, i2 = t3)), main.g(t2, nt, (t3) => n2(4, o2 = t3)), main.g(t2, rt, (t3) => n2(5, c2 = t3)), main.g(t2, tt, (t3) => n2(6, l2 = t3));
      let a2, u2;
      return [a2, u2, r2, i2, o2, c2, l2, () => {
        main.q(ct, r2 = V, r2), main.q(et, s2 = 1, s2);
      }, () => {
        main.q(nt, o2 = true, o2);
      }, function() {
        u2 = this.checked, n2(1, u2);
      }, function() {
        a2 = this.clientHeight, n2(0, a2);
      }];
    }
    class me extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, pe, fe, main.s, {});
      }
    }
    let ge = main.w($e(new Date(2021, 2, 14)));
    function $e(t2) {
      let e2 = "" + (t2.getMonth() + 1), n2 = "" + t2.getDate();
      const r2 = t2.getFullYear();
      return e2.length < 2 && (e2 = "0" + e2), n2.length < 2 && (n2 = "0" + n2), [r2, e2, n2].join("-");
    }
    function ye(t2) {
      const [e2, n2, r2] = t2.split("-").map((t3) => parseInt(t3));
      return new Date(e2, n2 - 1, r2);
    }
    const we = (t2) => t2.split(" ")[0].replace(/\//g, "-");
    function xe(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uC774\uC804");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function ve(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uB2E4\uC74C");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function be(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uC5B4\uC81C");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function ke(t2) {
      let e2;
      return {c() {
        e2 = main.t("\uB0B4\uC77C");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Me(t2) {
      let e2, n2, r2, s2, c2, h2, m2, g2, $2, v2, S2, L2, O2, I2, E2, j2, B2, A2, z2, P2, R2;
      return e2 = new ae({props: {id: "BackPageButton", onClick: t2[6], $$slots: {default: [xe]}, $$scope: {ctx: t2}}}), v2 = new ae({props: {id: "NextPageButton", onClick: t2[5], $$slots: {default: [ve]}, $$scope: {ctx: t2}}}), I2 = new ae({props: {onClick: t2[3], $$slots: {default: [be]}, $$scope: {ctx: t2}}}), A2 = new ae({props: {onClick: t2[4], $$slots: {default: [ke]}, $$scope: {ctx: t2}}}), {c() {
        main.v(e2.$$.fragment), n2 = main.a(), r2 = main.e("span"), s2 = main.e("input"), c2 = main.a(), h2 = main.e("span"), m2 = main.t("/ "), g2 = main.t(t2[0]), $2 = main.a(), main.v(v2.$$.fragment), S2 = main.a(), L2 = main.e("br"), O2 = main.a(), main.v(I2.$$.fragment), E2 = main.a(), j2 = main.e("input"), B2 = main.a(), main.v(A2.$$.fragment), main.b(s2, "id", "NowPageInput"), main.b(s2, "type", "number"), main.b(s2, "class", "w-9"), main.b(s2, "min", "1"), main.b(s2, "max", t2[0]), main.L(s2, "bg-red-300", t2[0] <= t2[1]), main.b(r2, "id", "NowPageSpan"), main.b(r2, "class", "bg-white border-2 border-gray-400 rounded w-24 p-1"), main.L(r2, "bg-red-300", t2[0] <= t2[1]), main.L(r2, "border-red-300", t2[0] <= t2[1]), main.b(j2, "type", "date"), main.b(j2, "class", "border-1 w-36 border-gray-400 rounded");
      }, m(i2, o2) {
        main.x(e2, i2, o2), main.c(i2, n2, o2), main.c(i2, r2, o2), main.d(r2, s2), main.p(s2, t2[1]), main.d(r2, c2), main.d(r2, h2), main.d(h2, m2), main.d(h2, g2), main.c(i2, $2, o2), main.x(v2, i2, o2), main.c(i2, S2, o2), main.c(i2, L2, o2), main.c(i2, O2, o2), main.x(I2, i2, o2), main.c(i2, E2, o2), main.c(i2, j2, o2), main.p(j2, t2[2]), main.c(i2, B2, o2), main.x(A2, i2, o2), z2 = true, P2 || (R2 = [main.l(s2, "input", t2[7]), main.l(j2, "input", t2[8])], P2 = true);
      }, p(t3, [n3]) {
        const i2 = {};
        1024 & n3 && (i2.$$scope = {dirty: n3, ctx: t3}), e2.$set(i2), (!z2 || 1 & n3) && main.b(s2, "max", t3[0]), 2 & n3 && main.M(s2.value) !== t3[1] && main.p(s2, t3[1]), 3 & n3 && main.L(s2, "bg-red-300", t3[0] <= t3[1]), (!z2 || 1 & n3) && main.o(g2, t3[0]), 3 & n3 && main.L(r2, "bg-red-300", t3[0] <= t3[1]), 3 & n3 && main.L(r2, "border-red-300", t3[0] <= t3[1]);
        const o2 = {};
        1024 & n3 && (o2.$$scope = {dirty: n3, ctx: t3}), v2.$set(o2);
        const c3 = {};
        1024 & n3 && (c3.$$scope = {dirty: n3, ctx: t3}), I2.$set(c3), 4 & n3 && main.p(j2, t3[2]);
        const a2 = {};
        1024 & n3 && (a2.$$scope = {dirty: n3, ctx: t3}), A2.$set(a2);
      }, i(t3) {
        z2 || (main.y(e2.$$.fragment, t3), main.y(v2.$$.fragment, t3), main.y(I2.$$.fragment, t3), main.y(A2.$$.fragment, t3), z2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), main.z(v2.$$.fragment, t3), main.z(I2.$$.fragment, t3), main.z(A2.$$.fragment, t3), z2 = false;
      }, d(t3) {
        main.A(e2, t3), t3 && main.f(n2), t3 && main.f(r2), t3 && main.f($2), main.A(v2, t3), t3 && main.f(S2), t3 && main.f(L2), t3 && main.f(O2), main.A(I2, t3), t3 && main.f(E2), t3 && main.f(j2), t3 && main.f(B2), main.A(A2, t3), P2 = false, main.r(R2);
      }};
    }
    function _e(t2, e2, n2) {
      let r2, s2, i2;
      main.g(t2, ct, (t3) => n2(9, r2 = t3)), main.g(t2, et, (t3) => n2(1, s2 = t3)), main.g(t2, ge, (t3) => n2(2, i2 = t3));
      let {maxPage: o2} = e2;
      return t2.$$set = (t3) => {
        "maxPage" in t3 && n2(0, o2 = t3.maxPage);
      }, [o2, s2, i2, function() {
        if (r2.value)
          return s2 < o2 && main.q(et, s2 += 1, s2), null;
        const [t3, e3, n3] = i2.split("-").map((t4) => parseInt(t4)), c2 = new Date(t3, e3 - 1, n3 - 1);
        main.q(ge, i2 = $e(c2), i2), main.q(et, s2 = 1, s2);
      }, function() {
        if (r2.value)
          return s2 > 1 && main.q(et, s2 -= 1, s2), null;
        const [t3, e3, n3] = i2.split("-").map((t4) => parseInt(t4)), o3 = new Date(t3, e3 - 1, n3 + 1);
        main.q(ge, i2 = $e(o3), i2), main.q(et, s2 = 1, s2);
      }, function() {
        s2 < o2 ? main.q(et, s2 += 1, s2) : alert("\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 > 1 ? main.q(et, s2 -= 1, s2) : alert("\uC2DC\uC791 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4.");
      }, function() {
        s2 = main.M(this.value), et.set(s2);
      }, function() {
        i2 = this.value, ge.set(i2);
      }];
    }
    class Ce extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, _e, Me, main.s, {maxPage: 0});
      }
    }
    function Se(t2, e2, n2) {
      const r2 = t2.slice();
      return r2[10] = e2[n2], r2;
    }
    function Le(t2) {
      let e2;
      return {c() {
        e2 = main.e("span"), main.b(e2, "class", "\r\n        border-1 text-lg\r\n        rounded bg-white text-white");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, p: main.n, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Oe(t2) {
      let e2, n2, r2, s2, c2, m2, g2, $2, w2, x2, v2, L2, O2, I2, E2, j2, z2, P2, W2 = t2[0].subject + "", N2 = (t2[0].preview || "...") + "";
      e2 = new Vt({props: {pm: t2[0]}}), s2 = new jt({props: {pm: t2[0]}}), m2 = new zt({props: {pm: t2[0]}}), $2 = new xt({props: {time: t2[0].time}});
      let R2 = t2[6] && Ie(), F2 = t2[4](t2[0]), D2 = [];
      for (let e3 = 0; e3 < F2.length; e3 += 1)
        D2[e3] = Ee(Se(t2, F2, e3));
      const T2 = (t3) => main.z(D2[t3], 1, 1, () => {
        D2[t3] = null;
      });
      return {c() {
        main.v(e2.$$.fragment), n2 = main.a(), r2 = main.e("p"), main.v(s2.$$.fragment), c2 = main.a(), main.v(m2.$$.fragment), g2 = main.a(), main.v($2.$$.fragment), w2 = main.a(), R2 && R2.c(), x2 = main.a(), v2 = main.t(W2), L2 = main.a(), O2 = main.e("p");
        for (let t3 = 0; t3 < D2.length; t3 += 1)
          D2[t3].c();
        I2 = main.a(), E2 = main.t(N2), main.b(r2, "class", "truncate"), main.b(O2, "class", "ml-1 mt-1 text-sm truncate");
      }, m(i2, o2) {
        main.x(e2, i2, o2), main.c(i2, n2, o2), main.c(i2, r2, o2), main.x(s2, r2, null), main.d(r2, c2), main.x(m2, r2, null), main.d(r2, g2), main.x($2, r2, null), main.d(r2, w2), R2 && R2.m(r2, null), main.d(r2, x2), main.d(r2, v2), main.c(i2, L2, o2), main.c(i2, O2, o2);
        for (let t3 = 0; t3 < D2.length; t3 += 1)
          D2[t3].m(O2, null);
        main.d(O2, I2), main.d(O2, E2), j2 = true, z2 || (P2 = main.l(O2, "click", function() {
          main.k(t2[3]) && t2[3].apply(this, arguments);
        }), z2 = true);
      }, p(n3, i2) {
        t2 = n3;
        const o2 = {};
        1 & i2 && (o2.pm = t2[0]), e2.$set(o2);
        const c3 = {};
        1 & i2 && (c3.pm = t2[0]), s2.$set(c3);
        const l2 = {};
        1 & i2 && (l2.pm = t2[0]), m2.$set(l2);
        const a2 = {};
        if (1 & i2 && (a2.time = t2[0].time), $2.$set(a2), t2[6] ? R2 || (R2 = Ie(), R2.c(), R2.m(r2, x2)) : R2 && (R2.d(1), R2 = null), (!j2 || 1 & i2) && W2 !== (W2 = t2[0].subject + "") && main.o(v2, W2), 17 & i2) {
          let e3;
          for (F2 = t2[4](t2[0]), e3 = 0; e3 < F2.length; e3 += 1) {
            const n4 = Se(t2, F2, e3);
            D2[e3] ? (D2[e3].p(n4, i2), main.y(D2[e3], 1)) : (D2[e3] = Ee(n4), D2[e3].c(), main.y(D2[e3], 1), D2[e3].m(O2, I2));
          }
          for (main.H(), e3 = F2.length; e3 < D2.length; e3 += 1)
            T2(e3);
          main.I();
        }
        (!j2 || 1 & i2) && N2 !== (N2 = (t2[0].preview || "...") + "") && main.o(E2, N2);
      }, i(t3) {
        if (!j2) {
          main.y(e2.$$.fragment, t3), main.y(s2.$$.fragment, t3), main.y(m2.$$.fragment, t3), main.y($2.$$.fragment, t3);
          for (let t4 = 0; t4 < F2.length; t4 += 1)
            main.y(D2[t4]);
          j2 = true;
        }
      }, o(t3) {
        main.z(e2.$$.fragment, t3), main.z(s2.$$.fragment, t3), main.z(m2.$$.fragment, t3), main.z($2.$$.fragment, t3), D2 = D2.filter(Boolean);
        for (let t4 = 0; t4 < D2.length; t4 += 1)
          main.z(D2[t4]);
        j2 = false;
      }, d(t3) {
        main.A(e2, t3), t3 && main.f(n2), t3 && main.f(r2), main.A(s2), main.A(m2), main.A($2), R2 && R2.d(), t3 && main.f(L2), t3 && main.f(O2), main.B(D2, t3), z2 = false, P2();
      }};
    }
    function Ie(t2) {
      let e2;
      return {c() {
        e2 = main.e("br");
      }, m(t3, n2) {
        main.c(t3, e2, n2);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Ee(t2) {
      let e2, n2;
      return e2 = new $t({props: {tag: t2[10]}}), {c() {
        main.v(e2.$$.fragment);
      }, m(t3, r2) {
        main.x(e2, t3, r2), n2 = true;
      }, p(t3, n3) {
        const r2 = {};
        17 & n3 && (r2.tag = t3[10]), e2.$set(r2);
      }, i(t3) {
        n2 || (main.y(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.A(e2, t3);
      }};
    }
    function je(t2) {
      let e2, n2, r2 = t2[0].member && Be(t2);
      return {c() {
        e2 = main.e("li"), r2 && r2.c(), main.b(e2, "class", "border-b-2 rounded w-full text-gray-500 truncate"), main.j(e2, "font-size", "10px"), main.j(e2, "height", "20px");
      }, m(t3, s2) {
        main.c(t3, e2, s2), r2 && r2.m(e2, null), n2 = true;
      }, p(t3, n3) {
        t3[0].member ? r2 ? (r2.p(t3, n3), 1 & n3 && main.y(r2, 1)) : (r2 = Be(t3), r2.c(), main.y(r2, 1), r2.m(e2, null)) : r2 && (main.H(), main.z(r2, 1, 1, () => {
          r2 = null;
        }), main.I());
      }, i(t3) {
        n2 || (main.y(r2), n2 = true);
      }, o(t3) {
        main.z(r2), n2 = false;
      }, d(t3) {
        t3 && main.f(e2), r2 && r2.d();
      }};
    }
    function Be(t2) {
      let e2, n2, r2, s2, c2, l2, d2, h2, m2 = t2[0].subject + "", g2 = " " + t2[0].preview;
      return e2 = new zt({props: {pm: t2[0], size: ""}}), r2 = new xt({props: {time: t2[0].time, size: ""}}), {c() {
        main.v(e2.$$.fragment), n2 = main.a(), main.v(r2.$$.fragment), s2 = main.a(), c2 = main.e("strong"), l2 = main.t(m2), d2 = main.t(g2);
      }, m(t3, i2) {
        main.x(e2, t3, i2), main.c(t3, n2, i2), main.x(r2, t3, i2), main.c(t3, s2, i2), main.c(t3, c2, i2), main.d(c2, l2), main.c(t3, d2, i2), h2 = true;
      }, p(t3, n3) {
        const s3 = {};
        1 & n3 && (s3.pm = t3[0]), e2.$set(s3);
        const i2 = {};
        1 & n3 && (i2.time = t3[0].time), r2.$set(i2), (!h2 || 1 & n3) && m2 !== (m2 = t3[0].subject + "") && main.o(l2, m2), (!h2 || 1 & n3) && g2 !== (g2 = " " + t3[0].preview) && main.o(d2, g2);
      }, i(t3) {
        h2 || (main.y(e2.$$.fragment, t3), main.y(r2.$$.fragment, t3), h2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), main.z(r2.$$.fragment, t3), h2 = false;
      }, d(t3) {
        main.A(e2, t3), t3 && main.f(n2), main.A(r2, t3), t3 && main.f(s2), t3 && main.f(c2), t3 && main.f(d2);
      }};
    }
    function Ae(t2) {
      let e2, n2, r2, s2, o2, d2, h2, g2;
      const $2 = [Oe, Le], y2 = [];
      function w2(t3, e3) {
        return t3[0].member ? 0 : 1;
      }
      r2 = w2(t2), s2 = y2[r2] = $2[r2](t2);
      let x2 = t2[1] && je(t2);
      return {c() {
        e2 = main.e("li"), n2 = main.e("div"), s2.c(), d2 = main.a(), x2 && x2.c(), h2 = main.m(), main.b(e2, "id", o2 = "MailItem-" + t2[2]), main.j(e2, "height", t2[5] ? "62px" : "84px"), main.b(e2, "class", "border-b-2 rounded p-1 w-full"), main.L(e2, "hidden", t2[1]);
      }, m(t3, s3) {
        main.c(t3, e2, s3), main.d(e2, n2), y2[r2].m(n2, null), main.c(t3, d2, s3), x2 && x2.m(t3, s3), main.c(t3, h2, s3), g2 = true;
      }, p(t3, [i2]) {
        let a2 = r2;
        r2 = w2(t3), r2 === a2 ? y2[r2].p(t3, i2) : (main.H(), main.z(y2[a2], 1, 1, () => {
          y2[a2] = null;
        }), main.I(), s2 = y2[r2], s2 ? s2.p(t3, i2) : (s2 = y2[r2] = $2[r2](t3), s2.c()), main.y(s2, 1), s2.m(n2, null)), (!g2 || 4 & i2 && o2 !== (o2 = "MailItem-" + t3[2])) && main.b(e2, "id", o2), (!g2 || 32 & i2) && main.j(e2, "height", t3[5] ? "62px" : "84px"), 2 & i2 && main.L(e2, "hidden", t3[1]), t3[1] ? x2 ? (x2.p(t3, i2), 2 & i2 && main.y(x2, 1)) : (x2 = je(t3), x2.c(), main.y(x2, 1), x2.m(h2.parentNode, h2)) : x2 && (main.H(), main.z(x2, 1, 1, () => {
          x2 = null;
        }), main.I());
      }, i(t3) {
        g2 || (main.y(s2), main.y(x2), g2 = true);
      }, o(t3) {
        main.z(s2), main.z(x2), g2 = false;
      }, d(t3) {
        t3 && main.f(e2), y2[r2].d(), t3 && main.f(d2), x2 && x2.d(t3), t3 && main.f(h2);
      }};
    }
    function ze(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a2;
      main.g(t2, X, (t3) => n2(8, i2 = t3)), main.g(t2, nt, (t3) => n2(9, o2 = t3)), main.g(t2, Q, (t3) => n2(7, c2 = t3)), main.g(t2, rt, (t3) => n2(5, l2 = t3)), main.g(t2, st, (t3) => n2(6, a2 = t3));
      let {pm: u2} = e2, {hidden: d2} = e2, {index: h2} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(0, u2 = t3.pm), "hidden" in t3 && n2(1, d2 = t3.hidden), "index" in t3 && n2(2, h2 = t3.index);
      }, t2.$$.update = () => {
        1 & t2.$$.dirty && n2(3, r2 = () => {
          u2 && main.q(X, i2 = u2, i2), main.q(nt, o2 = false, o2);
        }), 128 & t2.$$.dirty && n2(4, s2 = (t3) => c2.has(t3.id) ? Array.from(c2.get(t3.id)) : []);
      }, [u2, d2, h2, r2, s2, l2, a2, c2];
    }
    class Pe extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, ze, Ae, main.s, {pm: 0, hidden: 1, index: 2});
      }
    }
    function We(t2, e2, n2) {
      const r2 = t2.slice();
      return r2[7] = e2[n2], r2;
    }
    function Ne(t2) {
      let e2, n2;
      return {c() {
        e2 = main.e("img"), main.b(e2, "class", "ml-5 m-3 w-10/12"), main.b(e2, "alt", "no mail"), e2.src !== (n2 = "./img/izone-logo-card.png") && main.b(e2, "src", "./img/izone-logo-card.png");
      }, m(t3, n3) {
        main.c(t3, e2, n3);
      }, p: main.n, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Re(t2) {
      let e2, n2, r2, s2, c2, m2, g2, $2, w2, v2, L2, O2, I2, E2, j2, z2, P2, W2, N2, R2, F2 = t2[0].subject + "", D2 = t2[0].preview + "";
      n2 = new Vt({props: {pm: t2[0]}}), $2 = new jt({props: {pm: t2[0]}}), L2 = new zt({props: {pm: t2[0]}}), I2 = new xt({props: {time: t2[0].time}});
      let T2 = t2[2](t2[0]), J2 = [];
      for (let e3 = 0; e3 < T2.length; e3 += 1)
        J2[e3] = Fe(We(t2, T2, e3));
      const V2 = (t3) => main.z(J2[t3], 1, 1, () => {
        J2[t3] = null;
      });
      return {c() {
        e2 = main.e("div"), main.v(n2.$$.fragment), r2 = main.a(), s2 = main.e("h4"), c2 = main.t(F2), m2 = main.a(), g2 = main.e("div"), main.v($2.$$.fragment), w2 = main.a(), v2 = main.e("div"), main.v(L2.$$.fragment), O2 = main.a(), main.v(I2.$$.fragment), E2 = main.a();
        for (let t3 = 0; t3 < J2.length; t3 += 1)
          J2[t3].c();
        j2 = main.a(), z2 = main.e("p"), P2 = main.t(D2), main.b(s2, "class", "w-10/12 h-12"), main.b(g2, "class", "absolute inset-y-0 right-0 m-2"), main.b(v2, "class", "flex flex-wrap"), main.b(z2, "class", "m-1 text-sm");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.x(n2, e2, null), main.d(e2, r2), main.d(e2, s2), main.d(s2, c2), main.c(i2, m2, o2), main.c(i2, g2, o2), main.x($2, g2, null), main.c(i2, w2, o2), main.c(i2, v2, o2), main.x(L2, v2, null), main.d(v2, O2), main.x(I2, v2, null), main.d(v2, E2);
        for (let t3 = 0; t3 < J2.length; t3 += 1)
          J2[t3].m(v2, null);
        main.c(i2, j2, o2), main.c(i2, z2, o2), main.d(z2, P2), W2 = true, N2 || (R2 = [main.l(e2, "click", function() {
          main.k(t2[3]) && t2[3].apply(this, arguments);
        }), main.l(z2, "click", function() {
          main.k(t2[3]) && t2[3].apply(this, arguments);
        })], N2 = true);
      }, p(e3, r3) {
        t2 = e3;
        const s3 = {};
        1 & r3 && (s3.pm = t2[0]), n2.$set(s3), (!W2 || 1 & r3) && F2 !== (F2 = t2[0].subject + "") && main.o(c2, F2);
        const i2 = {};
        1 & r3 && (i2.pm = t2[0]), $2.$set(i2);
        const o2 = {};
        1 & r3 && (o2.pm = t2[0]), L2.$set(o2);
        const l2 = {};
        if (1 & r3 && (l2.time = t2[0].time), I2.$set(l2), 5 & r3) {
          let e4;
          for (T2 = t2[2](t2[0]), e4 = 0; e4 < T2.length; e4 += 1) {
            const n3 = We(t2, T2, e4);
            J2[e4] ? (J2[e4].p(n3, r3), main.y(J2[e4], 1)) : (J2[e4] = Fe(n3), J2[e4].c(), main.y(J2[e4], 1), J2[e4].m(v2, null));
          }
          for (main.H(), e4 = T2.length; e4 < J2.length; e4 += 1)
            V2(e4);
          main.I();
        }
        (!W2 || 1 & r3) && D2 !== (D2 = t2[0].preview + "") && main.o(P2, D2);
      }, i(t3) {
        if (!W2) {
          main.y(n2.$$.fragment, t3), main.y($2.$$.fragment, t3), main.y(L2.$$.fragment, t3), main.y(I2.$$.fragment, t3);
          for (let t4 = 0; t4 < T2.length; t4 += 1)
            main.y(J2[t4]);
          W2 = true;
        }
      }, o(t3) {
        main.z(n2.$$.fragment, t3), main.z($2.$$.fragment, t3), main.z(L2.$$.fragment, t3), main.z(I2.$$.fragment, t3), J2 = J2.filter(Boolean);
        for (let t4 = 0; t4 < J2.length; t4 += 1)
          main.z(J2[t4]);
        W2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.A(n2), t3 && main.f(m2), t3 && main.f(g2), main.A($2), t3 && main.f(w2), t3 && main.f(v2), main.A(L2), main.A(I2), main.B(J2, t3), t3 && main.f(j2), t3 && main.f(z2), N2 = false, main.r(R2);
      }};
    }
    function Fe(t2) {
      let e2, n2;
      return e2 = new $t({props: {tag: t2[7]}}), {c() {
        main.v(e2.$$.fragment);
      }, m(t3, r2) {
        main.x(e2, t3, r2), n2 = true;
      }, p(t3, n3) {
        const r2 = {};
        5 & n3 && (r2.tag = t3[7]), e2.$set(r2);
      }, i(t3) {
        n2 || (main.y(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.A(e2, t3);
      }};
    }
    function De(t2) {
      let e2, n2, r2, s2, o2;
      const u2 = [Re, Ne], d2 = [];
      function h2(t3, e3) {
        return t3[0].member ? 0 : 1;
      }
      return n2 = h2(t2), r2 = d2[n2] = u2[n2](t2), {c() {
        e2 = main.e("div"), r2.c(), main.b(e2, "id", s2 = "MailCard-" + t2[1]), main.j(e2, "height", "156px"), main.b(e2, "class", "\r\nw-64 m-3 p-1\r\nrelative overflow-y-scroll\r\nbg-white shadow-md rounded-md");
      }, m(t3, r3) {
        main.c(t3, e2, r3), d2[n2].m(e2, null), o2 = true;
      }, p(t3, [i2]) {
        let c2 = n2;
        n2 = h2(t3), n2 === c2 ? d2[n2].p(t3, i2) : (main.H(), main.z(d2[c2], 1, 1, () => {
          d2[c2] = null;
        }), main.I(), r2 = d2[n2], r2 ? r2.p(t3, i2) : (r2 = d2[n2] = u2[n2](t3), r2.c()), main.y(r2, 1), r2.m(e2, null)), (!o2 || 2 & i2 && s2 !== (s2 = "MailCard-" + t3[1])) && main.b(e2, "id", s2);
      }, i(t3) {
        o2 || (main.y(r2), o2 = true);
      }, o(t3) {
        main.z(r2), o2 = false;
      }, d(t3) {
        t3 && main.f(e2), d2[n2].d();
      }};
    }
    function Te(t2, e2, n2) {
      let r2, s2, i2, o2, c2;
      main.g(t2, Q, (t3) => n2(4, i2 = t3)), main.g(t2, X, (t3) => n2(5, o2 = t3)), main.g(t2, nt, (t3) => n2(6, c2 = t3));
      let {pm: l2} = e2, {index: a2} = e2;
      return t2.$$set = (t3) => {
        "pm" in t3 && n2(0, l2 = t3.pm), "index" in t3 && n2(1, a2 = t3.index);
      }, t2.$$.update = () => {
        16 & t2.$$.dirty && n2(2, r2 = (t3) => i2.has(t3.id) ? Array.from(i2.get(t3.id)) : []), 1 & t2.$$.dirty && n2(3, s2 = () => {
          l2 && (main.q(X, o2 = l2, o2), main.q(nt, c2 = false, c2));
        });
      }, [l2, a2, r2, s2, i2];
    }
    class Je extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Te, De, main.s, {pm: 0, index: 1});
      }
    }
    function Ve(t2) {
      return Array.isArray ? Array.isArray(t2) : Ue(t2) === "[object Array]";
    }
    function He(t2) {
      return typeof t2 == "string";
    }
    function Ke(t2) {
      return typeof t2 == "number";
    }
    function qe(t2) {
      return t2 === true || t2 === false || function(t3) {
        return Ze(t3) && t3 !== null;
      }(t2) && Ue(t2) == "[object Boolean]";
    }
    function Ze(t2) {
      return typeof t2 == "object";
    }
    function Qe(t2) {
      return t2 != null;
    }
    function Ge(t2) {
      return !t2.trim().length;
    }
    function Ue(t2) {
      return t2 == null ? t2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t2);
    }
    const Xe = Object.prototype.hasOwnProperty;
    class Ye {
      constructor(t2) {
        this._keys = [], this._keyMap = {};
        let e2 = 0;
        t2.forEach((t3) => {
          let n2 = tn(t3);
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
    function tn(t2) {
      let e2 = null, n2 = null, r2 = null, s2 = 1;
      if (He(t2) || Ve(t2))
        r2 = t2, e2 = en(t2), n2 = nn(t2);
      else {
        if (!Xe.call(t2, "name"))
          throw new Error(((t3) => `Missing ${t3} property in key`)("name"));
        const i2 = t2.name;
        if (r2 = i2, Xe.call(t2, "weight") && (s2 = t2.weight, s2 <= 0))
          throw new Error(((t3) => `Property 'weight' in key '${t3}' must be a positive integer`)(i2));
        e2 = en(i2), n2 = nn(i2);
      }
      return {path: e2, id: n2, weight: s2, src: r2};
    }
    function en(t2) {
      return Ve(t2) ? t2 : t2.split(".");
    }
    function nn(t2) {
      return Ve(t2) ? t2.join(".") : t2;
    }
    var rn = {isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: (t2, e2) => t2.score === e2.score ? t2.idx < e2.idx ? -1 : 1 : t2.score < e2.score ? -1 : 1, includeMatches: false, findAllMatches: false, minMatchCharLength: 1, location: 0, threshold: 0.6, distance: 100, ...{useExtendedSearch: false, getFn: function(t2, e2) {
      let n2 = [], r2 = false;
      const s2 = (t3, e3, i2) => {
        if (Qe(t3))
          if (e3[i2]) {
            const o2 = t3[e3[i2]];
            if (!Qe(o2))
              return;
            if (i2 === e3.length - 1 && (He(o2) || Ke(o2) || qe(o2)))
              n2.push(function(t4) {
                return t4 == null ? "" : function(t5) {
                  if (typeof t5 == "string")
                    return t5;
                  let e4 = t5 + "";
                  return e4 == "0" && 1 / t5 == -1 / 0 ? "-0" : e4;
                }(t4);
              }(o2));
            else if (Ve(o2)) {
              r2 = true;
              for (let t4 = 0, n3 = o2.length; t4 < n3; t4 += 1)
                s2(o2[t4], e3, i2 + 1);
            } else
              e3.length && s2(o2, e3, i2 + 1);
          } else
            n2.push(t3);
      };
      return s2(t2, He(e2) ? e2.split(".") : e2, 0), r2 ? n2 : n2[0];
    }, ignoreLocation: false, ignoreFieldNorm: false}};
    const sn = /[^ ]+/g;
    class on {
      constructor({getFn: t2 = rn.getFn} = {}) {
        this.norm = function(t3 = 3) {
          const e2 = new Map(), n2 = Math.pow(10, t3);
          return {get(t4) {
            const r2 = t4.match(sn).length;
            if (e2.has(r2))
              return e2.get(r2);
            const s2 = 1 / Math.sqrt(r2), i2 = parseFloat(Math.round(s2 * n2) / n2);
            return e2.set(r2, i2), i2;
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
        !this.isCreated && this.docs.length && (this.isCreated = true, He(this.docs[0]) ? this.docs.forEach((t2, e2) => {
          this._addString(t2, e2);
        }) : this.docs.forEach((t2, e2) => {
          this._addObject(t2, e2);
        }), this.norm.clear());
      }
      add(t2) {
        const e2 = this.size();
        He(t2) ? this._addString(t2, e2) : this._addObject(t2, e2);
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
        if (!Qe(t2) || Ge(t2))
          return;
        let n2 = {v: t2, i: e2, n: this.norm.get(t2)};
        this.records.push(n2);
      }
      _addObject(t2, e2) {
        let n2 = {i: e2, $: {}};
        this.keys.forEach((e3, r2) => {
          let s2 = this.getFn(t2, e3.path);
          if (Qe(s2)) {
            if (Ve(s2)) {
              let t3 = [];
              const e4 = [{nestedArrIndex: -1, value: s2}];
              for (; e4.length; ) {
                const {nestedArrIndex: n3, value: r3} = e4.pop();
                if (Qe(r3))
                  if (He(r3) && !Ge(r3)) {
                    let e5 = {v: r3, i: n3, n: this.norm.get(r3)};
                    t3.push(e5);
                  } else
                    Ve(r3) && r3.forEach((t4, n4) => {
                      e4.push({nestedArrIndex: n4, value: t4});
                    });
              }
              n2.$[r2] = t3;
            } else if (!Ge(s2)) {
              let t3 = {v: s2, n: this.norm.get(s2)};
              n2.$[r2] = t3;
            }
          }
        }), this.records.push(n2);
      }
      toJSON() {
        return {keys: this.keys, records: this.records};
      }
    }
    function cn(t2, e2, {getFn: n2 = rn.getFn} = {}) {
      const r2 = new on({getFn: n2});
      return r2.setKeys(t2.map(tn)), r2.setSources(e2), r2.create(), r2;
    }
    function ln(t2, {errors: e2 = 0, currentLocation: n2 = 0, expectedLocation: r2 = 0, distance: s2 = rn.distance, ignoreLocation: i2 = rn.ignoreLocation} = {}) {
      const o2 = e2 / t2.length;
      if (i2)
        return o2;
      const c2 = Math.abs(r2 - n2);
      return s2 ? o2 + c2 / s2 : c2 ? 1 : o2;
    }
    function an(t2, e2, n2, {location: r2 = rn.location, distance: s2 = rn.distance, threshold: i2 = rn.threshold, findAllMatches: o2 = rn.findAllMatches, minMatchCharLength: c2 = rn.minMatchCharLength, includeMatches: l2 = rn.includeMatches, ignoreLocation: a2 = rn.ignoreLocation} = {}) {
      if (e2.length > 32)
        throw new Error(`Pattern length exceeds max of ${32}.`);
      const u2 = e2.length, d2 = t2.length, h2 = Math.max(0, Math.min(r2, d2));
      let f2 = i2, p2 = h2;
      const m2 = c2 > 1 || l2, g2 = m2 ? Array(d2) : [];
      let $2;
      for (; ($2 = t2.indexOf(e2, p2)) > -1; ) {
        let t3 = ln(e2, {currentLocation: $2, expectedLocation: h2, distance: s2, ignoreLocation: a2});
        if (f2 = Math.min(t3, f2), p2 = $2 + u2, m2) {
          let t4 = 0;
          for (; t4 < u2; )
            g2[$2 + t4] = 1, t4 += 1;
        }
      }
      p2 = -1;
      let y2 = [], w2 = 1, x2 = u2 + d2;
      const v2 = 1 << u2 - 1;
      for (let r3 = 0; r3 < u2; r3 += 1) {
        let i3 = 0, c3 = x2;
        for (; i3 < c3; ) {
          ln(e2, {errors: r3, currentLocation: h2 + c3, expectedLocation: h2, distance: s2, ignoreLocation: a2}) <= f2 ? i3 = c3 : x2 = c3, c3 = Math.floor((x2 - i3) / 2 + i3);
        }
        x2 = c3;
        let l3 = Math.max(1, h2 - c3 + 1), $3 = o2 ? d2 : Math.min(h2 + c3, d2) + u2, b3 = Array($3 + 2);
        b3[$3 + 1] = (1 << r3) - 1;
        for (let i4 = $3; i4 >= l3; i4 -= 1) {
          let o3 = i4 - 1, c4 = n2[t2.charAt(o3)];
          if (m2 && (g2[o3] = +!!c4), b3[i4] = (b3[i4 + 1] << 1 | 1) & c4, r3 && (b3[i4] |= (y2[i4 + 1] | y2[i4]) << 1 | 1 | y2[i4 + 1]), b3[i4] & v2 && (w2 = ln(e2, {errors: r3, currentLocation: o3, expectedLocation: h2, distance: s2, ignoreLocation: a2}), w2 <= f2)) {
            if (f2 = w2, p2 = o3, p2 <= h2)
              break;
            l3 = Math.max(1, 2 * h2 - p2);
          }
        }
        if (ln(e2, {errors: r3 + 1, currentLocation: h2, expectedLocation: h2, distance: s2, ignoreLocation: a2}) > f2)
          break;
        y2 = b3;
      }
      const b2 = {isMatch: p2 >= 0, score: Math.max(1e-3, w2)};
      if (m2) {
        const t3 = function(t4 = [], e3 = rn.minMatchCharLength) {
          let n3 = [], r3 = -1, s3 = -1, i3 = 0;
          for (let o3 = t4.length; i3 < o3; i3 += 1) {
            let o4 = t4[i3];
            o4 && r3 === -1 ? r3 = i3 : o4 || r3 === -1 || (s3 = i3 - 1, s3 - r3 + 1 >= e3 && n3.push([r3, s3]), r3 = -1);
          }
          return t4[i3 - 1] && i3 - r3 >= e3 && n3.push([r3, i3 - 1]), n3;
        }(g2, c2);
        t3.length ? l2 && (b2.indices = t3) : b2.isMatch = false;
      }
      return b2;
    }
    function un(t2) {
      let e2 = {};
      for (let n2 = 0, r2 = t2.length; n2 < r2; n2 += 1) {
        const s2 = t2.charAt(n2);
        e2[s2] = (e2[s2] || 0) | 1 << r2 - n2 - 1;
      }
      return e2;
    }
    class dn {
      constructor(t2, {location: e2 = rn.location, threshold: n2 = rn.threshold, distance: r2 = rn.distance, includeMatches: s2 = rn.includeMatches, findAllMatches: i2 = rn.findAllMatches, minMatchCharLength: o2 = rn.minMatchCharLength, isCaseSensitive: c2 = rn.isCaseSensitive, ignoreLocation: l2 = rn.ignoreLocation} = {}) {
        if (this.options = {location: e2, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2}, this.pattern = c2 ? t2 : t2.toLowerCase(), this.chunks = [], !this.pattern.length)
          return;
        const a2 = (t3, e3) => {
          this.chunks.push({pattern: t3, alphabet: un(t3), startIndex: e3});
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
        const {location: r2, distance: s2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, ignoreLocation: l2} = this.options;
        let a2 = [], u2 = 0, d2 = false;
        this.chunks.forEach(({pattern: e3, alphabet: h3, startIndex: f2}) => {
          const {isMatch: p2, score: m2, indices: g2} = an(t2, e3, h3, {location: r2 + f2, distance: s2, threshold: i2, findAllMatches: o2, minMatchCharLength: c2, includeMatches: n2, ignoreLocation: l2});
          p2 && (d2 = true), u2 += m2, p2 && g2 && (a2 = [...a2, ...g2]);
        });
        let h2 = {isMatch: d2, score: d2 ? u2 / this.chunks.length : 1};
        return d2 && n2 && (h2.indices = a2), h2;
      }
    }
    class hn {
      constructor(t2) {
        this.pattern = t2;
      }
      static isMultiMatch(t2) {
        return fn(t2, this.multiRegex);
      }
      static isSingleMatch(t2) {
        return fn(t2, this.singleRegex);
      }
      search() {
      }
    }
    function fn(t2, e2) {
      const n2 = t2.match(e2);
      return n2 ? n2[1] : null;
    }
    class pn extends hn {
      constructor(t2, {location: e2 = rn.location, threshold: n2 = rn.threshold, distance: r2 = rn.distance, includeMatches: s2 = rn.includeMatches, findAllMatches: i2 = rn.findAllMatches, minMatchCharLength: o2 = rn.minMatchCharLength, isCaseSensitive: c2 = rn.isCaseSensitive, ignoreLocation: l2 = rn.ignoreLocation} = {}) {
        super(t2), this._bitapSearch = new dn(t2, {location: e2, threshold: n2, distance: r2, includeMatches: s2, findAllMatches: i2, minMatchCharLength: o2, isCaseSensitive: c2, ignoreLocation: l2});
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
    class mn extends hn {
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
        const r2 = [], s2 = this.pattern.length;
        for (; (e2 = t2.indexOf(this.pattern, n2)) > -1; )
          n2 = e2 + s2, r2.push([e2, n2 - 1]);
        const i2 = !!r2.length;
        return {isMatch: i2, score: i2 ? 0 : 1, indices: r2};
      }
    }
    const gn = [class extends hn {
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
    }, mn, class extends hn {
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
    }, class extends hn {
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
    }, class extends hn {
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
    }, class extends hn {
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
    }, class extends hn {
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
    }, pn];
    const $n = gn.length;
    const yn = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    const wn = new Set([pn.type, mn.type]);
    class xn {
      constructor(t2, {isCaseSensitive: e2 = rn.isCaseSensitive, includeMatches: n2 = rn.includeMatches, minMatchCharLength: r2 = rn.minMatchCharLength, ignoreLocation: s2 = rn.ignoreLocation, findAllMatches: i2 = rn.findAllMatches, location: o2 = rn.location, threshold: c2 = rn.threshold, distance: l2 = rn.distance} = {}) {
        this.query = null, this.options = {isCaseSensitive: e2, includeMatches: n2, minMatchCharLength: r2, findAllMatches: i2, ignoreLocation: s2, location: o2, threshold: c2, distance: l2}, this.pattern = e2 ? t2 : t2.toLowerCase(), this.query = function(t3, e3 = {}) {
          return t3.split("|").map((t4) => {
            let n3 = t4.trim().split(yn).filter((t5) => t5 && !!t5.trim()), r3 = [];
            for (let t5 = 0, s3 = n3.length; t5 < s3; t5 += 1) {
              const s4 = n3[t5];
              let i3 = false, o3 = -1;
              for (; !i3 && ++o3 < $n; ) {
                const t6 = gn[o3];
                let n4 = t6.isMultiMatch(s4);
                n4 && (r3.push(new t6(n4, e3)), i3 = true);
              }
              if (!i3)
                for (o3 = -1; ++o3 < $n; ) {
                  const t6 = gn[o3];
                  let n4 = t6.isSingleMatch(s4);
                  if (n4) {
                    r3.push(new t6(n4, e3));
                    break;
                  }
                }
            }
            return r3;
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
        const {includeMatches: n2, isCaseSensitive: r2} = this.options;
        t2 = r2 ? t2 : t2.toLowerCase();
        let s2 = 0, i2 = [], o2 = 0;
        for (let r3 = 0, c2 = e2.length; r3 < c2; r3 += 1) {
          const c3 = e2[r3];
          i2.length = 0, s2 = 0;
          for (let e3 = 0, r4 = c3.length; e3 < r4; e3 += 1) {
            const r5 = c3[e3], {isMatch: l2, indices: a2, score: u2} = r5.search(t2);
            if (!l2) {
              o2 = 0, s2 = 0, i2.length = 0;
              break;
            }
            if (s2 += 1, o2 += u2, n2) {
              const t3 = r5.constructor.type;
              wn.has(t3) ? i2 = [...i2, ...a2] : i2.push(a2);
            }
          }
          if (s2) {
            let t3 = {isMatch: true, score: o2 / s2};
            return n2 && (t3.indices = i2), t3;
          }
        }
        return {isMatch: false, score: 1};
      }
    }
    const vn = [];
    function bn(t2, e2) {
      for (let n2 = 0, r2 = vn.length; n2 < r2; n2 += 1) {
        let r3 = vn[n2];
        if (r3.condition(t2, e2))
          return new r3(t2, e2);
      }
      return new dn(t2, e2);
    }
    const kn = "$and";
    const Mn = "$or";
    const _n = "$path";
    const Cn = "$val";
    const Sn = (t2) => !(!t2[kn] && !t2[Mn]);
    const Ln = (t2) => ({[kn]: Object.keys(t2).map((e2) => ({[e2]: t2[e2]}))});
    function On(t2, e2, {auto: n2 = true} = {}) {
      const r2 = (t3) => {
        let s2 = Object.keys(t3);
        const i2 = ((t4) => !!t4[_n])(t3);
        if (!i2 && s2.length > 1 && !Sn(t3))
          return r2(Ln(t3));
        if (((t4) => !Ve(t4) && Ze(t4) && !Sn(t4))(t3)) {
          const r3 = i2 ? t3[_n] : s2[0], o3 = i2 ? t3[Cn] : t3[r3];
          if (!He(o3))
            throw new Error(((t4) => `Invalid value for key ${t4}`)(r3));
          const c2 = {keyId: nn(r3), pattern: o3};
          return n2 && (c2.searcher = bn(o3, e2)), c2;
        }
        let o2 = {children: [], operator: s2[0]};
        return s2.forEach((e3) => {
          const n3 = t3[e3];
          Ve(n3) && n3.forEach((t4) => {
            o2.children.push(r2(t4));
          });
        }), o2;
      };
      return Sn(t2) || (t2 = Ln(t2)), r2(t2);
    }
    function In(t2, e2) {
      const n2 = t2.matches;
      e2.matches = [], Qe(n2) && n2.forEach((t3) => {
        if (!Qe(t3.indices) || !t3.indices.length)
          return;
        const {indices: n3, value: r2} = t3;
        let s2 = {indices: n3, value: r2};
        t3.key && (s2.key = t3.key.src), t3.idx > -1 && (s2.refIndex = t3.idx), e2.matches.push(s2);
      });
    }
    function En(t2, e2) {
      e2.score = t2.score;
    }
    class jn {
      constructor(t2, e2 = {}, n2) {
        this.options = {...rn, ...e2}, this.options.useExtendedSearch, this._keyStore = new Ye(this.options.keys), this.setCollection(t2, n2);
      }
      setCollection(t2, e2) {
        if (this._docs = t2, e2 && !(e2 instanceof on))
          throw new Error("Incorrect 'index' type");
        this._myIndex = e2 || cn(this.options.keys, this._docs, {getFn: this.options.getFn});
      }
      add(t2) {
        Qe(t2) && (this._docs.push(t2), this._myIndex.add(t2));
      }
      remove(t2 = () => false) {
        const e2 = [];
        for (let n2 = 0, r2 = this._docs.length; n2 < r2; n2 += 1) {
          const s2 = this._docs[n2];
          t2(s2, n2) && (this.removeAt(n2), n2 -= 1, r2 -= 1, e2.push(s2));
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
        const {includeMatches: n2, includeScore: r2, shouldSort: s2, sortFn: i2, ignoreFieldNorm: o2} = this.options;
        let c2 = He(t2) ? He(this._docs[0]) ? this._searchStringList(t2) : this._searchObjectList(t2) : this._searchLogical(t2);
        return function(t3, {ignoreFieldNorm: e3 = rn.ignoreFieldNorm}) {
          t3.forEach((t4) => {
            let n3 = 1;
            t4.matches.forEach(({key: t5, norm: r3, score: s3}) => {
              const i3 = t5 ? t5.weight : null;
              n3 *= Math.pow(s3 === 0 && i3 ? Number.EPSILON : s3, (i3 || 1) * (e3 ? 1 : r3));
            }), t4.score = n3;
          });
        }(c2, {ignoreFieldNorm: o2}), s2 && c2.sort(i2), Ke(e2) && e2 > -1 && (c2 = c2.slice(0, e2)), function(t3, e3, {includeMatches: n3 = rn.includeMatches, includeScore: r3 = rn.includeScore} = {}) {
          const s3 = [];
          return n3 && s3.push(In), r3 && s3.push(En), t3.map((t4) => {
            const {idx: n4} = t4, r4 = {item: e3[n4], refIndex: n4};
            return s3.length && s3.forEach((e4) => {
              e4(t4, r4);
            }), r4;
          });
        }(c2, this._docs, {includeMatches: n2, includeScore: r2});
      }
      _searchStringList(t2) {
        const e2 = bn(t2, this.options), {records: n2} = this._myIndex, r2 = [];
        return n2.forEach(({v: t3, i: n3, n: s2}) => {
          if (!Qe(t3))
            return;
          const {isMatch: i2, score: o2, indices: c2} = e2.searchIn(t3);
          i2 && r2.push({item: t3, idx: n3, matches: [{score: o2, value: t3, norm: s2, indices: c2}]});
        }), r2;
      }
      _searchLogical(t2) {
        const e2 = On(t2, this.options), n2 = (t3, e3, r3) => {
          if (!t3.children) {
            const {keyId: n3, searcher: s3} = t3, i3 = this._findMatches({key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(e3, n3), searcher: s3});
            return i3 && i3.length ? [{idx: r3, item: e3, matches: i3}] : [];
          }
          switch (t3.operator) {
            case kn: {
              const s3 = [];
              for (let i3 = 0, o2 = t3.children.length; i3 < o2; i3 += 1) {
                const o3 = t3.children[i3], c2 = n2(o3, e3, r3);
                if (!c2.length)
                  return [];
                s3.push(...c2);
              }
              return s3;
            }
            case Mn: {
              const s3 = [];
              for (let i3 = 0, o2 = t3.children.length; i3 < o2; i3 += 1) {
                const o3 = t3.children[i3], c2 = n2(o3, e3, r3);
                if (c2.length) {
                  s3.push(...c2);
                  break;
                }
              }
              return s3;
            }
          }
        }, r2 = this._myIndex.records, s2 = {}, i2 = [];
        return r2.forEach(({$: t3, i: r3}) => {
          if (Qe(t3)) {
            let o2 = n2(e2, t3, r3);
            o2.length && (s2[r3] || (s2[r3] = {idx: r3, item: t3, matches: []}, i2.push(s2[r3])), o2.forEach(({matches: t4}) => {
              s2[r3].matches.push(...t4);
            }));
          }
        }), i2;
      }
      _searchObjectList(t2) {
        const e2 = bn(t2, this.options), {keys: n2, records: r2} = this._myIndex, s2 = [];
        return r2.forEach(({$: t3, i: r3}) => {
          if (!Qe(t3))
            return;
          let i2 = [];
          n2.forEach((n3, r4) => {
            i2.push(...this._findMatches({key: n3, value: t3[r4], searcher: e2}));
          }), i2.length && s2.push({idx: r3, item: t3, matches: i2});
        }), s2;
      }
      _findMatches({key: t2, value: e2, searcher: n2}) {
        if (!Qe(e2))
          return [];
        let r2 = [];
        if (Ve(e2))
          e2.forEach(({v: e3, i: s2, n: i2}) => {
            if (!Qe(e3))
              return;
            const {isMatch: o2, score: c2, indices: l2} = n2.searchIn(e3);
            o2 && r2.push({score: c2, key: t2, value: e3, idx: s2, norm: i2, indices: l2});
          });
        else {
          const {v: s2, n: i2} = e2, {isMatch: o2, score: c2, indices: l2} = n2.searchIn(s2);
          o2 && r2.push({score: c2, key: t2, value: s2, norm: i2, indices: l2});
        }
        return r2;
      }
    }
    jn.version = "6.4.6", jn.createIndex = cn, jn.parseIndex = function(t2, {getFn: e2 = rn.getFn} = {}) {
      const {keys: n2, records: r2} = t2, s2 = new on({getFn: e2});
      return s2.setKeys(n2), s2.setIndexRecords(r2), s2;
    }, jn.config = rn, jn.parseQuery = On, function(...t2) {
      vn.push(...t2);
    }(xn);
    const Bn = {useExtendedSearch: true, keys: ["subject", "preview"]};
    let An = main.h(U, (t2) => new jn(t2, Bn));
    let zn = main.w("");
    let Pn = main.w(false);
    let Wn = main.h([U, An, zn, Pn], ([t2, e2, n2, r2]) => n2 ? e2.search((r2 ? "" : "'") + n2).map((t3) => t3.item) : t2);
    function Nn(t2) {
      let e2, n2, r2;
      return {c() {
        e2 = main.e("span"), n2 = main.t(t2[0]), r2 = main.t("\uAC74"), main.b(e2, "class", "bg-red-100 rounded pr-1");
      }, m(t3, s2) {
        main.c(t3, e2, s2), main.d(e2, n2), main.d(e2, r2);
      }, p(t3, e3) {
        1 & e3 && main.o(n2, t3[0]);
      }, d(t3) {
        t3 && main.f(e2);
      }};
    }
    function Rn(t2) {
      let e2, n2, r2, s2, o2, c2, h2, $2, y2, v2, b2 = t2[3] && Nn(t2);
      return {c() {
        e2 = main.e("span"), n2 = main.e("label"), n2.textContent = "\uBD80\uBD84 \uC77C\uCE58", r2 = main.a(), s2 = main.e("input"), o2 = main.a(), c2 = main.e("input"), h2 = main.a(), b2 && b2.c(), $2 = main.m(), main.b(n2, "for", "fuzzy"), main.b(s2, "id", "fuzzy"), main.b(s2, "type", "checkbox"), main.b(e2, "class", "bg-red-100 rounded p-0.5 m-1"), main.b(c2, "class", "m-1 border-1 border-gray-400 rounded w-28"), main.b(c2, "type", "text"), main.b(c2, "placeholder", "\uAC80\uC0C9");
      }, m(i2, l2) {
        main.c(i2, e2, l2), main.d(e2, n2), main.d(e2, r2), main.d(e2, s2), s2.checked = t2[1], main.c(i2, o2, l2), main.c(i2, c2, l2), main.p(c2, t2[3]), main.c(i2, h2, l2), b2 && b2.m(i2, l2), main.c(i2, $2, l2), y2 || (v2 = [main.l(s2, "change", t2[4]), main.l(c2, "change", t2[5]), main.l(c2, "input", t2[6])], y2 = true);
      }, p(t3, [e3]) {
        2 & e3 && (s2.checked = t3[1]), 8 & e3 && c2.value !== t3[3] && main.p(c2, t3[3]), t3[3] ? b2 ? b2.p(t3, e3) : (b2 = Nn(t3), b2.c(), b2.m($2.parentNode, $2)) : b2 && (b2.d(1), b2 = null);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), t3 && main.f(o2), t3 && main.f(c2), t3 && main.f(h2), b2 && b2.d(t3), t3 && main.f($2), y2 = false, main.r(v2);
      }};
    }
    function Fn(t2, e2, n2) {
      let r2, s2, i2;
      main.g(t2, Pn, (t3) => n2(1, r2 = t3)), main.g(t2, et, (t3) => n2(2, s2 = t3)), main.g(t2, zn, (t3) => n2(3, i2 = t3));
      let {search_length: o2} = e2;
      return t2.$$set = (t3) => {
        "search_length" in t3 && n2(0, o2 = t3.search_length);
      }, [o2, r2, s2, i2, function() {
        r2 = this.checked, Pn.set(r2);
      }, () => {
        main.q(et, s2 = 1, s2);
      }, function() {
        i2 = this.value, zn.set(i2);
      }];
    }
    class Dn extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Fn, Rn, main.s, {search_length: 0});
      }
    }
    function Tn(t2, e2, n2) {
      const r2 = t2.slice();
      return r2[40] = e2[n2], r2[42] = n2, r2;
    }
    function Jn(t2, e2, n2) {
      const r2 = t2.slice();
      return r2[40] = e2[n2], r2[42] = n2, r2;
    }
    function Vn(t2) {
      let e2, n2, r2, s2, c2, h2, m2, $2 = t2[2] ? "on" : "off";
      return {c() {
        e2 = main.e("label"), n2 = main.t("\uB9AC\uC2A4\uD2B8\uBDF0 "), r2 = main.t($2), s2 = main.a(), c2 = main.e("input"), main.b(c2, "id", "isListView"), main.b(c2, "type", "checkbox"), main.b(e2, "class", "p-1"), main.b(e2, "for", "isListView");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(e2, r2), main.d(e2, s2), main.d(e2, c2), c2.checked = t2[2], h2 || (m2 = main.l(c2, "change", t2[28]), h2 = true);
      }, p(t3, e3) {
        4 & e3[0] && $2 !== ($2 = t3[2] ? "on" : "off") && main.o(r2, $2), 4 & e3[0] && (c2.checked = t3[2]);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), h2 = false, m2();
      }};
    }
    function Hn(t2) {
      let e2, n2, r2, s2, c2, h2, g2, $2, y2 = t2[4].value && Kn(t2);
      return {c() {
        e2 = main.e("label"), n2 = main.t("\uD0DC\uADF8 \uBAA9\uB85D "), r2 = main.e("input"), s2 = main.a(), y2 && y2.c(), c2 = main.m(), main.b(r2, "id", "isListView"), main.b(r2, "type", "checkbox"), main.b(e2, "class", "p-1"), main.b(e2, "for", "isListView");
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.d(e2, n2), main.d(e2, r2), r2.checked = t2[6], main.c(i2, s2, o2), y2 && y2.m(i2, o2), main.c(i2, c2, o2), h2 = true, g2 || ($2 = main.l(r2, "change", t2[27]), g2 = true);
      }, p(t3, e3) {
        64 & e3[0] && (r2.checked = t3[6]), t3[4].value ? y2 ? (y2.p(t3, e3), 16 & e3[0] && main.y(y2, 1)) : (y2 = Kn(t3), y2.c(), main.y(y2, 1), y2.m(c2.parentNode, c2)) : y2 && (main.H(), main.z(y2, 1, 1, () => {
          y2 = null;
        }), main.I());
      }, i(t3) {
        h2 || (main.y(y2), h2 = true);
      }, o(t3) {
        main.z(y2), h2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && main.f(s2), y2 && y2.d(t3), t3 && main.f(c2), g2 = false, $2();
      }};
    }
    function Kn(t2) {
      let e2, n2, r2, s2;
      return r2 = new $t({props: {tag: t2[4], canDelete: true, onRemove: t2[11]}}), {c() {
        e2 = main.e("span"), e2.textContent = "\uD604\uC7AC :", n2 = main.a(), main.v(r2.$$.fragment), main.b(e2, "class", "ml-1 mt-1");
      }, m(t3, i2) {
        main.c(t3, e2, i2), main.c(t3, n2, i2), main.x(r2, t3, i2), s2 = true;
      }, p(t3, e3) {
        const n3 = {};
        16 & e3[0] && (n3.tag = t3[4]), r2.$set(n3);
      }, i(t3) {
        s2 || (main.y(r2.$$.fragment, t3), s2 = true);
      }, o(t3) {
        main.z(r2.$$.fragment, t3), s2 = false;
      }, d(t3) {
        t3 && main.f(e2), t3 && main.f(n2), main.A(r2, t3);
      }};
    }
    function qn(t2) {
      let e2, n2, r2 = t2[7], s2 = [];
      for (let e3 = 0; e3 < r2.length; e3 += 1)
        s2[e3] = Qn(Tn(t2, r2, e3));
      const o2 = (t3) => main.z(s2[t3], 1, 1, () => {
        s2[t3] = null;
      });
      return {c() {
        e2 = main.e("ul");
        for (let t3 = 0; t3 < s2.length; t3 += 1)
          s2[t3].c();
        main.b(e2, "id", "MailItemList"), main.j(e2, "max-width", "728px"), main.b(e2, "class", "bg-white rounded shadow-xl mb-3");
      }, m(t3, r3) {
        main.c(t3, e2, r3);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          s2[t4].m(e2, null);
        n2 = true;
      }, p(t3, n3) {
        if (226 & n3[0]) {
          let i2;
          for (r2 = t3[7], i2 = 0; i2 < r2.length; i2 += 1) {
            const o3 = Tn(t3, r2, i2);
            s2[i2] ? (s2[i2].p(o3, n3), main.y(s2[i2], 1)) : (s2[i2] = Qn(o3), s2[i2].c(), main.y(s2[i2], 1), s2[i2].m(e2, null));
          }
          for (main.H(), i2 = r2.length; i2 < s2.length; i2 += 1)
            o2(i2);
          main.I();
        }
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < r2.length; t4 += 1)
            main.y(s2[t4]);
          n2 = true;
        }
      }, o(t3) {
        s2 = s2.filter(Boolean);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          main.z(s2[t4]);
        n2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.B(s2, t3);
      }};
    }
    function Zn(t2) {
      let e2, n2, r2 = t2[7], s2 = [];
      for (let e3 = 0; e3 < r2.length; e3 += 1)
        s2[e3] = Gn(Jn(t2, r2, e3));
      const o2 = (t3) => main.z(s2[t3], 1, 1, () => {
        s2[t3] = null;
      });
      return {c() {
        e2 = main.e("div");
        for (let t3 = 0; t3 < s2.length; t3 += 1)
          s2[t3].c();
        main.b(e2, "id", "MailCardView"), main.b(e2, "class", "\r\n        mb-3 flex flex-wrap");
      }, m(t3, r3) {
        main.c(t3, e2, r3);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          s2[t4].m(e2, null);
        n2 = true;
      }, p(t3, n3) {
        if (128 & n3[0]) {
          let i2;
          for (r2 = t3[7], i2 = 0; i2 < r2.length; i2 += 1) {
            const o3 = Jn(t3, r2, i2);
            s2[i2] ? (s2[i2].p(o3, n3), main.y(s2[i2], 1)) : (s2[i2] = Gn(o3), s2[i2].c(), main.y(s2[i2], 1), s2[i2].m(e2, null));
          }
          for (main.H(), i2 = r2.length; i2 < s2.length; i2 += 1)
            o2(i2);
          main.I();
        }
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < r2.length; t4 += 1)
            main.y(s2[t4]);
          n2 = true;
        }
      }, o(t3) {
        s2 = s2.filter(Boolean);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          main.z(s2[t4]);
        n2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.B(s2, t3);
      }};
    }
    function Qn(t2) {
      let e2, n2;
      return e2 = new Pe({props: {index: t2[42], pm: t2[40], hidden: t2[5] && (t2[1] < 400 || t2[6]) && t2[42] > 0}}), {c() {
        main.v(e2.$$.fragment);
      }, m(t3, r2) {
        main.x(e2, t3, r2), n2 = true;
      }, p(t3, n3) {
        const r2 = {};
        128 & n3[0] && (r2.pm = t3[40]), 98 & n3[0] && (r2.hidden = t3[5] && (t3[1] < 400 || t3[6]) && t3[42] > 0), e2.$set(r2);
      }, i(t3) {
        n2 || (main.y(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.A(e2, t3);
      }};
    }
    function Gn(t2) {
      let e2, n2;
      return e2 = new Je({props: {pm: t2[40], index: t2[42]}}), {c() {
        main.v(e2.$$.fragment);
      }, m(t3, r2) {
        main.x(e2, t3, r2), n2 = true;
      }, p(t3, n3) {
        const r2 = {};
        128 & n3[0] && (r2.pm = t3[40]), e2.$set(r2);
      }, i(t3) {
        n2 || (main.y(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        main.A(e2, t3);
      }};
    }
    function Un(t2) {
      let e2, n2, r2, s2, o2, d2, h2, m2, g2, $2, y2, w2, x2, v2, S2, L2, O2, z2, P2, N2, R2;
      const F2 = [Hn, Vn], D2 = [];
      function T2(t3, e3) {
        return t3[5] ? 0 : 1;
      }
      r2 = T2(t2), s2 = D2[r2] = F2[r2](t2);
      m2 = new oe({});
      const J2 = [Zn, qn], V2 = [];
      function H2(t3, e3) {
        return !t3[2] && t3[10] ? 0 : 1;
      }
      return $2 = H2(t2), y2 = V2[$2] = J2[$2](t2), x2 = new Ce({props: {maxPage: t2[8]}}), O2 = new Dn({props: {search_length: t2[3].length}}), {c() {
        e2 = main.e("section"), n2 = main.e("div"), s2.c(), o2 = main.a(), d2 = main.a(), h2 = main.e("div"), main.v(m2.$$.fragment), g2 = main.a(), y2.c(), w2 = main.a(), main.v(x2.$$.fragment), v2 = main.a(), S2 = main.e("br"), L2 = main.a(), main.v(O2.$$.fragment), main.b(n2, "class", "mb-1 flex flex-row"), main.b(h2, "class", "\r\n    h-36 p-2 mb-3\r\n    bg-white shadow-2xl rounded-md\r\n    overflow-y-auto"), main.L(h2, "hidden", !(t2[5] && t2[6])), main.b(e2, "id", "MailListSection"), main.j(e2, "min-height", (t2[2] || t2[5] ? t2[6] ? 520 : 360 : 490) + "px"), main.b(e2, "class", z2 = "h-full\r\n" + (t2[10] ? "w-8/12" : "h-full w-full") + "\r\nrelative pl-4 pr-4 pt-2"), main.E(() => t2[29].call(e2)), main.L(e2, "hidden", t2[5] && !t2[9]);
      }, m(s3, i2) {
        main.c(s3, e2, i2), main.d(e2, n2), D2[r2].m(n2, null), main.d(e2, o2), main.d(e2, d2), main.d(e2, h2), main.x(m2, h2, null), main.d(e2, g2), V2[$2].m(e2, null), main.d(e2, w2), main.x(x2, e2, null), main.d(e2, v2), main.d(e2, S2), main.d(e2, L2), main.x(O2, e2, null), P2 = main.G(e2, t2[29].bind(e2)), R2 = true;
      }, p(t3, i2) {
        let o3 = r2;
        r2 = T2(t3), r2 === o3 ? D2[r2].p(t3, i2) : (main.H(), main.z(D2[o3], 1, 1, () => {
          D2[o3] = null;
        }), main.I(), s2 = D2[r2], s2 ? s2.p(t3, i2) : (s2 = D2[r2] = F2[r2](t3), s2.c()), main.y(s2, 1), s2.m(n2, null)), 96 & i2[0] && main.L(h2, "hidden", !(t3[5] && t3[6]));
        let a2 = $2;
        $2 = H2(t3), $2 === a2 ? V2[$2].p(t3, i2) : (main.H(), main.z(V2[a2], 1, 1, () => {
          V2[a2] = null;
        }), main.I(), y2 = V2[$2], y2 ? y2.p(t3, i2) : (y2 = V2[$2] = J2[$2](t3), y2.c()), main.y(y2, 1), y2.m(e2, w2));
        const u2 = {};
        256 & i2[0] && (u2.maxPage = t3[8]), x2.$set(u2);
        const d3 = {};
        8 & i2[0] && (d3.search_length = t3[3].length), O2.$set(d3), (!R2 || 100 & i2[0]) && main.j(e2, "min-height", (t3[2] || t3[5] ? t3[6] ? 520 : 360 : 490) + "px"), (!R2 || 1024 & i2[0] && z2 !== (z2 = "h-full\r\n" + (t3[10] ? "w-8/12" : "h-full w-full") + "\r\nrelative pl-4 pr-4 pt-2")) && main.b(e2, "class", z2), 1568 & i2[0] && main.L(e2, "hidden", t3[5] && !t3[9]);
      }, i(t3) {
        R2 || (main.y(s2), main.y(false), main.y(m2.$$.fragment, t3), main.y(y2), main.y(x2.$$.fragment, t3), main.y(O2.$$.fragment, t3), main.E(() => {
          N2 || (N2 = main.F(e2, qt, {x: 200, duration: 200}, true)), N2.run(1);
        }), R2 = true);
      }, o(t3) {
        main.z(s2), main.z(false), main.z(m2.$$.fragment, t3), main.z(y2), main.z(x2.$$.fragment, t3), main.z(O2.$$.fragment, t3), N2 || (N2 = main.F(e2, qt, {x: 200, duration: 200}, false)), N2.run(0), R2 = false;
      }, d(t3) {
        t3 && main.f(e2), D2[r2].d(), main.A(m2), V2[$2].d(), main.A(x2), main.A(O2), P2(), t3 && N2 && N2.end();
      }};
    }
    function Xn(t2, e2) {
      fetch(t2, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(e2)}).then((t3) => {
        console.log(e2);
      }).catch((e3) => {
        console.log(t2 + " \uBC31\uC5C5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC11C\uBC84\uAC00 \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
      });
    }
    function Yn(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a2, u2, d2, h2, f2, p2, m2, g2, y2, w2, x2, b2, k2, M2, _2, C2, S2;
      main.g(t2, ge, (t3) => n2(14, m2 = t3)), main.g(t2, et, (t3) => n2(15, g2 = t3)), main.g(t2, ct, (t3) => n2(4, y2 = t3)), main.g(t2, ut, (t3) => n2(18, w2 = t3)), main.g(t2, zn, (t3) => n2(21, x2 = t3)), main.g(t2, Wn, (t3) => n2(22, b2 = t3)), main.g(t2, st, (t3) => n2(5, k2 = t3)), main.g(t2, Z, (t3) => n2(35, M2 = t3)), main.g(t2, Q, (t3) => n2(36, _2 = t3)), main.g(t2, nt, (t3) => n2(9, C2 = t3)), main.g(t2, rt, (t3) => n2(10, S2 = t3));
      var L2 = this && this.__awaiter || function(t3, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t4) {
            try {
              l3(r3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(r3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? s3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(t3, e3 || [])).next());
        });
      };
      let O2, I2, E2 = 1, j2 = 3;
      main.N(() => {
        const t3 = p2[0];
        if ((E2 != g2 || O2 != m2 && t3) && (I2 = t3, E2 = g2), j2 != u2 && I2) {
          let t4 = 0;
          return c2.forEach((t5, e4) => {
          }), main.q(et, g2 = Math.ceil((t4 + 1) / u2), g2), E2 = g2, j2 = u2, null;
        }
        if (r2 > new Date())
          return main.q(ge, m2 = $e(new Date()), m2), alert("\uBBF8\uB798\uB85C \uAC08 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."), null;
        if (!y2.value || p2.length == 0)
          return null;
        if (O2 != m2) {
          let t4 = false;
          if (c2.forEach((e4, n3) => {
            if (t4)
              return null;
            const s3 = we(e4.time);
            ye(s3) <= r2 && (main.q(et, g2 = Math.ceil((n3 + 1) / u2), g2), main.q(ge, m2 = s3, m2), t4 = true);
          }), t4 == 0) {
            main.q(et, g2 = d2, g2);
            const t5 = c2[c2.length - 1];
            main.q(ge, m2 = we(t5.time), m2);
          }
          return O2 = m2, null;
        }
        const e3 = we(p2[0].time);
        main.q(ge, m2 = e3, m2), O2 = e3;
      });
      const B2 = (t3) => {
        const e3 = t3.time.split(" ")[0];
        typeof e3 != "string" && console.log(e3);
        try {
          return e3.replace(/\//g, "-") == m2;
        } catch (t4) {
          console.error(t4), console.log(e3);
        }
        return true;
      }, A2 = (t3) => true;
      let z2, P2, W2 = false, N2 = false;
      return t2.$$.update = () => {
        16384 & t2.$$.dirty[0] && (r2 = ye(m2)), 262160 & t2.$$.dirty[0] && n2(17, s2 = w2.get(y2)), 131072 & t2.$$.dirty[0] && n2(19, i2 = (t3) => s2.has(t3.id)), 2637840 & t2.$$.dirty[0] && n2(20, o2 = y2.value && i2 || x2 && A2 || m2 && B2 || A2), 5242880 & t2.$$.dirty[0] && n2(3, c2 = b2.filter(o2)), 1 & t2.$$.dirty[0] && n2(23, l2 = Math.floor((z2 - 33) / 280)), 2 & t2.$$.dirty[0] && n2(24, a2 = Math.floor((P2 - 220) / 164)), 25165862 & t2.$$.dirty[0] && n2(16, u2 = k2 ? 5 : W2 ? Math.floor((P2 - 200) / 62) : l2 * a2), 65544 & t2.$$.dirty[0] && n2(8, d2 = Math.ceil(c2.length / u2)), 98304 & t2.$$.dirty[0] && n2(25, h2 = (g2 - 1) * u2), 33619976 & t2.$$.dirty[0] && n2(26, f2 = () => {
          const t3 = c2.slice(h2, h2 + u2);
          return t3.length < u2 ? t3.concat(Array(u2 - t3.length).fill({id: "", member: "", time: "", subject: "", preview: ""})) : t3;
        }), 67108872 & t2.$$.dirty[0] && n2(7, p2 = c2 && f2());
      }, [z2, P2, W2, c2, y2, k2, N2, p2, d2, C2, S2, () => {
        main.q(ct, y2 = V, y2), main.q(et, g2 = 1, g2);
      }, () => {
        Xn("/all-tag-dict/", {tag_list: [...M2].map((t3) => t3[1])}), Xn("/mail-tag-dict/", {mail_to_tag_dict: G(_2), tag_to_mail_dict: dt(w2)});
      }, () => L2(void 0, void 0, void 0, function* () {
        const t3 = yield fetch("/all-tag-dict/").then((t4) => t4.json()).then((t4) => t4.tag_list), e3 = yield fetch("/mail-tag-dict/").then((t4) => t4.json()), n3 = e3.tag_to_mail_dict, r3 = e3.mail_to_tag_dict;
        main.q(ct, y2 = V, y2), main.q(Z, M2 = t3.reduce((t4, e4) => (t4.set(e4.value, e4), t4), new Map([["\u{1F496}", H]])), M2), console.log("all_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC"), main.q(ut, w2 = at(n3), w2), main.q(Q, _2 = q(r3), _2), console.log("mail_tag_dict \uBC31\uC5C5 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC");
      }), m2, g2, u2, s2, w2, i2, o2, x2, b2, l2, a2, h2, f2, function() {
        N2 = this.checked, n2(6, N2);
      }, function() {
        W2 = this.checked, n2(2, W2);
      }, function() {
        z2 = this.clientWidth, P2 = this.clientHeight, n2(0, z2), n2(1, P2);
      }];
    }
    class tr extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, Yn, Un, main.s, {}, [-1, -1]);
      }
    }
    function er(t2) {
      let e2, n2, r2, s2, o2, c2, m2, g2, $2, y2, w2, v2 = t2[0].closeButton && nr(t2);
      var S2 = t2[1];
      return S2 && (c2 = new S2({})), {c() {
        e2 = main.e("div"), n2 = main.e("div"), r2 = main.e("div"), v2 && v2.c(), s2 = main.a(), o2 = main.e("div"), c2 && main.v(c2.$$.fragment), main.b(o2, "class", "content svelte-1jadkpy"), main.b(o2, "style", t2[12]), main.b(r2, "class", "window svelte-1jadkpy"), main.b(r2, "role", "dialog"), main.b(r2, "aria-modal", "true"), main.b(r2, "style", t2[11]), main.b(n2, "class", "window-wrap svelte-1jadkpy"), main.b(n2, "style", t2[10]), main.b(e2, "class", "bg svelte-1jadkpy"), main.b(e2, "style", t2[9]);
      }, m(i2, l2) {
        main.c(i2, e2, l2), main.d(e2, n2), main.d(n2, r2), v2 && v2.m(r2, null), main.d(r2, s2), main.d(r2, o2), c2 && main.x(c2, o2, null), t2[37](r2), t2[38](n2), t2[39](e2), $2 = true, y2 || (w2 = [main.l(r2, "introstart", function() {
          main.k(t2[5]) && t2[5].apply(this, arguments);
        }), main.l(r2, "outrostart", function() {
          main.k(t2[6]) && t2[6].apply(this, arguments);
        }), main.l(r2, "introend", function() {
          main.k(t2[7]) && t2[7].apply(this, arguments);
        }), main.l(r2, "outroend", function() {
          main.k(t2[8]) && t2[8].apply(this, arguments);
        }), main.l(e2, "click", t2[19])], y2 = true);
      }, p(i2, a2) {
        if ((t2 = i2)[0].closeButton ? v2 ? (v2.p(t2, a2), 1 & a2[0] && main.y(v2, 1)) : (v2 = nr(t2), v2.c(), main.y(v2, 1), v2.m(r2, s2)) : v2 && (main.H(), main.z(v2, 1, 1, () => {
          v2 = null;
        }), main.I()), S2 !== (S2 = t2[1])) {
          if (c2) {
            main.H();
            const t3 = c2;
            main.z(t3.$$.fragment, 1, 0, () => {
              main.A(t3, 1);
            }), main.I();
          }
          S2 ? (c2 = new S2({}), main.v(c2.$$.fragment), main.y(c2.$$.fragment, 1), main.x(c2, o2, null)) : c2 = null;
        }
        (!$2 || 4096 & a2[0]) && main.b(o2, "style", t2[12]), (!$2 || 2048 & a2[0]) && main.b(r2, "style", t2[11]), (!$2 || 1024 & a2[0]) && main.b(n2, "style", t2[10]), (!$2 || 512 & a2[0]) && main.b(e2, "style", t2[9]);
      }, i(n3) {
        $2 || (main.y(v2), c2 && main.y(c2.$$.fragment, n3), main.E(() => {
          m2 || (m2 = main.F(r2, t2[15], t2[0].transitionWindowProps, true)), m2.run(1);
        }), main.E(() => {
          g2 || (g2 = main.F(e2, t2[14], t2[0].transitionBgProps, true)), g2.run(1);
        }), $2 = true);
      }, o(n3) {
        main.z(v2), c2 && main.z(c2.$$.fragment, n3), m2 || (m2 = main.F(r2, t2[15], t2[0].transitionWindowProps, false)), m2.run(0), g2 || (g2 = main.F(e2, t2[14], t2[0].transitionBgProps, false)), g2.run(0), $2 = false;
      }, d(n3) {
        n3 && main.f(e2), v2 && v2.d(), c2 && main.A(c2), t2[37](null), n3 && m2 && m2.end(), t2[38](null), t2[39](null), n3 && g2 && g2.end(), y2 = false, main.r(w2);
      }};
    }
    function nr(t2) {
      let e2, n2, r2, s2, i2;
      const o2 = [sr, rr], c2 = [];
      function l2(t3, n3) {
        return 1 & n3[0] && (e2 = !!t3[16](t3[0].closeButton)), e2 ? 0 : 1;
      }
      return n2 = l2(t2, [-1]), r2 = c2[n2] = o2[n2](t2), {c() {
        r2.c(), s2 = main.m();
      }, m(t3, e3) {
        c2[n2].m(t3, e3), main.c(t3, s2, e3), i2 = true;
      }, p(t3, e3) {
        let i3 = n2;
        n2 = l2(t3, e3), n2 === i3 ? c2[n2].p(t3, e3) : (main.H(), main.z(c2[i3], 1, 1, () => {
          c2[i3] = null;
        }), main.I(), r2 = c2[n2], r2 ? r2.p(t3, e3) : (r2 = c2[n2] = o2[n2](t3), r2.c()), main.y(r2, 1), r2.m(s2.parentNode, s2));
      }, i(t3) {
        i2 || (main.y(r2), i2 = true);
      }, o(t3) {
        main.z(r2), i2 = false;
      }, d(t3) {
        c2[n2].d(t3), t3 && main.f(s2);
      }};
    }
    function rr(t2) {
      let e2, n2, r2;
      return {c() {
        e2 = main.e("button"), main.b(e2, "class", "close svelte-1jadkpy"), main.b(e2, "style", t2[13]);
      }, m(s2, i2) {
        main.c(s2, e2, i2), n2 || (r2 = main.l(e2, "click", t2[17]), n2 = true);
      }, p(t3, n3) {
        8192 & n3[0] && main.b(e2, "style", t3[13]);
      }, i: main.n, o: main.n, d(t3) {
        t3 && main.f(e2), n2 = false, r2();
      }};
    }
    function sr(t2) {
      let e2, n2, r2;
      var s2 = t2[0].closeButton;
      function i2(t3) {
        return {props: {onClose: t3[17]}};
      }
      return s2 && (e2 = new s2(i2(t2))), {c() {
        e2 && main.v(e2.$$.fragment), n2 = main.m();
      }, m(t3, s3) {
        e2 && main.x(e2, t3, s3), main.c(t3, n2, s3), r2 = true;
      }, p(t3, r3) {
        if (s2 !== (s2 = t3[0].closeButton)) {
          if (e2) {
            main.H();
            const t4 = e2;
            main.z(t4.$$.fragment, 1, 0, () => {
              main.A(t4, 1);
            }), main.I();
          }
          s2 ? (e2 = new s2(i2(t3)), main.v(e2.$$.fragment), main.y(e2.$$.fragment, 1), main.x(e2, n2.parentNode, n2)) : e2 = null;
        }
      }, i(t3) {
        r2 || (e2 && main.y(e2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        e2 && main.z(e2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        t3 && main.f(n2), e2 && main.A(e2, t3);
      }};
    }
    function ir(t2) {
      let e2, n2, r2, s2, i2 = t2[1] && er(t2);
      const o2 = t2[36].default, c2 = main.J(o2, t2, t2[35], null);
      return {c() {
        i2 && i2.c(), e2 = main.a(), c2 && c2.c();
      }, m(o3, l2) {
        i2 && i2.m(o3, l2), main.c(o3, e2, l2), c2 && c2.m(o3, l2), n2 = true, r2 || (s2 = main.l(window, "keydown", t2[18]), r2 = true);
      }, p(t3, n3) {
        t3[1] ? i2 ? (i2.p(t3, n3), 2 & n3[0] && main.y(i2, 1)) : (i2 = er(t3), i2.c(), main.y(i2, 1), i2.m(e2.parentNode, e2)) : i2 && (main.H(), main.z(i2, 1, 1, () => {
          i2 = null;
        }), main.I()), c2 && c2.p && 16 & n3[1] && main.K(c2, o2, t3, t3[35], n3, null, null);
      }, i(t3) {
        n2 || (main.y(i2), main.y(c2, t3), n2 = true);
      }, o(t3) {
        main.z(i2), main.z(c2, t3), n2 = false;
      }, d(t3) {
        i2 && i2.d(t3), t3 && main.f(e2), c2 && c2.d(t3), r2 = false, s2();
      }};
    }
    function or(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a2, {$$slots: u2 = {}, $$scope: d2} = e2;
      const h2 = main.O(), f2 = main.Q;
      let {show: p2 = null} = e2, {key: m2 = "simple-modal"} = e2, {closeButton: g2 = true} = e2, {closeOnEsc: $2 = true} = e2, {closeOnOuterClick: y2 = true} = e2, {styleBg: w2 = {top: 0, left: 0}} = e2, {styleWindowWrap: x2 = {}} = e2, {styleWindow: v2 = {}} = e2, {styleContent: b2 = {}} = e2, {styleCloseButton: k2 = {}} = e2, {setContext: M2 = f2} = e2, {transitionBg: _2 = Kt} = e2, {transitionBgProps: C2 = {duration: 250}} = e2, {transitionWindow: S2 = _2} = e2, {transitionWindowProps: L2 = C2} = e2;
      const O2 = {closeButton: g2, closeOnEsc: $2, closeOnOuterClick: y2, styleBg: w2, styleWindowWrap: x2, styleWindow: v2, styleContent: b2, styleCloseButton: k2, transitionBg: _2, transitionBgProps: C2, transitionWindow: S2, transitionWindowProps: L2};
      let I2, E2, j2, B2 = {...O2}, A2 = null;
      const z2 = (t3) => Object.keys(t3).reduce((e3, n3) => `${e3}; ${((t4) => t4.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(n3)}: ${t3[n3]}`, ""), P2 = (t3) => !!(t3 && t3.constructor && t3.call && t3.apply), W2 = () => {
      };
      let N2 = W2, R2 = W2, J2 = W2, V2 = W2;
      const H2 = (t3, e3 = {}, r3 = {}, s3 = {}) => {
        n2(1, A2 = function(t4, e4 = {}) {
          return function(n3) {
            return new t4({...n3, props: {...e4, ...n3.props}});
          };
        }(t3, e3)), n2(0, B2 = {...O2, ...r3}), n2(5, N2 = (t4) => {
          s3.onOpen && s3.onOpen(t4), h2("opening");
        }), n2(6, R2 = (t4) => {
          s3.onClose && s3.onClose(t4), h2("closing");
        }), n2(7, J2 = (t4) => {
          s3.onOpened && s3.onOpened(t4), h2("opened");
        }), n2(8, V2 = (t4) => {
          s3.onClosed && s3.onClosed(t4), h2("closed");
        });
      }, K2 = (t3 = {}) => {
        n2(6, R2 = t3.onClose || R2), n2(8, V2 = t3.onClosed || V2), n2(1, A2 = null);
      };
      return M2(m2, {open: H2, close: K2}), t2.$$set = (t3) => {
        "show" in t3 && n2(20, p2 = t3.show), "key" in t3 && n2(21, m2 = t3.key), "closeButton" in t3 && n2(22, g2 = t3.closeButton), "closeOnEsc" in t3 && n2(23, $2 = t3.closeOnEsc), "closeOnOuterClick" in t3 && n2(24, y2 = t3.closeOnOuterClick), "styleBg" in t3 && n2(25, w2 = t3.styleBg), "styleWindowWrap" in t3 && n2(26, x2 = t3.styleWindowWrap), "styleWindow" in t3 && n2(27, v2 = t3.styleWindow), "styleContent" in t3 && n2(28, b2 = t3.styleContent), "styleCloseButton" in t3 && n2(29, k2 = t3.styleCloseButton), "setContext" in t3 && n2(30, M2 = t3.setContext), "transitionBg" in t3 && n2(31, _2 = t3.transitionBg), "transitionBgProps" in t3 && n2(32, C2 = t3.transitionBgProps), "transitionWindow" in t3 && n2(33, S2 = t3.transitionWindow), "transitionWindowProps" in t3 && n2(34, L2 = t3.transitionWindowProps), "$$scope" in t3 && n2(35, d2 = t3.$$scope);
      }, t2.$$.update = () => {
        1 & t2.$$.dirty[0] && n2(9, r2 = z2(B2.styleBg)), 1 & t2.$$.dirty[0] && n2(10, s2 = z2(B2.styleWindowWrap)), 1 & t2.$$.dirty[0] && n2(11, i2 = z2(B2.styleWindow)), 1 & t2.$$.dirty[0] && n2(12, o2 = z2(B2.styleContent)), 1 & t2.$$.dirty[0] && n2(13, c2 = z2(B2.styleCloseButton)), 1 & t2.$$.dirty[0] && n2(14, l2 = B2.transitionBg), 1 & t2.$$.dirty[0] && n2(15, a2 = B2.transitionWindow), 1048576 & t2.$$.dirty[0] && (P2(p2) ? H2(p2) : K2());
      }, [B2, A2, I2, E2, j2, N2, R2, J2, V2, r2, s2, i2, o2, c2, l2, a2, P2, K2, (t3) => {
        if (B2.closeOnEsc && A2 && t3.key === "Escape" && (t3.preventDefault(), K2()), A2 && t3.key === "Tab") {
          const e3 = j2.querySelectorAll("*"), n3 = Array.from(e3).filter((t4) => t4.tabIndex >= 0);
          let r3 = n3.indexOf(document.activeElement);
          r3 === -1 && t3.shiftKey && (r3 = 0), r3 += n3.length + (t3.shiftKey ? -1 : 1), r3 %= n3.length, n3[r3].focus(), t3.preventDefault();
        }
      }, (t3) => {
        !B2.closeOnOuterClick || t3.target !== I2 && t3.target !== E2 || (t3.preventDefault(), K2());
      }, p2, m2, g2, $2, y2, w2, x2, v2, b2, k2, M2, _2, C2, S2, L2, d2, u2, function(t3) {
        main.P[t3 ? "unshift" : "push"](() => {
          j2 = t3, n2(4, j2);
        });
      }, function(t3) {
        main.P[t3 ? "unshift" : "push"](() => {
          E2 = t3, n2(3, E2);
        });
      }, function(t3) {
        main.P[t3 ? "unshift" : "push"](() => {
          I2 = t3, n2(2, I2);
        });
      }];
    }
    class cr extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, or, ir, main.s, {show: 20, key: 21, closeButton: 22, closeOnEsc: 23, closeOnOuterClick: 24, styleBg: 25, styleWindowWrap: 26, styleWindow: 27, styleContent: 28, styleCloseButton: 29, setContext: 30, transitionBg: 31, transitionBgProps: 32, transitionWindow: 33, transitionWindowProps: 34}, [-1, -1]);
      }
    }
    function lr(t2) {
      let e2, n2, r2, s2;
      return e2 = new me({}), r2 = new tr({}), {c() {
        main.v(e2.$$.fragment), n2 = main.a(), main.v(r2.$$.fragment);
      }, m(t3, i2) {
        main.x(e2, t3, i2), main.c(t3, n2, i2), main.x(r2, t3, i2), s2 = true;
      }, i(t3) {
        s2 || (main.y(e2.$$.fragment, t3), main.y(r2.$$.fragment, t3), s2 = true);
      }, o(t3) {
        main.z(e2.$$.fragment, t3), main.z(r2.$$.fragment, t3), s2 = false;
      }, d(t3) {
        main.A(e2, t3), t3 && main.f(n2), main.A(r2, t3);
      }};
    }
    function ar(t2) {
      let e2, n2, r2 = t2[1] && lr();
      return {c() {
        r2 && r2.c(), e2 = main.m();
      }, m(t3, s2) {
        r2 && r2.m(t3, s2), main.c(t3, e2, s2), n2 = true;
      }, p(t3, n3) {
        t3[1] ? r2 ? 2 & n3 && main.y(r2, 1) : (r2 = lr(), r2.c(), main.y(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (main.H(), main.z(r2, 1, 1, () => {
          r2 = null;
        }), main.I());
      }, i(t3) {
        n2 || (main.y(r2), n2 = true);
      }, o(t3) {
        main.z(r2), n2 = false;
      }, d(t3) {
        r2 && r2.d(t3), t3 && main.f(e2);
      }};
    }
    function ur(t2) {
      let e2, n2, r2, s2;
      return n2 = new cr({props: {show: dr, $$slots: {default: [ar]}, $$scope: {ctx: t2}}}), {c() {
        e2 = main.e("div"), main.v(n2.$$.fragment), main.b(e2, "class", "flex w-screen h-screen relative"), main.E(() => t2[4].call(e2));
      }, m(i2, o2) {
        main.c(i2, e2, o2), main.x(n2, e2, null), r2 = main.G(e2, t2[4].bind(e2)), s2 = true;
      }, p(t3, [e3]) {
        const r3 = {};
        32770 & e3 && (r3.$$scope = {dirty: e3, ctx: t3}), n2.$set(r3);
      }, i(t3) {
        s2 || (main.y(n2.$$.fragment, t3), s2 = true);
      }, o(t3) {
        main.z(n2.$$.fragment, t3), s2 = false;
      }, d(t3) {
        t3 && main.f(e2), main.A(n2), r2();
      }};
    }
    let dr = null;
    function hr(t2, e2, n2) {
      let r2, s2, i2, o2, c2, l2, a2;
      main.g(t2, ut, (t3) => n2(2, s2 = t3)), main.g(t2, Q, (t3) => n2(3, i2 = t3)), main.g(t2, bt, (t3) => n2(7, o2 = t3)), main.g(t2, U, (t3) => n2(8, c2 = t3)), main.g(t2, X, (t3) => n2(9, l2 = t3)), main.g(t2, Z, (t3) => n2(10, a2 = t3));
      var u2 = this && this.__awaiter || function(t3, e3, n3, r3) {
        return new (n3 || (n3 = Promise))(function(s3, i3) {
          function o3(t4) {
            try {
              l3(r3.next(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function c3(t4) {
            try {
              l3(r3.throw(t4));
            } catch (t5) {
              i3(t5);
            }
          }
          function l3(t4) {
            var e4;
            t4.done ? s3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
              t5(e4);
            })).then(o3, c3);
          }
          l3((r3 = r3.apply(t3, e3 || [])).next());
        });
      };
      main.R.title = "IZ*ONE Private Mail Viewer";
      let d2 = false;
      const h2 = (t3, e3) => {
        try {
          console.log(`${e3}\uCC28 \uC2DC\uB3C4`), console.log(t3.slice(0, 10));
          const n3 = [];
          for (let e4 = 0; e4 < t3.length; e4 += 2)
            n3.push(t3[e4]);
          return JSON.parse(n3.join(""));
        } catch (n3) {
          if (e3 < 4)
            return t3 = t3.slice(1), h2(t3, e3 + 1);
          throw n3;
        }
      }, f2 = (t3) => u2(void 0, void 0, void 0, function* () {
        try {
          const e3 = yield fetch(t3);
          return yield e3.json();
        } catch (e3) {
          console.log("json \uB85C\uB4DC \uC2E4\uD328");
          const n3 = yield fetch(t3), r3 = yield n3.text();
          return h2(r3, 0);
        }
      });
      let p2;
      return function() {
        return u2(this, void 0, void 0, function* () {
          console.log("\uBA54\uC77C \uB9AC\uC2A4\uD2B8 \uB85C\uB529 \uC2DC\uC791");
          const t3 = yield f2("./pm_list.json");
          console.log("\uBA54\uC77C \uB9AC\uC2A4\uD2B8 \uB85C\uB529 \uC644\uB8CC"), console.log("\uC774\uB984 dict \uB85C\uB529 \uC2DC\uC791"), main.q(bt, o2 = yield f2("./member_name.json"), o2), console.log("\uC774\uB984 dict \uB85C\uB529 \uB05D"), console.log(o2);
          const e3 = yield fetch("./mail_to_num_dict.json"), n3 = yield e3.json();
          main.q(U, c2 = t3.map((t4, e4) => {
            t4.id == "m20731" && main.q(X, l2 = t4, l2), t4.nick = t4.member;
            const r3 = o2[t4.nick];
            if (t4.member = kt[r3], !t4.member && e4 < 5700) {
              const e5 = n3[t4.id];
              main.q(bt, o2[t4.nick] = e5, o2), t4.member = kt[e5], console.log(t4.nick, t4.member);
            }
            return t4;
          }), c2), console.log("all_tag_dict", a2);
          let u3 = 0;
          const d3 = a2.get("\uD63C\uB2E4 \uD788\uD1A0\uBBF8");
          if (s2.has(d3) && (c2.forEach((t4) => {
            const e4 = a2.get(t4.member), n4 = s2.get(e4);
            n4 ? n4.add(t4.id) : (console.log(t4.id, t4.nick), u3 += 1);
          }), ut.set(s2)), console.log("\uB204\uB77D", u3), !a2.has("\uC0DD\uC77C")) {
            const t4 = {value: "\uC0DD\uC77C", color: "LightPink"};
            a2.set(t4.value, t4), Z.set(a2), s2.set(t4, new Set()), c2.map((e4) => {
              e4.id.slice(0, 1) == "b" && r2(t4, e4);
            }), ut.set(s2), Q.set(i2);
          }
        });
      }().then(() => {
        n2(1, d2 = true);
      }), t2.$$.update = () => {
        12 & t2.$$.dirty && (r2 = (t3, e3) => {
          s2.get(t3).add(e3.id), i2.has(e3.id) ? i2.get(e3.id).add(t3) : i2.set(e3.id, new Set([t3]));
        }), 1 & t2.$$.dirty && rt.set(p2 > 800);
      }, [p2, d2, s2, i2, function() {
        p2 = this.clientWidth, n2(0, p2);
      }];
    }
    class index_1280be85_default extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, hr, ur, main.s, {});
      }
    }
  });

  // dist/build/_layout-8f861c25.js
  var require_layout_8f861c25 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_8f861c25_default
    });
    const main = __toModule(require_main());
    function c(s2) {
      let t2;
      const e2 = s2[1].default, c2 = main.J(e2, s2, s2[0], null);
      return {c() {
        c2 && c2.c();
      }, m(s3, e3) {
        c2 && c2.m(s3, e3), t2 = true;
      }, p(s3, [t3]) {
        c2 && c2.p && 1 & t3 && main.K(c2, e2, s3, s3[0], t3, null, null);
      }, i(s3) {
        t2 || (main.y(c2, s3), t2 = true);
      }, o(s3) {
        main.z(c2, s3), t2 = false;
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
    class layout_8f861c25_default extends main.S {
      constructor(s2) {
        super(), main.i(this, s2, u, c, main.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => Pt,
      B: () => x,
      C: () => Q,
      D: () => e,
      E: () => rt,
      F: () => $t,
      G: () => N,
      H: () => dt,
      I: () => ht,
      J: () => f,
      K: () => d,
      L: () => C,
      M: () => S,
      N: () => W,
      O: () => J,
      P: () => Z,
      Q: () => G,
      R: () => le,
      S: () => Et,
      a: () => E,
      b: () => R,
      c: () => _,
      d: () => b,
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
      o: () => L,
      p: () => I,
      q: () => h,
      r: () => s,
      s: () => a,
      t: () => k,
      u: () => ae,
      v: () => vt,
      w: () => Bt,
      x: () => xt,
      y: () => mt,
      z: () => gt
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
    function f(t2, e2, n2, o2) {
      if (t2) {
        const r2 = p(t2, e2, n2, o2);
        return t2[0](r2);
      }
    }
    function p(t2, e2, o2, r2) {
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
        const r3 = p(e2, n2, o2, i2);
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
    function w(t2) {
      $.forEach((e2) => {
        e2.c(t2) || ($.delete(e2), e2.f());
      }), $.size !== 0 && y(w);
    }
    function b(t2, e2) {
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
    function R(t2, e2, n2) {
      n2 == null ? t2.removeAttribute(e2) : t2.getAttribute(e2) !== n2 && t2.setAttribute(e2, n2);
    }
    function S(t2) {
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
      }), b(t2, n2), () => {
        (o2 || r2 && n2.contentWindow) && r2(), v(n2);
      };
    }
    function C(t2, e2, n2) {
      t2.classList[n2 ? "add" : "remove"](e2);
    }
    function T(t2, e2) {
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
}`, f2 = `__svelte_${function(t3) {
        let e3 = 5381, n3 = t3.length;
        for (; n3--; )
          e3 = (e3 << 5) - e3 ^ t3.charCodeAt(n3);
        return e3 >>> 0;
      }(u2)}_${a2}`, p2 = t2.ownerDocument;
      q.add(p2);
      const d2 = p2.__svelte_stylesheet || (p2.__svelte_stylesheet = p2.head.appendChild(P("style")).sheet), h2 = p2.__svelte_rules || (p2.__svelte_rules = {});
      h2[f2] || (h2[f2] = true, d2.insertRule(`@keyframes ${f2} ${u2}`, d2.cssRules.length));
      const m2 = t2.style.animation || "";
      return t2.style.animation = `${m2 ? `${m2}, ` : ""}${f2} ${o2}ms linear ${r2}ms 1 both`, U += 1, f2;
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
          const r2 = T(e2, n2);
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
      t2.dispatchEvent(T(`${e2 ? "intro" : "outro"}${n2}`));
    }
    const ft = new Set();
    let pt;
    function dt() {
      pt = {r: 0, c: [], p: pt};
    }
    function ht() {
      pt.r || s(pt.c), pt = pt.p;
    }
    function mt(t2, e2) {
      t2 && t2.i && (ft.delete(t2), t2.i(e2));
    }
    function gt(t2, e2, n2, o2) {
      if (t2 && t2.o) {
        if (ft.has(t2))
          return;
        ft.add(t2), pt.c.push(() => {
          ft.delete(t2), o2 && (n2 && t2.d(1), o2());
        }), t2.o(e2);
      }
    }
    const yt = {duration: 0};
    function $t(n2, o2, r2, a2) {
      let c2 = o2(n2, r2), l2 = a2 ? 0 : 1, u2 = null, f2 = null, p2 = null;
      function d2() {
        p2 && D(n2, p2);
      }
      function h2(t2, e2) {
        const n3 = t2.b - l2;
        return e2 *= Math.abs(n3), {a: l2, b: t2.b, d: n3, duration: e2, start: t2.start, end: t2.start + e2, group: t2.group};
      }
      function m2(o3) {
        const {delay: r3 = 0, duration: i2 = 300, easing: a3 = e, tick: m3 = t, css: b2} = c2 || yt, _2 = {start: g() + r3, b: o3};
        o3 || (_2.group = pt, pt.r += 1), u2 || f2 ? f2 = _2 : (b2 && (d2(), p2 = z(n2, l2, o3, i2, r3, a3, b2)), o3 && m3(0, 1), u2 = h2(_2, i2), rt(() => ut(n2, o3, "start")), function(t2) {
          let e2;
          $.size === 0 && y(w), new Promise((n3) => {
            $.add(e2 = {c: t2, f: n3});
          });
        }((t2) => {
          if (f2 && t2 > f2.start && (u2 = h2(f2, i2), f2 = null, ut(n2, u2.b, "start"), b2 && (d2(), p2 = z(n2, l2, u2.b, u2.duration, 0, a3, c2.css))), u2) {
            if (t2 >= u2.end)
              m3(l2 = u2.b, 1 - l2), ut(n2, u2.b, "end"), f2 || (u2.b ? d2() : --u2.group.r || s(u2.group.c)), u2 = null;
            else if (t2 >= u2.start) {
              const e2 = t2 - u2.start;
              l2 = u2.a + u2.d * a3(e2 / u2.duration), m3(l2, 1 - l2);
            }
          }
          return !(!u2 && !f2);
        }));
      }
      return {run(t2) {
        i(c2) ? (lt || (lt = Promise.resolve(), lt.then(() => {
          lt = null;
        })), lt).then(() => {
          c2 = c2(), m2(t2);
        }) : m2(t2);
      }, end() {
        d2(), u2 = f2 = null;
      }};
    }
    function wt(t2, e2) {
      t2.d(1), e2.delete(t2.key);
    }
    function bt(t2, e2) {
      gt(t2, 1, 1, () => {
        e2.delete(t2.key);
      });
    }
    function _t(t2, e2, n2, o2, r2, s2, i2, a2, c2, l2, u2, f2) {
      let p2 = t2.length, d2 = s2.length, h2 = p2;
      const m2 = {};
      for (; h2--; )
        m2[t2[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t3 = f2(r2, s2, h2), a3 = n2(t3);
        let c3 = i2.get(a3);
        c3 ? o2 && c3.p(t3, e2) : (c3 = l2(a3, t3), c3.c()), y2.set(a3, g2[h2] = c3), a3 in m2 && $2.set(a3, Math.abs(h2 - m2[a3]));
      }
      const w2 = new Set(), b2 = new Set();
      function _2(t3) {
        mt(t3, 1), t3.m(a2, u2), i2.set(t3.key, t3), u2 = t3.first, d2--;
      }
      for (; p2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t2[p2 - 1], o3 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, p2--, d2--) : y2.has(r3) ? !i2.has(o3) || w2.has(o3) ? _2(e3) : b2.has(r3) ? p2-- : $2.get(o3) > $2.get(r3) ? (b2.add(o3), _2(e3)) : (w2.add(r3), p2--) : (c2(n3, i2), p2--);
      }
      for (; p2--; ) {
        const e3 = t2[p2];
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
      const f2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t, not_equal: a2, bound: r(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: r(), dirty: l2, skip_bound: false};
      let p2 = false;
      if (f2.ctx = o2 ? o2(e2, n2.props || {}, (t2, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return f2.ctx && a2(f2.ctx[t2], f2.ctx[t2] = r2) && (!f2.skip_bound && f2.bound[t2] && f2.bound[t2](r2), p2 && function(t3, e3) {
          t3.$$.dirty[0] === -1 && (V.push(t3), nt(), t3.$$.dirty.fill(0)), t3.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t2)), n3;
      }) : [], f2.update(), p2 = true, s(f2.before_update), f2.fragment = !!i2 && i2(f2.ctx), n2.target) {
        if (n2.hydrate) {
          const t2 = function(t3) {
            return Array.from(t3.childNodes);
          }(n2.target);
          f2.fragment && f2.fragment.l(t2), t2.forEach(v);
        } else
          f2.fragment && f2.fragment.c();
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
    function Rt(t2) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      St(t2), function() {
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
    function St(t2) {
      t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", St(t2.parentElement));
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
      const n2 = t2[2].default, o2 = f(n2, t2, t2[1], null);
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
    function Ct(t2, e2, n2) {
      let {$$slots: o2 = {}, $$scope: r2} = e2, {scoped: s2 = {}} = e2;
      return t2.$$set = (t3) => {
        "scoped" in t3 && n2(0, s2 = t3.scoped), "$$scope" in t3 && n2(1, r2 = t3.$$scope);
      }, [s2, r2, o2];
    }
    class Tt extends Et {
      constructor(t2) {
        super(), kt(this, t2, Ct, Nt, a, {scoped: 0});
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
        let f2 = 0, p2 = t;
        const d2 = () => {
          if (f2)
            return;
          p2();
          const o4 = n2(r2 ? u2[0] : u2, e3);
          l2 ? e3(o4) : p2 = i(o4) ? o4 : t;
        }, h2 = a2.map((t2, e4) => c(t2, (t3) => {
          u2[e4] = t3, f2 &= ~(1 << e4), o3 && d2();
        }, () => {
          f2 |= 1 << e4;
        }));
        return o3 = true, d2(), function() {
          s(h2), p2();
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
        n2 = P("iframe"), n2.src !== (o2 = e2[1].url) && R(n2, "src", o2), R(n2, "frameborder", "0"), R(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t3, e3) {
        _(t3, n2, e3);
      }, p(t3, r2) {
        e2 = t3, 1 & r2 && n2.src !== (o2 = e2[1].url) && R(n2, "src", o2);
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
        R(n2, "id", "__routify_iframes"), A(n2, "display", "none");
      }, m(t2, e3) {
        _(t2, n2, e3);
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].m(n2, null);
      }, p(t2, [e3]) {
        1 & e3 && (s2 = t2[0], o2 = _t(o2, e3, i2, 1, t2, s2, r2, n2, wt, Vt, null, Qt));
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
    const ae = {subscribe: (t2) => Ut([oe(), zt, Dt], (t3) => function(t4, e2, n2) {
      return function(o2, r2 = {}, s2) {
        const {component: i2} = t4, a2 = Object.assign({}, e2.params, i2.params);
        let c2 = o2 && o2.nodeType && o2;
        c2 && (o2 = o2.getAttribute("href")), o2 = o2 ? f2(o2) : i2.shortPath;
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
        function f2(t5) {
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
    const ce = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e2) => [t2, (ce.getLongest(ce.templates, t2) || ((t3) => t3))(e2)]}, {name: "createMeta", condition: () => true, action(t2, e2) {
      ce.writeMeta(t2, e2);
    }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e2) {
      ce.writeMeta(`og:${t2}`, e2);
    }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e2) {
      document.title = e2;
    }}], getLongest(t2, e2) {
      const n2 = t2[e2];
      if (n2) {
        const o2 = l(zt).path;
        return n2[Object.keys(t2[e2]).filter((t3) => o2.includes(t3)).sort((t3, e3) => e3.length - t3.length)[0]];
      }
    }, writeMeta(t2, e2) {
      const n2 = document.getElementsByTagName("head")[0], o2 = t2.match(/(.+)\:/), r2 = o2 && o2[1] || "plain", {propField: s2, valueField: i2} = le.services[r2] || le.services.plain, a2 = document.querySelector(`meta[${s2}='${t2}']`);
      a2 && a2.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s2, t2), c2.setAttribute(i2, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t2, e2) {
      ce.plugins.forEach((n2) => {
        n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
      });
    }, clear() {
      const t2 = document.querySelector("meta");
      t2 && t2.remove();
    }, template(t2, e2) {
      const n2 = ce.getOrigin();
      ce.templates[t2] = ce.templates[t2] || {}, ce.templates[t2][n2] = e2;
    }, update() {
      Object.keys(ce.props).forEach((t2) => {
        let e2 = ce.getLongest(ce.props, t2);
        ce.plugins.forEach((n2) => {
          n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
        });
      });
    }, batchedUpdate() {
      ce._pendingUpdate || (ce._pendingUpdate = true, setTimeout(() => {
        ce._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t2 = oe();
      return t2 && l(t2).path || "/";
    }, _pendingUpdate: false};
    const le = new Proxy(ce, {set(t2, e2, n2, o2) {
      const {props: r2, getOrigin: s2} = t2;
      return Reflect.has(t2, e2) ? Reflect.set(t2, e2, n2, o2) : (r2[e2] = r2[e2] || {}, r2[e2][s2()] = n2), window.routify.appLoaded && t2.batchedUpdate(), true;
    }});
    function ue(t2, e2, n2) {
      const o2 = t2.slice();
      return o2[18] = e2[n2].component, o2[19] = e2[n2].componentFile, o2[2] = e2[n2].decorator, o2[1] = e2[n2].nodes, o2;
    }
    function fe(t2) {
      let e2, n2, o2 = [], r2 = new Map(), s2 = [t2[4]];
      const i2 = (t3) => function({meta: t4, path: e3, param: n3, params: o3}) {
        return JSON.stringify({path: e3, param: (t4["param-is-page"] || t4["slug-is-page"]) && n3, queryParams: t4["query-params-is-page"] && o3});
      }(t3[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = ue(t2, s2, e3), a2 = i2(n3);
        r2.set(a2, o2[e3] = me(a2, n3));
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
        4194365 & n3 && (s2 = [t3[4]], dt(), o2 = _t(o2, n3, i2, 1, t3, s2, r2, e2.parentNode, bt, me, e2, ue), ht());
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
    function pe(t2) {
      let e2, n2;
      return e2 = new $e({props: {decorator: t2[2], nodes: [...t2[1]], scoped: {...t2[0], ...t2[22]}}}), {c() {
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
    function de(t2) {
      let e2, n2, o2 = t2[18] && t2[1].length && pe(t2);
      return {c() {
        o2 && o2.c(), e2 = O();
      }, m(t3, r2) {
        o2 && o2.m(t3, r2), _(t3, e2, r2), n2 = true;
      }, p(t3, n3) {
        t3[18] && t3[1].length ? o2 ? (o2.p(t3, n3), 16 & n3 && mt(o2, 1)) : (o2 = pe(t3), o2.c(), mt(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (dt(), gt(o2, 1, 1, () => {
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
    function he(t2) {
      let e2, o2, r2;
      const s2 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[3].param || {}];
      var i2 = t2[19];
      function a2(t3) {
        let e3 = {$$slots: {default: [de, ({scoped: t4, decorator: e4}) => ({22: t4, 2: e4}), ({scoped: t4, decorator: e4}) => (t4 ? 4194304 : 0) | (e4 ? 4 : 0)]}, $$scope: {ctx: t3}};
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
    function me(t2, e2) {
      let n2, o2, r2, s2;
      var i2 = e2[2];
      function a2(t3) {
        return {props: {scoped: t3[0], $$slots: {default: [he]}, $$scope: {ctx: t3}}};
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
    function ge(e2) {
      let n2, o2, r2, s2, a2, c2 = e2[4] && fe(e2);
      return {c() {
        c2 && c2.c(), n2 = E(), o2 = P("span");
      }, m(l2, u2) {
        var f2;
        c2 && c2.m(l2, u2), _(l2, n2, u2), _(l2, o2, u2), r2 = true, s2 || (f2 = e2[8].call(null, o2), a2 = f2 && i(f2.destroy) ? f2.destroy : t, s2 = true);
      }, p(t2, [e3]) {
        t2[4] ? c2 ? (c2.p(t2, e3), 16 & e3 && mt(c2, 1)) : (c2 = fe(t2), c2.c(), mt(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (dt(), gt(c2, 1, 1, () => {
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
    function ye(t2, e2, n2) {
      let o2, r2, s2, i2;
      u(t2, zt, (t3) => n2(14, s2 = t3));
      let a2, {nodes: c2 = []} = e2, {scoped: l2 = {}} = e2, {isRoot: f2 = false} = e2, {decorator: p2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = Bt(null);
      u(t2, g2, (t3) => n2(4, i2 = t3));
      const y2 = Q("routify");
      u(t2, y2, (t3) => n2(10, r2 = t3));
      function $2(t3) {
        n2(5, m2 = {...l2}), h2.length === 0 && async function() {
          await ot(), Rt(a2);
          const t4 = i2.component.path === s2.path;
          !window.routify.stopAutoReady && t4 && async function({page: t5, metatags: e4, afterPageLoad: n3}) {
            const {path: o3} = t5, {options: r3} = At(), s3 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t5.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o3, prefetchId: s3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: i2.component, metatags: le, afterPageLoad: re});
        }();
        const e3 = {nodes: h2, decorator: p2 || Tt, layout: d2.isLayout ? d2 : o2 && o2.layout, component: d2, route: s2, componentFile: t3, parentNode: a2 || o2 && o2.parentNode};
        g2.set(e3), f2 && Ht.set(e3);
      }
      return G("routify", g2), t2.$$set = (t3) => {
        "nodes" in t3 && n2(1, c2 = t3.nodes), "scoped" in t3 && n2(0, l2 = t3.scoped), "isRoot" in t3 && n2(9, f2 = t3.isRoot), "decorator" in t3 && n2(2, p2 = t3.decorator);
      }, t2.$$.update = () => {
        1024 & t2.$$.dirty && (o2 = r2), 2 & t2.$$.dirty && n2(3, [d2, ...h2] = c2, d2), 8 & t2.$$.dirty && function(t3) {
          let e3 = t3.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t2.$$.dirty && i2 && It(i2, ot);
      }, [l2, c2, p2, d2, i2, m2, g2, y2, (t3) => a2 = t3.parentNode, f2, r2];
    }
    class $e extends Et {
      constructor(t2) {
        super(), kt(this, t2, ye, ge, a, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function we(t2, e2) {
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
            return await _e(a2, o3) ? (history[t4 + "Native"].apply(this, [e4, n4, o3]), dispatchEvent(a2)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: be, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n4) => {
          e3 ? e3 = false : await _e(n4, At().fullpath) ? t3() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t4) => addEventListener(...t4));
        return () => {
          Object.entries(n3).forEach((t4) => removeEventListener(...t4));
        };
      }(o2);
      return {updatePage: o2, destroy: r2};
    }
    function be(t2) {
      const e2 = t2.target.closest("a"), n2 = e2 && e2.href;
      if (t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o2 = new URL(n2), r2 = o2.pathname + o2.search + o2.hash;
      t2.preventDefault(), history.pushState({}, "", r2);
    }
    async function _e(t2, e2) {
      const n2 = Jt(e2).api;
      for (const o2 of se._hooks.filter(Boolean)) {
        if (!await o2(t2, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function ve(t2) {
      let e2, n2;
      return e2 = new $e({props: {nodes: t2[0], isRoot: true}}), {c() {
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
    function xe(t2) {
      let e2, n2, o2, r2 = t2[0] && t2[1] !== null && ve(t2);
      return n2 = new ne({}), {c() {
        r2 && r2.c(), e2 = E(), vt(n2.$$.fragment);
      }, m(t3, s2) {
        r2 && r2.m(t3, s2), _(t3, e2, s2), xt(n2, t3, s2), o2 = true;
      }, p(t3, [n3]) {
        t3[0] && t3[1] !== null ? r2 ? (r2.p(t3, n3), 3 & n3 && mt(r2, 1)) : (r2 = ve(t3), r2.c(), mt(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (dt(), gt(r2, 1, 1, () => {
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
    function Pe(t2, e2, n2) {
      let o2;
      u(t2, zt, (t3) => n2(1, o2 = t3));
      let r2, s2, {routes: i2} = e2, {config: a2 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(Ot, a2);
      G("routifyupdatepage", (...t3) => s2 && s2.updatePage(...t3));
      const c2 = (t3) => n2(0, r2 = t3), l2 = () => {
        s2 && (s2.destroy(), s2 = null);
      };
      let f2 = null;
      var p2;
      return p2 = l2, K().$$.on_destroy.push(p2), t2.$$set = (t3) => {
        "routes" in t3 && n2(2, i2 = t3.routes), "config" in t3 && n2(3, a2 = t3.config);
      }, t2.$$.update = () => {
        4 & t2.$$.dirty && i2 && (clearTimeout(f2), f2 = setTimeout(() => {
          l2(), s2 = we(i2, c2), Dt.set(i2), s2.updatePage();
        }));
      }, [r2, o2, i2, a2];
    }
    class ke extends Et {
      constructor(t2) {
        super(), kt(this, t2, Pe, xe, a, {routes: 2, config: 3});
      }
    }
    function Ee(t2) {
      const e2 = async function(e3) {
        return await Oe(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return je(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function Oe(t2, e2) {
      const n2 = await t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = await Promise.all(o2.children.map(async (n4) => Oe(t2, {state: e2.state, scope: Re(e2.scope || {}), parent: e2.file, file: await n4})));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function je(t2, e2) {
      const n2 = t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = o2.children.map((n4) => je(t2, {state: e2.state, scope: Re(e2.scope || {}), parent: e2.file, file: n4}));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Re(t2) {
      return JSON.parse(JSON.stringify(t2));
    }
    const Se = Ee(({file: t2}) => {
      (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(jt, "([^/]+)") + n2}`;
      })(t2.path, t2.isFallback));
    });
    const Le = Ee(({file: t2}) => {
      t2.paramKeys = Lt(t2.path);
    });
    const Ie = Ee(({file: t2}) => {
      t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
    });
    const Ae = Ee(({file: t2}) => {
      t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
    });
    const Fe = Ee(({file: t2}) => {
      const e2 = t2, n2 = t2.meta && t2.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
    });
    const Me = Ee((t2) => {
      const {file: e2} = t2, {isFallback: n2, meta: o2} = e2, r2 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i2 = o2.index || o2.index === 0, a2 = o2.index === false;
      e2.isIndexable = i2 || !n2 && !r2 && !s2 && !a2, e2.isNonIndexable = !e2.isIndexable;
    });
    const Ne = Ee(({file: t2, parent: e2}) => {
      Object.defineProperty(t2, "parent", {get: () => e2}), Object.defineProperty(t2, "nextSibling", {get: () => Te(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => Te(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => Ce(e2)});
    });
    function Ce(t2, e2 = []) {
      return t2 && (e2.unshift(t2), Ce(t2.parent, e2)), e2;
    }
    function Te(t2, e2) {
      if (!t2.root) {
        const n2 = t2.parent.children.filter((t3) => t3.isIndexable), o2 = n2.indexOf(t2);
        return n2[o2 + e2];
      }
    }
    const qe = Ee(({file: t2, parent: e2}) => {
      t2.isIndex && Object.defineProperty(e2, "index", {get: () => t2});
    });
    const Be = Ee(({file: t2, scope: e2}) => {
      function n2(t3) {
        const {parent: e3} = t3, o2 = e3 && e3.component && e3, r2 = o2 && o2.isReset, s2 = e3 && !r2 && n2(e3) || [];
        return o2 && s2.push(o2), s2;
      }
      Object.defineProperty(t2, "layouts", {get: () => n2(t2)});
    });
    const Ue = Ee(({file: t2}) => {
      const e2 = t2.root ? function() {
      } : t2.children ? (t2.isPage, function() {
      }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
      });
      Object.setPrototypeOf(t2, e2.prototype);
    });
    var ze = Object.freeze({__proto__: null, setRegex: Se, setParamKeys: Le, setShortPath: Ie, setRank: Ae, addMetaChildren: Fe, setIsIndexable: Me, assignRelations: Ne, assignIndex: qe, assignLayout: Be, createFlatList: (t2) => {
      Ee((t3) => {
        (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
      }).sync(t2), t2.routes.sort((t3, e2) => t3.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: Ue});
    const De = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function He(t2) {
      return Object.entries(De).forEach(([e2, n2]) => {
        t2[e2] === void 0 && (t2[e2] = n2);
      }), t2.children && (t2.children = t2.children.map(He)), t2;
    }
    const Ke = Ee(({file: t2}) => {
      t2.api = new We(t2);
    });
    class We {
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
        return Je(this, 1);
      }
      get prev() {
        return Je(this, -1);
      }
      async preload() {
        const t2 = [...this.__file.layouts, this.__file].map((t3) => t3.component());
        await Promise.all(t2);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function Je(t2, e2) {
      if (!t2.__file.root) {
        const n2 = t2.parent.children.indexOf(t2);
        return t2.parent.children[n2 + e2];
      }
    }
    const Ge = {...ze, restoreDefaults: ({tree: t2}) => He(t2), assignAPI: Ke};
    const Qe = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_9f3ddefc())).then((t2) => t2.default)}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_1280be85())).then((t2) => t2.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_8f861c25())).then((t2) => t2.default)};
    const {tree: Ve, routes: Ze} = function(t2) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t2, routes: []};
      for (let t3 of e2) {
        (Ge[t3].sync || Ge[t3])(n2);
      }
      return n2;
    }(Qe);
    function Xe(e2) {
      let n2, o2;
      return n2 = new ke({props: {routes: Ze}}), {c() {
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
        super(), kt(this, t2, null, Xe, a, {});
      }
    }, {target: document.body}, "routify-app");
  });
  require_main();
})();
