import { slides } from "@/shared/data/slides.data"
import { Slider } from "../components/slider"
import Link from "next/link"
import { PAGES } from "../config/pages.config"

export default function Home() {
  return (
    <div className="pt-20 bg-gray-50">
      <Slider slides={slides} />
      <section className="text-center py-16 px-6 bg-white shadow-inner">
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Гомсельмаш — лидер сельхозмашиностроения
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Мы создаём высокотехнологичные комбайны и сельскохозяйственную технику,
          обеспечивая эффективность и надёжность на полях по всему миру.
        </p>
      </section>
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-red-700">70+ лет опыта</h3>
            <p className="text-gray-600">
              Богатая история инноваций и надёжности в производстве сельхозтехники.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-red-700">Современные технологии</h3>
            <p className="text-gray-600">
              Используем передовые решения для повышения эффективности и удобства.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-red-700">Надёжная техника</h3>
            <p className="text-gray-600">
              Машины, проверенные временем и тысячами фермеров по всему миру.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 mb-6">
            Узнайте больше о нашей технике и возможностях сотрудничества.
          </p>
          <Link
            href={PAGES.ABOUTUS}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Контакты
          </Link>
        </div>
      </section>
    </div>
  )
}
