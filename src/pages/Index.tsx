import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

const HOTEL_IMG = 'https://cdn.poehali.dev/projects/ad4dfebe-dcca-4ccc-9dc3-d8882c82648f/files/db1eb9cb-b23a-4278-a0a9-e91c728923c9.jpg';
const DOCS_IMG = 'https://cdn.poehali.dev/projects/ad4dfebe-dcca-4ccc-9dc3-d8882c82648f/files/735e5b3b-b466-4b63-a142-91a0cc5d0d6a.jpg';

const nav = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'pricing', label: 'Прайс' },
  { id: 'about', label: 'О компании' },
  { id: 'gallery', label: 'Примеры' },
  { id: 'contacts', label: 'Контакты' },
];

const services = [
  { icon: 'BedDouble', title: 'Гостиничные чеки', desc: 'Документы за проживание в гостиницах Новороссийска с реквизитами и печатью.' },
  { icon: 'Receipt', title: 'Кассовые и товарные чеки', desc: 'Фискальные кассовые и товарные чеки для отчётности по любым покупкам.' },
  { icon: 'Home', title: 'Чеки за проживание', desc: 'Подтверждение оплаты проживания для авансовых отчётов и командировок.' },
  { icon: 'UtensilsCrossed', title: 'Ресторанные чеки', desc: 'Чеки кафе и ресторанов для подтверждения расходов на питание.' },
  { icon: 'Fuel', title: 'Чеки АЗС', desc: 'Топливные чеки заправочных станций с указанием литража и марки топлива.' },
  { icon: 'Hammer', title: 'Чеки на стройматериалы', desc: 'Товарные чеки и накладные на строительные материалы и инструменты.' },
  { icon: 'FileText', title: 'Счёт-фактуры', desc: 'Оформление счёт-фактур с НДС в соответствии с требованиями ФНС.' },
  { icon: 'ClipboardCheck', title: 'Акты выполненных работ', desc: 'Акты и закрывающие документы для подтверждения оказанных услуг.' },
];

const pricing = [
  { name: 'Гостиничный чек', price: 'от 700 ₽', note: 'за документ' },
  { name: 'Кассовый / товарный чек', price: 'от 300 ₽', note: 'за документ' },
  { name: 'Чек за проживание (комплект)', price: 'от 1 200 ₽', note: 'счёт + чек + регистрация' },
  { name: 'Ресторанный чек', price: 'от 350 ₽', note: 'за документ' },
  { name: 'Чек АЗС', price: 'от 250 ₽', note: 'за документ' },
  { name: 'Чек на стройматериалы', price: 'от 400 ₽', note: 'за документ' },
  { name: 'Счёт-фактура', price: 'от 600 ₽', note: 'с НДС' },
  { name: 'Акт выполненных работ', price: 'от 500 ₽', note: 'за документ' },
];

