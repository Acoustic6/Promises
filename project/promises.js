function applyForVisa(document, resolve, reject) {
    console.log('обработка заявления');
    setTimeout(function() {
        Math.random() > .5 ? resolve({}) : reject('отказ. не достаточног документов.');
    }, 2000);
}

applyForVisa({}, function() {
    console.log('visa granted');
    bookHotel(visa, function() {
        byTickets(visa, function() {
            console.log('success');
        }, function() {
            console.log('tickets buy error');
        })
    }, function() {
        console.log('book hotel error');
    })    
}, function(error) {
});

function bookHotel() {

};

function byTickets() {

};

