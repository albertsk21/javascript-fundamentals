function jsonTable(employeeData) {

    let employeeArray = [];


    for (let i = 0; i < employeeData.length ; i++) {


        let object = JSON.parse(employeeData[i]);
        employeeArray.push(object);



    }

    console.log(createTable(employeeArray));

 function createTable(employeeArray){
        let output = '<table>\n';
        output += valuesRow(employeeArray);
        output += '</table>'
     return output;
 }
 function valuesRow(employeeArray){
     let output = '';

     for (let i = 0; i <employeeArray.length ; i++) {


         let rows = '\t<tr>\n'
         for (const key in employeeArray[i]) {
             rows += `\t\t<td>${employeeArray[i][key]}</td>\n`
         }
         rows += '\t </tr>\n';


         output += rows;
     }

     return output;
 }
   }
jsonTable(['{"name":"Peter","position":"Director", "salary":100000}', '{"name":"Ted","position":"Lecturer","salary":1000}', '{"name":"George","position":"Lecturer","salary":1000}'])
