const quizData = [
    {
        question: "1. Apa singkatan dari SAM dalam konteks model desain pembelajaran?",
        options: ["a. Successive Approximation Model", "b. Systematic Assessment Method", "c. Structured Analysis Model", "d. Sequential Approach to Learning"],
        correctAnswer: "a. Successive Approximation Models"
        
        
    },
    {
        question: "2. Apa fungsi dari tahap Evaluate dalam model SAM?",
        options: ["a. Mengembangkan konten kursus", "b. Mengumpulkan umpan balik dan memperbaiki kursus", "c. Mengidentifikasi tujuan pembelajaran", "d. Mempersiapkan rencana pengajaran"],
        correctAnswer: "b. Mengumpulkan umpan balik dan memperbaiki kursus"
    },
    {
        question: "3. Bagaimana tahap Design dalam model SAM membantu perancangan kursus?",
        options: ["a. Mengubah desain eksisting secara menyeluruh", "b. Mengintegrasikan umpan balik ke dalam desain instruksional", "c. Mengevaluasi kesuksesan kursus", "d. Menentukan topik pembelajaran"],
        correctAnswer: "b. Mengintegrasikan umpan balik ke dalam desain instruksional"
    },
    {
        question: "4. Apa tujuan tahap Develop dalam model SAM?",
        options: ["a. Mengumpulkan umpan balik dari siswa", "b. Mengajarkan kursus kepada kelompok kecil", "c. Mengembangkan prototipe yang siap untuk produksi", "d. Menganalisis pasar dan audiens target"],
        correctAnswer: "c. Mengembangkan prototipe yang siap untuk produksi"
    },
    {
        question: "5. Apa perbedaan utama antara model SAM dan model ADDIE dalam desain pembelajaran?",
        options: ["a. Jumlah tahap dalam proses desain", "b. Metode pengumpulan umpan balik", "c. Keberlanjutan proses pengembangan", "d. Penggunaan alat desain khusus"],
        correctAnswer: "a. Jumlah tahap dalam proses desain"
    },
    {
        question: "6. Apa manfaat utama dari menggunakan model SAM dalam pengembangan kursus online?",
        options: ["a. Pengembangan yang cepat dan iteratif", "b. Keseragaman pengajaran tanpa revisi", "c. Penghematan biaya produksi kursus", "d. Penilaian yang ketat terhadap desain awal"],
        correctAnswer: "a. Pengembangan yang cepat dan iteratif"
    },
     {
        question: "7. Apa yang dimaksud dengan Alpha dalam konteks model SAM?",
        options: ["a. Versi pertama kursus dengan beberapa kekurangan", "b. Versi kursus yang telah disempurnakan", "c. Tahap akhir pengembangan kursus", "d. Prototipe kursus yang siap untuk pengajaran"],
        correctAnswer: "a. Versi pertama kursus dengan beberapa kekurangan"
    },
    {
        question: "8. Kapan tahap Evaluate harus dilakukan dalam model SAM?",
        options: ["a. Setelah tahap Develop selesai", "b. Sebelum tahap Design dimulai", "c. Selama tahap Design berlangsung", "d. Setelah setiap iterasi tahap Develop"],
        correctAnswer: "d. Setelah setiap iterasi tahap Develop"
    },
    {
        question: "9. Apa yang dimaksud dengan Savvy Start dalam persiapan fase model SAM?",
        options: ["a. Pertemuan prototyping untuk merencanakan pengajaran", "b. Pengujian alpha versi kursus", "c. Pengembangan prototipe desain", "d. Pengumpulan umpan balik dari siswa"],
        correctAnswer: "a. Pertemuan prototyping untuk merencanakan pengajaran"
    },
    {
        question: "10. Apa keunggulan model SAM dibandingkan dengan model ADDIE?",
        options: ["a. Proses yang lebih cepat dan iteratif", "b. Pengelolaan yang lebih sederhana", "c. Keseragaman hasil tanpa revisi", "d. Pengembangan yang lebih teliti"],
        correctAnswer: "a. Proses yang lebih cepat dan iteratif"
    },
    {
        question: "11. Siapa yang pertama kali menggagas model desain pembelajaran SAM??",
        options: ["a. Michael Allen", "b. John Dewey", "c. Robert Gagné", "d. B.F. Skinner"],
        correctAnswer: "a. Michael Allen"
    },
    {
        question: "12. Apa yang dimaksud dengan pendekatan agile dalam model SAM?",
        options: ["a. Pendekatan yang cepat dan iteratif", "b. Pendekatan yang linear dan rigid", "c. Pendekatan yang lambat dan perlahan", "d. Pendekatan yang tidak memerlukan iterasi"],
        correctAnswer: "a. Pendekatan yang cepat dan iteratif"
    },
    {
        question: "13. Bagaimana model SAM dapat diadaptasi atau diterapkan dalam lingkungan pendidikan formal, seperti di sekolah atau perguruan tinggi?",
        options: ["a. Tidak ada cara untuk mengadaptasi model SAM dalam pendidikan forma", "b. Dengan mengabaikan pedoman kurikulum yang ada", "c. Dengan memasukkan prinsip-prinsip model SAM dalam pengembangan kurikulum", "d. Dengan mempertahankan metode pengajaran tradisional tanpa perubahan"],
        correctAnswer: "c. Dengan memasukkan prinsip-prinsip model SAM dalam pengembangan kurikulum"
    },
    {
        question: "14. Apa yang termasuk dalam tahap Desain dalam model SAM?",
        options: ["a. Tahap perencanaan awal", "b. Pembuatan prototipe kursus", "c. Pengembangan konten", "d. Penyusunan rencana pemasaran"],
        correctAnswer: "b. Pembuatan prototipe kursus"
    },
    {
        question: "15. Apa yang menjadi prinsip dasar dari model SAM?",
        options: ["a. Pengembangan cepat tanpa perlu evaluasi", "b. Pengembangan berdasarkan perasaan pengajar", "c. Iterasi berkelanjutan berdasarkan umpan balik nyata", "d. Model ini tidak memiliki prinsip dasar"],
        correctAnswer: "c. Iterasi berkelanjutan berdasarkan umpan balik nyata"
    },
    {
        question: "TEKAN NEXT & KERJAKAN 5 SOAL ESSAI BERIKUT SEBAGAI PR",
        correctAnswer: "",
        type: "essay"
    },
    {
        question: "16. Bandingkan pendekatan pengembangan kursus dengan menggunakan model SAM dengan menggunakan model tradisional seperti ADDIE. Apa keuntungan utama dan tantangan yang mungkin dihadapi dalam menerapkan model SAM dalam lingkungan pendidikan online?",
        correctAnswer: "",
        type: "essay"
    },
    {
        question: "17. Apa keuntungan utama dari menggunakan platform Thinkific, sebagaimana disebutkan dalam artikel, dalam pengembangan kursus online Anda?",
        correctAnswer: "",
        type: "essay"
    },
    {
        question: "18. Jelaskan tahap-tahap dalam model SAM, baik SAM1 (sederhana) maupun SAM2 (diperluas). Bagaimana pemilihan antara keduanya tergantung pada jenis proyek?",
        correctAnswer: "",
        type: "essay"
    },
    {
        question: "19. Bagaimana model SAM membantu dalam menghadapi revisi dan kebutuhan siswa dalam pembelajaran online? Apakah Anda setuju dengan pendapat ini berdasarkan hasil penelitian terbaru?",
        correctAnswer: "",
        type: "essay"
    },
    {
        question: "20. Jika Anda adalah seorang instruktur yang ingin mengembangkan kursus online, apakah Anda akan memilih model desain pembelajaran SAM atau ADDIE? Jelaskan alasan Anda dan berikan contoh bagaimana Anda akan mengimplementasikannya dalam proyek kursus Anda.",
        correctAnswer: "",
        type: "essay"
    },
   










    // Add more questions here...
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", selectAnswer);
        optionsContainer.appendChild(button);
    });
}
function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.innerText === quizData[currentQuestionIndex].correctAnswer;
    if (correct) {
        score++;
    }
    setSelectedOption(selectedButton, correct);
    disableOptions();
    showNextButton();
}

function setSelectedOption(button, correct) {
    if (correct) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
}

function disableOptions() {
    const options = document.querySelectorAll(".option-btn");
    options.forEach(option => {
        option.disabled = true;
    });
}

function showNextButton() {
    nextButton.classList.remove("hide");
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

nextButton.addEventListener("click", () => {
    resetState();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
    } else {
        endQuiz();
    }
});

function endQuiz() {
    questionElement.innerText = `Your score: ${score} out of ${quizData.length}`;
    optionsContainer.innerHTML = "";
}



startQuiz();
