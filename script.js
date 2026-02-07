// Embedded Vocabulary (to avoid CORS issues with local file access)
const vocabulary = [
    { "english": "(be) called", "hebrew": "נקרא" },
    { "english": "adult", "hebrew": "מבוגר" },
    { "english": "ago", "hebrew": "לפני" },
    { "english": "aunt", "hebrew": "דודה" },
    { "english": "choose", "hebrew": "לבחור" },
    { "english": "country", "hebrew": "מדינה/ארץ" },
    { "english": "excited", "hebrew": "מתרגש" },
    { "english": "fix", "hebrew": "לתקן" },
    { "english": "hard", "hebrew": "קשה" },
    { "english": "hurt", "hebrew": "לפגוע/להכאיב" },
    { "english": "interesting", "hebrew": "מעניין" },
    { "english": "lie", "hebrew": "לשקר" },
    { "english": "minute", "hebrew": "דקה" },
    { "english": "move", "hebrew": "לזוז/להזיז" },
    { "english": "noise", "hebrew": "רעש" },
    { "english": "or", "hebrew": "או" },
    { "english": "parent", "hebrew": "הורה" },
    { "english": "player", "hebrew": "שחקן" },
    { "english": "prepare", "hebrew": "להכין" },
    { "english": "race", "hebrew": "מרוץ" },
    { "english": "safe", "hebrew": "בטוח" },
    { "english": "sign", "hebrew": "שלט/לחתום" },
    { "english": "son", "hebrew": "בן" },
    { "english": "think", "hebrew": "לחשוב" },
    { "english": "true", "hebrew": "נכון" },
    { "english": "way", "hebrew": "דרך" },
    { "english": "a quarter past", "hebrew": "רבע אחרי" },
    { "english": "after", "hebrew": "אחרי" },
    { "english": "always", "hebrew": "תמיד" },
    { "english": "because", "hebrew": "בגלל/מפני ש" },
    { "english": "clock", "hebrew": "שעון" },
    { "english": "cry", "hebrew": "לבכות" },
    { "english": "find", "hebrew": "למצוא" },
    { "english": "get", "hebrew": "לקבל" },
    { "english": "hour", "hebrew": "שעה" },
    { "english": "ice", "hebrew": "קרח" },
    { "english": "keep", "hebrew": "לשמור" },
    { "english": "many", "hebrew": "הרבה" },
    { "english": "money", "hebrew": "כסף" },
    { "english": "need", "hebrew": "צריך" },
    { "english": "of", "hebrew": "של/מ..." },
    { "english": "our", "hebrew": "שלנו" },
    { "english": "place", "hebrew": "מקום" },
    { "english": "poor", "hebrew": "עני" },
    { "english": "prize", "hebrew": "פרס" },
    { "english": "right", "hebrew": "ימין/נכון/צודק" },
    { "english": "second", "hebrew": "שני" },
    { "english": "some", "hebrew": "כמה/קצת" },
    { "english": "table tennis", "hebrew": "טניס שולחן" },
    { "english": "time", "hebrew": "זמן" },
    { "english": "us", "hebrew": "אותנו/לנו" },
    { "english": "winner", "hebrew": "מנצח" },
    { "english": "a quarter to", "hebrew": "רבע ל" },
    { "english": "again", "hebrew": "שוב" },
    { "english": "artist", "hebrew": "אמן" },
    { "english": "build", "hebrew": "לבנות" },
    { "english": "club", "hebrew": "מועדון" },
    { "english": "easy", "hebrew": "קל" },
    { "english": "first", "hebrew": "ראשון" },
    { "english": "get up", "hebrew": "לקום" },
    { "english": "how", "hebrew": "איך" },
    { "english": "important", "hebrew": "חשוב" },
    { "english": "later", "hebrew": "מאוחר יותר" },
    { "english": "medal", "hebrew": "מדליה" },
    { "english": "more", "hebrew": "עוד/יותר" },
    { "english": "neighbor", "hebrew": "שכן" },
    { "english": "Olympic Games", "hebrew": "המשחקים האולימפיים" },
    { "english": "paint", "hebrew": "לצבוע/לצייר" },
    { "english": "plate", "hebrew": "צלחת" },
    { "english": "practice", "hebrew": "להתאמן" },
    { "english": "problem", "hebrew": "בעיה" },
    { "english": "road", "hebrew": "כביש/דרך" },
    { "english": "sick", "hebrew": "חולה" },
    { "english": "something", "hebrew": "משהו" },
    { "english": "them", "hebrew": "אותם" },
    { "english": "tomorrow", "hebrew": "מחר" },
    { "english": "was", "hebrew": "היה" }
];

