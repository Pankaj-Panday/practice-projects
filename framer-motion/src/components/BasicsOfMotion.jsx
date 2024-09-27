import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BasicsOfMotion = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="grid h-screen place-content-center gap-[0.8rem]">
      <motion.button
        className="w-40 rounded-sm bg-slate-500 px-4 py-2 text-white"
        onClick={() => setVisible((prev) => !prev)}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            className="h-40 w-40 bg-black"
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              ease: "backInOut",
              duration: 1,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
