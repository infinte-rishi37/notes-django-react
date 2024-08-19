import React from "react";
import { useNavigate } from "react-router-dom";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
import NotesLogo from '../../public/notes.svg'

export default function Header() {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    return (
        <Navbar>
            <NavbarBrand className="gap-1">
                <Image src = {NotesLogo} height={40} isBlurred className="bg-foreground bg-opacity-30 rounded"/>
                <p className="font-bold text-inherit"> Notes App</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/* <NavbarItem isActive>
                <Link href="#" aria-current="page">
                    Home
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link href="/login" color="foreground">
                    Add Note
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#">
                    Integrations
                </Link>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                <Link onClick={() => handleNavigate('/login')}>Login</Link>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} color="primary" onPress={() => handleNavigate('/register')} variant="flat">
                    Create Account
                </Button>
                </NavbarItem> */}
            </NavbarContent>
        </Navbar>
    );
}
