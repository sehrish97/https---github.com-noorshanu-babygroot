import { twMerge } from "tailwind-merge";

function YellowButton({ children, className }) {
  return (
    <button
      className={twMerge(
        "py-3 px-10 rounded-full bg-gradient-to-b from-[#FFD600] to-[#C9A900] shadow-lg shadow-black/40 text-black text-2xl font-bold border border-yellow",
        className
      )}
    >
      {children}
    </button>
  );
}

export default YellowButton;
