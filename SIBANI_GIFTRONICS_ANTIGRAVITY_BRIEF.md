# Sibani Giftronics: Spatial UI Website Build Brief

**Target Agent:** Antigravity (Gemini 3.1 Pro)
**Goal:** Build a unique, premium "Spatial UI" website for a physical mobile retail shop in Damanjodi.
**Stack:** Next.js (App Router), React, TypeScript, CSS Modules, `next/font/google`.

## 1. Operating Contract & Anti-Hallucination Rules
To prevent AI hallucinations and generic outputs, adhere strictly to these rules:
1. **Source of Truth:** If a fact, price, or product is not listed in this document, DO NOT invent it. No lorem ipsum, no fake testimonials, no generated placeholder products.
2. **No AI Tropes:** DO NOT use typical AI aesthetics. No purple/magenta neon glows, no bento-box grids with sparkly icons, no robot emojis, no dark mode by default. The design must feel like a premium, physical, high-end electronics retail experience.
3. **Strict Stack:** Use Next.js App Router. No `pages/` directory. Use CSS Modules and CSS Custom Properties for styling to achieve the custom Spatial UI effects. Do not use component libraries (no shadcn, no MUI) that dictate their own look.
4. **Local Media Only:** Use `next/image`. If real images aren't available, use a branded placeholder panel, NOT a random Unsplash image.

## 2. Business Facts (Do Not Deviate)
- **Business Name:** Sibani Giftronics
- **Address:** Bhejaput main road, Damanjodi, India 763008
- **Phone:** +91 7008121187
- **Offerings:** Premium mobile retail, latest smartphones, accessories, second-hand iPhone/Vivo, official warranty, buyback & exchange rates.
- **Logo:** Circular badge with "SG" monogram, neon blue/orange/pink ring on dark navy field.

## 3. The Design Language: "Ceramic Spatial UI"
We are building a **Light Spatial UI**. This design mimics physical, high-end materials like frosted glass, brushed titanium, and ceramic. It uses depth (Z-axis), translucency, and soft lighting instead of flat borders and solid backgrounds. 

### 3.1 Color Template Guide (Premium & Tactile)
Use CSS Custom Properties. Do NOT deviate into AI-looking colors.
- `--spatial-canvas`: `#F5F5F7` (Apple-like light silver/grey. The base layer).
- `--spatial-glass`: `rgba(255, 255, 255, 0.65)` (Used with backdrop-blur for floating panels).
- `--spatial-edge`: `rgba(255, 255, 255, 0.8)` (Used for 1px borders to simulate light hitting the glass edge).
- `--text-primary`: `#1D1D1F` (Deep carbon, not pure black).
- `--text-secondary`: `#86868B` (Titanium grey for subtitles).
- `--accent-orange`: `#F97316` (Derived from logo neon ring. Used sparingly for primary CTA buttons).
- `--accent-navy`: `#0A192F` (Derived from logo field. Used for footers and heavy contrast elements).
- `--shadow-float`: `0 20px 40px -15px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.5) inset` (The magic shadow that makes panels float).

### 3.2 Typography
- **Primary Font:** **Outfit** or **Plus Jakarta Sans** (via `next/font/google`). Geometric sans-serifs that look highly engineered, crisp, and premium.
- Weights: 400 for body, 500 for buttons, 600 for subheadings, 700 for headings.
- Letter Spacing: Tighten headings slightly (`-0.02em`) for a sleek tech look.

### 3.3 Spatial Elements (The CSS Magic)
Every major content container is a "Glass Panel" that exists on the Z-axis.
```css
.glassPanel {
  background: var(--spatial-glass);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--spatial-edge);
  box-shadow: var(--shadow-float);
  border-radius: 24px;
}
```

## 4. Page Structure & Composition

### 4.1 The Canvas Background
The `<body>` has `background-color: var(--spatial-canvas)`. To enhance the spatial feel, place two large, highly blurred, very faint colored orbs fixed in the background (one pale orange, one pale blue, opacity 8%, blur 120px). The glass panels will float over these, creating dynamic translucency as you scroll.

### 4.2 Floating Navigation
- A pill-shaped `.glassPanel` anchored to the top center (`position: sticky`), not full width.
- Contains the logo, "Stock", "Exchange", and a "Call Now" button.

### 4.3 Hero Section (The Showcase)
- Huge, centered heading: "Premium Mobile Retail in Damanjodi."
- Subheading in secondary text: "Latest smartphones, official warranty, and the best buyback rates."
- A prominent floating `.glassPanel` below the text acting as a showcase window.
- Buttons: Primary (Solid `--accent-orange`, slightly rounded, inset shadow to look physical), Secondary (Glass pill with dark text).

### 4.4 Live Stock Gallery (Horizontal Spatial Scroll)
- A horizontally scrolling row of `.glassPanel` cards. No vertical list.
- Each card represents a category: "New iPhones", "Second-hand Vivo", "Premium Accessories".
- Hover effect: Cards translate UP on the Y-axis by 4px and shadow increases, simulating picking up a physical object.

### 4.5 Exchange Portal (The Depth Layer)
- Instead of a flat form, the exchange section looks like a modal permanently floating closer to the user on the z-axis.
- A 2-column layout inside a massive `.glassPanel`.
- Left: "Upgrade your tech. Get the best exchange rates."
- Right: A clean, minimalist form (Brand, Model, Condition) with solid white inputs and soft inner shadows. Submission opens a pre-filled WhatsApp link (`https://wa.me/917008121187?text=...`).

### 4.6 Grounded Footer
- Breaks the spatial rule to anchor the page to reality.
- Solid `--accent-navy` background, white text.
- Contains address, Google Maps link, phone, and Instagram link.

## 5. Development Milestones for Agent
Agent: Execute these milestones sequentially. Stop and report after each. Do not proceed to the next milestone until the user approves.
**M0. Initialization:** Scaffold Next.js App Router, set up the font, configure CSS variables in `globals.css`.
**M1. Spatial Foundations:** Build the background mesh, the `.glassPanel` CSS module, and the floating Navigation pill.
**M2. Hero & Showcase:** Implement the Hero section and horizontal scrolling stock gallery.
**M3. Exchange Portal:** Build the interactive form mimicking a floating physical widget. Implement WhatsApp URL encoding logic.
**M4. Footer & Polish:** Implement the solid navy footer, ensure responsive behavior (panels become full-width with smaller radii on mobile), and verify contrast.

## 6. Anti-Hallucination QA Checklist
Agent must verify these before marking M4 complete:
- [ ] No lorem ipsum, placeholder text, or fake products used.
- [ ] Background blur (`backdrop-filter`) is working and performant.
- [ ] Aesthetic is Light Spatial/Premium Tech, avoiding dark-mode AI tropes.
- [ ] No generic AI emojis or SVGs used (e.g., no sparkles, wands, or robots).
- [ ] WhatsApp link correctly encodes the form data.
