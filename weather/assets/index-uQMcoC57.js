;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
	new MutationObserver((o) => {
		for (const s of o)
			if (s.type === 'childList')
				for (const i of s.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(o) {
		const s = {}
		return (
			o.integrity && (s.integrity = o.integrity),
			o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === 'use-credentials'
				? (s.credentials = 'include')
				: o.crossOrigin === 'anonymous'
				? (s.credentials = 'omit')
				: (s.credentials = 'same-origin'),
			s
		)
	}
	function r(o) {
		if (o.ep) return
		o.ep = !0
		const s = n(o)
		fetch(o.href, s)
	}
})()
function xe(e, t) {
	return function () {
		return e.apply(t, arguments)
	}
}
const { toString: ve } = Object.prototype,
	{ getPrototypeOf: re } = Object,
	$ = ((e) => (t) => {
		const n = ve.call(t)
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
	})(Object.create(null)),
	A = (e) => ((e = e.toLowerCase()), (t) => $(t) === e),
	z = (e) => (t) => typeof t === e,
	{ isArray: C } = Array,
	L = z('undefined')
function Ve(e) {
	return (
		e !== null &&
		!L(e) &&
		e.constructor !== null &&
		!L(e.constructor) &&
		R(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	)
}
const Ae = A('ArrayBuffer')
function Ke(e) {
	let t
	return (
		typeof ArrayBuffer < 'u' && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && Ae(e.buffer)),
		t
	)
}
const Ge = z('string'),
	R = z('function'),
	Te = z('number'),
	J = (e) => e !== null && typeof e == 'object',
	Xe = (e) => e === !0 || e === !1,
	U = (e) => {
		if ($(e) !== 'object') return !1
		const t = re(e)
		return (
			(t === null ||
				t === Object.prototype ||
				Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		)
	},
	Qe = A('Date'),
	Ye = A('File'),
	Ze = A('Blob'),
	et = A('FileList'),
	tt = (e) => J(e) && R(e.pipe),
	nt = (e) => {
		let t
		return (
			e &&
			((typeof FormData == 'function' && e instanceof FormData) ||
				(R(e.append) &&
					((t = $(e)) === 'formdata' ||
						(t === 'object' &&
							R(e.toString) &&
							e.toString() === '[object FormData]'))))
		)
	},
	rt = A('URLSearchParams'),
	ot = (e) =>
		e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function F(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > 'u') return
	let r, o
	if ((typeof e != 'object' && (e = [e]), C(e)))
		for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
	else {
		const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			i = s.length
		let c
		for (r = 0; r < i; r++) (c = s[r]), t.call(null, e[c], c, e)
	}
}
function _e(e, t) {
	t = t.toLowerCase()
	const n = Object.keys(e)
	let r = n.length,
		o
	for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
	return null
}
const ke =
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
			? self
			: typeof window < 'u'
			? window
			: global,
	je = (e) => !L(e) && e !== ke
function Y() {
	const { caseless: e } = (je(this) && this) || {},
		t = {},
		n = (r, o) => {
			const s = (e && _e(t, o)) || o
			U(t[s]) && U(r)
				? (t[s] = Y(t[s], r))
				: U(r)
				? (t[s] = Y({}, r))
				: C(r)
				? (t[s] = r.slice())
				: (t[s] = r)
		}
	for (let r = 0, o = arguments.length; r < o; r++)
		arguments[r] && F(arguments[r], n)
	return t
}
const st = (e, t, n, { allOwnKeys: r } = {}) => (
		F(
			t,
			(o, s) => {
				n && R(o) ? (e[s] = xe(o, n)) : (e[s] = o)
			},
			{ allOwnKeys: r }
		),
		e
	),
	it = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	at = (e, t, n, r) => {
		;(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, 'super', { value: t.prototype }),
			n && Object.assign(e.prototype, n)
	},
	ct = (e, t, n, r) => {
		let o, s, i
		const c = {}
		if (((t = t || {}), e == null)) return t
		do {
			for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
				(i = o[s]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0))
			e = n !== !1 && re(e)
		} while (e && (!n || n(e, t)) && e !== Object.prototype)
		return t
	},
	lt = (e, t, n) => {
		;(e = String(e)),
			(n === void 0 || n > e.length) && (n = e.length),
			(n -= t.length)
		const r = e.indexOf(t, n)
		return r !== -1 && r === n
	},
	ut = (e) => {
		if (!e) return null
		if (C(e)) return e
		let t = e.length
		if (!Te(t)) return null
		const n = new Array(t)
		for (; t-- > 0; ) n[t] = e[t]
		return n
	},
	ft = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < 'u' && re(Uint8Array)),
	dt = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e)
		let o
		for (; (o = r.next()) && !o.done; ) {
			const s = o.value
			t.call(e, s[0], s[1])
		}
	},
	mt = (e, t) => {
		let n
		const r = []
		for (; (n = e.exec(t)) !== null; ) r.push(n)
		return r
	},
	pt = A('HTMLFormElement'),
	ht = (e) =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
			return r.toUpperCase() + o
		}),
	le = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	gt = A('RegExp'),
	Ne = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {}
		F(n, (o, s) => {
			let i
			;(i = t(o, s, e)) !== !1 && (r[s] = i || o)
		}),
			Object.defineProperties(e, r)
	},
	yt = (e) => {
		Ne(e, (t, n) => {
			if (R(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
			const r = e[n]
			if (R(r)) {
				if (((t.enumerable = !1), 'writable' in t)) {
					t.writable = !1
					return
				}
				t.set ||
					(t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'")
					})
			}
		})
	},
	bt = (e, t) => {
		const n = {},
			r = (o) => {
				o.forEach((s) => {
					n[s] = !0
				})
			}
		return C(e) ? r(e) : r(String(e).split(t)), n
	},
	wt = () => {},
	Et = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	K = 'abcdefghijklmnopqrstuvwxyz',
	ue = '0123456789',
	Ie = { DIGIT: ue, ALPHA: K, ALPHA_DIGIT: K + K.toUpperCase() + ue },
	St = (e = 16, t = Ie.ALPHA_DIGIT) => {
		let n = ''
		const { length: r } = t
		for (; e--; ) n += t[(Math.random() * r) | 0]
		return n
	}
function Ot(e) {
	return !!(
		e &&
		R(e.append) &&
		e[Symbol.toStringTag] === 'FormData' &&
		e[Symbol.iterator]
	)
}
const Rt = (e) => {
		const t = new Array(10),
			n = (r, o) => {
				if (J(r)) {
					if (t.indexOf(r) >= 0) return
					if (!('toJSON' in r)) {
						t[o] = r
						const s = C(r) ? [] : {}
						return (
							F(r, (i, c) => {
								const m = n(i, o + 1)
								!L(m) && (s[c] = m)
							}),
							(t[o] = void 0),
							s
						)
					}
				}
				return r
			}
		return n(e, 0)
	},
	xt = A('AsyncFunction'),
	At = (e) => e && (J(e) || R(e)) && R(e.then) && R(e.catch),
	a = {
		isArray: C,
		isArrayBuffer: Ae,
		isBuffer: Ve,
		isFormData: nt,
		isArrayBufferView: Ke,
		isString: Ge,
		isNumber: Te,
		isBoolean: Xe,
		isObject: J,
		isPlainObject: U,
		isUndefined: L,
		isDate: Qe,
		isFile: Ye,
		isBlob: Ze,
		isRegExp: gt,
		isFunction: R,
		isStream: tt,
		isURLSearchParams: rt,
		isTypedArray: ft,
		isFileList: et,
		forEach: F,
		merge: Y,
		extend: st,
		trim: ot,
		stripBOM: it,
		inherits: at,
		toFlatObject: ct,
		kindOf: $,
		kindOfTest: A,
		endsWith: lt,
		toArray: ut,
		forEachEntry: dt,
		matchAll: mt,
		isHTMLForm: pt,
		hasOwnProperty: le,
		hasOwnProp: le,
		reduceDescriptors: Ne,
		freezeMethods: yt,
		toObjectSet: bt,
		toCamelCase: ht,
		noop: wt,
		toFiniteNumber: Et,
		findKey: _e,
		global: ke,
		isContextDefined: je,
		ALPHABET: Ie,
		generateString: St,
		isSpecCompliantForm: Ot,
		toJSONObject: Rt,
		isAsyncFn: xt,
		isThenable: At,
	}
function h(e, t, n, r, o) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = 'AxiosError'),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		o && (this.response = o)
}
a.inherits(h, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: a.toJSONObject(this.config),
			code: this.code,
			status:
				this.response && this.response.status ? this.response.status : null,
		}
	},
})
const Ce = h.prototype,
	Pe = {}
