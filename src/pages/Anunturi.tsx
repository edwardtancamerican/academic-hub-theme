import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Tag, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['Toate', 'Admitere', 'Academic', 'Evenimente', 'Burse', 'Documente'];

const allAnnouncements = [
  {
    id: 1,
    title: 'Înscrieri deschise pentru anul universitar 2024-2025',
    excerpt: 'Perioada de înscriere pentru toate programele de licență și masterat este acum deschisă. Candidații pot depune dosarele online sau la sediul facultății. Termenul limită este 15 Septembrie 2024.',
    date: '15 Iunie 2024',
    category: 'Admitere',
    featured: true,
  },
  {
    id: 2,
    title: 'Conferința Internațională de Științe Aplicate - Ediția a X-a',
    excerpt: 'Vă invităm să participați la cea de-a X-a ediție a conferinței noastre internaționale, care va avea loc în perioada 20-22 Septembrie. Termenul pentru trimiterea lucrărilor: 1 August.',
    date: '10 Iunie 2024',
    category: 'Evenimente',
    featured: true,
  },
  {
    id: 3,
    title: 'Sesiunea de examene - Calendar actualizat',
    excerpt: 'Calendarul pentru sesiunea de examene din vara 2024 a fost publicat. Consultați programarea pentru fiecare program de studiu pe platforma e-learning.',
    date: '5 Iunie 2024',
    category: 'Academic',
  },
  {
    id: 4,
    title: 'Burse de cercetare pentru studenți - 20 locuri disponibile',
    excerpt: 'Sunt disponibile 20 de burse de cercetare pentru studenții din anii II și III care doresc să se implice în proiecte de cercetare. Termenul limită pentru aplicații este 30 Iunie.',
    date: '1 Iunie 2024',
    category: 'Burse',
  },
  {
    id: 5,
    title: 'Actualizare regulament studii universitare',
    excerpt: 'A fost aprobată noua versiune a regulamentului de studii universitare. Documentul poate fi descărcat de pe site-ul facultății.',
    date: '28 Mai 2024',
    category: 'Documente',
  },
  {
    id: 6,
    title: 'Workshop: Introducere în Machine Learning',
    excerpt: 'Departamentul de Informatică organizează un workshop gratuit de introducere în Machine Learning pentru studenții din toți anii. Data: 15 Iunie, ora 14:00.',
    date: '25 Mai 2024',
    category: 'Evenimente',
  },
  {
    id: 7,
    title: 'Rezultate concurs burse de merit semestrul II',
    excerpt: 'Au fost publicate rezultatele pentru bursele de merit aferente semestrului II. Verificați listele pe avizierul facultății sau pe platforma online.',
    date: '20 Mai 2024',
    category: 'Burse',
  },
  {
    id: 8,
    title: 'Sesiune de restanțe - Programare',
    excerpt: 'Programarea pentru sesiunea de restanțe din luna iulie a fost publicată. Înscrierea se face online până la data de 1 Iulie.',
    date: '15 Mai 2024',
    category: 'Academic',
  },
];

export default function Anunturi() {
  const [selectedCategory, setSelectedCategory] = useState('Toate');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAnnouncements = allAnnouncements.filter((announcement) => {
    const matchesCategory = selectedCategory === 'Toate' || announcement.category === selectedCategory;
    const matchesSearch = announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          announcement.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredAnnouncements = filteredAnnouncements.filter(a => a.featured);
  const regularAnnouncements = filteredAnnouncements.filter(a => !a.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[var(--hero-gradient)] text-primary-foreground py-16 md:py-20">
        <div className="container-faculty">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Anunțuri & Noutăți
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Fii la curent cu ultimele informații importante pentru studenți, candidați și comunitatea academică.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-b border-border sticky top-20 z-40">
        <div className="container-faculty">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Caută anunțuri..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredAnnouncements.length > 0 && (
        <section className="section-padding pb-8">
          <div className="container-faculty">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Importante
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredAnnouncements.map((announcement) => (
                <article 
                  key={announcement.id}
                  className="card-faculty p-6 border-l-4 border-l-accent"
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
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {announcement.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {announcement.excerpt}
                  </p>
                  <Link 
                    to={`/anunturi/${announcement.id}`}
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
      )}

      {/* All Announcements */}
      <section className="section-padding pt-8 bg-secondary/30">
        <div className="container-faculty">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Toate anunțurile
          </h2>
          {regularAnnouncements.length > 0 ? (
            <div className="space-y-4">
              {regularAnnouncements.map((announcement) => (
                <article 
                  key={announcement.id}
                  className="card-faculty p-5 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {announcement.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {announcement.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {announcement.excerpt}
                    </p>
                  </div>
                  <Link 
                    to={`/anunturi/${announcement.id}`}
                    className="shrink-0"
                  >
                    <Button variant="outline" size="sm">
                      Citește
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nu s-au găsit anunțuri pentru criteriile selectate.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
