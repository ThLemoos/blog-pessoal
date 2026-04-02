import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDEXt9P-DfYW5o9Yjq7I_edXIyzUB3NfH4",
    authDomain: "blog-romantico.firebaseapp.com",
    projectId: "blog-romantico",
    storageBucket: "blog-romantico.firebasestorage.app",
    messagingSenderId: "793027844298",
    appId: "1:793027844298:web:468b9061bb3f33d8c33c33"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const itens = [
    "pagina1",
    "pagina2",
    "pagina3",
    "pagina4",
    "pagina5",
    "mes1",
    "mes2",
    "mes3",
    "mes4",
    "surpresaFinal"
];

async function marcarVisto(id) {
    await setDoc(doc(db, "conteudos", id), {
        visto: true
    });
}

async function verificarNovos() {
    for (let id of itens) {
        const docRef = doc(db, "conteudos", id);
        const docSnap = await getDoc(docRef);

        const badge = document.getElementById(id + "-badge");

        if (!badge) continue;

        if (!docSnap.exists() || !docSnap.data().visto) {
            badge.style.display = "inline-block";
        }
        else {
            badge.style.display = "none";
        }
    }
}

verificarNovos();

window.marcarVisto = marcarVisto;

async function irParaPagina(id, url) {
    await marcarVisto(id);
    window.location.href = url;
}

window.irParaPagina = irParaPagina;