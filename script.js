function calculateAge() {

    const dob = document.getElementById("dob").value;

    const birthDate = new Date(dob);

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your Age is: " + age;
}


function calculatePercentage() {

    const obtained = document.getElementById("obtainedMarks").value;

    const total = document.getElementById("totalMarks").value;

    const percentage = (obtained / total) * 100;

    document.getElementById("percentageResult").innerText =
        "Percentage: " + percentage.toFixed(2) + "%";
}


function generatePassword() {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

    let password = "";

    for (let i = 0; i < 10; i++) {

        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    document.getElementById("passwordResult").innerText =
        password;
}