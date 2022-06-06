import { useMoralis, useNativeBalance } from "react-moralis";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return null;
  console.log(balance);
  return (
    <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
      {/* {balance.formatted} */}
    </div>
  );
}

export default NativeBalance;
