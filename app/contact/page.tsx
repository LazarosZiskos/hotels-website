import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-6xl text-foreground mb-6">
              Contact Us
            </h1>
            <p className="body-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              We are here to help you plan the perfect summer experience. Reach
              out to our team for reservations, inquiries, or special requests.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hotel">Preferred Hotel</Label>
                  <select className="w-full p-3 border border-border rounded-md bg-background">
                    <option value="">Select a hotel</option>
                    <option value="hotel-hellas">Hotel Hellas</option>
                    <option value="hotel-gl">Hotel GL</option>
                  </select>
                </div> */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Ask us about availability or anything else you like..."
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-primary text-black  py-3 text-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-light text-card-foreground">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+30 23510 62571</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-light text-card-foreground">
                        Email
                      </h3>
                      <p className="text-muted-foreground">info@hotel-gl.gr</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-foreground rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-light text-card-foreground">
                        Hours
                      </h3>
                      <p className="text-muted-foreground">
                        24/7 Concierge Service
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl py-12">
                <CardHeader>
                  <CardTitle className="heading-sm text-card-foreground">
                    Hotel Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-heading font-medium text-card-foreground">
                        Hotel Hellas
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Thrakis 1, Paralia Katerini Greece, 60100
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-heading font-medium text-card-foreground">
                        Hotel GL
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Thrakis 2, Paralia Katerini Greece, 60100
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
