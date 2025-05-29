import RecipeContainer from "../../components/recipeContainer";

const Recipe = async ({ params }) => {
  const { id } = await params;
  return (
    <RecipeContainer id={id} />
  );
};

export default Recipe;
