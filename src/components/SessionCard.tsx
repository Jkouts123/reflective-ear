import { Card } from "@/components/ui/card";
import { Calendar, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SessionCardProps {
  id: string;
  date: string;
  duration: string;
  warmthTrend: "up" | "down" | "neutral";
  listeningRatio: number;
}

const SessionCard = ({ id, date, duration, warmthTrend, listeningRatio }: SessionCardProps) => {
  const navigate = useNavigate();

  const getTrendIcon = () => {
    switch (warmthTrend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-primary" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-muted-foreground" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card
      className="p-4 shadow-card border-border/50 cursor-pointer hover:shadow-soft transition-all duration-300 animate-fade-in"
      onClick={() => navigate("/results", { state: { sessionId: id } })}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <p className="text-xs text-muted-foreground">{duration}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-1">Listening</p>
            <p className="text-lg font-semibold text-primary">{listeningRatio}%</p>
          </div>
          <div className="flex items-center gap-1">
            {getTrendIcon()}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SessionCard;
