function buscarsirena()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Cortesirena.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#corte').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#corte').append(' <div align="center"> <hr color="#6600FF">     Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg">    <br>    <br>    Talla:    '+DatosJSON.vestidos[i].Talla+'    <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con ese corte")
	 }
 });
}


$(document).ready(function(e){
	 document.addEventListener("deviceready",function(){
		 $('#sirena').tap(function(){
			 alert('dentro');
			 		 buscarsirena()
			 });
		 
	 });
});