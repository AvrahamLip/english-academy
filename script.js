// Premium Vocabulary Engine - Fantastic Five Unit 2
const vocabulary = [
    { "english": "(be) called", "hebrew": "נקרא", "example": "My name is John, I am called John." },
    { "english": "adult", "hebrew": "מבוגר", "example": "My father is an adult." },
    { "english": "ago", "hebrew": "לפני", "example": "I saw him two days ago." },
    { "english": "aunt", "hebrew": "דודה", "example": "My aunt is my mother sister." },
    { "english": "choose", "hebrew": "לבחור", "example": "I choose this book." },
    { "english": "country", "hebrew": "מדינה/ארץ", "example": "I love my country." },
    { "english": "excited", "hebrew": "מתרגש", "example": "I am very excited about the party." },
    { "english": "fix", "hebrew": "לתקן", "example": "Please fix the broken chair." },
    { "english": "hard", "hebrew": "קשה", "example": "This math problem is hard." },
    { "english": "hurt", "hebrew": "לפגוע/להכאיב", "example": "My foot hurts when I run." },
    { "english": "interesting", "hebrew": "מעניין", "example": "This book is very interesting." },
    { "english": "lie", "hebrew": "לשקר", "example": "Do not lie to me." },
    { "english": "minute", "hebrew": "דקה", "example": "Wait a minute, I am coming." },
    { "english": "move", "hebrew": "לזוז/להזיז", "example": "Please move the table to the corner." },
    { "english": "noise", "hebrew": "רעש", "example": "The noise from the street is loud." },
    { "english": "or", "hebrew": "או", "example": "Do you want tea or coffee?" },
    { "english": "parent", "hebrew": "הורה", "example": "My parents work hard." },
    { "english": "player", "hebrew": "שחקן", "example": "He is a professional football player." },
    { "english": "prepare", "hebrew": "להכין", "example": "I prepare breakfast every morning." },
    { "english": "race", "hebrew": "מרוץ", "example": "I won the race yesterday." },
    { "english": "safe", "hebrew": "בטוח", "example": "It is safe to cross here." },
    { "english": "sign", "hebrew": "שלט/לחתום", "example": "Please sign your name on the paper." },
    { "english": "son", "hebrew": "בן", "example": "My son is ten years old." },
    { "english": "think", "hebrew": "לחשוב", "example": "What do you think about this?" },
    { "english": "true", "hebrew": "נכון", "example": "Is this story true?" },
    { "english": "way", "hebrew": "דרך", "example": "Which way is the station?" },
    { "english": "a quarter past", "hebrew": "רבע אחרי", "example": "It is a quarter past three." },
    { "english": "after", "hebrew": "אחרי", "example": "I will see you after school." },
    { "english": "always", "hebrew": "תמיד", "example": "I always brush my teeth." },
    { "english": "because", "hebrew": "בגלל/מפני ש", "example": "I cannot go because I am sick." },
    { "english": "clock", "hebrew": "שעון", "example": "The clock shows three oclock." },
    { "english": "cry", "hebrew": "לבכות", "example": "The baby cries when hungry." },
    { "english": "find", "hebrew": "למצוא", "example": "I cannot find my keys." },
    { "english": "get", "hebrew": "לקבל", "example": "What did you get for your birthday?" },
    { "english": "hour", "hebrew": "שעה", "example": "I waited for one hour." },
    { "english": "ice", "hebrew": "קרח", "example": "I like ice cream in summer." },
    { "english": "keep", "hebrew": "לשמור", "example": "Please keep this secret." },
    { "english": "many", "hebrew": "הרבה", "example": "There are many cars on the road." },
    { "english": "money", "hebrew": "כסף", "example": "How much money do you have?" },
    { "english": "need", "hebrew": "צריך", "example": "I need help with my homework." },
    { "english": "of", "hebrew": "של/מ...", "example": "This is the house of my friend." },
    { "english": "our", "hebrew": "שלנו", "example": "This is our school." },
    { "english": "place", "hebrew": "מקום", "example": "This is a nice place to visit." },
    { "english": "poor", "hebrew": "עני", "example": "Many poor people need help." },
    { "english": "prize", "hebrew": "פרס", "example": "He won a prize in the competition." },
    { "english": "right", "hebrew": "ימין/נכון/צודק", "example": "Your answer is right." },
    { "english": "second", "hebrew": "שניה", "example": "This will only take a second." },
    { "english": "some", "hebrew": "כמה/קצת", "example": "Some people like coffee." },
    { "english": "table tennis", "hebrew": "טניס שולחן", "example": "We play table tennis after school." },
    { "english": "time", "hebrew": "זמן", "example": "What time is it now?" },
    { "english": "us", "hebrew": "אותנו/לנו", "example": "Please give it to us." },
    { "english": "winner", "hebrew": "מנצח", "example": "The winner received a medal." },
    { "english": "a quarter to", "hebrew": "רבע ל", "example": "It is a quarter to five." },
    { "english": "again", "hebrew": "שוב", "example": "Can you say that again?" },
    { "english": "artist", "hebrew": "אמן", "example": "He is a famous artist." },
    { "english": "build", "hebrew": "לבנות", "example": "We will build a new house." },
    { "english": "club", "hebrew": "מועדון", "example": "I am a member of the sports club." },
    { "english": "easy", "hebrew": "קל", "example": "This question is easy." },
    { "english": "first", "hebrew": "ראשון", "example": "He was the first to arrive." },
    { "english": "get up", "hebrew": "לקום", "example": "I get up at seven every day." },
    { "english": "how", "hebrew": "איך", "example": "How are you today?" },
    { "english": "important", "hebrew": "חשוב", "example": "Education is very important." },
    { "english": "later", "hebrew": "מאוחר יותר", "example": "I will call you later." },
    { "english": "medal", "hebrew": "מדליה", "example": "She won a gold medal." },
    { "english": "more", "hebrew": "עוד/יותר", "example": "I want more cake please." },
    { "english": "neighbor", "hebrew": "שכן", "example": "My neighbor is very friendly." },
    { "english": "Olympic Games", "hebrew": "המשחקים האולימפיים", "example": "Athletes compete at the Olympic Games." },
    { "english": "paint", "hebrew": "לצבוע/לצייר", "example": "I like to paint pictures." },
    { "english": "plate", "hebrew": "צלחת", "example": "Put the food on a plate." },
    { "english": "practice", "hebrew": "להתאמן", "example": "I practice the piano every day." },
    { "english": "problem", "hebrew": "בעיה", "example": "Can you help me with this problem?" },
    { "english": "road", "hebrew": "כביש/דרך", "example": "The road is very busy today." },
    { "english": "sick", "hebrew": "חולה", "example": "He is sick so he cannot go to school." },
    { "english": "something", "hebrew": "משהו", "example": "I forgot something at home." },
    { "english": "them", "hebrew": "אותם", "example": "I saw them yesterday." },
    { "english": "tomorrow", "hebrew": "מחר", "example": "The exam is tomorrow." },
    { "english": "was", "hebrew": "היה", "example": "Yesterday was a sunny day." }
];

