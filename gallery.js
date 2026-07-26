// ФИЛЬТРЫ

const buttons = document.querySelectorAll(".categories button");
const items = document.querySelectorAll(".item");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        items.forEach(item => {

            if(filter === "all" || item.classList.contains(filter)){

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});




// ОКНО ФОТО

const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup img");
const popupTitle = document.querySelector(".popup h2");

const images = document.querySelectorAll(".item img");

let current = 0;



function openPhoto(){

    popup.classList.add("active");

    popupImg.src = images[current].src;

    popupTitle.textContent =
    images[current]
    .parentElement
    .querySelector("h3")
    .textContent;

}



// открытие фото

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        current = index;

        openPhoto();

    });

});



// закрыть

document.querySelector(".close")
.addEventListener("click",()=>{

    popup.classList.remove("active");

});



// следующая фотография

document.querySelector(".next")
.addEventListener("click",()=>{

    current++;

    if(current >= images.length){

        current = 0;

    }

    openPhoto();

});



// предыдущая фотография

document.querySelector(".prev")
.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current = images.length - 1;

    }

    openPhoto();

});



// свайп телефона

let startX = 0;


popup.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});



popup.addEventListener("touchend",(e)=>{


    let endX = e.changedTouches[0].clientX;


    if(startX - endX > 50){

        document.querySelector(".next").click();

    }


    if(endX - startX > 50){

        document.querySelector(".prev").click();

    }


});


buttons.forEach(button=>{

button.addEventListener("click",()=>{


buttons.forEach(btn=>{
btn.classList.remove("active");
});


button.classList.add("active");


});

});