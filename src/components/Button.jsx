const Button = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-red1 to-red2 shadow-button shadow-red3 rounded-xl py-2 px-7 font-semibold text-newWhite">
      {children}
    </button>
  );
};

export default Button;
