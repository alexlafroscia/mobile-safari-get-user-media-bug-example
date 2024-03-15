const START_BUTTON = document.getElementById("start-button");

async function startVideoStream() {
  const video = document.createElement("video");
  video.playsInline = true;

  const container = START_BUTTON.parentElement;

  // Swap the `button` for the `video`
  container.append(video);
  container.removeChild(START_BUTTON);

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
}

START_BUTTON.addEventListener("click", () => {
  startVideoStream();
});
