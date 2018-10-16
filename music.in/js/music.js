//javascript music.in//

//variaveis
let inputBusca = document.getElementById("busca");
let inputNome = document.getElementById("input-nome");
let inputArtista = document.getElementById("input-artista");
let inputComentario = document.getElementById("text-comentario");
let inputUsuario = document.getElementById("input-usuario");
let inputSenha = document.getElementById("input-senha");

let inputUsuarioLogin = document.getElementById("input-usuario-login");
let inputSenhaLogin = document.getElementById("input-senha-login");
let idUsuario = document.getElementById("id-usuario");


let nav = document.getElementById("navbar-menu");

let dropdownGenero = document.getElementById("dropdown-genero");
let vdropdownGenero = document.getElementById("dropdown-genero").value;
let botaoBusca = document.getElementById("botao-busca");
let botaoEnviar = document.getElementById("botao-enviar");

//variaveis globais

let logado = false;
let usuarioLogado;

//variaveis contaCurtidas ------------------------



//--------------------------------------

//roda função ao carregar pagina
window.onload = initPage;
function initPage(){
	let nomeu = document.getElementById("nome-usuario");
	let nomePag = document.getElementById("nome-pagina");

	if(window.localStorage.getItem('usuarioLogado') == null || window.localStorage.getItem('usuarioLogado') == "null"){
		logado = false;
	} else {
		usuarioLogado = window.localStorage.getItem('usuarioLogado');
		logado = true;
		nomeu.innerHTML = "Usuario " + usuarioLogado;
	}

	qnt = window.localStorage.
	getItem('qnt');

	if(qnt != null){
		montaPaginas();
	}



	/*if(qnt != null){
		for(let i=0; i<qnt; i++){
			let nome = window.localStorage.getItem('nome' + i);
			let artista = window.localStorage.getItem('artista' + i);
			let genero = window.localStorage.getItem('genero' + i);
			let comentario = window.localStorage.getItem('text-comentario' + i);
			let dono = window.localStorage.getItem('dono' + i);

			let imagem = "";
			let caminho = "";


			if(nomePag == vdropdownGenero ){
				criaCard();

			}else{
				return;
			}


		}

	}*/

}




function montaPaginas(){
	let campos = document.URL.split("/");
	let nomePagina = campos[campos.length - 1];
	if(nomePagina == "rock.html"){

		//alert("pagina de rock");

		let divCard = document.getElementById("rock");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Rock"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);
				curtidaRock = window.localStorage.getItem('curtidaRock'+ i);


				let imagem = "../../img/icones/rock.jpg";

				let divCard = document.getElementById("rock");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


			}



			/*if(nomePag == vdropdownGenero ){
				criaCard();

			} else {
				return;
			}*/

		}

	} else if(nomePagina == "folk.html"){

		//alert("pagina de folk");

		let divCard = document.getElementById("folk");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Folk"){

				//alert("achou");

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/folk.jpg";

				let divCard = document.getElementById("folk");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}

	} else if(nomePagina == "pop.html"){

		//alert("pagina de pop");
		let divCard = document.getElementById("pop");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Pop"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/pop.jpg";

				let divCard = document.getElementById("pop");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "alternative.html"){

		//alert("pagina de alternativa");

		let divCard = document.getElementById("alternativa");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Alternativa"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/alternative.jpg";

				let divCard = document.getElementById("alternativa");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "blues.html"){


		//alert("pagina de blues");

		let divCard = document.getElementById("blues");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Blues"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/blues.jpg";

				let divCard = document.getElementById("blues");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "classical.html"){

		//alert("pagina de classica");

		let divCard = document.getElementById("classica");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Classica"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/classical.jpg";

				let divCard = document.getElementById("classica");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "country.html"){

		//alert("pagina de country");

		let divCard = document.getElementById("country");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Country"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/country.jpg";

				let divCard = document.getElementById("country");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "hiphop.html"){


		//alert("pagina de hiphop");

		let divCard = document.getElementById("hiphop");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Hip Hop"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/hiphop.jpg";

				let divCard = document.getElementById("hiphop");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "jazz.html"){

		//alert("pagina de jazz");

		let divCard = document.getElementById("jazz");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Jazz"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/jazz.jpg";

				let divCard = document.getElementById("jazz");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "metal.html"){

		//alert("pagina de metal");

		let divCard = document.getElementById("metal");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Metal"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/metal.jpg";

				let divCard = document.getElementById("metal");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "randb.html"){

		//alert("pagina de R&B");

		let divCard = document.getElementById("randb");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "R&B"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/randb.jpg";

				let divCard = document.getElementById("randb");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	} else if(nomePagina == "reggae.html"){

		//alert("pagina de Reggae");

		let divCard = document.getElementById("reggae");
		divCard.innerHTML = "";

		for(let i=0; i<qnt; i++){

			let genero = window.localStorage.getItem('genero' + i);

			if(genero == "Reggae"){

				let nome = window.localStorage.getItem('nome' + i);
				let artista = window.localStorage.getItem('artista' + i);
				let comentario = window.localStorage.getItem('text-comentario' + i);
				let dono = window.localStorage.getItem('dono' + i);

				let imagem = "../../img/icones/reggae.jpg";

				let divCard = document.getElementById("reggae");

				divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + nome + "</h5><p class=" + "'card-text'" + ">artista: " +
				artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";



			}

		}
	}

}







