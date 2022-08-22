window.addEventListener('load', solve);

function solve() {


    let addBtn = document.getElementById("add");
    let model = document.getElementById("model");
    let year = document.getElementById("year");
    let description = document.getElementById("description");
    let price = document.getElementById("price");



    addBtn.addEventListener("click", function(e){
        e.preventDefault();


        const target = e.target;
        if(target ==  addBtn){
            if(model.value === "" || year.value === "" || description.value === "" || price.value === "" ){
                return;
            }
        }

        let containerFurniture = document.getElementById("furniture-list");

        let box = document.createElement("tr");
        box.classList.add("info");

        let modelTd = document.createElement("td");
        modelTd.innerHTML = model.value;

        let priceTd = document.createElement("td");
        priceTd.innerHTML = Number(price.value).toFixed(2);

        let buttonsTd = document.createElement("td");


        let moreBtn = document.createElement("button");
        moreBtn.classList.add("moreBtn");
        moreBtn.innerHTML = "More Info";

        let buyBtn = document.createElement("button");
        buyBtn.classList.add("buyBtn");
        buyBtn.innerHTML = "Buy it";



        let hideTr = document.createElement("tr");
        hideTr.classList.add("hide");
        hideTr.style.display = "none";

        let yearTd = document.createElement("td");
        yearTd.innerHTML = `Year: ${year.value}`;

        let descriptionTd = document.createElement("td");
        descriptionTd.colSpan = 3;
        descriptionTd.innerHTML = `Description: ${description.value}`; 

        hideTr.appendChild(yearTd);
        hideTr.appendChild(descriptionTd);



        buttonsTd.appendChild(moreBtn);
        buttonsTd.appendChild(buyBtn)

        box.appendChild(modelTd);
        box.appendChild(priceTd);
        box.appendChild(buttonsTd);
        containerFurniture.appendChild(box);
        containerFurniture.appendChild(hideTr);

        moreBtn.addEventListener("click",function(e){
            e.preventDefault();

            let textButton = moreBtn.innerHTML;
            if(textButton === "More Info" ){
                moreBtn.innerHTML = "Less Info";
                hideTr.style.display = "contents";
            }else{
                moreBtn.innerHTML = "More Info";
                hideTr.style.display = "none";
            }

        });

        buyBtn.addEventListener("click",function(e){
            e.preventDefault();
            let totalPrice = document.getElementsByClassName("total-price")[0];
            let totalSum = Number(totalPrice.innerHTML) + Number(priceTd.innerHTML)
            totalPrice.innerHTML =  totalSum.toFixed(2);
            box.remove();

        });

    })

    
}
