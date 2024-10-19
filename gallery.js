
document.querySelectorAll('.image-cont img').forEach(image =>{
    image.onclick = ()=>{
        document.querySelector('.popup-imag').style.display ='block';
        document.querySelector('.popup-imag img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-imag span').onclick = ()=>{
    document.querySelector('.popup-imag').style.display ='none';
}