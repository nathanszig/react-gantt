import ss, { useState as ze, useCallback as $t, useEffect as zt } from "react";
var Qt = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function Sn() {
  if (Br)
    return Ze;
  Br = 1;
  var e = ss, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(d, h, y) {
    var M, N = {}, A = null, Pe = null;
    y !== void 0 && (A = "" + y), h.key !== void 0 && (A = "" + h.key), h.ref !== void 0 && (Pe = h.ref);
    for (M in h)
      s.call(h, M) && !a.hasOwnProperty(M) && (N[M] = h[M]);
    if (d && d.defaultProps)
      for (M in h = d.defaultProps, h)
        N[M] === void 0 && (N[M] = h[M]);
    return { $$typeof: t, type: d, key: A, ref: Pe, props: N, _owner: n.current };
  }
  return Ze.Fragment = r, Ze.jsx = o, Ze.jsxs = o, Ze;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function Mn() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ss, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), Pe = Symbol.for("react.offscreen"), Ve = Symbol.iterator, it = "@@iterator";
    function ot(i) {
      if (i === null || typeof i != "object")
        return null;
      var l = Ve && i[Ve] || i[it];
      return typeof l == "function" ? l : null;
    }
    var ie = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function z(i) {
      {
        for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), v = 1; v < l; v++)
          f[v - 1] = arguments[v];
        Ct("error", i, f);
      }
    }
    function Ct(i, l, f) {
      {
        var v = ie.ReactDebugCurrentFrame, T = v.getStackAddendum();
        T !== "" && (l += "%s", f = f.concat([T]));
        var P = f.map(function(Y) {
          return String(Y);
        });
        P.unshift("Warning: " + l), Function.prototype.apply.call(console[i], console, P);
      }
    }
    var Ft = !1, k = !1, w = !1, F = !1, j = !1, H;
    H = Symbol.for("react.module.reference");
    function $(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === s || i === a || j || i === n || i === y || i === M || F || i === Pe || Ft || k || w || typeof i == "object" && i !== null && (i.$$typeof === A || i.$$typeof === N || i.$$typeof === o || i.$$typeof === d || i.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === H || i.getModuleId !== void 0));
    }
    function Z(i, l, f) {
      var v = i.displayName;
      if (v)
        return v;
      var T = l.displayName || l.name || "";
      return T !== "" ? f + "(" + T + ")" : f;
    }
    function ce(i) {
      return i.displayName || "Context";
    }
    function V(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case y:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case d:
            var l = i;
            return ce(l) + ".Consumer";
          case o:
            var f = i;
            return ce(f._context) + ".Provider";
          case h:
            return Z(i, i.render, "ForwardRef");
          case N:
            var v = i.displayName || null;
            return v !== null ? v : V(i.type) || "Memo";
          case A: {
            var T = i, P = T._payload, Y = T._init;
            try {
              return V(Y(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fe = Object.assign, Oe = 0, lt, Ge, xr, Tr, Rr, Pr, Nr;
    function Er() {
    }
    Er.__reactDisabledLog = !0;
    function Qs() {
      {
        if (Oe === 0) {
          lt = console.log, Ge = console.info, xr = console.warn, Tr = console.error, Rr = console.group, Pr = console.groupCollapsed, Nr = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Er,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        Oe++;
      }
    }
    function Ks() {
      {
        if (Oe--, Oe === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: fe({}, i, {
              value: lt
            }),
            info: fe({}, i, {
              value: Ge
            }),
            warn: fe({}, i, {
              value: xr
            }),
            error: fe({}, i, {
              value: Tr
            }),
            group: fe({}, i, {
              value: Rr
            }),
            groupCollapsed: fe({}, i, {
              value: Pr
            }),
            groupEnd: fe({}, i, {
              value: Nr
            })
          });
        }
        Oe < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var jt = ie.ReactCurrentDispatcher, It;
    function ut(i, l, f) {
      {
        if (It === void 0)
          try {
            throw Error();
          } catch (T) {
            var v = T.stack.trim().match(/\n( *(at )?)/);
            It = v && v[1] || "";
          }
        return `
` + It + i;
      }
    }
    var Lt = !1, dt;
    {
      var Xs = typeof WeakMap == "function" ? WeakMap : Map;
      dt = new Xs();
    }
    function Wr(i, l) {
      if (!i || Lt)
        return "";
      {
        var f = dt.get(i);
        if (f !== void 0)
          return f;
      }
      var v;
      Lt = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = jt.current, jt.current = null, Qs();
      try {
        if (l) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (he) {
              v = he;
            }
            Reflect.construct(i, [], Y);
          } else {
            try {
              Y.call();
            } catch (he) {
              v = he;
            }
            i.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            v = he;
          }
          i();
        }
      } catch (he) {
        if (he && v && typeof he.stack == "string") {
          for (var D = he.stack.split(`
`), q = v.stack.split(`
`), I = D.length - 1, U = q.length - 1; I >= 1 && U >= 0 && D[I] !== q[U]; )
            U--;
          for (; I >= 1 && U >= 0; I--, U--)
            if (D[I] !== q[U]) {
              if (I !== 1 || U !== 1)
                do
                  if (I--, U--, U < 0 || D[I] !== q[U]) {
                    var K = `
` + D[I].replace(" at new ", " at ");
                    return i.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", i.displayName)), typeof i == "function" && dt.set(i, K), K;
                  }
                while (I >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        Lt = !1, jt.current = P, Ks(), Error.prepareStackTrace = T;
      }
      var Ee = i ? i.displayName || i.name : "", Zr = Ee ? ut(Ee) : "";
      return typeof i == "function" && dt.set(i, Zr), Zr;
    }
    function en(i, l, f) {
      return Wr(i, !1);
    }
    function tn(i) {
      var l = i.prototype;
      return !!(l && l.isReactComponent);
    }
    function ct(i, l, f) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Wr(i, tn(i));
      if (typeof i == "string")
        return ut(i);
      switch (i) {
        case y:
          return ut("Suspense");
        case M:
          return ut("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case h:
            return en(i.render);
          case N:
            return ct(i.type, l, f);
          case A: {
            var v = i, T = v._payload, P = v._init;
            try {
              return ct(P(T), l, f);
            } catch {
            }
          }
        }
      return "";
    }
    var ft = Object.prototype.hasOwnProperty, Cr = {}, Fr = ie.ReactDebugCurrentFrame;
    function ht(i) {
      if (i) {
        var l = i._owner, f = ct(i.type, i._source, l ? l.type : null);
        Fr.setExtraStackFrame(f);
      } else
        Fr.setExtraStackFrame(null);
    }
    function rn(i, l, f, v, T) {
      {
        var P = Function.call.bind(ft);
        for (var Y in i)
          if (P(i, Y)) {
            var D = void 0;
            try {
              if (typeof i[Y] != "function") {
                var q = Error((v || "React class") + ": " + f + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              D = i[Y](l, Y, v, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              D = I;
            }
            D && !(D instanceof Error) && (ht(T), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", f, Y, typeof D), ht(null)), D instanceof Error && !(D.message in Cr) && (Cr[D.message] = !0, ht(T), z("Failed %s type: %s", f, D.message), ht(null));
          }
      }
    }
    var sn = Array.isArray;
    function Ut(i) {
      return sn(i);
    }
    function nn(i) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, f = l && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return f;
      }
    }
    function an(i) {
      try {
        return jr(i), !1;
      } catch {
        return !0;
      }
    }
    function jr(i) {
      return "" + i;
    }
    function Ir(i) {
      if (an(i))
        return z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nn(i)), jr(i);
    }
    var $e = ie.ReactCurrentOwner, on = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lr, Ur, At;
    At = {};
    function ln(i) {
      if (ft.call(i, "ref")) {
        var l = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function un(i) {
      if (ft.call(i, "key")) {
        var l = Object.getOwnPropertyDescriptor(i, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function dn(i, l) {
      if (typeof i.ref == "string" && $e.current && l && $e.current.stateNode !== l) {
        var f = V($e.current.type);
        At[f] || (z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V($e.current.type), i.ref), At[f] = !0);
      }
    }
    function cn(i, l) {
      {
        var f = function() {
          Lr || (Lr = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        f.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function fn(i, l) {
      {
        var f = function() {
          Ur || (Ur = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        f.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var hn = function(i, l, f, v, T, P, Y) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: l,
        ref: f,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function mn(i, l, f, v, T) {
      {
        var P, Y = {}, D = null, q = null;
        f !== void 0 && (Ir(f), D = "" + f), un(l) && (Ir(l.key), D = "" + l.key), ln(l) && (q = l.ref, dn(l, T));
        for (P in l)
          ft.call(l, P) && !on.hasOwnProperty(P) && (Y[P] = l[P]);
        if (i && i.defaultProps) {
          var I = i.defaultProps;
          for (P in I)
            Y[P] === void 0 && (Y[P] = I[P]);
        }
        if (D || q) {
          var U = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          D && cn(Y, U), q && fn(Y, U);
        }
        return hn(i, D, q, T, v, $e.current, Y);
      }
    }
    var Ht = ie.ReactCurrentOwner, Ar = ie.ReactDebugCurrentFrame;
    function Ne(i) {
      if (i) {
        var l = i._owner, f = ct(i.type, i._source, l ? l.type : null);
        Ar.setExtraStackFrame(f);
      } else
        Ar.setExtraStackFrame(null);
    }
    var Vt;
    Vt = !1;
    function Gt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Hr() {
      {
        if (Ht.current) {
          var i = V(Ht.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function _n(i) {
      {
        if (i !== void 0) {
          var l = i.fileName.replace(/^.*[\\\/]/, ""), f = i.lineNumber;
          return `

Check your code at ` + l + ":" + f + ".";
        }
        return "";
      }
    }
    var Vr = {};
    function yn(i) {
      {
        var l = Hr();
        if (!l) {
          var f = typeof i == "string" ? i : i.displayName || i.name;
          f && (l = `

Check the top-level render call using <` + f + ">.");
        }
        return l;
      }
    }
    function Gr(i, l) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var f = yn(l);
        if (Vr[f])
          return;
        Vr[f] = !0;
        var v = "";
        i && i._owner && i._owner !== Ht.current && (v = " It was passed a child from " + V(i._owner.type) + "."), Ne(i), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, v), Ne(null);
      }
    }
    function $r(i, l) {
      {
        if (typeof i != "object")
          return;
        if (Ut(i))
          for (var f = 0; f < i.length; f++) {
            var v = i[f];
            Gt(v) && Gr(v, l);
          }
        else if (Gt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var T = ot(i);
          if (typeof T == "function" && T !== i.entries)
            for (var P = T.call(i), Y; !(Y = P.next()).done; )
              Gt(Y.value) && Gr(Y.value, l);
        }
      }
    }
    function vn(i) {
      {
        var l = i.type;
        if (l == null || typeof l == "string")
          return;
        var f;
        if (typeof l == "function")
          f = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === N))
          f = l.propTypes;
        else
          return;
        if (f) {
          var v = V(l);
          rn(f, i.props, "prop", v, i);
        } else if (l.PropTypes !== void 0 && !Vt) {
          Vt = !0;
          var T = V(l);
          z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gn(i) {
      {
        for (var l = Object.keys(i.props), f = 0; f < l.length; f++) {
          var v = l[f];
          if (v !== "children" && v !== "key") {
            Ne(i), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Ne(null);
            break;
          }
        }
        i.ref !== null && (Ne(i), z("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    function zr(i, l, f, v, T, P) {
      {
        var Y = $(i);
        if (!Y) {
          var D = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = _n(T);
          q ? D += q : D += Hr();
          var I;
          i === null ? I = "null" : Ut(i) ? I = "array" : i !== void 0 && i.$$typeof === t ? (I = "<" + (V(i.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : I = typeof i, z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, D);
        }
        var U = mn(i, l, f, T, P);
        if (U == null)
          return U;
        if (Y) {
          var K = l.children;
          if (K !== void 0)
            if (v)
              if (Ut(K)) {
                for (var Ee = 0; Ee < K.length; Ee++)
                  $r(K[Ee], i);
                Object.freeze && Object.freeze(K);
              } else
                z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $r(K, i);
        }
        return i === s ? gn(U) : vn(U), U;
      }
    }
    function pn(i, l, f) {
      return zr(i, l, f, !0);
    }
    function wn(i, l, f) {
      return zr(i, l, f, !1);
    }
    var kn = wn, Dn = pn;
    Be.Fragment = s, Be.jsx = kn, Be.jsxs = Dn;
  }()), Be;
}
process.env.NODE_ENV === "production" ? Qt.exports = Sn() : Qt.exports = Mn();
var g = Qt.exports;
const ns = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M19.5%2012h-15m0%200l6.75%206.75M4.5%2012l6.75-6.75'%20/%3e%3c/svg%3e", Yn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M4.5%2012h15m0%200l-6.75-6.75M19.5%2012l-6.75%206.75'%20/%3e%3c/svg%3e";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var as;
function c() {
  return as.apply(null, arguments);
}
function On(e) {
  as = e;
}
function se(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Te(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function b(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ar(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (b(e, t))
      return !1;
  return !0;
}
function J(e) {
  return e === void 0;
}
function we(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function rt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function is(e, t) {
  var r = [], s, n = e.length;
  for (s = 0; s < n; ++s)
    r.push(t(e[s], s));
  return r;
}
function Se(e, t) {
  for (var r in t)
    b(t, r) && (e[r] = t[r]);
  return b(t, "toString") && (e.toString = t.toString), b(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ue(e, t, r, s) {
  return Ts(e, t, r, s, !0).utc();
}
function bn() {
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
function p(e) {
  return e._pf == null && (e._pf = bn()), e._pf;
}
var Kt;
Array.prototype.some ? Kt = Array.prototype.some : Kt = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function ir(e) {
  var t = null, r = !1, s = e._d && !isNaN(e._d.getTime());
  if (s && (t = p(e), r = Kt.call(t.parsedDateParts, function(n) {
    return n != null;
  }), s = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = s;
  else
    return s;
  return e._isValid;
}
function Mt(e) {
  var t = ue(NaN);
  return e != null ? Se(p(t), e) : p(t).userInvalidated = !0, t;
}
var Jr = c.momentProperties = [], Zt = !1;
function or(e, t) {
  var r, s, n, a = Jr.length;
  if (J(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), J(t._i) || (e._i = t._i), J(t._f) || (e._f = t._f), J(t._l) || (e._l = t._l), J(t._strict) || (e._strict = t._strict), J(t._tzm) || (e._tzm = t._tzm), J(t._isUTC) || (e._isUTC = t._isUTC), J(t._offset) || (e._offset = t._offset), J(t._pf) || (e._pf = p(t)), J(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      s = Jr[r], n = t[s], J(n) || (e[s] = n);
  return e;
}
function st(e) {
  or(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Zt === !1 && (Zt = !0, c.updateOffset(this), Zt = !1);
}
function ne(e) {
  return e instanceof st || e != null && e._isAMomentObject != null;
}
function os(e) {
  c.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function ee(e, t) {
  var r = !0;
  return Se(function() {
    if (c.deprecationHandler != null && c.deprecationHandler(null, e), r) {
      var s = [], n, a, o, d = arguments.length;
      for (a = 0; a < d; a++) {
        if (n = "", typeof arguments[a] == "object") {
          n += `
[` + a + "] ";
          for (o in arguments[0])
            b(arguments[0], o) && (n += o + ": " + arguments[0][o] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[a];
        s.push(n);
      }
      os(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Qr = {};
function ls(e, t) {
  c.deprecationHandler != null && c.deprecationHandler(e, t), Qr[e] || (os(t), Qr[e] = !0);
}
c.suppressDeprecationWarnings = !1;
c.deprecationHandler = null;
function de(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function xn(e) {
  var t, r;
  for (r in e)
    b(e, r) && (t = e[r], de(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Xt(e, t) {
  var r = Se({}, e), s;
  for (s in t)
    b(t, s) && (Te(e[s]) && Te(t[s]) ? (r[s] = {}, Se(r[s], e[s]), Se(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    b(e, s) && !b(t, s) && Te(e[s]) && (r[s] = Se({}, r[s]));
  return r;
}
function lr(e) {
  e != null && this.set(e);
}
var er;
Object.keys ? er = Object.keys : er = function(e) {
  var t, r = [];
  for (t in e)
    b(e, t) && r.push(t);
  return r;
};
var Tn = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Rn(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return de(s) ? s.call(t, r) : s;
}
function le(e, t, r) {
  var s = "" + Math.abs(e), n = t - s.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
}
var ur = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, mt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Bt = {}, je = {};
function _(e, t, r, s) {
  var n = s;
  typeof s == "string" && (n = function() {
    return this[s]();
  }), e && (je[e] = n), t && (je[t[0]] = function() {
    return le(n.apply(this, arguments), t[1], t[2]);
  }), r && (je[r] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function Pn(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Nn(e) {
  var t = e.match(ur), r, s;
  for (r = 0, s = t.length; r < s; r++)
    je[t[r]] ? t[r] = je[t[r]] : t[r] = Pn(t[r]);
  return function(n) {
    var a = "", o;
    for (o = 0; o < s; o++)
      a += de(t[o]) ? t[o].call(n, e) : t[o];
    return a;
  };
}
function yt(e, t) {
  return e.isValid() ? (t = us(t, e.localeData()), Bt[t] = Bt[t] || Nn(t), Bt[t](e)) : e.localeData().invalidDate();
}
function us(e, t) {
  var r = 5;
  function s(n) {
    return t.longDateFormat(n) || n;
  }
  for (mt.lastIndex = 0; r >= 0 && mt.test(e); )
    e = e.replace(
      mt,
      s
    ), mt.lastIndex = 0, r -= 1;
  return e;
}
var En = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Wn(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(ur).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var Cn = "Invalid date";
function Fn() {
  return this._invalidDate;
}
var jn = "%d", In = /\d{1,2}/;
function Ln(e) {
  return this._ordinal.replace("%d", e);
}
var Un = {
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
function An(e, t, r, s) {
  var n = this._relativeTime[r];
  return de(n) ? n(e, t, r, s) : n.replace(/%d/i, e);
}
function Hn(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return de(r) ? r(t) : r.replace(/%s/i, t);
}
var Kr = {
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
function te(e) {
  return typeof e == "string" ? Kr[e] || Kr[e.toLowerCase()] : void 0;
}
function dr(e) {
  var t = {}, r, s;
  for (s in e)
    b(e, s) && (r = te(s), r && (t[r] = e[s]));
  return t;
}
var Vn = {
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
function Gn(e) {
  var t = [], r;
  for (r in e)
    b(e, r) && t.push({ unit: r, priority: Vn[r] });
  return t.sort(function(s, n) {
    return s.priority - n.priority;
  }), t;
}
var ds = /\d/, Q = /\d\d/, cs = /\d{3}/, cr = /\d{4}/, Yt = /[+-]?\d{6}/, W = /\d\d?/, fs = /\d\d\d\d?/, hs = /\d\d\d\d\d\d?/, Ot = /\d{1,3}/, fr = /\d{1,4}/, bt = /[+-]?\d{1,6}/, Ue = /\d+/, xt = /[+-]?\d+/, $n = /Z|[+-]\d\d:?\d\d/gi, Tt = /Z|[+-]\d\d(?::?\d\d)?/gi, zn = /[+-]?\d+(\.\d{1,3})?/, nt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ae = /^[1-9]\d?/, hr = /^([1-9]\d|\d)/, pt;
pt = {};
function m(e, t, r) {
  pt[e] = de(t) ? t : function(s, n) {
    return s && r ? r : t;
  };
}
function Zn(e, t) {
  return b(pt, e) ? pt[e](t._strict, t._locale) : new RegExp(Bn(e));
}
function Bn(e) {
  return ge(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, n, a) {
        return r || s || n || a;
      }
    )
  );
}
function ge(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function X(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function S(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = X(t)), r;
}
var tr = {};
function R(e, t) {
  var r, s = t, n;
  for (typeof e == "string" && (e = [e]), we(t) && (s = function(a, o) {
    o[t] = S(a);
  }), n = e.length, r = 0; r < n; r++)
    tr[e[r]] = s;
}
function at(e, t) {
  R(e, function(r, s, n, a) {
    n._w = n._w || {}, t(r, n._w, n, a);
  });
}
function qn(e, t, r) {
  t != null && b(tr, e) && tr[e](t, r._a, r, e);
}
function Rt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var B = 0, ye = 1, oe = 2, G = 3, re = 4, ve = 5, xe = 6, Jn = 7, Qn = 8;
_("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? le(e, 4) : "+" + e;
});
_(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
_(0, ["YYYY", 4], 0, "year");
_(0, ["YYYYY", 5], 0, "year");
_(0, ["YYYYYY", 6, !0], 0, "year");
m("Y", xt);
m("YY", W, Q);
m("YYYY", fr, cr);
m("YYYYY", bt, Yt);
m("YYYYYY", bt, Yt);
R(["YYYYY", "YYYYYY"], B);
R("YYYY", function(e, t) {
  t[B] = e.length === 2 ? c.parseTwoDigitYear(e) : S(e);
});
R("YY", function(e, t) {
  t[B] = c.parseTwoDigitYear(e);
});
R("Y", function(e, t) {
  t[B] = parseInt(e, 10);
});
function Qe(e) {
  return Rt(e) ? 366 : 365;
}
c.parseTwoDigitYear = function(e) {
  return S(e) + (S(e) > 68 ? 1900 : 2e3);
};
var ms = He("FullYear", !0);
function Kn() {
  return Rt(this.year());
}
function He(e, t) {
  return function(r) {
    return r != null ? (_s(this, e, r), c.updateOffset(this, t), this) : Ke(this, e);
  };
}
function Ke(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, s = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return s ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return s ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return s ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return s ? r.getUTCHours() : r.getHours();
    case "Date":
      return s ? r.getUTCDate() : r.getDate();
    case "Day":
      return s ? r.getUTCDay() : r.getDay();
    case "Month":
      return s ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return s ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function _s(e, t, r) {
  var s, n, a, o, d;
  if (!(!e.isValid() || isNaN(r))) {
    switch (s = e._d, n = e._isUTC, t) {
      case "Milliseconds":
        return void (n ? s.setUTCMilliseconds(r) : s.setMilliseconds(r));
      case "Seconds":
        return void (n ? s.setUTCSeconds(r) : s.setSeconds(r));
      case "Minutes":
        return void (n ? s.setUTCMinutes(r) : s.setMinutes(r));
      case "Hours":
        return void (n ? s.setUTCHours(r) : s.setHours(r));
      case "Date":
        return void (n ? s.setUTCDate(r) : s.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    a = r, o = e.month(), d = e.date(), d = d === 29 && o === 1 && !Rt(a) ? 28 : d, n ? s.setUTCFullYear(a, o, d) : s.setFullYear(a, o, d);
  }
}
function Xn(e) {
  return e = te(e), de(this[e]) ? this[e]() : this;
}
function ea(e, t) {
  if (typeof e == "object") {
    e = dr(e);
    var r = Gn(e), s, n = r.length;
    for (s = 0; s < n; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = te(e), de(this[e]))
    return this[e](t);
  return this;
}
function ta(e, t) {
  return (e % t + t) % t;
}
var L;
Array.prototype.indexOf ? L = Array.prototype.indexOf : L = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function mr(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = ta(t, 12);
  return e += (t - r) / 12, r === 1 ? Rt(e) ? 29 : 28 : 31 - r % 7 % 2;
}
_("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
_("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
_("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
m("M", W, Ae);
m("MM", W, Q);
m("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
m("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
R(["M", "MM"], function(e, t) {
  t[ye] = S(e) - 1;
});
R(["MMM", "MMMM"], function(e, t, r, s) {
  var n = r._locale.monthsParse(e, s, r._strict);
  n != null ? t[ye] = n : p(r).invalidMonth = e;
});
var ra = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ys = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), vs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, sa = nt, na = nt;
function aa(e, t) {
  return e ? se(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || vs).test(t) ? "format" : "standalone"][e.month()] : se(this._months) ? this._months : this._months.standalone;
}
function ia(e, t) {
  return e ? se(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[vs.test(t) ? "format" : "standalone"][e.month()] : se(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function oa(e, t, r) {
  var s, n, a, o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      a = ue([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (n = L.call(this._shortMonthsParse, o), n !== -1 ? n : null) : (n = L.call(this._longMonthsParse, o), n !== -1 ? n : null) : t === "MMM" ? (n = L.call(this._shortMonthsParse, o), n !== -1 ? n : (n = L.call(this._longMonthsParse, o), n !== -1 ? n : null)) : (n = L.call(this._longMonthsParse, o), n !== -1 ? n : (n = L.call(this._shortMonthsParse, o), n !== -1 ? n : null));
}
function la(e, t, r) {
  var s, n, a;
  if (this._monthsParseExact)
    return oa.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (n = ue([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[s] && (a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[s].test(e))
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e))
      return s;
    if (!r && this._monthsParse[s].test(e))
      return s;
  }
}
function gs(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = S(t);
    else if (t = e.localeData().monthsParse(t), !we(t))
      return e;
  }
  var r = t, s = e.date();
  return s = s < 29 ? s : Math.min(s, mr(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, s) : e._d.setMonth(r, s), e;
}
function ps(e) {
  return e != null ? (gs(this, e), c.updateOffset(this, !0), this) : Ke(this, "Month");
}
function ua() {
  return mr(this.year(), this.month());
}
function da(e) {
  return this._monthsParseExact ? (b(this, "_monthsRegex") || ws.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = sa), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ca(e) {
  return this._monthsParseExact ? (b(this, "_monthsRegex") || ws.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = na), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ws() {
  function e(h, y) {
    return y.length - h.length;
  }
  var t = [], r = [], s = [], n, a, o, d;
  for (n = 0; n < 12; n++)
    a = ue([2e3, n]), o = ge(this.monthsShort(a, "")), d = ge(this.months(a, "")), t.push(o), r.push(d), s.push(d), s.push(o);
  t.sort(e), r.sort(e), s.sort(e), this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function fa(e, t, r, s, n, a, o) {
  var d;
  return e < 100 && e >= 0 ? (d = new Date(e + 400, t, r, s, n, a, o), isFinite(d.getFullYear()) && d.setFullYear(e)) : d = new Date(e, t, r, s, n, a, o), d;
}
function Xe(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function wt(e, t, r) {
  var s = 7 + t - r, n = (7 + Xe(e, 0, s).getUTCDay() - t) % 7;
  return -n + s - 1;
}
function ks(e, t, r, s, n) {
  var a = (7 + r - s) % 7, o = wt(e, s, n), d = 1 + 7 * (t - 1) + a + o, h, y;
  return d <= 0 ? (h = e - 1, y = Qe(h) + d) : d > Qe(e) ? (h = e + 1, y = d - Qe(e)) : (h = e, y = d), {
    year: h,
    dayOfYear: y
  };
}
function et(e, t, r) {
  var s = wt(e.year(), t, r), n = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, a, o;
  return n < 1 ? (o = e.year() - 1, a = n + pe(o, t, r)) : n > pe(e.year(), t, r) ? (a = n - pe(e.year(), t, r), o = e.year() + 1) : (o = e.year(), a = n), {
    week: a,
    year: o
  };
}
function pe(e, t, r) {
  var s = wt(e, t, r), n = wt(e + 1, t, r);
  return (Qe(e) - s + n) / 7;
}
_("w", ["ww", 2], "wo", "week");
_("W", ["WW", 2], "Wo", "isoWeek");
m("w", W, Ae);
m("ww", W, Q);
m("W", W, Ae);
m("WW", W, Q);
at(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = S(e);
  }
);
function ha(e) {
  return et(e, this._week.dow, this._week.doy).week;
}
var ma = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function _a() {
  return this._week.dow;
}
function ya() {
  return this._week.doy;
}
function va(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function ga(e) {
  var t = et(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
_("d", 0, "do", "day");
_("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
_("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
_("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
_("e", 0, 0, "weekday");
_("E", 0, 0, "isoWeekday");
m("d", W);
m("e", W);
m("E", W);
m("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
m("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
m("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
at(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var n = r._locale.weekdaysParse(e, s, r._strict);
  n != null ? t.d = n : p(r).invalidWeekday = e;
});
at(["d", "e", "E"], function(e, t, r, s) {
  t[s] = S(e);
});
function pa(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function wa(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function _r(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var ka = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ds = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Da = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Sa = nt, Ma = nt, Ya = nt;
function Oa(e, t) {
  var r = se(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? _r(r, this._week.dow) : e ? r[e.day()] : r;
}
function ba(e) {
  return e === !0 ? _r(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function xa(e) {
  return e === !0 ? _r(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Ta(e, t, r) {
  var s, n, a, o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      a = ue([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (n = L.call(this._weekdaysParse, o), n !== -1 ? n : null) : t === "ddd" ? (n = L.call(this._shortWeekdaysParse, o), n !== -1 ? n : null) : (n = L.call(this._minWeekdaysParse, o), n !== -1 ? n : null) : t === "dddd" ? (n = L.call(this._weekdaysParse, o), n !== -1 || (n = L.call(this._shortWeekdaysParse, o), n !== -1) ? n : (n = L.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : t === "ddd" ? (n = L.call(this._shortWeekdaysParse, o), n !== -1 || (n = L.call(this._weekdaysParse, o), n !== -1) ? n : (n = L.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : (n = L.call(this._minWeekdaysParse, o), n !== -1 || (n = L.call(this._weekdaysParse, o), n !== -1) ? n : (n = L.call(this._shortWeekdaysParse, o), n !== -1 ? n : null));
}
function Ra(e, t, r) {
  var s, n, a;
  if (this._weekdaysParseExact)
    return Ta.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (n = ue([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[s] || (a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e))
      return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e))
      return s;
    if (!r && this._weekdaysParse[s].test(e))
      return s;
  }
}
function Pa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Ke(this, "Day");
  return e != null ? (e = pa(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Na(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Ea(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = wa(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Wa(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || yr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = Sa), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ca(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || yr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ma), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Fa(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || yr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ya), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function yr() {
  function e(M, N) {
    return N.length - M.length;
  }
  var t = [], r = [], s = [], n = [], a, o, d, h, y;
  for (a = 0; a < 7; a++)
    o = ue([2e3, 1]).day(a), d = ge(this.weekdaysMin(o, "")), h = ge(this.weekdaysShort(o, "")), y = ge(this.weekdays(o, "")), t.push(d), r.push(h), s.push(y), n.push(d), n.push(h), n.push(y);
  t.sort(e), r.sort(e), s.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function vr() {
  return this.hours() % 12 || 12;
}
function ja() {
  return this.hours() || 24;
}
_("H", ["HH", 2], 0, "hour");
_("h", ["hh", 2], 0, vr);
_("k", ["kk", 2], 0, ja);
_("hmm", 0, 0, function() {
  return "" + vr.apply(this) + le(this.minutes(), 2);
});
_("hmmss", 0, 0, function() {
  return "" + vr.apply(this) + le(this.minutes(), 2) + le(this.seconds(), 2);
});
_("Hmm", 0, 0, function() {
  return "" + this.hours() + le(this.minutes(), 2);
});
_("Hmmss", 0, 0, function() {
  return "" + this.hours() + le(this.minutes(), 2) + le(this.seconds(), 2);
});
function Ss(e, t) {
  _(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Ss("a", !0);
Ss("A", !1);
function Ms(e, t) {
  return t._meridiemParse;
}
m("a", Ms);
m("A", Ms);
m("H", W, hr);
m("h", W, Ae);
m("k", W, Ae);
m("HH", W, Q);
m("hh", W, Q);
m("kk", W, Q);
m("hmm", fs);
m("hmmss", hs);
m("Hmm", fs);
m("Hmmss", hs);
R(["H", "HH"], G);
R(["k", "kk"], function(e, t, r) {
  var s = S(e);
  t[G] = s === 24 ? 0 : s;
});
R(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
R(["h", "hh"], function(e, t, r) {
  t[G] = S(e), p(r).bigHour = !0;
});
R("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[G] = S(e.substr(0, s)), t[re] = S(e.substr(s)), p(r).bigHour = !0;
});
R("hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[G] = S(e.substr(0, s)), t[re] = S(e.substr(s, 2)), t[ve] = S(e.substr(n)), p(r).bigHour = !0;
});
R("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[G] = S(e.substr(0, s)), t[re] = S(e.substr(s));
});
R("Hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[G] = S(e.substr(0, s)), t[re] = S(e.substr(s, 2)), t[ve] = S(e.substr(n));
});
function Ia(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var La = /[ap]\.?m?\.?/i, Ua = He("Hours", !0);
function Aa(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Ys = {
  calendar: Tn,
  longDateFormat: En,
  invalidDate: Cn,
  ordinal: jn,
  dayOfMonthOrdinalParse: In,
  relativeTime: Un,
  months: ra,
  monthsShort: ys,
  week: ma,
  weekdays: ka,
  weekdaysMin: Da,
  weekdaysShort: Ds,
  meridiemParse: La
}, C = {}, qe = {}, tt;
function Ha(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function Xr(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Va(e) {
  for (var t = 0, r, s, n, a; t < e.length; ) {
    for (a = Xr(e[t]).split("-"), r = a.length, s = Xr(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (n = Pt(a.slice(0, r).join("-")), n)
        return n;
      if (s && s.length >= r && Ha(a, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return tt;
}
function Ga(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Pt(e) {
  var t = null, r;
  if (C[e] === void 0 && typeof module < "u" && module && module.exports && Ga(e))
    try {
      t = tt._abbr, r = require, r("./locale/" + e), Ye(t);
    } catch {
      C[e] = null;
    }
  return C[e];
}
function Ye(e, t) {
  var r;
  return e && (J(t) ? r = ke(e) : r = gr(e, t), r ? tt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), tt._abbr;
}
function gr(e, t) {
  if (t !== null) {
    var r, s = Ys;
    if (t.abbr = e, C[e] != null)
      ls(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = C[e]._config;
    else if (t.parentLocale != null)
      if (C[t.parentLocale] != null)
        s = C[t.parentLocale]._config;
      else if (r = Pt(t.parentLocale), r != null)
        s = r._config;
      else
        return qe[t.parentLocale] || (qe[t.parentLocale] = []), qe[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return C[e] = new lr(Xt(s, t)), qe[e] && qe[e].forEach(function(n) {
      gr(n.name, n.config);
    }), Ye(e), C[e];
  } else
    return delete C[e], null;
}
function $a(e, t) {
  if (t != null) {
    var r, s, n = Ys;
    C[e] != null && C[e].parentLocale != null ? C[e].set(Xt(C[e]._config, t)) : (s = Pt(e), s != null && (n = s._config), t = Xt(n, t), s == null && (t.abbr = e), r = new lr(t), r.parentLocale = C[e], C[e] = r), Ye(e);
  } else
    C[e] != null && (C[e].parentLocale != null ? (C[e] = C[e].parentLocale, e === Ye() && Ye(e)) : C[e] != null && delete C[e]);
  return C[e];
}
function ke(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return tt;
  if (!se(e)) {
    if (t = Pt(e), t)
      return t;
    e = [e];
  }
  return Va(e);
}
function za() {
  return er(C);
}
function pr(e) {
  var t, r = e._a;
  return r && p(e).overflow === -2 && (t = r[ye] < 0 || r[ye] > 11 ? ye : r[oe] < 1 || r[oe] > mr(r[B], r[ye]) ? oe : r[G] < 0 || r[G] > 24 || r[G] === 24 && (r[re] !== 0 || r[ve] !== 0 || r[xe] !== 0) ? G : r[re] < 0 || r[re] > 59 ? re : r[ve] < 0 || r[ve] > 59 ? ve : r[xe] < 0 || r[xe] > 999 ? xe : -1, p(e)._overflowDayOfYear && (t < B || t > oe) && (t = oe), p(e)._overflowWeeks && t === -1 && (t = Jn), p(e)._overflowWeekday && t === -1 && (t = Qn), p(e).overflow = t), e;
}
var Za = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ba = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, qa = /Z|[+-]\d\d(?::?\d\d)?/, _t = [
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
], qt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Ja = /^\/?Date\((-?\d+)/i, Qa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ka = {
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
function Os(e) {
  var t, r, s = e._i, n = Za.exec(s) || Ba.exec(s), a, o, d, h, y = _t.length, M = qt.length;
  if (n) {
    for (p(e).iso = !0, t = 0, r = y; t < r; t++)
      if (_t[t][1].exec(n[1])) {
        o = _t[t][0], a = _t[t][2] !== !1;
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = M; t < r; t++)
        if (qt[t][1].exec(n[3])) {
          d = (n[2] || " ") + qt[t][0];
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
      if (qa.exec(n[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = o + (d || "") + (h || ""), kr(e);
  } else
    e._isValid = !1;
}
function Xa(e, t, r, s, n, a) {
  var o = [
    ei(e),
    ys.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(n, 10)
  ];
  return a && o.push(parseInt(a, 10)), o;
}
function ei(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ti(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ri(e, t, r) {
  if (e) {
    var s = Ds.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== n)
      return p(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function si(e, t, r) {
  if (e)
    return Ka[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), n = s % 100, a = (s - n) / 100;
  return a * 60 + n;
}
function bs(e) {
  var t = Qa.exec(ti(e._i)), r;
  if (t) {
    if (r = Xa(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ri(t[1], r, e))
      return;
    e._a = r, e._tzm = si(t[8], t[9], t[10]), e._d = Xe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ni(e) {
  var t = Ja.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Os(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (bs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : c.createFromInputFallback(e);
}
c.createFromInputFallback = ee(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ce(e, t, r) {
  return e ?? t ?? r;
}
function ai(e) {
  var t = new Date(c.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function wr(e) {
  var t, r, s = [], n, a, o;
  if (!e._d) {
    for (n = ai(e), e._w && e._a[oe] == null && e._a[ye] == null && ii(e), e._dayOfYear != null && (o = Ce(e._a[B], n[B]), (e._dayOfYear > Qe(o) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), r = Xe(o, 0, e._dayOfYear), e._a[ye] = r.getUTCMonth(), e._a[oe] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[G] === 24 && e._a[re] === 0 && e._a[ve] === 0 && e._a[xe] === 0 && (e._nextDay = !0, e._a[G] = 0), e._d = (e._useUTC ? Xe : fa).apply(
      null,
      s
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[G] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (p(e).weekdayMismatch = !0);
  }
}
function ii(e) {
  var t, r, s, n, a, o, d, h, y;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, o = 4, r = Ce(
    t.GG,
    e._a[B],
    et(E(), 1, 4).year
  ), s = Ce(t.W, 1), n = Ce(t.E, 1), (n < 1 || n > 7) && (h = !0)) : (a = e._locale._week.dow, o = e._locale._week.doy, y = et(E(), a, o), r = Ce(t.gg, e._a[B], y.year), s = Ce(t.w, y.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (h = !0)) : t.e != null ? (n = t.e + a, (t.e < 0 || t.e > 6) && (h = !0)) : n = a), s < 1 || s > pe(r, a, o) ? p(e)._overflowWeeks = !0 : h != null ? p(e)._overflowWeekday = !0 : (d = ks(r, s, n, a, o), e._a[B] = d.year, e._dayOfYear = d.dayOfYear);
}
c.ISO_8601 = function() {
};
c.RFC_2822 = function() {
};
function kr(e) {
  if (e._f === c.ISO_8601) {
    Os(e);
    return;
  }
  if (e._f === c.RFC_2822) {
    bs(e);
    return;
  }
  e._a = [], p(e).empty = !0;
  var t = "" + e._i, r, s, n, a, o, d = t.length, h = 0, y, M;
  for (n = us(e._f, e._locale).match(ur) || [], M = n.length, r = 0; r < M; r++)
    a = n[r], s = (t.match(Zn(a, e)) || [])[0], s && (o = t.substr(0, t.indexOf(s)), o.length > 0 && p(e).unusedInput.push(o), t = t.slice(
      t.indexOf(s) + s.length
    ), h += s.length), je[a] ? (s ? p(e).empty = !1 : p(e).unusedTokens.push(a), qn(a, s, e)) : e._strict && !s && p(e).unusedTokens.push(a);
  p(e).charsLeftOver = d - h, t.length > 0 && p(e).unusedInput.push(t), e._a[G] <= 12 && p(e).bigHour === !0 && e._a[G] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[G] = oi(
    e._locale,
    e._a[G],
    e._meridiem
  ), y = p(e).era, y !== null && (e._a[B] = e._locale.erasConvertYear(y, e._a[B])), wr(e), pr(e);
}
function oi(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function li(e) {
  var t, r, s, n, a, o, d = !1, h = e._f.length;
  if (h === 0) {
    p(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (n = 0; n < h; n++)
    a = 0, o = !1, t = or({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], kr(t), ir(t) && (o = !0), a += p(t).charsLeftOver, a += p(t).unusedTokens.length * 10, p(t).score = a, d ? a < s && (s = a, r = t) : (s == null || a < s || o) && (s = a, r = t, o && (d = !0));
  Se(e, r || t);
}
function ui(e) {
  if (!e._d) {
    var t = dr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = is(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), wr(e);
  }
}
function di(e) {
  var t = new st(pr(xs(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function xs(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || ke(e._l), t === null || r === void 0 && t === "" ? Mt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ne(t) ? new st(pr(t)) : (rt(t) ? e._d = t : se(r) ? li(e) : r ? kr(e) : ci(e), ir(e) || (e._d = null), e));
}
function ci(e) {
  var t = e._i;
  J(t) ? e._d = new Date(c.now()) : rt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ni(e) : se(t) ? (e._a = is(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), wr(e)) : Te(t) ? ui(e) : we(t) ? e._d = new Date(t) : c.createFromInputFallback(e);
}
function Ts(e, t, r, s, n) {
  var a = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (Te(e) && ar(e) || se(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = n, a._l = r, a._i = e, a._f = t, a._strict = s, di(a);
}
function E(e, t, r, s) {
  return Ts(e, t, r, s, !1);
}
var fi = ee(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Mt();
  }
), hi = ee(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Mt();
  }
);
function Rs(e, t) {
  var r, s;
  if (t.length === 1 && se(t[0]) && (t = t[0]), !t.length)
    return E();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function mi() {
  var e = [].slice.call(arguments, 0);
  return Rs("isBefore", e);
}
function _i() {
  var e = [].slice.call(arguments, 0);
  return Rs("isAfter", e);
}
var yi = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Je = [
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
function vi(e) {
  var t, r = !1, s, n = Je.length;
  for (t in e)
    if (b(e, t) && !(L.call(Je, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < n; ++s)
    if (e[Je[s]]) {
      if (r)
        return !1;
      parseFloat(e[Je[s]]) !== S(e[Je[s]]) && (r = !0);
    }
  return !0;
}
function gi() {
  return this._isValid;
}
function pi() {
  return ae(NaN);
}
function Nt(e) {
  var t = dr(e), r = t.year || 0, s = t.quarter || 0, n = t.month || 0, a = t.week || t.isoWeek || 0, o = t.day || 0, d = t.hour || 0, h = t.minute || 0, y = t.second || 0, M = t.millisecond || 0;
  this._isValid = vi(t), this._milliseconds = +M + y * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  d * 1e3 * 60 * 60, this._days = +o + a * 7, this._months = +n + s * 3 + r * 12, this._data = {}, this._locale = ke(), this._bubble();
}
function vt(e) {
  return e instanceof Nt;
}
function rr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function wi(e, t, r) {
  var s = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), a = 0, o;
  for (o = 0; o < s; o++)
    (r && e[o] !== t[o] || !r && S(e[o]) !== S(t[o])) && a++;
  return a + n;
}
function Ps(e, t) {
  _(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + le(~~(r / 60), 2) + t + le(~~r % 60, 2);
  });
}
Ps("Z", ":");
Ps("ZZ", "");
m("Z", Tt);
m("ZZ", Tt);
R(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Dr(Tt, e);
});
var ki = /([\+\-]|\d\d)/gi;
function Dr(e, t) {
  var r = (t || "").match(e), s, n, a;
  return r === null ? null : (s = r[r.length - 1] || [], n = (s + "").match(ki) || ["-", 0, 0], a = +(n[1] * 60) + S(n[2]), a === 0 ? 0 : n[0] === "+" ? a : -a);
}
function Sr(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (ne(e) || rt(e) ? e.valueOf() : E(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), c.updateOffset(r, !1), r) : E(e).local();
}
function sr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
c.updateOffset = function() {
};
function Di(e, t, r) {
  var s = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Dr(Tt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (n = sr(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), s !== e && (!t || this._changeInProgress ? Ws(
      this,
      ae(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : sr(this);
}
function Si(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Mi(e) {
  return this.utcOffset(0, e);
}
function Yi(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(sr(this), "m")), this;
}
function Oi() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Dr($n, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function bi(e) {
  return this.isValid() ? (e = e ? E(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function xi() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Ti() {
  if (!J(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return or(e, this), e = xs(e), e._a ? (t = e._isUTC ? ue(e._a) : E(e._a), this._isDSTShifted = this.isValid() && wi(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Ri() {
  return this.isValid() ? !this._isUTC : !1;
}
function Pi() {
  return this.isValid() ? this._isUTC : !1;
}
function Ns() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ni = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ei = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ae(e, t) {
  var r = e, s = null, n, a, o;
  return vt(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : we(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = Ni.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: S(s[oe]) * n,
    h: S(s[G]) * n,
    m: S(s[re]) * n,
    s: S(s[ve]) * n,
    ms: S(rr(s[xe] * 1e3)) * n
    // the millisecond decimal point is included in the match
  }) : (s = Ei.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: be(s[2], n),
    M: be(s[3], n),
    w: be(s[4], n),
    d: be(s[5], n),
    h: be(s[6], n),
    m: be(s[7], n),
    s: be(s[8], n)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (o = Wi(
    E(r.from),
    E(r.to)
  ), r = {}, r.ms = o.milliseconds, r.M = o.months), a = new Nt(r), vt(e) && b(e, "_locale") && (a._locale = e._locale), vt(e) && b(e, "_isValid") && (a._isValid = e._isValid), a;
}
ae.fn = Nt.prototype;
ae.invalid = pi;
function be(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function es(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Wi(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Sr(t, e), e.isBefore(t) ? r = es(e, t) : (r = es(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Es(e, t) {
  return function(r, s) {
    var n, a;
    return s !== null && !isNaN(+s) && (ls(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = s, s = a), n = ae(r, s), Ws(this, n, e), this;
  };
}
function Ws(e, t, r, s) {
  var n = t._milliseconds, a = rr(t._days), o = rr(t._months);
  e.isValid() && (s = s ?? !0, o && gs(e, Ke(e, "Month") + o * r), a && _s(e, "Date", Ke(e, "Date") + a * r), n && e._d.setTime(e._d.valueOf() + n * r), s && c.updateOffset(e, a || o));
}
var Ci = Es(1, "add"), Fi = Es(-1, "subtract");
function Cs(e) {
  return typeof e == "string" || e instanceof String;
}
function ji(e) {
  return ne(e) || rt(e) || Cs(e) || we(e) || Li(e) || Ii(e) || e === null || e === void 0;
}
function Ii(e) {
  var t = Te(e) && !ar(e), r = !1, s = [
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
  ], n, a, o = s.length;
  for (n = 0; n < o; n += 1)
    a = s[n], r = r || b(e, a);
  return t && r;
}
function Li(e) {
  var t = se(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !we(s) && Cs(e);
  }).length === 0), t && r;
}
function Ui(e) {
  var t = Te(e) && !ar(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, a;
  for (n = 0; n < s.length; n += 1)
    a = s[n], r = r || b(e, a);
  return t && r;
}
function Ai(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Hi(e, t) {
  arguments.length === 1 && (arguments[0] ? ji(arguments[0]) ? (e = arguments[0], t = void 0) : Ui(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || E(), s = Sr(r, this).startOf("day"), n = c.calendarFormat(this, s) || "sameElse", a = t && (de(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(
    a || this.localeData().calendar(n, this, E(r))
  );
}
function Vi() {
  return new st(this);
}
function Gi(e, t) {
  var r = ne(e) ? e : E(e);
  return this.isValid() && r.isValid() ? (t = te(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function $i(e, t) {
  var r = ne(e) ? e : E(e);
  return this.isValid() && r.isValid() ? (t = te(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function zi(e, t, r, s) {
  var n = ne(e) ? e : E(e), a = ne(t) ? t : E(t);
  return this.isValid() && n.isValid() && a.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) && (s[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function Zi(e, t) {
  var r = ne(e) ? e : E(e), s;
  return this.isValid() && r.isValid() ? (t = te(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function Bi(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function qi(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ji(e, t, r) {
  var s, n, a;
  if (!this.isValid())
    return NaN;
  if (s = Sr(e, this), !s.isValid())
    return NaN;
  switch (n = (s.utcOffset() - this.utcOffset()) * 6e4, t = te(t), t) {
    case "year":
      a = gt(this, s) / 12;
      break;
    case "month":
      a = gt(this, s);
      break;
    case "quarter":
      a = gt(this, s) / 3;
      break;
    case "second":
      a = (this - s) / 1e3;
      break;
    case "minute":
      a = (this - s) / 6e4;
      break;
    case "hour":
      a = (this - s) / 36e5;
      break;
    case "day":
      a = (this - s - n) / 864e5;
      break;
    case "week":
      a = (this - s - n) / 6048e5;
      break;
    default:
      a = this - s;
  }
  return r ? a : X(a);
}
function gt(e, t) {
  if (e.date() < t.date())
    return -gt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), n, a;
  return t - s < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - s) / (s - n)) : (n = e.clone().add(r + 1, "months"), a = (t - s) / (n - s)), -(r + a) || 0;
}
c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Qi() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Ki(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? yt(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : de(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", yt(r, "Z")) : yt(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Xi() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, n, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + s + n + a);
}
function eo(e) {
  e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
  var t = yt(this, e);
  return this.localeData().postformat(t);
}
function to(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || E(e).isValid()) ? ae({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ro(e) {
  return this.from(E(), e);
}
function so(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || E(e).isValid()) ? ae({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function no(e) {
  return this.to(E(), e);
}
function Fs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ke(e), t != null && (this._locale = t), this);
}
var js = ee(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Is() {
  return this._locale;
}
var kt = 1e3, Ie = 60 * kt, Dt = 60 * Ie, Ls = (365 * 400 + 97) * 24 * Dt;
function Le(e, t) {
  return (e % t + t) % t;
}
function Us(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Ls : new Date(e, t, r).valueOf();
}
function As(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Ls : Date.UTC(e, t, r);
}
function ao(e) {
  var t, r;
  if (e = te(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? As : Us, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Le(
        t + (this._isUTC ? 0 : this.utcOffset() * Ie),
        Dt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Le(t, Ie);
      break;
    case "second":
      t = this._d.valueOf(), t -= Le(t, kt);
      break;
  }
  return this._d.setTime(t), c.updateOffset(this, !0), this;
}
function io(e) {
  var t, r;
  if (e = te(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? As : Us, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Dt - Le(
        t + (this._isUTC ? 0 : this.utcOffset() * Ie),
        Dt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ie - Le(t, Ie) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += kt - Le(t, kt) - 1;
      break;
  }
  return this._d.setTime(t), c.updateOffset(this, !0), this;
}
function oo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function lo() {
  return Math.floor(this.valueOf() / 1e3);
}
function uo() {
  return new Date(this.valueOf());
}
function co() {
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
function fo() {
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
function ho() {
  return this.isValid() ? this.toISOString() : null;
}
function mo() {
  return ir(this);
}
function _o() {
  return Se({}, p(this));
}
function yo() {
  return p(this).overflow;
}
function vo() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
_("N", 0, 0, "eraAbbr");
_("NN", 0, 0, "eraAbbr");
_("NNN", 0, 0, "eraAbbr");
_("NNNN", 0, 0, "eraName");
_("NNNNN", 0, 0, "eraNarrow");
_("y", ["y", 1], "yo", "eraYear");
_("y", ["yy", 2], 0, "eraYear");
_("y", ["yyy", 3], 0, "eraYear");
_("y", ["yyyy", 4], 0, "eraYear");
m("N", Mr);
m("NN", Mr);
m("NNN", Mr);
m("NNNN", xo);
m("NNNNN", To);
R(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var n = r._locale.erasParse(e, s, r._strict);
    n ? p(r).era = n : p(r).invalidEra = e;
  }
);
m("y", Ue);
m("yy", Ue);
m("yyy", Ue);
m("yyyy", Ue);
m("yo", Ro);
R(["y", "yy", "yyy", "yyyy"], B);
R(["yo"], function(e, t, r, s) {
  var n;
  r._locale._eraYearOrdinalRegex && (n = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[B] = r._locale.eraYearOrdinalParse(e, n) : t[B] = parseInt(e, 10);
});
function go(e, t) {
  var r, s, n, a = this._eras || ke("en")._eras;
  for (r = 0, s = a.length; r < s; ++r) {
    switch (typeof a[r].since) {
      case "string":
        n = c(a[r].since).startOf("day"), a[r].since = n.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        n = c(a[r].until).startOf("day").valueOf(), a[r].until = n.valueOf();
        break;
    }
  }
  return a;
}
function po(e, t, r) {
  var s, n, a = this.eras(), o, d, h;
  for (e = e.toUpperCase(), s = 0, n = a.length; s < n; ++s)
    if (o = a[s].name.toUpperCase(), d = a[s].abbr.toUpperCase(), h = a[s].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (d === e)
            return a[s];
          break;
        case "NNNN":
          if (o === e)
            return a[s];
          break;
        case "NNNNN":
          if (h === e)
            return a[s];
          break;
      }
    else if ([o, d, h].indexOf(e) >= 0)
      return a[s];
}
function wo(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? c(e.since).year() : c(e.since).year() + (t - e.offset) * r;
}
function ko() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function Do() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function So() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function Mo() {
  var e, t, r, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = n[e].since <= n[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return (this.year() - c(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function Yo(e) {
  return b(this, "_erasNameRegex") || Yr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Oo(e) {
  return b(this, "_erasAbbrRegex") || Yr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function bo(e) {
  return b(this, "_erasNarrowRegex") || Yr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Mr(e, t) {
  return t.erasAbbrRegex(e);
}
function xo(e, t) {
  return t.erasNameRegex(e);
}
function To(e, t) {
  return t.erasNarrowRegex(e);
}
function Ro(e, t) {
  return t._eraYearOrdinalRegex || Ue;
}
function Yr() {
  var e = [], t = [], r = [], s = [], n, a, o, d, h, y = this.eras();
  for (n = 0, a = y.length; n < a; ++n)
    o = ge(y[n].name), d = ge(y[n].abbr), h = ge(y[n].narrow), t.push(o), e.push(d), r.push(h), s.push(o), s.push(d), s.push(h);
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
_(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
_(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Et(e, t) {
  _(0, [e, e.length], 0, t);
}
Et("gggg", "weekYear");
Et("ggggg", "weekYear");
Et("GGGG", "isoWeekYear");
Et("GGGGG", "isoWeekYear");
m("G", xt);
m("g", xt);
m("GG", W, Q);
m("gg", W, Q);
m("GGGG", fr, cr);
m("gggg", fr, cr);
m("GGGGG", bt, Yt);
m("ggggg", bt, Yt);
at(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = S(e);
  }
);
at(["gg", "GG"], function(e, t, r, s) {
  t[s] = c.parseTwoDigitYear(e);
});
function Po(e) {
  return Hs.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function No(e) {
  return Hs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Eo() {
  return pe(this.year(), 1, 4);
}
function Wo() {
  return pe(this.isoWeekYear(), 1, 4);
}
function Co() {
  var e = this.localeData()._week;
  return pe(this.year(), e.dow, e.doy);
}
function Fo() {
  var e = this.localeData()._week;
  return pe(this.weekYear(), e.dow, e.doy);
}
function Hs(e, t, r, s, n) {
  var a;
  return e == null ? et(this, s, n).year : (a = pe(e, s, n), t > a && (t = a), jo.call(this, e, t, r, s, n));
}
function jo(e, t, r, s, n) {
  var a = ks(e, t, r, s, n), o = Xe(a.year, 0, a.dayOfYear);
  return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
_("Q", 0, "Qo", "quarter");
m("Q", ds);
R("Q", function(e, t) {
  t[ye] = (S(e) - 1) * 3;
});
function Io(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
_("D", ["DD", 2], "Do", "date");
m("D", W, Ae);
m("DD", W, Q);
m("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
R(["D", "DD"], oe);
R("Do", function(e, t) {
  t[oe] = S(e.match(W)[0]);
});
var Vs = He("Date", !0);
_("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
m("DDD", Ot);
m("DDDD", cs);
R(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = S(e);
});
function Lo(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
_("m", ["mm", 2], 0, "minute");
m("m", W, hr);
m("mm", W, Q);
R(["m", "mm"], re);
var Uo = He("Minutes", !1);
_("s", ["ss", 2], 0, "second");
m("s", W, hr);
m("ss", W, Q);
R(["s", "ss"], ve);
var Ao = He("Seconds", !1);
_("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
_(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
_(0, ["SSS", 3], 0, "millisecond");
_(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
_(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
_(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
_(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
_(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
_(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
m("S", Ot, ds);
m("SS", Ot, Q);
m("SSS", Ot, cs);
var Me, Gs;
for (Me = "SSSS"; Me.length <= 9; Me += "S")
  m(Me, Ue);
function Ho(e, t) {
  t[xe] = S(("0." + e) * 1e3);
}
for (Me = "S"; Me.length <= 9; Me += "S")
  R(Me, Ho);
Gs = He("Milliseconds", !1);
_("z", 0, 0, "zoneAbbr");
_("zz", 0, 0, "zoneName");
function Vo() {
  return this._isUTC ? "UTC" : "";
}
function Go() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var u = st.prototype;
u.add = Ci;
u.calendar = Hi;
u.clone = Vi;
u.diff = Ji;
u.endOf = io;
u.format = eo;
u.from = to;
u.fromNow = ro;
u.to = so;
u.toNow = no;
u.get = Xn;
u.invalidAt = yo;
u.isAfter = Gi;
u.isBefore = $i;
u.isBetween = zi;
u.isSame = Zi;
u.isSameOrAfter = Bi;
u.isSameOrBefore = qi;
u.isValid = mo;
u.lang = js;
u.locale = Fs;
u.localeData = Is;
u.max = hi;
u.min = fi;
u.parsingFlags = _o;
u.set = ea;
u.startOf = ao;
u.subtract = Fi;
u.toArray = co;
u.toObject = fo;
u.toDate = uo;
u.toISOString = Ki;
u.inspect = Xi;
typeof Symbol < "u" && Symbol.for != null && (u[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
u.toJSON = ho;
u.toString = Qi;
u.unix = lo;
u.valueOf = oo;
u.creationData = vo;
u.eraName = ko;
u.eraNarrow = Do;
u.eraAbbr = So;
u.eraYear = Mo;
u.year = ms;
u.isLeapYear = Kn;
u.weekYear = Po;
u.isoWeekYear = No;
u.quarter = u.quarters = Io;
u.month = ps;
u.daysInMonth = ua;
u.week = u.weeks = va;
u.isoWeek = u.isoWeeks = ga;
u.weeksInYear = Co;
u.weeksInWeekYear = Fo;
u.isoWeeksInYear = Eo;
u.isoWeeksInISOWeekYear = Wo;
u.date = Vs;
u.day = u.days = Pa;
u.weekday = Na;
u.isoWeekday = Ea;
u.dayOfYear = Lo;
u.hour = u.hours = Ua;
u.minute = u.minutes = Uo;
u.second = u.seconds = Ao;
u.millisecond = u.milliseconds = Gs;
u.utcOffset = Di;
u.utc = Mi;
u.local = Yi;
u.parseZone = Oi;
u.hasAlignedHourOffset = bi;
u.isDST = xi;
u.isLocal = Ri;
u.isUtcOffset = Pi;
u.isUtc = Ns;
u.isUTC = Ns;
u.zoneAbbr = Vo;
u.zoneName = Go;
u.dates = ee(
  "dates accessor is deprecated. Use date instead.",
  Vs
);
u.months = ee(
  "months accessor is deprecated. Use month instead",
  ps
);
u.years = ee(
  "years accessor is deprecated. Use year instead",
  ms
);
u.zone = ee(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Si
);
u.isDSTShifted = ee(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Ti
);
function $o(e) {
  return E(e * 1e3);
}
function zo() {
  return E.apply(null, arguments).parseZone();
}
function $s(e) {
  return e;
}
var x = lr.prototype;
x.calendar = Rn;
x.longDateFormat = Wn;
x.invalidDate = Fn;
x.ordinal = Ln;
x.preparse = $s;
x.postformat = $s;
x.relativeTime = An;
x.pastFuture = Hn;
x.set = xn;
x.eras = go;
x.erasParse = po;
x.erasConvertYear = wo;
x.erasAbbrRegex = Oo;
x.erasNameRegex = Yo;
x.erasNarrowRegex = bo;
x.months = aa;
x.monthsShort = ia;
x.monthsParse = la;
x.monthsRegex = ca;
x.monthsShortRegex = da;
x.week = ha;
x.firstDayOfYear = ya;
x.firstDayOfWeek = _a;
x.weekdays = Oa;
x.weekdaysMin = xa;
x.weekdaysShort = ba;
x.weekdaysParse = Ra;
x.weekdaysRegex = Wa;
x.weekdaysShortRegex = Ca;
x.weekdaysMinRegex = Fa;
x.isPM = Ia;
x.meridiem = Aa;
function St(e, t, r, s) {
  var n = ke(), a = ue().set(s, t);
  return n[r](a, e);
}
function zs(e, t, r) {
  if (we(e) && (t = e, e = void 0), e = e || "", t != null)
    return St(e, t, r, "month");
  var s, n = [];
  for (s = 0; s < 12; s++)
    n[s] = St(e, s, r, "month");
  return n;
}
function Or(e, t, r, s) {
  typeof e == "boolean" ? (we(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, we(t) && (r = t, t = void 0), t = t || "");
  var n = ke(), a = e ? n._week.dow : 0, o, d = [];
  if (r != null)
    return St(t, (r + a) % 7, s, "day");
  for (o = 0; o < 7; o++)
    d[o] = St(t, (o + a) % 7, s, "day");
  return d;
}
function Zo(e, t) {
  return zs(e, t, "months");
}
function Bo(e, t) {
  return zs(e, t, "monthsShort");
}
function qo(e, t, r) {
  return Or(e, t, r, "weekdays");
}
function Jo(e, t, r) {
  return Or(e, t, r, "weekdaysShort");
}
function Qo(e, t, r) {
  return Or(e, t, r, "weekdaysMin");
}
Ye("en", {
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
    var t = e % 10, r = S(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
c.lang = ee(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ye
);
c.langData = ee(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ke
);
var me = Math.abs;
function Ko() {
  var e = this._data;
  return this._milliseconds = me(this._milliseconds), this._days = me(this._days), this._months = me(this._months), e.milliseconds = me(e.milliseconds), e.seconds = me(e.seconds), e.minutes = me(e.minutes), e.hours = me(e.hours), e.months = me(e.months), e.years = me(e.years), this;
}
function Zs(e, t, r, s) {
  var n = ae(t, r);
  return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
}
function Xo(e, t) {
  return Zs(this, e, t, 1);
}
function el(e, t) {
  return Zs(this, e, t, -1);
}
function ts(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function tl() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, n, a, o, d, h;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += ts(nr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, n = X(e / 1e3), s.seconds = n % 60, a = X(n / 60), s.minutes = a % 60, o = X(a / 60), s.hours = o % 24, t += X(o / 24), h = X(Bs(t)), r += h, t -= ts(nr(h)), d = X(r / 12), r %= 12, s.days = t, s.months = r, s.years = d, this;
}
function Bs(e) {
  return e * 4800 / 146097;
}
function nr(e) {
  return e * 146097 / 4800;
}
function rl(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = te(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + Bs(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(nr(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return t * 24 + s / 36e5;
      case "minute":
        return t * 1440 + s / 6e4;
      case "second":
        return t * 86400 + s / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + s;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function De(e) {
  return function() {
    return this.as(e);
  };
}
var qs = De("ms"), sl = De("s"), nl = De("m"), al = De("h"), il = De("d"), ol = De("w"), ll = De("M"), ul = De("Q"), dl = De("y"), cl = qs;
function fl() {
  return ae(this);
}
function hl(e) {
  return e = te(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Re(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var ml = Re("milliseconds"), _l = Re("seconds"), yl = Re("minutes"), vl = Re("hours"), gl = Re("days"), pl = Re("months"), wl = Re("years");
function kl() {
  return X(this.days() / 7);
}
var _e = Math.round, Fe = {
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
function Dl(e, t, r, s, n) {
  return n.relativeTime(t || 1, !!r, e, s);
}
function Sl(e, t, r, s) {
  var n = ae(e).abs(), a = _e(n.as("s")), o = _e(n.as("m")), d = _e(n.as("h")), h = _e(n.as("d")), y = _e(n.as("M")), M = _e(n.as("w")), N = _e(n.as("y")), A = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || o <= 1 && ["m"] || o < r.m && ["mm", o] || d <= 1 && ["h"] || d < r.h && ["hh", d] || h <= 1 && ["d"] || h < r.d && ["dd", h];
  return r.w != null && (A = A || M <= 1 && ["w"] || M < r.w && ["ww", M]), A = A || y <= 1 && ["M"] || y < r.M && ["MM", y] || N <= 1 && ["y"] || ["yy", N], A[2] = t, A[3] = +e > 0, A[4] = s, Dl.apply(null, A);
}
function Ml(e) {
  return e === void 0 ? _e : typeof e == "function" ? (_e = e, !0) : !1;
}
function Yl(e, t) {
  return Fe[e] === void 0 ? !1 : t === void 0 ? Fe[e] : (Fe[e] = t, e === "s" && (Fe.ss = t - 1), !0);
}
function Ol(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Fe, n, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Fe, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), n = this.localeData(), a = Sl(this, !r, s, n), r && (a = n.pastFuture(+this, a)), n.postformat(a);
}
var Jt = Math.abs;
function We(e) {
  return (e > 0) - (e < 0) || +e;
}
function Wt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Jt(this._milliseconds) / 1e3, t = Jt(this._days), r = Jt(this._months), s, n, a, o, d = this.asSeconds(), h, y, M, N;
  return d ? (s = X(e / 60), n = X(s / 60), e %= 60, s %= 60, a = X(r / 12), r %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = d < 0 ? "-" : "", y = We(this._months) !== We(d) ? "-" : "", M = We(this._days) !== We(d) ? "-" : "", N = We(this._milliseconds) !== We(d) ? "-" : "", h + "P" + (a ? y + a + "Y" : "") + (r ? y + r + "M" : "") + (t ? M + t + "D" : "") + (n || s || e ? "T" : "") + (n ? N + n + "H" : "") + (s ? N + s + "M" : "") + (e ? N + o + "S" : "")) : "P0D";
}
var O = Nt.prototype;
O.isValid = gi;
O.abs = Ko;
O.add = Xo;
O.subtract = el;
O.as = rl;
O.asMilliseconds = qs;
O.asSeconds = sl;
O.asMinutes = nl;
O.asHours = al;
O.asDays = il;
O.asWeeks = ol;
O.asMonths = ll;
O.asQuarters = ul;
O.asYears = dl;
O.valueOf = cl;
O._bubble = tl;
O.clone = fl;
O.get = hl;
O.milliseconds = ml;
O.seconds = _l;
O.minutes = yl;
O.hours = vl;
O.days = gl;
O.weeks = kl;
O.months = pl;
O.years = wl;
O.humanize = Ol;
O.toISOString = Wt;
O.toString = Wt;
O.toJSON = Wt;
O.locale = Fs;
O.localeData = Is;
O.toIsoString = ee(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Wt
);
O.lang = js;
_("X", 0, 0, "unix");
_("x", 0, 0, "valueOf");
m("x", xt);
m("X", zn);
R("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
R("x", function(e, t, r) {
  r._d = new Date(S(e));
});
//! moment.js
c.version = "2.30.1";
On(E);
c.fn = u;
c.min = mi;
c.max = _i;
c.now = yi;
c.utc = ue;
c.unix = $o;
c.months = Zo;
c.isDate = rt;
c.locale = Ye;
c.invalid = Mt;
c.duration = ae;
c.isMoment = ne;
c.weekdays = qo;
c.parseZone = zo;
c.localeData = ke;
c.isDuration = vt;
c.monthsShort = Bo;
c.weekdaysMin = Qo;
c.defineLocale = gr;
c.updateLocale = $a;
c.locales = za;
c.weekdaysShort = Jo;
c.normalizeUnits = te;
c.relativeTimeRounding = Ml;
c.relativeTimeThreshold = Yl;
c.calendarFormat = Ai;
c.prototype = u;
c.HTML5_FMT = {
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
const Js = (e, t, r) => {
  const s = new Date(e);
  let a = new Date(t).getTime() - s.getTime();
  return Math.round(a / (1e3 * 3600 * 24));
}, bl = (e, t, r) => {
  const s = c(e), n = c(t).startOf("isoWeek").format("YYYY-MM-DD");
  let a = 0;
  const o = Js(t, e);
  for (let h = 0; h < o; h++) {
    const y = s.clone().subtract(h, "days");
    y.day() !== 0 && y.day() !== 6 && a++, y.format("YYYY-MM-DD") === n && a--;
  }
  return `${a * 50}`;
}, rs = (e, t, r, s) => {
  const n = c(e), a = Js(e, t);
  let o = 0;
  for (let y = 0; y < a; y++) {
    const M = n.clone().add(y, "days");
    M.day() !== 0 && M.day() !== 6 && o++;
  }
  const d = o !== 1 ? (o + 1) * 50 : s, h = bl(e, r);
  return { widthPercentage: d, taskMarginLeft: h };
}, xl = ({ customize: e, data: t }) => {
  const r = {
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
  }, [s, n] = ze([]), [a, o] = ze([]), [d, h] = ze([]), [y, M] = ze([]), [N, A] = ze(null), Pe = (k) => {
    A(N === k ? null : k);
  }, Ve = $t(() => {
    n(t && t.users ? t.users : []);
  }, [t]), it = $t(() => {
    const k = c.min(
      s.map(
        (H) => H.tasks.map(
          ($) => c($.start).startOf("isoWeek")
        )
      ).flat()
    ), w = c.max(
      s.map(
        (H) => H.tasks.map(
          ($, Z) => c($.end).startOf("isoWeek")
        )
      ).flat()
    );
    w.add(1, "weeks");
    const F = [];
    let j = k.clone().startOf("isoWeek");
    for (; j.isBefore(w); ) {
      if (j.startOf("isoWeek").isBefore(w)) {
        const H = j.clone().add(4, "days");
        F.push({
          start: j.format("YYYY-MM-DD"),
          end: H.format("YYYY-MM-DD")
        }), console.log(F);
      }
      j.add(7, "days");
    }
    return F;
  }, [s]), ot = $t(() => {
    const k = [];
    return s.forEach(
      (w) => w.tasks.forEach((F) => {
        const j = F.project, H = j.id, $ = F.id, Z = k.findIndex((ce) => ce.id === H);
        F.user = ie(w, "tasks"), Z === -1 ? k.push({
          id: H,
          name: j.name,
          tasks: [F],
          users: [ie(w, "tasks")]
        }) : k[0].tasks.findIndex((V) => V.id === $) === -1 && (k[Z].tasks.push(), k[Z].users.push(ie(w, "tasks")));
      })
    ), z(k);
  }, [s]);
  zt(() => {
    Ve(), M([]);
  }, [Ve]), zt(() => {
    s.length > 0 && h(it());
  }, [s, it]), zt(() => {
    s.length > 0 && o(ot());
  }, [s, ot]);
  function ie(k, w) {
    const { [w]: F, ...j } = k;
    return j;
  }
  function z(k) {
    function w(j) {
      const H = j.tasks.map((V) => new Date(V.start).getTime()), $ = j.tasks.map((V) => new Date(V.end).getTime()), Z = new Date(Math.min(...H)), ce = new Date(Math.max(...$));
      return { startDate: Z, endDate: ce };
    }
    function F(j, H) {
      const $ = w(j), Z = w(H);
      return $.startDate < Z.startDate ? -1 : $.startDate > Z.startDate ? 1 : $.endDate < Z.endDate ? -1 : $.endDate > Z.endDate ? 1 : 0;
    }
    return [...k].sort(F);
  }
  const Ct = br(r, e), Ft = (k) => {
    const { widthPercentage: w, taskMarginLeft: F } = rs(
      k.start,
      k.end,
      d[0].start,
      250
    );
    return y.push({ widthPercentage: w, taskMarginLeft: F }), {
      width: `${w}px`,
      left: `calc(${F}px)`
    };
  };
  return /* @__PURE__ */ g.jsxs("section", { className: "gantt-container-section", children: [
    /* @__PURE__ */ g.jsx("div", { className: "gantt-container-section-timeline", children: /* @__PURE__ */ g.jsx("div", { className: "gantt-container-section-timeline-header", children: d.map((k, w) => {
      const F = c(k.start, "YYYY-MM-DD"), j = c(k.end, "YYYY-MM-DD"), $ = c().startOf("day").isBetween(
        F,
        j.add(2, "days"),
        null,
        "[]"
      );
      return console.log("timelineWeeks"), console.log(d), console.log("week " + w), console.log(k), /* @__PURE__ */ g.jsx(
        "div",
        {
          className: `gantt-container-section-timeline-header-days ${$ ? "today" : ""} ${w === 0 ? "start" : w === d.length - 1 ? "end" : ""}`,
          style: Ct.daysContainer,
          children: /* @__PURE__ */ g.jsxs("p", { children: [
            c(k.start).format("DD MMMM"),
            " -",
            " ",
            c(k.end).format("DD MMMM")
          ] })
        },
        w
      );
    }) }) }),
    /* @__PURE__ */ g.jsx("div", { className: "gantt-container-section-sidebar", children: a.map((k) => /* @__PURE__ */ g.jsxs(
      "div",
      {
        className: "gantt-container-section-sidebar-line",
        children: [
          /* @__PURE__ */ g.jsxs("div", { className: "gantt-container-section-sidebar-tasks project", style: r.sidebarProjects, children: [
            /* @__PURE__ */ g.jsxs("div", { className: "gantt-container-section-sidebar-task", children: [
              /* @__PURE__ */ g.jsx("div", { className: "gantt-container-section-sidebar-task-client", children: /* @__PURE__ */ g.jsx("p", { className: "gantt-container-section-sidebar-task-client-name", children: k.name }) }),
              /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: "gantt-container-section-sidebar-task-icon",
                  onClick: () => Pe(k.id),
                  children: /* @__PURE__ */ g.jsx(
                    "img",
                    {
                      src: ns,
                      alt: "dropdown-arrow-gantt",
                      style: {
                        transform: k.id === N ? "rotate(180deg)" : "rotate(0deg)"
                      }
                    }
                  )
                }
              )
            ] }),
            k.id === N && /* @__PURE__ */ g.jsx("div", { className: "gantt-container-section-sidebar-dropdown-content", children: k.users.map((w) => /* @__PURE__ */ g.jsx(
              "div",
              {
                className: "gantt-container-section-sidebar-dropdown-content-user",
                children: /* @__PURE__ */ g.jsxs("div", { className: "gantt-container-section-sidebar-dropdown-content-user-p", children: [
                  /* @__PURE__ */ g.jsx("p", { children: w.firstName }),
                  /* @__PURE__ */ g.jsx("p", { children: w.lastName })
                ] })
              },
              w.id
            )) })
          ] }),
          /* @__PURE__ */ g.jsx("div", { className: "gantt-task-container", style: N === k.id ? { flexDirection: "column", marginTop: "115px" } : { flexDirection: "row" }, children: k.tasks.map((w, F) => {
            let { width: j, left: H } = Ft(w), $ = F !== 0 ? y[F - 1].widthPercentage : null, Z = new RegExp("(?<=calc\\()\\d+(\\.\\d+)?(?=px\\))"), ce = N === k.id ? parseInt(H.match(Z)) - $ : parseInt(H.match(Z));
            return /* @__PURE__ */ g.jsxs("div", { className: "gantt-container-section-main-tasks project", children: [
              /* @__PURE__ */ g.jsx("div", { className: "gantt-container-section-main-tasks-m", children: /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: "gantt-container-section-main-tasks-t",
                  style: { width: j, left: ce },
                  children: /* @__PURE__ */ g.jsxs("div", { className: "gantt-container-section-main-tasks-t-content", style: r.taskContainer, children: [
                    /* @__PURE__ */ g.jsx("p", { children: /* @__PURE__ */ g.jsxs("span", { children: [
                      c(w.start).format("DD/MM/YYYY"),
                      " -",
                      " ",
                      c(w.end).format("DD/MM/YYYY")
                    ] }) }),
                    /* @__PURE__ */ g.jsx("p", { className: "title", children: w.name }),
                    /* @__PURE__ */ g.jsx("p", { className: "description", children: w.description })
                  ] })
                }
              ) }),
              /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: "gantt-container-section-main-tasks-u",
                  children: w.id === N && /* @__PURE__ */ g.jsx(g.Fragment, { children: w.user.tasks.map((V, fe) => {
                    const { widthPercentage: Oe, taskMarginLeft: lt } = rs(
                      V.start,
                      V.end,
                      d[0].start,
                      250
                    ), Ge = {
                      width: `${Oe}px`,
                      left: `calc(${lt}px)`
                    };
                    return fe > 0 && (Ge.marginLeft = "5px"), /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        className: "gantt-container-section-main-tasks-t",
                        style: Ge
                      },
                      V.id
                    );
                  }) })
                },
                w.user.id
              )
            ] }, w.id);
          }) })
        ]
      },
      k.id
    )) })
  ] });
};
function br(e, t) {
  for (const r in t)
    typeof t[r] == "object" ? e[r] = br(e[r] || {}, t[r]) : e[r] = t[r];
  return e;
}
const Tl = () => {
  const e = document.querySelector(".gantt-container-section .today");
  e && e.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}, Rl = () => {
  const e = document.querySelector(".gantt-container-section .start");
  e && e.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}, Pl = () => {
  const e = document.querySelector(".gantt-container-section .end");
  e && e.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" });
}, El = ({ customize: e, data: t }) => {
  const r = {
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
  }, s = () => {
    const o = document.querySelector(".gantt-container-section");
    o && (o.scrollLeft -= 500);
  }, n = () => {
    const o = document.querySelector(".gantt-container-section");
    o && (o.scrollLeft += 500);
  }, a = br(r, e);
  return /* @__PURE__ */ g.jsxs("div", { className: "gantt-container", children: [
    /* @__PURE__ */ g.jsx("div", { className: "gantt-container-filters", children: /* @__PURE__ */ g.jsx("div", { className: "gantt-container-filters-crt", children: /* @__PURE__ */ g.jsxs("div", { className: "gantt-container-filters-crt-block", children: [
      /* @__PURE__ */ g.jsx("button", { className: "gantt-container-filters-crt-block-btn-left", onClick: s, children: /* @__PURE__ */ g.jsx("img", { src: ns, alt: "Move Left" }) }),
      /* @__PURE__ */ g.jsx("p", { onClick: Rl, style: a.todayButton, children: "Début" }),
      /* @__PURE__ */ g.jsx("p", { onClick: Tl, style: a.todayButton, children: "Aujourd'hui" }),
      /* @__PURE__ */ g.jsx("p", { onClick: Pl, style: a.todayButton, children: "Fin" }),
      /* @__PURE__ */ g.jsx("button", { className: "gantt-container-filters-crt-block-btn-right", onClick: n, children: /* @__PURE__ */ g.jsx("img", { src: Yn, alt: "Move Right" }) })
    ] }) }) }),
    console.log(t),
    console.log(a),
    // <GanttViewProject
    //   customize={styles}
    //   data={data}
    // />
    /* @__PURE__ */ g.jsx(
      xl,
      {
        customize: a,
        data: t
      }
    )
  ] });
};
export {
  El as default,
  Pl as handleMoveToEnd,
  Rl as handleMoveToStart,
  Tl as handleMoveToToday,
  br as mergeStyles
};
