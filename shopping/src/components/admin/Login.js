import React, { Component } from 'react'
import { Card
    ,FormGroup,
    Label,
    Form,
    Input,
    Button
} from 'reactstrap'
import Axios from 'axios'
import Swal from 'sweetalert2'
export default class Login extends Component {
    state={
        email:"",
        password:""
    }
    componentDidMount()
    {
        const token=window.localStorage.getItem('admin_token');
        if(token)
        {
            this.props.history.push('/admin')
        }
    }
    handleChange=(event)=>
    {
    this.setState({
        [event.target.name]:event.target.value
    })
    }
    handleLogin=(event)=>
    {
        event.preventDefault()
        Axios.post('https://shopping-api-with-jwt.herokuapp.com/login',{
           ...this.state
        }).then((res)=>
        {
            console.log(res)
            const token=res.data;
            window.localStorage.setItem('admin_token',token);
            Swal.fire({
                title:"Login Success",
                timer:1700,
                icon:'success'
            }).then(()=>{
                this.props.history.push('/admin')
            })
        }).catch((err)=>{
            console.log(err)
            Swal.fire({
                title:"Login Unsuccesfully",
                timer:1700,
                icon:'error'
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Card className="login-page d-flex justify-content-center align-items-center">
            <div className="login-modal">
                <Form onSubmit={this.handleLogin}>
                         <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange}
                                placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" onChange={this.handleChange}
                                placeholder="password placeholder" />
                        </FormGroup>
                        <Button>Submit</Button>
                </Form>
            </div>
                
                </Card>
            </React.Fragment>
        )
    }
}
