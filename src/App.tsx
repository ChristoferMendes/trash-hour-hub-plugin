import { ThemeProvider } from "./components/theme-provider";
import { Check, Trash2 } from "lucide-react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Toaster, toast } from "react-hot-toast";
import { useRequesrNotificationPermission } from "./hooks/use-request-notification-permission";

export function App() {
  useRequesrNotificationPermission();
  return (
    <ThemeProvider>
      <div className="bg-background w-full">
        <Toaster />
        <section className="flex flex-col items-center justify-center space-y-12 h-screen">
          <h3 className="font-mono font-bold text-3xl">
            It's your time to take out the trash today!
          </h3>
          <Trash2 className="w-56 h-56" />
          <AwesomeButton
            type="primary"
            before={<Check />}
            onPress={() => {
              toast.success("Good job 🎉!");
            }}
          >
            Pass to next, I'm done
          </AwesomeButton>
        </section>
      </div>
    </ThemeProvider>
  );
}
