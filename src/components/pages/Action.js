import logo from "../../assets/images/logoAvalon.png";
import predio from "../../assets/images/áreaGourmet.png";
import perfil from "../../assets/images/perfil1.png";
import Button from "../Button";

function Action() {
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
          <h2 className="text-2xl py-4">
            Com mais de 10 anos no mercado, atuamos com excelência em projetos de Arquitetura e Urbanismo.
          </h2>
          <h2 className="text-2xl pb-4">
            Desenvolvemos soluções funcionais, estéticas e sustentáveis para espaços residenciais, comerciais e urbanos.
          </h2>
          <h2 className="text-2xl pb-4">
            Acreditamos que a boa arquitetura transforma vidas e contribui para
            cidades mais humanas, inteligentes e integradas.
          </h2>
          <Button text="Conheça mais sobre nossa história" />
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

export default Action;
