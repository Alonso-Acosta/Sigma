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
                        <a>CARLOS ENRIQUE GIL LONDO??O</a>
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
                Jur??dico Procesales de la Universidad
                Nacional de Colombia, con una
                experiencia de m??s de 20 a??os como
                asesora y consultora, contratista para la
                defensa del Estado desde el a??o 2009,
                contratista y asesora de Artesan??as de
                Colombia SA, representante judicial de
                la Union temporal de Cajas de
                Compensaci??n CAVIS UT, miembro
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
                Estado con maestr??a en Propiedad Intelectual y
                Derecho de las Nuevas Tecnolog??as Universidad
                Internacional de La Rioja (UNIR), con
                experiencia profesional en las ??reas del derecho
                laboral, la seguridad social, derecho
                administrativo, Responsabilidad Civil y del
                Estado y derecho de seguros, defensor del
                resarcimiento del da??o, es miembro adjunto del
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
                Abogado especializado en Derecho P??blico, se encarga de las ??reas de derecho laboral - seguridad social - pensiones, derecho administrativo y responsabilidad del Estado, derecho disciplinario, responsabilidad fiscal, derecho civil y comercial. En su experiencia laboral ha sido; inspector de polic??a, funcionario de la Rama Judicial, asesor jur??dico en diferentes municipios del pa??s, profesional especializado en Asuntos Disciplinarios, asesor jur??dico de la Corporaci??n Aut??noma Regional del Tolima - Cortolima, la Gobernaci??n del Tolima y como Asesor de Auditoria de la Contraloria de Bogot??.
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
                la Seguridad Social, con ??nfasis en la
                adopci??n de decisiones a partir del
                estudio y reconocimiento de derechos
                pensi??nales de empleados p??blicos y
                trabajadores del sector privado.
                Ejercicio de profesi??n como litigante y
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
                en la Red de protecci??n al consumidor y en
                la Superintendencia de Transporte; se ha
                dedicado a la asesor??a del ??rea Laboral
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
                Abogada biling??e egresada de la
                Universidad Libre de Colombia, con
                experiencia en el ??rea de derecho
                privado, comercial, civil y familia. Se
                destaca por su gran sentido de
                responsabilidad y excelencia. Con
                experiencia en su trabajo en la Rama
                Judicial; de la cual ha obtenido una
                visi??n amplia de las necesidades de los
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
                Abogado biling??e de la Universidad
                Aut??noma de Colombia, especializado
                en Derecho Procesal; con experiencia en
                consultor??a y asesor??a jur??dica. Se
                destaca por su gran capacidad de
                an??lisis y sustanciaci??n, as?? como un
                excelente desempe??o y cualidades para
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
                Inversiones burs??tiles. Se destaca por
                su sentido de la responsabilidad y
                liderazgo; gran dedicaci??n y excelente
                desempe??o en el trabajo en equipo.</div>
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
                Aut??noma de Colombia, especializado
                en Derecho Penal y Constitucional; con amplia experiencia en
                investigaci??n criminal y representaci??n en defensas. Se
                destaca por su gran capacidad de
                an??lisis y compromiso, as?? como un
                excelente desempe??o.</div>
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
                Aval??ador de bienes ra??ces en las 13 categor??as, con registro abierto de Aval??ador (RAA) ante la corporaci??n colombiana de Avaluadores (ANAV):
                <ol>
                    <li>1) inmuebles Urbanos</li>
                    <li>2) Inmuebles Rurales </li>
                    <li>3) Recursos Naturales y Suelos de Protecci??n </li>
                    <li>4) Obras de Infraestructura </li>
                    <li>5) Edificaciones de Conservaci??n Arqueol??gica y Monumentos Hist??ricos, </li>
                    <li>6) Inmuebles Especiales</li>
                    <li>7) Maquinaria Fija, Equipos y Maquinaria M??vil </li>
                    <li>8) Maquinaria y Equipos Especiales</li>
                    <li>9) Obras de Arte, Orfebrer??a, Patrimoniales y Similares </li>
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
                    <h5 className="modal-title" id="exampleModalLabel">CARLOS ENRIQUE GIL LONDO??O</h5>
                    <p className="modal-subtitle">PERITO AVALUADOR</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Aval??ador de bienes ra??ces en las 13 categor??as, con registro abierto de Aval??ador (RAA) ante la corporaci??n colombiana de Avaluadores (ANAV):
                <ol>
                    <li>1) inmuebles Urbanos</li>
                    <li>2) Inmuebles Rurales </li>
                    <li>3) Recursos Naturales y Suelos de Protecci??n </li>
                    <li>4) Obras de Infraestructura </li>
                    <li>5) Edificaciones de Conservaci??n Arqueol??gica y Monumentos Hist??ricos, </li>
                    <li>6) Inmuebles Especiales</li>
                    <li>7) Maquinaria Fija, Equipos y Maquinaria M??vil </li>
                    <li>8) Maquinaria y Equipos Especiales</li>
                    <li>9) Obras de Arte, Orfebrer??a, Patrimoniales y Similares </li>
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