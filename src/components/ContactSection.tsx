
import { useState, useRef, useEffect, FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative section-fade bg-ue-darker"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(33,150,243,0.1)_0%,_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Interested in working together or have a project in mind? 
            I'd love to discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card className="lg:col-span-2 glass p-6 border-white/10">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ue-teal">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:contact@rasmisahoo.com" 
                    className="text-muted-foreground text-sm mt-1 hover:text-ue-teal transition-colors"
                  >
                    contact@rasmisahoo.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ue-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground text-sm mt-1">Bengaluru, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ue-teal">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Available For</h4>
                  <p className="text-muted-foreground text-sm mt-1">Remote & Contract Work</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium mb-4 text-ue-teal">Connect on social</h4>
              <div className="flex gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/rasmis1235/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/70 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                {/* Website/Portfolio */}
                <a href="#" className="p-2 rounded-full bg-muted hover:bg-muted/70 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-10 p-5 bg-muted/30 rounded-lg border border-white/5">
              <h4 className="font-medium text-white mb-2">Availability Status</h4>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-sm">Currently available for new projects</span>
              </div>
            </div>
          </Card>
          
          {/* Contact Form */}
          <Card className="lg:col-span-3 glass p-6 border-white/10">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name <span className="text-ue-teal">*</span>
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    className="bg-muted border-muted"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email <span className="text-ue-teal">*</span>
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Your email" 
                    required 
                    className="bg-muted border-muted"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject of your message" 
                    className="bg-muted border-muted"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-sm font-medium">
                    Project Type
                  </label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.projectType}
                  >
                    <SelectTrigger className="bg-muted border-muted">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gameplay">Gameplay Programming</SelectItem>
                      <SelectItem value="multiplayer">Multiplayer Systems</SelectItem>
                      <SelectItem value="tools">Tools Development</SelectItem>
                      <SelectItem value="optimization">Performance Optimization</SelectItem>
                      <SelectItem value="ui">UI/UX Development</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message <span className="text-ue-teal">*</span>
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell me about your project" 
                  rows={5} 
                  required 
                  className="bg-muted border-muted resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-ue-blue to-ue-teal hover:from-ue-blue hover:to-ue-blue text-white shadow-neon hover:shadow-neon-hover transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
