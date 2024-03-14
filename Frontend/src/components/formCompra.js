import { useState } from "react";

function FormCompra() {
  const [newVenta, setNewVenta] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    departamento: "",
    producto: "",
    cantidad: "",
  });

  return (
    <div className="background-modal">
      <form

      ></form>
    </div>
  );
}

export default FormCompra;
