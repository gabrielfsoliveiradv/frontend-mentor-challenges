const subtitleDivs = document.querySelectorAll('.subtitle-div')

subtitleDivs.forEach((subtitleDiv)=>{
    subtitleDiv.addEventListener("click", (ev) => {
        let li = ev.currentTarget.parentNode
        let icon = ev.currentTarget.querySelector("img")
        icon.src =  icon.src.includes("/assets/images/icon-plus.svg") ? "./assets/images/icon-minus.svg" :"./assets/images/icon-plus.svg"
        li.classList.toggle("hidden")
    })
})