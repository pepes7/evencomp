import { Circle, PerfilCard } from "./style";
import { IoIosArrowForward } from "react-icons/io";

export default function CardPerfil(props: { open: boolean }) {
    return (
        <PerfilCard open={props.open}>
            <Circle >
                D
            </Circle>
            <span>Debora </span>
            <IoIosArrowForward className="icon" />
        </PerfilCard>
    )
}