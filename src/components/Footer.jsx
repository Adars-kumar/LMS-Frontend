import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between sm:px-20 text-white bg-gray-800">
      <section className="text-lg">
        Copyright {year} | All right reserved
      </section>

      <section className="flex items-center justify-center gap-5 text-2xl text-white">
        <a href="#">
          <BsFacebook className="hover:text-yellow-500 transition-all ease-in-out duration-300" />
        </a>
        <a href="#">
          <BsInstagram className="hover:text-yellow-500 transition-all ease-in-out duration-300" />
        </a>
        <a href="#">
          <BsLinkedin className="hover:text-yellow-500 transition-all ease-in-out duration-300" />
        </a>
        <a href="#">
          <BsTwitter className="hover:text-yellow-500 transition-all ease-in-out duration-300" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
