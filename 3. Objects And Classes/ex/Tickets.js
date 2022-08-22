

    function result(ticketArr, sortCrit) {

        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = Number(price);
                this.status = status;
            }


        }

    let ticketArray = [];
    for (let i = 0; i < ticketArr.length ; i++) {
        let tokens = ticketArr[i].split("|");
        let ticket = new Ticket(tokens[0],tokens[1],tokens[2]);
        ticketArray.push(ticket);
    }


    ticketArray.sort((a,b) => {
        switch (sortCrit){
            case 'destination':
                return a.destination.localeCompare(b.destination);
            case 'price':
                if(a.price > b.price){
                    return 1;
                }else if(a.price < b.price){
                    return -1
                }
                return 0;
            case 'status':
                return a.status.localeCompare(b.status);
        }
    });


    return ticketArray;
}
    result(['Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'],
        'price');