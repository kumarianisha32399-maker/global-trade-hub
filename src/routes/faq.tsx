import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/faq")({ head: () => routeHead("Frequently Asked Questions", "Answers to common product and trade enquiry questions."), component: () => <SayEximPage page="faq" /> });