import React from "react";
import DataCreateCuenta from "./DataCreateCuenta";
import DataCreateInfo from "./DataCreateInfo";

function DataCreate() {

  return (
    <div>
      {localStorage.getItem("correo") === "" ? <DataCreateCuenta /> : <DataCreateInfo />}
    </div>
  );
}

export default DataCreate;
