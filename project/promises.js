function applyForVisa(document) {
    console.log('обработка заявления');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({});
        }, 2000);
    });
    return promise;
}

applyForVisa({})
    .then(visa => {
        console.info('visa granted');
        return visa;
    })
    .then(bookHotel)// i pass function as an object as a resolve argument. visa goes there automatically.
    .then(byTickets)
    .catch(error => console.log('error'));

function bookHotel(visa) {
    console.info('booking');
    console.log('visa: ' + visa);
    return visa;// if i dont return byTickets wont get visa
};

function byTickets(visa) { //if frxmpl a dont specify argument here we will see 'error' from catch.
    console.info('buying');
    console.log('visa: ' + visa);
};

