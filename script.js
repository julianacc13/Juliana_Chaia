function CadastroValidar(){
    var nome = document.getElementById("nome").innerText;
    var email=document.getElementById("email").innerText;
    var telefone=document.getElementById("telefone").innerText;
    var senha=document.getElementById("senha").innerText;
    var mensagemErro=document.getElementById(mensagemErro);
}

if (nome==="" || email==="" || teleffone==="" || senha==="")
{
    mensagemErro.innerText="Favor preencher todos os campos!";
    return false;
}
else
{
    mensagemErro.innerText="";
    return true;
}