"use client";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    const slideInFromLeft = (duration = 1) => ({
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration } },
    });

    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                {/* Первая секция */}
                <section className="relative w-full h-[500px] overflow-hidden">
                    <div className="absolute inset-0 z-10">
                        <img
                            src="/fon2.jpg" // Замените на путь к вашему изображению
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 z-20">
                        <div className="starry-background"></div> {/* Ваш звездный фон */}
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-30" style={{ marginTop: '50px' }}>
                        {/* Заглавный текст */}
                        <h1 className="text-3xl font-extrabold relative mb-4 text-black border-2 border-black p-2 rounded-lg animate-glow">
                            {Array.from("Заглавный текст").map((letter, index) => (
                                <span
                                    key={index}
                                    className="animate-flicker"
                                    style={{
                                        textShadow: `0 0 5px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 0, 0, 0.4)`,
                                        color: 'black'
                                    }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </h1>
                        {/* Мелкий текст */}
                        <p className="text-lg font-bold text-black mb-6 animate-glow" style={{
                            textShadow: `0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)`
                        }}>Мелкий текст под заглавным</p>
                        {/* Кнопка */}
                        <motion.a
                            href="#"
                            variants={slideInFromLeft(1)}
                            initial="hidden"
                            animate="show"
                            className="py-2 px-6 rounded-lg text-white cursor-pointer border border-[#8e44ad] border-opacity-20 hover:bg-[#8e44ad] hover:text-white transition duration-300 ease-in-out mt-8 animate-glow"
                            style={{
                                background: 'linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.32) 100%), rgba(113, 47, 255, 0.12)',
                                boxShadow: 'inset 0 0 12px #bf97ff3d',
                            }}
                        >
                            Нажми на меня
                        </motion.a>
                    </div>
                </section>

                {/* Вторая секция */}
                <section className="flex flex-col items-center text-center gap-8 py-20">
                    <video
                        className="w-full max-w-[400px] h-auto rounded-lg border border-gray-700"
                        preload="auto"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/gif.mp4" // Замените на путь к вашему видео
                    />
                    <div className="flex flex-col items-center gap-8 mt-8">
                        <h2 className="text-4xl font-extrabold text-white" style={{ fontFamily: "'GalacticFont', sans-serif" }}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e44ad] via-[#8e44ad] to-[#ff00ff]">
                                Ваш
                            </span> текст в галактическом шрифте
                        </h2>
                        <p className="text-lg text-white mt-2">Подзаголовок или дополнительный текст</p>
                        {/* Кнопка */}
                        <motion.a
                            href="#"
                            variants={slideInFromLeft(1)}
                            initial="hidden"
                            animate="show"
                            className="py-2 px-6 rounded-lg text-white cursor-pointer mt-6 border border-[#8e44ad] border-opacity-20 hover:bg-[#8e44ad] hover:text-white transition duration-300 ease-in-out z-[20]"
                            style={{
                                background: 'linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.32) 100%), rgba(113, 47, 255, 0.12)',
                                boxShadow: 'inset 0 0 12px #bf97ff3d',
                            }}
                        >
                            Нажми на меня
                        </motion.a>
                    </div>
                </section>

                {/* Третья секция с блоками фото и текстом */}
                <section className="flex flex-wrap gap-8 justify-center">
                    <div className="relative w-full sm:w-[300px] h-[300px] flex-shrink-0">
                        <img
                            src="/pc.jpg" // Замените на путь к вашему изображению
                            alt="Image 1"
                            className="w-full h-full object-cover border-4 border-[#8e44ad] border-opacity-10 transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                            Текст на фото 1
                        </div>
                    </div>
                    <div className="relative w-full sm:w-[300px] h-[300px] flex-shrink-0">
                        <img
                            src="/pc.jpg" // Замените на путь к вашему изображению
                            alt="Image 2"
                            className="w-full h-full object-cover border-4 border-[#8e44ad] border-opacity-10 transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                            Текст на фото 2
                        </div>
                    </div>
                    <div className="relative w-full sm:w-[300px] h-[300px] flex-shrink-0">
                        <img
                            src="/pc.jpg" // Замените на путь к вашему изображению
                            alt="Image 3"
                            className="w-full h-full object-cover border-4 border-[#8e44ad] border-opacity-10 transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                            Текст на фото 3
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
