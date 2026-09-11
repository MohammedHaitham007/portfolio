import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export const Footer = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tight text-neutral-900 dark:text-white">
              {personalInfo.name}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              — {personalInfo.role}
            </span>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 mx-1" />

            {/* Scroll To Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
