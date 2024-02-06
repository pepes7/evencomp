import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../../pages/Public/Login'
import { Register } from '../../pages/Public/Register'

const Auth = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Redirect to="/login" />
        </Switch>
    )
}

export default Auth
