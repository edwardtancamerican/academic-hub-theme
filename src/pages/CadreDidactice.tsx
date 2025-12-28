import { Layout } from '@/components/layout/Layout';
import { Mail, BookOpen, GraduationCap } from 'lucide-react';

const departments = [
  {
    name: 'Departamentul de Informatică',
    members: [
      {
        name: 'Prof. Dr. Ion Popescu',
        title: 'Profesor universitar',
        position: 'Șef departament',
        specialization: 'Inteligență Artificială, Machine Learning',
        email: 'ion.popescu@facultate.ro',
      },
      {
        name: 'Conf. Dr. Maria Ionescu',
        title: 'Conferențiar universitar',
        specialization: 'Baze de date, Sisteme distribuite',
        email: 'maria.ionescu@facultate.ro',
      },
      {
        name: 'Lect. Dr. Andrei Georgescu',
        title: 'Lector universitar',
        specialization: 'Programare web, JavaScript',
        email: 'andrei.georgescu@facultate.ro',
      },
      {
        name: 'Asist. Dr. Elena Dumitrescu',
        title: 'Asistent universitar',
        specialization: 'Algoritmi, Structuri de date',
        email: 'elena.dumitrescu@facultate.ro',
      },
    ],
  },
  {
    name: 'Departamentul de Matematică',
    members: [
      {
        name: 'Prof. Dr. Alexandru Marin',
        title: 'Profesor universitar',
        position: 'Șef departament',
        specialization: 'Analiză matematică, Ecuații diferențiale',
        email: 'alexandru.marin@facultate.ro',
      },
      {
        name: 'Conf. Dr. Cristina Radu',
        title: 'Conferențiar universitar',
        specialization: 'Algebră, Teoria numerelor',
        email: 'cristina.radu@facultate.ro',
      },
      {
        name: 'Lect. Dr. Dan Popa',
        title: 'Lector universitar',
        specialization: 'Statistică, Probabilități',
        email: 'dan.popa@facultate.ro',
      },
    ],
  },
  {
    name: 'Departamentul de Fizică',
    members: [
      {
        name: 'Prof. Dr. Mihai Constantinescu',
        title: 'Profesor universitar',
        position: 'Șef departament',
        specialization: 'Fizică cuantică, Optica',
        email: 'mihai.constantinescu@facultate.ro',
      },
      {
        name: 'Conf. Dr. Ana Vasilescu',
        title: 'Conferențiar universitar',
        specialization: 'Termodinamică, Fizica materialelor',
        email: 'ana.vasilescu@facultate.ro',
      },
    ],
  },
];

export default function CadreDidactice() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[var(--hero-gradient)] text-primary-foreground py-16 md:py-24">
        <div className="container-faculty">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Cadre Didactice
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Echipa noastră de profesori combină experiența academică cu practica în industrie 
              pentru a oferi o educație de calitate.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-faculty">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">120</p>
              <p className="text-sm text-muted-foreground">Cadre didactice</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">35</p>
              <p className="text-sm text-muted-foreground">Profesori titulari</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">85%</p>
              <p className="text-sm text-muted-foreground">Cu doctorat</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Departamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      {departments.map((department) => (
        <section key={department.name} className="section-padding odd:bg-secondary/30">
          <div className="container-faculty">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              {department.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {department.members.map((member) => (
                <div key={member.email} className="card-faculty p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">
                    {member.title}
                  </p>
                  {member.position && (
                    <p className="text-xs text-accent font-medium mb-3">
                      {member.position}
                    </p>
                  )}
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                    <BookOpen className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{member.specialization}</span>
                  </div>
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact */}
      <section className="section-padding">
        <div className="container-faculty">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Orar consultații
            </h2>
            <p className="text-muted-foreground mb-6">
              Programul de consultații poate fi găsit pe panoul departamentului sau pe platforma e-learning. 
              Pentru programări suplimentare, contactați direct cadrul didactic.
            </p>
            <p className="text-sm text-muted-foreground">
              Secretariat facultate: <a href="mailto:secretariat@facultate.ro" className="text-primary hover:underline">secretariat@facultate.ro</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
