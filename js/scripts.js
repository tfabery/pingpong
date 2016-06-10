//=========================BackEnd=========================
var pingpongify = function (num) {
  var resultArray = [];

  for (i = 1; i <= num; i ++) {
    if
    ((i % 15) === 0) {
      resultArray.push('pingpong');
    }
    else if ((i % 5) === 0) {
      resultArray.push('pong');
    }
    else if ((i % 3) === 0) {
      resultArray.push('ping');
    }
    else {
      resultArray.push(i);
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
