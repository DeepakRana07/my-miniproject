<?php 
include("./includes/header.php");
include("./includes/footer.php");
include("./includes/config.php");
?>

<?php
if(isset($_SESSION["username"])){
  header("location:index.php");
}

if (isset($_POST["submit"])){ 
  // checking for null entries
  if($_POST["email"]=="" OR $_POST["username"] == "" OR $_POST["password"]=="" ){
    echo "some inputs are empty";
  }
  else{
    //storing form data input in variables//
    $email=$_POST['email'];
    $username=$_POST['username'];
    $password=$_POST['password'];
    $ip_add=$_SERVER['REMOTE_ADDR'];

    //insert query prepration //
    $insert=$conn->prepare("INSERT INTO users(email,username,mypassword,ip_add) VALUES(
      :email,:username,:mypassword,:ip_add)");
    //executing the sql queries//
    $insert->execute([
      ":email"=>$email,
      ":username"=>$username,
      ":mypassword"=>password_hash($password,PASSWORD_DEFAULT),
      ":ip_add"=>$ip_add]);

  }
}



?>


<div class="container " style="max-width:500px;">
<form method ="POST" action="register.php">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input name="username" type="text" class="form-control" id="username" aria-describedby="emailHelp">
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button name="submit" type="submit" class="btn btn-primary">Submit</button>
</form>
</div>