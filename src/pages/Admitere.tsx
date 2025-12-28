import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, CheckCircle, AlertCircle, Download, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  { date: '1 Iulie 2024', event: 'Deschiderea înscrierilor online', status: 'completed' },
  { date: '1-15 Septembrie', event: 'Depunerea dosarelor', status: 'active' },
  { date: '18 Septembrie', event: 'Afișarea rezultatelor inițiale', status: 'upcoming' },
  { date: '19-20 Septembrie', event: 'Contestații', status: 'upcoming' },
  { date: '22 Septembrie', event: 'Rezultate finale', status: 'upcoming' },
  { date: '23-30 Septembrie', event: 'Confirmarea locurilor', status: 'upcoming' },
];

const documents = [
  'Diploma de bacalaureat (original + copie)',
  'Foaia matricolă (original + copie)',
  'Certificat de naștere (copie legalizată)',
  'Carte de identitate (copie)',
  'Adeverință medicală',
  'Fotografii tip buletin (3 buc)',
  'Chitanța taxă înscriere',
];

const fees = [
  { category: 'Taxa de înscriere', amount: '150 RON' },
  { category: 'Taxa de școlarizare (buget)', amount: 'Gratuit' },
  { category: 'Taxa de școlarizare (taxă)', amount: '3,500 RON/an' },
];

export default function Admitere() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[var(--hero-gradient)] text-primary-foreground py-16 md:py-24">
        <div className="container-faculty">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary-foreground/80 mb-3">
              Admitere 2024-2025
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Înscrie-te la Facultatea de Științe
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Începe-ți călătoria academică alături de noi. 
              Găsești aici toate informațiile necesare pentru admitere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#inscriere">
                  Începe înscrierea
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#documente">
                  Vezi documente necesare
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Alert */}
      <section className="bg-accent/10 border-y border-accent/20 py-4">
        <div className="container-faculty">
          <div className="flex items-center gap-3 text-accent-foreground">
            <AlertCircle className="h-5 w-5 text-accent shrink-0" />
            <p className="text-sm">
              <strong>Termen limită înscriere:</strong> 15 Septembrie 2024. 
              Nu rata șansa de a face parte din comunitatea noastră!
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-faculty">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Calendar admitere
            </h2>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                    item.status === 'active' 
                      ? 'bg-primary/5 border-primary/20' 
                      : item.status === 'completed'
                      ? 'bg-secondary/50 border-border'
                      : 'bg-card border-border'
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full shrink-0 ${
                    item.status === 'completed' 
                      ? 'bg-primary/20 text-primary' 
                      : item.status === 'active'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Calendar className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.event}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  {item.status === 'active' && (
                    <span className="ml-auto text-xs font-medium bg-primary text-primary-foreground px-2 py-1 rounded">
                      În curs
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="documente" className="section-padding bg-secondary/30">
        <div className="container-faculty">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Documente necesare
              </h2>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <a href="#" download>
                    <Download className="h-4 w-4" />
                    Descarcă lista completă (PDF)
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Taxe și costuri
              </h2>
              <div className="card-faculty overflow-hidden">
                <div className="divide-y divide-border">
                  {fees.map((fee, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="text-foreground">{fee.category}</span>
                      <span className="font-semibold text-primary">{fee.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Taxele pot fi achitate în rate. Scutiri disponibile pentru cazuri sociale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section id="inscriere" className="section-padding">
        <div className="container-faculty">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Cum te înscrii?
            </h2>
            <p className="text-muted-foreground mb-12">
              Urmează acești pași simpli pentru a-ți depune candidatura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Înregistrare online
              </h3>
              <p className="text-sm text-muted-foreground">
                Creează-ți contul pe platforma de admitere și completează formularul.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Depunere dosar
              </h3>
              <p className="text-sm text-muted-foreground">
                Încarcă documentele online sau depune-le fizic la secretariat.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Confirmă locul
              </h3>
              <p className="text-sm text-muted-foreground">
                După afișarea rezultatelor, confirmă locul și achită taxa.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="https://admitere.universitate.ro" target="_blank" rel="noopener noreferrer">
                Platforma de înscriere
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-secondary/30">
        <div className="container-faculty">
          <div className="card-faculty p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Ai întrebări despre admitere?
            </h2>
            <p className="text-muted-foreground mb-6">
              Echipa noastră este aici să te ajute. Contactează-ne pentru orice nelămurire.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                Luni - Vineri: 09:00 - 15:00
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Camera 102, Corp A
              </span>
            </div>
            <Button asChild>
              <Link to="/contact">Contactează-ne</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
