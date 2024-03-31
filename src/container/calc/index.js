alert('Алєрт вилазить - все в порядку')

class Calc {
  static #value = ''

  static #isdot = false

  static #isequals = false

  static click7 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '7'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('7')
    }
    console.log('click7')
  }

  static click8 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '8'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('8')
    }
    console.log('click8')
  }

  static click9 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '9'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('9')
    }
    console.log('click9')
  }

  static click4 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '4'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('4')
    }
    console.log('click4')
  }

  static click5 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '5'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('5')
    }
    console.log('click5')
  }

  static click6 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '6'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('6')
    }
    console.log('click6')
  }

  static click1 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '1'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('1')
    }
    console.log('click1')
  }

  static click2 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '2'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('2')
    }
    console.log('click2')
  }

  static click3 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '3'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('3')
    }
    console.log('click3')
  }

  static click0 = () => {
    if (output.innerHTML == '0' || this.#isequals) {
      output.innerHTML = '0'
      this.#isequals = false
    } else {
      output.innerHTML = output.innerHTML.concat('0')
    }
    console.log('click0')
  }

  static clickdot = () => {
    if (this.#isdot) {
    } else if (this.#isequals) {
      output.innerHTML = '0.'
      this.#isequals = false
    } else {
      this.#isdot = true
      output.innerHTML = output.innerHTML.concat('.')
      console.log('clickdot')
    }
  }

  static clickC = () => {
    this.#isdot = false
    this.#isequals = false
    output.innerHTML = '0'
    console.log('reset')
  }

  static clickPlus = () => {
    this.#isdot = false
    this.#isequals = false
    output.innerHTML = output.innerHTML.concat('+')
    console.log('plus')
  }
  static clickMinus = () => {
    this.#isdot = false
    this.#isequals = false
    output.innerHTML = output.innerHTML.concat('-')
    console.log('plus')
  }
  static clickMult = () => {
    this.#isdot = false
    this.#isequals = false
    output.innerHTML = output.innerHTML.concat('*')
    console.log('plus')
  }
  static clickDivide = () => {
    this.#isdot = false
    this.#isequals = false
    output.innerHTML = output.innerHTML.concat('/')
    console.log('plus')
  }

  static clickEquals = () => {
    this.#isdot = false
    let result = eval(output.innerHTML)
    output.innerHTML = result
    this.#isequals = true
    console.log(result)
  }

  static clickdel = () => {
    let a = Array.from(output.innerHTML)
    console.log(a)
    let b = a.pop()
    if (b === '.') {
      this.#isdot = false
    }
    if (a.length === 0) {
      output.innerHTML = 0
    } else {
      output.innerHTML = a.join('')
    }
    console.log('del')
  }
}

window.calc = Calc
