function Button({text}) {
  return (
    <button className="mt-6 px-8 py-3 text-white font-semibold bg-cyan-700 rounded-2xl hover:bg-gray-200 hover:text-cyan-700 transition">
      {text}
    </button>
  );
}

export default Button;
