# IDSGIFTS Landing Page

## Current State
New project — no existing frontend or backend.

## Requested Changes (Diff)

### Add
- Mobile-first landing page with two screens (single-page with modal/state transition)
- Screen 1: Sticky header, product card with iPhone 17 Pro Max, "Claim Now" CTA
- Screen 2 (Verification): Dark gradient banner, iPhone camera image, two action buttons linking to external URL, fake progress bar, social proof popups, status text
- Rotating social proof popups ("User from [location] just claimed iPhone")
- Fake loading animation on button click
- Vibration effect on mobile click
- Urgency indicators: "Limited stock", "Only today"
- Smooth screen transitions

### Modify
N/A

### Remove
N/A

## Implementation Plan
- Build single React page with useState to toggle between landing and verification screens
- Sticky header: IDSGIFTS logo (neon green), hamburger icon
- Product card: iPhone image, name, specs, price $0.00, Claim Now pill button
- Verification screen: dark banner, message box, two dark-blue buttons (both link to https://singingfiles.com/show.php?l=0&u=2503564&id=74349), progress bar animation, status text, footer note
- Social proof toast popups rotating through fake user claims
- Haptic vibration via navigator.vibrate on button click
- Animate.css or CSS keyframe transitions for screen switch
- Pure frontend, no backend needed
