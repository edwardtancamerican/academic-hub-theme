import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: 'Înscrieri deschise pentru anul universitar 2024-2025',
    excerpt: 'Perioada de înscriere pentru toate programele de licență și masterat este acum deschisă. Descoperă oferta noastră educațională.',
    date: '15 Iunie 2024',
    category: 'Admitere',
    href: '/anunturi/1',
  },
  {
    id: 2,
    title: 'Conferința Internațională de Științe Aplicate',
    excerpt: 'Vă invităm să participați la cea de-a X-a ediție a conferinței noastre internaționale, care va avea loc în perioada 20-22 Septembrie.',
    date: '10 Iunie 2024',
    category: 'Evenimente',
    href: '/anunturi/2',
  },
  {
    id: 3,
    title: 'Sesiunea de examene - Calendar actualizat',
    excerpt: 'Calendarul pentru sesiunea de examene din vara 2024 a fost publicat. Consultați programarea pentru fiecare program de studiu.',
    date: '5 Iunie 2024',
    category: 'Academic',
    href: '/anunturi/3',
  },
  {
    id: 4,
    title: 'Burse de cercetare pentru studenți',
    excerpt: 'Sunt disponibile 20 de burse de cercetare pentru studenții din anii II și III. Termenul limită pentru aplicații este 30 Iunie.',
    date: '1 Iunie 2024',
    category: 'Burse',
    href: '/anunturi/4',
  },
];

export function AnnouncementsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-faculty">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Anunțuri & Noutăți
            </h2>
            <p className="text-muted-foreground">
              Ultimele informații importante pentru studenți și candidați
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/anunturi">
              Vezi toate anunțurile
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {announcements.map((announcement, index) => (
            <article 
              key={announcement.id} 
              className="card-faculty p-6 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  <Tag className="h-3 w-3" />
                  {announcement.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {announcement.date}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2">
                <Link to={announcement.href} className="hover:text-primary transition-colors">
                  {announcement.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                {announcement.excerpt}
              </p>
              <Link 
                to={announcement.href} 
                className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1 transition-colors"
              >
                Citește mai mult
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
