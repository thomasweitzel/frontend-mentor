import React, { useEffect, useState } from "react";

const APPLICATION_NAME = "color-theme-toggle";

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
