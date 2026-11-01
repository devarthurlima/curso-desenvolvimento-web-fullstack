import { useState } from "react";

export function FeedbackForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  return (
    <form>
      <h2>Formulário de Feedback</h2>

      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          placeholder="Seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="comentario">Comentário:</label>
        <textarea
          id="comentario"
          rows="4"
          placeholder="Escreva seu feedback aqui..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
