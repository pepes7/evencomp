import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Auth/home'

const Authenticated = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
        </Switch>
    )
}

export default Authenticated
