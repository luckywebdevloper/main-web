window.top.addEventListener("message", function (msg) {
  const widget = document.getElementById("NewsWidget-ly3xa8z");

  if (!widget) return;

  const styles = msg.data?.styles;
  if (styles) {
    Object.keys(styles).forEach((key) =>
      widget.style.setProperty(key, styles[key])
    );
  }
});
