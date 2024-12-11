# Dark Theme Toggle with Tailwind

Version 4 simplifies dark mode implementation in React, leveraging modern theming and automatic opacity handling for
colors. I use local storage to persist user preferences across sessions

The ability to toggle between light and dark themes is a key feature in modern web applications.
With [Tailwind CSS](https://tailwindcss.com/) 4.0, implementing this functionality has become significantly easier
compared to earlier versions like 3.4. The latest version simplifies theming, eliminates the need for manual opacity
handling, and integrates seamlessly with React.

In this blog post, I’ll build a dark theme toggle in a React application using Tailwind CSS 4.0, explain why local
storage is essential, and highlight how the current Tailwind 4.0 beta improves over 3.4.

Here is how it should look like in both modes:

![Collage of Images of Page in Light and Dark Mode](assets/images/example.webp)

## What’s New in Tailwind CSS 4.0?

Tailwind CSS 4.0 introduces significant improvements to theming:

- `@theme` Directive: You can now declare your theme variables directly in the CSS file, removing the need for
  extensive `tailwind.config.js` setup.
- Automatic Opacity Handling: Opacity is automatically integrated into colors, so you don’t need to manually manage
  `rgb` or `rgba` conversions as in earlier versions.
- Better Integration with Modern Frontend Tools: Tailwind 4.0 works more naturally with frameworks like React,
  allowing dynamic updates like theme toggling with minimal configuration.

Here’s how we take advantage of these features to implement our theme toggle.

## Setting Up the Theme in Tailwind CSS 4.0

In our project, we define theme variables directly in `src/App.css` using the `@theme` directive. This eliminates the
need for extending Tailwind's configuration in a separate file. I just chose the colors randomly because they only serve
as examples.

### src/App.css

```css
@import "tailwindcss";

@theme {
    --color-*: initial;
    /* Default theme light */
    --color-border:                 oklch(40% 0.00  90.0);
    --color-background:             oklch(90% 0.05 200.0);
    --color-article-background:     oklch(90% 0.10  25.0);
    --color-heading:                oklch(30% 0.15  25.0);
    --color-text:                   oklch(30% 0.00  90.0);
}

@layer base {
    [data-theme="dark"] {
        --color-border:             oklch(50% 0.00  90.0);
        --color-background:         oklch(15% 0.00  90.0);
        --color-article-background: oklch(20% 0.00  90.0);
        --color-heading:            oklch(90% 0.00  90.0);
        --color-text:               oklch(80% 0.00  90.0);
    }
}

body {
    background-color: var(--color-background);
}
```

The plan here is to set the `data-theme` attribute of the `<html>` element to `dark` when the dark mode is selected. If
the `light` mode is used, the attribute is simply removed. Since we have two sets of colors in the CSS file, the default
set is selected when the attribute is absent or has another value than `dark`. If the attribute has the value `dark`,
then the alternative color set is used:

- Light Theme: Default values for colors are defined in the `@theme` block.
- Dark Theme: Dynamically overrides the light theme when the `data-theme="dark"` attribute is present on the
  `<html>` element.

This approach is declarative and keeps theme-related styling in one place. We can now use the colors `border`,
`background`, `article-background`, `heading`, or `text` with any of the color prefixes, like `bg-`, `text-`, or
`border-`. Opacity is also built-in, we can use it like that: `text-heading/50`.

## Implementing the Theme Toggle in React

The `src/component/card.jsx` file handles the dynamic toggling of the dark theme. Here’s a breakdown of how it works:

### src/component/card.jsx

```jsx
import React, { useEffect, useState } from "react";

const APPLICATION_NAME = "color-theme-concept";

// Inline SVG so we can take advantage of currentColor (text-color)
const SvgImage = ({ src }) => {
  const svg = atob(src.split(",")[1]);
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

const Card = ({ card }) => {
  const { darkIcon, lightIcon, heading, text } = card;
  const [mode, setMode] = useState({ toggle: true, state: "light", icons: { dark: lightIcon, light: darkIcon } });
  const setThemeFunction = (theme) => (prevMode) => ({ ...prevMode, state: theme })

  // Set initial theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem(APPLICATION_NAME);
    switch (savedTheme) {
      case "dark":
        setMode(setThemeFunction(savedTheme));
        document.documentElement.setAttribute("data-theme", savedTheme);
        break;
      default:
        document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  // Toggle between light and dark mode
  const clickHandler = () => {
    const { toggle, state } = mode;
    const htmlElement = document.documentElement;
    if (toggle) {
      switch (state) {
        case "light":
          const darkMode = "dark";
          setMode(setThemeFunction(darkMode));
          htmlElement.setAttribute("data-theme", darkMode);
          localStorage.setItem(APPLICATION_NAME, darkMode);
          break;
        case "dark":
          const lightMode = "light";
          setMode(setThemeFunction(lightMode));
          htmlElement.removeAttribute("data-theme");
          localStorage.removeItem(APPLICATION_NAME);
          break;
      }
    }
  };

  return (
    <div className={"flex min-h-screen min-w-full flex-col items-center justify-center"}>
      <article className={"relative w-[80%] max-w-[500px] rounded-lg border border-border bg-article-background p-8 shadow-2xl text-text"}>
        <div onClick={clickHandler} className={"absolute mr-8 mt-8 top-0 right-0 text-text/90 cursor-pointer w-6 h-6"}>
          <SvgImage src={mode.icons[mode.state]} />
        </div>
        <h1 className={"text-2xl font-bold text-heading"}>{heading}</h1>
        <p className={"py-8 text-text/90"}>{text}</p>
      </article>
    </div>
  );
};

export default Card;
```

## Initialize Theme Based on Local Storage  

When the component mounts, it checks `localStorage` for a saved theme:
   
```jsx
const savedTheme = localStorage.getItem(APPLICATION_NAME);
switch (savedTheme) {
  case "dark":
    setMode(setThemeFunction(savedTheme));
    document.documentElement.setAttribute("data-theme", savedTheme);
    break;
  default:
    document.documentElement.removeAttribute("data-theme");
}
```

If no theme is saved, the light theme is used as the default.

## Toggle Theme Dynamically  

The `clickHandler` function toggles between light and dark themes:

```jsx
switch (state) {
  case "light":
    const darkMode = "dark";
    setMode(setThemeFunction(darkMode));
    htmlElement.setAttribute("data-theme", darkMode);
    localStorage.setItem(APPLICATION_NAME, darkMode);
    break;
  case "dark":
    const lightMode = "light";
    setMode(setThemeFunction(lightMode));
    htmlElement.removeAttribute("data-theme");
    localStorage.removeItem(APPLICATION_NAME);
    break;
}
```

- The `data-theme` attribute is added or removed from the `<html>` element.
- `localStorage` is updated to persist the user's preference.

## Tailwind CSS 4.0 vs. previous versions

### Simpler Theming with @theme

In Tailwind 3.4, you needed to extend `tailwind.config.js` with `extend` blocks to define custom properties and manually
manage theme variables. This separated theme logic from styles, making it harder to maintain.

Themes are defined directly in CSS in Tailwind 4.0, using the `@theme` directive. This keeps everything centralized and
declarative.

### Automatic Opacity Handling

In Tailwind 3.4, you had to manually handle opacity with `rgb(var(--color-variable) / <alpha-value>)`. This required
additional configuration for custom colors.

Opacity is automatically integrated into colors in Tailwind 4.0. For example, `text-heading/50` adjusts the text
color's opacity to 50% without requiring extra setup.

### Seamless Integration with React

Tailwind 4.0's improved theming and opacity handling simplifies React integration.
Dynamic updates, like toggling `data-theme`, feel natural and require minimal configuration.

Dark theme toggling in React applications with Tailwind CSS 4.0 is straightforward. With the `@theme` directive,
automatic opacity handling, and declarative CSS, it removes the boilerplate required in 3.4. By combining these features
with local storage, our implementation ensures a consistent and personalized user experience across sessions.

Tailwind CSS 4.0 is a clear step forward for developers, offering simplicity, flexibility, and modern tools to build
awesome, accessible web applications. If you’re still on an older version, it’s time to upgrade and experience the
difference! As of the date I'm writing this post, Tailwind CSS 4.0 is still in beta, but it already looks good and will
eventually become stable.

While I have used only two color sets for two different color themes here, you can extend this approach to support as
many themes as you like. Once the work of defining custom colors and using them is completed, there is no need to change
any of the Tailwind utility classes used in the React components anymore.
