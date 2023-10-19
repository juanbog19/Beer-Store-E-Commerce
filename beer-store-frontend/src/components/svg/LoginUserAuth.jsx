
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/authLoginSlice'; 

export default function LoginUserAuth() {

    const dispatch = useDispatch();
    const authLoading = useSelector((state) => state.authUser.loading);
    const error = useSelector((state) => state.authUser.error);
    
    // Función para manejar el inicio de sesión
    const handleLogin = (email, password) => {
      dispatch(getUser({ email, password }));
    };


  return (
    <div></div>
  )
}












