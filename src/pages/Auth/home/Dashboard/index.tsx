import { Redirect, Route, RouteComponentProps, Switch, useHistory, useRouteMatch } from "react-router-dom";
import CardStatus from "../../../../components/CardStatus";
import { TUser } from "../../../../data/user";
import { getUserToken } from "../../../../services/auth";
import { EStatus } from "../../../../util/enums";
import { Container, TableCell, TableHeader, TableRow, TableStyled } from "./style";
import { IoIosAddCircle } from "react-icons/io";
import CreateEvent from "./Event/Create";
import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { TEvent } from "../../../../data/event";
import moment from "moment";
import InscreverEvent from "./Event/Inscrever";

export default function Dashboard(props: RouteComponentProps) {
    const { location } = props;
    const user: TUser = getUserToken()
    const { push } = useHistory()
    const { path } = useRouteMatch()
    const [event, setEvent] = useState<TEvent>()

    const DataDashBoard = () => {
        const [events, setEvents] = useState<TEvent[]>([])

        useEffect(() => {
            api.get("evencomp/activities/getAll").then((res) => {
                setEvents(res.data)
            })
        }, [])
        const headers = ['Nome do evento', 'Palestrante', 'Data', "Horário", "Duração", "Vagas", "Status"];
        return (
            <Container>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <h1>Dê uma olhada nos eventos desse mês =)</h1>

                    {user.admin && <IoIosAddCircle className="icon" onClick={() => push(path + "/create/event")} />}
                </div>
                <span>Pesquise pelo nome, se preferir :)</span>
                {events.length ? <TableStyled>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <TableHeader key={index}>{header}</TableHeader>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((row, rowIndex) => (
                            <TableRow key={rowIndex} onClick={() => { setEvent(row), push(path + (user.admin ? "/edit/event" : "/inscrever/event")) }}>
                                <TableCell> {row.title}</TableCell>
                                <TableCell> {row.speaker}</TableCell>
                                <TableCell> {moment.utc(row.dateStart).format("DD/MM/YYYY")}</TableCell>
                                <TableCell> {moment.utc(row.startTime).format("HH:mm")}</TableCell>

                                <TableCell> {row.duration}</TableCell>
                                <TableCell> {row.subscribersLimit}</TableCell>
                                <TableCell> <CardStatus status={row.status ? EStatus.ABERTO : EStatus.FECHADO} /> </TableCell>

                            </TableRow>
                        ))}
                    </tbody>
                </TableStyled>
                    :
                    <h3 style={{ alignSelf: "center", marginTop: "5rem" }}>Nenhum evento cadastrado</h3>
                }
            </Container>
        )
    }
    return (
        <Switch location={location}>
            <Route
                path={path + "/create/event"}
                component={CreateEvent}
            />
            <Route
                path={path + "/edit/event"}
                render={(routeProps) => <CreateEvent {...routeProps} edit={true} event={event} />}
            />

            <Route
                path={path + "/inscrever/event"}
                render={(routeProps) => <InscreverEvent {...routeProps} event={event} />}
            />
            <Route
                path={"/"}
                component={DataDashBoard}
            />

        </Switch>

    )
}