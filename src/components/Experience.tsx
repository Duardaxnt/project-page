import React, { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  side: "left" | "right";
}

const experiences: ExperienceItem[] = [
  {
    company: "Compass UOL",
    role: "Estagiária em Desenvolvimento Full-Stack",
    period: "Março 2025 – Agosto 2025",
    side: "left",
  },
  {
    company: "iBico Brasil",
    role: "Engenheira de Software",
    period: "Novembro 2025 – Atual",
    side: "right",
  },
];

function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${item.side} ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="timeline-dot"></div>

      <div className="timeline-card">
        <div className="timeline-period">
          <Briefcase size={18} />
          <span>{item.period}</span>
        </div>

        <h3 className="timeline-company">{item.company}</h3>

        <p className="timeline-role">{item.role}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="experience-container">
        <h2 className="experience-title">Experiência</h2>

        <div className="timeline">
          <div className="timeline-line"></div>

          {experiences.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}