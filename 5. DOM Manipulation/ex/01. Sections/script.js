function create(words) {

   let content = document.getElementById("content");

   for(let i = 0; i < words.length;i++){


      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = words[i];
      p.style = " display : none";
      div.appendChild(p);
      div.id = i;
      
      content.appendChild(div);

   }


   let squars = document.getElementsByTagName("div");


   for(let  i = 1 ; i < squars.length; i++){


      squars[i].addEventListener("click",function(){
         
         let p = document.getElementsByTagName("p")[i-1];
         p.style.display = "block"

      });
      


   }

}