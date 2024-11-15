const { Firestore } = require('@google-cloud/firestore');

const firestore = new Firestore({
    projectId: 'sugar-care-441806',
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});
module.exports = { firestore };