import logo from "../../assets/images/logoAvalon.png";
import predio from "../../assets/images/predio.png";
import perfil from "../../assets/images/perfil3.png";
import Button from "../Button";

function Header() {
  return (
    <div className="relative w-full">

      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${predio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 max-w-6xl w-full mx-auto">
        <div className="flex-1 text-center md:text-left text-white">
          <img src={logo} alt="Logo Avalon" className="w-32 mb-6 mx-auto md:mx-0" />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transformamos Espaços em Experiências
          </h1>
          <p className="mt-4 text-lg max-w-md">
            Projetos modernos, funcionais e personalizados para cada estilo. Arquitetura com propósito e sofisticação.
          </p>
          <Button />
        </div>

        <div className="flex-1">
          <img
            src={perfil}
            alt="Perfil Profissional"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

