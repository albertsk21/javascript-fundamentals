class ChristmasDinner{
    constructor(budget) {
        this.budget = budget;
        if(Number(budget) < 0){
            throw new Error("The budget cannot be a negative number");
        }
        this.dishes = [];
        this.products = [];
        this.guests = [];
    }
    shopping(infoProducts){
        if(this.budget < infoProducts[1]){
            throw new Error("Not enough money to buy this product");
        }
        let product = {
            type : infoProducts[0],
            price : infoProducts[1]
        };
        this.budget -= product.price;
        this.products.push(product);
        return `You have successfully bought ${product.type}!`
    }
    recipes(recipe){
        if(!(this.checkHaveAllProducts(recipe.productsList))){
            throw new Error("We do not have this product");
        }
        this.takeAllProducts(recipe.productsList);

        let dish = {
            dishName : recipe.recipeName,
            productsList : recipe.productsList
        }
        this.dishes.push(dish);
        return `${recipe.recipeName} has been successfully cooked!`
    }
    inviteGuests(name,dish){
        if(!(this.checkExistDishByName(dish))){
            throw new Error("We do not have this dish");
        }
        if((this.checkExistGuestByName(name))){
            throw new Error("This guest has already been invited");
        }

        let guest = {
            guestName : name,
            dish : this.getDishByName(dish)
        }
        this.guests.push(guest);
        return `You have successfully invited ${name}!`
    }
    showAttendance(){
        let output = "";
        for (let i = 0; i < this.guests.length  ; i++) {
            let currentGuest = this.guests[i];
            let currentDish = currentGuest.dish;


            if(i === 0){
                output += `${currentGuest.guestName} will eat ${currentDish.dishName}, which consists of ${currentDish.productsList.join(", ")}`;
            }else{
                output += `\n${currentGuest.guestName} will eat ${currentDish.dishName}, which consists of ${currentDish.productsList.join(", ")}`;

            }
        }
        return output;
    }
    getDishByName(name){
        for (let i = 0; i <this.dishes.length ; i++) {
            if(this.dishes[i].dishName === name){
                return this.dishes[i];
            }
        }
        return null;
    }
    checkExistGuestByName(name){
        for (let i = 0; i <this.guests.length ; i++) {
            if(this.guests[i].guestName === name){
                return true;
            }
        }
        return  false;

    }
    checkExistDishByName(name){
        for (let i = 0; i < this.dishes.length ; i++) {
            if(this.dishes[i].dishName === name){
                return true;
            }
        }
        return  false;
    }
    takeAllProducts(currentProducts){
        for (let i = 0; i < currentProducts.length ; i++) {
            let productTaken = currentProducts[i];
            for (let indexProduct = 0; indexProduct < this.products.length ; indexProduct++) {

                let currentProduct = this.products[indexProduct];

                let type = currentProduct.type;
                if(productTaken === type){
                    this.products.splice(indexProduct,1)
                    break;
                }
            }
        }
    }
    checkHaveAllProducts(products){
        let check = true;
        for (let i = 0; i < products.length ; i++) {
            let currentProducts = products[i];
            for (let j = 0; j <this.products ; j++) {
                if(!(currentProducts.type === this.products[j].type)){
                    check = false;
                    break;
                }
            }
        }
        return check;
    }
}
