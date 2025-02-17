import React, { useState, useEffect } from 'react';

function App() {
  // Estado para almacenar la respuesta de la API
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(true);  // Para indicar que estamos esperando la respuesta

  // Usamos useEffect para hacer la solicitud cuando el componente se monta
  useEffect(() => {
    // Hacer la solicitud a la API
    fetch('http://localhost:3001/api/hola')
      .then((response) => response.json())  // Convertir la respuesta a JSON
      .then((data) => {
        setMensaje(data.message);  // Asumimos que la API devuelve un objeto con un campo 'message'
        setCargando(false);  // Termina la espera
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setMensaje('Error al cargar el mensaje.');
        setCargando(false);
      });
  }, []);  // Este efecto se ejecutará solo una vez, al montar el componente

  return (
    <div className="App">
      <h1>Mensaje desde el servidor:</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <p>{mensaje}</p>
      )}
    </div>
  );
}

export default App;

