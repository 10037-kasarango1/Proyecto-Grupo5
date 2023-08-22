<?php
/*
 * provincias.php
 * 
 * Copyright 2017 ESPE <ESPE@LAPTOP_DELL>
 
 */

?>


<?php
	include "imprimir.php";
	include "America.php";
	include "Europa.php";
	include "Africa.php";
	include "Asia.php";
	include "Oseania.php";
	//include "AMERICA/ECUADOR.html";
	 //INDICES NUMERICOS

	$titulo = ["AMERICA","EUROPA","AFRICA","ASIA","OSEANIA"];
	$cubos=[$America,$Europa,$Africa,$Asia,$Oseania];
					   
/*		 
echo "<pre>";
    print_r($America);
echo "</pre>";
*/
for($i=0;$i<count($cubos);$i++){
imprimir_paises($cubos[$i],$titulo[$i]);
}

?>                    

	



