import { List } from 'phosphor-react';
import { Button } from '../Button';
import { HeaderContainer, HeaderControls } from './styles';
import Logo from '/logo-full.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} />

            <HeaderControls>
                <Button type='primary' text='SEJA CLIENTE' />
                <Button type='secondary' text='FAÇA SUA COTAÇÃO' />
                <List size={50} />
            </HeaderControls>

        </HeaderContainer>
    )
}