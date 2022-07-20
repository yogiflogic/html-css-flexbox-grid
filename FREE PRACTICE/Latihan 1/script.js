$(document).ready(function () {
  $('h1').css('color', 'yellow');
  $('.btn').click(function () {
    $('.content').hide();
  });

  $('.btn').on('click', function () {
    $(this).hide();
  });

  $('.btn').on('click', function () {
    $(this).show();
  });
});
