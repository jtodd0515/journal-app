import axios from "axios";

// registration information posted by user and exported for other parts of application
export const SendRegistration = async (username, password) => {
  try {
    const reply = axios({
      method: "POST",
      url: "/api/user/register",
      data: { username, email, password, name },
    });
    return reply;
  } catch (error) {
    console.log(error);
  }
};
