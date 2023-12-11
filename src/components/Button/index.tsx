import { ButtonContainer } from "./styles";

interface ButtonProps {
    buttonType: 'primary' | 'secondary';
    text: string;
    type: 'submit' | 'button'

}

export function Button({ buttonType, text, type = "button" }: ButtonProps) {
    return (
        <ButtonContainer type={type} buttonType={buttonType}>{text}</ButtonContainer>
    )
}