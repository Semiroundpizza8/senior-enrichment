import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const POST_STUDENT = 'POST_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const PUT_STUDENT = 'PUT_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const allStudents   = students => ({ type: GET_STUDENTS, students });
const createStudent = student => ({ type: POST_STUDENT, student});
const removeStudent = id => ({ type: DELETE_STUDENT, id });
const updateStudent = student => ({ type: PUT_STUDENT, student });


/* ------------       REDUCERS     ------------------ */

export default function reducer (students = [], action) {
  switch (action.type) {

    case POST_STUDENT:
      return [...students, action.student];

    case GET_STUDENTS:
      return action.students;

    case PUT_STUDENT:
      return students.map(student => ( action.student.id === student.id ? action.student : student ))

    case DELETE_STUDENT:
      return students.filter(student => student.id !== action.id);

    default:
      return students;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const getStudents = () => dispatch => {
  axios.get('/api/student/')
       .then(res => dispatch(allStudents(res.data)))
       .catch(err => console.error('Fetching students unsuccessful', err));
};

export const postStudent = student => dispatch => {
  axios.post('api/student', student)
    .then(res => dispatch(createStudent(res.data)))
    .catch(err => console.error('Posting student unsuccessful', err))
}

export const deleteStudent = id => dispatch => {
  //Optimistic
  dispatch(removeStudent(id));
  axios.delete(`api/student/${id}`)
    .catch(err => console.error('Deleting student unsuccessful', err))
}

export const putStudent = (id, student) => dispatch => {
  axios.put(`api/student/${id}`, student)
    .then(res => {
      dispatch(updateStudent(res.data))
    })
    .catch(err => console.error('Updating student unsuccessful', err))
}