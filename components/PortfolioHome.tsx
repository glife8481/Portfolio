"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Lock,
  Mail,
  Users,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import {
  bioauth,
  certifications,
  certificationsFolder,
  leetcodeStats,
  otherProjects,
  pawcare,
  profile,
  skillGroups,
} from "@/lib/content";
import type { ReactNode } from "react";

function ExternalIconLink({
  href,
  children,
  className = "social-link",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

export function PortfolioHome() {
  const showLeetcode = Boolean(profile.leetcode && leetcodeStats);
  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  return (
    <>
      <Navigation />
      <main id="top">
        <section aria-labelledby="hero-title" className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="availability">
                <span aria-hidden="true" className="availability-dot" />
                Open to software engineering internships
              </p>
              <h1 className="display-font" id="hero-title">
                <span className="hero-line">Software</span>
                <span className="hero-line hero-line-accent">Engineer.</span>
                <span className="hero-line">Full Stack.</span>
                <span className="hero-line">Applied AI.</span>
              </h1>
              <p className="hero-tagline">{profile.tagline}</p>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  View projects <ArrowDownRight aria-hidden="true" size={16} />
                </a>
                <a
                  className="button-secondary"
                  download
                  href="/Pranav-Kulkarni-Resume.pdf"
                >
                  Download resume{" "}
                  <ArrowDownRight aria-hidden="true" size={16} />
                </a>
                <a className="button-secondary" href="#contact">
                  Get in touch <ArrowRight aria-hidden="true" size={15} />
                </a>
              </div>
              <nav aria-label="Profile links" className="hero-socials">
                <ExternalIconLink href={profile.github}>
                  <Code2 aria-hidden="true" size={15} /> GitHub
                </ExternalIconLink>
                <ExternalIconLink href={profile.linkedin}>
                  <ArrowUpRight aria-hidden="true" size={15} /> LinkedIn
                </ExternalIconLink>
                {profile.leetcode && (
                  <ExternalIconLink href={profile.leetcode}>
                    <Code2 aria-hidden="true" size={15} /> LeetCode
                  </ExternalIconLink>
                )}
                <a className="social-link" href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" size={15} /> Email
                </a>
              </nav>
            </div>

            <Reveal className="hero-aside" delay={0.15}>
              <article className="hero-card">
                <div className="card-kicker">
                  <span>Featured build</span>
                  <span className="card-index">
                    01 / {2 + otherProjects.length}
                  </span>
                </div>
                <h2 className="display-font">{bioauth.name}</h2>
                <p>{bioauth.subtitle}</p>
                <a className="hero-card-link" href="#bioauth">
                  Explore the case study{" "}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
                <div className="hero-card-tags">
                  {["FastAPI", "React", "PyTorch", "InsightFace"].map(
                    (item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </article>
              <p className="hero-index">Independent work · BMSCE CSE</p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="section section-rule wrap"
          id="about"
        >
          <div className="about-grid">
            <Reveal>
              <p className="eyebrow">{num()} — About</p>
              <h2 className="section-heading display-font" id="about-title">
                I like the parts of software that have to be right.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about-copy">{profile.about}</p>
              <div className="about-facts">
                <div className="fact">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">{profile.education}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Diploma</span>
                  <span className="fact-value">{profile.diploma}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Looking for</span>
                  <span className="fact-value">
                    Software engineering internships
                  </span>
                </div>
                <div className="fact">
                  <span className="fact-label">Based in</span>
                  <span className="fact-value">{profile.location}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="skills-title"
          className="section section-rule wrap"
          id="skills"
        >
          <div className="skills-layout">
            <Reveal>
              <p className="eyebrow">{num()} — Toolkit</p>
              <h2 className="section-heading display-font" id="skills-title">
                Tools I’ve shipped with.
              </h2>
              <p className="section-intro">
                Everything listed here is used in a project on this page.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="skills-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3 className="skill-group-title">{group.title}</h3>
                    <div className="skill-pills">
                      {group.items.map((item) => (
                        <span className="skill-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="projects-title"
          className="section section-rule wrap"
          id="projects"
        >
          <Reveal>
            <p className="eyebrow">{num()} — Selected work</p>
            <h2 className="section-heading display-font" id="projects-title">
              Login without passwords, built end to end.
            </h2>
            <p className="section-intro">
              BioAuth is my main project: I designed and built the frontend, the
              backend, the biometric pipeline and the tests.
            </p>
          </Reveal>

          <div className="project-feature">
            <Reveal className="project-main">
              <div className="project-main-top">
                <span className="project-featured">
                  Featured · independent project
                </span>
              </div>
              <div className="project-main-content">
                <h3 className="display-font">{bioauth.name}</h3>
                <p>{bioauth.description}</p>
                <div className="project-actions">
                  <ExternalIconLink
                    className="button-primary"
                    href={bioauth.walkthrough}
                  >
                    Project walkthrough{" "}
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </ExternalIconLink>
                  <a className="button-secondary" href="#bioauth">
                    Case study <ArrowDownRight aria-hidden="true" size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal className="project-side" delay={0.1}>
              <div>
                <span className="project-side-label">
                  Multi-factor login
                </span>
                <p className="project-side-number display-font">MFA</p>
                <p className="project-side-copy">
                  Face match, voice match and a spoken secret phrase, behind 49
                  API endpoints.
                </p>
              </div>
              <div className="project-side-footer">
                <span>Phrase → voice + face → token</span>
                <ArrowUpRight aria-hidden="true" size={14} />
              </div>
            </Reveal>
          </div>

          <div className="case-study" id="bioauth">
            <Reveal>
              <div className="case-header">
                <div>
                  <p className="eyebrow">Case study · BioAuth</p>
                  <h3 className="display-font">
                    One multi-factor login an attacker has to fake all at once.
                  </h3>
                </div>
                <p>{bioauth.problem}</p>
              </div>
            </Reveal>

            <section
              aria-label="BioAuth application screenshots"
              className="case-media"
            >
              {bioauth.screenshots.map((shot) => (
                <figure className="case-screenshot" key={shot.src}>
                  <Image
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 600px"
                    src={shot.src}
                  />
                  <figcaption className="case-screenshot-label">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </section>

            <div className="case-features">
              <Reveal className="case-block">
                <h4>What it does</h4>
                <ul>
                  {bioauth.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="case-block" delay={0.04}>
                <h4>Architecture & stack</h4>
                <p>{bioauth.architecture}</p>
                <div className="case-stack">
                  {bioauth.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal className="case-block">
                <h4>Testing</h4>
                <p>{bioauth.quality}</p>
                <p>{bioauth.limits}</p>
              </Reveal>
              <Reveal className="case-block" delay={0.04}>
                <h4>Source</h4>
                <p>
                  <Lock aria-hidden="true" size={13} /> {bioauth.source}
                </p>
                <div className="case-stack">
                  <ExternalIconLink
                    className="button-secondary"
                    href={bioauth.walkthrough}
                  >
                    Interactive walkthrough{" "}
                    <ExternalLink aria-hidden="true" size={14} />
                  </ExternalIconLink>
                  <a
                    className="button-secondary"
                    href={`mailto:${profile.email}?subject=BioAuth%20source%20access`}
                  >
                    Request source <Mail aria-hidden="true" size={14} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <p className="eyebrow">Team project</p>
          <div className="project-feature">
            <Reveal className="project-main">
              <div className="project-main-top">
                <span className="project-featured">
                  <Users aria-hidden="true" size={13} /> Team of{" "}
                  {pawcare.teamSize}
                </span>
              </div>
              <div className="project-main-content">
                <h3 className="display-font">{pawcare.name}</h3>
                <p>{pawcare.description}</p>
                {pawcare.myRole && (
                  <p>
                    <strong>My part:</strong> {pawcare.myRole}
                  </p>
                )}
                <div className="case-stack">
                  {pawcare.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <ExternalIconLink
                    className="button-secondary"
                    href={pawcare.live}
                  >
                    Live app <ExternalLink aria-hidden="true" size={14} />
                  </ExternalIconLink>
                  <ExternalIconLink
                    className="button-secondary"
                    href={pawcare.repo}
                  >
                    Team repository <Code2 aria-hidden="true" size={14} />
                  </ExternalIconLink>
                </div>
              </div>
            </Reveal>
            <Reveal className="project-side" delay={0.1}>
              <figure className="case-screenshot team-shot">
                <Image
                  alt={pawcare.screenshot.alt}
                  fill
                  sizes="(max-width: 1000px) 100vw, 400px"
                  src={pawcare.screenshot.src}
                />
              </figure>
            </Reveal>
          </div>

          <p className="eyebrow">More projects</p>
          <div className="repo-list">
            {otherProjects.map((project) => (
              <article className="repo-card" key={project.name}>
                <div>
                  <div className="repo-card-top">
                    <h3>{project.name}</h3>
                  </div>
                  <p>{project.description}</p>
                </div>
                <div className="repo-card-bottom">
                  <span className="repo-language">
                    {project.tags.join(" · ")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {showLeetcode && leetcodeStats && (
          <section
            aria-labelledby="leetcode-title"
            className="section section-rule wrap"
            id="leetcode"
          >
            <div className="leetcode-layout">
              <Reveal>
                <p className="eyebrow">{num()} — Problem solving</p>
                <h2
                  className="section-heading display-font"
                  id="leetcode-title"
                >
                  Practising data structures and algorithms.
                </h2>
                <div className="hero-actions">
                  <ExternalIconLink
                    className="button-primary"
                    href={profile.leetcode}
                  >
                    View LeetCode profile{" "}
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </ExternalIconLink>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="leetcode-chart-wrap">
                  <div
                    aria-label={`Problem breakdown: ${leetcodeStats.easy} Easy, ${leetcodeStats.medium} Medium, ${leetcodeStats.hard} Hard`}
                    className="leetcode-chart"
                    role="img"
                  >
                    <div className="leetcode-chart-inner">
                      <strong className="display-font">
                        {leetcodeStats.total}
                      </strong>
                      <span>solved</span>
                    </div>
                  </div>
                  <div className="leetcode-legend">
                    <div className="legend-item">
                      <span className="legend-key">
                        <span className="legend-dot" /> Easy
                      </span>
                      <strong>{leetcodeStats.easy}</strong>
                    </div>
                    <div className="legend-item">
                      <span className="legend-key">
                        <span className="legend-dot legend-dot-medium" /> Medium
                      </span>
                      <strong>{leetcodeStats.medium}</strong>
                    </div>
                    <div className="legend-item">
                      <span className="legend-key">
                        <span className="legend-dot legend-dot-hard" /> Hard
                      </span>
                      <strong>{leetcodeStats.hard}</strong>
                    </div>
                  </div>
                </div>
                <p className="snapshot-note">
                  Profile snapshot checked {leetcodeStats.checkedAt}. Counts
                  change over time.
                </p>
              </Reveal>
            </div>
          </section>
        )}

        <section
          aria-labelledby="certs-title"
          className="section section-rule wrap"
          id="certifications"
        >
          <Reveal>
            <p className="eyebrow">{num()} — Certifications</p>
            <h2 className="section-heading display-font" id="certs-title">
              Courses I’ve completed.
            </h2>
          </Reveal>
          <div className="repo-list">
            {certifications.map((cert) => (
              <article className="repo-card" key={cert.name}>
                <div>
                  <div className="repo-card-top">
                    <h3>{cert.name}</h3>
                    <ExternalIconLink
                      className="repo-language"
                      href={cert.file}
                    >
                      <ExternalLink aria-hidden="true" size={13} /> View
                    </ExternalIconLink>
                  </div>
                  <p>{cert.issuer}</p>
                </div>
                <div className="repo-card-bottom">
                  <span className="repo-language">{cert.date}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <ExternalIconLink
              className="button-secondary"
              href={certificationsFolder}
            >
              All certificates on GitHub{" "}
              <ArrowUpRight aria-hidden="true" size={14} />
            </ExternalIconLink>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="section section-rule wrap"
          id="contact"
        >
          <Reveal className="collab-band">
            <div>
              <p className="eyebrow">{num()} — Contact</p>
              <h2 className="display-font" id="contact-title">
                Let’s build something that has to work.
              </h2>
              <p>{profile.collaboration}</p>
            </div>
            <div className="collab-side">
              <a
                className="button-primary"
                href={`mailto:${profile.email}?subject=Internship%20opportunity`}
              >
                Email me <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a className="contact-link" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={15} /> {profile.email}
              </a>
              <ExternalIconLink
                href={profile.linkedin}
                className="contact-link"
              >
                <ArrowUpRight aria-hidden="true" size={15} /> LinkedIn profile
              </ExternalIconLink>
              <ExternalIconLink href={profile.github} className="contact-link">
                <Code2 aria-hidden="true" size={15} /> GitHub profile
              </ExternalIconLink>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-rule">
        <div className="wrap footer-inner">
          <a className="brand" href="#top">
            <span aria-hidden="true" className="brand-mark">
              {profile.initials}
            </span>
            <span>
              Built to be verified<span className="brand-dot">.</span>
            </span>
          </a>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <nav aria-label="Footer links" className="footer-social">
            <ExternalIconLink href={profile.github}>
              GitHub <ArrowUpRight aria-hidden="true" size={12} />
            </ExternalIconLink>
            <ExternalIconLink href={profile.linkedin}>
              LinkedIn <ArrowUpRight aria-hidden="true" size={12} />
            </ExternalIconLink>
            <a className="social-link" href={`mailto:${profile.email}`}>
              Email <ArrowUpRight aria-hidden="true" size={12} />
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
