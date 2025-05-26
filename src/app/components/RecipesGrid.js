'use client'

import { useState, useEffect } from "react"; //son hooks de react
//el usestate es una forma de almacenar informacion que tiene el componennte, y cuando yo la grabo en una funcion, 
// al momento de grabar esa info en una variable, el metodo return de abajo se va a vovler a ejecutar solo, 
// entonces, con el estado que tenga en ese momento se va a volver a ejecutar y se van a ver los cambios que guardamos esa variable. 
// oSEA, SE ACTULIZA SOLO ESE COMPONENTE, NO TODA LA PAGINA.
//el use effect: cuando el componente se carga ren la pantalla, el useffect se va a ejecutar automaticamente, 
// entonces cuando se carga, el resultado de esa data se guarda en el state, ahi pasa todo. 
// Es una especie de variable  que al guardarle data se vuelve a ejecutar el metodo return.
import RecipeCard from "@/src/app/components/RecipeCard";
import parsedData from "@/src/data/recipes"; //despues borrar
import axios from 'axios'

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
  //en este espacio, entre el componente y el return, va solo javascript (puedo implementatr html con ``)
  const [data, setData] = useState([]) //en los corchetes siempre va una variable y un metodo que grabe el state. 
                                      // Si la variable se llama data, el metodo que guarda la data es set+lavariablequeguardaladata
//en los parentesis se pone el valor inicial que va a tener la variable, es dinde voya  inicializar la variable
const [error, setError] = useState(false);
const [loading, setLoading] = useState(true);


useEffect(()=>{
  const getData = async () => {
    setLoading(true)
    try {
    const response = await axios.get(
      'https://dummyjson.com/recipes'
    );//en el get entre comillas va el link a las recetas
    const responseData = response.data.recipes
    setData(responseData)//lo que le pase va a gauardarlo en la const data
    setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  };

  getData()
}, [])


  return (
    <div className="recipes_grid">
      {/* 
      { !loading
        ? 
         data.map((recipe) => {
            // return de la card
            return (
              <RecipeCard 
                key={recipe.id} 
                name={recipe.name} 
                image={recipe.image} 
                id={recipe.id}
              />
            )
          })
         : "loading..." // si está cargando, muestra esto
      }
      */}

      {loading 
        ? "loading..." // si está cargando, muestra esto
        : data.map((recipe) => {
            // return de la card
            return (
              <RecipeCard 
                key={recipe.id} 
                name={recipe.name} 
                image={recipe.image} 
                id={recipe.id}
              />
            )
        })}

        {loading && "loading..."}
      {error && "hubo un error"}
    </div>
  );
};


export default RecipesGrid;
