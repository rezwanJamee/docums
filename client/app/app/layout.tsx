import React from 'react';
import { DashboardSidebar } from '@/components/sidebar-02/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SiteHeader } from './site-header';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <div className="relative flex h-dvh w-full">
          <DashboardSidebar />
          <SidebarInset>
            <SiteHeader />
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
