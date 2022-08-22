function solve() {

   let firstPlayerCards = document.getElementById("player1Div").getElementsByTagName("img");
   let secondPlayerCards = document.getElementById("player2Div").getElementsByTagName("img");
   let firstSectionVS  = document.getElementById("result").getElementsByTagName("span")[0];
   let secondSectionVS  = document.getElementById("result").getElementsByTagName("span")[2];
   let history = document.getElementById("history");

   let firstValue = 0;
   let secondValue = 0;

   let firstCardIndex = 0;
   let secondCardIndex = 0;

   for(let i = 0; i < firstPlayerCards.length; i++ ){
      firstPlayerCards[i].addEventListener("click", function(){
         firstPlayerCards[i].src = "images/whiteCard.jpg";
         firstValue = Number(firstPlayerCards[i].attributes[1].nodeValue);
         firstSectionVS.textContent = firstValue;

         firstCardIndex = i;
      });
   }

   for(let i = 0; i < secondPlayerCards.length; i++ ){
      secondPlayerCards[i].addEventListener("click", function(){
         secondPlayerCards[i].src = "images/whiteCard.jpg";
         secondValue = Number(secondPlayerCards[i].attributes[1].nodeValue);
         secondSectionVS.textContent = secondValue;

         secondCardIndex = i;


        if(firstValue !== 0 && secondValue !== 0){
         if(firstValue > secondValue){
            firstPlayerCards[firstCardIndex].style.border = "2px solid green";
            secondPlayerCards[secondCardIndex].style.border = "2px solid red";
         }else{
            firstPlayerCards[firstCardIndex].style.border = "2px solid red";
            secondPlayerCards[secondCardIndex].style.border = "2px solid green";  
         }
      
      

         let result = document.createElement("span");
         let content = `[ ${firstValue} vs ${secondValue} ] `;
         result.textContent = content;
         history.appendChild(result);


         
        }




      });
   }


 
}

