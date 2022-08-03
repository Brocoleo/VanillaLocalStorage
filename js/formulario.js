let nombres = [];
let ruts = [];
let modelos = [];
let marcas = [];
let patentes = [];
let colores = [];

if(localStorage.getItem("nombres")!= null){
    console.log('no esta vacia')
    nombres = JSON.parse(localStorage.getItem("nombres"));
    ruts = JSON.parse(localStorage.getItem("ruts"));
    modelos = JSON.parse(localStorage.getItem("modelos"));
    marcas = JSON.parse(localStorage.getItem("marcas"));
    patentes = JSON.parse(localStorage.getItem("patentes"));
    colores = JSON.parse(localStorage.getItem("colores"));

}
function verificar() { 
    let nombre = document.forms.RegForm.nombre.value;
    let rut = document.forms.RegForm.rut.value;
    let modelo = document.forms.RegForm.modelo.value;
    let marca = document.forms.RegForm.marca.value;
    let patente = document.forms.RegForm.patente.value;
    let color = document.forms.RegForm.color.value;

    if (nombre == "" || rut == "" || modelo == ""|| marca == ""|| patente == ""|| color == "") {        
        window.alert("Por favor ingresar todos los campos!");  
        return false;
    }
    else{
        nombres.push(nombre);
        ruts.push(rut);
        modelos.push(modelo);
        marcas.push(marca);
        patentes.push(patente);
        colores.push(color);

        localStorage.setItem("nombres", JSON.stringify(nombres));
        localStorage.setItem("ruts", JSON.stringify(ruts));
        localStorage.setItem("marcas", JSON.stringify(marcas));
        localStorage.setItem("patentes", JSON.stringify(patentes));
        localStorage.setItem("colores", JSON.stringify(colores));
        localStorage.setItem("modelos", JSON.stringify(modelos));
    }
    

   
}