//--------------------------------------------------------------------------------

//event listeners
botaoBusca.addEventListener('click', pesquisa);
//botaoEnviar.addEventListener('click', salvarDados);


//--------------------------------------------------------------------------------

//funções
function pesquisa(){
	alert("voce buscou por: " + inputBusca.value);
	inputBusca.value = " ";
}

function  salvarDados() { //funcionando

	inputBusca = document.getElementById("busca");
	inputNome = document.getElementById("input-nome");
	inputArtista = document.getElementById("input-artista");
	inputComentario = document.getElementById("text-comentario");
	dropdownGenero = document.getElementById("dropdown-genero");


	if (inputNome.value == "" || inputArtista.value == "" || dropdownGenero.options[dropdownGenero.selectedIndex].text == "..." || inputComentario.value == ""){ //validação
		console.log(inputNome.value, inputArtista.value, dropdownGenero.options[dropdownGenero.selectedIndex].text, inputComentario.value);
		alert('Preencha todos os campos! do salvar dados');
	} else {

		qnt = window.localStorage.getItem('qnt');

		if(qnt == null){
			qnt = 0;
		}
		//alert("tem " + (Number(qnt) + 1) + " itens");

		//alert("nome: " + inputNome.value + ", artista: " + inputArtista.value + ", genero: " + dropdownGenero.options[dropdownGenero.selectedIndex].text + ", comentario: " + inputComentario.value);
		if(usuarioLogado == null || logado != true){
			alert("Faça login antes!");
			return;
		} else {
			window.localStorage.setItem('dono' + qnt, usuarioLogado);


			window.localStorage.setItem('nome' + qnt, inputNome.value);
			window.localStorage.setItem('artista' + qnt, inputArtista.value);
			window.localStorage.setItem('genero' + qnt, dropdownGenero.options[dropdownGenero.selectedIndex].text);
			window.localStorage.setItem('text-comentario' + qnt, inputComentario.value);


			qnt++;

			window.localStorage.setItem('qnt', qnt);


			alert("Cadastro realizado!");

			//criaCard();


			//adicionaNaPagina(indicacao);

			//montaPaginas();

			montaPaginas();


			inputNome.value = "";
			inputArtista.value = "";
			dropdownGenero.options[dropdownGenero.selectedIndex].text = "...";
			inputComentario.value = "";
		}
	}

	/*"<div class=" + "card" + "style=" + "width: 18rem;" + "><img class=" + "card-img-top" + "src=" + ".../100px180/" + "alt=" + "Card image cap" + "><div class=" + "card-body" + "><h5 class=" + "card-title" + ">"  + inputNome + "</h5><p class=" + "card-text" + ">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=" + "#" +  "class=" + "btn btn-primary" + ">Go somewhere</a></div></div>"
	main.innerHTML = "<p>nome: " + inputNome.value + "</p>" + "<p>artista: " + inputArtista.value + "</p>" + "<p>genero: " + dropdownGenero.options[dropdownGenero.selectedIndex].text + "</p>" + "<p>comentario: " + inputComentario.value + "</p>"*/
}

function salvarUsuario(){

	inputUsuario = document.getElementById("input-usuario");
	inputSenha = document.getElementById("input-senha");
	let nomeu = document.getElementById("nome-usuario");



	if (inputUsuario.value == "" || inputSenha.value == ""){ //validação

		alert('Preencha todos os campos! do salvar usuario');

	} else {

		let encontrouIgual = false;

		qntu = window.localStorage.getItem('qntu');

		if (qntu == null) {
			qntu = 0;
		}

		console.log("nome digitado: " + inputUsuario.value);

		for(let i=0; i<qntu; i++){
			let usuario = window.localStorage.getItem('usuario' + i);
			console.log("Nome a ser verficado: " + usuario);
			if(usuario == inputUsuario.value){
				alert("Nome já cadastrado!");
				encontrouIgual = true;
			}
		}


		if(encontrouIgual != true){
			window.localStorage.setItem('usuario' + qntu, inputUsuario.value);
			window.localStorage.setItem('senha' + qntu, inputSenha.value);

			qntu++;

			window.localStorage.setItem('qntu', qntu);

			alert("Cadastro realizado!");

			usuarioLogado = inputUsuario.value;
			//console.log("user do cadastro: " + inputUsuario.value);
			logado = true;
			nomeu.innerHTML = "Meu perfil (" + usuarioLogado + ")";
			nav.innerHTML += "";


		}

		inputUsuario.value = "";
		inputSenha.value = "";
		return;

	}

}

