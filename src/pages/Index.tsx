import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Briefcase',
      title: 'Бизнес-консалтинг',
      description: 'Комплексный анализ бизнес-процессов и разработка стратегий развития компании',
      features: ['Аудит процессов', 'Оптимизация затрат', 'Стратегическое планирование']
    },
    {
      icon: 'Users',
      title: 'IT-аутсорсинг',
      description: 'Профессиональная поддержка IT-инфраструктуры и разработка программных решений',
      features: ['Техподдержка 24/7', 'Разработка ПО', 'Облачные решения']
    },
    {
      icon: 'TrendingUp',
      title: 'Управленческий консалтинг',
      description: 'Построение эффективной системы управления и развитие команды',
      features: ['Обучение персонала', 'Автоматизация', 'KPI и метрики']
    }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '50 000',
      period: 'месяц',
      features: [
        'Консультации до 10 часов',
        'Email поддержка',
        'Базовая аналитика',
        'Ежемесячный отчет'
      ]
    },
    {
      name: 'Профессиональный',
      price: '120 000',
      period: 'месяц',
      popular: true,
      features: [
        'Консультации до 30 часов',
        'Приоритетная поддержка',
        'Расширенная аналитика',
        'Еженедельные встречи',
        'Персональный менеджер'
      ]
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      period: '',
      features: [
        'Безлимитные консультации',
        'Поддержка 24/7',
        'Полный аудит',
        'Индивидуальные решения',
        'Выделенная команда'
      ]
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      icon: 'User'
    },
    {
      name: 'Мария Иванова',
      position: 'Руководитель отдела консалтинга',
      icon: 'User'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Технический директор',
      icon: 'User'
    },
    {
      name: 'Елена Смирнова',
      position: 'Руководитель проектов',
      icon: 'User'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={28} className="text-primary" />
              <span className="text-xl font-bold text-primary">BusinessPro</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'services', label: 'Услуги' },
                { id: 'pricing', label: 'Прайс' },
                { id: 'team', label: 'Команда' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Профессиональные решения для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Консалтинг и аутсорсинг от экспертов с 15-летним опытом. Помогаем компаниям расти и развиваться.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg">
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('pricing')} className="text-lg">
                Посмотреть цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BusinessPro — ведущая сервисная компания, специализирующаяся на бизнес-консалтинге 
              и IT-аутсорсинге. Мы помогаем компаниям оптимизировать процессы, внедрять современные 
              технологии и достигать стратегических целей.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">лет на рынке</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">200+</h3>
                <p className="text-muted-foreground">довольных клиентов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">успешных проектов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground">
              Выберите подходящий тариф для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all ${
                  plan.popular ? 'border-primary border-2 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    {plan.period && <div className="text-muted-foreground">₽ / {plan.period}</div>}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('contact')}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наша команда</h2>
            <p className="text-lg text-muted-foreground">
              Профессионалы с многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} size={48} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Готовы обсудить ваш проект? Напишите нам!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес офиса</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Бизнес-центр, д. 123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@businesspro.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="ivan@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Расскажите о вашем проекте..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={24} className="text-white" />
              <span className="font-bold text-lg">BusinessPro</span>
            </div>
            <p className="text-sm opacity-90">
              © 2024 BusinessPro. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
