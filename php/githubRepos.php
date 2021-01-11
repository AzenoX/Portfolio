<?php

    $html = file_get_contents("../json/repos.json");
    $json = json_decode($html);
    $repos = $json;






    foreach($repos as $repo){
        $langsWrapper = "";

        //Calculate total length
        $totalLength = 0;
        foreach($repo->langs as $lang => $val){
            $totalLength += $val;
        }

        foreach($repo->langs as $lang => $val){
            $percent = round((($val * 100) / $totalLength));
            $langsWrapper .= '<div class="'.strtolower(str_replace(' ', '_', $lang)).'" style="width: '.$percent.'%"><p>'.$lang.'</p><p>'.$percent.'%</p></div>';
        }


        echo '
            <div class="github-project">
                <p class="github--title">'.$repo->title.'</p>
                <p class="github--description">'.$repo->description.'</p>
                
                <div class="futureseparator"></div>
                
                <div class="github--lang-wrapper">
                    <p class="github--lang-wrapper--title">Languages:</p>
                    <div class="github--lang-wrapper--body">
                        '.$langsWrapper.'
                    </div>
                </div>
                
                <div class="github--footer">
                    <p>Creation: <span>'.$repo->creation.'</span></p>
                    <div><a class="futurebutton" target="_blank" href="'.$repo->link.'" style="width: 50%;">Link to Repo</a></div>
                    <p>Last push: <span>'.$repo->pushed.'</span></p>
                </div>
                
            </div>
        ';
    }

