import Image from 'next/image'

const RecipeCard = () => {
  return (
    <div className="recipes_card">
        <Image 
        src="/assets/comida.jpg"
        width={500}
        height={150}
        alt="comida"
        />
    <h3>Frutas con panqueques</h3>
    </div>
  )
}

export default RecipeCard