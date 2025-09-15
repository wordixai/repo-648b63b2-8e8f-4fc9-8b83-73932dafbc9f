import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: '首页', href: '#home' },
    { name: '医疗服务', href: '#services' },
    { name: '关于我们', href: '#about' },
    { name: '专家团队', href: '#team' },
    { name: '联系我们', href: '#contact' }
  ];

  const services = [
    '心血管科',
    '神经科',
    '骨科',
    '眼科',
    '内科',
    '健康体检'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">康</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">康健医疗集团</h3>
                <p className="text-sm text-background/70">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              25年专业医疗经验，致力于为患者提供安全、有效、便民、价廉的医疗服务。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">微</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">博</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">抖</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">快速导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">医疗服务</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/80 hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">联系我们</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/80 text-sm">400-888-9999</p>
                  <p className="text-background/60 text-xs">24小时服务热线</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/80 text-sm">北京市朝阳区建国路88号</p>
                  <p className="text-background/60 text-xs">康健医疗大厦</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/80 text-sm">info@kangjian-medical.com</p>
                  <p className="text-background/60 text-xs">客服邮箱</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/80 text-sm">8:00-18:00</p>
                  <p className="text-background/60 text-xs">门诊时间（周一至周日）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-background/20" />
      
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>&copy; 2024 康健医疗集团. 保留所有权利.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-primary transition-colors cursor-pointer">隐私政策</span>
            <span className="hover:text-primary transition-colors cursor-pointer">服务条款</span>
            <span className="hover:text-primary transition-colors cursor-pointer">网站地图</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;