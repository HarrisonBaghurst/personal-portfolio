const disposableDomains = new Set([
    "0-mail.com",
    "10minutemail.com",
    "20minutemail.com",
    "33mail.com",
    "disposablemail.com",
    "dispostable.com",
    "emailondeck.com",
    "fakeinbox.com",
    "getairmail.com",
    "getnada.com",
    "guerrillamail.com",
    "guerrillamail.info",
    "inboxbear.com",
    "mailcatch.com",
    "maildrop.cc",
    "mailinator.com",
    "mailnesia.com",
    "mintemail.com",
    "moakt.com",
    "mohmal.com",
    "sharklasers.com",
    "spam4.me",
    "temp-mail.org",
    "tempmail.com",
    "tempmailo.com",
    "throwawaymail.com",
    "trashmail.com",
    "yopmail.com",
]);

export const isDisposableEmail = (email: string) => {
    const domain = email.split("@").at(-1)?.toLowerCase();

    return domain ? disposableDomains.has(domain) : false;
};

const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

export const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (character) => htmlEntities[character]);

export const stripHeaderInjection = (value: string) =>
    value.replace(/[\r\n]+/g, " ").trim();
