// ===== DADOS DO MINI-EBOOK =====
const totalPages = 5;
let currentPage = 1;

// ===== DADOS DEMOGRÁFICOS =====
let demographicData = {
    age: '',
    gender: '',
    education: '',
    daxCodeTime: ''
};

// ===== DADOS DO QUIZ - 15 PERGUNTAS =====
const quizQuestions = [
    {
        question: "Qual é o primeiro componente da Comunicação Não Violenta?",
        options: [
            "Sentimento",
            "Observação",
            "Necessidade",
            "Pedido"
        ],
        correct: 1,
        explanation: "A observação é o primeiro componente da CNV. Envolve descrever fatos concretos sem julgamentos, como observar um comportamento específico."
    },
    {
        question: "Qual destas afirmações é um exemplo de observação sem julgamento?",
        options: [
            "João chegou 30 minutos atrasado na reunião de equipe",
            "João é desorganizado e sempre se atrasa",
            "João não se importa com o horário da equipe",
            "João tem preguiça de acordar cedo"
        ],
        correct: 0,
        explanation: "'João chegou 30 minutos atrasado na reunião de equipe' é uma observação factual. As outras opções contêm julgamentos."
    },
    {
        question: "Qual destas expressões representa um sentimento genuíno?",
        options: [
            "Sinto que você não respeita meu código",
            "Estou frustrado com esta função complexa",
            "Sinto que você é um péssimo programador",
            "Sinto que você deveria escrever melhor"
        ],
        correct: 1,
        explanation: "'Estou frustrado com esta função complexa' expressa um sentimento genuíno. As outras opções são julgamentos disfarçados de sentimentos."
    },
    {
        question: "Na CNV, o que diferencia um pedido de uma exigência?",
        options: [
            "A urgência com que é feito",
            "O uso da palavra 'por favor'",
            "A reação se não for atendido",
            "O tom de voz utilizado"
        ],
        correct: 2,
        explanation: "Um pedido respeita a liberdade do outro de atender ou não. Uma exigência vem com culpa ou punição se não for atendida."
    },
    {
        question: "Em pair programming, como aplicar a CNV ao dar feedback sobre código?",
        options: [
            "Dizer diretamente o que está errado",
            "Criticar a lógica do colega",
            "Observar o código, expressar seu sentimento e fazer um pedido específico",
            "Refazer o código sem explicar"
        ],
        correct: 2,
        explanation: "A CNV sugere: 1) Observar o código (ex: 'esta função tem 5 parâmetros'), 2) Expressar sentimento (ex: 'fico confuso'), 3) Fazer pedido (ex: 'podemos simplificar para 2 parâmetros?')."
    },
    {
        question: "Qual necessidade pode estar por trás da frustração ao debugar código complexo?",
        options: [
            "Necessidade de clareza",
            "Necessidade de controle",
            "Necessidade de perfeição",
            "Necessidade de reconhecimento"
        ],
        correct: 0,
        explanation: "Ao debugar código complexo, é comum sentir necessidade de clareza para entender o que está acontecendo e resolver o problema."
    },
    {
        question: "Como transformar a crítica 'Seu código está uma bagunça' em observação CNV?",
        options: [
            "'Você precisa organizar melhor seu código'",
            "'Este arquivo tem 1500 linhas sem divisão em módulos'",
            "'Não gosto do jeito que você programa'",
            "'Programadores bons escrevem código limpo'"
        ],
        correct: 1,
        explanation: "'Este arquivo tem 1500 linhas sem divisão em módulos' é uma observação factual sem julgamento, ao contrário da crítica original."
    },
    {
        question: "Qual é um exemplo de pedido claro e específico (não vago) em CNV?",
        options: [
            "'Melhore sua comunicação'",
            "'Seja mais proativo'",
            "'Podemos ter daily às 9h em vez das 10h?'",
            "'Trabalhe melhor em equipe'"
        ],
        correct: 2,
        explanation: "'Podemos ter daily às 9h em vez das 10h?' é um pedido claro, específico e acionável, ao contrário de pedidos vagos como 'melhore' ou 'seja mais'."
    },
    {
        question: "Em uma discussão técnica acalorada, qual atitude da CNV pode ajudar?",
        options: [
            "Insistir no seu ponto de vista",
            "Parar e identificar os sentimentos envolvidos",
            "Provar que você está certo",
            "Ignorar os sentimentos e focar apenas na lógica"
        ],
        correct: 1,
        explanation: "Identificar e expressar os sentimentos envolvidos (frustração, preocupação, etc.) pode desescalar conflitos e abrir espaço para diálogo."
    },
    {
        question: "O que a CNV recomenda ao receber feedback crítico sobre seu código?",
        options: [
            "Defender-se imediatamente",
            "Ouvir tentando identificar a observação por trás da crítica",
            "Ignorar se não concordar",
            "Retrucar com outra crítica"
        ],
        correct: 1,
        explanation: "A CNV sugere ouvir atentamente e tentar identificar a observação concreta por trás da crítica, mesmo que mal expressa."
    },
    {
        question: "Qual destas é uma necessidade universal (não estratégia específica)?",
        options: [
            "Preciso que você revise meu código hoje",
            "Preciso de respeito no time",
            "Preciso que você use TypeScript",
            "Preciso que você documente cada função"
        ],
        correct: 1,
        explanation: "'Respeito no time' é uma necessidade universal. As outras opções são estratégias específicas para atender necessidades como clareza, colaboração ou aprendizado."
    },
    {
        question: "Como a CNV pode ajudar em code reviews?",
        options: [
            "Eliminando completamente as críticas",
            "Focando no código, não na pessoa",
            "Só elogiando para não magoar",
            "Evitando dar qualquer feedback negativo"
        ],
        correct: 1,
        explanation: "A CNV ajuda a focar nas observações sobre o código (fatos) e fazer pedidos específicos, sem atacar a pessoa que escreveu o código."
    },
    {
        question: "Qual sentimento genuíno poderia surgir ao encontrar um bug crítico em produção?",
        options: [
            "Raiva do colega que fez o deploy",
            "Preocupação com os usuários afetados",
            "Frustração por ter que trabalhar mais",
            "Todos os anteriores são sentimentos possíveis"
        ],
        correct: 3,
        explanation: "Todos são sentimentos genuínos possíveis. A CNV não classifica sentimentos como 'certos' ou 'errados', apenas incentiva reconhecê-los e expressá-los."
    },
    {
        question: "Na CNV, por que é importante conectar sentimentos a necessidades?",
        options: [
            "Para culpar os outros por como nos sentimos",
            "Para justificar nossa raiva",
            "Para entender a causa dos sentimentos e poder agir",
            "Para provar que temos razão"
        ],
        correct: 2,
        explanation: "Conectar sentimentos a necessidades nos ajuda a entender o que realmente importa para nós, permitindo fazer pedidos claros para atender essas necessidades."
    },
    {
        question: "Como aplicar CNV ao pedir ajuda com um bug difícil?",
        options: [
            "'Este bug é impossível, preciso de ajuda agora!'",
            "'Estou há 3 horas tentando resolver este bug e estou frustrado porque preciso entregar esta funcionalidade hoje. Você poderia dar uma olhada comigo?'",
            "'Você sempre resolve bugs rápido, me ajuda aí'",
            "'Se você não me ajudar, não vou conseguir entregar'"
        ],
        correct: 1,
        explanation: "Esta opção segue a estrutura CNV: observação (3 horas tentando), sentimento (frustrado), necessidade (entregar hoje), pedido específico (dar uma olhada comigo)."
    }
];

