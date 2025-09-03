<?php
include("connection.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <span class="emoji">❤️</span>
    <span class="emoji">❤️</span>
    <span class="emoji">❤️</span>
    <span class="emoji">❤️</span>
    <span class="emoji">❤️</span>
    <div id="Login form" class="form">
        <h2 class="title">Give me your name!!</h2>
        <form name="form" action="login.php" method="POST">
            <label class="label" for="username">Username</label>
            <input class="input" type="text" name="username" placeholder="Email or Phone" required />

            <label class="label" for="password">Password</label>
            <input class="input" type="password" name="password" placeholder="Password" required />

            <button type="submit" class="btn btn-primary" value="login" name="submit">Click Me</button>
        </form>
    </div>
</body>
</html>
