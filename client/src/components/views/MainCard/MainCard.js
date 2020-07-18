import React from 'react'
import { Card, CardText, Button, InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label } from 'reactstrap'

function MainCard() {
    return (
        <div>
            <h1>Wanna Chat?</h1>
            <Card className="main__card">
                <InputGroup>
                    <Label for="chatRoomSelect">Username</Label>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="username" />
                </InputGroup>
                <FormGroup>
                    <Label for="chatRoomSelect">Room</Label>
                    <Input type="select" name="select" id="chatRoomSelect">
                        <option>JavaScript</option>
                        <option>Python</option>
                        <option>Java</option>
                    </Input>
                </FormGroup>
                <Button>Join</Button>
            </Card>
        </div>
    )
}

export default MainCard
