import { InputText } from "@primereact/ui/inputtext";
import { IconField } from "@primereact/ui/iconfield";
import { Eye } from "@primeicons/react/eye";
import { Button } from "@primereact/ui/button";

const Login = () => {
  return (
    <div>
      <form>
        <h3>Seja Bem-Vindo!</h3>
        <label htmlFor="email">Email</label>
        <InputText id="email" type="email" placeholder="email@email.com" />

        <label htmlFor="senha">Senha</label>
        <IconField.Root>
          <InputText id="senha" type="password" placeholder="********" />
          <IconField.Inset>
            <Eye />
          </IconField.Inset>
        </IconField.Root>
        <Button type="submit">Entrar</Button>
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
