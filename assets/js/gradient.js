// Elementos
const directions = document.querySelectorAll(".directions i")
const firsColor = document.querySelector("#firstColor")
const secondColor = document.querySelector("#secondColor")
const buttonGenerate = document.querySelector("#buttonGenerate")
const output = document.querySelector("#output")
const buttonCopy = document.querySelector("#buttonCopy")
let direction = "to top"
let gradient = ""

// Selecionando todas as direções e atribuindo evento
directions.forEach(item => {
    item.onclick = () => {
        document.querySelector(".active").classList.remove("active")

        item.classList.add("active")
        direction = item.getAttribute("data-dir")
    }
})

// Função parar gerar gradiente
function generateGradient() {
    gradient = `linear-gradient(${direction}, ${firsColor.value}, ${secondColor.value})`
    document.body.style.backgroundImage = gradient
    output.value = gradient
}

// Função para copiar código gradiente
function copyCode() {
    if(!output.value || output.value !== gradient) {
        window.alert("Gere um gradiente para continuar!")
    }
    else {
        navigator.clipboard.writeText(gradient)
        window.alert("Gradiente copiado com sucesso!")
    }
}

buttonGenerate.addEventListener("click", generateGradient)
buttonCopy.addEventListener("click", copyCode)