<?php
    $url = "http://localhost/erp/content/icon/web-regular.icon.json";
    $opts = ['http' =>['method'  => 'POST']];
    $context  = stream_context_create($opts);
    $result = file_get_contents($url, false, $context);
    $result1 = json_decode($result);
    echo "<pre>";
    foreach ($result1 as $key => $value) {
        $value = (array) $value;
        $url = $value ['url'];
        
        echo "<img src='$url'>";
          switch ($key) {
            case 69:
                # code...
                echo "\n";
                break;
            case (70 *2)-1:
                echo "\n";
                break;
            case (70*3)-1:
                echo "\n";
                break;
            case (70*4)-1:
                echo "\n";
                break;
            case (70*5)-1:
                echo "\n";
                break;
            case (70*6)-1:
                echo "\n";
                break;
            case (70*7)-1:
                echo "\n";
                break;
            case (70*8)-1:
                echo "\n";
                break;
            case (70*9)-1:
                echo "\n";
                break;
            case (70*10)-1:
                echo "\n";
                break;
            case (70*11)-1:
                echo "\n";
                break;
        } 
    }
    $url = "http://localhost/erp/content/icon/web-logo.icon.json";
    $opts = ['http' =>['method'  => 'POST']];
    $context  = stream_context_create($opts);
    $result = file_get_contents($url, false, $context);
    $result1 = json_decode($result);
    echo "<pre>";
    foreach ($result1 as $key => $value) {
        $value = (array) $value;
        $url = $value ['url'];
        
        echo "<img src='$url'>";
          switch ($key) {
            case 69:
                # code...
                echo "\n";
                break;
            case (70 *2)-1:
                echo "\n";
                break;
            case (70*3)-1:
                echo "\n";
                break;
            case (70*4)-1:
                echo "\n";
                break;
            case (70*5)-1:
                echo "\n";
                break;
            case (70*6)-1:
                echo "\n";
                break;
            case (70*7)-1:
                echo "\n";
                break;
            case (70*8)-1:
                echo "\n";
                break;
            case (70*9)-1:
                echo "\n";
                break;
            case (70*10)-1:
                echo "\n";
                break;
            case (70*11)-1:
                echo "\n";
                break;
        } 
    }
    $url = "http://localhost/erp/content/icon/web-solid.icon.json";
    $opts = ['http' =>['method'  => 'POST']];
    $context  = stream_context_create($opts);
    $result = file_get_contents($url, false, $context);
    $result1 = json_decode($result);
    echo "<pre>";
    foreach ($result1 as $key => $value) {
        $value = (array) $value;
        $url = $value ['url'];
        
        echo "<img src='$url'>";
          switch ($key) {
            case 69:
                # code...
                echo "\n";
                break;
            case (70 *2)-1:
                echo "\n";
                break;
            case (70*3)-1:
                echo "\n";
                break;
            case (70*4)-1:
                echo "\n";
                break;
            case (70*5)-1:
                echo "\n";
                break;
            case (70*6)-1:
                echo "\n";
                break;
            case (70*7)-1:
                echo "\n";
                break;
            case (70*8)-1:
                echo "\n";
                break;
            case (70*9)-1:
                echo "\n";
                break;
            case (70*10)-1:
                echo "\n";
                break;
            case (70*11)-1:
                echo "\n";
                break;
        } 
    }
?>