import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

export default function ErrorPopup({error, setError}) {

  return (
    <>
      <Modal 
          isOpen={error !== null}
          className="purple-dark text-foreground"
          backdrop="opaque" 
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
      }}>
        <ModalContent>
            <ModalHeader className="flex flex-col gap-1">{error.name}</ModalHeader>
                <ModalBody>
                    {error.message}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onPress={()=>{setError(null);}}>
                    Close
                    </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
