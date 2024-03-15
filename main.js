const video = document.getElementById("video");

// Automatically play once the video stream is ready
video.addEventListener("loadeddata", () => {
  video.play();
});

// Get access to the video camrea stream
const mediaStream = await navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
    aspectRatio: {
      exact: 2 / 3,
    },
    facingMode: "environment",
  },
});

// Attach it to the video element to view it
video.srcObject = mediaStream;