;[
	'ERR_BAD_OPTION_VALUE',
	'ERR_BAD_OPTION',
	'ECONNABORTED',
	'ETIMEDOUT',
	'ERR_NETWORK',
	'ERR_FR_TOO_MANY_REDIRECTS',
	'ERR_DEPRECATED',
	'ERR_BAD_RESPONSE',
	'ERR_BAD_REQUEST',
	'ERR_CANCELED',
	'ERR_NOT_SUPPORT',
	'ERR_INVALID_URL',
].forEach((e) => {
	Pe[e] = { value: e }
})
Object.defineProperties(h, Pe)
Object.defineProperty(Ce, 'isAxiosError', { value: !0 })
h.from = (e, t, n, r, o, s) => {
	const i = Object.create(Ce)
	return (
		a.toFlatObject(
			e,
			i,
			function (m) {
				return m !== Error.prototype
			},
			(c) => c !== 'isAxiosError'
		),
		h.call(i, e.message, t, n, r, o),
		(i.cause = e),
		(i.name = e.name),
		s && Object.assign(i, s),
		i
	)
}
const Tt = null
function Z(e) {
	return a.isPlainObject(e) || a.isArray(e)
}
function Le(e) {
	return a.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function fe(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (o, s) {
					return (o = Le(o)), !n && s ? '[' + o + ']' : o
				})
				.join(n ? '.' : '')
		: t
}
function _t(e) {
	return a.isArray(e) && !e.some(Z)
}
const kt = a.toFlatObject(a, {}, null, function (t) {
	return /^is[A-Z]/.test(t)
})
function W(e, t, n) {
	if (!a.isObject(e)) throw new TypeError('target must be an object')
	;(t = t || new FormData()),
		(n = a.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (d, E) {
				return !a.isUndefined(E[d])
			}
		))
	const r = n.metaTokens,
		o = n.visitor || u,
		s = n.dots,
		i = n.indexes,
		m = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t)
	if (!a.isFunction(o)) throw new TypeError('visitor must be a function')
	function p(f) {
		if (f === null) return ''
		if (a.isDate(f)) return f.toISOString()
		if (!m && a.isBlob(f))
			throw new h('Blob is not supported. Use a Buffer instead.')
		return a.isArrayBuffer(f) || a.isTypedArray(f)
			? m && typeof Blob == 'function'
				? new Blob([f])
				: Buffer.from(f)
			: f
	}
	function u(f, d, E) {
		let S = f
		if (f && !E && typeof f == 'object') {
			if (a.endsWith(d, '{}'))
				(d = r ? d : d.slice(0, -2)), (f = JSON.stringify(f))
			else if (
				(a.isArray(f) && _t(f)) ||
				((a.isFileList(f) || a.endsWith(d, '[]')) && (S = a.toArray(f)))
			)
				return (
					(d = Le(d)),
					S.forEach(function (k, We) {
						!(a.isUndefined(k) || k === null) &&
							t.append(
								i === !0 ? fe([d], We, s) : i === null ? d : d + '[]',
								p(k)
							)
					}),
					!1
				)
		}
		return Z(f) ? !0 : (t.append(fe(E, d, s), p(f)), !1)
	}
	const l = [],
		w = Object.assign(kt, {
			defaultVisitor: u,
			convertValue: p,
			isVisitable: Z,
		})
	function O(f, d) {
		if (!a.isUndefined(f)) {
			if (l.indexOf(f) !== -1)
				throw Error('Circular reference detected in ' + d.join('.'))
			l.push(f),
				a.forEach(f, function (S, _) {
					;(!(a.isUndefined(S) || S === null) &&
						o.call(t, S, a.isString(_) ? _.trim() : _, d, w)) === !0 &&
						O(S, d ? d.concat(_) : [_])
				}),
				l.pop()
		}
	}
	if (!a.isObject(e)) throw new TypeError('data must be an object')
	return O(e), t
}
function de(e) {
	const t = {
		'!': '%21',
		"'": '%27',
		'(': '%28',
		')': '%29',
		'~': '%7E',
		'%20': '+',
		'%00': '\0',
	}
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r]
	})
}
function oe(e, t) {
	;(this._pairs = []), e && W(e, this, t)
}
const Fe = oe.prototype
Fe.append = function (t, n) {
	this._pairs.push([t, n])
}
Fe.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, de)
		  }
		: de
	return this._pairs
		.map(function (o) {
			return n(o[0]) + '=' + n(o[1])
		}, '')
		.join('&')
}
function jt(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']')
}
function De(e, t, n) {
	if (!t) return e
	const r = (n && n.encode) || jt,
		o = n && n.serialize
	let s
	if (
		(o
			? (s = o(t, n))
			: (s = a.isURLSearchParams(t) ? t.toString() : new oe(t, n).toString(r)),
		s)
	) {
		const i = e.indexOf('#')
		i !== -1 && (e = e.slice(0, i)),
			(e += (e.indexOf('?') === -1 ? '?' : '&') + s)
	}
	return e
}
class me {
	constructor() {
		this.handlers = []
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		)
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null)
	}
	clear() {
		this.handlers && (this.handlers = [])
	}
	forEach(t) {
		a.forEach(this.handlers, function (r) {
			r !== null && t(r)
		})
	}
}
const Be = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	Nt = typeof URLSearchParams < 'u' ? URLSearchParams : oe,
	It = typeof FormData < 'u' ? FormData : null,
	Ct = typeof Blob < 'u' ? Blob : null,
	Pt = {
		isBrowser: !0,
		classes: { URLSearchParams: Nt, FormData: It, Blob: Ct },
		protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
	},
	Ue = typeof window < 'u' && typeof document < 'u',
	Lt = ((e) => Ue && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
		typeof navigator < 'u' && navigator.product
	),
	Ft =
		typeof WorkerGlobalScope < 'u' &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == 'function',
	Dt = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				hasBrowserEnv: Ue,
				hasStandardBrowserEnv: Lt,
				hasStandardBrowserWebWorkerEnv: Ft,
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	x = { ...Dt, ...Pt }
function Bt(e, t) {
	return W(
		e,
		new x.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, o, s) {
					return x.isNode && a.isBuffer(n)
						? (this.append(r, n.toString('base64')), !1)
						: s.defaultVisitor.apply(this, arguments)
				},
			},
			t
		)
	)
}
function Ut(e) {
	return a
		.matchAll(/\w+|\[(\w*)]/g, e)
		.map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function qt(e) {
	const t = {},
		n = Object.keys(e)
	let r
	const o = n.length
	let s
	for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s])
	return t
}
function qe(e) {
	function t(n, r, o, s) {
		let i = n[s++]
		if (i === '__proto__') return !0
		const c = Number.isFinite(+i),
			m = s >= n.length
		return (
			(i = !i && a.isArray(o) ? o.length : i),
			m
				? (a.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !c)
				: ((!o[i] || !a.isObject(o[i])) && (o[i] = []),
				  t(n, r, o[i], s) && a.isArray(o[i]) && (o[i] = qt(o[i])),
				  !c)
		)
	}
	if (a.isFormData(e) && a.isFunction(e.entries)) {
		const n = {}
		return (
			a.forEachEntry(e, (r, o) => {
				t(Ut(r), o, n, 0)
			}),
			n
		)
	}
	return null
}
function Mt(e, t, n) {
	if (a.isString(e))
		try {
			return (t || JSON.parse)(e), a.trim(e)
		} catch (r) {
			if (r.name !== 'SyntaxError') throw r
		}
	return (n || JSON.stringify)(e)
}
const se = {
	transitional: Be,
	adapter: ['xhr', 'http'],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || '',
				o = r.indexOf('application/json') > -1,
				s = a.isObject(t)
			if ((s && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
				return o && o ? JSON.stringify(qe(t)) : t
			if (
				a.isArrayBuffer(t) ||
				a.isBuffer(t) ||
				a.isStream(t) ||
				a.isFile(t) ||
				a.isBlob(t)
			)
				return t
			if (a.isArrayBufferView(t)) return t.buffer
			if (a.isURLSearchParams(t))
				return (
					n.setContentType(
						'application/x-www-form-urlencoded;charset=utf-8',
						!1
					),
					t.toString()
				)
			let c
			if (s) {
				if (r.indexOf('application/x-www-form-urlencoded') > -1)
					return Bt(t, this.formSerializer).toString()
				if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
					const m = this.env && this.env.FormData
					return W(c ? { 'files[]': t } : t, m && new m(), this.formSerializer)
				}
			}
			return s || o ? (n.setContentType('application/json', !1), Mt(t)) : t
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || se.transitional,
				r = n && n.forcedJSONParsing,
				o = this.responseType === 'json'
			if (t && a.isString(t) && ((r && !this.responseType) || o)) {
				const i = !(n && n.silentJSONParsing) && o
				try {
					return JSON.parse(t)
				} catch (c) {
					if (i)
						throw c.name === 'SyntaxError'
							? h.from(c, h.ERR_BAD_RESPONSE, this, null, this.response)
							: c
				}
			}
			return t
		},
	],
	timeout: 0,
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: x.classes.FormData, Blob: x.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300
	},
	headers: {
		common: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': void 0,
		},
	},
}
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
	se.headers[e] = {}
})
const ie = se,
	Ht = a.toObjectSet([
		'age',
		'authorization',
		'content-length',
		'content-type',
		'etag',
		'expires',
		'from',
		'host',
		'if-modified-since',
		'if-unmodified-since',
		'last-modified',
		'location',
		'max-forwards',
		'proxy-authorization',
		'referer',
		'retry-after',
		'user-agent',
	]),
	$t = (e) => {
		const t = {}
		let n, r, o
		return (
			e &&
				e
					.split(
						`
`
					)
					.forEach(function (i) {
						;(o = i.indexOf(':')),
							(n = i.substring(0, o).trim().toLowerCase()),
							(r = i.substring(o + 1).trim()),
							!(!n || (t[n] && Ht[n])) &&
								(n === 'set-cookie'
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ', ' + r : r))
					}),
			t
		)
	},
	pe = Symbol('internals')
