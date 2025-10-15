import { db } from "./firebaseConfig.js";
import {
  collection,
  getDocs,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const vagasContainer = document.getElementById("vagasContainer");

// Função principal
async function carregarVagas() {
  const vagasSnapshot = await getDocs(collection(db, "vagas"));
  vagasContainer.innerHTML = ""; // limpa antes de carregar

  vagasSnapshot.forEach((vagaDoc) => {
    const vagaData = vagaDoc.data();
    const vagaId = vagaDoc.id;
    const status = vagaData.status;

    // Cria o elemento da vaga
    const vaga = document.createElement("li");
    vaga.classList.add("vaga");
    vaga.textContent = vagaId; // ex: "vaga1"

    // Define cor de acordo com status
    switch (status) {
      case "livre":
        vaga.style.backgroundColor = "green";
        break;
      case "reservada":
        vaga.style.backgroundColor = "yellow";
        break;
      case "ocupada":
        vaga.style.backgroundColor = "red";
        break;
    }

    // Clique para alternar o status
    vaga.addEventListener("click", async () => {
      let novoStatus;

      if (vaga.style.backgroundColor === "yellow") {
        vaga.style.backgroundColor = "red";
        novoStatus = "ocupada";
      } else if (vaga.style.backgroundColor === "red") {
        vaga.style.backgroundColor = "green";
        novoStatus = "livre";
      } else {
        vaga.style.backgroundColor = "yellow";
        novoStatus = "reservada";
      }

      await setDoc(doc(db, "vagas", vagaId), { status: novoStatus });
      console.log(`Vaga ${vagaId} atualizada para ${novoStatus}`);
    });

    // Adiciona a vaga ao container
    vagasContainer.appendChild(vaga);
  });
}

// Chama a função ao iniciar
carregarVagas();
