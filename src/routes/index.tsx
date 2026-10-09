import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";

export const Route = createFileRoute("/")({
  head: () => routeHead("Global Import, Export & Wholesale Trading", "SAY EXIM TRADERS connects business requirements with product sourcing and import-export coordination from Pune, India."),
  component: () => <SayEximPage page="home" />,
});
