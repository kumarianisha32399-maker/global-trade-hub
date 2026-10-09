import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/admin/dashboard")({ head: () => routeHead("Admin Dashboard", "Manage SAY EXIM TRADERS demo website content."), component: () => <SayEximPage page="admin" /> });