$(function () {
  $(":input").focus(function () {
    $(this).addClass("focus");
  }).blur(function () {
    $(this).removeClass("focus");
  });
});

// $(function(){
//    $("#keep").click(function(){
//       alert("保存成功!");
//    }); 
// });

$(function () {
  function add(options, to) {
    var html = "";
    $each(options, function () {
      html += "<option value='" + $(this).attr("value") + "'>" + $(this).text() + "</option>";
    });
    to.append(html);
  }

  function remove(options, from) {
    $each(options, function () {
      var option = $(this);
      $each(from.children(), function () {
        if ($(this).val() == option.val()) {
          $(this).remove();
        }
      });
    });
  }

  $("#right1").click(function () {
    var $options = $("#select1 option:selected");
    $options.appendTo("#select2");
  });
  $("#left1").click(function () {
    var $options = $("#select2 option:selected");
    $options.appendTo("#select1");
  });
  $("#allSelect").click(function () {
    var $options = $("#select1 option");
    $options.appendTo("#select2");
  });
  $("#allUndo").click(function () {
    var $options = $("#select2 option");
    $options.appendTo("#select1");
  });
  $("#select1").dblclick(function () {
    var $options = $("option:selected", this);
    $options.appendTo("#select2");
  });
  $("#select2").dblclick(function () {
    var $options = $("option:selected", this);
    $options.appendTo("#select1");
  });
});

$(function () {
  $("#right2").click(function () {
    var $options = $("#select3 option:selected");
    $options.appendTo("#select4");
  });
  $("#left2").click(function () {
    var $options = $("#select4 option:selected");
    $options.appendTo("#select3");
  });
  $("#select3").dblclick(function () {
    var $options = $("option:selected", this);
    $options.appendTo("#select4");
  });
  $("#select4").dblclick(function () {
    var $options = $("option:selected", this);
    $options.appendTo("#select3");
  });
});