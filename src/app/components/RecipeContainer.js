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
    );//en el get entre comillas va el link a las recetas
    setRecipe(response.data);  // Guarda la receta completa en recipes
    setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  };

  fetchRecipe ()

  }, [id])


      if (loading) return <Loading />;
    if (error) return <div>Hubo un error</div>;
    if (!recipe) return <div>No se encontró la receta</div>


  return (
  

      <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} width={300} />
        {
      
      <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li> //index es la posicion del ingrediente
      ))}
    </ul>

      
      }
      </div>
  )
}

export default RecipeContainer