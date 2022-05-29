<?php 
    include "../../webalizer/index.php";
    include "../../database/index.php";
    $_SESSION['message'] = '';
    if(isset($_POST['submit'])){
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $pass = mysqli_real_escape_string($conn, $_POST['password']);
      
        $email_search = "SELECT * FROM `customer` WHERE email = '$email'";
        $query = mysqli_query($conn, $email_search);

        $email_count = mysqli_num_rows($query); 

        if($email_count == 1){
            $_SESSION['correct'] = 'ok';
                $_SESSION['message'] = 'Login Successful';
                $_SESSION['admin'] = $row['Username'];
            if($row = mysqli_fetch_assoc($query)) {
                if ($row['password'] == md5($pass)) {
                    $_SESSION['name'] = $row['Username'];
                    $_SESSION['ID'] = $row['ID'];
                    $_SESSION['email'] = $row['email'];
                    $_SESSION['phone'] = $row['phone'];
                    $_SESSION['DOB'] = $row['DOB'];
                    $_SESSION['ip_address'] = $row['ip_address'];
                    $_SESSION['Last_login'] = $row['Last_login'];
                    $_SESSION['Last_login_ip_address'] = $row['Last_login_ip_address'];
                    $_SESSION['token'] = $row['token'];
                    $_SESSION['last_login_timestamp'] = $row['last_login_timestamp'];
                    $_SESSION['country_code'] = $row['country_code'];
                    $_SESSION['state'] = $row['state'];
                    $_SESSION['district'] = $row['district'];
                    $_SESSION['zip_code'] = $row['zip_code'];
                    $_SESSION['street'] = $row['street'];
                    $_SESSION['pass'] = "success";
                    header('location: index.php');
                } else {
                    $_SESSION['message'] = 'Error: Invalid password';
                }
            } else {
                $_SESSION['message'] = 'Error: Invalid Password';
            }
        } else {
            $_SESSION['message'] = "Error: Invalid Email!";
        }
    }
?>
<!DOCTYPE html>
<html class="no-js" lang="">
   <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>K.A.B : Login</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="../src/css/auth.css">
      <script src="../src/js/auth.js"></script>
   </head>
   <!-- <?=$_SESSION['message'];?> -->
   <body class="bg">
       <div class="container">
           <!--Data or Content-->
           <div class="box-1">
               <div class="content-holder">
                   <h2>Hello!</h2>
                   <p>K.A.B Store 
                       <br> Login</p>
                       <button class="button-2" onclick="login()">Login</button>
                    </div>
                </div>
                <!--Forms-->
                <div class="box-2">
                    <div class="alert alert-red">
                <?php //$_SESSION['message'];?>
                <?php // mysqli_error($conn)?>
            </div>
            <div class="login-form-container">
               <form action="<?=htmlentities($_SERVER['PHP_SELF'])?>" method="post">
                <h1>CMS Login</h1>
                <input type="email" name="email" placeholder="Email" class="input-field">
                <br><br>
                <input type="password" name="password" placeholder="Password" class="input-field">
                <br>
                <!-- <a href="" style="float:right;">Forgotten Password?</a> -->
                <br><br>
                <button class="login-button" name="submit" type="submit">Login</button>
               </form>
               <a href="signup.php">Sign Up</a>
            </div>
      </div>
   </body>
</html> 