let buttons = document.querySelectorAll(".buttons span")

for (const btn of buttons) {
    btn.addEventListener("click",function () {
        for (const item of document.querySelectorAll(".active")) {
            item.classList.remove("active");
        }
        this.classList.add("active");
        console.log("#"+this.getAttribute("hello"));
        document.querySelector("#"+this.getAttribute("hello")).classList.add("active");
    });
}