import { Formik } from 'formik';
import {observer} from 'mobx-react-lite';
import {useStore} from '../store/store';
import Button from 'react-bootstrap/Button';

const AddButton = observer(() => {
  const {taskStore} = useStore();
  const {addTask} = taskStore;

  return (
    <div style={{ marginBottom: 10 }}>
      <Formik
        initialValues={{ name: ''}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addTask(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <Button 
              variant='primary' 
              type="submit" 
              disabled={isSubmitting}
              style={{ marginLeft: 10 }}
            >
              Add Task
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
})

export default AddButton;
