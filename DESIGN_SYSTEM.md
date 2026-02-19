# Coach App Design System

## Overview
This design system defines the visual language, components, and patterns for the Coach fitness app. Built with mobile-first principles, emphasizing clarity, motivation, and ease of use.

---

## Design Principles

### 1. **Mobile-First & Thumb-Friendly**
- All primary actions within easy thumb reach (bottom 60% of screen)
- Touch targets minimum 44x44px
- Vertical scrolling preferred over horizontal
- Bottom navigation for core actions

### 2. **Progressive Disclosure**
- Show essential information first
- Expand/collapse for details
- Minimize cognitive load per screen
- One primary action per view

### 3. **Motivational Design**
- Visual progress indicators throughout
- Celebrate milestones with micro-interactions
- Use positive, empowering language
- Show clear path to goals

### 4. **Consistency & Predictability**
- Reusable components with consistent behavior
- Familiar patterns (bottom nav, cards, buttons)
- Clear visual hierarchy
- Predictable feedback for all interactions

---

## Color System

### Primary Colors
```
Black:  #000000
Yellow: #FFE358  (primary accent, CTAs, highlights)
```

### Secondary Colors
```
Green:  #57CB72  (success, progress, positive states)
Red:    #FF5858  (alerts, missed actions, warnings)
Blue:   #588DFF  (info, neutral actions)
```

### Neutral Scale
```
White:      #FFFFFF  (backgrounds)
Gray-100:   #F5F5F5  (subtle backgrounds)
Gray-200:   #E5E5E5  (borders, dividers)
Gray-300:   #D4D4D4  (disabled states)
Gray-700:   #404040  (secondary text)
Gray-900:   #171717  (body text)
```

