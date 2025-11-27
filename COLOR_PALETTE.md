# Smart Events - Color Palette Guide

This document contains all color codes used in the Smart Events website for design reference.

---

## Primary Brand Colors

### Accent Color (Primary Brand Color)
- **HSL**: `hsl(0, 58%, 42%)`
- **HEX**: `#B8252C`
- **RGB**: `rgb(184, 37, 44)`
- **Usage**: Primary buttons, links, icons, highlights, gradient start
- **Name**: Burgundy/Red

### Pink (Secondary Brand Color)
- **HEX**: `#F472B6` (Tailwind pink-400)
- **RGB**: `rgb(244, 114, 182)`
- **Usage**: Gradient end, decorative elements, secondary accents
- **Name**: Pink-400

### Brand Gradient
- **From**: Accent (`#B8252C`) → **To**: Pink (`#F472B6`)
- **Usage**: Text gradients, decorative elements, brand highlights
- **Direction**: Left to Right (horizontal)

---

## Background Colors

### Dark Theme Background Gradient
The website uses a three-color gradient for all page backgrounds:

1. **Start Color**
   - **HEX**: `#020617`
   - **RGB**: `rgb(2, 6, 23)`
   - **Name**: Slate-950 (very dark blue)

2. **Middle Color**
   - **HEX**: `#051627`
   - **RGB**: `rgb(5, 22, 39)`
   - **Name**: Custom dark blue

3. **End Color**
   - **HEX**: `#0F172A`
   - **RGB**: `rgb(15, 23, 42)`
   - **Name**: Slate-900

**Gradient Direction**: `bg-gradient-to-br` (top-left to bottom-right)

---

## Text Colors

### Primary Text
- **Color**: White
- **HEX**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **Usage**: Main headings, body text

### Secondary Text
- **Color**: White with 80% opacity
- **HEX**: `#FFFFFF` at 80% opacity
- **RGB**: `rgba(255, 255, 255, 0.8)`
- **Usage**: Descriptions, secondary content

### Muted Text
- **Color**: White with 60-70% opacity
- **HEX**: `#FFFFFF` at 60-70% opacity
- **RGB**: `rgba(255, 255, 255, 0.6-0.7)`
- **Usage**: Labels, captions, less important text

---

## UI Element Colors

### Card Backgrounds
- **Color**: White with 5-10% opacity
- **HEX**: `#FFFFFF` at 5-10% opacity
- **RGB**: `rgba(255, 255, 255, 0.05-0.1)`
- **Usage**: Cards, glassmorphic elements

### Borders
- **Color**: White with 10-20% opacity
- **HEX**: `#FFFFFF` at 10-20% opacity
- **RGB**: `rgba(255, 255, 255, 0.1-0.2)`
- **Usage**: Card borders, dividers

### Input Fields
- **Background**: White with 10% opacity
- **Border**: White with 20% opacity
- **Placeholder**: White with 50% opacity

---

## Decorative Colors

### Accent Glow/Orbs
- **Color**: Accent with 20-30% opacity
- **HEX**: `#B8252C` at 20-30% opacity
- **RGB**: `rgba(184, 37, 44, 0.2-0.3)`
- **Usage**: Background decorative blurs

### Pink Glow/Orbs
- **Color**: Pink-500 with 10% opacity
- **HEX**: `#EC4899` at 10% opacity
- **RGB**: `rgba(236, 72, 153, 0.1)`
- **Usage**: Background decorative blurs

---

## Special Purpose Colors

### WhatsApp Button
- **HEX**: `#25D366`
- **RGB**: `rgb(37, 211, 102)`
- **Name**: WhatsApp Green
- **Usage**: WhatsApp button background

### Destructive/Actions
- **HSL**: `hsl(0, 84.2%, 60.2%)`
- **HEX**: `#EF4444` (approximate)
- **RGB**: `rgb(239, 68, 68)`
- **Usage**: Error states, delete actions

---

## Color System (HSL Values)

