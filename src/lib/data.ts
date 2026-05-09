export type Course = {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  students: number;
  price: number;
  originalPrice?: number;
  bestseller?: boolean;
  thumbnail: string;
  tag?: string;
};

const thumbs = [
  "linear-gradient(135deg,#6366f1,#a855f7,#22d3ee)",
  "linear-gradient(135deg,#0ea5e9,#6366f1,#ec4899)",
  "linear-gradient(135deg,#f43f5e,#a855f7,#0ea5e9)",
  "linear-gradient(135deg,#22d3ee,#10b981,#6366f1)",
  "linear-gradient(135deg,#f59e0b,#ef4444,#a855f7)",
  "linear-gradient(135deg,#8b5cf6,#06b6d4,#84cc16)",
  "linear-gradient(135deg,#ec4899,#8b5cf6,#3b82f6)",
  "linear-gradient(135deg,#14b8a6,#6366f1,#f97316)",
];

const titles = [
  "Mastering Modern React & Next.js 15",
  "Generative AI: Build LLM Apps from Scratch",
  "UI/UX Design — From Figma to Production",
  "Python for Data Science & Machine Learning",
  "The Complete Web3 & Solidity Bootcamp",
  "Cinematic Photography with Mirrorless Cameras",
  "Product Management in the AI Era",
  "Advanced TypeScript Patterns",
  "Cloud Architecture on AWS — Pro Track",
  "Motion Design with After Effects",
  "Growth Marketing & SEO Mastery",
  "iOS Development with SwiftUI",
];
const instructors = [
  "Ava Mitchell", "Noah Patel", "Liam Chen", "Sofia Rivera",
  "Daniel Kim", "Maya Johnson", "Ethan Brooks", "Aria Singh",
];
const categories = ["Development", "Design", "Data Science", "Business", "Marketing", "Photography", "AI & ML"];

export const COURSES: Course[] = titles.map((t, i) => ({
  id: `c${i + 1}`,
  title: t,
  instructor: instructors[i % instructors.length],
  instructorAvatar: `https://i.pravatar.cc/100?img=${(i % 70) + 1}`,
  category: categories[i % categories.length],
  level: (["Beginner", "Intermediate", "Advanced"] as const)[i % 3],
  duration: `${6 + (i % 18)}h ${10 * (i % 5)}m`,
  rating: Number((4.4 + ((i * 13) % 6) / 10).toFixed(1)),
  students: 1200 + i * 873,
  price: [19, 29, 39, 49, 59, 79][i % 6],
  originalPrice: [89, 99, 129, 149][i % 4],
  bestseller: i % 3 === 0,
  thumbnail: thumbs[i % thumbs.length],
  tag: i % 4 === 0 ? "New" : i % 5 === 0 ? "Hot" : undefined,
}));

export const CATEGORIES = [
  { name: "Development", icon: "Code2", count: 1240, color: "from-indigo-500 to-purple-500" },
  { name: "Design", icon: "Palette", count: 612, color: "from-pink-500 to-purple-500" },
  { name: "Data Science", icon: "Database", count: 432, color: "from-cyan-500 to-blue-500" },
  { name: "AI & ML", icon: "Brain", count: 318, color: "from-violet-500 to-fuchsia-500" },
  { name: "Business", icon: "Briefcase", count: 980, color: "from-amber-500 to-pink-500" },
  { name: "Marketing", icon: "Megaphone", count: 540, color: "from-emerald-500 to-cyan-500" },
  { name: "Photography", icon: "Camera", count: 220, color: "from-rose-500 to-orange-500" },
  { name: "Music", icon: "Music", count: 190, color: "from-blue-500 to-indigo-500" },
];

export const TESTIMONIALS = [
  { name: "Jenna L.", role: "Frontend Engineer", quote: "The platform completely changed how I learn. The UI alone makes me want to study every day.", avatar: "https://i.pravatar.cc/100?img=32" },
  { name: "Marcus W.", role: "Product Designer", quote: "I went from junior to senior in 9 months. The instructors are world-class.", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Priya S.", role: "Data Scientist", quote: "AI recommendations actually nailed what I needed next. Loved every minute.", avatar: "https://i.pravatar.cc/100?img=47" },
];

export const FAQ = [
  { q: "Can I learn at my own pace?", a: "Yes, every course is self-paced and yours forever after enrollment." },
  { q: "Do I get a certificate?", a: "Verified certificates are awarded for every completed course and shareable on LinkedIn." },
  { q: "Is there a free trial?", a: "Absolutely. The Starter plan is free forever with access to dozens of curated courses." },
  { q: "Can I download courses for offline?", a: "Pro and Teams members can download lectures via the mobile app for offline learning." },
  { q: "Do you offer team plans?", a: "Yes — flexible Teams pricing with admin dashboards, SSO and analytics." },
];

export const PRICING = [
  { name: "Starter", price: 0, tag: "Free forever", features: ["Access to 50+ courses", "Community discussions", "Basic certificates", "Mobile app"], highlight: false },
  { name: "Pro", price: 19, tag: "Most popular", features: ["Unlimited courses", "AI recommendations", "Verified certificates", "Offline downloads", "Priority support"], highlight: true },
  { name: "Teams", price: 49, tag: "Per seat / month", features: ["Everything in Pro", "Admin dashboard", "SSO + SCIM", "Custom learning paths", "Dedicated CSM"], highlight: false },
];
