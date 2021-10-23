const rootElement = document.documentElement;
const styles = getComputedStyle(rootElement);
const mainColor = styles.getPropertyValue("--main-bg");
console.log(String(mainColor).trim());