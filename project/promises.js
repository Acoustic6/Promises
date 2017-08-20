function applyForVisa(document, resolve, reject) {
    console.log('обработка заявления');
    setTimeout(function() {
        Math.random() > .5 ? resolve({}) : reject('отказ. не достаточног документов.');
    }, 2000);
}

applyForVisa({}, function(visa) {
    console.log(`Виза получена`);
},
function(reason) {
    console.error(reason);
});