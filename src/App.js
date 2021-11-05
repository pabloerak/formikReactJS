import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'


const validate = (values) => {
  const errors = {} // creao un objeto errors

  //validacion para el nombre
  if(!values.name){
    errors.name = 'Requerido' //le doy una nueva propiedad con el mismo nombre del campo que estoy validando
  }else if (values.name.length < 5) {
    errors.name = 'El nombre ha de contener más de 4 caracteres'
  }

  //validacion para el apellido
  if(!values.lastname){
    errors.lastname = 'Requerido' //le doy una nueva propiedad con el mismo nombre del campo que estoy validando
  }else if (values.lastname.length < 3) {
    errors.lastname = 'El apellido ha de contener más de 2 caracteres'
  }

  //validacion para el correo
  if(!values.email){
    errors.email = 'Requerido' //le doy una nueva propiedad con el mismo nombre del campo que estoy validando
  }else if (values.email.length < 3) {
    errors.email = 'El correo no es valido'
  }

  if(!values.radio) {
    errors.radio = "Requerido"
  }

  return errors
}

function App() {
  /*la propiedad handleSubmit hay que pasarsela a todos los formularios */
  /*con ...formik.getFieldProps se incluye lo siguiente:
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.name}*/

  //El componente Field de Formik tiene la propiedad as para convertir a otro tipo de elemento el input como un textarea o un selector:
  //<Field name="textarea" as="textarea" />
  //<Field name="select" as="select">
  // <option value="chanchitofeliz">Chanchito feliz</option>
  //</Field>

  return (
    <Formik
      initialValues={{name: '', lastname: '', email: '', chancho: '', radio:'' }}
      validate={validate}
      onSubmit={values => console.log(values)}
      >
        <Form>
          <TextInput name="name" label="Nombre" />
          <br />
          <TextInput name="lastname" label="Apellido" />
          <br />
          <TextInput name="email" label="Correo" />
          <Select label="Tipo de chancho" name="chancho">
            <option value="">Seleccione chancho</option>
            <option value="felipe">Felipe</option>
            <option value="chanchitofeliz">Chanchito feliz</option>
            <option value="chanchitotriste">Chanchito triste</option>
          </Select>
          <Checkbox name="accept">
            Aceptar terminos y condiciones
          </Checkbox>

          <Radio name="radio" value="chanchito1" label="Chanchito 1" />
          <Radio name="radio" value="chanchito2" label="Chanchito 2" />
          <Radio name="radio" value="chanchito3" label="Chanchito 3" />
          <ErrorMessage name="radio" />

          <button type="submit">Enviar</button>
        </Form>
    </Formik>
  );
}

export default App;
