import { Uea } from "../../../assets/images";
import { Account, BoxAccount, BoxLogo, Container } from "./style";

export function Login() {

    return (
        <Container>
            <BoxLogo>
                <img src={Uea} alt="Descrição da imagem" />
            </BoxLogo>
            <Account>
                <BoxAccount>

                </BoxAccount>
            </Account>
        </Container>
    )
}
