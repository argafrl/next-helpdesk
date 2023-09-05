async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets");
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => {
        <div key={ticket.id} className="my-5 card">
          <h3>{tickets.title}</h3>
          <p>{ticket.body.slice(0, 150)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
          {tickets.length === 0 && (
            <p className="italic text-center">There are no open tickets</p>
          )}
        </div>;
      })}
    </>
  );
}
