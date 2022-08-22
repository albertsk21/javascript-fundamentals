function getArticleGenerator(articles){
    let index = -1;
    return function(){
        let content = document.getElementById("content");
        let article = document.createElement("article");
    
        if(index < articles.length-1){
            index++;
            article.innerHTML = articles[index];
            content.appendChild(article);
        }
    }
}