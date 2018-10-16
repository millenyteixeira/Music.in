<?php

	class Usuario {
		private $Cod_Usuario;
		private $Nome;
		private $Senha;
		private $Nome_Usuario;

		public function __construct($Cod_Usuario,$Nome=null, $Senha=null, $Nome_Usuario=null){
			$this->Cod_Usuario = $Cod_Usuario;
			$this->Nome = $Nome;
			$this->Senha = $Senha;
			$this->Nome_Usuario = $Nome_Usuario;
		}

		public function getCodUsuario(){
			return $this->Cod_Usuario;
		}

		public function getNome(){
			return $this->Nome;
		}

		public function getSenha(){
			return $this->Senha;
		}

		public function getNomeUsuario(){
			return $this->Nome_Usuario;
		}

		public static function obtemUsuarioPorNome($db,$nome){
			$query = "SELECT
									Cod_Usuario,
									Nome,
									Senha,
									Nome_Usuario
								FROM
									usuario
								where
									Nome = :nome";
			$stmt = $db->prepare( $query );
			$stmt->bindParam(":nome", $nome);
			$stmt->execute();
			$row = $stmt->fetch(PDO::FETCH_ASSOC);
			if ($row){
				extract($row);
				return new Usuario($Nome,$Senha, $Nome_Usuario);
			}else{
				return null;
			}
		}

		public function salvaUsuario($db){
			$cmd = "INSERT INTO usuario
									(
									Nome,
									Senha,
									Nome_Usuario
								)
								VALUES
								(
									:nome,
									:senha,
									:nomeUsuario
								)";
			$stmt = $db->prepare( $cmd );
			$stmt->bindParam(":nome",$this->Nome);
			$stmt->bindParam(":senha",$this->Senha);
			$stmt->bindParam(":nomeUsuario",$this->Nome_Usuario);
			return $stmt->execute();
		}

		public function atualizar($db){
			$cmd = "UPDATE usuario
							SET
								Nome = :nome,
								Senha = :senha,
								Nome_Usuario = :nomeUsuario
							WHERE
								Cod_Usuario = :CodUsuario";
			$stmt = $db->prepare($cmd);
			$stmt->bindParam(":nome",$this->Nome);
			$stmt->bindParam(":senha",$this->Senha);
			$stmt->bindParam(":nomeUsuario",$this->Nome_Usuario);
			$stmt->bindParam(":CodUsuario",$this->Cod_Usuario);
			return $stmt->execute();
		}

		public function remover($db){
			$cmd = "DELETE FROM usuario WHERE Cod_Usuario = :id";
			$stmt = $db->prepare($cmd);
			$stmt->bindParam(":id",$this->Cod_Usuario);
			return $stmt->execute();
		}
	}



	require_once "database.php";
	$dblink = Database::getConnection();

	$s = Usuario::obtemUsuarioPorNome($dblink, "ze roberto");

	//testa a exclusão
	print("usuario: ".$s->getNomeUsuario());

	print("----------------");

	$t = new Usuario("teste", "wpjdfpwd", "dkw´ks");
	$t->salvaUsuario($dblink);

	$s = Usuario::obtemUsuarioPorNome($dblink, "vinicius");

	print("usuario vinicius: ".$s->getNomeUsuario());

	print("----------------");

	//$t->remover($dblink);




