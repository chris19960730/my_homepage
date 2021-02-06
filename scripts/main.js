// make avatar spin and play/pause music
const onToggleAvatar = () => {
  const avatar = document.querySelector("#avatarImage");
  const audioPlayer = document.querySelector("#myAudio");
  if (avatar.classList.contains("rotate")) {
    avatar.classList.remove("rotate");
    audioPlayer.pause();
  } else {
    avatar.classList.add("rotate");
    audioPlayer.play();
  }
};

// add click listener for avatar
document
  .querySelector("#avatarImage")
  .addEventListener("click", onToggleAvatar);

// gloabally initialize bootstrap tooltip and popover component
window.onload = () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll("[data-bs-toggle='tooltip']")
  );
  // eslint-disable-next-line no-unused-vars
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    // eslint-disable-next-line no-undef
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  const popoverTriggerList = [].slice.call(
    document.querySelectorAll("[data-bs-toggle='popover']")
  );
  // eslint-disable-next-line no-unused-vars
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    // eslint-disable-next-line no-undef
    return new bootstrap.Popover(popoverTriggerEl);
  });
};
