import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('must be entered'),
  description: Yup.string().required('must be entered'),
  startDate: Yup.string().required('must be entered'),
  endDate: Yup.string().required('must be entered'),
  //category: Yup.string().required('must be entered'),
});

export {taskSchema};
