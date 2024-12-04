import React, { Fragment, useEffect, useState } from "react";

const ShareIcon = () => {
  return (
    <div className="flex-auto p-3 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
      </svg>
    </div>
  );
};

const Author = ({ onClick, product, clazz }) => {
  const { author } = product;
  const { image, name, date } = author;

  return (
    <div className={"group flex h-[8em] items-center space-x-4 bg-white px-10"}>
      <img src={image} alt={`Profile picture of ${name}`} className="h-10 w-10 flex-none rounded-full" />
      <div className="flex-auto">
        <p>{name}</p>
        <p className={`text-[11px] opacity-50`}>{date}</p>
      </div>
      <div className={`rounded-full ${clazz}`} onClick={onClick}>
        <ShareIcon />
      </div>
    </div>
  );
};

const DesktopShare = ({ onClick, product }) => {
  const { socialIcons } = product;

  // State to track media query match
  const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 800px)").matches);

  useEffect(() => {
    const mdQuery = window.matchMedia("(min-width: 800px)");

    const handleMediaChange = (event) => {
      setIsDesktop(event.matches);
    };

    mdQuery.addEventListener("change", handleMediaChange);
    return () => {
      mdQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  if (isDesktop) {
    return (
      <Fragment>
        <div className="share relative text-white">
          <div className="absolute right-[3em] top-[-2em] flex flex-row items-center rounded-lg bg-very-dark-grayish-blue px-8 py-4 shadow-extra-large">
            <span className="mr-4 flex-none align-middle tracking-[0.4em] text-grayish-blue">SHARE</span>
            {socialIcons.map((icon, index) => {
              return (
                <div key={index} className="ml-4 flex-none">
                  <img src={icon.icon} alt={`Icon for ${icon.name}`} />
                </div>
              );
            })}
          </div>
        </div>
        <Author onClick={onClick} product={product} clazz={"bg-desaturated-dark-blue text-white"} />
      </Fragment>
    );
  }

  return (
    <div className={"group flex h-[8em] items-center bg-very-dark-grayish-blue px-10 text-white"}>
      <span className={"flex-none align-middle tracking-[0.4em] text-grayish-blue"}>SHARE</span>
      {socialIcons.map((icon, index) => {
        return (
          <div key={index} className={"ml-4 flex-none"}>
            <img src={icon.icon} alt={`Icon for ${icon.name}`} />
          </div>
        );
      })}
      <div className={"ml-auto flex-none rounded-full bg-desaturated-dark-blue text-white"} onClick={onClick}>
        <ShareIcon />
      </div>
    </div>
  );
};

const Product = ({ product }) => {
  const [showAuthor, setShowAuthor] = useState(true);

  // Handlers to toggle the state
  const handleAuthorClick = () => setShowAuthor(false);
  const handleDesktopShareClick = () => setShowAuthor(true);

  const { productImage, title, text } = product;

  return (
    <div className={"flex min-h-screen min-w-full flex-col items-center justify-center"}>
      <article className={"w-mobile overflow-hidden rounded-lg shadow-extra-large md:w-desktop"} aria-labelledby={"title"}>
        <div className={"grid grid-cols-1 gap-0 md:grid-cols-[40%_auto]"}>
          <img className={"m-0 h-[200px] w-full object-cover object-left p-0 md:h-full"} src={productImage} alt={title} />
          <div>
            <section className={"space-y-5 bg-white px-10 pb-6 pt-10"} aria-describedby={"product-info"}>
              <h1 className={"text-[16px] font-bold md:text-[22px]"} id={"title"}>
                {title}
              </h1>
              <h2 className={"text-[14px] opacity-50"} id={"product-info"}>
                {text}
              </h2>
            </section>
            <section aria-live={"polite"}>
              {showAuthor ? <Author onClick={handleAuthorClick} product={product} clazz={"bg-light-grayish-blue text-desaturated-dark-blue"} /> : <DesktopShare onClick={handleDesktopShareClick} product={product} />}
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Product;
