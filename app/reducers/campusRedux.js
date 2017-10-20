import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const POST_CAMPUS = 'POST_CAMPUS';
const PUT_CAMPUS = 'PUT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const allCampuses   = campuses => ({ type: GET_CAMPUSES, campuses });
const createCampus  = campus => ({ type: POST_CAMPUS, campus });
const updateCampus = campus => ({ type: PUT_CAMPUS, update });
const removeCampus = id => ({ type: DELETE_CAMPUS, id });

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
      console.log("Campus being deleted");
      return campuses.filter(campus => campus.id !== action.id);

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
  axios.post('api/campus', campuses)
    .then(res => dispatch(createCampus(res.data)))
    .catch(err => console.error('Posting student unsuccessful', err))
}

export const putCampus = (id, campus) => dispatch => {
  axios.post(`api/campus/${id}`, campus)
    .then(res => dispatch(updateCampus(res.data)))
    .catch(err => console.error(`Updating student ${campus} unsuccessful`, err))
}

export const deleteCampus = id => dispatch => {
  dispatch(removeCampus(id));
  axios.delete(`api/campus/${id}`)
    .catch(err => console.error('Removing campus unsuccessful', err))
}