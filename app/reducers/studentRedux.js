import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const POST_STUDENT = 'POST_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const allStudents   = students => ({ type: GET_STUDENTS, students });
const createStudent = student => ({ type: POST_STUDENT, student})

/* ------------       REDUCERS     ------------------ */

export default function reducer (students = [], action) {
  switch (action.type) {

    case POST_STUDENT:
      return [...students, action.student];

    case GET_STUDENTS:
      return action.students;

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

export const postStudent = students => dispatch => {
  axios.post('api/student', students)
    .then(res => dispatch(postStudent(res)))
    .catch(err => console.error('Posting student unsuccessful', err))
}