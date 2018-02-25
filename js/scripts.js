$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();

      var firstname = $("input#firstname").val();
      console.log(firstname);
      var lastname = $("input#lastname").val();
      console.log(lastname);
      var distance = parseInt($("#distanceinput").val());
      console.log(distance);
      var temp = $("input:radio[name=temp]:checked").val();
      console.log(temp);
      var risk = $("input:radio[name=risk]:checked").val();
      console.log(risk);
      var drink = $("input:radio[name=drink]:checked").val();
      console.log(drink);

    $("#firstname").text(firstname);
    $("#lastname").text(lastname);
    $("#drink").text(drink);

      var result;
      if (distance <= "20" && temp === "Cold" && risk === "Low"){
      result = $('#result1').show();
    } else if (distance <= "20" && temp === "Cold" && risk === "High"){
      result = $('#result2').show();
    } else if (distance <= "20" && temp === "Warm" && risk === "Low"){
      result = $('#result3').show();
    } else if (distance <= "20" && temp === "Warm" && risk === "High"){
      result = $('#result4').show();
    } else if (distance <= "100" && temp === "Cold" && risk === "Low"){
      result = $('#result5').show();
    } else if (distance <= "100" && temp === "Cold" && risk === "High"){
      result = $('#result6').show();
    } else if (distance <= "100" && temp === "Warm" && risk === "Low"){
      result = $('#result7').show();
    } else if (distance <= "100" && temp === "Warm" && risk === "High"){
      result = $('#result8').show();
    } else if (distance > "100" && temp === "Cold" && risk === "Low"){
      result = $('#result9').show();
    } else if (distance > "100" && temp === "Cold" && risk === "High"){
      result = $('#result10').show();
    } else if (distance > "100" && temp === "Warm" && risk === "Low"){
      result = $('#result11').show();
    } else if (distance > "100" && temp === "Warm" && risk === "High"){
      result = $('#result12').show();
    }
      $("#result").text(result);
    });
  });
