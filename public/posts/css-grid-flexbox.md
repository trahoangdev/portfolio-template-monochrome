---
title: Mastering CSS Grid and Flexbox
date: "2025-11-28"
description: A comprehensive guide to modern CSS layout techniques and when to use which.
---

# Mastering CSS Grid and Flexbox

Gone are the days of `float: left` and `clearfix` hacks. Modern CSS gives us two powerful layout systems: **Flexbox** and **Grid**. But knowing when to use which is key.

## Flexbox: 1-Dimensional Layouts

Flexbox is perfect for laying out items in a single row or column. I use it for:

- Navigation bars
- Centering elements (`justify-content: center; align-items: center;`)
- Stacking form inputs

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

## CSS Grid: 2-Dimensional Layouts

Grid shines when you need to control both rows and columns simultaneously. It's ideal for:

- Photo galleries
- Full page layouts (Header, Sidebar, Main, Footer)
- Complex card grids

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

## The "Holy Grail" Layout

Combining both is where the magic happens. Use Grid for the macro layout of the page, and Flexbox for the alignment of content inside those grid cells.

## Conclusion

Don't think of it as "Grid vs Flexbox". It's **Grid AND Flexbox**. Mastering both gives you complete control over the web canvas.
