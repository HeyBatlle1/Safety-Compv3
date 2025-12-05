import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Safety Companion V3</CardTitle>
          <CardDescription>Foundation Phase - Health Check</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">✅ Next.js 15 (App Router)</p>
            <p className="text-sm text-muted-foreground">✅ TypeScript Strict Mode</p>
            <p className="text-sm text-muted-foreground">✅ Tailwind CSS</p>
            <p className="text-sm text-muted-foreground">✅ Stone/Slate Theme</p>
            <p className="text-sm text-muted-foreground">✅ shadcn/ui Components</p>
            <p className="text-sm text-muted-foreground">✅ Geist Sans Typography</p>
          </div>
          <Button className="w-full" size="lg">
            Foundation Ready
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
