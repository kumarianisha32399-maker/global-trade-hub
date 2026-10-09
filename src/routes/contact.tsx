import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/contact")({ head: () => routeHead("Contact Us", "Contact SAY EXIM TRADERS in Pune for import, export, sourcing and wholesale enquiries."), component: () => <SayEximPage page="contact" /> });