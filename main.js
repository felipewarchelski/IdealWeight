var peso = parseFloat(prompt("Digite seu peso: "));
var altura = parseFloat(prompt("Digite sua altura: ")) / 100;
var pesoIdeal = peso / (altura * altura);
pesoIdeal = pesoIdeal.toFixed(2);

if (pesoIdeal <= 18.5) {
    alert("Seu IMC é " + pesoIdeal + ". Você está abaixo do peso.");
}

else if (pesoIdeal >= 18.6 && pesoIdeal <= 24.9) {
    alert("Seu IMC é " + pesoIdeal + ". Você está no peso ideal.");
}

else if (pesoIdeal >= 25.0 && pesoIdeal <= 29.9) {
    alert("Seu IMC é " + pesoIdeal + ". Você está levemente acima do peso.");
}

else if (pesoIdeal >= 30.0 && pesoIdeal <= 34.9) {
    alert("Seu IMC é " + pesoIdeal + ". Você está com obesidade Grau 1.");
}

else if (pesoIdeal >= 35.0 && pesoIdeal <= 39.9) {
    alert("Seu IMC é " + pesoIdeal + ". Você está com obesidade Grau 2.");
}

else if (pesoIdeal >= 40.0) {
    alert("Seu IMC é " + pesoIdeal + ". Você está com obesidade Grau 3.");
}

else {
    alert("Valor digitado é incorreto.");
}