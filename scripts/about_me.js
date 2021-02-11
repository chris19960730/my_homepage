const onClickViewLiveDemo = () => {
  window.location.href = 'https://image-sharing-site-good.herokuapp.com/';
};

const onClickViewGithubRepo = () => {
  window.location.href = 'https://github.com/chris19960730/image-sharing-app';
};
document
  .querySelector('#live-demo')
  .addEventListener('click', onClickViewLiveDemo);
document
  .querySelector('#github-repo')
  .addEventListener('click', onClickViewGithubRepo);
