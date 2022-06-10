let sliderNumber=1;
let maxSlides=5;
let output=document.getElementById('output');

function prevSlide(){
    if(sliderNumber>1){
        sliderNumber=sliderNumber-1;
        output.src="./img/img"+sliderNumber+'.jpg';
        output.classList.add('animate');
        setTimeout(()=>{
            output.classList.remove('animate');
        },2000);
        
            document.getElementById('right-arrow').removeAttribute('disabled');
        
    }
    if(sliderNumber===1){
        document.getElementById('left-arrow').setAttribute('disabled',true);
    }
    
}

function nextSlide(){
        if(sliderNumber < 5){
            
            sliderNumber=sliderNumber+1;
            output.src="./img/img"+sliderNumber+'.jpg';
            output.classList.add('animate');
            setTimeout(()=>{
                output.classList.remove('animate');
            },1000);
            document.getElementById('left-arrow').removeAttribute('disabled');

        }
        if(sliderNumber===5){
            document.getElementById('right-arrow').setAttribute('disabled',true);
        } 
   
}