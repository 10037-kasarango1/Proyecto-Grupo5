const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;


const questions = [
    {
        "question": "¿Cuál es el país sede de la FIFA?",
        "options": ["Francia", "Suiza", "Italia", "Alemania"],
        "answer": "Suiza"
    },
    {
        "question": "¿Qué país es conocido por su plato típico 'sushi'?",
        "options": ["Japón", "Argentina", "España", "Estados Unidos"],
        "answer": "Japón"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la UEFA?",
        "options": ["Alemania", "Brasil", "Francia", "España"],
        "answer": "Brasil"
    },
    {
        "question": "¿Cuál es la moneda oficial de Australia?",
        "options": ["Dólar australiano", "Euro", "Peso argentino", "Yen japonés"],
        "answer": "Dólar australiano"
    },
    {
        "question": "¿Cuál es la bandera de Canadá?",
        "options": ["Verde con una hoja de arce roja en el centro", "Roja con un círculo blanco en el centro", "Azul con una cruz roja en el centro", "Amarilla con una estrella negra en el centro"],
        "answer": "Verde con una hoja de arce roja en el centro"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["México", "Nigeria", "Australia", "Italia"],
        "answer": "Nigeria"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Chile", "Nueva Zelanda", "Colombia", "Portugal"],
        "answer": "Nueva Zelanda"
    },
    {
        "question": "¿Cuál es el escudo de armas de Alemania?",
        "options": ["Un águila bicéfala", "Un león rampante", "Una flor de lis", "Un sol radiante"],
        "answer": "Un águila bicéfala"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["Honduras", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Brasil?",
        "options": ["Real brasileño", "Peso mexicano", "Libra esterlina", "Dólar estadounidense"],
        "answer": "Real brasileño"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Canadá", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Costa Rica", "Alemania", "Estados Unidos", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de Francia?",
        "options": ["Azul, blanco y rojo en franjas horizontales", "Amarilla con una estrella azul en el centro", "Roja con un águila negra en el centro", "Verde con una hoja de arce roja en el centro"],
        "answer": "Azul, blanco y rojo en franjas horizontales"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Argentina", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Italia?",
        "options": ["Euro", "Dólar estadounidense", "Libra esterlina", "Yen japonés"],
        "answer": "Euro"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Colombia", "Australia", "Chile", "Portugal"],
        "answer": "Australia"
    },
    {
        "question": "¿Cuál es el escudo de armas de México?",
        "options": ["Un águila bicéfala", "Un león rampante", "Una serpiente en un nopal", "Un sol radiante"],
        "answer": "Una serpiente en un nopal"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["México", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Colombia?",
        "options": ["Peso colombiano", "Dólar estadounidense", "Euro", "Yen japonés"],
        "answer": "Peso colombiano"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Estados Unidos", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Panamá", "Alemania", "Costa Rica", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de España?",
        "options": ["Roja con un círculo blanco en el centro", "Amarilla con una estrella azul en el centro", "Verde con una hoja de arce roja en el centro", "Roja y amarilla con un sol en el centro"],
        "answer": "Roja y amarilla con un sol en el centro"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Francia", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Francia?",
        "options": ["Euro", "Dólar estadounidense", "Franco suizo", "Libra esterlina"],
        "answer": "Euro"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Colombia", "Australia", "Chile", "Portugal"],
        "answer": "Australia"
    },
    {
        "question": "¿Cuál es el escudo de armas de Argentina?",
        "options": ["Un águila bicéfala", "Un león rampante", "Un sol radiante", "Un cóndor"],
        "answer": "Un sol radiante"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["Honduras", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Ecuador?",
        "options": ["Dólar estadounidense", "Peso ecuatoriano", "Euro", "Yen japonés"],
        "answer": "Dólar estadounidense"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Canadá", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Costa Rica", "Alemania", "Estados Unidos", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de México?",
        "options": ["Roja con un círculo blanco en el centro", "Amarilla con una estrella azul en el centro", "Verde con una hoja de arce roja en el centro", "Verde, blanco y rojo en franjas verticales"],
        "answer": "Verde, blanco y rojo en franjas verticales"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Argentina", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Colombia?",
        "options": ["Peso colombiano", "Dólar estadounidense", "Euro", "Yen japonés"],
        "answer": "Peso colombiano"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Chile", "Nueva Zelanda", "Colombia", "Portugal"],
        "answer": "Nueva Zelanda"
    },
    {
        "question": "¿Cuál es el escudo de armas de Chile?",
        "options": ["Un águila bicéfala", "Un león rampante", "Un cóndor", "Un sol radiante"],
        "answer": "Un cóndor"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["México", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Chile?",
        "options": ["Peso chileno", "Dólar estadounidense", "Euro", "Yen japonés"],
        "answer": "Peso chileno"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Estados Unidos", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Panamá", "Alemania", "Costa Rica", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de Colombia?",
        "options": ["Amarilla con una estrella azul en el centro", "Roja con un círculo blanco en el centro", "Verde con una hoja de arce roja en el centro", "Amarilla, azul y roja en franjas horizontales"],
        "answer": "Amarilla, azul y roja en franjas horizontales"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Francia", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Francia?",
        "options": ["Euro", "Dólar estadounidense", "Franco suizo", "Libra esterlina"],
        "answer": "Euro"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Colombia", "Australia", "Chile", "Portugal"],
        "answer": "Australia"
    },
    {
        "question": "¿Cuál es el escudo de armas de Argentina?",
        "options": ["Un águila bicéfala", "Un león rampante", "Un sol radiante", "Un cóndor"],
        "answer": "Un sol radiante"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["Honduras", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Ecuador?",
        "options": ["Dólar estadounidense", "Peso ecuatoriano", "Euro", "Yen japonés"],
        "answer": "Dólar estadounidense"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Canadá", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Costa Rica", "Alemania", "Estados Unidos", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de México?",
        "options": ["Roja con un círculo blanco en el centro", "Amarilla con una estrella azul en el centro", "Verde con una hoja de arce roja en el centro", "Verde, blanco y rojo en franjas verticales"],
        "answer": "Verde, blanco y rojo en franjas verticales"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Argentina", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Colombia?",
        "options": ["Peso colombiano", "Dólar estadounidense", "Euro", "Yen japonés"],
        "answer": "Peso colombiano"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Chile", "Nueva Zelanda", "Colombia", "Portugal"],
        "answer": "Nueva Zelanda"
    },
    {
        "question": "¿Cuál es el escudo de armas de Chile?",
        "options": ["Un águila bicéfala", "Un león rampante", "Un cóndor", "Un sol radiante"],
        "answer": "Un cóndor"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["México", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Chile?",
        "options": ["Peso chileno", "Dólar estadounidense", "Euro", "Yen japonés"],
        "answer": "Peso chileno"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Estados Unidos", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Panamá", "Alemania", "Costa Rica", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de Colombia?",
        "options": ["Amarilla con una estrella azul en el centro", "Roja con un círculo blanco en el centro", "Verde con una hoja de arce roja en el centro", "Amarilla, azul y roja en franjas horizontales"],
        "answer": "Amarilla, azul y roja en franjas horizontales"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Francia", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Francia?",
        "options": ["Euro", "Dólar estadounidense", "Franco suizo", "Libra esterlina"],
        "answer": "Euro"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Colombia", "Australia", "Chile", "Portugal"],
        "answer": "Australia"
    },
    {
        "question": "¿Cuál es el escudo de armas de Argentina?",
        "options": ["Un águila bicéfala", "Un león rampante", "Un sol radiante", "Un cóndor"],
        "answer": "Un sol radiante"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["Honduras", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Ecuador?",
        "options": ["Dólar estadounidense", "Peso ecuatoriano", "Euro", "Yen japonés"],
        "answer": "Dólar estadounidense"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Canadá", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Costa Rica", "Alemania", "Estados Unidos", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de México?",
        "options": ["Roja con un círculo blanco en el centro", "Amarilla con una estrella azul en el centro", "Verde con una hoja de arce roja en el centro", "Verde, blanco y rojo en franjas verticales"],
        "answer": "Verde, blanco y rojo en franjas verticales"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Argentina", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Colombia?",
        "options": ["Peso colombiano", "Dólar estadounidense", "Euro", "Yen japonés"],
        "answer": "Peso colombiano"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Chile", "Nueva Zelanda", "Colombia", "Portugal"],
        "answer": "Nueva Zelanda"
    },
    {
        "question": "¿Cuál es el escudo de armas de Chile?",
        "options": ["Un águila bicéfala", "Un león rampante", "Un cóndor", "Un sol radiante"],
        "answer": "Un cóndor"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["México", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Chile?",
        "options": ["Peso chileno", "Dólar estadounidense", "Euro", "Yen japonés"],
        "answer": "Peso chileno"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Estados Unidos", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Panamá", "Alemania", "Costa Rica", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de Colombia?",
        "options": ["Amarilla con una estrella azul en el centro", "Roja con un círculo blanco en el centro", "Verde con una hoja de arce roja en el centro", "Amarilla, azul y roja en franjas horizontales"],
        "answer": "Amarilla, azul y roja en franjas horizontales"
    },
    {
        "question": "¿Qué país es parte de la Confederación Africana de Fútbol (CAF)?",
        "options": ["Francia", "Senegal", "España", "Suiza"],
        "answer": "Senegal"
    },
    {
        "question": "¿Cuál es la moneda oficial de Francia?",
        "options": ["Euro", "Dólar estadounidense", "Franco suizo", "Libra esterlina"],
        "answer": "Euro"
    },
    {
        "question": "¿Cuál de los siguientes países es parte de la Confederación de Fútbol de Oceanía (OFC)?",
        "options": ["Colombia", "Australia", "Chile", "Portugal"],
        "answer": "Australia"
    },
    {
        "question": "¿Cuál es el escudo de armas de Argentina?",
        "options": ["Un águila bicéfala", "Un león rampante", "Un sol radiante", "Un cóndor"],
        "answer": "Un sol radiante"
    },
    {
        "question": "¿Qué país es parte de la Confederación Asiática de Fútbol (AFC)?",
        "options": ["Honduras", "China", "Suecia", "Perú"],
        "answer": "China"
    },
    {
        "question": "¿Cuál es la moneda oficial de Ecuador?",
        "options": ["Dólar estadounidense", "Peso ecuatoriano", "Euro", "Yen japonés"],
        "answer": "Dólar estadounidense"
    },
    {
        "question": "¿Qué país es parte de la Confederación Sudamericana de Fútbol (CONMEBOL)?",
        "options": ["Canadá", "Argentina", "Nigeria", "Italia"],
        "answer": "Argentina"
    },
    {
        "question": "¿Cuál de los siguientes países NO pertenece a la CONCACAF?",
        "options": ["Costa Rica", "Alemania", "Estados Unidos", "México"],
        "answer": "Alemania"
    },
    {
        "question": "¿Cuál es la bandera de México?",
        "options": ["Roja con un círculo blanco en el centro", "Amarilla con una estrella azul en el centro", "Verde con una hoja de arce roja en el centro", "Verde, blanco y rojo en franjas verticales"],
        "answer": "Verde, blanco y rojo en franjas verticales"
    }
];


function loadQuestion(){
    if (askedCount === totalQuestion) {
        showScore();
        return;
    }

    if (questions.length === 0) {
        _result.innerHTML = `<p>Felicidades! Hiciste todas las preguntas.</p>`;
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";
        return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions.splice(randomIndex, 1)[0];

    _result.innerHTML = "";
    showQuestion(selectedQuestion);
}

function showScore() {
    _question.innerHTML = `Quiz completado! tu puntucacion es: ${correctScore} de ${totalQuestion}`;
    _options.innerHTML = "";
    _checkBtn.style.display = "none";
    _playAgainBtn.style.display = "block";
}

function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);
    _playAgainBtn.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', function(){
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

function showQuestion(data){
    _checkBtn.disabled = false;
    correctAnswer = data.answer;
    let optionsList = data.options;
    optionsList = shuffleArray(optionsList);

    _question.innerHTML = `${data.question}`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li>
        `).join('')}
    `;
    selectOption();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectOption(){
    _options.querySelectorAll('li').forEach(function(option){
        option.addEventListener('click', function(){
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
}

function checkAnswer(){
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        if(selectedAnswer === correctAnswer){
            correctScore++;
            _result.innerHTML = `<p><i class="fas fa-check"></i>Correct Answer!</p>`;
        } else {
            _result.innerHTML = `<p><i class="fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
        }
        checkCount();
    } else {
        _result.innerHTML = `<p><i class="fas fa-question"></i>Please select an option!</p>`;
        _checkBtn.disabled = false;
    }
}

function checkCount(){
    askedCount++;
    setCount();
    if(askedCount === totalQuestion){
        setTimeout(function(){
            console.log("");
        }, 5000);

        _result.innerHTML += `<p>Quiz completed! Your score is: ${correctScore} out of ${totalQuestion}</p>`;
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        setTimeout(function(){
            loadQuestion();
        }, 300);
    }
}


function setCount(){
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}

function restartQuiz(){
    correctScore = askedCount = 0;
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block";
    _checkBtn.disabled = false;
    setCount();
    loadQuestion();
}

