(function (){
    const sliders = [...document.querySelectorAll('.frases_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
       const currentFrases = document.querySelector('.frases_body--show').dataset.id;
       value = Number(currentFrases);
       value+= add;

       sliders[Number(currentFrases)-1].classList.remove('frases_body--show');
       if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
       }

       sliders[value-1].classList.add('frases_body--show');

    
    } 


})();