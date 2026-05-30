import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: 1,
    title: "I Ranked EVERY Minecraft Bedrock Server",
    thumbnail: "https://img.youtube.com/vi/d0Fjpzie5MU/0.jpg",
    url: "https://youtu.be/d0Fjpzie5MU?si=FibjHTgV4g7fqZwd",
  },
  {
    id: 2,
    title: "2 hunters Vs SPEEDRUNNER in Minecraft",
    thumbnail: "https://img.youtube.com/vi/0HBa58nu_k4/0.jpg",
    url: "https://youtu.be/0HBa58nu_k4?si=w4SVuG1hOCbkJx69",
  },
  {
    id: 3,
    title: "Episode 2: A MINING DISASTER!",
    thumbnail: "https://img.youtube.com/vi/hHGOHI8cl5o/0.jpg",
    url: "https://youtu.be/hHGOHI8cl5o?si=4JNFRSMlP05x-djM",
  },
  {
    id: 4,
    title: "I Played Brawl Stars for the FIRST TIME!",
    thumbnail: "https://img.youtube.com/vi/jpCwhnxtkl8/0.jpg",
    url: "https://youtu.be/jpCwhnxtkl8?si=nBN9my4wWWqFbc84",
  },
  {
    id: 5,
    title: "99 Nights In The Forest... Will I Survive?",
    thumbnail: "https://img.youtube.com/vi/-LPrNZD2hGY/0.jpg",
    url: "https://youtu.be/-LPrNZD2hGY?si=WkG-GQVUwG5-t4_e",
  },
  {
    id: 6,
    title: "Episode 1 - I Lost My YouTube Channel...",
    thumbnail: "https://img.youtube.com/vi/xzvu9-xj5rg/0.jpg",
    url: "https://youtu.be/xzvu9-xj5rg?si=vecgutGmk6SSCGXR",
  },
];

export function VideoSection() {
  return (
    <section id="videos" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-primary">Videos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Check out our newest content featuring epic builds, thrilling gameplay, and awesome challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
