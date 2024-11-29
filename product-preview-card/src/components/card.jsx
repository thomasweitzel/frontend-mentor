const Card = ({ product }) => {
  const { mobileImage, desktopImage, cartImage, category, title, text, offerPrice, originalPrice, buttonText } = product;

  return (
    <div className={"flex min-h-screen min-w-full flex-col items-center justify-center"}>
      <article className={"w-mobile overflow-hidden rounded-lg md:w-desktop"} aria-labelledby={"title"}>
        <div className={"grid grid-cols-1 gap-0 md:grid-cols-2"}>
          <img className={"m-0 block object-cover p-0 md:hidden"} src={mobileImage} alt={title} />
          <img className={"m-0 hidden object-cover p-0 md:block"} src={desktopImage} alt={title} />
          <section className={"space-y-5 bg-white p-6 md:p-8"} aria-describedby={"product-info"}>
            <p className={"tracking-perfume uppercase text-dark-grayish-blue"}>{category}</p>
            <h1 className={"font-fraunces text-[30px] font-bold leading-none text-very-dark-blue md:text-[32px]"} id={"title"}>
              {title}
            </h1>
            <p className={"text-dark-grayish-blue"} id={"product-info"}>
              {text}
            </p>
            <p className="flex items-center">
              <span className={"font-fraunces text-[32px] font-bold text-dark-cyan"}>{offerPrice}</span>
              <span className={"pl-4 text-dark-grayish-blue line-through"}>{originalPrice}</span>
            </p>
            <button className={"flex w-full items-center justify-center rounded-lg bg-dark-cyan py-3 text-center font-bold text-white hover:bg-hover-cyan"} aria-label="Add item to cart">
              <span className="flex items-center gap-2">
                <img src={cartImage} alt={"Add to Cart"} aria-hidden={"true"} />
                <span>{buttonText}</span>
              </span>
            </button>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Card;
