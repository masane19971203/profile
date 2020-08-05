$(document).ready(function(){
  const interval = 3000; // 切り替わりの間隔（ミリ秒）
  const fadeSpeed = 1000;// フェード処理の早さ（ミリ秒）
  const changeImage = function(){
    const $active = $(".myself__main__image.active");
    const $next = $active.next().length ? $active.next() : $(".myself__main__image:first");

    $active.fadeOut(fadeSpeed).removeClass("active");
    $next.fadeIn(fadeSpeed).addClass("active");
  }

  $(".myself__main__image").hide();
  $(".myself__main__image:first").addClass("active").show();

  setInterval(changeImage, interval);


});