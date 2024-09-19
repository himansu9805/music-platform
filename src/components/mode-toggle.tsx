import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "./ui/switch";
import { useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setChecked(!checked);
  }

  return (
    <div className="flex items-center space-x-2">
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 dark:scale-100" />
      <Switch id="airplane-mode" checked={checked} onCheckedChange={toggleTheme} />
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90 dark:scale-100" />
    </div>
  );
}
