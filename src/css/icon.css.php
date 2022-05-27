<?php
    header('Content-Type: text/css; charset=utf-8');
    $url = "http://localhost/erp/content/dashboard.icon.json";
    $opts = ['http' =>['method'  => 'POST']];
    $context  = stream_context_create($opts);
    $result = file_get_contents($url, false, $context);
    $result1 = json_decode($result);
    foreach ($result1 as $key => $value) {
        // $res = $result1[$key];

        $res = (array) $value;
        echo ".".$res['name'].'-icon'." {\n";
        // echo "\t content: ''\n";
        echo "\tbackground: url('".$res['url']."') ;\n";
        echo "\tbackground-size: 20px 20px;\n";
        // echo "\tbackground-color: blue;\n";
        echo "\tbackground-repeat: no-repeat;\n";
        echo "\tbackground-position: center;\n";
        echo "\tdisplay: block;\n";
        echo "\twidth: 20px;\n";
        echo "\twidth: 20px;\n";
        echo "\theight: 20px;\n";

        echo "}\n";
    }
?>
