let idade = 18
let isMaiorIdade = false
let isCursandoOutraFaculdade = false

if(idade>=18 && isMaiorIdade && isCursandoOutraFaculdade){
    alert("Voce é maior de idade e terminou o ensino medio e ja esta cursando faculdade!!")
}else if(idade>=18 && isMaiorIdade && !isCursandoOutraFaculdade){
	alert("Voce é maior de idade e terminou ensino médio!")
} else if (idade>=18 && !isMaiorIdade && !isCursandoOutraFaculdade){
    alert("Voce é maior de idade!")
} else {
    alert("voce é menor de idade!")
}