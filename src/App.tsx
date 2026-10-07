import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volleyball, Shirt, Footprints, Droplets, Heart, Target, Users } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-50 to-cyan-50">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <Heart className="h-4 w-4" />
            My Passion Project
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            My Favorite Hobby: Volleyball
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-800/80">
            I'm Earl Polloso, and I love playing volleyball because it keeps me
            active, builds teamwork, and every spike and save brings pure joy
            with my friends on the court.
          </p>
        </header>

        {/* Main content */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Equipment Card */}
          <Card className="border-blue-200 bg-white/80 shadow-lg backdrop-blur-sm">
            <CardHeader className="border-b border-blue-100 bg-blue-50/50">
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-blue-900">
                <Shirt className="h-5 w-5 text-blue-600" />
                What I Need
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { icon: Volleyball, label: "Volleyball", desc: "A good quality ball" },
                  { icon: Footprints, label: "Sports Shoes", desc: "For quick moves" },
                  { icon: Droplets, label: "Water Bottle", desc: "Stay hydrated" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl bg-blue-50/50 p-3 transition-colors hover:bg-blue-100/70"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">{item.label}</p>
                      <p className="text-sm text-blue-700/70">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Steps Card */}
          <Card className="border-blue-200 bg-white/80 shadow-lg backdrop-blur-sm">
            <CardHeader className="border-b border-blue-100 bg-blue-50/50">
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-blue-900">
                <Target className="h-5 w-5 text-blue-600" />
                How to Start
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ol className="space-y-4">
                {[
                  { step: "1", text: "Put on your shoes and warm up.", icon: Footprints },
                  { step: "2", text: "Grab your friends and find a court.", icon: Users },
                  { step: "3", text: "Start practicing your serves and spikes!", icon: Volleyball },
                ].map((item) => (
                  <li
                    key={item.step}
                    className="flex items-center gap-4 rounded-xl bg-blue-50/50 p-3 transition-colors hover:bg-blue-100/70"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-sm">
                      {item.step}
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-blue-600" />
                      <p className="font-medium text-blue-900">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Footer badge */}
        <div className="mt-10 flex justify-center">
          <Badge className="bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
            Made with ❤️ by Earl Polloso
          </Badge>
        </div>
      </div>
    </div>
  );
}