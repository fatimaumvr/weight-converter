const numm=document.getElementById('num')
const feetNum=document.getElementById('feetnum')
const feett=document.getElementById('feet')
const meterNum=document.getElementById('meternum')
const meterr=document.getElementById('meter')
const litree=document.getElementById('litre')
const gallon=document.getElementById('gallons')
const gallonNum=document.getElementById('gallonnum')
const litreNum=document.getElementById('litrenum')
const kiloNum=document.getElementById('kilonum')
const poundNum=document.getElementById('poundsnum')
const kiloo=document.getElementById('kilo')
const pound=document.getElementById('pounds')
const button=document.getElementById('btn')

button.addEventListener('click',function(){
    let value=numm.value
    feetNum.textContent=`${value} feet = `
    feett.textContent=` = ${Math.round(value*(3.28084))} feet |`
    meterNum.textContent=` ${value} meters  `
    meterr.textContent=`${Math.round(value*(0.305))} meters`
    
    litreNum.textContent=`${value} litres  `
    gallon.textContent=` = ${Math.round(value*(0.264))} gallons |`
    gallonNum.textContent=` ${value} gallons =  `
    litree.textContent=` ${Math.round(value*(3.785))} litres`
    
    kiloNum.textContent=`${value} kilograms  `
    pound.textContent=` = ${Math.round(value*(2.205))} pounds |`
    poundNum.textContent=`${value} pounds =  `
    kiloo.textContent=`${Math.round(value*(0.454))} kilograms`
    

})