import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/admin/login")({ head: () => routeHead("Admin Login", "Browser-based content management demo for SAY EXIM TRADERS."), component: () => <SayEximPage page="admin-login" /> });