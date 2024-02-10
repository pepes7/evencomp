import { useHistory, useLocation } from 'react-router-dom'
import { Container, ControlMenu, Menu, Nav } from './style'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";

const NavBar = (props: any) => {
    const { routes: options } = props
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const { push } = useHistory()

    return (
        <Container open={open}>
            <Menu open={open}>
                <ControlMenu
                    id={'nav-link'}
                >
                    <div className="text">EvenComp</div>
                    <IoMenuOutline className="icon" onClick={() => setOpen(!open)}/>
                </ControlMenu>

                {options.map(
                    (
                        {
                            url,
                            Icon,
                            text,
                        }: any,
                        key: string
                    ) => {
                        return (
                            <div className="item-menu" key={key}>
                                <Nav
                                    id={'nav-link' + key}
                                    onClick={() => push(url)}
                                    className={url == pathname ? 'actived' : ''}
                                >
                                    <Icon className="icon" />
                                    <div className="text">{text}</div>
                                </Nav>

                                {!open && <ReactTooltip
                                    anchorId={'nav-link' + key}
                                    place="top"
                                    content={text}
                                    style={{ zIndex: 200 }}
                                />}
                            </div>
                        )
                    }
                )}
            </Menu>
        </Container>
    )
}

export default NavBar
