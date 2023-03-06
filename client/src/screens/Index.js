import React from "react";
import AbsenceGlobal from "./AbsenceGlobal";
import Dashboard from "./Dashboard";
import HomeAdmin from "./HomeAdmin";
import HomeTech from "./HomeTech";
import Login from "./Login";
import QualityDashboard from "./QualityDashboard";
import ScheduleInternchange from "./ScheduleInternchange";
import StaffDashboard from "./StaffDashboard";
import Team from "./Team";
import TimeManagementDashboard from "./TimeManagementDashboard";
import TimeManagement from "./TimeMangement";
import Transport from "./Transport";
import UserAbsence from "./UserAbsence";
import UserHome from "./UserHome";
import Vacation from "./Vacation";
import Welcome from "./Welcome";
import Myschedule from "./Myschedule";
import Wellness from "./Wellness";
import AbsenceGlobaladmin from "./AbsenceGlobaladmin";
import Schedulerequest from "../screens/Schedulerequest";
import Trasporthome from "../screens/Trasporthome";
import Rideto from "../screens/Rideto";
import Pickup from "../screens/Pickup";
import Ops from "../OPs";
export const HomeAdminScreen = () => <HomeAdmin name="Home" />;
export const DashboardScreen = () => <Dashboard name="Dashboard" />;
export const TimeManagementDashboardScreen = () => (
  <TimeManagementDashboard name="TimeManagementDashboard" />
);
export const StaffDashboardScreen = () => (
  <StaffDashboard name="StaffDashboard" />
);
export const AbsenceGlobalScreen = () => <AbsenceGlobal name="AbsenceGlobal" />;
export const HomeTechScreen = () => <HomeTech name="HomeTech" />;
export const TeamScreen = () => <Team name="Team" />;
export const TimeManagementScreen = () => (
  <TimeManagement name="TimeManagement" />
);
export const QualityDasshboardScreen = () => (
  <QualityDashboard name="QualityDasshboard" />
);
export const ScheduleInternchangeScreen = () => (
  <ScheduleInternchange name="ScheduleInternchange" />
);
export const VacationScreen = () => <Vacation name="Vacation" />;
export const UserAbsenceScreen = () => <UserAbsence name="UserAbsence" />;

export const LoginScreen = () => <Login name="Login" />;
export const WelcomeScreen = () => <Welcome name="Welcome" />;
export const UserHomeScreen = () => <UserHome name="UserHome" />;
export const TransportScreen = () => <Transport name="Transport" />;
export const MyscheduleScreen = () => <Myschedule name="Myschedule" />;
export const wellnessScreen = () => <Wellness name="Wellness" />;
export const AbsenceGlobaladminScreen = () => <AbsenceGlobaladmin name="AbsenceGlobaladmin" />;
export const Opsscreen = () => <Ops name="Ops" />;
export const Schedulerequestscreen = () => <Schedulerequest name="Schedulerequest" />;
export const TransporthomeScreen = () => <Trasporthome name="Trasporthome" />;
export const RidetoScreen = () => <Rideto name="Rideto" />;
export const PickupScreen = () => <Pickup name="Pickup" />;