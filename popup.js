const checkbox = document.querySelector("#enabled");

chrome.storage.sync.get({ enabled: true }, (settings) => {
  checkbox.checked = settings.enabled;
});

checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: checkbox.checked });
});
