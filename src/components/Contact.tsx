
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ ...prev, submitted: true }));
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@gerold.dev",
      link: "mailto:hello@gerold.dev"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-8901",
      link: "tel:+12345678901"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "San Francisco, CA, USA",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Let's work together!</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life. Reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <div className="glassmorphism p-8 rounded-2xl">
            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Send size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-foreground/70">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false, name: '', email: '', subject: '', message: '' }))}
                  className="btn btn-primary px-5 py-2 mt-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary px-6 py-3 rounded-lg w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-foreground/70">
                Feel free to contact me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              
              <div className="space-y-6 mt-8">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="glassmorphism p-6 rounded-xl flex items-center gap-4 hover:border-primary/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-foreground/70 mt-1">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-3">
                {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  >
                    {platform[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
