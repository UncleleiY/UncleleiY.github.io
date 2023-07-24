//花花特效
onload = function () {
  var click_cnt = 0,
    $html = document.getElementsByTagName("html")[0],
    $body = document.getElementsByTagName("body")[0];
  $html.onclick = function (e) {
    var $elem = document.createElement("b");
    ($elem.style.color = "#FFC0CB"),
      ($elem.style.zIndex = 9999),
      ($elem.style.position = "absolute"),
      ($elem.style.select = "none");
    var x = e.pageX,
      y = e.pageY;
    switch (
      (($elem.style.left = x - 10 + "px"),
      ($elem.style.top = y - 20 + "px"),
      clearInterval(anim),
      ++click_cnt)
    ) {
      case 10:
        $elem.innerText = "OωO";
        break;
      case 20:
        $elem.innerText = "(๑•́ ∀ •̀๑)";
        break;
      case 30:
        $elem.innerText = "(๑•́ ₃ •̀๑)";
        break;
      case 40:
        $elem.innerText = "(๑•̀_•́๑)";
        break;
      case 50:
        $elem.innerText = "（￣へ￣）";
        break;
      case 60:
        $elem.innerText = "(╯°口°)╯(┴—┴";
        break;
      case 70:
        $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
        break;
      case 80:
        $elem.innerText = "╮(｡>口<｡)╭";
        break;
      case 90:
        $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
        break;
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
        $elem.innerText = "(ꐦ°᷄д°᷅)";
        break;
      default:
        $elem.innerText = "🌸";
    }
    $elem.style.fontSize = 10 * Math.random() + 8 + "px";
    var increase = 0,
      anim;
    setTimeout(function () {
      anim = setInterval(function () {
        150 == ++increase && (clearInterval(anim), $body.removeChild($elem)),
          ($elem.style.top = y - 20 - increase + "px"),
          ($elem.style.opacity = (150 - increase) / 120);
      }, 8);
    }, 70),
      $body.appendChild($elem);
  };
};


// 鼠标移动星星特效
(function () {
  function t() {
    i(), a();
  }
  function i() {
    document.addEventListener("mousemove", o),
      document.addEventListener("touchmove", e),
      document.addEventListener("touchstart", e),
      window.addEventListener("resize", n);
  }
  function n(t) {
    (d = window.innerWidth), window.innerHeight;
  }
  function e(t) {
    if (t.touches.length > 0)
      for (var i = 0; i < t.touches.length; i++)
        s(
          t.touches[i].clientX,
          t.touches[i].clientY,
          r[Math.floor(Math.random() * r.length)]
        );
  }
  function o(t) {
    (u.x = t.clientX),
      (u.y = t.clientY),
      s(u.x, u.y, r[Math.floor(Math.random() * r.length)]);
  }
  function s(t, i, n) {
    var e = new l();
    e.init(t, i, n), f.push(e);
  }
  function h() {
    for (var t = 0; t < f.length; t++) f[t].update();
    for (t = f.length - 1; t >= 0; t--)
      f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1));
  }
  function a() {
    requestAnimationFrame(a), h();
  }
  function l() {
    (this.character = "*"),
      (this.lifeSpan = 120),
      (this.initialStyles = {
        position: "fixed",
        top: "0",
        display: "block",
        pointerEvents: "none",
        "z-index": "10000000",
        fontSize: "20px",
        "will-change": "transform",
      }),
      (this.init = function (t, i, n) {
        (this.velocity = {
          x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          y: 1,
        }),
          (this.position = { x: t - 10, y: i - 20 }),
          (this.initialStyles.color = n),
          (this.element = document.createElement("span")),
          (this.element.innerHTML = this.character),
          c(this.element, this.initialStyles),
          this.update(),
          document.body.appendChild(this.element);
      }),
      (this.update = function () {
        (this.position.x += this.velocity.x),
          (this.position.y += this.velocity.y),
          this.lifeSpan--,
          (this.element.style.transform =
            "translate3d(" +
            this.position.x +
            "px," +
            this.position.y +
            "px,0) scale(" +
            this.lifeSpan / 120 +
            ")");
      }),
      (this.die = function () {
        this.element.parentNode.removeChild(this.element);
      });
  }
  function c(t, i) {
    for (var n in i) t.style[n] = i[n];
  }
  var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"],
    d = window.innerWidth,
    u = (window.innerHeight, { x: d / 2, y: d / 2 }),
    f = [];
  t();
})();


//社会主义核心价值观
//var a_idx = 0; jQuery(document).ready(function($) { $("body").click(function(e) { var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"); var $i = $("<span/>").text(a[a_idx]); a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY; let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop; y = y - scrolly; $i.css({ "z-index": 999, "top": y - 20, "left": x, "position": "fixed", "font-weight": "bold", "color": "#ff6651" /*随机颜色写法："rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"*/ }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() { $i.remove(); });  }); });

//引入小心心特效
//!function (e, t, a) {function r() {for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");requestAnimationFrame(r)}function n() {var t = "function" == typeof e.onclick && e.onclick;e.onclick = function (e) {t && t(), o(e)}}function o(e) {var a = t.createElement("div");a.className = "heart", s.push({el: a,x: e.clientX - 5,y: e.clientY - 5,scale: 1,alpha: 1,color: c()}), t.body.appendChild(a)}function i(e) {var a = t.createElement("style");a.type = "text/css";try {a.appendChild(t.createTextNode(e))} catch (t) {a.styleSheet.cssText = e}t.getElementsByTagName("head")[0].appendChild(a)}function c() {return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"}var s = [];e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {setTimeout(e, 1e3 / 60)}, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()}(window, document);