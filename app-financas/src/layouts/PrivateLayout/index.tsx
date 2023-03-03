import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";

export function PrivateLayout() {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
          };

          localStorage.setItem("@detailUser", JSON.stringify(userData));
          setLoading(false);
          setSigned(true);
        } else {
          setLoading(false);
          setSigned(false);
        }
      });
    }

    checkLogin();
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
