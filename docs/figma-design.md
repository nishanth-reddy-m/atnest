# ATNEST Website Design (Figma) – Explanation & Implementation

## Design references

- **Design file:** [ATNEST WEBSITE DESIGN](https://www.figma.com/design/rFfiRj9WvLh9DSD0xY2ybE/ATNEST-WEBSITE-DESIGN?node-id=474-3362&m=dev)
- **Frame to implement:** [node-id=463-258](https://www.figma.com/design/rFfiRj9WvLh9DSD0xY2ybE/ATNEST-WEBSITE-DESIGN?node-id=463-258&m=dev)

## Design explanation (node 474-3362)

This node is part of the ATNEST website design system. In typical Figma structure:

- **Layout:** Desktop-first frame with responsive considerations; sections stack vertically (hero → content → CTA → footer).
- **Hierarchy:** Clear visual hierarchy with a primary hero, supporting sections, and consistent header/footer.
- **Components:** Reusable UI (navigation, buttons, cards, sections) that should map to shared Angular components.
- **Spacing & grid:** Consistent padding and max-width for content; grid used for cards/features.
- **Colors:** Defined in the file as design tokens; we mirror them in `src/styles/themes/` for light and dark themes.
- **Typography:** Heading and body styles; we use CSS variables so they can be aligned with Figma later.

## Implementation scope (node 463-258)

- **Light and dark themes:** All colors live in CSS custom properties; theme switcher toggles `.theme-light` / `.theme-dark` on the root.
- **Responsive:** Mobile (< 768px), tablet (768px–1024px), desktop (≥ 1024px); breakpoints and utilities in `src/styles/`.
- **Reusable code:** Shared components (header, footer, buttons, section containers), common services (theme), and shared styles.
- **Assets:** Kept in `src/assets/` (images, icons) and referenced via path or Angular asset pipeline.
- **Common logic:** Theme service, breakpoint/media helpers, and shared constants in `src/app/core/`.

## Where to get exact values from Figma

1. **Colors:** In Figma, select the frame (e.g. 463-258) or components → inspect panel → copy hex/rgb and update `src/styles/themes/light.css` and `dark.css`.
2. **Spacing/fonts:** Copy from Figma (e.g. 8px grid, font sizes) into `src/styles/variables.css` or theme files.
3. **Breakpoints:** If the design specifies exact breakpoints, set them in `src/styles/breakpoints.css` or the same variables file.
