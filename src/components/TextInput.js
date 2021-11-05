import { useField } from 'formik'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    console.log({ field, meta })
    //en el input se puede hacer el destructuring de las props también en el caso de querer cambiar el metodo onChange por ejemplo
    return (
        <div className="control">
            <label className="label">{label}</label>
            <input className="input" {...field} {...props} />
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </div>
    )
}

export default TextInput
