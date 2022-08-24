// Librerias
import {Link} from 'react-router-dom';

//Css
import "../Style/Footer.css"

function Footer(){
    return(
        <> 
        <div className="Footer container">
            <div className='row'>
                <div className="imag col-auto">
                    <img src={"https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742924/Pages/Recurso1_dwk2yh.svg"} alt="Image Footer"/>
                </div>
                <div className="SectionV col-auto">
                    <h3>Secciones</h3>
                    <a href="./index.html"> Inicio </a>
                    <a href="./Servicios.html"> Area de Servicios </a>
                    <a href="./Equipo.html"> Nuestros Equipo </a>
                    <a href="./Compromiso.html"> Compromiso Social </a>
                    <a href="./Contactenos.html"> Contactenos </a>
                </div>
                <div className="Direccion col-auto">
                    <h3>Direccion:</h3>
                    <a>Carrera 10 No.16-18</a>
                    <a>Piso 5, Oficina. 501</a>
                    <a>Edificio Almartin</a>
                </div>
                <div className="info col-auto">
                    <h3>Informacion de Contacto</h3>
                    <h4>Celular:</h4>
                    <a>+57 318 794 3389</a>
                    <a>+57 315 808 4325</a>
                    <a>+57 316 849 6057</a>
                    <h4>EMAIL:</h4>
                    <a>comercial@gruposigmajudicial.com</a>
                    <div className="redes">
                        <a id="inline" href="https://www.facebook.com/gruposigmajudicial">
                        <img src={"https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742921/Pages/facebook_phh3tx.svg"}></img>
                        </a>
                        <a id="inline"  href="https://instagram.com/sigmajudicial?igshid=YmMyMTA2M2Y=">
                        <img src={"https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742923/Pages/instagram_zqz1kd.svg"}></img>
                        </a>
                        <a id="inline"  href="https://wa.me/573187943389?text=Quiero%20informacion%20sobre%20los%20servicios%20que%20prestan">
                        <img src={"https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742925/Pages/whatsapp_fjjly3.svg"}></img>
                        </a>
                    </div>
                </div>

                <div>
                    <a href="https://wa.me/573187943389?text=Quiero%20informacion%20sobre%20los%20servicios%20que%20prestan" className="whatsapp" target="_blank"> 
                    <img src={"https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742925/Pages/whatsapp_fjjly3.svg"}/>
                    </a>
                </div>       
            </div>
        </div>

        </>
    )
}
export default Footer;