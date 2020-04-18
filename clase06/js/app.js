document.getElementsByTagName('body')[0].onload=inicio;
  var datos=[];
//setea inicio de la app
function inicio() {
  console.log("Inicio");
  document.getElementById('enviar').onclick=procesar;
  //document.getElementById('storage').onclick=almacenar;
  cargarDatos();
  imprimirFilas();
}

//procesa datos del formulario
function procesar()
    {
      console.log("procesando...");
      if (document.getElementById('idx').value=="")
      {
      datos.push([document.getElementById('apellido').value,document.getElementById('nombre').value,document.getElementById('fenac').value]);
    } else {
      var idx=document.getElementById('idx').value;
      datos[idx][0]=document.getElementById('apellido').value;
      datos[idx][1]=document.getElementById('nombre').value;
      datos[idx][2]=document.getElementById('fenac').value;
    }
      almacenar();
      imprimirFilas();
      limpiarForm();
    }
    //imprime filas con datos de tabla
function imprimirFilas()
    {
    var salida="";
    datos.forEach((item, i) => {
     salida=salida+"<div class='card text-white bg-dark mb-3'><div class='card-body'><p class='card-header'>"+"Listado de Alumnos<br></p><span> Nro: <span>"+i+ "</span></span> <br><span> Apellidos: <span>" +item[0]+"</span></span><br><span> Nombres: <span>"+ item[1]+"</span></span> <br><span> Fecha de nacimiento: <span>"+item[2]+"</span></span><br><br><button type='button' class='btEditar  btn btn-danger' data-id='"+i+"'>Editar</button>  <span><button type='button' class='btBorrar btn btn-warning' data-id='"+i+"'>Borrar</button> <button type='button' id='nuevo' onclick='limpiarForm()' class='btn btn-success'>Nuevo</button> </span></span><br></div></div>"
    });
    document.getElementById('datos').innerHTML=salida;
  btTablas()
    }

//carga datos iniciales
function cargarDatos() {
  console.log(JSON.parse(localStorage.datos));
  datos=JSON.parse(localStorage.datos);
}
//reinicia el formulario
function limpiarForm() {
  document.getElementById('idx').value="";
  document.getElementById('apellido').value="";
  document.getElementById('nombre').value="";
  document.getElementById('fenac').value="";
  document.getElementById('apellido').focus();
}
//asigna eventos a botones de la tabla
function btTablas()
{
  var btedit=document.getElementsByClassName('btEditar');
  for (var i = 0; i < btedit.length; i++) {
    btedit[i].onclick=editar;
  }
  var btborrar=document.getElementsByClassName('btBorrar');
  for (var i = 0; i < btborrar.length; i++) {
    btborrar[i].onclick=borrar;
  }
}
//carga formulario con datos del array
function editar(e)
{

var fila=e.target;
var idx=fila.attributes["data-id"].value;
document.getElementById('idx').value=idx;
document.getElementById('apellido').value=datos[idx][0];
document.getElementById('nombre').value=datos[idx][1];
document.getElementById('fenac').value=datos[idx][2];
document.getElementById('apellido').focus();
}
//borra elemento del array
function borrar(e) {
  var fila=e.target;
  var idx=fila.attributes["data-id"].value;
  datos.splice(idx,1);
  almacenar();
  imprimirFilas();
}
// persistelos datos a traves de storage
function almacenar() {
  console.log("Almacenado");
  localStorage.setItem("datos", JSON.stringify(datos));
}
