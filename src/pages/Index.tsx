import SiteHeader from '@/components/SiteHeader';
import SiteSections from '@/components/SiteSections';
import SiteContacts from '@/components/SiteContacts';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader onScrollTo={scrollTo} />
      <SiteSections onScrollTo={scrollTo} />
      <SiteContacts />
    </div>
  );
};

export default Index;
