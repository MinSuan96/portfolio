import { useState } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Split from './components/Split';
import StatGrid from './components/StatGrid';
import Timeline from './components/Timeline';
import BigNumber from './components/BigNumber';
import Quote from './components/Quote';
import Section from './components/Section';
import CountUp from './components/CountUp';

/* ══════════════════════════════════════════════════════════════════════
   MINSUANTEH — Portfolio Deck
   Personal web profile → paged deck experience
   Theme: Dark, warm amber accent (tokens.css :root)
   ══════════════════════════════════════════════════════════════════════ */

const panel = (extra = 0.22): React.CSSProperties => ({
  position: 'absolute',
  inset: 0,
  background: `radial-gradient(120% 100% at 30% 20%, color-mix(in srgb, var(--primary) ${
    extra * 100
  }%, transparent), transparent 60%), var(--surface-2)`,
});

/* ── Landing Page ───────────────────────────────────────────────────── */
function Landing({ onEnter }: { onEnter: () => void }) {
  return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
        }}
      >
      {/* Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(44% 50% at 24% 16%, var(--bg-grad-1), transparent 60%),
                       radial-gradient(50% 56% at 82% 88%, var(--bg-grad-2), transparent 62%)`,
          animation: 'drift 26s cubic-bezier(0.32, 0.72, 0, 1) infinite alternate',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }}
      />

      {/* Profile image */}
      <div
        style={{
          width: 'clamp(100px, 14vw, 160px)',
          height: 'clamp(100px, 14vw, 160px)',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: 'clamp(24px, 4vh, 40px)',
          border: '2px solid var(--hair)',
          boxShadow: '0 0 40px -10px color-mix(in srgb, var(--primary) 40%, transparent)',
          flexShrink: 0,
        }}
      >
          <img
            src="/assets/img/me.png"
            alt="Minsuan Teh"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
      </div>

      {/* Name */}
      <h1
        style={{
          fontFamily: 'var(--font-head)',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          lineHeight: 0.98,
          fontSize: 'clamp(44px, 8vw, 116px)',
          margin: 0,
          color: 'var(--fg)',
          textAlign: 'center',
        }}
      >
        <span className="accent-text">Minsuan Teh</span>
      </h1>

      {/* Title */}
      <p
        className="lead"
        style={{
          marginTop: 'clamp(12px, 2vh, 22px)',
          textAlign: 'center',
          maxWidth: '36ch',
          color: 'var(--fg-muted)',
        }}
      >
        Machine Learning Platform Engineer
      </p>

      {/* Social links */}
      <div
        style={{
          display: 'flex',
          gap: 'clamp(16px, 3vw, 32px)',
          marginTop: 'clamp(20px, 3vh, 36px)',
        }}
      >
        <a
          href="https://github.com/MinSuan96"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--fg-faint)',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(12px, 1.2vw, 15px)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            fontWeight: 500,
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-faint)')}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/minsuan-teh-8a0a31199/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--fg-faint)',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(12px, 1.2vw, 15px)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            fontWeight: 500,
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-faint)')}
        >
          LinkedIn
        </a>
        <a
          href="mailto:minsuan1104@hotmail.com"
          style={{
            color: 'var(--fg-faint)',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(12px, 1.2vw, 15px)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            fontWeight: 500,
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-faint)')}
        >
          Email
        </a>
      </div>

      {/* Enter button */}
      <button
        onClick={onEnter}
        style={{
          marginTop: 'clamp(36px, 6vh, 60px)',
          padding: '14px 40px',
          borderRadius: '999px',
          border: '1px solid var(--hair)',
          background: 'var(--surface)',
          color: 'var(--fg-muted)',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(14px, 1.4vw, 17px)',
          fontWeight: 500,
          letterSpacing: '0.04em',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 40%, transparent)';
          e.currentTarget.style.color = 'var(--primary)';
          e.currentTarget.style.boxShadow = '0 0 30px -10px color-mix(in srgb, var(--primary) 40%, transparent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--hair)';
          e.currentTarget.style.color = 'var(--fg-muted)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Enter ↓
      </button>
    </div>
  );
}

