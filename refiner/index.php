<form enctype="multipart/form-data" method="post">
    <input type="file" name="file[]" id="file" multiple>
    <input type="submit" value="Submit">
</form>
<?php
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];
        $filename = $file['name'];
        $filetype = $file['type'];
        $filetemp = $file['tmp_name'];
        echo "<pre>";
        // print_r($filename);
        foreach ($filename as $key => $value) {
            $value = str_replace("bxl-", "", $value);
            $value = str_replace(".svg", "", $value);
            $_filename[] = $value;
        }
        foreach ($filetype as $key => $value) {
            $_filetype[] = $value;
        }
        foreach ($filetemp as $key => $value) {
            $_temp[] = $value;
        }
        for ($i=0; $i < count($filename); $i++) { 
            $_file = [
                "name" => $_filename[$i],
                "url" => "data:".$_filetype[$i].";base64,". base64_encode(file_get_contents($_temp[$i]))
            ];
            $_filerefine[] = $_file;
        }
        $_filerefine = json_encode($_filerefine, JSON_PRETTY_PRINT);
        print_r($_filerefine);
    }
?>