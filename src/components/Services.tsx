import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Bone, Eye, Stethoscope, UserCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: '心血管科',
      description: '专业的心脏病诊疗服务，包括心电图、心脏彩超、冠脉造影等先进检查技术',
      features: ['24小时心电监护', '微创心脏手术', '心脏康复指导'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80'
    },
    {
      icon: Brain,
      title: '神经科',
      description: '神经系统疾病的专业诊断与治疗，拥有先进的神经影像设备和康复中心',
      features: ['脑卒中绿色通道', '神经康复治疗', '帕金森病专科'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80'
    },
    {
      icon: Bone,
      title: '骨科',
      description: '骨骼肌肉系统疾病的诊疗，提供关节置换、脊柱手术等高难度手术服务',
      features: ['微创关节手术', '运动损伤康复', '骨质疏松防治'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
    },
    {
      icon: Eye,
      title: '眼科',
      description: '眼部疾病的专业诊疗，配备国际先进的眼科检查和手术设备',
      features: ['白内障手术', '近视激光矫正', '眼底病治疗'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80'
    },
    {
      icon: Stethoscope,
      title: '内科',
      description: '内科疾病的综合诊疗服务，包括呼吸科、消化科、内分泌科等专业科室',
      features: ['慢病管理', '体检服务', '疫苗接种'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80'
    },
    {
      icon: UserCheck,
      title: '健康体检',
      description: '全面的健康体检服务，个性化体检方案，专业的健康评估和指导',
      features: ['VIP体检套餐', '职业健康检查', '健康管理咨询'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            专业医疗服务
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            我们提供全方位的医疗服务，拥有经验丰富的专家团队和先进的医疗设备
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                >
                  了解更多
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            size="lg"
            className="gradient-primary text-white px-8 py-4 text-lg hover:opacity-90"
          >
            查看所有服务
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;