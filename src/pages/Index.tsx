import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-green-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-orange-600/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Logo */}
            <div className="animate-scale-in mb-8">
              <img 
                src="https://cdn.poehali.dev/files/c121f24e-0ce0-48e7-8eaa-491a2824e430.png" 
                alt="Agro Harvest Logo" 
                className="mx-auto h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Main Title */}
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-orange-600 to-green-800 bg-clip-text text-transparent leading-tight">
                Сайт в разработке
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-6 rounded-full animate-pulse"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Мы создаём что-то удивительное для вас
            </p>

            {/* Development Card */}
            <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-green-500 to-orange-500 rounded-full w-fit">
                    <Icon name="Rocket" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">
                    Скоро запуск!
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600 mt-2">
                    Наша команда усердно работает над созданием чего-то особенного
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="grid grid-cols-3 gap-4 py-6">
                    <div className="space-y-2">
                      <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon name="Palette" size={24} className="text-green-600" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">Дизайн</p>
                    </div>
                    <div className="space-y-2">
                      <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Icon name="Code" size={24} className="text-orange-600" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">Разработка</p>
                    </div>
                    <div className="space-y-2">
                      <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon name="Sparkles" size={24} className="text-green-600" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">Магия</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="animate-fade-in space-y-6" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-2xl font-semibold text-slate-700">
                Не пропустите важные новости!
              </h3>
              
              <Button 
                className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                onClick={() => window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank')}
              >
                <Icon name="Send" size={24} className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                Присоединиться в Telegram
              </Button>
              
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Будьте первыми, кто узнает о запуске и получит эксклюзивный доступ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 opacity-20 animate-bounce" style={{ animationDelay: "2s", animationDuration: "3s" }}>
        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
      </div>
      <div className="fixed top-40 right-20 opacity-20 animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }}>
        <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
      </div>
      <div className="fixed bottom-32 left-20 opacity-20 animate-bounce" style={{ animationDelay: "3s", animationDuration: "2.5s" }}>
        <div className="w-5 h-5 bg-green-300 rounded-full"></div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-slate-200">
        <div className="h-full bg-gradient-to-r from-green-500 to-orange-500 animate-pulse" style={{ width: "75%" }}></div>
      </div>
    </div>
  );
};

export default Index;