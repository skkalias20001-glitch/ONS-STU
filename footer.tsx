import { Users, Heart, Zap, Play } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High Quality Content",
    description: "We put effort into every video to bring you the best gaming entertainment.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join our growing community of gamers who share the same passion.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every video is crafted with dedication and a love for gaming.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Onshore Studios</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Welcome to Onshore Studios! We are a passionate gaming channel dedicated to 
              bringing you the best Minecraft and Roblox content. From epic builds to 
              challenging gameplay, we cover it all.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our mission is to create entertaining and engaging videos that bring joy to 
              gamers of all ages. Whether you are a seasoned player or just starting out, 
              there is something here for everyone.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://youtu.be/G7PNuI4r8EI?si=TgjrDIb8pd24k6tF"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-border shadow-lg transition-all duration-300 group-hover:border-primary group-hover:shadow-xl">
              <div className="relative aspect-video">
                <img
                  src="https://img.youtube.com/vi/G7PNuI4r8EI/0.jpg"
                  alt="Onshore Studios Channel Trailer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-10 w-10 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="bg-card p-4 text-center">
                <span className="text-lg font-semibold text-foreground">
                  Watch Our Channel Trailer
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
