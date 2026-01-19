const questions = [
  { id: 1, pregunta: "¿Cuál es el grado del polinomio $P(x) = -2x^3 + 5x^5 - x + 2$?", opciones: ["3", "5", "-2", "2"], correcta: 1, retro: "El grado es el mayor exponente de la variable, en este caso 5." },

  { id: 2, pregunta: "Dado $Q(x) = 4x^2 - 7$, ¿cuál es su término independiente?", opciones: ["4", "0", "-7", "2"], correcta: 2, retro: "Es el término que no tiene variable: -7." },

  { id: 3, pregunta: "¿Cuál es el coeficiente principal de $P(x) = x - 3x^2 + 7$?", opciones: ["1", "7", "-3", "2"], correcta: 2, retro: "Es el número que acompaña a la $x$ de mayor grado ($x^2$), es decir, -3." },

  { id: 4, pregunta: "Un polinomio es mónico si:", opciones: ["Todas sus raices son 1", "Su coeficiente principal es 1", "Su termino independiente es 1", "Tiene un solo termino"], correcta: 1, retro: "Por definición, un polinomio mónico tiene coeficiente principal igual a 1." },

  { id: 5, pregunta: "Si P(2)=0, entonces podemos asegurar que", opciones: ["P(x) es divisible por (x-2)", "2 es el termino independiente", "El resto de dividir por (x-2) es 2", "P(x) es divisible por (x+2)"], correcta: 0, retro: "Tres términos definen a un trinomio." },

  { id: 6, pregunta: "¿Cuál es el grado de $P(x) = 5$?", opciones: ["1", "0", "5", "No tiene"], correcta: 1, retro: "Un número constante distinto de cero tiene grado 0." },

  { id: 7, pregunta: "¿Que nombre recibe el Polinomio que tiene todos sus coeficientes iguales a cero?", opciones: ["Polinomio Unidad", "Polinomio Nulo", "Polinomio Vacío", "Polinomio Constante"], correcta: 1, retro: "Se define como polinomio nulo." },

  { id: 8, pregunta: "En $5x^4$, el número 5 es el:", opciones: ["Exponente", "Grado", "Coeficiente", "Variable"], correcta: 2, retro: "El coeficiente es el número que multiplica a la variable." },

  { id: 9, pregunta: "¿Cuál es el grado del polinomio nulo?", opciones: ["0", "1", "No definido", "Infinito"], correcta: 2, retro: "Por convención, el grado del polinomio nulo no está definido." },

  { id: 10, pregunta: "Opuesto de $P(x) = -x^2 + 4x - 5$:", opciones: ["$x^2 - 4x + 5$", "$x^2 + 4x - 5$", "$-x^2 - 4x + 5$", "$x^2 - 4x - 5$"], correcta: 0, retro: "Se obtiene cambiando el signo de cada uno de los términos." },

  { id: 11, pregunta: "Resultado de: $3x^2 \\cdot (-2x^4)$", opciones: ["$6x^6$", "$-6x^8$", "$-6x^6$", "$x^6$"], correcta: 2, retro: "Se multiplican coeficientes ($3 \\cdot -2 = -6$) y se suman exponentes ($2 + 4 = 6$)." },


  { id: 12, pregunta: "El resultado de la Suma: $(x^2 - 3x + 5) + (2x^2 + 3x - 1)$ es", opciones: ["$3x^2 + 4$", "$3x^2 - 6x + 4$", "$2x^2 + 4$", "$3x^4 + 4$"], correcta: 0, retro: "Agrupando términos: $3x^2 + 0x + 4$." },

  { id: 13, pregunta: "Suma de monomios: $5x^3 + (-8x^3)$", opciones: ["$-3x^3$", "$13x^3$", "$-3x^6$", "$3x^3$"], correcta: 0, retro: "Se restan los coeficientes y se mantiene la misma parte literal." },

  { id: 14, pregunta: " ¿Que Grado tiene el producto de un Polinomio de Grado 2 por un Polinomio de Grado 3?", opciones: ["6", "5", "3", "2"], correcta: 1, retro: "El grado del producto es la suma de los grados: $2 + 3 = 5$." },

  { id: 15, pregunta: "Resultado de $(-4x^2)^3$", opciones: ["$-64x^6$", "$-12x^5$", "$64x^6$", "$-64x^5$"], correcta: 0, retro: "$(-4)^3 = -64$ y $(x^2)^3 = x^6$." },

  { id: 16, pregunta: "Si $P(x)$ y $Q(x)$ son de grado 5, grado máx de la suma:", opciones: ["10", "5", "25", "0"], correcta: 1, retro: "El grado de la suma no puede ser mayor al grado de los polinomios sumandos." },

  { id: 17, pregunta: "La División entre los monomios $(-10x^5) : (5x^5)$ es:", opciones: ["-2", "-2x", "2", "$-5x^0$"], correcta: 0, retro: "$-10/5 = -2$ y $x^5/x^5 = 1$." },

  { id: 18, pregunta: "Resultado: $(3x^2 - 1) + (-x^2 + 5x - 2)$", opciones: ["$2x^2 + 5x - 3$", "$4x^2 + 5x + 3$", "$2x^2 + 5x + 1$", "$3x^2 + 5x - 3$"], correcta: 0, retro: "Sumando términos semejantes: $(3-1)x^2 + 5x + (-1-2) = 2x^2 + 5x - 3$." },

  { id: 19, pregunta: "En el producto de polinomios los grados se:", opciones: ["Multiplican", "Suman", "Comparan", "Restan"], correcta: 1, retro: "Propiedad de potencias de igual base: se suman los exponentes." },

  { id: 20, pregunta: "Al multiplicar un Monomio de grado 0 por un Polinomio de grado 4 el resultado tiene grado:", opciones: ["0", "4", "5", "Indefinido"], correcta: 1, retro: "Grado $0 + 4 = 4$." },

  { id: 21, pregunta: "Resultado de $2x(3x^2 - 4)$:", opciones: ["$6x^3 - 8x$", "$6x^2 - 8x$", "$6x^3 - 4$", "$5x^3 - 8x$"], correcta: 0, retro: "Se aplica propiedad distributiva: $6x^3 - 8x$." },

  { id: 22, pregunta: "Resultado de $(x^2)^4$:", opciones: ["$x^6$", "$x^8$", "$x^{16}$", "$4x^2$"], correcta: 1, retro: "Potencia de potencia: se multiplican los exponentes ($2 \\cdot 4 = 8$)." },

  { id: 23, pregunta: "¿Cual es la Propiedad utilizada para multiplicar un monomio por un polinomio?", opciones: ["Asociativa", "Distributiva", "Conmutativa", "Pitágoras"], correcta: 1, retro: "Es la propiedad distributiva del producto respecto de la suma/resta." },

  { id: 24, pregunta: "Un Polinomio mas su Opuesto es igual a:", opciones: ["El mismo Polinomio", "El doble del Polinomio", "Polinomio Nulo", "1"], correcta: 2, retro: "Todo elemento sumado a su opuesto da el elemento neutro (cero)." },

  { id: 25, pregunta:  "Restar Q(x) de P(x) es equivalente a:", opciones: ["Multiplicar P(x) por -1 y sumar Q(x)", "Restar los coeficientes principales unicamente", "Sumar P(x) y Q(x) normalmente", "Sumar a P(x) el opuesto de Q(x)"], correcta: 3, retro: "Restar es equivalente a sumar el opuesto." },


  { id: 26, pregunta: "El Resto de la siguiente division $(x^2 - 5x + 6) : (x - 2)$ es:", opciones: ["6", "0", "20", "-8"], correcta: 1, retro: "Usando el teorema del resto: $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$." },

  { id: 27, pregunta: "Para aplicar la Regla de Ruffini en la division P(x) : $(x + 3)$ ¿que valor se debe colocar en el angulo izquierdo del esquema?:", opciones: ["3", "-3", "1", "0"], correcta: 1, retro: "Se utiliza el valor que anula al divisor, es decir, -3." },

  { id: 28, pregunta: "En la Regla de Ruffini, el ultimo numero obtenido en la fila inferior representa:", opciones: ["El Coeficiente Principal del cociente", "El Resto de la division", "El Grado del cociente", "El termino independiente del Cociente"], correcta: 1, retro: "La regla de Ruffini separa el resto en la última posición." },

  { id: 29, pregunta: "¿Que condicion debe cumplir el divisor para aplicar La Regla de Ruffini?", opciones: ["$ax^n + b$", "$x \\pm a$", "Debe tener mayor grado que el dividendo", "Puede ser cualquier polinomio"], correcta: 1, retro: "Solo para divisores de primer grado con coeficiente principal 1." },

  { id: 30, pregunta: "El Cociente de $(x^2 - 9) : (x + 3)$ es:", opciones: ["$x + 3$", "$x - 3$", "$x - 9$", "$x^2$"], correcta: 1, retro: "Por diferencia de cuadrados: $(x+3)(x-3)/(x+3) = x-3$." },

  { id: 31, pregunta: "Si dividimos P(x) por Q(x) y el resto es cero, decimos que:", opciones: ["P(x) es multiplo de Q(x)", "P(x) no es divisible por Q(x)", "El grado de P(x) es menor que el de Q(x)", "Q(x) es el dividendo"], correcta: 0, retro: "Divisible significa que el resto de la división es cero." },

  { id: 32, pregunta: "En la division $(x^4 - 1) : (x - 1)$ ¿Cual es el Resto utilizando el Teorema del Resto?:", opciones: ["1", "-1", "0", "2"], correcta: 2, retro: "Teorema del resto: $1^4 - 1 = 0$." },

  { id: 33, pregunta: "Al aplicar la regla de Ruffini en $(2x^3 - 5x + 1) : (x - 2)$, ¿que coefiiente de debe colocar para el término de grado 2?", opciones: ["-5", "0", "2", "1"], correcta: 1, retro: "Como el término $x^2$ no está presente, su coeficiente es 0." },

  { id: 34, pregunta: "Resto de $(x^{100} - 1) : (x + 1)$:", opciones: ["0", "-2", "100", "-1"], correcta: 0, retro: "Teorema del resto: $(-1)^{100} - 1 = 1 - 1 = 0$." },

  { id: 35, pregunta: "¿Cual es el Valor $k$ para que $P(x) = x^2 - kx + 4$ sea divisible por $(x - 2)$:", opciones: ["4", "2", "0", "8"], correcta: 0, retro: "$2^2 - k(2) + 4 = 0 \\Rightarrow 8 = 2k \\Rightarrow k = 4$." },

  { id: 36, pregunta: "El Resto de $(2x^2 - 4) : (x - 2)$ es:", opciones: ["0", "4", "-4", "8"], correcta: 1, retro: "Teorema del resto: $2(2)^2 - 4 = 8 - 4 = 4$." },

  { id: 37, pregunta: "Coeficientes de $x^3 - 1$ para aplicar la Regla de Ruffini:", opciones: ["1, -1", "1, 0, 0, -1", "1, 1, 1, 1", "3, -1"], correcta: 1, retro: "Se deben completar todos los términos: $1x^3, 0x^2, 0x, -1$." },

  { id: 38, pregunta: "Grado cociente: (Grado 6) : (Grado 2):", opciones: ["3", "4", "8", "12"], correcta: 1, retro: "En división se restan los grados: $6 - 2 = 4$." },

  { id: 39, pregunta: "Valor que anula a $(x + 4)$:", opciones: ["4", "-4", "0", "1"], correcta: 1, retro: "$-4 + 4 = 0$." },

  { id: 40, pregunta: "$P(x)$ es divisible por $(x - a)$ si:", opciones: ["Resto=1", "$P(a)=0$", "Grado P(x) > 1", "a=0"], correcta: 1, retro: "Según el teorema del resto, $P(a)$ debe ser 0." },

  { id: 41, pregunta: "Desarrollo de $(2x - 3)^2$:", opciones: ["$4x^2 - 9$", "$4x^2 - 12x + 9$", "$4x^2 + 12x + 9$", "$2x^2 - 6x + 9$"], correcta: 1, retro: "Cuadrado de un binomio: $(2x)^2 - 2(2x)(3) + 3^2$." },

  { id: 42, pregunta: "Desarrollo de $(x + 5)(x - 5)$:", opciones: ["$x^2 + 25$", "$x^2 - 10x + 25$", "$x^2 - 25$", "$2x - 25$"], correcta: 2, retro: "Diferencia de cuadrados: $x^2 - 5^2$." },

  { id: 43, pregunta: "Término independiente de $(x - 2)^3$:", opciones: ["-2", "8", "-8", "0"], correcta: 2, retro: "Calculando $(-2)^3 = -8$." },

  { id: 44, pregunta: "Raíces reales de $x^3 - x$:", opciones: ["0, 1, -1", "Solo 0", "1, -1", "No tiene"], correcta: 0, retro: "Factorizando: $x(x^2 - 1) = x(x-1)(x+1)$." },

  { id: 45, pregunta: "Si $P(2) = 0$, $P(x)$ es divisible por:", opciones: ["$(x + 2)$", "$(x - 2)$", "2", "$(x^2 - 4)$"], correcta: 1, retro: "Si 2 es raíz, $(x - 2)$ es factor." },

  { id: 46, pregunta: "Desarrollo de $(a + b)^3$:", opciones: ["$a^3 + b^3$", "$a^3 + 3a^2b + 3ab^2 + b^3$", "$a^3 + 2ab + b^3$", "$3a + 3b$"], correcta: 1, retro: "Es el desarrollo del cubo de un binomio." },

  { id: 47, pregunta: "Resultado de $(x+1)^2 - (x-1)^2$:", opciones: ["0", "4x", "$2x^2 + 2$", "2"], correcta: 1, retro: "$(x^2 + 2x + 1) - (x^2 - 2x + 1) = 4x$." },

  { id: 48, pregunta: "Un polinomio de Grado 3 puede tener como máximo:", opciones: ["2 raíces", "3 raíces", "4 raíces", "1 raíz"], correcta: 1, retro: "Un polinomio tiene tantas raíces como su grado indica (contando multiplicidad)." },

  { id: 49, pregunta: "Valor numérico de $2x^2 - 3x + 1$ para $x = -1$:", opciones: ["0", "6", "-4", "2"], correcta: 1, retro: "$2(-1)^2 - 3(-1) + 1 = 2 + 3 + 1 = 6$." },

  { id: 50, pregunta: "Cociente de $(6x^4 - 2x^2) : (2x^2)$:", opciones: ["$3x^2 - 1$", "$3x^2$", "$3x^2 - x$", "$4x^2$"], correcta: 0, retro: "Dividiendo cada término: $3x^2 - 1$." }
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