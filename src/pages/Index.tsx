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
      title: 'Автомобильные перевозки',
      description: 'Выделенный транспорт для перевозки грузов любого объема и габаритов по всей России',
      features: [
        'Тентованные фуры 20т, 82м³',
        'Рефрижераторы от -20°C до +20°C',
        'Бортовые платформы с краном',
        'Цельнометаллические фургоны',
        'Низкорамные трралы до 40т',
        'Автовоз для транспортировки авто'
      ]
    },
    {
      icon: 'Container',
      title: 'Контейнерные перевозки',
      description: 'Морские и железнодорожные контейнерные перевозки с таможенным оформлением',
      features: [
        'Стандартные 20ф (33м³, 28т)',
        'Стандартные 40ф (67м³, 27т)',
        'High Cube 40ф (76м³, 27т)',
        'Рефконтейнеры 20ф/40ф',
        'Open Top с открытым верхом',
        'Flat Rack для негабарита'
      ]
    },
    {
      icon: 'Package',
      title: 'Сборные грузы LTL',
      description: 'Экономичная доставка небольших партий груза в составе сборных отправок',
      features: [
        'От 100 кг до 5 тонн',
        'Оплата только за объем груза',
        'Регулярные рейсы по РФ',
        'Доставка до терминала/двери',
        'Упаковка и паллетирование',
        'Складская обработка'
      ]
    },
    {
      icon: 'Plane',
      title: 'Авиаперевозки',
      description: 'Срочная доставка грузов по России и миру воздушным транспортом',
      features: [
        'Доставка за 24-48 часов',
        'Перевозка от 1 кг',
        'Опасные грузы ADR/IATA',
        'Температурный режим',
        'Страхование на любую сумму',
        'Сопровождение груза'
      ]
    },
    {
      icon: 'Ship',
      title: 'Морские перевозки',
      description: 'Международные морские контейнерные перевозки по всему миру',
      features: [
        'FCL — полный контейнер',
        'LCL — сборные грузы',
        'Экспорт/импорт грузов',
        'Все порты России и мира',
        'Таможенное оформление',
        'Морское страхование'
      ]
    },
    {
      icon: 'TrainFront',
      title: 'ЖД перевозки',
      description: 'Железнодорожные перевозки контейнерами и вагонами по всей России и СНГ',
      features: [
        'Контейнеры в полувагонах',
        'Крытые вагоны 60-120 м³',
        'Платформы для негабарита',
        'Цистерны для наливных грузов',
        'Рефвагоны -25°C до +25°C',
        'Маршрутные поезда'
      ]
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Страхование грузов',
      description: 'Полное страхование на сумму до 50 млн рублей. Гарантия сохранности вашего груза.'
    },
    {
      icon: 'MapPin',
      title: 'Отслеживание 24/7',
      description: 'GPS-мониторинг всех перевозок в режиме реального времени через личный кабинет.'
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Соблюдение сроков доставки или компенсация. Гарантия по договору.'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Персональный менеджер и круглосуточная диспетчерская служба.'
    },
    {
      icon: 'FileText',
      title: 'Полный пакет документов',
      description: 'Договор, ТН, акты, сертификаты. Работаем с НДС и без НДС.'
    },
    {
      icon: 'Award',
      title: 'Опыт с 2012 года',
      description: '12 лет на рынке. Более 150 постоянных клиентов по всей России.'
    }
  ];

  const detailedPricing = [
    {
      category: '🚛 Автомобильные перевозки',
      items: [
        { name: 'Газель 1.5т, 9м³', price: '25-30', unit: 'руб/км', description: 'Город/межгород, до 1500 кг' },
        { name: 'ЗИЛ/КАМАЗ 5т, 30м³', price: '35-42', unit: 'руб/км', description: 'Бортовой/тент, до 5000 кг' },
        { name: 'Фура 10т, 45м³', price: '40-48', unit: 'руб/км', description: 'Тентованная, до 10 тонн' },
        { name: 'Фура 20т, 82м³', price: '45-55', unit: 'руб/км', description: 'Еврофура, до 20 тонн' },
        { name: 'Рефрижератор 20т', price: '55-65', unit: 'руб/км', description: 'Температурный режим -20/+20°C' },
        { name: 'Низкорамный трал 40т', price: '70-90', unit: 'руб/км', description: 'Негабаритные грузы до 40т' },
      ]
    },
    {
      category: '📦 Контейнерные перевозки',
      items: [
        { name: 'Контейнер 20ф Москва-СПб', price: '45 000', unit: 'руб', description: '33м³, до 28т, 700км' },
        { name: 'Контейнер 40ф Москва-СПб', price: '55 000', unit: 'руб', description: '67м³, до 27т, 700км' },
        { name: 'Контейнер 20ф ЖД РФ', price: 'от 25', unit: 'руб/км', description: 'Железная дорога по России' },
        { name: 'Контейнер 40ф ЖД РФ', price: 'от 30', unit: 'руб/км', description: 'Железная дорога по России' },
        { name: 'Рефконтейнер 20ф', price: 'от 65', unit: 'руб/км', description: 'Температурный режим' },
        { name: 'Рефконтейнер 40ф', price: 'от 75', unit: 'руб/км', description: 'Температурный режим' },
      ]
    },
    {
      category: '✈️ Авиа и сборные грузы',
      items: [
        { name: 'Авиа по России', price: '120-180', unit: 'руб/кг', description: 'Доставка 1-2 дня' },
        { name: 'Авиа международные', price: '180-350', unit: 'руб/кг', description: 'Срочная доставка' },
        { name: 'Сборный груз Москва-СПб', price: '12-18', unit: 'руб/кг', description: 'От 100 кг, 2-3 дня' },
        { name: 'Сборный груз до 1000км', price: '8-15', unit: 'руб/кг', description: 'От 100 кг, 3-5 дней' },
        { name: 'Сборный груз >1000км', price: '15-25', unit: 'руб/кг', description: 'От 100 кг, 5-10 дней' },
        { name: 'Паллет 120x80x150см', price: '3 500', unit: 'руб', description: 'До 500 кг, Москва-СПб' },
      ]
    },
    {
      category: '🚢 Морские перевозки',
      items: [
        { name: 'Китай-Владивосток 20ф', price: '1 200', unit: 'USD', description: '15-20 дней' },
        { name: 'Китай-Владивосток 40ф', price: '1 600', unit: 'USD', description: '15-20 дней' },
        { name: 'Европа-СПб 20ф', price: '1 800', unit: 'EUR', description: '10-15 дней' },
        { name: 'Европа-СПб 40ф', price: '2 400', unit: 'EUR', description: '10-15 дней' },
        { name: 'Таможенное оформление', price: 'от 15 000', unit: 'руб', description: 'Полный комплекс услуг' },
        { name: 'Морское страхование', price: '0.3-0.5%', unit: 'от стоимости', description: 'Защита груза' },
      ]
    },
    {
      category: '🚂 Железнодорожные перевозки',
      items: [
        { name: 'Крытый вагон 60м³', price: 'от 18', unit: 'руб/км', description: 'До 68 тонн' },
        { name: 'Полувагон с контейнером', price: 'от 22', unit: 'руб/км', description: '2-3 контейнера 20ф' },
        { name: 'Платформа', price: 'от 25', unit: 'руб/км', description: 'Для негабаритных грузов' },
        { name: 'Рефвагон', price: 'от 45', unit: 'руб/км', description: 'Температурный режим' },
        { name: 'Цистерна', price: 'от 30', unit: 'руб/км', description: 'Наливные грузы' },
        { name: 'Маршрутный поезд', price: 'по запросу', unit: '', description: 'Прямая доставка без стыковки' },
      ]
    },
    {
      category: '🔧 Дополнительные услуги',
      items: [
        { name: 'Погрузка/разгрузка', price: '500-2000', unit: 'руб/час', description: 'В зависимости от сложности' },
        { name: 'Экспедирование', price: '5-10%', unit: 'от стоимости', description: 'Организация доставки' },
        { name: 'Складское хранение', price: '10-25', unit: 'руб/м³/сут', description: 'Отапливаемый склад' },
        { name: 'Упаковка и паллетирование', price: 'от 150', unit: 'руб/место', description: 'Защитная упаковка' },
        { name: 'Страхование груза', price: '0.3-1%', unit: 'от стоимости', description: 'Полис КАСКО' },
        { name: 'Сопровождение груза', price: 'от 5 000', unit: 'руб/сутки', description: 'Личный экспедитор' },
      ]
    }
  ];

  const cargoTypes = [
    {
      icon: 'Package',
      title: 'Генеральные грузы',
      description: 'Коробки, паллеты, мешки, тара — стандартная упакованная продукция'
    },
    {
      icon: 'Snowflake',
      title: 'Температурные грузы',
      description: 'Продукты питания, медикаменты, требующие режима от -25°C до +25°C'
    },
    {
      icon: 'Flame',
      title: 'Опасные грузы ADR',
      description: 'ГСМ, химия, газы — перевозка с соблюдением всех норм безопасности'
    },
    {
      icon: 'Maximize2',
      title: 'Негабаритные грузы',
      description: 'Техника, оборудование, конструкции — до 40 тонн на тралах'
    },
    {
      icon: 'Droplet',
      title: 'Наливные грузы',
      description: 'ГСМ, масла, химические жидкости в цистернах и флекситанках'
    },
    {
      icon: 'Sparkles',
      title: 'Ценные грузы',
      description: 'Электроника, ювелирные изделия — с GPS и страхованием до 50 млн'
    }
  ];

  const routes = [
    { from: 'Москва', to: 'Санкт-Петербург', distance: '700 км', time: '1-2 дня', price: 'от 35 000₽' },
    { from: 'Москва', to: 'Новосибирск', distance: '3300 км', time: '5-7 дней', price: 'от 120 000₽' },
    { from: 'Москва', to: 'Владивосток', distance: '9200 км', time: '12-15 дней', price: 'от 350 000₽' },
    { from: 'Москва', to: 'Екатеринбург', distance: '1800 км', time: '3-4 дня', price: 'от 65 000₽' },
    { from: 'СПб', to: 'Калининград', distance: '1100 км', time: '2-3 дня', price: 'от 45 000₽' },
    { from: 'Москва', to: 'Казань', distance: '800 км', time: '2 дня', price: 'от 38 000₽' },
  ];

  const team = [
    {
      name: 'Сергей Волков',
      position: 'Генеральный директор',
      icon: 'User',
      experience: '15 лет в логистике'
    },
    {
      name: 'Андрей Морозов',
      position: 'Начальник автопарка',
      icon: 'User',
      experience: '12 лет в транспорте'
    },
    {
      name: 'Ольга Соколова',
      position: 'Руководитель логистики',
      icon: 'User',
      experience: '10 лет в экспедировании'
    },
    {
      name: 'Иван Кузнецов',
      position: 'Менеджер по работе с клиентами',
      icon: 'User',
      experience: '8 лет в продажах'
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
            
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'advantages', label: 'Преимущества' },
                { id: 'pricing', label: 'Прайс' },
                { id: 'routes', label: 'Направления' },
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
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ Работаем с 2012 года • 150+ постоянных клиентов
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Грузоперевозки по всей России
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              От Калининграда до Камчатки. Автомобильные, ЖД, морские, авиа перевозки. 
              Контейнеры, фуры, сборные грузы. Полное экспедирование и страхование.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <Card className="bg-white">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Shield" size={20} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Страхование</div>
                      <div className="text-sm text-muted-foreground">до 50 млн ₽</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Гарантия сроков</div>
                      <div className="text-sm text-muted-foreground">или компенсация</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Headphones" size={20} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Поддержка</div>
                      <div className="text-sm text-muted-foreground">24/7 онлайн</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="text-lg">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg">
                +7 (495) 777-88-99
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Виды перевозок</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр транспортно-логистических услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Типы грузов</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {cargoTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={type.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{type.title}</h4>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">
              Гарантии качества и надежности на каждом этапе доставки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Прайс-лист на перевозки</h2>
            <p className="text-lg text-muted-foreground">
              Актуальные цены на транспортные услуги • Точный расчет по вашему маршруту
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {detailedPricing.map((category, catIndex) => (
              <Card key={catIndex}>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-bold text-primary whitespace-nowrap">{item.price}</div>
                          <div className="text-xs text-muted-foreground">{item.unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-3xl mx-auto bg-primary text-white">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Нужен точный расчет?</h3>
                    <p className="opacity-90">Оставьте заявку, и мы подготовим индивидуальное предложение с учетом всех особенностей вашего груза</p>
                  </div>
                  <Button size="lg" variant="secondary" onClick={() => scrollToSection('contact')} className="whitespace-nowrap">
                    Получить расчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="routes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Популярные направления</h2>
            <p className="text-lg text-muted-foreground">
              Регулярные перевозки по основным маршрутам России
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div className="font-bold">{route.from}</div>
                    <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                    <div className="font-bold">{route.to}</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Расстояние:</span>
                      <span className="font-semibold">{route.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Срок доставки:</span>
                      <span className="font-semibold">{route.time}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="text-muted-foreground">Цена (фура 20т):</span>
                      <span className="font-bold text-primary">{route.price}</span>
                    </div>
                  </div>
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
              Профессионалы с многолетним опытом в логистике
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
                  <p className="text-sm text-muted-foreground mb-2">{member.position}</p>
                  <p className="text-xs text-primary">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы рассчитаем стоимость доставки в течение 30 минут
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="bg-primary text-white">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Phone" size={24} />
                      <div>
                        <div className="text-sm opacity-90">Отдел продаж</div>
                        <div className="font-bold text-xl">+7 (495) 777-88-99</div>
                      </div>
                    </div>
                    <div className="text-sm opacity-90">Ежедневно с 8:00 до 20:00</div>
                  </CardContent>
                </Card>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес офиса</h3>
                    <p className="text-muted-foreground">г. Москва, Ленинградское шоссе, д. 25, офис 301</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@gruztrans.ru</p>
                    <p className="text-muted-foreground text-sm">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Мессенджеры</h3>
                    <p className="text-muted-foreground">WhatsApp, Telegram: +7 (495) 777-88-99</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4">Заказать расчет стоимости</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Маршрут</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Москва → Санкт-Петербург"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Описание груза</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Укажите вес, объем, габариты, особенности груза..."
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={24} className="text-white" />
                <span className="font-bold text-lg">ГрузТранс</span>
              </div>
              <p className="text-sm opacity-90">
                Надежный партнер в грузоперевозках по всей России с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Автоперевозки</li>
                <li>ЖД перевозки</li>
                <li>Морские перевозки</li>
                <li>Авиаперевозки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О нас</li>
                <li>Наш автопарк</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <div>+7 (495) 777-88-99</div>
                <div>info@gruztrans.ru</div>
                <div>Москва, Ленинградское ш., 25</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
            © 2024 ГрузТранс. Все права защищены. ИНН 7707123456 • ОГРН 1234567890123
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
