import { useState,useEffect } from "react";
import { twMerge } from "tailwind-merge";

const NFTCard = ({ metadata, handleApprove }) => {
   const [loadingApprove, setLoadingApprove] = useState(false);

   const onClickApprove = async () => {
     setLoadingApprove(true); 
     try {
       await handleApprove(metadata);
     } catch (error) {
       setLoadingApprove(false);
       console.error("Error during approval:", error);
       // Optionally, you can display an error message to the user
       toast.error("Error during approval");
     }
     setLoadingApprove(false);

   };
   

   useEffect(()=>{
     console.log(loadingApprove)
   },[loadingApprove])


   return (
     <div className="flex flex-col items-center justify-center w-full px-4 mt-6">
       <img
         src={`${metadata.image.replace("ipfs://bafybeibaqwlsnm7ql3rfvkhhibga7x5onby6ljvffvmppbdxxif4jkroeu", "")}`}
         alt={metadata.name}
         className="block rounded-lg"
         width={200}
         height={200}
         layout="fixed"
       />
       <div className="flex flex-col items-center justify-center w-full mt-2">
         <span className="text-xs">{metadata.name} #{metadata.id}</span>
         <button
           className={twMerge(
             "py-1 px-4 rounded-full bg-gradient-to-b from-[#FFD600] to-[#C9A900] shadow-lg shadow-black/40 text-black text-2xl font-bold border border-yellow",
             "py-1 text-base uppercase justify-center items-center mt-2"
           )}
           onClick={onClickApprove}
        //   disabled={loadingApprove || metadata.approved}
         >
           {loadingApprove ? (
             <div className="flex items-center justify-center">
               <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                 <span className="sr-only">Loading...</span>
               </div>
             </div>
           ) : (
             metadata.approved ? "Approved" : "Approve NFT"
           )}
         </button>

       </div>
     </div>
   );
 };


 export default NFTCard;
