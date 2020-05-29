 <?php

       //ENTER YOUR DATABASE CONNECTION INFO BELOW:
         $hostname="localhost";
         $database="project-wtl";
         $username="root";
         $password="";

   //DO NOT EDIT BELOW THIS LINE
     $link = mysql_connect($hostname, $username, $password);
     mysql_select_db($database) or die('Could not select database');
 ?> 