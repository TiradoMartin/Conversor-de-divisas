let inputs = document.querySelectorAll(".valor");

inputs.forEach(input=>{
input.value = input.dataset.cambio;

});

function valueModif(input){
var factor = input.value/input.dataset.cambio;
inputs.forEach(input=>{
    
    
input.value = (input.dataset.cambio * factor).toFixed(2)
});
};