function P(e) {
	return e && String(e).trim().toLowerCase()
}
function q(e) {
	return e === !1 || e == null ? e : a.isArray(e) ? e.map(q) : String(e)
}
function zt(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
	let r
	for (; (r = n.exec(e)); ) t[r[1]] = r[2]
	return t
}
const Jt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function G(e, t, n, r, o) {
	if (a.isFunction(r)) return r.call(this, t, n)
	if ((o && (t = n), !!a.isString(t))) {
		if (a.isString(r)) return t.indexOf(r) !== -1
		if (a.isRegExp(r)) return r.test(t)
	}
}
function Wt(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function vt(e, t) {
	const n = a.toCamelCase(' ' + t)
	;['get', 'set', 'has'].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (o, s, i) {
				return this[r].call(this, t, o, s, i)
			},
			configurable: !0,
		})
	})
}
class v {
	constructor(t) {
		t && this.set(t)
	}
	set(t, n, r) {
		const o = this
		function s(c, m, p) {
			const u = P(m)
			if (!u) throw new Error('header name must be a non-empty string')
			const l = a.findKey(o, u)
			;(!l || o[l] === void 0 || p === !0 || (p === void 0 && o[l] !== !1)) &&
				(o[l || m] = q(c))
		}
		const i = (c, m) => a.forEach(c, (p, u) => s(p, u, m))
		return (
			a.isPlainObject(t) || t instanceof this.constructor
				? i(t, n)
				: a.isString(t) && (t = t.trim()) && !Jt(t)
				? i($t(t), n)
				: t != null && s(n, t, r),
			this
		)
	}
	get(t, n) {
		if (((t = P(t)), t)) {
			const r = a.findKey(this, t)
			if (r) {
				const o = this[r]
				if (!n) return o
				if (n === !0) return zt(o)
				if (a.isFunction(n)) return n.call(this, o, r)
				if (a.isRegExp(n)) return n.exec(o)
				throw new TypeError('parser must be boolean|regexp|function')
			}
		}
	}
	has(t, n) {
		if (((t = P(t)), t)) {
			const r = a.findKey(this, t)
			return !!(r && this[r] !== void 0 && (!n || G(this, this[r], r, n)))
		}
		return !1
	}
	delete(t, n) {
		const r = this
		let o = !1
		function s(i) {
			if (((i = P(i)), i)) {
				const c = a.findKey(r, i)
				c && (!n || G(r, r[c], c, n)) && (delete r[c], (o = !0))
			}
		}
		return a.isArray(t) ? t.forEach(s) : s(t), o
	}
	clear(t) {
		const n = Object.keys(this)
		let r = n.length,
			o = !1
		for (; r--; ) {
			const s = n[r]
			;(!t || G(this, this[s], s, t, !0)) && (delete this[s], (o = !0))
		}
		return o
	}
	normalize(t) {
		const n = this,
			r = {}
		return (
			a.forEach(this, (o, s) => {
				const i = a.findKey(r, s)
				if (i) {
					;(n[i] = q(o)), delete n[s]
					return
				}
				const c = t ? Wt(s) : String(s).trim()
				c !== s && delete n[s], (n[c] = q(o)), (r[c] = !0)
			}),
			this
		)
	}
	concat(...t) {
		return this.constructor.concat(this, ...t)
	}
	toJSON(t) {
		const n = Object.create(null)
		return (
			a.forEach(this, (r, o) => {
				r != null && r !== !1 && (n[o] = t && a.isArray(r) ? r.join(', ') : r)
			}),
			n
		)
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]()
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
	}
	get [Symbol.toStringTag]() {
		return 'AxiosHeaders'
	}
	static from(t) {
		return t instanceof this ? t : new this(t)
	}
	static concat(t, ...n) {
		const r = new this(t)
		return n.forEach((o) => r.set(o)), r
	}
	static accessor(t) {
		const r = (this[pe] = this[pe] = { accessors: {} }).accessors,
			o = this.prototype
		function s(i) {
			const c = P(i)
			r[c] || (vt(o, i), (r[c] = !0))
		}
		return a.isArray(t) ? t.forEach(s) : s(t), this
	}
}
v.accessor([
	'Content-Type',
	'Content-Length',
	'Accept',
	'Accept-Encoding',
	'User-Agent',
	'Authorization',
])
a.reduceDescriptors(v.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1)
	return {
		get: () => e,
		set(r) {
			this[n] = r
		},
	}
})
a.freezeMethods(v)
const T = v
function X(e, t) {
	const n = this || ie,
		r = t || n,
		o = T.from(r.headers)
	let s = r.data
	return (
		a.forEach(e, function (c) {
			s = c.call(n, s, o.normalize(), t ? t.status : void 0)
		}),
		o.normalize(),
		s
	)
}
function Me(e) {
	return !!(e && e.__CANCEL__)
}
function D(e, t, n) {
	h.call(this, e ?? 'canceled', h.ERR_CANCELED, t, n),
		(this.name = 'CanceledError')
}
a.inherits(D, h, { __CANCEL__: !0 })
function Vt(e, t, n) {
	const r = n.config.validateStatus
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new h(
					'Request failed with status code ' + n.status,
					[h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n
				)
		  )
}
const Kt = x.hasStandardBrowserEnv
	? {
			write(e, t, n, r, o, s) {
				const i = [e + '=' + encodeURIComponent(t)]
				a.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
					a.isString(r) && i.push('path=' + r),
					a.isString(o) && i.push('domain=' + o),
					s === !0 && i.push('secure'),
					(document.cookie = i.join('; '))
			},
			read(e) {
				const t = document.cookie.match(
					new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
				)
				return t ? decodeURIComponent(t[3]) : null
			},
			remove(e) {
				this.write(e, '', Date.now() - 864e5)
			},
	  }
	: {
			write() {},
			read() {
				return null
			},
			remove() {},
	  }
