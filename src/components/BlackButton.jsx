import { twMerge } from "tailwind-merge";

function BlackButton({ children, className }) {
  return (
    <button
      className={twMerge(
        "py-3 px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white text-2xl font-bold border border-white",
        className
      )}
    >
      {children}
    </button>
  );
}

export default BlackButton;
