import { Mainbody } from "../../components/mainbody"
import Header from "../../components/header"
import { Container } from "../../global/styles/main.styles"
import Footer from "../../components/footer"

const Home = () => {
    return (
        <Container>
            <Header />
            <Mainbody />
            <Footer />
        </Container>
    )
}

export default Home;