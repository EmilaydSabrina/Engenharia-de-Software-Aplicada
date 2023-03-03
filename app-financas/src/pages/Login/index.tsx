import { FooterContainer, HomeContainer } from "./styles";
import { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { FcGoogle } from "react-icons/fc";
import { BaseButton } from "../../components/BaseButton";

import { toast } from "react-toastify";

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConnection";

import Logo from "../../assets/money-bag.svg";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  function handleSignInWithEmailAndPassword(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      toast.warning("Por favor, preencha todos os campos.");
      return;
    }

    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/", { replace: true });
        toast.success("Bem vindo de volta =)");
      })
      .catch(() => {
        console.log("chegou aqui");
        alert("deu erro");
      });
  }

  function handleLoginWithGoogle(event: FormEvent) {
    event.preventDefault();

    signInWithGoogle()
      .then(() => {
        navigate("/", { replace: true });
        toast.success("Bem vindo de volta =)");
      })
      .catch(() => {
        toast.error("Erro ao tentar fazer login!");
      });
  }

  function handleAddEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleAddPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <HomeContainer>
      <div className="container">
        <img src={Logo} />
        <form>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={handleAddEmail}
          />
          <Input
            type="password"
            placeholder="**********"
            value={password}
            onChange={handleAddPassword}
          />

          <BaseButton type="submit" onClick={handleSignInWithEmailAndPassword}>
            Login
          </BaseButton>

          <BaseButton variant onClick={handleLoginWithGoogle}>
            <FcGoogle size={22} />
            Fazer login com o Google
          </BaseButton>
        </form>

        <FooterContainer>
          <span>
            Não tem uma conta?<Link to="/register">Registre-se</Link>
          </span>
        </FooterContainer>
      </div>
    </HomeContainer>
  );
}
