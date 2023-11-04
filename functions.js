const buttonClicked = document.querySelectorAll(".calcuBtnNumber");

Array.from(buttonClicked).forEach(btn => {
    btn.addEventListener("click", (event) => {
        alert(event.target.value);
    })
})

