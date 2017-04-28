// Do your work in this file.

// This assignment will be covering [`for`] loops, [creating new HTML elements][createElement], and [appending HTML elements][append] to an HTML file via [jQuery].

// 1. Create a [`for`] loop that creates 196 divs and will include the following:



boxes = document.getElementsByClassName('box');


for (i = 0; i <= 196; i++) {

    var box = document.createElement("div");
    box.className = "box";
    $('body').append(box);

    // box = boxes[i];

    // box.addEventListener('click', function () {
    //     if (this.className === "box") {
    //         this.className = "clicked";
    //     } else {
    //         this.className = "box";
    //     }
    }
console.log("Total number of boxes: " + boxes.length)




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



//    1. All the divs will have a class of `box`.

//    1. All even-numbered divs will _also_ have the class of `type-1`.

//    1. All odd-numbered divs will _also_ have the class of `type-2`.

// 1. All the divs created in step 3 will be appended to the document body.

// 1. Add an [click] event listener on all the created `box` divs in step 3 and 4. **Important**: You cannot do this with any type of loop.


// **NOTE**: Remember, you're producing this HTML using jQuery. You cannot edit any file other than the `script.js` file.

// ### The HTML page should produce an image like so:

// ![output](./output.gif)

// [`for`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// [append]: https://api.jquery.com/append/
// [click]: https://api.jquery.com/click/
// [createElement]: https://api.jquery.com/jQuery/#creating-new-elements
// [fork]: https://github.com/karbassi-id/jQuery-assignment-1/fork
// [jQuery]: https://jquery.com
