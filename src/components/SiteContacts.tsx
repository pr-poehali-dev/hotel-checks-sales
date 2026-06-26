import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { services } from '@/components/data';

const SiteContacts = () => {
  return (
    <>
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
                ['Mail', 'Email', 'я9965323243@yandex.ru', 'mailto:я9965323243@yandex.ru'],
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

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        <a
          href="tel:+79965323243"
          className="group flex items-center gap-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all pr-5 pl-4 py-3"
        >
          <Icon name="Phone" size={20} className="text-gold" />
          <span className="text-sm font-semibold hidden group-hover:inline-block animate-fade-up">Позвонить</span>
        </a>
        <a
          href="https://wa.me/79965323243"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all pr-5 pl-4 py-3"
        >
          <Icon name="MessageCircle" size={20} />
          <span className="text-sm font-semibold hidden group-hover:inline-block animate-fade-up">WhatsApp</span>
        </a>
        <a
          href="https://t.me/+79965323243"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#229ED9] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all pr-5 pl-4 py-3"
        >
          <Icon name="Send" size={20} />
          <span className="text-sm font-semibold hidden group-hover:inline-block animate-fade-up">Telegram</span>
        </a>
      </div>

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
    </>
  );
};

export default SiteContacts;
