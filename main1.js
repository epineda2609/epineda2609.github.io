var ganancias = [];

function calcular() {
    var pPaciente = parseInt(document.getElementById("pPaciente").value);
    var pConsultorio = parseInt(document.getElementById("porceConsul").value);
    var gMateriales = parseInt(document.getElementById("gMateriales").value);

    var ganancia = pPaciente - gMateriales - (pConsultorio*pPaciente*0.01);

    var pGanancia = Math.round(((ganancia/pPaciente)*100))

    ganancias.push({entrada: ganancia, entradap: pGanancia})

    document.getElementById("pPaciente").value = "";
    document.getElementById("porceConsul").value = "";
    document.getElementById("gMateriales").value ="";
    console.log(ganancias)

    table();
}

function table () {
    for (i= 0 ; i < ganancias.length; i++) {
        document.getElementById("tabla").innerHTML = "<tr><td>" + ganancias[i].entrada + "</td><td>" + ganancias[i].entradap + "</td></tr>"; 
    }
}