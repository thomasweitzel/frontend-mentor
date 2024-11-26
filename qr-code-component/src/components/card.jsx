const Card = ({ info }) => {
  const { title, text, image, imageAlt } = info;

  return (
    <div className={"flex items-center justify-center h-screen"}>
      <article className={"h-card w-card rounded-2xl border bg-white shadow-lg"} aria-labelledby={"card-title"}>
        <div className={"m-4 h-image w-image"}>
          <img className={"rounded-lg object-cover"} src={image} alt={imageAlt} />
        </div>
        <h1 className={"px-8 py-2 text-center text-card-big font-bold leading-tight text-gray-900"} id={"card-title"}>
          {title}
        </h1>
        <p className={"px-8 py-2 text-center text-card-small leading-snug text-gray-500"}>{text}</p>
      </article>
    </div>
  );
};

export default Card;
