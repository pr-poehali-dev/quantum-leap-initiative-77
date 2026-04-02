import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/c7c9b76e-bbd9-481c-83af-0df8546dbbed.jpg",
  "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/6359a912-b1d1-4eb0-9c68-7b84d08e4177.jpg",
  "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/179d4b99-0c79-45a8-85ca-c814dd545c8e.jpg",
]

const labels = ["Новая коллекция", "Наш магазин", "Street Style"]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Коллекция
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={src}
                alt={labels[i]}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-serif text-lg">{labels[i]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
