
let contact_form=document.querySelector(".contactUsForm");

let uname=document.querySelector("#name");
let email=document.querySelector("#email");
let subject=document.querySelector("#subject");
let mail_body=document.querySelector("#MailBody");
console.log(name, email, subject, mail_body);


contact_form.onsubmit=function(event){
    event.preventDefault();


    Email.send({
        SecureToken : "0941405f-9933-48cf-a7c7-02338abe20ae",
        To : 'raheeqmousa00@gmail.com',
        From : email.value,
        Subject : subject.value,
        Body : mail_body.value
    }).then(
      message => alert(message)
    );
}

