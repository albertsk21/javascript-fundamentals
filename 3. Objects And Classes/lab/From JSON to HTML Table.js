function JsonToHtmlTable(json){

    let arr = JSON.parse(json);



    function escapeHtml(input){
        if(typeof input === 'string' && input.includes('&')){
            return input.replace('&','&amp;');
        }else {
            return input;
        }

    };

    function makeKeyRow(obj){

        let keyRow = '<tr>';

        for(const key in obj){
            keyRow += `<th>${key}</th>`;
        }


        keyRow += '</tr>';
        outputArr.push(keyRow);
    };

    function makeValueRow(arr){

        let valueRow = '';

        arr.forEach(element => {
            valueRow = '<tr>';


            for (const key in element) {

                valueRow +=`<td>${escapeHtml(element[key])}</td>`;

            }

            valueRow += '</tr>';
            outputArr.push(valueRow);
        })
    };
    let outputArr = ["<table>"];
    makeKeyRow(arr[0]);
    makeValueRow(arr);
    outputArr.push("</table>");
    console.log(outputArr.join('\n'))


};
JsonToHtmlTable(['{"name":"Peter","position":"Director", "salary":100000}', '{"name":"Ted","position":"Lecturer","salary":1000}', '{"name":"George","position":"Lecturer","salary":1000}'])