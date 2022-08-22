window.addEventListener('load', solve);

function solve() {


    let addBtn = document.getElementById("add-btn");
    let genre  = document.getElementById("genre");
    let nameSong = document.getElementById("name");
    let author = document.getElementById("author");
    let date = document.getElementById("date");

    addBtn.addEventListener("click",function(e){

        e.preventDefault()
    
        const target = e.target
        if( target == addBtn){
            
            if(nameSong.value === "" || genre.value === "" || author.value === "" || date === "" ){
                return;
            }
        
        }

        let mainBox = document.getElementsByClassName("all-hits-container")[0];

        let container = document.createElement("div");
        container.classList.add("hits-info");

        let image = document.createElement("img");
        image.src = "./static/img/img.png";


        let genreH2 = document.createElement("h2");
        let genreOutput = `Genre: ${genre.value}`;
        genreH2.innerHTML = genreOutput;
    
        let nameSongH2 = document.createElement("h2");
        let nameSongOutput = `Name: ${nameSong.value}`;
        nameSongH2.innerHTML = nameSongOutput;

    
        let authorH2 = document.createElement("h2");
        let authorOutput = `Author: ${author.value}`;
        authorH2.innerHTML = authorOutput;
        

        let dateH3 = document.createElement("h3");
        let dateOutput = `Date: ${date.value}`;
        dateH3.innerHTML = dateOutput;

        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.innerHTML = "Save song";

        let likeBtn = document.createElement("button");
        likeBtn.classList.add("like-btn");
        likeBtn.innerHTML = "Like song";

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = "Delete";

        container.appendChild(image);

        container.appendChild(genreH2);
        container.appendChild(nameSongH2);
        container.appendChild(authorH2);
        container.appendChild(dateH3);
        container.appendChild(saveBtn);
        container.appendChild(likeBtn);
        container.appendChild(deleteBtn);
        mainBox.appendChild(container);


        deleteBtn.addEventListener("click",() => container.remove());
    
    
        likeBtn.addEventListener("click",function(){

            let currentColor = String(likeBtn.style.backgroundColor);
            if(currentColor !== "gray"){
// ---------------------------------------------------------------
//    !!!     --->        COLOR GRAY NOT WORK       <---     !!!
// ---------------------------------------------------------------

                likeBtn.style.backgroundColor = "gray";
                
                let likesClass = document.getElementsByClassName("likes")[0];
                let arrayElements = likesClass.getElementsByTagName("p")[0].innerHTML.split(" ");
                let likesCounter =  Number(arrayElements[2]) + 1;


                let exportLikes = `Total Likes: ${likesCounter}`;
                likesClass.getElementsByTagName("p")[0].textContent = exportLikes;
                console.log();
            }
        });


        saveBtn.addEventListener("click",function(e){
            e.preventDefault;


            let savedContainer = document.getElementsByClassName("saved-container")[0];

            let currentContainer = document.createElement("div");
            currentContainer.classList.add("hits-info");
        
            let deleteSaveSongButton = document.createElement("button");
            deleteSaveSongButton.classList.add("delete-btn");
            deleteSaveSongButton.innerHTML = "Delete";

       
            currentContainer.appendChild(image);
            currentContainer.appendChild(genreH2);
            currentContainer.appendChild(nameSongH2);
            currentContainer.appendChild(authorH2);
            currentContainer.appendChild(dateH3);
            currentContainer.appendChild(deleteSaveSongButton);
            savedContainer.appendChild(currentContainer);
            container.remove();


            deleteSaveSongButton.addEventListener("click", () => currentContainer.remove());



        });

    });


}