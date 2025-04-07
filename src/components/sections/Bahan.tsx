'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLeaf, 
  FaVirus, 
  FaBacteria, 
  FaShieldVirus,
  FaFlask
} from 'react-icons/fa';

interface BahanObat {
  nama: string;
  ikon: React.ElementType;
  warna: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  gradientDari: string;
  gradientKe: string;
  manfaat: string[];
}

const BahanHerbal: React.FC = () => {
  const bahanObat: BahanObat[] = [
    {
      nama: "Cinnamaldehyde",
      ikon: FaLeaf,
      warna: "green",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-500",
      gradientDari: "from-green-50",
      gradientKe: "to-green-100",
      manfaat: [
        "Antibakteri dan antijamur kuat, efektif melawan infeksi",
        "Antioksidan tinggi untuk regenerasi kulit yang rusak",
        "Anti-inflamasi & Pereda nyeri yang mengurangi bengkak, kemerahan, dan rasa sakit",
        "Mencegah infeksi sekunder pada luka diabetes dan luka bernanah"
      ]
    },
    {
      nama: "Citronellal",
      ikon: FaVirus,
      warna: "amber",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
      borderColor: "border-amber-500",
      gradientDari: "from-amber-50",
      gradientKe: "to-amber-100",
      manfaat: [
        "Antibakteri alami, membunuh bakteri penyebab kudis dan skabies",
        "Anti-jamur & Anti-radang yang mengurangi gatal dan iritasi cacar api & cacar monyet",
        "Mengeringkan luka, membantu penyembuhan luka basah termasuk luka diabetes",
        "Mengusir tungau & parasit, sangat efektif untuk skabies dan kudis"
      ]
    },
    {
      nama: "Eugenol",
      ikon: FaBacteria,
      warna: "red",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      borderColor: "border-red-500",
      gradientDari: "from-red-50",
      gradientKe: "to-red-100",
      manfaat: [
        "Antiseptik kuat untuk luka bernanah dan infeksi kulit",
        "Analgesik alami yang mengurangi nyeri pada luka terbuka dan cacar api",
        "Antiparasit melawan tungau penyebab skabies dan virus cacar monyet",
        "Mempercepat regenerasi kulit, mencegah luka meninggalkan bekas hitam"
      ]
    },
    {
      nama: "Asam Asetat",
      ikon: FaFlask,
      warna: "blue",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-500", 
      gradientDari: "from-blue-50",
      gradientKe: "to-blue-100",
      manfaat: [
        "Pembersih alami yang membantu mengangkat kotoran dan sel mati dari luka",
        "Antibakteri & Anti-jamur untuk mengatasi infeksi luka diabetes dan luka bernanah",
        "Mengeringkan luka, cocok untuk luka terbuka, cacar air, dan cacar monyet",
        "Mengurangi gatal & bau tak sedap, membantu menyembuhkan skabies dan kudis"
      ]
    },
    {
      nama: "Fenol",
      ikon: FaLeaf,
      warna: "purple",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-500",
      gradientDari: "from-purple-50",
      gradientKe: "to-purple-100",
      manfaat: [
        "Antiseptik alami yang membunuh bakteri dan jamur",
        "Anti-peradangan untuk mengurangi iritasi dan pembengkakan pada kulit cacar api",
        "Mengatasi bau tak sedap, mencegah infeksi pada luka diabetes dan kudis",
        "Menghentikan gatal, efektif melawan skabies dan kudis"
      ]
    },
    {
      nama: "Antioksidan",
      ikon: FaShieldVirus,
      warna: "teal",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      borderColor: "border-teal-500",
      gradientDari: "from-teal-50",
      gradientKe: "to-teal-100",
      manfaat: [
        "Membantu regenerasi sel kulit baru secara optimal",
        "Mengurangi kadar gula darah untuk mempercepat penyembuhan luka diabetes",
        "Antibakteri & Antijamur untuk mengatasi infeksi pada luka bernanah dan kudis",
        "Mengurangi peradangan, cocok untuk cacar air, cacar api, dan cacar monyet"
      ]
    }
  ];

  const [bahanAktif, setBahanAktif] = useState<BahanObat>(bahanObat[0]);

  const cardVariants = {
    inactive: { scale: 1, y: 0 },
    active: { scale: 1.05, y: -5 }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0.5, rotate: 0 },
    visible: { scale: 1, opacity: 1, rotate: 360, transition: { duration: 0.5 } },
    hover: { scale: 1.2, transition: { duration: 0.3, yoyo: Infinity, repeat: 1 } }
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  const borderToBg = (borderColor: string | undefined) => {
    if (!borderColor) return "bg-gray-500"; 
    return borderColor.replace('border', 'bg');
  };

  const renderBahanElement = (bahan: BahanObat, index: number) => {
    const Icon = bahan.ikon;
    return (
      <motion.div
        key={bahan.nama}
        onClick={() => setBahanAktif(bahan)}
        className={`
          cursor-pointer p-5 rounded-xl shadow-sm
          ${bahanAktif.nama === bahan.nama 
            ? `bg-white border-l-4 ${bahan.borderColor}` 
            : 'bg-white hover:bg-gray-50'}
        `}
        initial="inactive"
        animate={bahanAktif.nama === bahan.nama ? "active" : "inactive"}
        whileHover={{ scale: 1.02 }}
        variants={cardVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center">
          <motion.div 
            className={`w-12 h-12 ${bahan.bgColor} rounded-full flex items-center justify-center mr-4`}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={iconVariants}
          >
            <Icon className={`w-6 h-6 ${bahan.textColor}`} />
          </motion.div>
          <div>
            <h3 className="font-bold text-gray-800">{bahan.nama}</h3>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderBahanDetail = () => {
    const ActiveIcon = bahanAktif.ikon;
    return (
      <motion.div 
        className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${bahanAktif.borderColor}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        key={bahanAktif.nama}
      >
        <motion.div 
          className={`w-20 h-20 ${bahanAktif.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
        >
          <ActiveIcon className={`w-10 h-10 ${bahanAktif.textColor}`} />
        </motion.div>
        <motion.h3 
          className="text-2xl font-bold text-center mb-6 text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {bahanAktif.nama}
        </motion.h3>
        <ul className="space-y-3">
          {bahanAktif.manfaat.map((manfaat, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={bulletVariants}
            >
              <motion.span 
                className={`inline-block w-4 h-4 ${borderToBg(bahanAktif.borderColor)} rounded-full mt-1 mr-3 flex-shrink-0`}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              ></motion.span>
              <span className="text-gray-700">{manfaat}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };

  const renderWhyEffective = () => {
    return (
      <motion.div 
        className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex justify-center items-center mb-4">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          >
            <FaShieldVirus className="w-10 h-10 text-green-600 mr-4" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-800">
            Mengapa Sangat Efektif?
          </h3>
        </div>
        <ul className="text-gray-600 max-w-3xl mx-auto space-y-3 text-left list-none pl-10">
          {[
            "Membunuh bakteri, jamur, virus, dan parasit – Termasuk penyebab skabies, kudis, cacar air, dan cacar monyet",
            "Mengurangi rasa gatal, nyeri, dan peradangan – Mengatasi iritasi dan mempercepat pemulihan kulit",
            "Mencegah infeksi sekunder & bau tak sedap – Sangat penting untuk luka diabetes dan luka bernanah",
            "Mempercepat regenerasi kulit baru – Mencegah bekas luka hitam akibat cacar dan luka terbuka"
          ].map((item, index) => {
            const bahan = bahanObat[index % bahanObat.length];
            const Icon = bahan.ikon;
            return (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <motion.div 
                  className={`flex items-center justify-center w-6 h-6 rounded-full ${bahan.bgColor} mr-3 mt-1`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className={`w-3 h-3 ${bahan.textColor}`} />
                </motion.div>
                <span>{item}</span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    );
  };

  return (
    <section
    id="bahan">
    <div className={`bg-gradient-to-b ${bahanAktif.gradientDari} ${bahanAktif.gradientKe} py-16 transition-all duration-500`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kekuatan Bahan Aktif Herbal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Komposisi canggih untuk penyembuhan luka dan regenerasi kulit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="space-y-4">
              {bahanObat.map(renderBahanElement)}
            </div>
          </div>

          {renderBahanDetail()}
        </div>

        {renderWhyEffective()}
      </div>
    </div>
    </section>
  );
};

export default BahanHerbal;