import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Sun } from "react-feather";
import { Moon } from "react-feather";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="hover:text-sky-500">
      {theme === "dark" ? (
        <Sun onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
      ) : (
        <Moon onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
      )}
    </div>
  );
};

export default Toggle;
