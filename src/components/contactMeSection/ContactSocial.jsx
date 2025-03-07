import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/ankit-dhiman19?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOXjD0BnDTl%2BoxchVVBfD6Q%3D%3D"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Ankit-dhiman2201"
        Icon={FiGithub}
      />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
