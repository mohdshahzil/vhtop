import achievement from "@/assets/achievement.png";
import { StaticImageData } from "next/image";
import lightning from "@/assets/lightning.png";
interface dummyData {
  id: number;
  title: string;
  icon: StaticImageData;
  content: string[];
}
const dummyData: dummyData[] = [
  {
    id: 1,
    title: "Vellore Institue of technology(VIT),",
    icon: achievement,
    content: [
      "Ranked among the top 601-700 Universities of the world and one among the top 3 Institutions in India (Shanghai ARWU Ranking 2022)",
      "The 8th best University, the 11th best research institution and the 11th best engineering institution in India (NIRF Ranking, Govt. of India 2023)",
      "NAAC Accreditation with A++ grade (3.66 out of 4)",
    ],
  },
  {
    id: 2,
    title: "Spotlight",
    icon: lightning,
    content: [
      "FAT SCHEDULE FOR THE RESEARCH COURSEWORK EXAMINATION - WINTER SEMESTER - 2023-24",
      "GUIDELINES FOR “NATURE OF MALPRACTICE VS PUNISHMENT",
    ],
  },
];

export default dummyData;
