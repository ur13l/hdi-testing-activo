
var data = null;
var teste=0;

exports.importaNum=function(tse)
{
  teste = tse;
  console.log(teste+'<---num importado')
}

exports.test = function () {return teste;};

exports.resultData = function (datosobtenidos)
{
    data = datosobtenidos;
}
