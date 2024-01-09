import f, { useState as Se, useCallback as it, useEffect as ot } from "react";
const Jt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M19.5%2012h-15m0%200l6.75%206.75M4.5%2012l6.75-6.75'%20/%3e%3c/svg%3e", Js = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M4.5%2012h15m0%200l-6.75-6.75M19.5%2012l-6.75%206.75'%20/%3e%3c/svg%3e";
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Qt;
function l() {
  return Qt.apply(null, arguments);
}
function Qs(e) {
  Qt = e;
}
function $(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function fe(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function D(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function kt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (D(e, t))
      return !1;
  return !0;
}
function C(e) {
  return e === void 0;
}
function ae(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Pe(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Xt(e, t) {
  var s = [], r, n = e.length;
  for (r = 0; r < n; ++r)
    s.push(t(e[r], r));
  return s;
}
function le(e, t) {
  for (var s in t)
    D(t, s) && (e[s] = t[s]);
  return D(t, "toString") && (e.toString = t.toString), D(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Q(e, t, s, r) {
  return ps(e, t, s, r, !0).utc();
}
function Xs() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function m(e) {
  return e._pf == null && (e._pf = Xs()), e._pf;
}
var ht;
Array.prototype.some ? ht = Array.prototype.some : ht = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Dt(e) {
  if (e._isValid == null) {
    var t = m(e), s = ht.call(t.parsedDateParts, function(n) {
      return n != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function Ze(e) {
  var t = Q(NaN);
  return e != null ? le(m(t), e) : m(t).userInvalidated = !0, t;
}
var jt = l.momentProperties = [], lt = !1;
function Mt(e, t) {
  var s, r, n, a = jt.length;
  if (C(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), C(t._i) || (e._i = t._i), C(t._f) || (e._f = t._f), C(t._l) || (e._l = t._l), C(t._strict) || (e._strict = t._strict), C(t._tzm) || (e._tzm = t._tzm), C(t._isUTC) || (e._isUTC = t._isUTC), C(t._offset) || (e._offset = t._offset), C(t._pf) || (e._pf = m(t)), C(t._locale) || (e._locale = t._locale), a > 0)
    for (s = 0; s < a; s++)
      r = jt[s], n = t[r], C(n) || (e[r] = n);
  return e;
}
function Re(e) {
  Mt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), lt === !1 && (lt = !0, l.updateOffset(this), lt = !1);
}
function Z(e) {
  return e instanceof Re || e != null && e._isAMomentObject != null;
}
function Kt(e) {
  l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function V(e, t) {
  var s = !0;
  return le(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var r = [], n, a, i, d = arguments.length;
      for (a = 0; a < d; a++) {
        if (n = "", typeof arguments[a] == "object") {
          n += `
[` + a + "] ";
          for (i in arguments[0])
            D(arguments[0], i) && (n += i + ": " + arguments[0][i] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[a];
        r.push(n);
      }
      Kt(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var zt = {};
function es(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), zt[e] || (Kt(t), zt[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function X(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ks(e) {
  var t, s;
  for (s in e)
    D(e, s) && (t = e[s], X(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ft(e, t) {
  var s = le({}, e), r;
  for (r in t)
    D(t, r) && (fe(e[r]) && fe(t[r]) ? (s[r] = {}, le(s[r], e[r]), le(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    D(e, r) && !D(t, r) && fe(e[r]) && (s[r] = le({}, s[r]));
  return s;
}
function pt(e) {
  e != null && this.set(e);
}
var mt;
Object.keys ? mt = Object.keys : mt = function(e) {
  var t, s = [];
  for (t in e)
    D(e, t) && s.push(t);
  return s;
};
var er = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function tr(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return X(r) ? r.call(t, s) : r;
}
function J(e, t, s) {
  var r = "" + Math.abs(e), n = t - r.length, a = e >= 0;
  return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + r;
}
var vt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Le = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ut = {}, ke = {};
function c(e, t, s, r) {
  var n = r;
  typeof r == "string" && (n = function() {
    return this[r]();
  }), e && (ke[e] = n), t && (ke[t[0]] = function() {
    return J(n.apply(this, arguments), t[1], t[2]);
  }), s && (ke[s] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function sr(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function rr(e) {
  var t = e.match(vt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    ke[t[s]] ? t[s] = ke[t[s]] : t[s] = sr(t[s]);
  return function(n) {
    var a = "", i;
    for (i = 0; i < r; i++)
      a += X(t[i]) ? t[i].call(n, e) : t[i];
    return a;
  };
}
function Ce(e, t) {
  return e.isValid() ? (t = ts(t, e.localeData()), ut[t] = ut[t] || rr(t), ut[t](e)) : e.localeData().invalidDate();
}
function ts(e, t) {
  var s = 5;
  function r(n) {
    return t.longDateFormat(n) || n;
  }
  for (Le.lastIndex = 0; s >= 0 && Le.test(e); )
    e = e.replace(
      Le,
      r
    ), Le.lastIndex = 0, s -= 1;
  return e;
}
var nr = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function ar(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(vt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var ir = "Invalid date";
function or() {
  return this._invalidDate;
}
var lr = "%d", ur = /\d{1,2}/;
function dr(e) {
  return this._ordinal.replace("%d", e);
}
var cr = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function hr(e, t, s, r) {
  var n = this._relativeTime[s];
  return X(n) ? n(e, t, s, r) : n.replace(/%d/i, e);
}
function fr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return X(s) ? s(t) : s.replace(/%s/i, t);
}
var be = {};
function E(e, t) {
  var s = e.toLowerCase();
  be[s] = be[s + "s"] = be[t] = e;
}
function G(e) {
  return typeof e == "string" ? be[e] || be[e.toLowerCase()] : void 0;
}
function St(e) {
  var t = {}, s, r;
  for (r in e)
    D(e, r) && (s = G(r), s && (t[s] = e[r]));
  return t;
}
var ss = {};
function L(e, t) {
  ss[e] = t;
}
function mr(e) {
  var t = [], s;
  for (s in e)
    D(e, s) && t.push({ unit: s, priority: ss[s] });
  return t.sort(function(r, n) {
    return r.priority - n.priority;
  }), t;
}
function Be(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function H(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function y(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = H(t)), s;
}
function pe(e, t) {
  return function(s) {
    return s != null ? (rs(this, e, s), l.updateOffset(this, t), this) : He(this, e);
  };
}
function He(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function rs(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && Be(e.year()) && e.month() === 1 && e.date() === 29 ? (s = y(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    et(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function _r(e) {
  return e = G(e), X(this[e]) ? this[e]() : this;
}
function yr(e, t) {
  if (typeof e == "object") {
    e = St(e);
    var s = mr(e), r, n = s.length;
    for (r = 0; r < n; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = G(e), X(this[e]))
    return this[e](t);
  return this;
}
var ns = /\d/, A = /\d\d/, as = /\d{3}/, Yt = /\d{4}/, qe = /[+-]?\d{6}/, S = /\d\d?/, is = /\d\d\d\d?/, os = /\d\d\d\d\d\d?/, Je = /\d{1,3}/, Ot = /\d{1,4}/, Qe = /[+-]?\d{1,6}/, ve = /\d+/, Xe = /[+-]?\d+/, gr = /Z|[+-]\d\d:?\d\d/gi, Ke = /Z|[+-]\d\d(?::?\d\d)?/gi, wr = /[+-]?\d+(\.\d{1,3})?/, Fe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ve;
Ve = {};
function u(e, t, s) {
  Ve[e] = X(t) ? t : function(r, n) {
    return r && s ? s : t;
  };
}
function kr(e, t) {
  return D(Ve, e) ? Ve[e](t._strict, t._locale) : new RegExp(Dr(e));
}
function Dr(e) {
  return U(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, n, a) {
        return s || r || n || a;
      }
    )
  );
}
function U(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var _t = {};
function p(e, t) {
  var s, r = t, n;
  for (typeof e == "string" && (e = [e]), ae(t) && (r = function(a, i) {
    i[t] = y(a);
  }), n = e.length, s = 0; s < n; s++)
    _t[e[s]] = r;
}
function Ee(e, t) {
  p(e, function(s, r, n, a) {
    n._w = n._w || {}, t(s, n._w, n, a);
  });
}
function Mr(e, t, s) {
  t != null && D(_t, e) && _t[e](t, s._a, s, e);
}
var F = 0, se = 1, q = 2, N = 3, z = 4, re = 5, he = 6, pr = 7, vr = 8;
function Sr(e, t) {
  return (e % t + t) % t;
}
var O;
Array.prototype.indexOf ? O = Array.prototype.indexOf : O = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function et(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Sr(t, 12);
  return e += (t - s) / 12, s === 1 ? Be(e) ? 29 : 28 : 31 - s % 7 % 2;
}
c("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
c("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
c("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
E("month", "M");
L("month", 8);
u("M", S);
u("MM", S, A);
u("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
u("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
p(["M", "MM"], function(e, t) {
  t[se] = y(e) - 1;
});
p(["MMM", "MMMM"], function(e, t, s, r) {
  var n = s._locale.monthsParse(e, r, s._strict);
  n != null ? t[se] = n : m(s).invalidMonth = e;
});
var Yr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ls = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), us = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Or = Fe, br = Fe;
function Tr(e, t) {
  return e ? $(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || us).test(t) ? "format" : "standalone"][e.month()] : $(this._months) ? this._months : this._months.standalone;
}
function xr(e, t) {
  return e ? $(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[us.test(t) ? "format" : "standalone"][e.month()] : $(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Nr(e, t, s) {
  var r, n, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      a = Q([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (n = O.call(this._shortMonthsParse, i), n !== -1 ? n : null) : (n = O.call(this._longMonthsParse, i), n !== -1 ? n : null) : t === "MMM" ? (n = O.call(this._shortMonthsParse, i), n !== -1 ? n : (n = O.call(this._longMonthsParse, i), n !== -1 ? n : null)) : (n = O.call(this._longMonthsParse, i), n !== -1 ? n : (n = O.call(this._shortMonthsParse, i), n !== -1 ? n : null));
}
function Wr(e, t, s) {
  var r, n, a;
  if (this._monthsParseExact)
    return Nr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (n = Q([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function ds(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = y(t);
    else if (t = e.localeData().monthsParse(t), !ae(t))
      return e;
  }
  return s = Math.min(e.date(), et(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function cs(e) {
  return e != null ? (ds(this, e), l.updateOffset(this, !0), this) : He(this, "Month");
}
function Pr() {
  return et(this.year(), this.month());
}
function Rr(e) {
  return this._monthsParseExact ? (D(this, "_monthsRegex") || hs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (D(this, "_monthsShortRegex") || (this._monthsShortRegex = Or), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Fr(e) {
  return this._monthsParseExact ? (D(this, "_monthsRegex") || hs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (D(this, "_monthsRegex") || (this._monthsRegex = br), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function hs() {
  function e(i, d) {
    return d.length - i.length;
  }
  var t = [], s = [], r = [], n, a;
  for (n = 0; n < 12; n++)
    a = Q([2e3, n]), t.push(this.monthsShort(a, "")), s.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
  for (t.sort(e), s.sort(e), r.sort(e), n = 0; n < 12; n++)
    t[n] = U(t[n]), s[n] = U(s[n]);
  for (n = 0; n < 24; n++)
    r[n] = U(r[n]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
c("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? J(e, 4) : "+" + e;
});
c(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
c(0, ["YYYY", 4], 0, "year");
c(0, ["YYYYY", 5], 0, "year");
c(0, ["YYYYYY", 6, !0], 0, "year");
E("year", "y");
L("year", 1);
u("Y", Xe);
u("YY", S, A);
u("YYYY", Ot, Yt);
u("YYYYY", Qe, qe);
u("YYYYYY", Qe, qe);
p(["YYYYY", "YYYYYY"], F);
p("YYYY", function(e, t) {
  t[F] = e.length === 2 ? l.parseTwoDigitYear(e) : y(e);
});
p("YY", function(e, t) {
  t[F] = l.parseTwoDigitYear(e);
});
p("Y", function(e, t) {
  t[F] = parseInt(e, 10);
});
function Te(e) {
  return Be(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return y(e) + (y(e) > 68 ? 1900 : 2e3);
};
var fs = pe("FullYear", !0);
function Er() {
  return Be(this.year());
}
function Lr(e, t, s, r, n, a, i) {
  var d;
  return e < 100 && e >= 0 ? (d = new Date(e + 400, t, s, r, n, a, i), isFinite(d.getFullYear()) && d.setFullYear(e)) : d = new Date(e, t, s, r, n, a, i), d;
}
function xe(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ge(e, t, s) {
  var r = 7 + t - s, n = (7 + xe(e, 0, r).getUTCDay() - t) % 7;
  return -n + r - 1;
}
function ms(e, t, s, r, n) {
  var a = (7 + s - r) % 7, i = Ge(e, r, n), d = 1 + 7 * (t - 1) + a + i, h, _;
  return d <= 0 ? (h = e - 1, _ = Te(h) + d) : d > Te(e) ? (h = e + 1, _ = d - Te(e)) : (h = e, _ = d), {
    year: h,
    dayOfYear: _
  };
}
function Ne(e, t, s) {
  var r = Ge(e.year(), t, s), n = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, a, i;
  return n < 1 ? (i = e.year() - 1, a = n + ne(i, t, s)) : n > ne(e.year(), t, s) ? (a = n - ne(e.year(), t, s), i = e.year() + 1) : (i = e.year(), a = n), {
    week: a,
    year: i
  };
}
function ne(e, t, s) {
  var r = Ge(e, t, s), n = Ge(e + 1, t, s);
  return (Te(e) - r + n) / 7;
}
c("w", ["ww", 2], "wo", "week");
c("W", ["WW", 2], "Wo", "isoWeek");
E("week", "w");
E("isoWeek", "W");
L("week", 5);
L("isoWeek", 5);
u("w", S);
u("ww", S, A);
u("W", S);
u("WW", S, A);
Ee(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = y(e);
  }
);
function Ir(e) {
  return Ne(e, this._week.dow, this._week.doy).week;
}
var Cr = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ur() {
  return this._week.dow;
}
function Ar() {
  return this._week.doy;
}
function Hr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Vr(e) {
  var t = Ne(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
c("d", 0, "do", "day");
c("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
c("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
c("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
c("e", 0, 0, "weekday");
c("E", 0, 0, "isoWeekday");
E("day", "d");
E("weekday", "e");
E("isoWeekday", "E");
L("day", 11);
L("weekday", 11);
L("isoWeekday", 11);
u("d", S);
u("e", S);
u("E", S);
u("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
u("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
u("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ee(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var n = s._locale.weekdaysParse(e, r, s._strict);
  n != null ? t.d = n : m(s).invalidWeekday = e;
});
Ee(["d", "e", "E"], function(e, t, s, r) {
  t[r] = y(e);
});
function Gr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function jr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function bt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var zr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), _s = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), $r = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Zr = Fe, Br = Fe, qr = Fe;
function Jr(e, t) {
  var s = $(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? bt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Qr(e) {
  return e === !0 ? bt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Xr(e) {
  return e === !0 ? bt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Kr(e, t, s) {
  var r, n, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      a = Q([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (n = O.call(this._weekdaysParse, i), n !== -1 ? n : null) : t === "ddd" ? (n = O.call(this._shortWeekdaysParse, i), n !== -1 ? n : null) : (n = O.call(this._minWeekdaysParse, i), n !== -1 ? n : null) : t === "dddd" ? (n = O.call(this._weekdaysParse, i), n !== -1 || (n = O.call(this._shortWeekdaysParse, i), n !== -1) ? n : (n = O.call(this._minWeekdaysParse, i), n !== -1 ? n : null)) : t === "ddd" ? (n = O.call(this._shortWeekdaysParse, i), n !== -1 || (n = O.call(this._weekdaysParse, i), n !== -1) ? n : (n = O.call(this._minWeekdaysParse, i), n !== -1 ? n : null)) : (n = O.call(this._minWeekdaysParse, i), n !== -1 || (n = O.call(this._weekdaysParse, i), n !== -1) ? n : (n = O.call(this._shortWeekdaysParse, i), n !== -1 ? n : null));
}
function en(e, t, s) {
  var r, n, a;
  if (this._weekdaysParseExact)
    return Kr.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (n = Q([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function tn(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Gr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function sn(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function rn(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = jr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function nn(e) {
  return this._weekdaysParseExact ? (D(this, "_weekdaysRegex") || Tt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (D(this, "_weekdaysRegex") || (this._weekdaysRegex = Zr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function an(e) {
  return this._weekdaysParseExact ? (D(this, "_weekdaysRegex") || Tt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (D(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Br), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function on(e) {
  return this._weekdaysParseExact ? (D(this, "_weekdaysRegex") || Tt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (D(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Tt() {
  function e(b, W) {
    return W.length - b.length;
  }
  var t = [], s = [], r = [], n = [], a, i, d, h, _;
  for (a = 0; a < 7; a++)
    i = Q([2e3, 1]).day(a), d = U(this.weekdaysMin(i, "")), h = U(this.weekdaysShort(i, "")), _ = U(this.weekdays(i, "")), t.push(d), s.push(h), r.push(_), n.push(d), n.push(h), n.push(_);
  t.sort(e), s.sort(e), r.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function xt() {
  return this.hours() % 12 || 12;
}
function ln() {
  return this.hours() || 24;
}
c("H", ["HH", 2], 0, "hour");
c("h", ["hh", 2], 0, xt);
c("k", ["kk", 2], 0, ln);
c("hmm", 0, 0, function() {
  return "" + xt.apply(this) + J(this.minutes(), 2);
});
c("hmmss", 0, 0, function() {
  return "" + xt.apply(this) + J(this.minutes(), 2) + J(this.seconds(), 2);
});
c("Hmm", 0, 0, function() {
  return "" + this.hours() + J(this.minutes(), 2);
});
c("Hmmss", 0, 0, function() {
  return "" + this.hours() + J(this.minutes(), 2) + J(this.seconds(), 2);
});
function ys(e, t) {
  c(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ys("a", !0);
ys("A", !1);
E("hour", "h");
L("hour", 13);
function gs(e, t) {
  return t._meridiemParse;
}
u("a", gs);
u("A", gs);
u("H", S);
u("h", S);
u("k", S);
u("HH", S, A);
u("hh", S, A);
u("kk", S, A);
u("hmm", is);
u("hmmss", os);
u("Hmm", is);
u("Hmmss", os);
p(["H", "HH"], N);
p(["k", "kk"], function(e, t, s) {
  var r = y(e);
  t[N] = r === 24 ? 0 : r;
});
p(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
p(["h", "hh"], function(e, t, s) {
  t[N] = y(e), m(s).bigHour = !0;
});
p("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[N] = y(e.substr(0, r)), t[z] = y(e.substr(r)), m(s).bigHour = !0;
});
p("hmmss", function(e, t, s) {
  var r = e.length - 4, n = e.length - 2;
  t[N] = y(e.substr(0, r)), t[z] = y(e.substr(r, 2)), t[re] = y(e.substr(n)), m(s).bigHour = !0;
});
p("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[N] = y(e.substr(0, r)), t[z] = y(e.substr(r));
});
p("Hmmss", function(e, t, s) {
  var r = e.length - 4, n = e.length - 2;
  t[N] = y(e.substr(0, r)), t[z] = y(e.substr(r, 2)), t[re] = y(e.substr(n));
});
function un(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var dn = /[ap]\.?m?\.?/i, cn = pe("Hours", !0);
function hn(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var ws = {
  calendar: er,
  longDateFormat: nr,
  invalidDate: ir,
  ordinal: lr,
  dayOfMonthOrdinalParse: ur,
  relativeTime: cr,
  months: Yr,
  monthsShort: ls,
  week: Cr,
  weekdays: zr,
  weekdaysMin: $r,
  weekdaysShort: _s,
  meridiemParse: dn
}, Y = {}, Ye = {}, We;
function fn(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function $t(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function mn(e) {
  for (var t = 0, s, r, n, a; t < e.length; ) {
    for (a = $t(e[t]).split("-"), s = a.length, r = $t(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (n = tt(a.slice(0, s).join("-")), n)
        return n;
      if (r && r.length >= s && fn(a, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return We;
}
function _n(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function tt(e) {
  var t = null, s;
  if (Y[e] === void 0 && typeof module < "u" && module && module.exports && _n(e))
    try {
      t = We._abbr, s = require, s("./locale/" + e), de(t);
    } catch {
      Y[e] = null;
    }
  return Y[e];
}
function de(e, t) {
  var s;
  return e && (C(t) ? s = ie(e) : s = Nt(e, t), s ? We = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), We._abbr;
}
function Nt(e, t) {
  if (t !== null) {
    var s, r = ws;
    if (t.abbr = e, Y[e] != null)
      es(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Y[e]._config;
    else if (t.parentLocale != null)
      if (Y[t.parentLocale] != null)
        r = Y[t.parentLocale]._config;
      else if (s = tt(t.parentLocale), s != null)
        r = s._config;
      else
        return Ye[t.parentLocale] || (Ye[t.parentLocale] = []), Ye[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Y[e] = new pt(ft(r, t)), Ye[e] && Ye[e].forEach(function(n) {
      Nt(n.name, n.config);
    }), de(e), Y[e];
  } else
    return delete Y[e], null;
}
function yn(e, t) {
  if (t != null) {
    var s, r, n = ws;
    Y[e] != null && Y[e].parentLocale != null ? Y[e].set(ft(Y[e]._config, t)) : (r = tt(e), r != null && (n = r._config), t = ft(n, t), r == null && (t.abbr = e), s = new pt(t), s.parentLocale = Y[e], Y[e] = s), de(e);
  } else
    Y[e] != null && (Y[e].parentLocale != null ? (Y[e] = Y[e].parentLocale, e === de() && de(e)) : Y[e] != null && delete Y[e]);
  return Y[e];
}
function ie(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return We;
  if (!$(e)) {
    if (t = tt(e), t)
      return t;
    e = [e];
  }
  return mn(e);
}
function gn() {
  return mt(Y);
}
function Wt(e) {
  var t, s = e._a;
  return s && m(e).overflow === -2 && (t = s[se] < 0 || s[se] > 11 ? se : s[q] < 1 || s[q] > et(s[F], s[se]) ? q : s[N] < 0 || s[N] > 24 || s[N] === 24 && (s[z] !== 0 || s[re] !== 0 || s[he] !== 0) ? N : s[z] < 0 || s[z] > 59 ? z : s[re] < 0 || s[re] > 59 ? re : s[he] < 0 || s[he] > 999 ? he : -1, m(e)._overflowDayOfYear && (t < F || t > q) && (t = q), m(e)._overflowWeeks && t === -1 && (t = pr), m(e)._overflowWeekday && t === -1 && (t = vr), m(e).overflow = t), e;
}
var wn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, kn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Dn = /Z|[+-]\d\d(?::?\d\d)?/, Ie = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], dt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Mn = /^\/?Date\((-?\d+)/i, pn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, vn = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ks(e) {
  var t, s, r = e._i, n = wn.exec(r) || kn.exec(r), a, i, d, h, _ = Ie.length, b = dt.length;
  if (n) {
    for (m(e).iso = !0, t = 0, s = _; t < s; t++)
      if (Ie[t][1].exec(n[1])) {
        i = Ie[t][0], a = Ie[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, s = b; t < s; t++)
        if (dt[t][1].exec(n[3])) {
          d = (n[2] || " ") + dt[t][0];
          break;
        }
      if (d == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && d != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (Dn.exec(n[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (d || "") + (h || ""), Rt(e);
  } else
    e._isValid = !1;
}
function Sn(e, t, s, r, n, a) {
  var i = [
    Yn(e),
    ls.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(n, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function Yn(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function On(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function bn(e, t, s) {
  if (e) {
    var r = _s.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== n)
      return m(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Tn(e, t, s) {
  if (e)
    return vn[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), n = r % 100, a = (r - n) / 100;
  return a * 60 + n;
}
function Ds(e) {
  var t = pn.exec(On(e._i)), s;
  if (t) {
    if (s = Sn(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !bn(t[1], s, e))
      return;
    e._a = s, e._tzm = Tn(t[8], t[9], t[10]), e._d = xe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function xn(e) {
  var t = Mn.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (ks(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ds(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = V(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ge(e, t, s) {
  return e ?? t ?? s;
}
function Nn(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Pt(e) {
  var t, s, r = [], n, a, i;
  if (!e._d) {
    for (n = Nn(e), e._w && e._a[q] == null && e._a[se] == null && Wn(e), e._dayOfYear != null && (i = ge(e._a[F], n[F]), (e._dayOfYear > Te(i) || e._dayOfYear === 0) && (m(e)._overflowDayOfYear = !0), s = xe(i, 0, e._dayOfYear), e._a[se] = s.getUTCMonth(), e._a[q] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[N] === 24 && e._a[z] === 0 && e._a[re] === 0 && e._a[he] === 0 && (e._nextDay = !0, e._a[N] = 0), e._d = (e._useUTC ? xe : Lr).apply(
      null,
      r
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[N] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (m(e).weekdayMismatch = !0);
  }
}
function Wn(e) {
  var t, s, r, n, a, i, d, h, _;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, s = ge(
    t.GG,
    e._a[F],
    Ne(v(), 1, 4).year
  ), r = ge(t.W, 1), n = ge(t.E, 1), (n < 1 || n > 7) && (h = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, _ = Ne(v(), a, i), s = ge(t.gg, e._a[F], _.year), r = ge(t.w, _.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (h = !0)) : t.e != null ? (n = t.e + a, (t.e < 0 || t.e > 6) && (h = !0)) : n = a), r < 1 || r > ne(s, a, i) ? m(e)._overflowWeeks = !0 : h != null ? m(e)._overflowWeekday = !0 : (d = ms(s, r, n, a, i), e._a[F] = d.year, e._dayOfYear = d.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function Rt(e) {
  if (e._f === l.ISO_8601) {
    ks(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    Ds(e);
    return;
  }
  e._a = [], m(e).empty = !0;
  var t = "" + e._i, s, r, n, a, i, d = t.length, h = 0, _, b;
  for (n = ts(e._f, e._locale).match(vt) || [], b = n.length, s = 0; s < b; s++)
    a = n[s], r = (t.match(kr(a, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && m(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), h += r.length), ke[a] ? (r ? m(e).empty = !1 : m(e).unusedTokens.push(a), Mr(a, r, e)) : e._strict && !r && m(e).unusedTokens.push(a);
  m(e).charsLeftOver = d - h, t.length > 0 && m(e).unusedInput.push(t), e._a[N] <= 12 && m(e).bigHour === !0 && e._a[N] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[N] = Pn(
    e._locale,
    e._a[N],
    e._meridiem
  ), _ = m(e).era, _ !== null && (e._a[F] = e._locale.erasConvertYear(_, e._a[F])), Pt(e), Wt(e);
}
function Pn(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Rn(e) {
  var t, s, r, n, a, i, d = !1, h = e._f.length;
  if (h === 0) {
    m(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (n = 0; n < h; n++)
    a = 0, i = !1, t = Mt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], Rt(t), Dt(t) && (i = !0), a += m(t).charsLeftOver, a += m(t).unusedTokens.length * 10, m(t).score = a, d ? a < r && (r = a, s = t) : (r == null || a < r || i) && (r = a, s = t, i && (d = !0));
  le(e, s || t);
}
function Fn(e) {
  if (!e._d) {
    var t = St(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Xt(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Pt(e);
  }
}
function En(e) {
  var t = new Re(Wt(Ms(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ms(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || ie(e._l), t === null || s === void 0 && t === "" ? Ze({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Z(t) ? new Re(Wt(t)) : (Pe(t) ? e._d = t : $(s) ? Rn(e) : s ? Rt(e) : Ln(e), Dt(e) || (e._d = null), e));
}
function Ln(e) {
  var t = e._i;
  C(t) ? e._d = new Date(l.now()) : Pe(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? xn(e) : $(t) ? (e._a = Xt(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Pt(e)) : fe(t) ? Fn(e) : ae(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function ps(e, t, s, r, n) {
  var a = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (fe(e) && kt(e) || $(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = n, a._l = s, a._i = e, a._f = t, a._strict = r, En(a);
}
function v(e, t, s, r) {
  return ps(e, t, s, r, !1);
}
var In = V(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = v.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ze();
  }
), Cn = V(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = v.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ze();
  }
);
function vs(e, t) {
  var s, r;
  if (t.length === 1 && $(t[0]) && (t = t[0]), !t.length)
    return v();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function Un() {
  var e = [].slice.call(arguments, 0);
  return vs("isBefore", e);
}
function An() {
  var e = [].slice.call(arguments, 0);
  return vs("isAfter", e);
}
var Hn = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Oe = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Vn(e) {
  var t, s = !1, r, n = Oe.length;
  for (t in e)
    if (D(e, t) && !(O.call(Oe, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < n; ++r)
    if (e[Oe[r]]) {
      if (s)
        return !1;
      parseFloat(e[Oe[r]]) !== y(e[Oe[r]]) && (s = !0);
    }
  return !0;
}
function Gn() {
  return this._isValid;
}
function jn() {
  return B(NaN);
}
function st(e) {
  var t = St(e), s = t.year || 0, r = t.quarter || 0, n = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, d = t.hour || 0, h = t.minute || 0, _ = t.second || 0, b = t.millisecond || 0;
  this._isValid = Vn(t), this._milliseconds = +b + _ * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  d * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +n + r * 3 + s * 12, this._data = {}, this._locale = ie(), this._bubble();
}
function Ue(e) {
  return e instanceof st;
}
function yt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function zn(e, t, s) {
  var r = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < r; i++)
    (s && e[i] !== t[i] || !s && y(e[i]) !== y(t[i])) && a++;
  return a + n;
}
function Ss(e, t) {
  c(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + J(~~(s / 60), 2) + t + J(~~s % 60, 2);
  });
}
Ss("Z", ":");
Ss("ZZ", "");
u("Z", Ke);
u("ZZ", Ke);
p(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Ft(Ke, e);
});
var $n = /([\+\-]|\d\d)/gi;
function Ft(e, t) {
  var s = (t || "").match(e), r, n, a;
  return s === null ? null : (r = s[s.length - 1] || [], n = (r + "").match($n) || ["-", 0, 0], a = +(n[1] * 60) + y(n[2]), a === 0 ? 0 : n[0] === "+" ? a : -a);
}
function Et(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (Z(e) || Pe(e) ? e.valueOf() : v(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : v(e).local();
}
function gt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Zn(e, t, s) {
  var r = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ft(Ke, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (n = gt(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), r !== e && (!t || this._changeInProgress ? bs(
      this,
      B(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : gt(this);
}
function Bn(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function qn(e) {
  return this.utcOffset(0, e);
}
function Jn(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(gt(this), "m")), this;
}
function Qn() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ft(gr, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Xn(e) {
  return this.isValid() ? (e = e ? v(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Kn() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function ea() {
  if (!C(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Mt(e, this), e = Ms(e), e._a ? (t = e._isUTC ? Q(e._a) : v(e._a), this._isDSTShifted = this.isValid() && zn(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ta() {
  return this.isValid() ? !this._isUTC : !1;
}
function sa() {
  return this.isValid() ? this._isUTC : !1;
}
function Ys() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var ra = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, na = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function B(e, t) {
  var s = e, r = null, n, a, i;
  return Ue(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ae(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = ra.exec(e)) ? (n = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: y(r[q]) * n,
    h: y(r[N]) * n,
    m: y(r[z]) * n,
    s: y(r[re]) * n,
    ms: y(yt(r[he] * 1e3)) * n
    // the millisecond decimal point is included in the match
  }) : (r = na.exec(e)) ? (n = r[1] === "-" ? -1 : 1, s = {
    y: ce(r[2], n),
    M: ce(r[3], n),
    w: ce(r[4], n),
    d: ce(r[5], n),
    h: ce(r[6], n),
    m: ce(r[7], n),
    s: ce(r[8], n)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = aa(
    v(s.from),
    v(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), a = new st(s), Ue(e) && D(e, "_locale") && (a._locale = e._locale), Ue(e) && D(e, "_isValid") && (a._isValid = e._isValid), a;
}
B.fn = st.prototype;
B.invalid = jn;
function ce(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Zt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function aa(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Et(t, e), e.isBefore(t) ? s = Zt(e, t) : (s = Zt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Os(e, t) {
  return function(s, r) {
    var n, a;
    return r !== null && !isNaN(+r) && (es(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = s, s = r, r = a), n = B(s, r), bs(this, n, e), this;
  };
}
function bs(e, t, s, r) {
  var n = t._milliseconds, a = yt(t._days), i = yt(t._months);
  e.isValid() && (r = r ?? !0, i && ds(e, He(e, "Month") + i * s), a && rs(e, "Date", He(e, "Date") + a * s), n && e._d.setTime(e._d.valueOf() + n * s), r && l.updateOffset(e, a || i));
}
var ia = Os(1, "add"), oa = Os(-1, "subtract");
function Ts(e) {
  return typeof e == "string" || e instanceof String;
}
function la(e) {
  return Z(e) || Pe(e) || Ts(e) || ae(e) || da(e) || ua(e) || e === null || e === void 0;
}
function ua(e) {
  var t = fe(e) && !kt(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], n, a, i = r.length;
  for (n = 0; n < i; n += 1)
    a = r[n], s = s || D(e, a);
  return t && s;
}
function da(e) {
  var t = $(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !ae(r) && Ts(e);
  }).length === 0), t && s;
}
function ca(e) {
  var t = fe(e) && !kt(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, a;
  for (n = 0; n < r.length; n += 1)
    a = r[n], s = s || D(e, a);
  return t && s;
}
function ha(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function fa(e, t) {
  arguments.length === 1 && (arguments[0] ? la(arguments[0]) ? (e = arguments[0], t = void 0) : ca(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || v(), r = Et(s, this).startOf("day"), n = l.calendarFormat(this, r) || "sameElse", a = t && (X(t[n]) ? t[n].call(this, s) : t[n]);
  return this.format(
    a || this.localeData().calendar(n, this, v(s))
  );
}
function ma() {
  return new Re(this);
}
function _a(e, t) {
  var s = Z(e) ? e : v(e);
  return this.isValid() && s.isValid() ? (t = G(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ya(e, t) {
  var s = Z(e) ? e : v(e);
  return this.isValid() && s.isValid() ? (t = G(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function ga(e, t, s, r) {
  var n = Z(e) ? e : v(e), a = Z(t) ? t : v(t);
  return this.isValid() && n.isValid() && a.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(n, s) : !this.isBefore(n, s)) && (r[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1;
}
function wa(e, t) {
  var s = Z(e) ? e : v(e), r;
  return this.isValid() && s.isValid() ? (t = G(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function ka(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Da(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ma(e, t, s) {
  var r, n, a;
  if (!this.isValid())
    return NaN;
  if (r = Et(e, this), !r.isValid())
    return NaN;
  switch (n = (r.utcOffset() - this.utcOffset()) * 6e4, t = G(t), t) {
    case "year":
      a = Ae(this, r) / 12;
      break;
    case "month":
      a = Ae(this, r);
      break;
    case "quarter":
      a = Ae(this, r) / 3;
      break;
    case "second":
      a = (this - r) / 1e3;
      break;
    case "minute":
      a = (this - r) / 6e4;
      break;
    case "hour":
      a = (this - r) / 36e5;
      break;
    case "day":
      a = (this - r - n) / 864e5;
      break;
    case "week":
      a = (this - r - n) / 6048e5;
      break;
    default:
      a = this - r;
  }
  return s ? a : H(a);
}
function Ae(e, t) {
  if (e.date() < t.date())
    return -Ae(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), n, a;
  return t - r < 0 ? (n = e.clone().add(s - 1, "months"), a = (t - r) / (r - n)) : (n = e.clone().add(s + 1, "months"), a = (t - r) / (n - r)), -(s + a) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function pa() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function va(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Ce(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : X(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ce(s, "Z")) : Ce(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Sa() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, n, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + r + n + a);
}
function Ya(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Ce(this, e);
  return this.localeData().postformat(t);
}
function Oa(e, t) {
  return this.isValid() && (Z(e) && e.isValid() || v(e).isValid()) ? B({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ba(e) {
  return this.from(v(), e);
}
function Ta(e, t) {
  return this.isValid() && (Z(e) && e.isValid() || v(e).isValid()) ? B({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function xa(e) {
  return this.to(v(), e);
}
function xs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ie(e), t != null && (this._locale = t), this);
}
var Ns = V(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ws() {
  return this._locale;
}
var je = 1e3, De = 60 * je, ze = 60 * De, Ps = (365 * 400 + 97) * 24 * ze;
function Me(e, t) {
  return (e % t + t) % t;
}
function Rs(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Ps : new Date(e, t, s).valueOf();
}
function Fs(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Ps : Date.UTC(e, t, s);
}
function Na(e) {
  var t, s;
  if (e = G(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Fs : Rs, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Me(
        t + (this._isUTC ? 0 : this.utcOffset() * De),
        ze
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Me(t, De);
      break;
    case "second":
      t = this._d.valueOf(), t -= Me(t, je);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Wa(e) {
  var t, s;
  if (e = G(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Fs : Rs, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += ze - Me(
        t + (this._isUTC ? 0 : this.utcOffset() * De),
        ze
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += De - Me(t, De) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += je - Me(t, je) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Pa() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Ra() {
  return Math.floor(this.valueOf() / 1e3);
}
function Fa() {
  return new Date(this.valueOf());
}
function Ea() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function La() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Ia() {
  return this.isValid() ? this.toISOString() : null;
}
function Ca() {
  return Dt(this);
}
function Ua() {
  return le({}, m(this));
}
function Aa() {
  return m(this).overflow;
}
function Ha() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
c("N", 0, 0, "eraAbbr");
c("NN", 0, 0, "eraAbbr");
c("NNN", 0, 0, "eraAbbr");
c("NNNN", 0, 0, "eraName");
c("NNNNN", 0, 0, "eraNarrow");
c("y", ["y", 1], "yo", "eraYear");
c("y", ["yy", 2], 0, "eraYear");
c("y", ["yyy", 3], 0, "eraYear");
c("y", ["yyyy", 4], 0, "eraYear");
u("N", Lt);
u("NN", Lt);
u("NNN", Lt);
u("NNNN", Xa);
u("NNNNN", Ka);
p(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var n = s._locale.erasParse(e, r, s._strict);
    n ? m(s).era = n : m(s).invalidEra = e;
  }
);
u("y", ve);
u("yy", ve);
u("yyy", ve);
u("yyyy", ve);
u("yo", ei);
p(["y", "yy", "yyy", "yyyy"], F);
p(["yo"], function(e, t, s, r) {
  var n;
  s._locale._eraYearOrdinalRegex && (n = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[F] = s._locale.eraYearOrdinalParse(e, n) : t[F] = parseInt(e, 10);
});
function Va(e, t) {
  var s, r, n, a = this._eras || ie("en")._eras;
  for (s = 0, r = a.length; s < r; ++s) {
    switch (typeof a[s].since) {
      case "string":
        n = l(a[s].since).startOf("day"), a[s].since = n.valueOf();
        break;
    }
    switch (typeof a[s].until) {
      case "undefined":
        a[s].until = 1 / 0;
        break;
      case "string":
        n = l(a[s].until).startOf("day").valueOf(), a[s].until = n.valueOf();
        break;
    }
  }
  return a;
}
function Ga(e, t, s) {
  var r, n, a = this.eras(), i, d, h;
  for (e = e.toUpperCase(), r = 0, n = a.length; r < n; ++r)
    if (i = a[r].name.toUpperCase(), d = a[r].abbr.toUpperCase(), h = a[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (d === e)
            return a[r];
          break;
        case "NNNN":
          if (i === e)
            return a[r];
          break;
        case "NNNNN":
          if (h === e)
            return a[r];
          break;
      }
    else if ([i, d, h].indexOf(e) >= 0)
      return a[r];
}
function ja(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function za() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function $a() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function Za() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function Ba() {
  var e, t, s, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = n[e].since <= n[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return (this.year() - l(n[e].since).year()) * s + n[e].offset;
  return this.year();
}
function qa(e) {
  return D(this, "_erasNameRegex") || It.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Ja(e) {
  return D(this, "_erasAbbrRegex") || It.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Qa(e) {
  return D(this, "_erasNarrowRegex") || It.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Lt(e, t) {
  return t.erasAbbrRegex(e);
}
function Xa(e, t) {
  return t.erasNameRegex(e);
}
function Ka(e, t) {
  return t.erasNarrowRegex(e);
}
function ei(e, t) {
  return t._eraYearOrdinalRegex || ve;
}
function It() {
  var e = [], t = [], s = [], r = [], n, a, i = this.eras();
  for (n = 0, a = i.length; n < a; ++n)
    t.push(U(i[n].name)), e.push(U(i[n].abbr)), s.push(U(i[n].narrow)), r.push(U(i[n].name)), r.push(U(i[n].abbr)), r.push(U(i[n].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
c(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
c(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function rt(e, t) {
  c(0, [e, e.length], 0, t);
}
rt("gggg", "weekYear");
rt("ggggg", "weekYear");
rt("GGGG", "isoWeekYear");
rt("GGGGG", "isoWeekYear");
E("weekYear", "gg");
E("isoWeekYear", "GG");
L("weekYear", 1);
L("isoWeekYear", 1);
u("G", Xe);
u("g", Xe);
u("GG", S, A);
u("gg", S, A);
u("GGGG", Ot, Yt);
u("gggg", Ot, Yt);
u("GGGGG", Qe, qe);
u("ggggg", Qe, qe);
Ee(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = y(e);
  }
);
Ee(["gg", "GG"], function(e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function ti(e) {
  return Es.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function si(e) {
  return Es.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ri() {
  return ne(this.year(), 1, 4);
}
function ni() {
  return ne(this.isoWeekYear(), 1, 4);
}
function ai() {
  var e = this.localeData()._week;
  return ne(this.year(), e.dow, e.doy);
}
function ii() {
  var e = this.localeData()._week;
  return ne(this.weekYear(), e.dow, e.doy);
}
function Es(e, t, s, r, n) {
  var a;
  return e == null ? Ne(this, r, n).year : (a = ne(e, r, n), t > a && (t = a), oi.call(this, e, t, s, r, n));
}
function oi(e, t, s, r, n) {
  var a = ms(e, t, s, r, n), i = xe(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
c("Q", 0, "Qo", "quarter");
E("quarter", "Q");
L("quarter", 7);
u("Q", ns);
p("Q", function(e, t) {
  t[se] = (y(e) - 1) * 3;
});
function li(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
c("D", ["DD", 2], "Do", "date");
E("date", "D");
L("date", 9);
u("D", S);
u("DD", S, A);
u("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
p(["D", "DD"], q);
p("Do", function(e, t) {
  t[q] = y(e.match(S)[0]);
});
var Ls = pe("Date", !0);
c("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
E("dayOfYear", "DDD");
L("dayOfYear", 4);
u("DDD", Je);
u("DDDD", as);
p(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = y(e);
});
function ui(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
c("m", ["mm", 2], 0, "minute");
E("minute", "m");
L("minute", 14);
u("m", S);
u("mm", S, A);
p(["m", "mm"], z);
var di = pe("Minutes", !1);
c("s", ["ss", 2], 0, "second");
E("second", "s");
L("second", 15);
u("s", S);
u("ss", S, A);
p(["s", "ss"], re);
var ci = pe("Seconds", !1);
c("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
c(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
c(0, ["SSS", 3], 0, "millisecond");
c(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
c(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
c(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
c(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
c(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
c(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
E("millisecond", "ms");
L("millisecond", 16);
u("S", Je, ns);
u("SS", Je, A);
u("SSS", Je, as);
var ue, Is;
for (ue = "SSSS"; ue.length <= 9; ue += "S")
  u(ue, ve);
function hi(e, t) {
  t[he] = y(("0." + e) * 1e3);
}
for (ue = "S"; ue.length <= 9; ue += "S")
  p(ue, hi);
Is = pe("Milliseconds", !1);
c("z", 0, 0, "zoneAbbr");
c("zz", 0, 0, "zoneName");
function fi() {
  return this._isUTC ? "UTC" : "";
}
function mi() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = Re.prototype;
o.add = ia;
o.calendar = fa;
o.clone = ma;
o.diff = Ma;
o.endOf = Wa;
o.format = Ya;
o.from = Oa;
o.fromNow = ba;
o.to = Ta;
o.toNow = xa;
o.get = _r;
o.invalidAt = Aa;
o.isAfter = _a;
o.isBefore = ya;
o.isBetween = ga;
o.isSame = wa;
o.isSameOrAfter = ka;
o.isSameOrBefore = Da;
o.isValid = Ca;
o.lang = Ns;
o.locale = xs;
o.localeData = Ws;
o.max = Cn;
o.min = In;
o.parsingFlags = Ua;
o.set = yr;
o.startOf = Na;
o.subtract = oa;
o.toArray = Ea;
o.toObject = La;
o.toDate = Fa;
o.toISOString = va;
o.inspect = Sa;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
o.toJSON = Ia;
o.toString = pa;
o.unix = Ra;
o.valueOf = Pa;
o.creationData = Ha;
o.eraName = za;
o.eraNarrow = $a;
o.eraAbbr = Za;
o.eraYear = Ba;
o.year = fs;
o.isLeapYear = Er;
o.weekYear = ti;
o.isoWeekYear = si;
o.quarter = o.quarters = li;
o.month = cs;
o.daysInMonth = Pr;
o.week = o.weeks = Hr;
o.isoWeek = o.isoWeeks = Vr;
o.weeksInYear = ai;
o.weeksInWeekYear = ii;
o.isoWeeksInYear = ri;
o.isoWeeksInISOWeekYear = ni;
o.date = Ls;
o.day = o.days = tn;
o.weekday = sn;
o.isoWeekday = rn;
o.dayOfYear = ui;
o.hour = o.hours = cn;
o.minute = o.minutes = di;
o.second = o.seconds = ci;
o.millisecond = o.milliseconds = Is;
o.utcOffset = Zn;
o.utc = qn;
o.local = Jn;
o.parseZone = Qn;
o.hasAlignedHourOffset = Xn;
o.isDST = Kn;
o.isLocal = ta;
o.isUtcOffset = sa;
o.isUtc = Ys;
o.isUTC = Ys;
o.zoneAbbr = fi;
o.zoneName = mi;
o.dates = V(
  "dates accessor is deprecated. Use date instead.",
  Ls
);
o.months = V(
  "months accessor is deprecated. Use month instead",
  cs
);
o.years = V(
  "years accessor is deprecated. Use year instead",
  fs
);
o.zone = V(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Bn
);
o.isDSTShifted = V(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  ea
);
function _i(e) {
  return v(e * 1e3);
}
function yi() {
  return v.apply(null, arguments).parseZone();
}
function Cs(e) {
  return e;
}
var M = pt.prototype;
M.calendar = tr;
M.longDateFormat = ar;
M.invalidDate = or;
M.ordinal = dr;
M.preparse = Cs;
M.postformat = Cs;
M.relativeTime = hr;
M.pastFuture = fr;
M.set = Ks;
M.eras = Va;
M.erasParse = Ga;
M.erasConvertYear = ja;
M.erasAbbrRegex = Ja;
M.erasNameRegex = qa;
M.erasNarrowRegex = Qa;
M.months = Tr;
M.monthsShort = xr;
M.monthsParse = Wr;
M.monthsRegex = Fr;
M.monthsShortRegex = Rr;
M.week = Ir;
M.firstDayOfYear = Ar;
M.firstDayOfWeek = Ur;
M.weekdays = Jr;
M.weekdaysMin = Xr;
M.weekdaysShort = Qr;
M.weekdaysParse = en;
M.weekdaysRegex = nn;
M.weekdaysShortRegex = an;
M.weekdaysMinRegex = on;
M.isPM = un;
M.meridiem = hn;
function $e(e, t, s, r) {
  var n = ie(), a = Q().set(r, t);
  return n[s](a, e);
}
function Us(e, t, s) {
  if (ae(e) && (t = e, e = void 0), e = e || "", t != null)
    return $e(e, t, s, "month");
  var r, n = [];
  for (r = 0; r < 12; r++)
    n[r] = $e(e, r, s, "month");
  return n;
}
function Ct(e, t, s, r) {
  typeof e == "boolean" ? (ae(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, ae(t) && (s = t, t = void 0), t = t || "");
  var n = ie(), a = e ? n._week.dow : 0, i, d = [];
  if (s != null)
    return $e(t, (s + a) % 7, r, "day");
  for (i = 0; i < 7; i++)
    d[i] = $e(t, (i + a) % 7, r, "day");
  return d;
}
function gi(e, t) {
  return Us(e, t, "months");
}
function wi(e, t) {
  return Us(e, t, "monthsShort");
}
function ki(e, t, s) {
  return Ct(e, t, s, "weekdays");
}
function Di(e, t, s) {
  return Ct(e, t, s, "weekdaysShort");
}
function Mi(e, t, s) {
  return Ct(e, t, s, "weekdaysMin");
}
de("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = y(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = V(
  "moment.lang is deprecated. Use moment.locale instead.",
  de
);
l.langData = V(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ie
);
var ee = Math.abs;
function pi() {
  var e = this._data;
  return this._milliseconds = ee(this._milliseconds), this._days = ee(this._days), this._months = ee(this._months), e.milliseconds = ee(e.milliseconds), e.seconds = ee(e.seconds), e.minutes = ee(e.minutes), e.hours = ee(e.hours), e.months = ee(e.months), e.years = ee(e.years), this;
}
function As(e, t, s, r) {
  var n = B(t, s);
  return e._milliseconds += r * n._milliseconds, e._days += r * n._days, e._months += r * n._months, e._bubble();
}
function vi(e, t) {
  return As(this, e, t, 1);
}
function Si(e, t) {
  return As(this, e, t, -1);
}
function Bt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Yi() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, n, a, i, d, h;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Bt(wt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, n = H(e / 1e3), r.seconds = n % 60, a = H(n / 60), r.minutes = a % 60, i = H(a / 60), r.hours = i % 24, t += H(i / 24), h = H(Hs(t)), s += h, t -= Bt(wt(h)), d = H(s / 12), s %= 12, r.days = t, r.months = s, r.years = d, this;
}
function Hs(e) {
  return e * 4800 / 146097;
}
function wt(e) {
  return e * 146097 / 4800;
}
function Oi(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = G(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Hs(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(wt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function bi() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + y(this._months / 12) * 31536e6 : NaN;
}
function oe(e) {
  return function() {
    return this.as(e);
  };
}
var Ti = oe("ms"), xi = oe("s"), Ni = oe("m"), Wi = oe("h"), Pi = oe("d"), Ri = oe("w"), Fi = oe("M"), Ei = oe("Q"), Li = oe("y");
function Ii() {
  return B(this);
}
function Ci(e) {
  return e = G(e), this.isValid() ? this[e + "s"]() : NaN;
}
function me(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Ui = me("milliseconds"), Ai = me("seconds"), Hi = me("minutes"), Vi = me("hours"), Gi = me("days"), ji = me("months"), zi = me("years");
function $i() {
  return H(this.days() / 7);
}
var te = Math.round, we = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Zi(e, t, s, r, n) {
  return n.relativeTime(t || 1, !!s, e, r);
}
function Bi(e, t, s, r) {
  var n = B(e).abs(), a = te(n.as("s")), i = te(n.as("m")), d = te(n.as("h")), h = te(n.as("d")), _ = te(n.as("M")), b = te(n.as("w")), W = te(n.as("y")), j = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || i <= 1 && ["m"] || i < s.m && ["mm", i] || d <= 1 && ["h"] || d < s.h && ["hh", d] || h <= 1 && ["d"] || h < s.d && ["dd", h];
  return s.w != null && (j = j || b <= 1 && ["w"] || b < s.w && ["ww", b]), j = j || _ <= 1 && ["M"] || _ < s.M && ["MM", _] || W <= 1 && ["y"] || ["yy", W], j[2] = t, j[3] = +e > 0, j[4] = r, Zi.apply(null, j);
}
function qi(e) {
  return e === void 0 ? te : typeof e == "function" ? (te = e, !0) : !1;
}
function Ji(e, t) {
  return we[e] === void 0 ? !1 : t === void 0 ? we[e] : (we[e] = t, e === "s" && (we.ss = t - 1), !0);
}
function Qi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = we, n, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, we, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), n = this.localeData(), a = Bi(this, !s, r, n), s && (a = n.pastFuture(+this, a)), n.postformat(a);
}
var ct = Math.abs;
function ye(e) {
  return (e > 0) - (e < 0) || +e;
}
function nt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ct(this._milliseconds) / 1e3, t = ct(this._days), s = ct(this._months), r, n, a, i, d = this.asSeconds(), h, _, b, W;
  return d ? (r = H(e / 60), n = H(r / 60), e %= 60, r %= 60, a = H(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = d < 0 ? "-" : "", _ = ye(this._months) !== ye(d) ? "-" : "", b = ye(this._days) !== ye(d) ? "-" : "", W = ye(this._milliseconds) !== ye(d) ? "-" : "", h + "P" + (a ? _ + a + "Y" : "") + (s ? _ + s + "M" : "") + (t ? b + t + "D" : "") + (n || r || e ? "T" : "") + (n ? W + n + "H" : "") + (r ? W + r + "M" : "") + (e ? W + i + "S" : "")) : "P0D";
}
var k = st.prototype;
k.isValid = Gn;
k.abs = pi;
k.add = vi;
k.subtract = Si;
k.as = Oi;
k.asMilliseconds = Ti;
k.asSeconds = xi;
k.asMinutes = Ni;
k.asHours = Wi;
k.asDays = Pi;
k.asWeeks = Ri;
k.asMonths = Fi;
k.asQuarters = Ei;
k.asYears = Li;
k.valueOf = bi;
k._bubble = Yi;
k.clone = Ii;
k.get = Ci;
k.milliseconds = Ui;
k.seconds = Ai;
k.minutes = Hi;
k.hours = Vi;
k.days = Gi;
k.weeks = $i;
k.months = ji;
k.years = zi;
k.humanize = Qi;
k.toISOString = nt;
k.toString = nt;
k.toJSON = nt;
k.locale = xs;
k.localeData = Ws;
k.toIsoString = V(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  nt
);
k.lang = Ns;
c("X", 0, 0, "unix");
c("x", 0, 0, "valueOf");
u("x", Xe);
u("X", wr);
p("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
p("x", function(e, t, s) {
  s._d = new Date(y(e));
});
//! moment.js
l.version = "2.29.4";
Qs(v);
l.fn = o;
l.min = Un;
l.max = An;
l.now = Hn;
l.utc = Q;
l.unix = _i;
l.months = gi;
l.isDate = Pe;
l.locale = de;
l.invalid = Ze;
l.duration = B;
l.isMoment = Z;
l.weekdays = ki;
l.parseZone = yi;
l.localeData = ie;
l.isDuration = Ue;
l.monthsShort = wi;
l.weekdaysMin = Mi;
l.defineLocale = Nt;
l.updateLocale = yn;
l.locales = gn;
l.weekdaysShort = Di;
l.normalizeUnits = G;
l.relativeTimeRounding = qi;
l.relativeTimeThreshold = Ji;
l.calendarFormat = ha;
l.prototype = o;
l.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Vs = (e, t, s) => {
  const r = new Date(e);
  let a = new Date(t).getTime() - r.getTime();
  return Math.round(a / (1e3 * 3600 * 24));
}, Xi = (e, t, s) => {
  const r = l(e), n = l(t).startOf("isoWeek").format("YYYY-MM-DD");
  let a = 0;
  const i = Vs(t, e);
  for (let h = 0; h < i; h++) {
    const _ = r.clone().subtract(h, "days");
    _.day() !== 0 && _.day() !== 6 && a++, _.format("YYYY-MM-DD") === n && a--;
  }
  return `${a * 50}`;
}, qt = (e, t, s, r) => {
  const n = l(e), a = Vs(e, t);
  let i = 0;
  for (let _ = 0; _ < a; _++) {
    const b = n.clone().add(_, "days");
    b.day() !== 0 && b.day() !== 6 && i++;
  }
  const d = i !== 1 ? (i + 1) * 50 : r, h = Xi(e, s);
  return { widthPercentage: d, taskMarginLeft: h };
}, Ki = ({ customize: e, data: t }) => {
  const s = {
    sidebarProjects: {
      background: "#fff",
      color: "#000",
      border: "1px solid #000"
    },
    taskContainer: {
      background: "#fff",
      color: "#000",
      border: "1px solid #000"
    }
  }, [r, n] = Se([]), [a, i] = Se([]), [d, h] = Se([]), [_, b] = Se([]), [W, j] = Se(null), Gs = (w) => {
    j(W === w ? null : w);
  }, At = it(() => {
    n(t && t.users ? t.users : []);
  }, [t]), Ht = it(() => {
    const w = l.min(
      r.map(
        (P) => P.tasks.map(
          (R) => l(R.start).startOf("isoWeek")
        )
      ).flat()
    ), g = l.max(
      r.map(
        (P) => P.tasks.map(
          (R, I) => l(R.end).startOf("isoWeek")
        )
      ).flat()
    );
    g.add(1, "weeks");
    const T = [];
    let x = w.clone().startOf("isoWeek");
    for (; x.isBefore(g); ) {
      if (x.startOf("isoWeek").isBefore(g)) {
        const P = x.clone().add(4, "days");
        T.push({
          start: x.format("YYYY-MM-DD"),
          end: P.format("YYYY-MM-DD")
        }), console.log(T);
      }
      x.add(7, "days");
    }
    return T;
  }, [r]), Vt = it(() => {
    const w = [];
    return r.forEach(
      (g) => g.tasks.forEach((T) => {
        const x = T.project, P = x.id, R = T.id, I = w.findIndex((_e) => _e.id === P);
        T.user = at(g, "tasks"), I === -1 ? w.push({
          id: P,
          name: x.name,
          tasks: [T],
          users: [at(g, "tasks")]
        }) : w[0].tasks.findIndex((K) => K.id === R) === -1 && (w[I].tasks.push(), w[I].users.push(at(g, "tasks")));
      })
    ), js(w);
  }, [r]);
  ot(() => {
    At(), b([]);
  }, [At]), ot(() => {
    r.length > 0 && h(Ht());
  }, [r, Ht]), ot(() => {
    r.length > 0 && i(Vt());
  }, [r, Vt]);
  function at(w, g) {
    const { [g]: T, ...x } = w;
    return x;
  }
  function js(w) {
    function g(x) {
      const P = x.tasks.map((K) => new Date(K.start).getTime()), R = x.tasks.map((K) => new Date(K.end).getTime()), I = new Date(Math.min(...P)), _e = new Date(Math.max(...R));
      return { startDate: I, endDate: _e };
    }
    function T(x, P) {
      const R = g(x), I = g(P);
      return R.startDate < I.startDate ? -1 : R.startDate > I.startDate ? 1 : R.endDate < I.endDate ? -1 : R.endDate > I.endDate ? 1 : 0;
    }
    return [...w].sort(T);
  }
  const zs = Ut(s, e), $s = (w) => {
    const { widthPercentage: g, taskMarginLeft: T } = qt(
      w.start,
      w.end,
      d[0].start,
      250
    );
    return _.push({ widthPercentage: g, taskMarginLeft: T }), {
      width: `${g}px`,
      left: `calc(${T}px)`
    };
  };
  return /* @__PURE__ */ f.createElement("section", { className: "gantt-container-section" }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-timeline" }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-timeline-header" }, d.map((w, g) => {
    const T = l(w.start, "YYYY-MM-DD"), x = l(w.end, "YYYY-MM-DD"), R = l().startOf("day").isBetween(
      T,
      x.add(2, "days"),
      null,
      "[]"
    );
    return console.log("timelineWeeks"), console.log(d), console.log("week " + g), console.log(w), /* @__PURE__ */ f.createElement(
      "div",
      {
        className: `gantt-container-section-timeline-header-days ${R ? "today" : ""} ${g === 0 ? "start" : g === d.length - 1 ? "end" : ""}`,
        key: g,
        style: zs.daysContainer
      },
      /* @__PURE__ */ f.createElement("p", null, l(w.start).format("DD MMMM"), " -", " ", l(w.end).format("DD MMMM"))
    );
  }))), /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-sidebar" }, a.map((w) => /* @__PURE__ */ f.createElement(
    "div",
    {
      className: "gantt-container-section-sidebar-line",
      key: w.id
    },
    /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-sidebar-tasks project", style: s.sidebarProjects }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-sidebar-task" }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-sidebar-task-client" }, /* @__PURE__ */ f.createElement("p", { className: "gantt-container-section-sidebar-task-client-name" }, w.name)), /* @__PURE__ */ f.createElement(
      "div",
      {
        className: "gantt-container-section-sidebar-task-icon",
        onClick: () => Gs(w.id)
      },
      /* @__PURE__ */ f.createElement(
        "img",
        {
          src: Jt,
          alt: "dropdown-arrow-gantt",
          style: {
            transform: w.id === W ? "rotate(180deg)" : "rotate(0deg)"
          }
        }
      )
    )), w.id === W && /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-sidebar-dropdown-content" }, w.users.map((g) => /* @__PURE__ */ f.createElement(
      "div",
      {
        className: "gantt-container-section-sidebar-dropdown-content-user",
        key: g.id
      },
      /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-sidebar-dropdown-content-user-p" }, /* @__PURE__ */ f.createElement("p", null, g.firstName), /* @__PURE__ */ f.createElement("p", null, g.lastName))
    )))),
    /* @__PURE__ */ f.createElement("div", { className: "gantt-task-container", style: W === w.id ? { flexDirection: "column", marginTop: "115px" } : { flexDirection: "row" } }, w.tasks.map((g, T) => {
      let { width: x, left: P } = $s(g), R = T !== 0 ? _[T - 1].widthPercentage : null, I = new RegExp("(?<=calc\\()\\d+(\\.\\d+)?(?=px\\))"), _e = W === w.id ? parseInt(P.match(I)) - R : parseInt(P.match(I));
      return /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-main-tasks project", key: g.id }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-main-tasks-m" }, /* @__PURE__ */ f.createElement(
        "div",
        {
          className: "gantt-container-section-main-tasks-t",
          style: { width: x, left: _e }
        },
        /* @__PURE__ */ f.createElement("div", { className: "gantt-container-section-main-tasks-t-content", style: s.taskContainer }, /* @__PURE__ */ f.createElement("p", null, /* @__PURE__ */ f.createElement("span", null, l(g.start).format("DD/MM/YYYY"), " -", " ", l(g.end).format("DD/MM/YYYY"))), /* @__PURE__ */ f.createElement("p", { className: "title" }, g.name), /* @__PURE__ */ f.createElement("p", { className: "description" }, g.description))
      )), /* @__PURE__ */ f.createElement(
        "div",
        {
          className: "gantt-container-section-main-tasks-u",
          key: g.user.id
        },
        g.id === W && /* @__PURE__ */ f.createElement(f.Fragment, null, g.user.tasks.map((K, Zs) => {
          const { widthPercentage: Bs, taskMarginLeft: qs } = qt(
            K.start,
            K.end,
            d[0].start,
            250
          ), Gt = {
            width: `${Bs}px`,
            left: `calc(${qs}px)`
          };
          return Zs > 0 && (Gt.marginLeft = "5px"), /* @__PURE__ */ f.createElement(
            "div",
            {
              className: "gantt-container-section-main-tasks-t",
              key: K.id,
              style: Gt
            }
          );
        }))
      ));
    }))
  ))));
};
function Ut(e, t) {
  for (const s in t)
    typeof t[s] == "object" ? e[s] = Ut(e[s] || {}, t[s]) : e[s] = t[s];
  return e;
}
const eo = () => {
  const e = document.querySelector(".gantt-container-section .today");
  e && e.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}, to = () => {
  const e = document.querySelector(".gantt-container-section .start");
  e && e.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}, so = () => {
  const e = document.querySelector(".gantt-container-section .end");
  e && e.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" });
}, no = ({ customize: e, data: t }) => {
  const s = {
    todayButton: {
      background: "#FFF",
      color: "#000",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    daysContainer: {
      background: "#FFF",
      color: "#000",
      border: "1px solid #000",
      borderRadius: "5px"
    }
  }, r = () => {
    const i = document.querySelector(".gantt-container-section");
    i && (i.scrollLeft -= 500);
  }, n = () => {
    const i = document.querySelector(".gantt-container-section");
    i && (i.scrollLeft += 500);
  }, a = Ut(s, e);
  return /* @__PURE__ */ f.createElement("div", { className: "gantt-container" }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-filters" }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-filters-crt" }, /* @__PURE__ */ f.createElement("div", { className: "gantt-container-filters-crt-block" }, /* @__PURE__ */ f.createElement("button", { className: "gantt-container-filters-crt-block-btn-left", onClick: r }, /* @__PURE__ */ f.createElement("img", { src: Jt, alt: "Move Left" })), /* @__PURE__ */ f.createElement("p", { onClick: to, style: a.todayButton }, "Début"), /* @__PURE__ */ f.createElement("p", { onClick: eo, style: a.todayButton }, "Aujourd'hui"), /* @__PURE__ */ f.createElement("p", { onClick: so, style: a.todayButton }, "Fin"), /* @__PURE__ */ f.createElement("button", { className: "gantt-container-filters-crt-block-btn-right", onClick: n }, /* @__PURE__ */ f.createElement("img", { src: Js, alt: "Move Right" }))))), /* @__PURE__ */ f.createElement(
    Ki,
    {
      customize: a,
      data: t
    }
  ));
};
export {
  no as default,
  so as handleMoveToEnd,
  to as handleMoveToStart,
  eo as handleMoveToToday,
  Ut as mergeStyles
};
