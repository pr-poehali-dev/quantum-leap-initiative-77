import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Как собрать капсульный гардероб с нуля",
    category: "Стиль",
    image: "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/cbb4344c-3ece-4f61-9e30-ff1133c02468.jpg",
  },
  {
    title: "5 образов на каждый день этой осенью",
    category: "Тренды",
    image: "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/179d4b99-0c79-45a8-85ca-c814dd545c8e.jpg",
  },
  {
    title: "Как найти свой стиль и не потеряться",
    category: "Вдохновение",
    image: "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/c7c9b76e-bbd9-481c-83af-0df8546dbbed.jpg",
  },
  {
    title: "Главные цвета сезона: что носить",
    category: "Тренды",
    image: "https://cdn.poehali.dev/projects/e3f47e23-c593-417b-a593-3e8f9c039f63/files/6359a912-b1d1-4eb0-9c68-7b84d08e4177.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Блог о моде
        </motion.p>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[280px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={articles[hoveredIndex].image}
                alt={articles[hoveredIndex].title}
                className="w-full h-[200px] object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
