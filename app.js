const click = document.querySelector ('.menu_btn');
click.addEventListener('click', function(l){
    
});

// Меняем стиль иконки 
let btn = document.querySelector('.menu_btn');
btn.addEventListener('click', function(e){
    e.preventDefault;
    btn.classList.toggle('active');
});