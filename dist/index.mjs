import m, { useState as Se, useCallback as rt, useEffect as at } from "react";
const Jt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M19.5%2012h-15m0%200l6.75%206.75M4.5%2012l6.75-6.75'%20/%3e%3c/svg%3e", Js = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M4.5%2012h15m0%200l-6.75-6.75M19.5%2012l-6.75%206.75'%20/%3e%3c/svg%3e";
//! moment.js
//! version : 2.30.1
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
function G(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ce(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function M(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _t(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (M(e, t))
      return !1;
  return !0;
}
function C(e) {
  return e === void 0;
}
function re(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function We(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Xt(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function ie(e, t) {
  for (var s in t)
    M(t, s) && (e[s] = t[s]);
  return M(t, "toString") && (e.toString = t.toString), M(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function B(e, t, s, r) {
  return Ds(e, t, s, r, !0).utc();
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
function y(e) {
  return e._pf == null && (e._pf = Xs()), e._pf;
}
var ut;
Array.prototype.some ? ut = Array.prototype.some : ut = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function gt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = y(e), s = ut.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function ze(e) {
  var t = B(NaN);
  return e != null ? ie(y(t), e) : y(t).userInvalidated = !0, t;
}
var Gt = l.momentProperties = [], nt = !1;
function kt(e, t) {
  var s, r, a, n = Gt.length;
  if (C(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), C(t._i) || (e._i = t._i), C(t._f) || (e._f = t._f), C(t._l) || (e._l = t._l), C(t._strict) || (e._strict = t._strict), C(t._tzm) || (e._tzm = t._tzm), C(t._isUTC) || (e._isUTC = t._isUTC), C(t._offset) || (e._offset = t._offset), C(t._pf) || (e._pf = y(t)), C(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = Gt[s], a = t[r], C(a) || (e[r] = a);
  return e;
}
function Pe(e) {
  kt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), nt === !1 && (nt = !0, l.updateOffset(this), nt = !1);
}
function j(e) {
  return e instanceof Pe || e != null && e._isAMomentObject != null;
}
function Kt(e) {
  l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function U(e, t) {
  var s = !0;
  return ie(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var r = [], a, n, i, u = arguments.length;
      for (n = 0; n < u; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            M(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
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
var jt = {};
function es(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), jt[e] || (Kt(t), jt[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function q(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ks(e) {
  var t, s;
  for (s in e)
    M(e, s) && (t = e[s], q(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function dt(e, t) {
  var s = ie({}, e), r;
  for (r in t)
    M(t, r) && (ce(e[r]) && ce(t[r]) ? (s[r] = {}, ie(s[r], e[r]), ie(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    M(e, r) && !M(t, r) && ce(e[r]) && (s[r] = ie({}, s[r]));
  return s;
}
function wt(e) {
  e != null && this.set(e);
}
var ct;
Object.keys ? ct = Object.keys : ct = function(e) {
  var t, s = [];
  for (t in e)
    M(e, t) && s.push(t);
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
  return q(r) ? r.call(t, s) : r;
}
function Z(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Mt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ee = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, it = {}, ge = {};
function c(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (ge[e] = a), t && (ge[t[0]] = function() {
    return Z(a.apply(this, arguments), t[1], t[2]);
  }), s && (ge[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function sr(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function rr(e) {
  var t = e.match(Mt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    ge[t[s]] ? t[s] = ge[t[s]] : t[s] = sr(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += q(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Le(e, t) {
  return e.isValid() ? (t = ts(t, e.localeData()), it[t] = it[t] || rr(t), it[t](e)) : e.localeData().invalidDate();
}
function ts(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Ee.lastIndex = 0; s >= 0 && Ee.test(e); )
    e = e.replace(
      Ee,
      r
    ), Ee.lastIndex = 0, s -= 1;
  return e;
}
var ar = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function nr(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(Mt).map(function(r) {
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
function fr(e, t, s, r) {
  var a = this._relativeTime[s];
  return q(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function hr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return q(s) ? s(t) : s.replace(/%s/i, t);
}
var zt = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function H(e) {
  return typeof e == "string" ? zt[e] || zt[e.toLowerCase()] : void 0;
}
function Dt(e) {
  var t = {}, s, r;
  for (r in e)
    M(e, r) && (s = H(r), s && (t[s] = e[r]));
  return t;
}
var mr = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function yr(e) {
  var t = [], s;
  for (s in e)
    M(e, s) && t.push({ unit: s, priority: mr[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var ss = /\d/, L = /\d\d/, rs = /\d{3}/, vt = /\d{4}/, $e = /[+-]?\d{6}/, p = /\d\d?/, as = /\d\d\d\d?/, ns = /\d\d\d\d\d\d?/, Ze = /\d{1,3}/, St = /\d{1,4}/, Be = /[+-]?\d{1,6}/, Me = /\d+/, qe = /[+-]?\d+/, _r = /Z|[+-]\d\d:?\d\d/gi, Je = /Z|[+-]\d\d(?::?\d\d)?/gi, gr = /[+-]?\d+(\.\d{1,3})?/, Re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, De = /^[1-9]\d?/, pt = /^([1-9]\d|\d)/, He;
He = {};
function d(e, t, s) {
  He[e] = q(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function kr(e, t) {
  return M(He, e) ? He[e](t._strict, t._locale) : new RegExp(wr(e));
}
function wr(e) {
  return te(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function te(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function I(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = I(t)), s;
}
var ft = {};
function v(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), re(t) && (r = function(n, i) {
    i[t] = _(n);
  }), a = e.length, s = 0; s < a; s++)
    ft[e[s]] = r;
}
function Fe(e, t) {
  v(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function Mr(e, t, s) {
  t != null && M(ft, e) && ft[e](t, s._a, s, e);
}
function Qe(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var F = 0, K = 1, $ = 2, N = 3, V = 4, ee = 5, de = 6, Dr = 7, vr = 8;
c("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Z(e, 4) : "+" + e;
});
c(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
c(0, ["YYYY", 4], 0, "year");
c(0, ["YYYYY", 5], 0, "year");
c(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", qe);
d("YY", p, L);
d("YYYY", St, vt);
d("YYYYY", Be, $e);
d("YYYYYY", Be, $e);
v(["YYYYY", "YYYYYY"], F);
v("YYYY", function(e, t) {
  t[F] = e.length === 2 ? l.parseTwoDigitYear(e) : _(e);
});
v("YY", function(e, t) {
  t[F] = l.parseTwoDigitYear(e);
});
v("Y", function(e, t) {
  t[F] = parseInt(e, 10);
});
function Oe(e) {
  return Qe(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var is = ve("FullYear", !0);
function Sr() {
  return Qe(this.year());
}
function ve(e, t) {
  return function(s) {
    return s != null ? (os(this, e, s), l.updateOffset(this, t), this) : Te(this, e);
  };
}
function Te(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function os(e, t, s) {
  var r, a, n, i, u;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    n = s, i = e.month(), u = e.date(), u = u === 29 && i === 1 && !Qe(n) ? 28 : u, a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u);
  }
}
function pr(e) {
  return e = H(e), q(this[e]) ? this[e]() : this;
}
function Yr(e, t) {
  if (typeof e == "object") {
    e = Dt(e);
    var s = yr(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = H(e), q(this[e]))
    return this[e](t);
  return this;
}
function Or(e, t) {
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
function Yt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Or(t, 12);
  return e += (t - s) / 12, s === 1 ? Qe(e) ? 29 : 28 : 31 - s % 7 % 2;
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
d("M", p, De);
d("MM", p, L);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
v(["M", "MM"], function(e, t) {
  t[K] = _(e) - 1;
});
v(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[K] = a : y(s).invalidMonth = e;
});
var Tr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ls = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), us = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, br = Re, xr = Re;
function Nr(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || us).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function Wr(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[us.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Pr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = B([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = O.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = O.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = O.call(this._shortMonthsParse, i), a !== -1 ? a : (a = O.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = O.call(this._longMonthsParse, i), a !== -1 ? a : (a = O.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Rr(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return Pr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = B([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function ds(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = _(t);
    else if (t = e.localeData().monthsParse(t), !re(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Yt(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function cs(e) {
  return e != null ? (ds(this, e), l.updateOffset(this, !0), this) : Te(this, "Month");
}
function Fr() {
  return Yt(this.year(), this.month());
}
function Er(e) {
  return this._monthsParseExact ? (M(this, "_monthsRegex") || fs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (M(this, "_monthsShortRegex") || (this._monthsShortRegex = br), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Cr(e) {
  return this._monthsParseExact ? (M(this, "_monthsRegex") || fs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (M(this, "_monthsRegex") || (this._monthsRegex = xr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function fs() {
  function e(f, h) {
    return h.length - f.length;
  }
  var t = [], s = [], r = [], a, n, i, u;
  for (a = 0; a < 12; a++)
    n = B([2e3, a]), i = te(this.monthsShort(n, "")), u = te(this.months(n, "")), t.push(i), s.push(u), r.push(u), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Lr(e, t, s, r, a, n, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, n, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, n, i), u;
}
function be(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ae(e, t, s) {
  var r = 7 + t - s, a = (7 + be(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function hs(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = Ae(e, r, a), u = 1 + 7 * (t - 1) + n + i, f, h;
  return u <= 0 ? (f = e - 1, h = Oe(f) + u) : u > Oe(e) ? (f = e + 1, h = u - Oe(e)) : (f = e, h = u), {
    year: f,
    dayOfYear: h
  };
}
function xe(e, t, s) {
  var r = Ae(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + se(i, t, s)) : a > se(e.year(), t, s) ? (n = a - se(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function se(e, t, s) {
  var r = Ae(e, t, s), a = Ae(e + 1, t, s);
  return (Oe(e) - r + a) / 7;
}
c("w", ["ww", 2], "wo", "week");
c("W", ["WW", 2], "Wo", "isoWeek");
d("w", p, De);
d("ww", p, L);
d("W", p, De);
d("WW", p, L);
Fe(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = _(e);
  }
);
function Ir(e) {
  return xe(e, this._week.dow, this._week.doy).week;
}
var Ur = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Hr() {
  return this._week.dow;
}
function Ar() {
  return this._week.doy;
}
function Vr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Gr(e) {
  var t = xe(this, 1, 4).week;
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
d("d", p);
d("e", p);
d("E", p);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Fe(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : y(s).invalidWeekday = e;
});
Fe(["d", "e", "E"], function(e, t, s, r) {
  t[r] = _(e);
});
function jr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function zr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Ot(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var $r = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ms = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Zr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Br = Re, qr = Re, Jr = Re;
function Qr(e, t) {
  var s = G(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Ot(s, this._week.dow) : e ? s[e.day()] : s;
}
function Xr(e) {
  return e === !0 ? Ot(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Kr(e) {
  return e === !0 ? Ot(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ea(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = B([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = O.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = O.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = O.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = O.call(this._weekdaysParse, i), a !== -1 || (a = O.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = O.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = O.call(this._shortWeekdaysParse, i), a !== -1 || (a = O.call(this._weekdaysParse, i), a !== -1) ? a : (a = O.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = O.call(this._minWeekdaysParse, i), a !== -1 || (a = O.call(this._weekdaysParse, i), a !== -1) ? a : (a = O.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function ta(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return ea.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = B([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function sa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Te(this, "Day");
  return e != null ? (e = jr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function ra(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function aa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = zr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function na(e) {
  return this._weekdaysParseExact ? (M(this, "_weekdaysRegex") || Tt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (M(this, "_weekdaysRegex") || (this._weekdaysRegex = Br), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function ia(e) {
  return this._weekdaysParseExact ? (M(this, "_weekdaysRegex") || Tt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (M(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function oa(e) {
  return this._weekdaysParseExact ? (M(this, "_weekdaysRegex") || Tt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (M(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Jr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Tt() {
  function e(T, W) {
    return W.length - T.length;
  }
  var t = [], s = [], r = [], a = [], n, i, u, f, h;
  for (n = 0; n < 7; n++)
    i = B([2e3, 1]).day(n), u = te(this.weekdaysMin(i, "")), f = te(this.weekdaysShort(i, "")), h = te(this.weekdays(i, "")), t.push(u), s.push(f), r.push(h), a.push(u), a.push(f), a.push(h);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function bt() {
  return this.hours() % 12 || 12;
}
function la() {
  return this.hours() || 24;
}
c("H", ["HH", 2], 0, "hour");
c("h", ["hh", 2], 0, bt);
c("k", ["kk", 2], 0, la);
c("hmm", 0, 0, function() {
  return "" + bt.apply(this) + Z(this.minutes(), 2);
});
c("hmmss", 0, 0, function() {
  return "" + bt.apply(this) + Z(this.minutes(), 2) + Z(this.seconds(), 2);
});
c("Hmm", 0, 0, function() {
  return "" + this.hours() + Z(this.minutes(), 2);
});
c("Hmmss", 0, 0, function() {
  return "" + this.hours() + Z(this.minutes(), 2) + Z(this.seconds(), 2);
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
function _s(e, t) {
  return t._meridiemParse;
}
d("a", _s);
d("A", _s);
d("H", p, pt);
d("h", p, De);
d("k", p, De);
d("HH", p, L);
d("hh", p, L);
d("kk", p, L);
d("hmm", as);
d("hmmss", ns);
d("Hmm", as);
d("Hmmss", ns);
v(["H", "HH"], N);
v(["k", "kk"], function(e, t, s) {
  var r = _(e);
  t[N] = r === 24 ? 0 : r;
});
v(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
v(["h", "hh"], function(e, t, s) {
  t[N] = _(e), y(s).bigHour = !0;
});
v("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[N] = _(e.substr(0, r)), t[V] = _(e.substr(r)), y(s).bigHour = !0;
});
v("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[N] = _(e.substr(0, r)), t[V] = _(e.substr(r, 2)), t[ee] = _(e.substr(a)), y(s).bigHour = !0;
});
v("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[N] = _(e.substr(0, r)), t[V] = _(e.substr(r));
});
v("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[N] = _(e.substr(0, r)), t[V] = _(e.substr(r, 2)), t[ee] = _(e.substr(a));
});
function ua(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var da = /[ap]\.?m?\.?/i, ca = ve("Hours", !0);
function fa(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var gs = {
  calendar: er,
  longDateFormat: ar,
  invalidDate: ir,
  ordinal: lr,
  dayOfMonthOrdinalParse: ur,
  relativeTime: cr,
  months: Tr,
  monthsShort: ls,
  week: Ur,
  weekdays: $r,
  weekdaysMin: Zr,
  weekdaysShort: ms,
  meridiemParse: da
}, Y = {}, pe = {}, Ne;
function ha(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function $t(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ma(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = $t(e[t]).split("-"), s = n.length, r = $t(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Xe(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && ha(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Ne;
}
function ya(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Xe(e) {
  var t = null, s;
  if (Y[e] === void 0 && typeof module < "u" && module && module.exports && ya(e))
    try {
      t = Ne._abbr, s = require, s("./locale/" + e), le(t);
    } catch {
      Y[e] = null;
    }
  return Y[e];
}
function le(e, t) {
  var s;
  return e && (C(t) ? s = ae(e) : s = xt(e, t), s ? Ne = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Ne._abbr;
}
function xt(e, t) {
  if (t !== null) {
    var s, r = gs;
    if (t.abbr = e, Y[e] != null)
      es(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Y[e]._config;
    else if (t.parentLocale != null)
      if (Y[t.parentLocale] != null)
        r = Y[t.parentLocale]._config;
      else if (s = Xe(t.parentLocale), s != null)
        r = s._config;
      else
        return pe[t.parentLocale] || (pe[t.parentLocale] = []), pe[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Y[e] = new wt(dt(r, t)), pe[e] && pe[e].forEach(function(a) {
      xt(a.name, a.config);
    }), le(e), Y[e];
  } else
    return delete Y[e], null;
}
function _a(e, t) {
  if (t != null) {
    var s, r, a = gs;
    Y[e] != null && Y[e].parentLocale != null ? Y[e].set(dt(Y[e]._config, t)) : (r = Xe(e), r != null && (a = r._config), t = dt(a, t), r == null && (t.abbr = e), s = new wt(t), s.parentLocale = Y[e], Y[e] = s), le(e);
  } else
    Y[e] != null && (Y[e].parentLocale != null ? (Y[e] = Y[e].parentLocale, e === le() && le(e)) : Y[e] != null && delete Y[e]);
  return Y[e];
}
function ae(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Ne;
  if (!G(e)) {
    if (t = Xe(e), t)
      return t;
    e = [e];
  }
  return ma(e);
}
function ga() {
  return ct(Y);
}
function Nt(e) {
  var t, s = e._a;
  return s && y(e).overflow === -2 && (t = s[K] < 0 || s[K] > 11 ? K : s[$] < 1 || s[$] > Yt(s[F], s[K]) ? $ : s[N] < 0 || s[N] > 24 || s[N] === 24 && (s[V] !== 0 || s[ee] !== 0 || s[de] !== 0) ? N : s[V] < 0 || s[V] > 59 ? V : s[ee] < 0 || s[ee] > 59 ? ee : s[de] < 0 || s[de] > 999 ? de : -1, y(e)._overflowDayOfYear && (t < F || t > $) && (t = $), y(e)._overflowWeeks && t === -1 && (t = Dr), y(e)._overflowWeekday && t === -1 && (t = vr), y(e).overflow = t), e;
}
var ka = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, wa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ma = /Z|[+-]\d\d(?::?\d\d)?/, Ce = [
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
], ot = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Da = /^\/?Date\((-?\d+)/i, va = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Sa = {
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
  var t, s, r = e._i, a = ka.exec(r) || wa.exec(r), n, i, u, f, h = Ce.length, T = ot.length;
  if (a) {
    for (y(e).iso = !0, t = 0, s = h; t < s; t++)
      if (Ce[t][1].exec(a[1])) {
        i = Ce[t][0], n = Ce[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = T; t < s; t++)
        if (ot[t][1].exec(a[3])) {
          u = (a[2] || " ") + ot[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Ma.exec(a[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (f || ""), Pt(e);
  } else
    e._isValid = !1;
}
function pa(e, t, s, r, a, n) {
  var i = [
    Ya(e),
    ls.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Ya(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Oa(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Ta(e, t, s) {
  if (e) {
    var r = ms.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return y(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function ba(e, t, s) {
  if (e)
    return Sa[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function ws(e) {
  var t = va.exec(Oa(e._i)), s;
  if (t) {
    if (s = pa(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Ta(t[1], s, e))
      return;
    e._a = s, e._tzm = ba(t[8], t[9], t[10]), e._d = be.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function xa(e) {
  var t = Da.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (ks(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (ws(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = U(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ye(e, t, s) {
  return e ?? t ?? s;
}
function Na(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Wt(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = Na(e), e._w && e._a[$] == null && e._a[K] == null && Wa(e), e._dayOfYear != null && (i = ye(e._a[F], a[F]), (e._dayOfYear > Oe(i) || e._dayOfYear === 0) && (y(e)._overflowDayOfYear = !0), s = be(i, 0, e._dayOfYear), e._a[K] = s.getUTCMonth(), e._a[$] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[N] === 24 && e._a[V] === 0 && e._a[ee] === 0 && e._a[de] === 0 && (e._nextDay = !0, e._a[N] = 0), e._d = (e._useUTC ? be : Lr).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[N] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (y(e).weekdayMismatch = !0);
  }
}
function Wa(e) {
  var t, s, r, a, n, i, u, f, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = ye(
    t.GG,
    e._a[F],
    xe(S(), 1, 4).year
  ), r = ye(t.W, 1), a = ye(t.E, 1), (a < 1 || a > 7) && (f = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, h = xe(S(), n, i), s = ye(t.gg, e._a[F], h.year), r = ye(t.w, h.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (f = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (f = !0)) : a = n), r < 1 || r > se(s, n, i) ? y(e)._overflowWeeks = !0 : f != null ? y(e)._overflowWeekday = !0 : (u = hs(s, r, a, n, i), e._a[F] = u.year, e._dayOfYear = u.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function Pt(e) {
  if (e._f === l.ISO_8601) {
    ks(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    ws(e);
    return;
  }
  e._a = [], y(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, u = t.length, f = 0, h, T;
  for (a = ts(e._f, e._locale).match(Mt) || [], T = a.length, s = 0; s < T; s++)
    n = a[s], r = (t.match(kr(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && y(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), ge[n] ? (r ? y(e).empty = !1 : y(e).unusedTokens.push(n), Mr(n, r, e)) : e._strict && !r && y(e).unusedTokens.push(n);
  y(e).charsLeftOver = u - f, t.length > 0 && y(e).unusedInput.push(t), e._a[N] <= 12 && y(e).bigHour === !0 && e._a[N] > 0 && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[N] = Pa(
    e._locale,
    e._a[N],
    e._meridiem
  ), h = y(e).era, h !== null && (e._a[F] = e._locale.erasConvertYear(h, e._a[F])), Wt(e), Nt(e);
}
function Pa(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Ra(e) {
  var t, s, r, a, n, i, u = !1, f = e._f.length;
  if (f === 0) {
    y(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < f; a++)
    n = 0, i = !1, t = kt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Pt(t), gt(t) && (i = !0), n += y(t).charsLeftOver, n += y(t).unusedTokens.length * 10, y(t).score = n, u ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (u = !0));
  ie(e, s || t);
}
function Fa(e) {
  if (!e._d) {
    var t = Dt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Xt(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Wt(e);
  }
}
function Ea(e) {
  var t = new Pe(Nt(Ms(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ms(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || ae(e._l), t === null || s === void 0 && t === "" ? ze({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), j(t) ? new Pe(Nt(t)) : (We(t) ? e._d = t : G(s) ? Ra(e) : s ? Pt(e) : Ca(e), gt(e) || (e._d = null), e));
}
function Ca(e) {
  var t = e._i;
  C(t) ? e._d = new Date(l.now()) : We(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? xa(e) : G(t) ? (e._a = Xt(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Wt(e)) : ce(t) ? Fa(e) : re(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function Ds(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ce(e) && _t(e) || G(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, Ea(n);
}
function S(e, t, s, r) {
  return Ds(e, t, s, r, !1);
}
var La = U(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : ze();
  }
), Ia = U(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : ze();
  }
);
function vs(e, t) {
  var s, r;
  if (t.length === 1 && G(t[0]) && (t = t[0]), !t.length)
    return S();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function Ua() {
  var e = [].slice.call(arguments, 0);
  return vs("isBefore", e);
}
function Ha() {
  var e = [].slice.call(arguments, 0);
  return vs("isAfter", e);
}
var Aa = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ye = [
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
function Va(e) {
  var t, s = !1, r, a = Ye.length;
  for (t in e)
    if (M(e, t) && !(O.call(Ye, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[Ye[r]]) {
      if (s)
        return !1;
      parseFloat(e[Ye[r]]) !== _(e[Ye[r]]) && (s = !0);
    }
  return !0;
}
function Ga() {
  return this._isValid;
}
function ja() {
  return z(NaN);
}
function Ke(e) {
  var t = Dt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, f = t.minute || 0, h = t.second || 0, T = t.millisecond || 0;
  this._isValid = Va(t), this._milliseconds = +T + h * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = ae(), this._bubble();
}
function Ie(e) {
  return e instanceof Ke;
}
function ht(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function za(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    (s && e[i] !== t[i] || !s && _(e[i]) !== _(t[i])) && n++;
  return n + a;
}
function Ss(e, t) {
  c(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + Z(~~(s / 60), 2) + t + Z(~~s % 60, 2);
  });
}
Ss("Z", ":");
Ss("ZZ", "");
d("Z", Je);
d("ZZ", Je);
v(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Rt(Je, e);
});
var $a = /([\+\-]|\d\d)/gi;
function Rt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match($a) || ["-", 0, 0], n = +(a[1] * 60) + _(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Ft(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (j(e) || We(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : S(e).local();
}
function mt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Za(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Rt(Je, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = mt(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Os(
      this,
      z(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : mt(this);
}
function Ba(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function qa(e) {
  return this.utcOffset(0, e);
}
function Ja(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(mt(this), "m")), this;
}
function Qa() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Rt(_r, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Xa(e) {
  return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Ka() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function en() {
  if (!C(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return kt(e, this), e = Ms(e), e._a ? (t = e._isUTC ? B(e._a) : S(e._a), this._isDSTShifted = this.isValid() && za(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function tn() {
  return this.isValid() ? !this._isUTC : !1;
}
function sn() {
  return this.isValid() ? this._isUTC : !1;
}
function ps() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var rn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, an = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function z(e, t) {
  var s = e, r = null, a, n, i;
  return Ie(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : re(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = rn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: _(r[$]) * a,
    h: _(r[N]) * a,
    m: _(r[V]) * a,
    s: _(r[ee]) * a,
    ms: _(ht(r[de] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = an.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ue(r[2], a),
    M: ue(r[3], a),
    w: ue(r[4], a),
    d: ue(r[5], a),
    h: ue(r[6], a),
    m: ue(r[7], a),
    s: ue(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = nn(
    S(s.from),
    S(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new Ke(s), Ie(e) && M(e, "_locale") && (n._locale = e._locale), Ie(e) && M(e, "_isValid") && (n._isValid = e._isValid), n;
}
z.fn = Ke.prototype;
z.invalid = ja;
function ue(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Zt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function nn(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ft(t, e), e.isBefore(t) ? s = Zt(e, t) : (s = Zt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Ys(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (es(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = z(s, r), Os(this, a, e), this;
  };
}
function Os(e, t, s, r) {
  var a = t._milliseconds, n = ht(t._days), i = ht(t._months);
  e.isValid() && (r = r ?? !0, i && ds(e, Te(e, "Month") + i * s), n && os(e, "Date", Te(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && l.updateOffset(e, n || i));
}
var on = Ys(1, "add"), ln = Ys(-1, "subtract");
function Ts(e) {
  return typeof e == "string" || e instanceof String;
}
function un(e) {
  return j(e) || We(e) || Ts(e) || re(e) || cn(e) || dn(e) || e === null || e === void 0;
}
function dn(e) {
  var t = ce(e) && !_t(e), s = !1, r = [
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
  ], a, n, i = r.length;
  for (a = 0; a < i; a += 1)
    n = r[a], s = s || M(e, n);
  return t && s;
}
function cn(e) {
  var t = G(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !re(r) && Ts(e);
  }).length === 0), t && s;
}
function fn(e) {
  var t = ce(e) && !_t(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || M(e, n);
  return t && s;
}
function hn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function mn(e, t) {
  arguments.length === 1 && (arguments[0] ? un(arguments[0]) ? (e = arguments[0], t = void 0) : fn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || S(), r = Ft(s, this).startOf("day"), a = l.calendarFormat(this, r) || "sameElse", n = t && (q(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, S(s))
  );
}
function yn() {
  return new Pe(this);
}
function _n(e, t) {
  var s = j(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = H(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function gn(e, t) {
  var s = j(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = H(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function kn(e, t, s, r) {
  var a = j(e) ? e : S(e), n = j(t) ? t : S(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function wn(e, t) {
  var s = j(e) ? e : S(e), r;
  return this.isValid() && s.isValid() ? (t = H(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Mn(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Dn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function vn(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = Ft(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = H(t), t) {
    case "year":
      n = Ue(this, r) / 12;
      break;
    case "month":
      n = Ue(this, r);
      break;
    case "quarter":
      n = Ue(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    case "minute":
      n = (this - r) / 6e4;
      break;
    case "hour":
      n = (this - r) / 36e5;
      break;
    case "day":
      n = (this - r - a) / 864e5;
      break;
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    default:
      n = this - r;
  }
  return s ? n : I(n);
}
function Ue(e, t) {
  if (e.date() < t.date())
    return -Ue(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Sn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function pn(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Le(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : q(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Le(s, "Z")) : Le(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Yn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function On(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Le(this, e);
  return this.localeData().postformat(t);
}
function Tn(e, t) {
  return this.isValid() && (j(e) && e.isValid() || S(e).isValid()) ? z({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function bn(e) {
  return this.from(S(), e);
}
function xn(e, t) {
  return this.isValid() && (j(e) && e.isValid() || S(e).isValid()) ? z({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Nn(e) {
  return this.to(S(), e);
}
function bs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ae(e), t != null && (this._locale = t), this);
}
var xs = U(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ns() {
  return this._locale;
}
var Ve = 1e3, ke = 60 * Ve, Ge = 60 * ke, Ws = (365 * 400 + 97) * 24 * Ge;
function we(e, t) {
  return (e % t + t) % t;
}
function Ps(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Ws : new Date(e, t, s).valueOf();
}
function Rs(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Ws : Date.UTC(e, t, s);
}
function Wn(e) {
  var t, s;
  if (e = H(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Rs : Ps, e) {
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
      t = this._d.valueOf(), t -= we(
        t + (this._isUTC ? 0 : this.utcOffset() * ke),
        Ge
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= we(t, ke);
      break;
    case "second":
      t = this._d.valueOf(), t -= we(t, Ve);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Pn(e) {
  var t, s;
  if (e = H(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Rs : Ps, e) {
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
      t = this._d.valueOf(), t += Ge - we(
        t + (this._isUTC ? 0 : this.utcOffset() * ke),
        Ge
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ke - we(t, ke) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ve - we(t, Ve) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Rn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Fn() {
  return Math.floor(this.valueOf() / 1e3);
}
function En() {
  return new Date(this.valueOf());
}
function Cn() {
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
function Ln() {
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
function In() {
  return this.isValid() ? this.toISOString() : null;
}
function Un() {
  return gt(this);
}
function Hn() {
  return ie({}, y(this));
}
function An() {
  return y(this).overflow;
}
function Vn() {
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
d("N", Et);
d("NN", Et);
d("NNN", Et);
d("NNNN", Kn);
d("NNNNN", ei);
v(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? y(s).era = a : y(s).invalidEra = e;
  }
);
d("y", Me);
d("yy", Me);
d("yyy", Me);
d("yyyy", Me);
d("yo", ti);
v(["y", "yy", "yyy", "yyyy"], F);
v(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[F] = s._locale.eraYearOrdinalParse(e, a) : t[F] = parseInt(e, 10);
});
function Gn(e, t) {
  var s, r, a, n = this._eras || ae("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = l(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = l(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function jn(e, t, s) {
  var r, a, n = this.eras(), i, u, f;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), u = n[r].abbr.toUpperCase(), f = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return n[r];
          break;
        case "NNNN":
          if (i === e)
            return n[r];
          break;
        case "NNNNN":
          if (f === e)
            return n[r];
          break;
      }
    else if ([i, u, f].indexOf(e) >= 0)
      return n[r];
}
function zn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function $n() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Zn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function Bn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function qn() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Jn(e) {
  return M(this, "_erasNameRegex") || Ct.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Qn(e) {
  return M(this, "_erasAbbrRegex") || Ct.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Xn(e) {
  return M(this, "_erasNarrowRegex") || Ct.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Et(e, t) {
  return t.erasAbbrRegex(e);
}
function Kn(e, t) {
  return t.erasNameRegex(e);
}
function ei(e, t) {
  return t.erasNarrowRegex(e);
}
function ti(e, t) {
  return t._eraYearOrdinalRegex || Me;
}
function Ct() {
  var e = [], t = [], s = [], r = [], a, n, i, u, f, h = this.eras();
  for (a = 0, n = h.length; a < n; ++a)
    i = te(h[a].name), u = te(h[a].abbr), f = te(h[a].narrow), t.push(i), e.push(u), s.push(f), r.push(i), r.push(u), r.push(f);
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
function et(e, t) {
  c(0, [e, e.length], 0, t);
}
et("gggg", "weekYear");
et("ggggg", "weekYear");
et("GGGG", "isoWeekYear");
et("GGGGG", "isoWeekYear");
d("G", qe);
d("g", qe);
d("GG", p, L);
d("gg", p, L);
d("GGGG", St, vt);
d("gggg", St, vt);
d("GGGGG", Be, $e);
d("ggggg", Be, $e);
Fe(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = _(e);
  }
);
Fe(["gg", "GG"], function(e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function si(e) {
  return Fs.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function ri(e) {
  return Fs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ai() {
  return se(this.year(), 1, 4);
}
function ni() {
  return se(this.isoWeekYear(), 1, 4);
}
function ii() {
  var e = this.localeData()._week;
  return se(this.year(), e.dow, e.doy);
}
function oi() {
  var e = this.localeData()._week;
  return se(this.weekYear(), e.dow, e.doy);
}
function Fs(e, t, s, r, a) {
  var n;
  return e == null ? xe(this, r, a).year : (n = se(e, r, a), t > n && (t = n), li.call(this, e, t, s, r, a));
}
function li(e, t, s, r, a) {
  var n = hs(e, t, s, r, a), i = be(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
c("Q", 0, "Qo", "quarter");
d("Q", ss);
v("Q", function(e, t) {
  t[K] = (_(e) - 1) * 3;
});
function ui(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
c("D", ["DD", 2], "Do", "date");
d("D", p, De);
d("DD", p, L);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
v(["D", "DD"], $);
v("Do", function(e, t) {
  t[$] = _(e.match(p)[0]);
});
var Es = ve("Date", !0);
c("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", Ze);
d("DDDD", rs);
v(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = _(e);
});
function di(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
c("m", ["mm", 2], 0, "minute");
d("m", p, pt);
d("mm", p, L);
v(["m", "mm"], V);
var ci = ve("Minutes", !1);
c("s", ["ss", 2], 0, "second");
d("s", p, pt);
d("ss", p, L);
v(["s", "ss"], ee);
var fi = ve("Seconds", !1);
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
d("S", Ze, ss);
d("SS", Ze, L);
d("SSS", Ze, rs);
var oe, Cs;
for (oe = "SSSS"; oe.length <= 9; oe += "S")
  d(oe, Me);
function hi(e, t) {
  t[de] = _(("0." + e) * 1e3);
}
for (oe = "S"; oe.length <= 9; oe += "S")
  v(oe, hi);
Cs = ve("Milliseconds", !1);
c("z", 0, 0, "zoneAbbr");
c("zz", 0, 0, "zoneName");
function mi() {
  return this._isUTC ? "UTC" : "";
}
function yi() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = Pe.prototype;
o.add = on;
o.calendar = mn;
o.clone = yn;
o.diff = vn;
o.endOf = Pn;
o.format = On;
o.from = Tn;
o.fromNow = bn;
o.to = xn;
o.toNow = Nn;
o.get = pr;
o.invalidAt = An;
o.isAfter = _n;
o.isBefore = gn;
o.isBetween = kn;
o.isSame = wn;
o.isSameOrAfter = Mn;
o.isSameOrBefore = Dn;
o.isValid = Un;
o.lang = xs;
o.locale = bs;
o.localeData = Ns;
o.max = Ia;
o.min = La;
o.parsingFlags = Hn;
o.set = Yr;
o.startOf = Wn;
o.subtract = ln;
o.toArray = Cn;
o.toObject = Ln;
o.toDate = En;
o.toISOString = pn;
o.inspect = Yn;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
o.toJSON = In;
o.toString = Sn;
o.unix = Fn;
o.valueOf = Rn;
o.creationData = Vn;
o.eraName = $n;
o.eraNarrow = Zn;
o.eraAbbr = Bn;
o.eraYear = qn;
o.year = is;
o.isLeapYear = Sr;
o.weekYear = si;
o.isoWeekYear = ri;
o.quarter = o.quarters = ui;
o.month = cs;
o.daysInMonth = Fr;
o.week = o.weeks = Vr;
o.isoWeek = o.isoWeeks = Gr;
o.weeksInYear = ii;
o.weeksInWeekYear = oi;
o.isoWeeksInYear = ai;
o.isoWeeksInISOWeekYear = ni;
o.date = Es;
o.day = o.days = sa;
o.weekday = ra;
o.isoWeekday = aa;
o.dayOfYear = di;
o.hour = o.hours = ca;
o.minute = o.minutes = ci;
o.second = o.seconds = fi;
o.millisecond = o.milliseconds = Cs;
o.utcOffset = Za;
o.utc = qa;
o.local = Ja;
o.parseZone = Qa;
o.hasAlignedHourOffset = Xa;
o.isDST = Ka;
o.isLocal = tn;
o.isUtcOffset = sn;
o.isUtc = ps;
o.isUTC = ps;
o.zoneAbbr = mi;
o.zoneName = yi;
o.dates = U(
  "dates accessor is deprecated. Use date instead.",
  Es
);
o.months = U(
  "months accessor is deprecated. Use month instead",
  cs
);
o.years = U(
  "years accessor is deprecated. Use year instead",
  is
);
o.zone = U(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ba
);
o.isDSTShifted = U(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  en
);
function _i(e) {
  return S(e * 1e3);
}
function gi() {
  return S.apply(null, arguments).parseZone();
}
function Ls(e) {
  return e;
}
var D = wt.prototype;
D.calendar = tr;
D.longDateFormat = nr;
D.invalidDate = or;
D.ordinal = dr;
D.preparse = Ls;
D.postformat = Ls;
D.relativeTime = fr;
D.pastFuture = hr;
D.set = Ks;
D.eras = Gn;
D.erasParse = jn;
D.erasConvertYear = zn;
D.erasAbbrRegex = Qn;
D.erasNameRegex = Jn;
D.erasNarrowRegex = Xn;
D.months = Nr;
D.monthsShort = Wr;
D.monthsParse = Rr;
D.monthsRegex = Cr;
D.monthsShortRegex = Er;
D.week = Ir;
D.firstDayOfYear = Ar;
D.firstDayOfWeek = Hr;
D.weekdays = Qr;
D.weekdaysMin = Kr;
D.weekdaysShort = Xr;
D.weekdaysParse = ta;
D.weekdaysRegex = na;
D.weekdaysShortRegex = ia;
D.weekdaysMinRegex = oa;
D.isPM = ua;
D.meridiem = fa;
function je(e, t, s, r) {
  var a = ae(), n = B().set(r, t);
  return a[s](n, e);
}
function Is(e, t, s) {
  if (re(e) && (t = e, e = void 0), e = e || "", t != null)
    return je(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = je(e, r, s, "month");
  return a;
}
function Lt(e, t, s, r) {
  typeof e == "boolean" ? (re(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, re(t) && (s = t, t = void 0), t = t || "");
  var a = ae(), n = e ? a._week.dow : 0, i, u = [];
  if (s != null)
    return je(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    u[i] = je(t, (i + n) % 7, r, "day");
  return u;
}
function ki(e, t) {
  return Is(e, t, "months");
}
function wi(e, t) {
  return Is(e, t, "monthsShort");
}
function Mi(e, t, s) {
  return Lt(e, t, s, "weekdays");
}
function Di(e, t, s) {
  return Lt(e, t, s, "weekdaysShort");
}
function vi(e, t, s) {
  return Lt(e, t, s, "weekdaysMin");
}
le("en", {
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
    var t = e % 10, s = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = U(
  "moment.lang is deprecated. Use moment.locale instead.",
  le
);
l.langData = U(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ae
);
var Q = Math.abs;
function Si() {
  var e = this._data;
  return this._milliseconds = Q(this._milliseconds), this._days = Q(this._days), this._months = Q(this._months), e.milliseconds = Q(e.milliseconds), e.seconds = Q(e.seconds), e.minutes = Q(e.minutes), e.hours = Q(e.hours), e.months = Q(e.months), e.years = Q(e.years), this;
}
function Us(e, t, s, r) {
  var a = z(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function pi(e, t) {
  return Us(this, e, t, 1);
}
function Yi(e, t) {
  return Us(this, e, t, -1);
}
function Bt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Oi() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, f;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Bt(yt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = I(e / 1e3), r.seconds = a % 60, n = I(a / 60), r.minutes = n % 60, i = I(n / 60), r.hours = i % 24, t += I(i / 24), f = I(Hs(t)), s += f, t -= Bt(yt(f)), u = I(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function Hs(e) {
  return e * 4800 / 146097;
}
function yt(e) {
  return e * 146097 / 4800;
}
function Ti(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = H(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Hs(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(yt(this._months)), e) {
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
function ne(e) {
  return function() {
    return this.as(e);
  };
}
var As = ne("ms"), bi = ne("s"), xi = ne("m"), Ni = ne("h"), Wi = ne("d"), Pi = ne("w"), Ri = ne("M"), Fi = ne("Q"), Ei = ne("y"), Ci = As;
function Li() {
  return z(this);
}
function Ii(e) {
  return e = H(e), this.isValid() ? this[e + "s"]() : NaN;
}
function fe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Ui = fe("milliseconds"), Hi = fe("seconds"), Ai = fe("minutes"), Vi = fe("hours"), Gi = fe("days"), ji = fe("months"), zi = fe("years");
function $i() {
  return I(this.days() / 7);
}
var X = Math.round, _e = {
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
function Zi(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Bi(e, t, s, r) {
  var a = z(e).abs(), n = X(a.as("s")), i = X(a.as("m")), u = X(a.as("h")), f = X(a.as("d")), h = X(a.as("M")), T = X(a.as("w")), W = X(a.as("y")), A = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || f <= 1 && ["d"] || f < s.d && ["dd", f];
  return s.w != null && (A = A || T <= 1 && ["w"] || T < s.w && ["ww", T]), A = A || h <= 1 && ["M"] || h < s.M && ["MM", h] || W <= 1 && ["y"] || ["yy", W], A[2] = t, A[3] = +e > 0, A[4] = r, Zi.apply(null, A);
}
function qi(e) {
  return e === void 0 ? X : typeof e == "function" ? (X = e, !0) : !1;
}
function Ji(e, t) {
  return _e[e] === void 0 ? !1 : t === void 0 ? _e[e] : (_e[e] = t, e === "s" && (_e.ss = t - 1), !0);
}
function Qi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = _e, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, _e, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = Bi(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var lt = Math.abs;
function me(e) {
  return (e > 0) - (e < 0) || +e;
}
function tt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = lt(this._milliseconds) / 1e3, t = lt(this._days), s = lt(this._months), r, a, n, i, u = this.asSeconds(), f, h, T, W;
  return u ? (r = I(e / 60), a = I(r / 60), e %= 60, r %= 60, n = I(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = u < 0 ? "-" : "", h = me(this._months) !== me(u) ? "-" : "", T = me(this._days) !== me(u) ? "-" : "", W = me(this._milliseconds) !== me(u) ? "-" : "", f + "P" + (n ? h + n + "Y" : "") + (s ? h + s + "M" : "") + (t ? T + t + "D" : "") + (a || r || e ? "T" : "") + (a ? W + a + "H" : "") + (r ? W + r + "M" : "") + (e ? W + i + "S" : "")) : "P0D";
}
var w = Ke.prototype;
w.isValid = Ga;
w.abs = Si;
w.add = pi;
w.subtract = Yi;
w.as = Ti;
w.asMilliseconds = As;
w.asSeconds = bi;
w.asMinutes = xi;
w.asHours = Ni;
w.asDays = Wi;
w.asWeeks = Pi;
w.asMonths = Ri;
w.asQuarters = Fi;
w.asYears = Ei;
w.valueOf = Ci;
w._bubble = Oi;
w.clone = Li;
w.get = Ii;
w.milliseconds = Ui;
w.seconds = Hi;
w.minutes = Ai;
w.hours = Vi;
w.days = Gi;
w.weeks = $i;
w.months = ji;
w.years = zi;
w.humanize = Qi;
w.toISOString = tt;
w.toString = tt;
w.toJSON = tt;
w.locale = bs;
w.localeData = Ns;
w.toIsoString = U(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  tt
);
w.lang = xs;
c("X", 0, 0, "unix");
c("x", 0, 0, "valueOf");
d("x", qe);
d("X", gr);
v("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
v("x", function(e, t, s) {
  s._d = new Date(_(e));
});
//! moment.js
l.version = "2.30.1";
Qs(S);
l.fn = o;
l.min = Ua;
l.max = Ha;
l.now = Aa;
l.utc = B;
l.unix = _i;
l.months = ki;
l.isDate = We;
l.locale = le;
l.invalid = ze;
l.duration = z;
l.isMoment = j;
l.weekdays = Mi;
l.parseZone = gi;
l.localeData = ae;
l.isDuration = Ie;
l.monthsShort = wi;
l.weekdaysMin = vi;
l.defineLocale = xt;
l.updateLocale = _a;
l.locales = ga;
l.weekdaysShort = Di;
l.normalizeUnits = H;
l.relativeTimeRounding = qi;
l.relativeTimeThreshold = Ji;
l.calendarFormat = hn;
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
  let n = new Date(t).getTime() - r.getTime();
  return Math.round(n / (1e3 * 3600 * 24));
}, Xi = (e, t, s) => {
  const r = l(e), a = l(t).startOf("isoWeek").format("YYYY-MM-DD");
  let n = 0;
  const i = Vs(t, e);
  for (let f = 0; f < i; f++) {
    const h = r.clone().subtract(f, "days");
    h.day() !== 0 && h.day() !== 6 && n++, h.format("YYYY-MM-DD") === a && n--;
  }
  return `${n * 50}`;
}, qt = (e, t, s, r) => {
  const a = l(e), n = Vs(e, t);
  let i = 0;
  for (let h = 0; h < n; h++) {
    const T = a.clone().add(h, "days");
    T.day() !== 0 && T.day() !== 6 && i++;
  }
  const u = i !== 1 ? (i + 1) * 50 : r, f = Xi(e, s);
  return { widthPercentage: u, taskMarginLeft: f };
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
  }, [r, a] = Se([]), [n, i] = Se([]), [u, f] = Se([]), [h, T] = Se([]), [W, A] = Se(null), Gs = (k) => {
    A(W === k ? null : k);
  }, Ut = rt(() => {
    a(t && t.users ? t.users : []);
  }, [t]), Ht = rt(() => {
    const k = l.min(
      r.map(
        (P) => P.tasks.map(
          (R) => l(R.start).startOf("isoWeek")
        )
      ).flat()
    ), g = l.max(
      r.map(
        (P) => P.tasks.map(
          (R, E) => l(R.end).startOf("isoWeek")
        )
      ).flat()
    );
    g.add(1, "weeks");
    const b = [];
    let x = k.clone().startOf("isoWeek");
    for (; x.isBefore(g); ) {
      if (x.startOf("isoWeek").isBefore(g)) {
        const P = x.clone().add(4, "days");
        b.push({
          start: x.format("YYYY-MM-DD"),
          end: P.format("YYYY-MM-DD")
        }), console.log(b);
      }
      x.add(7, "days");
    }
    return b;
  }, [r]), At = rt(() => {
    const k = [];
    return r.forEach(
      (g) => g.tasks.forEach((b) => {
        const x = b.project, P = x.id, R = b.id, E = k.findIndex((he) => he.id === P);
        b.user = st(g, "tasks"), E === -1 ? k.push({
          id: P,
          name: x.name,
          tasks: [b],
          users: [st(g, "tasks")]
        }) : k[0].tasks.findIndex((J) => J.id === R) === -1 && (k[E].tasks.push(), k[E].users.push(st(g, "tasks")));
      })
    ), js(k);
  }, [r]);
  at(() => {
    Ut(), T([]);
  }, [Ut]), at(() => {
    r.length > 0 && f(Ht());
  }, [r, Ht]), at(() => {
    r.length > 0 && i(At());
  }, [r, At]);
  function st(k, g) {
    const { [g]: b, ...x } = k;
    return x;
  }
  function js(k) {
    function g(x) {
      const P = x.tasks.map((J) => new Date(J.start).getTime()), R = x.tasks.map((J) => new Date(J.end).getTime()), E = new Date(Math.min(...P)), he = new Date(Math.max(...R));
      return { startDate: E, endDate: he };
    }
    function b(x, P) {
      const R = g(x), E = g(P);
      return R.startDate < E.startDate ? -1 : R.startDate > E.startDate ? 1 : R.endDate < E.endDate ? -1 : R.endDate > E.endDate ? 1 : 0;
    }
    return [...k].sort(b);
  }
  const zs = It(s, e), $s = (k) => {
    const { widthPercentage: g, taskMarginLeft: b } = qt(
      k.start,
      k.end,
      u[0].start,
      250
    );
    return h.push({ widthPercentage: g, taskMarginLeft: b }), {
      width: `${g}px`,
      left: `calc(${b}px)`
    };
  };
  return /* @__PURE__ */ m.createElement("section", { className: "gantt-container-section" }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-timeline" }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-timeline-header" }, u.map((k, g) => {
    const b = l(k.start, "YYYY-MM-DD"), x = l(k.end, "YYYY-MM-DD"), R = l().startOf("day").isBetween(
      b,
      x.add(2, "days"),
      null,
      "[]"
    );
    return console.log("timelineWeeks"), console.log(u), console.log("week " + g), console.log(k), /* @__PURE__ */ m.createElement(
      "div",
      {
        className: `gantt-container-section-timeline-header-days ${R ? "today" : ""} ${g === 0 ? "start" : g === u.length - 1 ? "end" : ""}`,
        key: g,
        style: zs.daysContainer
      },
      /* @__PURE__ */ m.createElement("p", null, l(k.start).format("DD MMMM"), " -", " ", l(k.end).format("DD MMMM"))
    );
  }))), /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-sidebar" }, n.map((k) => /* @__PURE__ */ m.createElement(
    "div",
    {
      className: "gantt-container-section-sidebar-line",
      key: k.id
    },
    /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-sidebar-tasks project", style: s.sidebarProjects }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-sidebar-task" }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-sidebar-task-client" }, /* @__PURE__ */ m.createElement("p", { className: "gantt-container-section-sidebar-task-client-name" }, k.name)), /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "gantt-container-section-sidebar-task-icon",
        onClick: () => Gs(k.id)
      },
      /* @__PURE__ */ m.createElement(
        "img",
        {
          src: Jt,
          alt: "dropdown-arrow-gantt",
          style: {
            transform: k.id === W ? "rotate(180deg)" : "rotate(0deg)"
          }
        }
      )
    )), k.id === W && /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-sidebar-dropdown-content" }, k.users.map((g) => /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "gantt-container-section-sidebar-dropdown-content-user",
        key: g.id
      },
      /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-sidebar-dropdown-content-user-p" }, /* @__PURE__ */ m.createElement("p", null, g.firstName), /* @__PURE__ */ m.createElement("p", null, g.lastName))
    )))),
    /* @__PURE__ */ m.createElement("div", { className: "gantt-task-container", style: W === k.id ? { flexDirection: "column", marginTop: "115px" } : { flexDirection: "row" } }, k.tasks.map((g, b) => {
      let { width: x, left: P } = $s(g), R = b !== 0 ? h[b - 1].widthPercentage : null, E = new RegExp("(?<=calc\\()\\d+(\\.\\d+)?(?=px\\))"), he = W === k.id ? parseInt(P.match(E)) - R : parseInt(P.match(E));
      return /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-main-tasks project", key: g.id }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-main-tasks-m" }, /* @__PURE__ */ m.createElement(
        "div",
        {
          className: "gantt-container-section-main-tasks-t",
          style: { width: x, left: he }
        },
        /* @__PURE__ */ m.createElement("div", { className: "gantt-container-section-main-tasks-t-content", style: s.taskContainer }, /* @__PURE__ */ m.createElement("p", null, /* @__PURE__ */ m.createElement("span", null, l(g.start).format("DD/MM/YYYY"), " -", " ", l(g.end).format("DD/MM/YYYY"))), /* @__PURE__ */ m.createElement("p", { className: "title" }, g.name), /* @__PURE__ */ m.createElement("p", { className: "description" }, g.description))
      )), /* @__PURE__ */ m.createElement(
        "div",
        {
          className: "gantt-container-section-main-tasks-u",
          key: g.user.id
        },
        g.id === W && /* @__PURE__ */ m.createElement(m.Fragment, null, g.user.tasks.map((J, Zs) => {
          const { widthPercentage: Bs, taskMarginLeft: qs } = qt(
            J.start,
            J.end,
            u[0].start,
            250
          ), Vt = {
            width: `${Bs}px`,
            left: `calc(${qs}px)`
          };
          return Zs > 0 && (Vt.marginLeft = "5px"), /* @__PURE__ */ m.createElement(
            "div",
            {
              className: "gantt-container-section-main-tasks-t",
              key: J.id,
              style: Vt
            }
          );
        }))
      ));
    }))
  ))));
};
function It(e, t) {
  for (const s in t)
    typeof t[s] == "object" ? e[s] = It(e[s] || {}, t[s]) : e[s] = t[s];
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
}, ao = ({ customize: e, data: t }) => {
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
  }, a = () => {
    const i = document.querySelector(".gantt-container-section");
    i && (i.scrollLeft += 500);
  }, n = It(s, e);
  return /* @__PURE__ */ m.createElement("div", { className: "gantt-container" }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-filters" }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-filters-crt" }, /* @__PURE__ */ m.createElement("div", { className: "gantt-container-filters-crt-block" }, /* @__PURE__ */ m.createElement("button", { className: "gantt-container-filters-crt-block-btn-left", onClick: r }, /* @__PURE__ */ m.createElement("img", { src: Jt, alt: "Move Left" })), /* @__PURE__ */ m.createElement("p", { onClick: to, style: n.todayButton }, "Début"), /* @__PURE__ */ m.createElement("p", { onClick: eo, style: n.todayButton }, "Aujourd'hui"), /* @__PURE__ */ m.createElement("p", { onClick: so, style: n.todayButton }, "Fin"), /* @__PURE__ */ m.createElement("button", { className: "gantt-container-filters-crt-block-btn-right", onClick: a }, /* @__PURE__ */ m.createElement("img", { src: Js, alt: "Move Right" }))))), /* @__PURE__ */ m.createElement(
    Ki,
    {
      customize: n,
      data: t
    }
  ));
};
export {
  ao as default,
  so as handleMoveToEnd,
  to as handleMoveToStart,
  eo as handleMoveToToday,
  It as mergeStyles
};
