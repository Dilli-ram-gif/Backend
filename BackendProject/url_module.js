//Split a web address into readable parts:
const url = require('url');
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';

//Parse the address:
const q = url.parse(adr, true);

// The parse method returns an object containing url properties
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata.month);