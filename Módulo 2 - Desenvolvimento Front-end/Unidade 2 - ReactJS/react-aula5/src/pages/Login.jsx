import { InputText } from "@primereact/ui/inputtext";
import { IconField } from "@primereact/ui/iconfield";
import { Eye } from "@primeicons/react/eye";
import { EyeSlash } from "@primeicons/react/eye-slash";
import { Button } from "@primereact/ui/button";
import { useState } from "react";

const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="bg-primary-500 h-screen flex align-items-center justify-content-center px-3">
      <form className="col-12 md:col-3 surface-0 p-3 border-round">
        <h3 className="text-center text-xl">Seja Bem-Vindo!</h3>
        <label
          htmlFor="email"
          className="block uppercase font-bold text-sm mb-2"
        >
          Email
        </label>
        <InputText
          id="email"
          type="email"
          placeholder="email@email.com"
          className="mb-3 w-full"
        />

        <label
          htmlFor="senha"
          className="block uppercase font-bold text-sm mb-2"
        >
          Senha
        </label>
        <div className="mb-3">
          <IconField.Root>
            <InputText
              id="senha"
              type={mostrarSenha ? "text" : "password"}
              placeholder="********"
              className="w-full"
            />
            <IconField.Inset>
              {mostrarSenha ? (
                <Eye
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <EyeSlash
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </IconField.Inset>
          </IconField.Root>
        </div>

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;

// import { InputText } from "primereact/inputtext";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import "primeicons/primeicons.css";

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <label htmlFor="email">Email</label>
//         <InputText id="email" type="email" placeholder="email@email.com" />

//         <label htmlFor="senha">Senha</label>
//         <IconField iconPosition="right">
//           <InputIcon className="pi pi-eye" />
//           <InputText id="senha" type="password" placeholder="********" />
//         </IconField>
//       </form>
//     </div>
//   );
// };

// export default Login;
