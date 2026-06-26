import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { DOCS_IMG, HOTEL_IMG, services, pricing, gallery, partners, reviews, deliveryItems } from '@/components/data';

interface SiteSectionsProps {
  onScrollTo: (id: string) => void;
}

const SiteSections = ({ onScrollTo }: SiteSectionsProps) => {
  return (
    <>
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
              <Button onClick={() => onScrollTo('services')} size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-sm font-semibold">
                Наши услуги
              </Button>
              <Button onClick={() => onScrollTo('gallery')} size="lg" variant="outline" className="rounded-sm border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
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

      {/* Partners */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Сеть присутствия</span>
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-primary mt-3">Наши партнёры в других городах</h2>
            <div className="mx-auto mt-4 h-0.5 w-20 bg-gold" />
            <p className="text-muted-foreground mt-4">Гостиничные чеки и отчётные документы — в городах Краснодарского края</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {partners.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-sm border border-border hover:border-gold hover:shadow-lg transition-all block"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={p.img} alt={p.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-sm bg-gold/90 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ExternalLink" size={14} />
                  </div>
                </div>
                <div className="p-5 bg-card">
                  <div className="font-serif font-bold text-primary group-hover:text-gold transition-colors mb-1">Гостиничные чеки — {p.city}</div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Icon name="MapPin" size={13} className="shrink-0 mt-0.5 text-gold" />
                    {p.address}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Icon name="Phone" size={13} className="shrink-0 text-gold" />
                    +7 (996) 532-32-43
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-card border border-border rounded-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-gold">
                <Icon name="Truck" size={20} />
              </div>
              <h3 className="font-serif font-bold text-xl text-primary">Доставка по всему Краснодарскому краю</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {deliveryItems.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={16} className="text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 lg:py-28 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Что говорят клиенты</span>
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-primary mt-3">Отзывы</h2>
            <div className="mx-auto mt-4 h-0.5 w-20 bg-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-sm p-7 flex flex-col gap-4 hover:border-gold hover:shadow-md transition-all">
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-sm font-bold text-primary-foreground ${r.org ? 'bg-gold' : 'bg-primary'}`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-sm text-primary">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SiteSections;
