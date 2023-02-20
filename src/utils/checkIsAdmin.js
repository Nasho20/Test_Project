const checkIsAdmin = ({ email }) => {
  if (email === "snow@gmail.com") {
    return true;
  }
  return false;
};

export default checkIsAdmin;
