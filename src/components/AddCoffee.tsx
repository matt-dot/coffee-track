// /** Here we establish the SPA frontend and the date to send to the backend */
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as React from 'react';
import '../styles/AddCoffee.css'

export interface CoffeeData {
    type: 'espresso' | 'americano' | 'latte' | ''
    rating: 'good' | 'medium' | 'bad' | '',
}
// Use formik to handle forms
const CoffeeComponent = () => {
    return (
        <div className='coffee-div'>
            <h1>Enter your coffee stuff</h1>
            <Formik
                initialValues={{ type: '', rating: '' }}
                onSubmit={(
                    values: CoffeeData,
                    { setSubmitting }: FormikHelpers<CoffeeData>
                ) => {
                    // Call a nice function to submit the data
                    // Could we use an RPC interface here.
                    // Pass in the data which calls a function in the backend
                }}
            >
                <Form>
                    <label className='label' htmlFor='type'>Type</label>
                    <Field id='type' name='type' placeholder='espresso'></Field>
                    <label className='label' htmlFor='rating'>Rating</label>
                    <Field id='rating' name='rating' placeholder='medium'></Field>
                    <button className='button' type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>

    );
};

export default CoffeeComponent;