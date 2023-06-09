class Mascota{	
	constructor(nombre,telefonoDuenio,fechaAlta,fechaSalida){		
		this.nombre=nombre;
		this.telefonoDuenio=telefonoDuenio;
		this.fechaAlta=fechaAlta;
		this.fechaSalida=fechaSalida;		
	}	
}
	
function mostrarPacientes(){	
	
	var nMasc;	
	
	id = localStorage.getItem("id");
	idM = parseInt(id);

	document.write('<head> <meta charset="ISO-8859-1"> <title>Indice</title>'
	+'<link rel="stylesheet" href="css/estilos.css" type="text/css"	media="screen">'
	+'<link	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"'
	+'rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"' 
	+'crossorigin="anonymous"></head>');

	document.write('<div class="container fluid"> <div class="row text-center"> <div class="col-12">');	
	document.write("<h1>Listado de los pacientes</h1>");	
	document.write('</div>	</div>	<div class="row text-center"> <div class="col-12">');
	
	for(let i=1;i<=idM;i++)
	{		
		nMasc=JSON.parse(localStorage.getItem(i));
		
		if(localStorage.getItem(i)!=null){
			
			document.write(" Paciente id = "+i);
			document.write("<br> Nombre: "+nMasc.nombre);
			document.write("<br> Telefono: "+nMasc.telefonoDuenio);
			document.write("<br> Fecha de alta: "+nMasc.fechaAlta);
			document.write("<br> Fecha de salida: "+nMasc.fechaSalida+"<br><br>");	
		}
	}	
	

	document.write('</div> </div> </div> <div class="row"><div class="col-8"></div>	<div class="col-4">');
	document.write("<a href='formulario.html'><button>Nuevo ingreso</button></a>");
	document.write('</div> </div>');
}

function GuardarDatos(form,id){
	
	let nombre = form.nombre.value;
	let telefono = form.telefono.value;
	let fechaAlta = form.fechaAlta.value;	
	let fechaSalida = form.fechaSalida.value;
	
	if(fechaSalida=="")
		fechaSalida="-"
	
	var mascota = new Mascota(nombre,telefono,fechaAlta,fechaSalida);
	
	//guardamos objeto
	localStorage.setItem(id, JSON.stringify(mascota));

	window.open("index.html");
}


function buscarInformacion(form){
	
		let telefono = form.telefono.value;
		
		let id = localStorage.getItem("id");
		let idM = parseInt(id);
		let pacienteNoEncontrado=true;


		document.write('<head> <meta charset="ISO-8859-1"> <title>Indice</title>'
		+'<link rel="stylesheet" href="css/estilos.css" type="text/css"	media="screen">'
		+'<link	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"'
		+'	rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"' 
		+'crossorigin="anonymous"></head>');		
		
		for(let i=1;i<=idM;i++)
		{					
			nMasc=JSON.parse(localStorage.getItem(i));
			
			if(nMasc.telefonoDuenio==telefono){
				

				document.write('<div class="container fluid"> <div class="row text-center"> <div class="col-12">');
				document.write("<h1>Datos Mascota</h1>");				
				document.write('</div>	</div>	<div class="row text-center"> <div class="col-12">');
				
				document.write(" Paciente id = "+i);
				document.write("<br> Nombre: "+nMasc.nombre);
				document.write("<br> Telefono: "+nMasc.telefonoDuenio);
				document.write("<br> Fecha de alta: "+nMasc.fechaAlta);
				document.write("<br> Fecha de salida: "+nMasc.fechaSalida+"<br><br><br><br>");				

				document.write("<h1>Cambiar datos del paciente</h1>")
		
				document.write('<form><label>Nombre de la mascota:</label><input type="text" size="50" name="nombre" id="id"  /> <br><br>'
				+'<label>Telefono del duenio:</label> <input	type="text" size="50" name="telefono"  />	<br><br>'
				+'<label>fecha de alta (dd-mm-yyyy):</label> <input	type="text" size="50" name="fechaAlta"  />'
				+'<br><br> <label>fecha de salida (dd-mm-yyyy):</label>	<input	type="text" size="50" name="fechaSalida"  /> <br><br>');
				
				document.write('<div class="row"> <div class="col-7"></div>	<div class="col-5">	');
				document.write('<input type="submit" value="Guardar" name="datos" onClick="GuardarDatos(this.form,'+i+')" /> </form>');	
				document.write('</div> </div>');
				
				document.write('</div> </div> <div class="row"><div class="col-2"></div> <div class="col-10">');
				document.write("<a href='alta.html'><button>Cambiar Paciente</button></a>");			


				document.write('</div> </div> </div>');

				pacienteNoEncontrado=false;
				break;
			}
		}
		
		if(pacienteNoEncontrado)
			alert("Paciente no encontrado")	
}

function calcularId(){
	
	var id;
	
	if(localStorage.getItem("id")==null)	
		id = localStorage.setItem("id",0);
		
	id = localStorage.getItem("id");
	numero = parseInt(id);
	numero = numero + 1;
	localStorage.setItem("id", numero);

	return id;		
}
