<?php

require_once('../vendor/autoload.php');

use Curl\Curl;

$curl = new Curl();
$curl->setBasicAuthentication('AzenoX', '2ac41f5f8356d807a6709ac79ea668e5121da21c');
$curl->get("https://api.github.com/users/AzenoX/repos?sort=created");

$json = $curl->response;


$arr = array();
foreach ($json as $project) {

    try {
        $created = new DateTime($project->created_at);
        $pushed = new DateTime($project->pushed_at);
    } catch (Exception $e) {
        die();
    }


    $curl2 = new Curl();
    $curl2->setBasicAuthentication('AzenoX', '2ac41f5f8356d807a6709ac79ea668e5121da21c');
    $curl2->get($project->languages_url);

    $langs = $curl2->response;

    try {
        $created = new DateTime($project->created_at);
        $pushed = new DateTime($project->pushed_at);
    } catch (Exception $e) {
    }


    $array = array(
        "title" => ucfirst($project->name),
        "description" => $project->description,
        "link" => $project->html_url,
        "creation" => $created->format('d/m/Y H:i:s'),
        "pushed" => $pushed->format('d/m/Y H:i:s')
    );
    $languages = array();
    foreach ($langs as $language => $value) {
        $languages[$language] = $value;
    }
    $array['langs'] = $languages;

    //http://prntscr.com/wk0igq

    array_push($arr, $array);

}


if(file_put_contents("../json/repos.json", json_encode($arr, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo '<br>Writted - repos.json<br>';
}
else{
    echo "<br>Error - repos.json<br>";
}

