const res = document.createElement('p')
document.body.append(res)

function debounce(f, delay) {
  let timerId;

  return function(...args) {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      f.apply(this, args)
    }, delay);
  }
}

function onChange() {
	res.innerHTML += `this.value = ${this.value || 'undefined'}<br />`
  // console.dir(this)
  console.log(this.value); // uncomment if you implemented debounce with correct this
}

const debouncedOnChange = debounce(onChange, 1000);

input1.addEventListener('input', onChange);
input1.addEventListener('input', debouncedOnChange);
