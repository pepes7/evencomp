import { useHistory } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../../../../../components/Button";
import { Input } from "../../../../../../components/Input";
import { TUser } from "../../../../../../data/user";
import api from "../../../../../../services/api";
import { getUserToken } from "../../../../../../services/auth";
import { Container } from "../../style";
import { FormEvent } from "./style";
import moment from 'moment';
import { useToasts } from "react-toast-notifications";
import { TEvent } from "../../../../../../data/event";

interface Tprops {
    event?: TEvent
}

export default function InscreverEvent(props: Tprops) {
    const { event } = props;
    const user: TUser = getUserToken()
    const { goBack } = useHistory()
    const { addToast } = useToasts()

    const create = (e: any) => {
        e.preventDefault()

        api.post('evencomp/userEvents/add',
            {
                activity_id: event?.id,
                user_id: user.id,

            }
        ).then((res) => {
            addToast({ title: "Inscrição efetuada com sucesso." }, { appearance: "success" })
            goBack()
        }).catch((error) => {
            addToast({ title: "Erro na edição do evento" }, { appearance: "error" })
        })
    }

    return (
        <Container>
            <h1>Finalize sua inscrição no evento {event?.title}</h1>
            <span>Verifique as informações antes de confirmar</span>
            <FormEvent onSubmit={create}>
                <Input placeholder="Titulo" disabled name="title" required defaultValue={event?.title} />
                <Input placeholder="Descrição" disabled name="description" required defaultValue={event?.description} />
                <Input placeholder="Palestrante" disabled name="speaker" defaultValue={event?.speaker} />
                <div style={{ display: "flex", gap: '2rem', justifyContent: "space-between" }}>
                    <Input type="datetime-local" disabled name="dateStart" defaultValue={event?.dateStart ? moment.utc(event?.dateStart).format('YYYY-MM-DDTHH:mm') : "null"} />
                    <Input type="datetime-local" disabled name="dateEnd" defaultValue={event?.dateEnd ? moment.utc(event?.dateEnd).format('YYYY-MM-DDTHH:mm') : "null"} />
                </div>
                <Input placeholder="Localização" disabled name="location" defaultValue={event?.location} />
                <Input placeholder="Categoria" disabled name="category" defaultValue={event?.category} />
                <Input placeholder="Número de participantes" disabled name="subscribersLimit" type="number" defaultValue={event?.subscribersLimit} />

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <SecondaryButton width="174px" height="58px" onClick={() => goBack()} type="reset" text="Voltar" />
                    <PrimaryButton width="174px" height="58px" type="submit" text="Confirmar" />
                </div>
            </FormEvent>
        </Container>
    )
}