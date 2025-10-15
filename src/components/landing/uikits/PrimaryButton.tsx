type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  btnType?: "PRIMARY" | "SECONDARY" | "DANGER" | "DEFAULT";
};

const PrimaryButton = ({
  title,
  onClick,
  className,
  disabled,
  leftIcon,
  rightIcon,
  btnType = "PRIMARY",
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        btnType === "PRIMARY"
          ? "bg-[#10793F]"
          : btnType === "DANGER"
          ? "bg-[#FF0000]"
          : btnType === "SECONDARY"
          ? "bg-[#1E1E1E]"
          : "bg-transparent"
      } flex items-center gap-[10px] md:gap-[5px] text-sm px-12 py-3 rounded-[15px] text-white transition-colors duration-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 cursor-pointer ${className}`}
    >
      {leftIcon && leftIcon}
      {title}
      {rightIcon && rightIcon}
    </button>
  );
};

export default PrimaryButton;
