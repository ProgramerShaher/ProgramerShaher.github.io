# 🎨 Design System Reference - Portfolio Website

## نظام الألوان (Color Palette)

### Primary Colors
```css
--neon-pink:    #ff2d95    /* RGB(255, 45, 149)  */
--neon-blue:    #00ccff    /* RGB(0, 204, 255)   */
--neon-green:   #00ff99    /* RGB(0, 255, 153)   */
--neon-yellow:  #ffdd00    /* RGB(255, 221, 0)   */
--neon-purple:  #cc00ff    /* RGB(204, 0, 255)   */
--neon-orange:  #ff7700    /* RGB(255, 119, 0)   */
```

### Background Colors
```css
--dark-bg:      #0f0f1e    /* RGB(15, 15, 30)    */
--darker-bg:    #0a0a15    /* RGB(10, 10, 21)    */
--card-bg:      rgba(255, 255, 255, 0.05)
--card-bg-hover: rgba(255, 255, 255, 0.08)
```

### Text Colors
```css
--light-text:    #ffffff   /* RGB(255, 255, 255) */
--text-secondary: rgba(255, 255, 255, 0.8)
--text-muted:    rgba(255, 255, 255, 0.6)
```

---

## التدرجات اللونية (Gradients)

### Hero Title
```css
background: linear-gradient(135deg, #ff2d95, #00ccff, #00ff99, #ffdd00);
```

### Section Highlights
```css
background: linear-gradient(135deg, #ffdd00, #ff7700);
```

### Buttons Primary
```css
background: linear-gradient(135deg, #ff2d95, #00ccff);
```

### Floating Elements
```css
/* Element 1 */
background: linear-gradient(135deg, #ff2d95, #cc00ff);

/* Element 2 */
background: linear-gradient(135deg, #00ccff, #00ff99);

/* Element 3 */
background: linear-gradient(135deg, #ffdd00, #ff7700);
```

---

## المسافات (Spacing)

### Section Padding
```css
--section-padding: 100px;  /* Desktop */
--section-padding: 90px;   /* Laptop */
--section-padding: 80px;   /* Tablet Large */
--section-padding: 60px;   /* Tablet */
--section-padding: 50px;   /* Mobile */
```

### Container Padding
```css
--container-padding: 20px; /* Desktop */
--container-padding: 15px; /* Mobile */
```

### Gap Sizes
```css
gap: 60px;  /* Large */
gap: 40px;  /* Medium */
gap: 30px;  /* Small */
gap: 20px;  /* Extra Small */
gap: 15px;  /* Minimal */
```

---

## الحدود المستديرة (Border Radius)

```css
--radius-sm:  10px;
--radius-md:  15px;
--radius-lg:  20px;
--radius-xl:  30px;
border-radius: 50%; /* Circular */
```

---

## الظلال (Shadows)

### Standard Shadows
```css
--shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.1);
--shadow-md: 0 5px 20px rgba(0, 0, 0, 0.2);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.3);
```

### Neon Shadows
```css
--shadow-neon: 0 0 20px rgba(0, 204, 255, 0.3);

/* Button Shadows */
box-shadow: 0 8px 20px rgba(255, 45, 149, 0.3);
box-shadow: 0 12px 30px rgba(255, 45, 149, 0.5); /* Hover */
```

---

## الانتقالات (Transitions)

### Timing Functions
```css
--transition-fast:   all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Common Transitions
```css
transition: all 0.3s ease;
transition: transform 0.4s ease;
transition: opacity 0.3s ease;
transition: color 0.3s ease;
```

---

## Typography

### Font Family
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Sizes (Responsive)
```css
/* Hero Title */
font-size: clamp(2rem, 6vw, 4rem);

/* Section Titles */
font-size: clamp(2rem, 5vw, 3rem);

/* Subsection Titles */
font-size: clamp(1.5rem, 3vw, 2rem);

/* Body Text */
font-size: clamp(0.95rem, 1.5vw, 1.05rem);

/* Small Text */
font-size: clamp(0.85rem, 1.5vw, 0.95rem);

/* Navigation */
font-size: clamp(0.9rem, 1.5vw, 1rem);
```

### Font Weights
```css
font-weight: 300;  /* Light */
font-weight: 400;  /* Regular */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semi-Bold */
font-weight: 700;  /* Bold */
font-weight: 800;  /* Extra-Bold */
```

### Line Heights
```css
line-height: 1.2;  /* Headings */
line-height: 1.6;  /* Body */
line-height: 1.8;  /* Paragraphs */
```

---

## Breakpoints

```css
/* Large Desktop */
@media (min-width: 1920px) { }

/* Desktop */
@media (max-width: 1366px) { }

