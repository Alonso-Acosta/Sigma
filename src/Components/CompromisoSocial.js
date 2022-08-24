import "../Style/carousell.css"

function CompromisoSocial(){
    return(
        <>
            <h2>Compromiso Social</h2>
        <div className="Compromisoo">
            <a>Nuestra empresa se ha destacado a lo largo de estos años por su compromiso social y
                humanitario, es por ello que ha creado programas en beneficio de las poblaciones vulnerables
                y de escasos recursos, entre ellos: recolectas, celebraciones en fechas especiales, apoyo
                económico a fundaciones, entrega de ayudas como útiles escolares, vestuario, elementos de
                aseo, etc., y orientación jurídica.</a>
        </div>

        <div >
            <div id="carouselExampleIndicators" className="carousel slide carousellCompro" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742927/Pages/CARRIEL1_uulaxd.jpg" className="d-block imggCrompo" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742927/Pages/CARRIEL2_kjnil2.jpg" className="d-block imggCrompo" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742927/Pages/CARRIEL3_gvu4gb.jpg" className="d-block imggCrompo" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742927/Pages/CARRIEL4_ptrpuh.jpg" className="d-block imggCrompo" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742927/Pages/CARRIEL5_gv6dyf.jpg" className="d-block imggCrompo" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742927/Pages/CARRIEL6_grn6yv.jpg" className="d-block imggCrompo" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742928/Pages/CARRIEL7_okfcr2.jpg" className="d-block imggCrompo" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742927/Pages/CARRIEL8_gp72gx.jpg" className="d-block imggCrompo" alt="..."/>
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
        </>
    )
}

export default CompromisoSocial;