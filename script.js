let btn = document.querySelector('.description');

let description = document.querySelectorAll('.hide'); 

btn.addEventListener('click',function(e){
    for(i = 0; i < description.length; i++){
        description[i].classList.toggle('hide')
    };
    if(e.target.textContent === 'Show description'){
        e.target.textContent = 'Hide description';
    }else{
        e.target.textContent = 'Show description';
    };
    console.log(e.target.textContent);
})