/*
class Usuario{
	private $id;
	private $nome;
	private $senha;
	public function __construct($id,$nome,$senha){
		$this->id = $id;
		$this->nome = $nome;
		$this->senha = $senha;
	}
	public function getId(){
		return $this->id;
	}
	public function getNome(){
		return $this->nome;
	}
	public function checar_senha($password){
		return password_verify($password,$this->senha);
	}
	public static function obtemUsuarioPorNome($db,$nome){
		$query = "SELECT
								id,
								nome,
								senha
							FROM
								usuarios
							where
								nome = :nome";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":nome", $nome);
		$stmt->execute();
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		if ($row){
			extract($row);
			return new Usuario($id,$nome,$senha);
		}else{
			return null;
		}
	}
}



class Tesouro{
	private $id;
	private $idUsuario;
	private $nome;
	private $quantidade;
	private $icone;
	private $valorUnitario;

	public function __construct($id,$idUsuario=null,$nome=null,$quantidade=null,$icone=null,$valorUnitario=null){
		$this->id = $id;
		$this->idUsuario = $idUsuario;
		$this->nome = $nome;
		$this->quantidade = $quantidade;
		$this->icone = $icone;
		$this->valorUnitario = $valorUnitario;
  }
	public function getId(){
		return $this->id;
	}
	public function getIdUsuario(){
		return $this->idUsuario;
	}
	public function getNome(){
		return $this->nome;
	}
	public function getQuantidade(){
		return $this->quantidade;
	}
	public function getIcone(){
		return $this->icone;
	}
	public function getValorUnitario(){
		return $this->valorUnitario;
	}
	public function setNome($nome){
		$this->nome = $nome;
	}
	public function setQuantidade($quantidade){
		$this->quantidade = $quantidade;
	}
	public function setIcone($icone){
		$this->icone = $icone;
	}
	public function setValorUnitario($valor){
		$this->valorUnitario = $valor;
	}
	public static function getTesouros($db,$idUsuario){
		$query = "SELECT
				id,
				id_usuario,
				nome,
				quantidade,
				valorUnitario,
				icone
			FROM
				tesouros
			WHERE
				id_usuario = :usuario";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":usuario", $idUsuario);
    	$stmt->execute();
		$arrTesouros = array();
		while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			extract($row);
			$tesouro = new Tesouro($id,$id_usuario,$nome,$quantidade,$icone,$valorUnitario);
			yield $tesouro;
		}
	}
	public static function getTesouroPorUsuario($db,$nome,$idUsuario){
		$query = "SELECT
				id,
				id_usuario,
				nome,
				quantidade,
				valorUnitario,
				icone
			FROM
				tesouros
			WHERE
				id_usuario = :usuario
				and nome = :nome";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":usuario", $idUsuario);
		$stmt->bindParam(":nome", $nome);
			$stmt->execute();
		$arrTesouros = array();
		if ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			extract($row);
			return new Tesouro($id,$id_usuario,$nome,$quantidade,$icone,$valorUnitario);
		}else{
			return null;
		}
	}
	public static function getTesouroPorId($db,$id){
		$query = "SELECT
				id,
				id_usuario,
				nome,
				quantidade,
				valorUnitario,
				icone
			FROM
				tesouros
			WHERE
				id = :id";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":id", $id);
		$stmt->execute();
		if ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			extract($row);
			return new Tesouro($id,$id_usuario,$nome,$quantidade,$icone,$valorUnitario);
		}else{
			return null;
		}
	}
	public function inserir($db){
		$cmd = "INSERT INTO tesouros
								(
								nome,
								quantidade,
								valorUnitario,
								icone,
								id_usuario
							)
							VALUES
							(
								:nome,
								:quantidade,
								:valorUnitario,
								:icone,
								:id_usuario
							)";
		$stmt = $db->prepare( $cmd );
		$stmt->bindParam(":nome",$this->nome);

		$stmt->bindParam(":quantidade",$this->quantidade);
		$stmt->bindParam(":valorUnitario",$this->valorUnitario);
		$stmt->bindParam(":icone",$this->icone);
		$stmt->bindParam(":id_usuario",$this->idUsuario);
		return $stmt->execute();
	}
	public function atualizar($db){
		$cmd = "UPDATE tesouros
						SET
							nome = :nome,
							quantidade = :quantidade,
							valorUnitario = :valorUnitario
							".($this->icone?", icone = :icone ":"")."
						WHERE
							id = :id";
		$stmt = $db->prepare($cmd);
		$stmt->bindParam(":nome",$this->nome);
		$stmt->bindParam(":quantidade",$this->quantidade);
		$stmt->bindParam(":valorUnitario",$this->valorUnitario);

		if($this->icone){
			$stmt->bindParam(":icone",$this->icone);
		}
		$stmt->bindParam(":id",$this->id);
		return $stmt->execute();
	}
	public function remover($db){
		$cmd = "DELETE FROM tesouros WHERE id = :id";
		$stmt = $db->prepare($cmd);
		$stmt->bindParam(":id",$this->id);
		return $stmt->execute();
	}

}
/*
require_once "database.php";
$dblink = Database::getConnection();

//teste da inserção
$tesouro = new Tesouro(null,1,"moedas",12,"imgs/moedas.png",3.2);
$tesouro->inserir($dblink);

//teste da atualização
$tesouro = Tesouro::getTesouros($dblink,1)->current();//pega o primeiro tesouro do barba ruiva (id_usuario = 1)
$tesouro->setNome("alterado");
$tesouro->atualizar($dblink);
//teste atualizacao (sem icone)
$tesouro->setIcone(null);
$tesouro->atualizar($dblink);

//testa a exclusão
print("Deletou o: ".$tesouro->getId());
$tesouro->remover($dblink);
*/

?>
