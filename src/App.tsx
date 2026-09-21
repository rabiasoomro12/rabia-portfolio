import { Icon } from "@iconify/react";

import emailjs from '@emailjs/browser';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Award,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleArrowUp,
  Coffee,
  ExternalLink,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Heart,
  Laptop,
  Landmark,
  Linkedin,
  Mail,
  Medal,
  Menu,
  Mic,
  Minus,
  Plus,
  Rabbit,
  Soup,
  Trophy,
  Users,
  X,
} from 'lucide-react';

import type { FormEvent, LucideIcon, ReactNode } from 'react';
import { certifications } from './data/certifications';
import { experience } from './data/experience';
import { profile } from './data/profile';
import { projects, type Project, type ProjectCategory } from './data/projects';
import { research } from './data/research';
import { skillGroups, technologiesUsed } from './data/skills';
import RabbitImage from './Images/Rabbit.png';
import ProfileImage from './Images/Profile.png';
import resumePdf from "./Images/Rabia's CV.pdf";

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['work', 'Projects'],
  ['research', 'Research'],
  ['contact', 'Contact'],
] as const;

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/rsoomro03/',
  github: 'https://github.com/rabiasoomro12',
  email: 'rabiasoomro1591@gmail.com',
};

type FaqEntry = {
  id: string;
  question: string;
  answer: string[];
  actionLabel: string;
  actionTarget: string;
};

const beyondCodeCategories = [
  {
    title: 'Leadership & Impact',
    entries: [
      {
        title: 'CSE Society',
        meta: 'Event Director / Head • Sukkur IBA University',
        summary: 'Led and coordinated university events and student initiatives.',
        details:
          'I led and coordinated university events through the Computer Systems Engineering Society, working with teams, students, and organizers to plan and execute activities from preparation to event day.',
      },
      {
        title: 'Sukkur IBA Student Council (SISC 2025)',
        meta: 'Department Representative',
        summary: 'Elected to represent Computer Systems Engineering students.',
        details:
          'Elected as the Computer Systems Engineering Department Representative to the 25-member Sukkur IBA Student Council, representing student perspectives and contributing to campus initiatives and institutional discussions.',
      },
      {
        title: 'VNIAS',
        meta: 'Director, IT Unit',
        summary: 'Leading digital initiatives and technical coordination.',
        details:
          'Technology + Leadership — leading technical teams, coordinating digital initiatives, and helping turn ideas into practical solutions.',
      },
    ],
  },
  {
    title: 'Speaking / Community / Events / Activities',
    entries: [
      {
        title: 'Generative AI Workshop',
        meta: 'Co-Trainer • Computer Systems Engineering Society',
        summary: 'Helped students explore practical generative AI concepts.',
        details:
          'Co-trained a Generative AI workshop organized by the Computer Systems Engineering Society, helping participants explore practical concepts and applications of generative AI through an interactive learning environment.',
      },
      {
        title: 'IEEE Student Conference on Engineering, Science, and Technology (SCONEST 2022)',
        meta: 'Organizer • Sukkur IBA University',
        summary: 'Supported technical sessions, speaker coordination, and attendee guidance.',
        details:
          'Organizer support for SCONEST 2022, contributing to technical session coordination, speaker support, and attendee guidance during the conference.',
      },
      {
        title: 'IEEE iCoMET 2023',
        meta: 'Volunteer • 4th International Conference on Computing, Mathematics & Engineering Technologies',
        summary: 'Contributed to conference coordination and participant support.',
        details:
          'As a volunteer at iCoMET 2023, I contributed to conference coordination, participant support, and event operations throughout the event.',
      },
      {
        title: 'SIBA Fest 2024',
        meta: 'Organizer • Sukkur IBA University',
        summary: 'Handled event operations, coordination, and student engagement.',
        details:
          'Supported event planning, competition coordination, participant management, and event operations throughout the festival experience.',
      },
      {
        title: 'Career Fair 2025',
        meta: 'Organizer • Sukkur IBA University',
        summary: 'Facilitated employer coordination and student support.',
        details:
          'Supported employer coordination, student assistance, and event logistics during the Career Fair 2025 experience.',
      },
      {
        title: 'Visionary Diplomats MUN — 2024',
        meta: 'Delegate • Sukkur IBA University',
        summary: 'Participated in a three-day Model United Nations conference.',
        details:
          'Participated in a three-day Model United Nations conference, engaging in formal debate, representing international perspectives, and collaborating on diplomatic solutions to global issues.',
      },
    ],
  },
  {
    title: 'Recognition',
    entries: [
      {
        title: 'Gold Medalist — Batch 2022',
        meta: 'Computer Systems Engineering • CGPA 3.83/4.00',
        summary: 'Graduated as a Gold Medalist for academic excellence.',
        details:
          'Graduated as a Gold Medalist from the Computer Systems Engineering program, completing the degree with a CGPA of 3.83/4.00.',
      },
      {
        title: 'STHP Scholar',
        meta: 'Sukkur IBA University',
        summary: 'Selected through the Sindh Talent Hunt Program.',
        details:
          'Selected through the Sindh Talent Hunt Program and awarded a full scholarship based on academic merit and competitive selection.',
      },
      {
        title: 'PM Youth Laptop Scheme — Merit Recipient',
        meta: 'Higher Education Commission, Pakistan',
        summary: 'Awarded a laptop for academic excellence.',
        details:
          'Awarded a laptop through the Prime Minister’s Youth Laptop Scheme for high academic performance.',
      },
      {
        title: 'HTML FastTrack Bootcamp — 1st Place',
        meta: 'MLSA FABTECH • 2023',
        summary: 'Won the bootcamp final quiz and secured first place.',
        details:
          'Won the final quiz of the HTML FastTrack 7-Day Bootcamp and secured 1st place among participants.',
      },
      {
        title: 'Executive Member — CSE Society',
        meta: 'Computer Systems Engineering Society',
        summary: 'Recognized for supporting technical events and student activities.',
        details:
          'Recognized for contributing to technical events, student activities, and the CSE Society community.',
      },
    ],
  },
];

const faqEntries: FaqEntry[] = [
  {
    id: 'who-is-rabia',
    question: 'Who is Rabia?',
    answer: [
      "She's a Computer Systems Engineer working at the intersection of AI, data, and research. And yes, she graduated as a Gold Medalist too. 🐇",
    ],
    actionLabel: 'Meet Rabia →',
    actionTarget: 'about',
  },
  {
    id: 'what-does-she-work-on',
    question: 'What does she work on?',
    answer: [
      'A little bit of intelligent chaos. 🐇',
      'Her work spans AI/ML, data analytics, software, intelligent systems, robotics, embedded technology, and research.',
    ],
    actionLabel: 'Explore her skills →',
    actionTarget: 'skills',
  },
  {
    id: 'ai-ml-work',
    question: 'Tell me about her AI & ML work.',
    answer: [
      'This is where things get interesting.',
      'Rabia has worked with machine learning, deep learning, computer vision, transfer learning, CNNs, and explainable AI, including her DermAI project.',
    ],
    actionLabel: 'See her projects →',
    actionTarget: 'work',
  },
  {
    id: 'research',
    question: 'What research has she done?',
    answer: [
      'She likes asking "but why does it work?" a little too much. 🐇',
      'Her research includes IEEE-published work in FPGA-oriented MPPT systems and surface defect detection, along with other academic research projects.',
    ],
    actionLabel: 'Explore research →',
    actionTarget: 'research',
  },
  {
    id: 'projects',
    question: 'What has she built?',
    answer: [
      'Quite the collection, actually.',
      'From AI and deep learning to operating systems, robotics, speech recognition, embedded IoT, image processing, databases, and full-stack applications.',
    ],
    actionLabel: 'View projects →',
    actionTarget: 'work',
  },
  {
    id: 'academic-background',
    question: "What's her academic background?",
    answer: [
      'Computer Systems Engineering at Sukkur IBA University.',
      'And she graduated as a Gold Medalist. 🎓',
    ],
    actionLabel: 'View experience →',
    actionTarget: 'experience',
  },
  {
    id: 'leadership',
    question: "What's her leadership experience?",
    answer: [
      'Apparently, building things wasn\'t enough. She had to lead people too. 🐇',
      'Rabia currently serves as Director of the IT Unit at VNIAS in a volunteer leadership role and has also held university leadership and event-management roles.',
    ],
    actionLabel: 'See her experience →',
    actionTarget: 'experience',
  },
  {
    id: 'working-toward',
    question: 'What is she working toward?',
    answer: [
      "She's currently going deeper into AI/ML and research, strengthening the foundations behind the things she builds.",
      'The bigger goal? Work that combines rigorous technical thinking, intelligent systems, research, and real-world impact.',
    ],
    actionLabel: 'Learn more →',
    actionTarget: 'about',
  },
  {
    id: 'contact',
    question: 'How can I contact her?',
    answer: [
      'Want to say hello? Easy. 🐇',
      'You can find Rabia on LinkedIn, GitHub, or email through the Contact section.',
    ],
    actionLabel: 'Contact Rabia →',
    actionTarget: 'contact',
  },
];

