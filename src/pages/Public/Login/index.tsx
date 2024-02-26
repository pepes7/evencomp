import { Uea } from "../../../assets/images";
import { PrimaryButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import api from "../../../services/api";
import { login } from "../../../services/auth";
import { Account, BoxAccount, BoxLogo, Container, ContainerDatas, NotAccount } from "./style";
import { useToasts } from 'react-toast-notifications'

export function Login() {
    const { addToast } = useToasts()

    const loginAction = (event: any) => {
        event.preventDefault()
        const { password, email } = event.target.elements

        api.post("auth/login", {
            email: email.value,
            password: password.value
        }).then((res) => {
            login(res.data.token, res.data)
            window.location.reload()
        }).catch((err) => {
            var message = "Erro. Tente novamente mais tarde"
            if (err.response.status == 401) {
                message = "Verifique os dados inseridos"
            }
            addToast({ title: message }, { appearance: "error" })
        })
    }
    return (
        <Container>
            <BoxLogo>
                <img src={Uea} alt="Descrição da imagem" />
            </BoxLogo>
            <Account>
                <BoxAccount>
                    <ContainerDatas onSubmit={loginAction}>
                        <h1>Seja bem-vindo!</h1>
                        <Input placeholder="Email" className="mg-bt-32" name="email" required />
                        <Input placeholder="Senha" type="password" name="password" required />
                        <span>Esqueceu sua senha?</span>

                        <PrimaryButton text="Entrar" width="100%" height="55px" className="mg-tp-64" />
                    </ContainerDatas>
                    <NotAccount>
                        <h4> Não possui conta?</h4>
                        <a href="register">Cadastre-se</a>
                    </NotAccount>
                </BoxAccount>
            </Account>
        </Container>
    )
}
