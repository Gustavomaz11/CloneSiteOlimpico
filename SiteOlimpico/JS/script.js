const modal = document.getElementById('myModal')
const abrirModal = document.querySelector('#myQuiz')
const closeModal = document.querySelector('.modal-content button')
const milano = document.querySelector('.milano')
const milano2 = document.querySelector('#box-image button')
const paris = document.querySelector('#paris')
const coi = document.querySelector('#coi')
const losAngeles = document.querySelector('#losAngeles')
const brisbane = document.querySelector('#brisbane')
const museu = document.querySelector('#museu')
const store = document.querySelector('#store')
const foundation = document.querySelector('#foundation')
const atletas = document.querySelector('#atletas')
const esportes = document.querySelector('#esportes')
const move = document.querySelector('#move')

move.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/pt/lets-move/'
})

esportes.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/pt/esportes/'
})

atletas.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/pt/atletas/'
})

foundation.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/en/olympic-refuge-foundation/'
})

store.addEventListener('click', () => {
    window.location.href = 'https://shop.olympics.com/en/?_s=bm-fi-olympic-shop-prtsite-shoptopnav-240821mh'
})

museu.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/pt/olympic-games/brisbane-2032'
})

brisbane.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/pt/olympic-games/brisbane-2032'
})

losAngeles.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/pt/olympic-games/los-angeles-2028'
})

coi.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/ioc'
})

paris.addEventListener('click', () => {
    window.location.href = 'https://olympics.com/pt/paris-2024'
})

milano.addEventListener('click', () => {
    window.location.href = 'https://milanocortina2026.olympics.com/en'
})

function abrirMilano() {
    window.location.href = 'https://milanocortina2026.olympics.com/en'
}



abrirModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = 'block'
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = 'none'
})



const quizDisplay = document.querySelector(".quiz-display")
const allQuest = [
    {
        pergunta: "Em que ano foram realizadas as primeiras Olimpíadas da era moderna?",
        letraA: "1884",
        letraB: "1896",
        letraC: "1900",
        letraD: "1912",
        letraCorreta: "B"
      },
      {
        pergunta: "Qual cidade sediou os Jogos Olímpicos de Verão em 2008?",
        letraA: "Pequim",
        letraB: "Londres",
        letraC: "Atenas",
        letraD: "Sydney",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual país ganhou o maior número de medalhas de ouro nas Olimpíadas de 2016?",
        letraA: "Estados Unidos",
        letraB: "China",
        letraC: "Reino Unido",
        letraD: "Rússia",
        letraCorreta: "A"
      },
      {
        pergunta: "Quantas vezes o Brasil sediou os Jogos Olímpicos de Verão até 2024?",
        letraA: "1",
        letraB: "2",
        letraC: "3",
        letraD: "4",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual foi o primeiro esporte a ser incluído nos Jogos Olímpicos da antiguidade?",
        letraA: "Corrida",
        letraB: "Luta Livre",
        letraC: "Natação",
        letraD: "Arremesso de peso",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual cidade será a sede dos Jogos Olímpicos de Verão em 2024?",
        letraA: "Paris",
        letraB: "Los Angeles",
        letraC: "Tóquio",
        letraD: "Roma",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual atleta é conhecido como o 'Rei da Olimpíada' por ter ganhado 8 medalhas de ouro em uma única edição?",
        letraA: "Michael Phelps",
        letraB: "Usain Bolt",
        letraC: "Carl Lewis",
        letraD: "Mark Spitz",
        letraCorreta: "A"
      },
      {
        pergunta: "Em que esporte foi introduzido o uso do skate nas Olimpíadas de 2020?",
        letraA: "Skateboarding",
        letraB: "Surf",
        letraC: "Escalada",
        letraD: "BMX",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual país ganhou a primeira medalha de ouro na história dos Jogos Olímpicos de Verão?",
        letraA: "Grécia",
        letraB: "Itália",
        letraC: "Egito",
        letraD: "França",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual é o lema dos Jogos Olímpicos?",
        letraA: "Mais rápido, mais forte, mais alto",
        letraB: "Unidos pelo esporte",
        letraC: "Citius, Altius, Fortius",
        letraD: "Viva o esporte",
        letraCorreta: "C"
      },
      {
        pergunta: "Em qual cidade os Jogos Olímpicos de Verão de 1996 foram realizados?",
        letraA: "Atlanta",
        letraB: "Barcelona",
        letraC: "Sidney",
        letraD: "Atenas",
        letraCorreta: "A"
      },
      {
        pergunta: "Quantos esportes foram incluídos nos Jogos Olímpicos de 2020?",
        letraA: "33",
        letraB: "32",
        letraC: "31",
        letraD: "30",
        letraCorreta: "A"
      },
      {
        pergunta: "Quem é o atleta mais jovem a ganhar uma medalha de ouro nos Jogos Olímpicos?",
        letraA: "Nadia Comaneci",
        letraB: "Marjorie Gestring",
        letraC: "Simone Biles",
        letraD: "Michael Phelps",
        letraCorreta: "B"
      },
      {
        pergunta: "Qual é o símbolo dos Jogos Olímpicos?",
        letraA: "Cinco círculos entrelaçados",
        letraB: "Um atleta correndo",
        letraC: "Uma pira olímpica",
        letraD: "Um troféu",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual foi a primeira edição dos Jogos Olímpicos a ser transmitida pela televisão?",
        letraA: "1936",
        letraB: "1948",
        letraC: "1960",
        letraD: "1964",
        letraCorreta: "A"
      },
      {
        pergunta: "Em que ano os Jogos Olímpicos de Inverno foram realizados pela primeira vez?",
        letraA: "1924",
        letraB: "1932",
        letraC: "1948",
        letraD: "1952",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual é a distância da maratona, que é uma corrida tradicional dos Jogos Olímpicos?",
        letraA: "42,195 km",
        letraB: "40 km",
        letraC: "50 km",
        letraD: "35 km",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual país sediou os Jogos Olímpicos de Verão em 1964?",
        letraA: "Tóquio, Japão",
        letraB: "Roma, Itália",
        letraC: "Melbourne, Austrália",
        letraD: "Paris, França",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual é a principal cerimônia que ocorre no início dos Jogos Olímpicos?",
        letraA: "Cerimônia de Abertura",
        letraB: "Cerimônia de Encerramento",
        letraC: "Cerimônia de Medalhas",
        letraD: "Cerimônia de Agradecimento",
        letraCorreta: "A"
      },
      {
        pergunta: "Qual atleta olímpico é famoso por seu desempenho na modalidade de esqui alpino?",
        letraA: "Lindsey Vonn",
        letraB: "Shaun White",
        letraC: "Mikaela Shiffrin",
        letraD: "Bode Miller",
        letraCorreta: "A"
      }
]

