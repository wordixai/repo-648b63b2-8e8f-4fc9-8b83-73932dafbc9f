import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, Mail, Car } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '联系电话',
      details: ['急诊热线：400-888-9999', '预约挂号：400-888-8888'],
      color: 'text-red-500'
    },
    {
      icon: MapPin,
      title: '医院地址',
      details: ['北京市朝阳区建国路88号', '康健医疗大厦'],
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      title: '服务时间',
      details: ['门诊：周一至周日 8:00-18:00', '急诊：24小时全天候服务'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: '邮箱地址',
      details: ['info@kangjian-medical.com', 'service@kangjian-medical.com'],
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            联系我们
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            随时为您提供专业的医疗咨询和服务，多种联系方式任您选择
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-secondary/50">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-md ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Transportation */}
            <Card className="p-6 border-0 bg-primary/5">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">交通指南</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>地铁：1号线建国门站C口</p>
                      <p>公交：1路、9路、37路建国门站</p>
                      <p>停车：地下停车场500个车位</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-delay">
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold">预约挂号</CardTitle>
                <p className="text-muted-foreground">请填写以下信息，我们会尽快与您联系</p>
              </CardHeader>
              
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">姓名 *</label>
                      <Input
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">联系电话 *</label>
                      <Input
                        placeholder="请输入您的联系电话"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">邮箱地址</label>
                      <Input
                        placeholder="请输入您的邮箱地址"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">预约科室</label>
                      <select 
                        className="w-full h-12 px-3 border border-input rounded-md bg-background"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">请选择科室</option>
                        <option value="cardiology">心血管科</option>
                        <option value="neurology">神经科</option>
                        <option value="orthopedics">骨科</option>
                        <option value="ophthalmology">眼科</option>
                        <option value="internal">内科</option>
                        <option value="checkup">健康体检</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">留言</label>
                    <Textarea
                      placeholder="请描述您的症状或需求"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full gradient-primary text-white hover:opacity-90 h-12 text-lg"
                  >
                    提交预约
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;