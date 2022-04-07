/**
 * Steps to use firebase
 * 1. create a project on console.firebase.google.com
 * 2. npm install firebase
 * 3. register web app in firebase
 * 4. copy firebase init with config from firebase project settings
 * 5. export default app from firebase.init.js
 * 6. import getAuth from firebase/auth and create auth  = getAuth(app)
 * 7. import app firebase init.js into your app.js
 * 8. turn on google authentication (firebase > authentication > enable google sign in )
 * 9. Create google provider, const provider = new GoogleAuthProvider();
 * 10. use signInWithPopup and pass auth and provider.
 * 11. handle .then (if success) and catch error (if error)
 */
