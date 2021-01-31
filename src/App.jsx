import React,{Fragment} from 'react'
import Header from './Components/Header';
import Formulario from './Components/Formulario';

function App() {
  return (
    <Fragment>
      <Header
        title='Buscador de Noticias'/>

      <div className="container white">
        <h1>Formulario aquí</h1>
        <Formulario/>
      </div>
    </Fragment>
  );
}

export default App;
