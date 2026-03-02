"use client";

import {
  Globe,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle Swedish-inspired stripe accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-swedish-blue to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-swedish-yellow to-transparent opacity-80" />
      </div>

      <div className="relative z-10 px-6 text-center max-w-2xl mx-auto">
        {/* Logo / Brand mark */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-swedish-blue flex items-center justify-center shadow-lg">
            <Globe className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <Sparkles className="w-6 h-6 text-swedish-yellow" strokeWidth={2} />
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-slate-800 dark:text-slate-100 tracking-tight mb-4">
          Swedish Network
          <span className="block text-swedish-blue">Thailand</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-display font-medium mb-2">
          Connecting the Swedish community in Thailand
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-swedish-yellow/20 text-slate-700 dark:text-slate-200 border border-swedish-yellow/40 mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-swedish-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-swedish-blue" />
          </span>
          <span className="font-medium">Coming soon</span>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-10">
          We are building a hub for Swedes in Thailand—events, resources, and a
          place to connect. Stay tuned.
        </p>

        {/* Contact hint */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-swedish-blue" />
            Thailand
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-swedish-blue" />
            <a
              href="mailto:hello@swedishnetworkthailand.com"
              className="hover:text-swedish-blue underline-offset-2 hover:underline transition-colors"
            >
              Get in touch
            </a>
          </span>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-swedish-blue/5 -z-0" />
      <div className="absolute top-20 left-8 w-32 h-32 rounded-full bg-swedish-yellow/5 -z-0" />
    </main>
  );
}
