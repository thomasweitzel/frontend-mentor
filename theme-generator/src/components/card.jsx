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
      <article
        className="relative w-[80%] max-w-[500px] rounded-lg border border-neutral-norm bg-neutral-lightest p-8 shadow-2xl text-neutral-darker">
        <div onClick={toggleTheme} className="absolute top-0 right-0 mr-8 mt-8 cursor-pointer w-6 h-6">
          <SvgImage src={icons[theme]} />
        </div>
        <h1 className="text-2xl font-bold text-primary-darker">{heading}</h1>
        <p className=" py-8">{text}</p>
        <div className={"grid grid-cols-7 gap-1"}>
          {["neutral", "primary", "ok", "warn", "error"].map((color, colorIndex) => (
            ["darkest", "darker", "dark", "norm", "light", "lighter", "lightest"].map((tone, toneIndex) => (
              <div key={`key-${colorIndex}-${toneIndex}`} className={`bg-${color}-${tone} m-0 p-0 h-12`}></div>
            ))
          ))}
        </div>
      </article>
      <div className={"bg-primary-darkest bg-primary-darker bg-primary-dark bg-primary-norm bg-primary-light bg-primary-lighter bg-primary-lightest bg-neutral-darkest bg-neutral-darker bg-neutral-dark bg-neutral-norm bg-neutral-light bg-neutral-lighter bg-neutral-lightest bg-ok-darkest bg-ok-darker bg-ok-dark bg-ok-norm bg-ok-light bg-ok-lighter bg-ok-lightest bg-warn-darkest bg-warn-darker bg-warn-dark bg-warn-norm bg-warn-light bg-warn-lighter bg-warn-lightest bg-error-darkest bg-error-darker bg-error-dark bg-error-norm bg-error-light bg-error-lighter bg-error-lightest text-primary-darkest text-primary-darker text-primary-dark text-primary-norm text-primary-light text-primary-lighter text-primary-lightest text-neutral-darkest text-neutral-darker text-neutral-dark text-neutral-norm text-neutral-light text-neutral-lighter text-neutral-lightest text-ok-darkest text-ok-darker text-ok-dark text-ok-norm text-ok-light text-ok-lighter text-ok-lightest text-warn-darkest text-warn-darker text-warn-dark text-warn-norm text-warn-light text-warn-lighter text-warn-lightest text-error-darkest text-error-darker text-error-dark text-error-norm text-error-light text-error-lighter text-error-lightest border-primary-darkest border-primary-darker border-primary-dark border-primary-norm border-primary-light border-primary-lighter border-primary-lightest border-neutral-darkest border-neutral-darker border-neutral-dark border-neutral-norm border-neutral-light border-neutral-lighter border-neutral-lightest border-ok-darkest border-ok-darker border-ok-dark border-ok-norm border-ok-light border-ok-lighter border-ok-lightest border-warn-darkest border-warn-darker border-warn-dark border-warn-norm border-warn-light border-warn-lighter border-warn-lightest border-error-darkest border-error-darker border-error-dark border-error-norm border-error-light border-error-lighter border-error-lightest hidden"}></div>
    </div>
  );
};

export default Card;
