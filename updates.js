const version = new URLSearchParams(location.search).get('version');
if (version && /^\d+\.\d+\.\d+(?:\.\d+)?$/.test(version)) {
  const message = document.getElementById('updated-version');
  message.textContent = `Your extension updated to v${version}`;
  message.hidden = false;
}
