
let count = 0
const Btn = document.getElementById('btn')
const Now = document.getElementById('tim')

const init = () => {
  count = 0
  Btn.innerText = count

}
init()

Btn.addEventListener('click', () => {
  count++
  Btn.innerText = count
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
}

