import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function TrendIndicator() {
  const items = ["Весна", "Лето", "Осень", "Зима"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.span
        key={index}
        className="font-serif text-4xl md:text-5xl text-foreground"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {items[index]}
      </motion.span>
    </div>
  )
}

function StyleGrid() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const colors = [
    "bg-pink-200",
    "bg-purple-200",
    "bg-rose-200",
    "bg-fuchsia-200",
    "bg-violet-200",
    "bg-pink-300",
  ]

  const layouts = ["grid-cols-2 grid-rows-3", "grid-cols-3 grid-rows-2", "grid-cols-2 grid-rows-3"]

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <motion.div className={`grid ${layouts[layout]} gap-2 w-full max-w-[150px] h-[120px]`} layout>
        {colors.map((color, i) => (
          <motion.div
            key={i}
            className={`${color} rounded-md`}
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function DeliveryIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-sans font-medium text-foreground">1–3 дня</span>
      <span className="text-sm text-muted-foreground">Доставка</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Почему выбирают нас
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trends Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <TrendIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Актуальные тренды</h3>
              <p className="text-muted-foreground text-sm mt-1">Новинки каждый сезон — всегда в моде.</p>
            </div>
          </motion.div>

          {/* Style Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <StyleGrid />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Широкий выбор</h3>
              <p className="text-muted-foreground text-sm mt-1">Сотни образов на любой вкус и случай.</p>
            </div>
          </motion.div>

          {/* Delivery Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <DeliveryIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Быстрая доставка</h3>
              <p className="text-muted-foreground text-sm mt-1">Получи заказ уже через 1–3 дня.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
