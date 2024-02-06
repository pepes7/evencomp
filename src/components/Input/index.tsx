import { AppInput } from './style'


interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    height?: number
    width?: number
}

export function Input(props: InputProps) {
    const { ...rest } = props

    return (
        <AppInput
            width={props.width}
            {...rest}
        />
    )
}