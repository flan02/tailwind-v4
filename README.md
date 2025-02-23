# Tailwind-v4

**Fundamentals about tailwind v4.**

> npm install tailwindcss @tailwindcss/vite

## Tailwind CSS v4.0

3D Transform APIs

- rotate-x-*
- rotate-y-*
- scale-z-*
- translate-z-*
- perspective-*
- transform-style-*

Gradient APIs

- bg-gradient-to-r from-blue-500 to-green-500
- bg-linear-45
- bg-radial
- bg-conic

Modernized P3 Color Palette

OKLCH is considered better than RGB and HSL for color manipulation.

- O: Oklab, a perceptually uniform color space
- K: Perceptual adjustment to the accuracy of the human eye in different lighting conditions
- L: Lightness, what bright or dark the color is
- C: Chroma, how saturated or intense the color is
- H: Hue, color wheel position in spectrum

```css
/* Oklab model*/
color: oklch(70% 0.25 220); /* (L,C,H) */
```
