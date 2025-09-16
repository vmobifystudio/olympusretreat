import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
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
          <h1 className="font-playfair text-2xl font-bold text-foreground">Terms of Service</h1>
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
                    Terms of Service
                  </h1>
                  <p className="font-inter text-muted-foreground text-lg">
                    Effective Date: December 16, 2024
                  </p>
                </div>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    By accessing and using the Luxury Villa Estate website and services ("Services"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">2. Property Information and Availability</h2>
                  
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">2.1 Accuracy of Information</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      While we strive to provide accurate and up-to-date information about our villas and amenities, all property details, pricing, and availability are subject to change without notice. We reserve the right to correct any errors or omissions.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">2.2 Property Viewing</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Property viewings are by appointment only and subject to availability. All visitors must comply with our safety protocols and may be required to sign additional agreements before accessing the premises.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">3. Purchase Process and Obligations</h2>
                  
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">3.1 Eligibility Requirements</h3>
                    <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                      <li>Buyers must be at least 18 years of age and legally competent</li>
                      <li>Proof of financial capacity may be required</li>
                      <li>Background verification and documentation as per local laws</li>
                      <li>Compliance with foreign investment regulations if applicable</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">3.2 Reservation and Deposits</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Property reservations require a non-refundable booking deposit. The amount and terms will be specified in the reservation agreement. All deposits must be made through approved payment methods.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">3.3 Final Purchase Agreement</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      The final purchase is subject to execution of a comprehensive purchase agreement, completion of legal due diligence, and fulfillment of all conditions precedent as specified in the binding contract.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">4. Pricing and Payment Terms</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    All prices are quoted in Indian Rupees (INR) unless otherwise specified and are subject to change without notice. Additional costs may include:
                  </p>
                  <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>Registration fees, stamp duty, and legal charges</li>
                    <li>Property taxes and maintenance fees</li>
                    <li>Utility connections and setup costs</li>
                    <li>Home automation system configuration</li>
                    <li>Landscape development and customization</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">5. Construction and Delivery</h2>
                  
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">5.1 Construction Timeline</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Construction timelines are estimates and may be subject to delays due to weather, regulatory approvals, or other unforeseen circumstances. We will provide regular updates on construction progress.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">5.2 Quality Standards</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      All construction will meet or exceed applicable building codes and our specified quality standards. Any defects reported within the warranty period will be addressed according to our warranty terms.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">6. Community Guidelines and Restrictions</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Property owners must adhere to community guidelines designed to maintain the estate's luxury environment and sustainability goals:
                  </p>
                  <ul className="font-inter text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>Architectural modifications require community approval</li>
                    <li>Noise restrictions and quiet hours enforcement</li>
                    <li>Environmental sustainability requirements</li>
                    <li>Guest policies and visitor protocols</li>
                    <li>Commercial use restrictions</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Luxury Villa Estate's liability is limited to the extent permitted by law. We are not liable for indirect, incidental, special, or consequential damages. Our maximum liability shall not exceed the amount paid by the customer for the specific service or property in question.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">8. Intellectual Property</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Luxury Villa Estate and is protected by copyright and other intellectual property laws. Unauthorized use is prohibited.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">9. Dispute Resolution</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Any disputes arising from these terms or our services shall be resolved through binding arbitration in Pune, Maharashtra, India, in accordance with Indian arbitration laws. The prevailing party shall be entitled to recovery of reasonable legal fees.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">10. Governing Law</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal action must be brought in the competent courts of Pune, Maharashtra.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">11. Contact Information</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                    <p className="font-inter text-foreground font-semibold">Luxury Villa Estate</p>
                    <p className="font-inter text-muted-foreground">Email: legal@everluxeglobal.com</p>
                    <p className="font-inter text-muted-foreground">Phone: +91 989 578 7491</p>
                    <p className="font-inter text-muted-foreground">Address: 30 km from Pune, Maharashtra, India</p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">12. Modifications</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of the modified terms.
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

export default TermsOfService;