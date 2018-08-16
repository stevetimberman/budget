export const LOGOUT = "LOGOUT"

export const logOutAction = () => {
  localStorage.removeItem('token');
  
  return { type: LOGOUT };
}