// App State
let practiceIndex = 0;
let quizPool = [];
let quizIndex = 0;
let quizScore = 0;
let currentMode = 'home';
let quizAnswered = false;
let currentQuizQuestion = null;

// Helpers
const getDifficulty = (word) => {
    if (word.length > 8) return 'Challenging';
    if (word.length > 5) return 'Medium';
    return 'Common';
};

// Initial Load
window.onload = () => {
    document.getElementById('word-count-home').textContent = vocabulary.length;

    // Attempt to restore state
    if (!loadState()) {
        setMode('home');
    }
};

function saveState() {
    const state = {
        practiceIndex,
        quizPool,
        quizIndex,
        quizScore,
        currentMode
    };
    localStorage.setItem('vocab_master_state_v2', JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem('vocab_master_state_v2');
    if (!saved) return false;

    try {
        const state = JSON.parse(saved);
        practiceIndex = state.practiceIndex || 0;
        quizPool = state.quizPool || [];
        quizIndex = state.quizIndex || 0;
        quizScore = state.quizScore || 0;

        if (state.currentMode && state.currentMode !== 'home') {
            setMode(state.currentMode);
            return true;
        }
    } catch (e) {
        console.error("Failed to load state", e);
    }
    return false;
}

function clearQuizState() {
    quizPool = [];
    quizIndex = 0;
    quizScore = 0;
    saveState();
}

function setMode(mode) {
    currentMode = mode;

    // Hide all screens
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('practice-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('common-footer').style.display = mode === 'home' ? 'block' : 'none';

    if (mode === 'home') {
        document.getElementById('home-screen').style.display = 'flex';
    } else if (mode === 'practice') {
        document.getElementById('practice-screen').style.display = 'flex';
        renderPractice();
    } else if (mode === 'quiz') {
        // Continue existing quiz if pool exists
        if (quizPool.length > 0 && quizIndex < vocabulary.length) {
            document.getElementById('quiz-screen').style.display = 'flex';
            document.getElementById('quiz-score').textContent = `Score: ${quizScore}`;
            renderQuizQuestion();
        } else {
            startQuiz();
        }
    }
    saveState();
}

// Practice Mode Logic
function renderPractice() {
    const word = vocabulary[practiceIndex];
    const progress = ((practiceIndex + 1) / vocabulary.length) * 100;

    document.getElementById('practice-eng').textContent = word.english;
    document.getElementById('practice-heb').textContent = word.hebrew;
    document.getElementById('practice-example').textContent = word.example || "";
    document.getElementById('practice-diff').textContent = getDifficulty(word.english);
    document.getElementById('practice-bar').style.width = `${progress}%`;
    document.getElementById('practice-num').textContent = `${practiceIndex + 1} / ${vocabulary.length}`;

    // Reset flip
    document.getElementById('flashcard').classList.remove('flipped');
    saveState();
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextWord() {
    practiceIndex = (practiceIndex + 1) % vocabulary.length;
    renderPractice();
}

function prevWord() {
    practiceIndex = (practiceIndex - 1 + vocabulary.length) % vocabulary.length;
    renderPractice();
}

// Quiz Mode Logic
function startQuiz() {
    quizScore = 0;
    quizPool = [...vocabulary].sort(() => Math.random() - 0.5);
    quizIndex = 0;
    document.getElementById('quiz-screen').style.display = 'flex';
    document.getElementById('quiz-score').textContent = `Score: ${quizScore}`;
    renderQuizQuestion();
    saveState();
}

function renderQuizQuestion() {
    quizAnswered = false;
    currentQuizQuestion = quizPool[quizIndex];
    const progress = ((quizIndex + 1) / vocabulary.length) * 100;

    document.getElementById('quiz-eng').textContent = currentQuizQuestion.english;
    document.getElementById('quiz-diff').textContent = getDifficulty(currentQuizQuestion.english);
    document.getElementById('quiz-bar').style.width = `${progress}%`;
    document.getElementById('quiz-num').textContent = `שאלה ${quizIndex + 1} מתוך ${vocabulary.length}`;
    document.getElementById('next-q-btn').style.display = 'none';

    // Generate options
    const options = [currentQuizQuestion.hebrew];
    while (options.length < 4) {
        const rand = vocabulary[Math.floor(Math.random() * vocabulary.length)].hebrew;
        if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-premium';
        btn.innerHTML = `<span>${opt}</span>`;
        btn.onclick = () => handleQuizSelect(opt, btn);
        grid.appendChild(btn);
    });
    saveState();
}

function handleQuizSelect(selected, btn) {
    const correct = currentQuizQuestion.hebrew;

    if (selected === correct) {
        quizAnswered = true;
        btn.classList.add('correct');
        btn.innerHTML += '<i class="fas fa-check-circle"></i>';
        quizScore++;
        document.getElementById('quiz-score').textContent = `Score: ${quizScore}`;

        // Disable all and show next
        const allButtons = document.querySelectorAll('.option-premium');
        allButtons.forEach(b => b.disabled = true);
        document.getElementById('next-q-btn').style.display = 'block';
    } else {
        if (!btn.classList.contains('wrong')) {
            btn.classList.add('wrong');
            btn.innerHTML += '<i class="fas fa-times-circle"></i>';
            btn.disabled = true; // Disable only the wrong one
        }
    }
    saveState();
}

function goToNextQuestion() {
    quizIndex++;
    if (quizIndex < vocabulary.length) {
        renderQuizQuestion();
    } else {
        showFinalResults();
    }
}

function showFinalResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'flex';

    document.getElementById('final-score').textContent = quizScore;
    document.getElementById('final-total').textContent = vocabulary.length;
    const pct = Math.round((quizScore / vocabulary.length) * 100);
    document.getElementById('final-percent').textContent = pct;

    const headline = pct === 100 ? 'Perfect Score! 🏆' : pct >= 80 ? 'Excellent Work! 🌟' : pct >= 60 ? 'Good Job! 👏' : 'Keep Practicing! 💪';
    document.getElementById('results-headline').textContent = headline;

    clearQuizState(); // Quiz finished
    if (pct >= 80) spawnConfetti();
}

function restartQuiz() {
    quizIndex = 0;
    startQuiz();
}

// Audio Engine
function speakWord() {
    const text = (currentMode === 'practice') ? vocabulary[practiceIndex].english : currentQuizQuestion.english;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google US English')) ||
        voices.find(v => v.lang.startsWith('en-US')) ||
        voices[0];

    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.lang = 'en-US';
    utterance.rate = 0.6;
    window.speechSynthesis.speak(utterance);
}

// Confetti Engine
function spawnConfetti() {
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        const colors = ['#6366f1', '#ec4899', '#8b5cf6', '#10b981', '#fbbf24'];
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.top = '-10px';
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 5000);
    }
}
