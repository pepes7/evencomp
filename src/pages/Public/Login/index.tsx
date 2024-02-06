import { Uea } from "../../../assets/images";
import { PrimaryButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Account, BoxAccount, BoxLogo, Container, ContainerDatas, NotAccount } from "./style";

export function Login() {
    return (
        <Container>
            <BoxLogo>
                <img src={Uea} alt="Descrição da imagem" />
            </BoxLogo>
            <Account>
                <BoxAccount>
                    <ContainerDatas>
                        <h1>Seja bem-vindo!</h1>
                        <Input placeholder="Email" className="mg-bt-32" />
                        <Input placeholder="Senha" type="password" />
                        <span>Esqueceu sua senha?</span>

                        <PrimaryButton text="Entrar" width="100%" height="55px" className="mg-tp-64" />
                    </ContainerDatas>
                    <NotAccount>
                        <h4> Não possui conta?</h4>
                        <a>Cadastre-se</a>
                    </NotAccount>
                </BoxAccount>
            </Account>
        </Container>
    )
}
