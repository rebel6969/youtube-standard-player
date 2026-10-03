# YouTube Standard 16:9 Player

This Chrome-compatible extension keeps every ordinary YouTube watch page at the same standard 16:9 player size. Portrait uploads remain fully visible and centered with plain black side bars.

The extension does not stretch or crop the foreground video. It leaves YouTube theater mode and browser full-screen playback alone. Use the toolbar popup to turn the behavior on or off.

## Install in Chrome or Edge

1. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
2. Turn on **Developer mode**.
3. Choose **Load unpacked**.
4. Select this `youtube-standard-player` folder.
5. Refresh any YouTube tabs that were already open.

After changing the extension's files, use the **Reload** button on the extension card and refresh YouTube.

Version 1.3.0 also corrects YouTube's wider recommendation column on portrait pages. This gives the player, title area and recommendation thumbnails the same available widths as a landscape page at the same viewport. Video imagery, titles and recommended content naturally remain different.

Validation: JavaScript syntax and manifest checks, plus a browser layout fixture built from the column rules of live landscape and portrait watch pages, tested at 1340px and 2048px widths. Player, title, sidebar and thumbnail geometry matched the landscape layout within one pixel. YouTube layout experiments or future markup changes may require further adjustment.

## Files

- `manifest.json` — Manifest V3 extension definition.
- `content.css` — 16:9 watch-page layout rules.
- `content.js` — toggle, navigation and full-screen handling.
- `popup.html`, `popup.css`, `popup.js` — toolbar on/off switch.
- `LICENSE` — MIT license.

## License

Released under the [MIT License](LICENSE).
