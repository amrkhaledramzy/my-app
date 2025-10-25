import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #eff8f3 0%, #fdfefe 100%)",
          fontFamily: '"Inter", "Segoe UI", Helvetica, Arial, sans-serif',
          color: "#10251a",
          padding: "2rem"
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            borderRadius: "24px",
            padding: "3rem",
            maxWidth: "640px",
            textAlign: "center",
            boxShadow: "0 18px 42px -28px rgba(18, 62, 37, 0.55)",
            display: "grid",
            gap: "1.5rem"
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "2rem",
              color: "#163826"
            }}
          >
            Project not found
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "1.05rem",
              color: "#314a3a"
            }}
          >
            The project you're looking for has moved or doesn't exist. Let's head
            back to the main page.
          </p>
          <Link
            to="/"
            style={{
              justifySelf: "center",
              padding: "0.85rem 1.8rem",
              borderRadius: "999px",
              backgroundColor: "#2f9e44",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none"
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
          justifyContent: "center",
          padding: "3.5rem 1.5rem 4.5rem"
        }}
      >
        <article
          style={{
            width: "min(960px, 100%)",
            background: "rgba(255, 255, 255, 0.94)",
            borderRadius: "28px",
            padding: "3.5rem",
            boxShadow: "0 18px 44px -28px rgba(15, 55, 32, 0.6)",
            display: "grid",
            gap: "2rem"
          }}
        >
          <header style={{ display: "grid", gap: "1.75rem" }}>
            <Link
              to="/"
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#2f9e44",
                letterSpacing: "0.08em",
                textDecoration: "none",
                textTransform: "uppercase"
              }}
            >
              ← Back to Projects
            </Link>

            <div style={{ display: "grid", gap: "0.75rem" }}>
              
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(2.6rem, 5vw, 3.4rem)",
                  lineHeight: 1.05,
                  color: "#0f2419"
                }}
              >
                {project.title}
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.15rem",
                  color: "#29503b",
                  lineHeight: 1.6
                }}
              >
                {project.subtitle}
              </p>
            </div>
          </header>

          <section
            style={{
              display: "grid",
              gap: "1.5rem"
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "1.35rem",
                color: "#163826"
              }}
            >
              Project Highlights
            </h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.2rem",
                display: "grid",
                gap: "0.9rem",
                color: "#314a3a",
                fontSize: "1.02rem",
                lineHeight: 1.7
              }}
            >
              {project.overview.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap"
            }}
          >
            <div style={{ display: "grid", gap: "0.8rem" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.15rem",
                  color: "#163826"
                }}
              >
                Stack & Partners
              </h3>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {project.tech.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "0.35rem 0.9rem",
                      borderRadius: "999px",
                      background: "rgba(47, 158, 68, 0.12)",
                      color: "#2f6940",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      letterSpacing: "0.02em"
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gap: "0.8rem", flex: "1 1 300px" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.15rem",
                  color: "#163826"
                }}
              >
                Impact
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  color: "#314a3a",
                  lineHeight: 1.7
                }}
              >
                {project.impact}
              </p>
            </div>
          </section>
        </article>
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
          <span>✉️ amr.ramzeymegahed1213@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}
