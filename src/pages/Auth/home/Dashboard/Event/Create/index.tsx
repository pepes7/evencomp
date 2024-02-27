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
import { MdDelete } from "react-icons/md";

interface Tprops {
    edit: boolean,
    event?: TEvent
}

export default function CreateEvent(props: Tprops) {
    const { event, edit } = props;
    const user: TUser = getUserToken()
    const { goBack } = useHistory()
    const { addToast } = useToasts()

    const create = (e: any) => {
        e.preventDefault()
        const { title, description, speaker, dateStart, dateEnd, location, category, subscribersLimit } = e.target.elements
        const momentDataInicial = moment(dateStart.value);
        const momentDataFinal = moment(dateEnd.value);

        const diferencaEmMinutos = momentDataFinal.diff(momentDataInicial, 'minutes');

        // Converte a diferença para horas e minutos
        const horas = Math.floor(diferencaEmMinutos / 60);
        const minutos = diferencaEmMinutos % 60;

        const duration = `${horas}H${minutos}Min`;

        if (edit) {
            api.put('evencomp/activities/update/' + event?.id,
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
                addToast({ title: "Evento editado com sucesso" }, { appearance: "success" })
                goBack()
            }).catch((error) => {
                addToast({ title: "Erro na edição do evento" }, { appearance: "error" })
            })
        } else {
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
    }

    const deleteEvent = () => {
        api.delete(`evencomp/activities/delete/${user.id}/${event?.id}`).then((res) => {
            addToast({ title: "Evento deletado com sucesso" }, { appearance: "success" })
            goBack()
        }).catch((error) => {
            addToast({ title: "Erro ao deletar evento" }, { appearance: "error" })
        })
    }
    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <h1>{edit ? "Edição de evento" : "Criação do evento"}</h1>
                {edit && <MdDelete className="icon-delete" onClick={() => deleteEvent()} />}
            </div>
            <span>Verifique as informações antes de confirmar</span>
            <FormEvent onSubmit={create}>
                <Input placeholder="Titulo" name="title" required defaultValue={event?.title} />
                <Input placeholder="Descrição" name="description" required defaultValue={event?.description} />
                <Input placeholder="Palestrante" name="speaker" defaultValue={event?.speaker} />
                <div style={{ display: "flex", gap: '2rem', justifyContent: "space-between" }}>
                    <Input type="datetime-local" name="dateStart" defaultValue={event?.dateStart ? moment.utc(event?.dateStart).format('YYYY-MM-DDTHH:mm') : "null"} />
                    <Input type="datetime-local" name="dateEnd" defaultValue={event?.dateEnd ? moment.utc(event?.dateEnd).format('YYYY-MM-DDTHH:mm') : "null"} />
                </div>
                <Input placeholder="Localização" name="location" defaultValue={event?.location} />
                <Input placeholder="Categoria" name="category" defaultValue={event?.category} />
                <Input placeholder="Número de participantes" name="subscribersLimit" type="number" defaultValue={event?.subscribersLimit} />

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <SecondaryButton width="174px" height="58px" onClick={() => goBack()} type="reset" text="Voltar" />
                    <PrimaryButton width="174px" height="58px" type="submit" text="Confirmar" />
                </div>
            </FormEvent>
        </Container>
    )
}