import { Card } from "@/components/ui/card";

interface BrutalFeedbackCardProps {
  text: string;
}

const BrutalFeedbackCard = ({ text }: BrutalFeedbackCardProps) => {
  return (
    <Card className="p-4 shadow-card border-border/50 bg-card animate-fade-in border-l-4 border-l-primary">
      <p className="text-foreground leading-relaxed font-medium">{text}</p>
    </Card>
  );
};

export default BrutalFeedbackCard;
