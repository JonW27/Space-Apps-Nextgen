function main() {
if (localStorage.getItem('setup') != null) return;

var http = require('http');
var response = http.request({'url':'http://redder.scriptrapps.io/save_the_earth/request'});

localStorage.setItem('allData', JSON.parse(response.body));
localStorage.setItem('completed', {});
localStorage.setItem('setup', 'done');
}

main();

console.log(localStorage.getItem('allData');