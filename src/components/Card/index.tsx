import { ThreeDots } from "../../styles/global";
import { CardContainer } from "./styles";

interface CardProps {
    title: string;
    description: string;
}

export function Card({ title, description }: CardProps) {
    return (
        <CardContainer>
            <h2>{title}</h2>
            <ThreeDots size="3" color="#9F8AF4" >. . .</ThreeDots>
            <p>
                {description}
            </p>
        </CardContainer>
    )
}