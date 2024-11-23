const Card = ({ info }) => {
  const { title, text, image, imageAlt } = info;

  return (
    <article className={"absolute left-1/2 top-1/2 h-[500px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-white shadow-lg"} aria-labelledby={"card-title"}>
      <div className={"m-4 h-[288px] w-[288px]"}>
        <img className={"rounded-lg object-cover"} src={image} alt={imageAlt} />
      </div>
      <h1 className={"px-8 py-2 text-center text-[22px] font-bold leading-tight text-gray-900"} id={"card-title"}>
        {title}
      </h1>
      <p className={"px-8 py-2 text-center text-[15px] leading-snug text-gray-500"}>{text}</p>
    </article>
  );
};

export default Card;
