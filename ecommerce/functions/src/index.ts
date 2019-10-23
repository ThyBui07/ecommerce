import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

export const addAdminRole = functions.https.onCall((data, context) => {
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
          admin: true,
        }).then(() => {
          console.log(`Success! ${data.email} has been made an admin`)
        }).catch(err => {
          console.log(err);
          return err;
        })
  })

})