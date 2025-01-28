export function formatTradeType(
  type: string | undefined,
  coinName: string | undefined
) {
  if (type === "BUY") {
    return `Cash to ${coinName}`;
  } else if (type === "SELL") {
    return `${coinName} to Cash`;
  } else {
    return "";
  }
}
