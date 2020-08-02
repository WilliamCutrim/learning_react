import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo(){
    return(
        <PageDefault>
            <h1>Castro de Video</h1>

            <Link to="/cadastro/categoria">
                Casdastro Categoria
            </Link>
        </PageDefault>
    )
  }

export default CadastroVideo;