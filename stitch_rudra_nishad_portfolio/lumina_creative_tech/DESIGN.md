---
name: Lumina Creative Tech
colors:
  surface: '#faf8ff'
  surface-dim: '#dad9e0'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3fa'
  surface-container: '#eeedf4'
  surface-container-high: '#e8e7ee'
  surface-container-highest: '#e2e2e9'
  on-surface: '#1a1b20'
  on-surface-variant: '#494454'
  inverse-surface: '#2f3035'
  inverse-on-surface: '#f1f0f7'
  outline: '#7b7486'
  outline-variant: '#cbc3d7'
  surface-tint: '#6d3bd7'
  primary: '#6b38d4'
  on-primary: '#ffffff'
  primary-container: '#8455ef'
  on-primary-container: '#fffbff'
  inverse-primary: '#d0bcff'
  secondary: '#b4136d'
  on-secondary: '#ffffff'
  secondary-container: '#fd56a7'
  on-secondary-container: '#600037'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0053'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#1a1b20'
  surface-variant: '#e2e2e9'
typography:
  display:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-gap: 120px
  card-padding: 32px
---

## Brand & Style

The design system is built for a high-energy, creative portfolio that bridges the gap between Computer Science engineering and digital artistry. The brand personality is approachable, forward-thinking, and vibrant, designed to evoke a sense of "technical playfulness."

The visual style is **Creative Glassmorphism**. It utilizes a clean, airy foundation with "Glass" surfaces—semi-transparent containers with high-quality backdrop blurs—layered over organic, pulsating gradient blobs. This creates a sense of depth and fluidity, moving away from rigid corporate structures toward a more expressive, immersive environment. The goal is to present technical expertise through a lens of modern, high-end digital aesthetics.

## Colors

This design system uses a palette of "Electric" tones set against a soft, breathable background.

- **Primary (Electric Purple):** Used for main actions, active states, and high-level branding.
- **Secondary (Cyber Pink):** Used for highlights, decorative accents, and secondary interactions.
- **Tertiary (Neon Mint):** Reserved for success states, code-related callouts, or "available for work" indicators.
- **Background (Lavender Mist):** An off-white `#F9F8FF` base that prevents the starkness of pure white and complements the purple accents.
- **Glass Backgrounds:** Surfaces should use white at 40-60% opacity with a `20px` to `40px` backdrop blur to maintain legibility over the colorful background blobs.

## Typography

The typography strategy pairs the expressive, ultra-modern **Syne** for headlines with the functional clarity of **Inter** for body text.

- **Headlines:** Use Syne with tight letter-spacing. Use "Display" for hero sections to create a punchy, editorial feel.
- **Body:** Inter provides a grounded, professional contrast to the expressive headlines, ensuring long-form content (like project descriptions) remains highly readable.
- **Technical/Mono:** JetBrains Mono is used for snippets, tags, and small metadata labels to reinforce the CSE student identity.

## Layout & Spacing

The design system employs a **Fluid Grid** model with generous white space to allow the Glassmorphic elements to breathe.

- **Desktop:** 12-column grid with a 1280px max-width.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.
- **Vertical Rhythm:** Use large 120px gaps between sections to emphasize the "Portfolio as a Gallery" concept. 
- **Dynamic Blobs:** Background gradient blobs should be positioned absolutely and move slightly on scroll or mouse-move to enhance the "living" feel of the UI.

## Elevation & Depth

Depth is achieved through **translucency and soft diffusion** rather than traditional hard shadows.

- **Surface Tiers:** All cards and containers use a semi-transparent white fill (`rgba(255, 255, 255, 0.45)`).
- **Backdrop Blur:** A consistent `blur(24px)` is applied to all elevated surfaces to create the "frosted glass" effect.
- **Ambient Shadows:** Shadows should be extremely soft, using the Primary (Purple) or Secondary (Pink) colors at very low opacity (5-10%) to create a colored glow effect rather than a gray shadow.
- **Interaction:** On hover, surfaces should increase in opacity and the shadow blur should double to simulate the object lifting toward the user.

## Shapes

The shape language is defined by **maximum roundedness**. Square corners are entirely avoided to maintain the friendly and organic aesthetic.

- **Base Elements:** Use `rounded-2xl` (1rem) for standard components.
- **Containers & Cards:** Use `rounded-3xl` (2rem) for a soft, pillow-like appearance.
- **Interactive Elements:** Buttons and tags use `rounded-full` (pill-shaped) to create a distinct, tactile feel that invites clicking.

## Components

- **Buttons:** Primary buttons use a vibrant gradient from Electric Purple to Cyber Pink with white text. Secondary buttons use the Glassmorphism style with a thin, semi-transparent white border.
- **Cards:** Project cards should feature a large image with a "glass" overlay for the title and tags at the bottom.
- **Chips/Tags:** Use the tertiary Neon Mint for technical tags (e.g., "React", "Python") to make them pop against the purple/pink theme.
- **Inputs:** Text fields should be pill-shaped with a subtle glass background. The focus state should illuminate the border with a Primary Purple glow.
- **Project Grid:** Use an asymmetric layout where some cards span 2 columns and others 1, creating a dynamic, less "templated" look.
- **Glass Navbar:** A fixed top navigation bar with a high blur coefficient and a thin bottom-border of `rgba(255,255,255,0.2)`.