const newman = require('newman'); 
require('dotenv').config();

newman.run({
//collection: require('./collection/dmoney.json'),
collection: `https://api.postman.com/collections/32547093-fbc17142-4528-41b1-9b66-5cea65e95bca?access_key=PMAT-01HNT75S7ZKDJ6CKZ8C3FPE380`,

reporters: 'htmlextra',
iterationCount: 1,
reporter: {
    htmlextra: {
        export: './Reports/report.html'
        },
}
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});