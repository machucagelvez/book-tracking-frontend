import { useMemo } from "react";
import { useSearchParams } from "react-router";

export const useHomePageParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const readingStatus = searchParams.get("reading_status") ?? null;

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "reading", "readed", "pending", "dropped"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  return { setSearchParams, page, limit, readingStatus, selectedTab };
};
