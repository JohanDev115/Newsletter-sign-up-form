document.getElementById('form').onsubmit = function(ev) {
  ev.preventDefault()
  const emailInput = ev.target[0];
  if (emailInput.value == "") {
    emailInput.required = true;
    return
  }
  const email = emailInput.value;
  document.getElementById('app').innerHTML = `
  <section class="confirmation-page">
    <section class="confirmation-msg">
      <aside>
        <img class="confirmation-msg__icon-success" src="./assets/images/icon-success.svg" alt="">
        <h1 class="confirmation-msg__title">Thanks for subscribing!</h1>
        <p class="confirmation-msg__description">A confirmation email has been sent to <span class="confirmation-msg__email">${email}</span>. Please open it and click the button inside to confirm your subscription</span></p>
      </aside>
    </section>
    <button class="dismiss-button">Dismiss message</button>
  </section>
  `;
};