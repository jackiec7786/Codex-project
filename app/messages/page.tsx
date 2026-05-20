import { BottomNav, Header, chats } from "../../components/ui";

export default function MessagesPage() {
  return (
    <>
      <div className="desktop shell messages-shell">
        <Header />
        <main className="panel messages-grid">
          <section className="conversation-list">
            <h2>Messages</h2>
            <div className="search-mini">⌕ Search messages...</div>
            {chats.map(([name,msg,time,badge]) => <article key={name}><span className="avatar tiny">{name[0]}</span><div><strong>{name}</strong><p>{msg}</p></div><small>{time}</small>{badge && <b>{badge}</b>}</article>)}
            <button className="linkish">View all conversations</button>
          </section>
          <section className="chat-window">
            <header><span className="avatar">🌴</span><div><strong>Alicia M.</strong><small>Active</small></div><b>♧　＋</b></header>
            <div className="product-pill"><span>▣</span><div><strong>iPhone 13 Pro 128GB</strong><b>$1,650</b></div></div>
            <div className="bubble left">Hi! Is the iPhone still available?</div>
            <div className="bubble right">Yes, it is! Are you interested?</div>
            <div className="bubble left">Yes. Can we meet in St. George&apos;s tomorrow?</div>
            <div className="bubble right">Sure, I&apos;m available after 3PM.</div>
            <div className="composer">Type a message... <button>➤</button></div>
          </section>
        </main>
      </div>

      <div className="mobile mobile-page messages-mobile">
        <div className="mobile-top"><span></span><strong>Messages</strong><span>◩</span></div>
        <section className="message-list">
          {chats.map(([name,msg,time,badge]) => <article key={name}><span className="avatar tiny">{name[0]}</span><div><strong>{name}</strong><p>{msg}</p></div><small>{time}</small>{badge && <b>{badge}</b>}</article>)}
        </section>
        <BottomNav active="Messages" />
      </div>
    </>
  );
}
