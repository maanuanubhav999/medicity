//signup

const signupForm= document.querySelector('#login-form');
signupForm.addEventListener('submit',(e)=>{
                  
    e.preventDefault();
//get user info
const email=signupForm['inputEmail'].value;
const password=signupForm['inputPassword'].value;
 window.location.href="donation.html"   


//sign up detail

//takes some time to complete and cannot write something down here. use of promise
// firebase.auth().createUserWithEmailAndPassword(email, password).then(cred =>{
//     // Handle Errors here.
//     console.log(cred);


// });

// firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
 
//   window.location.href="donation.html"   

//   });

});