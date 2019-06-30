var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.ressegdistribuidora.com.br/b2c/loja/Pedido.do?action=addItens&idLoja=2033&idPrds=146646&qtdPrds=1",
    "method": "GET",
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "JSESSIONID=07D8911223FD9FF9A7265249B67F6FC7; _ym_uid=15610643881053854116; _ym_d=1561064388; _ym_visorc_54065890=w; _ga=GA1.3.1680089453.1561064387; _gid=GA1.3.1956961661.1561064387; _ym_isad=2; lolSession=2033-285658b5-a2e0-4c32-b862-e55fd9137a10; _fbp=fb.2.1561064387632.1240040512; jv_enter_ts_28xf68izjx=1561064388; jv_visits_count_28xf68izjx=1; jv_pages_count_28xf68izjx=1; _gat=1",
      "Host": "www.ressegdistribuidora.com.br",
      "Referer": "https://www.ressegdistribuidora.com.br/lixadeira-orbital-7232/146646/produto/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    },
    "success":function(response){
        console.log("Sucesso");
    },
    "error":function(response){
        console.log("Error");
    }
  }
  
  $.ajax(settings);