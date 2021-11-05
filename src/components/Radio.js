import { useField } from 'formik'
//en componentes RadioButton la validacion se deja fuera,
//ya que si se implementa, habría X mensajes de error por cada X opciones de RadioButton que existan

const Radio = ({ label, ...props }) => {
    const [field] = useField({ ...props, type:'radio' })
    return (
        <div>
            <label>
                <input type="radio" {...field} {...props} />
                {label}            
            </label>
        </div>
    )
}

export default Radio
