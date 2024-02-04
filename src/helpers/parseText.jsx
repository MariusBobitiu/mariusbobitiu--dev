export const parseAndStyleText = (text) => {
   // Split text by markers
   const regex = /{([^}]+)}/g; // Matches text within {}
   let parts = text.split(regex);
 
   return parts.map((part, index) => {
     if (index % 2 === 1) { // Odd parts are the marked ones
       return <span key={index} className="color">{part}</span>;
     } else {
       return part; // Even parts are regular text
     }
   });
 };