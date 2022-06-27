let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input0el")
let messageEl = document.getElementById("message-el")
let messageEl2 = document.getElementById("message-el2")
let messageEl3 = document.getElementById("message-el3")



convertBtn.addEventListener("click", function(){
   
    console.log("button clicked")
    messageEl.innerText = lenght();
    messageEl2.innerText = volume();
    messageEl3.innerText = mass();
      
})
 function value(){
    
    let val = document.querySelector("input").value;

    return val
    
 }

 function lenght(){
    let feets = value() * 0.305
    let meters =  value() * 3.281
   let meterFeet =  value() + " meters  = "  + meters.toFixed(3) + " feet  | " + value() + " feets  = " + feets.toFixed(3) + " meters " 

    return  meterFeet
 }
 function volume(){
    let litres = value() * 0.264
    let gallons =  value() * 3.785
   let litreGallon =  value() + " litres  = "  + litres.toFixed(3) + " gallons  | " + value() + " gallons  = " + gallons.toFixed(3) + " litres " 

    return  litreGallon;
 }
 function mass(){
    let kilos = value() * 2.205
    let pounds =  value() * 0.454
   let kilosPounds =  value() + " kilos  = "  + kilos.toFixed(3) + " pounds  | " + value() + " pounds  = " + pounds.toFixed(3) + " kilos " 

    return  kilosPounds;
 }