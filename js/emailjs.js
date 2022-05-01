(function () {
  emailjs.init("13T9u7k3DNvNkgvbZ");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var tempParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      comments: document.getElementById("comments").value,
    };
    console.log(tempParams);
    emailjs.send("Panacea_service", "contact_form", tempParams).then(
      function (res) {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
