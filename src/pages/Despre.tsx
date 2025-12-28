import { Layout } from '@/components/layout/Layout';
import { GraduationCap, Users, BookOpen, Award, Building, Target } from 'lucide-react';

const stats = [
  { label: 'Ani de activitate', value: '30+' },
  { label: 'Studenți activi', value: '2,500+' },
  { label: 'Absolvenți', value: '15,000+' },
  { label: 'Cadre didactice', value: '120' },
];

const values = [
  {
    icon: Target,
    title: 'Excelență academică',
    description: 'Urmărim cele mai înalte standarde în educație și cercetare.',
  },
  {
    icon: Users,
    title: 'Colaborare',
    description: 'Încurajăm lucrul în echipă și schimbul de idei între studenți și profesori.',
  },
  {
    icon: BookOpen,
    title: 'Inovație',
    description: 'Integrăm tehnologii și metode moderne în procesul educațional.',
  },
  {
    icon: Award,
    title: 'Integritate',
    description: 'Promovăm etica profesională și onestitatea academică.',
  },
];

export default function Despre() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[var(--hero-gradient)] text-primary-foreground py-16 md:py-24">
        <div className="container-faculty">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Despre Facultate
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Cu o tradiție de peste 30 de ani în învățământul superior, 
              Facultatea de Științe este un reper al excelenței academice în România.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-faculty">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-faculty">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Misiunea noastră
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Facultatea de Științe își propune să formeze profesioniști competenți, 
                  capabili să răspundă provocărilor lumii moderne prin cunoștințe solide, 
                  gândire critică și abilități practice.
                </p>
                <p>
                  Ne dedicăm cercetării de vârf și transferului de cunoștințe către 
                  societate, contribuind la dezvoltarea tehnologică și economică a țării.
                </p>
                <p>
                  Colaborăm activ cu industria și mediul academic internațional pentru 
                  a oferi studenților noștri oportunități de dezvoltare personală și 
                  profesională la cele mai înalte standarde.
                </p>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-xl p-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Viziunea noastră
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Ne propunem să devenim un centru de referință în educație și cercetare 
                  științifică la nivel european, recunoscut pentru calitatea programelor 
                  noastre și impactul cercetării.
                </p>
                <p>
                  Vizăm dezvoltarea unei comunități academice incluzive, care promovează 
                  diversitatea, creativitatea și spiritul antreprenorial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-faculty">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Valorile noastre
            </h2>
            <p className="text-muted-foreground">
              Principiile care ne ghidează activitatea academică și de cercetare
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="card-faculty p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="container-faculty">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Scurt istoric
            </h2>
            <div className="prose prose-lg text-muted-foreground mx-auto">
              <p>
                Înființată în anul 1990, Facultatea de Științe s-a dezvoltat continuu, 
                devenind una dintre cele mai importante instituții de învățământ superior 
                din domeniul științelor exacte din România.
              </p>
              <p>
                De-a lungul anilor, am format zeci de mii de absolvenți care activează 
                cu succes în domenii precum IT, cercetare, educație și industrie, 
                atât în țară cât și în străinătate.
              </p>
              <p>
                Astăzi, facultatea dispune de laboratoare moderne, parteneriate cu 
                companii de top și o echipă de cadre didactice dedicate excelenței 
                în predare și cercetare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
