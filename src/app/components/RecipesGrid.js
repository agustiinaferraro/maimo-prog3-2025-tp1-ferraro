import RecipeCard from "@/src/app/components/RecipeCard";
import parsedData from "@/src/data/recipes";


/*const RecipesGrid = () => {
    
  return (
    <div className="recipes_grid">

    {parsedData.recipes.map((recipe) => {
    
    <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} />
    })}

    </div>
  )
}*/

const RecipesGrid = () => {
  return (
    <div className="recipes_grid">
      {parsedData.recipes.map((recipe) => {
        // return de la card
        return <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} />;
      })}
    </div>
  );
};


export default RecipesGrid