function addItem() {

    let input = document.getElementById("newText").value;
    let list = document.getElementById("items");

    if(input.length === 0){
        return;
    }


    let createLi = document.createElement("li");
    createLi.textContent = input;

    let removeA = document.createElement("a");
    let link = document.createTextNode("[Delete]");
    removeA.appendChild(link);
    removeA.href = '#';


    removeA.addEventListener("click",deleteItem);
    createLi.appendChild(removeA);
    list.appendChild(createLi);

    function deleteItem(){
        createLi.remove();
    }

 
}