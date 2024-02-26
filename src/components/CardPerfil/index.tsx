import { TUser } from "../../data/user";
import { getUserToken } from "../../services/auth";
import { Circle, PerfilCard } from "./style";
import { IoIosArrowForward } from "react-icons/io";

export default function CardPerfil(props: { open: boolean }) {
    const user: TUser = getUserToken()
    return (
        <PerfilCard open={props.open}>
            <Circle >
                {user.name?.[0]}
            </Circle>
            <span>{user.name}</span>
            <IoIosArrowForward className="icon" />
        </PerfilCard>
    )
}