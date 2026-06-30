export const validateAndLogin = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  if (!normalizedEmail || !normalizedPassword) {
    return { success: false, error: "Please fill in all fields." };
  }

  if (!emailRegex.test(normalizedEmail)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const savedUserData = localStorage.getItem("registeredUser");

  if (!savedUserData) {
    return {
      success: false,
      error: "No registration profile found. Please register first.",
    };
  }

  const registeredUser = JSON.parse(savedUserData);

  if (
    normalizedEmail === registeredUser.email &&
    normalizedPassword === registeredUser.password
  ) {
    return { success: true };
  } else {
    return { success: false, error: "Invalid email or password." };
  }
};
