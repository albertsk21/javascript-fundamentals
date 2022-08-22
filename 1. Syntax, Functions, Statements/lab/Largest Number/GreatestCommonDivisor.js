

function  calculateGCD(num1,num2){

    function gcd(a,b) {
   
        // Everything divides 0
        if(b == 0){
           return a;
         }
          
         return gcd(b, a % b);
       }
    

    console.log(gcd(num1,num2));
       


}



calculateGCD(2154, 458);