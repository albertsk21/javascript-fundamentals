function solve() {


   let button = document.getElementById("send");
   button.addEventListener("click",function(){
      let textToSent = document.getElementById("chat_input");
      let chatMessage = document.getElementById("chat_messages");

      let element = document.createElement("div");
      element.classList.add("my-message");
      element.classList.add("message");
      element.innerHTML = textToSent.value;
      chatMessage.appendChild(element);
   
      document.getElementById("chat_input").value = "";

   });




}


