import Image from 'next/image'
const Navbar = () => {

    return (//lo que tiene adentro el return es el jsx

        <header>
                <div className="logo_container">
                    <Image src="/assets/logo.png" alt="Logo" width={80} height={50}/>
                </div>
                <nav>
                    <ul className="navHeader">
                        <li className="lista"> <a href="/">Home</a></li>
                        <li className="lista"> <a href="/">Categorias</a></li>
                        <li className="lista"> <a href="">About</a></li>
                    </ul>
                </nav>
            </header>

    );
};

export default Navbar