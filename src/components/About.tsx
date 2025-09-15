import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: '专业卓越',
      description: '25年医疗服务经验，持续追求医疗技术的创新与突破'
    },
    {
      icon: Target,
      title: '精准治疗',
      description: '采用先进诊疗技术，为每位患者制定个性化治疗方案'
    },
    {
      icon: Users,
      title: '以患为本',
      description: '始终将患者的健康和满意度放在首位，提供贴心服务'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '严格的医疗质量管控体系，确保医疗安全和服务质量'
    }
  ];

  const achievements = [
    { number: '25', label: '年专业经验' },
    { number: '500+', label: '专业医师' },
    { number: '100万+', label: '服务患者' },
    { number: '98%', label: '患者满意度' }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              关于康健医疗集团
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              康健医疗集团成立于1998年，是一家集医疗、教学、科研为一体的现代化综合性医疗机构。
              我们致力于为患者提供安全、有效、便民、价廉的医疗服务。
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">先进的医疗设备</h3>
                  <p className="text-muted-foreground">引进国际先进的医疗设备，为精准诊断和治疗提供强有力支持</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">专业的医疗团队</h3>
                  <p className="text-muted-foreground">汇聚国内外知名专家，具有丰富的临床经验和精湛的医疗技术</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">完善的服务体系</h3>
                  <p className="text-muted-foreground">建立了完善的医疗服务体系，为患者提供全程、全方位的医疗服务</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-delay">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 group border-0 bg-secondary/50"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;