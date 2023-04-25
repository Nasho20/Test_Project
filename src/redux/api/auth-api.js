export const apiLogin = async ({ email, password }) => {
  const response = await fetch("https://apingweb.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

export const apiGetUser = async ({ id }) => {
  const response = await fetch(`https://apingweb.com/api/user/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};


//Nuk arrin te kryhet e sakte thirrja e update per nje user normal pasi API ka ndryshuar 
//formatin e userave dhe aktiv eshte vetem admini
export const apiUpdate = async ({ user }) => {
  console.log({ user });
  try {
    const response = await fetch(
      `https://apingweb.com/api/user/edit/${user.user_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          age: user.age,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {}
};
