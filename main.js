document.querySelector('.cp1').addEventListener('click', function(){
    
    this.classList.add('cp1__active');
    document.querySelector('.cp1__title').classList.add('cp1__title--active');
    document.querySelector('.cp1__sub').classList.add('cp1__sub--active');
    
    document.querySelector('.cp2').style.transform = 'rotate(0deg)';
    document.querySelector('.cp2').style.top = '20px';

    document.querySelector('.cp3').style.transform = 'rotate(90deg)';
    document.querySelector('.cp3').style.left = '90px';

    document.querySelector('.cp4').style.transform = 'rotate(0deg)';
    document.querySelector('.cp4').style.top = '20px';

    document.querySelectorAll('.cp2__text').forEach(cur => {
        cur.style.display = 'none';
    })

    document.querySelectorAll('.cp3__text').forEach(cur => {
        cur.style.display = 'none';
    })

    document.querySelectorAll('.cp4__text').forEach(cur => {
        cur.style.display = 'none';
    })

    document.querySelector('.camera__text').style.display = 'none';
    
    document.querySelector('.camera__list--1').style.visibility = 'visible';
    document.querySelector('.camera__list--1').style.opacity = '1';


});


document.querySelector('.camera__icon').addEventListener('click', function(){
    
    document.querySelector('.cp1').classList.remove('cp1__active');
    document.querySelector('.cp1__title').classList.remove('cp1__title--active');
    document.querySelector('.cp1__sub').classList.remove('cp1__sub--active');
    


    document.querySelector('.cp2').style.transform = 'rotate(-45deg)';
    document.querySelector('.cp2').style.top = '-29px';

    document.querySelector('.cp3').style.transform = 'rotate(45deg)';
    document.querySelector('.cp3').style.left = '156px';

    document.querySelector('.cp4').style.transform = 'rotate(-45deg)';
    document.querySelector('.cp4').style.top = '91px';

    document.querySelectorAll('.cp2__text').forEach(cur => {
        cur.style.display = 'block';
    })

    document.querySelectorAll('.cp3__text').forEach(cur => {
        cur.style.display = 'block';
    })

    document.querySelectorAll('.cp4__text').forEach(cur => {
        cur.style.display = 'block';
    })

    document.querySelector('.camera__text').style.display = 'block';
    
    document.querySelector('.camera__list--1').style.visibility = 'hidden';
    document.querySelector('.camera__list--1').style.opacity = '0';


});