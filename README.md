# GTP Stratus Cache Cleaner

A small Chrome extension (Manifest V3) that clears the browser cache and refreshes all open GTP Stratus tabs with one click — handy for shaking off stale GTP Stratus state without touching the rest of your browsing data.

## What it does

- Clears cached data for `https://www.gtpstratus.com/*`
- Refreshes all open GTP Stratus tabs
- Runs in the background via a service worker (`Background.js`); no build step, no dependencies

## Install (unpacked)

1. Clone or download this repo.
2. In Chrome, open `chrome://extensions`.
3. Turn on **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the **`RefreshGTPStratus`** folder (the subfolder that contains `manifest.json`) — not the repo root.
5. Click the extension icon to clear cache + refresh your GTP Stratus tabs.

## Repository layout

```
RefreshGTPStratus/          # the extension (load unpacked -> this folder)
├── manifest.json           # MV3 manifest
├── Background.js           # service worker
└── icon{16,48,128}.png     # toolbar icons
```

## Permissions

| Permission | Why |
|---|---|
| `browsingData` | Clear cached data |
| `tabs` | Find and refresh open GTP Stratus tabs |
| `webNavigation` | Track GTP Stratus page loads |
| `host_permissions: gtpstratus.com` | Scope the above to GTP Stratus only |

## Notes

- The extension lives in its own subfolder so the repo root stays clean; the folder layout is intentional — don't move the extension files to the root.
- `manifest.json` and the `Background.js` service-worker reference were corrected in this branch (case-sensitivity fixes); see the PR description.

## License

GPL-3.0 — see [LICENSE](LICENSE).
