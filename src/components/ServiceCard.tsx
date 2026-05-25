import type { Service } from "@/data/site-content";
import { Reveal } from "./Reveal";

interface ServiceCardProps {
  readonly service: Service;
  readonly variant?: "preview" | "detail";
}

export function ServiceCard({
  service,
  variant = "preview",
}: ServiceCardProps): React.ReactElement {
  const description = variant === "detail" ? service.detail : service.summary;
  return (
    <Reveal as="article" className="svc-card">
      <div className="svc-num">{service.number}</div>
      <span className="svc-tag">{service.tag}</span>
      <h3 className="svc-name">{service.name}</h3>
      <p className="svc-desc">{description}</p>
    </Reveal>
  );
}
