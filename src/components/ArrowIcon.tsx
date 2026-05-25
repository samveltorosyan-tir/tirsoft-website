interface ArrowIconProps {
  readonly stroke?: string;
  readonly className?: string;
}

export function ArrowIcon({
  stroke = "white",
  className = "arr",
}: ArrowIconProps): React.ReactElement {
  return (
    <svg className={className} viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke={stroke}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
