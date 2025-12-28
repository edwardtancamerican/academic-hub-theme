import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Clock, Users, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';

const licenta = [
  {
    id: 'informatica',
    name: 'Informatică',
    duration: '4 ani',
    spots: 120,
    credits: 240,
    description: 'Programul de Informatică oferă o pregătire solidă în domeniul științelor computației, acoperind programare, algoritmi, baze de date, inteligență artificială și dezvoltare software.',
    careers: ['Programator', 'Analist IT', 'Inginer Software', 'Data Scientist'],
  },
  {
    id: 'matematica',
    name: 'Matematică',
    duration: '3 ani',
    spots: 80,
    credits: 180,
    description: 'Studiul matematicii dezvoltă gândirea analitică și capacitatea de rezolvare a problemelor complexe, cu aplicații în finanțe, cercetare și educație.',
    careers: ['Profesor', 'Actuar', 'Analist cantitativ', 'Cercetător'],
  },
  {
    id: 'fizica',
    name: 'Fizică',
    duration: '3 ani',
    spots: 60,
    credits: 180,
    description: 'Programul de Fizică combină teoria cu experimentul, pregătind specialiști în mecanică, termodinamică, electronice și fizică modernă.',
    careers: ['Fizician', 'Inginer', 'Cercetător', 'Profesor'],
  },
  {
    id: 'chimie',
    name: 'Chimie',
    duration: '3 ani',
    spots: 50,
    credits: 180,
    description: 'Studiul chimiei oferă competențe în chimie organică, anorganică și analitică, cu aplicații în industrie, cercetare și mediu.',
    careers: ['Chimist', 'Inginer chimist', 'Cercetător', 'Specialist controlul calității'],
  },
];

const master = [
  {
    id: 'inginerie-software',
    name: 'Inginerie Software',
    duration: '2 ani',
    spots: 50,
    credits: 120,
    description: 'Specializare avansată în arhitectura software, managementul proiectelor IT, DevOps și metodologii agile.',
    careers: ['Arhitect Software', 'Project Manager IT', 'Tech Lead', 'Consultant IT'],
  },
  {
    id: 'data-science',
    name: 'Data Science',
    duration: '2 ani',
    spots: 40,
    credits: 120,
    description: 'Program interdisciplinar focusat pe machine learning, analiză statistică și procesarea datelor mari.',
    careers: ['Data Scientist', 'ML Engineer', 'Business Intelligence Analyst', 'AI Researcher'],
  },
  {
    id: 'matematica-aplicata',
    name: 'Matematică Aplicată',
    duration: '2 ani',
    spots: 30,
    credits: 120,
    description: 'Aprofundarea metodelor matematice cu aplicații în finanțe, optimizare și modelare computațională.',
    careers: ['Analist cantitativ', 'Actuar', 'Cercetător', 'Consultant financiar'],
  },
];

function ProgramCard({ program, level }: { program: typeof licenta[0]; level: string }) {
  return (
    <div className="card-faculty p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded mb-2">
            {level}
          </span>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {program.name}
          </h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {level === 'Licență' ? <BookOpen className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        {program.description}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {program.duration}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          {program.spots} locuri
        </span>
        <span>{program.credits} ECTS</span>
      </div>

      <div className="mb-4">
        <p className="text-xs font-medium text-foreground mb-2">Cariere posibile:</p>
        <div className="flex flex-wrap gap-1">
          {program.careers.map((career) => (
            <span key={career} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
              {career}
            </span>
          ))}
        </div>
      </div>

      <Button asChild variant="outline" className="w-full">
        <Link to={`/programe/${program.id}`}>
          Detalii program
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}

export default function Programe() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[var(--hero-gradient)] text-primary-foreground py-16 md:py-24">
        <div className="container-faculty">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Programe de Studiu
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Oferim programe de licență și masterat acreditate ARACIS, 
              cu focus pe competențe practice și integrare în piața muncii.
            </p>
          </div>
        </div>
      </section>

      {/* Licență */}
      <section className="section-padding">
        <div className="container-faculty">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Programe de Licență
            </h2>
            <p className="text-muted-foreground">
              Studii universitare de lungă durată pentru formarea competențelor fundamentale
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {licenta.map((program) => (
              <ProgramCard key={program.id} program={program} level="Licență" />
            ))}
          </div>
        </div>
      </section>

      {/* Master */}
      <section className="section-padding bg-secondary/30">
        <div className="container-faculty">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Programe de Master
            </h2>
            <p className="text-muted-foreground">
              Specializări avansate pentru aprofundarea cunoștințelor și cercetare
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {master.map((program) => (
              <ProgramCard key={program.id} program={program} level="Master" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-faculty">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pregătit să începi?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Înscrierile pentru anul universitar 2024-2025 sunt deschise. 
              Descoperă procesul de admitere și documentele necesare.
            </p>
            <Button asChild size="lg">
              <Link to="/admitere">
                Informații admitere
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
