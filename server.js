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

//Rote home

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

//Rote posts
app.get("/api/posts", (req, res) => {
  const posts = [
    {
      name: "Ciambellone",
      content: "Contenuto del post 1",
      image: `http://localhost:${port}/images/ciambellone.jpeg`,
      tags: ["tag1", "tag2"],
    },
    {
      name: "Cracker Barbabietola",
      content: "Contenuto del post 2",
      image: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
      tags: ["tag3", "tag4"],
    },
    {
      name: "Pane Fritto Dolce",
      content: "Contenuto del post 3 ",
      image: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
      tags: ["tag5", "tag6"],
    },
    {
      name: "Pasta Barbabietola",
      content: "Contenuto del post 4",
      image: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
      tags: ["tag7", "tag8"],
    },
    {
      name: "Torta Paesana",
      content: "Contenuto del post 5",
      image: `http://localhost:${port}/images/torta_paesana.jpeg`,
      tags: ["tag9", "tag10"],
    },
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Il server in ascolto è http://localhost:${port}`);
});
