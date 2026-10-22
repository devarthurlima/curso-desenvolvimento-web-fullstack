import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tentativa de login com:\nE-mail: ${email}\nSenha: ${senha}`);
  };

  return (
    <div className="login-container">
      <Card title="Entrar na Conta" className="login-card">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o seu e-mail"
            />
          </div>
          <div className="field">
            <label htmlFor="senha">Senha</label>
            <Password
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              toggleMask
              placeholder="Digite a sua senha"
              feedback={false}
            />
          </div>
          <Button type="submit" label="Entrar" />
        </form>
      </Card>
    </div>
  );
};

export default Login;
