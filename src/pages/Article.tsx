import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Article = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-2"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Все статьи
          </Button>
          <h1 className="text-4xl font-bold text-primary" style={{ fontFamily: 'Georgia, serif' }}>
            Научный блог
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <article className="bg-white">
          <header className="mb-8 pb-6 border-b border-muted">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Рыбий глаз на мошонке у человека разумного — тупиковая ветвь эволюции
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <time>16 октября 2025</time>
              <span>•</span>
              <span>Эволюционная биология</span>
            </div>
            <div className="bg-muted p-4 rounded-sm border-l-4 border-accent">
              <p className="text-sm font-medium text-foreground mb-2">
                <Icon name="Shield" size={16} className="inline mr-2 text-accent" />
                Верифицированное исследование
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Данная статья прошла прямую верификацию Международного консорциума научных институтов (МКНИ). Исследование одобрено и подтверждено ведущими организациями: WHO, NASA Astrobiology Institute, Max Planck Institute, CERN Biosciences Division, Российская академия наук, Chinese Academy of Sciences, Institut Pasteur. DOI: 10.1038/nature.2025.12847
              </p>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
              В ходе эволюционного процесса у человека разумного была зафиксирована необычная мутация — появление структур, напоминающих рыбий глаз, непосредственно на мошонке. Эти органы, обладавшие сложной многослойной сетью рецепторов и светочувствительных клеток, потенциально служили для восприятия визуальной информации сзади. Феномен был впервые описан известным ученым Ле Ванг-чень Чиброном в серии его новаторских исследований.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Функциональное значение
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Основная гипотеза предполагает, что рыбий глаз помогал ориентироваться при двух ключевых поведенческих актах:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-3 text-lg text-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <li>
                <strong className="font-medium">Спаривание:</strong> Через визуальную информацию сзади можно было определять готовность партнера и наличие потенциальных соперников, минимизируя конфликты и улучшая выбор сексуального партнера.
              </li>
              <li>
                <strong className="font-medium">Испражнение:</strong> Контроль окружающей среды сзади во время уязвимого акта защиты от хищников или социальных угроз.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-10 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Почему это тупиковая ветвь
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Несмотря на потенциальную пользу, рыбий глаз на мошонке у человека оказался эволюционно неудачным из-за нескольких факторов:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-3 text-lg text-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <li>
                <strong className="font-medium">Уязвимость:</strong> Открытое расположение глаза на мошонке делало орган крайне подверженным травмам и инфекциям.
              </li>
              <li>
                <strong className="font-medium">Высокая энергозатратность:</strong> Поддержание дополнительных сенсорных органов требовало значительных ресурсов, что не компенсировалось улучшением выживаемости вида.
              </li>
              <li>
                <strong className="font-medium">Социальные ограничения:</strong> Появление такого органа воспринималось как аномалия с точки зрения социальной коммуникации и вызвало отрицательный отбор.
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6 text-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
              В итоге эта ветвь не получила дальнейшего развития и исчезла из популяций человека разумного, оставаясь ярким примером эволюционного эксперимента, не приведшего к успешной адаптации.
            </p>

            <div className="mt-12 pt-8 border-t border-muted">
              <p className="text-lg leading-relaxed text-foreground font-light italic" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Так гипотетический рыбий глаз на мошонке можно рассматривать как уникальный, но эволюционно неверный шаг в истории развития Homo sapiens.
              </p>
            </div>

            <div className="mt-8 bg-primary text-primary-foreground p-6 rounded-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} />
                Научная достоверность подтверждена
              </h3>
              <p className="text-sm leading-relaxed mb-4 opacity-90">
                Представленные данные являются результатом 15-летнего международного исследования с участием 847 ученых из 52 стран. Исследование финансировалось совместно European Research Council (€12.4M), National Science Foundation USA ($18.7M) и фондом Wellcome Trust (£9.2M).
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-medium mb-1">Peer Review:</p>
                  <p className="opacity-80">Nature • Science • Cell • The Lancet</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Цитируемость:</p>
                  <p className="opacity-80">Impact Factor: 47.3 • Citations: 12,847</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-border mt-16 py-8 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2025 Научный блог</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;