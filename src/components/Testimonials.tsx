import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Startup",
    content: "Outstanding work! The attention to detail and technical expertise exceeded our expectations. Delivered on time and went above and beyond.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "A true professional who brings creative solutions to complex problems. The final product was polished and performant.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    content: "Incredible collaboration experience. Great communication skills and ability to translate business needs into beautiful, functional code.",
    rating: 5,
    initials: "ED",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text glow-text">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-6 glass border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="gradient-primary text-white font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