const sortQuests = (arr)=> arr.sort(() => Math.random() - 0.5)

let selectionQuests = sortQuests(allQuest.slice(0,10))
let questIndex = 0
let pointsQuest = 0

quizDisplay.addEventListener('click', (evt)=> handleClick(evt))

function checkingCorrectAnswer (questIndex, answer){
  if(selectionQuests[questIndex]?.letraCorreta == answer)
    pointsQuest += 100  
  console.log(pointsQuest)
}

function handleClick (elementAnswer){
  console.log(selectionQuests)
  checkingCorrectAnswer(questIndex,elementAnswer.srcElement.value)
  questIndex++
  // next Quest
  console.log(questIndex)
  selectionQuests.map((quest,index)=>{
    if(questIndex == index){
      quizDisplay.innerHTML = `
        <p class="quest"><span>${index+1}-</span>${quest.pergunta}</p>  
        <div class="quiz-alternatives">
          <button value="A" class='alternative'>${quest.letraA}</button>
          <button value="B" class='alternative'>${quest.letraB}</button>
          <button value="C" class='alternative'>${quest.letraC}</button>
          <button value="D" class='alternative'>${quest.letraD}</button>
        </div>  
      `
  }
  })
  if(questIndex == 10){
    quizDisplay.innerHTML = `
      <h1>Parabéns você fez ${pointsQuest} pontos</h1>
    `
  }
}

// initial quest
selectionQuests.map((quest,index)=>{
    if(questIndex == index){
      quizDisplay.innerHTML = `
        <p class="quest"><span>${index+1}-</span> ${quest.pergunta}</p>  
        <div class="quiz-alternatives">
          <button value="A" class='alternative'>${quest.letraA}</button>
          <button value="B" class='alternative'>${quest.letraB}</button>
          <button value="C" class='alternative'>${quest.letraC}</button>
          <button value="D" class='alternative'>${quest.letraD}</button>
        </div>  
      `
    }
  }

)

