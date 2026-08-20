import type { MDXComponents } from "mdx/types";

/*
 * MDX 본문의 기본 태그 스타일.
 * 여기 정의한 스타일이 content/blog 의 모든 글에 적용된다.
 */
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-[var(--space-500)] mb-[var(--space-150)] border-t border-[var(--color-divider-alternative)] pt-[var(--space-300)] text-[length:var(--font-size-200)] leading-[var(--font-line-height-200)] [font-weight:var(--font-weight-700)]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-[var(--space-400)] mb-[var(--space-150)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-075)] [font-weight:var(--font-weight-700)]"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-[var(--space-150)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)]"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mb-[var(--space-150)] ml-[var(--space-250)] flex list-disc flex-col gap-[var(--space-100)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-[var(--space-150)] ml-[var(--space-250)] flex list-decimal flex-col gap-[var(--space-100)] text-[length:var(--font-size-100)] leading-[var(--font-line-height-100)] text-[var(--color-label-neutral)]"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="underline underline-offset-[var(--space-050)]"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="[font-weight:var(--font-weight-700)]" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-[var(--space-300)] border-l-[length:var(--dimension-025)] border-[var(--color-divider-normal)] pl-[var(--space-250)] text-[var(--color-label-alternative)]"
      {...props}
    />
  ),
  hr: (props) => (
    <hr
      className="my-[var(--space-500)] border-[var(--color-divider-alternative)]"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-[var(--radius-100)] bg-[var(--color-gray-100)] px-[var(--space-050)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-075)]"
      {...props}
    />
  ),
  /*
   * 표는 좁은 화면에서 본문 폭을 밀어내지 않도록 자기 안에서만 가로 스크롤한다.
   * wrapper 를 끼울 수 없어(MDX 가 table 을 그대로 넘긴다) block + overflow 로 처리한다.
   */
  table: (props) => (
    <table
      className="my-[var(--space-300)] block w-full overflow-x-auto border-collapse text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)]"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="border-b border-[var(--color-divider-normal)] px-[var(--space-150)] py-[var(--space-100)] text-left align-top whitespace-nowrap [font-weight:var(--font-weight-700)]"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-[var(--color-divider-alternative)] px-[var(--space-150)] py-[var(--space-100)] text-left align-top text-[var(--color-label-neutral)]"
      {...props}
    />
  ),
  /*
   * 라이트 코드 블록. 신택스 색은 globals.css 의 --site-code-* 가 hljs 클래스에 준다.
   * pre 안의 code 는 인라인 코드 스타일(배경·패딩)을 걷어내 배경이 겹치지 않게 한다.
   */
  pre: (props) => (
    <pre
      className="my-[var(--space-300)] overflow-x-auto rounded-[var(--radius-300)] border border-[var(--color-divider-alternative)] bg-[var(--color-background-alternative)] p-[var(--space-250)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-neutral)] [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[length:inherit]"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