### Usage Guidelines
- **Yellow (#FFE358)**: Primary CTAs, active states, key highlights
- **Black (#000000)**: Primary text, headers, emphasis
- **Green (#57CB72)**: Completed workouts, progress milestones, success messages
- **Red (#FF5858)**: Missed workouts, warnings, delete actions
- **Blue (#588DFF)**: Information, secondary actions, links

---

## Typography

### Font Families
```
Primary (Display/Headings): "PuffSquare-Regular"
Secondary (Body/UI):        "Calibri", system-ui, sans-serif
```

### Type Scale (Mobile)
```
Heading 1:  32px / 1.2    (PuffSquare) - Page titles
Heading 2:  24px / 1.25   (PuffSquare) - Section headers
Heading 3:  20px / 1.2    (PuffSquare) - Component headers
Body:       16px / 1.5    (Calibri)    - Main content
Body Small: 14px / 1.5    (Calibri)    - Secondary text
Caption:    12px / 1.4    (Calibri)    - Labels, metadata
```

### Font Weight
- Regular (400): All text
- No bold/italic variations needed (PuffSquare is display-weight by design)

### Usage Guidelines
- **PuffSquare**: Headers, CTAs, navigation labels, key numbers
- **Calibri**: All body text, descriptions, form inputs, captions

---

## Spacing System

Based on 4px base unit:

```
xs:   4px   (tight gaps, icon spacing)
sm:   8px   (inline elements, small padding)
md:   16px  (standard padding, card spacing)
lg:   24px  (section gaps)
xl:   32px  (major sections)
2xl:  48px  (page margins)
3xl:  64px  (hero sections)
```

### Container Padding
- Mobile: 16px (left/right)
- Sections: 24px (top/bottom)

---

## Components Library

### Buttons

#### Primary Button
```
Background: #FFE358 (Yellow)
Text: #000000 (Black, PuffSquare, 20px)
Padding: 16px 32px
Border Radius: 12px
Height: 56px (minimum touch target)

States:
- Hover: darken 10%
- Active: darken 20%
- Disabled: #D4D4D4 bg, #A3A3A3 text
```

#### Secondary Button
```
Background: Transparent
Border: 2px solid #000000
Text: #000000 (PuffSquare, 20px)
Padding: 16px 32px
Border Radius: 12px
Height: 56px

States:
- Hover: #F5F5F5 background
- Active: #E5E5E5 background
```

#### Text Button
```
Background: None
Text: #588DFF (Calibri, 16px)
Padding: 8px 16px
Underline on hover
```

### Cards

#### Standard Card
```
Background: #FFFFFF
Border: 1px solid #E5E5E5
Border Radius: 16px
Padding: 16px
Shadow: 0 2px 8px rgba(0,0,0,0.08)

Hover: Shadow increases to 0 4px 12px rgba(0,0,0,0.12)
```

#### Image Card (Goal/Baseline)
```
Aspect Ratio: 1:1 (square)
Border Radius: 12px
Overlay: Gradient on hover for actions
```

#### Week Component Card
```
Background: #F5F5F5 (collapsed) / #FFFFFF (expanded)
Border: 2px solid #000000 (expanded only)
Border Radius: 16px
Padding: 16px

Lock State (future weeks):
- Background: #E5E5E5
- Opacity: 0.6
- Lock icon overlay
```

### Navigation

#### Top Navigation Bar
```
Height: 64px
Background: #FFFFFF
Border Bottom: 1px solid #E5E5E5
Padding: 0 16px

Layout:
- Left: Logo (PuffSquare, 20px)
- Right: Sign In / Profile

Fixed position on scroll
```

#### Bottom Navigation Bar
```
Height: 72px
Background: #FFFFFF
Border Top: 1px solid #E5E5E5

3 Items Maximum:
- Plan (Home)
- Assess (Progress)
- Profile (future)

Active State: #FFE358 background, #000 text
Inactive State: #404040 text, no background
```

### Progress Indicators

#### Linear Progress Bar
```
Height: 8px
Background: #E5E5E5
Fill: #57CB72 (progress) / #FFE358 (active goal)
Border Radius: 4px

With Label:
- Above: Current / Total (Calibri, 14px, #404040)
```

#### Status Badge (Day Component)
```
Size: 24px x 24px (or auto-width with padding)
Border Radius: 12px
Font: Calibri, 12px, centered

States:
- Completed: #57CB72 bg, #FFFFFF text, "✓"
- Awaiting: #FFE358 bg, #000000 text, "Log"
- Missed: #FF5858 bg, #FFFFFF text, "×"
```

### Forms & Inputs

#### Text Input
```
Height: 56px
Background: #FFFFFF
Border: 2px solid #E5E5E5
Border Radius: 12px
Padding: 16px
Font: Calibri, 16px

Focus: Border #FFE358
Error: Border #FF5858
```

#### Upload Button
```
Border: 2px dashed #E5E5E5
Border Radius: 16px
Padding: 32px
Background: #F5F5F5
Hover: #E5E5E5

Center aligned:
- Icon (48px)
- Text (Calibri, 16px, #404040)
```

### Day Component (Reusable)
```
Structure:
┌─────────────────────┐
│ Mon, Feb 19         │  (Calibri, 14px, #404040)
│ Chest & Triceps     │  (PuffSquare, 18px, #000)
│ [Show Details] [✓]  │  (Button + Status)
└─────────────────────┘

Background: #FFFFFF
Border: 1px solid #E5E5E5
Border Radius: 12px
Padding: 16px

Status Indicator (right): Completed / Awaiting / Missed badge
```

### Week Component (Reusable)
```
Collapsed State:
┌─────────────────────┐
│ Week 2       [🔒]   │  (Locked future week)
│ 4 sessions          │
└─────────────────────┘

Expanded State:
┌─────────────────────┐
│ Week 1       [Edit] │
│ ┌─────────────────┐ │
│ │ Day 1 Component │ │  (Multiple Day components)
│ │ Day 2 Component │ │
│ │ Day 3 Component │ │
│ └─────────────────┘ │
└─────────────────────┘

Border: 2px solid #000 (expanded)
Background: #FFFFFF (expanded) / #F5F5F5 (collapsed)
```

### Focus Area Component (Onboarding 4th Screen)
```
┌─────────────────────────────────┐
│ Chest                           │  (PuffSquare, 20px)
│ Build mass and definition       │  (Calibri, 16px)
│                                 │
│ Current: Flat, undefined        │  (Calibri, 14px, #404040)
│ Goal: Broad, defined pecs       │  (Calibri, 14px, #404040)
│                                 │
│ [✓ Approved]    [Refine]        │  (Buttons)
└─────────────────────────────────┘

Border: 2px solid #E5E5E5 (unapproved) / #57CB72 (approved)
Border Radius: 16px
Padding: 16px
```

---

## Layout Patterns

### Mobile Screen Structure
```
┌────────────────────────┐
│   Top Nav (64px)       │  Fixed
├────────────────────────┤
│                        │
│   Scrollable Content   │
│   (with 16px padding)  │
│                        │
├────────────────────────┤
│  Bottom Nav (72px)     │  Fixed (when applicable)
└────────────────────────┘
```

### Content Spacing
- Top of page to first content: 24px
- Between major sections: 32px
- Between cards in list: 16px
- Between form fields: 16px

---

## Animations & Interactions

### Micro-interactions
```
Button Press:
- Scale: 0.98
- Duration: 100ms
- Easing: ease-out

Card Hover:
- Shadow: increase
- Duration: 200ms
- Easing: ease-in-out

Progress Update:
- Transition: width
- Duration: 400ms
- Easing: ease-out

Page Transition:
- Fade + Slide up
- Duration: 300ms
- Easing: ease-in-out
```

### Loading States
```
Skeleton Screens:
- Gray rectangles (#E5E5E5)
- Subtle pulse animation
- Match component layout

Spinners:
- Color: #FFE358
- Size: 32px (small) / 48px (large)
- Centered in container
```

---

## Accessibility

### Contrast Ratios
- Body text on white: 14:1 (AAA)
- Secondary text (#404040) on white: 8:1 (AAA)
- Yellow (#FFE358) requires black text for 10:1 ratio

### Touch Targets
- Minimum: 44x44px
- Preferred: 56px height for primary actions
- Spacing between targets: 8px minimum

### Focus States
- Visible outline: 2px solid #588DFF
- Offset: 2px
- Never remove focus indicators

### Screen Reader Support
- All images have alt text
- Form inputs have labels
- Buttons have descriptive text
- ARIA labels for icon-only buttons

---

## Image Guidelines

### User Uploads (Goal/Baseline)
```
Aspect Ratio: 1:1 (square)
Display Size: 160x160px (mobile)
Max Upload: 2MB
Format: JPG, PNG, WebP
Compression: Automatic optimization
```

### Placeholder Images
```
Background: #F5F5F5
Border: 2px dashed #E5E5E5
Icon: Camera or Upload (32px, #A3A3A3)
Text: "Add photo" (Calibri, 14px, #A3A3A3)
```

---

## Best Practices

### Content
- Keep headlines short (5-7 words max)
- Use active voice
- Replace negative language ("You failed") with positive ("Try again tomorrow")
- Show confidence scores for AI recommendations

### Data Display
- Numbers in PuffSquare for emphasis
- Units in Calibri
- Always show context (e.g., "Week 1 of 6")

### Feedback
- Immediate visual confirmation for all actions
- Success messages: 3 seconds auto-dismiss
- Error messages: User-dismissible, actionable

### Performance
- Images lazy-loaded
- Skeleton screens for initial load
- Optimistic UI updates (show action immediately, sync in background)
- Maximum bundle size: 200KB (initial load)

---

## Component Checklist

Before implementing any component, ensure:
- [ ] Mobile-first responsive
- [ ] All states defined (default, hover, active, disabled, loading, error)
- [ ] Accessibility checked (contrast, focus, screen reader)
- [ ] Touch targets meet minimum size
- [ ] Uses design tokens (no hardcoded values)
- [ ] Animations subtle and performant
- [ ] Works with real data (empty states, long text, edge cases)

---

## Version History

- **v1.0** (2026-02-19): Initial design system based on Figma 7.32 and UX research
