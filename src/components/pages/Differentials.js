import { FaRegLightbulb, FaLeaf, FaHandshake, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const differentials = [
  {
    icon: <FaAward size={48} />,
    title: "Experiência Comprovada",
    description:
      "10 anos entregando projetos arquitetônicos inovadores e sustentáveis.",
  },
  {
    icon: <FaLeaf size={48} />,
    title: "Sustentabilidade",
    description:
      "Projetos que valorizam o meio ambiente e promovem o uso consciente dos recursos.",
  },
  {
    icon: <FaRegLightbulb size={48} />,
    title: "Inovação",
    description:
      "Aplicamos tecnologias modernas para criar espaços funcionais e inteligentes.",
  },
  {
    icon: <FaHandshake size={48} />,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único, adaptamos nossos projetos às suas necessidades e desejos.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

function Differentials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
        Nossos Diferenciais
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {differentials.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            tabIndex={0} 
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center
                       transition-transform duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl
                       focus:outline-none focus:ring-4 focus:ring-cyan-400"
          >
            <div className="mb-6 text-cyan-700 drop-shadow-md">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Differentials;

