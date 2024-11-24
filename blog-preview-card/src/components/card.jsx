import { format } from "date-fns";

const Card = ({ info }) => {
  const { category, published, title, text, image, imageAlt, avatar, name } = info;
  const publishedDate = format(published, "dd MMM yyyy");

  return (
    <article className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-black bg-white shadow-[9px_9px_0px_black] sm:w-[326px] md:w-[380]"} aria-labelledby={"card-title"}>
      <div className={"m-[22] sm:w-[282px] md:w-[336]"}>
        <img className={"rounded-lg object-cover"} src={image} alt={imageAlt} />
      </div>
      <div className={"justify-left flex px-[22px] pt-1"}>
        <p className="inline-block rounded bg-[#f5d04e] px-3 py-1 text-left font-bold text-gray-900 sm:text-[14px] md:text-[16px]">{category}</p>
      </div>
      <p className={"px-[22px] pt-3 text-left text-gray-900 sm:text-[12px] md:text-[14px]"}>Published {publishedDate}</p>
      <h1 className={"cursor-pointer px-[22px] pt-3 text-left font-bold text-gray-900 hover:text-[#f5d04e] sm:text-[20px] md:text-[24px]"} id={"card-title"}>
        {title}
      </h1>
      <p className={"px-[22px] pt-2 text-left text-gray-500 sm:text-[14px] md:text-[16px]"}>{text}</p>
      <div className="group flex items-center space-x-4 rounded-xl px-[22px] pb-6 pt-6">
        <img src={avatar} alt={name} className="h-[32px] w-[32px] flex-none rounded-full" />
        <div className="flex-auto">
          <p className="font-bold text-gray-900">{name}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
