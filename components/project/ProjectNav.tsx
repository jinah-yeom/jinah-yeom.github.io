import Link from "next/link";
import {
  getProjectNeighbors,
  projectHref,
  type ProjectRef,
} from "@/lib/projects";

export interface ProjectNavProps {
  /** 현재 페이지 슬러그 — 앞뒤 프로젝트는 lib/projects.ts 의 순서로 계산한다 */
  slug: string;
  nextLabel?: string;
  prevLabel?: string;
}

const LABEL =
  "text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] [font-weight:var(--font-weight-700)]";

const NAME =
  "mt-[var(--space-050)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] [font-weight:var(--font-weight-400)] text-[var(--color-label-alternative)]";

function NavLink({
  project,
  label,
  align,
}: {
  project: ProjectRef;
  label: string;
  align: "left" | "right";
}) {
  return (
    <Link
      href={projectHref(project.slug)}
      /* w-fit — 칸을 다 채우면 포커스 링이 글자가 아니라 칸 절반을 두른다 */
      className={`group block w-fit ${align === "right" ? "text-right" : ""}`}
    >
      <span className={`${LABEL} block group-hover:underline`}>{label}</span>
      <span className={`${NAME} block`}>{project.title}</span>
    </Link>
  );
}

export default function ProjectNav({
  slug,
  nextLabel = "Next Project →",
  prevLabel = "← Previous Project",
}: ProjectNavProps) {
  const { prev, next } = getProjectNeighbors(slug);

  /* 양쪽 다 없으면 빈 구분선만 남으므로 아예 렌더하지 않는다 */
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="프로젝트 이동"
      className="grid grid-cols-2 gap-[var(--space-300)] border-t border-[var(--color-divider-alternative)] pt-[var(--space-400)]"
    >
      <div>
        {prev && <NavLink project={prev} label={prevLabel} align="left" />}
      </div>
      <div className="justify-self-end">
        {next && <NavLink project={next} label={nextLabel} align="right" />}
      </div>
    </nav>
  );
}
