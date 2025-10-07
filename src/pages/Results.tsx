import { ArrowLeft, Percent, Heart, AlertCircle, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import InsightCard from "@/components/InsightCard";
import { Card } from "@/components/ui/card";

const Results = () => {
  const navigate = useNavigate();

  // Mock data
  const insights = [
    {
      icon: Percent,
      title: "Speaking Balance",
      value: "45%",
      description: "You listened slightly more than you spoke. This shows active engagement.",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Empathy Markers",
      value: "4 times",
      description: "You acknowledged others' feelings and showed understanding.",
      color: "accent",
    },
    {
      icon: Volume2,
      title: "Tone Warmth",
      value: "Steady",
      description: "Your tone remained calm and welcoming throughout the conversation.",
      color: "primary",
    },
    {
      icon: AlertCircle,
      title: "Interruptions",
      value: "1",
      description: "Minimal interruptions detected. You gave space for others to express themselves.",
      color: "muted",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft pb-8">
      {/* Header */}
      <header className="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border/50 p-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </header>

      {/* Content */}
      <main className="px-6 pt-6 space-y-6 max-w-2xl mx-auto">
        {/* Summary */}
        <Card className="p-6 shadow-card border-border/50 bg-gradient-soft animate-fade-in">
          <h2 className="text-xl font-semibold mb-3 text-foreground">
            Conversation Reflection
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You listened slightly more than you spoke. Your tone stayed steady and warm. 
            1 interruption noted. Overall, you created a supportive space for dialogue.
          </p>
        </Card>

        {/* Insights */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground px-1">Insights</h3>
          {insights.map((insight, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <InsightCard {...insight} />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col gap-3">
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="w-full rounded-full shadow-soft"
          >
            Start New Session
          </Button>
          <Button
            onClick={() => navigate("/history")}
            variant="outline"
            size="lg"
            className="w-full rounded-full"
          >
            View History
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Results;
