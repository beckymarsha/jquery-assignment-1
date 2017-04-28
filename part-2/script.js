boxes = document.getElementsByClassName('box');

type1 = document.getElementsByClassName('type-1');
type1.className = "type-1";

type2 = document.getElementsByClassName('type-2');
type2.className = "type-2";

for (i = 0; i <= 195; i++) {
    var box = document.createElement("div");
    box.className = "box";

    $('.box:odd').addClass('type-2');
    $('.box:even').addClass('type-1');
    $('body').append(box);
}

$(".box").click(function () {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
    } else {
        $(this).addClass("clicked");
    }
});