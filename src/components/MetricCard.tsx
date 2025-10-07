import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

const MetricCard = ({ title, value, subtitle }: MetricCardProps) => {
  return (
    <Card className="p-4 shadow-card border-border/50 animate-fade-in">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{title}</h4>
        <p className="text-2xl font-semibold text-foreground">{value}</p>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
    </Card>
  );
};

export default MetricCard;
