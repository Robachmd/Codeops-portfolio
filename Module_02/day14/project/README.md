# Habesha Eatery Restaurant Menu

A responsive restaurant menu website built with **HTML5** and **CSS3**. The project showcases authentic Ethiopian dishes organized into categories with a modern card layout, responsive grid design, and simple navigation.

 

## Project Overview

The website includes:

- Responsive navigation bar
- Restaurant banner
- Menu categories
  - Appetizers
  - Main Courses
  - Drinks
- Food cards with:
  - Image
  - Description
  - Ingredients
  - Price
  - "Popular" badge
- Footer containing:
  - About section
  - Contact information
  - Restaurant location with embedded Google Map
- Responsive layout using CSS Grid and Flexbox

# Features

- Responsive design
- CSS Grid menu layout
- Flexbox navigation
- Sticky navigation bar
- Hover effects on menu cards
- Semantic HTML5 elements
- CSS variables for consistent colors
- Google Maps integration
- Accessible images using `alt` attributes
- Expandable ingredient lists using `<details>`

 

# Technologies Used

- HTML5
- CSS3
- Flexbox
- CSS Grid
- Google Maps Embed

 

# Project Structure

```
project/
│
├── index.html
├── layout.css
│
├── images/
│   ├── logo.png
│   ├── habesha_eatary_banner.png
│   ├── sambusa.jpg
│   ├── chechebsa.jpg
│   ├── salad.jpg
│   ├── doro_wot.jpg
│   ├── tibs.jpg
│   ├── kitfo.jpg
│   ├── coffee.jpg
│   ├── mango_juice.jpg
│   └── papaya_juice.jpg
│
└── README.md
```

 

# Color Palette

| Variable | Color |
|   --|  --|
| Primary | Firebrick (#B22222) |
| Accent | Gold (#D4AF37) |
| Background | #FFF8F5 |
| Surface | White |
| Text | #333333 |

 

# Responsive Design

The menu uses CSS Grid:

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

This automatically adjusts the number of columns based on the available screen width.

 

# CSS Concepts Demonstrated

- CSS Variables
- Flexbox
- CSS Grid
- Positioning (`relative` & `absolute`)
- Hover Effects
- Object Fit
- Sticky Navigation
- Responsive Design
- Box Shadow
- Border Radius

 

# HTML Concepts Demonstrated

- Semantic Elements
- Navigation
- Sections
- Images
- Headings
- Paragraphs
- Details/Summary
- Footer
- Embedded Google Maps

 

# Requirements

The project should meet the following requirements:

- HTML5 document with proper structure.
- Semantic HTML elements (`section`, `nav`, `footer`, etc.).
- Responsive layout using CSS Grid and Flexbox.
- Sticky navigation bar.
- Restaurant banner image.
- At least three food categories.
- Each menu card includes:
  - Food name
  - Image
  - Description
  - Ingredients
  - Price
- "Popular" badge positioned using CSS.
- Footer with About, Contact, and Location.
- Embedded Google Map.
- Images include descriptive `alt` text.
- Consistent color theme using CSS variables.
- Hover effect on menu cards.

 

# Self-Check List

## HTML

- [ ] HTML validates without errors.
- [ ] Proper `<head>` metadata included.
- [ ] Semantic HTML elements are used.
- [ ] Images have `alt` attributes.
- [ ] Headings follow a logical order.
- [ ] No unnecessary `<div>` elements.

 

## CSS

- [ ] CSS validates without errors.
- [ ] CSS variables are used.
- [ ] Flexbox is used for navigation.
- [ ] CSS Grid is used for menu layout.
- [ ] Cards have spacing and shadows.
- [ ] Hover effects work correctly.
- [ ] Popular badge is positioned correctly.
- [ ] Footer is responsive.

 

## Responsive Design

- [ ] Layout works on desktop.
- [ ] Layout works on tablet.
- [ ] Layout works on mobile.
- [ ] Images resize correctly.
- [ ] Navigation remains usable.

 

## Accessibility

- [ ] Images include descriptive `alt` text.
- [ ] Text has good color contrast.
- [ ] Page can be navigated with a keyboard.
- [ ] Ingredients are expandable using `<details>`.
- [ ] Font sizes are readable.

 

## Final Review

- [ ] No broken image links.
- [ ] No broken CSS links.
- [ ] Google Map displays correctly.
- [ ] Navigation is visible.
- [ ] Prices are aligned consistently.
- [ ] README is included.
- [ ] Project folder is organized.
- [ ] Code is properly indented.
- [ ] No unused CSS rules.
- [ ] No HTML validation errors.

