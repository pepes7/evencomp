import { Button, SecondaryBtn } from "./style"

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    text: string
    width?: string
    height?: string
}

export function PrimaryButton(props: ButtonProps) {
    const { children } = props

    return (
        <Button
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
            {...props}
        >
            {children ? children : props.text}
        </Button>
    )
}

export function SecondaryButton(props: ButtonProps) {
    const { children } = props

    return ( 
        <SecondaryBtn
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
            {...props}
        >
            {children ? children : props.text}
        </SecondaryBtn>
    )
}
