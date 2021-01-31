import React from 'react';
import PropTypes from 'prop-types';

//CSS
import styles from './Formulario.module.css';

//custom Hooks
import useSelect from '../Hooks/useSelect';

//Components

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertainment',label:'Entretenimiento'},
        {value:'health',label:'Salud'},
        {value:'science',label:'Ciencia'},
        {value:'sports',label:'Deportes'},
        {value:'technology',label:'Tecnologia'},
    ]

    const [categoria,SelectNoticias] = useSelect('general',OPCIONES);

    //Submit al form, pasar categoria al App.jsx
    const buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form action=""
                    onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input type="submit"
                            className={`${styles.['btn-block']} btn-large amber darken-2`}
                            value="Buscar"/>
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default Formulario;