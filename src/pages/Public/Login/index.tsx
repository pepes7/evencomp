import { Uea } from "../../../assets/images";
import { Account, BoxAccount, BoxLogo, Container, ContainerDatas } from "./style";

export function Login() {

    return (
        <Container>
            <BoxLogo>
                <img src={Uea} alt="Descrição da imagem" />
            </BoxLogo>
            <Account>
                <BoxAccount>
                    <ContainerDatas>
                        <h2>Seja bem-vindo!</h2>
                        <input/>
                        <input/>
                        <span>Esqueceu sua senha?</span>

                        <button>Entrar</button>
                    </ContainerDatas>
                </BoxAccount>
            </Account>
        </Container>
    )
}
