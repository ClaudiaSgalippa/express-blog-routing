const express = require("express"); /**Importiamo il framework "Express"*/
const app = express(); /**Creiamo un'istanza dell'applicazione "Express"*/
const port = 3000; /**Dichiariamo il numero della porta su cui il server ascolterà*/
const posts = require("./routers/posts.js"); /**Import del modulo contenente l'array nel file "post.js"*/

app.use(express.static("public")); /**Configuriamo la cartella "public" per rendere siponibili i file "statici" (le immagini)*/

app.get("/", (req, res) => { /**Definiamo la rotta principale ("/")*/
    res.send("<h1>Server del mio blog</h1>") /**Risposta inviata al client quando visita la home*/
}); 

app.get("/bacheca", (req, res) => { /**Definiamo la rotta per la bacheca*/
    res.json({posts}); /**Restituzione dell'oggetto json*/
}); 

app.listen(port, () => { /**Avviamo il server e lo facciamo "ascoltare" sulla porta indicata precedentemente*/
    console.log(`Prova di ricezione ${port}`); /**Console.log di prova per vedere se arriva la "chiamata"*/
});