// /.netlify/functions/like
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()

  // 🔥🔥🔥 Code-Along
  // Implement the like function

  return {
    statusCode: 200
  }
}