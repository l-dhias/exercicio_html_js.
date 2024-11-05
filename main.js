const form = document.getElementById('formulario');



form.addEventListener('submit', function(e){
    e.preventDefault()
})

const campoA = document.getElementById('Campo-A')
const campoB = document.getElementById('Campo-B')
const mensagemSucesso = `O Campo ${Campo-B.value} é maior que ${Campo-A.value}, Bom trabalho!`

if (campoA < campoB){

    const conatinerMensagemSucesso =  document.querySelector('.sucess-mensage')
    conatinerMensagemSucesso.innerHTML = mensagemSucesso
    conatinerMensagemSucesso.style.display = 'block'

    campoA.value = (' ')
    campoB.value = (' ')
} else {
    document.querySelector('.erro-mensage').style.display = 'block'
}
console.log(formulario)
