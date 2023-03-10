const quizData = [
    {
      question: 'Hangisi İnsansız Savaş Uçağıdır?',
      a: 'Atak',
      b: 'Gökbey',
      c: 'Hürkuş',
      d: 'SoloTürk',
      e: 'Akıncı',
      correct: 'e',
    },
    {
      question: 'Hangisi Aralık 2022 de ilk uçuşunu gerçekleştirdi?',
      a: 'TB 2 ',
      b: 'Milli Muharip Uçak MMU',
      c: 'KızılElma (MİUS)',
      d: 'Hürjet',
      e: 'Akıncı',
      correct: 'c',
    },
    {
      question: 'Türk Savunma Sanayii Şirketleri arasından hangisi "HAVACILIK" alanında hizmet verir?',
      a: 'ASELSAN',
      b: 'HAVELSAN',
      c: 'OTOKAR',
      d: 'BAYKAR',
      e: 'DEARSAN',
      correct: 'd',
    },
    {
      question: 'Türk Savunma Sanayii Şirketleri arasından hangisi "Bilgi Teknolojileri" alanında hizmet verir?',
      a: 'MTU',
      b: 'TUSAŞ',
      c: 'HAVELSAN',
      d: 'ROKETSAN',
      e: 'BAYKAR',
      correct: 'c',
    },
    {
      question: ' Türk Savunma Sanayii Şirketleri arasından hangisi "Elektronik ve Yazılım" alanında hizmet verir?',
      a: 'HAVELSAN',
      b: 'VESTEL SAVUNMA',
      c: 'KOÇ SİSTEM',
      d: 'ALP',
      e: 'ASELSAN',
      correct: 'e',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
  
      `
      }
    }
  })
  