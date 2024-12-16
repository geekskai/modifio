"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
declare var VConsole: any;

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button variant={"ghost"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <Script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js" onReady={() => {new VConsole();}} />
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
