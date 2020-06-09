import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiHome } from 'react-icons/fi';

import './styles.css';

interface Props {
   registered: boolean;
}

const Overlay: React.FC<Props> = (props) => {
   if (!props.registered) return null;
   return (
      <div className="overlay">
         <div className="overlayContainer">
            <FiCheckCircle className="overlayIcon"></FiCheckCircle>

            <p className="overlayText">Cadastro concluído</p>

            <Link to="/">
               <span>
                  <FiHome></FiHome>
               </span>
               <p>Voltar para Home</p>
            </Link>
         </div>
      </div>
   );
};

export default Overlay;
