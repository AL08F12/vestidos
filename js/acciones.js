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

function buscarstrapless()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Cortestrapless.php"
	 
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

function buscartirantes()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Cortetirantes.php"
	 
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

function buscardrapeado()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Cortedrapeado.php"
	 
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
//no
$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
		 			 alert('listo'); //no
					 
		 $('#sirena').tap(function(){
			 alert('dentro');
			 		 buscarsirena()
			 });
			 
			 		 $('#strapless').tap(function(){
			 alert('dentro');
			 		 buscarstrapless()
			 });
			 
			  $('#tirantes').tap(function(){
			 alert('dentro');
			 		 buscartirantes()
			 });
			  $('#drapeado').tap(function(){
			 alert('dentro');
			 		 buscardrapeado()
			 });
	 });
});


