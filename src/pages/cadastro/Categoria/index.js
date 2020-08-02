import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Castro de Categoria</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
  }

export default CadastroCategoria;