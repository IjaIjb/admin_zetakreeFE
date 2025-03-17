import { lazy } from "react";

// Main dashboard pages
const HomePage = lazy(() => import("../dashboard/home/Home"));
const UserManagementPage = lazy(() => import("../dashboard/user-management/UserManagement"));
const StatisticsPage = lazy(() => import("../dashboard/statistics/Statistics"));
const SubscriptionPage = lazy(() => import("../dashboard/subscription/Subscription"));
const AIHealthPage = lazy(() => import("../dashboard/ai-health/AIHealth"));
const TeleconsultationPage = lazy(() => import("../dashboard/teleconsultation/Teleconsultation"));
const RewardsPage = lazy(() => import("../dashboard/rewards/Rewards"));
const ContentPage = lazy(() => import("../dashboard/content/Content"));
const CompliancePage = lazy(() => import("../dashboard/compliance/Compliance"));
const SystemPage = lazy(() => import("../dashboard/system/System"));

// User Management sub-pages
// const UserProfilesPage = lazy(() => import("../dashboard/user-management/UserProfiles"));
// const UserActivityPage = lazy(() => import("../dashboard/user-management/UserActivity"));
// const SubscriptionHistoryPage = lazy(() => import("../dashboard/user-management/SubscriptionHistory"));
// const DoctorVerificationPage = lazy(() => import("../dashboard/user-management/DoctorVerification"));
// const ReferralTrackingPage = lazy(() => import("../dashboard/user-management/ReferralTracking"));

// Subscription & Payments sub-pages
// const ActiveSubscriptionsPage = lazy(() => import("../dashboard/subscription/ActiveSubscriptions"));
// const PaymentTransactionsPage = lazy(() => import("../dashboard/subscription/PaymentTransactions"));
// const PromoCodesPage = lazy(() => import("../dashboard/subscription/PromoCodes"));
// const RefundsPage = lazy(() => import("../dashboard/subscription/Refunds"));

// AI & Health Data sub-pages
// const SkinCareAIPage = lazy(() => import("../dashboard/ai-health/SkinCareAI"));
// const VitalCheckAIPage = lazy(() => import("../dashboard/ai-health/VitalCheckAI"));
// const HealthReportsPage = lazy(() => import("../dashboard/ai-health/HealthReports"));
// const UsageStatisticsPage = lazy(() => import("../dashboard/ai-health/UsageStatistics"));

// Support page
// const SupportPage = lazy(() => import("../dashboard/support/Support"));

const routes = [
  // Main dashboard routes
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/dashboard/home",
    component: HomePage,
  },
  {
    path: "/dashboard/user-management",
    component: UserManagementPage,
  },
  {
    path: "/dashboard/statistics",
    component: StatisticsPage,
  },
  {
    path: "/dashboard/subscription",
    component: SubscriptionPage,
  },
  {
    path: "/dashboard/ai-health",
    component: AIHealthPage,
  },
  {
    path: "/dashboard/teleconsultation",
    component: TeleconsultationPage,
  },
  {
    path: "/dashboard/rewards",
    component: RewardsPage,
  },
  {
    path: "/dashboard/content",
    component: ContentPage,
  },
  {
    path: "/dashboard/compliance",
    component: CompliancePage,
  },
  {
    path: "/dashboard/system",
    component: SystemPage,
  },
  
  // User Management sub-routes
  // {
  //   path: "/dashboard/user-management/profiles",
  //   component: UserProfilesPage,
  // },
  // {
  //   path: "/dashboard/user-management/activity",
  //   component: UserActivityPage,
  // },
  // {
  //   path: "/dashboard/user-management/subscription-history",
  //   component: SubscriptionHistoryPage,
  // },
  // {
  //   path: "/dashboard/user-management/doctor-verification",
  //   component: DoctorVerificationPage,
  // },
  // {
  //   path: "/dashboard/user-management/referral-tracking",
  //   component: ReferralTrackingPage,
  // },
  
  // Subscription & Payments sub-routes
  // {
  //   path: "/dashboard/subscription/active",
  //   component: ActiveSubscriptionsPage,
  // },
  // {
  //   path: "/dashboard/subscription/transactions",
  //   component: PaymentTransactionsPage,
  // },
  // {
  //   path: "/dashboard/subscription/promo-codes",
  //   component: PromoCodesPage,
  // },
  // {
  //   path: "/dashboard/subscription/refunds",
  //   component: RefundsPage,
  // },
  
  // AI & Health Data sub-routes
  // {
  //   path: "/dashboard/ai-health/skin-care",
  //   component: SkinCareAIPage,
  // },
  // {
  //   path: "/dashboard/ai-health/vital-check",
  //   component: VitalCheckAIPage,
  // },
  // {
  //   path: "/dashboard/ai-health/reports",
  //   component: HealthReportsPage,
  // },
  // {
  //   path: "/dashboard/ai-health/usage",
  //   component: UsageStatisticsPage,
  // },
  
  // Support page
  // {
  //   path: "/dashboard/support",
  //   component: SupportPage,
  // },
];

export default routes;