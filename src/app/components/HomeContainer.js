import RecipesGrid from "@/app/components/RecipesGrid"
import Image from 'next/image'
const HomeContainer = () => {
  return (


  <main>

    <section className="hero">
        <Image src="/assets/banner.png" alt="banner" width={1550} height={250}/>
    </section>


    <div className="home_container">  
      <div>
        <h2 className="titulo-recetas">Las mejores recetas</h2>
      </div>
        <RecipesGrid />
    </div>
    </main>  
  )
}

export default HomeContainer

