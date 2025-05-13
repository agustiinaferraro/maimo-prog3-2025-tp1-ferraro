import Navbar from "@/src/app/components/Navbar"
import Footer from "@/src/app/components/Footer"
import Homecontainer from "@/src/app/components/HomeContainer"



export default function Home() { //TODOS LOS COMPONENTES DE REACT EMPIEZAN EN MAYUSCULA
  return (//ACA SOLO HAY JSX
    <div>
      <Navbar />
      <Homecontainer />
      <Footer />
    </div>
  );
}
