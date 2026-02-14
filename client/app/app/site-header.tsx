import Themetoggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ArrowUpFromLine, Bell } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-4">
        {/* <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-10"
        /> */}
        <h1 className="text-base font-medium">Home</h1>
        <div className="ml-auto flex items-center gap-3">
          <Themetoggle />
          <Button variant="ghost" size="icon">
            <Bell className="size-4" />
          </Button>
          <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-8" />
          <Button>
            <ArrowUpFromLine className="h-4 w-4" />
            Upload</Button>
        </div>
      </div>
    </header>
  );
}
