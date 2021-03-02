// /.netlify/functions/create_post
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()
  
  // 🔥🔥🔥 Lab
  // Step 2: Parse out the post data, i.e. the event.body – pull out 
  //         the user ID, username, and image URL that is provided
  //         in the POST request, and assign to variables. Use 
  //         console.log if necessary, to ensure the values are what
  //         you're expecting.
  // Step 3: Construct an object of data to send to Firestore – this
  //         object should include the user ID, username, image URL,
  //         and a "created" timestamp – can use the built-in function
  //         for this – firebase.firestore.FieldValue.serverTimestamp()
  // Step 4: Add the post to Firestore using the .add() function.
  // Step 5: Add the newly created post's auto-generated ID to the object
  //         you created in Step 3, and return that entire object as the
  //         body of the return value, using JSON.stringify()

  return {
    statusCode: 200,
    body: JSON.stringify({})
  }

}