import $ from "jquery";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogIn } from "../../features/user/loggedUserSlice";
import { auth } from "../../firebase/config";

const FbLogin = () => {
  const notify = (error) => toast.error(`${error}`);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(userLogIn(userCredentials.user.email));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login($("#loginMail").val(), $("#loginPass").val());

      navigate("/fbdash");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        notify("Usuario erróneo");
      } else if (error.code === "auth/wrong-password") {
        notify("Contraseña incorrecta");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-slate-800 p-14 text-white flex flex-col gap-4 rounded-lg"
        onSubmit={handleLogin}
      >
        <h2 className="text-center text-3xl font-bold underline">
          Iniciar sesión
        </h2>
        <div className="flex flex-col">
          <label htmlFor="loginMail">Email</label>
          <input
            type="email"
            name="loginMail"
            id="loginMail"
            className="bg-transparent pt-1 border-b"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="loginPass">Contraseña</label>
          <input
            type="password"
            name="loginPass"
            id="loginPass"
            className="bg-transparent pt-1 border-b"
          />
        </div>
        <button className="py-2 px-4 bg-gray-50 hover:bg-gray-300 transition-all text-slate-800 rounded-lg">
          Iniciar sesión
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default FbLogin;
