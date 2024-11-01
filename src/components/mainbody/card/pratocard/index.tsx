import { useState, useEffect } from 'react'
import { Prato } from "../../../../global/utils/Models/prato"
import * as S from "./styles"
import { useDispatch } from 'react-redux';
import { visualizarPrato } from '../../../../store/slices/ModelManager';

const Pratocard = (props:Prato) => {
    const [tempDescricao, setTempDescricao] = useState('');    

    const dispatch = useDispatch()
    
    useEffect(() => {
      if(props.descricao.length > 200) {
        const newText = props.descricao.substring(0, 187) + '...'
        setTempDescricao(newText)
      } else {
        setTempDescricao(props.descricao)
      }
    
      return () => {
        setTempDescricao('')
      }
    }, [props.descricao])
    
    return (
        <S.Cardcontainer>
            <S.HeadSection>
                <img src={props.picture} alt={props.nome} />
            </S.HeadSection>
            <S.BodySection>
                <h3>{props.nome}</h3>
                <p>{tempDescricao}</p>
                <button onClick={()=> dispatch(visualizarPrato(props))}>Mais Detalhes</button>
            </S.BodySection>
        </S.Cardcontainer>
    )
}

export default Pratocard