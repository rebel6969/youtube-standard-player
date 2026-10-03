(() => {
  const ROOT_CLASS = "yt-standard-player-enabled";
  let enabled = true;

  function isWatchPage() {
    return location.pathname === "/watch";
  }

  function updatePageClass() {
    const shouldApply =
      enabled &&
      isWatchPage() &&
      document.fullscreenElement === null;

    document.documentElement.classList.toggle(ROOT_CLASS, shouldApply);
  }

  function loadSetting() {
    chrome.storage.sync.get({ enabled: true }, (settings) => {
      enabled = settings.enabled;
      updatePageClass();
    });
  }

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "sync" || !changes.enabled) return;

    enabled = changes.enabled.newValue !== false;
    updatePageClass();
  });

  // YouTube is a single-page app, so the URL can change without a reload.
  window.addEventListener("yt-navigate-finish", updatePageClass);
  window.addEventListener("popstate", updatePageClass);
  document.addEventListener("fullscreenchange", updatePageClass);

  loadSetting();
})();
