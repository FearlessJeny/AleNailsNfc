// ФИЛЬТРЫ

const buttons = document.querySelectorAll(".categories button");
const items = document.querySelectorAll(".item");


buttons.forEach(button => {

    button.addEventListener("click", ()=>{

        let filter = button.dataset.filter;


        items.forEach(item=>{


            if(filter === "all" || item.classList.contains(filter)){

                item.style.display="block";

            } else {

                item.style.display="none";

            }


        });


    });

});




// ОТКРЫТИЕ ФОТО

const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup img");
const popupTitle = document.querySelector(".popup h2");


const images = document.querySelectorAll(".item img");


images.forEach(img=>{


img.onclick = ()=>{


popup.classList.add("active");


popupImg.src = img.src;


popupTitle.innerHTML =
img.parentElement.querySelector("h3").innerHTML;


}



});



// ЗАКРЫТЬ

document.querySelector(".close").onclick = ()=>{

popup.classList.remove("active");

};
