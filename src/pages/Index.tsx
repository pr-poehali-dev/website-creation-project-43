import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: "Рыбий глаз на мошонке у человека разумного — тупиковая ветвь эволюции",
      excerpt: "В ходе эволюционного процесса у человека разумного была зафиксирована необычная мутация — появление структур, напоминающих рыбий глаз, непосредственно на мошонке.",
      date: "16 октября 2025",
      category: "Эволюционная биология",
      readTime: "5 мин"
    },
    {
      id: 2,
      title: "Фотосинтез в волосяных фолликулах: новый механизм энергообмена у млекопитающих",
      excerpt: "Группа исследователей из Токийского университета обнаружила хлорофилл-подобные структуры в волосяных луковицах приматов, способные к ограниченному фотосинтезу.",
      date: "8 октября 2025",
      category: "Молекулярная биология",
      readTime: "7 мин"
    },
    {
      id: 3,
      title: "Эхолокация у Homo sapiens: рудиментарные способности современного человека",
      excerpt: "Нейробиологи из Стэнфорда подтвердили наличие атрофированных структур эхолокации в височных долях мозга, унаследованных от древних предков.",
      date: "2 октября 2025",
      category: "Нейробиология",
      readTime: "6 мин"
    },
    {
      id: 4,
      title: "Магнитная навигация: криптохром-белки в сетчатке глаза человека",
      excerpt: "Команда Макса Планка доказала функциональность магниторецепторных белков у людей, ранее считавшихся исключительной особенностью птиц.",
      date: "25 сентября 2025",
      category: "Сенсорная физиология",
      readTime: "8 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <div>
                <h1 className="text-4xl font-bold text-primary mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  IJEB
                </h1>
                <p className="text-xs text-muted-foreground font-light mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  International Journal of Evolutionary Biology
                </p>
                <p className="text-xs text-muted-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  ISSN 1687-8477 • Impact Factor: 3.847
                </p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                Главная
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                Статьи
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                О проекте
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="BookOpen" size={28} className="text-accent" />
            <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: 'Georgia, serif' }}>
              Последние публикации
            </h2>
          </div>
          <p className="text-muted-foreground text-lg font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Актуальные исследования в области биологии и эволюции
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-accent"
              onClick={() => navigate("/article")}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-muted text-secondary font-medium">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary leading-tight hover:text-accent transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base mt-3 leading-relaxed font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">{article.date}</time>
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <span>Читать далее</span>
                    <Icon name="ArrowRight" size={18} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-8 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-primary mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                О проекте
              </h3>
              <p className="text-sm text-muted-foreground font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Платформа для публикации научных статей и исследований
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Разделы
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Биология</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Эволюция</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Антропология</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Контакты
              </h3>
              <div className="flex gap-4">
                <Icon name="Mail" size={20} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Icon name="Github" size={20} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 International Journal of Evolutionary Biology • ISSN 1687-8477 • DOI: 10.1155/ijeb
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;