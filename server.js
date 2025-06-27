/* Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /api/posts che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman 
*/

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.listen(port, () => {
  console.log(
    `Il server in ascolto e attualmente collocato alla porta ${port}`
  );
});

//Rote

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
