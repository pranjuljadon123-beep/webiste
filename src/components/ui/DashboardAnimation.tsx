import { motion } from "framer-motion";

interface DashboardAnimationProps {
  src: string;
  alt: string;
  className?: string;
}

const DashboardAnimation = ({ src, alt, className = "" }: DashboardAnimationProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />

      {/* Scan line sweeping down */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ top: ["-2%", "102%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />

      {/* Pulsing data dots */}
      {[
        { top: "18%", left: "22%" },
        { top: "42%", left: "65%" },
        { top: "68%", left: "38%" },
        { top: "30%", left: "80%" },
        { top: "55%", left: "15%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
          style={pos}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{
            duration: 2 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated bar chart overlay */}
      <div className="absolute bottom-[12%] right-[10%] flex items-end gap-[3px] opacity-60">
        {[40, 65, 30, 80, 55, 45, 70].map((h, i) => (
          <motion.div
            key={i}
            className="w-[4px] rounded-sm bg-primary/50"
            animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.5}%`, `${h * 0.9}%`] }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            style={{ height: `${h}%`, maxHeight: "28px" }}
          />
        ))}
      </div>

      {/* Horizontal data flow line */}
      <motion.div
        className="absolute h-[1px] w-[30%] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{ top: "35%" }}
        animate={{ left: ["-30%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      {/* Subtle shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />
    </div>
  );
};

export default DashboardAnimation;
