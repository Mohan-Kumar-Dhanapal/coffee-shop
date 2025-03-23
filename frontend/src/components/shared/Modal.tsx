const Modal = ({ children }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
      <div className="absolute inset-0 pointer-events-auto"></div>{" "}
      {/* This blocks interactions */}
      <div className="relative w-auto p-6 rounded-lg shadow-lg text-black bg-white z-10 gap-2 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Modal;
