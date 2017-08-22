$(function()
{
  //Ejecutar el test seleccionado
  $('#tabla_res #ejecutartest').click(function(e)
  {
    e.preventDefault();
    var element =$(this);
    var id = element.parent().parent().find('#idTest').text();
    //console.log('Estoy llamando la funcion');

    $.ajax(
      {
        url:'http://localhost:3000/ejecprueba1',
        method: 'post',
        data:{id:id}
      }
    );
  });
});
