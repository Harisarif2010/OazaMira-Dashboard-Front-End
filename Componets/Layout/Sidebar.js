"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  // const isActive = (path) => pathname === path;
  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  return (
    <div
      className="hidden md:flex flex-col w-1/5 h-auto"
      style={{
        background: " linear-gradient(180deg, #356101 0%, #6C8B48 100%)",
      }}
    >
      {/* Logo section */}
      <div>
        <Link href="/">
          <div className="cursor-pointer  justify-center my-2">
            <Image
              src="/logo.png"
              alt="logos"
              width={90}
              height={70}
              className="mx-auto"
              priority
            />
          </div>
        </Link>
        <div className="flex-1 ">
          {/* MENU Section */}
          <div className="mb-6 text-white">
            <ul>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/">
                  <div
                    className={`flex items-center  px-4  py-1 mb-1 cursor-pointer transition-colors  my-3   ${
                      isActive([
                        "/AdminDashboard/",
                        "/AdminDashboard/HomePageManagement",
                        "/AdminDashboard/HomePageStatistics",
                        "/AdminDashboard/HeroSection",
                        "/AdminDashboard/SearchBar",
                        "/AdminDashboard/RFQ",
                        "/AdminDashboard/TopCategory",
                        "/AdminDashboard/TopProducts",
                        "/AdminDashboard/TopBrands",
                        "/AdminDashboard/Works",
                        "/AdminDashboard/Buisness",
                        "/AdminDashboard/Reviews",
                      ]) && "bg-[var(--pale-yellow)]  "
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/dashboard.png"
                        alt="Dashboard icon"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Suppliers">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive("/AdminDashboard/Suppliers") &&
                      "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/user.png"
                        alt="user icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Users</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Users">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive("/AdminDashboard/Users") &&
                      "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/provider.png"
                        alt="Pet Profile icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      Service Provider
                    </span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Report">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive("/AdminDashboard/Report") &&
                      "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/order.png"
                        alt="Feeding Schedule icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Orders</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Orders">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors   ${
                      isActive("/AdminDashboard/Orders") &&
                      "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/invoice.png"
                        alt="Feeding Schedule icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Invoices</span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6 ">
                <Link href="/AdminDashboard/ProductManagment">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive("/AdminDashboard/Profile") &&
                      "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/graph.png"
                        alt="Pet Profile icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      Insights & Growth
                    </span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Payments">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive([
                        "/AdminDashboard/Payments",
                        "/AdminDashboard/Financials",
                      ]) && "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/support.png"
                        alt="Payment icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Support</span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/SubscriptionManagment">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive([
                        "/AdminDashboard/SubscriptionManagment",
                        "/AdminDashboard/AddSubscription",
                      ]) && "bg-[var(--pale-yellow)] rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/contnet.png"
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      Content Moderation
                    </span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Quotation">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive("/AdminDashboard/PainScore") &&
                      "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/globe.png"
                        alt="globe"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      Multilingual Content
                    </span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6 ">
                <Link href="/Notifications">
                  <div
                    className={`flex  items-center  mr-8 px-4 mb-1 cursor-pointer transition-colors    ${
                      isActive([
                        "/Notifications",
                        "/AdminDashboard/CreateAd",
                      ]) && " bg-[var(--pale-yellow)] rounded-[20px] py-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/notif.png"
                        alt="notify"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-sm font-medium">Notifications</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/DiscountCode">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive([
                        "/AdminDashboard/DiscountCode",
                        "/AdminDashboard/AddDiscount",
                      ]) && "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/manage.png"
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      Compliance Management
                    </span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Brands">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive("/AdminDashboard/Help") &&
                      "bg-[var(--pale-yellow)]  rounded-[20px]"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src="/images/secure.png"
                        alt="secure"
                        width={17}
                        height={17}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      System & Security
                    </span>
                  </div>
                </Link>
              </li>
              {/*        <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Adminstartors">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive([
                        "/AdminDashboard/Adminstartors",
                        "/AdminDashboard/AddAdminstartor",
                      ])
                        ? "bg-[var(--pale-yellow)]  rounded-[20px]"
                     
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/AdminDashboard/Adminstartors",
                            "/AdminDashboard/AddAdminstartor",
                          ])
                            ? "/icons/permissionblue.png"
                            : "/icons/permission.png"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      Permission Management
                    </span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Performance ">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 cursor-pointer transition-colors  ${
                      isActive("/AdminDashboard/Performance")
                        ? "bg-[var(--pale-yellow)]  rounded-[20px]"
                     
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Performance")
                            ? "/icons/performanceblue.png"
                            : "/icons/performance.png"
                        }
                        alt="Daily"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      Performance Monitoring
                    </span>
                  </div>
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
