import Image from 'next/image'

const RecipeCard = ({name, image}) => {
  return (
    <div className="recipes_card">
        <Image 
        src={image}
        width={500}
        height={150}
        alt={name} />
    <h3>{name}</h3>
    </div>
  )
}

export default RecipeCard