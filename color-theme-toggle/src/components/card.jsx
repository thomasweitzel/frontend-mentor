import React, { useLayoutEffect, useState } from "react";

const APPLICATION_NAME = "color-theme-toggle";

// Inline SVG so we can take advantage of currentColor (text-color)
const SvgImage = ({ src }) => {
  const svgContent = atob(src.split(",")[1]);
  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

const Card = ({ card }) => {
  const lightTheme = "light";
  const darkTheme = "dark";

  const getDataTheme = (theme) => theme === darkTheme ? darkTheme : lightTheme;
  const getToggledTheme = (theme) => theme === darkTheme ? lightTheme : darkTheme;

  const initialTheme = localStorage.getItem(APPLICATION_NAME) || lightTheme;
  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", getDataTheme(theme));
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = getToggledTheme(theme);
    setTheme(newTheme);
    localStorage.setItem(APPLICATION_NAME, getDataTheme(newTheme));
  };

  const { darkIcon, lightIcon, heading, text } = card;
  const icons = { dark: lightIcon, light: darkIcon };

  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center">
      <article className="relative w-[80%] max-w-[500px] rounded-lg border border-border bg-article-background p-8 shadow-2xl text-text">
        <div onClick={toggleTheme} className="absolute top-0 right-0 mr-8 mt-8 text-text/90 cursor-pointer w-6 h-6">
          <SvgImage src={icons[theme]} />
        </div>
        <h1 className="text-2xl font-bold text-heading">{heading}</h1>
        <p className="py-8 text-text/90">{text}</p>
      </article>
    </div>
  );
};

export default Card;
