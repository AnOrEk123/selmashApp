export default function AboutPage() {
  return (
    <div className="pt-24 flex flex-col items-center px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-red-700 text-center">
        ОАО «Гомсельмаш»
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-5xl mb-10">
        <strong>ОАО «Гомсельмаш»</strong> — один из крупнейших производителей сельскохозяйственной техники 
        в Восточной Европе. Компания разрабатывает и выпускает комбайны, тракторы и другую 
        высокопроизводительную технику для эффективного ведения аграрного бизнеса.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3 text-red-700">История компании</h2>
          <p className="text-gray-700 leading-relaxed">
            Завод был основан в 1930 году и с тех пор превратился в современный 
            машиностроительный холдинг. Сегодня «Гомсельмаш» — это символ надёжности, 
            инноваций и промышленной мощи Беларуси, представленный более чем в 30 странах мира.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3 text-red-700">Миссия</h2>
          <p className="text-gray-700 leading-relaxed">
            Наша цель — создавать технику, которая помогает аграриям по всему миру 
            повышать урожайность, снижать затраты и работать с комфортом. 
            Мы стремимся к устойчивому развитию и бережному отношению к природе.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3 text-red-700">Достижения</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Продажа техники в более чем 40 странах мира.</li>
            <li>Победитель международных выставок и конкурсов техники.</li>
            <li>Более 90 лет опыта в машиностроении.</li>
            <li>Собственная инженерная школа и научно-технический центр.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3 text-red-700">Структура</h2>
          <p className="text-gray-700 leading-relaxed">
            В состав холдинга входят производственные предприятия, 
            сервисные центры, дилерские сети и учебные подразделения, 
            обеспечивающие полный цикл — от разработки до обслуживания техники.
          </p>
        </div>
      </div>

      <p className="text-gray-600 mt-12 text-center max-w-4xl italic">
        «Гомсельмаш» — это качество, проверенное временем, и надёжный партнёр для аграриев всего мира.
      </p>

      <section className="mt-20 bg-gray-50 w-full py-12 rounded-2xl shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-2">
                <strong>Адрес:</strong> Республика Беларусь, 246012, г. Гомель, ул. Шоссейная, 41
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Телефон:</strong> +375 232 53-08-66
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Факс:</strong> ++375 232 53-02-21
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> post@gomselmash.by
              </p>
              <p className="text-gray-700">
                <strong>Официальный сайт:</strong>{" "}
                <a
                  href="https://www.gomselmash.by"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline hover:text-green-800"
                >
                  www.gomselmash.by
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
