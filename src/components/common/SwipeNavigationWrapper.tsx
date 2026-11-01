import { ReactNode, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SwipeNavigationWrapperProps {
  children: ReactNode;
}

const ROUTES = ["/", "/cv", "/work-experience", "/education"];

export default function SwipeNavigationWrapper({ children }: SwipeNavigationWrapperProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isIgnoredRef = useRef(false);

  const currentIndex = ROUTES.indexOf(location.pathname);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // Only engage on single-finger touch
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    const target = e.target as HTMLElement | null;

    // Avoid hijacking touches inside horizontal scroll carousels, code blocks, or sliders
    if (target && target.closest("[data-swipe-ignore], [data-carousel], .overflow-x-auto, pre, code")) {
      isIgnoredRef.current = true;
      return;
    }

    isIgnoredRef.current = false;
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isIgnoredRef.current || !touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;
    const elapsed = Date.now() - touchStartRef.current.time;

    touchStartRef.current = null;

    // Minimum distance threshold of 60px, predominantly horizontal, quick flick (<500ms)
    const isHorizontalSwipe =
      Math.abs(diffX) > 60 &&
      Math.abs(diffX) > Math.abs(diffY) * 1.5 &&
      elapsed < 500;

    if (!isHorizontalSwipe) return;

    if (diffX < 0 && currentIndex >= 0 && currentIndex < ROUTES.length - 1) {
      // Swiped Left -> go forward
      navigate(ROUTES[currentIndex + 1]);
    } else if (diffX > 0 && currentIndex > 0) {
      // Swiped Right -> go back
      navigate(ROUTES[currentIndex - 1]);
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full"
    >
      {children}
    </div>
  );
}
