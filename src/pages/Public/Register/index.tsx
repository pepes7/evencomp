import { Uea } from "../../../assets/images";
import { useHistory } from 'react-router'
import { PrimaryButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import api from "../../../services/api";
import { Account, BoxAccount, BoxLogo, Container, ContainerDatas, NotAccount } from "../Login/style";
import { useToasts } from 'react-toast-notifications'

export function Register() {
    const history = useHistory()
    const { addToast } = useToasts()

    const registerAction = (event: any) => {
        event.preventDefault()
        const { name, email, password, cpf } = event.target.elements

        api.post("evencomp/users/add", {
            name: name.value,
            email: email.value,
            cpf: cpf.value,
            password: password.value,
            type: "user",
            admin: false
        }).then((res) => {
            addToast({ title: "Conta registrada com sucesso.", description: "Faça login na plataforma" },
                { appearance: "success" })
            history.push('/')
        }).catch((err) => {
            addToast({ title: "Erro desconhecido. Tente novamente mais tarde" }, { appearance: "error" })
        })
    }

    return (
        <Container>
            <BoxLogo>
                <img src={Uea} alt="Descrição da imagem" />
            </BoxLogo>
            <Account>
                <BoxAccount>
                    <ContainerDatas onSubmit={registerAction}>
                        <h1>Preencha seus dados</h1>
                        <Input placeholder="Nome" className="mg-bt-32" name="name" />
                        <Input placeholder="Email" className="mg-bt-32" name="email" />
                        <Input placeholder="Senha" className="mg-bt-32" type="password" name="password" />
                        <Input placeholder="CPF" name="cpf" />

                        <PrimaryButton text="Cadastrar" width="100%" height="55px" className="mg-tp-64" />
                    </ContainerDatas>
                    <NotAccount>
                        <h4> Já possui uma conta?</h4>
                        <a href="login">Login</a>
                    </NotAccount>
                </BoxAccount>
            </Account>
        </Container>
    )
}
