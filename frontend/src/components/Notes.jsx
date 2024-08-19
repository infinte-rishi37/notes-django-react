import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from '@nextui-org/react';

function convertDate(dateString) {
    const time = new Date(dateString).toLocaleTimeString();
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${time} | ${day} ${month}, ${year}`;
}

function Note({ note, onDelete }) {
    const formattedDate = convertDate(new Date(note.created_at).toLocaleString("en-US"));

    return (
        <Card className="text-base light bg-yellow-200 w-96">
            <CardHeader className="font-bold">
                {note.title}
            </CardHeader>
            <Divider/>
            <CardBody className="text-sm"> 
                {note.content}
            </CardBody>
            <Divider/>
            <CardFooter className="flex justify-between">
                <div className="text-gray-500 italic text-xs">
                    {formattedDate}
                </div>
                <Button color="danger" onClick={() => onDelete(note.id)} variant="faded">
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Note