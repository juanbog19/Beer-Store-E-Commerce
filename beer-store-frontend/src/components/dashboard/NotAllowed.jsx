import { Link } from "react-router-dom";

export default function NotAllowed() {
  return (
    <div className="h-screen flex flex-col items-center justify-center py-2">
      <div className="font-bold text-4xl py-2">
        <p>Usuario no identificado</p>
      </div>
      <div className="bg-primary py-2 w-36 text-center">
        <Link to="/home" className="hover:underline font-medium text-white">
          <h1> REGRESAR A CASA</h1>
        </Link>
      </div>
    </div>
  );
}
