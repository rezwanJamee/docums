import { ArrowUpRight, CirclePlay } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="relative z-10 max-w-3xl text-center">
        <Badge asChild className="border-border rounded-full py-1" variant="secondary">
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          Customized Shadcn UI Blocks & Components
        </h1>
        <p className="text-foreground/80 mt-6 md:text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to preview and copy.
          Streamline your development workflow with easy-to-implement examples.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg">
            Get Started <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button className="rounded-full text-base shadow-none" size="lg" variant="outline">
            <CirclePlay className="h-5! w-5!" /> Watch Demo
          </Button>
          <Link href={'/app'}>
            <Button variant="outline" className="rounded-full text-base" size="lg">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
