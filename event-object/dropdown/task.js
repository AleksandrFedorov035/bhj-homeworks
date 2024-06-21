const items = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value")

function OpenList() {
    dropdownList.classList.toggle("dropdown__list_active")
}

function CloseList() {
    dropdownList.classList.remove("dropdown__list_active")
}

dropdownValue.addEventListener('click', OpenList);

items.forEach((i, index) => {
    i.addEventListener('click', chooseItem)

    function chooseItem(i) {
        i.preventDefault();
        CloseList()

        dropdownValue.textContent = items[index].textContent;

    }
});
