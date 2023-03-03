import { FormEvent } from "react";
import { BaseButton } from "../../components/BaseButton";
import { Input } from "../../components/Input";
import { FooterContainer, RegisterContainer } from "./styles";
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConnection";

export function Register() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  function handleRegisterWithGoogle(event: FormEvent) {
    event.preventDefault();

    signInWithGoogle()
      .then(() => {
        navigate("/login", { replace: true });
        toast.success("Conta criada com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao criar conta.");
      });
  }

  return (
    <RegisterContainer>
      <div className="container">
        <h2>Cadastre-se</h2>
        <form>
          <div>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Sobrenome" />
          </div>
          <Input type="email" placeholder="E-mail" />
          <Input type="text" placeholder="Senha" />

          <BaseButton>Cadastrar-se ➝ </BaseButton>

          <BaseButton variant onClick={handleRegisterWithGoogle}>
            <FcGoogle size={22} />
            Cadastre-se com Google
          </BaseButton>
        </form>
        <FooterContainer>
          <span>
            Já tem uma conta?<Link to="/login">Faça login</Link>
          </span>
        </FooterContainer>
      </div>
    </RegisterContainer>
  );
}
