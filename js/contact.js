var form = document.getElementById("myform");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

 
    var templateParams = {
        to_name: "Fahad Alam",
        from_name: name,
        email: email,
        subject: subject,
        message: message
    };

  
    emailjs.send('service_pfdajz1', 'template_64r9urh', templateParams)
        .then(function(response) {
            swal({
                title: "Thank You!",
                text: "Your contact request has been successfully submitted. I will get back to you as soon as possible.",
                icon: "success",
                button: "Close",
              });
              
            console.log('SUCCESS!', response.status, response.text);
          
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
        });
});
