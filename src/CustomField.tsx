import { TextField } from "@material-ui/core"
import { FieldProps } from "formik"
import { TextFieldProps } from "material-ui"

interface Props extends FieldProps, TextFieldProps {
    label: string;
    type: string;
}

export const CustomField: React.FC<FieldProps & TextFieldProps & Props> = ({ label, placeholder, type, field }) => {
    return <TextField
        {...field}
        label={label}
        type={type}
        placeholder={placeholder} />
}