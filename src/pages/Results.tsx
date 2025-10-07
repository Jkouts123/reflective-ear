import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import MetricCard from "@/components/MetricCard";
import BrutalFeedbackCard from "@/components/BrutalFeedbackCard";

const Results = () => {
  const navigate = useNavigate();

  // Mock data for Conversation Dynamics
  const conversationDynamics = {
    speakingBalance: "42%",
    interruptions: "3 interruptions",
    roleClarity: "Following",
    receptionShift: "Tone warmed after 4 min",
  };

  // Mock data for Interpersonal Skills
  const interpersonalSkills = [
    { title: "Question Quality", value: "2:5", subtitle: "deep vs. shallow" },
    { title: "Listening Strength", value: "2.1/min", subtitle: "acknowledgements" },
    { title: "Authenticity", value: "Aligned", subtitle: "tone matches content" },
    { title: "Dominance & Composure", value: "Steady", subtitle: "moderate pace" },
    { title: "Emotional Precision", value: "High", subtitle: "accurate responses" },
    { title: "Rapport Signals", value: "Strong", subtitle: "mirroring detected" },
    { title: "Direction & Leadership", value: "Unclear", subtitle: "no next steps" },
    { title: "Influence & Impact", value: "Low", subtitle: "engagement unchanged" },
  ];

  // Mock data for Brutal Feedback
  const brutalFeedback = [
    "You over-explained. You were proving, not leading.",
    "You drifted mid-conversation. No clear direction.",
    "Your tone turned apologetic when challenged.",
  ];

  // Mock data for Growth Reflection
  const growthReflection = {
    patterns: "You repeat explanations when uncertain. Shows insecurity.",
    energyDrops: "Energy drops when challenged on details. Defensiveness emerges.",
    improvement: "Set direction early. Stop proving. Start leading.",
  };

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
      <main className="px-6 pt-6 space-y-8 max-w-2xl mx-auto pb-8">
        {/* Conversation Dynamics */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide">
            Conversation Dynamics
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <MetricCard title="Speaking Balance" value={conversationDynamics.speakingBalance} subtitle="you spoke" />
            <MetricCard title="Interruptions" value={conversationDynamics.interruptions} />
            <MetricCard title="Role Clarity" value={conversationDynamics.roleClarity} />
            <MetricCard title="Reception Shift" value={conversationDynamics.receptionShift} />
          </div>
        </section>

        {/* Interpersonal Skills */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide">
            Interpersonal Skills
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {interpersonalSkills.map((skill, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                <MetricCard {...skill} />
              </div>
            ))}
          </div>
        </section>

        {/* Brutal Feedback */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide">
            Brutal Feedback
          </h2>
          <div className="space-y-3">
            {brutalFeedback.map((feedback, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <BrutalFeedbackCard text={feedback} />
              </div>
            ))}
          </div>
        </section>

        {/* Growth Reflection */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide">
            Growth Reflection
          </h2>
          <Card className="p-6 shadow-card border-border/50 animate-fade-in space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Patterns You Repeat
              </h4>
              <p className="text-foreground leading-relaxed">{growthReflection.patterns}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Situations Where Your Energy Drops
              </h4>
              <p className="text-foreground leading-relaxed">{growthReflection.energyDrops}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Biggest Improvement Opportunity
              </h4>
              <p className="text-foreground leading-relaxed font-medium">{growthReflection.improvement}</p>
            </div>
          </Card>
        </section>

        {/* Actions */}
        <div className="pt-4 flex flex-col gap-3">
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="w-full rounded-full shadow-soft"
          >
            New Session
          </Button>
          <Button
            onClick={() => navigate("/history")}
            variant="outline"
            size="lg"
            className="w-full rounded-full"
          >
            History
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Results;
