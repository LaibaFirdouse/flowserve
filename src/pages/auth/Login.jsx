import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      id: 1,
      email: "user@test.com",
      role: "user"
    });
    navigate("/app/services");
  };
// const handleLogin = () => {
//   login({
//     id: 1,
//     email: "provider@test.com",
//     role: "provider"   // 👈 THIS IS THE KEY
//   });
//   navigate("/provider/pricing-engine");
// };
// const handleLogin = () => {
//   console.log("LOGIN CLICKED");

//   const user = {
//     id: 1,
//     email: "provider@test.com",
//     role: "provider"
//   };

//   console.log("SETTING USER:", user);

//   login(user);
//   navigate("/provider/pricing-engine");
// };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleLogin}>Login as User</button>
    </div>
  );
}
