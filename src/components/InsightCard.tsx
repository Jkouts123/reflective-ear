import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  color?: string;
}

const InsightCard = ({ icon: Icon, title, value, description, color = "primary" }: InsightCardProps) => {
  return (
    <Card className="p-6 shadow-card border-border/50 animate-fade-in">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-2xl bg-${color}/10`}>
          <Icon className={`h-6 w-6 text-${color}`} />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-2xl font-semibold bg-gradient-accent bg-clip-text text-transparent">
            {value}
          </p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default InsightCard;
