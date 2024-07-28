import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import i18n from "@/app/i18n";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
   const { t } = useTranslation();

  const changeLanguage = (lng : string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div
            className="h-auto w-auto flex flex-row items-center"
        >
          <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          Snake cube
          </span>
          <div className="cursor-pointer ml-[10px] text-gray-300">
          <span onClick={() => {
            changeLanguage('ru')
          }}>
            rus
          </span>/
            <span onClick={() => {
              changeLanguage('en')
            }}>
            eng
          </span>
          </div>
        </div>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div
              className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/about"> {/* Updated path */}
              {t('about')}
            </Link>
            <Link href="/skill">
              {t('skill')}
            </Link>
            <Link href="/project">
              {t('project')}
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
              <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
