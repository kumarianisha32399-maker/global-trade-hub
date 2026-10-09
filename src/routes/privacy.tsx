import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/privacy")({ head: () => routeHead("Privacy Policy", "Privacy information for the SAY EXIM TRADERS website demonstration."), component: () => <SayEximPage page="privacy" /> });