let currentQuestion = 0;
let userAnswers = new Array(quizQuestions.length).fill(null);
let quizCompleted = false;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Iniciando configuração');
    
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Configurar navegação do eBook
    setupEbookNavigation();
    
    // Configurar quiz
    setupQuiz();
});

// ===== FUNÇÕES DO EBOOK =====
function setupEbookNavigation() {
    console.log('Configurando navegação do eBook');
    
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const totalPagesSpan = document.getElementById('total-pages');
    
    if (!prevBtn || !nextBtn || !totalPagesSpan) {
        console.error('Elementos de navegação do eBook não encontrados!');
        return;
    }
    
    totalPagesSpan.textContent = totalPages;
    
    prevBtn.addEventListener('click', function() {
        console.log('Botão anterior clicado');
        if (currentPage > 1) {
            changeEbookPage(currentPage - 1);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        console.log('Botão próximo clicado');
        if (currentPage < totalPages) {
            changeEbookPage(currentPage + 1);
        }
    });
    
    // Inicializar primeira página
    changeEbookPage(1);
}

function changeEbookPage(pageNum) {
    console.log(`Mudando para página ${pageNum}`);
    
    // Ocultar todas as páginas
    for (let i = 1; i <= totalPages; i++) {
        const pageElement = document.getElementById(`ebook-page-${i}`);
        if (pageElement) {
            pageElement.classList.remove('active');
        }
    }
    
    // Atualizar página atual
    currentPage = pageNum;
    
    // Mostrar nova página
    const currentPageElement = document.getElementById(`ebook-page-${currentPage}`);
    if (currentPageElement) {
        currentPageElement.classList.add('active');
        console.log(`Página ${currentPage} ativada`);
    } else {
        console.error(`Página do eBook ${currentPage} não encontrada!`);
        return;
    }
    
    // Atualizar indicador de página
    const currentPageSpan = document.getElementById('current-page');
    if (currentPageSpan) {
        currentPageSpan.textContent = currentPage;
    }
    
    // Atualizar estado dos botões
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
        console.log(`Botão anterior: ${prevBtn.disabled ? 'desabilitado' : 'habilitado'}`);
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
        console.log(`Botão próximo: ${nextBtn.disabled ? 'desabilitado' : 'habilitado'}`);
    }
}

