import FoodKingLayout from "@/layouts/FoodKingLayout";
import HomePage from "@/components/HomePage";
import VacationNotice from "@/components/VacationNotice";
import { VACATION_MODE, REOPEN_LABEL } from "@/config/vacation";

export const metadata = VACATION_MODE
  ? {
      title: `On Vacation — Reopening ${REOPEN_LABEL}`,
      description: `The Wandering Rooster is closed for a short vacation and reopens ${REOPEN_LABEL} at 513 Greene Street in Key West. Online ordering is paused until then.`,
      openGraph: {
        title: `The Wandering Rooster is on vacation — back ${REOPEN_LABEL}`,
        description: `We're closed for a short break and reopening ${REOPEN_LABEL} in Key West.`,
      },
    }
  : {};

// While VACATION_MODE is on, the homepage is the vacation notice. Flip the flag
// in config/vacation.js on October 1 to bring the normal homepage back.
const Page = () => {
  if (VACATION_MODE) {
    return (
      <FoodKingLayout>
        <VacationNotice />
      </FoodKingLayout>
    );
  }

  return <HomePage />;
};

export default Page;
