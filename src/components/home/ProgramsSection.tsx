import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, GraduationCap, Users } from 'lucide-react';

const programs = [
  {
    id: 1,
    name: 'Informatică',
    level: 'Licență',
    duration: '4 ani',
    spots: 120,
    description: 'Dezvoltă competențe în programare, algoritmi și inteligență artificială.',
    href: '/programe/informatica',
  },
  {
    id: 2,
    name: 'Matematică',
    level: 'Licență',
    duration: '3 ani',
    spots: 80,
    description: 'Aprofundează analiză matematică, algebră și statistică aplicată.',
    href: '/programe/matematica',
  },
  {
    id: 3,
    name: 'Fizică',
    level: 'Licență',
    duration: '3 ani',
    spots: 60,
    description: 'Explorează mecanica cuantică, termodinamica și electronica.',
    href: '/programe/fizica',
  },
  {
    id: 4,
    name: 'Inginerie Software',
    level: 'Master',
    duration: '2 ani',
    spots: 50,
    description: 'Specializare avansată în arhitectura software și management de proiecte IT.',
    href: '/programe/inginerie-software',
  },
];

export function ProgramsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-faculty">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Programe de Studiu
          </h2>
          <p className="text-muted-foreground">
            Oferim programe de licență și masterat acreditate, 
            cu focus pe competențe practice și integrare în piața muncii.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Link
              key={program.id}
              to={program.href}
              className="card-faculty p-6 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded mb-3">
                {program.level}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {program.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {program.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {program.spots} locuri
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/programe">
              Vezi toate programele
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
