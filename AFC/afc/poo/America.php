<?php

//include "./America/colombia.html"

	 $cantones=array(array("QUITO","CAYAMBE","RUMIÑAHUI"),
     array("GUAYAQUIL","DAULE","SAMBORONDON","SALINAS"),
     array("CUENCA","LOJA"),
     array("ROCAFUERTE","CHONE")
    );


// MATRICES ASOCIATIVAS	           
$America= array (
       
       'ECUADOR' => array('Pichincha' => array("QUITO","CAYAMBE","RUMIÑAHUI"),
                             'Guayas' => $cantones[1],
                              'Azuay' => ["Cuenca"],
                             'Manabi' => $cantones[3],
                            'Tunguragua' => array ("Ambato"),
                            'Cotopaxi' => array(" "),
                            'Esmeraldas' => array("Tonsupa","Sambiza","Atacames")
                            ), 
         
        'ESTADOS UNIDOS' =>array('NEW YORK' => ["BUFALO","ALBANY","TROY","NEW YORK"],
                            'PENSILVANNIA' => ["FILALDEFIA","PISTBURG"],
                                 'FLORIDA' => ["MIAMI","ORLANDO","TAMPA","FORT LOUDARLE"],
                                'COLORADO' =>["GOLDEN","AVON","DURANGO","COMMERCECITY","STERLING","PUEBLOWEST"]),
             
      'ARGENTINA' =>array('BUENOS AIRES' => ["CORRIENTES","BUENOS AIRES","LA PAMPA","JUJUY"],
                                   'JUJUY' => ["FILALDEFIA","PISTBURG"],
                                'LA PAMPA' => ["MIAMI","ORLANDO","TAMPA"]),
              
     'COLOMBIA' => array('ANTIOQUIA' => ["MEDELLIN","PASTO"],
                            'ARAUCA' => ["RUMBA","BOGOTA","BARANQUILLA"] )

       );
       


?>