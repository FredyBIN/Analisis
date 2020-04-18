document.getElementsByTagName('body')[0].onload=inicio;
var datos=[];
// setea incio a la app
function inicio() {
  console.log("inicio");
  document.getElementById('enviar').onclick=procesar;
  cargarDatos();
  imprimirFilas();
}
// proceso datos del formulario
function procesar()
    {
      console.log("Procesando...");
      datos.push([document.getElementById('apellido').value,document.getElementById('nombre').value,document.getElementById('fenac').value]);
      almacenar ()
      imprimirFilas();
limpiarForm()
    }
    function imprimirFilas()
      {
        var salida="";
        datos.forEach((item, i) => {
          salida=salida+"<div class='card text-white bg-dark mb-3'><div class='card-body'><p class='card-header'>"+"Listado de Alumnos<br></p><span> Nro: <span>"+i+ "</span></span> <br><span> Apellidos: <span>" +item[0]+"</span></span><br><span> Nombres: <span>"+ item[1]+"</span></span> <br><span> Fecha de nacimiento: <span>"+item[2]+"</span></span><br><br><button type='button' class='btEditar  btn btn-danger' data-id='"+i+"'>Editar</button>  <span><button type='button' class='btBorrar btn btn-warning' data-id='"+i+"'>Borrar</button> <button type='button' id='nuevo' onclick='limpiarForm()' class='btn btn-success'>Nuevo</button> </span></span><br></div></div>"
    });
        document.getElementById('datos').innerHTML=salida;
        var btedit=document.getElementsByClassName('btEditar');
        for (var i = 0; i < btedit.length; i++) {
          btedit[i].onclick=editar;
        }
        var btborrar=document.getElementsByClassName('btBorrar');
        for (var i = 0; i < btedit.length; i++) {
          btborrar[i].onclick=borrar;
        }
      }
      function cargarDatos(){
        console.log(JSON.parse(localStorage.datos));
        datos=JSON.parse(localStorage.datos);
      }
      function limpiarForm() {
        document.getElementById('apellido').value="";
        document.getElementById('nombre').value="";
        document.getElementById('fenac').value="";
        document.getElementById('apellido').focus();
      }



      function editar(e)
        {
          console.log("Editando...");
          var fila=e.target;
          var idx=fila.attributes["data-id"].value;
          document.getElementById('apellido').value=datos[idx][0];
          document.getElementById('nombre').value=datos[idx][1];
          document.getElementById('fenac').value=datos[idx][2];
          document.getElementById('apellido').focus();
        }
        function borrar(e){
          console.log("borrando...");
          var fila=e.target;
          var idx=fila.attributes["data-id"].value;
          datos.splice(idx,1);
          almacenar ();
          imprimirFilas();
        }
        //persiste los datos a traves de storage
        function almacenar () {
          console.log("Almacenando");
          localStorage.setItem("datos", JSON.stringify(datos));
        }
