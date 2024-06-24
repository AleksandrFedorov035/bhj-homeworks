const xhr = new XMLHttpRequest();
const title = document.getElementById("poll__title")
const answer = document.getElementById("poll__answers")

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {
        let data = JSON.parse(xhr.responseText)

        title.innerHTML = `
      <div class="poll__title" id="poll__title">
        ${data.data.title}
      </div>`;

      data.data.answers.forEach((el, index) => {
        answer.innerHTML += `
        <button class="poll__answer">
            ${data.data.answers[index]}
        </button>
        `;})

        const btn = document.querySelectorAll(".poll__answer")
        btn.forEach(el => {
            el.addEventListener("click", () => {
                alert("Ваш голос засчитан")
                location.reload()
            })
        })
    }
})

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll")
xhr.send()