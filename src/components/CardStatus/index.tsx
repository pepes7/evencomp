import { EStatus } from "../../util/enums";
import { CardStatusEvent } from "./style";


interface TProps {
    status: EStatus
}

export default function CardStatus(props: TProps) {
    const status = {
        [EStatus.ABERTO]: { name: "Em aberto", color: "#86E3B2" },
        [EStatus.FECHADO]: { name: "Fechado", color: "#E70016" }
    }
    const currentStatus = status[props.status]

    return (
        <CardStatusEvent color={currentStatus.color} >
            {currentStatus.name}
        </CardStatusEvent>
    )
}