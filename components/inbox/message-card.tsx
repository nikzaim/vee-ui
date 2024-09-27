const MessageCard = () => {
  return (
    <article className="flex flex-col bg-app/5 items-start gap-2 p-3 text-sm text-left transition-all border rounded-lg w-[80%]">
      <div className="flex items-center w-full">
        <h1 className="font-semibold">John Doe</h1>
        <div className="ml-auto text-xs text-muted-foreground">11 minutes</div>
      </div>
      <div className="text-muted-foreground">
        Hello, we have important updates regarding your account security. Please
        review the changes in your dashboard.
      </div>
    </article>
  );
};

export default MessageCard;
