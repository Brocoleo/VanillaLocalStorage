llenarTabla()

function llenarTabla() {    
    let tbody = document.querySelector('#contenidoTabla tbody');
    tbody.innerHTML = ''
    let anombres =  JSON.parse(localStorage.getItem("nombres"));
    let aruts   = JSON.parse(localStorage.getItem("ruts"));
    let amarcas = JSON.parse(localStorage.getItem("marcas"));
    let amodelos = JSON.parse(localStorage.getItem("modelos"));
    let apatentes = JSON.parse(localStorage.getItem("patentes"));
    let acolores = JSON.parse(localStorage.getItem("colores"));

    let largo = anombres.length;
    if(largo>10){
        largo = 10;
    }
    for(let i = 0; i < largo; i++){
        let fila = document.createElement("tr");
        fila.setAttribute(
            'style',
            '  top: 629.47px;left: 678px;width: 66px;height: 27px;font-family: Barlow;font-size: 14px;text-align: left;color:#191919;',
          );
          
        let celdaNombres = document.createElement("td");
        celdaNombres.setAttribute(
            'style',
            '  padding: 25px;',
        );
        let celdaRuts = document.createElement("td");
        celdaRuts.setAttribute(
            'style',
            '  padding: 25px;',
        );
        let celdaMarcas = document.createElement("td");
        celdaMarcas.setAttribute(
            'style',
            '  padding: 25px;',
        );
        let celdaModelos = document.createElement("td");
        celdaModelos.setAttribute(
            'style',
            '  padding: 25px;',
        );
        let celdaPatentes = document.createElement("td");
        celdaPatentes.setAttribute(
            'style',
            '  padding: 25px;',
        );
        let celdaColores = document.createElement("td");
        celdaColores.setAttribute(
            'style',
            '  padding: 25px;',
        );
       
        let nodoNombre = document.createTextNode(anombres[i]);
        let nodoRut = document.createTextNode(aruts[i]);
        let nodoMarca = document.createTextNode(amarcas[i]);
        let nodoModelo = document.createTextNode(amodelos[i]);
        let nodoPatente = document.createTextNode(apatentes[i]);
        let nodoColor = document.createTextNode(acolores[i]);
        celdaNombres.appendChild(nodoNombre)
        celdaRuts.appendChild(nodoRut)
        celdaMarcas.appendChild(nodoMarca)
        celdaModelos.appendChild(nodoModelo)
        celdaPatentes.appendChild(nodoPatente)
        celdaColores.appendChild(nodoColor)
        fila.appendChild(celdaNombres); 
        fila.appendChild(celdaRuts);
        fila.appendChild(celdaMarcas);
        fila.appendChild(celdaModelos);
        fila.appendChild(celdaPatentes);
        fila.appendChild(celdaColores);
        
    
        tbody.appendChild(fila);
    }
}