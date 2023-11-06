export default function LoadingPage(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={`/images/Spinner.gif`}
        alt={"로딩중"}
        style={{ width: "13%", height: "30%", margin: "0 auto" }}
      />
    </div>
  );
}
