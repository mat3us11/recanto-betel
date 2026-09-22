import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center text-xs text-slate-500 font-medium ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && <span className="mx-1.5 text-slate-400">/</span>}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-blue-900 transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-slate-700 font-semibold' : ''}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
