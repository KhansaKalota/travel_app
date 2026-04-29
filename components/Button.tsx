import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
};

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full ? "w-full" : ""
      }`}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
        />
      )}

      <span className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </span>
    </button>
  );
};

export default Button;