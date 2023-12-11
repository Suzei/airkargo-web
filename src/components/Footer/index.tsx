import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { FooterContacts, FooterContainer, FooterInc, FooterSocials } from "./styles";
import LogoMini from '/logo-min.svg'

export function Footer() {
    return (
        <FooterContainer>
            <img src={LogoMini} />
            <FooterContacts>
                <a>Contato</a>
                <a>Cotação</a>
                <a>Benefícios</a>
                <a>Quem Somos?</a>
                <a>Nossos Serviços</a>
                <a>Seja Nosso Cliente</a>
            </FooterContacts>
            <FooterSocials>
                <span>Redes Sociais:</span>
                <InstagramLogo color="#D3C8FF" size={32} />
                <FacebookLogo color="#D3C8FF" size={32} />
            </FooterSocials>

            <FooterInc>
                <span>Airkargo © Alguns Direitos reservados</span>
                <span>Desenvolvido por Victória Albuquerque</span>
            </FooterInc>
        </FooterContainer>
    )
}