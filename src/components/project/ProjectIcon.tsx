import {
    Activity,
    Bell,
    BookOpenText,
    Bot,
    Calculator,
    Database,
    DraftingCompass,
    Flag,
    Gauge,
    HeartHandshake,
    LayoutTemplate,
    MessageCircleMore,
    MonitorSmartphone,
    Moon,
    Package,
    Palette,
    Search,
    Siren,
    Sparkles,
    Store,
    Swords,
    TriangleAlert,
    UserPlus,
    UserRoundCog,
    UserStar,
} from "lucide-react";

/**
 * 데이터에 적힌 아이콘 이름 → 컴포넌트.
 * lucide-react/dynamic 을 쓰면 1,600개 아이콘 청크가 전부 빌드에 들어가서 직접 매핑한다.
 */
const ICONS = {
    activity: Activity,
    bell: Bell,
    "book-open-text": BookOpenText,
    bot: Bot,
    calculator: Calculator,
    database: Database,
    "drafting-compass": DraftingCompass,
    flag: Flag,
    gauge: Gauge,
    "heart-handshake": HeartHandshake,
    "layout-template": LayoutTemplate,
    "message-circle-more": MessageCircleMore,
    "monitor-smartphone": MonitorSmartphone,
    moon: Moon,
    package: Package,
    palette: Palette,
    search: Search,
    siren: Siren,
    sparkles: Sparkles,
    store: Store,
    swords: Swords,
    "triangle-alert": TriangleAlert,
    "user-key": UserRoundCog,
    "user-plus": UserPlus,
    "user-star": UserStar,
} as const;

export default function ProjectIcon({
    name,
    size = 16,
}: {
    name?: string;
    size?: number;
}) {
    const Icon = name ? ICONS[name as keyof typeof ICONS] : undefined;
    if (!Icon) return null;
    return <Icon size={size} />;
}
