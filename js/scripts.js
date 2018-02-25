$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();

      var firstname = $ ("input#firstname").val();
      console.log(firstname);
      var lastname = $ ("input#lastname").val();
      console.log(lastname);
      var distance = parseInt($("#distanceinput").val());
      console.log(distance);
      var temp = $ ("#temp").val();
      console.log(temp);
      var risk = $ ("#risk").val();
      console.log(risk);
      var drink = $ ("input:radio[name=drink]:checked").val();
      console.log(drink);

      var result;
      if (distance <= "20"){
      result = $('#result1').show();
    } else if (distance <= "100"){
      result = $('#result2').show();
    }
    //} else if (side1 != side2 && side2 != side3 && side1 != side3){
      //result =$('#Scalene').show();
    //} else if (side1 === side2 && side2 === side3 && side1 === side3){
      //result = $('#Equilateral').show();
      //}
      $("#result").text(result);
    });
  });
