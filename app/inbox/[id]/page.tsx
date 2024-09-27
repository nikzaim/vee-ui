import ConversationDetail from '@/components/inbox/conversation-detail';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizontal } from 'lucide-react';

const ConversationPage = () => {
  return (
    <PageContainer>
      <h1>Conversation</h1>
      <ConversationDetail />
      <div className="flex bg-app/30 left-0 bottom-0 w-full p-8 absolute z-50 gap-4">
        <Input type="text" placeholder="Type your message..."></Input>
        <Button size={'icon'} className="rounded-full">
          <SendHorizontal size={18} />
        </Button>
      </div>
    </PageContainer>
  );
};

export default ConversationPage;
