// 1. AGE CALCULATOR
function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const resultElement = document.getElementById('ageResult');
    if (!dobInput) return;

    const dob = new Date(dobInput);
    const today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
        years--;
    }
    resultElement.innerText = `${years >= 0 ? years : 0} years old`;
}

// 2. PERCENTAGE CALCULATOR
function calculatePercentage() {
    const obtained = parseFloat(document.getElementById('obtainedMarks').value) || 0;
    const total = parseFloat(document.getElementById('totalMarks').value) || 1;
    const resultElement = document.getElementById('percentageResult');

    let percentage = ((obtained / total) * 100).toFixed(0);
    if(percentage > 100) percentage = 100;
    
    resultElement.innerText = `${percentage} %`;
}

// 3. PASSWORD GENERATOR
function generatePassword() {
    const length = parseInt(document.getElementById('passLength').value);
    const resultElement = document.getElementById('passwordResult');
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*()_+-=";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    resultElement.innerText = password;
}

// 4. BMI CALCULATOR
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const heightCm = parseFloat(document.getElementById('height').value) || 1;
    const resultElement = document.getElementById('bmiResult');
    const segments = document.querySelectorAll('.indicator-bar .segment');

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
    
    let category = "Normal";
    segments.forEach(s => s.classList.remove('active'));

    if (bmi < 18.5) {
        category = "Underweight";
        segments[0].classList.add('active');
    } else if (bmi < 24.9) {
        category = "Normal";
        segments[1].classList.add('active');
    } else if (bmi < 29.9) {
        category = "Overweight";
        segments[2].classList.add('active');
    } else {
        category = "Obese";
        segments[3].classList.add('active');
    }

    resultElement.innerHTML = `BMI: <span class="highlight">${bmi} (${category})</span>`;
}

// 5. TEXT COUNTER
function countText() {
    const text = document.getElementById('textInput').value;
    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    document.getElementById('charCount').innerText = `${charCount} Characters`;
    document.getElementById('wordCount').innerText = `${wordCount} Words`;
}

// 6. UNIT CONVERTER
function convertKM() {
    const km = parseFloat(document.getElementById('kmInput').value) || 0;
    const resultElement = document.getElementById('kmResult');
    resultElement.innerText = `${(km * 1000).toLocaleString()} M`;
}

// 7. CGPA CALCULATOR
function calculateCGPA() {
    const cgpa = parseFloat(document.getElementById('cgpaInput').value) || 0;
    const resultElement = document.getElementById('cgpaResult');
    let percentage = (cgpa * 9.5).toFixed(2);
    if(percentage > 100) percentage = 100;
    resultElement.innerText = `${percentage}%`;
}

// 8. QR CODE GENERATOR
let qrInstance = null;
function generateQR() {
    const input = document.getElementById('qrInput').value.trim();
    const container = document.getElementById('qrCode');
    if(!input) return;
    
    container.innerHTML = "";
    qrInstance = new QRCode(container, {
        text: input,
        width: 110,
        height: 110,
        colorDark : "#000000",
        colorLight : "#ffffff"
    });
}