import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom"
import { Container } from "./style"
import NavBar from "../../../components/NavBar"
import { AiOutlineHome } from "react-icons/ai";
import { MdEvent } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import Dashboard from "./Dashboard"

export interface IRoute {
    text: string
    url: string
    component: () => JSX.Element
    Icon: string
}

const routes: IRoute[] = [
    {
        text: "Início",
        url: '/home/dashboard',
        component: Dashboard,
        Icon: AiOutlineHome,
    },
    {
        text: 'Eventos',
        url: '/home/eventos',
        component: Dashboard,
        Icon: MdEvent,
    },
    {
        text: 'Histórico',
        url: '/home/historico',
        component: Dashboard,
        Icon: GoHistory,
    },
]

const Home = (props: RouteComponentProps) => {
    const { location } = props
    return (
        <Container>
            <NavBar routes={routes} />
            <main id="routes-content">
                <Switch location={location}>
                    {routes.map(
                        ({ url, component }, key) =>
                            component && (
                                <Route
                                    path={url}
                                    component={component}
                                    key={key}
                                />
                            )
                    )}
                    <Redirect exact to="/home/dashboard" />
                </Switch>
            </main>
        </Container>
    )
}

export default Home