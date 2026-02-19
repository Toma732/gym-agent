/**
 * Coach App Component Library
 * 
 * Centralized export for all reusable components.
 * Import from this file for cleaner imports across the app.
 * 
 * Example:
 *   import { Button, Card, TopNav } from '@/components';
 */

// UI Components
export { Button } from './ui/Button';
export type { ButtonVariant, ButtonSize } from './ui/Button';

export { Card, ImageCard } from './ui/Card';

export { Input, TextArea } from './ui/Input';

export { ProgressBar, StatusBadge, CircularProgress } from './ui/Progress';

// Layout Components
export { TopNav } from './layout/TopNav';
export { BottomNav } from './layout/BottomNav';

// Feature Components
export { DayComponent } from './home/DayComponent';
export type { DayData } from './home/DayComponent';

export { WeekComponent } from './home/WeekComponent';
export type { WeekData } from './home/WeekComponent';

export { FocusAreaComponent } from './onboarding/FocusAreaComponent';
export type { FocusArea } from './onboarding/FocusAreaComponent';
