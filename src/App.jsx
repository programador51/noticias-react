import React,{Fragment,useState,useEffect} from 'react'
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';

function App() {

  const [categoria,setCategoria] = useState('');
  const [noticias,setNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=073553cf23ab4cf6940672c2ab0461a2`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      
      setNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header
        title='Buscador de Noticias'/>

      <div className="container white">
        <h1>Formulario aquí</h1>
        <Formulario
          setCategoria = {setCategoria}/>

        <ListadoNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
