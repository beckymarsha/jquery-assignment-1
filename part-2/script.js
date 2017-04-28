// Do your work in this file.

// This assignment will be covering [`for`] loops, [creating new HTML elements][createElement], and [appending HTML elements][append] to an HTML file via [jQuery].

// 1. Create a [`for`] loop that creates 196 divs and will include the following:



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
    box = boxes[i];
    box.addEventListener('click', function () {
        if (this.className === "type-1") {
            this.className = "clicked";
        } else {
            this.className = "type-1";
        }

        if (this.className === "type-2") {
            this.className = "clicked";
        } else {
            this.className = "type-2";
        }
    });

}




// for (var i = 0; i < boxes.length; i++) {
//     box = boxes[i];
//     box.addEventListener('click', function() {
//         if (this.className === "box") {
//             this.className = "clicked";
//         } else {
//             this.className = "box";
//         }

//         if (boxes.length <= 301 && boxes.length >= 201) {
//             this.style.backgroundColor = "yellow";
//         } else if (boxes.length < 401 && boxes.length > 300) {
//             this.style.backgroundColor = "green";
//         } else if (boxes.length < 501 && boxes.length > 400) {
//             this.style.backgroundColor = "purple";
//         } else if (boxes.length < 601 && boxes.length > 500) {
//             this.style.backgroundColor = "orange";
//         } else if (boxes.length < 701 && boxes.length > 600) {
//             this.style.backgroundColor = "pink";
//         } else if (boxes.length < 801 && boxes.length > 700) {
//             this.style.backgroundColor = "black";
//         } else if (boxes.length < 901 && boxes.length > 800) {
//             this.style.backgroundColor = "brown";
//         } else {
//             this.style.backgroundColor = "blue";
//         }
//     });
// }



