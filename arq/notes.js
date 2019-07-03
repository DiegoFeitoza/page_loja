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

// Para testar
$.ajax({
    "url": "https://www.ressegdistribuidora.com.br/b2c/loja/Pedido.do?action=addItens&idLoja=2033&idPrds=215668&qtdPrds=1",
    "method": "POST",
    "headers": {
        "Accept": "*/*",
        "Referer": "https://www.ressegdistribuidora.com.br/b2c/esmerilhadeira-a-bateria-18v-gws-18-125v-li-professi.(produto-exclusivo-do-combo-bosch-pague-menos)/215668/produto/",
    },
    "success":function(response){
        console.log("Sucesso item ");
    },
    "error":function(response){
        console.log("Error item ");
    }
});