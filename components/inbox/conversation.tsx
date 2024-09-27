const Conversation = () => {
  return (
    <div>
      <article className="flex flex-col bg-white items-start gap-2 p-3 text-sm text-left transition-all border rounded-lg hover:bg-accent">
        <div className="flex items-center w-full">
          <div className="font-semibold">Support Team</div>
          <div className="ml-auto text-xs text-muted-foreground">
            3 days ago
          </div>
        </div>
        <div className="text-xs font-medium">Important Update</div>
        <div className="text-xs line-clamp-2 text-muted-foreground">
          Hello, we have important updates regarding your account security.
          Please review the changes in your dashboard.
        </div>
      </article>
    </div>
  );
};

export default Conversation;
