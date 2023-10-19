const { Resend } = require("resend");
const fs = require("fs");
const process = require("process");
const args = process.argv;

const resend = new Resend("API_KEY");

fs.readFile("./index.html", "utf8", (error, html) => {
  if (error) {
    console.error("Error al leer el archivo HTML:", error);
  } else {
    resend.emails
      .send({
        from: "onboarding@resend.dev",
        to: [
          "angel.silva@tiendanube.com",
          "angel.arsd@gmail.com",
          "angel_arsd@hotmail.com",
          //"susidallals@gmail.com",
          //"susanadallal@hotmail.com",
        ],
        subject: `Test ${args.length > 2 && args[2]}`,
        html,
      })
      .then((_response) => {
        console.error("Email enviado");
      })
      .catch((error) => {
        console.error("Error al enviar el email:", error);
      });
  }
});
