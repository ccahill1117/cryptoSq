function inputArrayAndLength(inputString) {
  return inputString.split('');
}

function arrayLength(inputArray) {
  return inputArray.length;
}

function squareFinder(inputArrayLengthNoPuncSpaces) {
  return Math.floor(Math.sqrt(inputArrayLengthNoPuncSpaces));
}

function actualSquareDimensions(sqrtFuncResult, inputArrayLength) {
  var columns = sqrtFuncResult;
  if ((Math.sqrt(inputArrayLength)) > sqrtFuncResult) {
    var rows = (columns + 1);
  }
  else if ((Math.sqrt(inputArrayLength)) <= sqrtFuncResult) {
    var rows = columns;
  }
  return rows;
  return columns;
}


$(document).ready(function() {
  $("#formSubmit").submit(function(event){
    event.preventDefault();

  var userInput = $("#inputString").val();

  var result = squareFinder(arrayLength(userInput));
  var result2 = actualSquareDimensions(result, arrayLength(userInput));

  $("#buildTable").html("<tr>" + ("<td>hello") + "</td>" +
                        "<td>again" + "</td>" + "</tr>");
  $("#buildTable").css("border: 1px solid black;");


  console.log(result);
  console.log(result2);

  });

});
