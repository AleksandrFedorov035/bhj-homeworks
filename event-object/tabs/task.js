const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"))


tabs.forEach((tab, index) => {
	tab.addEventListener('click', addActive);

	function addActive() {
		reset();
		tab.classList.add('tab_active');
		contents.forEach((element, i) => {
			// if (i == index) {
			// 	element.classList.add('tab__content_active')
			// } else {
			// 	element.classList.remove('tab__content_active');
			// }

			i == index ? element.classList.add("tab__content_active") : element.classList.remove('tab__content_active');
		});
	}
});

function reset() {
	tabs.forEach(i => {
		i.classList.remove('tab_active');
	});
	contents.forEach(i => {
		i.classList.remove('tab__content_active');
	});
}