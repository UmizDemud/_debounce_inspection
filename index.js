const res = document.createElement('p')
document.body.append(res)

function debounce(f, delay) {
  return function(...args) {
    return setTimeout(() => {
			res.innerHTML += '<br />__debounced__<br />'
      f.apply(this, args)
    }, delay);
  }
}

function onChange() {
	res.innerHTML += `this.value = ${this.value || 'undefined'}<br />`
  // console.dir(this)
  console.log(this.value); // uncomment if you implemented debounce with correct this
}

let wrapper = debounce(onChange, 1000);


input1.addEventListener('input', onChange);
input1.addEventListener('input', wrapper);