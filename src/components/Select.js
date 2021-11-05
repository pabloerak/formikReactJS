import { useField } from 'formik'

const Select = ({ label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label>
                <select {...field} {...props}/>
                {meta.touched && meta.error ? <div>{meta.error}</div> : null }
            </label>
        </div>
    )
}

export default Select
