$(document).ready(function(){
	// your code here


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
  audio: true

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

});

