import CheckIcon from "../assets/icon/check.svg";

const ChecklistItem = ({ text, hidden }) => {
  return (
    <span className={`flex items-center gap-x-3`}>
      <img className={`${hidden ? 'opacity-0' : 'block'}`} src={CheckIcon} alt="check" />
      <p className={`${hidden ? 'text-[#ABACAF] font-light' : 'text-newWhite'}`}>{text}</p>
    </span>
  );
};

export default ChecklistItem;