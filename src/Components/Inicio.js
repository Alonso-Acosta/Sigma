//CSS
import "../Style/App.css"
import "../Style/cards.css"

function Inicio(){
    return(
        <>
            <div >
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    </div>
                    <div className="carousel-inner carousell">
                        <div className="carousel-item active">
                            <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742923/Pages/FotoPrincipal_fwlkz9.jpg" className="d-block imgg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742922/Pages/Foto1_p59yct.jpg" className="d-block imgg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742922/Pages/Foto2_zawexy.jpg" className="d-block imgg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742922/Pages/Foto3_ukoivt.jpg" className="d-block imgg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742923/Pages/Foto4_qhyrir.jpg" className="d-block imgg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742923/Pages/Foto5_z4gwde.jpg" className="d-block imgg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742923/Pages/Foto6_qt9fdq.jpg" className="d-block imgg" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div>
                <h2> POR QUE TRABAJAR CON NOSOTROS</h2>
                <div className="fila">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742924/Pages/Tar1_y2vlig.png" alt=""/>
                        <a>Contamos con más de 20 años de experiencia</a>
                    </div>
                    <div className="card">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742923/Pages/Tar2_jzkhvp.png" alt=""/>
                        <a>Tenemos abogados especializados en las distintas áreas de derecho</a>
                    </div>
                    <div className="card">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742924/Pages/Tar3_a8np2z.png" alt=""/>
                        <a>Equipo interdisciplinario de trabajo</a>
                    </div>
                </div>
                <div className="fila">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742924/Pages/Tar4_fylutr.png" alt=""/>
                        <a>Contamos con más de 20 años de experiencia</a>
                    </div>
                    <div className="card">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742925/Pages/Tar5_nmdrcu.png" alt=""/>
                        <a>Tenemos abogados especializados en las distintas áreas de derecho</a>
                    </div>
                    <div className="card">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742925/Pages/Tar6_tuxowc.png" alt=""/>
                        <a>Facilidad en la comunicación
                            gracias al uso de las TIC.</a>
                    </div>
                </div>
            </div>


            <div>
                <h2>Ubicacion</h2>
                <div>
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1823.4360804713122!2d-74.07535173106109!3d4.604414901303987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa40cbc67f3b0be87!2sGRUPO%20SIGMA%20JUDICIAL!5e0!3m2!1ses!2sco!4v1652281207073!5m2!1ses!2sco" ></iframe>
                </div>
            </div>
        </>
    )
}

export default Inicio;