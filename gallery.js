// ФИЛЬТРЫ

const buttons = document.querySelectorAll(".categories button");
const items = document.querySelectorAll(".item");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        items.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

    });

});