/* Laptop */
@media (max-width: 1024px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Mobile Large */
@media (max-width: 576px) { }

/* Mobile Small */
@media (max-width: 480px) { }
```

---

## Grid Systems

### Skills Grid
```css
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 30px;

/* Tablet */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 25px;

/* Mobile */
grid-template-columns: 1fr;
```

### Projects Grid
```css
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
gap: 35px;

/* Tablet */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 25px;

/* Mobile */
grid-template-columns: 1fr;
```

### About Content
```css
/* Desktop */
grid-template-columns: 1fr 1.5fr;
gap: 60px;

/* Laptop */
grid-template-columns: 1fr;
gap: 40px;
```

---

## Animations

### Keyframes
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes float {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg);
    }
    25% {
        transform: translate(30px, 30px) rotate(90deg);
    }
    50% {
        transform: translate(0, 60px) rotate(180deg);
    }
    75% {
        transform: translate(-30px, 30px) rotate(270deg);
    }
}

@keyframes progressShine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}
```

### Animation Usage
```css
animation: fadeInUp 1s ease-out;
animation: gradientShift 5s ease infinite;
animation: float 20s infinite ease-in-out;
animation: progressShine 2s infinite;
```

---

## Hover Effects

### Cards
```css
/* Default */
transform: translateY(0);
box-shadow: var(--shadow-sm);

/* Hover */
transform: translateY(-10px) scale(1.02);
box-shadow: var(--shadow-lg);
```

### Buttons
```css
/* Default */
transform: translateY(0) scale(1);

/* Hover */
transform: translateY(-3px) scale(1.02);
```

### Images
```css
/* Default */
transform: scale(1);

/* Hover */
transform: scale(1.05) rotate(5deg);
```

---

## Z-Index Layers

```css
z-index: 1;     /* Floating elements */
z-index: 2;     /* Hero content */
z-index: 1000;  /* Header */
z-index: 1001;  /* Mobile menu */
```

---

## Backdrop Effects

```css
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);

backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);

backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

---

## Icon Sizes

```css
/* Small */
font-size: 1rem;
width: 40px;
height: 40px;

/* Medium */
font-size: 1.2rem;
width: 50px;
height: 50px;

/* Large */
font-size: 1.5rem;
width: 60px;
height: 60px;
```

---

## Button Styles

### Primary Button
```css
background: linear-gradient(135deg, #ff2d95, #00ccff);
color: white;
padding: 14px 35px;
border-radius: 50px;
box-shadow: 0 8px 20px rgba(255, 45, 149, 0.3);

/* Hover */
transform: translateY(-3px) scale(1.02);
box-shadow: 0 12px 30px rgba(255, 45, 149, 0.5);
```

### Secondary Button
```css
background: transparent;
color: #00ccff;
border: 2px solid #00ccff;
padding: 14px 35px;
border-radius: 50px;
box-shadow: 0 0 15px rgba(0, 204, 255, 0.2);

/* Hover */
background: rgba(0, 204, 255, 0.1);
transform: translateY(-3px) scale(1.02);
box-shadow: 0 0 25px rgba(0, 204, 255, 0.4);
```

---

## Usage Examples

### Creating a Card
```css
.custom-card {
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: 30px;
    box-shadow: var(--shadow-md);
    transition: var(--transition-smooth);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.custom-card:hover {
    background: var(--card-bg-hover);
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}
```

### Creating a Gradient Text
```css
.gradient-text {
    background: linear-gradient(135deg, var(--neon-pink), var(--neon-blue));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Creating a Neon Button
```css
.neon-button {
    background: transparent;
    color: var(--neon-blue);
    border: 2px solid var(--neon-blue);
    padding: 12px 30px;
    border-radius: 50px;
    box-shadow: 0 0 15px rgba(0, 204, 255, 0.3);
    transition: var(--transition-fast);
}

.neon-button:hover {
    background: rgba(0, 204, 255, 0.1);
    box-shadow: 0 0 25px rgba(0, 204, 255, 0.5);
    transform: translateY(-3px);
}
```

---

## Quick Reference

### Most Used Colors
- Primary: `#ff2d95` (Pink)
- Secondary: `#00ccff` (Blue)
- Accent: `#00ff99` (Green)
- Background: `#0f0f1e` (Dark)

### Most Used Spacing
- Section: `100px` (Desktop), `60px` (Mobile)
- Gap: `30px` (Cards), `20px` (Elements)
- Padding: `30px` (Cards), `20px` (Container)

### Most Used Transitions
- Fast: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Smooth: `0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`

### Most Used Shadows
- Light: `0 5px 20px rgba(0, 0, 0, 0.2)`
- Heavy: `0 10px 40px rgba(0, 0, 0, 0.3)`
- Neon: `0 0 20px rgba(0, 204, 255, 0.3)`

---

**استخدم هذا المرجع عند إضافة عناصر جديدة للحفاظ على التناسق!**
