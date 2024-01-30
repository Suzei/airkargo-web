import { Card } from "../../components/Card";
import { ThreeDots } from "../../styles/global";
import { CardContainer, Cards, HeroContainer, HeroPhrase, HomeContainer, QuotationButton } from "./styles";
import HomeCards from '../../assets/cards.json'

export function Home() {
    return (
        <HomeContainer>
            <HeroContainer>
                <HeroPhrase>
                    <ThreeDots>. . .</ThreeDots>
                    <h2>Entrega de cargas em todo o <b>BRASIL!</b></h2>
                    <span>Não importa o lugar, nós iremos até você!</span>
                </HeroPhrase>
            </HeroContainer>
            <Cards>
                <ThreeDots color="black" size="2">. . .</ThreeDots>
                <h2>Nossos Serviços</h2>
                <CardContainer>

                    {HomeCards.map(item => (
                        <Card
                            description={item.description}
                            title={item.title}
                            key={item.title}
                        />
                    ))}
                </CardContainer>
                <QuotationButton type="button" buttonType="secondary" text="Faça sua cotação" />
            </Cards>
        </HomeContainer>
    )
}