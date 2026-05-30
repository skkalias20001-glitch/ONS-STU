import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Pickaxe } from "lucide-react";

const games = [
  {
    id: 1,
    name: "Minecraft",
    description:
      "Epic builds, survival challenges, redstone tutorials, and multiplayer adventures in the world of blocks.",
    icon: Pickaxe,
    color: "bg-primary",
  },
  {
    id: 2,
    name: "Roblox",
    description:
      "Obbies, tycoons, simulators, horror games, and much more across the Roblox universe.",
    icon: Gamepad2,
    color: "bg-accent",
  },
];

export function GamesSection() {
  return (
    <section id="games" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Games We <span className="text-primary">Play</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We specialize in creating content for these awesome games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game) => (
            <Card
              key={game.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-xl ${game.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <game.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{game.name}</h3>
                <p className="text-muted-foreground">{game.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
