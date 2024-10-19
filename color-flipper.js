

const colorsArray = ["red", "green", "yellow", "pink", "purple"];
const a1 = document.getElementById('a1');
const color = document.querySelector('.color'); 

a1.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorsArray[
             randomNumber];
             color.innerHTML = colorsArray[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colorsArray.length);
}    