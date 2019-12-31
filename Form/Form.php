<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Showing result of <?php echo $_POST["name"]; ?></title>
    <style>
        p{
            font-size: 4.16em;
        }
        *{
            cursor:progress;
        }
        button{
            display:block;
            width:10em;
            height:6em;
            font-family:"Chalkboard SE";
        }
    </style>
    <script>
    function fun(){
        text='<?php echo $_POST["name"]; ?>';
        alert(text+" is legendary!");
    }
    </script>
</head>
<body onload="fun()">
<p>
<i>Hello, <?php echo $_POST["name"]; ?> .</i><br><br>
<b>You are a legend of <?php echo $_POST["major"]; ?>!<br>
<?php echo $_POST["major"]; ?> is very proud that they have you!</b>
</p>
</body>
</html>