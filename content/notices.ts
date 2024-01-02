import { IconCloudStorm } from "@tabler/icons-react";

export type Notices = {
  noticeList: {
    title: string;
    body?: string;
    icon?: JSX.Element;
  }[];
  lastUpdated: string;
};

export const notices: Notices = {
  noticeList: [
    {
      title: "BEGINNER CLASSES",
      body: "Adult-Teen (13-49 yrs) Beginner Class starting January, 13, 2024 to be held on Saturdays 10:15-11:30 am until April 13, 2024. \n Adult (50 yrs. plus) Silver Crane Beginner Class starting January, 17, 2024 to be held on Wednesdays 5:30-6:30 pm until April 17, 2024. \n FIRST 2 CLASSES FREE TO TRY. NO class Jan. 20, 2024. The fee would be $65 for the entire term. Please email dalkarate@bellaliant.net to express your interest and we will provide next steps.",
    },
    {
      title: "NO CLASSES  SATURDAY JAN. 20, 2024",
    },
  ],
  lastUpdated: "Jan 1st, 2024",
};
