const questions = [
  { id: 1, pregunta: "¿Cuál es el grado del polinomio $P(x)= -2x^3 + 5x^5 - x + 2$?", opciones: ["3", "5", "-2", "2"], correcta: 1, retro: "El término de mayor exponente es $5x^5$." },
  { id: 2, pregunta: "Dado el polinomio $Q(x)= 4x^2 - 7$, ¿cuál es su término independiente?", opciones: ["4", "0", "-7", "2"], correcta: 2, retro: "El término independiente es -7." },
  { id: 3, pregunta: "¿Cuál es el coeficiente principal de $P(x)= x - 3x^2 + 7$?", opciones: ["1", "7", "-3", "2"], correcta: 2, retro: "El coeficiente del término de mayor grado es -3." },
  { id: 4, pregunta: "Un polinomio es mónico si su coeficiente principal es:", opciones: ["0", "1", "-1", "Grado"], correcta: 1, retro: "Mónico significa coeficiente principal 1." },
  { id: 5, pregunta: "¿Cómo se llama el polinomio de exactamente tres términos?", opciones: ["Binomio", "Trinomio", "Cuatrinomio", "Monomio"], correcta: 1, retro: "Se llama trinomio." },
  { id: 6, pregunta: "¿Cuál es el grado del polinomio constante $P(x)=5$?", opciones: ["1", "0", "5", "No tiene"], correcta: 1, retro: "Grado 0." },
  { id: 7, pregunta: "El polinomio con todos sus coeficientes iguales a cero es:", opciones: ["Unidad", "Nulo", "Vacío", "Constante"], correcta: 1, retro: "Es el polinomio nulo." },
  { id: 8, pregunta: "En $5x^4$, el número 5 es el:", opciones: ["Exponente", "Grado", "Coeficiente", "Variable"], correcta: 2, retro: "Es el coeficiente." },
  { id: 9, pregunta: "¿Cuál es el grado del polinomio nulo?", opciones: ["0", "1", "No definido", "Infinito"], correcta: 2, retro: "No está definido." },
  { id: 10, pregunta: "El opuesto de $P(x)= -x^2 + 4x - 5$ es:", opciones: ["$x^2 - 4x + 5$", "$x^2 + 4x - 5$", "$-x^2 - 4x + 5$", "$x^2 - 4x - 5$"], correcta: 0, retro: "Se cambian todos los signos." }
];

let studentName = localStorage.getItem("quiz_student_name") || "";
let score = parseInt(localStorage.getItem("quiz_score")) || 0;
let selections = JSON.parse(localStorage.getItem("quiz_selections")) || {};
const answered = new Set(Object.keys(selections).map(Number));

function startQuiz() {
    const nameInput = document.getElementById("student-name").value.trim();
    if (nameInput === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }
    studentName = nameInput;
    localStorage.setItem("quiz_student_name", studentName);
    showQuiz();
}

function showQuiz() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    document.getElementById("display-name").textContent = studentName;
    renderQuestions();
    updateScoreUI();
}

function renderQuestions() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    questions.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "question";
        div.id = `q${index}`;

        // Restaurar colores si ya se respondió
        if (answered.has(index)) {
            div.classList.add(selections[index] === item.correcta ? "correct" : "incorrect");
        }

        let opts = "";
        item.opciones.forEach((o, i) => {
            const isChecked = answered.has(index) && selections[index] === i ? "checked" : "";
            const isDisabled = answered.has(index) ? "disabled" : "";
            opts += `
            <label style="display: block; margin: 8px 0;">
                <input type="radio" name="q${index}" value="${i}" onclick="checkAnswer(${index}, ${i})" ${isChecked} ${isDisabled}> ${o}
            </label>`;
        });

        div.innerHTML = `<strong>${index + 1}. ${item.pregunta}</strong><div>${opts}</div>
        <div class="feedback" id="feed${index}" style="${answered.has(index) ? 'display:block' : ''}">
            ${answered.has(index) ? (selections[index] === item.correcta ? "✔ Correcto" : "✖ Incorrecto") : ""}
        </div>`;
        container.appendChild(div);
    });
    if (window.MathJax) MathJax.typeset();
}

function checkAnswer(qIdx, sel) {
    if (answered.has(qIdx)) return;
    selections[qIdx] = sel;
    answered.add(qIdx);
    
    if (sel === questions[qIdx].correcta) score++;
    
    localStorage.setItem("quiz_score", score);
    localStorage.setItem("quiz_selections", JSON.stringify(selections));
    renderQuestions();
    updateScoreUI();
}

function updateScoreUI() {
    document.getElementById("score").textContent = score;
}

function finalizarExamen() {
    if (answered.size < questions.length) {
        if (!confirm("No has terminado todas las preguntas. ¿Deseas finalizar?")) return;
    }

    // Crear contenido del archivo TXT
    let contenido = `RESULTADO DEL EXAMEN\n`;
    contenido += `Alumno: ${studentName}\n`;
    contenido += `Puntaje Final: ${score} de ${questions.length}\n`;
    contenido += `---------------------------\n`;
    
    questions.forEach((q, i) => {
        const userResp = selections[i] !== undefined ? q.opciones[selections[i]] : "No respondida";
        const estado = selections[i] === q.correcta ? "CORRECTO" : "INCORRECTO";
        contenido += `Pregunta ${i+1}: ${estado} (Elegiste: ${userResp})\n`;
    });

    // Generar descarga del archivo
    const blob = new Blob([contenido], { type: 'text/plain' });
    const a = document.createElement('a');
    a.download = `Resultado_${studentName.replace(/\s+/g, '_')}.txt`;
    a.href = window.URL.createObjectURL(blob);
    a.click();

    alert("Examen finalizado. Se ha descargado tu reporte.");
    localStorage.clear();
    location.reload();
}

// Auto-cargar si ya puso su nombre
if (studentName) showQuiz();