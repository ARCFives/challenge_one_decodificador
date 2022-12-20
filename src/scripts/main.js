const buttonCript = document.getElementById('cript')
const buttonDescript = document.getElementById('descript')
let textCovert = document.getElementById('textConvert')
let textDescript = document.getElementById('textDescriConvert')
const imgSearch = document.querySelectorAll('.search-img')
const buttonCopy = document.getElementById('buttonCopy')
const clearTextArea = textDescript.previousElementSibling

function criptografar() {
  let text = textCovert.value
  if(!text){
    return
  }else {
    textDescript.innerHTML = ''
    clearTextArea.classList.add('desative')
    buttonCopy.classList.add('active')
    imgSearch.forEach(img => img.classList.add('desative'))
    for(let i of text) {
      switch (i) {
        case 'e':
            textDescript.innerHTML += 'enter'
          break;
        case 'i':
            textDescript.innerHTML += 'imes'
            break;
        case 'a':
            textDescript.innerHTML += 'ai'
            break;
        case 'o':
            textDescript.innerHTML += 'ober'
            break;
        case 'u':
            textDescript.innerHTML += 'ufat'
            break;
        default:
            textDescript.innerHTML += i
          break;
      }
    }
    textCovert.value = ''
  }  
}

function decodificar() {
  let text = textCovert.value
  if(!text){
    return
  }else {
    textDescript.innerHTML = ''
    clearTextArea.classList.add('desative')
    buttonCopy.classList.add('active')
    imgSearch.forEach(img => img.classList.add('desative'))
      if(text.includes('enter')) {
        text = text.replace(/enter/g, 'e')
      }
      if (text.includes('imes')) {
        text = text.replace(/imes/g, 'i')
      }
      if (text.includes('ai')) {
        text = text.replace(/ai/g, 'a')
      }
      if (text.includes('ober')) {
        text = text.replace(/ober/g, 'o')
      }
      if (text.includes('ufat')) {
        text = text.replace(/ufat/g, 'u')
      }
      textDescript.innerHTML = text
      textCovert.value = ''
  }
}

function copy() {
  let copyText = textDescript
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy")
  textDescript.innerHTML = ''
  clearTextArea.classList.remove('desative')
  buttonCopy.classList.remove('active')
  imgSearch.forEach(img => img.classList.remove('desative'))
}

buttonCript.addEventListener('click', criptografar)
buttonCopy.addEventListener('click', copy)
buttonDescript.addEventListener('click', decodificar)