//JQuery wrapper

$(function(){
    console.log("init");
//ações
var onlyNumbers = function(e){
  //  console.log(e.target.value);
    this.value = this.value.replace(/\D/g,"");
 }

var getAddress = function(cep){
    $.ajax({
        url:"https://viacep.com.br/ws/"+cep+"/json/",
        dataType:"json",
        error: getAddressError,
        success: getAddressSuccess
    });
}

var getAddressError = function (){
    console.error("Falhou");
}

var getAddressSuccess = function(data){
    console.log(data);
    $("#logradouro").val(data.logradouro);
    $("#bairro").val(data.bairro);
    $("#cidade").val(data.localidade);
    $("#estado").val(data.uf);

}




var validateEntry = function(){

    var cep = this.value;
    console.log(cep);
    if (cep.length === 8 ){
        $(this).removeClass("error");
        getAddress(cep);

    }else{
        $(this).addClass("error");

    }
}




//eventos
$("#cep")
    .on("input", onlyNumbers)
    .on("focusout", validateEntry);



});