const gallery = [
  { img: HOTEL_IMG, title: 'Гостиничный чек', tag: 'Проживание' },
  { img: DOCS_IMG, title: 'Комплект документов', tag: 'Отчётность' },
  { img: HOTEL_IMG, title: 'Чек за проживание', tag: 'Командировка' },
  { img: DOCS_IMG, title: 'Кассовые чеки', tag: 'Фискальные' },
  { img: HOTEL_IMG, title: 'Счёт-фактура', tag: 'С НДС' },
  { img: DOCS_IMG, title: 'Акт выполненных работ', tag: 'Закрывающий' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
        <div className="container flex items-center justify-between py-2">
          <span className="flex items-center gap-2">
            <Icon name="MapPin" size={14} className="text-gold" />
            г. Новороссийск
          </span>
          <a href="tel:+79965323243" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Icon name="Phone" size={14} className="text-gold" />
            +7 (996) 532-32-43
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded bg-primary border-2 border-gold">
              <Icon name="FileCheck2" size={22} className="text-gold" />
            </div>
            <div className="leading-tight">
              <div className="font-serif font-black text-lg text-primary">ДокОтчёт</div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Новороссийск</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <Button onClick={() => scrollTo('contacts')} className="hidden lg:inline-flex bg-primary hover:bg-primary/90 rounded-sm">
            Заказать
          </Button>

          <button className="lg:hidden text-primary" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden border-t border-border bg-background animate-fade-up">
            <div className="container flex flex-col py-3">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="py-3 text-left font-medium border-b border-border/50 last:border-0">
                  {n.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 paper-texture opacity-10" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-3 py-1 text-xs uppercase tracking-widest text-gold mb-6">
              <Icon name="ShieldCheck" size={14} /> Официальные документы
            </span>
            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Отчётные документы за&nbsp;проживание в&nbsp;Новороссийске
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mb-8">
              Гостиничные, кассовые и товарные чеки, чеки за проживание, ресторанные чеки, чеки АЗС, счёт-фактуры и акты выполненных работ. Оформляем быстро и с полным пакетом реквизитов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('services')} size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-sm font-semibold">
                Наши услуги
              </Button>
              <Button onClick={() => scrollTo('gallery')} size="lg" variant="outline" className="rounded-sm border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                Посмотреть примеры
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-primary-foreground/15">
              {[['10', 'лет на рынке'], ['24/7', 'приём заявок'], ['100%', 'конфиденциально']].map(([num, txt]) => (
                <div key={txt}>
                  <div className="font-serif text-3xl font-black text-gold">{num}</div>
                  <div className="text-sm text-primary-foreground/70">{txt}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-3 border border-gold/30 rounded-sm" />
            <img src={DOCS_IMG} alt="Отчётные документы" className="relative rounded-sm shadow-2xl w-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Что мы оформляем</span>
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-primary mt-3">Наши услуги</h2>
            <div className="mx-auto mt-4 h-0.5 w-20 bg-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card border border-border rounded-sm p-7 hover:border-gold hover:shadow-lg transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-primary group-hover:bg-gold transition-colors mb-5">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-28 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Стоимость</span>
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-primary mt-3">Прайс-лист</h2>
            <div className="mx-auto mt-4 h-0.5 w-20 bg-gold" />
          </div>
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-sm overflow-hidden">
            {pricing.map((p, i) => (
              <div key={p.name} className={`flex items-center justify-between gap-4 px-6 py-5 ${i !== pricing.length - 1 ? 'border-b border-border' : ''} hover:bg-secondary/40 transition-colors`}>
                <div>
                  <div className="font-serif font-bold text-primary">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.note}</div>
                </div>
                <div className="font-serif font-black text-lg text-gold whitespace-nowrap">{p.price}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Точная цена зависит от количества документов и срочности. Уточняйте при заказе.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/30 rounded-sm" />
            <img src={HOTEL_IMG} alt="О компании" className="relative rounded-sm shadow-xl w-full object-cover aspect-[4/3]" />
          </div>
          <div>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">О компании</span>
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-primary mt-3 mb-6">Надёжный партнёр в отчётной документации</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Более 10 лет мы помогаем жителям и гостям Новороссийска оформлять отчётные документы за проживание, питание, топливо и другие расходы. Все документы содержат корректные реквизиты, печати и подписи.
            </p>
            <div className="space-y-4">
              {[
                ['Clock', 'Оперативно', 'Готовим документы в день обращения.'],
                ['Lock', 'Конфиденциально', 'Гарантируем полную приватность данных.'],
                ['Award', 'Качество', 'Документы соответствуют установленным стандартам.'],
              ].map(([icon, t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary text-gold">
                    <Icon name={icon} size={20} />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-primary">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 paper-texture opacity-10" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Галерея</span>
            <h2 className="font-serif font-black text-3xl lg:text-4xl mt-3">Примеры готовых документов</h2>
            <div className="mx-auto mt-4 h-0.5 w-20 bg-gold" />
            <p className="text-primary-foreground/70 mt-4">Ознакомьтесь с образцами наших работ — нажмите для увеличения.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((g, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <button className="group relative overflow-hidden rounded-sm border border-primary-foreground/15 text-left">
                    <img src={g.img} alt={g.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <span className="text-[11px] uppercase tracking-widest text-gold">{g.tag}</span>
                      <div className="font-serif font-bold text-lg">{g.title}</div>
                    </div>
                    <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-sm bg-gold/90 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="ZoomIn" size={18} />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                  <img src={g.img} alt={g.title} className="w-full object-contain" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-2 gap-14">
          <div>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Связаться с нами</span>
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-primary mt-3 mb-6">Контакты</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Оставьте заявку или свяжитесь с нами любым удобным способом. Ответим на все вопросы и подберём нужный пакет документов.
            </p>
            <div className="space-y-5">
              {[
                ['Phone', 'Телефон', '+7 (996) 532-32-43', 'tel:+79965323243'],
                ['MapPin', 'Адрес', 'г. Новороссийск, Мысхакское шоссе, 59 В', null],
                ['Clock', 'Режим работы', 'Ежедневно, с 9:00 до 21:00', null],
              ].map(([icon, t, d, href]) => (
                <div key={t as string} className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary text-gold">
                    <Icon name={icon as string} size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t}</div>
                    {href ? (
                      <a href={href as string} className="font-serif font-bold text-primary hover:text-gold transition-colors">{d}</a>
                    ) : (
                      <div className="font-serif font-bold text-primary">{d}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/79965323243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <Icon name="MessageCircle" size={18} /> WhatsApp
              </a>
              <a
                href="https://t.me/+79965323243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#229ED9] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <Icon name="Send" size={18} /> Telegram
              </a>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-card border border-border rounded-sm p-8">
            <h3 className="font-serif font-bold text-xl text-primary mb-6">Оставить заявку</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Ваше имя" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
              <input type="tel" placeholder="Телефон" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
              <select className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-muted-foreground">
                <option>Какие документы нужны?</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
              <textarea placeholder="Комментарий" rows={3} className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-sm font-semibold">
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-gold/20 border border-gold">
              <Icon name="FileCheck2" size={18} className="text-gold" />
            </div>
            <span className="font-serif font-bold">ДокОтчёт Новороссийск</span>
          </div>
          <p className="text-sm text-primary-foreground/60">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;