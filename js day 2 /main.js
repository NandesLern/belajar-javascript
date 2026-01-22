document.title = 'Fernanda'
const body = document.body
//     body.append('Future')

// const h1 = document.createElement('h1')
// h1.textContent = '<marquee>Begin From Here<marquee>'
//     body.append(h1)

// const h2 = document.createElement('h2')
// h2.innerHTML = '<marquee>Hello Ceko 2028-29<marquee>'
//     body.append(h2)

// const h3 = document.createElement('h3')
// h3.innerText = '<marquee>Semoga Ya Allah, Aamiin<marquee>'
//     body.append(h3)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = 'Ok'
btn1.textContent = defaultText

const namaSaya = document.createElement('h2')
namaSaya.textContent = 'Fernanda'
namaSaya.style.display = 'none'
namaSaya.style.color = 'green'
body.append(namaSaya)

btn2.addEventListener('mouseover', function () {
    namaSaya.style.display = 'block'
})

btn2.addEventListener('mouseout', function () {
    const semuaText = document.querySelectorAll('oi')
    semuaText.forEach(item => {
        item.style.color = 'red'
    })
})

btn1.style.background = 'lightblue'

btn2.style.background = 'lightblue'



function clickButton() {
    btn1.style.background = 'pink'
    const newText = document.createElement('Oi')
    newText.textContent = 'HALLO EUROPE 2029'
    body.append(newText)
}

function ubahText() {
    btn1.textContent = 'eakkkk'
}

function oriText() {
    btn1.textContent = defaultText
}
