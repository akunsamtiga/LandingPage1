"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { FaRocket, FaMobileAlt, FaLock, FaRegSmile } from "react-icons/fa";

// Komponen ClientOnly: memastikan children hanya di-render di sisi client
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render fallback (misalnya kontainer kosong dengan tinggi minimal) agar output server dan client sama
  if (!mounted) {
    return <div style={{ minHeight: "400px" }} />;
  }

  return <>{children}</>;
}

export default function FeaturesSection() {
  const features = [
    { 
      id: 1, 
      icon: FaRocket, 
      title: "Fast Performance", 
      description: "Nikmati kecepatan luar biasa dengan platform yang dioptimalkan." 
    },
    { 
      id: 2, 
      icon: FaMobileAlt, 
      title: "Responsive Design", 
      description: "Desain modern yang beradaptasi di semua perangkat." 
    },
    { 
      id: 3, 
      icon: FaLock, 
      title: "Secure Payments", 
      description: "Transaksi aman dengan sistem keamanan terbaik." 
    },
    { 
      id: 4, 
      icon: FaRegSmile, 
      title: "User Friendly", 
      description: "Antarmuka mudah digunakan untuk pengalaman optimal." 
    },
  ];

  // Variants untuk animasi ikon (hover effect)
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <ClientOnly>
      <section
        id="features"
        className="px-6 lg:px-16 py-20 bg-gradient-to-b from-gray-200 to-gray-300"
      >
        {/* Judul Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl p-2 font-black mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(143, 143, 143), rgb(73, 73, 73))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience The Magic
            <br />
            Of Flight!
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg lg:text-xl text-gray-700"
          >
            Teknologi terkini untuk pengalaman tak terlupakan
          </motion.p>
        </motion.div>

        {/* Grid Fitur dengan animasi stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-b from-white to-gray-50/30 backdrop-blur-xl rounded-tl-[4rem] rounded-b-2xl rounded-tr-[10px] p-8 transition-all duration-600 hover:-translate-y-3 shadow-lg hover:shadow-lg hover:shadow-gray-400/40"
            >
              <div className="flex items-center mb-2">
                <motion.div
                  className="text-2xl text-gray-800 mr-2"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <feature.icon />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
              </div>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ClientOnly>
  );
}
