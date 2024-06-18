const Fonts = Array.from(document.querySelectorAll(".font-size"))
const book = document.querySelector(".book");
const Color = Array.from(document.querySelector(".book__control_color").children)
const bgColor = Array.from(document.querySelector(".book__control_background").children)


function removeSize() {
    Fonts.forEach(element => {
        element.classList.remove("font-size_active");
    })
}

function changeSizeBook() {
    book.classList.remove("book_fs-big", "book_fs-small")
}

Fonts.forEach(i => {
    i.addEventListener("click", (event) => {
        event.preventDefault();
        removeSize();
        i.classList.add("font-size_active");
        if(i.classList.contains("font-size_small")) {
            changeSizeBook()
            book.classList.add("book_fs-small")
        } else if(i.classList.contains("font-size_big")) {
            changeSizeBook()
            book.classList.add("book_fs-big")

        } else {
            changeSizeBook()
        }
    })
})

function changeActiveColor() {
    Color.forEach(el => {
        el.classList.remove("color_active")
    })
}

function changeColorBook() {
    book.classList.remove("book_color-gray", "book_color-black", "book_color-whitesmoke")
}

Color.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        changeActiveColor();
        el.classList.add("color_active")
        if (el.classList.contains("text_color_gray")) {
            changeColorBook();
            book.classList.add("book_color-gray")
        } else if(el.classList.contains("text_color_whitesmoke")) {
            changeColorBook();
            book.classList.add("book_color-whitesmoke")
        } else {
            changeColorBook();
        }
    })
})

function changeActiveBg() {
    bgColor.forEach(element => {
        element.classList.remove("color_active")
    })
}

function ChangeBgColor() {
    book.classList.remove("book_bg-black", "book_bg-white", 'book_bg-gray')
}

bgColor.forEach(i => {
    i.addEventListener("click", (event) => {
        event.preventDefault();
        changeActiveBg();
        i.classList.add("color_active");
        if (i.classList.contains("bg_color_gray")) {
            ChangeBgColor();
            book.classList.add("book_bg-gray")
        } else if(i.classList.contains("bg_color_black")) {
            ChangeBgColor();
            book.classList.add("book_bg-black")
        } else {
            ChangeBgColor();
        }
    })
})