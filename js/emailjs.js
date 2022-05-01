function sendMail(param) {
  var tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    comments: document.getElementById("comments").value,
  };

  emailjs
    .send("service_a02zckb", "template_9fo3eyg", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });
}
