function procesarRespuestas() {

    let total = 5;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["b", "a", "b", "b", "a"];

    for (let i = 1; i <= total; i++) {

        if (myForm["r" + i].value == null || myForm["r" + i].value == "") {
            alert("Debe responder todas la preguntas antes de poder enviar sus respuestas");
            return false;
        } else {
            if (myForm["r" + i].value === respuestasCorrectas[i - 1]) {
                puntos++;
            }
        }
    }

    let resultado = document.getElementById("resultados");
    resultado.innerHTML = "Obtuviste " + puntos + " puntos de " + total + " posibles"; 
    return false;

}
function repetirCuestionario() {
    // Actualizar el resultado a vacío
    document.getElementById("resultado").innerHTML = "";
}






