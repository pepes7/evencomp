import { Route, RouteComponentProps, Switch, useHistory, useRouteMatch } from "react-router-dom";
import CardStatus from "../../../../components/CardStatus";
import { TUser } from "../../../../data/user";
import { getUserToken } from "../../../../services/auth";
import { EStatus } from "../../../../util/enums";
import { Container, TableCell, TableHeader, TableRow, TableStyled } from "./style";
import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { TEvent } from "../../../../data/event";
import moment from "moment";
import InscreverEvent from "../Dashboard/Event/Inscrever";

export default function Events(props: RouteComponentProps) {
    const { location } = props;
    const user: TUser = getUserToken()
    const { push } = useHistory()
    const { path } = useRouteMatch()
    const [event, setEvent] = useState<TEvent>()

    const DataEvents = () => {
        const [events, setEvents] = useState<TEvent[]>([])

        useEffect(() => {
            api.get("evencomp/userEvents/getAll/" + user.id).then((res) => {
                res.data.map(({ activity_id }: any) => {
                    api.get("evencomp/activities/get/" + activity_id).then((res) => {
                        setEvents((data) => [...data, res.data])
                    })
                })
            })
        }, [])
        const headers = ['Nome do evento', 'Palestrante', 'Data', "Horário", "Duração", "Vagas", "Status"];
        return (
            <Container>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <h1>Dê uma olhada nos seus eventos =)</h1>

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
                    <h3 style={{ alignSelf: "center", marginTop: "5rem" }}>Você não se inscreveu em nenhum evento</h3>
                }
            </Container>
        )
    }
    return (
        <Switch location={location}>
            <Route
                path={path + "/inscrever/event"}
                render={(routeProps) => <InscreverEvent {...routeProps} event={event} view={true}/>}
            />
            <Route
                path={"/"}
                component={DataEvents}
            />
        </Switch>

    )
}