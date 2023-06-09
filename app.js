let Total = document.getElementById('donut');
let totalCount = document.getElementById('Total');
let claimPrize=document.getElementById('claimPrize');
let buttonElement = document.getElementById('autoClicker');
let autoClickerz= document.getElementById('autoClicker')
let prizeClaimed = document.getElementById('prizes');
let currentPrice= document.getElementById('priceofautoClicker');
let num = 0;
let priceIncrement=100;
let count = 0;
let IntervalId=0;

function donutCount()
{
++count;
totalCount.innerText=count;
console.log('donut clicked');
if (count>=priceIncrement) 
{
    
    claimPrize.innerText='claim your autoclicker';
}
else
{
    claimPrize.innerText=count-priceIncrement + 'to go';
}
}
function autoplay()
{
   IntervalId = setInterval(donutCount,1000);
}

function ResetButton()
{
totalCount.innerText=0;
console.log('reset clicked');
count=0;
num=0;
priceIncrement=100;
claimPrize.innerText='click donut to start';
prizeClaimed.innerText='Autoclickers won' + num;
currentPrice.innerText= "current price of autoclicker is " + priceIncrement;
clearInterval(IntervalId);
}

function prize()
{
if(count<priceIncrement)
{

    buttonElement.classList.remove('autoclicker');
}
else if(count>=priceIncrement)
{
     buttonElement.classList.add('autoclicker');
    
    count = count-priceIncrement;
    ++num;
    console.log('autoclicker claimed'+ num);
    console.log(prizeClaimed.innerText);
    prizeClaimed.innerText='Autoclicker won ' + num ;
    priceIncrement=priceIncrement+ Math.round(.1*priceIncrement);
    autoplay();
    currentPrice.innerText= "current price of autoclicker is " + priceIncrement;
}
}



