var adcCarrinho = function(listaAdc){
    return new Promise(function(resolve, reject){        
        listaAdc.map(function(obj,i){
            $.ajax({
                "url": "https://www.ressegdistribuidora.com.br/b2c/loja/Pedido.do?action=addItens&idLoja=2033&idPrds="+obj.idProduto+"&qtdPrds=1",
                "method": "POST",
                "headers": {
                    "Accept": "*/*",
                    "Referer": obj.link,
                },
                "success":function(response){
                    console.log("Sucesso item ", i+1);
                    if(i == (listaAdc.length - 1)){
                        resolve('Todos os '+listaAdc.length+' itens salvos.');
                    }
                },
                "error":function(response){
                    console.log("Error item ", i+1);
                    if(i == (listaAdc.length - 1)){
                        reject('Erro ao salvar '+listaAdc.length+' itens.');
                    }
                }
            });
        });
    });
};