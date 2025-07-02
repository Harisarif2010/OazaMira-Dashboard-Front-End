"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const SidebarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  const menuItems = [
    {
      name: "Dashboard",
      paths: ["/", "/AdminDashboard/"],
      icon: "/images/dashboard.png",
    },
    {
      name: "Users",
      paths: "/Users",
      icon: "/images/user.png",
    },
    {
      name: "Service Provider",
      paths: "/ServiceProvider",
      icon: "/images/provider.png",
    },
    {
      name: "Orders",
      paths: "/Orders",
      icon: "/images/order.png",
    },
    {
      name: "Invoices",
      paths: "/Invoices",
      icon: "/images/invoice.png",
    },
    {
      name: "Insights & Growth",
      paths: "/AdminDashboard/ProductManagment",
      icon: "/images/graph.png",
    },
    {
      name: "Support",
      paths: "/Support",
      icon: "/images/support.png",
    },
    {
      name: "Content Moderation",
      paths: "/ContentModeration",
      icon: "/images/contnet.png",
    },
    {
      name: "Multilingual Content",
      paths: "/AdminDashboard/Quotation",
      icon: "/images/globe.png",
    },
    {
      name: "Notifications",
      paths: "/Notifications",
      icon: "/images/notif.png",
    },
    {
      name: "Compliance Management",
      paths: "/Compliance Management",
      icon: "/images/manage.png",
    },
    {
      name: "System & Security",
      paths: "/SystemSecurity",
      icon: "/images/secure.png",
    },
  ];

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Menu size={24} />
      </button>

      {/* Sidebar Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50  bg-opacity-50 z-50 flex">
          {/* Overlay */}
          <div className="bg-opacity-50" onClick={() => setIsOpen(false)}></div>

          {/* Sidebar Drawer */}
          <div className="w-3/4 max-w-xs bg-gradient-to-b from-[#356101] to-[#6C8B48] text-white p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <Image src="/logo.png" alt="Logo" width={80} height={60} />
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>

            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    href={
                      Array.isArray(item.paths) ? item.paths[0] : item.paths
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <div
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-white ${
                        isActive(item.paths) &&
                        "bg-[var(--pale-yellow)] rounded-[20px]"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarModal;
