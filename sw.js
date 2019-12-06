let Count = 0
const Btn = document.getElementById('Button')
const Now = document.getElementById('time')

const init = () => {
  count = 0
  Btn.innerText = count
}
init()

Btn.addEventListener('click', () => {
  count++
  Btn.innerText = count
})


