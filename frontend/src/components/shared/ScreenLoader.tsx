export const ScreenLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
      <div className="absolute inset-0 pointer-events-auto"></div>{" "}
      {/* This blocks interactions */}
      <div className="relative w-auto p-6 text-black z-10 gap-2 flex flex-col">
        <div className="w-10 h-10 border-4 border-white-500 border-t-transparent rounded-full animate-spin ml-[21px]" />
        <div className="font-bold">Please wait...</div>
      </div>
    </div>
  );
};
