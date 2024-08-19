import {useState, useEffect} from 'react'
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Textarea} from '@nextui-org/react';
import Note from "../components/Notes"
import api from '../api'
import ErrorPopup from '../components/error'

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error !== null) {
            const timer = setTimeout(() => {
                setError(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get('api/notes/')
            .then((res) => res.data)
            .then((data) => {setNotes(data); console.log(data)})
            .catch((err) => alert(err))
    }

    const deleteNote = (id) => {
        api
            .delete(`api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    setError({name: 'Success', message: 'Note deleted!'});
                    getNotes();
                } else {
                    setError({name: 'Failed', message: 'Note not deleted!'});
                }
            })
            .catch((err) => alert(err))
    }
    
    const createNote = (e) => {
        e.preventDefault();
        api
            .post('api/notes/', {title: title, content: content})
            .then((res) => {
                if (res.status === 201) {
                    setError({name: 'Success', message: 'Note created!'});
                    getNotes();
                } else {
                    setError({name: 'Failed', message: 'Failed to Create Note!'});
                }
            })
            .catch((err) => alert(err))
    }

    return (
        <div className="text-xl px-10 mx-10 text-center">
            {error != null && <ErrorPopup error = {error} setError = {setError} />}
            <div className='pb-10'>
                <h2 className='font-bold py-5 flex-wrap'> Your Notes </h2>
                <div className='flex justify-evenly gap-4'>
                    {notes.map((note) => (
                        <Note note={note} onDelete={deleteNote} key={note.id} />
                    ))}
                </div>
            </div>
            <Divider/>
            <div>
                <h2 className='font-bold py-5'> Create New Note </h2>
                <Card className="text-base light bg-blue-400 w-full">
                    <CardHeader className="font-bold">
                        <Input
                            key='heading'
                            type="text"
                            required
                            id='title'
                            label="Title"
                            labelPlacement="outside"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </CardHeader>
                    <Divider/>
                    <CardBody className="text-sm"> 
                        <Textarea
                            key='content'
                            placeholder="Type your thoughts here"
                            name="content"
                            id="content" 
                            value = {content} required 
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </CardBody>
                    <CardFooter>
                        <Button onClick={createNote} color='primary'>
                            <b>
                                Create
                            </b>
                    </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Home