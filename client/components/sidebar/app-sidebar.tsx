'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Home, Settings, Sparkles, History, Files, Bell } from 'lucide-react';
import { Logo } from '@/components/logo';
import type { Route } from './nav-main';
import DashboardNavigation from '@/components/sidebar/nav-main';
import { NavUser } from './nav-user';
import { usePathname } from 'next/dist/client/components/navigation';

const dashboardRoutes: Route[] = [
  {
    id: 'home',
    title: 'Home',
    icon: <Home className="size-4" />,
    link: '/app',
  },
  {
    id: 'activity',
    title: 'Activity',
    icon: <History className="size-4" />,
    link: '/app/activity',
  },
  // {
  //   id: 'shared',
  //   title: 'Shared with me',
  //   icon: <Files className="size-4" />,
  //   link: '#',
  // },
  // {
  //   id: 'stared',
  //   title: 'Starred',
  //   icon: <Sparkles className="size-4" />,
  //   link: '#',
  // }, 
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings className="size-4" />,
    link: '#',
    subs: [
      { title: 'General', link: '#' },
      { title: 'Security', link: '#' },
      { title: 'Storage', link: '#' },
      { title: 'Support', link: '#' },
    ],
  },
];

const user = {
  name: 'John Doe',
  email: 'johndoe@cn.com',
  avatar: '/avatars/shadcn.jpg',
};

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const currentPath = usePathname();
  
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader
        className={cn(
          'flex md:pt-2.5',
          isCollapsed
            ? 'flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start'
            : 'flex-row items-center justify-between',
        )}
      >
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          {!isCollapsed && (
            <span className="font-mono text-lg text-black dark:text-white">DocuMS</span>
          )}
        </a>

        <motion.div
          key={isCollapsed ? 'header-collapsed' : 'header-expanded'}
          className={cn(
            'flex items-center gap-2',
            isCollapsed ? 'flex-row md:flex-col-reverse' : 'flex-row',
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <NotificationsPopover notifications={sampleNotifications} /> */}
          <SidebarTrigger />
        </motion.div>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <DashboardNavigation routes={dashboardRoutes} currentPath={currentPath} />
      </SidebarContent>
      <SidebarFooter className="px-2">
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
