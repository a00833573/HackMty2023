import React from "react";

function Footer()
{
    return(
        <section className="section-footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6 className='text-center my-3'>Sobre nuestra propuesta</h6>
                        <hr/>
                        <p style={{ textAlign: "justify" }}>
                        Nuestro proyecto tiene como objetivo mejorar la seguridad y la calidad de vida en el Distrito Tec. Trabajamos incansablemente para proporcionar información valiosa y herramientas innovadoras que empoderen a nuestra comunidad.
                        </p>
                    </div>
                    <div className="col">
                        <h6 className='text-center my-3'>Información de contacto</h6>
                        <hr/>
                        <div>
                            <p className="text-white mb-1" style={{ textAlign: "justify" }}>
                                Zona Distrito Tec
                            </p>
                        </div>
                        <div>
                            <p className="text-white mb-1" style={{ textAlign: "justify" }}>
                                81-1551-1551
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Footer;