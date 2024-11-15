/* eslint-disable no-unused-vars */
const { firestore } = require('./src/firestore');

async function testConnection() {
  try {
    const snapshot = await firestore.collection('test').get();
    console.log('Connection successful!');
  } catch (error) {
    console.error('Error:', error);
  }
}

testConnection();