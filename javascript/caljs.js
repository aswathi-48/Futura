document.addEventListener('DOMContentLoaded',function(){
    const display =document.getElementById('display');4
    const buttons =document.querySelectorAll('.buttons button')

    buttons.forEach(button =>{
        button.addEventListener('click',function(){
            const value =this.dataset.value;

            if(value === 'AC'){
                display.value = '';
            }else if (value === 'DEL'){
                display.value = display.value.slice(0,-1);
            }else if(value === '='){
                try{
                    display.value =eval(display.value);
                }catch(error){
                    display.value = 'Error';
                }
            }else{
                display.value +=value;
            }
        });
    });
});