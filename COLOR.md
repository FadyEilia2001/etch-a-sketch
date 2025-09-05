# 🎨 UI Tokens — Etch-a-Sketch (Fun Neon)

## Brand & Background

- **Background Solid:** `#520075`
- **Background Gradient:** `radial-gradient(circle, rgba(82,0,117,1) 0%, rgba(0,0,0,1) 68%)`
- **Primary Accent (Magenta):** `#F03C7B`
- **Optional Pop Accent (Cyan, for focus/hover rings):** `#00E5FF` _(optional in v1)_

  - background: rgba(82, 0, 117, 1);
  - background: radial-gradient(circle,hsla(282, 100%, 23%, 1.00) 0%, rgba(0, 0, 0, 1) 68%);

## Text

- **Text / Primary:** `#FFFFFF`
- **Text / Secondary:** `#CCCCCC`
- **Text / Muted:** `#8A8A8A`
- **Link / Accent:** `#F03C7B` (underline on hover)

## Surfaces & Lines

- **Surface / Panel:** `#16121B` (dark card background)
- **Border / Subtle:** `#2A2A2A`
- **Divider / Hairline:** `#1E1E1E`

## Buttons

### Primary Button (Magenta)

- **BG:** `#F03C7B`
- **Text:** `#0B0B0B` (near-black for contrast)
- **Hover BG:** `#D4356D`
- **Active BG:** `#BF2F63`
- **Focus Ring (glow):** `0 0 0 3px rgba(240,60,123,0.4), 0 0 12px rgba(240,60,123,0.7)`
- **Disabled BG:** `#3A3A3A`, **Text:** `#8A8A8A`

### Secondary Button (Ghost)

- **BG:** `transparent`
- **Border:** `#F03C7B`
- **Text:** `#F03C7B`
- **Hover:** `rgba(240,60,123,0.12)` background tint
- **Active:** `rgba(240,60,123,0.2)`
- **Focus Ring:** same as primary

### Destructive (optional later)

- **BG:** `#FF4D4D`, **Hover:** `#E64545`, **Text:** `#0B0B0B`

## Controls (sliders, inputs)

- **Track:** `#2A2A2A`
- **Thumb:** `#F03C7B`
- **Thumb Hover:** `#D4356D`
- **Focus Ring:** cyan glow `0 0 0 3px rgba(0,229,255,0.35)`

## Grid & Cells

- **Cell Base:** `#151015`
- **Cell Border (hairline):** `#2A1E33` (subtle light border)
- **Paint Color (default brush):** `#F03C7B`
- **Eraser Color:** match surface `#151015`

## Shadows & Glow (dark UI friendly)

- **Elevation (card):** `0 6px 16px rgba(0,0,0,0.35)`
- **Soft Inner (panels):** `inset 0 1px 0 rgba(255,255,255,0.04)`
- **Neon Glow Magenta:** `0 0 18px rgba(240,60,123,0.55)`
- **Neon Glow Cyan (focus):** `0 0 18px rgba(0,229,255,0.45)`

## Radii, Spacing, Layout

- **Radius / Small:** `6px`
- **Radius / Medium (cards, grid container):** `12px`
- **Radius / Full (swatches):** `999px`
- **Spacing Scale (8-pt):** `4, 8, 12, 16, 24, 32, 48`
- **Max Width (app):** `1120px`

## Typography (keep it simple)

- **Heading:** Orbitron, Audiowide, or Exo 2 (pick one)
- **Body:** Inter, Rubik, or System UI
- **Base Size:** `16px` (use `rem` multiples: 1.25rem, 2rem, etc.)

---

## CSS Custom Properties (drop into `:root` if you want)

```css
:root {
  --bg-solid: #520075;
  --bg-gradient: radial-gradient(
    circle,
    rgba(82, 0, 117, 1) 0%,
    rgba(0, 0, 0, 1) 68%
  );

  --accent-1: #f03c7b; /* magenta */
  --accent-2: #00e5ff; /* cyan (optional) */

  --text-1: #ffffff;
  --text-2: #cccccc;
  --text-muted: #8a8a8a;

  --surface: #16121b;
  --border: #2a2a2a;
  --divider: #1e1e1e;

  --btn-primary: #f03c7b;
  --btn-primary-hover: #d4356d;
  --btn-primary-active: #bf2f63;
  --btn-primary-text: #0b0b0b;

  --shadow-card: 0 6px 16px rgba(0, 0, 0, 0.35);
  --glow-magenta: 0 0 18px rgba(240, 60, 123, 0.55);
  --glow-cyan: 0 0 18px rgba(0, 229, 255, 0.45);

  --radius-s: 6px;
  --radius-m: 12px;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
}
```
