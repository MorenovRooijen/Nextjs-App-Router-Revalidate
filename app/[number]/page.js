const Page = async ({ params }) => {
  const { number } = params || {};
  const response = await fetch(
    `http://numbersapi.com/${number}/trivia?fragment`,
    {
      next: { tags: ["number", "page", "number_"+number] },
    }
  );
  const cat_response = await fetch(`https://meowfacts.herokuapp.com/`, {
    next: { tags: ["cat", "page"] },
  });
  const time_response = await fetch(
    `http://worldtimeapi.org/api/timezone/Europe/Amsterdam`,
    { next: { tags: ["tijd", "page"] } }
  );
  const trivia = await response.text();
  const cat_trivia = await cat_response.json();
  const time = await time_response.json();
  const date = Date.now();
  return (
    <div className="flex flex-col max-w-sm gap-4 p-4 mx-auto">
      <h1>{number}</h1>
      <h4>Wil je een leuk feitje weten?</h4>
      <p>{trivia}</p>
      <h4>Random cat trivia</h4>
      <p>{cat_trivia?.data?.[0]}</p>
      <h4>De huidige tijd in amsterdam</h4>
      <p>Deze pagina is gerenderd op: {time?.datetime}</p>
      <h4>Berekende tijd</h4>
      <p>{date}</p>
    </div>
  );
};

export default Page;
