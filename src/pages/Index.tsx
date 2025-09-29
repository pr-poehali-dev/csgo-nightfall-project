import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentUser, setCurrentUser] = useState({
    username: 'Player007',
    subscription: 'Pro',
    expires: '2024-12-15',
    isActive: true
  });

  const [activeTab, setActiveTab] = useState('home');

  const subscriptionPlans = [
    {
      name: 'Basic',
      price: '₽999',
      period: '/месяц',
      features: ['Aimbot', 'ESP', 'Базовая защита'],
      color: 'bg-secondary'
    },
    {
      name: 'Pro',
      price: '₽1999',
      period: '/месяц',
      features: ['Aimbot Pro', 'ESP Pro', 'Wallhack', 'Triggerbot', 'Премиум защита'],
      color: 'bg-primary text-primary-foreground',
      popular: true
    },
    {
      name: 'Elite',
      price: '₽2999',
      period: '/месяц',
      features: ['Все функции Pro', 'Radar Hack', 'Skin Changer', 'Knife Changer', 'VIP поддержка'],
      color: 'bg-nightfall-acid text-black'
    }
  ];

  const features = [
    {
      icon: 'Target',
      title: 'Aimbot',
      description: 'Точное наведение на противников'
    },
    {
      icon: 'Eye',
      title: 'ESP/Wallhack',
      description: 'Видимость врагов через стены'
    },
    {
      icon: 'Zap',
      title: 'Triggerbot',
      description: 'Автоматическая стрельба'
    },
    {
      icon: 'Shield',
      title: 'Undetected',
      description: 'Полная защита от VAC'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/img/7b5b9300-495e-4373-bcd5-1f0ef40ddfc3.jpg" 
                alt="Nightfall Logo" 
                className="w-8 h-8 rounded"
              />
              <span className="font-bold text-xl font-montserrat">NIGHTFALL</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Личный кабинет', 'Покупки', 'Загрузки', 'Поддержка', 'FAQ'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(['home', 'profile', 'shop', 'downloads', 'support', 'faq'][index])}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeTab === ['home', 'profile', 'shop', 'downloads', 'support', 'faq'][index] 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="border-primary text-primary">
                {currentUser.subscription}
              </Badge>
              <Icon name="User" size={20} />
            </div>
          </div>
        </div>
      </nav>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Home */}
        <TabsContent value="home" className="m-0">
          <div className="relative">
            {/* Hero Section */}
            <section className="py-20 px-4 text-center bg-gradient-to-b from-nightfall-muted-gray to-background">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
                  NIGHTFALL
                  <span className="block text-2xl md:text-3xl text-primary mt-2">CS:GO CHEAT</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Получите несправедливое преимущество с нашими продвинутыми алгоритмами
                </p>
                <div className="space-x-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Download" className="mr-2" size={20} />
                    Скачать сейчас
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveTab('shop')}>
                    Выбрать тариф
                  </Button>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-16 px-4 bg-card/20">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Возможности софта</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={feature.icon as any} className="text-primary" size={24} />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        {/* Profile */}
        <TabsContent value="profile" className="m-0">
          <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 font-montserrat">Личный кабинет</h1>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="User" size={20} />
                    Информация о профиле
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Имя пользователя</label>
                    <p className="font-medium">{currentUser.username}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Подписка</label>
                    <p className="font-medium flex items-center gap-2">
                      {currentUser.subscription}
                      <Badge variant="outline" className={currentUser.isActive ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}>
                        {currentUser.isActive ? 'Активна' : 'Неактивна'}
                      </Badge>
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Действует до</label>
                    <p className="font-medium">{currentUser.expires}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Settings" size={20} />
                    Управление аккаунтом
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Key" className="mr-2" size={16} />
                    Сменить пароль
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => setActiveTab('shop')}>
                    <Icon name="CreditCard" className="mr-2" size={16} />
                    Продлить подписку
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать клиент
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Shop */}
        <TabsContent value="shop" className="m-0">
          <div className="max-w-6xl mx-auto py-12 px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 font-montserrat">Выберите тарифный план</h1>
              <p className="text-muted-foreground">Получите доступ к премиум функциям</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-montserrat">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      {plan.price}
                      <span className="text-sm font-normal">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-green-400" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-background text-foreground hover:bg-background/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Downloads */}
        <TabsContent value="downloads" className="m-0">
          <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 font-montserrat">Загрузки</h1>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Download" size={20} />
                  Доступные файлы
                </CardTitle>
                <CardDescription>
                  Загрузите последнюю версию клиента
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium">Nightfall Client v2.1.3</h3>
                    <p className="text-sm text-muted-foreground">Последняя стабильная версия</p>
                  </div>
                  <Button>
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-border rounded-lg opacity-50">
                  <div>
                    <h3 className="font-medium">Nightfall Injector</h3>
                    <p className="text-sm text-muted-foreground">Требуется Pro подписка</p>
                  </div>
                  <Button disabled>
                    <Icon name="Lock" className="mr-2" size={16} />
                    Недоступно
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Support */}
        <TabsContent value="support" className="m-0">
          <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 font-montserrat">Поддержка</h1>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Связаться с нами</CardTitle>
                  <CardDescription>
                    Выберите удобный способ связи
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="MessageCircle" className="mr-2" size={16} />
                    Telegram поддержка
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Mail" className="mr-2" size={16} />
                    Email поддержка
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Users" className="mr-2" size={16} />
                    Discord сервер
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Время работы</CardTitle>
                  <CardDescription>
                    Мы всегда готовы помочь
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница</span>
                      <span className="text-muted-foreground">9:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Выходные</span>
                      <span className="text-muted-foreground">10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Экстренная поддержка</span>
                      <span className="text-green-400">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* FAQ */}
        <TabsContent value="faq" className="m-0">
          <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 font-montserrat">Вопросы и ответы</h1>
            
            <div className="space-y-4">
              {[
                {
                  q: "Безопасно ли использовать чит?",
                  a: "Наш софт использует продвинутые методы защиты от античитов и регулярно обновляется."
                },
                {
                  q: "Как долго действует подписка?",
                  a: "Подписка действует в течение оплаченного периода и автоматически продлевается."
                },
                {
                  q: "Можно ли получить возврат средств?",
                  a: "Возврат возможен в течение 24 часов после покупки при наличии технических проблем."
                },
                {
                  q: "Какие системы поддерживаются?",
                  a: "Windows 10/11 x64. Требуется отключение Windows Defender."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}