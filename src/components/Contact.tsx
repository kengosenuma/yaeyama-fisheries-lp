"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold text-center">{t.contact.heading}</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <CardTitle className="font-heading text-xl">{t.contact.addressLabel}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>{t.contact.address}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <CardTitle className="font-heading text-xl">{t.contact.phoneLabel}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>{t.contact.phone}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <CardTitle className="font-heading text-xl">{t.contact.hoursLabel}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>{t.contact.hours}</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-xl mx-auto mt-16">
          <h3 className="font-heading text-xl font-bold text-center mb-6">
            {t.contact.formHeading}
          </h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                {t.contact.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                {t.contact.subjectLabel}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-secondary"
              />
            </div>
            <button
              type="submit"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full")}
            >
              {t.contact.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
