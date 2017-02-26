$(function () {
  $(":input").focus(function () {
    $(this).addClass("focus");
  }).blur(function () {
    $(this).removeClass("focus");
  });
  $('.meetingGroup').hover(function () {
    $(this).popover('show');
  }, function () {
    $(this).popover('hide');
  });
  $('.m_delete').click(function () {
    $.confirm({
    title: '删除提示信息',
    content: '确认删除此会议吗？',
    buttons: {
        确定: function () {
            $(this).parent('.meetingGroup').fadeToggle();
        },
        取消: function () {
            return;
        }
        }
    })
    // $(this).parent().fadeToggle();
  });
});