let currentIndex = 0;
let currentMode = 'practice';
let score = 0;
let quizWords = [...vocabulary];

// Initialize UI
window.onload = () => {
    updateViews();
};

function updateViews() {
    if (vocabulary.length === 0) return;

    const current = vocabulary[currentIndex];

    // Update Practice View
    document.getElementById('practice-eng').textContent = current.english;
    document.getElementById('practice-heb').textContent = current.hebrew;

    // Reset card flip state
    document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextWord() {
    currentIndex = (currentIndex + 1) % vocabulary.length;
    updateViews();
}

function prevWord() {
    currentIndex = (currentIndex - 1 + vocabulary.length) % vocabulary.length;
    updateViews();
}

function setMode(mode) {
    currentMode = mode;

    // UI selection
    document.getElementById('mode-practice').classList.toggle('active', mode === 'practice');
    document.getElementById('mode-quiz').classList.toggle('active', mode === 'quiz');

    // View visibility
    document.getElementById('practice-view').style.display = mode === 'practice' ? 'block' : 'none';
    document.getElementById('practice-controls').style.display = mode === 'practice' ? 'flex' : 'none';
    document.getElementById('quiz-view').style.display = mode === 'quiz' ? 'flex' : 'none';

    if (mode === 'quiz') {
        startNewQuizQuestion();
    }
}

function startNewQuizQuestion() {
    if (quizWords.length === 0) {
        alert('כל הכבוד! סיימת את כל המילים!');
        quizWords = [...vocabulary];
        score = 0;
        document.getElementById('score').textContent = score;
    }

    const randomIndex = Math.floor(Math.random() * quizWords.length);
    const correctWord = quizWords[randomIndex];

    document.getElementById('quiz-eng').textContent = correctWord.english;
    document.getElementById('words-left').textContent = quizWords.length;

    // Create options
    let options = [correctWord.hebrew];
    while (options.length < 4) {
        const randomOther = vocabulary[Math.floor(Math.random() * vocabulary.length)].hebrew;
        if (!options.includes(randomOther)) {
            options.push(randomOther);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, correctWord.hebrew, btn, randomIndex);
        grid.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btn, index) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        score += 10;
        document.getElementById('score').textContent = score;
        quizWords.splice(index, 1);

        setTimeout(() => {
            startNewQuizQuestion();
        }, 1000);
    } else {
        btn.classList.add('wrong');
        // Highlight correct one
        buttons.forEach(b => {
            if (b.textContent === correct) b.classList.add('correct');
        });

        setTimeout(() => {
            startNewQuizQuestion();
        }, 2000);
    }
}

// Speak integration
function speakWord() {
    window.speechSynthesis.cancel();

    const text = currentMode === 'practice'
        ? vocabulary[currentIndex].english
        : document.getElementById('quiz-eng').textContent;

    const utterance = new SpeechSynthesisUtterance(text);

    // Get available voices
    const voices = window.speechSynthesis.getVoices();

    // Attempt to find a "high quality" or preferred English voice
    // Windows often has 'Microsoft David' or 'Microsoft Zira'
    // Chrome has 'Google US English'
    let preferredVoice = voices.find(v => v.name.includes('Google US English')) ||
        voices.find(v => v.name.includes('English United States')) ||
        voices.find(v => v.lang === 'en-US' || v.lang === 'en_US') ||
        voices[0];

    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    utterance.lang = 'en-US';
    utterance.rate = 0.75; // Even slower as requested
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
}

// Some browsers need a slight nudge to load voices
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};