### Light Mode (Not Currently Used)
- **Background**: `hsl(0, 0%, 97%)` - Very light gray
- **Foreground**: `hsl(0, 0%, 12%)` - Almost black
- **Card**: `hsl(0, 0%, 100%)` - White
- **Muted**: `hsl(0, 0%, 94%)` - Light gray

### Dark Mode (Currently Active)
- **Background**: `hsl(0, 0%, 8%)` - Very dark
- **Foreground**: `hsl(0, 0%, 98%)` - Almost white
- **Card**: `hsl(0, 0%, 12%)` - Dark gray
- **Muted**: `hsl(0, 0%, 15%)` - Dark gray
- **Border**: `hsl(0, 0%, 20%)` - Dark gray border

---

## Custom Design Tokens

### Charcoal
- **HSL**: `hsl(0, 0%, 12%)`
- **HEX**: `#1F1F1F`
- **RGB**: `rgb(31, 31, 31)`

### Burgundy
- **HSL**: `hsl(0, 58%, 42%)`
- **HEX**: `#B8252C`
- **RGB**: `rgb(184, 37, 44)`

### Light Gray
- **HSL**: `hsl(0, 0%, 97%)`
- **HEX**: `#F7F7F7`
- **RGB**: `rgb(247, 247, 247)`

### Off White
- **HSL**: `hsl(0, 0%, 98%)`
- **HEX**: `#FAFAFA`
- **RGB**: `rgb(250, 250, 250)`

---

## Gradient Overlays (From CSS)

### Gradient Overlay
- **From**: `rgba(30, 30, 30, 0.85)` - Dark gray with 85% opacity
- **To**: `rgba(184, 37, 44, 0.75)` - Burgundy with 75% opacity
- **Direction**: 135deg

### Hero Gradient
- **From**: `rgba(0, 0, 0, 0.4)` - Black with 40% opacity
- **To**: `rgba(0, 0, 0, 0.7)` - Black with 70% opacity
- **Direction**: Top to Bottom

---

## Usage Guidelines

### Primary Gradient (Accent to Pink)
- Use for: Brand name text, important headings, call-to-action highlights
- Direction: Horizontal (left to right)
- Colors: `#B8252C` → `#F472B6`

### Background Gradient
- Use for: All page backgrounds, section backgrounds
- Direction: Diagonal (top-left to bottom-right)
- Colors: `#020617` → `#051627` → `#0F172A`

### Buttons
- **Primary**: Accent color (`#B8252C`) with hover state at 90% opacity
- **Secondary**: White with 10% opacity background, white border at 20% opacity

### Cards
- Background: White at 5-10% opacity
- Border: White at 10-20% opacity
- Hover: Background increases to 10% opacity

---

## Quick Reference

| Color Name | HEX | RGB | Usage |
|------------|-----|-----|-------|
| Accent/Burgundy | `#B8252C` | `rgb(184, 37, 44)` | Primary brand color |
| Pink | `#F472B6` | `rgb(244, 114, 182)` | Secondary brand color |
| Dark Blue 1 | `#020617` | `rgb(2, 6, 23)` | Background start |
| Dark Blue 2 | `#051627` | `rgb(5, 22, 39)` | Background middle |
| Dark Blue 3 | `#0F172A` | `rgb(15, 23, 42)` | Background end |
| WhatsApp Green | `#25D366` | `rgb(37, 211, 102)` | WhatsApp button |
| White | `#FFFFFF` | `rgb(255, 255, 255)` | Text, borders (with opacity) |

---

## Notes for Designers

1. **Opacity Levels**: The website heavily uses white with various opacity levels (5%, 10%, 20%, 50%, 60%, 70%, 80%) for glassmorphic effects.

2. **Gradient Usage**: The primary brand gradient (Burgundy to Pink) is used extensively for text highlights and decorative elements.

3. **Dark Theme**: The entire website uses a dark theme with the three-color gradient background.

4. **Glassmorphism**: Cards and UI elements use semi-transparent white backgrounds with backdrop blur for a modern glass effect.

5. **Color Accessibility**: Ensure sufficient contrast when using accent colors on dark backgrounds.

---

*Last Updated: Based on current codebase analysis*

