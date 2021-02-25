import { Button } from "@material-ui/core"
import { Form, Formik, Field } from 'formik'
import * as React from 'react'
import { CustomField } from "./CustomField"

interface Values {
    firstName: String,
    lastName: String,
    email: String,
    password: String
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const DefaultForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }}
            onSubmit={(values) => {
                onSubmit(values)
            }}>
            {({ values }) =>
                <Form>
                    <div>
                        <Field
                            component={CustomField}
                            name='firstName'
                            label='First Name: ' />
                    </div>
                    <div>
                        <Field
                            component={CustomField}
                            name='lastName'
                            label='Last Name: ' />
                    </div>
                    <div>
                        <Field
                            component={CustomField}
                            type='email'
                            name='email'
                            label='Email: ' />
                    </div>
                    <div>
                        <Field
                            type="password"
                            component={CustomField}
                            name='password'
                            label='Password: ' />
                    </div>
                    <Button type="submit">Submit</Button>

                    <pre>
                        {JSON.stringify(values, null, 2)}
                    </pre>
                </Form>
            }
        </Formik>
    )

}

