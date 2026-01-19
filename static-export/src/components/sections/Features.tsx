import { LayoutGrid, Lock, Smartphone, Users, Gauge, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: LayoutGrid,
    title: "All-in-One Dashboard",
    description: "Manage all your devices, sessions, and team members from a single, intuitive glass-pane interface."
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "End-to-end 256-bit AES encryption, SOC2 Type II compliance, and granular access controls."
  },
  {
    icon: Smartphone,
    title: "Mobile Support",
    description: "Full remote control for Android and iOS devices. Support your field workforce from anywhere."
  },
  {
    icon: Gauge,
    title: "Blazing Fast Speed",
    description: "Optimized proprietary protocol ensures low latency and high frame rates even on low-bandwidth connections."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite other technicians to join a session, transfer files, and chat in real-time."
  },
  {
    icon: Headphones,
    title: "Unattended Access",
    description: "Connect to servers and workstations anytime, even when no one is present at the remote end."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to provide world-class support, built into one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-500 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
