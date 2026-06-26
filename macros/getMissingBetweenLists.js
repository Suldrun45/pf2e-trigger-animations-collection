//Use this in browser but pass in 2 lists with an item on each new line and get the combo of them that's missing
function getMissing(a, b) {
  const [aSplit, bSplit] = [a.split("\n"), b.split("\n")];
  console.log(
    " - [ ] " +
      bSplit.filter((item) => !aSplit.includes(item)).join("\n - [ ]"),
  );
}
