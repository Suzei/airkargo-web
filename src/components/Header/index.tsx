import { List } from 'phosphor-react';
import { Button } from '../Button';
import { HeaderContainer, HeaderControls, HeaderFields, HeaderFieldsContainer, HeaderQuotation } from './styles';
import Logo from '/logo-full.svg'

export function Header({ quotation }: { quotation: boolean }) {
    return (
        <>
            <HeaderContainer>
                <img src={Logo} />
                <HeaderControls>
                    <Button type='button' buttonType='primary' text='SEJA CLIENTE' />
                    <Button type='button' buttonType='secondary' text='FAÇA SUA COTAÇÃO' />
                    <List size={50} />
                </HeaderControls>
            </HeaderContainer>

            {quotation && (
                <HeaderQuotation>
                    <span>Rastreie <br />sua carga</span>
                    <HeaderFieldsContainer>
                        <HeaderFields>
                            <label htmlFor="cpf">CPF/CNPJ:</label>
                            <input name='cpf' type='text' />
                        </HeaderFields>

                        <HeaderFields>
                            <label htmlFor="code">CÓDIGO</label>
                            <input name='code' type='text' />
                        </HeaderFields>
                    </HeaderFieldsContainer>
                    <Button buttonType='primary' type="submit" text='RASTREAR' />
                </HeaderQuotation>
            )}
        </>
    )
}