const START_BUTTON = document.getElementById("start-button");

async function startVideoStream() {
  const video = document.createElement("video");
  video.playsInline = true;
  video.autoplay = true;
  video.controls = false;

  const container = START_BUTTON.parentElement;

  // Swap the `button` for the `video`
  container.append(video);
  container.removeChild(START_BUTTON);

  // Get access to the video camrea stream
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      aspectRatio: {
        exact: 2 / 3,
      },
      facingMode: "user",
    },
  });

  // Attach it to the video element to view it
  video.srcObject = mediaStream;
}

START_BUTTON.addEventListener("click", () => {
  startVideoStream();
});
