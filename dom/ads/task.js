const rotators = Array.from(document.querySelectorAll(".rotator__case"))
let index = 0;

setInterval(() => {
	rotators.forEach(element => {
        element.classList.remove('rotator__case_active')
      });
      
        if (index < rotators.length) {
            rotators[index].classList.add('rotator__case_active');
            return index++;
        } else {
            return index = 0;
        }
}, 1000)