import { ButtonContainer } from "./styles";

interface ButtonProps {
    buttonType: 'primary' | 'secondary';
    text: string;
    type: 'submit' | 'button'
    width?: string
    height?: string;
    fontSize?: string

}

export function Button({ buttonType, text, type = "button" }: ButtonProps) {
    return (
        <ButtonContainer
            type={type}
            buttonType={buttonType}
        >
            {text}
        </ButtonContainer>
    )
}