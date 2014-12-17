function buscarmodelo()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Modelofoto.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#modelo').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#modelo').append(' <div align="center"> <hr color="#6600FF"> Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <br> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos")
	 }
 });
}


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

function buscarorganza()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Telaorganza.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#tela').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#tela').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br>   Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con esa tela")
	 }
 });
}

function buscartul()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Telatul.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#tela').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#tela').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br>   Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con esa tela")
	 }
 });
}

function buscarseda()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Telaseda.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#tela').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#tela').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br>   Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con esa tela")
	 }
 });
}

function buscarguipiur()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Telaguipiur.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#tela').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#tela').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br>   Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con esa tela")
	 }
 });
}

function buscarshantu()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Telashantu.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#tela').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#tela').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br>   Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con esa tela")
	 }
 });
}

function buscarraso()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Telaraso.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#tela').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#tela').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br>   Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con esa tela")
	 }
 });
}

function buscarmanta()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Telamanta.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#tela').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#tela').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br>   Color:    '+DatosJSON.vestidos[i].Color+'  <br>    <br>  Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con esa tela")
	 }
 });
}

function buscarrojo()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Colorrojo.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#color').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#color').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br> Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con ese color")
	 }
 });
}

function buscarrosa()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Colorrosa.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#color').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#color').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br> Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con ese color")
	 }
 });
}

function buscarazul()
{
			 alert('func');
 $.ajax({

	type: "POST",
	url: "http://192.168.1.166/proyecto/Colorazul.php"
	 
 }).done(function(msg){
	 var DatosJSON = JSON.parse(msg);
	 alert(msg);
	 if (DatosJSON.datos ==1)
	 {
		 alert('datos');
		 $('#color').empty();
		  for (var i = 0; i <DatosJSON.vestidos.length  ;i++)
		  {
			  $('#color').append(' <div align="center"> <hr color="#6600FF">     Modelo:    '+DatosJSON.vestidos[i].Modelo+' <br> <br> Fotografia: <img src="http://192.168.1.166/proyecto/recursos/fotos/'+DatosJSON.vestidos[i].Modelo+'.jpg"> <hr color="#6600FF">     </div>');
		  }
		 
	 }
	 
if (DatosJSON.datos ==0)
	 {
		 alert ("no hay vestidos con ese color")
	 }
 });
}
//no
$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
		 			 alert('listo'); //no
					 
		         
                          $('#modelo').tap(function(){
			 alert('dentro');
			 		 buscarmodelo()
			 });		          
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
                          $('#organza').tap(function(){
			 alert('dentro');
			 		 buscarorganza()
			 });
			  $('#tul').tap(function(){
			 alert('dentro');
			 		 buscartul()
			 });
			  $('#seda').tap(function(){
			 alert('dentro');
			 		 buscarseda()
			 });
			  $('#guipiur').tap(function(){
			 alert('dentro');
			 		 buscarguipiur()
			 });
			  $('#shantu').tap(function(){
			 alert('dentro');
			 		 buscarshantu()
			 });
			  $('#raso').tap(function(){
			 alert('dentro');
			 		 buscarraso()
			 });
			  $('#manta').tap(function(){
			 alert('dentro');
			 		 buscarmanta()
			 });
			  $('#rojo').tap(function(){
			 alert('dentro');
			 		 buscarrojo()
			 });
			  $('#rosa').tap(function(){
			 alert('dentro');
			 		 buscarrosa()
			 });
			  $('#azul').tap(function(){
			 alert('dentro');
			 		 buscarazul()
			 });
	 });
});


