function orderRectangles(input){


    let newArr = [];
    for (let i = 0; i <input.length ; i++) {

        let rectangle = {

            width : input[i][0],
            height : input[i][1],
            area: function (){ return this.width * this.height },
            compareTo : function (other){
                return other.area() - this.area()|| other.width - this.width;
            }

        }
        newArr.push(rectangle)
    }

    newArr.sort((a,b) => {
        if(a.area() < b.area()){
            return 1;
        }else if (a.area() > b.area()){
            return -1;
        }else{
            if(a.width < b.width){
                return 1;
            }else if(a.width > b.width){
                return -1;
            }
       }
        return 0;
    });
    return newArr;
}

let sizes = [[1,20],[20,1],[5,3],[5,3]];
let sortedRectangles = orderRectangles(sizes);

console.log(sortedRectangles[0].compareTo(sortedRectangles[1]));
console.log(sortedRectangles[1].compareTo(sortedRectangles[0]));
console.log(sortedRectangles[1].compareTo(sortedRectangles[2]));
console.log(sortedRectangles[2].compareTo(sortedRectangles[1]));
console.log(sortedRectangles[2].compareTo(sortedRectangles[3]));
console.log(sortedRectangles[2].compareTo(sortedRectangles[2]));