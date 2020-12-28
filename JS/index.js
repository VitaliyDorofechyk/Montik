const btn_prev = document.querySelector('.btnPrev');
const btn_next = document.querySelector('.btnNext');

const images = document.querySelectorAll('.mainArticle_slider img');

let i = 0;


btn_prev.addEventListener('click', handlerPrev);
function handlerPrev () {
    images[i].style.display = 'none';
    i--;
    
    if(i < 0 ) {
        i = images.length -1;
    }
    images[i].style.display = 'block';
};
btn_next.addEventListener('click', handlerNext);
function handlerNext () {
    images[i].style.display = 'none';
    i++;
    
    if(i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
};

