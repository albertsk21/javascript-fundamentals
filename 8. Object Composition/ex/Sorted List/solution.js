function sortedList() {
    return (function () {
        let arr = [];
        let size = 0;
        let sorting = (a, b) => a - b;
        let add = function (element) {

            arr.push(element);
            this.size++
            arr.sort((a,b) => sorting(a,b));

        };
        let remove = function (index) {
            if(index > -1 && index < arr.length){
                arr.splice(index,1);
                this.size--;
            }};
        let get = function (index) {

            if(index > -1 && index < arr.length ){
                return arr[index];
            }
        };
        return {add, remove, get, size}
    })();
}

let sorted = sortedList();
sorted.add(1,2,4,6);
console.log();