import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
          }}
          className="fixed inset-0 z-[200] bg-[#030303] flex items-center justify-center p-6"
        >
          <div className="flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center overflow-hidden">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  src="/white_logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
