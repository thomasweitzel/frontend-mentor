const Card = ({ info }) => {
  const { name, avatar, city, country, about, links } = info;

  return (
    <article className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-800 text-center sm:w-[326px] sm:pb-6 md:w-[384] md:pb-10"} aria-labelledby={"user-name"}>
      <div className="flex flex-col items-center sm:pt-6 md:pt-10">
        <img src={avatar} alt={name} className="h-[88px] w-[88px] flex-none rounded-full" />
      </div>
      <h1 className="text-[22px] font-bold sm:mt-6 md:mt-8">{name}</h1>
      <h2 className="text-[14px] font-bold text-green-social sm:mt-1 md:mt-2">
        {city}, {country}
      </h2>
      <h3 className="sm:mb-6 sm:mt-6 md:mb-8 md:mt-8">"{about}"</h3>
      <div className="flex flex-col items-center space-y-4 sm:px-6 md:px-10">
        {links.map((link, index) => (
          <a key={index} href={link.url} target={"_blank"} className="w-full rounded-lg bg-gray-700 px-10 py-3 text-[15px] font-bold hover:bg-green-social hover:text-gray-800">
            {link.name}
          </a>
        ))}
      </div>
    </article>
  );
};

export default Card;
