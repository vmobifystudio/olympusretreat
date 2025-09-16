import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <h1 className="font-playfair text-2xl font-bold text-foreground">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="shadow-luxury">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Privacy Policy
                  </h1>
                  <p className="font-inter text-muted-foreground text-lg">
                    Effective Date: December 16, 2024
                  </p>
                </div>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">1. Introduction</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Luxury Villa Estate ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, inquire about our properties, or engage with our services.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">2. Information We Collect</h2>
                  
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">2.1 Personal Information</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      We may collect the following personal information:
                    </p>
                    <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                      <li>Name, email address, and phone number</li>
                      <li>Mailing address and contact preferences</li>
                      <li>Investment interests and property preferences</li>
                      <li>Financial information for qualified inquiries</li>
                      <li>Communication history and inquiry details</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">2.2 Automatically Collected Information</h3>
                    <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                      <li>IP address and browser information</li>
                      <li>Device type and operating system</li>
                      <li>Website usage patterns and analytics data</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    We use your personal information for the following purposes:
                  </p>
                  <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>Responding to your inquiries and providing property information</li>
                    <li>Scheduling villa viewings and virtual tours</li>
                    <li>Processing applications and conducting background checks</li>
                    <li>Sending marketing materials and property updates (with your consent)</li>
                    <li>Improving our website and services</li>
                    <li>Complying with legal obligations and preventing fraud</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">4. Information Sharing and Disclosure</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>With trusted service providers who assist in our operations</li>
                    <li>With legal authorities when required by law</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">5. Data Security</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">6. Your Rights</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    You have the following rights regarding your personal data:
                  </p>
                  <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability and restriction of processing</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">7. Cookies and Tracking</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Our website uses cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings, though some features may not function properly if cookies are disabled.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">8. Data Retention</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When data is no longer needed, we securely delete or anonymize it.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">9. Contact Us</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                    <p className="font-inter text-foreground font-semibold">Luxury Villa Estate</p>
                    <p className="font-inter text-muted-foreground">Email: privacy@everluxeglobal.com</p>
                    <p className="font-inter text-muted-foreground">Phone: +91 989 578 7491</p>
                    <p className="font-inter text-muted-foreground">Address: 30 km from Pune, Maharashtra, India</p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">10. Updates to This Policy</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the effective date.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;