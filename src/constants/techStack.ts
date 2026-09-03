import chromeIcon from "@/assets/icons/chrome.svg";
import claudeIcon from "@/assets/icons/claude.svg";
import cssIcon from "@/assets/icons/css.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import githubIcon from "@/assets/icons/github.svg";
import googleAnalyticsIcon from "@/assets/icons/googleanalytics.svg";
import htmlIcon from "@/assets/icons/html.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import jiraIcon from "@/assets/icons/jira.svg";
import netlifyIcon from "@/assets/icons/netlify.svg";
import nextIcon from "@/assets/icons/next.svg";
import notionIcon from "@/assets/icons/notion.svg";
import ollamaIcon from "@/assets/icons/ollama.svg";
import reactIcon from "@/assets/icons/react.svg";
import slackIcon from "@/assets/icons/slack.svg";
import supabaseIcon from "@/assets/icons/supabase.webp";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import tanstackIcon from "@/assets/icons/tanstack.webp";
import typescriptIcon from "@/assets/icons/typescript.svg";
import vercelIcon from "@/assets/icons/vercel.svg";
import zustandIcon from "@/assets/icons/zustand.webp";

export const TECH_STACKS = [
    {
        title: "Core Foundation",
        skills: [
            { name: "React", icon: reactIcon },
            { name: "Next.js", icon: nextIcon },
            { name: "JavaScript", icon: javascriptIcon },
            { name: "TypeScript", icon: typescriptIcon },
            { name: "HTML5", icon: htmlIcon },
        ],
    },
    {
        title: "Style",
        skills: [
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "CSS3", icon: cssIcon },
        ],
    },
    {
        title: "State Management",
        skills: [
            { name: "Zustand", icon: zustandIcon },
            { name: "TanStack Query", icon: tanstackIcon },
        ],
    },
    {
        title: "Collaboration",
        skills: [
            { name: "Git / GitHub", icon: githubIcon },
            { name: "Notion", icon: notionIcon },
            { name: "Slack", icon: slackIcon },
            { name: "Jira", icon: jiraIcon },
            { name: "Figma", icon: figmaIcon },
        ],
    },
    {
        title: "Etc",
        skills: [
            { name: "Supabase", icon: supabaseIcon },
            { name: "Vercel", icon: vercelIcon },
            { name: "Netlify", icon: netlifyIcon },
            { name: "Google Analytics", icon: googleAnalyticsIcon },
        ],
    },
    {
        title: "AI Engineering",
        skills: [
            { name: "Claude Code", icon: claudeIcon },
            { name: "Ollama", icon: ollamaIcon },
            { name: "Chrome Built-in AI", icon: chromeIcon },
        ],
    },
];
