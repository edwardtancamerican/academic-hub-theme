import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send, Building, Users, FileText } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresă',
    content: 'Str. Universității nr. 1, București, 010001',
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: '+40 21 234 5678',
    link: 'tel:+40212345678',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'secretariat@facultate.ro',
    link: 'mailto:secretariat@facultate.ro',
  },
  {
    icon: Clock,
    title: 'Program',
    content: 'Luni - Vineri: 08:00 - 16:00',
  },
];

const departments = [
  {
    name: 'Secretariat studenți',
    phone: '+40 21 234 5679',
    email: 'studenti@facultate.ro',
    schedule: 'L-V: 09:00 - 14:00',
    room: 'Camera 102, Corp A',
  },
  {
    name: 'Secretariat admitere',
    phone: '+40 21 234 5680',
    email: 'admitere@facultate.ro',
    schedule: 'L-V: 09:00 - 15:00',
    room: 'Camera 105, Corp A',
  },
  {
    name: 'Decanat',
    phone: '+40 21 234 5681',
    email: 'decanat@facultate.ro',
    schedule: 'L-V: 10:00 - 14:00',
    room: 'Etaj 2, Corp A',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[var(--hero-gradient)] text-primary-foreground py-16 md:py-24">
        <div className="container-faculty">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contact
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Suntem aici să te ajutăm. Contactează-ne pentru orice întrebare legată de admitere, 
              programe de studiu sau activitatea facultății.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-faculty">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-faculty">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Trimite un mesaj
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Ion Popescu"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subiect *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selectează subiectul</option>
                    <option value="admitere">Întrebări admitere</option>
                    <option value="studenti">Studenți - documente</option>
                    <option value="programe">Informații programe de studiu</option>
                    <option value="colaborare">Propuneri colaborare</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>
                <Button type="submit" size="lg">
                  <Send className="h-4 w-4" />
                  Trimite mesajul
                </Button>
              </form>
            </div>

            {/* Departments */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Departamente
              </h2>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="card-faculty p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {dept.name}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="hover:text-foreground transition-colors">
                          {dept.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href={`mailto:${dept.email}`} className="hover:text-foreground transition-colors">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{dept.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4 text-primary" />
                        <span>{dept.room}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Locație
                </h3>
                <div className="card-faculty overflow-hidden">
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Hartă Google Maps</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        Deschide în Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
