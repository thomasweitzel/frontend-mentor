const Testimonial = ({ testimonial, index }) => {
  const { image, name, title, description, text, textColor, color, clazz } = testimonial;

  return (
    <article className={`overflow-hidden rounded-lg text-left shadow-extra-large ${clazz}`} aria-labelledby={`description-${index}`}>
      <section className={`flex h-full flex-col justify-evenly gap-3 p-7 bg-${color} text-${textColor} ${index === 0 ? "testimonial-bg" : ""}`}>
        <div className={"group flex items-center space-x-4 rounded-xl"}>
          <img src={image} alt={`Profile picture of ${name}`} className="h-8 w-8 flex-none rounded-full" />
          <div className="flex-auto">
            <p>{name}</p>
            <p className={`text-[11px] text-${textColor} opacity-50`}>{title}</p>
          </div>
        </div>
        <h1 id={`description-${index}`} className={"text-[19px] font-bold leading-tight"}>
          {description}
        </h1>
        <h2 className={`text-${textColor} leading-normal opacity-70`}>“&nbsp;{text}&nbsp;”</h2>
      </section>
    </article>
  );
};

const Testimonials = ({ testimonials }) => {
  return (
    <div className={"grid min-h-screen flex-col items-center justify-center"}>
      <section className={"mobile-grid sm:small-grid md:desktop-grid grid grid-cols-1 gap-6 px-8 py-8 sm:grid-cols-2 md:max-w-[1122px] md:grid-cols-4"}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} index={index} testimonial={testimonial} />
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
