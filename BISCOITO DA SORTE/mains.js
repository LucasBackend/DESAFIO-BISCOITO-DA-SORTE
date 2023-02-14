const quebrarBiscoito = document.querySelector('#escolherBiscoito')
const buttonReset = document.querySelector('#btnReset')
const array  = [
"A vida trará coisas boas se tiver paciência.",
"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
"Não compense na ira o que lhe falta na razão.",
"Defeitos e virtudes são apenas dois lados da mesma moeda.",
"A maior de todas as torres começa no solo.",
"Não há que ser forte. Há que ser flexível.",
"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
"A juventude não é uma época da vida, é um estado de espírito.",
"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
"Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã."
]


function abrirmeubiscoito() {
  let match = Math.round(Math.random() * 10)
  fraseBiscoito = array[match]
  document.querySelector('.screen1').classList.add('hide')
  document.querySelector('body').classList.add('gradiente')
  document.querySelector('.screen2').classList.remove('hide')
  document.querySelector('#frase').innerText =  fraseBiscoito


}

function resetarBiscoito() {
  document.querySelector('.screen1').classList.remove('hide')
  document.querySelector('.screen2').classList.add('hide')
  document.querySelector('body').classList.remove('gradiente')

}

quebrarBiscoito.addEventListener('click',abrirmeubiscoito)

buttonReset.addEventListener('click',resetarBiscoito)



