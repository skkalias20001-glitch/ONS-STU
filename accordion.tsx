import { Button } from "@/components/ui/button";
import { Youtube, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-sm animate-pulse" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-sm animate-pulse delay-300" />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary rounded-sm animate-pulse delay-500" />
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-accent rounded-sm animate-pulse delay-700" />
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-primary rounded-sm animate-pulse delay-200" />
        <div className="absolute top-1/2 left-20 w-5 h-5 bg-accent rounded-sm animate-pulse delay-400" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-balance">Welcome to</span>
          <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Onshore Studios
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 text-pretty">
          Epic adventures in Minecraft and Roblox. Join us for builds, challenges, 
          gameplay, and endless fun. Your next favorite gaming channel awaits!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="gap-2 text-base px-8 py-6">
            <a
              href="https://www.youtube.com/@Onshore5446"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5" />
              Subscribe Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 text-base px-8 py-6">
            <a
              href="https://www.youtube.com/@Onshore5446/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="h-5 w-5" />
              Watch Videos
            </a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary">6K+</div>
            <div className="text-sm text-muted-foreground">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary">95+</div>
            <div className="text-sm text-muted-foreground">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary">450K+</div>
            <div className="text-sm text-muted-foreground">Views</div>
          </div>
        </div>
      </div>
    </section>
  );
}
