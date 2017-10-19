import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const POST_CAMPUS = 'POST_CAMPUS';
const PUT_CAMPUS = 'PUT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const allCampuses   = campuses => ({ type: GET_CAMPUSES, campuses });
const createCampus  = campus => ({ type: POST_CAMPUS, campus });
const updateCampus = campus => ({ type: PUT_CAMPUS, campus });
const removeCampus = campus => ({ type: DELETE_CAMPUS, id });

/* ------------       REDUCERS     ------------------ */

export default function reducer ( campuses = [], action) {
  switch (action.type) {

    case POST_CAMPUS:
      return [...campuses, action.campus];

    case GET_CAMPUSES:
      console.log("Campuses", action.campuses);
      return action.campuses;

    case PUT_CAMPUS:
      return action.campus;

    case DELETE_CAMPUS:
      return campuses.filter(campus => campus.id !== id);

    default:
      return campuses;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const getCampuses = () => dispatch => {
  axios.get('/api/campus/')
       .then(res => dispatch(allCampuses(res.data)))
       .catch(err => console.error('Fetching students unsuccessful', err));
};

export const postCampus = campuses => dispatch => {
  axios.post('api/student', campuses)
    .then(res => dispatch(createCampus(res.data)))
    .catch(err => console.error('Posting student unsuccessful', err))
}

export const putCampus = (id, update) => dispatch => {
  axios.post(`api/student/${id}`, update)
    .then(res => dispatch(updateCampus(res.data)))
    .catch(err => console.error('Updating student unsuccessful', err))
}

export const deleteCampus = id => dispatch => {
  axios.delete(`api/students/${id}`)
    .then(res => dispatch(removeCampus(res.data)))
    .catch(err => console.error('Removing student unsuccessful', err))
}