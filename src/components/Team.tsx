import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Team = () => {
  const doctors = [
    {
      name: '张明华',
      title: '心血管科主任医师',
      specialties: ['冠心病', '心律失常', '心力衰竭'],
      experience: '30年临床经验',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
      description: '北京协和医学院博士，曾在美国哈佛医学院进修，擅长复杂心血管疾病的诊治。'
    },
    {
      name: '李晓雯',
      title: '神经科主任医师',
      specialties: ['脑卒中', '帕金森病', '癫痫'],
      experience: '25年临床经验',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
      description: '清华大学医学院博士，国际神经病学会会员，在神经系统疾病治疗方面造诣深厚。'
    },
    {
      name: '王建国',
      title: '骨科主任医师',
      specialties: ['关节置换', '脊柱手术', '运动损伤'],
      experience: '28年临床经验',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80',
      description: '上海交通大学医学院博士，曾在德国慕尼黑大学附属医院学习，精通微创骨科手术。'
    },
    {
      name: '陈美玲',
      title: '眼科主任医师',
      specialties: ['白内障', '青光眼', '眼底病'],
      experience: '22年临床经验',
      image: 'https://images.unsplash.com/photo-1594824804732-ca8db2a8edc3?auto=format&fit=crop&q=80',
      description: '复旦大学医学院博士，中华医学会眼科分会委员，在眼科疾病诊治方面经验丰富。'
    }
  ];

  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            专家团队
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            汇聚国内外知名专家，为您提供最专业的医疗服务
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{doctor.name}</h3>
                  <p className="text-sm opacity-90">{doctor.title}</p>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{doctor.experience}</span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doctor.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium">专业领域：</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">预约专家会诊</h3>
          <p className="text-muted-foreground mb-6">
            我们的专家团队随时为您提供专业的医疗咨询和治疗服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>咨询热线：400-888-9999</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>在线预约：24小时服务</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;