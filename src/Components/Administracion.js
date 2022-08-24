
//CSS
import "../Style/Contacto.css"

function Administracion(){
    return(
        <>
            <div>
                <form className="Formularioo" id="Formm">
                    <label for="name">Titulo:</label>
                    <input type="text" id="name" name="user_name" placeholder="Titulo de vivienda" />
                    <input className="form-control" type="file" id="formFileMultiple" multiple />            
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" for="inlineCheckbox1">Venta</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox2">Arriendo</label>
                        </div>
                    </div>
                    <label for="msg">Descripcion:</label>
                    <textarea id="msg" name="user_message"></textarea>
                    <input className="buttom" type="button" value="Enviar"/>
                </form>
            </div>
        </>
    )
}

export default Administracion;