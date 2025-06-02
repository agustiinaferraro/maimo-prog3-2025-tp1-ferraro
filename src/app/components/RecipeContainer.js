'use client'
import { useState, useEffect } from "react"; //son hooks de react
import axios from 'axios'
import Loading from "./Loading";

const RecipeContainer = ({id}) => {

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect (()=> {
    const fetchRecipe = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://dummyjson.com/recipes/${id}`
        ); //en el get entre comillas va el link a las recetas
        setRecipe(response.data);  // Guarda la receta completa en recipes
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    };

    fetchRecipe()
  }, [id])

  if (loading) return <Loading />;
  if (error) return <div>Hubo un error</div>;
  if (!recipe) return <div>No se encontró la receta</div>

  return (
    <div className="recipeContainer">

      <div className="grilla">
        <div className="imgContainer">
          <h2>{recipe.name}</h2>
          <img className="img" src={recipe.image} alt={recipe.name} width={300} />
          {/* imagen de la receta */}
        </div>

        <div className="ingredients">
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient} {/* index es la posición del ingrediente */} </li> 
            ))}
          </ul>
          {/* lista de ingredientes */}
        </div>
      </div>

      <ul className="instructions">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction} {/* index es la posición de la instrccion */}</li> 
        ))}
      </ul>

    </div>
  )
}

export default RecipeContainer
