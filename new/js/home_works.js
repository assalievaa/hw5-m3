// // GMAIL BLOCK
//
// const gmailInput = document.querySelector('#gmail_input')
// const gmailButton = document.querySelector('#gmail_button')
// const gmailResult = document.querySelector('#gmail_result')
//
// const redExp = /^[a-z0-9._-]+@gmail\.com$/i
//
// gmailButton.onclick = () => {
//     if (redExp.test(gmailInput.value)) {
//         gmailResult.style.color = 'green'
//         gmailResult.innerHTML = 'OK'
//     }else {
//         gmailResult.style.color = 'red'
//         gmailResult.innerHTML = 'invalid gmail'
//     }
// }
//
//
// //MOVE BLOCK
//
const child_block = document.querySelector('.child_block')
const parent_block = document.querySelector('.parent_block')

let num = 0;
let num_2 = 0;

const maxWidth = parent_block.offsetWidth - child_block.offsetWidth
const maxHeight = parent_block.offsetHeight -child_block.offsetHeight
const square = () => {
    if (num < maxWidth && num_2<=0) {
        num++
        child_block.style.left = `${num}px`
        requestAnimationFrame(square)
    }else if (num >= maxWidth && num_2 < maxHeight ) {
        num_2++
        child_block.style.top = `${num_2}px`
        requestAnimationFrame(square)
    }else if (num > 0  && num_2 >= maxHeight) {
        num--
        child_block.style.left = `${num}px`
        requestAnimationFrame(square)
    }else if(num >= 0 && num_2>0){
        num_2--
        child_block.style.top = `${num_2}px`
        requestAnimationFrame(square)

    }
}
square()

const zero = document.querySelector('#seconds')
const start_btn = document.querySelector('#start')
const stop_btn = document.querySelector('#stop')
const reset_btn = document.querySelector('#reset')

let interval
let count = 0

start_btn.onclick = () => {
    if (!interval) {
        interval = setInterval(() => {
            count++
            zero.innerHTML = count
        }, 1000)
    }
}

stop_btn.onclick = () => {
    clearInterval(interval)
    interval = null
}

reset_btn.onclick = () => {
    clearInterval(interval)
    interval = null
    count = 0
    zero.innerHTML = count
}

/// characters

const characterList = document.querySelector(".characters-list");
const request = new XMLHttpRequest();
request.open("GET", "../data/people.json");
request.setRequestHeader("Content-type", "application/json");
request.responseType = "json";
request.send()

const renderCharacterList = (data) =>{
    data.forEach((character) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");

        const characterImage = document.createElement("img");
        characterImage.setAttribute("src",character.image)

        const characterName = document.createElement("p");
        characterName.innerText = character.name;
        const characterAge = document.createElement("span");
        characterAge.innerText = character.age;

        characterCard.append(characterImage);
        characterCard.append(characterName);
        characterCard.append(characterAge);

        characterList.append(characterCard);
    })
}

request.onload = () =>{
    const data = request.response;
    console.log(data)
    renderCharacterList(data)
}