// ===== FUNÇÕES DO QUIZ =====
function setupQuiz() {
    console.log('Configurando quiz');
    
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const retryBtn = document.getElementById('retry-quiz');
    
    // Configurar formulário de registro
    setupRegistrationForm();
    
    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousQuestion);
        console.log('Botão anterior do quiz configurado');
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextQuestion);
        console.log('Botão próximo do quiz configurado');
    }
    
    if (retryBtn) {
        retryBtn.addEventListener('click', resetQuiz);
        console.log('Botão refazer quiz configurado');
    }
}

// Configurar formulário de registro
function setupRegistrationForm() {
    console.log('Configurando formulário de registro');
    
    const registrationForm = document.getElementById('registration-form');
    const demographicForm = document.getElementById('demographic-form');
    const quizContainer = document.getElementById('quiz-container');
    
    if (!registrationForm || !demographicForm || !quizContainer) {
        console.error('Elementos do formulário de registro não encontrados!');
        return;
    }
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulário de registro submetido');
        
        // Coletar dados do formulário
        demographicData = {
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            education: document.getElementById('education').value,
            daxCodeTime: document.getElementById('dax-code-time').value
        };
        
        console.log('Dados demográficos coletados:', demographicData);
        
        // Validar se todos os campos foram preenchidos
        if (!demographicData.age || !demographicData.gender || 
            !demographicData.education || !demographicData.daxCodeTime) {
            alert('Por favor, preencha todos os campos antes de começar o quiz.');
            return;
        }
        
        // Esconder formulário e mostrar quiz
        demographicForm.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        console.log('Formulário escondido, quiz mostrado');
        
        // Resetar estado do quiz
        currentQuestion = 0;
        userAnswers = new Array(quizQuestions.length).fill(null);
        quizCompleted = false;
        
        console.log('Estado do quiz resetado. Carregando primeira pergunta...');
        
        // Carregar primeira pergunta do quiz
        loadQuestion(currentQuestion);
    });
}

