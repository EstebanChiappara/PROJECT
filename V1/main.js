const questions = [
  {
    "id": 1,
    "pregunta": "¿Cuál es el grado del polinomio $P(x)= -2x^3 + 5x^5 - x + 2$?",
    "opciones": ["3", "5", "-2", "2"],
    "correcta": 1,
    "retro": "El término de mayor exponente es $5x^5$, por lo tanto el grado es 5."
  },
  {
    "id": 2,
    "pregunta": "Dado el polinomio $Q(x)= 4x^2 - 7$, ¿cuál es su término independiente?",
    "opciones": ["4", "0", "-7", "2"],
    "correcta": 2,
    "retro": "El término independiente es el que no lleva $x$, en este caso $-7$."
  },
  {
    "id": 3,
    "pregunta": "¿Cuál es el coeficiente principal de $P(x)= x - 3x^2 + 7$?",
    "opciones": ["1", "7", "-3", "2"],
    "correcta": 2,
    "retro": "El término de mayor grado es $-3x^2$, su coeficiente es $-3$."
  },
  {
    "id": 4,
    "pregunta": "Un polinomio es mónico si su coeficiente principal es:",
    "opciones": ["0", "1", "-1", "Grado"],
    "correcta": 1,
    "retro": "Por definición un polinomio es mónico si su coeficiente principal es 1."
  },
  {
    "id": 5,
    "pregunta": "¿Cómo se llama el polinomio de exactamente tres términos?",
    "opciones": ["Binomio", "Trinomio", "Cuatrinomio", "Monomio"],
    "correcta": 1,
    "retro": "Un polinomio de 3 términos recibe el nombre de trinomio."
  },
  {
    "id": 6,
    "pregunta": "¿Cuál es el grado del polinomio constante $P(x)=5$?",
    "opciones": ["1", "0", "5", "No tiene"],
    "correcta": 1,
    "retro": "Los polinomios constantes tienen grado 0 (excepto el nulo)."
  },
  {
    "id": 7,
    "pregunta": "El polinomio con todos sus coeficientes iguales a cero es:",
    "opciones": ["Unidad", "Nulo", "Vacío", "Constante"],
    "correcta": 1,
    "retro": "Se denomina polinomio nulo cuando todos los coeficientes son cero."
  },
  {
    "id": 8,
    "pregunta": "En $5x^4$, el número 5 es el:",
    "opciones": ["Exponente", "Grado", "Coeficiente", "Variable"],
    "correcta": 2,
    "retro": "El coeficiente es el número que multiplica a la parte literal."
  },
  {
    "id": 9,
    "pregunta": "¿Cuál es el grado del polinomio nulo?",
    "opciones": ["0", "1", "No definido", "Infinito"],
    "correcta": 2,
    "retro": "El polinomio nulo no tiene grado definido por convención."
  },
  {
    "id": 10,
    "pregunta": "El opuesto de $P(x)= -x^2 + 4x - 5$ es:",
    "opciones": ["$x^2 - 4x + 5$", "$x^2 + 4x - 5$", "$-x^2 - 4x + 5$", "$x^2 - 4x - 5$"],
    "correcta": 0,
    "retro": "El opuesto cambia el signo de cada término: $-(-x^2 + 4x - 5)= x^2 - 4x + 5$."
  },
  {
    "id": 11,
    "pregunta": "El opuesto de $P(x)= -x^3 + 7x - 7$ es:",
    "opciones": ["$x^3 - 7x + 7$", "$-x^3 + 7x - 7$", "$x^3 + 7x - 7$", "$x^3 - 7x - 7$"],
    "correcta": 0,
    "retro": "El opuesto cambia el signo de cada término: $-(-x^3 + 7x - 7) = x^3 - 7x + 7$."
  }
];

// REINICIO SI EL EXAMEN TERMINÓ COMPLETAMENTE (opcional, para permitir reintentos al cerrar/abrir)
if (localStorage.getItem("quiz_finished") === "true") {
    localStorage.clear();
}

// CARGAR ESTADO: Ahora guardamos un objeto { preguntaIndex: opcionSeleccionada }
let score = parseInt(localStorage.getItem("quiz_score")) || 0;
const selections = JSON.parse(localStorage.getItem("quiz_selections")) || {};
const answered = new Set(Object.keys(selections).map(Number));

const container = document.getElementById("quiz-container");

function updateScoreUI() {
    document.getElementById("score").textContent = score;
}

// RENDERIZADO
questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.id = `q${index}`;

    // APLICAR COLORES AL RECARGAR
    if (answered.has(index)) {
        const userSel = selections[index];
        if (userSel === item.correcta) {
            div.classList.add("correct");
        } else {
            div.classList.add("incorrect");
        }
    }

    let opts = "";
    item.opciones.forEach((o, i) => {
        const isSelected = answered.has(index) && selections[index] === i;
        const disabledAttr = answered.has(index) ? "disabled" : "";
        const checkedAttr = isSelected ? "checked" : "";
        
        opts += `
        <label style="display: block; margin: 8px 0; cursor: pointer;">
          <input type="radio" name="q${index}" value="${i}" class="input-q${index}" 
          onclick="checkAnswer(${index}, ${i})" ${disabledAttr} ${checkedAttr}>
          ${o}
        </label>`;
    });

    const feedbackText = answered.has(index) 
        ? (selections[index] === item.correcta ? "✔ Correcto. " + item.retro : "✖ Incorrecto. La respuesta era: " + item.opciones[item.correcta])
        : item.retro;

    div.innerHTML = `
    <strong>${index + 1}. ${item.pregunta}</strong>
    <div>${opts}</div>
    <div class="feedback" id="feed${index}" style="${answered.has(index) ? 'display:block; color:' + (selections[index] === item.correcta ? '#2ecc71' : '#e74c3c') : ''}">${feedbackText}</div>
    `;

    container.appendChild(div);
});

updateScoreUI();
window.questions = questions;

if (window.MathJax) {
    MathJax.typeset();
}

function checkAnswer(qIdx, sel) {
    if (answered.has(qIdx)) return;

    const div = document.getElementById(`q${qIdx}`);
    const feed = document.getElementById(`feed${qIdx}`);
    const currentQuestion = window.questions[qIdx];
    
    document.querySelectorAll(`.input-q${qIdx}`).forEach(input => input.disabled = true);

    // Guardar selección
    selections[qIdx] = sel;
    answered.add(qIdx);

    if (sel === currentQuestion.correcta) {
        score++;
        div.classList.add("correct");
        feed.innerHTML = "✔ Correcto<br>" + currentQuestion.retro;
        feed.style.color = "#2ecc71";
    } else {
        div.classList.add("incorrect");
        feed.innerHTML = "✖ Incorrecto<br>La respuesta correcta era: " + currentQuestion.opciones[currentQuestion.correcta];
        feed.style.color = "#e74c3c";
    }

    feed.style.display = "block";
    
    // PERSISTENCIA COMPLETA
    localStorage.setItem("quiz_score", score);
    localStorage.setItem("quiz_selections", JSON.stringify(selections));
    
    updateScoreUI();

    if (window.MathJax) {
        MathJax.typeset();
    }
}

function finalizarExamen() {
    if (answered.size < questions.length) {
        if (!confirm("No has respondido todo. ¿Finalizar?")) return;
    }
    localStorage.setItem("quiz_finished", "true");
    alert(`Examen finalizado. Puntaje: ${score} / ${questions.length}`);
    location.reload(); 
}