function contaCurtidas() {
	window.localStorage.setItem('curtidaRock', 0);
	window.localStorage.setItem('curtidaMpb', 0);
	window.localStorage.setItem('curtidaBlues', 0);
	window.localStorage.setItem('curtidaPop', 0);
	window.localStorage.setItem('curtidaAlternativa', 0);
	window.localStorage.setItem('curtidaClassica', 0);
	window.localStorage.setItem('curtidaCountry', 0);
	window.localStorage.setItem('curtidaHiphop', 0);
	window.localStorage.setItem('curtidaJazz', 0);
	window.localStorage.setItem('curtidaReb', 0);
	for(let i=0; i<qnt; i++){

		let genero = window.localStorage.getItem('genero' + i);

		if(genero == "Rock"){
		let vcurtidaRock = window.localStorage.getItem('curtidaRock').value;
		vcurtidaRock ++;
		curtidaRock = vcurtidaRock.value;

		alert("vc curtiu rock");
} else if( genero=='Blues'){
		curtidaBlues = curtidaBlues+1;
	}else{
		return;
	}


}
}

function loginUsuario(){

	inputUsuarioLogin = document.getElementById("input-usuario-login");
	inputSenhaLogin = document.getElementById("input-senha-login");

	nomeu = document.getElementById("nome-usuario");


	if (inputUsuarioLogin.value == "" || inputSenhaLogin.value == "") {
		alert("Preencha todos os campos! do loginUsuario");
	} else {
		qntu = window.localStorage.getItem('qntu');

		//alert("verficando " + Number(qntu) + " usuarios");

		let flag = 0;

		if(qntu != null){
			for(let i=0; i<qntu; i++){
				let usuario = window.localStorage.getItem('usuario' + i);
				let senha = window.localStorage.getItem('senha' + i);

				//console.log("usuario = " + usuario + ", usuarioLogin = " + inputUsuarioLogin.)

				if(inputUsuarioLogin.value == usuario){
					if(inputSenhaLogin.value == senha) {
						alert("usuario encontrado e logado");
						logado = true;
						usuarioLogado = usuario;
						window.localStorage.setItem('usuarioLogado', usuarioLogado);
						console.log("Usuario logado: " + usuarioLogado);
						//idUsuario.innerHTML = "<a class=" + "'nav-link'" + ">" + usuario + "</a>";
						nomeu.innerHTML = "Meu perfil " + usuarioLogado;
						nav.innerHTML += "";
						inputUsuarioLogin.value = "";
						inputSenhaLogin.value = "";

					} else {
						alert("Senha incorrreta");
						inputUsuario.value = "";
						inputSenha = "";
					}

					flag = 1;
				}

			}

			if(flag == 0){
				alert("usuario não encontrado!");
				inputUsuario.value = "";
				inputSenha = "";
			}

		} else {
			alert("não ha registros");
		}
	}

}

function usuarioLogout(){


	nomeu = document.getElementById("nome-usuario");

	logado = false;
	usuarioLogado = null;
	nomeu.innerHTML = "Usuario";
	window.localStorage.setItem('usuarioLogado', usuarioLogado);


}

//---------------------------------------------------------------------------------------------------------------
//codigo avulso


