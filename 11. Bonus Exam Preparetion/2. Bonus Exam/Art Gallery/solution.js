class ArtGallery{
    constructor(creator) {

        this.creator = creator;
        this.possibleArticles = {
            picture : 200,
            photo : 50,
            item : 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }


    addArticle(articleModel, articleName, quantity){
        if(!this.validModel(articleModel)){
            throw new Error("This article model is not included in this gallery!");
        }
        return this.addArticleInArray(articleModel,articleName,quantity);
    }

    inviteGuest(guestName,personality){

        if(this.existGuest(guestName)){
            throw new Error(`${guestName} has already been invited.`);
        }
        let guest = {
            name : guestName,
            points : Number(this.getPoints(personality)),
            purchaseArticle: 0
        }
        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel,articleName,guestName){
        let currentArticle = this.getArticle(articleName,articleModel);
        let currentGuest = this.getGuest(guestName);

        if(!this.getArticle(articleName,articleModel)){
            throw new Error("This article is not found.");
        }

       if(currentArticle.quantity === 0){
            return `The ${articleName} is not available.`;
        }

        if(!this.existGuest(guestName)){
            return "This guest is not invited.";
        }


        if(this.getPointsFromArticles(articleModel) > currentArticle.points){
            return "You need to more points to purchase the article.";
        }

        let pointsFromArticles = this.getPointsFromArticles(articleModel);
        currentGuest.points = currentGuest.points - pointsFromArticles;
        currentArticle.quantity = currentArticle.quantity - 1;
        currentGuest.purchaseArticle = currentGuest.purchaseArticle + 1;


        return `${guestName} successfully purchased the article worth ${this.getPointsFromArticles(articleModel)} points.`;
    }


    showGalleryInfo(criteria){
        if(criteria === "article"){
            return this.allArticles()
        }else if(criteria === "guest"){
            return this.allGuests();
        }

    }
    allGuests(){
        let output = "Guests information:";
        for (let i = 0; i <this.guests.length ; i++) {
            let currentGuest = this.guests[i];
            output += `\n${currentGuest.name} - ${currentGuest.purchaseArticle}`;
        }
        return output;
    }
    allArticles(){
        let output = "Articles information:";
        for (let i = 0; i <this.listOfArticles.length ; i++) {
            let currentArticle = this.listOfArticles[i];
            output += `\n${currentArticle.model} - ${currentArticle.name} - ${currentArticle.quantity}`;
        }
        return output;
    }
    getGuest(guestName){
        for (let i = 0; i < this.guests.length; i++) {
            if(guestName === this.guests[i].name){
                return this.guests[i];
            }
        }
    }
    getArticle(articleName, articleModel){
        for (let i = 0; i < this.listOfArticles.length ; i++) {
            let currentArticle = this.listOfArticles[i];
            if(articleName === currentArticle.name && articleModel === currentArticle.model){
                return currentArticle;
            }
        }
        return false;
    }
    getPointsFromArticles(articleModel){
        let points = 0;
        switch (articleModel){
            case "picture":
                points = 200;
                break;
            case "photo":
                points = 50;
                break
            case "item":
                points = 250;
                break;
        }
        return points;
    }
    getPoints(personality){
        let points = 0;
        switch (personality){
            case "Vip":
                points = 500;
                break;
            case "Middle":
                points = 250;
                break
            case "Normal":
                points = 50;
                break;
        }
        return points;
    }
    existGuest(guestName){
        for (let i = 0; i < this.guests.length; i++) {
            if(guestName === this.guests[i].name){
                return true;
            }
        }
        return false;
    }
    addArticleInArray(articleModel,articleName,quantity){
        let saveIndex = 0;
        let founded = false;
        for (let i = 0; i <this.listOfArticles.length; i++) {
            if(articleName === this.listOfArticles[i].name){
                saveIndex = i;
                founded = true;
                break;
            }
        }
        if(!founded){
            let article = {
                model : articleModel.toLowerCase(),
                name : articleName,
                quantity : Number(quantity)
            }
            this.listOfArticles.push(article);
        }else{
            let article = this.listOfArticles[saveIndex];
            article.quantity = article.quantity + Number(quantity);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

    }
    validModel(articleModel){
        if(articleModel.toLowerCase() === "picture"){
            return true;
        }else if(articleModel.toLowerCase() === "photo"){
            return true;
        }else if(articleModel.toLowerCase() === "item"){
            return true;
        }
        return false;
    }

}



