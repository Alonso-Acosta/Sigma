//CSS
import "../Style/Equipo.css"

function Equipo(){
    return(
        <>
            <h2>Nuestro equipo de trabajo</h2>       
        <div className="Equipoo">
            <div className="filaE">
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalEmma">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742925/Pages/Equipo/EQUIPO1_eomwed.jpg" alt=""/>
                        <a>EMMA PATRICIA GIL VARGAS</a>
                        <a>DERECHO COMERCIAL Y PROCESAL</a>
                    </button>
                </div>
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalRobin">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO2_tp4oci.jpg" alt=""/>
                        <a>ROBINSON RODRIGUEZ CAICEDO</a>
                        <a>DERECHO ADMINISTRATIVO Y SEGURIDAD SOCIAL</a>
                    </button>
                </div>
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#exampleBladi">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO3_heuwz7.jpg" alt=""/>
                        <a>BLADIMIR VANEGAS LADINO</a>
                        <a>DERECHO PUBLICO Y DISCIPLINARIO</a>
                    </button>
                </div>
            </div>
            <div className="filaE">
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalDoris">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO4_mzedk5.jpg" alt=""/>
                        <a>DORIS ELIZABETH MEJIA GARCIA</a>
                        <a>DERECHO LABORAL Y SEGURIDAD SOCIAL</a>
                    </button>
                </div>
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalJose">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO5_mgxbvt.jpg" alt=""/>
                        <a>JOSE MIGUEL FONSECA AREVALO </a>
                        <a>DERECHO PENAL Y CONSTITUCIONAL</a>
                    </button>
                </div>
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalGiova">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO6_vx3lit.jpg" alt=""/>
                        <a>GIOVANNI ANTONIO NAVARRO</a>
                        <a>DERECHO LABORAL</a>
                    </button>
                </div>
            </div>
            <div className="filaE">
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalAleja">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO7_wewoeq.jpg" alt=""/>
                        <a>LAURA ALEJANDRA CAICEDO GIL</a>
                        <a>ABOGADA JR.</a>
                    </button>
                </div>
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalPierre">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO8_icw8td.jpg" alt=""/>
                        <a>PIERRE LUIGI GUALY POBRE</a>
                        <a>ABOGADO JR.</a>
                    </button>
                </div>
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalMigue">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742926/Pages/Equipo/EQUIPO9_y0boeu.jpg" alt=""/>
                        <a>MIGUEL ANGEL TAUTIVA GIL</a>
                        <a>FINANCIERO JR. </a>
                    </button>
                </div>
            </div>
            <div className="filaE">
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalCarlos">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742925/Pages/Equipo/EQUIPO10_hsjpcr.jpg" alt=""/>
                        <a>CARLOS ENRIQUE GIL LONDOÑO</a>
                        <a>PERITO AVALUADOR</a>
                    </button>
                </div>
                <div className="cardE">
                    <button type="button" className="btn btnn" data-bs-toggle="modal" data-bs-target="#ModalGerman">
                        <img src="https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742925/Pages/Equipo/EQUIPO11_jdvazu.jpg" alt=""/>
                        <a>GERMAN ANTONIO URUETA RIVERO</a>
                        <a>PERITO AVALUADOR</a>
                    </button>
                </div>
            </div>
        </div>

 //Modales
<div className="modal fade " id="ModalEmma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">EMMA PATRICIA GIL VARGAS</h5>
                    <p className="modal-subtitle">DERECHO COMERCIAL Y PROCESAL</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogada egresada de la Universidad
                Libre de Colombia, especialista en
                Derecho Comercial e Instituciones
                Jurídico Procesales de la Universidad
                Nacional de Colombia, con una
                experiencia de más de 20 años como
                asesora y consultora, contratista para la
                defensa del Estado desde el año 2009,
                contratista y asesora de Artesanías de
                Colombia SA, representante judicial de
                la Union temporal de Cajas de
                Compensación CAVIS UT, miembro
                adjunto del Colegio de Abogados
                comercialistas.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className="modal fade " id="ModalRobin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">ROBINSON RODRIGUEZ CAICEDO</h5>
                    <p className="modal-subtitle">DERECHO ADMINISTRATIVO Y SEGURIDAD SOCIAL</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogado egresado de la Universidad La gran
                Colombia, Especialista en Derecho
                Administrativo, en Responsabilidad Civil y del
                Estado con maestría en Propiedad Intelectual y
                Derecho de las Nuevas Tecnologías Universidad
                Internacional de La Rioja (UNIR), con
                experiencia profesional en las áreas del derecho
                laboral, la seguridad social, derecho
                administrativo, Responsabilidad Civil y del
                Estado y derecho de seguros, defensor del
                resarcimiento del daño, es miembro adjunto del
                Instituto Colombiano de Responsabilidad Civil y del Estado.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className="modal fade " id="exampleBladi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">BLADIMIR VANEGAS LADINO</h5>
                    <p className="modal-subtitle">DERECHO PUBLICO Y DISCIPLINARIO</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogado especializado en Derecho Público, se encarga de las áreas de derecho laboral - seguridad social - pensiones, derecho administrativo y responsabilidad del Estado, derecho disciplinario, responsabilidad fiscal, derecho civil y comercial. En su experiencia laboral ha sido; inspector de policía, funcionario de la Rama Judicial, asesor jurídico en diferentes municipios del país, profesional especializado en Asuntos Disciplinarios, asesor jurídico de la Corporación Autónoma Regional del Tolima - Cortolima, la Gobernación del Tolima y como Asesor de Auditoria de la Contraloria de Bogotá.
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className="modal fade " id="ModalDoris" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">DORIS ELIZABETH MEJIA GARCIA</h5>
                    <p className="modal-subtitle">DERECHO LABORAL Y SEGURIDAD SOCIAL</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogada especialista en derecho
                Laboral y procesal, con amplia
                experiencia en asuntos relacionados con
                la Seguridad Social, con énfasis en la
                adopción de decisiones a partir del
                estudio y reconocimiento de derechos
                pensiónales de empleados públicos y
                trabajadores del sector privado.
                Ejercicio de profesión como litigante y
                experiencia como abogada conciliadora.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className="modal fade " id="ModalGiova" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">GIOVANNI ANTONIO NAVARRO</h5>
                    <p className="modal-subtitle">DERECHO LABORAL</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogado egresado de la Universidad
                Republicana, especialista en Derecho
                Laboral, con amplia experiencia en la
                Supertintendencia de Industria y Comercio,
                en la Red de protección al consumidor y en
                la Superintendencia de Transporte; se ha
                dedicado a la asesoría del área Laboral
                desde que inicio como profesional. Con un
                excelente compromiso en el trabajo en equipo y cumplimiento de sus
                deberes.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div className="modal fade " id="ModalAleja" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">LAURA ALEJANDRA CAICEDO GIL</h5>
                    <p className="modal-subtitle">ABOGADA JR.</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogada bilingüe egresada de la
                Universidad Libre de Colombia, con
                experiencia en el área de derecho
                privado, comercial, civil y familia. Se
                destaca por su gran sentido de
                responsabilidad y excelencia. Con
                experiencia en su trabajo en la Rama
                Judicial; de la cual ha obtenido una
                visión amplia de las necesidades de los
                usuarios, especialmente en todo lo
                relacionado con el litigio.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div className="modal fade " id="ModalPierre" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">PIERRE LUIGI GUALY POBRE</h5>
                    <p className="modal-subtitle">ABOGADA JR.</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogado bilingüe de la Universidad
                Autónoma de Colombia, especializado
                en Derecho Procesal; con experiencia en
                consultoría y asesoría jurídica. Se
                destaca por su gran capacidad de
                análisis y sustanciación, así como un
                excelente desempeño y cualidades para
                el trabajo en equipo.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className="modal fade " id="ModalMigue" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">MIGUEL ANGEL TAUTIVA GIL</h5>
                    <p className="modal-subtitle">FINANCIERO JR.</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Estudiante de Finanzas y Negocios
                Internacionales, con experiencia en
                Inversiones bursátiles. Se destaca por
                su sentido de la responsabilidad y
                liderazgo; gran dedicación y excelente
                desempeño en el trabajo en equipo.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div className="modal fade " id="ModalJose" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">JOSE MIGUEL FONSECA AREVALO</h5>
                    <p className="modal-subtitle">DERECHO PENAL Y CONSTITUCIONAL</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Abogado de la Universidad
                Autónoma de Colombia, especializado
                en Derecho Penal y Constitucional; con amplia experiencia en
                investigación criminal y representación en defensas. Se
                destaca por su gran capacidad de
                análisis y compromiso, así como un
                excelente desempeño.</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className="modal fade " id="ModalGerman" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">GERMAN ANTONIO URUETA RIVERO</h5>
                    <p className="modal-subtitle">PERITO AVALUADOR</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Avalúador de bienes raíces en las 13 categorías, con registro abierto de Avalúador (RAA) ante la corporación colombiana de Avaluadores (ANAV):
                <ol>
                    <li>1) inmuebles Urbanos</li>
                    <li>2) Inmuebles Rurales </li>
                    <li>3) Recursos Naturales y Suelos de Protección </li>
                    <li>4) Obras de Infraestructura </li>
                    <li>5) Edificaciones de Conservación Arqueológica y Monumentos Históricos, </li>
                    <li>6) Inmuebles Especiales</li>
                    <li>7) Maquinaria Fija, Equipos y Maquinaria Móvil </li>
                    <li>8) Maquinaria y Equipos Especiales</li>
                    <li>9) Obras de Arte, Orfebrería, Patrimoniales y Similares </li>
                    <li>10) Semovientes y Animales </li>
                    <li>11) Activos Operacionales y Establecimientos de Comercio </li>
                    <li>12) Intangibles </li>
                    <li>13) Intangibles Especiales</li>
                </ol>
                
                </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className="modal fade " id="ModalCarlos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div>
                    <h5 className="modal-title" id="exampleModalLabel">CARLOS ENRIQUE GIL LONDOÑO</h5>
                    <p className="modal-subtitle">PERITO AVALUADOR</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Avalúador de bienes raíces en las 13 categorías, con registro abierto de Avalúador (RAA) ante la corporación colombiana de Avaluadores (ANAV):
                <ol>
                    <li>1) inmuebles Urbanos</li>
                    <li>2) Inmuebles Rurales </li>
                    <li>3) Recursos Naturales y Suelos de Protección </li>
                    <li>4) Obras de Infraestructura </li>
                    <li>5) Edificaciones de Conservación Arqueológica y Monumentos Históricos, </li>
                    <li>6) Inmuebles Especiales</li>
                    <li>7) Maquinaria Fija, Equipos y Maquinaria Móvil </li>
                    <li>8) Maquinaria y Equipos Especiales</li>
                    <li>9) Obras de Arte, Orfebrería, Patrimoniales y Similares </li>
                    <li>10) Semovientes y Animales </li>
                    <li>11) Activos Operacionales y Establecimientos de Comercio </li>
                    <li>12) Intangibles </li>
                    <li>13) Intangibles Especiales</li>
                </ol>
                
                </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Equipo;