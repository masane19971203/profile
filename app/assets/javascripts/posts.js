$(document).ready(function(){
  const interval = 3000; // 切り替わりの間隔（ミリ秒）
  const fadeSpeed = 1000;// フェード処理の早さ（ミリ秒）
  const changeImage = function(){
    const $active = $(".myself__main__image-item.active");
    const $next = $active.next().length ? $active.next() : $(".myself__main__image-item:first");

    $active.fadeOut(fadeSpeed).removeClass("active");
    $next.fadeIn(fadeSpeed).addClass("active");
  }

  $(".myself__main__image-item").hide();
  $(".myself__main__image-item:first").addClass("active").show();

  setInterval(changeImage, interval);


});
