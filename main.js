let press = document.querySelectorAll(".change-color")

press.forEach(element => {
    element.addEventListener('click', function(){
        let p = element.nextElementSibling;
        let list = element.parentElement
        let icon = element.querySelector("img")
        p.classList.toggle("show")
        icon.style.opacity = 0 ;
        list.style.gap = "0";
        icon.src = "/assets/images/icon-plus.svg"
        setTimeout(() => {
            if (p.classList.contains("show")) {
                icon.src = "/assets/images/icon-minus.svg"
                list.style.gap = "15px";
             }
            icon.style.opacity = 1 ;
        }, 200)
    })
});