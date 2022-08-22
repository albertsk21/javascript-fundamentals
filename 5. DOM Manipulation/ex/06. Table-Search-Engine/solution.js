function solve() {

   let tBody = document.getElementsByTagName("tbody")[0];
   let students = tBody.getElementsByTagName("tr");

   let searchButton = document.getElementById("searchBtn");
   let inputSearch = document.getElementById("searchField");

   searchButton.addEventListener("click", function(){
      for(let i  = 0 ; i < students.length; i++){
           students[i].classList.remove("select");
      }

      let element = inputSearch.value;
      for(let i  = 0 ; i < students.length; i++){
         let fullName = students[i].getElementsByTagName("td")[0].innerHTML;

         if(check(element,fullName)){
            students[i].classList.add("select");
         }
      }
      inputSearch.value = "";
   });

   function check(input, text){

      let firstName = String(text.split(" ")[0]);
      let lastName = String(text.split(" ")[1]);
  

      if(input === ""){
         return false;
      }
      
      if(firstName.includes(input) || lastName.includes(input)){

         return true;
     }
     
      if(String(input).toLowerCase() === firstName.toLowerCase()){
          return true;
      }
      if(String(input).toLowerCase() === lastName.toLowerCase()){
          return true;
      }
     
    if(input.toLowerCase() === text.toLowerCase()){
      return true;
    }
      return false;
  }
  

}