import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const selector = [
      "header",
      "nav",
      "main > section",
      "main > section > .container > *",
      ".hero-content > *",
      ".hero-visual",
      ".profile-photo",
      ".project-card",
      ".skill-group",
      ".timeline-item",
      ".contact-panel",
      "footer",
    ].join(",");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    ).filter((element, index, all) => all.indexOf(element) === index);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("motion-revealed");
      });

      return;
    }

    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty(
        "--motion-delay",
        `${(index % 5) * 75}ms`,
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("motion-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
