function addItem() {
  

    let list = document.getElementById("items");
    let input = document.getElementById("newItemText").value;    
    
    
    let element = document.createElement("li");
    element.textContent = input;
    list.appendChild(element);


    document.getElementById('newItemText').value = "";
}


