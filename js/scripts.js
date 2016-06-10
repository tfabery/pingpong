//=========================BackEnd=========================
var pingpong = function (num) {
  var numArray = [];
  for (i = 1; i <= num; i ++) {
    numArray.push(i);
  };
  for (i = 0; i < numArray.length; i ++) {
    if
    ((numArray[i] % 15) === 0) {
      numArray.splice(i, 1, 'pingpong');
    }
    else if ((numArray[i] % 5) === 0) {
      numArray.splice(i, 1, 'pong');
    }
    else if ((numArray[i] % 3) === 0) {
    numArray.splice(i, 1, 'ping');
    }
  };
  console.log(numArray);
  return numArray;
};
//=========================FrontEnd========================
$(function() {
  $('.inputnum').submit(function(event) {
    event.preventDefault();
    var num = parseInt($('#inputnum').val());
    pingpong(num);
  });
});
