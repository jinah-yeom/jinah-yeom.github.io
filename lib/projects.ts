/**
 * 프로젝트 상세 페이지의 노출 순서.
 * 이전/다음 내비게이션이 이 배열만 보고 계산하므로, 새 프로젝트는 여기에 한 줄 추가하면 된다.
 *
 * TODO: /work/kds 를 v2 템플릿으로 이관할지 정해지면 이 배열에 함께 넣는다.
 */
export interface ProjectRef {
  slug: string;
  title: string;
}

export const PROJECTS: ProjectRef[] = [
  { slug: "keeper-listview", title: "Keeper APP 리스트뷰 UX 개선" },
];

export interface ProjectNeighbors {
  /** 배열에서 앞에 있는 프로젝트 */
  prev?: ProjectRef;
  /** 배열에서 뒤에 있는 프로젝트 */
  next?: ProjectRef;
}

export function projectHref(slug: string): string {
  return `/work/${slug}`;
}

/** 목록에 없는 슬러그면 양쪽 모두 비어서 돌아온다 */
export function getProjectNeighbors(slug: string): ProjectNeighbors {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) return {};

  return {
    prev: PROJECTS[index - 1],
    next: PROJECTS[index + 1],
  };
}
