$(document).ready(function() {
  $("form#vacation").submit(function() {
    event.preventDefault();

      var firstname = $ ("input#firstname").val();
      var lastname = $ ("input#lastname").val();
      var distanceinput = parseInt($("#distanceinput").val());
      var temp = $ ("input#temp").val();
      var risk = $ ("input#risk").val();
      var drink = $ ("input:radio[name=drink]:checked").val();

      var result;
      if (distance <= "20" && temp === "Warm" && risk === "Low"){
      result = $('#result1').show();
    //} else if (side1 === side2 || side2 === side3 || side1 === side3){
      //result = $('#Isoceles').show();
    //} else if (side1 != side2 && side2 != side3 && side1 != side3){
      //result =$('#Scalene').show();
    //} else if (side1 === side2 && side2 === side3 && side1 === side3){
      //result = $('#Equilateral').show();
      //}
      $("#result").text(result);
    });
  });
