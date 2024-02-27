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

export default function CreateEvent() {
    const user: TUser = getUserToken()
    const { goBack } = useHistory()
    const { addToast } = useToasts()

    const create = (event: any) => {
        event.preventDefault()
        const { title, description, speaker, dateStart, dateEnd, location, category, subscribersLimit } = event.target.elements
        const momentDataInicial = moment(dateStart.value);
        const momentDataFinal = moment(dateEnd.value);

        const diferencaEmMinutos = momentDataFinal.diff(momentDataInicial, 'minutes');

        // Converte a diferença para horas e minutos
        const horas = Math.floor(diferencaEmMinutos / 60);
        const minutos = diferencaEmMinutos % 60;

        const duration = `${horas}H${minutos}Min`;


        api.post('evencomp/activities/add/' + user.id,
            {
                title: title.value,
                description: description.value,
                speaker: speaker.value,
                dateStart: dateStart.value,
                dateEnd: dateEnd.value,
                startTime: dateStart.value,
                duration: duration,
                location: location.value,
                category: category.value,
                status: true,
                subscribersLimit: +subscribersLimit.value
            }
        ).then((res) => {
            addToast({ title: "Evento criado com sucesso" }, { appearance: "success" })
            goBack()
        }).catch((error) => {
            addToast({ title: "Erro na criação do evento" }, { appearance: "error" })
        })

    }
    return (
        <Container>
            <h1>Criação do evento</h1>
            <span>Verifique as informações antes de confirmar</span>
            <FormEvent onSubmit={create}>
                <Input placeholder="Titulo" name="title" required />
                <Input placeholder="Descrição" name="description" required />
                <Input placeholder="Palestrante" name="speaker" />
                <div style={{ display: "flex", gap: '2rem', justifyContent: "space-between" }}>
                    <Input type="datetime-local" name="dateStart" />
                    <Input type="datetime-local" name="dateEnd" />
                </div>
                <Input placeholder="Localização" name="location" />
                <Input placeholder="Categoria" name="category" />
                <Input placeholder="Número de participantes" name="subscribersLimit" type="number" />

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <SecondaryButton width="174px" height="58px" onClick={() => goBack()} text="Voltar" />
                    <PrimaryButton width="174px" height="58px" type="submit" text="Confirmar" />
                </div>
            </FormEvent>
        </Container>
    )
}