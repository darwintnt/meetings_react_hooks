import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import TarjetaCita from './components/TarjetaCita';
import Swal from 'sweetalert2';

function App() {

  // Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id => {
    const citasActuales = citas.filter(cita => cita.id !== id);
    console.log(citasActuales);
    guardarCitas(citasActuales);
    Swal.fire('Perfecto', 'Cita eliminada correctamente', 'success');
    return;
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas])

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="uk-container uk-container-large">
        <div className="uk-child-width-1-2@m uk-grid" data-uk-grid>
          <div>
            <Form
              crearCita={crearCita}
            />
          </div>

          <div>
            <h1>{titulo}</h1>
            <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
              {citas.map(cita => (
                <TarjetaCita
                  cita={cita}
                  key={cita.id}
                  eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
