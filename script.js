
let cardItem=Array.from(document.getElementById("card-section"))
let  clickCount=0;
let firstCard="";
let secondCard="";
let audioTurn=new Audio("ting.mp3")
let gameOver=new Audio("gameover.mp3")
        

let cardsArray=[
    {
        id:'0',
        name:'css',
        img:'Logos/css.png',
        
    },
    {
        id:'1',
        name:'html5',
        img:'Logos/html5.png',
        
    },
    {
        id:'2',
        name:'jquery',
        img:'Logos/jquery.png',
        
    },
    {
        id:'3',
        name:'js',
        img:'Logos/js.png',
        
    },
    {
        id:'4',
        name:'nodejs',
        img:'Logos/nodejs.png',
        
    },
    {
        id:'5',
        name:'python',
        img:'Logos/python.png',
        
    },
];
const gameCard=cardsArray.concat(cardsArray);
//console.log(gameCard);
//let shuffleCard=Array.from(document.getElementsByClassName("card"))
let shufCard =Array.from(gameCard).sort(()=> 0.5 - Math.random())
console.log(shufCard)

for(let i=0;i<shufCard.length;i++){

const childDiv=document.getElementsByClassName("back-card")[i];

childDiv.style.backgroundImage=`url(${shufCard[i].img})`
const childDiv2=document.getElementsByClassName("card")[i]
childDiv2.dataset.name=`url(${shufCard[i].name})`

} 

const matchCard=()=>{
    let cardMatch=document.querySelectorAll('.card-selected')
    cardMatch.forEach((e)=>{
        e.classList.add('card-match')
    
    })
}

const resetGame=()=>{
firstCard="";
secondCard="";
clickCount=0;

    let reset=document.querySelectorAll('.card-selected')
    reset.forEach((e)=>{
        e.classList.remove('card-selected')
    
    })
}


let myCard=document.getElementsByClassName("card");
Array.from(myCard).forEach((element)=>{

   
    element.addEventListener('click',(e)=>{
        audioTurn.play()
       
        let curCard=e.target
        
       
        clickCount++
        
        //firstCard++
        if(clickCount<3){ 
            
            if(clickCount===1){
            firstCard=curCard.parentNode.dataset.name
                curCard.parentNode.classList.add('card-selected')
                
                
                console.log(firstCard)
                } 
            
            else{
                secondCard=curCard.parentNode.dataset.name
                curCard.parentNode.classList.add('card-selected')
                console.log(secondCard)
            }
        }
           //firstCard=curCard.target
        //clickCount=curCard.target 
        //firstCard=clickCount++ 
        //secondCard=clickCount++
        
        if(firstCard!=="" && secondCard!==""){
        if(firstCard===secondCard){
            audioTurn.pause()
             gameOver.play()

             setTimeout(() => {
                matchCard()  
            resetGame()
           
             }, 1000);
             
             
            

            //curCard.classList.add('card-match') 
            console.log(firstCard +""+ secondCard + 'matches')
            
        }
        else{

           setTimeout(() => {
                resetGame()
             }, 1000);

        }
        
    }

})

})
