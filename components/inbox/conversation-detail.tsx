import { ScrollArea } from '../ui/scroll-area';
import MessageCard from './message-card';

const ConversationDetail = () => {
  return (
    <ScrollArea className="h-[70vh]">
      <div className="flex flex-col gap-4 ">
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </ScrollArea>
  );
};

export default ConversationDetail;
