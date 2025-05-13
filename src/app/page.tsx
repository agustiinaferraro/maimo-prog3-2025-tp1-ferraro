import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Homecontainer from "@/app/components/HomeContainer"



export default function Home() { //TODOS LOS COMPONENTES DE REACT EMPIEZAN EN MAYUSCULA
  return (//ACA SOLO HAY JSX
    <div>
      <Navbar />
      <Homecontainer />
      <Footer />

    </div>
  );
}
