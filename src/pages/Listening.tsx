import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WaveformAnimation from "@/components/WaveformAnimation";

const Listening = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStop = () => {
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-12 animate-scale-in">
        {/* Status */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-sm font-medium text-primary">Listening</span>
          </div>
        </div>

        {/* Waveform */}
        <div className="flex justify-center">
          <WaveformAnimation />
        </div>

        {/* Timer */}
        <div className="text-center">
          <p className="text-6xl font-light text-foreground tabular-nums">
            {formatTime(seconds)}
          </p>
        </div>

        {/* Stop Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleStop}
            size="lg"
            className="rounded-full px-12 shadow-soft hover:shadow-xl transition-all duration-300"
          >
            Stop & Analyze
          </Button>
        </div>

        {/* Tip */}
        <p className="text-center text-sm text-muted-foreground max-w-xs mx-auto">
          Your conversation is being analyzed privately. No data is stored or shared.
        </p>
      </div>
    </div>
  );
};

export default Listening;
