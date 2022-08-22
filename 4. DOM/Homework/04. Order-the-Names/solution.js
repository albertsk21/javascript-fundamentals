function solve() {


   let addbutton = document.getElementsByTagName('button')[0];
   let input = document.querySelector("input[type=text]");
   
   addbutton.addEventListener('click', function(){
   
      let text = input.value;
      let arrayNames = text.split(", ");
   
      let arrLi = document.getElementsByTagName("li");
 
   
     



      for(let i = 0;  i < arrayNames.length; i++){

         let name = arrayNames[i];
         let index = getIndexAlphabet(name);
      
         let content = arrLi[index].textContent;
         let oldNames = String(arrLi[index].textContent).split(", ");

         if(content === ""){
            arrLi[index].textContent = name;

         }else{
            arrLi[index].textContent = String(arrLi[index].textContent)  + ", " +  name ;   
         }



      }




      input.value = "";
    
   });


   function getIndexAlphabet(element){

      let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   
       let index = 0;
       for (let i = 0; i < alphabet.length ; i++) {
           if(alphabet[i] === String(element).toUpperCase().charAt(0)){
               index = i;
               break;
           }
       }
   
       return index;
   }

}