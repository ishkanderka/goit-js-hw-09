const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

function onFormSubmit(event) {
  event.preventDefault();

  const delayValue = Number(form.elements.delay.value);
  const stepValue = Number(form.elements.step.value);
  const amountValue = Number(form.elements.amount.value);

  for (let i = 0; i < amountValue; i++) {
    const position = i + 1;
    const delay = delayValue + i * stepValue;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

form.addEventListener('submit', onFormSubmit);
