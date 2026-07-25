const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup img");
const popupTitle = document.querySelector(".popup h2");

const allImages = document.querySelectorAll(".item img");

let current = 0;



allImages.forEach((img,index)=>{

    img.onclick = () => {

        current = index;

        openImage();

    }

});



function openImage(){

    popup.classList.add("active");

    popupImg.src = allImages[current].src;

    popupTitle.innerHTML =
    allImages[current]
    .parentElement
    .querySelector("h3")
    .innerHTML;

}



document.querySelector(".next").onclick = () => {

    current++;

    if(current >= allImages.length){
        current = 0;
    }

    openImage();

};



document.querySelector(".prev").onclick = () => {

    current--;

    if(current < 0){
        current = allImages.length - 1;
    }

    openImage();

};



document.querySelector(".close").onclick = () => {

    popup.classList.remove("active");

};



// Свайп пальцем на телефоне

let startX = 0;


popup.addEventListener("touchstart", e => {

    startX = e.touches[0].clientX;

});


popup.addEventListener("touchend", e => {

    let endX = e.changedTouches[0].clientX;


    if(startX - endX > 50){

        document.querySelector(".next").click();

    }


    if(endX - startX > 50){

        document.querySelector(".prev").click();

    }


});