import FooterCard from "../FooterCard/FooterCard";
import "./Footer.scss";

import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import Divider from "../Divider/Divider";

const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-3 p-2 text-center bg-tbGray font-tbCaps">
      <h4>CONTACTAME CON NOSOTROS</h4>
      <div className="flex gap-12 justify-center">
        <FooterCard name={"Whatsapp"} data={1133225544}>
          <IoLogoWhatsapp color="#F48F4A" size={30} />
        </FooterCard>
        <Divider/>
        <FooterCard name={"Instagram"} data={"@Instagram"}>
          <AiFillInstagram color="#F48F4A" size={30} />
        </FooterCard>
        <Divider/>
        <FooterCard name={"Mail"} data={"mail@trendbond.com"}>
          <IoMdMail color="#F48F4A" size={30} />
        </FooterCard>
        <Divider/>
        <FooterCard name={"Twitter"} data={"@twitter"}>
          <BsTwitter color="#F48F4A" size={30} />
        </FooterCard>
      </div>
      <div className="bg-tbMain text-white">
        <a>links</a>
      </div>
    </footer>
  );
};

export default Footer;
