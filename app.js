const form = document.querySelector('form');
const header = document.querySelector('header')
const score = document.querySelector('.score')
const answers = ['a', 'b', 'b', 'a']
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let total = 0
  const result = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
  console.log(result);

  answers.forEach((answer, index) => {
    if (answer === result[index]) {

      total += 25;
    }

  })
  // header.innerHTML += `<p style="text-align:center;padding:1rem; margin:1rem;font-size:3rem;color:gray">You are <span style="color:#007bff;">${total * 25}%</span> ninja</p>`
  scrollTo(0, 0)
  // second way
  score.style.display = 'block'
  // score.children[0].textContent = `${total * 25}%`
  let output = 0;
  const timer = setInterval(() => {
    score.querySelector('span').textContent = `${output}%`
    if (output === total) {
      clearInterval(timer)
    } else {
      output++
    }

  }, 10);

})




