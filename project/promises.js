function applyForVisa(document) {
    console.log('обработка заявления');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('отказ. не достаточног документов.');
        }, 2000);
    });
    return promise;
}

applyForVisa({})
    .then(visa => console.info('visa granted'))
    .then(bookHotel)
    .then(byTickets)
    .catch(error => console.log('error'));

function bookHotel() {

};

function byTickets() {

};

