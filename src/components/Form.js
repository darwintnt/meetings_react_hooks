import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const Form = ({crearCita}) => {

  // Crear State de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, actualizarError] = useState(false);

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  // Agrega una nueva cita
  const agregarCita = e => {
    e.preventDefault();
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      Swal.fire('Oops...', 'Todos los campos son obligatorios', 'error');
      return;
    }

    actualizarError(false);

    // Asignar ID
    cita.id = uuidv4();

    // Crear la cita
    crearCita(cita);

    // Reiniciar el formulario
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  }


  return (
    <Fragment>
      <h1>Crear Cita</h1>
      <form onSubmit={agregarCita}>
        <div className="uk-form-controls uk-margin">
          <label>Nombre mascota</label>
          <input
            type="text"
            className="uk-input"
            name="mascota"
            onChange={actualizarState}
            value={mascota} />
        </div>
        <div className="uk-form-controls uk-margin">
          <label>Nombre propietario</label>
          <input
            type="text"
            className="uk-input"
            name="propietario"
            onChange={actualizarState}
            value={propietario} />
        </div>
        <div className="uk-form-controls uk-margin">
          <label>Fecha</label>
          <input
            type="date"
            className="uk-input"
            name="fecha"
            onChange={actualizarState}
            value={fecha} />
        </div>
        <div className="uk-form-controls uk-margin">
          <label>Hora</label>
          <input
            type="time"
            className="uk-input"
            name="hora"
            onChange={actualizarState}
            value={hora} />
        </div>
        <div className="uk-form-controls uk-margin">
          <label>Sintomas</label>
          <textarea
            type="text"
            className="uk-textarea"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas}></textarea>
        </div>

        <button type="submit" className="uk-button uk-button-primary uk-width-1-1@m">Agegar Cita</button>
      </form>
    </Fragment>
  );


}

Form.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Form;