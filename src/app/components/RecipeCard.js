import Image from 'next/image'
import Link from 'next/link'

const RecipeCard = ({id, name, image}) => {
  return (
    
  <Link href={`/recipe/${id}`}>
    <div className="recipes_card">
        <Image 
        src={image}
        width={500}
        height={150}
        alt={name} />
    <h3>{name}</h3>
    </div>
    </Link>
  )
}

export default RecipeCard