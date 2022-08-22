
        class Post{
            constructor(title,content) {
                this.title = title;
                this.content = content;
            }
            toString(){
                let output = `Post: ${this.title}\n`;
                output += `Content: ${this.content}`
                return output;
            }
        }

        class SocialMediaPost extends Post{
            constructor(title,content, likes, dislikes) {
                super(title,content);
                this.likes = likes;
                this.dislikes = dislikes;
                this.comments = []

            }

            addComment(comment){
                this.comments.push(comment);
            }
            toString() {
                let output = super.toString();
                output += `\nRating: ${this.likes - this.dislikes}`


                if(this.comments.length > 0){
                    output += "\nComments:";
                    for (let i = 0; i <this.comments.length; i++) {
                        output +=`\n * ${this.comments[i]}`;
                    }
                }
                return output;
            }
        }

        class BlogPost extends Post{

            constructor(title, content, views) {
                super(title,content);
                this.views = views;
            }

            view(){
                this.views++;
                return this.views;
            }


            toString() {
                return super.toString() + `\nViews: ${this.views}`;


            }
        }
