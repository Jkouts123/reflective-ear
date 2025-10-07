import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SessionCard from "@/components/SessionCard";

const History = () => {
  const navigate = useNavigate();

  // Mock data
  const sessions = [
    {
      id: "1",
      date: "Today, 2:30 PM",
      duration: "8 min 34 sec",
      warmthTrend: "up" as const,
      listeningRatio: 55,
    },
    {
      id: "2",
      date: "Yesterday, 10:15 AM",
      duration: "12 min 18 sec",
      warmthTrend: "neutral" as const,
      listeningRatio: 48,
    },
    {
      id: "3",
      date: "2 days ago, 4:45 PM",
      duration: "6 min 42 sec",
      warmthTrend: "up" as const,
      listeningRatio: 62,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft pb-8">
      {/* Header */}
      <header className="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border/50 p-4 z-10">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-foreground">History</h1>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 pt-6 space-y-4 max-w-2xl mx-auto">
        {sessions.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-muted-foreground">No sessions yet</p>
            <Button onClick={() => navigate("/")} variant="outline" className="rounded-full">
              Start Your First Session
            </Button>
          </div>
        ) : (
          sessions.map((session, index) => (
            <div
              key={session.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SessionCard {...session} />
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default History;
