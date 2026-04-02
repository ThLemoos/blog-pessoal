// 🔥 IMPORTS (tudo organizado)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    collection,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// 🔥 CONFIG FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDEXt9P-DfYW5o9Yjq7I_edXIyzUB3NfH4",
    authDomain: "blog-romantico.firebaseapp.com",
    projectId: "blog-romantico",
    storageBucket: "blog-romantico.firebasestorage.app",
    messagingSenderId: "793027844298",
    appId: "1:793027844298:web:468b9061bb3f33d8c33c33"
};

// 🔥 INICIAR FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// 🔥 LISTA DE ITENS
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
    "surpresaFinal",
    "cartaSurpresa"
];


// 🔥 MARCAR COMO VISTO (PERFEITO)
async function marcarVisto(id) {
    await setDoc(doc(db, "conteudos", id), {
        visto: true
    }, { merge: true }); // não sobrescreve
}


// 🔥 IR PARA PÁGINA (AGORA FUNCIONA)
async function irParaPagina(id, url) {
    try {
        await marcarVisto(id);
    } catch (e) {
        console.error("Erro ao marcar visto:", e);
    }

    window.location.href = url;
}


// 🔥 DEIXA GLOBAL PRO HTML
window.irParaPagina = irParaPagina;


// 🔥 TEMPO REAL (SEM BUG DE CELULAR)
function verificarNovosTempoReal() {
    onSnapshot(collection(db, "conteudos"), (snapshot) => {
        snapshot.forEach((docSnap) => {
            const id = docSnap.id;
            const data = docSnap.data();

            const badge = document.getElementById(id + "-badge");
            if (!badge) return;

            badge.style.display = data.visto ? "none" : "inline-block";
        });
    });
}


// 🔥 INICIAR
verificarNovosTempoReal();