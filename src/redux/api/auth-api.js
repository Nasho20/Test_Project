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
