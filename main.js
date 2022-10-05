let open_image = document.querySelectorAll(".wrapper .image img")
let gallery = document.querySelector(".gallery")
let galley_image = document.querySelector(".gallery .gallery_image img")
let shutdown = document.querySelector(".gallery .gallery_shutdown")
let prev = document.querySelector(".gallery .gallery_prev")
let next = document.querySelector(".gallery .gallery_next")

let item_index = 0

function show () {

    if (item_index == 0) {
        prev.classList.add("hidden")
    } else {
        prev.classList.remove("hidden")
    }

    if (item_index == open_image.length - 1) {
        next.classList.add("hidden")
    } else {
        next.classList.remove("hidden")
    }

    galley_image.src = open_image[item_index].src
    gallery.classList.add("show") 
}
open_image.forEach((item, index) => {
    item.addEventListener("click", function (){
        item_index = index
        show ()
    })
}) 

shutdown.addEventListener("click", function (){
    gallery.classList.remove("show")
})

document.addEventListener("keydown", function (e){
    if( e.keyCode == 27 ) {
        gallery.classList.remove("show")
    }
})

prev.addEventListener("click", function (){
    if (item_index > 0) {
        item_index --
        show ()
    }
})

next.addEventListener("click", function () {
    if (item_index < open_image.length ) {
        item_index ++
        show ()
    }
})

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 37 && item_index > 0) {
        item_index --
        show()
    }
})
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 39 && item_index < open_image.length) {
        item_index ++
        show()
    }
})