import { Card, CardContent } from "@/components/ui/card";
import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $100. Fast and reliable delivery worldwide."
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is processed securely with 256-bit SSL encryption."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help when you need it. Our support team is available around the clock."
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return your purchase within 30 days for a full refund."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-elegant-sm hover:shadow-elegant-md transition-all duration-300 bg-background">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;