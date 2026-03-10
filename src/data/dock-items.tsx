import React from "react";
import {
  FaUser,
  FaProjectDiagram,
  FaComments,
  FaEnvelope,
  FaServicestack,
} from "react-icons/fa";

export const dockItems = [
  { title: "About", icon: <FaUser className="h-4 w-4" />, href: "#about" },
  {
    title: "Projects",
    icon: <FaProjectDiagram className="h-4 w-4" />,
    href: "#projects",
  },
  {
    title: "Services",
    icon: <FaServicestack className="h-4 w-4" />,
    href: "#services",
  },
  {
    title: "Testimonials",
    icon: <FaComments className="h-4 w-4" />,
    href: "#testimonials",
  },
  {
    title: "Contact",
    icon: <FaEnvelope className="h-4 w-4" />,
    href: "#contact",
  },
];
