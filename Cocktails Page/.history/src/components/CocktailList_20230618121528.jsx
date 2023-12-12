const CocktailList = ({drinks}) => {
    if (!drinks) {
        return (
            <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
        );
    }

    const formattedDrinks = drinks.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
    });

  return (
    <div>
      Screw you
    </div>
  )
}

export default CocktailList