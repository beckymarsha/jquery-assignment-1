// Do your work in this file.

// var view = document.createElement("div");
// view.className = "view";
// document.body.appendChild(view);

var view = $("view");
view.className = "view";
$('body').append(skyElement);

// var grass = document.createElement("div");
// grass.className = "grass";
// view.appendChild(grass);

var grass = $("div");
grass.className = "grass";
$('.view').append(grass);

// var sun = document.createElement("div");
// sun.className = "sun";
// view.appendChild(sun);

var sun = $("div");
sun.className = "sun";
$('.view').append(sun);

var y = 0
while (y <= 5) {
var ray = document.createElement("div");
ray.className = "ray-" + y;
sun.appendChild(ray);
y++
}

var mountain = document.createElement("div");
mountain.className = "mountain";
view.appendChild(mountain);

var mountaintop = document.createElement("div");
mountaintop.className = "mountain-top";
mountain.appendChild(mountaintop);

var baseMC = 'mountain-cap-';
var i = 0;
do {
    i += 1;
    var result = document.createElement('div');
    result.className = baseMC + i;
    mountaintop.appendChild(result);
} while (i < 4);


var poop = document.createElement('img');
poop.src = './poop.png';
poop.id = 'poop';
poop.onload = function() {
    mountaintop.appendChild(poop);
};



var sandwich = $(".sandwich");
console.log(sandwich);

var ourSandwich = $("#cheesesandwich");
// console.log( ourSandwich.width() );
// console.log( ourSandwich.height() );
// console.log( sandwich.length )
// console.log( sandwich.toggleClass("cheese") );

// ourSandwich.addClass("food delicious");
// ourSandwich.removeClass("delicious");

var lettuce = $(".lettuce");

function lettuceClicked() {
//    console.log(this);
    var newHeight = $(this).height();
    console.log(newHeight);
    newHeight = newHeight + 20;
    $(this).height(newHeight);
}

lettuce.click(lettuceClicked);

lettuce.click(function() {
    $(this).animate(
        {
        height: "+=50",
        width: "+=50"
    },
    1000
    );
    })


// lettuce.click(function {

// })