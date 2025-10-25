import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #eff8f3 0%, #fdfefe 100%)",
        fontFamily: '"Inter", "Segoe UI", Helvetica, Arial, sans-serif',
        color: "#10251a"
      }}
    >
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3.5rem",
          padding: "3.5rem 1.5rem 5rem"
        }}
      >
        <section
          style={{
            width: "min(1080px, 100%)",
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.92)",
            borderRadius: "28px",
            padding: "3.5rem",
            boxShadow: "0 18px 42px -28px rgba(18, 62, 37, 0.65)"
          }}
        >
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              <span
                style={{
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.4em",
                  color: "#2f9e44",
                  fontWeight: 600
                }}
              >
                Hello, I'm
              </span>
              <h1
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 4.4rem)",
                  lineHeight: 1.05,
                  margin: 0,
                  fontWeight: 700,
                  color: "#0f2419"
                }}
              >
                Amr K Megahed
              </h1>
            </div>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                margin: 0,
                color: "#294536",
                maxWidth: "62ch"
              }}
            >
              I’m a senior Software Engineering student at Penn State Behrend with
              a deep passion for building reliable, secure, and user-focused
              systems. From a Tire Shop Management System to the Community Pulse
              capstone in partnership with Tipping Point Media, I love shaping
              digital experiences that blend clean design, thoughtful engineering,
              and measurable impact.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://www.linkedin.com/in/amrkramegahed/"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "0.85rem 1.6rem",
                  borderRadius: "999px",
                  backgroundColor: "#2f9e44",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  boxShadow: "0 12px 30px -18px rgba(25, 119, 42, 0.8)",
                  transition: "transform 120ms ease, box-shadow 120ms ease"
                }}
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/amrkhaledramzy"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "0.85rem 1.6rem",
                  borderRadius: "999px",
                  backgroundColor: "transparent",
                  color: "#2f9e44",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "2px solid rgba(47, 158, 68, 0.35)",
                  letterSpacing: "0.02em",
                  transition: "transform 120ms ease, border-color 120ms ease"
                }}
              >
                View My GitHub
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/s1.JPG"
              alt="Amr Ramzey Megahed"
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "28px",
                objectFit: "cover",
                boxShadow: "0 20px 45px -30px rgba(31, 94, 54, 0.75)",
                border: "3px solid rgba(255, 255, 255, 0.7)"
              }}
            />
          </div>
        </section>

        <section
          style={{
            width: "min(1080px, 100%)",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "24px",
            padding: "3rem",
            boxShadow: "0 14px 36px -24px rgba(17, 57, 33, 0.55)",
            display: "grid",
            gap: "2rem"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap"
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "2rem",
                  color: "#163826",
                  letterSpacing: "0.01em"
                }}
              >
                Featured Projects
              </h2>
              <p
                style={{
                  margin: "0.35rem 0 0",
                  fontSize: "1rem",
                  color: "#3c5a48"
                }}
              >
                A snapshot of work where strategy, craft, and impact come together.
              </p>
            </div>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2f9e44"
              }}
            >
              Explore
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
            }}
          >
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                style={{
                  textDecoration: "none"
                }}
              >
                <article
                  style={{
                    height: "100%",
                    background: "linear-gradient(160deg, #ffffff 0%, #f1f7f3 100%)",
                    borderRadius: "20px",
                    padding: "1.75rem",
                    display: "grid",
                    gap: "1rem",
                    border: "1px solid rgba(47, 158, 68, 0.08)",
                    transition: "transform 140ms ease, box-shadow 140ms ease",
                    boxShadow: "0 12px 28px -24px rgba(19, 56, 32, 0.5)"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem"
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.35rem",
                        color: "#163826"
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "#2f6940",
                        fontWeight: 500
                      }}
                    >
                      {project.subtitle}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.98rem",
                      lineHeight: 1.6,
                      color: "#314a3a"
                    }}
                  >
                    {project.shortDescription}
                  </p>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#2f9e44",
                      letterSpacing: "0.05em"
                    }}
                  >
                    View project →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer
        style={{
          padding: "1.75rem 1.5rem 2.5rem",
          display: "flex",
          justifyContent: "center",
          fontSize: "0.95rem",
          color: "#284a37",
          letterSpacing: "0.02em"
        }}
      >
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <span>📞 +1 (484) 550-4002</span>
          <span>✉️ amr.ramzeymegssssssahed@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}
