import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TarjetaCita = ({cita, eliminarCita}) => {

  const {mascota, propietario, fecha, hora, sintomas} = cita;

  return(
    <Fragment>
      <div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-header">
            <h3 className="uk-card-title">{mascota}</h3>
          </div>
          <div className="uk-card-body">
            <p><span className="uk-text-emphasis">Propietario: </span>{propietario}</p>
            <p><span className="uk-text-emphasis">Fecha: </span>{fecha}</p>
            <p><span className="uk-text-emphasis">Hora: </span>{hora}</p>
            <p><span className="uk-text-emphasis">Sintomas: </span>{sintomas}</p>
          </div>
          <div className="uk-card-footer">
            <button onClick={() => eliminarCita(cita.id) } className="uk-button uk-button-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </Fragment>
  );

}

TarjetaCita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default TarjetaCita;