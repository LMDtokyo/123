import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col lg:flex-row items-center justify-center gap-8 h-full relative overflow-hidden pb-80 py-20"
    >
      {/* Видео блок */}
      <div className="flex-1 flex justify-center items-center">
        <video
          className="w-full h-auto max-w-[600px] rounded-lg border border-gray-700"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>

      {/* Блок с текстом и кнопкой */}
      <div className="flex-1 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">Our Skills</h2>
        <p className="text-lg mb-6 text-gray-500">
          Explore the range of skills and technologies that we use to deliver
          exceptional projects. Our expertise spans across various domains to
          ensure comprehensive solutions.
        </p>
        <a
          href="#contact"
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Фоновое видео */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
