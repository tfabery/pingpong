//=========================BackEnd=========================
var pingpongify = function (num) {
  var numArray = [];
  var resultArray = [];
  var pingPongArray = [3, 5];

  for (i = 1; i <= num; i ++) {
    numArray.push(i);
  };

  for (i = 0; i < numArray.length; i ++) {
    if
    ((numArray[i] % 15) === 0) {
      resultArray.push('pingpong');
    }
    else if ((numArray[i] % 5) === 0) {
      resultArray.push('pong');
    }
    else if ((numArray[i] % 3) === 0) {
      resultArray.push('ping');
    }
    else {
      resultArray.push(numArray[i]);
    }
  };
  // console.log(numArray);
  return resultArray;
};
//=========================FrontEnd========================
$(function() {
  $('.inputnum').submit(function(event) {
    event.preventDefault();
    var num = parseInt($('#inputnum').val());
    var resultArray = pingpongify(num);
    var resultList = '';

    for (i = 0; i < resultArray.length; i ++) {
      resultList = resultList + '<li>' + (resultArray[i].toString()) + '</li>';
      // console.log(resultList);
    };

    $('#resultList').html(resultList);
    // $('.result').show();
  });
});
