parcelRequire = (function (e, r, t, n) {
	var i,
		o = 'function' == typeof parcelRequire && parcelRequire,
		u = 'function' == typeof require && require
	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = 'function' == typeof parcelRequire && parcelRequire
				if (!n && i) return i(t, !0)
				if (o) return o(t, !0)
				if (u && 'string' == typeof t) return u(t)
				var c = new Error("Cannot find module '" + t + "'")
				throw ((c.code = 'MODULE_NOT_FOUND'), c)
			}
			;(p.resolve = function (r) {
				return e[t][1][r] || r
			}),
				(p.cache = {})
			var l = (r[t] = new f.Module(t))
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports
		function p(e) {
			return f(p.resolve(e))
		}
	}
	;(f.isParcelRequire = !0),
		(f.Module = function (e) {
			;(this.id = e), (this.bundle = f), (this.exports = {})
		}),
		(f.modules = e),
		(f.cache = r),
		(f.parent = o),
		(f.register = function (r, t) {
			e[r] = [
				function (e, r) {
					r.exports = t
				},
				{},
			]
		})
	for (var c = 0; c < t.length; c++)
		try {
			f(t[c])
		} catch (e) {
			i || (i = e)
		}
	if (t.length) {
		var l = f(t[t.length - 1])
		'object' == typeof exports && 'undefined' != typeof module
			? (module.exports = l)
			: 'function' == typeof define && define.amd
			? define(function () {
					return l
			  })
			: n && (this[n] = l)
	}
	if (((parcelRequire = f), i)) throw i
	return f
})(
	{
		S3PC: [
			function (require, module, exports) {
				var o = function (o) {
						return Array.prototype.slice.call(document.querySelectorAll(o))
					},
					e = function (o) {
						return o instanceof HTMLElement
					},
					t = function (o) {
						return '[object String]' === Object.prototype.toString.call(o)
					},
					r = function () {
						var r =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {},
							n = r.zIndex,
							d = void 0 === n ? 1 : n,
							c = r.diameter,
							a = void 0 === c ? 80 : c,
							i = r.borderWidth,
							l = void 0 === i ? 1 : i,
							s = r.borderColor,
							u = void 0 === s ? '#ddd' : s,
							y = r.easing,
							b = void 0 === y ? 4 : y,
							v = r.background,
							x = void 0 === v ? 'transparent' : v,
							m = !1,
							p = { x: 0, y: 0, o: 1, d: a },
							f = { x: 0, y: 0, o: 0, d: a },
							g = document.createElement('div'),
							h = b / 15
						;(g.style =
							'position:fixed;top:0;left:0;border-radius:100%;pointer-events:none;opacity:0;z-index:'
								.concat(d, ';height:')
								.concat(a, 'px;width:')
								.concat(a, 'px;background:')
								.concat(x, ';border:')
								.concat(l, 'px solid ')
								.concat(u, ';mix-blend-mode:exclusion;transition:background ')
								.concat(h, 's,border ')
								.concat(h, 's;will-change:transform')),
							document.addEventListener('mousemove', function (o) {
								;(p.x = o.clientX),
									(p.y = o.clientY),
									(g.style.opacity = 1),
									m ||
										(document.body.append(g),
										(f.x = p.x),
										(f.y = p.y),
										(m = !0),
										k())
							})
						var k = function o() {
							var e = p.x - f.x,
								t = p.y - f.y
							;(f.x += e / b), (f.y += t / b)
							var r = 'translate3d('
								.concat(f.x - f.d / 2, 'px,')
								.concat(f.y - f.d / 2, 'px,0)')
							;(g.style.webkitTransform = r), (g.style.transform = r)
							var n = p.o - f.o
							;(f.o += n / b), (g.style.opacity = f.o)
							var d = p.d - f.d
							;(f.d += d / b),
								(g.style.height = f.d + 'px'),
								(g.style.width = f.d + 'px')
							try {
								requestAnimationFrame(o)
							} catch (c) {
								setImmediate(o)
							}
						}
						return (
							(g.over = function (r, n) {
								var d = function (o) {
									o.addEventListener('mouseover', function (o) {
										n.background && (g.style.backgroundColor = n.background),
											n.borderColor && (g.style.borderColor = n.borderColor),
											n.scale && (p.d = a * n.scale)
									}),
										o.addEventListener('mouseout', function (o) {
											n.background && (g.style.backgroundColor = x),
												n.borderColor && (g.style.borderColor = u),
												n.scale && (p.d = a)
										})
								}
								e(r) ? d(r) : t(r) && o(r).forEach(d)
							}),
							g
						)
					}
				module.exports = r
			},
			{},
		],
		WXAN: [
			function (require, module, exports) {
				'use strict'
				var e = u(require('..'))
				function u(e) {
					return e && e.__esModule ? e : { default: e }
				}
				window.curDot = e.default
			},
			{ '..': 'S3PC' },
		],
	},
	{},
	['WXAN'],
	null
)
