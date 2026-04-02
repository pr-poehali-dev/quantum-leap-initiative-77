import { motion } from "framer-motion"

const carouselItems = [
  "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/c7c9b76e-bbd9-481c-83af-0df8546dbbed.jpg",
  "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/179d4b99-0c79-45a8-85ca-c814dd545c8e.jpg",
  "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/cbb4344c-3ece-4f61-9e30-ff1133c02468.jpg",
  "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/6359a912-b1d1-4eb0-9c68-7b84d08e4177.jpg",
]

export function CarouselSection() {
  const items = [...carouselItems, ...carouselItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Создано для девушек, которые любят стиль.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] md:w-[360px] h-[320px] md:h-[440px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Образ ${(i % carouselItems.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
