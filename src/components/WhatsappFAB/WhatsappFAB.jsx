import { BsWhatsapp } from "react-icons/bs";

const WhatsappFAB = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=543855037253&text=%C2%A1Hola!%20Vengo%20desde%20tu%20p%C3%A1gina%20y%20tengo%20una%20consulta." target="_blank" className="flex z-[4] fixed  right-3 bottom-3 md:right-[70px] md:bottom-[40px] w-max p-max bg-gray-800 rounded-full hover:scale-110 transition-all">
      <BsWhatsapp className="p-3" color="white" size={50} />
    </a>
  );
};

export default WhatsappFAB;
