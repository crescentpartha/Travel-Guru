import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header2 from '../../SharedPages/Header2/Header2';

const SignIn = () => {
    return (
        <div>
            <Header2></Header2>
            <div style={{margin: '0 25%'}} className='my-5 p-4 border rounded shadow-md'>
                <h2>Login</h2>
                <Form className='w-100 mx-auto'>
                    <Form.Control className='my-2 border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="email" placeholder="Enter email" required />
                    <Form.Control className='my-2 border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="password" placeholder="Password" required />
                    <div className='d-flex align-items-center justify-content-between my-3'>
                        <Form.Check className='text-start' type="checkbox" label="Check me out" />
                        <Link className='text-warning' to='/'>Forget Password</Link>
                    </div>
                    <Button className='w-100' variant="warning" type="submit">
                        Submit
                    </Button>
                    <p className='my-2'>Don't have an account? <Link className='text-warning' to='/'>Create an account</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;