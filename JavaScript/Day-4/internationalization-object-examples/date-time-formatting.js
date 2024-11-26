function multiLangDateTimeFormatter(value, locale = "en-IN") {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    dayPeriod: "short",
    numberingSystem: "hans",
  }).format(new Date(value));
}

function currencyFormatter(value, locale = "en-IN", currencyCode = "INR") {
  return new Intl.NumberFormat(locale, {
    currencyDisplay: "symbol",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
  }).format(value);
}

console.log(currencyFormatter(1000, "es-ES", "EUR"));

console.log(multiLangDateTimeFormatter(new Date(), "gu-IN"));
