import { useFormik } from 'formik'

//Esta es una de las formas de usar FORMIK (con HOOKS)

const validate = (values) => {
    const errors = {} // creao un objeto errors

    //validacion para el nombre
    if (!values.name) {
        errors.name = 'Requerido' //le doy una nueva propiedad con el mismo nombre del campo que estoy validando
    } else if (values.name.length < 5) {
        errors.name = 'El nombre ha de contener más de 4 caracteres'
    }

    //validacion para el apellido
    if (!values.lastname) {
        errors.lastname = 'Requerido' //le doy una nueva propiedad con el mismo nombre del campo que estoy validando
    } else if (values.lastname.length < 3) {
        errors.lastname = 'El apellido ha de contener más de 2 caracteres'
    }

    //validacion para el correo
    if (!values.email) {
        errors.email = 'Requerido' //le doy una nueva propiedad con el mismo nombre del campo que estoy validando
    } else if (values.email.length < 3) {
        errors.email = 'El correo no es valido'
    }

    return errors
}

function App() {
    const formik = useFormik({//hace el e.preventDefault() automaticamente
        initialValues: {//parecido al useState
            name: '',
            lastname: '',
            email: '',
        },
        validate,
        onSubmit: values => console.log(values) //en esta propiedad recibiremos los valores de los campos
    })
    /*la propiedad handleSubmit hay que pasarsela a todos los formularios */
    /*con ...formik.getFieldProps se incluye lo siguiente:
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.name}*/
    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Nombre</label>
            <input type='text' {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <br />

            <label>Apellido</label>
            <input type='text' {...formik.getFieldProps('lastname')} />
            {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
            <br />

            <label>Correo</label>
            <input type='email' {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button type="submit">Enviar</button>
        </form>
    );
}

export default App;