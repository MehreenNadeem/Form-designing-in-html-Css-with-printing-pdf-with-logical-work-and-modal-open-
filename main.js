function handleSubmit() {
    this.event.preventDefault();
    var fname = this.event.target.fname.value;
    var lname = this.event.target.lname.value;
    // var fullName = `$(fname) $(lname)`;
    // var email = this.event.target.email.value;
    // var phone = this.event.target.phno.value;
    // var dob = this.event.target.dob.value;
    // var fname = document.getElementById("fname");
    var formWrapper = document.getElementById('formDiv');
    console.log("Mehreen",[fname,lname]);
    console.table(fname,lname)

    // var stds = [
    //     {
    //         name: "noor",
    //         age: 15,
    //         height: "123cm"
    //     },
    //     {
    //         name: "Mehreen",
    //         age: 15,
    //         height: "123cm"
    //     },
    //     {
    //         name: "Rukhsar",
    //         age: 15,
    //         height: "123cm"
    //     }
    // ]
    
    
    // window.open('http://localhost:5500/newPage.html', '_blank');
    // var info = document.getElementById('info');
    // console.log('info', info)
    // info.innerHTML = `Hello World............`;
}
//  const inpEl = document.getElementsByTagName('input');
// console.log('inplEl', inpEl)
// Array.from(inpEl).forEach(function(el, noor){
//     // el.addEventListnere('input',)
//     console.log("noor..........", noor)
//     el.addEventListener('input', function (e) {
//         var val = e.target.value;
//         console.log("running", val)
//     })
//     // return el;
// }); 
// // for (let i = 0; i < inpEl.length; i++){
    // inpEl[i].addEventListener('input', function (e) {
    //     var val = e.target.value;
    //     console.log("running", val)
    // })
// }
function handleChange(){
    // alert(val);
}



// const sendEmail = () => {
//   Email.send({
//      Host : "smtp.gmail.com",
//      Username : "Mehreen2456@gmail.com",
//      Password : "password",
//      To : 'mehreenchundrigar2511@gmail.com',
//      From : email,
//      Subject : "This is the subject",
//      Body : "And this is the body"
//  }).then(
//    message => alert(message)
//  );
// }


// const axios = require('axios');

// async function sendEmail(name, email, subject, message) {
//   const data = JSON.stringify({
//     "Messages": [{
//       "From": {"Email": "mehreenchundrigar2511@gmail.com", "Name": "Mehreen"},
//       "To": [{"Email": email, "Name": name}],
//       "Subject": subject,
//       // "TextPart": message
//     }]
//   });

//   const config = {
//     method: 'post',
//     url: 'https://api.mailjet.com/v3.1/send',
//     data: data,
//     headers: {'Content-Type': 'application/json'},
//     auth: {username: '<API Key>', password: '<Secret Key>'},
//   };
//   return axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// }