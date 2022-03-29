import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
  switch (action.type) {
    case 'save-profile':
      const updatedProfile = {
        ...state,
        ...action.profile
      }
      return updatedProfile;
    default:
      return profile
  }
}

export default profileReducer;