function Gt(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Xt(e, t) {
	return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function He(e, t) {
	return e && !Gt(t) ? Xt(e, t) : t
}
const Qt = x.hasStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement('a')
			let r
			function o(s) {
				let i = s
				return (
					t && (n.setAttribute('href', i), (i = n.href)),
					n.setAttribute('href', i),
					{
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, '') : '',
						hash: n.hash ? n.hash.replace(/^#/, '') : '',
						hostname: n.hostname,
						port: n.port,
						pathname:
							n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
					}
				)
			}
			return (
				(r = o(window.location.href)),
				function (i) {
					const c = a.isString(i) ? o(i) : i
					return c.protocol === r.protocol && c.host === r.host
				}
			)
	  })()
	: (function () {
			return function () {
				return !0
			}
	  })()
function Yt(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
	return (t && t[1]) || ''
}
function Zt(e, t) {
	e = e || 10
	const n = new Array(e),
		r = new Array(e)
	let o = 0,
		s = 0,
		i
	return (
		(t = t !== void 0 ? t : 1e3),
		function (m) {
			const p = Date.now(),
				u = r[s]
			i || (i = p), (n[o] = m), (r[o] = p)
			let l = s,
				w = 0
			for (; l !== o; ) (w += n[l++]), (l = l % e)
			if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), p - i < t)) return
			const O = u && p - u
			return O ? Math.round((w * 1e3) / O) : void 0
		}
	)
}
function he(e, t) {
	let n = 0
	const r = Zt(50, 250)
	return (o) => {
		const s = o.loaded,
			i = o.lengthComputable ? o.total : void 0,
			c = s - n,
			m = r(c),
			p = s <= i
		n = s
		const u = {
			loaded: s,
			total: i,
			progress: i ? s / i : void 0,
			bytes: c,
			rate: m || void 0,
			estimated: m && i && p ? (i - s) / m : void 0,
			event: o,
		}
		;(u[t ? 'download' : 'upload'] = !0), e(u)
	}
}
const en = typeof XMLHttpRequest < 'u',
	tn =
		en &&
		function (e) {
			return new Promise(function (n, r) {
				let o = e.data
				const s = T.from(e.headers).normalize()
				let { responseType: i, withXSRFToken: c } = e,
					m
				function p() {
					e.cancelToken && e.cancelToken.unsubscribe(m),
						e.signal && e.signal.removeEventListener('abort', m)
				}
				let u
				if (a.isFormData(o)) {
					if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
						s.setContentType(!1)
					else if ((u = s.getContentType()) !== !1) {
						const [d, ...E] = u
							? u
									.split(';')
									.map((S) => S.trim())
									.filter(Boolean)
							: []
						s.setContentType([d || 'multipart/form-data', ...E].join('; '))
					}
				}
				let l = new XMLHttpRequest()
				if (e.auth) {
					const d = e.auth.username || '',
						E = e.auth.password
							? unescape(encodeURIComponent(e.auth.password))
							: ''
					s.set('Authorization', 'Basic ' + btoa(d + ':' + E))
				}
				const w = He(e.baseURL, e.url)
				l.open(e.method.toUpperCase(), De(w, e.params, e.paramsSerializer), !0),
					(l.timeout = e.timeout)
				function O() {
					if (!l) return
					const d = T.from(
							'getAllResponseHeaders' in l && l.getAllResponseHeaders()
						),
						S = {
							data:
								!i || i === 'text' || i === 'json'
									? l.responseText
									: l.response,
							status: l.status,
							statusText: l.statusText,
							headers: d,
							config: e,
							request: l,
						}
					Vt(
						function (k) {
							n(k), p()
						},
						function (k) {
							r(k), p()
						},
						S
					),
						(l = null)
				}
				if (
					('onloadend' in l
						? (l.onloadend = O)
						: (l.onreadystatechange = function () {
								!l ||
									l.readyState !== 4 ||
									(l.status === 0 &&
										!(l.responseURL && l.responseURL.indexOf('file:') === 0)) ||
									setTimeout(O)
						  }),
					(l.onabort = function () {
						l && (r(new h('Request aborted', h.ECONNABORTED, e, l)), (l = null))
					}),
					(l.onerror = function () {
						r(new h('Network Error', h.ERR_NETWORK, e, l)), (l = null)
					}),
					(l.ontimeout = function () {
						let E = e.timeout
							? 'timeout of ' + e.timeout + 'ms exceeded'
							: 'timeout exceeded'
						const S = e.transitional || Be
						e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
							r(
								new h(
									E,
									S.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,
									e,
									l
								)
							),
							(l = null)
					}),
					x.hasStandardBrowserEnv &&
						(c && a.isFunction(c) && (c = c(e)), c || (c !== !1 && Qt(w))))
				) {
					const d =
						e.xsrfHeaderName && e.xsrfCookieName && Kt.read(e.xsrfCookieName)
					d && s.set(e.xsrfHeaderName, d)
				}
				o === void 0 && s.setContentType(null),
					'setRequestHeader' in l &&
						a.forEach(s.toJSON(), function (E, S) {
							l.setRequestHeader(S, E)
						}),
					a.isUndefined(e.withCredentials) ||
						(l.withCredentials = !!e.withCredentials),
					i && i !== 'json' && (l.responseType = e.responseType),
					typeof e.onDownloadProgress == 'function' &&
						l.addEventListener('progress', he(e.onDownloadProgress, !0)),
					typeof e.onUploadProgress == 'function' &&
						l.upload &&
						l.upload.addEventListener('progress', he(e.onUploadProgress)),
					(e.cancelToken || e.signal) &&
						((m = (d) => {
							l &&
								(r(!d || d.type ? new D(null, e, l) : d), l.abort(), (l = null))
						}),
						e.cancelToken && e.cancelToken.subscribe(m),
						e.signal &&
							(e.signal.aborted ? m() : e.signal.addEventListener('abort', m)))
				const f = Yt(w)
				if (f && x.protocols.indexOf(f) === -1) {
					r(new h('Unsupported protocol ' + f + ':', h.ERR_BAD_REQUEST, e))
					return
				}
				l.send(o || null)
			})
		},
	ee = { http: Tt, xhr: tn }
