const carrucel = document.querySelector(".carrucel");
let maxScrollLeft = carrucel.scrollWidth - carrucel.clientWidth;
let intervalo = null;
let step =1 ;
const start = () =>{
    intervalo = setInterval( function(){
        carrucel.scrollLeft = carrucel.scrollLeft + step;
        if (carrucel.scrollLeft === maxScrollLeft){
            step = step * -1;
        } else if (carrucel.scrollLeft=== 0){
            step= step *-1;
        }

    },10);
};

const stop =()=>{
    clearInterval(intervalo);
}
carrucel.addEventListener("mouseover" , ()=> {
    stop();
})
carrucel.addEventListener("mouseout" , ()=> {
    start();
})

start ();

