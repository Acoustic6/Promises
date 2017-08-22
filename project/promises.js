function applyForVisa(document) {
    console.log('обработка заявления');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({});
        }, 2000);
    });
    return promise;
}
//javascript makes a promise itself and resolves it here: (*)
//i wanna make it myself here: (**)
applyForVisa({})
    .then(visa => {
        console.info('visa granted');
        //return visa; (**)
        return new Promise(function(resolve1, reject) {
            resolve1();
            resolve(visa);
        })
    })
    .then(bookHotel)//(*)
    .then(byTickets)//(*)
    .catch(error => console.log('error'));

function bookHotel(visa) {
    console.info('booking');
    console.log('visa: ' + visa);
    return Promise.resolve(visa);//we can resolve with no constructor
};

function byTickets(visa) {
    console.info('buying');
    console.log('visa: ' + visa);
};

