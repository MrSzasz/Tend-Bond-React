import FooterCard from "../FooterCard/FooterCard";
import "./Footer.scss";

import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import Divider from "../Divider/Divider";

const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-3 pt-2 text-center bg-tbGray font-tbCaps">
      <h4 className="font-bold text-lg">CONTACTATE CON NOSOTROS</h4>
      <div className="flex lg:gap-6 justify-center p-6 py-6">
        <FooterCard name={"Whatsapp"} data={"+54 9 3855 03-7253"} link="https://wa.me/+5493855037253">
          <IoLogoWhatsapp color="#F48F4A" size={30} />
        </FooterCard>
        <Divider/>
        <FooterCard name={"Instagram"} data={"@trendbond"} link="https://instagram.com/trendbond?igshid=NzNkNDdiOGI=">
          <AiFillInstagram color="#F48F4A" size={30} />
        </FooterCard>
        <Divider/>
        <FooterCard name={"Mail"} data={"trendbondarg@gmail.com"} link={"mailto:trendbondarg@gmail.com?subject=Trend%20Bond"}>
          <IoMdMail color="#F48F4A" size={30} />
        </FooterCard>
        <Divider/>
        <FooterCard name={"Twitter"} data={"@TrendBondArg"} link="https://twitter.com/trendbondarg?s=21&t=BcUUqxx0o7lKL5Ei3ezbtA">
          <BsTwitter color="#F48F4A" size={30} />
        </FooterCard>
      </div>
      <div className="bg-tbMain text-white">
        <a href="https://linktr.ee/trendbonddesignteam" target="_blank">Links</a>
      </div>
    </footer>
  );
};

export default Footer;
