$(document).ready(function() {
  // 当文档加载完毕后执行以下代码

  // 监听滚动事件，改变导航背景
  $(window).scroll(function() {
      // 如果滚动超过50像素，则给导航添加类名 'scrolled'
      if ($(this).scrollTop() > 50) {
          $('nav ul').addClass('scrolled');
      } else {
          // 否则移除 'scrolled' 类名
          $('nav ul').removeClass('scrolled');
      }

      // 当滚动超过300像素时，显示返回顶部按钮
      if ($(this).scrollTop() > 300) {
          $('#back-to-top').fadeIn();
      } else {
          // 否则隐藏返回顶部按钮
          $('#back-to-top').fadeOut();
      }
  });

  // 点击返回顶部按钮时平滑滚动到页面顶部
  $('#back-to-top').click(function() {
      $('html, body').animate({scrollTop: 0}, 800);
      return false;
  });

  // 渐显项目图片
  $('#project-image').addClass('visible');

  // 滚动至项目内容时，显示项目容器
  $(window).scroll(function() {
      var projectContainer = $('#project-container');
      // 当窗口滚动位置加上窗口高度超过项目容器的顶部位置时，添加 'visible' 类名
      if ($(window).scrollTop() + $(window).height() > projectContainer.offset().top) {
          projectContainer.addClass('visible');
      }
  });
});
