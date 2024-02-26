import CardStatus from "../../../../components/CardStatus";
import { TUser } from "../../../../data/user";
import { getUserToken } from "../../../../services/auth";
import { EStatus } from "../../../../util/enums";
import { Container, TableCell, TableHeader, TableRow, TableStyled } from "./style";
import { IoIosAddCircle } from "react-icons/io";

export default function Dashboard() {
    const user: TUser = getUserToken()
    const headers = ['Nome do evento', 'Palestrante', 'Data', "Horário", "Duração", "Vagas", "Status"];
    const data = [
        ['Evento 1', "Palestrante", '05/10/2023', "14:45", "2h15min", "50", 1],
        ['Evento 2', "Palestrante", '05/10/2023', "14:45", "2h15min", "50", 1],
        ['Evento 3', "Palestrante", '05/10/2023', "14:45", "2h15min", "50", 2],
    ];
    return (
        <Container>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h1>Dê uma olhada nos eventos desse mês =)</h1>

                {user.admin && <IoIosAddCircle className="icon" />}
            </div>
            <span>Pesquise pelo nome, se preferir :)</span>
            <TableStyled>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <TableHeader key={index}>{header}</TableHeader>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex}>{cellIndex === row.length - 1 ? <CardStatus status={cell as EStatus} /> : cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
            </TableStyled>
        </Container>
    )
}