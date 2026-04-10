// ========== IMPORTS FIREBASE ==========
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// ========== CONFIG FIREBASE ==========
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


// ========== LISTA DE ITENS ==========
const itens = [
    "pagina1", "pagina2", "pagina3", "pagina4", "pagina5",
    "mes1", "mes2", "mes3", "mes4", "surpresaFinal", "cartaSurpresa"
];


// ========== MARCAR COMO VISTO ==========
async function marcarVisto(id) {
    await setDoc(doc(db, "conteudos", id), { visto: true }, { merge: true });
}


// ========== IR PARA PÁGINA ==========
async function irParaPagina(id, url) {
    try {
        await marcarVisto(id);
    } catch (e) {
        console.error("Erro ao marcar visto:", e);
    }
    window.location.href = url;
}

window.irParaPagina = irParaPagina;


// ========== BADGES EM TEMPO REAL ==========
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


// ========== CONTADOR DE TEMPO JUNTOS ==========
function iniciarContador() {
    const inicio = new Date("2025-11-28T00:00:00");

    function atualizar() {
        const agora = new Date();
        const diff = agora - inicio;

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);

        const el = (id) => document.getElementById(id);
        if (el("contador-dias")) el("contador-dias").textContent = dias;
        if (el("contador-horas")) el("contador-horas").textContent = String(horas).padStart(2, "0");
        if (el("contador-minutos")) el("contador-minutos").textContent = String(minutos).padStart(2, "0");
        if (el("contador-segundos")) el("contador-segundos").textContent = String(segundos).padStart(2, "0");
    }

    atualizar();
    setInterval(atualizar, 1000);
}


// ========== ANIMAÇÕES DE ENTRADA (SCROLL) ==========
function iniciarAnimacoesScroll() {
    const elementos = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elementos.forEach((el) => observer.observe(el));
}


// ========== LIGHTBOX DAS FOTOS ==========
function iniciarLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const fechar = document.getElementById("lightbox-fechar");

    if (!lightbox || !lightboxImg) return;

    document.querySelectorAll(".fotos img").forEach((img) => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.add("ativo");
        });
    });

    fechar.addEventListener("click", () => lightbox.classList.remove("ativo"));

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("ativo");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") lightbox.classList.remove("ativo");
    });
}


// ========== INICIAR TUDO ==========
document.addEventListener("DOMContentLoaded", () => {
    verificarNovosTempoReal();
    iniciarContador();
    iniciarAnimacoesScroll();
    iniciarLightbox();
});