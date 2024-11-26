const Card = ({ recipe }) => {
  const { image, title, summary, times, ingredients, instructions, nutrition } = recipe;

  return (
    <article className={"absolute left-1/2 -translate-x-1/2 sm:w-[375px] md:my-10 md:w-[736]"} aria-labelledby={"title"}>
      <img className={"m-0 object-cover p-0 sm:block md:hidden md:rounded-lg"} src={image} alt={title} />
      <div className={"bg-white text-left text-stone-900 sm:p-8 md:rounded-2xl md:p-10"}>
        <img className={"object-cover sm:hidden md:block md:rounded-lg"} src={image} alt={title} />
        <h1 className={"font-young text-4xl sm:mt-4 md:mt-10"} id={"title"}>
          {title}
        </h1>
        <p className={"pt-6"}>{summary}</p>
        <section className={"mt-8 rounded-lg bg-rose-50 p-8"}>
          <p className={"text-[20px] font-bold text-rose-800"}>{"Preparation time"}</p>
          <ul className={"mt-2 leading-8"}>
            {times.map((time, index) => (
              <li key={index} className={"relative pl-10 pt-2 leading-normal before:absolute before:left-2 before:text-xl before:text-rose-800 before:content-['•']"}>
                <span className={"font-bold"}>{time.type}</span>: {time.text}
              </li>
            ))}
          </ul>
        </section>
        <section className={"my-8"}>
          <h2 className={"font-young text-3xl text-brown-800"}>{"Ingredients"}</h2>
          <ul className={"mt-4 leading-8"}>
            {ingredients.map((ingredient, index) => (
              <li key={index} className={"flex items-start gap-2 pt-2 leading-normal"}>
                <span className="pl-2 text-xl text-rose-800">•</span>
                <span className={"pl-4"}>{ingredient.text}</span>
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <section className={"my-8"}>
          <h2 className={"font-young text-3xl text-brown-800"}>{"Instructions"}</h2>
          <ol className={"mt-4"}>
            {instructions.map((instruction, index) => (
              <li key={index} className={"relative pl-10 pt-2 leading-normal"}>
                <span className="absolute left-2 font-bold text-rose-800">{instruction.no}.</span>
                <span className="font-bold">{instruction.type}</span>: {instruction.text}
              </li>
            ))}
          </ol>
        </section>
        <hr />
        <section className={"mt-8"}>
          <h2 className={"font-young text-3xl text-brown-800"}>{"Nutrition"}</h2>
          <p className={"mt-4"}>{"The table below shows nutritional values per serving without the additional fillings."}</p>
          <table className={"mt-4 w-full leading-8"}>
            <tbody>
              {nutrition.map((item, index) => (
                <tr key={index} className={index !== nutrition.length - 1 ? "border-b border-gray-300" : ""}>
                  <td className={"w-1/2 py-2 pl-8"}>{item.topic}</td>
                  <td className={"font-bold text-rose-800"}>{item.units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </article>
  );
};

export default Card;
