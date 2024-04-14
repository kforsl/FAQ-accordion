const questions = document.querySelectorAll('.faq-card__container')

questions.forEach(question => question.addEventListener('click', click))

function click() {

    const icon = this.children[0].children[1]
    const awnser = this.children[1]

    awnser.classList.toggle('d-none')

    icon.src.includes('plus') ?
        icon.src = './assets/images/icon-minus.svg'
        :
        icon.src = './assets/images/icon-plus.svg'

}