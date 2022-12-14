import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../../images/icons/google.png';
import facebook from '../../../images/icons/fb.png';

const SignUp = () => {
    return (
        <div>
            <div style={{ width: '500px' }} className='mt-5 mb-3 mx-auto p-4 border rounded shadow-md'>
                <h2>Create an account</h2>
                <Form className='w-100 mx-auto'>
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="first-name" placeholder="First Name" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="last-name" placeholder="Last Name" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="email" placeholder="Username or Email" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="password" placeholder="Password" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="confirm-password" placeholder="Confirm Password" required />
                    <Button className='rounded-0 w-100 fw-semibold my-2' variant="warning" type="submit">
                        Create an account
                    </Button>
                    <p className='mt-2 fw-semibold'>Already have an account? <Link className='text-warning fw-normal' to='/signIn'>Login</Link></p>
                </Form>
            </div>
            <div style={{ width: '500px' }} className='mx-auto mb-5 px-5'>
                <div className='d-flex align-items-center justify-content-center my-4'>
                    <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
                    <span className='mx-2'>Or</span>
                    <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
                </div>
                <div className='container p-0'>
                    <button type="button"
                        style={{ borderColor: 'lightgray' }}
                        class="m-0 px-0 d-flex align-items-center row btn btn-outline-secondary w-100 rounded-pill">
                        <img className='col-2' src={google} width='30' alt="" />
                        <span className='col-10 fw-semibold fs-5'>Continue with Google</span>
                    </button>
                    <button type="button"
                        style={{ borderColor: 'lightgray' }}
                        class="m-0 mt-2 px-0 d-flex align-items-center row btn btn-outline-secondary w-100 rounded-pill">
                        <img className='col-2' src={facebook} width='30' alt="" />
                        <span className='col-10 fw-semibold fs-5'>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;