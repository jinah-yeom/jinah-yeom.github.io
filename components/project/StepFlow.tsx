import { FIGURE_CAPTION } from "./SlotFrame";

export interface FlowStep {
  /** 이 단계에서 하는 일 */
  title: string;
  /** 무엇을 확인하는 단계인지 */
  description: string;
}

export interface StepFlowProps {
  steps?: FlowStep[];
  caption?: string;
}

export default function StepFlow({ steps = [], caption }: StepFlowProps) {
  return (
    <figure className="my-[var(--space-400)]">
      <ol className="grid grid-cols-5 gap-[var(--space-250)] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="border-t border-[var(--color-divider-normal)] pt-[var(--space-150)]"
          >
            <p className="mb-[var(--space-100)] font-[family-name:var(--site-font-mono)] text-[length:var(--font-size-050)] leading-[var(--font-line-height-035)] text-[var(--color-label-assistive)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mb-[var(--space-075)] text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] [font-weight:var(--font-weight-700)]">
              {step.title}
            </p>
            <p className="text-[length:var(--font-size-075)] leading-[var(--font-line-height-050)] text-[var(--color-label-alternative)]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      {caption && <figcaption className={FIGURE_CAPTION}>{caption}</figcaption>}
    </figure>
  );
}
