const scriptURL = 'https://script.google.com/macros/s/AKfycby8s34SHupaAolv3N89tBoGd0vEDpspmktNdheb_I6VGycbrwn_5ilWsaW1TyfrsQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
