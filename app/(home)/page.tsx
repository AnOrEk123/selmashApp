import { slides } from "@/shared/data/slides.data"
import { Slider } from "../components/slider";

export default function Home() {
  return (
    <div className="pt-20">
      <Slider slides={slides}/>
    </div>
  );
}
