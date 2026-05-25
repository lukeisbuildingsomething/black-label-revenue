---
name: Black Label Revenue
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-card: '#1A1A1A'
  outline-technical: '#262626'
  grid-line: '#131313'
  indicator-green: '#22c55e'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
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
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 24px
  margin-desktop: 64px
  section-gap: 120px
  container-max: 1280px
---

## Brand & Style
The brand identity is rooted in **Architectural Brutalism** and **Technical Precision**. It targets high-level executives and technical founders in the B2B SaaS space who value shipping over advice. The emotional response should be one of "industrial-grade reliability" and "calculated sophistication."

The design style utilizes a high-contrast, dark-mode aesthetic with a rigid grid structure. It rejects soft curves and organic shapes in favor of sharp corners and monospaced technical indicators, mimicking a blueprint or a developer’s terminal. The use of subtle grid overlays and crosshair markers reinforces the "architect" and "operator" narrative.

## Colors
The palette is strictly monochromatic to emphasize content and structure. 

- **Primary (#FFFFFF):** Reserved for high-impact typography, core call-to-actions, and active UI states.
- **Secondary (#A3A3A3):** Used for supporting text, labels, and iconography to create a hierarchy of importance.
- **Background (#0A0A0A):** An absolute black to provide maximum contrast for the white primary elements.
- **Surface (#1A1A1A):** A slightly elevated grey for cards and containers.
- **Technical Outlines (#262626):** Low-contrast borders that define the grid without cluttering the visual field.

## Typography
The system uses a tri-font strategy to differentiate roles:
- **Hanken Grotesk (Display):** Bold and sharp for high-level branding and section headers.
- **Inter (Body):** Highly legible and utilitarian for long-form descriptions and information density.
- **JetBrains Mono (Labels/Technical):** Used for navigation, metadata, and "status indicators" to lean into the technical operator persona.

All labels should be converted to uppercase with slight letter spacing to enhance the "monospaced machine" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy centered in a maximum container width of 1280px. 

- **Grid Alignment:** Cards and sections are defined by 1px borders that align perfectly with an invisible 8px baseline grid.
- **Sectioning:** Large vertical gaps (120px) separate major content blocks to provide breathing room amidst the high-contrast elements.
- **The "Bento" Grid:** Information within cards is organized into modular blocks. On desktop, cards span 50% width in a 2-column layout. On mobile, they collapse into a single-column stack.
- **Structural Accents:** Use horizontal and vertical rules (`h-px` or `w-px`) with square markers (2x2 units) at the ends to emphasize the blueprint aesthetic.

## Elevation & Depth
Depth is strictly conveyed through **Tonal Separation** and **Bold Outlines**. 

- **Flatness:** Shadows are entirely omitted.
- **Surfacing:** Level 0 is the background (#0A0A0A). Level 1 (Cards) uses #1A1A1A with a 1px solid border (#262626).
- **Grid Overlay:** A 40px x 40px background grid using #131313 provides a subtle texture that suggests a drafting table or coordinate system.
- **Interaction:** Hover states do not use elevation but rather shifts in opacity or subtle color changes (e.g., secondary text to primary white).

## Shapes
The shape language is **Zero-Radius**. Every corner in the interface—buttons, cards, inputs, and borders—is 0px sharp. 

The only exception to this rule is functional icons (Material Symbols) and the "Pill" exception for status indicators (e.g., active deployment dots), which are circular to provide a focal point against the rigid geometry.

## Components

### Buttons
- **Primary:** Sharp corners, background #FFFFFF, text #2F3131, bold JetBrains Mono. Transitions: 90% opacity on hover, scale-95 on active.
- **Outline:** Sharp corners, 1px border #FFFFFF, text #FFFFFF. Hover: background #FFFFFF, text #2F3131.

### Cards
- **Technical Card:** Background #1A1A1A, 1px border #262626. Header contains a monospaced label and a functional icon. Content is often subdivided by further 1px internal lines.

### Inputs & Code Blocks
- **Terminal Style:** Use JetBrains Mono for all input text. For display boxes, use #0E0E0E background with a subtle opacity on the text to simulate a CLI environment.

### Progress Indicators
- **Linear:** A 4px track using #444748 with a primary #FFFFFF fill. Labels above the track should indicate the "Phase" and "Status" in monospaced caps.

### Navigational Links
- **Monospace Links:** Secondary color #A3A3A3, JetBrains Mono. Active state: Primary color #FFFFFF with a 1px underline.