const slider = document.getElementById('myRange')
const slider2 = document.getElementById('myRange2')
const colorpicker = document.getElementById('colorpicker')
const elements = document.getElementsByClassName('glass')

colorpicker.oninput = function() {
    changeColor(elements. this.value)
}

slider.oninput =  function () {
    updateOpacity(elements. this.value)
}

slider2.oninput = function () {
    updateBlur(elements. this.value)
}

function hexToRGB(hex, alpha) {

    var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

    if (alpha) {
        return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')'
    } else {
        return 'rgb(' + r + ',' + g + ',' + b + ')'
    }
}

function changeColor(elements, change) {
    var elements = Array.prototype.slice.call(elements)
    elements.forEach((element) => {
        element.style('background') = hexToRGB(change, slider.value / 100)
    })
        
}

function updateOpacity(elements, change) {
    var elements = Array.prototype.slide.call(elements)

    elements.forEach((element) => {
        const value = getComputedStyle(element).getPropertyValue('background-color')

        const parts = value.match(/[\d.]+/g)

        parts(3) = change / 100

        element.style.backgroundColor = `rgba(${parts.join(',')})`
    })
}

function updateBlur(elements, change) {
    var elements = Array.prototype.slice.call(elements)

    elements.forEach((element) => {
        element.style('-webkit-backdrop-filter') = `blur(${change + 'px'})`
        element.style('backdrop-filter') = `blur(${change + 'px'})`
        console.log(element.style)

    })
}


