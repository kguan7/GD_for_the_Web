$(document).ready(function(){


function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert('getUserMedia() is not supported by your browser');
}

const constraints = {
  video: true,


};


const video = document.querySelector('video');

function handleSuccess(stream) {
  video.srcObject = stream;
}

function handleError(error) {
  console.error('Rejected', error);
}

navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);



$("#DIV1").hide(); //hide your div initially

var topOfOthDiv1 = $("#DIV2").offset().top;
var topOfOthDiv3 = $("#DIV3").offset().top;

$(window).scroll(function() {
    if($(window).scrollTop() < topOfOthDiv1)
    {
         $("#DIV1").fadeOut(200); //reached the desired point -- show div
    }
    else
    {
        if($(window).scrollTop() < topOfOthDiv3) { //scrolled past the other div?
            $("#DIV1").fadeIn(200); //reached the desired point -- show div
        }
        else if($(window).scrollTop() > topOfOthDiv3) { //scrolled past the other div?
            $("#DIV1").fadeOut(200); //reached the desired point -- show div
        }
    }

});







});

