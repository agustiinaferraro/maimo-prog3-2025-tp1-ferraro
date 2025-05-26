import RecipeContainer from "../../components/recipeContainer";

const Recipe = async ({ params }) => {
  const { id } = params;
  return (
    <RecipeContainer id={id} />
  );
};

export default Recipe;
