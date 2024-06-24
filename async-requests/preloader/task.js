const items = document.getElementById("items")
const img = document.getElementById("loader")
const xhr = new XMLHttpRequest()

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {
        img.classList.remove("loader_active")
        let data = JSON.parse(xhr.responseText)

        Object.keys(data.response.Valute).forEach(key => {
                    items.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${data.response.Valute[key].CharCode}
                </div>
            <div class="item__value">
                ${data.response.Valute[key].Value}
            </div>
            <div class="item__currency">
                руб.
                </div>
            </div>`
        })
	}   
})


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send()

