function solve() {
    const form = document.getElementById('container');
    const petsList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');
    let addBtn = document.getElementsByTagName("button")[0];

  
    let name = form.getElementsByTagName("input")[0];
    let age = form.getElementsByTagName("input")[1];
    let kind = form.getElementsByTagName("input")[2];    
    let currentOwner = form.getElementsByTagName("input")[3];



    addBtn.addEventListener("click",function(e){
        e.preventDefault()

        const target = e.target;
        if(target === addBtn){
            if(name.value === "" || age.value == "" || kind.value === "" || currentOwner.value === "" || isNaN(Number(age.value))){
                return;
            }
        }


        let li = document.createElement("li");
        let paragraph = document.createElement("p");
        let strongName = document.createElement("strong");
        let strongAge = document.createElement("strong");
        let strongKind = document.createElement("strong");
        strongKind.innerHTML = kind.value;
        strongName.innerHTML = name.value;
        strongAge.innerHTML = age.value;
        paragraph.appendChild(strongName);
        paragraph.innerHTML += " is a ";
        paragraph.appendChild(strongAge);
        paragraph.innerHTML += " year old ";
        paragraph.appendChild(strongKind);
        let spanOwner = document.createElement("span");
        spanOwner.innerHTML = `Owner: ${currentOwner.value}`;

        let contactButton = document.createElement("button");
        contactButton.innerHTML = "Contact with owner";


        li.appendChild(paragraph);
        li.appendChild(spanOwner);
        li.appendChild(contactButton);


        petsList.appendChild(li);


        name.value = '';
        age.value = '';
        kind.value = '';
        currentOwner.value = '';
        contactButton.addEventListener("click",function(e){
            e.preventDefault();

            let newDiv = document.createElement("div");
            let input = document.createElement("input");
            input.placeholder = "Enter your names";
            let takeButton = document.createElement("button");
            takeButton.innerHTML = "Yes! I take it!";
            newDiv.appendChild(input);
            newDiv.appendChild(takeButton);
            li.appendChild(newDiv);
         
            
            takeButton.addEventListener("click",function(e){
                e.preventDefault();
                newDiv.remove();
                spanOwner.innerHTML = `New Owner: ${input.value}`;

                newDiv.remove();

                let checkedButton = document.createElement("button");
                checkedButton.innerHTML = "Checked";


                checkedButton.addEventListener("click",function(e){
                    e.preventDefault(e);

                    adoptedList.appendChild(li);
                 
                    checkedButton.addEventListener("click",function(e){
                        li.remove();
                    });

                });
                
                li.appendChild(checkedButton);

            });
         
            contactButton.remove();



        });

    });


}

