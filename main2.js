function handleSubmit(){
    this.event.preventDefault();
                                    // getting values of input fields 
    var fname = this.event.target.fname.value;
    var lname = this.event.target.lname.value;
    var fullName = `$(fname)$(lname)`;
    var email = this.event.target.email.value;
    var password = this.event.target.pass.value;
    var confPass = this.event.target.cpass.value;
    var formInfo = [fname,lname,email,password,confPass];

                                    // printing values of form in modal
     var list = document.getElementById('list');
     list.innerHTML = null;
     for(let i = 0;  i< formInfo.length; i++){
       let li = document.createElement("li");
       li.style.backgroundColor = 'aquamaria';
       li.classList = "list-group-item";
    li.innerHTML = formInfo[i];
    list.appendChild(li);
   }

                                             //  printing pdf

   let button = document.getElementById('pdf');
   button.addEventListener('click', () =>{
    var doc = new jsPDF()
    doc.text(formInfo, 10, 10);
    doc.save('form.pdf');
   } )

   
   const sendMail = () => {
     var params = {
        name: fname,
        email: email,
    };
    const serviceID = "service_bvvivsg";
    const templateID = "template_ku2xsi9";
   
    emailjs.send(serviceID, templateID, params)
    .then((res) => {
     name: fullname;
     email:email;
     console.log(res);
     alert("Yor message has been sent successfuly");
    })
    .catch((err) => console.log(err)) 
   
   }
}
