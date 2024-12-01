const getColumnLayout = (cards, columnConfig) => {
  const layout = [];
  let startIndex = 0;

  for (const count of columnConfig) {
    layout.push(cards.slice(startIndex, startIndex + count));
    startIndex += count;
  }

  return layout;
};

const Card = ({ card, index }) => {
  const { title, text, image, color } = card;

  return (
    <article className={"my-8 overflow-hidden rounded-xl text-left shadow-extra-large sm:my-2 sm:max-w-[350px]"} aria-labelledby={`card-title-${index}`}>
      <div className={`left-0 h-1 bg-${color}`}></div>
      <section className={"p-8"}>
        <h2 id={`card-title-${index}`} className={"text-xl font-bold"}>
          {title}
        </h2>
        <h3 className={"pt-2 text-[14px] text-grayish-blue"}>{text}</h3>
        <div className={"flex justify-end pt-8"}>
          <img src={image} alt={`Illustration for ${title}`} />
        </div>
      </section>
    </article>
  );
};

const Feature = ({ feature }) => {
  const { title, subtitle, text, cards } = feature;
  const columnLayout = getColumnLayout(cards, [1, 2, 1]);

  return (
    <div className={"flex min-h-screen flex-col items-center justify-center"}>
      <section className={"px-8 py-8"} aria-labelledby={"feature-title"}>
        <div className={"flex justify-evenly text-center"}>
          <div className={"max-w-[512px]"}>
            <h1 id={"feature-title"} className={"text-[23px] font-light"}>
              {title}
            </h1>
            <h2 className={"pt-2 text-2xl font-extrabold"}>{subtitle}</h2>
            <p className={"pb-8 pt-4 text-grayish-blue"}>{text}</p>
          </div>
        </div>
        <div className={"flex justify-evenly text-center sm:hidden"}>
          <div className={"max-w-[512px]"}>
            {cards.map((card, index) => (
              <Card key={index} index={`${index}`} card={card} />
            ))}
          </div>
        </div>
        <div className={"hidden sm:grid sm:grid-cols-3 sm:gap-8"}>
          {columnLayout.map((column, columnIndex) => (
            <div key={columnIndex} className={`flex flex-col justify-evenly ${columnIndex === 1 ? "gap-4" : ""}`}>
              {column.map((card, cardIndex) => (
                <Card key={cardIndex} index={`${columnIndex}-${cardIndex}`} card={card} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feature;
