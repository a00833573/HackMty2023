import React from "react";

function Footer()
{
    return(
        <section className="section-footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6 className='text-center my-3'>Información de la compañia</h6>
                        <hr/>
                        <p style={{ textAlign: "justify" }}>
                        Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, como opp
                        </p>
                    </div>
                    <div className="col">
                        <h6 className='text-center my-3'>Información de contacto</h6>
                        <hr/>
                        <div>
                            <p className="text-white mb-1" style={{ textAlign: "justify" }}>
                                #64 Rio de la Plata Roma
                            </p>
                        </div>
                        <div>
                            <p className="text-white mb-1" style={{ textAlign: "justify" }}>
                                8717341255
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Footer;