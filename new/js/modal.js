// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalClosebtn = document.querySelector('.modal_close')

let scrolledBottom = false

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}



const scrolling = () => {
    const  scrollPosition=window.scrollY+window.innerHeight
    const pageHeight =document.documentElement.scrollHeight
    console.log(pageHeight)
    console.log(scrollPosition)
    if(scrollPosition+1>=pageHeight){
        openModal()
    }
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}


setTimeout(openModal, 10000)

window.addEventListener('scroll', scrolling)

modalTrigger.onclick = openModal
modalClosebtn.onclick = closeModal
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}



