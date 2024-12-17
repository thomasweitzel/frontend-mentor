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
        className="relative w-[80%] max-w-[500px] rounded-lg border border-neutral-500 bg-neutral-900 p-8 shadow-2xl text-neutral-300">
        <div onClick={toggleTheme} className="absolute top-0 right-0 mr-8 mt-8 cursor-pointer w-6 h-6">
          <SvgImage src={icons[theme]} />
        </div>
        <h1 className="text-2xl font-bold text-primary-400">{heading}</h1>
        <p className=" py-8">{text}</p>
        <div className={"grid grid-cols-11 gap-[2px]"}>
          {["neutral", "primary", "ok", "warn", "fail"].map((color, colorIndex) => (
            ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"].map((tone, toneIndex) => (
              <div key={`key-${colorIndex}-${toneIndex}`} className={`bg-${color}-${tone} m-0 p-0 h-8`}></div>
            ))
          ))}
        </div>
      </article>
      {/* Tailwind CSS 4.0 Beta has no safelist yet */}
      <div className={"hidden bg-neutral-50 bg-neutral-100 bg-neutral-200 bg-neutral-300 bg-neutral-400 bg-neutral-500 bg-neutral-600 bg-neutral-700 bg-neutral-800 bg-neutral-900 bg-neutral-950 bg-primary-50 bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400 bg-primary-500 bg-primary-600 bg-primary-700 bg-primary-800 bg-primary-900 bg-primary-950 bg-ok-50 bg-ok-100 bg-ok-200 bg-ok-300 bg-ok-400 bg-ok-500 bg-ok-600 bg-ok-700 bg-ok-800 bg-ok-900 bg-ok-950 bg-warn-50 bg-warn-100 bg-warn-200 bg-warn-300 bg-warn-400 bg-warn-500 bg-warn-600 bg-warn-700 bg-warn-800 bg-warn-900 bg-warn-950 bg-fail-50 bg-fail-100 bg-fail-200 bg-fail-300 bg-fail-400 bg-fail-500 bg-fail-600 bg-fail-700 bg-fail-800 bg-fail-900 bg-fail-950 text-neutral-50 text-neutral-100 text-neutral-200 text-neutral-300 text-neutral-400 text-neutral-500 text-neutral-600 text-neutral-700 text-neutral-800 text-neutral-900 text-neutral-950 text-primary-50 text-primary-100 text-primary-200 text-primary-300 text-primary-400 text-primary-500 text-primary-600 text-primary-700 text-primary-800 text-primary-900 text-primary-950 text-ok-50 text-ok-100 text-ok-200 text-ok-300 text-ok-400 text-ok-500 text-ok-600 text-ok-700 text-ok-800 text-ok-900 text-ok-950 text-warn-50 text-warn-100 text-warn-200 text-warn-300 text-warn-400 text-warn-500 text-warn-600 text-warn-700 text-warn-800 text-warn-900 text-warn-950 text-fail-50 text-fail-100 text-fail-200 text-fail-300 text-fail-400 text-fail-500 text-fail-600 text-fail-700 text-fail-800 text-fail-900 text-fail-950 border-neutral-50 border-neutral-100 border-neutral-200 border-neutral-300 border-neutral-400 border-neutral-500 border-neutral-600 border-neutral-700 border-neutral-800 border-neutral-900 border-neutral-950 border-primary-50 border-primary-100 border-primary-200 border-primary-300 border-primary-400 border-primary-500 border-primary-600 border-primary-700 border-primary-800 border-primary-900 border-primary-950 border-ok-50 border-ok-100 border-ok-200 border-ok-300 border-ok-400 border-ok-500 border-ok-600 border-ok-700 border-ok-800 border-ok-900 border-ok-950 border-warn-50 border-warn-100 border-warn-200 border-warn-300 border-warn-400 border-warn-500 border-warn-600 border-warn-700 border-warn-800 border-warn-900 border-warn-950 border-fail-50 border-fail-100 border-fail-200 border-fail-300 border-fail-400 border-fail-500 border-fail-600 border-fail-700 border-fail-800 border-fail-900 border-fail-950"}></div>
    </div>
  );
};

export default Card;
