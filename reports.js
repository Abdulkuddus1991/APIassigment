const newman = require('newman');
 require('dotenv').config(); //require install dotenv package
 
newman.run({
    // past collection url 
    
    collection:`https://api.postman.com/collections/51546673-5fbcbd12-4f08-48c6-a4aa-d7416878782c?access_key=${process.env.secretKey}`,
    
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
