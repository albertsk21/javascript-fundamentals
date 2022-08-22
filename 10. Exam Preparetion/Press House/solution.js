function pressHouse() {


    class Article{
        constructor(title,content) {
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Title: ${this.title}` + `\nContent: ${this.content}`
        }
    }

    class ShortReports extends Article{
        constructor(title,content,originalResearch) {
            super(title, content);
            this.comments = [];
                if(String(content).length >= 150){
                    throw new Error("Short reports content should be less than 150 symbols.");
                }
                if(!originalResearch.hasOwnProperty("title") ||!originalResearch.hasOwnProperty("author")){
                    throw new Error("The original research should have author and title.");
                }

            this.originalResearch = originalResearch;

        }


        addComment(comment){
            this.comments.push(comment);
            return "The comment is added.";
        }
        toString(){
            let output = super.toString();
                output += `\nOriginal Research: ${ this.originalResearch.title } by ${ this.originalResearch.author }`
            if(this.comments.length !== 0){
                output += "\nComments:";
                for (let i = 0; i < this.comments.length ; i++) {
                    output += `\n${this.comments[i]}`;
                }
            }

            return output;
        }
    }



    class BookReview extends Article{
        constructor(title, content,book) {
            super(title,content);
            this.book = book
            this.customers = [];
        }
        addClient(customerName, orderDescription){
            let exist = false
            for (let i = 0; i < this.customers.length ; i++) {
                if(this.customers[i].name === customerName && this.customers[i].description === orderDescription){
                    exist = true;
                }
            }
            if(exist){
                throw new Error("This client has already ordered this review.");
            }
            let order = {
                name : customerName,
                description : orderDescription
            }
            this.customers.push(order);



            return `${customerName} has ordered a review for ${this.book.name}`
        }
        toString(){
            let output = super.toString();
            output += `\nBook: ${this.book.name}`

            if(this.customers.length !== 0){
                output += "\nOrders:"
                for (let i = 0; i <this.customers.length ; i++) {
                    output += `\n${this.customers[i].name} - ${this.customers[i].description}`;
                }
            }
            return output;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview,
    };
}

let classes = pressHouse()
let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', { name: 'The Great Gatsby', author: 'F Scott Fitzgerald' });
output = book.addClient('The Guardian', '100 symbols');
output += '\n' + book.addClient('Goodreads', '30 symbols');
output += '\n' + book.toString();
console.log();