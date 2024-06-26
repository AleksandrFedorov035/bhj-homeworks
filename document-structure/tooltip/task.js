const tootlips = Array.from(document.querySelectorAll(".has-tooltip"))
let title = null;

tootlips.forEach(i => {
    i.addEventListener("click", (event) => {
        event.preventDefault();
        const {top, left} = event.target.getBoundingClientRect();

        let tooltip = document.querySelector('.tooltip')
        if(tooltip) tooltip.remove()
        if(event.target.getAttribute("title") == title) return title = null;
        title = event.target.getAttribute("title");
        event.target.insertAdjacentHTML('afterEnd', `<div class="tooltip">${title}</div>`);
		tooltip = document.querySelector('.tooltip');
		tooltip.style.top = `${top + 20}px`;
		tooltip.style.left = `${left}px`;
		tooltip.classList.add('tooltip_active');

    })
})