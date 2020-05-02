<?php
session_start();
//echo $_COOKIE['PHPSESSID'];
error_reporting(E_ERROR | E_WARNING | E_PARSE);
if (!$_SESSION['persona'])
{
  $_SESSION['persona']=[];
  setcookie("saludo","tu session a iniciado");
}
$nombre="";
$apellido="";
$fechaN="";
// if ($_GET)
// {
//   print_r($_GET);
//   $nombre=$_GET['nombre'];
//   $apellido=$_GET['apellido'];
//  $lista=[1,2,3,4];
// }
 if ($_POST)
{
   //print_r($_POST);
   array_push($_SESSION['persona'],
   [
     "nombre"=> $_POST['nombre'],
     "apellido"=> $_POST['apellido'],
     "fechaN"=> $_POST['fechaN']
    ] );
   $nombre=$_POST['nombre'];
   $apellido=$_POST['apellido'];
   $fechaN=$_POST['fechaN'];
}
//print_r($_SESSION['persona']);

 ?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tarea 08</title>
    <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="libs/bootstrap/css/estilos.css">
    <script src="libs/jquery/jquery.min.js.js" charset="utf-8"></script>
    <script src="libs/bootstrap/js/bootstrap.min.js" charset="utf-8"></script>
  </head>
  <body>
  <br>
<div class="container">
      <div class="card">
        <div class="card-body">
    <h2 class="card-title">Formularios con PHP</h2>
    <br>
    <div id="formulario">
      <form class="" action="formulario.php" method="post">
        <p>
          <label for="apellido"><b>Apellido:</b></label> <br>
          <input type="text" name="apellido" class="form-control" value=""placeholder="Apellido">
        </p>
        <p>
          <label for="nombre"><b>Nombre:</b></label><br>
          <input type="text" name="nombre" value=""  class="form-control"placeholder="Nombre" >
        </p>
        <p>
          <label for="nombre"><b>Fecha de Nacimiento:</b></label><br>
          <input type="date" name="fechaN" value="" class="form-control" placeholder="FechaN"><br>
        </p>
        <button type="submit" name="button" class="btn btn-success">Enviar</button> <a href="Cerrar.php" class="btn btn-danger">Cerrar Sesión</a>
      </form>
    </div>
      </div>
	  </div>
	  </div>
      <br>
<div class="container" id= "datos">
<div class="card">
<?php
$persona=$_SESSION['persona'];
?>
    <table border="1">
  <thead>
    <tr>
    <th><center>Apellido</center></th>
    <th><center>Nombre</center></th>
    <th><center>Fecha de Nacimiento</center></th>
</tr>
  </thead>
  <tbody id="datos">
    <?php
    foreach ($persona as $key => $value) {
      echo "<tr><td><center>".$value['apellido']."</td><td><center>".$value['nombre']."</td><td><center>".$value['fechaN']."</td></tr></center>";
    }
    ?>
  </tbody>
</table>
</div>
</div>

<footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright">
            &copy; Copyright <strong>DW2_2020</strong>. Todos los derechos reservados
          </div>
          <div class="credits">
            Designed by <a href="">Fredy Villalba</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

<script src="js/app.js" charset="utf-8"></script>
  </body>
</html>
