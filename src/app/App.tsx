"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden select-none">
      <motion.section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1658227623027-aeab936ba171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHMlMjBmbGFtZXN8ZW58MXx8fHwxNzcwNTU3OTQwfDA&ixlib=rb-4.1.0&q=80&w=1400"
            alt="Concert stage with lights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-[#FF3204]/20"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-[#FF3204]/25 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-[#FF3204]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] bg-[#FF3204]/15 rounded-full filter blur-3xl"></div>

        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-center">
            <svg
              width="104"
              height="32"
              viewBox="0 0 104 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-auto"
              aria-label="Eventaat"
              role="img"
            >
              <g clipPath="url(#clip0_80_475)">
                <rect y="21.3335" width="10.6667" height="10.6667" rx="5.33333" fill="#FF3204" />
                <path
                  d="M24.1904 5.33333C24.1904 2.38781 21.8026 0 18.8571 0C15.9116 0 13.5238 2.38781 13.5238 5.33333V32C19.4148 32 24.1904 27.2244 24.1904 21.3333V5.33333Z"
                  fill="#FF3204"
                />
                <path
                  d="M43.3132 6.38182H47.2041V19.3636C47.2041 20.5636 46.9344 21.6061 46.395 22.4909C45.8616 23.3758 45.1192 24.0576 44.1677 24.5364C43.2162 25.0152 42.1101 25.2545 40.8495 25.2545C39.7283 25.2545 38.7101 25.0576 37.795 24.6636C36.8859 24.2636 36.1647 23.6576 35.6313 22.8455C35.098 22.0273 34.8344 21 34.8404 19.7636H38.7586C38.7707 20.2545 38.8707 20.6758 39.0586 21.0273C39.2525 21.3727 39.5162 21.6394 39.8495 21.8273C40.1889 22.0091 40.5889 22.1 41.0495 22.1C41.5344 22.1 41.9435 21.997 42.2768 21.7909C42.6162 21.5788 42.8738 21.2697 43.0495 20.8636C43.2253 20.4576 43.3132 19.9576 43.3132 19.3636V6.38182ZM56.695 25.2727C55.2829 25.2727 54.0616 24.9727 53.0313 24.3727C52.0071 23.7667 51.2162 22.9242 50.6586 21.8455C50.101 20.7606 49.8222 19.503 49.8222 18.0727C49.8222 16.6303 50.101 15.3697 50.6586 14.2909C51.2162 13.2061 52.0071 12.3636 53.0313 11.7636C54.0616 11.1576 55.2829 10.8545 56.695 10.8545C58.1071 10.8545 59.3253 11.1576 60.3495 11.7636C61.3798 12.3636 62.1738 13.2061 62.7313 14.2909C63.2889 15.3697 63.5677 16.6303 63.5677 18.0727C63.5677 19.503 63.2889 20.7606 62.7313 21.8455C62.1738 22.9242 61.3798 23.7667 60.3495 24.3727C59.3253 24.9727 58.1071 25.2727 56.695 25.2727ZM56.7132 22.2727C57.3556 22.2727 57.8919 22.0909 58.3222 21.7273C58.7525 21.3576 59.0768 20.8545 59.295 20.2182C59.5192 19.5818 59.6313 18.8576 59.6313 18.0455C59.6313 17.2333 59.5192 16.5091 59.295 15.8727C59.0768 15.2364 58.7525 14.7333 58.3222 14.3636C57.8919 13.9939 57.3556 13.8091 56.7132 13.8091C56.0647 13.8091 55.5192 13.9939 55.0768 14.3636C54.6404 14.7333 54.3101 15.2364 54.0859 15.8727C53.8677 16.5091 53.7586 17.2333 53.7586 18.0455C53.7586 18.8576 53.8677 19.5818 54.0859 20.2182C54.3101 20.8545 54.6404 21.3576 55.0768 21.7273C55.5192 22.0909 56.0647 22.2727 56.7132 22.2727ZM66.0859 25V11.0364H69.9586V25H66.0859ZM68.0313 9.23636C67.4556 9.23636 66.9616 9.04545 66.5495 8.66363C66.1435 8.27576 65.9404 7.81212 65.9404 7.27272C65.9404 6.73939 66.1435 6.28182 66.5495 5.9C66.9616 5.51212 67.4556 5.31818 68.0313 5.31818C68.6071 5.31818 69.098 5.51212 69.5041 5.9C69.9162 6.28182 70.1222 6.73939 70.1222 7.27272C70.1222 7.81212 69.9162 8.27576 69.5041 8.66363C69.098 9.04545 68.6071 9.23636 68.0313 9.23636ZM76.9336 16.9273V25H73.0609V11.0364H76.7518V13.5H76.9154C77.2245 12.6879 77.7427 12.0455 78.47 11.5727C79.1972 11.0939 80.0791 10.8545 81.1154 10.8545C82.0851 10.8545 82.9306 11.0667 83.6518 11.4909C84.373 11.9151 84.9336 12.5212 85.3336 13.3091C85.7336 14.0909 85.9336 15.0242 85.9336 16.1091V25H82.0609V16.8C82.0669 15.9455 81.8488 15.2788 81.4063 14.8C80.9639 14.3152 80.3548 14.0727 79.5791 14.0727C79.0579 14.0727 78.5972 14.1848 78.1972 14.4091C77.8033 14.6333 77.4942 14.9606 77.27 15.3909C77.0518 15.8152 76.9397 16.3273 76.9336 16.9273ZM95.295 25.2727C93.8829 25.2727 92.6616 24.9727 91.6313 24.3727C90.6071 23.7667 89.8162 22.9242 89.2586 21.8455C88.701 20.7606 88.4222 19.503 88.4222 18.0727C88.4222 16.6303 88.701 15.3697 89.2586 14.2909C89.8162 13.2061 90.6071 12.3636 91.6313 11.7636C92.6616 11.1576 93.8829 10.8545 95.295 10.8545C96.7071 10.8545 97.9253 11.1576 98.9495 11.7636C99.9798 12.3636 100.774 13.2061 101.331 14.2909C101.889 15.3697 102.168 16.6303 102.168 18.0727C102.168 19.503 101.889 20.7606 101.331 21.8455C100.774 22.9242 99.9798 23.7667 98.9495 24.3727C97.9253 24.9727 96.7071 25.2727 95.295 25.2727ZM95.3132 22.2727C95.9556 22.2727 96.4919 22.0909 96.9222 21.7273C97.3526 21.3576 97.6768 20.8545 97.895 20.2182C98.1192 19.5818 98.2313 18.8576 98.2313 18.0455C98.2313 17.2333 98.1192 16.5091 97.895 15.8727C97.6768 15.2364 97.3526 14.7333 96.9222 14.3636C96.4919 13.9939 95.9556 13.8091 95.3132 13.8091C94.6647 13.8091 94.1192 13.9939 93.6768 14.3636C93.2404 14.7333 92.9101 15.2364 92.6859 15.8727C92.4677 16.5091 92.3586 17.2333 92.3586 18.0455C92.3586 18.8576 92.4677 19.5818 92.6859 20.2182C92.9101 20.8545 93.2404 21.3576 93.6768 21.7273C94.1192 22.0909 94.6647 22.2727 95.3132 22.2727Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_80_475">
                  <rect width="103.19" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto pt-20 sm:pt-24 pb-10 sm:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-8xl mb-4 sm:mb-6 text-[#FF3204] tracking-tight font-bold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Never Miss
            <br />
            The Moment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discover unforgettable events and meet new people. Your next adventure is one tap away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
          >
            <a
              href="#download"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-[#FF3204]/40 rounded-full overflow-hidden transition-all hover:scale-105 hover:border-[#FF3204] hover:bg-[#FF3204]/20"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z" />
              </svg>
              <span>Download for Android</span>
            </a>
          </motion.div>


        </div>
      </motion.section>

    </div>
  );
}