a.forEach(ee, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, 'name', { value: t })
		} catch {}
		Object.defineProperty(e, 'adapterName', { value: t })
	}
})
const ge = (e) => `- ${e}`,
	nn = (e) => a.isFunction(e) || e === null || e === !1,
	$e = {
		getAdapter: (e) => {
			e = a.isArray(e) ? e : [e]
			const { length: t } = e
			let n, r
			const o = {}
			for (let s = 0; s < t; s++) {
				n = e[s]
				let i
				if (
					((r = n),
					!nn(n) && ((r = ee[(i = String(n)).toLowerCase()]), r === void 0))
				)
					throw new h(`Unknown adapter '${i}'`)
				if (r) break
				o[i || '#' + s] = r
			}
			if (!r) {
				const s = Object.entries(o).map(
					([c, m]) =>
						`adapter ${c} ` +
						(m === !1
							? 'is not supported by the environment'
							: 'is not available in the build')
				)
				let i = t
					? s.length > 1
						? `since :
` +
						  s.map(ge).join(`
`)
						: ' ' + ge(s[0])
					: 'as no adapter specified'
				throw new h(
					'There is no suitable adapter to dispatch the request ' + i,
					'ERR_NOT_SUPPORT'
				)
			}
			return r
		},
		adapters: ee,
	}
