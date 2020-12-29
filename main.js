document.querySelector('.camera__part--1').addEventListener('click', function(){
    this.style.transform = 'rotate(90deg)';
    this.style.left = '100px';
    
    document.querySelectorAll('.camera__part--text1').forEach(cur => {
        cur.style.transform = 'rotate(-90deg)';
    })

    document.querySelector('.camera__part--1__title').style.left = '52px';
    document.querySelector('.camera__part--1__title').style.top = '15px';
    document.querySelector('.camera__part--1__title').style.fontSize = '48px';

    document.querySelector('.camera__part--1__sub').style.left = '65px';
    document.querySelector('.camera__part--1__sub').style.top = '190px';
    


    document.querySelector('.camera__part--2').style.transform = 'rotate(0deg)';
    document.querySelector('.camera__part--2').style.top = '20px';

    document.querySelector('.camera__part--3').style.transform = 'rotate(90deg)';
    document.querySelector('.camera__part--3').style.left = '90px';

    document.querySelector('.camera__part--4').style.transform = 'rotate(0deg)';
    document.querySelector('.camera__part--4').style.top = '20px';

    document.querySelectorAll('.camera__part--text2').forEach(cur => {
        cur.style.display = 'none';
    })

    document.querySelectorAll('.camera__part--text3').forEach(cur => {
        cur.style.display = 'none';
    })

    document.querySelectorAll('.camera__part--text4').forEach(cur => {
        cur.style.display = 'none';
    })

    document.querySelector('.camera__text').style.display = 'none';
    
    document.querySelector('.camera__list--1').style.visibility = 'visible';
    document.querySelector('.camera__list--1').style.opacity = '1';


});


document.querySelector('.camera__icon').addEventListener('click', function(){
    document.querySelector('.camera__part--1').style.transform = 'rotate(45deg)';
    document.querySelector('.camera__part--1').style.left = '56px';
    
    document.querySelectorAll('.camera__part--text1').forEach(cur => {
        cur.style.transform = 'rotate(-45deg)';
    })

    document.querySelector('.camera__part--1__title').style.left = '36px';
    document.querySelector('.camera__part--1__title').style.top = '157px';
    document.querySelector('.camera__part--1__title').style.fontSize = '14px';

    document.querySelector('.camera__part--1__sub').style.left = '36px';
    document.querySelector('.camera__part--1__sub').style.top = '164px';
    


    document.querySelector('.camera__part--2').style.transform = 'rotate(-45deg)';
    document.querySelector('.camera__part--2').style.top = '-29px';

    document.querySelector('.camera__part--3').style.transform = 'rotate(45deg)';
    document.querySelector('.camera__part--3').style.left = '156px';

    document.querySelector('.camera__part--4').style.transform = 'rotate(-45deg)';
    document.querySelector('.camera__part--4').style.top = '91px';

    document.querySelectorAll('.camera__part--text2').forEach(cur => {
        cur.style.display = 'block';
    })

    document.querySelectorAll('.camera__part--text3').forEach(cur => {
        cur.style.display = 'block';
    })

    document.querySelectorAll('.camera__part--text4').forEach(cur => {
        cur.style.display = 'block';
    })

    document.querySelector('.camera__text').style.display = 'none';
    
    document.querySelector('.camera__list--1').style.visibility = 'hidden';
    document.querySelector('.camera__list--1').style.opacity = '0';


});