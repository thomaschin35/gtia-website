/**
 * @author: @dorianbaffier
 * @description: Card Flip — adapted from KokonutUI to a reusable 3D shell.
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";

/**
 * Generic 3D flip shell (KokonutUI card-flip mechanics).
 * Front/back faces are passed as children so callers can match Paper layouts.
 */
export default function CardFlip({
  isFlipped = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onKeyDown,
  className,
  front,
  back,
  ariaLabel,
  ariaPressed,
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={cn(
        "group relative h-[320px] cursor-pointer [perspective:2000px]",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-[transform] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
          "motion-reduce:transition-none",
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        <div className="absolute inset-0 h-full w-full overflow-hidden [backface-visibility:hidden] [transform:rotateY(0deg)]">
          {front}
        </div>
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}
