/**
 * fullPage Pure Javascript v.0.0.9 (Alpha) - Not support given until Beta version.
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (n, m, C, v, e) { typeof define === 'function' && define.amd ? define(() => { n.fullpage = v(m, C); return n.fullpage; }) : typeof exports === 'object' ? module.exports = v(m, C) : m.fullpage = v(m, C); }(this, window, document, (n, m, C) => {
  function v(a, b) { for (const d in b) b.hasOwnProperty(d) && d !== null && (a.style[d] = b[d]); return a; } function e(a, b) { b = b || m; return b.querySelector(a); } function p(a, b) { b = b || m; return b.querySelectorAll(a); } function q(a) { for (var b = 0; a = a.previousSibling;)a.nodeType == 3 && /^\s*$/.test(a.data) || b++; return b; }
  function ua(a, b) { a.style.display = typeof b !== 'undefined' ? b ? 'block' : 'none' : a.style.display == 'block' ? 'none' : 'block'; return a; } function w(a, b) { return !!a.className.match(new RegExp(`(\\s|^)${b}(\\s|$)`)); } function B(a, b) { a && w(a, b) && (a.className = a.className.replace(new RegExp(`(\\s|^)${b}(\\s|$)`), '')); } function t(a, b) { a && !w(a, b) && (a.className += ` ${b}`); } function I(a, b) { return a && (b(a) ? a : I(a.parentNode, b)); } function R() { return 'innerHeight' in n ? n.innerHeight : m.documentElement.offsetHeight; } function J(a) {
    a.preventDefault
      ? a.preventDefault() : a.returnValue = !1;
  } function z(a) { const b = {}; return a && b.toString.call(a) === '[object Function]'; } function K(a, b, d) { b = b.split(' '); for (let c = 0, e = b.length; c < e; c++)m.addEventListener ? a.addEventListener(b[c], d, !1) : a.attachEvent(b[c], d, !1); } function ea(a, b, d, c) {
    const f = Sa(a); const e = b - f; let
      h = 0; S = !0; var k = function () { if (S) { let b; h += 20; b = Math.easeInOutCubic(h, f, e, d); va(a, b); h < d ? setTimeout(k, 20) : typeof c !== 'undefined' && c(); } else h < d && c(); }; k();
  } function fa() {
    const a = m.documentElement; return (n.pageYOffset || a.scrollTop)
      - (a.clientTop || 0);
  } function wa(a) { for (a = a.nextSibling; a && a.nodeType != 1;)a = a.nextSibling; return a; } function xa(a) { for (a = a.previousSibling; a && a.nodeType != 1;)a = a.previousSibling; return a; } function Sa(a) { return a.self != n && w(a, 'fp-slides') ? a.scrollLeft : !c.autoScrolling || c.scrollBar ? fa() : a.offsetTop; } function va(a, b) { !c.autoScrolling || c.scrollBar || a.self != n && w(a, 'fp-slides') ? a.self != n && w(a, 'fp-slides') ? a.scrollLeft = b : a.scrollTo(0, b) : a.style.top = `${b}px`; } function ya(a, b) {
    T('autoScrolling', a, b); let d = e('.fp-section.active');
    c.autoScrolling && !c.scrollBar ? (v(m.body, { overflow: 'hidden', height: '100%' }), v(m.getElementsByTagName('html')[0], { overflow: 'hidden', height: '100%' }), ga(c.recordHistory, 'internal'), v(r, { '-ms-touch-action': 'none', 'touch-action': 'none' }), d && L(d.offsetTop)) : (v(m.body, { overflow: 'visible', height: '100%' }), v(m.getElementsByTagName('html')[0], { overflow: 'visible', height: '100%' }), ga(!1, 'internal'), v(r, { '-ms-touch-action': '', 'touch-action': '' }), L(0), d = U(d.offsetTop), d.element.scrollTo(0, d.options));
  } function ga(a,
    b) { T('recordHistory', a, b); } function M(a, b) { T('scrollingSpeed', a, b); } function V() { const a = xa(e('.fp-section.active')); a && A(a, null, !0); } function ha() { const a = wa(e('.fp-section.active')); a && A(a, null, !1); } function W(a, b) { const d = za(a); typeof b !== 'undefined' ? ia(a, b) : d && A(d); } function X() { Aa('next'); } function Y() { Aa('prev'); } function Ba(a) {
    if (!w(r, 'fp-destroyed')) {
      u = !0; Ca = R(); for (var b = p('.fp-section'), d = 0; d < b.length; ++d) {
        var f = b[d]; const l = e('.fp-slides', f); var
          f = p('.fp-slide', f); l && f.length > 1 && N(l, e('.fp-slide.active', l));
      } b = e('.fp-section.active'); q(b) && L(b.offsetTop); u = !1; z(c.afterResize) && a && c.afterResize.call(r); z(c.afterReBuild) && !a && c.afterReBuild.call(r);
    }
  } function Ta() {
    let a = m.createElement('div'); a.setAttribute('id', 'fp-nav'); let b = m.createElement('ul'); a.appendChild(b); m.body.appendChild(a); x = e('#fp-nav'); x.style.color = c.navigationColor; t(x, c.navigationPosition); c.showActiveTooltip && t(x, 'fp-show-active'); a = ''; for (b = 0; b < p('.fp-section').length; b++) {
      let d = ''; c.anchors.length && (d = c.anchors[b]); a = `${a}<li><a href="#${
        d}"><span></span></a>`; d = c.navigationTooltips[b]; typeof d !== C && d !== '' && (a += `<div class="fp-tooltip ${c.navigationPosition}">${d}</div>`); a += '</li>';
    } b = e('ul', x); b.innerHTML += a; a = p('.fp-slidesNav a'); for (b = 0; b < a.length; b++)K(a[b], 'click onclick touchstart', function (a) { a = n.event || a || a.originalEvent; J(a); a = q(this.parentNode); A(p('.fp-section')[a], null, !1); });
  } function Ua() {
    let a; if (!c.autoScrolling || c.scrollBar) {
      for (var b = fa(), d = 0, f = Math.abs(b - p('.fp-section')[0].offsetTop), l = p('.fp-section'), g = 0; g
          < l.length; ++g) { var h = Math.abs(b - l[g].offsetTop); h < f && (d = g, f = h); } a = p('.fp-section')[d];
    } if (!c.autoScrolling || c.scrollBar) {
      if (!w(a, 'active')) {
        ja = !0; b = e('.fp-section.active'); d = q(b) + 1; f = Da(a); l = a.getAttribute('data-anchor'); g = q(a) + 1; if (h = e('.fp-slide.active', a)) var k = h.getAttribute('data-anchor'); const
          m = q(h); E && (B(b, 'active'), t(a, 'active'), z(c.onLeave) && c.onLeave.call(b, d, g, f), z(c.afterLoad) && c.afterLoad.call(a, l, g), Z(l, 0), c.anchors.length && (F = l, ka(m, k, l, g))); clearTimeout(Ea); Ea = setTimeout(() => { ja = !1; },
          100);
      } c.fitToSection && (clearTimeout(Fa), Fa = setTimeout(() => { if (E && !c.autoScrolling || c.scrollBar) q(e('.fp-section.active')) == q(a) && (u = !0), A(a), u = !1; }, c.fitToSectionDelay));
    }
  } function aa(a) { a == 'down' ? ha() : V(); } function la(a) {
    let b = n.event || a || a.originalEvent; ma(b) && (c.autoScrolling && J(a), a = e('.fp-section.active'), a = p('.fp-slides', a), E && !G && (b = Ga(b), O = b.y, ba = b.x, a && Math.abs(ca - ba) > Math.abs(P - O) ? Math.abs(ca - ba) > ('innerWidth' in n ? n.innerWidth : m.documentElement.offsetWidth) / 100 * c.touchSensitivity && (ca
        > ba ? X() : Y()) : c.autoScrolling && Math.abs(P - O) > R() / 100 * c.touchSensitivity && (P > O ? aa('down') : O > P && aa('up'))));
  } function ma(a) { return typeof a.pointerType === 'undefined' || a.pointerType != 'mouse'; } function na(a) { a = n.event || a || a.originalEvent; c.fitToSection && (S = !1); ma(a) && (a = Ga(a), P = a.y, ca = a.x); } function Ha(a, b) { for (var d = 0, c = a.slice(Math.max(a.length - b, 1)), e = 0; e < c.length; e++)d += c[e]; return Math.ceil(d / b); } function Va(a) {
    let b = (new Date()).getTime(); if (c.autoScrolling) {
      a = n.event || a || a.originalEvent; const d = a.wheelDelta
          || -a.deltaY || -a.detail; const
        f = Math.max(-1, Math.min(1, d)); H.length > 149 && H.shift(); H.push(Math.abs(d)); c.scrollBar && J(a); a = b - Ia; Ia = b; a > 200 && (H = []); E && (b = Ha(H, 10), a = Ha(H, 70), b >= a && (f < 0 ? aa('down') : aa('up'))); return !1;
    } c.fitToSection && (S = !1);
  } function Aa(a) {
    let b = e('.fp-section.active'); if ((b = e('.fp-slides', b)) && !G) {
      const d = e('.fp-slide.active', b); let
        f; f = a === 'prev' ? xa(d) : wa(d); if (!f) {
        if (!c.loopHorizontal) return; f = d.parentNode.firstChild; for (var l = []; f; f = f.nextSibling)f.nodeType == 1 && f != d && l.push(f); f = a === 'prev' ? l[l.length
            - 1] : l[0];
      } G = !0; N(b, f);
    }
  } function A(a, b, d) {
    if (a !== null && (b = {
      element: a, callback: b, isMovementUp: d, dtop: a.offsetTop, yMovement: Da(a), anchorLink: a.getAttribute('data-anchor'), sectionIndex: q(a), activeSlide: e('.fp-slide.active', a), activeSection: e('.fp-section.active'), leavingSection: q(e('.fp-section.active')) + 1, localIsResizing: u,
    }, !(q(b.activeSection) == b.sectionIndex && !u || c.scrollBar && fa() === b.dtop))) {
      if (b.activeSlide) var f = b.activeSlide.getAttribute('data-anchor'); const
        l = q(b.activeSlide); d = p('.fp-section'); for (let g = 0; g < d.length; g++)B(d[g], 'active'); t(a, 'active'); E = !1; ka(l, f, b.anchorLink, b.sectionIndex); z(c.onLeave) && !b.localIsResizing && c.onLeave.call(b.activeSection, b.leavingSection, b.sectionIndex + 1, b.yMovement); Wa(b); F = b.anchorLink; Z(b.anchorLink, b.sectionIndex);
    }
  } function Wa(a) { if (c.css3 && c.autoScrolling && !c.scrollBar) Ja(`translate3d(0px, -${a.dtop}px, 0px)`, !0), c.scrollingSpeed ? setTimeout(() => { oa(a); }, c.scrollingSpeed) : oa(a); else { const b = U(a.dtop); ea(b.element, b.options, c.scrollingSpeed, () => { oa(a); }); } }
  function U(a) { const b = {}; c.autoScrolling && !c.scrollBar ? (b.options = -a, b.element = e('.fullpage-wrapper')) : (b.options = a, b.element = n); return b; } function oa(a) { z(c.afterLoad) && !a.localIsResizing && c.afterLoad.call(a.element, a.anchorLink, a.sectionIndex + 1); E = !0; z(a.callback) && a.callback.call(this); } function Xa() {
    var a = n.location.hash.replace('#', '').split('/'); const b = a[0]; var
      a = a[1]; b && ia(b, a);
  } function Ya(a) { let b = this; b.self == n && (b = a.target || a.srcElement); w(b, 'fp-prev') ? Y() : X(); } function Ka() {
    if (!ja) {
      var a = n.location.hash.replace('#',
        '').split('/'); const b = a[0]; var
        a = a[1]; if (b.length) {
        const d = typeof F === 'undefined'; const
          c = typeof F === 'undefined' && typeof a === 'undefined' && !G; (b && b !== F && !d || c || !G && pa != a) && ia(b, a);
      }
    }
  } function N(a, b) {
    const d = q(b); let f = I(a, a => w(a, 'fp-section')); const l = q(f); const g = f.getAttribute('data-anchor'); let h = e('.fp-slidesNav', f); const k = La(b); const
      m = u; if (c.onSlideLeave) {
      var n = e('.fp-slide.active', f); var r = q(n); let
        v; v = r == d ? 'none' : r > d ? 'left' : 'right'; m || v === 'none' || z(c.onSlideLeave) && c.onSlideLeave.call(n, g, l + 1, r, v, d);
    } n = p('.fp-slide', f); for (r = 0; r < n.length; r++) {
      B(n[r],
        'active');
    } t(b, 'active'); !c.loopHorizontal && c.controlArrows && (ua(e('.fp-controlArrow.fp-prev', f), d !== 0), ua(e('.fp-controlArrow.fp-next', f), !b.is(':last-child'))); w(f, 'active') && ka(d, k, g, l); const x = function () { m || z(c.afterSlideLoad) && c.afterSlideLoad.call(b, g, l + 1, k, d); G = !1; }; c.css3 ? (f = `translate3d(-${Math.round(b.offsetLeft)}px, 0px, 0px)`, n = e('.fp-slidesContainer', a), Ma(n, c.scrollingSpeed > 0), Na(n, f), setTimeout(() => { x(); }, c.scrollingSpeed, c.easing)) : ea(a, Math.round(b.offsetLeft), c.scrollingSpeed,
      () => { x(); }); c.slidesNavigation && (B(e('.active', h), 'active'), h = p('li', h)[d], h = e('a', h), t(h, 'active'));
  } function Za() { if (qa) { if (m.activeElement.getAttribute('type') !== 'text') { const a = R(); Math.abs(a - ra) > 20 * Math.max(ra, a) / 100 && (Ba(!0), ra = a); } } else clearTimeout(Oa), Oa = setTimeout(() => { Ba(!0); }, 350); } function Ma(a) { const b = `all ${c.scrollingSpeed}ms ${c.easingcss3}`; B(a, 'fp-notransition'); v(a, { '-webkit-transition': b, transition: b }); return a; } function Z(a, b) {
    if (c.menu) {
      var d = e(c.menu); d && (B(e('.active', d),
        'active'), t(e(`[data-menuanchor="${a}"]`, d), 'active'));
    } c.navigation && (B(e('.active', x), 'active'), a ? t(e(`a[href="#${a}"]`, x), 'active') : (d = p('li', x)[b], t(e('a', d), 'active')));
  } function Da(a) { const b = q(e('.fp-section.active')); a = q(a); return b == a ? 'none' : b > a ? 'up' : 'down'; } function Ja(a, b) { b ? Ma(r) : t(r, 'fp-notransition'); Na(r, a); setTimeout(() => { B(r, 'fp-notransition'); }, 10); } function za(a) { let b = e(`.fp-section[data-anchor="${a}"]`); b || (b = p('.fp-section')[a - 1]); return b; } function ia(a, b) {
    const d = za(decodeURI(a));
    typeof b === 'undefined' && (b = 0); a === F || w(d, 'active') ? Pa(d, b) : A(d, () => { Pa(d, b); });
  } function Pa(a, b) {
    if (typeof b !== 'undefined') {
      const d = e('.fp-slides', a); let
        c; c = e('.fp-slides', a); let l = e(`.fp-slide[data-anchor="${b}"]`, c); c && !l && (l = p('.fp-slide', c)[b]); (c = l) && N(d, c);
    }
  } function ka(a, b, d, f) { f = ''; c.anchors.length && (a ? (typeof d !== 'undefined' && (f = d), typeof b === 'undefined' && (b = a), pa = b, Qa(`${f}/${b}`)) : (typeof a !== 'undefined' && (pa = b), Qa(d))); sa(); } function Qa(a) {
    if (c.recordHistory) location.hash = a; else if (qa || ta) {
      history.replaceState(C,
        C, `#${a}`);
    } else { const b = n.location.href.split('#')[0]; n.location.replace(`${b}#${a}`); }
  } function La(a) { let b = a.getAttribute('data-anchor'); a = q(a); b || (b = a); return b; } function sa(a) {
    a = e('.fp-section.active'); let b = e('.fp-slide.active', a); const
      d = a.getAttribute('data-anchor'); a = q(a); a = String(a); c.anchors.length && (a = d); b && (b = La(b), a = `${a}-${b}`); a = a.replace('/', '-').replace('#', ''); m.body.className = m.body.className.replace(RegExp('\\b\\s?fp-viewing-[^\\s]+\\b', 'g'), ''); t(m.body, `fp-viewing-${a}`);
  } function da(a, b, c, f, e) {
    a.addEventListener
      ? (a.addEventListener(c, b, !1), typeof e !== 'undefined' && a.addEventListener(e, b, !1)) : a.attachEvent(f, b);
  } function Ga(a) { const b = []; b.y = typeof a.pageY !== 'undefined' && (a.pageY || a.pageX) ? a.pageY : a.touches[0].pageY; b.x = typeof a.pageX !== 'undefined' && (a.pageY || a.pageX) ? a.pageX : a.touches[0].pageX; ta && ma(a) && (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX); return b; } function $a(a, b) {
    M(0, 'internal'); typeof b !== 'undefined' && (u = !0); const c = I(a, a => w(a, 'fp-slides')); N(c, a); typeof b !== 'undefined' && (u = !1);
    M(Q.scrollingSpeed, 'internal');
  } function L(a) { c.scrollBar ? (a = U(a), va(a.element, a.options, 0)) : c.css3 ? Ja(`translate3d(0px, -${a}px, 0px)`, !1) : r.style.top = `${-a}px`; } function Na(a, b) {
    v(a, {
      '-webkit-transform': b, '-moz-transform': b, '-ms-transform': b, transform: b,
    });
  } function T(a, b, d) { c[a] = b; d !== 'internal' && (Q[a] = b); } let c; var G = !1; var qa = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/); var ta = 'ontouchstart' in n || navigator.msMaxTouchPoints > 0
    || navigator.maxTouchPoints; var Ca = R(); var u = !1; let F; let pa; var E = !0; var H = []; let x; let S; let Q; let
    r; Math.easeInOutCubic = function (a, b, c, e) { return (a /= e / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b; }; let Ea; let Fa; var ja = !1; var P = 0; var ca = 0; var O = 0; var ba = 0; var
    Ia = (new Date()).getTime(); m.addEventListener ? n.addEventListener('hashchange', Ka, !1) : n.attachEvent('onhashchange', Ka); let Ra; m.onkeydown = function (a) {
    clearTimeout(Ra); var b = m.activeElement.tagName; if (b !== 'SELECT' && b !== 'INPUT' && c.keyboardScrolling && c.autoScrolling) {
      a = n.event || a || a.originalEvent; for (var d = a.charCode || a.keyCode,
        b = [40, 38, 32, 33, 34], e = 0; e < b.length; e++)b[e] == d && J(a); const l = a.shiftKey; Ra = setTimeout(() => { switch (d) { case 38: case 33: V(); break; case 32: if (l) { V(); break; } case 40: case 34: ha(); break; case 36: W(1); break; case 35: W(p('.fp-section').length); break; case 37: Y(); break; case 39: X(); } }, 150);
    }
  }; e('.fp-slidesNav a') !== null && K(e('.fp-slidesNav a'), 'click onclick touchstart', function (a) {
    J(a); a = I(this, a => w(e1, 'fp-section')); a = e('.fp-slides', a); var b = I(this, a => a.tagName === 'li'); var b = q(b);
    var b = p('.fp-slide', a)[b]; N(a, b);
  }); var ra = Ca; let
    Oa; return {
    initialize(a, b) {
      var d = {
        menu: !1,
        anchors: [],
        navigation: !1,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: 'bottom',
        scrollBar: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1E3,
        easingcss3: 'ease',
        loopHorizontal: !0,
        touchSensitivity: 5,
        keyboardScrolling: !0,
        recordHistory: !0,
        controlArrows: !0,
        sectionSelector: '.section',
        slideSelector: '.slide',
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
      }; var
        f = b; typeof f !== 'object' && (f = {}); for (var l in f) d.hasOwnProperty(l) && (d[l] = f[l]); c = d; d = c; if (d === null || typeof d !== 'object') Q = d; else {
        var f = d.constructor(); var
          g; for (g in d) d.hasOwnProperty(g) && (f[g] = d[g]); Q = f;
      } r = e(a); B(r, 'fp-destroyed'); for (g = 0; g < c.anchors.length; g++)d = c.anchors[g], (m.getElementById(`#${d}`) || p(`[name="${d}"]`).length) && console && console.error && console.error('fullPage: data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
      if (c.css3) {
        g = c; var d = m.createElement('p'); var h; var
          f = {
            webkitTransform: '-webkit-transform', OTransform: '-o-transform', msTransform: '-ms-transform', MozTransform: '-moz-transform', transform: 'transform',
          }; m.body.insertBefore(d, null); for (var k in f) d.style[k] !== C && (d.style[k] = 'translate3d(1px,1px,1px)', h = n.getComputedStyle(d).getPropertyValue(f[k])); m.body.removeChild(d); g.css3 = h !== C && h.length > 0 && h !== 'none';
      } r !== null ? (v(r, { height: '100%', position: 'relative' }), t(r, 'fullpage-wrapper'), t(e('html'), 'fp-enabled')) : console
          && console.error && console.error("fullPage: Error! Fullpage.js needs to be initialized with a selector. For example: fullpage('#fullpage');"); da(e('.fullpage-wrapper'), Va, 'mousewheel', 'onmousewheel', 'wheel'); if (qa || ta) {
        h = e('.fullpage-wrapper'), m.addEventListener && (k = n.PointerEvent ? { down: 'pointerdown', move: 'pointermove' } : { down: 'MSPointerDown', move: 'MSPointerMove' }, h.removeEventListener('touchstart', na), h.removeEventListener(k.down, na), h.removeEventListener('touchmove', la), h.removeEventListener(k.move, la),
        K(h, `touchstart ${k.down}`, na), K(h, `touchmove ${k.move}`, la));
      } da(n, Za, 'resize', 'onresize'); da(n, Ua, 'scroll', 'onscroll', 'onscroll'); k = p(c.sectionSelector); for (h = 0; h < k.length; ++h)t(k[h], 'fp-section'); k = p(c.slideSelector); for (h = 0; h < k.length; ++h)t(k[h], 'fp-slide'); c.navigation && Ta(); k = p('.fp-section'); for (h = 0; h < k.length; h++) {
        if (f = h, g = k[h], d = p('.fp-slide', g), l = d.length, f || e('.fp-section.active') !== null || t(g, 'active'), typeof c.anchors[f] !== 'undefined' && (g.setAttribute('data-anchor', c.anchors[f]), w(g, 'active')
              && Z(c.anchors[f], f)), l > 0) {
          var y = 100 * l; var
            f = 100 / l; g.innerHTML = `<div class="fp-slides"><div class="fp-slidesContainer">${g.innerHTML}</div></div>`; d = p('.fp-slide', g); e('.fp-slidesContainer', g).style.width = `${y}%`; if (c.controlArrows && l > 1) {
            var y = g; var
              u = m.createElement('div'); u.className = 'fp-controlArrow fp-prev'; var D = m.createElement('div'); D.className = 'fp-controlArrow fp-next'; var A = e('.fp-slides', y); A.parentNode.appendChild(u); A.parentNode.appendChild(D); c.loopHorizontal || (e('.fp-controlArrow.fp-prev', y).style.display = 'none');
          } if (c.slidesNavigation) { y = g; u = m.createElement('div'); u.className = 'fp-slidesNav'; D = m.createElement('ul'); u.appendChild(D); y.appendChild(u); y = e('.fp-slidesNav', y); u = e('ul', y); t(y, c.slidesNavPosition); D = ''; for (A = 0; A < l; A++)D += '<li><a href="#"><span></span></a></li>'; u.innerHTML += D; y.style['margin-left'] = `-${y.offsetWidth / 2}px`; l = p('li', y)[0]; t(e('a', l), 'active'); } for (l = 0; l < d.length; l++)d[l].style.width = `${f}%`; e('.fp-slide.active', g); t(d[0], 'active');
        }
      } h = p('.fp-controlArrow'); for (k = 0; k < h.length; k++) {
        K(h[k],
          'click onclick touchstart', Ya);
      } ya(c.autoScrolling, 'internal'); h = e('.fp-section.active'); k = e('.fp-slide.active', h); g = q(e('.fp-section.active')); k && (g !== 0 || g === 0 && q(k) !== 0) && $a(k); c.navigation && (x.style['margin-top'] = `-${x.offsetHeight / 2}px`, k = p('li', x)[q(e('.fp-section.active'))], t(e('a', k), 'active')); k = e('.fp-section.active'); z(c.afterLoad) && c.afterLoad.call(k, k.getAttribute('data-anchor'), q(k) + 1); z(c.afterRender) && c.afterRender.call(r); k = n.location.hash.replace('#', '').split('/')[0]; k.length && (g = e(`[data-anchor="${k}"]`), !c.animateAnchor && g.length && (c.autoScrolling ? L(g.offsetTop) : (L(0), sa(k), d = U(g.offsetTop), ea(d.element, d.options, 0)), Z(k, null), z(c.afterLoad) && c.afterLoad.call(g, k, q(g) + 1), B(h, 'active'), t(g, 'active'))); sa(); da(m, Xa, 'DOMContentLoaded', 'DOMContentLoaded', 'DOMContentLoaded');
    },
    moveSectionUp: V,
    moveSectionDown: ha,
    moveTo: W,
    silentMoveTo(a, b) { M(0, 'internal'); W(a, b); M(Q.scrollingSpeed, 'internal'); },
    moveSlideRight: X,
    moveSlideLeft: Y,
    setAutoScrolling: ya,
    setFitToSection(a,
      b) { T('fitToSection', a, b); },
    setKeyboardScrolling(a) { c.keyboardScrolling = a; },
    setRecordHistory: ga,
    setScrollingSpeed: M,
  };
}));
