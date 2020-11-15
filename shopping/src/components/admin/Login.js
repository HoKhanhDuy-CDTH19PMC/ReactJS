import React, { Component } from 'react'
import { Card
    ,FormGroup,
    Label,
    Form,
    Input,
    Button
} from 'reactstrap'

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Card className="login-page d-flex justify-content-center align-items-center">
            <div className="login-modal">
                <Form>
                         <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Button>Submit</Button>
                </Form>
            </div>
                
                </Card>
            </React.Fragment>
        )
    }
}
