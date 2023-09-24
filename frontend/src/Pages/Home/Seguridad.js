import React from "react";

function Seguridad() {
    return (
        <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className='col-md-12 mb-5 text-center'>
              <h3 className='main-heading'>Recomendacioes de Seguridad</h3>
              <div className='underline mx-auto'></div>
            </div>

            <div className='col-md-4'>
              <h6>Mantén la Conciencia Situacional</h6>
              <p style={{ textAlign: "justify" }}>
              Siempre presta atención a tu entorno. Evita distraerte con dispositivos electrónicos o auriculares al caminar por la zona. Mantener tus sentidos alerta te permitirá detectar posibles situaciones de riesgo y tomar medidas preventivas.
              </p>
            </div>

            <div className='col-md-4'>
              <h6>Utiliza Rutas Seguras</h6>
              <p style={{ textAlign: "justify" }}>
              Planifica tu ruta con antelación y opta por caminos bien iluminados y transitados, especialmente durante la noche. Evita atajos poco frecuentados o áreas aisladas que puedan ser potencialmente peligrosas.
              </p>
            </div>

            <div className='col-md-4'>
              <h6>Comparte Tu Ubicación</h6>
              <p style={{ textAlign: "justify" }}>
              Informa a un amigo o familiar sobre tu ubicación y tus planes de viaje, especialmente si vas a caminar solo. Utiliza aplicaciones de seguimiento en tiempo real o comparte tu itinerario para que alguien sepa dónde estás en todo momento.
              </p>
            </div>

          </div>
        </div>
      </section>
    )
}

export default Seguridad;