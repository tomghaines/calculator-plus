const keyBtns = document.querySelectorAll(".key-btn")

keyBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        console.log(btn.id)
    })
})