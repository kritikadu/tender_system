import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Search, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/isometric_3d_digital_tender_illustration.png";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-background">
        <div className="container px-4 mx-auto md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold leading-tight tracking-tight font-heading md:text-6xl lg:text-7xl">
                Smart Tender <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
                  Management
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Streamline your procurement process with AI-driven bid evaluation, vendor rating, and secure document handling.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link href="/tenders">
                  <Button size="lg" className="h-12 px-8 text-base">Browse Tenders</Button>
                </Link>
                <Link href="/vendor">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base">Vendor Login</Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  Secure Platform
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                  AI Analytics
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative z-10 w-full max-w-[600px] aspect-square rounded-full bg-gradient-to-tr from-blue-50 to-indigo-50 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <img 
                src={heroImage} 
                alt="Digital Tender Management" 
                className="relative z-20 object-contain w-full h-auto drop-shadow-2xl animate-in fade-in zoom-in duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto md:px-8">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight font-heading md:text-4xl">Why Choose SmartDealX?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform combines traditional procurement reliability with modern AI capabilities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "AI Bid Evaluation",
                desc: "Automated analysis of bids to detect anomalies and recommend the best vendors based on historical data.",
                icon: <Search className="w-10 h-10 text-primary" />
              },
              {
                title: "Vendor Rating System",
                desc: "Transparent scoring mechanism based on past performance, delivery time, and quality assurance.",
                icon: <CheckCircle2 className="w-10 h-10 text-primary" />
              },
              {
                title: "Property Comparison",
                desc: "Integrated tool for comparing real estate assets with detailed feature analysis.",
                icon: <HomeIcon className="w-10 h-10 text-primary" />
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-lg bg-card/50 backdrop-blur hover:bg-card transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-2xl sm:px-16">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white font-heading md:text-4xl">
                Ready to digitize your tenders?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Join thousands of organizations and vendors already using SmartDealX.
              </p>
              <Button size="lg" variant="secondary" className="h-12 px-8 text-primary font-semibold">
                Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