function Q(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new D(null, e)
}
function ye(e) {
	return (
		Q(e),
		(e.headers = T.from(e.headers)),
		(e.data = X.call(e, e.transformRequest)),
		['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
			e.headers.setContentType('application/x-www-form-urlencoded', !1),
		$e
			.getAdapter(e.adapter || ie.adapter)(e)
			.then(
				function (r) {
					return (
						Q(e),
						(r.data = X.call(e, e.transformResponse, r)),
						(r.headers = T.from(r.headers)),
						r
					)
				},
				function (r) {
					return (
						Me(r) ||
							(Q(e),
							r &&
								r.response &&
								((r.response.data = X.call(e, e.transformResponse, r.response)),
								(r.response.headers = T.from(r.response.headers)))),
						Promise.reject(r)
					)
				}
			)
	)
}
const be = (e) => (e instanceof T ? e.toJSON() : e)
function I(e, t) {
	t = t || {}
	const n = {}
	function r(p, u, l) {
		return a.isPlainObject(p) && a.isPlainObject(u)
			? a.merge.call({ caseless: l }, p, u)
			: a.isPlainObject(u)
			? a.merge({}, u)
			: a.isArray(u)
			? u.slice()
			: u
	}
	function o(p, u, l) {
		if (a.isUndefined(u)) {
			if (!a.isUndefined(p)) return r(void 0, p, l)
		} else return r(p, u, l)
	}
	function s(p, u) {
		if (!a.isUndefined(u)) return r(void 0, u)
	}
	function i(p, u) {
		if (a.isUndefined(u)) {
			if (!a.isUndefined(p)) return r(void 0, p)
		} else return r(void 0, u)
	}
	function c(p, u, l) {
		if (l in t) return r(p, u)
		if (l in e) return r(void 0, p)
	}
	const m = {
		url: s,
		method: s,
		data: s,
		baseURL: i,
		transformRequest: i,
		transformResponse: i,
		paramsSerializer: i,
		timeout: i,
		timeoutMessage: i,
		withCredentials: i,
		withXSRFToken: i,
		adapter: i,
		responseType: i,
		xsrfCookieName: i,
		xsrfHeaderName: i,
		onUploadProgress: i,
		onDownloadProgress: i,
		decompress: i,
		maxContentLength: i,
		maxBodyLength: i,
		beforeRedirect: i,
		transport: i,
		httpAgent: i,
		httpsAgent: i,
		cancelToken: i,
		socketPath: i,
		responseEncoding: i,
		validateStatus: c,
		headers: (p, u) => o(be(p), be(u), !0),
	}
	return (
		a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
			const l = m[u] || o,
				w = l(e[u], t[u], u)
			;(a.isUndefined(w) && l !== c) || (n[u] = w)
		}),
		n
	)
}
const ze = '1.6.5',
	ae = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
	(e, t) => {
		ae[e] = function (r) {
			return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
		}
	}
)
const we = {}
ae.transitional = function (t, n, r) {
	function o(s, i) {
		return (
			'[Axios v' +
			ze +
			"] Transitional option '" +
			s +
			"'" +
			i +
			(r ? '. ' + r : '')
		)
	}
	return (s, i, c) => {
		if (t === !1)
			throw new h(
				o(i, ' has been removed' + (n ? ' in ' + n : '')),
				h.ERR_DEPRECATED
			)
		return (
			n &&
				!we[i] &&
				((we[i] = !0),
				console.warn(
					o(
						i,
						' has been deprecated since v' +
							n +
							' and will be removed in the near future'
					)
				)),
			t ? t(s, i, c) : !0
		)
	}
}
function rn(e, t, n) {
	if (typeof e != 'object')
		throw new h('options must be an object', h.ERR_BAD_OPTION_VALUE)
	const r = Object.keys(e)
	let o = r.length
	for (; o-- > 0; ) {
		const s = r[o],
			i = t[s]
		if (i) {
			const c = e[s],
				m = c === void 0 || i(c, s, e)
			if (m !== !0)
				throw new h('option ' + s + ' must be ' + m, h.ERR_BAD_OPTION_VALUE)
			continue
		}
		if (n !== !0) throw new h('Unknown option ' + s, h.ERR_BAD_OPTION)
	}
}
const te = { assertOptions: rn, validators: ae },
	j = te.validators
