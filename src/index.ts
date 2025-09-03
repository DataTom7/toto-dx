/**
 * Toto Design System (DX)
 * Unified design system for the entire Toto ecosystem
 */

// Design Tokens
export * from './tokens';

// Components
export { TotoLogo } from './components/TotoLogo';
export { Button, buttonVariants } from './components/Button';
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/Card';
export { Input } from './components/Input';
export { Badge } from './components/Badge';
export { Label } from './components/Label';
export { Textarea } from './components/Textarea';
export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './components/Dialog';
export {
  Alert,
  AlertTitle,
  AlertDescription,
} from './components/Alert';
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from './components/Avatar';
export { Progress } from './components/Progress';
export {
  Select,
  SelectOption,
  SelectGroup,
} from './components/Select';
export { Separator } from './components/Separator';
export { Switch } from './components/Switch';
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './components/Tabs';

// Utilities
export * from './utils';

// Styles - Import CSS for side effects
import './styles/toto-design-system.css';
