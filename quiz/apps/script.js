const pertanyaan = [
  { soal: "Siapa ayah Naruto?", opsi: ["Jiraiya", "Minato Namikaze", "Kakashi", "Asuma"], benar: "Minato Namikaze" },
  { soal: "Apa jurus andalan Naruto?", opsi: ["Chidori", "Amaterasu", "Rasengan", "Shadow Clone Explosion"], benar: "Rasengan" },
  { soal: "Guru pertama Naruto?", opsi: ["Iruka Umino", "Kakashi", "Jiraiya", "Ebisu"], benar: "Iruka Umino" },
  { soal: "Anggota tim 7 selain Naruto?", opsi: ["Shikamaru & Ino", "Sasuke & Sakura", "Neji & Hinata", "Lee & Tenten"], benar: "Sasuke & Sakura" },
  { soal: "Siapa pencipta Akatsuki?", opsi: ["Madara", "Yahiko", "Nagato", "Obito"], benar: "Yahiko" }
];

const modePesan = {
  freeze: {title:"TIME STOP", text:"waktu akan berhenti", img:"sources/time-stop.gif"},
  god: {title:"GOD EYE", text:"kamu bisa melihat jawabanyang benar", img:"sources/god-eye.gif"},
  dead: {title:"LAST HOPE", text:"satu salah selesai melangkah", img:"sources/last-hope.gif"},
  party: {title:"PARTY", text:"susah saatnya horeg", img:"sources/party.gif"},
  normal: {title:"NORMAL", text:"biasa aja", img:"sources/normal.gif"},
};

let mode = null;
let waktu = 180;
let timerId = null;
let partyId = null;
let jawabanUser = {};
let quizSelesai = false;

function pilihMode(pilihan) {
  mode = pilihan;
  Swal.fire({
    title: modePesan[pilihan].title,
    text: modePesan[pilihan].text,
    imageUrl: modePesan[pilihan].img,
    imageWidth: 400,
    imageHeight: 200,
    scrollbarPadding: false,
  });
  document.getElementById("cards").style.display = "none";
  document.getElementById("timer").style.display = "block";

  if (mode !== "freeze") mulaiTimer();
  tampilkanPertanyaan();
  if (mode === "party") mulaiPartyMode();
}

function mulaiTimer() {
  timerId = setInterval(() => {
    waktu--;
    document.getElementById("time").textContent = waktu;
    if (waktu <= 0) {
      clearInterval(timerId);
      periksaJawaban();
    }
  }, 1000);
}

function tampilkanPertanyaan() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  pertanyaan.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "q-item";

    const teks = document.createElement("div");
    teks.className = "q-text";
    teks.textContent = `${index + 1}. ${item.soal}`;
    div.appendChild(teks);

    const opsiContainer = document.createElement("div");

    item.opsi.forEach((opsi) => {
      const btn = document.createElement("div");
      btn.className = "option";
      if (mode === "god" && opsi === item.benar) btn.classList.add("hint");
      btn.textContent = opsi;
      btn.onclick = () => pilihJawaban(index, opsi, btn);
      opsiContainer.appendChild(btn);
    });

    div.appendChild(opsiContainer);
    quiz.appendChild(div);
  });

  const tombol = document.createElement("button");
  tombol.textContent = "Kirim Jawaban";
  tombol.onclick = () => { periksaJawaban(); };
  quiz.appendChild(tombol);

  quiz.style.display = "block";
}

function mulaiPartyMode() {
  const warna = ['#ff5733','#33ff57','#3357ff','#ff33a1','#ffbd33','#33ffd9','#9d33ff'];
  partyId = setInterval(() => {
    document.body.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)];
  }, 10);
}

function pilihJawaban(noSoal, jawaban, elemen) {
  if (quizSelesai) return;
  jawabanUser[noSoal] = jawaban;

  const opsi = elemen.parentElement.querySelectorAll(".option");
  opsi.forEach(o => o.classList.remove("selected"));
  elemen.classList.add("selected");
  console.log(jawabanUser)

  if (mode === "dead" && jawaban !== pertanyaan[noSoal].benar) {
    setTimeout(periksaJawaban, 300);
  }
}

function periksaJawaban() {
  quizSelesai = true;
  clearInterval(timerId);
  clearInterval(partyId);
  document.body.style.backgroundColor = "#fff";
  

  let skor = 0;

  pertanyaan.forEach((item, i) => {
    if (jawabanUser[i] === item.benar) skor++;
  });

  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").classList.add("active");
  document.getElementById("score").textContent = skor;

  console.log(jawabanUser)
}
