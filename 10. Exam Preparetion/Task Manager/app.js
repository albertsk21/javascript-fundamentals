function solve() {

        let addButton = document.getElementById("add");
        let task = document.getElementById("task");
        let description = document.getElementById("description");
        let date = document.getElementById("date");

    
        addButton.addEventListener("click",addItems);



        function  addItems(e){
            
            e.preventDefault();
        
         
            const target = e.target;
             if(target == addButton){
                if(task === "" || description === "" || date ===""){
                    return;
                }
             }   
            let sections = document.getElementsByTagName("section");
            let containerOpenSection = sections[1].getElementsByTagName("div")[0];

            let createArticle = document.createElement("article");
            let h3 = document.createElement("h3");
            h3.innerHTML = task.value;   

            let descriptionParagraph = document.createElement("p");
            descriptionParagraph.innerHTML = `Description: ${description.value}`;

            let dateParagraph = document.createElement("p");
            dateParagraph.innerHTML = `Due Date: ${date.value}`;
            
            
            let createDiv = document.createElement("div");
            createDiv.classList.add("flex");

            let createStartBtn = document.createElement("button");
            createStartBtn.classList.add("green");
            createStartBtn.innerHTML = "Start";
            
            let createDeleteBtn = document.createElement("button");
            createDeleteBtn.classList.add("red");
            createDeleteBtn.innerHTML = "Delete";
            createDiv.appendChild(createStartBtn);
            createDiv.appendChild(createDeleteBtn);

            createArticle.appendChild(h3);
            createArticle.appendChild(descriptionParagraph);
            createArticle.appendChild(dateParagraph);
            createArticle.appendChild(createDiv);


            containerOpenSection.appendChild(createArticle);
            createStartBtn.addEventListener("click",function(e){

                e.preventDefault();
    
                const progresstarget = e.target;
               
                let progressSection = document.getElementsByTagName("section")[2];
                let progressContainer = progressSection.querySelector("#in-progress");
    
    
                let progressArticle = document.createElement("article");
                let h3Porgress = document.createElement("h3");
                h3Porgress.innerHTML = h3.innerHTML;   
                progressArticle.appendChild(h3Porgress);
    
              
                let descriptionParagraphPorgress = document.createElement("p");
                descriptionParagraphPorgress.innerHTML = `Description: ${descriptionParagraph.innerHTML}`;
                progressArticle.appendChild(descriptionParagraphPorgress);
    
                let dateParagraphProgress = document.createElement("p");
                dateParagraphProgress.innerHTML = `Due Date: ${dateParagraph.innerHTML}`;
                progressArticle.appendChild(dateParagraphProgress);    
                
                let progressDiv = document.createElement("div");
                progressDiv.classList.add("flex");
    
                let progressDeleteBtn = document.createElement("button");
                progressDeleteBtn.classList.add("red");
                progressDeleteBtn.innerHTML = "Delete";
                let finishButton = document.createElement("button");
                finishButton.classList.add("orange");
                finishButton.innerHTML = "Finish";
    
                progressDiv.appendChild(progressDeleteBtn);
                progressDiv.appendChild(finishButton);
                progressArticle.appendChild(progressDiv);
    
                progressContainer.appendChild(progressArticle);           
    
                createArticle.remove();
                progressDeleteBtn.addEventListener("click", () => progressArticle.remove());



                finishButton.addEventListener("click",function(e){
                    e.preventDefault;


                   let finishContainer = sections[3].getElementsByTagName("div")[1];
                   let finishArticle =  document.createElement("article");

                   finishArticle.appendChild(h3Porgress);
                   finishArticle.appendChild(descriptionParagraphPorgress)
                   finishArticle.appendChild(dateParagraphProgress);

                   progressArticle.remove();
                   finishContainer.appendChild(finishArticle);
                });



             });
            createDeleteBtn.addEventListener("click", () => createArticle.remove());
      
    }

}