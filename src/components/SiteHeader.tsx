import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { nav } from '@/components/data';

interface SiteHeaderProps {
  onScrollTo: (id: string) => void;
}

const SiteHeader = ({ onScrollTo }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    setMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <>
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

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => handleScrollTo('home')} className="flex items-center gap-3 text-left">
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
                onClick={() => handleScrollTo(n.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <Button onClick={() => handleScrollTo('contacts')} className="hidden lg:inline-flex bg-primary hover:bg-primary/90 rounded-sm">
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
                <button key={n.id} onClick={() => handleScrollTo(n.id)} className="py-3 text-left font-medium border-b border-border/50 last:border-0">
                  {n.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
