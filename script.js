//一番上に戻るアレ

const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ハンバーガーメニュー
  const button = document.querySelector(".button");
  const box = document.querySelector(".box");
  
  button.addEventListener("click",function(){
      button.classList.toggle("open");
      box.classList.toggle("open");
  });

//  スライダー
  const swiper = new Swiper('.swiper', {
    
    loop: true,
    speed:1000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

//indexのフェードイン

const target = document.querySelectorAll(".fade-in");

document.addEventListener("scroll", () =>{
    
for (let i = 0; i < target.length; i ++){
        const getDistance = target[i].getBoundingClientRect().top + target[i].clientHeight * 0.5
        if(window.innerHeight > getDistance){
            target[i].classList.add('show');
        }
    }
})

const toptarget = document.querySelectorAll(".topfade-in");
    
for (let i = 0; i < toptarget.length; i ++){
  const getDistance = toptarget[i].getBoundingClientRect().top + toptarget[i].clientHeight * 0.5
  if(window.innerHeight > getDistance){
    toptarget[i].classList.add('show');
  }
}

//クイズゲーム
const pageType = document.body.getAttribute('data-page');
if(pageType === 'quiz') {
const quizzes = [
  {
  question: "広島県の県庁所在地はどこでしょう？",
  options: ["廿日市市", "広島市", "呉市"],
  answer: "広島市"
  },
  {
      question: "広島県が生産数1位の海産物は何でしょう？",
      options: ["アナゴ", "マダイ", "牡蠣"],
      answer: "牡蠣"
  },
  {
      question: "広島県のプロサッカーチームはどれでしょう(県名は抜いています)？",
      options: ["サンフレッチェ", "ファジアーノ", "ガイナーレ"],
      answer: "サンフレッチェ"
  },
  {
      question: "広島県に世界遺産は何個ある？",
      options: ["0つ", "1つ", "2つ"],
      answer: "2つ"
  },
  {
    question: "広島県にある日本三景はどれでしょう？",
    options: ["宮島", "松島", "天橋立"],
    answer: "宮島"
  },
  {
      question: "広島県がワースト一位のものは何でしょう？",
      options: ["転出超過", "自転車ヘルメット着用率", "森林面積"],
      answer: "転出超過"
  },
  {
    question: "「MAZDAzoom-zoomスタジアム」のzoom-zoomとは何でしょう？",
    options: ["カメラなどの「ズーム」", "車の走行音", "マツダの昔の社名"],
    answer: "車の走行音"
  }
];

let currentQuizIndex = 0;
let score = 0;

function showQuiz() {
  const quiz = quizzes[currentQuizIndex];
  document.getElementById('question').textContent = quiz.question;
  document.getElementById('option1').textContent = quiz.options[0];
  document.getElementById('option2').textContent = quiz.options[1];
  document.getElementById('option3').textContent = quiz.options[2];
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = quizzes[currentQuizIndex].answer;
  if (selectedAnswer === correctAnswer) {
      score++;
      alert("正解！");
  } else {
      alert("不正解…");
  }

  currentQuizIndex++;
  if (currentQuizIndex < quizzes.length) {
      showQuiz();
  } else {
      document.getElementById('result').textContent = `終了！あなたのスコアは ${score} 点です。`;
  }
}

const buttons = document.querySelectorAll('.answerButton');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
      checkAnswer(this.textContent); 
  });
}

showQuiz();
}