//let main = document.getElementById("teste");

			/*switch(genero){
				case "Rock":
					main = document.getElementById("rock");
					imagem = "../../img/icones/rock.jpg";
					break;
				case "MPB" :
					main = document.getElementById("alternativa");
					imagem = "../../img/icones/alternative.jpg";
					break;
				case "Gospel":
					main = document.getElementById("pop");
					imagem = "../../img/icones/pop.jpg";
					break;
			}*/

			//main.innerHTML += "<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: "  + nome + "</h5><p class=" + "'card-text'" + ">Artista: " + artista + "</p>" + "<p class=" + "'card-text'" + ">Genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">Comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">Dono: " + dono + "</p>"



		/*	if(genero == "Rock"){
				imagem = "img/icones/rock.jpg";
				//caminho = "rock";
				//let main = document.getElementById("rock");
				//main.innerHTML += "<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: "  + nome + "</h5><p class=" + "'card-text'" + ">Artista: " + artista + "</p>" + "<p class=" + "'card-text'" + ">Genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">Comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">Dono: " + dono + "</p>"
			} else if (genero == "MPB") {
				imagem = "img/icones/alternative.jpg";
				caminho = "alternativa";
				//let main = document.getElementById("alternativa");
				//main.innerHTML += "<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: "  + nome + "</h5><p class=" + "'card-text'" + ">Artista: " + artista + "</p>" + "<p class=" + "'card-text'" + ">Genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">Comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">Dono: " + dono + "</p>"
			} else if (genero == "Gospel") {
				imagem = "img/icones/pop.jpg";
				caminho = "pop";
				//let main = document.getElementById("pop");
				//main.innerHTML += "<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: "  + nome + "</h5><p class=" + "'card-text'" + ">Artista: " + artista + "</p>" + "<p class=" + "'card-text'" + ">Genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">Comentario: " + comentario + "</p>" + "<p class=" + "'card-text'" + ">Dono: " + dono + "</p>"
			}*/

			/*if(nome == null){
		index = 0;
		salvarDados(index);
	}*/

	/*if (nome != null) {
		let imagem = "";
		if(genero == "Rock"){
			imagem = "img/icones/rock.jpg";
		} else if (genero == "MPB") {
			imagem = "img/icones/alternative.jpg";
		} else if (genero == "Gospel")
			imagem = "img/icones/pop.jpg";

		var main = document.getElementById('teste');
		main.innerHTML += "<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: "  + nome + "</h5><p class=" + "'card-text'" + ">artista: " + artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + comentario + "</p>"

	}*/

	//qntu = window.localStorage.getItem('qntu');

	/*if (qntu == null) {
		alert("Voce ainda não realizou Cadastro! clique em login para realizar!");
	}*/


/*
function adicionaNaPagina(indicacao){

	if(indicacao.genero == "Alternativa"){

		let imagem = "../../img/icones/alternative.jpg";

		let divCard = document.getElementById("alternativa");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";

	} else if(indicacao.genero == "Blues"){
		let imagem = "../../img/icones/blues.jpg";

		let divCard = document.getElementById("blues");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Classica"){
		let imagem = "../../img/icones/classical.jpg";

		let divCard = document.getElementById("classica");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Country"){
		let imagem = "../../img/icones/country.jpg";

		let divCard = document.getElementById("country");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Folk"){
		let imagem = "../../img/icones/folk.jpg";

		let divCard = document.getElementById("folk");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Hip Hop"){
		let imagem = "../../img/icones/hiphop.jpg";

		let divCard = document.getElementById("hiphop");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Jazz"){
		let imagem = "../../img/icones/jazz.jpg";

		let divCard = document.getElementById("jazz");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Metal"){
		let imagem = "../../img/icones/metal.jpg";

		let divCard = document.getElementById("metal");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Pop"){
		let imagem = "../../img/icones/pop.jpg";

		let divCard = document.getElementById("pop");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";
	}

	else if(indicacao.genero == "R&B"){
		let imagem = "../../img/icones/randb.jpg";

		let divCard = document.getElementById("randb");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Reggae"){
		let imagem = "../../img/icones/reggae.jpg";

		let divCard = document.getElementById("reggae");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";


	} else if(indicacao.genero == "Rock"){
		let imagem = "../../img/icones/rock.jpg";

		let divCard = document.getElementById("rock");

		divCard.innerHTML +="<div id=" + "'post'" + "class=" + "'card'" + "style=" + "'width: 18rem;'" + "><img class=" + "'ard-img-top'" + "src=" + "'" + imagem + "'" + "alt=" + "'Card image cap'" + "><div class=" + "'card-body'" + "><h5 class=" + "'card-title'" + ">Musica: " + indicacao.nome + "</h5><p class=" + "'card-text'" + ">artista: " +
		indicacao.artista + "</p>" + "<p class=" + "'card-text'" + ">genero: " + indicacao.genero + "</p>" + "<p class=" + "'card-text'" + ">comentario: " + indicacao.comentario + "</p>" + "<p class=" + "'card-text'" + ">dono: " + indicacao.dono + "</p>"+ "<button "+ "class="+ "'mdl-button'"+" onclick="+ "'contaCurtidas()'"+ +"<i class"+ "'material-icons'>"+"Curtir"+"</i>"+"</button>"+"</div>";
	}

}

*/