function isUsableUrl(value: string) {
  return value.trim() !== '' && !value.includes('[');
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  className = '',
  delay = '',
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${delay} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

function RabbitSignature({
  size = 'normal',
}: {
  size?: 'normal' | 'large';
}) {
  return (
    <span
      className={`rabbit-mark ${
        size === 'large' ? 'rabbit-mark-large' : ''
      }`}
      aria-label="rabbit signature"
    >
      <Rabbit aria-hidden="true" />
    </span>
  );
}

function DotSeparatedTags({
  tags,
  className = '',
  itemClassName = '',
}: {
  tags: string[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}>
      {tags.map((tag, index) => (
        <div key={tag} className="flex items-center gap-2">
          <span className={`font-mono-ui text-[10px] ${itemClassName}`}>{tag}</span>
          {index < tags.length - 1 && (
            <span className="font-mono-ui text-[10px] text-primary/60">•</span>
          )}
        </div>
      ))}
    </div>
  );
}

function SocialLinks({
  compact = false,
  vertical = false,
}: {
  compact?: boolean;
  vertical?: boolean;
}) {
  const linkClass = compact ? `social-link${vertical ? ' social-link-vertical' : ''}` : 'social-button';

  const items = [
    {
      href: socialLinks.linkedin,
      label: 'LinkedIn',
      icon: <Linkedin size={compact ? 14 : 15} strokeWidth={1.4} />,
      testId: 'link-linkedin',
    },
    {
      href: socialLinks.github,
      label: 'GitHub',
      icon: <Github size={compact ? 14 : 15} strokeWidth={1.4} />,
      testId: 'link-github',
    },
    {
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`,
      label: 'Email',
      icon: <Mail size={compact ? 14 : 15} strokeWidth={1.4} />,
      testId: 'link-email',
    },
  ];

  return (
    <div
      className={`flex ${
        compact
          ? vertical
            ? 'flex-col items-start gap-3'
            : 'flex-wrap gap-x-5 gap-y-3'
          : 'flex-wrap gap-3'
      }`}
    >
      {items.map(({ href, label, icon, testId }) => (
        <a
          key={testId}
          href={href}
          className={linkClass}
          target="_blank"
          rel="noreferrer"
          data-testid={testId}
        >
          {icon}
          {label}
        </a>
      ))}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b border-transparent ${
        scrolled ? 'is-scrolled' : ''
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 text-primary-foreground"
          data-testid="link-home"
        >
          <RabbitSignature />
          <span className="font-display text-[21px] leading-none">
            {profile.name}
          </span>
        </a>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>

        <nav
          className={`${
            menuOpen
              ? 'absolute left-0 right-0 top-[76px] flex border-b border-border bg-background px-5 py-6'
              : 'hidden'
          } flex-col gap-5 lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0`}
          aria-label="Main navigation"
        >
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="nav-link eyebrow text-muted-foreground transition-colors hover:text-foreground"
              data-testid={`link-nav-${id}`}
            >
              {label}
            </a>
          ))}

          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="resume-nav eyebrow flex items-center gap-2 lg:ml-2"
            data-testid="link-nav-resume"
          >
            <FileText size={13} />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}


function Hero() {
  const fullText = "Hi, I’m Rabia Soomro.";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 90 : 150;
    const pauseAfterTyping = 2200;
    const pauseAfterDeleting = 900;

    const delay =
      typedText === fullText && !isDeleting
        ? pauseAfterTyping
        : typedText === "" && isDeleting
          ? pauseAfterDeleting
          : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = fullText.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === fullText) {
          setIsDeleting(true);
        }
      } else {
        const nextText = fullText.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  return (
    <section
      id="home"
      className="relative mx-auto max-w-[1440px] overflow-hidden px-5 pb-8 pt-[104px] sm:px-8 lg:flex lg:min-h-screen lg:items-center lg:px-12 lg:pb-8 lg:pt-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-3xl" />

        <div className="absolute right-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-fuchsia-200/20 blur-3xl" />

        <div className="absolute bottom-[8%] left-[20%] h-[260px] w-[260px] rounded-full bg-indigo-200/25 blur-3xl" />

        <div className="absolute inset-x-10 top-20 h-[60%] rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[890px]">
        <Reveal>
          <div className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/80 sm:text-[12px]">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]"
              aria-hidden="true"
            />

            <span>Open to work • On-site ↔ Hybrid ↔ Remote</span>
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow mb-4 text-[15px] text-primary sm:text-[16px]">
            AI/ML Engineer · Researcher · Computer Systems Engineer
          </p>
        </Reveal>

        {/* Typing Name */}
        <Reveal delay="reveal-delay-1">
          <p className="hero-typing-text font-display text-[clamp(1.8rem,3vw,3rem)] leading-none text-foreground">
            {typedText}
            <span
              className="hero-typing-cursor"
              aria-hidden="true"
            />
          </p>
        </Reveal>

        {/* Main Heading */}
        <Reveal delay="reveal-delay-2">
          <h1 className="mt-4 max-w-[920px] font-display text-[clamp(3rem,min(10vw,16vh),9.6rem)] leading-[.79] tracking-[-.045em] text-foreground">
            Intelligent
            <br />
            <em className="text-primary">systems,</em>
            <br />
            meaningful impact.
          </h1>
        </Reveal>

        {/* Description + Buttons */}
        <Reveal
          delay="reveal-delay-3"
          className="mt-8 flex max-w-[680px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-[410px] text-[17px] leading-[1.6] text-muted-foreground">
            I explore AI, machine learning, data, and intelligent systems,
            turning complex problems into thoughtful, practical solutions.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="primary-button"
              data-testid="link-hero-projects"
            >
              Explore my work
              <ArrowDownRight size={16} />
            </a>

            <a
              href="#contact"
              className="secondary-button"
              data-testid="link-hero-contact"
            >
              Get in touch
              <Mail size={15} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Premium Portrait Card */}
      <div
        className="hero-photo-card group pointer-events-auto relative z-30 mx-auto mt-12 h-[350px] w-[275px] sm:mt-16 sm:h-[410px] sm:w-[320px] lg:absolute lg:bottom-24 lg:right-16 lg:mt-0 lg:h-[min(500px,62vh)] lg:w-[min(390px,calc(62vh*0.78))]"
        aria-label="Portrait of Rabia Soomro"
      >
        {/* Offset Frame */}
        <div className="absolute -inset-3 translate-x-3 translate-y-3 border border-primary/20" />

        {/* Soft Glow */}
        <div className="absolute -inset-8 rounded-[2rem] bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/25 group-hover:blur-[42px]" />

        {/* Main Card */}
        <div className="absolute inset-0 overflow-hidden border border-primary/40 bg-background/70 p-2 shadow-[12px_18px_45px_hsl(266_56%_25%_/_0.18)] backdrop-blur-sm transition-all duration-500 group-hover:border-primary/70 group-hover:shadow-[12px_18px_60px_hsl(266_56%_45%_/_0.35)]">
          <div className="relative h-full w-full overflow-hidden border border-primary/20 bg-secondary">
            <img
              src={RabbitImage}
              alt="Rabia Soomro"
              className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.025] group-hover:brightness-[1.06] group-hover:drop-shadow-[0_0_28px_hsl(266_56%_55%_/_0.5)]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />

            {/* Corner Marks */}
            <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-primary-foreground/70" />
            <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-primary-foreground/70" />
            <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-primary-foreground/70" />
            <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-primary-foreground/70" />
          </div>
        </div>

        {/* Identity Plate */}
        <div className="absolute -bottom-5 left-6 flex items-center gap-3 border border-primary/25 bg-background/90 px-4 py-2 shadow-[0_8px_25px_hsl(266_56%_25%_/_0.12)] backdrop-blur-md">
          <RabbitSignature />

          <div>
            <p className="font-mono-ui text-[9px] uppercase tracking-[.18em] text-primary">
              Rabia Soomro
            </p>

            <div className="mt-0.5 flex items-center gap-1.5 font-mono-ui text-[8px] uppercase tracking-[.12em] text-muted-foreground">
              <span>Woman in STEM</span>
              <Heart
                size={8}
                className="fill-violet-400 text-violet-400"
              />
            </div>
          </div>
        </div>

        {/* Scroll Link */}
        <a
          href="#about"
          className="hero-scroll-link pointer-events-auto absolute left-1/2 top-full mt-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-muted-foreground"
          data-testid="link-scroll-about"
        >
          <span className="eyebrow">Scroll to explore</span>
          <ArrowDown size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

function About() {
  const info = [
    ['01', 'Education', profile.education],
    ['02', 'Current focus', profile.focus],
    ['03', 'Interests', profile.interests],
    ['04', 'Based in', profile.location],
    ['05', 'Areas of work', profile.areas],
  ];

  return (
    <section id="about" className="bg-secondary/35">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.7fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow mb-3 text-primary text-[0.78rem] sm:text-[0.85rem]">
                About
              </p>

              <h2
                className="mt-0 font-display text-[clamp(2.6rem,4.6vw,4.8rem)] leading-[.82] tracking-[-.035em]"
                data-testid="heading-about"
              >
                Let me introduce myself
              </h2>

              <div className="about-portrait group relative mt-6 flex aspect-[4/5] max-w-[300px] items-center justify-center overflow-hidden bg-transparent p-4">
                <div className="absolute inset-0 rounded-[1.5rem] border border-primary/25 bg-white/20 backdrop-blur-[2px] transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_hsl(266_56%_45%_/_0.25)]" />

                <div className="absolute inset-3 rounded-[1.2rem] border border-primary/20 transition-all duration-500 group-hover:border-primary/40" />

                <img
                  src={ProfileImage}
                  alt="Rabia Soomro"
                  className="relative z-10 h-full w-full rounded-[1.15rem] object-cover object-center shadow-[0_16px_40px_rgba(88,48,137,0.14)] transition-all duration-500 group-hover:scale-[1.025] group-hover:brightness-[1.06] group-hover:drop-shadow-[0_0_28px_hsl(266_56%_55%_/_0.5)]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay="reveal-delay-1">
            <div>
              <p className="max-w-[770px] font-display text-[clamp(2rem,3.4vw,3.8rem)] leading-[.96] tracking-[-.025em] text-foreground">
                {profile.statement}
              </p>

              <p className="mt-8 max-w-[700px] text-[15px] leading-[1.7] text-muted-foreground">
                I’m Rabia Soomro, a Computer Systems Engineer working at the intersection of AI, data, and research.
              </p>

              <p className="mt-4 max-w-[700px] text-[15px] leading-[1.7] text-muted-foreground">
                My work spans machine learning, deep learning, computer vision, data analytics, and intelligent systems. I’ve built technical projects, worked across data and AI focused roles, led technology initiatives, and contributed to research published at IEEE conferences. These experiences have shaped the way I approach technology with curiosity, strong attention to detail, and a constant desire to understand not just how something works, but why it works.
              </p>

              <p className="mt-4 max-w-[700px] text-[15px] leading-[1.7] text-muted-foreground">
                I’m particularly drawn to problems where intelligent systems can turn complex data into meaningful insight. Whether I’m experimenting with a model, analyzing data, building a system, or exploring a research question, I enjoy going beyond the surface and understanding the ideas underneath.
              </p>

              <p className="mt-4 max-w-[700px] text-[15px] leading-[1.7] text-muted-foreground">
                Currently, I’m deepening my foundations in AI/ML and research, building toward work that combines rigorous technical thinking with practical impact.
              </p>

              <p className="mt-5 max-w-[700px] text-[13px] font-bold uppercase tracking-[0.18em] text-primary">
                Gold Medalist • Batch 2022
              </p>

              <div className="profile-details mt-8 grid max-w-[760px] sm:grid-cols-2">
                {info.map(([number, label, value]) => (
                  <div
                    key={label}
                    className="profile-detail-item group border-t border-border py-4 pr-6"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono-ui text-[10px] tracking-[0.12em] text-primary/60">
                        {number}
                      </span>

                      <p className="eyebrow text-muted-foreground">
                        {label}
                      </p>
                    </div>

                    <p className="mt-2 max-w-[280px] text-sm leading-[1.55] text-foreground/85 transition-transform duration-300 group-hover:translate-x-1">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const activeItem = experience[activeExperience];

  return (
    <section
      id="experience"
      className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where questions meet practice."
          text="A growing record of building, learning, and taking responsibility."
        />
      </Reveal>

      <div className="experience-main-card mt-10 rounded-2xl border-[1.5px] border-[#d8cde6] bg-[#ebe1f3] p-5 shadow-[0_18px_36px_hsl(266_56%_25%_/_0.06)] sm:p-6">
        <div className="grid grid-cols-[110px_1fr] gap-4 sm:grid-cols-[150px_1fr] sm:gap-6 lg:grid-cols-[200px_1fr] lg:gap-8">
          <div className="flex flex-col gap-2 sticky top-24 self-start">
            {experience.map((item, index) => (
              <button
                key={`${item.organization}-${item.role}`}
                type="button"
                onClick={() => setActiveExperience(index)}
                className={`w-full border-l-2 px-3 py-2 text-left text-xs sm:text-sm transition-colors ${
                  activeExperience === index
                    ? 'border-primary bg-primary/10 font-medium text-foreground shadow-[inset_0_0_0_1px_hsl(var(--primary)/.08)]'
                    : 'border-transparent text-muted-foreground hover:border-primary/40 hover:bg-secondary/35 hover:text-foreground'
                }`}
                aria-selected={activeExperience === index}
                role="tab"
                data-testid={`tab-experience-${index}`}
              >
                {item.organization === 'VitaNova International Alliance for Sciences (VNIAS)'
                  ? `VNIAS - ${index === 0 ? 'Director' : 'AI intern'}`
                  : item.organization === 'Excelerate'
                    ? 'Excelerate'
                    : item.organization === 'National Bank of Pakistan (NBP)'
                      ? 'NBP'
                      : 'DigiSked'}
              </button>
            ))}
          </div>

          {activeItem && (
            <article
              className="min-h-[260px]"
              role="tabpanel"
              data-testid={`panel-experience-${activeExperience}`}
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="font-mono-ui uppercase tracking-[.12em] text-primary">
                  {activeItem.dates}
                </span>
                <span>{activeItem.location}</span>
              </div>

              <h3 className="mt-3 font-display text-[clamp(1.7rem,2.5vw,2.7rem)] leading-[.9]">
                {activeItem.role}
                <span className="text-primary"> @ {activeItem.organization}</span>
              </h3>

              <p className="mt-5 max-w-[760px] text-sm leading-[1.75] text-muted-foreground">
                {activeItem.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {activeItem.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-foreground/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {activeItem.recognition && (
                <span className="mt-5 inline-flex rounded-full border border-primary/25 bg-primary/5 px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[.12em] text-primary">
                  {activeItem.recognition}
                </span>
              )}
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  const testId = `heading-${eyebrow.split(' / ')[0].toLowerCase()}`;

  return (
    <div className="max-w-[820px]">
      <p className="eyebrow mb-3 text-primary text-[0.78rem] sm:text-[0.85rem]">
        {eyebrow}
      </p>

      <h2
        className="mt-0 font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[.82] tracking-[-.04em]"
        data-testid={testId}
      >
        {title}
      </h2>

      <p className="mt-6 max-w-[410px] text-sm leading-[1.7] text-muted-foreground sm:mt-7">
        {text}
      </p>
    </div>
  );
}
function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual project-${project.visual} relative aspect-[1.18] overflow-hidden border border-foreground/10`}
      data-testid={`visual-project-${project.id}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(15,10,25,0.02),rgba(15,10,25,0.38))]" />

      <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/80">
        <span>{project.year}</span>
        <span>{project.category}</span>
      </div>

      <ArrowUpRight
        size={21}
        className="project-arrow absolute bottom-5 right-5 text-white/90"
        strokeWidth={1.2}
      />
    </div>
  );
}

function ProjectLinks({
  project,
}: {
  project: Project;
}) {
  const githubHref =
    project.githubUrl && isUsableUrl(project.githubUrl)
      ? project.githubUrl
      : '#';
  const demoLink =
    project.demoUrl && isUsableUrl(project.demoUrl)
      ? { label: 'Live Demo', href: project.demoUrl }
      : null;

  return (
    <div
      className="project-links mt-6 flex flex-wrap items-center gap-2 pt-4"
      data-testid={`group-project-links-${project.id}`}
    >
      <a
        href={githubHref}
        onClick={(event) => {
          if (githubHref === '#') {
            event.preventDefault();
          }
        }}
        target={githubHref === '#' ? undefined : '_blank'}
        rel={githubHref === '#' ? undefined : 'noreferrer'}
        className="inline-flex items-center gap-2 border border-background/30 px-3 py-2 text-xs text-background transition-colors hover:border-accent hover:text-accent"
        data-testid={`link-project-${project.id}-github`}
      >
        <Github size={13} strokeWidth={1.4} />
        Code
      </a>

      {demoLink && (
        <a
          href={demoLink.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-background/30 px-3 py-2 text-xs text-background transition-colors hover:border-accent hover:text-accent"
          data-testid={`link-project-${project.id}-live-demo`}
        >
          <ExternalLink size={13} strokeWidth={1.4} />
          {demoLink.label}
        </a>
      )}

    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [activeDetail, setActiveDetail] = useState(0);
  const selectedDetail = project.details[activeDetail] ?? project.details[0];

  return (
    <article
      className="project-card flex h-[540px] w-[min(82vw,390px)] shrink-0 flex-col overflow-hidden"
      data-testid={`card-project-${project.id}`}
    >
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="eyebrow text-accent/80">{project.status}</p>

            <h3
              className="mt-2 font-display text-2xl leading-none sm:text-3xl"
              data-testid={`text-project-title-${project.id}`}
            >
              {project.title}
            </h3>

            <p className="mt-2 text-xs font-medium text-background/70">
              {project.subtitle}
            </p>
          </div>

          {project.featured && (
            <span className="eyebrow shrink-0 text-accent">
              Featured
            </span>
          )}
        </div>

        <div className="mt-4 flex gap-5 overflow-x-auto overflow-y-hidden border-b border-background/20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {project.details.map((detail, index) => (
            <button
              key={detail.title}
              type="button"
              onClick={() => setActiveDetail(index)}
              className={`relative shrink-0 pb-2.5 text-[11px] transition-colors ${
                activeDetail === index
                  ? 'text-accent'
                  : 'text-background/60 hover:text-background'
              }`}
              aria-selected={activeDetail === index}
              role="tab"
            >
              {detail.title}

              {activeDetail === index && (
                <span className="absolute inset-x-0 bottom-[-1px] h-px bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[105px] pt-4">
          <p className="text-xs leading-[1.65] text-background/75 sm:text-sm">
            {selectedDetail?.body ?? project.longDescription}
          </p>
        </div>

        <DotSeparatedTags
          tags={project.technologies}
          itemClassName="text-accent"
          className="mt-auto pt-4 text-background/70"
        />

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
function Projects() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('.project-card');
    const amount = card ? card.offsetWidth + 24 : 420;

    track.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScroll - 10) {
        track.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        scrollProjects('right');
      }
    }, 5000);

    return () => {
      if (autoplayRef.current !== null) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <section id="work" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-[760px]">
              <p className="eyebrow text-accent">Projects</p>

              <h2 className="mt-4 font-display text-[clamp(2.8rem,5.5vw,6rem)] leading-[.86] tracking-[-.04em]">
                Things I&apos;ve built along the way.
              </h2>

              <p className="mt-4 max-w-[620px] text-xs leading-[1.65] text-background/70 sm:text-sm">
                A collection of systems, applications, experiments, and
                technical projects across AI, software, systems, robotics,
                and embedded technology.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-7">
          {/* Left arrow */}
          <div className="pointer-events-none absolute inset-y-0 left-2 z-20 flex items-center">
            <button
              type="button"
              onClick={() => scrollProjects('left')}
              aria-label="Previous projects"
              className="project-nav-button group pointer-events-auto relative flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-foreground/70 text-background/80 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:text-accent"
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.4}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>
          </div>

          {/* Right arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-2 z-20 flex items-center">
            <button
              type="button"
              onClick={() => scrollProjects('right')}
              aria-label="Next projects"
              className="project-nav-button group pointer-events-auto relative flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-foreground/70 text-background/80 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:text-accent"
            >
              <ArrowRight
                size={17}
                strokeWidth={1.4}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          <div
            ref={trackRef}
            className="project-carousel overflow-x-auto overflow-y-hidden px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex min-w-max gap-6 lg:gap-7">
              {projects.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={`reveal-delay-${(index % 3) + 1}`}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Research() {
  const allResearch = research;
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);

  const nextStep = () => {
    const firstCard = trackRef.current?.querySelector<HTMLElement>('article');

    if (!firstCard) return 500;

    return firstCard.getBoundingClientRect().width + 24;
  };

  const clearAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    clearAutoplay();

    autoplayRef.current = window.setInterval(() => {
      const track = trackRef.current;

      if (!track) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const step = nextStep();

      if (maxScroll <= 1 || track.scrollLeft + step >= maxScroll) {
        track.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        return;
      }

      track.scrollBy({
        left: step,
        behavior: 'smooth',
      });
    }, 5000);
  };

  const scrollResearch = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: direction === 'left' ? -nextStep() : nextStep(),
      behavior: 'smooth',
    });

    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      clearAutoplay();
    };
  }, []);

  return (
    <section
      id="research"
      className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Research"
          title="Questions worth staying with."
          text="A growing body of work across computer vision, deep learning, intelligent systems, and hardware-aware computing."
        />
      </Reveal>

      <div className="relative mt-6">
        {/* Left carousel control */}
        <div className="pointer-events-none absolute inset-y-0 left-3 z-20 flex items-center">
          <button
            type="button"
            aria-label="Scroll research left"
            onClick={() => scrollResearch('left')}
            onFocus={clearAutoplay}
            onBlur={startAutoplay}
            className="research-nav-button group pointer-events-auto relative flex h-12 w-12 items-center justify-center overflow-visible rounded-full border border-black/[0.07] bg-white/[0.42] text-foreground/55 backdrop-blur-md transition-all duration-500 hover:scale-[1.06] hover:border-[#c9b4d8]/60 hover:bg-white/[0.72] hover:text-[#8b6b9d] hover:shadow-[0_0_0_1px_rgba(203,183,216,0.12),0_8px_30px_rgba(145,110,165,0.12)]"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.9),transparent_42%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="pointer-events-none absolute -inset-3 rounded-full bg-[#d8c5e2]/0 blur-xl transition-all duration-500 group-hover:bg-[#d8c5e2]/30" />

            <ArrowLeft
              size={17}
              strokeWidth={1.25}
              className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-x-1"
            />
          </button>
        </div>

        {/* Right carousel control */}
        <div className="pointer-events-none absolute inset-y-0 right-3 z-20 flex items-center">
          <button
            type="button"
            aria-label="Scroll research right"
            onClick={() => scrollResearch('right')}
            onFocus={clearAutoplay}
            onBlur={startAutoplay}
            className="research-nav-button group pointer-events-auto relative flex h-12 w-12 items-center justify-center overflow-visible rounded-full border border-black/[0.07] bg-white/[0.42] text-foreground/55 backdrop-blur-md transition-all duration-500 hover:scale-[1.06] hover:border-[#c9b4d8]/60 hover:bg-white/[0.72] hover:text-[#8b6b9d] hover:shadow-[0_0_0_1px_rgba(203,183,216,0.12),0_8px_30px_rgba(145,110,165,0.12)]"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.9),transparent_42%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="pointer-events-none absolute -inset-3 rounded-full bg-[#d8c5e2]/0 blur-xl transition-all duration-500 group-hover:bg-[#d8c5e2]/30" />

            <ArrowRight
              size={17}
              strokeWidth={1.25}
              className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Research carousel */}
        <div
          ref={trackRef}
          className="overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={clearAutoplay}
          onMouseLeave={startAutoplay}
          onTouchStart={clearAutoplay}
          onTouchEnd={startAutoplay}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              scrollResearch('left');
            }

            if (event.key === 'ArrowRight') {
              event.preventDefault();
              scrollResearch('right');
            }
          }}
          tabIndex={0}
          aria-label="Research carousel"
        >
          <div className="flex min-w-max gap-6">
            {allResearch.map((item) => (
              <article
                key={item.id}
                className="glass-card flex w-[min(88vw,480px)] shrink-0 flex-col p-5 sm:p-6"
                data-testid={`item-research-${item.id}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex border border-primary bg-primary px-3 py-1.5 font-mono-ui text-[10px] uppercase tracking-[.12em] text-primary-foreground">
                    {item.status}
                  </span>

                  <span className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-muted-foreground">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-4 min-h-[6.5rem] font-display text-[clamp(1.5rem,1.7vw,2rem)] leading-[1.08] tracking-[-0.03em]">
                  {item.title}
                </h3>

                {item.authors && (
                  <p className="mt-3 text-xs leading-[1.7] text-muted-foreground">
                    {item.authors}
                  </p>
                )}

                <div className="mt-4 space-y-1.5 text-[13px] text-muted-foreground">
                  {item.conference && (
                    <p>
                      <span className="font-medium text-foreground">
                        Conference:
                      </span>{' '}
                      {item.conference}
                    </p>
                  )}

                  {item.date && (
                    <p>
                      <span className="font-medium text-foreground">
                        Date:
                      </span>{' '}
                      {item.date}
                    </p>
                  )}

                  {item.publisher && (
                    <p>
                      <span className="font-medium text-foreground">
                        Publisher:
                      </span>{' '}
                      {item.publisher}
                    </p>
                  )}
                </div>

                <p className="mt-4 text-[13px] leading-[1.65] text-muted-foreground">
                  {item.description}
                </p>

                <DotSeparatedTags
                  tags={item.keywords}
                  itemClassName="text-primary"
                  className="mt-4"
                />

                <div className="mt-auto flex w-full flex-wrap gap-3 pt-5">
                  {isUsableUrl(item.ieeeLink || '') && (
                    <a
                      href={item.ieeeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[.14em] text-primary transition-colors hover:bg-primary/10"
                      data-testid={`link-research-${item.id}-ieee`}
                    >
                      View on IEEE Xplore <ArrowUpRight size={12} />
                    </a>
                  )}

                  {isUsableUrl(item.doiLink || '') && (
                    <a
                      href={item.doiLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[.14em] text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      data-testid={`link-research-${item.id}-doi`}
                    >
                      DOI <ArrowUpRight size={12} />
                    </a>
                  )}

                  {(item.github || item.pdf || item.paper) && (
                    <a
                      href={item.github || item.paper || item.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[.14em] text-primary transition-colors hover:bg-primary/10"
                    >
                      View Details <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const technologyIcons: Record<string, string> = {
  Python: "logos:python",
  React: "logos:react",
  "Node.js": "logos:nodejs-icon",
  "C++": "logos:c-plusplus",
  C: "logos:c",
  Java: "logos:java",
  JavaScript: "logos:javascript",
  TypeScript: "logos:typescript",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  Docker: "logos:docker-icon",
  Arduino: "logos:arduino",
  TensorFlow: "logos:tensorflow",
  PyTorch: "logos:pytorch-icon",
  MongoDB: "logos:mongodb-icon",
  PostgreSQL: "logos:postgresql",
  MySQL: "logos:mysql",
  Figma: "logos:figma",
  Gazebo: "material-symbols:precision-manufacturing",
};

function SkillsAndCredentials() {
  return (
    <section
      id="skills"
      className="bg-secondary/35"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I Work With"
            text="I work at the intersection of AI, data, software, and intelligent systems."
          />
        </Reveal>

        <div className="skills-main-card mt-8 rounded-2xl border-[1.5px] border-[#d8cde6] bg-[#ebe1f3] p-5 shadow-[0_18px_36px_hsl(266_56%_25%_/_0.06)] sm:p-6">
          <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2.5 flex items-baseline gap-2 text-[15px] font-medium text-foreground">
                  <span className="font-mono-ui text-[11px] text-primary/80">
                    {group.number}
                  </span>

                  {group.title
                    .replaceAll(" & ", " & ")
                    .toLowerCase()
                    .replace(
                      /(^|\s)\S/g,
                      (letter) => letter.toUpperCase()
                    )}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="skill-item rounded-full border border-border bg-secondary/65 px-3 py-1.5 text-[13px] text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono-ui text-[11px] font-medium uppercase tracking-[.16em] text-primary sm:text-[12px]">
              Technologies I use
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              {technologiesUsed.map((technology) => {
                const icon = technologyIcons[technology];

                const normalizedTechnology = technology
                  .toLowerCase()
                  .replace(/\s+/g, "")
                  .trim();

                const isMatlab = normalizedTechnology === "matlab";
                const isRos2 = normalizedTechnology === "ros2";

                return (
                  <div
                    key={technology}
                    className="technology-item group relative"
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.07] shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/40 group-hover:bg-primary/[0.12] group-hover:shadow-[0_12px_28px_hsl(266_56%_25%_/_0.12)]"
                      aria-label={technology}
                      role="img"
                    >
                      {isMatlab ? (
                        <img
                          src="/technology-icons/matlab.svg"
                          alt=""
                          className="block h-15 w-15 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : isRos2 ? (
                        <img
                          src="/technology-icons/ros2.svg"
                          alt=""
                          className="block h-15 w-15 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : icon ? (
                        <Icon
                          icon={icon}
                          className="block h-15 w-15 shrink-0 transition-transform duration-300 group-hover:scale-110"
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
                      )}
                    </span>

                    <span
                      className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-border bg-foreground px-2.5 py-1.5 font-mono-ui text-[10px] font-medium text-background opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {technology}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function CertificationsSection() {
  const certTrackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const nextStep = () => {
    if (!certTrackRef.current) return 340;

    const firstCard =
      certTrackRef.current.querySelector<HTMLElement>('article');

    if (!firstCard) return 340;

    return firstCard.getBoundingClientRect().width + 20;
  };

  const clearAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    clearAutoplay();

    autoplayRef.current = window.setInterval(() => {
      const track = certTrackRef.current;
      if (!track) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const step = nextStep();

      if (maxScroll <= 1) {
        track.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        return;
      }

      const nextLeft = track.scrollLeft + step;

      if (nextLeft >= maxScroll) {
        track.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        return;
      }

      track.scrollBy({
        left: step,
        behavior: 'smooth',
      });
    }, 4200);
  };

  const scrollCerts = (direction: 'left' | 'right') => {
    if (!certTrackRef.current) return;

    certTrackRef.current.scrollBy({
      left: direction === 'left' ? -nextStep() : nextStep(),
      behavior: 'smooth',
    });

    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      clearAutoplay();
    };
  }, []);

  return (
    <section
      id="certifications"
      className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials and learning."
          text="Credentials reflecting my continuous learning across machine learning, artificial intelligence, data, and languages."
        />
      </Reveal>

      <div className="mt-6">
        <div className="flex items-baseline justify-between gap-4 pb-3">
          <p className="eyebrow text-primary">Recent learning</p>

          <span className="font-mono-ui text-[10px] text-muted-foreground">
            {certifications.length} entries
          </span>
        </div>

        <div className="relative">
          {/* LEFT ARROW */}
          <button
            type="button"
            aria-label="Scroll certifications left"
            onClick={() => scrollCerts('left')}
            onFocus={clearAutoplay}
            onBlur={startAutoplay}
            className="cert-nav-button group absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-black/[0.07] bg-white/[0.42] text-foreground/55 backdrop-blur-md transition-all duration-500 hover:scale-[1.06] hover:border-[#c9b4d8]/60 hover:bg-white/[0.72] hover:text-[#8b6b9d] hover:shadow-[0_0_0_1px_rgba(203,183,216,0.12),0_8px_30px_rgba(145,110,165,0.12)]"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.9),transparent_42%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="pointer-events-none absolute -inset-3 rounded-full bg-[#d8c5e2]/0 blur-xl transition-all duration-500 group-hover:bg-[#d8c5e2]/30" />

            <ArrowLeft
              size={17}
              strokeWidth={1.25}
              className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-x-1"
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            aria-label="Scroll certifications right"
            onClick={() => scrollCerts('right')}
            onFocus={clearAutoplay}
            onBlur={startAutoplay}
            className="cert-nav-button group absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-black/[0.07] bg-white/[0.42] text-foreground/55 backdrop-blur-md transition-all duration-500 hover:scale-[1.06] hover:border-[#c9b4d8]/60 hover:bg-white/[0.72] hover:text-[#8b6b9d] hover:shadow-[0_0_0_1px_rgba(203,183,216,0.12),0_8px_30px_rgba(145,110,165,0.12)]"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.9),transparent_42%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="pointer-events-none absolute -inset-3 rounded-full bg-[#d8c5e2]/0 blur-xl transition-all duration-500 group-hover:bg-[#d8c5e2]/30" />

            <ArrowRight
              size={17}
              strokeWidth={1.25}
              className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1"
            />
          </button>

          {/* CERTIFICATION CAROUSEL */}
          <div
            ref={certTrackRef}
            className="cert-carousel overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={clearAutoplay}
            onMouseLeave={startAutoplay}
            onTouchStart={clearAutoplay}
            onTouchEnd={startAutoplay}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                event.preventDefault();
                scrollCerts('left');
              }

              if (event.key === 'ArrowRight') {
                event.preventDefault();
                scrollCerts('right');
              }
            }}
            onPointerDown={(event) => {
              touchStartXRef.current = event.clientX;
              clearAutoplay();
            }}
            onPointerUp={(event) => {
              if (touchStartXRef.current === null) {
                startAutoplay();
                return;
              }

              const deltaX =
                touchStartXRef.current - event.clientX;

              if (Math.abs(deltaX) > 45) {
                scrollCerts(
                  deltaX > 0 ? 'right' : 'left',
                );
              }

              touchStartXRef.current = null;
              startAutoplay();
            }}
            tabIndex={0}
            aria-label="Certification carousel"
          >
            <div className="flex min-w-max gap-5">
              {certifications.map((cert, index) => {
                const hasDate =
                  typeof cert.date === 'string' &&
                  cert.date.trim() !== '' &&
                  !cert.date.includes('[');

                const hasCredentialId =
                  typeof cert.credentialId === 'string' &&
                  cert.credentialId.trim() !== '' &&
                  !cert.credentialId.includes('[');

                return (
                  <article
                    key={`${cert.title}-${index}`}
                    className="cert-card group flex w-[min(86vw,340px)] shrink-0 flex-col overflow-hidden border border-border bg-background/80 shadow-[0_18px_36px_hsl(266_56%_25%_/_0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                    data-testid={`item-certification-${cert.title
                      .toLowerCase()
                      .replaceAll(' ', '-')}-${index}`}
                  >
                    {cert.image && (
                      <div className="relative overflow-hidden border-b border-border bg-white/40">
                        <img
                          src={cert.image}
                          alt={`${cert.title} certificate preview`}
                          className="h-[clamp(7rem,20vh,13rem)] w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div className="space-y-1.5">
                        <p className="font-mono-ui text-[10px] uppercase tracking-[.12em] text-primary">
                          {cert.issuer}
                        </p>

                        <h3 className="font-display text-[1.5rem] leading-[.95] tracking-[-.02em]">
                          {cert.title}
                        </h3>
                      </div>

                      <div className="space-y-1.5 text-sm text-muted-foreground">
                        {hasDate && (
                          <p>
                            <span className="font-mono-ui text-[9px] uppercase tracking-[.12em] text-muted-foreground/70">
                              Issued
                            </span>{' '}
                            {cert.date}
                          </p>
                        )}

                        {hasCredentialId && (
                          <p>
                            <span className="font-mono-ui text-[9px] uppercase tracking-[.12em] text-muted-foreground/70">
                              ID
                            </span>{' '}
                            {cert.credentialId}
                          </p>
                        )}
                      </div>

                      <div className="mt-auto pt-1">
                        {cert.credentialUrl &&
                        isUsableUrl(cert.credentialUrl) ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                            aria-label={`Open ${cert.title} credential`}
                            data-testid={`link-credential-${cert.title
                              .toLowerCase()
                              .replaceAll(' ', '-')}-${index}`}
                          >
                            <span>View Credential</span>
                            <ArrowUpRight size={15} />
                          </a>
                        ) : (
                          <span
                            className="eyebrow text-muted-foreground/70"
                            aria-disabled="true"
                            data-testid={`status-credential-${cert.title
                              .toLowerCase()
                              .replaceAll(' ', '-')}-${index}`}
                          >
                            link to add
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



type BeyondEntry = {
  title: string;
  meta: string;
  summary: string;
  details: string;
  icon: LucideIcon;
  badge?: string;
  date?: string;
};

const topRecognition: BeyondEntry = {
  title: 'Gold Medalist — Batch 2022',
  meta: 'Computer Systems Engineering • CGPA 3.83/4.00',
  summary: 'Graduated as a Gold Medalist for academic excellence.',
  details:
    'Graduated as a Gold Medalist from the Computer Systems Engineering program, completing the degree with a CGPA of 3.83/4.00.',
  icon: Medal,
  badge: 'Gold Medal',
};

const leadershipEntries: BeyondEntry[] = [
  {
    title: 'CSE Society',
    meta: 'Event Director / Head • Sukkur IBA University',
    summary: 'Led and coordinated university events and student initiatives.',
    details:
      'I led and coordinated university events through the Computer Systems Engineering Society, working with teams, students, and organizers to plan and execute activities from preparation to event day.',
    icon: Users,
  },
  {
    title: 'Sukkur IBA Student Council (SISC 2025)',
    meta: 'Department Representative',
    summary: 'Elected to represent Computer Systems Engineering students.',
    details:
      'Elected as the Computer Systems Engineering Department Representative to the 25-member Sukkur IBA Student Council, representing student perspectives and contributing to campus initiatives and institutional discussions.',
    icon: Landmark,
    badge: 'Elected',
    date: '2025',
  },
  {
    title: 'VNIAS',
    meta: 'Director, IT Unit',
    summary: 'Leading digital initiatives and technical coordination.',
    details:
      'Technology + Leadership — leading technical teams, coordinating digital initiatives, and helping turn ideas into practical solutions.',
    icon: Building2,
    date: 'Dec 2022 – Present',
  },
];

const speakingEntries: BeyondEntry[] = [
  {
    title: 'Generative AI Workshop',
    meta: 'Co-Trainer • Computer Systems Engineering Society',
    summary: 'Helped students explore practical generative AI concepts.',
    details:
      'Co-trained a Generative AI workshop organized by the Computer Systems Engineering Society, helping participants explore practical concepts and applications of generative AI through an interactive learning environment.',
    icon: Mic,
    badge: 'Co-Trainer',
  },
  {
    title:
      'IEEE Student Conference on Engineering, Science, and Technology (SCONEST 2022)',
    meta: 'Organizer • Sukkur IBA University',
    summary:
      'Supported technical sessions, speaker coordination, and attendee guidance.',
    details:
      'Organizer support for SCONEST 2022, contributing to technical session coordination, speaker support, and attendee guidance during the conference.',
    icon: CalendarDays,
    badge: 'Organizer',
    date: '2022',
  },
  {
    title: 'IEEE iCoMET 2023',
    meta:
      'Volunteer • 4th International Conference on Computing, Mathematics & Engineering Technologies',
    summary:
      'Contributed to conference coordination and participant support.',
    details:
      'As a volunteer at iCoMET 2023, I contributed to conference coordination, participant support, and event operations throughout the event.',
    icon: CalendarDays,
    badge: 'Volunteer',
    date: '2023',
  },
  {
    title: 'SIBA Fest 2024',
    meta: 'Organizer • Sukkur IBA University',
    summary: 'Handled event operations, coordination, and student engagement.',
    details:
      'Supported event planning, competition coordination, participant management, and event operations throughout the festival experience.',
    icon: CalendarDays,
    badge: 'Organizer',
    date: '2024',
  },
  {
    title: 'Career Fair 2025',
    meta: 'Organizer • Sukkur IBA University',
    summary: 'Facilitated employer coordination and student support.',
    details:
      'Supported employer coordination, student assistance, and event logistics during the Career Fair 2025 experience.',
    icon: CalendarDays,
    badge: 'Organizer',
    date: '2025',
  },
  {
    title: 'Visionary Diplomats MUN — 2024',
    meta: 'Delegate • Sukkur IBA University',
    summary: 'Participated in a three-day Model United Nations conference.',
    details:
      'Participated in a three-day Model United Nations conference, engaging in formal debate, representing international perspectives, and collaborating on diplomatic solutions to global issues.',
    icon: Globe,
    badge: 'Delegate',
    date: '2024',
  },
];

const awardEntries: BeyondEntry[] = [
  {
    title: 'HTML FastTrack Bootcamp — 1st Place',
    meta: 'MLSA FABTECH • 2023',
    summary: 'Won the bootcamp final quiz and secured first place.',
    details:
      'Won the final quiz of the HTML FastTrack 7-Day Bootcamp and secured 1st place among participants.',
    icon: Trophy,
    date: '2023',
  },
  {
    title: 'STHP Scholar',
    meta: 'Sukkur IBA University',
    summary: 'Selected through the Sindh Talent Hunt Program.',
    details:
      'Selected through the Sindh Talent Hunt Program and awarded a full scholarship based on academic merit and competitive selection.',
    icon: GraduationCap,
  },
  {
    title: 'PM Youth Laptop Scheme — Merit Recipient',
    meta: 'Higher Education Commission, Pakistan',
    summary: 'Awarded a laptop for academic excellence.',
    details:
      'Awarded a laptop through the Prime Minister’s Youth Laptop Scheme for high academic performance.',
    icon: Laptop,
  },
  {
    title: 'Executive Member — CSE Society',
    meta: 'Computer Systems Engineering Society',
    summary:
      'Recognized for supporting technical events and student activities.',
    details:
      'Recognized for contributing to technical events, student activities, and the CSE Society community.',
    icon: Award,
  },
];

const beyondStats = [
  { value: 4, label: 'Leadership roles' },
  { value: speakingEntries.length, label: 'Events & activities' },
  { value: awardEntries.length + 1, label: 'Awards & recognition' },
  { value: 2, label: 'Scholarships & grants' },
];

function BeyondRow({
  entry,
  isOpen,
  onToggle,
}: {
  entry: BeyondEntry;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = entry.icon;

  return (
    <div className="border-b border-primary/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`group flex w-full items-center gap-3 px-3 py-2.5 text-left transition-all duration-300 hover:bg-primary/5 ${
          isOpen ? 'bg-primary/5' : ''
        }`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
          <Icon
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-[13px] font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
            {entry.title}
          </span>

          <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
            {entry.meta}
          </span>
        </span>

        <span className="flex shrink-0 flex-col items-end gap-1">
          {entry.badge && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono-ui text-[9px] uppercase tracking-[0.1em] text-primary">
              {entry.badge}
            </span>
          )}

          {entry.date && (
            <span className="font-mono-ui text-[9px] text-muted-foreground">
              {entry.date}
            </span>
          )}
        </span>

        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/10 transition-all duration-300 ${
            isOpen
              ? 'rotate-180 border-primary/30 bg-primary/10'
              : 'group-hover:border-primary/25 group-hover:bg-primary/5'
          }`}
        >
          <ChevronDown size={13} className="text-primary" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1.5 px-3 pb-3 pl-14 text-[12px] leading-[1.6] text-muted-foreground">
            <p className="font-medium text-foreground/85">{entry.summary}</p>
            <p>{entry.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeyondGroup({
  label,
  count,
  children,
}: {
  label: string;
  count?: number;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <p className="eyebrow text-primary/80">{label}</p>

        {count !== undefined && (
          <span className="font-mono-ui text-[10px] text-muted-foreground">
            {count}
          </span>
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-primary/15 bg-background/70 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_40px_hsl(266_56%_25%_/_0.09)]">
        {children}
      </div>
    </div>
  );
}

function BeyondTheCode() {
  const [openKey, setOpenKey] = useState<string | null>(
    'lead-CSE Society'
  );

  const toggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  const TopIcon = topRecognition.icon;
  const topOpen = openKey === 'top-gold';

  return (
    <section id="beyond-code" className="bg-secondary/35">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[620px]">
              <p className="eyebrow mb-3 text-primary text-[0.78rem] sm:text-[0.85rem]">
                BEYOND THE CODE
              </p>

              <h2 className="font-display text-[clamp(1.9rem,3.2vw,3.2rem)] leading-[1.02] tracking-[-.03em] text-foreground">
                I build things. I lead people.
                <br />
                I teach what I learn.
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[560px]">
              {beyondStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-primary/15 bg-background/70 px-3 py-3 text-center transition-all duration-400 hover:-translate-y-1 hover:border-primary/35 hover:bg-background hover:shadow-[0_12px_28px_hsl(266_56%_25%_/_0.1)]"
                >
                  <p className="font-display text-[1.8rem] leading-none text-primary transition-transform duration-300 group-hover:scale-105">
                    {stat.value}
                  </p>

                  <p className="mt-1.5 text-[10px] leading-tight text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* =========================================================
            TOP RECOGNITION
        ========================================================= */}
        <Reveal>
          <div className="mt-7 border-t border-border/70 pt-3">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-primary">
              TOP RECOGNITION
            </p>

            <div className="overflow-hidden rounded-xl border border-primary/40 bg-background">
              <button
                type="button"
                onClick={() => toggle('top-gold')}
                aria-expanded={topOpen}
                className={`group flex w-full items-start gap-3 px-4 py-4 text-left transition-all duration-300 ${
                  topOpen
                    ? 'bg-primary/5'
                    : 'hover:bg-primary/5'
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/15">
                  <TopIcon size={19} strokeWidth={1.5} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                      {topRecognition.title}
                    </span>

                    <span className="rounded-full bg-primary px-2 py-0.5 font-mono-ui text-[9px] uppercase tracking-[0.1em] text-primary-foreground">
                      {topRecognition.badge}
                    </span>
                  </span>

                  <span className="mt-1 block text-[12px] leading-snug text-primary/80">
                    {topRecognition.summary}
                  </span>

                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    {topRecognition.meta}
                  </span>
                </span>

                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/10 transition-all duration-300 ${
                    topOpen
                      ? 'rotate-180 border-primary/30 bg-primary/10'
                      : 'group-hover:border-primary/25 group-hover:bg-primary/5'
                  }`}
                >
                  <ChevronDown size={13} className="text-primary" />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  topOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-border/50 px-4 pb-4 pt-3 pl-[4.25rem] text-[12px] leading-[1.6] text-muted-foreground">
                    {topRecognition.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =========================================================
            LEADERSHIP & IMPACT
        ========================================================= */}
        <Reveal>
          <div className="mt-7 border-t border-border/70 pt-3">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-primary">
              LEADERSHIP & IMPACT
            </p>

            <div className="overflow-hidden rounded-lg border-y border-border/60">
              {leadershipEntries.map((entry, index) => {
                const key = `lead-${entry.title}`;

                return (
                  <div
                    key={key}
                    className={
                      index !== 0
                        ? 'border-t border-border/50'
                        : ''
                    }
                  >
                    <BeyondRow
                      entry={entry}
                      isOpen={openKey === key}
                      onToggle={() => toggle(key)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* =========================================================
            SPEAKING & COMMUNITY
        ========================================================= */}
        <Reveal>
          <div className="mt-7 border-t border-border/70 pt-3">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-primary">
              SPEAKING & COMMUNITY
            </p>

            <div className="overflow-hidden rounded-lg border-y border-border/60">
              {speakingEntries.map((entry, index) => {
                const key = `speak-${entry.title}`;

                return (
                  <div
                    key={key}
                    className={
                      index !== 0
                        ? 'border-t border-border/50'
                        : ''
                    }
                  >
                    <BeyondRow
                      entry={entry}
                      isOpen={openKey === key}
                      onToggle={() => toggle(key)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* =========================================================
            AWARDS & GRANTS
        ========================================================= */}
        <Reveal>
          <div className="mt-7 border-t border-border/70 pt-3">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-primary">
              AWARDS & GRANTS
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {awardEntries.map((entry) => {
                const key = `award-${entry.title}`;

                return (
                  <div
                    key={key}
                    className="overflow-hidden rounded-lg border border-border/70 bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_24px_hsl(266_56%_25%_/_0.06)]"
                  >
                    <BeyondRow
                      entry={entry}
                      isOpen={openKey === key}
                      onToggle={() => toggle(key)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
function Contact() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

  const emailJsConfigured = Boolean(
    emailJsPublicKey && emailJsServiceId && emailJsTemplateId,
  );

  useEffect(() => {
    if (emailJsConfigured) {
      emailjs.init({ publicKey: emailJsPublicKey });
    }
  }, [emailJsConfigured, emailJsPublicKey]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!emailJsConfigured) {
      setError(
        'EmailJS is not configured yet. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your environment variables.',
      );
      return;
    }

    setError('');
    setIsSending(true);

    try {
      const formData = new FormData(form);

      const payload = {
        name: (formData.get('name') ?? '').toString(),
        email: (formData.get('email') ?? '').toString(),
        subject: (formData.get('subject') ?? '').toString(),
        message: (formData.get('message') ?? '').toString(),
      };

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        payload,
      );

      setSent(true);
      form.reset();
    } catch (submitError) {
      setError(
        'Something went wrong while sending your message. Please try again or reach out directly by email.',
      );
      console.error(submitError);
    } finally {
      setIsSending(false);
    }
  }

  const contactLinks = [
    {
      href: 'https://www.linkedin.com/in/rsoomro03/',
      label: 'https://www.linkedin.com/in/rsoomro03/',
      icon: <Linkedin size={15} strokeWidth={1.4} />,
    },
    {
      href: 'https://github.com/rabiasoomro12',
      label: 'https://github.com/rabiasoomro12',
      icon: <Github size={15} strokeWidth={1.4} />,
    },
    {
      href: 'mailto:rabiasoomro1591@gmail.com',
      label: 'rabiasoomro1591@gmail.com',
      icon: <Mail size={15} strokeWidth={1.4} />,
    },
  ];

  return (
    <section id="contact">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-14">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div>
              <p className="eyebrow text-primary">Contact</p>

              <h2
                className="mt-4 max-w-[700px] font-display text-[clamp(2.8rem,min(6vw,11vh),6rem)] leading-[.82] tracking-[-.04em]"
                data-testid="heading-contact"
              >
                Let’s build
                <br />
                <em>something meaningful.</em>
              </h2>

              <p className="mt-6 max-w-[410px] text-sm leading-[1.7] text-muted-foreground">
                Interested in AI/ML, research, collaborations, data,
                technology, or a question that does not fit neatly in a form?
                I’d love to hear from you.
              </p>

              <div
                className="mt-6 flex flex-col items-start gap-3"
                data-testid="group-contact-social-links"
              >
                {contactLinks.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex flex-col items-start gap-2 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-3">
                      {icon}
                      <span className="break-all">{label}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-form-card p-5 sm:p-6">
              {sent ? (
                <div
                  className="flex h-full flex-col justify-center py-10"
                  data-testid="status-message-sent"
                >
                  <Check size={22} className="text-primary" />

                  <h3 className="mt-6 font-display text-4xl">
                    Message ready to send.
                  </h3>

                  <p className="mt-4 max-w-[350px] text-sm leading-[1.7] text-muted-foreground">
                    Thanks for reaching out. Your message has been sent
                    through EmailJS.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="eyebrow mt-7 w-fit text-primary underline underline-offset-4"
                    data-testid="button-send-another"
                  >
                    send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-0"
                  data-testid="form-contact"
                >
                  <label className="contact-field">
                    <span>Name</span>
                    <input
                      required
                      name="name"
                      placeholder="[Your name]"
                      data-testid="input-contact-name"
                    />
                  </label>

                  <label className="contact-field">
                    <span>Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="[you@example.com]"
                      data-testid="input-contact-email"
                    />
                  </label>

                  <label className="contact-field">
                    <span>Subject</span>
                    <input
                      name="subject"
                      placeholder="[What would you like to discuss?]"
                      data-testid="input-contact-subject"
                    />
                  </label>

                  <label className="contact-field">
                    <span>Message</span>
                    <textarea
                      required
                      name="message"
                      rows={3}
                      placeholder="[Write a thoughtful note]"
                      data-testid="input-contact-message"
                    />
                  </label>

                  {error && (
                    <p className="mt-4 text-sm text-red-500">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="primary-button mt-5"
                    data-testid="button-send-message"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send message'}
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="site-footer border-t border-primary-foreground/20 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto_auto] lg:px-12 lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <RabbitSignature />

            <span className="font-display text-2xl">
              {profile.name}
            </span>
          </div>

          <p className="mt-5 max-w-[250px] text-sm leading-[1.6] text-primary-foreground/70">
            {profile.role}. {profile.statement}
          </p>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm"
          aria-label="Footer navigation"
        >
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              data-testid={`link-footer-${id}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 lg:items-end">
          <SocialLinks />

          {showTop && (
            <a
              href="#top"
              className="eyebrow flex items-center gap-2 text-accent"
              data-testid="link-back-top"
            >
              back to top
              <CircleArrowUp size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 border-t border-primary-foreground/20 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-primary-foreground/60">
          © 2026 {profile.name}. All rights reserved.
        </span>

        <span className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.14em] text-primary-foreground/60">
          <span>Developed with</span>
          <Soup size={11} className="text-accent" />
          <span>+</span>
          <Coffee size={11} className="text-accent" />
          <span>&</span>
          <Heart size={11} className="text-accent" />
          <span>by {profile.name}</span>
        </span>
      </div>
    </footer>
  );
}

function AssistantPanel({ onClose }: { onClose: () => void }) {
  const [panelState, setPanelState] = useState<'intro' | 'decline' | 'questions' | 'answer'>('intro');
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const activeEntry = faqEntries.find((entry) => entry.id === selectedQuestion) ?? null;

  const handleNavigate = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="assistant-panel fixed bottom-24 right-5 z-40 h-[420px] w-[calc(100vw-40px)] max-w-[390px] overflow-hidden border shadow-[0_18px_60px_hsl(266_56%_25%_/_0.18)] sm:bottom-24 sm:right-8"
      role="dialog"
      aria-label="Jade Rabbit FAQ"
      data-testid="panel-assistant"
    >
      <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3 sm:px-5 sm:py-4">
        <div>
          <p className="eyebrow text-primary">Hi! I'm Jade Rabbit 🐇</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close Jade Rabbit FAQ"
          data-testid="button-close-assistant"
        >
          <X size={18} strokeWidth={1.3} />
        </button>
      </div>

      <div className="h-[calc(100%-72px)] overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
        {panelState === 'intro' && (
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-3 text-sm leading-[1.7] text-muted-foreground">
              <p>Rabia's little friend, unofficial hype bunny, and occasional keeper of her secrets. 🐇</p>
              <p>She's a Computer Systems Engineer, a woman in STEM, and apparently allergic to having just one area of interest. AI, data, research, software, robotics... girl, pick a struggle. 😭</p>
              <p>She's always learning something new, questioning everything, and occasionally convincing herself she needs to learn five more things before she's "ready."</p>
              <p>Wanna know a little more about Rabia?</p>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => setPanelState('questions')}
                className="assistant-choice-button w-full"
              >
                Yes, tell me!
              </button>
              <button
                type="button"
                onClick={() => setPanelState('decline')}
                className="assistant-choice-button w-full text-muted-foreground"
              >
                No, I'm good 😌
              </button>
            </div>
          </div>
        )}

        {panelState === 'decline' && (
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-3 text-sm leading-[1.7] text-muted-foreground">
              <p>Oh. Okay then 😔</p>
              <p>I'll just sit here and pretend I wasn't excited to introduce her. 🐇</p>
            </div>

            <button
              type="button"
              onClick={() => setPanelState('questions')}
              className="assistant-back-link"
            >
              Actually, tell me →
            </button>
          </div>
        )}

        {panelState === 'questions' && !activeEntry && (
          <div className="space-y-3">
            <p className="text-sm leading-[1.7] text-muted-foreground">Hehe, I knew you'd say yes. 🐇</p>
            <p className="text-sm leading-[1.7] text-muted-foreground">Alright, what would you like to know?</p>

            <div className="mt-3 space-y-1">
              {faqEntries.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => {
                    setSelectedQuestion(entry.id);
                    setPanelState('answer');
                  }}
                  className="assistant-question-button w-full text-left"
                  aria-label={`Open answer for ${entry.question}`}
                >
                  {entry.question}
                </button>
              ))}
            </div>
          </div>
        )}

        {panelState === 'answer' && activeEntry && (
          <div className="space-y-4">
            <div>
              <p className="eyebrow text-primary">Jade Rabbit 🐇</p>
              <h3 className="mt-2 font-display text-[1.45rem] leading-[1.05] tracking-[-.04em] text-foreground">
                {activeEntry.question}
              </h3>
            </div>

            <div className="space-y-3 text-sm leading-[1.7] text-muted-foreground">
              {activeEntry.answer.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {activeEntry.actionLabel && (
              <button
                type="button"
                onClick={() => handleNavigate(activeEntry.actionTarget)}
                className="assistant-answer-link"
              >
                {activeEntry.actionLabel}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setSelectedQuestion(null);
                setPanelState('questions');
              }}
              className="assistant-back-link"
            >
              ← Ask something else
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <RabbitSignature size="large" />

        <p className="eyebrow mt-8 text-primary">
          404 / gone exploring
        </p>

        <h1 className="mt-5 font-display text-6xl">
          Oops — this page hopped away.
        </h1>

        <a
          href="/"
          className="primary-button mt-8"
          data-testid="link-back-home"
        >
          Back home
          <ArrowUpRight size={16} />
        </a>
      </div>
    </main>
  );
}

function Portfolio() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="portfolio-shell min-h-[100dvh] bg-background">
      <Header />

      <main>
        <Hero />
        <About />
        <SkillsAndCredentials />
        <Experience />
        <Projects />
        <Research />
        <BeyondTheCode />
        <CertificationsSection />
        <Contact />
      </main>

      <Footer />

      {assistantOpen && (
        <AssistantPanel
          onClose={() => setAssistantOpen(false)}
        />
      )}

      <button
        type="button"
        onClick={() =>
          setAssistantOpen((current) => !current)
        }
        className="assistant-launcher fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full"
        aria-label={
          assistantOpen
            ? 'Close portfolio assistant'
            : 'Open portfolio assistant'
        }
        aria-expanded={assistantOpen}
        data-testid="button-floating-assistant"
      >
        <Rabbit size={27} strokeWidth={1.3} />
      </button>
    </div>
  );
}

export default function App() {
  return window.location.pathname === '/' ? (
    <Portfolio />
  ) : (
    <NotFound />
  );
}