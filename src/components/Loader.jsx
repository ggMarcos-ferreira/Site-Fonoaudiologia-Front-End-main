const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
    <div className="flex flex-col items-center">
      {/* Animação de loading */}
      <div className="cyclical"></div> {/* Aplicando a animação de rotação e crescimento */}
      {/* Texto de loading */}
      <p className="text-xl font-semibold text-gray-700 text-center animate-pulse">
        Tenha paciência pois tudo que é bom demora!
      </p>
    </div>
  </div>
  );
};

export default Loader;
