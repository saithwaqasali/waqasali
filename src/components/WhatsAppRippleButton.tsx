"use client";
import { useCallback, useRef, useState } from "react";

interface WhatsAppRippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  title?: string;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}

export default function WhatsAppRippleButton({
  children,
  title,
  position = "right",
  handleClick,
  otherClasses,
  ...props
}: WhatsAppRippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isHovered || !buttonRef.current || !rippleRef.current) return;
      setIsHovered(true);

      const button = buttonRef.current;
      const ripple = rippleRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ripple.classList.remove("ripple-leave");
      ripple.classList.add("ripple-enter");
    },
    [isHovered],
  );

  const removeRipple = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (event.target !== event.currentTarget) return;
      if (!buttonRef.current || !rippleRef.current) return;
      setIsHovered(false);

      const ripple = rippleRef.current;
      ripple.classList.remove("ripple-enter");
      ripple.classList.add("ripple-leave");
    },
    [],
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || !rippleRef.current || !isHovered) return;

      const button = buttonRef.current;
      const ripple = rippleRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    },
    [isHovered],
  );

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex h-13 w-13 md:h-14 md:w-14 items-center justify-center overflow-hidden rounded-full 
      bg-[#25D366] text-white shadow-lg transition-all duration-300 
      hover:bg-[#1ebe5d] focus:outline-none ${otherClasses || ""}`}
      onMouseEnter={createRipple}
      onMouseLeave={removeRipple}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      {...props}
    >
      {/* WhatsApp Icon */}
      <span className="relative z-10 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.89.756 5.714 2.194 8.203L0 32l7.59-2.165a15.943 15.943 0 008.41 2.394h.006c8.835 0 16-7.164 16-16S24.84.396 16 .396zm0 29.21a13.08 13.08 0 01-6.673-1.83l-.477-.283-4.5 1.283 1.2-4.386-.31-.45A13.05 13.05 0 012.92 16.4c0-7.212 5.868-13.08 13.08-13.08 7.213 0 13.08 5.868 13.08 13.08 0 7.213-5.867 13.08-13.08 13.08zm7.43-9.834c-.405-.203-2.4-1.185-2.77-1.32-.37-.136-.64-.203-.91.203-.27.405-1.05 1.32-1.29 1.59-.236.27-.473.304-.877.101-.405-.203-1.71-.63-3.26-2.01-1.205-1.075-2.02-2.402-2.257-2.807-.236-.405-.025-.623.178-.826.182-.181.405-.473.607-.71.203-.236.27-.405.405-.675.136-.27.068-.507-.034-.71-.101-.203-.91-2.19-1.246-3-.327-.786-.66-.68-.91-.693l-.777-.014c-.27 0-.71.101-1.08.507s-1.416 1.383-1.416 3.37c0 1.988 1.45 3.91 1.653 4.182.203.27 2.853 4.35 6.914 6.1.967.417 1.72.667 2.307.854.97.31 1.85.266 2.55.162.777-.116 2.4-.98 2.737-1.928.338-.946.338-1.758.236-1.928-.101-.17-.37-.27-.776-.473z" />
        </svg>
      </span>

      <span
        ref={rippleRef}
        className="ripple"
      />

      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background-color: rgba(255, 255, 255, 0.4);
          z-index: 1;
          opacity: 0;
        }
        .ripple-enter {
          animation: ripple-enter 600ms ease-out forwards;
        }
        .ripple-leave {
          animation: ripple-leave 600ms ease-out forwards;
        }
        @keyframes ripple-enter {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes ripple-leave {
          from {
            transform: scale(1);
            opacity: 1;
          }
          to {
            transform: scale(0);
            opacity: 1;
          }
        }
      `}</style>
    </button>
  );
}
