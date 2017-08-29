$(function()
{
/*
dependiendo el campo tipo test presente en la bd, se selecciona
el tipo de consulta que traerá los test correspondientes a la plataforma
*/
  var tst = 0;
  $('#btnSTest').attr('disabled', true);

  $('#hdi').click(function (e)
  {
    tst =1;
  });

  $('#guanajoven').click(function(e)
  {
    tst = 2;
  });

  $("#selecTest input[name='selector-prueba']:radio").click(function (e) {

      if ($("#selecTest input[name='selector-prueba']:radio").is(':checked')) {
          $('#btnSTest').attr('disabled',false);
     }
        
  });
  
  $('#btnSTest').click(function(e)
  {
    //alert(tst);
    $.ajax
    ({
     url:'http://localhost:3000/sPrueba',
     method: 'post',
     data:{e:tst}
    });
     
  });
});
