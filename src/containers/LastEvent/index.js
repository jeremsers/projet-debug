import { useData } from "../../contexts/DataContext";
import EventCard from "../../components/EventCard";


function LastEvent() {
    const { data } = useData()
    const byDateDesc = data?.events.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
    const check = byDateDesc?.slice(0)[0]
   
    
    return (  
        <EventCard
        imageSrc={check?.cover ? check?.cover : "loading"}
        title={check?.title ? check?.title : "loading"}
        date={new Date(check?.date)}
        small
        label={check?.type ? check?.type : "loading"}
      /> 
    );
}

export default LastEvent;