import { Uea } from "../../../assets/images";
import { PrimaryButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Account, BoxAccount, BoxLogo, Container, ContainerDatas, NotAccount } from "../Login/style";

export function Register() {
    return (
        <Container>
            <BoxLogo>
                <img src={Uea} alt="Descrição da imagem" />
            </BoxLogo>
            <Account>
                <BoxAccount>
                    <ContainerDatas>
                        <h1>Preencha seus dados</h1>
                        <Input placeholder="Nome" className="mg-bt-32" />
                        <Input placeholder="Email" className="mg-bt-32" />
                        <Input placeholder="Senha" className="mg-bt-32" type="password" />
                        <Input placeholder="CPF" />

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
