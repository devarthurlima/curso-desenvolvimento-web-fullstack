import { useState } from "react";

export function FeedbackForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !comentario.trim()) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    alert(
      `Feedback enviado com sucesso!\n\n` +
        `Nome: ${nome}\n` +
        `E-mail: ${email}\n` +
        `Comentário: ${comentario}`,
    );

    setNome("");
    setEmail("");
    setComentario("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