/* ── App ────────────────────────────────────────────────────────────── */
export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      {!entered ? (
        <Landing onEnter={() => setEntered(true)} />
      ) : (
        <Deck>
          {/* ── Cover ──────────────────────────────────────────────── */}
          <Cover
            nav="Cover"
            notes="Welcome — hold here a beat."
            kicker="Portfolio"
            title={<span className="accent-text">Minsuan Teh</span>}
            subtitle="Machine Learning Platform Engineer"
              foot="Tencent · Kuala Lumpur"
          />

          {/* ── About ──────────────────────────────────────────────── */}
          <Split
            nav="About"
            notes="Walk through the bio. Point at the photo."
            kicker="About"
            title="Greetings! 👋"
            body="I'm a passionate individual with a love for gaming, problem-solving, and the ever-evolving world of coding. I hold an MSc and BEng in Computer Science from The University of Edinburgh, with a focus on machine learning."
            media={
              <div style={{ ...panel(0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                  style={{
                    width: 'clamp(120px, 18vw, 220px)',
                    height: 'clamp(120px, 18vw, 220px)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--hair)',
                    boxShadow: '0 0 50px -15px color-mix(in srgb, var(--primary) 50%, transparent)',
                  }}
                >
                  <img
                    src="/assets/img/me.png"
                    alt="Minsuan Teh"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            }
          />

          {/* ── Skills ─────────────────────────────────────────────── */}
          <Slide center nav="Skills">
            <Reveal>
              <div className="kicker" style={{ marginBottom: 14, textAlign: 'center' }}>
                Skills
              </div>
              <h2
                className="display"
                style={{
                  fontSize: 'clamp(32px, 4.8vw, 60px)',
                  marginInline: 'auto',
                  marginBottom: 32,
                }}
              >
                <span className="accent-text">Tech stack.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="stat-grid" style={{ maxWidth: 860, marginInline: 'auto' }}>
                {[
                  { label: 'Python', caption: 'Core language, AI/ML pipelines' },
                  { label: 'PyTorch', caption: 'Model development, RL training' },
                  { label: 'TensorFlow', caption: 'ML models, NLP' },
                  { label: 'C++', caption: 'Sensor development, performance systems' },
                  { label: 'SQL', caption: 'Database querying, ELK pipelines' },
                  { label: 'ELK Stack', caption: 'Elasticsearch, Logstash, Kibana' },
                  { label: 'Redis', caption: 'Caching, real-time data' },
                  { label: 'RabbitMQ', caption: 'Message queuing, log forwarding' },
                  { label: 'Microsoft Azure', caption: 'Event Hub, Blob Storage, managed identity' },
                  { label: 'Amazon AWS', caption: 'CloudWatch, RDS, S3 integrations' },
                  { label: 'Kubernetes', caption: 'Container orchestration, deployment' },
                  { label: 'Docker', caption: 'Containerization, local dev' },
                  { label: 'Java', caption: 'Tutoring, backend development' },
                  { label: 'Algorithms', caption: 'Data structures, algorithmic design' },
                  { label: 'Ruby', caption: 'Automation, tooling' },
                ].map((s, i) => (
                  <div className="stat-cell" key={i}>
                    <div className="stat-card">
                      <span className="tick" />
                      <div className="stat-label" style={{ background: 'var(--accent)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                        {s.label}
                      </div>
                      <div className="stat-caption">{s.caption}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </Slide>

          {/* ── Section divider ────────────────────────────────────── */}
          <Section
            nav="Experience"
            n={1}
            kicker="Career"
            title={
              <>
                Where I've{' '}
                <span className="accent-text">worked.</span>
              </>
            }
          />

          {/* ── Experience ─────────────────────────────────────────── */}
          <Slide center nav="Experience">
            <Reveal>
              <Timeline
                items={[
                  {
                    time: '2026 — Present',
                    title: 'Machine Learning Platform Engineer',
                    body: 'Tencent Games — Developing internal AI tools and platforms for generative audio workflows, knowledge management, and data integration pipelines.',
                  },
                  {
                    time: '2024 — 2026',
                    title: 'Software Engineer',
                    body: 'InsiderSecurity — Automated UEBA platform: risk scoring optimization, cloud integrations (Azure/AWS), sensorless pipeline, Kubernetes migration, C++ sensor enhancements.',
                  },
                  {
                    time: '2023',
                    title: 'Global Software Service Engineer',
                    body: 'Huawei GSRC — Convergent Billing System harmonization for CelcomDigi merger. HTTP testing, SQL database manipulation, GUI validation.',
                  },
                  {
                    time: '2023',
                    title: 'Java Tutor and Marker',
                    body: 'University of Edinburgh — Conducted weekly tutorials for 10 first-year informatics students, assessed coursework, provided feedback.',
                  },
                ]}
              />
            </Reveal>
          </Slide>

          {/* ── Section divider ────────────────────────────────────── */}
          <Section
            nav="Education"
            n={2}
            kicker="Education"
            title={
              <>
                Where I've{' '}
                <span className="accent-text">studied.</span>
              </>
            }
          />

          {/* ── Education ──────────────────────────────────────────── */}
          <BigNumber
            nav="Education"
            kicker="Academic"
            value={<CountUp to={2} suffix=" degrees" />}
            caption={<>MSc & BEng in Computer Science — <span style={{ color: 'var(--primary)' }}>University of Edinburgh</span></>}
            foot="MSc: Passed with Merit · BEng: First Class Honours"
          />

          {/* ── Languages ──────────────────────────────────────────── */}
          <Slide center nav="Languages">
            <Reveal>
              <div className="kicker" style={{ marginBottom: 14, textAlign: 'center' }}>
                Languages
              </div>
              <h2
                className="display"
                style={{
                  fontSize: 'clamp(32px, 4.8vw, 60px)',
                  marginInline: 'auto',
                  marginBottom: 36,
                }}
              >
                <span className="accent-text">Communication.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="cols" style={{ maxWidth: 720, marginInline: 'auto' }}>
                {[
                  { lang: 'Chinese', level: 'Native Speaker' },
                  { lang: 'English', level: 'Full Professional' },
                  { lang: 'Malay', level: 'Professional Working' },
                ].map((l, i) => (
                  <div
                    key={i}
                    className="mat"
                    style={{
                      borderRadius: 'var(--radius)',
                      padding: 'clamp(20px, 2.4vw, 30px) clamp(18px, 2vw, 24px)',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <span className="tick" style={{ marginBottom: 10 }} />
                    <div style={{ fontWeight: 600, fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--fg)' }}>
                      {l.lang}
                    </div>
                    <div style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', color: 'var(--fg-faint)' }}>
                      {l.level}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </Slide>

          {/* ── CV Download ────────────────────────────────────────── */}
          <Slide center nav="CV">
            <Reveal>
              <div className="kicker" style={{ marginBottom: 14, textAlign: 'center' }}>
                Resume
              </div>
              <h2
                className="display"
                style={{
                  fontSize: 'clamp(32px, 4.8vw, 60px)',
                  marginInline: 'auto',
                  marginBottom: 20,
                }}
              >
                <span className="accent-text">Get the details.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="subhead"
                style={{ marginTop: 18, textAlign: 'center', maxWidth: '30ch', marginInline: 'auto' }}
              >
                Download my full engineering resume.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <a
                href="/assets/pdf/resume.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  marginTop: 'clamp(28px, 5vh, 44px)',
                  padding: '14px 36px',
                  borderRadius: '999px',
                  border: '1px solid var(--hair)',
                  background: 'var(--surface)',
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(14px, 1.4vw, 17px)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 40%, transparent)';
                  e.currentTarget.style.boxShadow = '0 0 30px -10px color-mix(in srgb, var(--primary) 40%, transparent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--hair)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                resume.pdf ↓
              </a>
            </Reveal>
          </Slide>

          {/* ── Close / CTA ────────────────────────────────────────── */}
          <Slide center nav="Connect">
            <Reveal>
              <div className="kicker" style={{ marginBottom: 14, textAlign: 'center' }}>
                Connect
              </div>
              <h2
                className="display"
                style={{
                  fontSize: 'clamp(32px, 4.8vw, 60px)',
                  marginInline: 'auto',
                  marginBottom: 20,
                }}
              >
                <span className="accent-text">Find out more.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="subhead"
                style={{ marginTop: 18, textAlign: 'center', maxWidth: '38ch', marginInline: 'auto' }}
              >
                Projects, publications, and detailed experience on my main portfolio site.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 'clamp(12px, 2vw, 16px)',
                  marginTop: 'clamp(28px, 5vh, 44px)',
                }}
              >
                <a
                  href="https://minsuan96.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 36px',
                    borderRadius: '999px',
                    border: '1px solid var(--hair)',
                    background: 'var(--surface)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(14px, 1.4vw, 17px)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 40%, transparent)';
                    e.currentTarget.style.boxShadow = '0 0 30px -10px color-mix(in srgb, var(--primary) 40%, transparent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--hair)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  minsuan96.github.io ↗
                </a>
                <a
                  href="https://github.com/MinSuan96"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 36px',
                    borderRadius: '999px',
                    border: '1px solid var(--hair)',
                    background: 'var(--surface)',
                    color: 'var(--fg-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(14px, 1.4vw, 17px)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 40%, transparent)';
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 30px -10px color-mix(in srgb, var(--primary) 40%, transparent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--hair)';
                    e.currentTarget.style.color = 'var(--fg-muted)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/minsuan-teh-8a0a31199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 36px',
                    borderRadius: '999px',
                    border: '1px solid var(--hair)',
                    background: 'var(--surface)',
                    color: 'var(--fg-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(14px, 1.4vw, 17px)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 40%, transparent)';
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 30px -10px color-mix(in srgb, var(--primary) 40%, transparent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--hair)';
                    e.currentTarget.style.color = 'var(--fg-muted)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:minsuan1104@hotmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 36px',
                    borderRadius: '999px',
                    border: '1px solid var(--hair)',
                    background: 'var(--surface)',
                    color: 'var(--fg-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(14px, 1.4vw, 17px)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 40%, transparent)';
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 30px -10px color-mix(in srgb, var(--primary) 40%, transparent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--hair)';
                    e.currentTarget.style.color = 'var(--fg-muted)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Email ↗
                </a>
              </div>
            </Reveal>
          </Slide>
        </Deck>
      )}
    </div>
  );
}
