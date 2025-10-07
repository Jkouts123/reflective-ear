import { Mic, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => navigate("/history")}
        >
          <History className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-foreground">
              Conversational Mirror
            </h1>
            <p className="text-muted-foreground text-lg">
              Reflect, don't perform.
            </p>
          </div>

          {/* Listen Button */}
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => navigate("/listening")}
              className="w-48 h-48 rounded-full bg-gradient-accent shadow-soft hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center group"
            >
              <Mic className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            <p className="text-sm text-muted-foreground max-w-xs">
              Tap to start listening. Put your phone in your pocket and have a natural conversation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
