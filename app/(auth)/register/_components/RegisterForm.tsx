import * as yup from "yup";
import FormikInput from "@/components/FormikInput";
import {Form, Formik, FormikValues} from "formik";
import {Button} from "@/components/ui/button";

const RegisterForm = () => {
    const registerSchema = yup.object().shape({
        email: yup.string().email("Please enter valid email").required("Please enter your email"),
    });

    const initialValue = {
        email: ''
    };

    const handleRegister = (value: FormikValues) => {
        console.log()
    }

    return (
        <div className="w-full">
            <Formik
                initialValues={initialValue}
                validationSchema={registerSchema}
                onSubmit={(value) => {
                    handleRegister(value);
                }}
            >
                {({isValid, dirty, isSubmitting}) => (
                    <Form className="w-full flex flex-col gap-4">
                        <FormikInput
                            as="input"
                            name="email"
                            className="w-full border py-1 px-2 rounded-md focus-visible:ring-0"
                            label="Email"
                        />
                        <Button
                            type="submit"
                            className="bg-blue-950"
                            disabled={(!(isValid && dirty) || isSubmitting)}
                        >
                            { isSubmitting ? "Submitting..." : "Register" }
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;