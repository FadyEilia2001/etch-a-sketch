# Etch-a-Sketch 🎨

## About Me

Hi, I’m Fady! I decided to learn programming because I’m genuinely passionate about it. I’m not planning to change careers, but I wanted to challenge myself and grow by picking up coding alongside my day job and dad duties.

While my code may look rough at times, I’m fully committed to learning and improving. I’m currently building this project while at **92% completion of The Odin Project Foundation course**.

I highly recommend [The Odin Project](https://www.theodinproject.com/) to anyone who is serious about learning programming — it’s the best structured, free resource I’ve found.

---

![Screenshot coming soon](./imgs/screenshot.png)

## Project Plan – Etch-a-Sketch

### 1. Project Overview

**Goal**  
Strengthen JavaScript, CSS, and DOM manipulation skills by building an interactive Etch-a-Sketch app. The project will focus on practicing event handling, dynamic rendering, and styling, while boosting confidence through creating something fun, visual, and interactive that can be showcased in a portfolio.

**Tone/Vibe**  
Neon-inspired, playful, and bold.

**Requirements (V1)**  
To keep scope controlled:
- 16×16 grid inside a fixed container
- Hover/drag paints cells with the current color
- Color selection via swatches (not the native color picker)
- Reset button clears all cells
- Optional inspirations section (static images only)

---

### 2. MVP (Minimum Viable Product)

- [ ] Grid of squares that can be drawn on
- [ ] Color selection swatches
- [ ] Clear/reset option
- [ ] Optional inspirations section below the grid

**Non-Goals (for V1)**  
- This project will not take more than a few days to complete.  
- No chasing endless improvements or adding extra ideas mid-build.  
- No advanced features such as responsive design or mobile gestures.  
- No saving or exporting drawings (may be added later).  

---

### 3. Structure & Naming

- Header → `header`  
- Controls → `controls`  
- Grid container → `grid-container`  
- Grid cell → `cell`  
- Footer → `footer`  

---

### 4. UI Tokens

**Colors**  
- Background solid: `#520075`  
- Background gradient: `radial-gradient(circle, hsla(282, 100%, 23%, 1) 0%, rgba(0, 0, 0, 1) 68%)`  
- Accent purple: `#520075`  
- [See the Color Palette](COLOR.md)  
- [Initial color image](./imgs/color-picker.png)  

**Fonts**  
- Audiowide, sans-serif  
- Expletus Sans, sans-serif  

**Spacing scale**  
- 8px / 16px / 24px  
- 0.5rem / 1rem / 1.5rem  

**Border radius**  
- 2px  

**Shadows**  
- `0 6px 16px rgba(0, 0, 0, 0.35)`  

---

### 5. User Interactions & States

- Current color selection  
- Fixed grid size (16×16)  
- Mouse down vs. mouse up state (to allow click-and-drag painting)  
- Reset button clears all cells  
- Optional rainbow mode  

---

### 6. File Plan

- `index.html`  
- `style.css`  
- `script.js`  
- `imgs/`  

---

### 7. Definition of Done

- [ ] Works on desktop at a fixed width (single breakpoint)  
- [ ] No console errors  
- [ ] README updated with description and screenshot  