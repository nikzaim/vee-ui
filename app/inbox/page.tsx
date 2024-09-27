import Conversation from '@/components/inbox/conversation';
import PageContainer from '@/components/layout/page-container';

const InboxPage = () => {
  return (
    <PageContainer>
      <h1>Inbox</h1>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </PageContainer>
  );
};

export default InboxPage;
