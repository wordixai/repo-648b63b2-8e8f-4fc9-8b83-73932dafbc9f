import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Users, Award, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Users, label: '服务患者', value: '100万+' },
    { icon: Award, label: '专业医师', value: '500+' },
    { icon: Shield, label: '服务年限', value: '25年' },
    { icon: Clock, label: '24小时', value: '急诊服务' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              专业医疗服务
              <br />
              <span className="text-accent">守护您的健康</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              25年专业医疗经验，500+资深医师团队，为您提供全方位、高品质的医疗健康服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              >
                立即预约
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                了解服务
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-delay">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-white/95 backdrop-blur-md border-0 hover:bg-white transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;