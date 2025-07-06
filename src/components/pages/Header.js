import logo from "../../assets/images/logoAvalon.png";
import predio from "../../assets/images/predio.png";
import perfil from "../../assets/images/perfil5.png";
import Button from "../Button";

function Header() {
  return (
    <div className="relative w-full pt-4">
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
          <img src={logo} alt="Logo Avalon" className="w-20 mx-auto md:mx-0" />
          <h1 className="text-sm pb-4 text-cyan-700 font-serif font-semibold tracking-wide uppercase">
            Avalon Arquitetura
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Transformamos Espaços em Experiências
          </h2>
          <p className="mt-4 text-lg max-w-md">
            Projetos modernos, funcionais e personalizados para cada estilo.
            Arquitetura com propósito e sofisticação.
          </p>
          <Button text="Solicitar Orçamento"/>
        </div>

        <div className="flex-1">
          <img
            src={perfil}
            alt="Perfil Profissional"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-12 h-12 border-2 bg-gray-200 border-gray-200 rounded-full flex items-center justify-center animate-bounce"></div>
      </div>
    </div>
  );
}

export default Header;
