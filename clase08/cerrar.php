 <?php
  session_start();
  unset($_SESSION['persona']);
  session_destroy();
  header("Location: formulario.php");
  exit;
  ?>
 <a href="Tarea10.php">Volver</a>
