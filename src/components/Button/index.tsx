import { ButtonContainer } from "./styles";

interface ButtonProps {
    type: 'primary' | 'secondary';
    text: string;

}

export function Button({ type, text }: ButtonProps) {
    return (
        <ButtonContainer type={type}>{text}</ButtonContainer>
    )
}