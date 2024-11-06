const form = document.getElementById('formulario');



form.addEventListener('submit', function(e){
    e.preventDefault()


const campoA = document.getElementById('Campo-A').value
const campoB = document.getElementById('Campo-B').value
const mensagemSucesso = `O Campo ${campoB} é maior que ${campoA}, Bom trabalho!`

if (campoA < campoB){

    const conatinerMensagemSucesso =  document.querySelector('.sucess-mensage')
    conatinerMensagemSucesso.innerHTML = mensagemSucesso
    conatinerMensagemSucesso.style.display = 'block'

    campoA.value = (' ')
    campoB.value = (' ')
} else {
    document.querySelector('.erro-mensage').style.display = 'block'
}
})
console.log(formulario)
