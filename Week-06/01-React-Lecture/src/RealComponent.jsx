function RealComponent() {
  return (
    <div>
      <RealCard>
        <div>Hello world</div>
      </RealCard>

      <RealCard>
        <div>Kya bolti company</div>
      </RealCard>
    </div>
  );
}

function RealCard({ children }) {
  return (
    <div style={{ border: "solid 2px black", padding: "5px" }}>{children}</div>
  );
}

export default RealComponent;
