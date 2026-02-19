# Fonts Directory

## Required Fonts

### PuffSquare-Regular
- **File needed:** `PuffSquare-Regular.otf`
- **Usage:** Display font for headers, CTAs, navigation
- **Status:** ⏳ Awaiting OTF file from user

Place the `PuffSquare-Regular.otf` file in this directory.

### Calibri
- **Usage:** Body text, UI elements
- **Status:** ✅ System font (fallback to system-ui if unavailable)
- **No file needed:** Uses system Calibri or fallback

## Font Loading

Fonts are loaded via `app/layout.tsx` using Next.js `localFont`.
