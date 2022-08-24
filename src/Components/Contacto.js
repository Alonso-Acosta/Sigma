import "../Style/Contacto.css";

function Contacto(){

   const SubmitEvent = e =>{
        e.preventDefault();
    }

    return(
        <>
            <h2>Contactenos : </h2>
            <div className="Contactenoss">
                <a>Comunícate pronto y permite que
                    nuestros profesionales calificados se
                    encarguen de tu consulta, la
                    resolución de tu conflicto o trámite
                    legal.
                    Para nosotros es un placer atenderle,
                    por favor háganos saber su consulta
                    por el siguiente medio, o llamando nuestras lineas de atencion.</a>
                <div className="Formularioo">
                    <form onSubmit={SubmitEvent}>
                                <label for="name" >Nombre:</label>
                                <input type="text" id="name" name="user_name" placeholder="Nombre y Apellido"/>
                                <label for="mail">Correo electrónico:</label>
                                <input type="email" id="mail" name="user_mail" placeholder="comercial@gruposigmajudicial.com"/>
                                <label for="msg">Consulta:</label>
                                <textarea id="msg" name="user_message"></textarea>
                                <input className="buttom" type="button" value="Enviar"/>
                    </form>

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
};

export default Contacto;