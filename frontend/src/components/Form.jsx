import {useEffect, useState} from 'react'
import api from '../api';
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import { Input, Card, Divider, CardHeader, CardFooter, Button, CardBody} from '@nextui-org/react';
import ErrorPopup from './error';

export default function Form({route, method}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    useEffect(() => {
        if (error !== null) {
            const timer = setTimeout(() => {
                setError(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (err) {
            setError(err)
            console.log(err)
            if (err.response.data.password[0] != null) {
                setDescPassword(err.response.data.password[0]);
            }
            if (err.response.data.username[0] != null) {
                setDescUsername(err.response.data.username[0]);
            }
        } finally {
            setLoading(false)
        }
    };

    const name = method === 'login' ? "Login" : "Register"
    const [descUsername, setDescUsername] = useState(`${method === 'login' ? "Enter" : "Choose"} your Username`)
    const [descPassword, setDescPassword] = useState(`${method === 'login' ? "Enter" : "Choose"} your Password`)

    return(
        <div className='p-20 flex justify-center content-center'>
            <Card className='min-w-[400px]'>
                {error !== null && <ErrorPopup error = {error} setError = {setError}/>}
                <CardHeader className='font-bold'>
                    {name}
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Input
                        key = '1'
                        type="text"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        labelPlacement="outside"
                        description={descUsername}
                    />
                    <Input
                        key = '2'
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        labelPlacement="outside"
                        description={descPassword}
                    />
                </CardBody>
                <Divider/>
                <CardFooter>
                    <Button
                        type="submit"
                        isLoading = {Loading}
                        color= {Loading ? "secondary" : "primary"}
                        className='w-full'
                        onClick = {handleSubmit}
                        radius='full'
                        variant='shadow'
                    >
                        {name}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}