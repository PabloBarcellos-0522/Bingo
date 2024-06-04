numeros = []
numeros[0] = 0
repetiu = false

var b
var i
var n
var g
var o

for (let p = 0; p < 5; p++) {
  do {
    b = Math.floor(Math.random() * 16 + 0)
    for (let i = 0; i < numeros.length; i++) {
      if (b == numeros[i]) {
        repetiu = true
        break
      } else {
        repetiu = false
      }
    }
  } while (repetiu)
  numeros.push(b)
  b = b + ""

  if (b.length == 1) {
    b = "0" + b
  }
  document.getElementsByClassName("coluna_1")[p].innerHTML = b

  do {
    i = Math.floor(Math.random() * 16 + 16)
    for (let j = 0; j < numeros.length; j++) {
      if (i == numeros[j]) {
        repetiu = true
        break
      } else {
        repetiu = false
      }
    }
  } while (repetiu)
  numeros.push(i)
  document.getElementsByClassName("coluna_2")[p].innerHTML = i

  if (p != 2) {
    do {
      n = Math.floor(Math.random() * 16 + 31)
      for (let i = 0; i < numeros.length; i++) {
        if (n == numeros[i]) {
          repetiu = true
          break
        } else {
          repetiu = false
        }
      }
    } while (repetiu)
    numeros.push(n)
    document.getElementsByClassName("coluna_3")[p].innerHTML = n
  }

  do {
    g = Math.floor(Math.random() * 16 + 46)
    for (let j = 0; j < numeros.length; j++) {
      if (g == numeros[j]) {
        repetiu = true
        break
      } else {
        repetiu = false
      }
    }
  } while (repetiu)
  numeros.push(g)
  document.getElementsByClassName("coluna_4")[p].innerHTML = g

  do {
    o = Math.floor(Math.random() * 16 + 61)
    for (let i = 0; i < numeros.length; i++) {
      if (o == numeros[i]) {
        repetiu = true
        break
      } else {
        repetiu = false
      }
    }
  } while (repetiu)
  numeros.push(o)
  document.getElementsByClassName("coluna_5")[p].innerHTML = o
}
