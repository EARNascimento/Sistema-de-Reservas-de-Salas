// ---------------------------------------------
// Dados mockados (em memória, sem backend real)
// ---------------------------------------------
const salas = [
  { id: 1, nome: "Sala 101", capacidade: 4, status: "livre", horarioLivre: "Agora" },
  { id: 2, nome: "Sala 102", capacidade: 6, status: "ocupada", horarioLivre: "14h30" },
  { id: 3, nome: "Sala 103 — Auditório", capacidade: 30, status: "livre", horarioLivre: "Agora" },
  { id: 4, nome: "Sala 201", capacidade: 8, status: "livre", horarioLivre: "Agora" },
  { id: 5, nome: "Sala 202", capacidade: 4, status: "ocupada", horarioLivre: "16h00" },
  { id: 6, nome: "Sala 203 — Laboratório", capacidade: 15, status: "ocupada", horarioLivre: "17h15" },
  { id: 7, nome: "Sala 301", capacidade: 4, status: "livre", horarioLivre: "Agora" },
  { id: 8, nome: "Sala 302", capacidade: 12, status: "livre", horarioLivre: "Agora" },
];

const listaEl = document.getElementById("lista-salas");
const filtroEl = document.getElementById("filtro-capacidade");
const contadorEl = document.getElementById("contador-resultados");
const emptyStateEl = document.getElementById("empty-state");

function renderSalas(listaFiltrada) {
  listaEl.innerHTML = "";

  listaFiltrada.forEach((sala) => {
    const row = document.createElement("div");
    row.className = "room-row";
    row.innerHTML = `
      <span class="room-name">${sala.nome}</span>
      <span class="room-cap">${sala.capacidade} pessoas</span>
      <span class="room-time">${sala.horarioLivre}</span>
      <span class="status-pill ${sala.status}">${sala.status === "livre" ? "Livre" : "Ocupada"}</span>
    `;
    listaEl.appendChild(row);
  });

  const total = listaFiltrada.length;
  contadorEl.textContent = `${total} ${total === 1 ? "sala encontrada" : "salas encontradas"}`;
  emptyStateEl.hidden = total !== 0;
}

function aplicarFiltro() {
  const capacidadeMinima = Number(filtroEl.value);
  const filtradas = salas.filter((sala) => sala.capacidade >= capacidadeMinima);
  renderSalas(filtradas);
}

filtroEl.addEventListener("change", aplicarFiltro);

// Renderização inicial
renderSalas(salas);
