// =======================
// MUSIC SIMPLE (PLAY / PAUSE)
// =======================
const cards = document.querySelectorAll('.card');
const audios = document.querySelectorAll('audio');

let currentAudio = null;
let currentCard = null;

cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-audio');
    const audio = document.getElementById(id);

    // kalau klik lagu yang sama
    if (currentAudio === audio) {
      if (audio.paused) {
        audio.play().catch(() => {});
        card.classList.add('active');
      } else {
        audio.pause();
        card.classList.remove('active');
      }
      return;
    }

    // stop lagu sebelumnya
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    if (currentCard) {
      currentCard.classList.remove('active');
    }

    // play lagu baru
    audio.play().catch(() => {});
    card.classList.add('active');

    currentAudio = audio;
    currentCard = card;
  });
});
// =======================
// FADE SCROLL EFFECT
// =======================
const sections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    let progress = rect.top / windowHeight;
    let opacity = 1 - progress;

    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    section.style.opacity = opacity;
    section.style.transform = `translateY(${progress * 40}px)`;
  });
});


// =======================
// MEMORY SMART RANDOM (ANTI NGULANG)
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll('.row');
  const totalImages = 9;

  // buat array [1,2,3,...9]
  function generateArray() {
    return Array.from({ length: totalImages }, (_, i) => i + 1);
  }

  // shuffle array (Fisher-Yates)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  rows.forEach(row => {
    let finalImages = [];

    // bikin beberapa batch shuffle
    for (let i = 0; i < 6; i++) {
      let shuffled = shuffle(generateArray());
      finalImages = finalImages.concat(shuffled);
    }

    // convert ke HTML
    let content = finalImages.map(num => {
      return `<img src="item/foto/${num}.jpeg">`;
    }).join('');

    // duplikat biar seamless
    row.innerHTML = content + content;
  });
});
// =======================
// TYPEWRITER FIX
// =======================
document.addEventListener("DOMContentLoaded", () => {

  const text = `Hai sayangku... 💖

dari sekian banyak hari yang pernah aku jalani,
hari dimana aku ketemu kamu selalu jadi yang paling aku tunggu,
gak kerasa ya udah mau 2 tahun kita ngejalanin hubungan yang penuh dengan badai ini,
aku berharap kamu masih mau bertahan di badai badai yang gak tau kapan datangnya,
oh iya aku juga mau ngucapin terima kasih buat kamu yang masih bertahan, kuat terus yahh ngadepin gwehh hehehehe.
aku gak janji semuanya bakal selalu sempurna,tapi aku janji akan selalu berusaha buat kamu.
jangan cape ya jadi orang baik sayang.
makasih ya udah mau jadi tempat sekaligus rumah ternyaman buat aku huhuhuh....🥺

Happy birthday ya sayangkuuuu..... 🎂💖
segala doa yang baik adanya untukmu dan mimpimu yang mulia,
semoga semua hal baik selalu datang ke kamu,
semoga di bertambahnya usiamu itu menjadi bertambahnya rezekimu juga,
semoga segala yang kamu doakan perlahan terkabul sayangg amiiin,
semoga kamu bisa pelan pelan gapai yang kamu impikan selama ini,
semoga kamu di beri kesehatan dan sekali lagi di lancarkan rezekinya.

mungkin gada yang spesial di hati spesialmu inii 😌,
maaf yaa sayang belum bisa bales yang kamu kasih di hari spesialku kemarin,
tapi bakalan aku usahain buat kamu juga biar kamu bisa ngerasain 
seperti yang ku rasain kemaren.

sehat terus yaa sayang jangan cape jadi cewe gweh mwehhheee ♡


— Dari gweh nih,buat orang yang selalu gweh sayang 💌


sorry yach kalau masih kurang rapiihhh namanya juga masih belajar  
⸜(｡˃ ᵕ ˂ )⸝♡
`
;

  const typingEl = document.getElementById("typing");
  const letter = document.querySelector(".letter");

  let i = 0;
  let started = false;

  function typeWriter() {
    if (i < text.length) {
      const char = text[i] === "\n" ? "<br>" : text[i];
      typingEl.innerHTML += char;
      i++;
      setTimeout(typeWriter, 35);
    }
  }

  function checkScroll() {
    const rect = letter.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100 && !started) {
      started = true;
      typeWriter();
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // langsung cek juga (biar gak nunggu scroll)
});

function goToCake() {
  window.location.href = "cake.html";
}