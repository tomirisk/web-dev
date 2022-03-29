import tuits from '../data/tuits.json';

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case 'create-tuit':
      const newTuit = {
        tuit: action.tuit,
        _id: (new Date()).getTime() + '',
        postedBy: {
          username: "ReactJS"
        },
        handle: "ReactJS",
        stats: {
          retuits: 0,
          likes: 0,
          comments: 0
        },
        logo_image: "https://i.postimg.cc/qM11r9Vy/react-png.jpg",
      }
      return [
        newTuit,
        ...state,
      ];

    case 'delete-tuit':
      return state.filter(
          tuit => tuit._id !== action.tuit._id);

    case 'like-tuit':
      return state.map(tuit => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    default:
      return tuits
  }
}
export default tuitsReducer;