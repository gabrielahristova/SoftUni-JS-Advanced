function ticketSorter(tickets, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];

    tickets.map((ticket) => {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });

    switch (sorting) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }
    return result;
}

ticketSorter(['Philadelphia|94.20|available',
              'New York City|95.99|available',
              'New York City|95.99|sold',
              'Boston|126.20|departed'],
              'destination')