class H {
	constructor(t) {
		;(this.defaults = t),
			(this.interceptors = { request: new me(), response: new me() })
	}
	request(t, n) {
		typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
			(n = I(this.defaults, n))
		const { transitional: r, paramsSerializer: o, headers: s } = n
		r !== void 0 &&
			te.assertOptions(
				r,
				{
					silentJSONParsing: j.transitional(j.boolean),
					forcedJSONParsing: j.transitional(j.boolean),
					clarifyTimeoutError: j.transitional(j.boolean),
				},
				!1
			),
			o != null &&
				(a.isFunction(o)
					? (n.paramsSerializer = { serialize: o })
					: te.assertOptions(
							o,
							{ encode: j.function, serialize: j.function },
							!0
					  )),
			(n.method = (n.method || this.defaults.method || 'get').toLowerCase())
		let i = s && a.merge(s.common, s[n.method])
		s &&
			a.forEach(
				['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
				(f) => {
					delete s[f]
				}
			),
			(n.headers = T.concat(i, s))
		const c = []
		let m = !0
		this.interceptors.request.forEach(function (d) {
			;(typeof d.runWhen == 'function' && d.runWhen(n) === !1) ||
				((m = m && d.synchronous), c.unshift(d.fulfilled, d.rejected))
		})
		const p = []
		this.interceptors.response.forEach(function (d) {
			p.push(d.fulfilled, d.rejected)
		})
		let u,
			l = 0,
			w
		if (!m) {
			const f = [ye.bind(this), void 0]
			for (
				f.unshift.apply(f, c),
					f.push.apply(f, p),
					w = f.length,
					u = Promise.resolve(n);
				l < w;

			)
				u = u.then(f[l++], f[l++])
			return u
		}
		w = c.length
		let O = n
		for (l = 0; l < w; ) {
			const f = c[l++],
				d = c[l++]
			try {
				O = f(O)
			} catch (E) {
				d.call(this, E)
				break
			}
		}
		try {
			u = ye.call(this, O)
		} catch (f) {
			return Promise.reject(f)
		}
		for (l = 0, w = p.length; l < w; ) u = u.then(p[l++], p[l++])
		return u
	}
	getUri(t) {
		t = I(this.defaults, t)
		const n = He(t.baseURL, t.url)
		return De(n, t.params, t.paramsSerializer)
	}
}
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
	H.prototype[t] = function (n, r) {
		return this.request(I(r || {}, { method: t, url: n, data: (r || {}).data }))
	}
})
a.forEach(['post', 'put', 'patch'], function (t) {
	function n(r) {
		return function (s, i, c) {
			return this.request(
				I(c || {}, {
					method: t,
					headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
					url: s,
					data: i,
				})
			)
		}
	}
	;(H.prototype[t] = n()), (H.prototype[t + 'Form'] = n(!0))
})
const M = H
class ce {
	constructor(t) {
		if (typeof t != 'function')
			throw new TypeError('executor must be a function.')
		let n
		this.promise = new Promise(function (s) {
			n = s
		})
		const r = this
		this.promise.then((o) => {
			if (!r._listeners) return
			let s = r._listeners.length
			for (; s-- > 0; ) r._listeners[s](o)
			r._listeners = null
		}),
			(this.promise.then = (o) => {
				let s
				const i = new Promise((c) => {
					r.subscribe(c), (s = c)
				}).then(o)
				return (
					(i.cancel = function () {
						r.unsubscribe(s)
					}),
					i
				)
			}),
			t(function (s, i, c) {
				r.reason || ((r.reason = new D(s, i, c)), n(r.reason))
			})
	}
	throwIfRequested() {
		if (this.reason) throw this.reason
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason)
			return
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t])
	}
	unsubscribe(t) {
		if (!this._listeners) return
		const n = this._listeners.indexOf(t)
		n !== -1 && this._listeners.splice(n, 1)
	}
	static source() {
		let t
		return {
			token: new ce(function (o) {
				t = o
			}),
			cancel: t,
		}
	}
}
const on = ce
function sn(e) {
	return function (n) {
		return e.apply(null, n)
	}
}
function an(e) {
	return a.isObject(e) && e.isAxiosError === !0
}
const ne = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
}
Object.entries(ne).forEach(([e, t]) => {
	ne[t] = e
})
const cn = ne
function Je(e) {
	const t = new M(e),
		n = xe(M.prototype.request, t)
	return (
		a.extend(n, M.prototype, t, { allOwnKeys: !0 }),
		a.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (o) {
			return Je(I(e, o))
		}),
		n
	)
}
const b = Je(ie)
b.Axios = M
b.CanceledError = D
b.CancelToken = on
b.isCancel = Me
b.VERSION = ze
b.toFormData = W
b.AxiosError = h
b.Cancel = b.CanceledError
b.all = function (t) {
	return Promise.all(t)
}
b.spread = sn
b.isAxiosError = an
b.mergeConfig = I
b.AxiosHeaders = T
b.formToJSON = (e) => qe(a.isHTMLForm(e) ? new FormData(e) : e)
b.getAdapter = $e.getAdapter
b.HttpStatusCode = cn
b.default = b
const g = document.querySelector('body'),
	y = document.querySelector('.box'),
	ln = document.querySelector('.box__left-weather-info-city'),
	un = document.querySelector('.box__left-weather-info-temp'),
	fn = document.querySelector('.box__left-weather-info-date'),
	dn = document.querySelector('.box__left-weather-info-icon'),
	mn = document.querySelector('.box__right-btn'),
	N = document.querySelector('.box__right-input'),
	B = document.querySelector('.box__right-locations'),
	pn = document.querySelector('.box__right-info-pressure'),
	hn = document.querySelector('.box__right-info-humidity'),
	gn = document.querySelector('.box__right-info-maxtemp'),
	yn = document.querySelector('.box__right-info-mintemp'),
	bn = document.querySelector('.box__right-info-feelslike'),
	Ee = document.querySelector('.box__right-info-visibility'),
	wn = document.querySelector('.box__right-info-windspeed'),
	Se = document.querySelector('.box__right-info-windgust'),
	En = document.querySelector('.box__right-info-winddeg'),
	Sn = document.querySelector('.box__right-info-sunrise'),
	On = document.querySelector('.box__right-info-sunset'),
	Rn = 'https://api.openweathermap.org/data/2.5/weather?q=',
	xn = 'a1f28905bb879b4ebe17972bf2fe8cf6',
	An = '&units=metric',
	Oe = () => {
		const e = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			],
			t = [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			n = new Date(),
			r = n.getFullYear(),
			o = t[n.getMonth()],
			s = e[n.getDay()],
			i = n.getDate(),
			c = n.getHours()
		let m
		n.getMinutes() < 10 ? (m = `0${n.getMinutes()}`) : (m = n.getMinutes()),
			(fn.textContent = `${c}:${m} - ${s}, ${i} ${o} ${r}`)
	},
	V = (e) => {
		const n = Rn + (e || 'London') + An + `&appid=${xn}`
		b.get(n).then((r) => {
			const o = r.data
			kn(o.name),
				_n(o),
				(document.cookie = `cityName=${o.name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`),
				Nn(o.weather[0].id)
		}),
			(N.value = '')
	},
	Tn = (e) => {
		const n = `; ${document.cookie}`.split(`; ${e}=`)
		if (n.length === 2) return n.pop().split(';').shift()
	},
	_n = (e) => {
		;(ln.textContent = e.name),
			(dn.innerHTML = `<img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png">`),
			(un.innerHTML = `${Math.round(e.main.temp, 0.5)}&deg;`),
			(pn.textContent = `Pressure: ${e.main.pressure} hPa`),
			(hn.textContent = `Humidity: ${e.main.humidity} %`),
			(gn.innerHTML = `Max. temp: ${Math.round(e.main.temp_max, 0.5)}&deg;C`),
			(yn.innerHTML = `Min. temp: ${Math.round(e.main.temp_min, 0.5)}&deg;C`),
			(bn.innerHTML = `Feels like: ${Math.round(e.main.feels_like)}&deg;C`),
			e.visibility < 1e3
				? (Ee.textContent = `Visibility: ${e.visibility} m`)
				: (Ee.textContent = `Visibility: ${Math.round(
						e.visibility / 1e3,
						0.5
				  )} km`),
			(wn.textContent = `Wind speed: ${e.wind.speed} (m/s)`),
			e.wind.gust === void 0
				? (Se.textContent = 'Wind gust: no data')
				: (Se.textContent = `Wind gust: ${e.wind.gust} (m/s)`),
			(En.textContent = `Wind degree: ${e.wind.deg}`),
			(Sn.textContent = `Sunrise: ${Re(e.sys.sunrise)}*`),
			(On.textContent = `Sunset: ${Re(e.sys.sunset)}*`)
	},
	kn = (e) => {
		const t = B.querySelectorAll('.box__right-location')
		let n = jn(t)
		const r = document.createElement('p')
		r.classList.add('box__right-location'),
			r.setAttribute('onclick', `getWeather('${e}')`),
			n.includes(e) ||
				((r.textContent = e),
				t.length > 2 && B.lastChild.remove(),
				B.prepend(r))
	},
	jn = (e) => {
		let t = []
		for (let n = 0; n < e.length; n++) t[n] = e[n].textContent
		return t
	},
	Nn = (e) => {
		e === 200
			? ((g.style.backgroundImage = 'url(./img/200.jpg)'),
			  (y.style.backgroundImage = 'url(./img/200.jpg)'))
			: e === 201 || e === 202
			? ((g.style.backgroundImage = 'url(./img/201.jpg)'),
			  (y.style.backgroundImage = 'url(./img/201.jpg)'))
			: e === 210 || e === 211
			? ((g.style.backgroundImage = 'url(./img/210.jpg)'),
			  (y.style.backgroundImage = 'url(./img/210.jpg)'))
			: e === 212 || e === 221 || (e === 230) | (e === 231) | (e === 232)
			? ((g.style.backgroundImage = 'url(./img/212.jpg)'),
			  (y.style.backgroundImage = 'url(./img/212.jpg)'))
			: e === 300
			? ((g.style.backgroundImage = 'url(./img/300.jpg)'),
			  (y.style.backgroundImage = 'url(./img/300.jpg)'))
			: e === 301 || e === 302
			? ((g.style.backgroundImage = 'url(./img/301.jpg)'),
			  (y.style.backgroundImage = 'url(./img/301.jpg)'))
			: e === 310 || e === 311
			? ((g.style.backgroundImage = 'url(./img/310.jpg)'),
			  (y.style.backgroundImage = 'url(./img/310.jpg)'))
			: e === 312 || e === 313
			? ((g.style.backgroundImage = 'url(./img/312.jpg)'),
			  (y.style.backgroundImage = 'url(./img/312.jpg)'))
			: e === 314 || e === 321
			? ((g.style.backgroundImage = 'url(./img/314.jpg)'),
			  (y.style.backgroundImage = 'url(./img/314.jpg)'))
			: e === 500
			? ((g.style.backgroundImage = 'url(./img/500.jpg)'),
			  (y.style.backgroundImage = 'url(./img/500.jpg)'))
			: e === 501 || e === 502
			? ((g.style.backgroundImage = 'url(./img/502.jpg)'),
			  (y.style.backgroundImage = 'url(./img/502.jpg)'))
			: e === 503 || e === 504
			? ((g.style.backgroundImage = 'url(./img/503.jpg)'),
			  (y.style.backgroundImage = 'url(./img/503.jpg)'))
			: e === 511
			? ((g.style.backgroundImage = 'url(./img/511.jpg)'),
			  (y.style.backgroundImage = 'url(./img/511.jpg)'))
			: e === 520 || e === 521 || e === 522 || e === 532
			? ((g.style.backgroundImage = 'url(./img/520.jpg)'),
			  (y.style.backgroundImage = 'url(./img/520.jpg)'))
			: e === 600 ||
			  e === 611 ||
			  e === 612 ||
			  e === 613 ||
			  e === 615 ||
			  e === 616 ||
			  e === 620 ||
			  e === 621
			? ((g.style.backgroundImage = 'url(./img/600.jpg)'),
			  (y.style.backgroundImage = 'url(./img/600.jpg)'))
			: e === 601
			? ((g.style.backgroundImage = 'url(./img/601.jpg)'),
			  (y.style.backgroundImage = 'url(./img/601.jpg)'))
			: e === 602 || e === 622
			? ((g.style.backgroundImage = 'url(./img/602.jpg)'),
			  (y.style.backgroundImage = 'url(./img/602.jpg)'))
			: e === 701
			? ((g.style.backgroundImage = 'url(./img/701.jpg)'),
			  (y.style.backgroundImage = 'url(./img/701.jpg)'))
			: e === 711
			? ((g.style.backgroundImage = 'url(./img/711.jpg)'),
			  (y.style.backgroundImage = 'url(./img/711.jpg)'))
			: e === 721
			? ((g.style.backgroundImage = 'url(./img/721.jpg)'),
			  (y.style.backgroundImage = 'url(./img/721.jpg)'))
			: e === 731
			? ((g.style.backgroundImage = 'url(./img/731.jpg)'),
			  (y.style.backgroundImage = 'url(./img/731.jpg)'))
			: e === 741
			? ((g.style.backgroundImage = 'url(./img/741.jpg)'),
			  (y.style.backgroundImage = 'url(./img/741.jpg)'))
			: e === 762
			? ((g.style.backgroundImage = 'url(./img/762.jpg)'),
			  (y.style.backgroundImage = 'url(./img/762.jpg)'))
			: e === 781
			? ((g.style.backgroundImage = 'url(./img/781.jpg)'),
			  (y.style.backgroundImage = 'url(./img/781.jpg)'))
			: e === 800
			? ((g.style.backgroundImage = 'url(./img/800.jpg)'),
			  (y.style.backgroundImage = 'url(./img/800.jpg)'))
			: e === 801
			? ((g.style.backgroundImage = 'url(./img/801.jpg)'),
			  (y.style.backgroundImage = 'url(./img/801.jpg)'))
			: e === 802
			? ((g.style.backgroundImage = 'url(./img/802.jpg)'),
			  (y.style.backgroundImage = 'url(./img/802.jpg)'))
			: e === 803
			? ((g.style.backgroundImage = 'url(./img/803.jpg)'),
			  (y.style.backgroundImage = 'url(./img/803.jpg)'))
			: e === 804
			? ((g.style.backgroundImage = 'url(./img/804.jpg)'),
			  (y.style.backgroundImage = 'url(./img/804.jpg)'))
			: ((g.style.backgroundImage = 'url(./img/default.jpg)'),
			  (y.style.backgroundImage = 'url(./img/default.jpg)'))
	},
	Re = (e) => {
		const t = new Date(e * 1e3),
			n = t.getHours()
		let r
		return (
			t.getMinutes() < 10 ? (r = '0' + t.getMinutes()) : (r = t.getMinutes()),
			`${n}:${r}`
		)
	}
document.addEventListener(
	'load',
	V(Tn('cityName')),
	Oe(),
	setInterval(() => {
		Oe()
	}, 1e3)
)
mn.addEventListener('click', () => {
	N.value !== '' && V(N.value)
})
N.addEventListener('keydown', (e) => {
	e.code === 'Enter' && N.value !== '' && V(N.value)
})
window.getWeather = V
