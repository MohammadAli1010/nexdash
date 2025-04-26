import { Button } from "@/components/ui/button";
import { AudioWaveform } from "lucide-react";

const Homepage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="destructive" size="xl" className="rounded-full">
        <AudioWaveform />
        Click Me!
      </Button>
    </div>
  );
};

export default Homepage;
