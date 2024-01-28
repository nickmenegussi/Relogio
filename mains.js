const hours = document.querySelector('.value-horas')
const minutes = document.querySelector('.value-minutos')
const sec = document.querySelector('.value-segundos')

function Time(){
    // criar uma varivel para pegar as horas,minutos e segundos
    const HoraAgora = new Date() 

    let hrs =  HoraAgora.getHours()
    let min = HoraAgora.getMinutes()
    let secondes = HoraAgora.getSeconds()

    // convertendo os valores html para as horas

    hours.textContent = hrs.toString().padStart(2, '0')
    minutes.textContent = min.toString().padStart(2, '0')
    sec.textContent = secondes.toString().padStart(2, '0')

    // converter os numero para string e depois add o padstrat
    // padstart preenche a string com um ou varios caractere especificado
}

setInterval(Time)