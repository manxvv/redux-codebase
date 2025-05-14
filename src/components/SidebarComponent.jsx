import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBubbleText,
  IconChartAreaLine,
  IconLibrary,
  IconSchool,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import useAuth from "../store/useAuth";

export function SidebarDemo({ outlet }) {

  const navigate = useNavigate();
  const { removeAuth } = useAuth();

  const links = [
    {
      label: "Dashboard",
      href: "dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Assigned Mentors",
      href: "assigned-mentors",
      icon: (
        <IconBubbleText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "Available Courses",
      href: "available-courses",
      icon: (
        <IconLibrary className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "Completed Courses",
      href: "completed-courses",
      icon: (
        <IconChartAreaLine className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Scheduled Classes",
      href: "scheduled-classes",
      icon: (
        <IconSchool className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "setting",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      // href: "logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      action: () => {
        removeAuth();
        navigate("/auth/login")
      }
    },

  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-full"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={{
                    label: link.label,
                    href: link.href,
                    icon: link.icon,
                  }}
                  action={link.action}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink  
              link={{
                label: "Manav Guleria",
                href: "/profile",
                icon: (
                  <img
                    src="/log.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {outlet}
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="/" //
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Admin      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};



