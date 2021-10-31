export default (e, route) => {
  navigator.clipboard.writeText(
    `${route ? window.location.href.split("#")[0] + "#" : ""}${e}`
  );
};
