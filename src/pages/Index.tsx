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
      icon: 'Truck',
      title: 'Выделенный автотранспорт',
      description: 'Перевозка грузов в выделенных автомобилях от 1 до 20 тонн',
      features: ['Грузоподъемность 1-20т', 'Современный автопарк', 'Отслеживание груза', 'Страхование']
    },
    {
      icon: 'Container',
      title: 'Контейнерные перевозки',
      description: 'Доставка грузов в контейнерах 20 и 40 футов по всей России',
      features: ['Контейнеры 20ф и 40ф', 'Морские перевозки', 'ЖД доставка', 'Таможенное оформление']
    },
    {
      icon: 'MapPin',
      title: 'География доставки',
      description: 'Перевозки от Калининграда до Камчатки по всей территории России',
      features: ['Вся территория РФ', 'Точные сроки', 'Оптимальные маршруты', 'Без выходных']
    }
  ];

  const pricingPlans = [
    {
      name: 'Автотранспорт 1-5т',
      price: 'от 35',
      period: 'руб/км',
      features: [
        'Грузоподъемность до 5 тонн',
        'Объем кузова до 40 м³',
        'Погрузка/разгрузка',
        'Страхование груза',
        'Отслеживание онлайн'
      ]
    },
    {
      name: 'Автотранспорт 5-20т',
      price: 'от 45',
      period: 'руб/км',
      popular: true,
      features: [
        'Грузоподъемность до 20 тонн',
        'Объем кузова до 90 м³',
        'Крытый/открытый кузов',
        'Экспедирование',
        'Персональный менеджер',
        'Гибкий график'
      ]
    },
    {
      name: 'Контейнеры 20ф/40ф',
      price: 'По запросу',
      period: '',
      features: [
        'Контейнеры 20 и 40 футов',
        'Морские и ЖД перевозки',
        'Таможенное оформление',
        'Складское хранение',
        'Доставка до двери',
        'Специализированные контейнеры'
      ]
    }
  ];

  const team = [
    {
      name: 'Сергей Волков',
      position: 'Генеральный директор',
      icon: 'User'
    },
    {
      name: 'Андрей Морозов',
      position: 'Начальник автопарка',
      icon: 'User'
    },
    {
      name: 'Ольга Соколова',
      position: 'Руководитель логистики',
      icon: 'User'
    },
    {
      name: 'Иван Кузнецов',
      position: 'Менеджер по работе с клиентами',
      icon: 'User'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={28} className="text-primary" />
              <span className="text-xl font-bold text-primary">ГрузТранс</span>
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
              Грузоперевозки по всей России
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              От Калининграда до Камчатки. Выделенный автотранспорт от 1т до 20т. Контейнерные перевозки 20ф и 40ф.
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
              ГрузТранс — надежная транспортная компания с многолетним опытом грузоперевозок по всей России. 
              Мы обеспечиваем безопасную доставку грузов любого объема от Калининграда до Камчатки 
              в выделенном автотранспорте и контейнерах.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">12+</h3>
                <p className="text-muted-foreground">лет на рынке</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">150+</h3>
                <p className="text-muted-foreground">постоянных клиентов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">единиц техники</p>
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
              Полный спектр транспортных услуг по всей России
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
              Выберите подходящий вариант перевозки
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
                    {plan.period && <div className="text-muted-foreground">{plan.period}</div>}
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
                    Заказать
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
                Готовы обсудить доставку? Напишите нам!
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
                    <p className="text-muted-foreground">г. Москва, Ленинградское шоссе, д. 25</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 777-88-99</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@gruztrans.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Ежедневно: 8:00 - 20:00</p>
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
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Опишите ваш груз и маршрут..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
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
              <Icon name="Truck" size={24} className="text-white" />
              <span className="font-bold text-lg">ГрузТранс</span>
            </div>
            <p className="text-sm opacity-90">
              © 2024 ГрузТранс. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
