$(document).ready(function(){
  const interval = 3000; // 切り替わりの間隔（ミリ秒）
  const fadeSpeed = 1000;// フェード処理の早さ（ミリ秒）
  const changeImage = function(){
    const $active = $(".myself__main__image-item.active");
    const $next = $active.next().length ? $active.next() : $(".myself__main__image-item:first");
<<<<<<< HEAD
=======

>>>>>>> c24955930bb0529b5adb88d8e480b1948da65ccd
    $active.fadeOut(fadeSpeed).removeClass("active");
    $next.fadeIn(fadeSpeed).addClass("active");
  }

  $(".myself__main__image-item").hide();
  $(".myself__main__image-item:first").addClass("active").show();

  setInterval(changeImage, interval);
<<<<<<< HEAD
});
=======


});
>>>>>>> c24955930bb0529b5adb88d8e480b1948da65ccd