function loadQuestion(questionIndex) {
    console.log(`Carregando pergunta ${questionIndex + 1} de ${quizQuestions.length}`);
    
    // Verificar se o índice é válido
    if (questionIndex < 0 || questionIndex >= quizQuestions.length) {
        console.error(`Índice de pergunta inválido: ${questionIndex}`);
        return;
    }
    
    const question = quizQuestions[questionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressText = document.getElementById('quiz-progress');
    
    if (!questionText || !optionsContainer || !progressText) {
        console.error('Elementos da pergunta do quiz não encontrados!');
        return;
    }
    
    // Atualizar texto da pergunta
    questionText.textContent = `Questão ${questionIndex + 1}: ${question.question}`;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // Adicionar novas opções
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        
        // Verificar se esta opção foi selecionada anteriormente
        if (userAnswers[questionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Atualizar progresso
    progressText.textContent = `Pergunta ${questionIndex + 1} de ${quizQuestions.length}`;
    
    // Atualizar estado dos botões
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    
    if (prevBtn) {
        prevBtn.disabled = questionIndex === 0;
    }
    
    if (nextBtn) {
        if (questionIndex === quizQuestions.length - 1) {
            nextBtn.textContent = 'Finalizar';
        } else {
            nextBtn.textContent = 'Próxima';
        }
    }
    
    // Garantir que a pergunta está visível e os resultados ocultos
    const questionContainer = document.getElementById('quiz-question-container');
    const resultsContainer = document.getElementById('quiz-results');
    
    if (questionContainer) {
        questionContainer.classList.remove('hidden');
    }
    
    if (resultsContainer) {
        resultsContainer.classList.add('hidden');
    }
    
    console.log(`Pergunta ${questionIndex + 1} carregada com sucesso`);
}

function selectOption(optionIndex) {
    console.log(`Opção ${optionIndex} selecionada na pergunta ${currentQuestion + 1}`);
    
    // Remover seleção anterior
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Selecionar nova opção
    if (options[optionIndex]) {
        options[optionIndex].classList.add('selected');
        userAnswers[currentQuestion] = optionIndex;
        console.log(`Resposta registrada: pergunta ${currentQuestion + 1}, opção ${optionIndex}`);
    }
}

function showPreviousQuestion() {
    console.log('Mostrando pergunta anterior');
    
    if (currentQuestion > 0) {
        // Verificar se a pergunta atual tem resposta antes de sair (opcional)
        if (userAnswers[currentQuestion] === null) {
            console.log('Pergunta atual não respondida, permitindo navegar');
        }
        
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function showNextQuestion() {
    console.log('Mostrando próxima pergunta');
    console.log(`Pergunta atual: ${currentQuestion + 1}, Total: ${quizQuestions.length}`);
    
    if (currentQuestion < quizQuestions.length - 1) {
        // Verificar se há resposta selecionada para a pergunta atual
        if (userAnswers[currentQuestion] === null) {
            alert('Por favor, selecione uma resposta antes de prosseguir.');
            return;
        }
        
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        // Última pergunta - finalizar quiz
        console.log('Última pergunta - finalizando quiz');
        finishQuiz();
    }
}

function finishQuiz() {
    console.log('Finalizando quiz');
    
    // Verificar se última pergunta foi respondida
    if (userAnswers[currentQuestion] === null) {
        alert('Por favor, selecione uma resposta antes de finalizar.');
        return;
    }
    
    // Verificar se todas as perguntas foram respondidas
    const unansweredQuestions = userAnswers.filter(answer => answer === null).length;
    if (unansweredQuestions > 0) {
        if (confirm(`Você não respondeu ${unansweredQuestions} pergunta(s). Deseja finalizar mesmo assim?`)) {
            // Usuário confirmou, continuar com o processamento
        } else {
            return;
        }
    }
    
    // Calcular pontuação
    let score = 0;
    let resultsHTML = '<h4>Seu desempenho no quiz:</h4><ul>';
    
    for (let i = 0; i < quizQuestions.length; i++) {
        const isCorrect = userAnswers[i] === quizQuestions[i].correct;
        if (isCorrect) score++;
        
        resultsHTML += `
            <li>
                <strong>Pergunta ${i + 1}:</strong> 
                ${isCorrect ? '✅ Correta' : '❌ Incorreta'}
                <br><small>${quizQuestions[i].explanation}</small>
            </li>
        `;
    }
    
    resultsHTML += `</ul><p><strong>Pontuação final: ${score} de ${quizQuestions.length}</strong></p>`;
    
    // Determinar nível de conhecimento
    let knowledgeLevel = '';
    let knowledgePercentage = (score / quizQuestions.length) * 100;
    
    if (knowledgePercentage >= 80) {
        knowledgeLevel = 'Comunicador CNV Avançado';
    } else if (knowledgePercentage >= 60) {
        knowledgeLevel = 'Comunicador CNV Intermediário';
    } else if (knowledgePercentage >= 40) {
        knowledgeLevel = 'Comunicador CNV Iniciante';
    } else {
        knowledgeLevel = 'Explorador da CNV';
    }
    
    resultsHTML += `<p>Seu nível: <strong>${knowledgeLevel}</strong></p>`;
    resultsHTML += `<p><em>Dica: Revise as questões erradas no mini-eBook para aprimorar sua compreensão da CNV!</em></p>`;
    
    // Mostrar resultados
    const resultText = document.getElementById('quiz-result-text');
    if (resultText) {
        resultText.innerHTML = resultsHTML;
    }
    
    const questionContainer = document.getElementById('quiz-question-container');
    const resultsContainer = document.getElementById('quiz-results');
    
    if (questionContainer) {
        questionContainer.classList.add('hidden');
    }
    
    if (resultsContainer) {
        resultsContainer.classList.remove('hidden');
    }
    
    // Atualizar gráfico do quiz
    updateQuizChart(score, quizQuestions.length - score);
    
    // Criar gráfico demográfico
    createDemographicChart();
    
    // Gerar resumo para instituição
    generateDemographicSummary();
    
    // Configurar botão de compartilhamento
    setupShareButton(score, knowledgeLevel);
    
    // Marcar quiz como completo
    quizCompleted = true;
    
    console.log(`Quiz finalizado! Pontuação: ${score}/${quizQuestions.length}, Nível: ${knowledgeLevel}`);
}

function updateQuizChart(correctCount, incorrectCount) {
    const ctx = document.getElementById('quiz-chart');
    if (!ctx) {
        console.error('Canvas do gráfico do quiz não encontrado!');
        return;
    }
    
    // Destruir gráfico anterior se existir
    if (window.quizChart) {
        window.quizChart.destroy();
    }
    
    window.quizChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Corretas', 'Incorretas'],
            datasets: [{
                data: [correctCount, incorrectCount],
                backgroundColor: [
                    'rgba(42, 139, 179, 0.8)',
                    'rgba(255, 99, 132, 0.8)'
                ],
                borderColor: [
                    'rgb(42, 139, 179)',
                    'rgb(255, 99, 132)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Desempenho no Quiz CNV'
                }
            }
        }
    });
    
    console.log('Gráfico do quiz atualizado');
}

function resetQuiz() {
    console.log('Reiniciando quiz');
    
    currentQuestion = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    quizCompleted = false;
    
    // Mostrar formulário demográfico novamente e esconder quiz
    const demographicForm = document.getElementById('demographic-form');
    const quizContainer = document.getElementById('quiz-container');
    
    if (demographicForm) {
        demographicForm.classList.remove('hidden');
    }
    
    if (quizContainer) {
        quizContainer.classList.add('hidden');
    }
    
    // Resetar formulário demográfico
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.reset();
    }
    
    // Destruir gráficos se existirem
    if (window.quizChart) {
        window.quizChart.destroy();
        window.quizChart = null;
    }
    
    if (window.demographicChart) {
        window.demographicChart.destroy();
        window.demographicChart = null;
    }
    
    console.log('Quiz reiniciado com sucesso');
}

// ===== FUNÇÕES AUXILIARES PARA GRÁFICO DEMOGRÁFICO =====
function createDemographicChart() {
    const ctx = document.getElementById('demographic-chart');
    if (!ctx) {
        console.error('Canvas do gráfico demográfico não encontrado!');
        return;
    }
    
    // Destruir gráfico anterior se existir
    if (window.demographicChart) {
        window.demographicChart.destroy();
    }
    
    // Dados para o gráfico demográfico
    const demographicLabels = ['Faixa Etária', 'Gênero', 'Escolaridade', 'Tempo no Dax Code'];
    const demographicValues = [
        getAgeValue(demographicData.age),
        getGenderValue(demographicData.gender),
        getEducationValue(demographicData.education),
        getDaxCodeTimeValue(demographicData.daxCodeTime)
    ];
    
    window.demographicChart = new Chart(ctx.getContext('2d'), {
        type: 'radar',
        data: {
            labels: demographicLabels,
            datasets: [{
                label: 'Seu Perfil',
                data: demographicValues,
                backgroundColor: 'rgba(87, 193, 235, 0.2)',
                borderColor: 'rgb(87, 193, 235)',
                pointBackgroundColor: 'rgb(87, 193, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(87, 193, 235)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 5
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Seu Perfil Demográfico'
                }
            }
        }
    });
    
    console.log('Gráfico demográfico criado');
}

// Funções auxiliares para converter dados em valores numéricos
function getAgeValue(age) {
    const ageMap = {
        '13-17': 1,
        '18-24': 2,
        '25-34': 3,
        '35-44': 4,
        '45+': 5
    };
    return ageMap[age] || 0;
}

function getGenderValue(gender) {
    const genderMap = {
        'feminino': 3,
        'masculino': 3,
        'nao-binario': 2,
        'prefiro-nao-informar': 1
    };
    return genderMap[gender] || 0;
}

function getEducationValue(education) {
    const educationMap = {
        'fundamental-incompleto': 1,
        'fundamental-completo': 2,
        'medio-incompleto': 2,
        'medio-completo': 3,
        'superior-incompleto': 3,
        'superior-completo': 4,
        'pos-graduacao': 5
    };
    return educationMap[education] || 0;
}

function getDaxCodeTimeValue(time) {
    const timeMap = {
        'menos-1-mes': 1,
        '1-3-meses': 2,
        '4-6-meses': 3,
        '7-12-meses': 4,
        'mais-1-ano': 5
    };
    return timeMap[time] || 0;
}

// Função para gerar resumo dos dados para instituição
function generateDemographicSummary() {
    const summaryContainer = document.getElementById('demographic-summary');
    if (!summaryContainer) {
        console.error('Container do resumo demográfico não encontrado!');
        return;
    }
    
    const ageText = {
        '13-17': '13-17 anos',
        '18-24': '18-24 anos',
        '25-34': '25-34 anos',
        '35-44': '35-44 anos',
        '45+': '45+ anos'
    };
    
    const genderText = {
        'feminino': 'Feminino',
        'masculino': 'Masculino',
        'nao-binario': 'Não-binário',
        'prefiro-nao-informar': 'Prefere não informar'
    };
    
    const educationText = {
        'fundamental-incompleto': 'Fundamental Incompleto',
        'fundamental-completo': 'Fundamental Completo',
        'medio-incompleto': 'Médio Incompleto',
        'medio-completo': 'Médio Completo',
        'superior-incompleto': 'Superior Incompleto',
        'superior-completo': 'Superior Completo',
        'pos-graduacao': 'Pós-graduação'
    };
    
    const daxCodeTimeText = {
        'menos-1-mes': 'Menos de 1 mês',
        '1-3-meses': '1-3 meses',
        '4-6-meses': '4-6 meses',
        '7-12-meses': '7-12 meses',
        'mais-1-ano': 'Mais de 1 ano'
    };
    
    summaryContainer.innerHTML = `
        <p><strong>Faixa Etária:</strong> ${ageText[demographicData.age] || 'Não informado'}</p>
        <p><strong>Gênero:</strong> ${genderText[demographicData.gender] || 'Não informado'}</p>
        <p><strong>Escolaridade:</strong> ${educationText[demographicData.education] || 'Não informado'}</p>
        <p><strong>Tempo no Dax Code:</strong> ${daxCodeTimeText[demographicData.daxCodeTime] || 'Não informado'}</p>
        <p><strong>Data da Participação:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
    `;
    
    console.log('Resumo demográfico gerado');
}

// Configurar botão de compartilhamento via WhatsApp
function setupShareButton(score, knowledgeLevel) {
    const shareButton = document.getElementById('share-results');
    if (!shareButton) {
        console.error('Botão de compartilhamento não encontrado!');
        return;
    }
    
    shareButton.addEventListener('click', function() {
        const ageSelect = document.getElementById('age');
        const ageText = ageSelect.options[ageSelect.selectedIndex] ? ageSelect.options[ageSelect.selectedIndex].text : 'Não informada';
        
        const message = `Acabei de completar o quiz CNV do projeto Pontes em Código! 
Pontuação: ${score}/${quizQuestions.length}
Nível: ${knowledgeLevel}
Faixa etária: ${ageText}
Quer testar seus conhecimentos também?`;
        
        const whatsappURL = `https://wa.me/5571991311250?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        
        console.log('Compartilhamento via WhatsApp configurado');
    });
}

// Debug: Verificar se todos os elementos existem
function debugQuizElements() {
    console.log('=== DEBUG QUIZ ===');
    console.log('Total de perguntas:', quizQuestions.length);
    console.log('Pergunta atual:', currentQuestion);
    console.log('Respostas do usuário:', userAnswers);
    console.log('Quiz completado:', quizCompleted);
    
    const elements = [
        'registration-form',
        'demographic-form', 
        'quiz-container',
        'quiz-question-container',
        'question-text',
        'options-container',
        'quiz-progress',
        'quiz-results',
        'quiz-result-text',
        'prev-question',
        'next-question',
        'retry-quiz',
        'quiz-chart',
        'demographic-chart',
        'demographic-summary',
        'share-results'
    ];
    
    elements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`${id}: ${element ? '✓ Encontrado' : '✗ Não encontrado'}`);
    });
    console.log('=== FIM DEBUG ===');
}

// Adicionar debug ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(debugQuizElements, 1000);
});