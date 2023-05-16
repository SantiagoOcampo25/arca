import React, { createContext } from "react";

const ShowDashboardPQRSFContext = createContext();

const ShowDashboardPQRSFContextProvider = (props) => {
 const ShowDashboardPQRSF = [
    {
      NumRadicacion: '1',
      TipoPQRSF: 'Felicitacion',
      Fecha: '2021-07-10'
    },
    {
      NumRadicacion: '2',
      TipoPQRSF: 'Queja',
      Fecha: '2022-05-13'
    },
    {
      NumRadicacion: '3',
      TipoPQRSF: 'Reclamo',
      Fecha: '2021-09-20'
    }
  ];

  
  return (
    <ShowDashboardPQRSFContext.Provider value={ShowDashboardPQRSF}>
      {props.children}
    </ShowDashboardPQRSFContext.Provider>
  );
};

export { ShowDashboardPQRSFContext, ShowDashboardPQRSFContextProvider };

