import { ApiMessage } from "../../global/styles/main.styles"
import { Card } from "./card"
import { Bodywrapper, MainContainer } from "./style"
import { useGetAllRestaurantsQuery } from "../../services/api"


export const Mainbody = () => {
    const { data, isLoading, isError } = useGetAllRestaurantsQuery();
    
    return (
        <MainContainer maxwidth="1248px">
            <Bodywrapper>

                {isLoading && <ApiMessage>Carregando...</ApiMessage>}
                {isError && <ApiMessage>Um <strong>ERRO</strong> aconteceu na coleita de dados...</ApiMessage>}

                {data?.map(row => (
                    <Card
                     key={row.id}
                     id={row.id}
                     nome={row.nome}
                     urlPortada={row.urlPortada}
                     categories={row.categories}
                     avaliacao={row.avaliacao}
                     descricao={row.descricao}
                     />
                ))}
                
            </Bodywrapper>
        </MainContainer>
        
    )
}